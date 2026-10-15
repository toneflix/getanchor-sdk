import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  AnchorEvent,
  Country,
  CountryListQuery,
  CountryState,
  EventListQuery,
  EventTypeResource,
  IncludeQuery,
  ListQuery,
  RequestOptions,
  SampleEventInput,
  Webhook,
  WebhookDeliveryResult,
  WebhookInput,
} from '../types'

export class Events extends BaseApi {
  /**
   * List events, newest first. Paginated. Useful to replay anything a
   * webhook delivery missed.
   *
   * HTTP GET /api/v1/events
   * @see https://docs.getanchor.co/reference/list-events
   */
  async list(query?: EventListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<AnchorEvent>>('GET', '/api/v1/events', { query, options })
  }

  /**
   * Fetch an event. Pass `include` to expand the resources it points at.
   *
   * HTTP GET /api/v1/events/{eventId}
   * @see https://docs.getanchor.co/reference/fetch-event
   */
  async get(eventId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<AnchorEvent>>('GET', '/api/v1/events/{eventId}', {
      params: { eventId },
      query,
      options,
    })
  }

  /**
   * List every event type with its description.
   *
   * HTTP GET /api/v1/events/event-types
   * @see https://docs.getanchor.co/reference/event-types
   */
  async types(options?: RequestOptions) {
    return this.request<AnchorCollection<EventTypeResource>>('GET', '/api/v1/events/event-types', {
      options,
    })
  }
}

export class Webhooks extends BaseApi {
  /**
   * Register a webhook endpoint. `token` becomes the signing secret for
   * `x-anchor-signature`; verify deliveries with `AnchorWebhooks`.
   *
   * HTTP POST /api/v1/webhooks
   * @see https://docs.getanchor.co/reference/create-a-webhook
   */
  async create(body: WebhookInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Webhook>>('POST', '/api/v1/webhooks', { body, options })
  }

  /**
   * List webhooks. Paginated.
   *
   * HTTP GET /api/v1/webhooks
   * @see https://docs.getanchor.co/reference/list-webhooks
   */
  async list(query?: ListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Webhook>>('GET', '/api/v1/webhooks', { query, options })
  }

  /**
   * Fetch a webhook.
   *
   * HTTP GET /api/v1/webhooks/{webhookId}
   * @see https://docs.getanchor.co/reference/fetch-a-webhook
   */
  async get(webhookId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<Webhook>>('GET', '/api/v1/webhooks/{webhookId}', {
      params: { webhookId },
      options,
    })
  }

  /**
   * Update a webhook.
   *
   * HTTP PATCH /api/v1/webhooks/{webhookId}
   * @see https://docs.getanchor.co/reference/update-a-webhook
   */
  async update(webhookId: string, body: WebhookInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Webhook>>('PATCH', '/api/v1/webhooks/{webhookId}', {
      params: { webhookId },
      body,
      options,
    })
  }

  /**
   * Delete a webhook. Anchor answers `204 No Content`.
   *
   * HTTP DELETE /api/v1/webhooks/{webhookId}
   * @see https://docs.getanchor.co/reference/delete-webhook
   */
  async delete(webhookId: string, options?: RequestOptions) {
    await this.request<unknown>('DELETE', '/api/v1/webhooks/{webhookId}', {
      params: { webhookId },
      options,
    })
  }

  /**
   * Send a sample event to a webhook and return what your endpoint answered.
   *
   * HTTP POST /api/v1/webhooks/verify/{webhookId}
   * @see https://docs.getanchor.co/reference/verify-a-webhook
   */
  async sendSample(webhookId: string, body: SampleEventInput, options?: RequestOptions) {
    return this.request<AnchorDocument<WebhookDeliveryResult>>(
      'POST',
      '/api/v1/webhooks/verify/{webhookId}',
      {
        params: { webhookId },
        body,
        options,
      },
    )
  }
}

export class Countries extends BaseApi {
  /**
   * List supported countries, or find one with `countryCode`.
   *
   * HTTP GET /api/v1/countries
   * @see https://docs.getanchor.co/docs/business-customer-creation
   */
  async list(query?: CountryListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Country>>('GET', '/api/v1/countries', { query, options })
  }

  /**
   * List the states Anchor accepts in addresses for a country.
   *
   * HTTP GET /api/v1/countries/{countryCode}/states
   * @see https://docs.getanchor.co/docs/business-customer-creation
   */
  async states(countryCode: string, options?: RequestOptions) {
    return this.request<AnchorCollection<CountryState>>(
      'GET',
      '/api/v1/countries/{countryCode}/states',
      {
        params: { countryCode },
        options,
      },
    )
  }
}
