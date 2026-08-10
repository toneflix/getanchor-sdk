import { BaseApi } from '../BaseApi'
import type { AccountByAccountIdParams, Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Balance extends BaseApi {

    /**
     * Fetch Balance
     *
     * Fetch the balances of a deposit account by id.
     *
     * HTTP GET /api/v1/accounts/balance/{accountId}
     * Operation ID: getApiV1AccountsBalanceAccountId
     *
     * @param params accountId Type: AccountByAccountIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: AccountByAccountIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/balance/{accountId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}