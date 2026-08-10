import { BaseApi } from '../BaseApi'
import type { BalanceBySubAccountIdParams, Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class SubAccountBalance extends BaseApi {

    /**
     * Fetch Sub Account Balance
     *
     * Fetch the balances of a SubAccount
     *
     * HTTP GET /api/v1/sub-accounts/balance/{subAccountId}
     * Operation ID: getApiV1SubAccountsBalanceSubAccountId
     *
     * @param params subAccountId Type: BalanceBySubAccountIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: BalanceBySubAccountIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts/balance/{subAccountId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}