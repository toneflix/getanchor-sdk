---
outline: deep
---

# Customers and Onboarding

This section covers creating individual and business customers, KYC and KYB verification, business officers, next of kin, and the documents Anchor needs to approve a business.

A customer must pass KYC (individuals) or KYB (businesses) before Anchor will open a deposit account or issue a card for them.

## customers

Use `sdk.api.customers` for the customer lifecycle and identity verification.

### Methods

- `create(body)` calls `POST /api/v1/customers` to create an `IndividualCustomer` or `BusinessCustomer`.
- `list(query?)` calls `GET /api/v1/customers`. Filter with `customerType`, `query`, or `metadata`.
- `get(customerId, query?)` calls `GET /api/v1/customers/{customerId}`.
- `update(customerId, body)` calls `PUT /api/v1/customers/update/{customerId}`.
- `delete(customerId)` calls `DELETE /api/v1/customers/{customerId}`.
- `search(query)` calls `GET /api/v1/customers/search` to find a customer by BVN, email, phone number, or RC number. `customerType` is required.
- `verifyIndividual(customerId, body)` calls `POST /api/v1/customers/{customerId}/verification/individual` to start Tier 2 or Tier 3 KYC.
- `verifyBusiness(customerId)` calls `POST /api/v1/customers/{customerId}/verification/business` to start KYB.
- `officersRequirement(customerId)` calls `GET /api/v1/customers/{customerId}/officers-requirement` for the minimum directors and owners a business must declare.

Verification is asynchronous. The calls return an acknowledgement, and the outcome arrives as `customer.identification.*` webhook events (`approved`, `rejected`, `manualReview`, `awaitingDocument`, `error`).

### Example

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

await sdk.api.customers.verifyIndividual(customer.id, {
  type: 'Verification',
  attributes: {
    level: 'TIER_2',
    level2: { bvn: '22222222226', dateOfBirth: '1994-06-25', gender: 'Female' },
  },
})

const { data: matches } = await sdk.api.customers.search({
  customerType: 'IndividualCustomer',
  searchValue: '22222222226',
})
```

### Business Customers

A business customer carries its registration details, contact, and officers in one request:

```ts
await sdk.api.customers.create({
  type: 'BusinessCustomer',
  attributes: {
    basicDetail: {
      businessName: 'Great Business Ltd',
      businessBvn: '22222222226',
      industry: 'Commerce-DigitalServices',
      registrationType: 'Private_Incorporated',
      dateOfRegistration: '2020-01-15',
      description: 'Software services',
      country: 'NG',
    },
    contact: {
      email: { general: 'hello@great.example' },
      phoneNumber: '07012345678',
      address: {
        main: {
          addressLine_1: '12 James Street',
          city: 'Ikeja',
          state: 'LAGOS',
          postalCode: '100035',
          country: 'NG',
        },
      },
    },
    officers: [
      {
        role: 'DIRECTOR',
        fullName: { firstName: 'Josh', lastName: 'Steve' },
        dateOfBirth: '1994-06-25',
        email: 'josh@great.example',
        phoneNumber: '07012345678',
        nationality: 'NG',
        address: {
          addressLine_1: '1 James Street',
          city: 'Yaba',
          state: 'LAGOS',
          postalCode: '100032',
          country: 'NG',
        },
        bvn: '22222222226',
        percentageOwned: 100,
      },
    ],
  },
})
```

## businesses

Use `sdk.api.businesses` to change a business customer after creation and to manage its officers.

### Methods

- `update(businessId, body)` calls `PATCH /api/v1/businesses/{businessId}` to change the name, registration type, registration date, or addresses.
- `addOfficer(businessId, body)` calls `POST /api/v1/businesses/{businessId}/officers` to add a director or owner.
- `updateOfficer(businessId, officerId, body)` calls `PATCH /api/v1/businesses/{businessId}/officers/{officerId}`.
- `deleteOfficer(businessId, officerId)` calls `DELETE /api/v1/businesses/{businessId}/officers/{officerId}`.

### Example

```ts
await sdk.api.businesses.update(businessId, {
  type: 'BusinessCustomerV2',
  attributes: { businessName: 'XBC Limited' },
})

await sdk.api.businesses.updateOfficer(businessId, officerId, {
  type: 'BusinessOfficer',
  attributes: { role: 'OWNER', percentageOwned: 75 },
})
```

## nextOfKin

Use `sdk.api.nextOfKin` to manage an individual customer's next of kin.

- `create(customerId, body)` calls `POST /api/v1/individuals/{customerId}/next-of-kin`.
- `list(customerId, query?)` calls `GET /api/v1/individuals/{customerId}/next-of-kin`.
- `get(customerId, nextOfKinId, query?)` calls `GET /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}`.
- `update(customerId, nextOfKinId, body)` calls `PATCH /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}`.
- `delete(customerId, nextOfKinId)` calls `DELETE /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}`.

### Example

```ts
await sdk.api.nextOfKin.create(customerId, {
  type: 'NextOfKin',
  attributes: {
    fullName: { firstName: 'Chidi', lastName: 'Obi' },
    relationship: 'Brother',
    phoneNumber: '08098765432',
    email: 'chidi@example.com',
    address: {
      addressLine_1: '1 James Street',
      city: 'Yaba',
      state: 'LAGOS',
      postalCode: '100032',
      country: 'NG',
    },
  },
})
```

## documents

Use `sdk.api.documents` for the documents a business needs for KYB. After `verifyBusiness`, Anchor sends `customer.identification.awaitingDocument` listing what is still required.

- `list(customerId, query?)` calls `GET /api/v1/documents/{customerId}` to see required and submitted documents.
- `get(customerId, documentId, query?)` calls `GET /api/v1/documents/{customerId}/{documentId}`.
- `download(customerId, documentId)` calls `GET /api/v1/documents/download-document/{customerId}/{documentId}`.
- `upload(customerId, documentId, input)` calls `POST /api/v1/documents/upload-document/{customerId}/{documentId}`.

`upload` takes either a file, sent as multipart form data, or a text value such as a TIN or RC number. The `file` can be any of:

- an absolute path on disk, or a `file://` URL;
- an `http(s)://` URL, which the SDK downloads first;
- a `Blob` or `File`, or raw bytes (`Buffer`, `Uint8Array`).

The file name and content type are inferred from the path, the download's `Content-Disposition` and `Content-Type` headers, or the file extension. Pass `fileName` or `contentType` to override them. Relative paths are rejected, and a file that cannot be read or downloaded throws `AnchorFileError` before anything is sent to Anchor.

### Example

```ts
const { data: documents } = await sdk.api.documents.list(businessId)

// From disk
await sdk.api.documents.upload(businessId, cacDocumentId, {
  file: '/var/uploads/kyb/cac-certificate.pdf',
})

// From your own storage
await sdk.api.documents.upload(businessId, memorandumDocumentId, {
  file: 'https://storage.example.com/kyb/memorandum.pdf?signature=abc',
})

// From bytes you already hold
await sdk.api.documents.upload(businessId, proofOfAddressDocumentId, {
  file: uploadedBuffer,
  fileName: 'proof-of-address.jpg',
  contentType: 'image/jpeg',
})

// A text value instead of a file
await sdk.api.documents.upload(businessId, tinDocumentId, {
  text: '12345678-0001',
})
```

::: warning
Downloading a URL makes a request from your server. Only pass URLs you control or trust, such as signed links to your own storage. Passing a URL taken directly from user input lets that user make your server fetch arbitrary addresses.
:::
