import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, RolloverParams, UnfreezeInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class SavingApi extends BaseApi {

    /**
     * List Savings
     *
     * Operation to fetch all Savings created by an organization
     *
     * HTTP GET /api/v1/savings
     * Operation ID: getApiV1Savings
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Create a Savings
     *
     * Operation to create a Savings
     *
     * HTTP POST /api/v1/savings
     * Operation ID: postApiV1Savings
     *
     * @param body Request body Type: UnfreezeInput
     * @returns Success Customer
     */
    async create (body: UnfreezeInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Fetch a Savings
     *
     * Operation to get details of a Savings
     *
     * HTTP GET /api/v1/savings/{savingsId}
     * Operation ID: getApiV1SavingsSavingsId
     *
     * @param params savingsId Type: RolloverParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: RolloverParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/{savingsId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}