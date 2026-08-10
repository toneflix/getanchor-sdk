import { BaseApi } from '../BaseApi'
import type { Customer, CustomerInput, CustomerQuery, NextOfKinByCustomerIdAndNextOfKinIdParams, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class NextOfKinIndividual extends BaseApi {

    /**
     * Create Next Of Kin
     *
     * Create a next of kin
     *
     * HTTP POST /api/v1/individuals/{customerId}/next-of-kin
     * Operation ID: postApiV1IndividualsCustomerIdNextOfKin
     *
     * @param params customerId Type: UpdateParams
     * @param body Request body Type: CustomerInput
     * @returns Created Customer
     */
    async create (params: UpdateParams, body?: CustomerInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/individuals/{customerId}/next-of-kin', params, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List Next Of Kin
     *
     * List next of kin
     *
     * HTTP GET /api/v1/individuals/{customerId}/next-of-kin
     * Operation ID: getApiV1IndividualsCustomerIdNextOfKin
     *
     * @param params customerId Type: UpdateParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: UpdateParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/individuals/{customerId}/next-of-kin', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Update Next Of Kin
     *
     * Update a next of kin
     *
     * HTTP PATCH /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
     * Operation ID: patchApiV1IndividualsCustomerIdNextOfKinNextOfKinId
     *
     * @param params customerId; nextOfKinId Type: NextOfKinByCustomerIdAndNextOfKinIdParams
     * @param body Request body Type: CustomerInput
     * @returns Success Customer
     */
    async update (params: NextOfKinByCustomerIdAndNextOfKinIdParams, body?: CustomerInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}', params, {}),
            'PATCH',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Fetch Next Of Kin
     *
     * Get details of a next of kin
     *
     * HTTP GET /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
     * Operation ID: getApiV1IndividualsCustomerIdNextOfKinNextOfKinId
     *
     * @param params customerId; nextOfKinId Type: NextOfKinByCustomerIdAndNextOfKinIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async getGetOperation (params: NextOfKinByCustomerIdAndNextOfKinIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Delete Next Of Kin
     *
     * Delete a next of kin
     *
     * HTTP DELETE /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}
     * Operation ID: deleteApiV1IndividualsCustomerIdNextOfKinNextOfKinId
     *
     * @param params customerId; nextOfKinId Type: NextOfKinByCustomerIdAndNextOfKinIdParams
     * @returns Accepted Customer
     */
    async delete (params: NextOfKinByCustomerIdAndNextOfKinIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}', params, {}),
            'DELETE',
            {},
            {}
        )

        return data
    }
}