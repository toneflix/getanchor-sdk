---
outline: deep
---

# Getting Started

This guide will help you install and start using the Anchor SDK in a Node.js or TypeScript project.

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

## Quick Start

### 1. Get Your API Key

Create an API key in the Anchor dashboard under **Settings > Developers > API keys**. Each key belongs to one environment (sandbox or live) and has a permission level and an expiry date. The SDK sends it as the `x-anchor-key` header.

::: warning
Never expose your Anchor API key in client-side code or public repositories. An invalid, missing, or expired key results in `401 Unauthorized`.
:::

### 2. Choose an Initialization Style

The package exposes two main ways to construct the SDK:

- `createClient(options)` for concise runtime-first setup.
- `new Core(options)` if you prefer an explicit class instance.

Both approaches expose the same grouped API namespaces under `sdk.api`.

### 3. Initialize the SDK

This is the smallest explicit setup for a sandbox integration:

```ts
import { createClient } from 'getanchor-sdk'

export const sdk = createClient({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
})
```

If `ANCHOR_API_KEY` is set, or you keep your defaults in `anchor.config.js`, you can also initialize with an empty options object:

```ts
import { createClient } from 'getanchor-sdk'

const sdk = createClient({})
```

::: tip
The environment defaults to `sandbox`. Production requires `environment: 'live'` (or `ANCHOR_ENVIRONMENT=live`), so a missing setting can never move real money.
:::

### 4. Make Your First API Call

A simple first flow is to create a customer, list customers, and fetch one by ID:

```ts
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
})

const customers = await sdk.api.customers.list({ size: 20 })
const fetched = await sdk.api.customers.get(customer.id)
```

## How Requests and Responses Look

Anchor speaks [JSON:API](https://docs.getanchor.co/reference/getting-started-with-the-api). The SDK keeps that shape, with one convenience:

- **Requests:** write methods take the resource object Anchor documents under `data` (`type`, `attributes`, `relationships`). The SDK adds the `{ data }` envelope for you.
- **Responses:** every method returns the whole response document, `{ data, included?, meta? }`, so pagination and included resources are never lost.
- **Amounts:** always in minor units (kobo for NGN, cents for USD). The SDK never converts them.

```ts
const { data: account, included } = await sdk.api.accounts.get(accountId, {
  include: 'AccountNumber',
})
```

## Core Class Setup

If you prefer a class instance, this pattern works the same way:

```ts
import { Core } from 'getanchor-sdk'

const sdk = new Core({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
})

const { data: customer } = await sdk.api.customers.get('16565906809790-anc_ind_cst')
```

`new Core(apiKey, environment, config)` is also supported.

## Supported Initialization Options

The main options are:

- `apiKey`: your Anchor API key, sent as `x-anchor-key`.
- `environment`: `sandbox` (the default) or `live`.
- `urls`: override base URLs if you need custom routing.
- `headers`: default headers applied to every request.
- `timeout`: request timeout in milliseconds.
- `auth`: replace the API key with another auth strategy.
- `debugLevel`: HTTP debug verbosity.

For a fuller breakdown of how these values map to a real project setup, including `defineConfig`, see [Configuration](/guide/configuration).

## First Request

```ts
const { data: banks } = await sdk.api.banks.list()

console.log(banks.map((bank) => bank.attributes.name))
```

## Environment Variables

```bash
ANCHOR_API_KEY=your_api_key
ANCHOR_ENVIRONMENT=sandbox
```

Keep the key on the server side. If you use this SDK inside an app with a browser runtime, route calls through your backend instead of exposing credentials to end users.

## Next Steps

- Review [Configuration](/guide/configuration) for `defineConfig` and advanced options.
- Explore [Usage Patterns](/guide/usage-patterns) for client styles, errors, and pagination.
- Set up [Webhooks](/guide/webhooks) to receive Anchor events.
- Read [API Overview](/api/overview) for the grouped API surface.
