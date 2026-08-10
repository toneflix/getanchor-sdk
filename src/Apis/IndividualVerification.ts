import { BaseApi } from '../BaseApi'
import type { Customer, IndividualInput, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class IndividualVerification extends BaseApi {

    /**
     * Kyc Validation for Individual Customer
     *
     * HTTP POST /api/v1/customers/{customerId}/verification/individual
     * Operation ID: postApiV1CustomersCustomerIdVerificationIndividual
     *
     * @param params customerId Type: UpdateParams
     * @param body Request body Type: IndividualInput
     * @returns Success Customer
     */
    async create (params: UpdateParams, body?: IndividualInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/{customerId}/verification/individual', params, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}