import { BaseApi } from '../BaseApi'
import type { AccountByAccountIdParams, Customer, FreezeInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class FreezeAccount extends BaseApi {

    /**
     * Freeze Deposit Account
     *
     * Blocks a deposit account. An account.frozen event is sent when the request is successful.
     *
     * HTTP POST /api/v1/accounts/{accountId}/freeze
     * Operation ID: postApiV1AccountsAccountIdFreeze
     *
     * @param params accountId: Id of the account to be frozen Type: AccountByAccountIdParams
     * @param body Request body Type: FreezeInput
     * @returns Success Customer
     */
    async create (params: AccountByAccountIdParams, body?: FreezeInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/{accountId}/freeze', params, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}