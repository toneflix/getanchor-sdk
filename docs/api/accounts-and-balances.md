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
});

const { data: balance } = await sdk.api.accounts.balance(account.id);
balance.availableBalance; // spendable, minor units
balance.ledgerBalance; // at last reconciliation

await sdk.api.accounts.freeze(account.id, {
  type: 'DepositAccount',
  attributes: { freezeReason: 'FRAUD', freezeDescription: 'Reported stolen phone' },
});

await sdk.api.accounts.unfreeze({
  type: 'DepositAccount',
  attributes: { id: account.id },
});
```

## accountNumbers

Use `sdk.api.accountNumbers.list(query)` to get the account numbers that point at a deposit account. Anchor lets one deposit account carry several account numbers.

- Method: `list(query?)`
- Endpoint: `GET /api/v1/account-numbers`
- Context: Pass the deposit account id as `AccountId` (Anchor spells this parameter with a capital `A`).

### Example

```ts
const { data: numbers } = await sdk.api.accountNumbers.list({ AccountId: accountId });

const primary = numbers.find((number) => number.attributes.isDefault);
primary?.attributes.accountNumber; // e.g. '2962576964'
primary?.attributes.bank?.name; // e.g. 'PROVIDUS BANK'
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
});

const { data: entries } = await sdk.api.subAccounts.transactions({
  subAccountId: subAccount.id,
  direction: 'Credit',
});
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
});

inbound.attributes.amount; // minor units
inbound.attributes.sourceAccountName;
inbound.attributes.sessionId;
```
