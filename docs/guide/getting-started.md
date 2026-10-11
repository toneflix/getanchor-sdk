# Getting Started

## Installation

::: code-group

```bash [pnpm]
pnpm add getanchor-sdk
```

```bash [npm]
npm install getanchor-sdk
```

```bash [yarn]
yarn add getanchor-sdk
```

:::

## Create a client

```ts
import { createClient } from 'getanchor-sdk';

export const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY,
  environment: 'sandbox',
});
```

The environment defaults to `sandbox` (or `ANCHOR_ENVIRONMENT`), so a missing setting never reaches production. Use `environment: 'live'` for real money.

`new Core(options)` is equivalent, and `new Core(apiKey, 'live', { timeout: 15_000 })` is also supported.

## Onboard a customer and open an account

```ts
const { data: customer } = await anchor.api.customers.create({
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

await anchor.api.customers.verifyIndividual(customer.id, {
  type: 'Verification',
  attributes: {
    level: 'TIER_2',
    level2: { bvn: '22222222226', dateOfBirth: '1994-06-25', gender: 'Female' },
  },
});
// Wait for customer.identification.approved, then:

const { data: account } = await anchor.api.accounts.create({
  type: 'DepositAccount',
  attributes: { productName: 'SAVINGS' },
  relationships: { customer: { data: { id: customer.id, type: 'IndividualCustomer' } } },
});

const { data: numbers } = await anchor.api.accountNumbers.list({ AccountId: account.id });
```

## Send money

```ts
const { data: name } = await anchor.api.banks.verifyAccount('000014', '0123456789');

const { data: counterparty } = await anchor.api.counterparties.create({
  type: 'CounterParty',
  attributes: {
    accountName: name.attributes.accountName!,
    accountNumber: '0123456789',
    bankCode: '000014',
    verifyName: true,
  },
});

const { data: transfer } = await anchor.api.transfers.create(
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

// Confirm the final state before you settle your own ledger.
const { data: verified } = await anchor.api.transfers.verify(transfer.id);
```

If a create call times out, recover it with `anchor.api.transfers.getByReference('payout-42')` rather than retrying blindly.

## Errors

```ts
import { AnchorApiError } from 'getanchor-sdk';

try {
  await anchor.api.accounts.get('missing');
} catch (error) {
  if (error instanceof AnchorApiError) {
    error.statusCode; // 404
    error.message;    // "Not found: Account was not found"
    error.errors;     // [{ title, status, detail }]
  }
}
```

## Pagination and includes

```ts
const page = await anchor.api.transactions.list({ accountId: account.id, page: 0, size: 50 });
page.meta?.pagination; // { number, size, total, totalPages }

import { findIncluded } from 'getanchor-sdk';

const doc = await anchor.api.accounts.get(account.id, { include: 'AccountNumber' });
const accountNumber = findIncluded(doc, [doc.data, 'accountNumbers']);
```
