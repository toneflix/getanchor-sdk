---
outline: deep
---

# Cards

This section covers card issuance and lifecycle, safely revealing card details, moving money onto and off cards, and reading card payments.

Your API key needs card permissions, and a customer must pass KYC or KYB before a card can be issued.

## cards

Use `sdk.api.cards` for the card lifecycle.

### Methods

- `create(body)` calls `POST /api/v1/cards` to issue a card from one of your card products.
- `list(query?)` calls `GET /api/v1/cards`. Filter with `customerId` or `accountId`.
- `get(cardId, query?)` calls `GET /api/v1/cards/{cardId}` for non-sensitive details (masked PAN, last four, status, balance).
- `update(cardId, body)` calls `POST /api/v1/cards/{cardId}`. The description is the only attribute that can change.
- `freeze(cardId)` calls `POST /api/v1/cards/{cardId}/freeze`.
- `unfreeze(cardId)` calls `POST /api/v1/cards/{cardId}/unfreeze`.
- `cancel(cardId)` calls `DELETE /api/v1/cards/{cardId}`.
- `createRevealToken(cardId)` calls `POST /api/v1/cards/{cardId}/reveal-token`.
- `revealDetails({ cardId })` mints a reveal token and calls `GET /api/v1/cards/details` with it, in one call. `revealDetails(revealToken)` uses a token you minted yourself.

Card issuance is asynchronous: a new card comes back `PENDING`, and is ready once `card.created` arrives. After a freeze or unfreeze, display the status the response returns rather than assuming it; not every frozen card can be unfrozen.

### Example

```ts
const { data: card } = await sdk.api.cards.create({
  type: 'Card',
  attributes: { description: 'Operations expense card', productName: 'VIRTUAL_PREPAID_TEST' },
  relationships: {
    customer: { data: { id: customerId, type: 'IndividualCustomer' } },
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})

const { data: fetched } = await sdk.api.cards.get(card.id)
fetched.attributes.last4

const { data: frozen } = await sdk.api.cards.freeze(card.id)
frozen.attributes.cardStatus // e.g. INACTIVE
```

### Revealing Card Details

Revealing the PAN, CVV, PIN, and expiry is a two-step flow in Anchor: mint a short-lived token for the card, then exchange it for the details, sending the token as the bearer credential instead of your API key.

Pass `{ cardId }` and the SDK does both steps for you. A fresh token is minted for every call and spent immediately, so it never reaches your code:

```ts
const { data: details } = await sdk.api.cards.revealDetails({ cardId })

details.attributes.pan
details.attributes.cvv
details.attributes.expiryMonth
details.attributes.expiryYear
```

If you need the token itself, for example to hand it to a client-side card widget, mint it with `createRevealToken` and pass it in:

```ts
const { data: token } = await sdk.api.cards.createRevealToken(cardId)
// token.expiresInSeconds, e.g. 300

const { data: details } = await sdk.api.cards.revealDetails(token.token)
```

::: danger
Never store or log the card details. If you mint tokens yourself, generate a new one for every reveal, never put it in a URL, and discard it as soon as `revealDetails` returns.
:::

## cardTransfers

Use `sdk.api.cardTransfers.create(body)` to move money between a deposit account and a card.

- Method: `create(body)`
- Endpoint: `POST /api/v1/card-transfers`
- Context: The direction comes from the relationships. A `DepositAccount` source and `Card` destination funds the card; a `Card` source and `DepositAccount` destination unfunds it.

Card transfers start `PENDING`. The outcome arrives as `cardTransfer.completed` or `cardTransfer.failed`.

### Example

```ts
// Fund
await sdk.api.cardTransfers.create({
  type: 'CardTransfer',
  attributes: { amount: 2_000, currency: 'USD', reference: 'fund-card-1' },
  relationships: {
    source: { data: { id: accountId, type: 'DepositAccount' } },
    destination: { data: { id: cardId, type: 'Card' } },
  },
})

// Unfund
await sdk.api.cardTransfers.create({
  type: 'CardTransfer',
  attributes: { amount: 500, customerReference: 'unfund-card-1', description: 'Return balance' },
  relationships: {
    source: { data: { id: cardId, type: 'Card' } },
    destination: { data: { id: accountId, type: 'DepositAccount' } },
  },
})
```

## cardPayments

Use `sdk.api.cardPayments` for purchases, refunds, and declines made with your cards.

- `list(query?)` calls `GET /api/v1/card-payments`.
- `get(paymentId, query?)` calls `GET /api/v1/card-payments/{paymentId}`.

A card payment keeps running totals in `amounts` (all minor units): `authorized`, `settled`, `adjusted`, `reversed`, `refundAuthorized`, and `refunded`. Its `status` moves through `AUTHORIZED`, `SETTLED`, `VOIDED`, `REVERSED`, `REFUND_REQUESTED`, `REFUNDED`, and `DECLINED`, and each step arrives as a `cardPayment.*` event.

### Example

```ts
const { data: payment, included } = await sdk.api.cardPayments.get(paymentId, {
  include: 'CardPaymentHistory',
})

payment.attributes.status // e.g. SETTLED
payment.attributes.amounts?.settled // use this for the settled total
payment.attributes.merchant?.name
```

::: tip
Use `amounts.settled` for the settled total. Do not add `amounts.adjusted` to it: the corrected settlement already includes any adjustment. A refund can arrive as a separate card payment rather than updating the original purchase.
:::
