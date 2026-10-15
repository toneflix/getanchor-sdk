---
outline: deep
---

# Collections

This section covers Anchor's payment program: permanent reserved account numbers for each customer, single-use pay-with-transfer accounts, and the pay-ins they receive.

These endpoints live under `/pay` rather than `/api/v1`. In production they require the payment program to be enabled on your organisation.

## reservedAccounts

Use `sdk.api.reservedAccounts.create(body)` to give a customer a permanent account number for receiving bank transfers.

- Method: `create(body)`
- Endpoint: `POST /pay/reserved-account`
- Context: Either pass an existing customer as a relationship, or pass customer details and let Anchor create the customer in the same request. Anchor sends `reservedAccount.created` or `reservedAccount.failed`.

Payments into the account are named "Merchant Name / Customer Name" on the sender's side, and each one arrives as `payin.received`.

### Example

```ts
// With an existing customer
const { data: reserved } = await sdk.api.reservedAccounts.create({
  type: 'ReservedAccount',
  attributes: { provider: 'ninepsb' },
  relationships: {
    customer: { data: { id: customerId, type: 'IndividualCustomer' } },
  },
})

reserved.attributes.accountNumber
reserved.attributes.bank?.name // e.g. '9 Payment Service Bank'

// Creating the customer in the same call, and settling into a sub-account
await sdk.api.reservedAccounts.create({
  type: 'ReservedAccount',
  attributes: {
    provider: 'ninepsb',
    customer: {
      individualCustomer: {
        fullName: { firstName: 'Ada', lastName: 'Obi' },
        email: 'ada@example.com',
        bvn: '22222222226',
      },
    },
  },
  relationships: {
    payoutAccount: { data: { id: subAccountId, type: 'SubAccount' } },
  },
})
```

## payWithTransfers

Use `sdk.api.payWithTransfers` for checkout-style collections: a temporary account number that expects one payment of a set amount.

- `create(body)` calls `POST /pay/pay-with-transfer`.
- `get(payWithTransferId, query?)` calls `GET /pay/pay-with-transfer/{payWithTransferId}`.

The account expires after `expiryTime` seconds (at most one hour) or after it is paid, so it cannot be reused. Once paid, its `payin` relationship is set.

### Example

```ts
const { data: checkout } = await sdk.api.payWithTransfers.create({
  type: 'PayWithTransfer',
  attributes: {
    reference: 'order1001',
    customer: { fullName: 'Ada Obi', email: 'ada@example.com' },
    amount: 1_500_000,
    expiryTime: 3600,
  },
})

checkout.attributes.accountNumber // show this to the customer
checkout.attributes.expiry?.expiryDate

const { data: latest } = await sdk.api.payWithTransfers.get(checkout.id)
```

## payIns

Use `sdk.api.payIns.get(id)` to fetch a payment received into a reserved account or pay-with-transfer account.

- Method: `get(payInId, query?)`
- Endpoint: `GET /pay/payin/{payInId}`
- Context: Take the id from the `payIn` relationship of a `payin.received` event. Pass `include: 'Charge,ReservedAccount'` for the sender's name, bank, and account number.

This replaces the retired `/api/v1/payments` endpoints for reserved accounts.

### Example

```ts
import { findIncluded, relationshipId } from 'getanchor-sdk'

const payInId = relationshipId(event, 'payIn')!

const document = await sdk.api.payIns.get(payInId, { include: 'Charge,ReservedAccount' })

document.data.attributes.amount // minor units
document.data.attributes.status // e.g. COMPLETED

const charge = findIncluded(document, [document.data, 'attempt'])
charge?.attributes.transferDetails // senderName, senderBank, senderAccountNumber, ...
```
