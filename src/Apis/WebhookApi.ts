import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, WebhookByWebhookIdParams, WebhookInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class WebhookApi extends BaseApi {

    /**
     * Create a Webhook
     *
     * Operation to create a Webhook
     *
     * HTTP POST /api/v1/webhooks
     * Operation ID: postApiV1Webhooks
     *
     * @param body Request body Type: WebhookInput
     * @returns Success Customer
     */
    async create (body: WebhookInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List Webhooks
     *
     * Operation to fetch all Webhooks created by an organization
     *
     * HTTP GET /api/v1/webhooks
     * Operation ID: getApiV1Webhooks
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch a Webhook
     *
     * Operation to get details of a Webhook
     *
     * HTTP GET /api/v1/webhooks/{webhookId}
     * Operation ID: getApiV1WebhooksWebhookId
     *
     * @param params webhookId Type: WebhookByWebhookIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: WebhookByWebhookIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks/{webhookId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Delete Webhook
     *
     * Operation to delete a Webhook
     *
     * HTTP DELETE /api/v1/webhooks/{webhookId}
     * Operation ID: deleteApiV1WebhooksWebhookId
     *
     * @param params webhookId: Id of the Webhook Type: WebhookByWebhookIdParams
     * @returns Accepted Customer
     */
    async delete (params: WebhookByWebhookIdParams): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks/{webhookId}', params, {}),
            'DELETE',
            {},
            {}
        )

        return data
    }

    /**
     * Update a Webhook
     *
     * Operation to update details of a Webhook
     *
     * HTTP PATCH /api/v1/webhooks/{webhookId}
     * Operation ID: patchApiV1WebhooksWebhookId
     *
     * @param params webhookId: Id of the Webhook Type: WebhookByWebhookIdParams
     * @param body Request body Type: WebhookInput
     * @returns Success Customer
     */
    async update (params: WebhookByWebhookIdParams, body?: WebhookInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks/{webhookId}', params, {}),
            'PATCH',
            body ?? {},
            {}
        )

        return data
    }
}