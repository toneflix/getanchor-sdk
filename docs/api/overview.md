# API Overview

Every Anchor endpoint is a method on `anchor.api.<namespace>`. Each method takes its documented inputs, then an optional `RequestOptions` (`{ idempotencyKey?, headers? }`) last.

Single-resource methods resolve to `AnchorDocument<T>` (`{ data, included?, meta? }`); list methods resolve to `AnchorCollection<T>` (`{ data: T[], included?, meta: { pagination } }`). Write methods take the resource object Anchor's docs show under `data` (`{ type, attributes, relationships }`, or an array for bulk endpoints); the SDK adds the `{ data }` envelope.

Amounts are always minor units (kobo / cents).

## customers

| Method | Endpoint | Description |
| --- | --- | --- |
| `customers.create(body)` | `POST /api/v1/customers` | Create an individual or business customer. |
| `customers.list(query)` | `GET /api/v1/customers` | List customers. Paginated. |
| `customers.get(customerId, query)` | `GET /api/v1/customers/{customerId}` | Fetch a customer. |
| `customers.update(customerId, body)` | `PUT /api/v1/customers/update/{customerId}` | Update a customer's contact and identification details. |
| `customers.delete(customerId)` | `DELETE /api/v1/customers/{customerId}` | Delete a customer. |
| `customers.search(query)` | `GET /api/v1/customers/search` | Find an individual or business customer by BVN, email, phone number or RC number. |
| `customers.verifyIndividual(customerId, body)` | `POST /api/v1/customers/{customerId}/verification/individual` | Start Tier 2 or Tier 3 KYC for an individual customer. The outcome arrives as `customer.identification.*` webhook events. |
| `customers.verifyBusiness(customerId)` | `POST /api/v1/customers/{customerId}/verification/business` | Start KYB for a business customer. Anchor follows up with `customer.identification.awaitingDocument` listing the documents to upload. |
| `customers.officersRequirement(customerId)` | `GET /api/v1/customers/{customerId}/officers-requirement` | The minimum number of directors and owners a business customer must declare. |

## businesses

| Method | Endpoint | Description |
| --- | --- | --- |
| `businesses.update(businessId, body)` | `PATCH /api/v1/businesses/{businessId}` | Update a business customer's name, registration details or addresses. |
| `businesses.addOfficer(businessId, body)` | `POST /api/v1/businesses/{businessId}/officers` | Add a director or owner to a business customer. |
| `businesses.updateOfficer(businessId, officerId, body)` | `PATCH /api/v1/businesses/{businessId}/officers/{officerId}` | Update a business officer's name, role, ownership or date of birth. |
| `businesses.deleteOfficer(businessId, officerId)` | `DELETE /api/v1/businesses/{businessId}/officers/{officerId}` | Remove a business officer. |

## nextOfKin

| Method | Endpoint | Description |
| --- | --- | --- |
| `nextOfKin.create(customerId, body)` | `POST /api/v1/individuals/{customerId}/next-of-kin` | Add a next of kin to an individual customer. |
| `nextOfKin.list(customerId, query)` | `GET /api/v1/individuals/{customerId}/next-of-kin` | List an individual customer's next of kin. |
| `nextOfKin.get(customerId, nextOfKinId, query)` | `GET /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}` | Fetch a next of kin. |
| `nextOfKin.update(customerId, nextOfKinId, body)` | `PATCH /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}` | Update a next of kin. |
| `nextOfKin.delete(customerId, nextOfKinId)` | `DELETE /api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}` | Delete a next of kin. Anchor answers `204 No Content`. |

## documents

| Method | Endpoint | Description |
| --- | --- | --- |
| `documents.list(customerId, query)` | `GET /api/v1/documents/{customerId}` | List the documents a customer has, or still needs, for KYB. |
| `documents.get(customerId, documentId, query)` | `GET /api/v1/documents/{customerId}/{documentId}` | Fetch a document. |
| `documents.download(customerId, documentId)` | `GET /api/v1/documents/download-document/{customerId}/{documentId}` | Download an uploaded document. |
| `documents.upload(customerId, documentId, input)` | `POST /api/v1/documents/upload-document/{customerId}/{documentId}` | Fulfil a required document, either as a file (multipart `fileData`) or as a text value such as a TIN or RC number (`textData`). |

## accounts

