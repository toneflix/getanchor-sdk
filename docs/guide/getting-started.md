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

## Create a Client

Use `createClient` for a concise runtime-first client:

```ts
import { createClient } from 'getanchor-sdk';

export const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});
```

Use `Core` when you prefer an explicit class instance:

```ts
import { Core } from 'getanchor-sdk';

export const anchor = new Core({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});
```

Both clients expose the same generated namespaces under `anchor.api`.

## Make a Request

```ts
const customers = await anchor.api.customerApis.list({});
const transfers = await anchor.api.transferApis.list({});
```

Generated methods describe their required body, path, query, and header types through TypeScript and source JSDoc.

## Common Options

The SDK accepts `InitOptions` from `@oapiex/sdk-kit`. Common fields include:

- `clientId` and `apiKey` for Anchor credentials.
- `environment` to select `sandbox` or `live`.
- `timeout` for the request timeout in milliseconds.
- `headers` for headers applied to each request.
- `auth` for an explicit authentication strategy.
- `debugLevel` for HTTP debugging during development.

```ts
const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
  timeout: 15_000,
});
```

::: warning
Keep Anchor credentials on the server. Do not expose them in client-side applications or public repositories.
:::

## Next Steps

- Browse the [API Overview](/api/overview) for available namespaces.
- Review [Types and Utilities](/reference/types-and-utilities) for package exports.
