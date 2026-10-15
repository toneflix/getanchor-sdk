---
outline: deep
---

# Transfers and Payouts

This section covers bank lookup and name enquiry, saved beneficiaries (counterparties), book, NIP, and bulk transfers, the transaction ledger, custom fees, and rewards.

## banks

Use `sdk.api.banks` to list banks and confirm who owns an account before paying it.

- `list(query?)` calls `GET /api/v1/banks` for banks and their NIP codes.
- `verifyAccount(bankIdOrBankCode, accountNumber)` calls `GET /api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}` for a name enquiry.
- `verifyAccounts(body)` calls `POST /api/v1/payments/verify-account/bulk` to check several accounts at once.

### Example

```ts
const { data: banks } = await sdk.api.banks.list()

const { data: lookup } = await sdk.api.banks.verifyAccount('000014', '0123456789')
lookup.attributes.accountName // e.g. 'ADA OBI'

const { data: results } = await sdk.api.banks.verifyAccounts([
  { type: 'AccountDetail', attributes: { bankCode: '000014', accountNumber: '0123456789' } },
  { type: 'AccountDetail', attributes: { bankCode: '000013', accountNumber: '9876543210' } },
])
```

## counterparties

Use `sdk.api.counterparties` to save external bank accounts as transfer beneficiaries. A NIP transfer always targets a counterparty.

- `create(body)` calls `POST /api/v1/counterparties`.
- `createBulk(body)` calls `POST /api/v1/counterparties/bulk`.
- `list(query?)` calls `GET /api/v1/counterparties`.
- `get(counterPartyId, query?)` calls `GET /api/v1/counterparties/{counterPartyId}`.
- `update(counterPartyId, body)` calls `PATCH /api/v1/counterparties/{counterPartyId}`.
- `delete(counterPartyId)` calls `DELETE /api/v1/counterparties/{counterPartyId}`.

### Example

```ts
const { data: counterparty } = await sdk.api.counterparties.create({
  type: 'CounterParty',
  attributes: {
    accountName: 'Ada Obi',
    accountNumber: '0123456789',
    bankCode: '000014',
    verifyName: true,
  },
})
```

Set `verifyName: true` to have Anchor confirm the account name against the bank before saving.

## transfers

Use `sdk.api.transfers` to move money.

### Methods

- `create(body)` calls `POST /api/v1/transfers` to start a `BookTransfer` (between Anchor accounts) or an `NIPTransfer` (to a counterparty).
- `list(query?)` calls `GET /api/v1/transfers`.
- `get(transferId, query?)` calls `GET /api/v1/transfers/{transferId}`.
- `verify(transferId, query?)` calls `GET /api/v1/transfers/verify/{transferId}` to re-check status with the processor.
- `getByReference(reference, query?)` calls `GET /api/v1/transfers/by-reference/{reference}`.
- `createBulk(body)` calls `POST /api/v1/transfers/bulk`.
- `getBulk(bulkTransferId, query?)` calls `GET /api/v1/transfers/bulk/{bulkTransferId}` for progress counters.

Transfers start `PENDING`. The outcome arrives as `nip.transfer.successful`, `nip.transfer.failed`, or `nip.transfer.reversed` (and the `book.transfer.*` equivalents). Call `verify` before treating a pending transfer as failed.

::: tip
Pass `idempotencyKey` on every transfer. Anchor stores the result for 24 hours, so retrying a timed-out request cannot send the money twice. If you never received a response, `getByReference` tells you whether the transfer exists.
:::

### Example

```ts
const { data: transfer } = await sdk.api.transfers.create(
  {
    type: 'NIPTransfer',
    attributes: { amount: 500_000, currency: 'NGN', reason: 'Payout', reference: 'payout-42' },
    relationships: {
      account: { data: { id: accountId, type: 'DepositAccount' } },
      counterParty: { data: { id: counterpartyId, type: 'CounterParty' } },
    },
  },
  { idempotencyKey: 'payout-42' },
)

const { data: verified } = await sdk.api.transfers.verify(transfer.id)
verified.attributes.status // e.g. COMPLETED
verified.attributes.failureReason // e.g. INSUFFICIENT_BALANCE
```

### Bulk Transfers

```ts
const { data: bulk } = await sdk.api.transfers.createBulk(
  [
    {
      type: 'NIP_TRANSFER',
      attributes: { amount: 100_000, currency: 'NGN', reason: 'Salary', reference: 'salary-oct-1' },
      relationships: {
        account: { data: { id: accountId, type: 'DepositAccount' } },
        counterParty: { data: { id: firstCounterpartyId, type: 'CounterParty' } },
      },
    },
  ],
  { idempotencyKey: 'salary-oct' },
)

const { data: progress } = await sdk.api.transfers.getBulk(bulk.id)
progress.attributes.successfulTransferCount
```

## transactions

Use `sdk.api.transactions` for an account's ledger entries.

- `list(query)` calls `GET /api/v1/transactions`.
- `get(transactionId, query?)` calls `GET /api/v1/transactions/{transactionId}`.

::: warning
Since April 2026 `list` requires `accountId`. Without it, Anchor returns an empty list.
:::

### Example

```ts
const page = await sdk.api.transactions.list({
  accountId,
  from: '2026-10-01',
  to: '2026-10-31',
  direction: 'Debit',
  size: 50,
})

for (const entry of page.data) {
  entry.attributes.amount // minor units
  entry.attributes.balanceAfter
}
```

## fees

Use `sdk.api.fees` to charge your customers custom fees and refund them.

- `charge(body)` calls `POST /api/v1/fee/custom-fee` to debit a fee from a deposit account.
- `reverse(feeId)` calls `POST /api/v1/fee/reverse/{feeId}` to refund it.
- `list(query?)` calls `GET /api/v1/fee/charged-by-organization`.
- `get(feeId)` calls `GET /api/v1/fee/charged-by-organization/{feeId}`.

### Example

```ts
const { data: fee } = await sdk.api.fees.charge({
  type: 'CustomerFee',
  attributes: { amount: 5_000, currency: 'NGN', description: 'Card maintenance' },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})

await sdk.api.fees.reverse(fee.id)
```

## rewards

Use `sdk.api.rewards.create(body)` to credit a customer from one of your accounts with an auditable "reward" label.

- Method: `create(body)`
- Endpoint: `POST /api/v1/rewards`
- Context: Sign-up bonuses, referral payouts, and goodwill credits. Check `attributes.status` for `PENDING`, `COMPLETED`, or `FAILED`.

### Example

```ts
await sdk.api.rewards.create({
  type: 'Reward',
  attributes: { amount: 100_000, currency: 'NGN', description: 'Referral bonus' },
  relationships: {
    sourceAccount: { data: { id: rewardsPoolAccountId, type: 'DepositAccount' } },
    destinationAccount: { data: { id: customerAccountId, type: 'DepositAccount' } },
  },
})
```
