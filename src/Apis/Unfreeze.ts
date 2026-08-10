import { BaseApi } from '../BaseApi'
import type { Customer, UnfreezeInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Unfreeze extends BaseApi {

    /**
     * Unfreeze Deposit Account
     *
     * Unblock a deposit account.
     *
     * HTTP POST /api/v1/accounts/unfreeze
     * Operation ID: postApiV1AccountsUnfreeze
     *
     * @param body Request body Type: UnfreezeInput
     * @returns Success Customer
     */
    async create (body: UnfreezeInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/accounts/unfreeze', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}