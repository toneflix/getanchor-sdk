import { Http } from '@oapiex/sdk-kit'
import type { HttpMethod } from '@oapiex/sdk-kit'

export interface TransportRequest {
  method: HttpMethod
  url: string
  headers: Record<string, string>
  body?: unknown
}

export interface TransportResponse {
  status: number
  data: unknown
}

/**
 * The single seam between the SDK and the network. It reuses the kit's axios
 * instance (so base URL, timeout, default headers and debug logging behave the
 * same as every other oapiex SDK) but returns the whole response body, because
 * Anchor's `included` array and error payloads are dropped by `Http.send`.
 *
 * Tests replace `transport.send` instead of mocking axios.
 */
export const transport = {
  async send(request: TransportRequest): Promise<TransportResponse> {
    const response = await new Http(request.headers, request.body).axiosApi().request({
      url: request.url,
      method: request.method,
      data: request.body,
      validateStatus: () => true,
    })

    return { status: response.status, data: response.data }
  },
}
