---
outline: deep
---

# Accounts and Balances

This section covers deposit accounts, balances, freezing and unfreezing, the account numbers that point at an account, sub-accounts (subledgers), and the bank transfers an account receives.

## accounts

Use `sdk.api.accounts` for deposit accounts owned by your verified customers, and for your organisation's own root accounts.

### Methods

- `create(body)` calls `POST /api/v1/accounts` to open a `DepositAccount` (or an `ElectronicAccount`).
- `list(query?)` calls `GET /api/v1/accounts`. Filter with `customerId`, `accountId`, `accountType`, or `query`.
- `get(accountId, query?)` calls `GET /api/v1/accounts/{accountId}`.
- `update(accountId, body)` calls `PATCH /api/v1/accounts/{accountId}` to change the account product.
- `balance(accountId)` calls `GET /api/v1/accounts/balance/{accountId}`.
- `rootAccounts(query?)` calls `GET /api/v1/accounts/root-accounts` for your `MASTER`, `REVENUE`, `SETTLEMENT`, and `FBO` accounts.
- `freeze(accountId, body)` calls `POST /api/v1/accounts/{accountId}/freeze`.
- `unfreeze(body)` calls `POST /api/v1/accounts/unfreeze`. The account id travels in the body.

Account opening is asynchronous: listen for `account.opened` (or `account.creation.failed`). The account number on an account is masked on most reads; fetch the full number from [`accountNumbers`](#accountnumbers).

### Example

```ts
const { data: account } = await sdk.api.accounts.create({
  type: 'DepositAccount',
  attributes: { productName: 'SAVINGS' },
  relationships: {
    customer: { data: { id: customerId, type: 'IndividualCustomer' } },
  },
})

const { data: balance } = await sdk.api.accounts.balance(account.id)
balance.availableBalance // spendable, minor units
balance.ledgerBalance // at last reconciliation

await sdk.api.accounts.freeze(account.id, {
  type: 'DepositAccount',
  attributes: { freezeReason: 'FRAUD', freezeDescription: 'Reported stolen phone' },
})

await sdk.api.accounts.unfreeze({
  type: 'DepositAccount',
  attributes: { id: account.id },
})
```

## accountNumbers

Use `sdk.api.accountNumbers` to get the account numbers that point at a deposit account. Anchor lets one deposit account carry several account numbers.

- `list(query?)` calls `GET /api/v1/account-numbers`. Pass the deposit account id as `AccountId` (Anchor spells this parameter with a capital `A`).
- `get(accountNumberId, query?)` calls `GET /api/v1/account-numbers/{accountNumberId}`.

### Example

```ts
const { data: numbers } = await sdk.api.accountNumbers.list({ AccountId: accountId })

const primary = numbers.find((number) => number.attributes.isDefault)
primary?.attributes.accountNumber // e.g. '2962576964'
primary?.attributes.bank?.name // e.g. 'PROVIDUS BANK'
```

You can also get them in one call with `sdk.api.accounts.get(accountId, { include: 'AccountNumber' })`.

## subAccounts

Use `sdk.api.subAccounts` for subledgers under a deposit account.

- `create(body)` calls `POST /api/v1/sub-accounts`.
- `list(query?)` calls `GET /api/v1/sub-accounts`.
- `get(subAccountId, query?)` calls `GET /api/v1/sub-accounts/{subAccountId}`.
- `update(subAccountId, body)` calls `PATCH /api/v1/sub-accounts/{subAccountId}`.
- `balance(subAccountId)` calls `GET /api/v1/sub-accounts/balance/{subAccountId}`.
- `transactions(query?)` calls `GET /api/v1/sub-accounts/transactions`.

### Example

```ts
const { data: subAccount } = await sdk.api.subAccounts.create({
  type: 'SubAccount',
  attributes: { createVirtualNuban: true },
  relationships: {
    parentAccount: { data: { id: accountId, type: 'DepositAccount' } },
  },
})

const { data: entries } = await sdk.api.subAccounts.transactions({
  subAccountId: subAccount.id,
  direction: 'Credit',
})
```

## virtualNubans

Use `sdk.api.virtualNubans.get(id)` to read the 10-digit account number behind a sub-account. A sub-account only exposes its NUBAN's id (in `relationships.virtualNubans`), so this is the call that returns the number customers pay into, its bank, and a `subAccount` relationship pointing back.

- Method: `get(virtualNubanId, query?)`
- Endpoint: `GET /api/v1/virtual-nubans/{virtualNubanId}`

### Example

```ts
import { relationshipIds } from 'getanchor-sdk'

const { data: subAccount } = await sdk.api.subAccounts.get(subAccountId)
const [nubanId] = relationshipIds(subAccount, 'virtualNubans')

const { data: nuban } = await sdk.api.virtualNubans.get(nubanId)
nuban.attributes.accountNumber // e.g. '5463208336'
nuban.attributes.bank?.name // e.g. 'PROVIDUS BANK'
```

::: tip
`virtualNubans.get`, `accountNumbers.get`, and `cards.list` are served by Anchor's API and verified against the sandbox, but are not in Anchor's published reference.
:::

## payments

Use `sdk.api.payments.get(id)` to read a bank transfer received into a virtual NUBAN, such as a sub-account's account number. It carries the gross `amount` and `fee` (minor units), the sender in `counterParty`, the `narration`, and a `virtualNuban` relationship identifying which account number was paid.

- Method: `get(paymentId, query?)`
- Endpoint: `GET /api/v1/payments/{paymentId}`
- Context: Pass `include: 'VirtualNuban'` to get the receiving account number in the same call. The deposit also settles onto the sub-account as a `Settlement` transaction, listed by `subAccounts.transactions({ subAccountId, include: 'Payment' })`.

::: warning
Anchor's changelog lists `/api/v1/payments` as retired, but sub-account deposits are still `Payment` resources that `inboundTransfers.get` does not serve, and this lookup still answers. Prefer the resources a webhook carries in `included`, and keep this as the fallback.
:::

### Example

```ts
import { findIncluded } from 'getanchor-sdk'

const document = await sdk.api.payments.get(paymentId, { include: 'VirtualNuban' })

document.data.attributes.amount // minor units
document.data.attributes.counterParty?.accountName
findIncluded(document, [document.data, 'virtualNuban'])?.attributes.accountNumber
```

## inboundTransfers

Use `sdk.api.inboundTransfers.get(id)` to fetch a bank transfer received into one of your account numbers.

- Method: `get(inboundTransferId, query?)`
- Endpoint: `GET /api/v1/inbound-transfers/{inboundTransferId}`
- Context: Anchor sends `nip.inbound.received` when a transfer is pending, then `nip.inbound.completed` once the funds settle. Credit your customer on `completed`.

This replaces the retired `/api/v1/payments` endpoints for account numbers.

### Example

```ts
const { data: inbound } = await sdk.api.inboundTransfers.get(inboundTransferId, {
  include: 'DepositAccount',
})

inbound.attributes.amount // minor units
inbound.attributes.sourceAccountName
inbound.attributes.sessionId
```
