---
outline: deep
---

# Bills

This section covers airtime, data, electricity, and cable TV payments, and the billers and products you pay for.

## bills

Use `sdk.api.bills` for the whole bill payment flow.

### Methods

- `create(body)` calls `POST /api/v1/bills` to pay for `Airtime`, `Data`, `Electricity`, or `Television`.
- `list(query?)` calls `GET /api/v1/bills`. Filter with `category`, `status`, `accountId`, or `customerReference`.
- `get(billPaymentId, query?)` calls `GET /api/v1/bills/{billPaymentId}`.
- `billers(query?)` calls `GET /api/v1/bills/billers`. Filter with `category`.
- `products(billerId)` calls `GET /api/v1/bills/billers/{billerId}/products` for product slugs and price ranges.
- `validateCustomer(productSlug, customerId)` calls `GET /api/v1/bills/customer-validation/{productSlug}/{customerId}` to confirm the name on a smart card or meter before paying.

Bill payments are debited from a deposit account and settle asynchronously: listen for `billpayment.successful` or `billpayment.failed`.

### The Flow

1. List billers for a category, then a biller's products to get a `productSlug`.
2. For electricity and cable TV, confirm the meter or smart card with `validateCustomer`.
3. Pay with `create`, using a unique `reference`.

### Example

```ts
const { data: billers } = await sdk.api.bills.billers({ category: 'electricity' })
const { data: products } = await sdk.api.bills.products(billers[0].id)
const productSlug = products[0].attributes.slug!

const { data: meter } = await sdk.api.bills.validateCustomer(productSlug, '04042404048')
meter.attributes.customerName // confirm with the user before paying

await sdk.api.bills.create({
  type: 'Electricity',
  attributes: {
    meterAccountNumber: '04042404048',
    phoneNumber: '2348012345678',
    productSlug,
    amount: 500_000,
    reference: 'power-2026-10-12',
  },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})
```

### Airtime and Data

```ts
await sdk.api.bills.create({
  type: 'Airtime',
  attributes: {
    phoneNumber: '2348012345678',
    provider: 'mtn',
    amount: 10_000,
    reference: 'airtime-77',
  },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})

await sdk.api.bills.create({
  type: 'Data',
  attributes: {
    phoneNumber: '2348012345678',
    productSlug: '9mobile_data_1_5gb_30_days_',
    reference: 'data-78',
  },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})
```

### Cable TV

```ts
await sdk.api.bills.create({
  type: 'Television',
  attributes: {
    smartCardNumber: '7030495169',
    phoneNumber: '2348012345678',
    productSlug: 'dstv_dstv_premium_month_1_21000ngn',
    reference: 'dstv-79',
  },
  relationships: {
    account: { data: { id: accountId, type: 'DepositAccount' } },
  },
})
```
