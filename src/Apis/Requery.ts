import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, RequeryParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Requery extends BaseApi {

    /**
     * Verify Incoming Payment
     *
     * Requery an incoming payment to a dynamic VirtualNuban using the reference
     *
     * HTTP GET /api/v1/payments/requery/{customerReference}
     * Operation ID: getApiV1PaymentsRequeryCustomerReference
     *
     * @param params customerReference: The customer reference Type: RequeryParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: RequeryParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/payments/requery/{customerReference}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}