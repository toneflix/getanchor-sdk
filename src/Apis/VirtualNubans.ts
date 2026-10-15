import type { AnchorDocument, IncludeQuery, RequestOptions, VirtualNuban } from '../types'

import { BaseApi } from '../BaseApi'

export class VirtualNubans extends BaseApi {
  /**
   * Fetch a virtual NUBAN: the 10-digit account number behind a sub-account,
   * with its bank and a `subAccount` relationship. Sub-accounts only expose
   * the NUBAN's id, so this is how you read the number customers pay into.
   * Not in Anchor's reference, but served by the API and verified against
   * the sandbox.
   *
   * HTTP GET /api/v1/virtual-nubans/{virtualNubanId}
   * @see https://docs.getanchor.co/reference/sub-account
   *
   * @param virtualNubanId
   * @param query
   * @param options
   * @returns
   */
  async get(virtualNubanId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<VirtualNuban>>(
      'GET',
      '/api/v1/virtual-nubans/{virtualNubanId}',
      {
        params: { virtualNubanId },
        query,
        options,
      },
    )
  }
}
