import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  BillCustomerDetail,
  Biller,
  BillerListQuery,
  BillerProduct,
  BillListQuery,
  BillPayment,
  CreateBillInput,
  IncludeQuery,
  RequestOptions,
} from '../types'

export class Bills extends BaseApi {
  /**
   * Pay for airtime, data, electricity or cable TV from a deposit account.
   * The outcome arrives as `billpayment.successful` or `billpayment.failed`.
   *
   * HTTP POST /api/v1/bills
   * @see https://docs.getanchor.co/reference/post_api-v1-bills
   */
  async create(body: CreateBillInput, options?: RequestOptions) {
    return this.request<AnchorDocument<BillPayment>>('POST', '/api/v1/bills', { body, options })
  }

  /**
   * List bill payments. Paginated.
   *
   * HTTP GET /api/v1/bills
   * @see https://docs.getanchor.co/reference/list-bill-payments
   */
  async list(query?: BillListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<BillPayment>>('GET', '/api/v1/bills', { query, options })
  }

  /**
   * Fetch a bill payment.
   *
   * HTTP GET /api/v1/bills/{billPaymentId}
   * @see https://docs.getanchor.co/reference/get-bill-payment-transaction
   */
  async get(billPaymentId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<BillPayment>>('GET', '/api/v1/bills/{billPaymentId}', {
      params: { billPaymentId },
      query,
      options,
    })
  }

  /**
   * List billers, optionally by category. Paginated.
   *
   * HTTP GET /api/v1/bills/billers
   * @see https://docs.getanchor.co/reference/list-billers
   */
  async billers(query?: BillerListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Biller>>('GET', '/api/v1/bills/billers', {
      query,
      options,
    })
  }

  /**
   * List a biller's products, with their slugs and price ranges.
   *
   * HTTP GET /api/v1/bills/billers/{billerId}/products
   * @see https://docs.getanchor.co/reference/list-biller-products
   */
  async products(billerId: string, options?: RequestOptions) {
    return this.request<AnchorCollection<BillerProduct>>(
      'GET',
      '/api/v1/bills/billers/{billerId}/products',
      {
        params: { billerId },
        options,
      },
    )
  }

  /**
   * Confirm the name on a smart card or meter number before paying.
   *
   * HTTP GET /api/v1/bills/customer-validation/{productSlug}/{customerId}
   * @see https://docs.getanchor.co/reference/enquiry-customer-name
   */
  async validateCustomer(productSlug: string, customerId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<BillCustomerDetail>>(
      'GET',
      '/api/v1/bills/customer-validation/{productSlug}/{customerId}',
      { params: { productSlug, customerId }, options },
    )
  }
}
