import { BaseApi } from '../BaseApi'
import type { Customer, RolloverParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class RolloverSaving extends BaseApi {

    /**
     * Rollover a Savings
     *
     * Operation to rollover a Savings
     *
     * HTTP POST /api/v1/savings/{savingsId}/rollover
     * Operation ID: postApiV1SavingsSavingsIdRollover
     *
     * @param params savingsId Type: RolloverParams
     * @returns Success Customer
     */
    async create (params: RolloverParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/{savingsId}/rollover', params, {}),
            'POST',
            {},
            {}
        )

        return data
    }
}