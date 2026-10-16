import { Core } from './Core'
import type { InitOptions } from './Core'

export * from './types'
export { ApiBinder } from './ApiBinder'
export { BaseApi, serializeQuery } from './BaseApi'
export type { ApiRequest } from './BaseApi'
export { ANCHOR_URLS, anchorApiKeyAuth, Core } from './Core'
export type { InitOptions } from './Core'
export { AnchorApiError } from './Errors'
export type { AnchorErrorObject } from './Errors'
export { transport } from './Transport'
export type { TransportRequest, TransportResponse } from './Transport'
export { AnchorFileError, resolveFile } from './Files'
export type { FileOptions, FileSource, ResolvedFile } from './Files'
export { findIncluded, includedOfType, relationshipId, relationshipIds } from './JsonApi'
export {
  ANCHOR_SIGNATURE_HEADER,
  ANCHOR_WEBHOOK_IPS,
  AnchorWebhookError,
  AnchorWebhooks,
} from './Webhooks'
export type { AnchorWebhookEvent, AnchorWebhookHeaders } from './Webhooks'

export { AccountNumbers as AccountNumbersApi } from './Apis/AccountNumbers'
export { VirtualNubans as VirtualNubansApi } from './Apis/VirtualNubans'
export { Accounts as AccountsApi } from './Apis/Accounts'
export { Banks as BanksApi } from './Apis/Banks'
export { Bills as BillsApi } from './Apis/Bills'
export { Businesses as BusinessesApi } from './Apis/Businesses'
export { CardPayments as CardPaymentsApi } from './Apis/CardPayments'
export { Cards as CardsApi } from './Apis/Cards'
export { CardTransfers as CardTransfersApi } from './Apis/CardTransfers'
export {
  PayIns as PayInsApi,
  PayWithTransfers as PayWithTransfersApi,
  ReservedAccounts as ReservedAccountsApi,
} from './Apis/Collections'
export { Counterparties as CounterpartiesApi } from './Apis/Counterparties'
export { Customers as CustomersApi } from './Apis/Customers'
export { Documents as DocumentsApi } from './Apis/Documents'
export { Fees as FeesApi } from './Apis/Fees'
export { InboundTransfers as InboundTransfersApi } from './Apis/InboundTransfers'
export { Payments as PaymentsApi } from './Apis/Payments'
export { NextOfKin as NextOfKinApi } from './Apis/NextOfKin'
export {
  Countries as CountriesApi,
  Events as EventsApi,
  Webhooks as WebhooksApi,
} from './Apis/Platform'
export { Reports as ReportsApi, Statements as StatementsApi } from './Apis/Reporting'
export { Rewards as RewardsApi } from './Apis/Rewards'
export { SubAccounts as SubAccountsApi } from './Apis/SubAccounts'
export { Transactions as TransactionsApi } from './Apis/Transactions'
export { Transfers as TransfersApi } from './Apis/Transfers'

/**
 * Create an Anchor client. Equivalent to `new Core(options)`.
 *
 * @param options
 */
export const createClient = (options: InitOptions = {}): Core => new Core(options)

export {
  BadRequestException,
  defineConfig,
  ForbiddenRequestException,
  HttpException,
  UnauthorizedRequestException,
} from '@oapiex/sdk-kit'

export type { AuthConfig, Environment, UnifiedResponse } from '@oapiex/sdk-kit'
