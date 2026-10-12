---
outline: deep
---

# Webhooks

## Register an endpoint

```ts
await anchor.api.webhooks.create({
  type: 'Webhook',
  attributes: {
    url: 'https://api.example.com/webhooks/anchor',
    token: process.env.ANCHOR_WEBHOOK_TOKEN!,
    label: 'core',
    deliveryMode: 'AtLeastOnce',
    supportIncluded: true,
    enabledEvents: ['nip.transfer.successful', 'nip.transfer.failed', 'nip.inbound.completed'],
  },
});
```

`AtLeastOnce` retries up to five times, so your handler must be idempotent. `supportIncluded: true` embeds the affected resources in each delivery.

## Verify deliveries

Anchor sets `x-anchor-signature` to `Base64(hex(HMAC_SHA1(rawBody, token)))`. Verify against the raw bytes, before any JSON parsing:

```ts
import express from 'express';
import { AnchorWebhookError, AnchorWebhooks, findIncluded } from 'getanchor-sdk';

const webhooks = new AnchorWebhooks(process.env.ANCHOR_WEBHOOK_TOKEN!);

app.post('/webhooks/anchor', express.raw({ type: '*/*' }), async (req, res) => {
  let event;
  try {
    event = webhooks.verify(req.body, req.headers);
  } catch (error) {
    if (error instanceof AnchorWebhookError) return res.sendStatus(400);
    throw error;
  }

  if (await alreadyProcessed(event.id)) return res.sendStatus(200);

  if (event.type === 'payin.received') {
    const payIn = findIncluded(event, [event, 'payIn']);
    // ...or fetch it: await anchor.api.payIns.get(relationshipId(event, 'payIn')!)
  }

  res.sendStatus(200);
});
```

`verify` accepts both payload shapes Anchor sends (bare events, and `{ data, included }` when "support included" is on) and returns one `AnchorWebhookEvent`: `{ id, type, attributes, relationships, included }`.

## Security notes

- The signature has no timestamp, so it cannot stop replays. Deduplicate on `event.id`.
- Treat an event as a prompt: fetch the resource (`transfers.verify`, `payIns.get`, ...) before moving value.
- Anchor documents `18.133.55.102` as its sender IP (`ANCHOR_WEBHOOK_IPS`) if you want an allowlist.
- `anchor.api.webhooks.sendSample(webhookId, ...)` sends a test event and reports what your endpoint answered.
