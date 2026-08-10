# Anchor SDK

Type-safe Node.js SDK for the [Anchor API](https://docs.getanchor.co/).

The package provides runtime-first and class-based clients for customers, deposit accounts, transfers, payments, bills, savings, statements, reports, counterparties, events, and webhooks.

## Installation

```bash
pnpm add getanchor-sdk
```

## Quick Start

### Runtime-First Client

```ts
import { createClient } from 'getanchor-sdk';

const sdk = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});

const customers = await sdk.api.customerApis.list({});
```

### Class-Based Client

```ts
import { Core } from 'getanchor-sdk';

const sdk = new Core({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});

const transfers = await sdk.api.transferApis.list({});
```

Both clients expose the same generated namespaces under `sdk.api`.

## Documentation

The minimal documentation site lives in [`docs`](./docs):

- [Getting Started](./docs/guide/getting-started.md)
- [API Overview](./docs/api/overview.md)
- [Types and Utilities](./docs/reference/types-and-utilities.md)

Run it locally with:

```bash
pnpm docs:dev
```

## Configuration

Both initialization styles accept `InitOptions` from `@oapiex/sdk-kit`:

```ts
const sdk = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
  timeout: 15_000,
  headers: {
    'x-request-id': crypto.randomUUID(),
  },
});
```

Keep Anchor credentials in a trusted server environment. Do not expose them in browser code.

## Main Exports

- `createClient()` for runtime-first usage
- `Core` for class-based usage
- `ApiBinder` and `BaseApi` for SDK extension points
- Generated request, response, parameter, query, and header types
- Runtime helpers and HTTP exceptions re-exported from `@oapiex/sdk-kit`

## API Groups

- Customers and verification
- Accounts and sub-accounts
- Transfers, payments, and transactions
- Bills and billers
- Savings, deposits, statements, and reports
- Counterparties, banks, events, and webhooks

See the [API overview](./docs/api/overview.md) for the corresponding `sdk.api.*` namespaces.

## Development

```bash
pnpm install
pnpm test
pnpm build
pnpm docs:build
```

## Environment Variables

```bash
ANCHOR_API_KEY=your_api_key
```
