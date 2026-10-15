---
layout: home

hero:
  name: 'Anchor SDK'
  text: NodeJs SDK for Anchor API
  tagline: 'Type-safe, modern SDK for integrating Anchor banking, transfers, cards, collections, and bill payments into your Node.js applications.'
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Overview
      link: /api/overview

features:
  - icon: 🚀
    title: Full API Coverage
    details: Customers, KYC and KYB, deposit accounts, account numbers, sub-accounts, transfers, cards, collections, bills, statements, events, and webhooks are available through one SDK.
  - icon: 🔒
    title: Type-Safe
    details: Request bodies, responses, and Anchor's enums are typed per endpoint from Anchor's published OpenAPI definitions, with autocomplete and compile-time checks.
  - icon: 🎯
    title: Intuitive API
    details: Pass the resource you want to create and the SDK adds Anchor's JSON:API envelope. Responses come back whole, with included resources and pagination intact.
  - icon: 📦
    title: Lightweight Setup
    details: An API key is all you need. The SDK targets the sandbox until you explicitly ask for live, so a missing setting never moves real money.
  - icon: 🛡️
    title: Safe Money Movement
    details: Idempotency keys on transfers, Anchor's error details on every failure, and constant-time verification of webhook signatures.
  - icon: 📖
    title: Context-Rich Docs
    details: The documentation explains what each API namespace is for, when to use it, and how its methods map to Anchor's endpoints.
---

## Quick Start

### Installation

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

```ts
import { createClient } from 'getanchor-sdk'

const sdk = createClient({
  environment: 'sandbox',
  apiKey: process.env.ANCHOR_API_KEY!,
})

const { data: banks } = await sdk.api.banks.list()
```

## Why Use This SDK?

This SDK is designed for teams that want a direct, typed integration with the Anchor API:

- TypeScript-first request and response models for every endpoint
- A consistent `sdk.api.*` surface across product areas
- Endpoints that only appear in Anchor's guides (cards, account numbers, collections) alongside the API reference
- Errors that keep Anchor's own `title` and `detail`, instead of a generic failure message
- A webhook verifier that implements Anchor's signature scheme for you

## What You Get

- A `createClient()` helper for quickly bootstrapping the SDK.
- A `Core` class if you prefer explicit instances.
- Resource namespaces under `sdk.api.*`, one per Anchor product area.
- Named request and response types for every resource.
- `AnchorWebhooks` for verifying and parsing webhook deliveries.

Use the guide to get configured, then move to the API section when you need namespace-level behavior and endpoint context.
