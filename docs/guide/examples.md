---
outline: deep
---

# Examples

These examples use the same initialization patterns described throughout this guide, then walk through the most common Anchor flows end to end.

## Onboard and Verify a Customer

```ts
import { createClient } from 'getanchor-sdk';

const sdk = createClient({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
});

const { data: customer } = await sdk.api.customers.create({
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
});

// Tier 2 KYC. The result arrives as customer.identification.* webhook events.
await sdk.api.customers.verifyIndividual(customer.id, {
  type: 'Verification',
  attributes: {
    level: 'TIER_2',
    level2: { bvn: '22222222226', dateOfBirth: '1994-06-25', gender: 'Female' },
  },
});
```

## Open a Deposit Account and Get Its Account Number

```ts
const { data: account } = await sdk.api.accounts.create({
  type: 'DepositAccount',
  attributes: { productName: 'SAVINGS' },
  relationships: {
    customer: { data: { id: customer.id, type: 'IndividualCustomer' } },
  },
});

const { data: accountNumbers } = await sdk.api.accountNumbers.list({ AccountId: account.id });
const nuban = accountNumbers[0]?.attributes.accountNumber;

const { data: balance } = await sdk.api.accounts.balance(account.id);
balance.availableBalance; // minor units
```

## Send Money to a Bank Account

```ts
const { data: lookup } = await sdk.api.banks.verifyAccount('000014', '0123456789');

const { data: counterparty } = await sdk.api.counterparties.create({
  type: 'CounterParty',
  attributes: {
    accountName: lookup.attributes.accountName!,
    accountNumber: '0123456789',
    bankCode: '000014',
    verifyName: true,
  },
});

const { data: transfer } = await sdk.api.transfers.create(
  {
    type: 'NIPTransfer',
    attributes: { amount: 500_000, currency: 'NGN', reason: 'Payout', reference: 'payout-42' },
    relationships: {
      account: { data: { id: account.id, type: 'DepositAccount' } },
      counterParty: { data: { id: counterparty.id, type: 'CounterParty' } },
    },
  },
  { idempotencyKey: 'payout-42' },
);

// Confirm the final state before settling your own ledger.
const { data: verified } = await sdk.api.transfers.verify(transfer.id);
verified.attributes.status; // e.g. COMPLETED
```

## Move Money Between Your Own Accounts

```ts
await sdk.api.transfers.create(
  {
    type: 'BookTransfer',
    attributes: { amount: 100_000, currency: 'NGN', reason: 'Savings sweep' },
    relationships: {
      account: { data: { id: account.id, type: 'DepositAccount' } },
      destinationAccount: { data: { id: savingsAccountId, type: 'DepositAccount' } },
    },
  },
  { idempotencyKey: crypto.randomUUID() },
);
```

## Issue and Fund a Card

```ts
const { data: card } = await sdk.api.cards.create({
  type: 'Card',
  attributes: { description: 'Operations expense card', productName: 'VIRTUAL_PREPAID_TEST' },
  relationships: {
    customer: { data: { id: customer.id, type: 'IndividualCustomer' } },
    account: { data: { id: account.id, type: 'DepositAccount' } },
  },
});
// card.attributes.status is PENDING until card.created arrives.

await sdk.api.cardTransfers.create({
  type: 'CardTransfer',
  attributes: { amount: 2_000, currency: 'USD', reference: 'fund-card-1' },
  relationships: {
    source: { data: { id: account.id, type: 'DepositAccount' } },
    destination: { data: { id: card.id, type: 'Card' } },
  },
});
```

## Collect a One-Off Payment

```ts
const { data: checkout } = await sdk.api.payWithTransfers.create({
  type: 'PayWithTransfer',
  attributes: {
    reference: 'order-1001',
    customer: { fullName: 'Ada Obi', email: 'ada@example.com' },
    amount: 1_500_000,
    expiryTime: 3600,
  },
});

checkout.attributes.accountNumber; // show this to the customer
```

## Buy Airtime

```ts
await sdk.api.bills.create({
  type: 'Airtime',
  attributes: { phoneNumber: '2348012345678', provider: 'mtn', amount: 10_000, reference: 'airtime-77' },
  relationships: {
    account: { data: { id: account.id, type: 'DepositAccount' } },
  },
});
```

## Override Base URLs

```ts
import { createClient } from 'getanchor-sdk';

const sdk = createClient({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
  urls: {
    sandbox: 'https://anchor-proxy.internal.example.com',
  },
});
```

## Reuse a Shared SDK Instance

```ts
import { createClient } from 'getanchor-sdk';

export const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
  timeout: 20_000,
});

export async function fetchBalance(accountId: string) {
  const { data } = await anchor.api.accounts.balance(accountId);

  return data;
}
```

## Initialize With Core

```ts
import { Core } from 'getanchor-sdk';

const sdk = new Core({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});

const { data: customer } = await sdk.api.customers.get('16565906809790-anc_ind_cst');
```
