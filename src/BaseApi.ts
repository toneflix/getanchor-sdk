import { BaseApi as KitBaseApi } from '@oapiex/sdk-kit'
import type { AuthConfig, HttpMethod } from '@oapiex/sdk-kit'

import { AnchorApiError } from './Errors'
import { transport } from './Transport'
import type { RequestOptions } from './types/common'

export interface ApiRequest {
  /** Values for `{placeholders}` in the path. */
  params?: Record<string, string>
  query?: object
  /**
   * The resource object to send. JSON bodies are wrapped in Anchor's `{ data }`
   * envelope; `FormData` is sent as-is.
   */
  body?: unknown
  options?: RequestOptions
  /**
   * Set to `false` to send the request without the configured API key. Used
   * by the card-details reveal, which authenticates with its own token.
   */
  auth?: false
}

export class BaseApi extends KitBaseApi {
  /**
   * Send a request to Anchor and return the response body as-is (the whole
   * JSON:API document, including `included` and `meta`).
   *
   * @param method
   * @param path
   * @param request
   */
  protected async request<T>(
    method: HttpMethod,
    path: string,
    request: ApiRequest = {},
  ): Promise<T> {
    await this.core.validateAccess()

    const url = this.core.builder.buildTargetUrl(
      path,
      request.params ?? {},
      serializeQuery(request.query),
    )
    const body =
      request.body === undefined || request.body instanceof FormData
        ? request.body
        : { data: request.body }
    let headers: Record<string, string> = { ...request.options?.headers }

    if (request.options?.idempotencyKey) {
      headers['x-anchor-idempotent-key'] = request.options.idempotencyKey
    }

    // This client's own config, so another SDK (or another Anchor client) in the
    // same process never lends this request its credentials or base URL.
    const config = this.core.getConfig()

    let targetUrl = url
    if (request.auth !== false) {
      ;({ headers, url: targetUrl } = await applyAuth({ method, url, headers, body }, config.auth))
    }

    const response = await transport.send({ method, url: targetUrl, headers, body, config })

    if (response.status >= 400) {
      throw AnchorApiError.fromResponse(response.status, response.data)
    }

    return response.data as T
  }
}

type Primitive = string | number | boolean

/**
 * Anchor reads list filters as flat query parameters (`?accountId=...&from=...`).
 * Drop empty values, join arrays with commas, and flatten nested objects into
 * `key[child]` pairs so the kit's builder never sees `undefined` or `[object Object]`.
 *
 * @param query
 * @param prefix
 */
export const serializeQuery = (query?: object, prefix?: string): Record<string, Primitive> => {
  const out: Record<string, Primitive> = {}

  for (const [key, value] of Object.entries(query ?? {})) {
    const name = prefix ? `${prefix}[${key}]` : key

    if (value === undefined || value === null || value === '') continue

    if (Array.isArray(value)) {
      if (value.length) out[name] = value.join(',')
    } else if (typeof value === 'object') {
      Object.assign(out, serializeQuery(value, name))
    } else {
      out[name] = value as Primitive
    }
  }

  return out
}

interface AuthTarget {
  method: HttpMethod
  url: string
  headers: Record<string, string>
  body?: unknown
}

const hasHeader = (headers: Record<string, string>, name: string) =>
  Object.keys(headers).some((key) => key.toLowerCase() === name.toLowerCase())

/**
 * Apply the configured auth the same way the kit's `Http` does. Anchor uses an
 * `x-anchor-key` API key header; bearer, basic and custom strategies are honoured
 * so callers can still swap auth through `core.setAuth()`.
 *
 * @param target
 */
const applyAuth = async (
  target: AuthTarget,
  configured: AuthConfig | AuthConfig[] | undefined,
): Promise<AuthTarget> => {
  const strategies: AuthConfig[] = configured
    ? Array.isArray(configured)
      ? configured
      : [configured]
    : []
  let next = { ...target, headers: { ...target.headers } }

  for (const auth of strategies) {
    switch (auth.type) {
      case 'apiKey': {
        const value = auth.prefix ? `${auth.prefix} ${auth.value}`.trim() : auth.value
        if (!value) break
        if (auth.in === 'query') {
          const separator = next.url.includes('?') ? '&' : '?'
          next.url = `${next.url}${separator}${encodeURIComponent(auth.name)}=${encodeURIComponent(value)}`
        } else if (!hasHeader(next.headers, auth.name)) {
          next.headers[auth.name] = value
        }
        break
      }
      case 'bearer':
        if (!hasHeader(next.headers, 'Authorization')) {
          next.headers.Authorization = `${auth.prefix ?? 'Bearer'} ${auth.token}`.trim()
        }
        break
      case 'oauth2':
        if (!hasHeader(next.headers, 'Authorization')) {
          next.headers.Authorization = `${auth.tokenType ?? 'Bearer'} ${auth.accessToken}`.trim()
        }
        break
      case 'basic':
        if (!hasHeader(next.headers, 'Authorization')) {
          const encoded = Buffer.from(`${auth.username}:${auth.password}`).toString('base64')
          next.headers.Authorization = `Basic ${encoded}`
        }
        break
      case 'custom': {
        const applied = await auth.apply({ ...next, params: {} })
        const extra = serializeQuery(applied.params)
        let url = applied.url
        if (Object.keys(extra).length) {
          const separator = url.includes('?') ? '&' : '?'
          url +=
            separator +
            new URLSearchParams(Object.entries(extra).map(([k, v]) => [k, String(v)])).toString()
        }
        next = { ...next, url, headers: applied.headers }
        break
      }
    }
  }

  return next
}
