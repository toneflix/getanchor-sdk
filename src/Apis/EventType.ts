import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class EventType extends BaseApi {

    /**
     * Event Types
     *
     * Operation to fetch all possible events types
     *
     * HTTP GET /api/v1/events/event-types
     * Operation ID: getApiV1EventsEventTypes
     *
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async list (query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/events/event-types', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}