import { BaseApi } from '../BaseApi'
import type { Customer, CustomerInput, CustomerQuery, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class CustomerApi extends BaseApi {

    /**
     * Create Customer
     *
     * Endpoint to create Customer
     *
     * HTTP POST /api/v1/customers
     * Operation ID: postApiV1Customers
     *
     * @param body Request body Type: CustomerInput
     * @returns Success Customer
     */
    async create (body?: CustomerInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List all Customer
     *
     * Operation to list all the customers that exist in an organization
     *
     * HTTP GET /api/v1/customers
     * Operation ID: getApiV1Customers
     *
     * @param query customerType; include: This can be used to fetch related resources.; metadata; page: The page number of the requested page, defaults to 0; query; size: Number of records in each page, defaults to 20 Type: CustomerQuery
     * @returns Success Customer
     */
    async list (query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch customer
     *
     * Operation to get the details of a customer
     *
     * HTTP GET /api/v1/customers/{customerId}
     * Operation ID: getApiV1CustomersCustomerId
     *
     * @param params customerId: Id of the customer Type: UpdateParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: UpdateParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/{customerId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Delete Customer
     *
     * Operation to delete a Customer
     *
     * HTTP DELETE /api/v1/customers/{customerId}
     * Operation ID: deleteApiV1CustomersCustomerId
     *
     * @param params customerId: Id of the customer Type: UpdateParams
     * @returns Success Customer
     */
    async delete (params: UpdateParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/{customerId}', params, {}),
            'DELETE',
            {},
            {}
        )

        return data
    }
}