| Method | Endpoint | Description |
| --- | --- | --- |
| `accounts.create(body)` | `POST /api/v1/accounts` | Open a deposit (or electronic) account for a verified customer. Anchor emits `account.opened` once it is ready. |
| `accounts.list(query)` | `GET /api/v1/accounts` | List deposit accounts. Paginated. |
| `accounts.get(accountId, query)` | `GET /api/v1/accounts/{accountId}` | Fetch a deposit account. Pass `include: 'AccountNumber'` to get its unmasked account numbers in `included`. |
| `accounts.update(accountId, body)` | `PATCH /api/v1/accounts/{accountId}` | Change a deposit account's product. |
| `accounts.balance(accountId)` | `GET /api/v1/accounts/balance/{accountId}` | Fetch an account's available, ledger, hold and pending balances (minor units). |
| `accounts.rootAccounts(query)` | `GET /api/v1/accounts/root-accounts` | List the organisation's own master, revenue, settlement and FBO accounts. |
| `accounts.freeze(accountId, body)` | `POST /api/v1/accounts/{accountId}/freeze` | Freeze an account. A frozen account cannot send or receive money. |
| `accounts.unfreeze(body)` | `POST /api/v1/accounts/unfreeze` | Unfreeze an account. The account id travels in the body. |

## accountNumbers

| Method | Endpoint | Description |
| --- | --- | --- |
| `accountNumbers.list(query)` | `GET /api/v1/account-numbers` | List the account numbers that point at a deposit account. Pass the deposit account id as `AccountId`. |

## subAccounts

| Method | Endpoint | Description |
| --- | --- | --- |
| `subAccounts.create(body)` | `POST /api/v1/sub-accounts` | Create a sub account (subledger) under a deposit account. |
| `subAccounts.list(query)` | `GET /api/v1/sub-accounts` | List sub accounts. Paginated. |
| `subAccounts.get(subAccountId, query)` | `GET /api/v1/sub-accounts/{subAccountId}` | Fetch a sub account. |
| `subAccounts.update(subAccountId, body)` | `PATCH /api/v1/sub-accounts/{subAccountId}` | Update a sub account. |
| `subAccounts.balance(subAccountId)` | `GET /api/v1/sub-accounts/balance/{subAccountId}` | Fetch a sub account's balances (minor units). |
| `subAccounts.transactions(query)` | `GET /api/v1/sub-accounts/transactions` | List sub account transactions. Paginated. |

## inboundTransfers

| Method | Endpoint | Description |
| --- | --- | --- |
| `inboundTransfers.get(inboundTransferId, query)` | `GET /api/v1/inbound-transfers/{inboundTransferId}` | Fetch a bank transfer received into one of your account numbers. This replaces the retired `/api/v1/payments` endpoints for account numbers. |

## counterparties

| Method | Endpoint | Description |
| --- | --- | --- |
| `counterparties.create(body)` | `POST /api/v1/counterparties` | Save an external bank account as a transfer beneficiary. |
| `counterparties.createBulk(body)` | `POST /api/v1/counterparties/bulk` | Save several counterparties in one request. |
| `counterparties.list(query)` | `GET /api/v1/counterparties` | List counterparties. Paginated. |
| `counterparties.get(counterPartyId, query)` | `GET /api/v1/counterparties/{counterPartyId}` | Fetch a counterparty. |
| `counterparties.update(counterPartyId, body)` | `PATCH /api/v1/counterparties/{counterPartyId}` | Update a counterparty. |
| `counterparties.delete(counterPartyId)` | `DELETE /api/v1/counterparties/{counterPartyId}` | Delete a counterparty. |

## banks

| Method | Endpoint | Description |
| --- | --- | --- |
| `banks.list(query)` | `GET /api/v1/banks` | List the banks Anchor can send to, with their NIP codes. |
| `banks.verifyAccount(bankIdOrBankCode, accountNumber)` | `GET /api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}` | Name enquiry: resolve the account name behind a bank account number. |
| `banks.verifyAccounts(body)` | `POST /api/v1/payments/verify-account/bulk` | Name enquiry for several accounts at once. |

## transfers

| Method | Endpoint | Description |
| --- | --- | --- |
| `transfers.create(body)` | `POST /api/v1/transfers` | Start a book transfer (between Anchor accounts) or a NIP transfer (to a counterparty). Pass `options.idempotencyKey` so a retried request cannot move money twice. |
| `transfers.list(query)` | `GET /api/v1/transfers` | List transfers. Paginated. |
| `transfers.get(transferId, query)` | `GET /api/v1/transfers/{transferId}` | Fetch a transfer. |
| `transfers.verify(transferId, query)` | `GET /api/v1/transfers/verify/{transferId}` | Re-check a transfer's status with the processor. Use this before treating a pending transfer as failed. |
| `transfers.getByReference(reference, query)` | `GET /api/v1/transfers/by-reference/{reference}` | Fetch a transfer by the reference you gave it. Useful for reconciling a request that timed out before Anchor's response arrived. |
| `transfers.createBulk(body)` | `POST /api/v1/transfers/bulk` | Start many transfers in one request. |
| `transfers.getBulk(bulkTransferId, query)` | `GET /api/v1/transfers/bulk/{bulkTransferId}` | Fetch a bulk transfer and its progress counters. |

