import { BaseApi } from '../BaseApi'
import type { Customer, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Update extends BaseApi {

    /**
     * Update Customer
     *
     * Endpoint to Update Customer
     *
     * HTTP PUT /api/v1/customers/update/{customerId}
     * Operation ID: putApiV1CustomersUpdateCustomerId
     *
     * @param params customerId Type: UpdateParams
     * @returns Success Customer
     */
    async update (params: UpdateParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/update/{customerId}', params, {}),
            'PUT',
            {},
            {}
        )

        return data
    }
}