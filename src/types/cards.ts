import type {
  Currency,
  ListQuery,
  OpenString,
  RelationshipInput,
  RequestDocument,
  Resource,
} from './common'

export type CardStatus = OpenString<'PENDING' | 'ACTIVE' | 'INACTIVE' | 'CANCELED'>

export interface CardBalance {
  available?: number
  ledger?: number
  pending?: number
  hold?: number
}

export interface CardBillingAddress {
  line1?: string
  line2?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
}

export type Card = Resource<
  'Card',
  {
    description?: string
    productName?: string
    currency?: Currency
    /** `status` on create/fetch, `cardStatus` on update/freeze responses. */
    status?: CardStatus
    cardStatus?: CardStatus
    maskedPan?: string
    last4?: string
    balance?: CardBalance
    billingAddress?: CardBillingAddress
    createdAt?: string
    updatedAt?: string
  },
  'customer' | 'account' | 'product' | 'organization'
>

export type CreateCardInput = RequestDocument<{
  type: 'Card'
  attributes: {
    description: string
    /** An enabled card product, e.g. `VIRTUAL_PREPAID_TEST` in sandbox. */
    productName: string
  }
  relationships: {
    customer: RelationshipInput<'IndividualCustomer' | 'BusinessCustomer'>
    /** Required by some card products. */
    account?: RelationshipInput<'DepositAccount'>
  }
}>

/** The description is the only card attribute that can change after creation. */
export type UpdateCardInput = RequestDocument<{
  type: 'Card'
  attributes: { description: string }
}>

/**
 * A short-lived token that authorises one read of a card's sensitive details.
 * Never persist or log it.
 */
export interface CardRevealToken {
  token: string
  expiresAt: string
  expiresInSeconds: number
}

export type CardDetails = Resource<
  'CardDetails',
  {
    pan: string
    cvv: string
    expiryMonth: string
    expiryYear: string
    pin?: string
  },
  'card'
>

export type CardTransfer = Resource<
  'CardTransfer',
  {
    /** Minor units. */
    amount?: number
    currency?: Currency
    sourceCurrency?: Currency
    reference?: string
    customerReference?: string
    reason?: string
    description?: string
    direction?: OpenString<'Funding' | 'Unfunding'>
    status?: OpenString<'PENDING' | 'COMPLETED' | 'FAILED'>
    metadata?: Record<string, string>
    createdAt?: string
    updatedAt?: string
  },
  'source' | 'destination' | 'customer' | 'organization'
>

/**
 * Fund a card from a deposit account (source `DepositAccount`, destination
 * `Card`) or unfund it (source `Card`, destination `DepositAccount`).
 */
export type CreateCardTransferInput = RequestDocument<{
  type: 'CardTransfer'
  attributes: {
    /** Minor units. */
    amount: number
    currency?: Currency
    reference?: string
    customerReference?: string
    description?: string
    metadata?: Record<string, string>
  }
  relationships: {
    source: RelationshipInput<'DepositAccount' | 'Card'>
    destination: RelationshipInput<'DepositAccount' | 'Card'>
  }
}>

export type CardPaymentStatus = OpenString<
  'AUTHORIZED' | 'SETTLED' | 'VOIDED' | 'REVERSED' | 'REFUND_REQUESTED' | 'REFUNDED' | 'DECLINED'
>

/** Running totals across a payment's lifecycle, in minor units. */
export interface CardPaymentAmounts {
  authorized?: number
  settled?: number
  adjusted?: number
  reversed?: number
  refundAuthorized?: number
  refunded?: number
}

export type CardPayment = Resource<
  'CardPayment',
  {
    amounts?: CardPaymentAmounts
    currency?: Currency
    status?: CardPaymentStatus
    declineReason?: string
    merchant?: {
      name?: string
      identifier?: string
      categoryCode?: string
      countryCode?: string
    }
    terminalId?: string
    transactionDate?: string
    networkIdentifier?: {
      transactionIdentifier?: string
      authorizationCode?: string
    }
    createdAt?: string
    updatedAt?: string
  },
  'card' | 'history' | 'organization'
>

export type CardPaymentHistoryCategory = OpenString<
  | 'CARD_AUTHORIZATION'
  | 'CARD_AUTHORIZATION_EXPIRATION'
  | 'CARD_REVERSAL'
  | 'CARD_SETTLEMENT'
  | 'CARD_SETTLEMENT_ADJUSTMENT'
  | 'CARD_REFUND_REQUEST'
  | 'CARD_REFUND'
  | 'CARD_DECLINE'
>

export interface CardListQuery extends ListQuery {
  customerId?: string
  accountId?: string
}

export type CardPaymentListQuery = ListQuery &
  Record<string, string | number | boolean | string[] | undefined>
