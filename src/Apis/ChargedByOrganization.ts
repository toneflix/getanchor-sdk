import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, ReverseParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class ChargedByOrganization extends BaseApi {

    /**
     * List Fees
     *
     * List all the fees created.
     *
     * HTTP GET /api/v1/fee/charged-by-organization
     * Operation ID: getApiV1FeeChargedByOrganization
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Accepted Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/fee/charged-by-organization', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Fee
     *
     * Fetch the details of a fee charged by id.
     *
     * HTTP GET /api/v1/fee/charged-by-organization/{feeId}
     * Operation ID: getApiV1FeeChargedByOrganizationFeeId
     *
     * @param params feeId Type: ReverseParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Accepted Customer
     */
    async get (params: ReverseParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/fee/charged-by-organization/{feeId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}