import type {
  Bank,
  Currency,
  ListQuery,
  OpenString,
  RelationshipInput,
  RequestDocument,
  Resource,
} from './common'

export type AccountStatus = OpenString<'ACTIVE' | 'BLOCKED' | 'CLOSED' | 'DEPRECATED'>

export type FreezeReason = 'FRAUD' | 'BY_CUSTOMER' | 'OTHER' | 'NONE'

export type AccountLimits = Record<string, unknown>

export interface DepositAccountAttributes {
  accountName?: string
  /** Masked on most reads; the full number lives on the account's AccountNumber. */
  accountNumber?: string
  currency?: Currency
  /** `SAVINGS` or `CURRENT`. */
  type?: string
  status?: AccountStatus
  bank?: Bank
  bankName?: string
  frozen?: boolean
  frozenBy?: string
  freezeReason?: FreezeReason
  freezeDescription?: string
  routingNumber?: string
  limits?: AccountLimits
  availableBalance?: number
  ledgerBalance?: number
  holdBalance?: number
  pendingBalance?: number
  createdAt?: string
  metadata?: Record<string, string> | string[]
}

export type DepositAccountType = 'DepositAccount' | 'ElectronicAccount'

export type DepositAccount = Resource<
  DepositAccountType,
  DepositAccountAttributes,
  'customer' | 'subAccounts' | 'virtualNubans' | 'accountNumbers' | 'organization'
>

export type CreateAccountInput =
  | RequestDocument<{
      type: 'DepositAccount'
      attributes: {
        /** The account product, e.g. `SAVINGS` or `CURRENT`. */
        productName: string
        metadata?: Record<string, string>
      }
      relationships: {
        customer: RelationshipInput<'IndividualCustomer' | 'BusinessCustomer'>
      }
    }>
  | RequestDocument<{
      type: 'ElectronicAccount'
      attributes?: {
        productName?: string
        customer?: { id: string; type?: string }
        currency?: Currency
      }
    }>

export type UpdateAccountInput = RequestDocument<{
  type: 'DepositAccount'
  attributes: { productName: string }
  relationships?: {
    customer: RelationshipInput<'IndividualCustomer' | 'BusinessCustomer'>
  }
}>

export interface AccountListQuery extends ListQuery {
  accountType?: string
  customerId?: string
  accountId?: string
  metadata?: string
  query?: string
}

export interface RootAccountQuery {
  accountType?: 'MASTER' | 'REVENUE' | 'SETTLEMENT' | 'FBO'
  include?: string | string[]
}

export interface AccountBalance {
  /** Spendable balance, in minor units. */
  availableBalance?: number
  /** Balance at the last reconciliation, in minor units. */
  ledgerBalance?: number
  hold?: number
  pending?: number
}

export type FreezeAccountInput = RequestDocument<{
  type: 'DepositAccount'
  attributes: {
    freezeReason: FreezeReason
    freezeDescription?: string
  }
}>

export type UnfreezeAccountInput = RequestDocument<{
  type: string
  attributes: {
    /** The id of the account to unfreeze. */
    id: string
    type?: string
  }
}>

export type SubAccountType = 'IMPLICIT' | 'REGULAR'

export type SubAccount = Resource<
  'SubAccount',
  {
    accountType?: SubAccountType
    createdAt?: string
    metadata?: Record<string, string> | string[]
  },
  'customer' | 'parentAccount' | 'virtualNubans' | 'organization'
>

export type SubAccountInput = RequestDocument<{
  type: 'SubAccount'
  attributes?: {
    createVirtualNuban?: boolean
    metadata?: Record<string, string>
  }
  relationships: {
    parentAccount: RelationshipInput<'DepositAccount'>
    customer?: RelationshipInput<'IndividualCustomer' | 'BusinessCustomer'>
  }
}>

export interface SubAccountListQuery extends ListQuery {
  customerId?: string
  type?: SubAccountType
  accountId?: string
  queryString?: string
}

export interface SubAccountTransactionQuery extends ListQuery {
  subAccountId?: string
  parentAccount?: string
  startDate?: string
  toDate?: string
  type?: 'NIP_TRANSFER' | 'BOOK_TRANSFER' | 'SETTLEMENT' | 'NIP_TRANSFER_REVERSAL'
  direction?: 'Debit' | 'Credit'
}

/**
 * An account number is a pointer to a deposit account. One deposit account can
 * carry many account numbers.
 */
export type AccountNumber = Resource<
  'AccountNumber',
  {
    accountName?: string
    /** Single-account reads return the account name as `name`. */
    name?: string
    accountNumber?: string
    bank?: Bank
    currency?: Currency
    isDefault?: boolean
    permanent?: boolean
    status?: AccountStatus
    createdAt?: string
    updatedAt?: string
  },
  'settlementAccount' | 'account' | 'customer'
>

/**
 * The account number behind a sub-account (and other virtual accounts). Its
 * `subAccount` relationship ties an incoming deposit back to the sub-account.
 */
export type VirtualNuban = Resource<
  'VirtualNuban',
  {
    accountName?: string
    accountNumber?: string
    bank?: Bank
    currency?: Currency
    isDefault?: boolean
    permanent?: boolean
    status?: AccountStatus
    createdAt?: string
  },
  'settlementAccount' | 'subAccount' | 'customer'
>

export interface AccountNumberListQuery extends ListQuery {
  /** The deposit account id. Anchor spells this parameter with a capital `A`. */
  AccountId?: string
}

/**
 * A bank transfer received into a virtual NUBAN, such as a sub-account's account
 * number. It settles onto the sub-account as a `Settlement` transaction that
 * links back here.
 */
export type Payment = Resource<
  'Payment',
  {
    /** Gross amount the sender paid, in minor units. */
    amount?: number
    /** Anchor's fee on the deposit, in minor units. */
    fee?: number
    currency?: Currency
    /** The NIP reference of the incoming transfer. */
    paymentReference?: string
    narration?: string
    /** e.g. `BankTransfer`. */
    type?: string
    counterParty?: {
      accountNumber?: string
      accountName?: string
      bank?: { name?: string }
    }
    paidAt?: string
    createdAt?: string
  },
  'virtualNuban' | 'settlementAccount' | 'settlements'
>

/** Created when an account number receives a bank (NIP) transfer. */
export type InboundTransfer = Resource<
  'InboundNIPTransfer',
  {
    reference?: string
    /** Minor units. */
    amount?: number
    currency?: Currency
    description?: string
    sessionId?: string
    sourceAccountNumber?: string
    sourceAccountName?: string
    sourceBank?: { name?: string }
    status?: OpenString<'PENDING' | 'COMPLETED' | 'FAILED'>
    createdAt?: string
    updatedAt?: string
  },
  'account'
>
