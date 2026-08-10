import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class BankApi extends BaseApi {

    /**
     * List Banks
     *
     * List all banks
     *
     * HTTP GET /api/v1/banks
     * Operation ID: getApiV1Banks
     *
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async list (query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/banks', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}