# Anchor SDK

Type-safe Node.js SDK for the [Anchor](https://docs.getanchor.co/) banking-as-a-service API: customers and KYC, deposit accounts, account numbers, sub-accounts, transfers, cards, collections (reserved accounts and pay with transfer), bills, statements, events and webhooks.

Every endpoint in Anchor's API reference and guides is covered, typed from Anchor's published OpenAPI definitions.

## Installation

```bash
pnpm add getanchor-sdk
```

## Quick Start

```ts
import { createClient } from 'getanchor-sdk';

const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY,
  environment: 'sandbox', // the default; pass 'live' for production
});

const { data: banks } = await anchor.api.banks.list();
```

`createClient(options)` is the same as `new Core(options)`. `new Core(apiKey, env, config)` also works.

## Requests and responses

Anchor speaks [JSON:API](https://docs.getanchor.co/reference/getting-started-with-the-api). Write methods take the resource object Anchor documents under `data` (the SDK adds the `{ data }` envelope), and every method returns the whole response document, so `included` resources and `meta.pagination` are never lost:

```ts
const { data: transfer } = await anchor.api.transfers.create(
  {
    type: 'NIPTransfer',
    attributes: { amount: 150_000, currency: 'NGN', reason: 'Rent', reference: 'rent-2026-10' },
    relationships: {
      account: { data: { id: accountId, type: 'DepositAccount' } },
      counterParty: { data: { id: counterpartyId, type: 'CounterParty' } },
    },
  },
  { idempotencyKey: crypto.randomUUID() }, // sent as x-anchor-idempotent-key
);
```

- **Amounts are minor units** (kobo for NGN, cents for USD). The SDK never converts them.
- **Lists** return `{ data: [...], meta: { pagination: { number, size, total, totalPages } } }` and accept `page` (zero based), `size`, `sort` and `include`.
- **`include`** expands relationships. `findIncluded(doc, [resource, 'customer'])` and `relationshipId(resource, 'account')` read them.
- **Errors** throw `AnchorApiError`, a subclass of `HttpException`, carrying `statusCode` and Anchor's `errors` array (`title`, `status`, `detail`).

## Namespaces

| Namespace                                                  | Covers                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| `customers`                                                | Create, list, get, update, delete, search, KYC (`verifyIndividual`), KYB  |
| `businesses`, `nextOfKin`, `documents`                     | Business officers, next of kin, KYB document upload/download              |
| `accounts`, `accountNumbers`, `subAccounts`                | Deposit accounts, balances, freeze/unfreeze, account numbers, subledgers  |
| `inboundTransfers`                                         | Bank transfers received into your account numbers                         |
| `counterparties`, `banks`                                  | Beneficiaries, bank list, name enquiry                                    |
| `transfers`, `transactions`, `fees`, `rewards`             | Book/NIP/bulk transfers, verification, ledger, custom fees, rewards       |
| `cards`, `cardTransfers`, `cardPayments`                   | Issue/freeze/cancel cards, reveal details, fund/unfund, card payments     |
| `reservedAccounts`, `payWithTransfers`, `payIns`           | Collections under `/pay`                                                  |
| `bills`                                                    | Airtime, data, electricity, cable TV, billers and products                |
| `statements`, `reports`                                    | Statement and report generation and download                              |
| `events`, `webhooks`, `countries`                          | Event log, webhook endpoints, countries and states                        |

The full method list is in [docs/api/overview.md](./docs/api/overview.md).

## Webhooks

Anchor signs each delivery with your webhook `token` in `x-anchor-signature`. Verify against the **raw** body:

```ts
import { AnchorWebhooks } from 'getanchor-sdk';

const webhooks = new AnchorWebhooks(process.env.ANCHOR_WEBHOOK_TOKEN!);

app.post('/webhooks/anchor', express.raw({ type: '*/*' }), (req, res) => {
  const event = webhooks.verify(req.body, req.headers); // throws AnchorWebhookError if forged
  // event.id, event.type, event.relationships, event.included
  res.sendStatus(200);
});
```

The signature has no timestamp, so deduplicate on `event.id` and fetch the resource from the API before acting on it.

## Cards: revealing PAN and CVV

```ts
const { data: token } = await anchor.api.cards.createRevealToken(cardId);
const { data: details } = await anchor.api.cards.revealDetails(token.token); // sent with the token, not your API key
```

Never persist or log the reveal token or the details.

## Configuration

| Option / variable                             | Default                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| `apiKey` / `ANCHOR_API_KEY`                   | Required. Sent as `x-anchor-key`.                                         |
| `environment` / `ANCHOR_ENVIRONMENT`          | `sandbox`                                                                 |
| `urls.sandbox`, `urls.live`                   | `https://api.sandbox.getanchor.co`, `https://api.getanchor.co`            |
| `timeout`, `headers`, `debugLevel`            | From `@oapiex/sdk-kit`. `debugLevel: 3` logs headers, including your key. |

Settings can also live in an `anchor.config.js` at the project root (`defineConfig({...})`). Keep Anchor credentials server-side.

## Not included

- `/api/v1/payments`, `/payments/{id}` and `/payments/requery/{ref}` were [retired by Anchor on 31 May 2026](https://docs.getanchor.co/changelog/deprecation-of-legacy-payment-endpoints). Use `inboundTransfers.get` and `payIns.get`.
- Savings endpoints are no longer in Anchor's documentation and were dropped.

## Development

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test        # mocked; never touches the network
pnpm build
```

`ANCHOR_LIVE_TESTS=1 ANCHOR_API_KEY=... pnpm test` additionally runs a read-only smoke test against the Anchor sandbox.
