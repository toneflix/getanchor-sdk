import { Http } from '@oapiex/sdk-kit'
import type { HttpMethod, UserConfig } from '@oapiex/sdk-kit'

export interface TransportRequest {
  method: HttpMethod
  url: string
  headers: Record<string, string>
  body?: unknown
  /**
   * The client's own config (base URL, timeout, default headers, debug level).
   * Without it the kit's process-wide config is used.
   */
  config?: UserConfig
}

export interface TransportResponse {
  status: number
  data: unknown
}

/**
 * The single seam between the SDK and the network. It reuses the kit's axios
 * instance (so base URL, timeout, default headers and debug logging behave the
 * same as every other oapiex SDK), scoped to the calling client's config, but
 * returns the whole response body, because Anchor's `included` array and error
 * payloads are dropped by `Http.send`.
 *
 * Tests replace `transport.send` instead of mocking axios.
 */
export const transport = {
  async send(request: TransportRequest): Promise<TransportResponse> {
    const response = await new Http(request.headers, request.body, request.config)
      .axiosApi()
      .request({
        url: request.url,
        method: request.method,
        data: request.body,
        validateStatus: () => true,
      })

    return { status: response.status, data: response.data }
  },
}
