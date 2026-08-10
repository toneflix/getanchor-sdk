import { BaseApi } from '../BaseApi'
import type { BulkInput, Customer } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Bulk extends BaseApi {

    /**
     * Bulk Create Counterparties
     *
     * Create multiple counterparties in one request.
     *
     * HTTP POST /api/v1/counterparties/bulk
     * Operation ID: postApiV1CounterpartiesBulk
     *
     * @param body Request body Type: BulkInput
     * @returns Created Customer
     */
    async create (body: BulkInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties/bulk', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}