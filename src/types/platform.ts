import type {
    ListQuery,
    OpenString,
    RelationshipInput,
    RequestDocument,
    Resource,
} from './common'

export type ReportStatus = 'initiated' | 'scheduled' | 'completed' | 'failed'

export type ReportType = 'transaction_history' | 'balance_summary'

export type Report = Resource<
    'Report',
    {
        reportType?: ReportType
        status?: ReportStatus
        documentType?: 'pdf' | 'csv' | 'excel'
        fromDate?: string
        toDate?: string
        rowCount?: number
        timezone?: string
        completedAt?: string
        createdAt?: string
        updatedAt?: string
    },
    'account'
>

type ReportAccount = { account: RelationshipInput<'DepositAccount' | 'SubAccount' | 'ElectronicAccount'> }

export type CreateReportInput = RequestDocument<{
    type: 'Report'
    attributes: {
        fromDate: string
        toDate: string
        reportType: ReportType
        documentType?: 'pdf' | 'csv' | 'excel'
    }
    relationships: ReportAccount
}>

export type Statement = Resource<
    'Statement',
    {
        status?: ReportStatus
        documentType?: 'pdf' | 'excel'
        fromDate?: string
        toDate?: string
        rowCount?: number
        timezone?: string
        completedAt?: string
        createdAt?: string
        updatedAt?: string
    },
    'account'
>

export type CreateStatementInput = RequestDocument<{
    type: 'Statement'
    attributes: { fromDate: string, toDate: string }
    relationships: ReportAccount
}>

export interface ReportListQuery extends ListQuery {
    accountType?: 'SubAccount' | 'DepositAccount' | 'ElectronicAccount'
    accountId?: string
}

/** Every event type Anchor documents. Unknown future types still type-check. */
export type AnchorEventType = OpenString<
    | 'customer.created' | 'customer.updated' | 'customer.creation.failed'
    | 'customer.identification.approved' | 'customer.identification.manualReview'
    | 'customer.identification.reenter_information' | 'customer.identification.error'
    | 'customer.identification.rejected' | 'customer.identification.awaitingDocument'
    | 'customer.identification.pending' | 'kyc.status.update'
    | 'document.approved' | 'document.rejected'
    | 'account.opened' | 'account.closed' | 'account.frozen' | 'account.unfrozen'
    | 'account.creation.failed' | 'accountNumber.created' | 'sub_account.created'
    | 'virtualNuban.created' | 'virtualNuban.closed' | 'virtualNuban.creation.failed'
    | 'book.transfer.initiated' | 'book.transfer.failed' | 'book.transfer.successful'
    | 'nip.transfer.initiated' | 'nip.transfer.failed' | 'nip.transfer.successful'
    | 'nip.transfer.reversed' | 'nip.incomingTransfer.received'
    | 'nip.inbound.received' | 'nip.inbound.completed'
    | 'bulk.transfer.update.success.count' | 'bulk.transfer.update.failure.count'
    | 'bulkTransfer.started' | 'bulkTransfer.completed' | 'bulkTransfer.failed'
    | 'payment.received' | 'payment.settled' | 'payin.received'
    | 'reservedAccount.created' | 'reservedAccount.failed'
    | 'virtual.account.transaction.settlement'
    | 'billpayment.initiated' | 'billpayment.successful' | 'billpayment.failed'
    | 'card.created' | 'cardTransfer.created' | 'cardTransfer.completed' | 'cardTransfer.failed'
    | 'cardPayment.authorized' | 'cardPayment.declined' | 'cardPayment.canceled'
    | 'cardPayment.settled' | 'cardPayment.reversed' | 'cardPayment.refunded'
    | 'cardPayment.adjusted'
    | 'statement.initiated' | 'statement.scheduled' | 'statement.completed' | 'statement.failed'
    | 'balance_summary.reporting.initiated' | 'balance_summary.reporting.scheduled'
    | 'balance_summary.reporting.completed' | 'balance_summary.reporting.failed'
    | 'transaction_history.reporting.initiated' | 'transaction_history.reporting.scheduled'
    | 'transaction_history.reporting.completed' | 'transaction_history.reporting.failed'
    | 'ach.initiated' | 'ach.manual-review' | 'ach.submitted' | 'ach.settled' | 'ach.completed'
    | 'ach.cancelled' | 'ach.failed' | 'ach.returned' | 'ach.pending-cancellation'
    | 'wire.domestic.initiated' | 'wire.domestic.rejected' | 'wire.domestic.submitted'
    | 'wire.domestic.completed' | 'wire.domestic.failed' | 'wire.domestic.manual-review'
    | 'wire.international.initiated' | 'wire.international.rejected'
    | 'wire.international.submitted' | 'wire.international.completed'
    | 'wire.international.manual-review' | 'wire.international.failed'
    | 'fx.conversion.started' | 'fx.conversion.completed' | 'fx.conversion.failed'
>

export type AnchorEvent = Resource<
    AnchorEventType,
    {
        createdAt?: string
        failureReason?: string
        [key: string]: unknown
    }
>

export interface EventListQuery extends ListQuery {
    type?: AnchorEventType
}

export type EventTypeResource = Resource<'EventType', { type?: AnchorEventType, description?: string }>

export type WebhookDeliveryMode = 'AtMostOnce' | 'AtLeastOnce'

export type Webhook = Resource<
    'Webhook',
    {
        url?: string
        label?: string
        secretToken?: string
        status?: 'Enabled' | 'Disabled'
        deliveryMode?: WebhookDeliveryMode
        enabledEvents?: AnchorEventType[]
        allEventsEnabled?: boolean
        /** When true, deliveries embed the affected resources under `included`. */
        supportIncluded?: boolean
        createdAt?: string
    }
>

export type WebhookInput = RequestDocument<{
    type: 'Webhook'
    attributes: {
        url: string
        /** The secret Anchor signs deliveries with (`x-anchor-signature`). */
        token: string
        label: string
        deliveryMode: WebhookDeliveryMode
        supportIncluded?: boolean
        /** Omit to receive every event. */
        enabledEvents?: AnchorEventType[]
    }
}>

export type SampleEventInput = RequestDocument<{
    type: 'Webhook'
    attributes: { eventType: AnchorEventType }
}>

export type WebhookDeliveryResult = Resource<
    string,
    {
        request?: Record<string, unknown>
        response?: Record<string, unknown>
        responseCode?: number
    }
>

export type Country = Resource<OpenString<'Country'>, Record<string, unknown>>

export type CountryState = Resource<OpenString<'State'>, Record<string, unknown>>

export interface CountryListQuery {
    /** ISO 3166-1 alpha-2, e.g. `NG`. */
    countryCode?: string
}
