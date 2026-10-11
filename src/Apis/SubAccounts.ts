import { BaseApi } from '../BaseApi'
import type {
    AccountBalance,
    AnchorCollection,
    AnchorDocument,
    IncludeQuery,
    RequestOptions,
    SubAccount,
    SubAccountInput,
    SubAccountListQuery,
    SubAccountTransactionQuery,
    Transaction,
} from '../types'

export class SubAccounts extends BaseApi {
    /**
     * Create a sub account (subledger) under a deposit account.
     *
     * HTTP POST /api/v1/sub-accounts
     * @see https://docs.getanchor.co/reference/create-a-subaccount
     */
    async create (body: SubAccountInput, options?: RequestOptions) {
        return this.request<AnchorDocument<SubAccount>>('POST', '/api/v1/sub-accounts', { body, options })
    }

    /**
     * List sub accounts. Paginated.
     *
     * HTTP GET /api/v1/sub-accounts
     * @see https://docs.getanchor.co/reference/list-subaccount
     */
    async list (query?: SubAccountListQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<SubAccount>>('GET', '/api/v1/sub-accounts', { query, options })
    }

    /**
     * Fetch a sub account.
     *
     * HTTP GET /api/v1/sub-accounts/{subAccountId}
     * @see https://docs.getanchor.co/reference/fetch-by-subaccount-id
     */
    async get (subAccountId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<SubAccount>>('GET', '/api/v1/sub-accounts/{subAccountId}', {
            params: { subAccountId },
            query,
            options,
        })
    }

    /**
     * Update a sub account.
     *
     * HTTP PATCH /api/v1/sub-accounts/{subAccountId}
     * @see https://docs.getanchor.co/reference/updatesubaccount
     */
    async update (subAccountId: string, body: SubAccountInput, options?: RequestOptions) {
        return this.request<AnchorDocument<SubAccount>>('PATCH', '/api/v1/sub-accounts/{subAccountId}', {
            params: { subAccountId },
            body,
            options,
        })
    }

    /**
     * Fetch a sub account's balances (minor units).
     *
     * HTTP GET /api/v1/sub-accounts/balance/{subAccountId}
     * @see https://docs.getanchor.co/reference/getaccountbalance_1
     */
    async balance (subAccountId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<AccountBalance>>('GET', '/api/v1/sub-accounts/balance/{subAccountId}', {
            params: { subAccountId },
            options,
        })
    }

    /**
     * List sub account transactions. Paginated.
     *
     * HTTP GET /api/v1/sub-accounts/transactions
     * @see https://docs.getanchor.co/reference/list-subaccount-transactions
     */
    async transactions (query?: SubAccountTransactionQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<Transaction>>('GET', '/api/v1/sub-accounts/transactions', {
            query,
            options,
        })
    }
}
