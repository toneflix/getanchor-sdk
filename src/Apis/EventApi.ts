import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, EventByEventIdParams, PaymentApiQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class EventApi extends BaseApi {

    /**
     * List Events
     *
     * Operation to fetch all events generated for an organization
     *
     * HTTP GET /api/v1/events
     * Operation ID: getApiV1Events
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/events', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Event
     *
     * Operation to fetch details of an event
     *
     * HTTP GET /api/v1/events/{eventId}
     * Operation ID: getApiV1EventsEventId
     *
     * @param params eventId: Id of the event Type: EventByEventIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: EventByEventIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/events/{eventId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}