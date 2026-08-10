import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, ProductParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class BillerProduct extends BaseApi {

    /**
     * List Biller Products
     *
     * HTTP GET /api/v1/bills/billers/{billerId}/products
     * Operation ID: getApiV1BillsBillersBillerIdProducts
     *
     * @param params billerId Type: ProductParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async list (params: ProductParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/bills/billers/{billerId}/products', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}