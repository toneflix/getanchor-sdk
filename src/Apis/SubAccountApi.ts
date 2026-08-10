import { BaseApi } from '../BaseApi'
import type { BalanceBySubAccountIdParams, Customer, CustomerQuery, PaymentApiQuery, UnfreezeInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class SubAccountApi extends BaseApi {

    /**
     * Create a SubAccount
     *
     * Operation to create a SubAccount
     *
     * HTTP POST /api/v1/sub-accounts
     * Operation ID: postApiV1SubAccounts
     *
     * @param body Request body Type: UnfreezeInput
     * @returns Created Customer
     */
    async create (body: UnfreezeInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List SubAccount
     *
     * Operation to list SubAccounts
     *
     * HTTP GET /api/v1/sub-accounts
     * Operation ID: getApiV1SubAccounts
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch by SubAccount Id
     *
     * Operation to details of a SubAccount by Id
     *
     * HTTP GET /api/v1/sub-accounts/{subAccountId}
     * Operation ID: getApiV1SubAccountsSubAccountId
     *
     * @param params subAccountId: Id of the SubAccount Type: BalanceBySubAccountIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: BalanceBySubAccountIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts/{subAccountId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Update Sub Account
     *
     * Update details of a Sub Account
     *
     * HTTP PATCH /api/v1/sub-accounts/{subAccountId}
     * Operation ID: patchApiV1SubAccountsSubAccountId
     *
     * @param params subAccountId Type: BalanceBySubAccountIdParams
     * @returns Success Customer
     */
    async update (params: BalanceBySubAccountIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts/{subAccountId}', params, {}),
            'PATCH',
            {},
            {}
        )

        return data
    }
}