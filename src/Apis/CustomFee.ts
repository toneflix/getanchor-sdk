import { BaseApi } from '../BaseApi'
import type { CustomFeeInput, Customer } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class CustomFee extends BaseApi {

    /**
     * Create Fee
     *
     * Charge a fee amount from an account.
     *
     * HTTP POST /api/v1/fee/custom-fee
     * Operation ID: postApiV1FeeCustomFee
     *
     * @param body Request body Type: CustomFeeInput
     * @returns Accepted Customer
     */
    async create (body: CustomFeeInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/fee/custom-fee', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}