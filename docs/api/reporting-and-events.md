---
outline: deep
---

# Reporting and Events

This section covers account statements, transaction and balance reports, the event log, webhook endpoints, and the country and state lookups used in addresses.

## statements

Use `sdk.api.statements` to generate and download account statements.

- `create(body)` calls `POST /api/v1/statements`.
- `list(query?)` calls `GET /api/v1/statements`.
- `get(statementId, query?)` calls `GET /api/v1/statements/{statementId}`.
- `download(statementId)` calls `GET /api/v1/statements/download/{statementId}`.

Generation is asynchronous. Download once `statement.completed` arrives (or `get` shows `completed`).

### Example

```ts
const { data: statement } = await sdk.api.statements.create({
  type: 'Statement',
  attributes: { fromDate: '2026-09-01', toDate: '2026-09-30' },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})

// After statement.completed:
const file = await sdk.api.statements.download(statement.id)
```

## reports

Use `sdk.api.reports` for transaction-history and balance-summary reports across an account.

- `create(body)` calls `POST /api/v1/reports`.
- `list(query?)` calls `GET /api/v1/reports`.
- `get(reportId, query?)` calls `GET /api/v1/reports/{reportId}`.
- `download(reportId)` calls `GET /api/v1/reports/download/{reportId}`.

Download once the matching `transaction_history.reporting.completed` or `balance_summary.reporting.completed` event arrives.

### Example

```ts
const { data: report } = await sdk.api.reports.create({
  type: 'Report',
  attributes: {
    reportType: 'transaction_history',
    documentType: 'csv',
    fromDate: '2026-09-01',
    toDate: '2026-09-30',
  },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})
```

## events

Use `sdk.api.events` to read the event log. It is the safety net for webhooks: anything a delivery missed is still here.

- `list(query?)` calls `GET /api/v1/events`. Filter with `type`.
- `get(eventId, query?)` calls `GET /api/v1/events/{eventId}`. Pass `include` to expand the resources the event points at.
- `types()` calls `GET /api/v1/events/event-types` for every event type with its description.

### Example

```ts
const { data: missed } = await sdk.api.events.list({ type: 'nip.transfer.successful', size: 50 })

const event = await sdk.api.events.get(eventId, { include: 'transfer' })
```

## webhooks

Use `sdk.api.webhooks` to register and manage the endpoints Anchor delivers events to. To verify the deliveries themselves, see the [Webhooks guide](/guide/webhooks).

- `create(body)` calls `POST /api/v1/webhooks`.
- `list(query?)` calls `GET /api/v1/webhooks`.
- `get(webhookId)` calls `GET /api/v1/webhooks/{webhookId}`.
- `update(webhookId, body)` calls `PATCH /api/v1/webhooks/{webhookId}`.
- `delete(webhookId)` calls `DELETE /api/v1/webhooks/{webhookId}`.
- `sendSample(webhookId, body)` calls `POST /api/v1/webhooks/verify/{webhookId}` to send a test event and report what your endpoint answered.

The `token` you set becomes the secret Anchor signs deliveries with. `deliveryMode: 'AtLeastOnce'` retries failed deliveries up to five times; `AtMostOnce` never retries.

### Example

```ts
const { data: webhook } = await sdk.api.webhooks.create({
  type: 'Webhook',
  attributes: {
    url: 'https://api.example.com/webhooks/anchor',
    token: process.env.ANCHOR_WEBHOOK_TOKEN!,
    label: 'core',
    deliveryMode: 'AtLeastOnce',
    supportIncluded: true,
    enabledEvents: ['nip.transfer.successful', 'nip.transfer.failed', 'payin.received'],
  },
})

const { data: result } = await sdk.api.webhooks.sendSample(webhook.id, {
  type: 'Webhook',
  attributes: { eventType: 'nip.transfer.successful' },
})
result.attributes.responseCode // what your endpoint returned
```

## countries

Use `sdk.api.countries` for the countries and states Anchor accepts in addresses.

- `list(query?)` calls `GET /api/v1/countries`. Pass `countryCode` to find one country.
- `states(countryCode)` calls `GET /api/v1/countries/{countryCode}/states`.

### Example

```ts
const { data: states } = await sdk.api.countries.states('NG')
```
