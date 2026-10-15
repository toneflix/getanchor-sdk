import { BaseApi } from '../BaseApi'
import type { AnchorDocument, IncludeQuery, InboundTransfer, RequestOptions } from '../types'

export class InboundTransfers extends BaseApi {
  /**
   * Fetch a bank transfer received into one of your account numbers. This
   * replaces the retired `/api/v1/payments` endpoints for account numbers.
   *
   * HTTP GET /api/v1/inbound-transfers/{inboundTransferId}
   * @see https://docs.getanchor.co/docs/account-numbers#fund-deposit-account
   */
  async get(inboundTransferId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<InboundTransfer>>(
      'GET',
      '/api/v1/inbound-transfers/{inboundTransferId}',
      {
        params: { inboundTransferId },
        query,
        options,
      },
    )
  }
}
