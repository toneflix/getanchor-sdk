# API Overview

Anchor endpoints are grouped into generated namespaces under `sdk.api`. Each namespace exposes only the methods available for that resource, such as `create`, `list`, `get`, `update`, or `delete`.

## Core Banking

| Namespace                | Purpose                                          |
| ------------------------ | ------------------------------------------------ |
| `accountApis`            | Create, list, fetch, and update deposit accounts |
| `subAccountApis`         | Create, list, fetch, and update sub-accounts     |
| `balances`               | Fetch an account balance                         |
| `subAccountBalances`     | Fetch a sub-account balance                      |
| `transactions`           | List and fetch transactions                      |
| `subAccountTransactions` | List sub-account transactions                    |
| `bankApis`               | List supported banks                             |

## Customers and Verification

| Namespace                      | Purpose                                   |
| ------------------------------ | ----------------------------------------- |
| `customerApis`                 | Create, list, fetch, and delete customers |
| `businessVerifications`        | Submit business verification              |
| `individualVerifications`      | Submit individual verification            |
| `nextOfKinIndividuals`         | Manage individual next-of-kin records     |
| `officersRequirementCustomers` | Fetch customer officer requirements       |

## Money Movement

| Namespace          | Purpose                             |
| ------------------ | ----------------------------------- |
| `transferApis`     | Initiate, list, and fetch transfers |
| `transferBulks`    | Create and fetch bulk transfers     |
| `payments`         | List and fetch payments             |
| `deposits`         | Create, list, and fetch deposits    |
| `withdrawals`      | Create, list, and fetch withdrawals |
| `counterpartyApis` | Manage counterparties               |
| `reverses`         | Reverse supported operations        |
| `requeries`        | Requery an operation                |

## Bills and Savings

| Namespace         | Purpose                               |
| ----------------- | ------------------------------------- |
| `billApis`        | Create, list, and fetch bill payments |
| `billers`         | List billers                          |
| `billerProducts`  | List biller products                  |
| `savingApis`      | Create, list, and fetch savings       |
| `rolloverSavings` | Roll over a saving                    |

## Operations

| Namespace       | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `statementApis` | Create, list, and fetch statements               |
| `reportApis`    | Create, list, and fetch reports                  |
| `eventApis`     | List and fetch events                            |
| `webhookApis`   | Create, list, fetch, update, and delete webhooks |
| `apiDocuments`  | Inspect the generated API document               |

## Example

```ts
import { createClient, type TransferInput } from 'getanchor-sdk';

const anchor = createClient({
  apiKey: process.env.ANCHOR_API_KEY!,
  environment: 'sandbox',
});

const transfer: TransferInput = {
  data: {
    // Add the fields required by your Anchor transfer flow.
  },
};

await anchor.api.transferApis.create(transfer);
```

For less common operations, use TypeScript autocomplete on `sdk.api` or inspect the generated JSDoc in `src/Apis`.
