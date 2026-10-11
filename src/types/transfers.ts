import type {
    Bank,
    Currency,
    FailureReason,
    ListQuery,
    OpenString,
    ProcessingStatus,
    RelationshipInput,
    RequestDocument,
    Resource,
} from './common'

export type AccountRelationshipType = 'DepositAccount' | 'SubAccount' | 'ElectronicAccount'

export interface TransferAttributes {
    /** Minor units (kobo for NGN). */
    amount?: number
    currency?: Currency
    reason?: string
    reference?: string
    status?: ProcessingStatus
    failureReason?: FailureReason
    cancelReason?: string
    purposeCode?: string
    /** NIP session id, present on bank transfers once processed. */
    sessionId?: string
    createdAt?: string
    metadata?: Record<string, string> | string[]
}

export type TransferType = OpenString<'BOOK_TRANSFER' | 'NIP_TRANSFER' | 'BookTransfer' | 'NIPTransfer'>

export type Transfer = Resource<
    TransferType,
    TransferAttributes,
    | 'account' | 'destinationAccount' | 'counterParty' | 'customer' | 'subAccount'
    | 'sourceSubAccount' | 'destinationSubAccount' | 'bulkTransfer' | 'anchorFee' | 'customerFee'
    | 'cotFee' | 'vatFee'
>

interface TransferInputAttributes {
    /** Minor units. NIP transfers require at least 100. */
    amount: number
    currency: Currency
    /** Narration, 1 to 100 characters. */
    reason?: string
    /** Your reference; lowercase letters, digits, `-`, `_` and spaces. */
    reference?: string
    metadata?: Record<string, string>
}

/** Move money between two accounts held on Anchor. */
export type BookTransferInput = RequestDocument<{
    type: 'BookTransfer'
    attributes: TransferInputAttributes
    relationships: {
        account: RelationshipInput<AccountRelationshipType>
        destinationAccount: RelationshipInput<AccountRelationshipType>
    }
}>

/** Send money to an external bank account (a counterparty) over NIP. */
export type NipTransferInput = RequestDocument<{
    type: 'NIPTransfer'
    attributes: TransferInputAttributes
    relationships: {
        account: RelationshipInput<AccountRelationshipType>
        counterParty: RelationshipInput<'CounterParty'>
    }
}>

export type CreateTransferInput = BookTransferInput | NipTransferInput

export interface TransferListQuery extends ListQuery {
    customerId?: string
    subAccountId?: string
    accountId?: string
    counterPartyId?: string
    destinationAccountId?: string
    destinationSubAccountId?: string
    type?: 'NIP_TRANSFER' | 'BOOK_TRANSFER'
    from?: string
    to?: string
    bulkTransferId?: string
    metadata?: string
    query?: string
    status?: ProcessingStatus
    onlySubAccount?: boolean
}

export type BulkTransferInput = RequestDocument<{
    type: 'NIP_TRANSFER' | 'BOOK_TRANSFER'
    attributes: {
        amount: number
        currency?: Currency
        reason: string
        reference: string
    }
    relationships: {
        account: RelationshipInput<AccountRelationshipType>
        destinationAccount?: RelationshipInput<AccountRelationshipType>
        counterParty?: RelationshipInput<'CounterParty'>
    }
}[]>

export type BulkTransfer = Resource<
    'BulkTransfer',
    {
        amount?: number
        currency?: Currency
        status?: ProcessingStatus
        totalTransferCount?: number
        successfulTransferCount?: number
        failedTransferCount?: number
        createdAt?: string
    },
    'transfers'
>

export type CounterpartyType = OpenString<
    'CounterParty' | 'LinkedCounterParty' | 'WireCounterParty' | 'ACHCounterParty'
>

export type Counterparty = Resource<
    CounterpartyType,
    {
        accountName?: string
        accountNumber?: string
        bank?: Bank
        accountType?: string
        providerToken?: string
        routingNumber?: string
        description?: string
        beneficiaryName?: string
        beneficiaryType?: 'BUSINESS' | 'INDIVIDUAL' | 'NON_PROFIT' | 'SOLE_PROPRIETOR'
        createdAt?: string
        metadata?: Record<string, string> | string[]
    },
    'bank' | 'customer' | 'organization'
>

export interface CounterpartyAttributesInput {
    accountName: string
    accountNumber: string
    /** The bank's NIP code. Either this or the `bank` relationship identifies the bank. */
    bankCode?: string
    /** Have Anchor confirm the account name against the bank before saving. */
    verifyName?: boolean
}

