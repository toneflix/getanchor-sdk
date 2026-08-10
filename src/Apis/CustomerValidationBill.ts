import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, CustomerValidationParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class CustomerValidationBill extends BaseApi {

    /**
     * Verify Customer Details
     *
     * Validate customer's meter or smartcard number
     *
     * HTTP GET /api/v1/bills/customer-validation/{productSlug}/{customerId}
     * Operation ID: getApiV1BillsCustomerValidationProductSlugCustomerId
     *
     * @param params customerId; productSlug Type: CustomerValidationParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: CustomerValidationParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/bills/customer-validation/{productSlug}/{customerId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}