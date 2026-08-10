# Types and Utilities

## Generated Types

The package re-exports its generated schema types, including request bodies, responses, path parameters, queries, and headers.

```ts
import type {
  CustomerInput,
  CustomerQuery,
  TransferInput,
  TransferHeader,
  WebhookInput,
} from 'getanchor-sdk';
```

Use these types instead of maintaining separate copies of Anchor request shapes.

## Configuration Types

The SDK re-exports these setup and response types from `@oapiex/sdk-kit`:

- `InitOptions`
- `AuthConfig`
- `UnifiedResponse`
- `XGenericObject`

## Runtime Utilities

The package also exports:

- `createClient` and `Core`
- `ApiBinder` and `BaseApi`
- `Http`, `Builder`, and `createSdk`
- `WebhookValidator`
- `setConfigFileBasename`
- `securitySchemes` and `security`

HTTP error handling is available through `HttpException`, `BadRequestException`, `UnauthorizedRequestException`, and `ForbiddenRequestException`.

```ts
import {
  HttpException,
  UnauthorizedRequestException,
} from 'getanchor-sdk';

try {
  await anchor.api.customerApis.list({});
} catch (error) {
  if (error instanceof UnauthorizedRequestException) {
    console.error('Anchor authentication failed');
  } else if (error instanceof HttpException) {
    console.error(error.message);
  }
}
```

The shared runtime is provided by [`@oapiex/sdk-kit`](https://toneflix.github.io/oapiex/reference/sdk-kit).
