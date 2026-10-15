import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  CustomFeeInput,
  Fee,
  FeeListQuery,
  RequestOptions,
} from '../types'

export class Fees extends BaseApi {
  /**
   * Debit a custom fee from a customer's deposit account.
   *
   * HTTP POST /api/v1/fee/custom-fee
   * @see https://docs.getanchor.co/reference/startcustomerfee
   */
  async charge(body: CustomFeeInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Fee>>('POST', '/api/v1/fee/custom-fee', { body, options })
  }

  /**
   * Refund a fee to the customer.
   *
   * HTTP POST /api/v1/fee/reverse/{feeId}
   * @see https://docs.getanchor.co/reference/reversefee
   */
  async reverse(feeId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<Fee>>('POST', '/api/v1/fee/reverse/{feeId}', {
      params: { feeId },
      options,
    })
  }

  /**
   * List fees charged to customers. Paginated.
   *
   * HTTP GET /api/v1/fee/charged-by-organization
   * @see https://docs.getanchor.co/reference/getcustomerfees
   */
  async list(query?: FeeListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Fee>>('GET', '/api/v1/fee/charged-by-organization', {
      query,
      options,
    })
  }

  /**
   * Fetch a fee charged to a customer.
   *
   * HTTP GET /api/v1/fee/charged-by-organization/{feeId}
   * @see https://docs.getanchor.co/reference/getcustomerfee
   */
  async get(feeId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<Fee>>('GET', '/api/v1/fee/charged-by-organization/{feeId}', {
      params: { feeId },
      options,
    })
  }
}
