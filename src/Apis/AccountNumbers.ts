import { BaseApi } from '../BaseApi'
import type { AccountNumber, AccountNumberListQuery, AnchorCollection, RequestOptions } from '../types'

export class AccountNumbers extends BaseApi {
    /**
     * List the account numbers that point at a deposit account. Pass the deposit
     * account id as `AccountId`.
     *
     * HTTP GET /api/v1/account-numbers
     * @see https://docs.getanchor.co/docs/account-numbers
     */
    async list (query?: AccountNumberListQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<AccountNumber>>('GET', '/api/v1/account-numbers', { query, options })
    }
}
