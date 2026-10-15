import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  Counterparty,
  CounterpartyListQuery,
  CreateBulkCounterpartyInput,
  CreateCounterpartyInput,
  IncludeQuery,
  MessageResource,
  RequestOptions,
  UpdateCounterpartyInput,
} from '../types'

export class Counterparties extends BaseApi {
  /**
   * Save an external bank account as a transfer beneficiary.
   *
   * HTTP POST /api/v1/counterparties
   * @see https://docs.getanchor.co/reference/post_api-v1-counterparties
   */
  async create(body: CreateCounterpartyInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Counterparty>>('POST', '/api/v1/counterparties', {
      body,
      options,
    })
  }

  /**
   * Save several counterparties in one request.
   *
   * HTTP POST /api/v1/counterparties/bulk
   * @see https://docs.getanchor.co/reference/createbulkcounterparty
   */
  async createBulk(body: CreateBulkCounterpartyInput, options?: RequestOptions) {
    return this.request<AnchorCollection<Counterparty>>('POST', '/api/v1/counterparties/bulk', {
      body,
      options,
    })
  }

  /**
   * List counterparties. Paginated.
   *
   * HTTP GET /api/v1/counterparties
   * @see https://docs.getanchor.co/reference/fetchcounterparties
   */
  async list(query?: CounterpartyListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Counterparty>>('GET', '/api/v1/counterparties', {
      query,
      options,
    })
  }

  /**
   * Fetch a counterparty.
   *
   * HTTP GET /api/v1/counterparties/{counterPartyId}
   * @see https://docs.getanchor.co/reference/getcounterparty
   */
  async get(counterPartyId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Counterparty>>(
      'GET',
      '/api/v1/counterparties/{counterPartyId}',
      {
        params: { counterPartyId },
        query,
        options,
      },
    )
  }

  /**
   * Update a counterparty.
   *
   * HTTP PATCH /api/v1/counterparties/{counterPartyId}
   * @see https://docs.getanchor.co/reference/updatecounterparty
   */
  async update(counterPartyId: string, body: UpdateCounterpartyInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Counterparty>>(
      'PATCH',
      '/api/v1/counterparties/{counterPartyId}',
      {
        params: { counterPartyId },
        body,
        options,
      },
    )
  }

  /**
   * Delete a counterparty.
   *
   * HTTP DELETE /api/v1/counterparties/{counterPartyId}
   * @see https://docs.getanchor.co/reference/delete-counterparty
   */
  async delete(counterPartyId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<MessageResource>>(
      'DELETE',
      '/api/v1/counterparties/{counterPartyId}',
      {
        params: { counterPartyId },
        options,
      },
    )
  }
}
