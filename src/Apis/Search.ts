import { BaseApi } from '../BaseApi'
import type { Customer, SearchQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Search extends BaseApi {

    /**
     * Search customers
     *
     * Operation to search for an Individual or Business Customer using BVN, email, Phone number or RC Number
     *
     * HTTP GET /api/v1/customers/search
     * Operation ID: getApiV1CustomersSearch
     *
     * @param query customerType; include: This can be used to fetch related resources.; searchValue Type: SearchQuery
     * @returns Success Customer
     */
    async list (query: SearchQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/customers/search', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}