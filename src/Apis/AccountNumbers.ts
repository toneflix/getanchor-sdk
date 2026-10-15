import type {
    AccountNumber,
    AccountNumberListQuery,
    AnchorCollection,
    AnchorDocument,
    IncludeQuery,
    RequestOptions,
} from '../types'

import { BaseApi } from '../BaseApi'

export class AccountNumbers extends BaseApi {
    /**
     * List the account numbers that point at a deposit account. Pass the deposit
     * account id as `AccountId`.
     *
     * HTTP GET /api/v1/account-numbers
     * @see https://docs.getanchor.co/docs/account-numbers
     * 
     * @param query 
     * @param options 
     * @returns 
     */
    async list(query?: AccountNumberListQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<AccountNumber>>('GET', '/api/v1/account-numbers', { query, options })
    }

    /**
     * Fetch one account number by id. Not in Anchor's reference, but served by
     * the API and verified against the sandbox.
     *
     * HTTP GET /api/v1/account-numbers/{accountNumberId}
     * @see https://docs.getanchor.co/docs/account-numbers
     * 
     * @param accountNumberId 
     * @param query 
     * @param options 
     * @returns 
     */
    async get(accountNumberId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<AccountNumber>>('GET', '/api/v1/account-numbers/{accountNumberId}', {
            params: { accountNumberId },
            query,
            options,
        })
    }
}
