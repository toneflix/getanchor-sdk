import type { AnchorDocument, IncludeQuery, Payment, RequestOptions } from '../types'

import { BaseApi } from '../BaseApi'

export class Payments extends BaseApi {
  /**
   * Fetch a payment received into a virtual NUBAN, such as a sub-account's
   * account number. Pass `include: 'VirtualNuban'` to get the receiving account
   * number in the same call.
   *
   * Anchor's changelog lists the `/api/v1/payments` endpoints as retired, but
   * deposits into sub-account NUBANs are still `Payment` resources that the
   * documented replacement (`inboundTransfers.get`) does not serve, and this
   * lookup still answers (verified against the sandbox, October 2026). Prefer
   * the resources a webhook carries in `included`, and keep this as the fallback.
   *
   * HTTP GET /api/v1/payments/{paymentId}
   * @see https://docs.getanchor.co/changelog/deprecation-of-legacy-payment-endpoints
   *
   * @param paymentId
   * @param query
   * @param options
   * @returns
   */
  async get(paymentId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Payment>>('GET', '/api/v1/payments/{paymentId}', {
      params: { paymentId },
      query,
      options,
    })
  }
}
