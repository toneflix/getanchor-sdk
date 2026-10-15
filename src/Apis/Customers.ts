import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  CreateCustomerInput,
  Customer,
  CustomerListQuery,
  CustomerSearchQuery,
  IncludeQuery,
  MessageResource,
  OfficersRequirement,
  RequestOptions,
  UpdateCustomerInput,
  VerificationStarted,
  VerifyIndividualInput,
} from '../types'

export class Customers extends BaseApi {
  /**
   * Create an individual or business customer.
   *
   * HTTP POST /api/v1/customers
   * @see https://docs.getanchor.co/reference/post_api-v1-customers
   */
  async create(body: CreateCustomerInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Customer>>('POST', '/api/v1/customers', { body, options })
  }

  /**
   * List customers. Paginated.
   *
   * HTTP GET /api/v1/customers
   * @see https://docs.getanchor.co/reference/list-all-customer
   */
  async list(query?: CustomerListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Customer>>('GET', '/api/v1/customers', { query, options })
  }

  /**
   * Fetch a customer.
   *
   * HTTP GET /api/v1/customers/{customerId}
   * @see https://docs.getanchor.co/reference/fetch-customer
   */
  async get(customerId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Customer>>('GET', '/api/v1/customers/{customerId}', {
      params: { customerId },
      query,
      options,
    })
  }

  /**
   * Update a customer's contact and identification details.
   *
   * HTTP PUT /api/v1/customers/update/{customerId}
   * @see https://docs.getanchor.co/reference/put_api-v1-customers-update-customerid
   */
  async update(customerId: string, body: UpdateCustomerInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Customer>>('PUT', '/api/v1/customers/update/{customerId}', {
      params: { customerId },
      body,
      options,
    })
  }

  /**
   * Delete a customer.
   *
   * HTTP DELETE /api/v1/customers/{customerId}
   * @see https://docs.getanchor.co/reference/delete-customer
   */
  async delete(customerId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<MessageResource>>(
      'DELETE',
      '/api/v1/customers/{customerId}',
      {
        params: { customerId },
        options,
      },
    )
  }

  /**
   * Find an individual or business customer by BVN, email, phone number or RC number.
   *
   * HTTP GET /api/v1/customers/search
   * @see https://docs.getanchor.co/reference/search-customers
   */
  async search(query: CustomerSearchQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Customer>>('GET', '/api/v1/customers/search', {
      query,
      options,
    })
  }

  /**
   * Start Tier 2 or Tier 3 KYC for an individual customer. The outcome arrives
   * as `customer.identification.*` webhook events.
   *
   * HTTP POST /api/v1/customers/{customerId}/verification/individual
   * @see https://docs.getanchor.co/reference/kyc-validation
   */
  async verifyIndividual(
    customerId: string,
    body: VerifyIndividualInput,
    options?: RequestOptions,
  ) {
    return this.request<AnchorDocument<VerificationStarted>>(
      'POST',
      '/api/v1/customers/{customerId}/verification/individual',
      { params: { customerId }, body, options },
    )
  }

  /**
   * Start KYB for a business customer. Anchor follows up with
   * `customer.identification.awaitingDocument` listing the documents to upload.
   *
   * HTTP POST /api/v1/customers/{customerId}/verification/business
   * @see https://docs.getanchor.co/reference/kyc-validation_1
   */
  async verifyBusiness(customerId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<VerificationStarted>>(
      'POST',
      '/api/v1/customers/{customerId}/verification/business',
      { params: { customerId }, options },
    )
  }

  /**
   * The minimum number of directors and owners a business customer must declare.
   *
   * HTTP GET /api/v1/customers/{customerId}/officers-requirement
   * @see https://docs.getanchor.co/reference/officers-requirement
   */
  async officersRequirement(customerId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<OfficersRequirement>>(
      'GET',
      '/api/v1/customers/{customerId}/officers-requirement',
      { params: { customerId }, options },
    )
  }
}
