import { BaseApi } from '../BaseApi'
import type { BulkInput, Customer } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class VerifyAccountBulk extends BaseApi {

    /**
     * Bulk Verify Account Numbers
     *
     * Verify multiple account numbers in a single request. Returns the list of validated names
     *
     * HTTP POST /api/v1/payments/verify-account/bulk
     * Operation ID: postApiV1PaymentsVerifyAccountBulk
     *
     * @param body Request body Type: BulkInput
     * @returns Success Customer
     */
    async create (body: BulkInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/payments/verify-account/bulk', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}