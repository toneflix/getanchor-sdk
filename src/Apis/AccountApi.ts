import { BaseApi } from '../BaseApi'
import type { AccountApiQuery, AccountByAccountIdParams, Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class AccountApi extends BaseApi {

    /**
     * Create Deposit Account
     *
     * Creates a deposit account for a customer. An account.created event is sent when the request is successful.
     *
     * HTTP POST /api/v1/accounts
     * Operation ID: postApiV1Accounts
     * @returns Success Customer
     */
    async create (): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts', {}, {}),
            'POST',
            {},
            {}
        )

        return data
    }

    /**
     * List Deposit Accounts
     *
     * List all deposit accounts. Paging can be applied.
     *
     * HTTP GET /api/v1/accounts
     * Operation ID: getApiV1Accounts
     *
     * @param query accountId; accountType; customerId; include: This can be used to fetch related resources.; metadata; page: The page number of the requested page, defaults to 0; query; size: Number of records in each page, defaults to 20 Type: AccountApiQuery
     * @returns Success Customer
     */
    async list (query: AccountApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Update Deposit Account
     *
     * Update a deposit account.
     *
     * HTTP PATCH /api/v1/accounts/{accountId}
     * Operation ID: patchApiV1AccountsAccountId
     *
     * @param params accountId Type: AccountByAccountIdParams
     * @returns Success Customer
     */
    async update (params: AccountByAccountIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/{accountId}', params, {}),
            'PATCH',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Deposit Account
     *
     * Fetch the details of a deposit account by id.
     *
     * HTTP GET /api/v1/accounts/{accountId}
     * Operation ID: getApiV1AccountsAccountId
     *
     * @param params accountId Type: AccountByAccountIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: AccountByAccountIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/{accountId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}