export interface CounterpartyInputData {
    type: 'CounterParty'
    attributes: CounterpartyAttributesInput
    relationships?: { bank: RelationshipInput<'Bank'> }
}

export type CreateCounterpartyInput =
    | RequestDocument<CounterpartyInputData>
    | RequestDocument<{
        type: 'LinkedCounterparty'
        attributes: { accountName: string, accountNumber: string, providerToken: string }
    }>

export type CreateBulkCounterpartyInput = RequestDocument<CounterpartyInputData[]>

export type UpdateCounterpartyInput = RequestDocument<{
    type: 'CounterParty' | 'Counterparty'
    attributes?: { verifyName?: boolean }
}>

export interface CounterpartyListQuery extends ListQuery {
    metadata?: string
    query?: string
}

export type BankResource = Resource<'Bank', { name?: string, cbnCode?: string, nipCode?: string }>

/** The result of a name enquiry on a bank account. */
export type AccountDetail = Resource<'AccountDetail', { accountName?: string, accountNumber?: string, bank?: Bank }>

export type VerifyAccountsInput = RequestDocument<{
    type: string
    attributes: { accountNumber: string, bankCode: string }
}[]>

export type TransactionDirection = 'Debit' | 'Credit'

export type Transaction = Resource<
    string,
    {
        /** Minor units. */
        amount?: number
        summary?: string
        direction?: TransactionDirection
        currency?: Currency
        balanceBefore?: number
        balanceAfter?: number
        transactionDate?: string
        createdAt?: string
        metadata?: Record<string, string> | string[]
    }
>

export interface TransactionListQuery extends ListQuery {
    /**
     * Required since April 2026: without it Anchor returns an empty list.
     *
     * @see https://docs.getanchor.co/changelog/changes-to-transactions-listing
     */
    accountId: string
    customerId?: string
    from?: string
    to?: string
    type?: 'NIP_TRANSFER' | 'BOOK_TRANSFER' | 'SETTLEMENT' | 'NIP_TRANSFER_REVERSAL'
    direction?: TransactionDirection
}

export type FeeType = OpenString<
    | 'STAMP_DUTY' | 'TRANSFER_FEE' | 'PAYMENT_COLLECTION' | 'VAT' | 'COT' | 'CUSTOM'
    | 'INTEREST_INCOME' | 'KYC_TIER_2' | 'KYC_TIER_3' | 'BUSINESS_KYC' | 'BILL_PAYMENT'
    | 'BVN_VALIDATION' | 'ACH_TRANSFER_FEE' | 'DOMESTIC_WIRE_TRANSFER_FEE'
    | 'INTERNATIONAL_WIRE_TRANSFER_FEE' | 'NGN_USD_FX_FEE'
>

/** A fee charged to a customer (`CustomerFee`) or reversed back to them. */
export type Fee = Resource<
    OpenString<'CustomerFee' | 'OrganizationFee'>,
    {
        /** Minor units. */
        amount?: number
        feeType?: FeeType
        status?: ProcessingStatus
        description?: string
        currency?: Currency
        createdAt?: string
    },
    'sourceAccount' | 'destinationAccount' | 'mainEntity'
>

export type CustomFeeInput = RequestDocument<{
    type: 'CustomerFee'
    attributes: {
        /** Minor units. */
        amount: number
        description: string
        currency: Currency
    }
    relationships: { account: RelationshipInput<'DepositAccount'> }
}>

export interface FeeListQuery extends ListQuery {
    feeType?: FeeType
    status?: ProcessingStatus
    mainEntityType?: string
}

export type Reward = Resource<
    'Reward',
    {
        amount?: number
        currency?: Currency
        description?: string
        status?: OpenString<'PENDING' | 'COMPLETED' | 'FAILED'>
        createdAt?: string
        metadata?: Record<string, string>
    },
    'sourceAccount' | 'destinationAccount' | 'organization'
>

export type CreateRewardInput = RequestDocument<{
    type: 'Reward'
    attributes: {
        /** Minor units. */
        amount: number
        currency: Currency
        description: string
        metadata?: Record<string, string>
    }
    relationships: {
        sourceAccount: RelationshipInput<'DepositAccount'>
        destinationAccount: RelationshipInput<'DepositAccount'>
    }
}>
