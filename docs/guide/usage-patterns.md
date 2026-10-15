---
outline: deep
---

# Usage Patterns

These patterns reflect common ways to use the SDK in a real integration service.

## Runtime-First Client

Use `createClient` when you want the smallest amount of setup code.

```ts
import { createClient } from 'getanchor-sdk'

const sdk = createClient({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
})

const { data: customers } = await sdk.api.customers.list({ size: 20 })
```

If you have already defined defaults in `anchor.config.js` or set `ANCHOR_API_KEY`, this also works:

```ts
const sdk = createClient({})
```

## Class-Based Client

Use `Core` if you want a named SDK instance that can be passed around explicitly.

```ts
import { Core } from 'getanchor-sdk'

const sdk = new Core({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
})

const { data: account } = await sdk.api.accounts.get('169925847367121-anc_acc')
```

This style is useful when you want to pass a concrete SDK instance through service constructors or shared modules.

## Namespaced APIs

The binder groups endpoints under `sdk.api`. A few common namespaces are:

- `sdk.api.customers`
- `sdk.api.accounts`
- `sdk.api.accountNumbers`
- `sdk.api.counterparties`
- `sdk.api.transfers`
- `sdk.api.cards`
- `sdk.api.bills`
- `sdk.api.webhooks`

Each namespace exposes the methods Anchor supports for that resource, such as `create`, `list`, `get`, or `update`, plus resource-specific actions like `accounts.freeze` or `transfers.verify`.

For detailed descriptions of each namespace, move to the [API section](/api/overview).

## Method Arguments

Every method follows the same argument order:

1. Path identifiers, such as `customerId` or `accountId`.
2. The request body (for writes) or query (for reads).
3. An optional `RequestOptions` object: `{ idempotencyKey?, headers? }`.

```ts
await sdk.api.accounts.freeze(
  accountId,
  { type: 'DepositAccount', attributes: { freezeReason: 'FRAUD' } },
  { headers: { 'x-request-id': requestId } },
)
```

## Request Bodies

Write methods take the resource object that Anchor's documentation shows under `data`. The SDK wraps it in `{ data }` before sending. Bulk endpoints take an array.

```ts
await sdk.api.counterparties.create({
  type: 'CounterParty',
  attributes: {
    accountName: 'Ada Obi',
    accountNumber: '0123456789',
    bankCode: '000014',
    verifyName: true,
  },
})

await sdk.api.counterparties.createBulk([first, second])
```

Relationships keep Anchor's own `{ data: { id, type } }` shape, because that is part of the resource:

```ts
relationships: {
  account: { data: { id: accountId, type: 'DepositAccount' } },
}
```

## Working With Types

The package exports named types for every resource and every write, so you can type payloads and responses without maintaining your own copies.

```ts
import {
  createClient,
  type CreateTransferInput,
  type DepositAccount,
  type Transfer,
} from 'getanchor-sdk'

const sdk = createClient({})

const payload: CreateTransferInput = {
  type: 'BookTransfer',
  attributes: { amount: 250_000, currency: 'NGN', reason: 'Savings sweep' },
  relationships: {
    account: { data: { id: 'acc_source', type: 'DepositAccount' } },
    destinationAccount: { data: { id: 'acc_savings', type: 'DepositAccount' } },
  },
}

const { data: transfer }: { data: Transfer } = await sdk.api.transfers.create(payload)
```

Enumerations Anchor documents, such as `AnchorEventType`, `ProcessingStatus`, and `NigerianState`, are open string unions: known values autocomplete and values Anchor adds later still compile.

## Idempotency

Anchor honours the `x-anchor-idempotent-key` header on transfers, bulk transfers, and virtual accounts, and remembers results for 24 hours. Pass `idempotencyKey` as the last argument:

```ts
await sdk.api.transfers.create(payload, { idempotencyKey: `payout-${payoutId}` })
```

If a create call times out, recover the transfer by its reference instead of retrying blindly:

```ts
const { data: transfer } = await sdk.api.transfers.getByReference(`payout-${payoutId}`)
```

## Pagination and Includes

List methods accept `page` (zero based), `size`, `sort`, and `include`, and return pagination details in `meta`:

```ts
const page = await sdk.api.transactions.list({ accountId, page: 0, size: 50 })

page.meta?.pagination // { number, size, total, totalPages }
```

Use `include` to expand related resources into `included`, then read them with the JSON:API helpers:

```ts
import { findIncluded, relationshipId } from 'getanchor-sdk'

const document = await sdk.api.accounts.get(accountId, { include: 'AccountNumber' })

const customerId = relationshipId(document.data, 'customer')
const accountNumber = findIncluded(document, [document.data, 'accountNumbers'])
```

## Default Headers and Timeouts

```ts
const sdk = createClient({
  timeout: 15_000,
  headers: {
    'x-request-id': crypto.randomUUID(),
  },
  apiKey: process.env.ANCHOR_API_KEY!,
})
```

## Error Handling

Every non-2xx response throws `AnchorApiError`. It extends the kit's `HttpException`, and carries Anchor's `errors` array so you can see exactly what Anchor rejected.

```ts
import { AnchorApiError } from 'getanchor-sdk'

try {
  await sdk.api.accounts.get('missing-account')
} catch (error) {
  if (error instanceof AnchorApiError) {
    error.statusCode // 404
    error.message // "Not found: Account was not found"
    error.errors // [{ title, status, detail }]
  }

  throw error
}
```

Network failures (timeouts, refused connections) are rethrown unchanged, so you can tell "Anchor said no" apart from "Anchor never answered".

## Customer Flow

This create, list, and fetch flow is useful when you want to verify your credentials and environment:

```ts
const client = createClient({})

const { data: created } = await client.api.customers.create({
  type: 'IndividualCustomer',
  attributes: {
    fullName: { firstName: 'Ada', lastName: 'Obi' },
    email: 'ada@example.com',
    phoneNumber: '08012345678',
    address: {
      addressLine_1: '1 James Street',
      city: 'Yaba',
      state: 'LAGOS',
      postalCode: '100032',
      country: 'NG',
    },
  },
})

const list = await client.api.customers.list({ size: 20 })
const { data: customer } = await client.api.customers.get(created.id)
```