## transactions

| Method | Endpoint | Description |
| --- | --- | --- |
| `transactions.list(query)` | `GET /api/v1/transactions` | List an account's ledger entries. Paginated. `accountId` is required. |
| `transactions.get(transactionId, query)` | `GET /api/v1/transactions/{transactionId}` | Fetch a transaction. |

## fees

| Method | Endpoint | Description |
| --- | --- | --- |
| `fees.charge(body)` | `POST /api/v1/fee/custom-fee` | Debit a custom fee from a customer's deposit account. |
| `fees.reverse(feeId)` | `POST /api/v1/fee/reverse/{feeId}` | Refund a fee to the customer. |
| `fees.list(query)` | `GET /api/v1/fee/charged-by-organization` | List fees charged to customers. Paginated. |
| `fees.get(feeId)` | `GET /api/v1/fee/charged-by-organization/{feeId}` | Fetch a fee charged to a customer. |

## rewards

| Method | Endpoint | Description |
| --- | --- | --- |
| `rewards.create(body)` | `POST /api/v1/rewards` | Credit a customer's account from one of yours with an auditable "reward" label (sign-up bonuses, referral payouts, goodwill credits). |

## cards

| Method | Endpoint | Description |
| --- | --- | --- |
| `cards.create(body)` | `POST /api/v1/cards` | Issue a card to a verified customer. Issuance is asynchronous: the card comes back `PENDING`; wait for the `card.created` event before using it. |
| `cards.get(cardId, query)` | `GET /api/v1/cards/{cardId}` | Fetch a card's non-sensitive details (masked PAN, last four, status, balance). |
| `cards.update(cardId, body)` | `POST /api/v1/cards/{cardId}` | Change a card's description, the only attribute that can change after creation. |
| `cards.freeze(cardId)` | `POST /api/v1/cards/{cardId}/freeze` | Freeze a lost, stolen or unused card. Refresh the card afterwards rather than assuming the new status. |
| `cards.unfreeze(cardId)` | `POST /api/v1/cards/{cardId}/unfreeze` | Unfreeze a card. Not every frozen card is eligible; check the returned status. |
| `cards.cancel(cardId)` | `DELETE /api/v1/cards/{cardId}` | Cancel a card permanently. |
| `cards.createRevealToken(cardId)` | `POST /api/v1/cards/{cardId}/reveal-token` | Step 1 of revealing PAN, CVV, PIN and expiry: mint a short-lived token scoped to this card. Generate one per reveal; never store or log it. |
| `cards.revealDetails(revealToken, 'idempotencyKey'>)` | `GET /api/v1/cards/details` | Step 2: exchange a reveal token for the card's sensitive details. The token identifies the card, and is sent as the bearer credential *instead of* your API key. Discard the token once this returns. |

## cardTransfers

| Method | Endpoint | Description |
| --- | --- | --- |
| `cardTransfers.create(body)` | `POST /api/v1/card-transfers` | Fund a card from a deposit account, or unfund it back. The direction comes from the `source` and `destination` relationship types. Starts `PENDING`; settle on `cardTransfer.completed` or `cardTransfer.failed`. |

## cardPayments

| Method | Endpoint | Description |
| --- | --- | --- |
| `cardPayments.list(query)` | `GET /api/v1/card-payments` | List purchases, refunds and declines made with your cards. Paginated. |
| `cardPayments.get(paymentId, query)` | `GET /api/v1/card-payments/{paymentId}` | Fetch a card payment. Pass `include: 'CardPaymentHistory'` for its lifecycle entries. |

## reservedAccounts

| Method | Endpoint | Description |
| --- | --- | --- |
| `reservedAccounts.create(body)` | `POST /pay/reserved-account` | Create a permanent account number for a customer. Pass an existing customer relationship, or customer details to create both in one call. Anchor emits `reservedAccount.created` or `reservedAccount.failed`. |

## payWithTransfers

