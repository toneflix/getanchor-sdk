import { BaseApi } from '../BaseApi'
import type { Customer, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class BusinessVerification extends BaseApi {

    /**
     * Kyc Validation for Business Customer
     *
     * HTTP POST /api/v1/customers/{customerId}/verification/business
     * Operation ID: postApiV1CustomersCustomerIdVerificationBusiness
     *
     * @param params customerId Type: UpdateParams
     * @returns Success Customer
     */
    async create (params: UpdateParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/{customerId}/verification/business', params, {}),
            'POST',
            {},
            {}
        )

        return data
    }
}