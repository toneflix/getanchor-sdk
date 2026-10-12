---
outline: deep
---

# Configuration

Learn how to configure the Anchor SDK for local development, sandbox testing, and production usage.

## Overview

The SDK accepts configuration through the `InitOptions` object used by `createClient()` and `new Core()`. A common setup uses an API key and lets the SDK pick Anchor's sandbox or production base URL from the environment.

## Configuration File

You can create an `anchor.config.js` file at the root of your project to centralize SDK configuration. The file should use `defineConfig`, which the package re-exports from `@oapiex/sdk-kit`, and can be as minimal or as explicit as you need.

If you want the full list of runtime configuration behaviors, auth strategies, access validation patterns, or SDK kit exports that power this SDK, see the [`@oapiex/sdk-kit` reference](https://toneflix.github.io/oapiex/reference/sdk-kit).

### Minimal Configuration

```js
import { defineConfig } from 'getanchor-sdk';

export default defineConfig({
  apiKey: process.env.ANCHOR_API_KEY,
  environment: 'sandbox',
  debugLevel: 0,
});
```

### Expanded Configuration

```js
import { defineConfig } from 'getanchor-sdk';

export default defineConfig({
  apiKey: process.env.ANCHOR_API_KEY,
  environment: process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
  urls: {
    sandbox: 'https://api.sandbox.getanchor.co',
    live: 'https://api.getanchor.co',
  },
  headers: {
    'x-sdk-name': 'getanchor-sdk',
  },
  timeout: 15_000,
  debugLevel: 0,
});
```

This expanded example uses the same `defineConfig` entrypoint but shows more of the options exposed by `@oapiex/sdk-kit`.

## Configuration Fields

### `apiKey`

- Type: `string`
- Required: Yes, unless you pass a custom `auth`
- Environment variable: `ANCHOR_API_KEY`
- Description: Your Anchor API key.

Your Anchor API key, sent on every request as the `x-anchor-key` header. Keys are scoped to one environment, so a sandbox key returns `401` against production and vice versa.

An explicit `apiKey` always wins over `anchor.config.js` and `ANCHOR_API_KEY`, in that order.

### `environment`

- Type: `'sandbox' | 'live'`
- Default: `sandbox`
- Environment variable: `ANCHOR_ENVIRONMENT`
- Description: Chooses the target environment.

Selects the active environment. When nothing sets it, the SDK uses `sandbox`, so production always has to be asked for explicitly.

```ts
const environment = process.env.NODE_ENV === 'production' ? 'live' : 'sandbox';
```

### `urls`

- Type: `{ sandbox?: string; live?: string }`
- Required: No
- Description: Override base URLs used by the SDK.

Overrides the base URL used for each environment. The defaults are:

```ts
urls: {
  sandbox: 'https://api.sandbox.getanchor.co',
  live: 'https://api.getanchor.co',
}
```

This is useful if you need to point the SDK at a gateway, proxy, or mock server.

### `auth`

- Type: `AuthConfig | AuthConfig[]`
- Required: No
- Description: Request authentication strategy.

By default the SDK builds an `apiKey` strategy from `apiKey`:

```ts
auth: {
  type: 'apiKey',
  in: 'header',
  name: 'x-anchor-key',
  value: process.env.ANCHOR_API_KEY,
}
```

`anchorApiKeyAuth(key)` builds the same object. The SDK kit also supports `bearer`, `basic`, `oauth2`, and `custom` strategies if you route calls through a gateway that authenticates differently.

### `headers`

- Type: `Record<string, string>`
- Required: No
- Description: Default headers applied to every request.

Adds default headers to every request.

```ts
headers: {
  'x-request-id': 'your-request-id',
  'x-client-name': 'your-service-name',
}
```

Use this for tracing, correlation, and integration-level metadata. For per-request headers, pass `{ headers }` as the last argument of any method.

### `timeout`

- Type: `number`
- Required: No
- Description: Request timeout in milliseconds.

Sets the request timeout in milliseconds.

```ts
timeout: 15_000;
```

### `debugLevel`

- Type: `0 | 1 | 2 | 3`
- Required: No
- Description: HTTP debug verbosity.

Controls request and response debug verbosity. A typical production-friendly configuration sets this to `0`, which disables logging.

```ts
debugLevel: 0;
```

::: danger
`debugLevel: 3` logs full request headers, including your `x-anchor-key`. Use it locally only.
:::

## Recommended Server-Side Setup

```ts
import { createClient } from 'getanchor-sdk';

export const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
  timeout: 15_000,
  debugLevel: 0,
});
```

## Runtime Overrides

You can still override configuration at client construction time even if you keep defaults in `anchor.config.js`:

```ts
import { createClient } from 'getanchor-sdk';

const sdk = createClient({
  environment: 'sandbox',
  timeout: 20_000,
  headers: {
    'x-request-id': crypto.randomUUID(),
  },
});
```

## Environment Variables

```bash
ANCHOR_API_KEY=your_api_key
ANCHOR_ENVIRONMENT=sandbox
```

Do not ship your API key to the browser. Keep the SDK behind your backend or trusted server runtime.

## Operational Notes

- Use `sandbox` by default for development and integration testing.
- Keep `debugLevel` low in production to avoid leaking your key and customer data into logs.
- Pass an `idempotencyKey` when calling transfer endpoints, so a retried request cannot move money twice.
- The kit's auth configuration is shared across the process, so use one Anchor client (one key) per process.
- Treat `apiKey` as a secret and load it from your process environment or a secret manager.

## Next Steps

- Review [Usage Patterns](/guide/usage-patterns) for practical initialization styles.
- Explore [API Overview](/api/overview) for product-area coverage.
