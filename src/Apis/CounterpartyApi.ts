import { BaseApi } from '../BaseApi'
import type { CounterpartyApiQuery, CounterpartyByCounterPartyIdParams, Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class CounterpartyApi extends BaseApi {

    /**
     * Create Counterparty
     *
     * Endpoint to create counterParties
     *
     * HTTP POST /api/v1/counterparties
     * Operation ID: postApiV1Counterparties
     * @returns Created Customer
     */
    async create (): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties', {}, {}),
            'POST',
            {},
            {}
        )

        return data
    }

    /**
     * List Counterparties
     *
     * List all the counterparties that exist in an organization
     *
     * HTTP GET /api/v1/counterparties
     * Operation ID: getApiV1Counterparties
     *
     * @param query include: This can be used to fetch related resources.; metadata; page: The page number of the requested page, defaults to 0; query; size: Number of records in each page, defaults to 20 Type: CounterpartyApiQuery
     * @returns Success Customer
     */
    async list (query: CounterpartyApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Update Counterparty
     *
     * Update counterparty
     *
     * HTTP PATCH /api/v1/counterparties/{counterPartyId}
     * Operation ID: patchApiV1CounterpartiesCounterPartyId
     *
     * @param params counterPartyId: The counterparty id Type: CounterpartyByCounterPartyIdParams
     * @returns Success Customer
     */
    async update (params: CounterpartyByCounterPartyIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties/{counterPartyId}', params, {}),
            'PATCH',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Counterparty
     *
     * Fetch a single counterparty
     *
     * HTTP GET /api/v1/counterparties/{counterPartyId}
     * Operation ID: getApiV1CounterpartiesCounterPartyId
     *
     * @param params counterPartyId: The counterparty id Type: CounterpartyByCounterPartyIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: CounterpartyByCounterPartyIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties/{counterPartyId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Delete Counterparty
     *
     * Operation to delete a Counterparty
     *
     * HTTP DELETE /api/v1/counterparties/{counterPartyId}
     * Operation ID: deleteApiV1CounterpartiesCounterPartyId
     *
     * @param params counterPartyId: Id of the CounterParty Type: CounterpartyByCounterPartyIdParams
     * @returns Success Customer
     */
    async delete (params: CounterpartyByCounterPartyIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/counterparties/{counterPartyId}', params, {}),
            'DELETE',
            {},
            {}
        )

        return data
    }
}