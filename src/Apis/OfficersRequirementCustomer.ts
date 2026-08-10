import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class OfficersRequirementCustomer extends BaseApi {

    /**
     * Officers Requirement
     *
     * Operation to get the officers requirement of a Business Customer
     *
     * HTTP GET /api/v1/customers/{customerId}/officers-requirement
     * Operation ID: getApiV1CustomersCustomerIdOfficersRequirement
     *
     * @param params customerId: Id of the customer Type: UpdateParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: UpdateParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/{customerId}/officers-requirement', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}