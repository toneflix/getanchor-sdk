import { BaseApi } from '../BaseApi'
import type { Customer, ReverseParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Reverse extends BaseApi {

    /**
     * Reverse Fee
     *
     * Reverse a fee charged to an account
     *
     * HTTP POST /api/v1/fee/reverse/{feeId}
     * Operation ID: postApiV1FeeReverseFeeId
     *
     * @param params feeId Type: ReverseParams
     * @returns Accepted Customer
     */
    async create (params: ReverseParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/fee/reverse/{feeId}', params, {}),
            'POST',
            {},
            {}
        )

        return data
    }
}