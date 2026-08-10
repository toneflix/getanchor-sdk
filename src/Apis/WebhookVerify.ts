import { BaseApi } from '../BaseApi'
import type { Customer, VerifyByWebhookIdInput, WebhookByWebhookIdParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class WebhookVerify extends BaseApi {

    /**
     * Send sample event to a webhook
     *
     * Operation to simulate sample event to a webhook
     *
     * HTTP POST /api/v1/webhooks/verify/{webhookId}
     * Operation ID: postApiV1WebhooksVerifyWebhookId
     *
     * @param params webhookId Type: WebhookByWebhookIdParams
     * @param body Request body Type: VerifyByWebhookIdInput
     * @returns Success Customer
     */
    async create (params: WebhookByWebhookIdParams, body?: VerifyByWebhookIdInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/webhooks/verify/{webhookId}', params, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}