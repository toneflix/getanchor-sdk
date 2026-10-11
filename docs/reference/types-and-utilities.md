# Types and Utilities

## Documents

| Type                    | Shape                                                                |
| ----------------------- | -------------------------------------------------------------------- |
| `Resource<T, A, R>`     | `{ id, type: T, attributes: A, relationships?: Relationships<R> }`   |
| `AnchorDocument<T>`     | `{ data: T, included?, meta? }`                                      |
| `AnchorCollection<T>`   | `{ data: T[], included?, meta?: { pagination } }`                    |
| `RequestDocument<T>`    | `T`, the resource object of a write; sent wrapped as `{ data: T }`   |
| `RequestOptions`        | `{ idempotencyKey?, headers? }`, the last argument of every method   |

Each resource has a named type (`Customer`, `DepositAccount`, `AccountNumber`, `Transfer`, `Card`, `CardPayment`, `PayIn`, `ReservedAccount`, `Webhook`, ...) and each write has an input type (`CreateCustomerInput`, `CreateTransferInput`, `CreateCardInput`, ...). Enumerations Anchor documents (`AnchorEventType`, `ProcessingStatus`, `FailureReason`, `NigerianState`, `DocumentType`, ...) are open string unions: known values autocomplete and new ones still compile.

## JSON:API helpers

```ts
import { findIncluded, includedOfType, relationshipId, relationshipIds } from 'getanchor-sdk';

relationshipId(transfer, 'account');           // '1696...-anc_acc'
relationshipIds(account, 'accountNumbers');    // ['...', '...']
findIncluded(doc, [doc.data, 'customer']);     // the included customer, if requested
includedOfType(doc, 'AccountNumber');          // every included AccountNumber
```

## Errors

| Class                  | When                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------- |
| `AnchorApiError`       | Any non-2xx response. `statusCode`, `message`, `errors[]`, `body`. Extends `HttpException`. |
| `AnchorWebhookError`   | A webhook delivery is unsigned, forged, or not an event.                              |

## Extending

`BaseApi` exposes a protected `request<T>(method, path, { params, query, body, options })` that applies auth, flattens query filters (`serializeQuery`) and maps errors. Subclass it to call an endpoint Anchor ships before this SDK does:

```ts
import { BaseApi, type AnchorDocument } from 'getanchor-sdk';

class Beta extends BaseApi {
  thing (id: string) {
    return this.request<AnchorDocument<unknown>>('GET', '/api/v1/things/{id}', { params: { id } });
  }
}
```

All network calls go through the exported `transport.send`, which tests can stub instead of mocking axios.
