---
layout: home

hero:
  name: Anchor SDK
  text: Node.js SDK for the Anchor API
  tagline: Type-safe access to Anchor banking, payments, and financial operations from Node.js and TypeScript.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Overview
      link: /api/overview

features:
  - title: Every endpoint
    details: Customers, KYC/KYB, accounts, account numbers, sub-accounts, transfers, cards, collections, bills, statements, events and webhooks.
  - title: Typed from Anchor's OpenAPI
    details: Request bodies, responses and enums are typed per endpoint, and the full JSON:API document (included, pagination) is returned.
  - title: Safe defaults
    details: Sandbox unless told otherwise, idempotency keys on money movement, and constant-time webhook signature checks.
---

## Quick Start

```bash
pnpm add getanchor-sdk
```

```ts
import { createClient } from 'getanchor-sdk';

const anchor = createClient({ apiKey: process.env.ANCHOR_API_KEY });

const { data: customers } = await anchor.api.customers.list({ size: 20 });
```
