import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  CardPayment,
  CardPaymentListQuery,
  IncludeQuery,
  RequestOptions,
} from '../types'

export class CardPayments extends BaseApi {
  /**
   * List purchases, refunds and declines made with your cards. Paginated.
   *
   * HTTP GET /api/v1/card-payments
   * @see https://docs.getanchor.co/docs/card-payments
   */
  async list(query?: CardPaymentListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<CardPayment>>('GET', '/api/v1/card-payments', {
      query,
      options,
    })
  }

  /**
   * Fetch a card payment. Pass `include: 'CardPaymentHistory'` for its lifecycle entries.
   *
   * HTTP GET /api/v1/card-payments/{paymentId}
   * @see https://docs.getanchor.co/docs/card-payments
   */
  async get(paymentId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<CardPayment>>('GET', '/api/v1/card-payments/{paymentId}', {
      params: { paymentId },
      query,
      options,
    })
  }
}
