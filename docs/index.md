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
  - title: Type-Safe
    details: Generated request, response, parameter, query, and header types are exported by the package.
  - title: Two Client Styles
    details: Use createClient for concise setup or Core for an explicit class-based client.
  - title: Broad API Coverage
    details: Work with customers, accounts, transfers, payments, bills, savings, statements, reports, and webhooks.
---

## Quick Start

```bash
pnpm add getanchor-sdk
```

```ts
import { createClient } from 'getanchor-sdk';

const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});

const customers = await anchor.api.customerApis.list({});
```
