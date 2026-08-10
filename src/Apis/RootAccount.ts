import { BaseApi } from '../BaseApi'
import type { Customer, RootAccountQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class RootAccount extends BaseApi {

    /**
     * List Root Accounts
     *
     * List your organisation's deposit accounts. Paging and filtering can be applied
     *
     * HTTP GET /api/v1/accounts/root-accounts
     * Operation ID: getApiV1AccountsRootAccounts
     *
     * @param query accountType; include: This can be used to fetch related resources. Type: RootAccountQuery
     * @returns Success Customer
     */
    async list (query: RootAccountQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/root-accounts', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}