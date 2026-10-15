/**
 * Anchor speaks JSON:API. Every request body is a `{ data: { type, attributes,
 * relationships } }` document, and every response is a document whose `data` is
 * a resource (or a list of them), optionally carrying `included` resources and
 * `meta.pagination`.
 *
 * @see https://docs.getanchor.co/reference/getting-started-with-the-api
 */

/** An open string union: the known values autocomplete, unknown ones still type-check. */
export type OpenString<T extends string> = T | (string & {})

export type Currency = 'NGN' | 'USD'

/** A pointer to another resource, as it appears inside `relationships`. */
export interface ResourceIdentifier<TType extends string = string> {
    id: string
    type: TType
}

export interface Relationship<TType extends string = string> {
    data: ResourceIdentifier<TType> | null
}

export interface ToManyRelationship<TType extends string = string> {
    data: ResourceIdentifier<TType>[]
}

/** A relationship as sent in a request body. */
export interface RelationshipInput<TType extends string = string> {
    data: ResourceIdentifier<TType>
}

export type Relationships<TKeys extends string = string> = Partial<
    Record<TKeys, Relationship | ToManyRelationship>
>

/** A JSON:API resource object. */
export interface Resource<
    TType extends string = string,
    TAttributes = Record<string, unknown>,
    TRelationships extends string = string,
> {
    id: string
    type: TType
    attributes: TAttributes
    relationships?: Relationships<TRelationships>
}

/** Any resource Anchor may return in an `included` array. */
export type IncludedResource = Resource<string, Record<string, unknown>>

export interface Pagination {
    /** Current page number (zero based). */
    number: number
    /** Page size. */
    size: number
    /** Total number of records. */
    total: number
    /** Total number of pages. */
    totalPages: number
}

export interface DocumentMeta {
    pagination?: Pagination
    [key: string]: unknown
}

/** A response document wrapping a single resource. */
export interface AnchorDocument<TData> {
    data: TData
    included?: IncludedResource[]
    meta?: DocumentMeta
}

/** A response document wrapping a list of resources. */
export interface AnchorCollection<TData> {
    data: TData[]
    included?: IncludedResource[]
    meta?: DocumentMeta
}

/**
 * The resource object of a write: what Anchor expects under the request's
 * top-level `data` key. The SDK adds the `{ data }` envelope itself.
 */
export type RequestDocument<TData> = TData

/** The `{ message }` acknowledgement Anchor returns for deletes and async actions. */
export type MessageResource = Resource<string, { message?: string, [key: string]: unknown }>

/** Query parameters shared by every list endpoint. */
export interface PaginationQuery {
    /** Zero-based page number. Defaults to 0. */
    page?: number
    /** Records per page. Defaults to 20. */
    size?: number
    /** Sort keys. A `-` prefix sorts descending. */
    sort?: string | string[]
}

/** Comma-separated relationship names to expand into `included`. */
export interface IncludeQuery {
    include?: string | string[]
}

export type ListQuery = PaginationQuery & IncludeQuery

/** Options accepted by every SDK method in addition to its documented inputs. */
export interface RequestOptions {
    /**
     * Sent as `x-anchor-idempotent-key`. Anchor honours it on transfers, bulk
     * transfers and virtual NUBANs, and keeps results for 24 hours.
     */
    idempotencyKey?: string
    /** Extra request headers. */
    headers?: Record<string, string>
}

/**
 * Anchor accepts free-form metadata on most writes. Values are strings on the wire.
 */
export type Metadata = Record<string, string>

export type NigerianState =
    | 'ABIA' | 'ADAMAWA' | 'AKWA_IBOM' | 'ANAMBRA' | 'BAUCHI' | 'BAYELSA' | 'BENUE' | 'BORNO'
    | 'CROSS_RIVER' | 'DELTA' | 'EBONYI' | 'EDO' | 'EKITI' | 'ENUGU' | 'FCT' | 'GOMBE' | 'IMO'
    | 'JIGAWA' | 'KADUNA' | 'KANO' | 'KATSINA' | 'KEBBI' | 'KOGI' | 'KWARA' | 'LAGOS' | 'NASARAWA'
    | 'NIGER' | 'OGUN' | 'ONDO' | 'OSUN' | 'OYO' | 'PLATEAU' | 'RIVERS' | 'SOKOTO' | 'TARABA'
    | 'YOBE' | 'ZAMFARA'

export interface Address {
    addressLine_1: string
    addressLine_2?: string
    city: string
    /** Nigerian states use the upper snake-case enum, e.g. `LAGOS`. */
    state: OpenString<NigerianState>
    postalCode: string
    /** ISO 3166-1 alpha-2 country code, e.g. `NG`. */
    country: string
}

export interface FullName {
    firstName: string
    lastName: string
    middleName?: string
    maidenName?: string | null
}

export interface Bank {
    id?: string
    name?: string
    cbnCode?: string
    nipCode?: string
    /** Some account-number payloads carry the NIP code as `code` instead of `nipCode`. */
    code?: string
    /** The partner bank behind an account number, e.g. `providus`. */
    provider?: string
}

export type Gender = 'Male' | 'Female' | 'Others'

export type IdentificationType = 'DRIVERS_LICENSE' | 'VOTERS_CARD' | 'PASSPORT' | 'NATIONAL_ID' | 'NIN_SLIP'

/** Lifecycle status shared by transfers, bills, bulk transfers and fees. */
export type ProcessingStatus = OpenString<
    | 'PENDING' | 'FAILED' | 'FAILED_RETRYING' | 'IN_PROGRESS' | 'PARTIAL_SUCCESS' | 'COMPLETED'
    | 'REVERSED' | 'RETURNED' | 'REVERSAL_IN_PROGRESS' | 'RETRYING' | 'REVERSAL_IMPOSSIBLE'
    | 'NOT_START' | 'NOT_VALID' | 'INITIATED' | 'PENDING_REVIEW' | 'PROCESSING' | 'SETTLED'
    | 'REJECTED' | 'SUBMITTED' | 'CANCELED' | 'SENT' | 'DISHONORED' | 'CONTESTED'
    | 'PENDING_RETURN' | 'PENDING_CANCELLATION'
>

export type FailureReason = OpenString<
    | 'INSUFFICIENT_BALANCE' | 'INSUFFICIENT_BALANCE_IN_MASTER_ACCOUNT' | 'NO_MASTER_ACCOUNT'
    | 'SYSTEM_UNAVAILABLE' | 'PROVIDER_ERROR' | 'DO_NOT_HONOR' | 'INVALID_ACCOUNT'
    | 'ACCOUNT_NAME_MISMATCH' | 'BENEFICIARY_BANK_NOT_AVAILABLE' | 'SUSPECTED_FRAUD'
    | 'TRANSACTION_NOT_PERMITTED_TO_SENDER' | 'ACCOUNT_CLOSED' | 'ACCOUNT_CLOSED_DESTINATION'
    | 'ACCOUNT_FROZEN' | 'ACCOUNT_FROZEN_DESTINATION' | 'TRANSFER_LIMIT_EXCEEDED'
    | 'TIMEOUT_WAITING_FOR_RESPONSE_FROM_BENEFICIARY_BANK' | 'AMOUNT_TOO_LOW' | 'AMOUNT_TOO_HIGH'
    | 'INVALID_CUSTOMER_ID' | 'INVALID_MOBILE_NUMBER' | 'INVALID_AMOUNT' | 'INACTIVE_PHONE_NUMBER'
    | 'INVALID_USER_ID' | 'BARRED_PHONE_NUMBER'
>
