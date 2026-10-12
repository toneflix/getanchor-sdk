---
outline: deep
---

# Types and Utilities

The Anchor SDK is built on top of [`@oapiex/sdk-kit`](https://toneflix.github.io/oapiex/reference/sdk-kit), which provides the shared runtime primitives behind `Core`, `createClient`, configuration loading, environments, and base URLs. If you want more context on that lower-level layer or its supported auth strategies, the upstream SDK Kit reference is the right place to continue.

## Document Types

Anchor speaks JSON:API, and these generic types describe its envelopes:

| Type                  | Shape                                                              |
| --------------------- | ------------------------------------------------------------------ |
| `Resource<T, A, R>`   | `{ id, type: T, attributes: A, relationships?: Relationships<R> }` |
| `AnchorDocument<T>`   | `{ data: T, included?, meta? }`                                    |
| `AnchorCollection<T>` | `{ data: T[], included?, meta?: { pagination } }`                  |
| `RequestDocument<T>`  | `T`, the resource object of a write; sent wrapped as `{ data: T }` |
| `RequestOptions`      | `{ idempotencyKey?, headers? }`, the last argument of every method |
| `Pagination`          | `{ number, size, total, totalPages }`                              |

## Resource and Input Types

Every resource has a named type, and every write has a named input type:

```ts
import type {
  Customer,
  CreateCustomerInput,
  DepositAccount,
  AccountNumber,
  Transfer,
  CreateTransferInput,
  Card,
  CardPayment,
  PayIn,
  Webhook,
} from 'getanchor-sdk';
```

Use these exported types whenever you build payloads or persist API responses in your own code.

## Enumerations

Enumerations Anchor documents are exported as open string unions: known values autocomplete, and values Anchor adds later still compile.

- `AnchorEventType`: every documented webhook and event type.
- `ProcessingStatus`: transfer, bill, and fee statuses such as `PENDING` and `COMPLETED`.
- `FailureReason`: why a transfer failed, such as `INSUFFICIENT_BALANCE`.
- `CardPaymentStatus` and `CardStatus`.
- `NigerianState`, `BusinessIndustry`, `BusinessRegistrationType`, and `DocumentType`.
- `Currency`: `'NGN' | 'USD'`.

## Configuration Types

The SDK exports its setup types:

- `InitOptions`: the kit's options plus `apiKey`.
- `AuthConfig`
- `Environment`
- `UnifiedResponse`

It also exports `ANCHOR_URLS` (the default sandbox and live base URLs), `anchorApiKeyAuth(key)` (the `x-anchor-key` auth strategy), and `defineConfig` for `anchor.config.js`.

For the full SDK kit configuration model and runtime behavior, see the [SDK Kit reference](https://toneflix.github.io/oapiex/reference/sdk-kit).

## JSON:API Helpers

Small functions for reading relationships and included resources:

- `relationshipId(resource, name)`: the id a to-one relationship points at.
- `relationshipIds(resource, name)`: every id a relationship points at.
- `findIncluded(document, target)`: an included resource, by identifier or by `[resource, relationshipName]`.
- `includedOfType(document, type)`: every included resource of one type.

```ts
import { findIncluded, relationshipId } from 'getanchor-sdk';

const document = await sdk.api.accounts.get(accountId, { include: 'AccountNumber' });

relationshipId(document.data, 'customer'); // the customer's id
findIncluded(document, [document.data, 'accountNumbers']); // the included AccountNumber
```

## Errors

| Class                          | When                                                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `AnchorApiError`               | Any non-2xx response. Carries `statusCode`, `message`, `errors[]` (`title`, `status`, `detail`), `body`. |
| `AnchorWebhookError`           | A webhook delivery is unsigned, forged, or not an event.                                             |
| `HttpException`                | The kit's base class. `AnchorApiError` extends it.                                                   |
| `BadRequestException`, `UnauthorizedRequestException`, `ForbiddenRequestException` | Re-exported from the kit for code shared with other oapiex SDKs. |

## Webhook Utilities

- `AnchorWebhooks`: `verify(rawBody, headersOrSignature)`, `parse(rawBody)`, `isValid(rawBody, signature)`, and `sign(rawBody)`.
- `AnchorWebhookEvent`: the normalized event, `{ id, type, attributes, relationships, included }`.
- `ANCHOR_SIGNATURE_HEADER`: `'x-anchor-signature'`.
- `ANCHOR_WEBHOOK_IPS`: the sender IPs Anchor documents.

See the [Webhooks guide](/guide/webhooks) for a full handler.

## Extending the SDK

`BaseApi` exposes a protected `request<T>(method, path, { params, query, body, options })` that applies auth, flattens query filters, adds the `{ data }` envelope, and maps errors. Subclass it to call an endpoint Anchor ships before this SDK supports it:

```ts
import { BaseApi, type AnchorDocument } from 'getanchor-sdk';

class Beta extends BaseApi {
  thing(id: string) {
    return this.request<AnchorDocument<unknown>>('GET', '/api/v1/things/{id}', {
      params: { id },
    });
  }
}
```

All network calls go through the exported `transport.send`, which tests can stub instead of mocking HTTP.

## Example

```ts
import {
  AnchorApiError,
  createClient,
  type CreateTransferInput,
  type InitOptions,
} from 'getanchor-sdk';

const options: InitOptions = {
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
};

const sdk = createClient(options);

const transfer: CreateTransferInput = {
  type: 'BookTransfer',
  attributes: { amount: 100_000, currency: 'NGN', reason: 'Savings sweep' },
  relationships: {
    account: { data: { id: 'acc_source', type: 'DepositAccount' } },
    destinationAccount: { data: { id: 'acc_savings', type: 'DepositAccount' } },
  },
};

try {
  await sdk.api.transfers.create(transfer, { idempotencyKey: crypto.randomUUID() });
} catch (error) {
  if (error instanceof AnchorApiError && error.statusCode === 401) {
    console.error('Authentication failed');
  }
}
```