| Method | Endpoint | Description |
| --- | --- | --- |
| `payWithTransfers.create(body)` | `POST /pay/pay-with-transfer` | Create a dynamic account number that expects one payment of a set amount and expires (at most one hour). |
| `payWithTransfers.get(payWithTransferId, query)` | `GET /pay/pay-with-transfer/{payWithTransferId}` | Fetch a pay-with-transfer account. Once paid, its `payin` relationship is set. |

## payIns

| Method | Endpoint | Description |
| --- | --- | --- |
| `payIns.get(payInId, query)` | `GET /pay/payin/{payInId}` | Fetch a payment received into a reserved or pay-with-transfer account. Pass `include: 'Charge,ReservedAccount'` for sender details. This replaces the retired `/api/v1/payments` endpoints for reserved accounts. |

## bills

| Method | Endpoint | Description |
| --- | --- | --- |
| `bills.create(body)` | `POST /api/v1/bills` | Pay for airtime, data, electricity or cable TV from a deposit account. The outcome arrives as `billpayment.successful` or `billpayment.failed`. |
| `bills.list(query)` | `GET /api/v1/bills` | List bill payments. Paginated. |
| `bills.get(billPaymentId, query)` | `GET /api/v1/bills/{billPaymentId}` | Fetch a bill payment. |
| `bills.billers(query)` | `GET /api/v1/bills/billers` | List billers, optionally by category. Paginated. |
| `bills.products(billerId)` | `GET /api/v1/bills/billers/{billerId}/products` | List a biller's products, with their slugs and price ranges. |
| `bills.validateCustomer(productSlug, customerId)` | `GET /api/v1/bills/customer-validation/{productSlug}/{customerId}` | Confirm the name on a smart card or meter number before paying. |

## statements

| Method | Endpoint | Description |
| --- | --- | --- |
| `statements.create(body)` | `POST /api/v1/statements` | Generate an account statement. Generation is asynchronous; download once `statement.completed` arrives. |
| `statements.list(query)` | `GET /api/v1/statements` | List statements. Paginated. |
| `statements.get(statementId, query)` | `GET /api/v1/statements/{statementId}` | Fetch a statement. |
| `statements.download(statementId)` | `GET /api/v1/statements/download/{statementId}` | Download a completed statement. |

## reports

| Method | Endpoint | Description |
| --- | --- | --- |
| `reports.create(body)` | `POST /api/v1/reports` | Generate a transaction-history or balance-summary report. Download once the matching `*.reporting.completed` event arrives. |
| `reports.list(query)` | `GET /api/v1/reports` | List reports. Paginated. |
| `reports.get(reportId, query)` | `GET /api/v1/reports/{reportId}` | Fetch a report. |
| `reports.download(reportId)` | `GET /api/v1/reports/download/{reportId}` | Download a completed report. |

## events

| Method | Endpoint | Description |
| --- | --- | --- |
| `events.list(query)` | `GET /api/v1/events` | List events, newest first. Paginated. Useful to replay anything a webhook delivery missed. |
| `events.get(eventId, query)` | `GET /api/v1/events/{eventId}` | Fetch an event. Pass `include` to expand the resources it points at. |
| `events.types()` | `GET /api/v1/events/event-types` | List every event type with its description. |

## webhooks

| Method | Endpoint | Description |
| --- | --- | --- |
| `webhooks.create(body)` | `POST /api/v1/webhooks` | Register a webhook endpoint. `token` becomes the signing secret for `x-anchor-signature`; verify deliveries with `AnchorWebhooks`. |
| `webhooks.list(query)` | `GET /api/v1/webhooks` | List webhooks. Paginated. |
| `webhooks.get(webhookId)` | `GET /api/v1/webhooks/{webhookId}` | Fetch a webhook. |
| `webhooks.update(webhookId, body)` | `PATCH /api/v1/webhooks/{webhookId}` | Update a webhook. |
| `webhooks.delete(webhookId)` | `DELETE /api/v1/webhooks/{webhookId}` | Delete a webhook. Anchor answers `204 No Content`. |
| `webhooks.sendSample(webhookId, body)` | `POST /api/v1/webhooks/verify/{webhookId}` | Send a sample event to a webhook and return what your endpoint answered. |

## countries

| Method | Endpoint | Description |
| --- | --- | --- |
| `countries.list(query)` | `GET /api/v1/countries` | List supported countries, or find one with `countryCode`. |
| `countries.states(countryCode)` | `GET /api/v1/countries/{countryCode}/states` | List the states Anchor accepts in addresses for a country. |
