import type {
  Currency,
  FullName,
  OpenString,
  RelationshipInput,
  RequestDocument,
  Resource,
} from './common'

export type PaymentProvider = OpenString<'ninepsb' | 'providus'>

export interface ProviderBank {
  provider?: PaymentProvider
  name?: string
}

/** A permanent account number dedicated to one customer, for collections. */
export type ReservedAccount = Resource<
  'ReservedAccount',
  {
    accountName?: string
    accountNumber?: string
    bank?: ProviderBank
    status?: OpenString<'ACTIVE' | 'INACTIVE'>
    createdAt?: string
  },
  'customer' | 'merchant'
>

/**
 * Either pass an existing customer as a relationship, or let Anchor create one
 * from `attributes.customer` in the same request.
 */
export type CreateReservedAccountInput = RequestDocument<{
  type: 'ReservedAccount'
  attributes: {
    provider: PaymentProvider
    customer?: {
      individualCustomer: {
        fullName: Pick<FullName, 'firstName' | 'lastName' | 'middleName'>
        email: string
        bvn: string
      }
    }
  }
  relationships?: {
    customer?: RelationshipInput<'IndividualCustomer' | 'BusinessCustomer'>
    /** Settle pay-ins to this sub account instead of the default payout account. */
    payoutAccount?: RelationshipInput<'SubAccount'>
  }
}>

/** A dynamic, single-use account number that expires. */
export type PayWithTransfer = Resource<
  'PayWithTransfer',
  {
    reference?: string
    customerReference?: string
    /** Minor units. */
    amount?: number
    accountName?: string
    accountNumber?: string
    bank?: ProviderBank
    expiry?: {
      expiryDate?: string
      /** Seconds. */
      duration?: number
      expiredAt?: string | null
    }
    status?: OpenString<'ACTIVE' | 'EXPIRED' | 'COMPLETED'>
    createdAt?: string
  },
  'customer' | 'merchant' | 'payin'
>

export type CreatePayWithTransferInput = RequestDocument<{
  type: 'PayWithTransfer'
  attributes: {
    /** Alphanumeric, under 100 characters. */
    reference: string
    customer: { fullName?: string; email: string }
    /** Seconds until the account expires. Anchor caps this at one hour. */
    expiryTime: number
    /** Minor units. */
    amount: number
    provider?: PaymentProvider
    metadata?: Record<string, string>
  }
}>

/** A payment received into a reserved account or pay-with-transfer account. */
export type PayIn = Resource<
  'PayIn',
  {
    reference?: string
    /** Minor units. */
    amount?: number
    currency?: Currency
    channel?: string
    paymentMethod?: OpenString<'TRANSFER' | 'RESERVED_ACCOUNT'>
    sessionId?: string
    status?: OpenString<'PENDING' | 'COMPLETED' | 'FAILED'>
    paidAt?: string
    createdAt?: string
  },
  'payout' | 'merchant' | 'attempt' | 'reservedAccount' | 'customer'
>

export type BillCategory = 'airtime' | 'data' | 'electricity' | 'television'

export type AirtimeProvider = 'mtn' | 'airtel' | 'glo' | '9mobile' | 'ntel' | 'smile'

type BillAccount = { account: RelationshipInput<'DepositAccount' | 'SubAccount'> }

export type CreateBillInput =
  | RequestDocument<{
      type: 'Airtime'
      attributes: {
        phoneNumber: string
        provider: AirtimeProvider
        reference: string
        /** Minor units. */
        amount?: number
      }
      relationships: BillAccount
    }>
  | RequestDocument<{
      type: 'Data'
      attributes: {
        phoneNumber: string
        productSlug: string
        reference: string
        amount?: number
      }
      relationships: BillAccount
    }>
  | RequestDocument<{
      type: 'Electricity'
      attributes: {
        meterAccountNumber: string
        phoneNumber: string
        productSlug: string
        reference: string
        amount?: number
      }
      relationships: BillAccount
    }>
  | RequestDocument<{
      type: 'Television'
      attributes: {
        smartCardNumber: string
        phoneNumber: string
        productSlug: string
        reference: string
        amount?: number
      }
      relationships: BillAccount
    }>

export type BillPayment = Resource<
  OpenString<'Airtime' | 'Data' | 'Electricity' | 'Television'>,
  {
    /** Minor units. */
    amount?: number
    phoneNumber?: string
    provider?: string
    reference?: string
    status?: OpenString<'PENDING' | 'FAILED' | 'COMPLETED'>
    failureReason?: string
    detail?: Record<string, unknown>
    customerDetail?: Record<string, unknown>
    customerDetails?: Record<string, unknown>
    createdAt?: string
  },
  'sourceAccount' | 'customer'
>

export interface BillListQuery {
  status?: 'PENDING' | 'FAILED' | 'COMPLETED'
  accountId?: string
  subAccountId?: string
  consumerId?: string
  providerName?: string
  productName?: string
  customerReference?: string
  providerReference?: string
  billPaymentId?: string
  category?: BillCategory
  page?: number
  size?: number
  sort?: string | string[]
  include?: string | string[]
}

export type Biller = Resource<
  'Provider',
  {
    name?: string
    shortName?: string
    description?: string
    slug?: string
    category?: BillCategory | 'default'
  }
>

export interface BillerListQuery {
  category?: BillCategory
  page?: number
  size?: number
  sort?: string | string[]
}

export type BillerProduct = Resource<
  'Product',
  {
    name?: string
    slug?: string
    price?: {
      type?: 'Fixed' | 'Range'
      minimumAmount?: number
      maximumAmount?: number
      currency?: Currency
    }
  }
>

/** The name on a smart card or meter, confirmed before paying. */
export type BillCustomerDetail = Resource<
  'CustomerDetail',
  { customerName?: string; customerId?: string }
>
