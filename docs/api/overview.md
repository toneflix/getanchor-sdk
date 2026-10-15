---
outline: deep
---

# API Overview

The Anchor SDK groups endpoints under `sdk.api.*` namespaces. Each namespace maps to one Anchor resource and exposes the methods Anchor actually supports for it, such as `create`, `list`, `get`, or `update`, plus resource-specific actions like `freeze` or `verify`.

## Client Shape

```ts
const sdk = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
})

sdk.api.customers
sdk.api.accounts
sdk.api.transfers
sdk.api.cards
```

## How the API Section Is Organized

- [Customers and Onboarding](/api/customers-and-onboarding) covers individual and business customers, KYC and KYB, business officers, next of kin, and KYB documents.
- [Accounts and Balances](/api/accounts-and-balances) covers deposit accounts, balances, freezing, account numbers, sub-accounts, and inbound bank transfers.
- [Transfers and Payouts](/api/transfers-and-payouts) covers banks and name enquiry, counterparties, book, NIP and bulk transfers, the ledger, custom fees, and rewards.
- [Cards](/api/cards) covers card issuance and lifecycle, revealing card details, funding and unfunding, and card payments.
- [Collections](/api/collections) covers reserved accounts, pay with transfer, and the pay-ins they receive.
- [Bills](/api/bills) covers airtime, data, electricity, and cable TV payments, billers, and products.
- [Reporting and Events](/api/reporting-and-events) covers statements, reports, the event log, webhook endpoints, and countries.

## Common Method Shapes

Resources generally follow these patterns:

- `create(body)` for `POST` operations.
- `list(query?)` for collection `GET` operations.
- `get(id, query?)` for single-resource `GET` operations.
- `update(id, body)` for `PATCH` and `PUT` operations.
- `delete(id)` for `DELETE` operations.

Every method also accepts an optional `RequestOptions` object last: `{ idempotencyKey?, headers? }`.

## Request and Response Shapes

- Write methods take the resource object Anchor documents under `data` (`type`, `attributes`, `relationships`, or an array for bulk endpoints). The SDK adds the `{ data }` envelope.
- Single-resource methods resolve to `AnchorDocument<T>`: `{ data, included?, meta? }`.
- List methods resolve to `AnchorCollection<T>`: `{ data: T[], included?, meta?: { pagination } }`.
- Amounts are always minor units (kobo for NGN, cents for USD).

## Core Exports

The package exports the runtime helpers and API binder used throughout these pages:

- `createClient`
- `Core`
- `ApiBinder`
- `BaseApi`
- `AnchorApiError`
- `AnchorWebhooks`
- `findIncluded`, `includedOfType`, `relationshipId`, `relationshipIds`

## Choosing a Starting Point

If you are verifying a new setup, start with a read-only call, then a simple customer flow:

```ts
const client = createClient({})

const { data: banks } = await client.api.banks.list()

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

const { data: customer } = await client.api.customers.get(created.id)
```

After that, move into the product area that matches your integration.

## Retired Endpoints

Anchor retired `GET /api/v1/payments`, `GET /api/v1/payments/{paymentId}`, and `GET /api/v1/payments/requery/{customerReference}` on 31 May 2026. The SDK leaves out the list and requery calls. Use [`inboundTransfers.get`](/api/accounts-and-balances#inboundtransfers) for payments into account numbers, and [`payIns.get`](/api/collections#payins) for reserved accounts and pay with transfer.

It keeps [`payments.get`](/api/accounts-and-balances#payments): deposits into sub-account NUBANs are still `Payment` resources that `inboundTransfers.get` does not serve, and the lookup still answers.
