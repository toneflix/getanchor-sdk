import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  IncludeQuery,
  NextOfKin as NextOfKinResource,
  NextOfKinInput,
  RequestOptions,
} from '../types'

export class NextOfKin extends BaseApi {
  /**
   * Add a next of kin to an individual customer.
   *
   * HTTP POST /api/v1/individuals/{customerId}/next-of-kin
   * @see https://docs.getanchor.co/reference/create-next-of-kin
   */
  async create(customerId: string, body: NextOfKinInput, options?: RequestOptions) {
    return this.request<AnchorDocument<NextOfKinResource>>(
      'POST',
      '/api/v1/individuals/{customerId}/next-of-kin',
      { params: { customerId }, body, options },
    )
  }

  /**
   * List an individual customer's next of kin.
   *
   * HTTP GET /api/v1/individuals/{customerId}/next-of-kin
   * @see https://docs.getanchor.co/reference/list-next-of-kin
   */
  async list(customerId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<NextOfKinResource>>(
      'GET',
      '/api/v1/individuals/{customerId}/next-of-kin',
      { params: { customerId }, query, options },
    )
  }

  /**
   * Fetch a next of kin.
   *
   * HTTP GET /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
   * @see https://docs.getanchor.co/reference/fetch-next-of-kin
   */
  async get(
    customerId: string,
    nextOfKinId: string,
    query?: IncludeQuery,
    options?: RequestOptions,
  ) {
    return this.request<AnchorDocument<NextOfKinResource>>(
      'GET',
      '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
      { params: { customerId, nextOfKinId }, query, options },
    )
  }

  /**
   * Update a next of kin.
   *
   * HTTP PATCH /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
   * @see https://docs.getanchor.co/reference/update-next-of-kin
   */
  async update(
    customerId: string,
    nextOfKinId: string,
    body: NextOfKinInput,
    options?: RequestOptions,
  ) {
    return this.request<AnchorDocument<NextOfKinResource>>(
      'PATCH',
      '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
      { params: { customerId, nextOfKinId }, body, options },
    )
  }

  /**
   * Delete a next of kin. Anchor answers `204 No Content`.
   *
   * HTTP DELETE /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
   * @see https://docs.getanchor.co/reference/delete-next-of-kin
   */
  async delete(customerId: string, nextOfKinId: string, options?: RequestOptions) {
    await this.request<unknown>(
      'DELETE',
      '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
      { params: { customerId, nextOfKinId }, options },
    )
  }
}
