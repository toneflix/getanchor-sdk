export interface Customer {}

export type CustomerResponseExample = unknown

export interface CustomerInput {
  data?: Data
}

export interface Data {
  attributes?: Attribute
  relationships?: Relationship
  type?: string
}

export interface Attribute {
  address?: Address
  currency?: string
  deliveryMode?: string
  eventType?: string
  freezeReason?: string
  level?: string
}

export interface Address {
  country?: string
  state?: string
}

export interface CustomerQuery {
  customerType?: string
  include?: string
  metadata?: string
  page?: string
  query?: string
  size?: string
}

export interface CustomerHeader {}

export interface CustomerParams {}

export type CustomerResponseExampleApi = unknown

export interface Update extends Customer {}

export type UpdateResponseExample = unknown

export interface UpdateInput extends CustomerInput {}

export interface UpdateQuery extends CustomerQuery {}

export interface UpdateHeader extends CustomerHeader {}

export interface UpdateParams {
  customerId: string
}

export type CustomerResponseExampleByCustomerId = unknown

export type CustomerResponseExample2 = unknown

export interface Search extends Customer {}

export type SearchResponseExample = unknown

export interface SearchInput extends CustomerInput {}

export interface SearchQuery {
  customerType?: string
  include?: string
  searchValue?: string
}

export interface SearchHeader extends CustomerHeader {}

export interface SearchParams extends CustomerParams {}

export interface OfficersRequirement extends Customer {}

export type OfficersRequirementResponseExample = unknown

export interface OfficersRequirementInput extends CustomerInput {}

export interface OfficersRequirementQuery extends CustomerQuery {}

export interface OfficersRequirementHeader extends CustomerHeader {}

export interface OfficersRequirementParams extends UpdateParams {}

export interface Business extends Customer {}

export type BusinessResponseExample = unknown

export interface BusinessInput extends CustomerInput {}

export interface BusinessQuery extends CustomerQuery {}

export interface BusinessHeader extends CustomerHeader {}

export interface BusinessParams extends UpdateParams {}

export interface Individual extends Customer {}

export type IndividualResponseExample = unknown

export interface IndividualInput {
  data?: Data
}

export interface IndividualQuery extends CustomerQuery {}

export interface IndividualHeader extends CustomerHeader {}

export interface IndividualParams extends UpdateParams {}

export interface DownloadDocument extends Customer {}

export type DownloadDocumentResponseExample = unknown

export interface DownloadDocumentInput extends CustomerInput {}

export interface DownloadDocumentQuery extends CustomerQuery {}

export interface DownloadDocumentHeader {
  accept?: unknown
}

export interface DownloadDocumentParams {
  customerId: string
  documentId: string
}

export interface Document extends Customer {}

export type DocumentResponseExample = unknown

export interface DocumentInput extends CustomerInput {}

export interface DocumentQuery extends CustomerQuery {}

export interface DocumentHeader extends CustomerHeader {}

export interface DocumentParams extends DownloadDocumentParams {}

export interface UploadDocument extends Customer {}

export type UploadDocumentResponseExample = unknown

export interface UploadDocumentInput {
  fileData?: unknown
}

export interface UploadDocumentQuery {
  textData?: string
}

export interface UploadDocumentHeader extends CustomerHeader {}

export interface UploadDocumentParams extends DownloadDocumentParams {}

export type DocumentResponseExampleByCustomerId = unknown

export interface NextOfKin extends Customer {}

export type NextOfKinResponseExample = unknown

export interface NextOfKinInput extends CustomerInput {}

export interface NextOfKinQuery extends CustomerQuery {}

export interface NextOfKinHeader extends CustomerHeader {}

export interface NextOfKinParams extends UpdateParams {}

export type NextOfKinResponseExampleByCustomerId = unknown

export type NextOfKinResponseExampleByCustomerIdAndNextOfKinId = unknown

export interface NextOfKinByCustomerIdAndNextOfKinIdParams {
  customerId: string
  nextOfKinId: string
}

export type NextOfKinResponseExample2 = unknown

export type NextOfKinResponseExample3 = unknown

export interface Payment extends Customer {}

export type PaymentResponseExample = unknown

export interface PaymentInput extends CustomerInput {}

export interface PaymentQuery extends CustomerQuery {}

export interface PaymentHeader extends CustomerHeader {}

export interface PaymentParams {
  paymentId: string
}

export type PaymentResponseExampleApi = unknown

export interface PaymentApiQuery {
  include?: string
  page?: string
  size?: string
}

export interface Requery extends Customer {}

export type RequeryResponseExample = unknown

export interface RequeryInput extends CustomerInput {}

export interface RequeryQuery extends CustomerQuery {}

export interface RequeryHeader extends CustomerHeader {}

export interface RequeryParams {
  customerReference: string
}

export interface Account extends Customer {}

export type AccountResponseExample = unknown

export interface AccountInput extends CustomerInput {}

export interface AccountQuery extends CustomerQuery {}

export interface AccountHeader extends CustomerHeader {}

export interface AccountParams extends CustomerParams {}

export type AccountResponseExampleApi = unknown

export interface AccountApiQuery {
  accountId?: string
  accountType?: string
  customerId?: string
  include?: string
  metadata?: string
  page?: string
  query?: string
  size?: string
}

export type AccountResponseExampleByAccountId = unknown

export interface AccountByAccountIdParams {
  accountId: string
}

export type AccountResponseExample2 = unknown

export interface Balance extends Customer {}

export type BalanceResponseExample = unknown

export interface BalanceInput extends CustomerInput {}

export interface BalanceQuery extends CustomerQuery {}

export interface BalanceHeader extends CustomerHeader {}

export interface BalanceParams extends AccountByAccountIdParams {}

export interface Freeze extends Customer {}

export type FreezeResponseExample = unknown

export interface FreezeInput {
  data?: Data
}

export interface FreezeQuery extends CustomerQuery {}

export interface FreezeHeader extends CustomerHeader {}

export interface FreezeParams extends AccountByAccountIdParams {}

export interface Unfreeze extends Customer {}

export type UnfreezeResponseExample = unknown

export interface UnfreezeInput {
  data: unknown
}

export interface UnfreezeQuery extends CustomerQuery {}

export interface UnfreezeHeader extends CustomerHeader {}

export interface UnfreezeParams extends CustomerParams {}

export interface RootAccount extends Customer {}

export type RootAccountResponseExample = unknown

export interface RootAccountInput extends CustomerInput {}

export interface RootAccountQuery {
  accountType?: unknown
  include?: string
}

export interface RootAccountHeader extends CustomerHeader {}

export interface RootAccountParams extends CustomerParams {}

export interface CustomFee extends Customer {}

export type CustomFeeResponseExample = unknown

export interface CustomFeeInput {
  data: DataData
}

export interface DataData {
  attributes: AttributeAttributes
  relationships: Relationship
}

export interface AttributeAttributes {
  currency: string
}

export interface Relationship {
  account?: AccountAccount
  destinationAccount?: AccountAccount
}

export interface AccountAccount {
  data?: Data
}

export interface Data2 {
  type: string
}

export interface CustomFeeQuery extends CustomerQuery {}

export interface CustomFeeHeader extends CustomerHeader {}

export interface CustomFeeParams extends CustomerParams {}

export interface Reverse extends Customer {}

export type ReverseResponseExample = unknown

export interface ReverseInput extends CustomerInput {}

export interface ReverseQuery extends CustomerQuery {}

export interface ReverseHeader extends CustomerHeader {}

export interface ReverseParams {
  feeId: string
}

export interface ChargedByOrganization extends Customer {}

export type ChargedByOrganizationResponseExample = unknown

export interface ChargedByOrganizationInput extends CustomerInput {}

export interface ChargedByOrganizationQuery extends PaymentApiQuery {}

export interface ChargedByOrganizationHeader extends CustomerHeader {}

export interface ChargedByOrganizationParams extends CustomerParams {}

export type ChargedByOrganizationResponseExampleByFeeId = unknown

export interface Statement extends Customer {}

export type StatementResponseExample = unknown

export interface StatementInput {
  data: Data3
}

export interface Data3 {
  relationships: Relationship
}

export interface StatementQuery extends CustomerQuery {}

export interface StatementHeader extends CustomerHeader {}

export interface StatementParams extends CustomerParams {}

export type StatementResponseExampleApi = unknown

export type StatementResponseExampleByStatementId = unknown

export interface StatementByStatementIdParams {
  statementId: string
}

export interface Download extends Customer {}

export type DownloadResponseExample = unknown

export interface DownloadInput extends CustomerInput {}

export interface DownloadQuery extends CustomerQuery {}

export interface DownloadHeader extends DownloadDocumentHeader {}

export interface DownloadParams extends StatementByStatementIdParams {}

export interface Transfer extends Customer {}

export type TransferResponseExample = unknown

export interface TransferInput {
  data?: Data
}

export interface TransferQuery extends CustomerQuery {}

export interface TransferHeader {
  'x-anchor-idempotent-key'?: string
}

export interface TransferParams extends CustomerParams {}

export type TransferResponseExampleApi = unknown

export interface Verify extends Customer {}

export type VerifyResponseExample = unknown

export interface VerifyInput extends CustomerInput {}

export interface VerifyQuery extends CustomerQuery {}

export interface VerifyHeader extends CustomerHeader {}

export interface VerifyParams {
  transferId: string
}

export type TransferResponseExampleByTransferId = unknown

export interface Counterparty extends Customer {}

export type CounterpartyResponseExample = unknown

export interface CounterpartyInput extends CustomerInput {}

export interface CounterpartyQuery extends CustomerQuery {}

export interface CounterpartyHeader extends CustomerHeader {}

export interface CounterpartyParams extends CustomerParams {}

export type CounterpartyResponseExampleApi = unknown

export interface CounterpartyApiQuery {
  include?: string
  metadata?: string
  page?: string
  query?: string
  size?: string
}

export type CounterpartyResponseExampleByCounterPartyId = unknown

export interface CounterpartyByCounterPartyIdParams {
  counterPartyId: string
}

export type CounterpartyResponseExample2 = unknown

export type CounterpartyResponseExample3 = unknown

export interface VerifyAccount extends Customer {}

export type VerifyAccountResponseExample = unknown

export interface VerifyAccountInput extends CustomerInput {}

export interface VerifyAccountQuery extends CustomerQuery {}

export interface VerifyAccountHeader extends CustomerHeader {}

export interface VerifyAccountParams {
  accountNumber: string
  bankIdOrBankCode: string
}

export interface Bank extends Customer {}

export type BankResponseExample = unknown

export interface BankInput extends CustomerInput {}

export interface BankQuery extends CustomerQuery {}

export interface BankHeader extends CustomerHeader {}

export interface BankParams extends CustomerParams {}

export interface Biller extends Customer {}

export type BillerResponseExample = unknown

export interface BillerInput extends CustomerInput {}

export interface BillerQuery extends PaymentApiQuery {}

export interface BillerHeader extends CustomerHeader {}

export interface BillerParams extends CustomerParams {}

export interface Product extends Customer {}

export type ProductResponseExample = unknown

export interface ProductInput extends CustomerInput {}

export interface ProductQuery extends CustomerQuery {}

export interface ProductHeader extends CustomerHeader {}

export interface ProductParams {
  billerId: string
}

export interface CustomerValidation extends Customer {}

export type CustomerValidationResponseExample = unknown

export interface CustomerValidationInput extends CustomerInput {}

export interface CustomerValidationQuery extends CustomerQuery {}

export interface CustomerValidationHeader extends CustomerHeader {}

export interface CustomerValidationParams {
  customerId: string
  productSlug: string
}

export interface Bill extends Customer {}

export type BillResponseExample = unknown

export interface BillInput {
  data?: Data
}

export interface BillQuery extends CustomerQuery {}

export interface BillHeader extends CustomerHeader {}

export interface BillParams extends CustomerParams {}

export type BillResponseExampleApi = unknown

export type BillResponseExampleByBillPaymentId = unknown

export interface BillByBillPaymentIdParams {
  billPaymentId: string
}

export interface Bulk extends Customer {}

export type BulkResponseExample = unknown

export interface BulkInput {
  data: unknown[]
}

export interface BulkQuery extends CustomerQuery {}

export interface BulkHeader extends CustomerHeader {}

export interface BulkParams extends CustomerParams {}

export type BulkResponseExampleByBulkTransferId = unknown

export interface BulkByBulkTransferIdParams {
  bulkTransferId: string
}

export type BulkResponseExampleCounterparty = unknown

export type BulkResponseExampleVerifyAccount = unknown

export interface SubAccount extends Customer {}

export type SubAccountResponseExample = unknown

export interface SubAccountInput extends UnfreezeInput {}

export interface SubAccountQuery extends CustomerQuery {}

export interface SubAccountHeader extends CustomerHeader {}

export interface SubAccountParams extends CustomerParams {}

export type SubAccountResponseExampleApi = unknown

export type BalanceResponseExampleBySubAccountId = unknown

export interface BalanceBySubAccountIdParams {
  subAccountId: string
}

export type SubAccountResponseExampleBySubAccountId = unknown

export type SubAccountResponseExample2 = unknown

export interface Transaction extends Customer {}

export type TransactionResponseExample = unknown

export interface TransactionInput extends CustomerInput {}

export interface TransactionQuery extends CustomerQuery {}

export interface TransactionHeader extends CustomerHeader {}

export interface TransactionParams {
  transactionId: string
}

export type TransactionResponseExampleApi = unknown

export type TransactionResponseExampleSubAccount = unknown

export interface Saving extends Customer {}

export type SavingResponseExample = unknown

export interface SavingInput extends UnfreezeInput {}

export interface SavingQuery extends CustomerQuery {}

export interface SavingHeader extends CustomerHeader {}

export interface SavingParams extends CustomerParams {}

export type SavingResponseExampleApi = unknown

export interface Rollover extends Customer {}

export type RolloverResponseExample = unknown

export interface RolloverInput extends CustomerInput {}

export interface RolloverQuery extends CustomerQuery {}

export interface RolloverHeader extends CustomerHeader {}

export interface RolloverParams {
  savingsId: string
}

export interface Withdrawal extends Customer {}

export type WithdrawalResponseExample = unknown

export interface WithdrawalInput extends StatementInput {}

export interface WithdrawalQuery extends CustomerQuery {}

export interface WithdrawalHeader extends CustomerHeader {}

export interface WithdrawalParams extends CustomerParams {}

export type WithdrawalResponseExampleSaving = unknown

export type SavingResponseExampleBySavingsId = unknown

export type WithdrawalResponseExampleBySavingsId = unknown

export type WithdrawalResponseExampleByWithdrawalId = unknown

export interface WithdrawalByWithdrawalIdParams {
  withdrawalId: string
}

export interface Deposit extends Customer {}

export type DepositResponseExample = unknown

export interface DepositInput extends StatementInput {}

export interface DepositQuery extends CustomerQuery {}

export interface DepositHeader extends CustomerHeader {}

export interface DepositParams extends CustomerParams {}

export type DepositResponseExampleSaving = unknown

export type DepositResponseExampleByDepositId = unknown

export interface DepositByDepositIdParams {
  depositId: string
}

export interface Report extends Customer {}

export type ReportResponseExample = unknown

export interface ReportInput {
  data: Data4
}

export interface Data4 {
  attributes: Attribute2
  relationships: Relationship
}

export interface Attribute2 {
  reportType: string
}

export interface ReportQuery extends CustomerQuery {}

export interface ReportHeader extends CustomerHeader {}

export interface ReportParams extends CustomerParams {}

export type ReportResponseExampleApi = unknown

export type ReportResponseExampleByReportId = unknown

export interface ReportByReportIdParams {
  reportId: string
}

export type DownloadResponseExampleByReportId = unknown

export interface Webhook extends Customer {}

export type WebhookResponseExample = unknown

export interface WebhookInput {
  data?: Data
}

export interface Data5 {
  attributes: Attribute3
}

export interface Attribute3 {
  deliveryMode: string
}

export interface WebhookQuery extends CustomerQuery {}

export interface WebhookHeader extends CustomerHeader {}

export interface WebhookParams extends CustomerParams {}

export type WebhookResponseExampleApi = unknown

export type WebhookResponseExampleByWebhookId = unknown

export interface WebhookByWebhookIdParams {
  webhookId: string
}

export type WebhookResponseExample2 = unknown

export type WebhookResponseExample3 = unknown

export type VerifyResponseExampleByWebhookId = unknown

export interface VerifyByWebhookIdInput {
  data?: Data
}

export interface Event extends Customer {}

export type EventResponseExample = unknown

export interface EventInput extends CustomerInput {}

export interface EventQuery extends PaymentApiQuery {}

export interface EventHeader extends CustomerHeader {}

export interface EventParams extends CustomerParams {}

export type EventResponseExampleByEventId = unknown

export interface EventByEventIdParams {
  eventId: string
}

export interface EventType extends Customer {}

export type EventTypeResponseExample = unknown

export interface EventTypeInput extends CustomerInput {}

export interface EventTypeQuery extends CustomerQuery {}

export interface EventTypeHeader extends CustomerHeader {}

export interface EventTypeParams extends CustomerParams {}

export interface OpenApiInfo {
  title: string
  version: string
}

export interface OpenApiSchemaDefinition {
  type?: string
  description?: string
  default?: unknown
  properties?: Record<string, OpenApiSchemaDefinition>
  items?: OpenApiSchemaDefinition
  required?: string[]
  example?: unknown
}

export interface OpenApiParameterDefinition {
  name: string
  in: 'query' | 'header' | 'path' | 'cookie'
  required?: boolean
  description?: string
  schema?: OpenApiSchemaDefinition
  example?: unknown
}

export interface OpenApiMediaTypeDefinition<TExample = unknown> {
  schema?: OpenApiSchemaDefinition
  example?: TExample
}

export interface OpenApiResponseDefinition<
  _TResponse = unknown,
  TExample = unknown,
> {
  description: string
  content?: Record<string, OpenApiMediaTypeDefinition<TExample>>
}

export interface OpenApiRequestBodyDefinition<TInput = unknown> {
  description?: string
  required: boolean
  content: Record<string, OpenApiMediaTypeDefinition<TInput>>
}

export interface OpenApiOauthFlowDefinition {
  authorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  scopes?: Record<string, string>
}

export type OpenApiSecurityRequirementDefinition = Record<string, string[]>

export type OpenApiSecuritySchemeDefinition =
  | {
      type: 'http'
      description?: string
      scheme: string
      bearerFormat?: string
    }
  | {
      type: 'apiKey'
      description?: string
      name: string
      in: 'query' | 'header' | 'cookie'
    }
  | {
      type: 'oauth2'
      description?: string
      flows?: Record<string, OpenApiOauthFlowDefinition>
    }
  | {
      type: 'openIdConnect'
      description?: string
      openIdConnectUrl: string
    }

export interface OpenApiComponentsDefinition {
  securitySchemes?: Record<string, OpenApiSecuritySchemeDefinition>
}

export interface OpenApiOperationDefinition<
  _TResponse = unknown,
  TResponseExample = unknown,
  TInput = Record<string, never>,
  _TQuery = Record<string, never>,
  _THeader = Record<string, never>,
  _TParams = Record<string, never>,
> {
  summary?: string
  description?: string
  operationId?: string
  security?: OpenApiSecurityRequirementDefinition[]
  parameters?: OpenApiParameterDefinition[]
  requestBody?: OpenApiRequestBodyDefinition<TInput>
  responses: Record<
    string,
    OpenApiResponseDefinition<_TResponse, TResponseExample>
  >
}

export interface OpenApiSdkParameterManifest {
  name: string
  accessor: string
  in: 'query' | 'header' | 'path'
  required: boolean
  description?: string
}

export interface OpenApiSdkSecurityRequirementSchemeManifest {
  name: string
  scopes: string[]
}

export interface OpenApiSdkSecurityRequirementManifest {
  schemes: OpenApiSdkSecurityRequirementSchemeManifest[]
}

export interface OpenApiSdkSecuritySchemeManifest {
  name: string
  helperName: string
  description?: string
  type: 'http' | 'apiKey' | 'oauth2' | 'openIdConnect'
  authType: 'bearer' | 'basic' | 'apiKey' | 'oauth2'
  scheme?: string
  bearerFormat?: string
  in?: 'header' | 'query' | 'cookie'
  parameterName?: string
  openIdConnectUrl?: string
  scopes?: string[]
}

export interface OpenApiSdkOperationManifest {
  path: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  methodName: string
  summary?: string
  description?: string
  operationId?: string
  requestBodyDescription?: string
  responseDescription?: string
  responseType: string
  inputType: string
  queryType: string
  headerType: string
  paramsType: string
  hasBody: boolean
  bodyRequired: boolean
  pathParams: OpenApiSdkParameterManifest[]
  queryParams: OpenApiSdkParameterManifest[]
  headerParams: OpenApiSdkParameterManifest[]
  security?: OpenApiSdkSecurityRequirementManifest[]
}

export interface OpenApiSdkGroupManifest {
  className: string
  propertyName: string
  operations: OpenApiSdkOperationManifest[]
}

export interface OpenApiSdkManifest {
  groups: OpenApiSdkGroupManifest[]
  securitySchemes: OpenApiSdkSecuritySchemeManifest[]
  security?: OpenApiSdkSecurityRequirementManifest[]
}

export interface OpenApiRuntimeBundle<TApi = unknown> {
  document: unknown
  manifest: OpenApiSdkManifest
  __api?: TApi
}

export interface ApiCustomersPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  CustomerResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCustomersPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  CustomerResponseExampleApi,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCustomersPath {
  post: ApiCustomersPathPostOperation
  get: ApiCustomersPathGetOperation
}

export interface ApiCustomersUpdateByCustomerIdPathPutOperation extends OpenApiOperationDefinition<
  Customer,
  UpdateResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersUpdateByCustomerIdPath {
  put: ApiCustomersUpdateByCustomerIdPathPutOperation
}

export interface ApiCustomersByCustomerIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  CustomerResponseExampleByCustomerId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersByCustomerIdPathDeleteOperation extends OpenApiOperationDefinition<
  Customer,
  CustomerResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersByCustomerIdPath {
  get: ApiCustomersByCustomerIdPathGetOperation
  delete: ApiCustomersByCustomerIdPathDeleteOperation
}

export interface ApiCustomersSearchPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  SearchResponseExample,
  CustomerInput,
  SearchQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCustomersSearchPath {
  get: ApiCustomersSearchPathGetOperation
}

export interface ApiCustomersByCustomerIdOfficersRequirementPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  OfficersRequirementResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersByCustomerIdOfficersRequirementPath {
  get: ApiCustomersByCustomerIdOfficersRequirementPathGetOperation
}

export interface ApiCustomersByCustomerIdVerificationBusinessPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  BusinessResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersByCustomerIdVerificationBusinessPath {
  post: ApiCustomersByCustomerIdVerificationBusinessPathPostOperation
}

export interface ApiCustomersByCustomerIdVerificationIndividualPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  IndividualResponseExample,
  IndividualInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiCustomersByCustomerIdVerificationIndividualPath {
  post: ApiCustomersByCustomerIdVerificationIndividualPathPostOperation
}

export interface ApiDocumentsDownloadDocumentByCustomerIdByDocumentIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DownloadDocumentResponseExample,
  CustomerInput,
  CustomerQuery,
  DownloadDocumentHeader,
  DownloadDocumentParams
> {}

export interface ApiDocumentsDownloadDocumentByCustomerIdByDocumentIdPath {
  get: ApiDocumentsDownloadDocumentByCustomerIdByDocumentIdPathGetOperation
}

export interface ApiDocumentsByCustomerIdByDocumentIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DocumentResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  DownloadDocumentParams
> {}

export interface ApiDocumentsByCustomerIdByDocumentIdPath {
  get: ApiDocumentsByCustomerIdByDocumentIdPathGetOperation
}

export interface ApiDocumentsUploadDocumentByCustomerIdByDocumentIdPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  UploadDocumentResponseExample,
  UploadDocumentInput,
  UploadDocumentQuery,
  CustomerHeader,
  DownloadDocumentParams
> {}

export interface ApiDocumentsUploadDocumentByCustomerIdByDocumentIdPath {
  post: ApiDocumentsUploadDocumentByCustomerIdByDocumentIdPathPostOperation
}

export interface ApiDocumentsByCustomerIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DocumentResponseExampleByCustomerId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiDocumentsByCustomerIdPath {
  get: ApiDocumentsByCustomerIdPathGetOperation
}

export interface ApiIndividualsByCustomerIdNextOfKinPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  NextOfKinResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiIndividualsByCustomerIdNextOfKinPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  NextOfKinResponseExampleByCustomerId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  UpdateParams
> {}

export interface ApiIndividualsByCustomerIdNextOfKinPath {
  post: ApiIndividualsByCustomerIdNextOfKinPathPostOperation
  get: ApiIndividualsByCustomerIdNextOfKinPathGetOperation
}

export interface ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathPatchOperation extends OpenApiOperationDefinition<
  Customer,
  NextOfKinResponseExampleByCustomerIdAndNextOfKinId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  NextOfKinByCustomerIdAndNextOfKinIdParams
> {}

export interface ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  NextOfKinResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  NextOfKinByCustomerIdAndNextOfKinIdParams
> {}

export interface ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathDeleteOperation extends OpenApiOperationDefinition<
  Customer,
  NextOfKinResponseExample3,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  NextOfKinByCustomerIdAndNextOfKinIdParams
> {}

export interface ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPath {
  patch: ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathPatchOperation
  get: ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathGetOperation
  delete: ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPathDeleteOperation
}

export interface ApiPaymentsByPaymentIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  PaymentResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  PaymentParams
> {}

export interface ApiPaymentsByPaymentIdPath {
  get: ApiPaymentsByPaymentIdPathGetOperation
}

export interface ApiPaymentsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  PaymentResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiPaymentsPath {
  get: ApiPaymentsPathGetOperation
}

export interface ApiPaymentsRequeryByCustomerReferencePathGetOperation extends OpenApiOperationDefinition<
  Customer,
  RequeryResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  RequeryParams
> {}

export interface ApiPaymentsRequeryByCustomerReferencePath {
  get: ApiPaymentsRequeryByCustomerReferencePathGetOperation
}

export interface ApiAccountsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  AccountResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiAccountsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  AccountResponseExampleApi,
  CustomerInput,
  AccountApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiAccountsPath {
  post: ApiAccountsPathPostOperation
  get: ApiAccountsPathGetOperation
}

export interface ApiAccountsByAccountIdPathPatchOperation extends OpenApiOperationDefinition<
  Customer,
  AccountResponseExampleByAccountId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  AccountByAccountIdParams
> {}

export interface ApiAccountsByAccountIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  AccountResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  AccountByAccountIdParams
> {}

export interface ApiAccountsByAccountIdPath {
  patch: ApiAccountsByAccountIdPathPatchOperation
  get: ApiAccountsByAccountIdPathGetOperation
}

export interface ApiAccountsBalanceByAccountIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BalanceResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  AccountByAccountIdParams
> {}

export interface ApiAccountsBalanceByAccountIdPath {
  get: ApiAccountsBalanceByAccountIdPathGetOperation
}

export interface ApiAccountsByAccountIdFreezePathPostOperation extends OpenApiOperationDefinition<
  Customer,
  FreezeResponseExample,
  FreezeInput,
  CustomerQuery,
  CustomerHeader,
  AccountByAccountIdParams
> {}

export interface ApiAccountsByAccountIdFreezePath {
  post: ApiAccountsByAccountIdFreezePathPostOperation
}

export interface ApiAccountsUnfreezePathPostOperation extends OpenApiOperationDefinition<
  Customer,
  UnfreezeResponseExample,
  UnfreezeInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiAccountsUnfreezePath {
  post: ApiAccountsUnfreezePathPostOperation
}

export interface ApiAccountsRootAccountsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  RootAccountResponseExample,
  CustomerInput,
  RootAccountQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiAccountsRootAccountsPath {
  get: ApiAccountsRootAccountsPathGetOperation
}

export interface ApiFeeCustomFeePathPostOperation extends OpenApiOperationDefinition<
  Customer,
  CustomFeeResponseExample,
  CustomFeeInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiFeeCustomFeePath {
  post: ApiFeeCustomFeePathPostOperation
}

export interface ApiFeeReverseByFeeIdPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  ReverseResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  ReverseParams
> {}

export interface ApiFeeReverseByFeeIdPath {
  post: ApiFeeReverseByFeeIdPathPostOperation
}

export interface ApiFeeChargedByOrganizationPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  ChargedByOrganizationResponseExample,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiFeeChargedByOrganizationPath {
  get: ApiFeeChargedByOrganizationPathGetOperation
}

export interface ApiFeeChargedByOrganizationByFeeIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  ChargedByOrganizationResponseExampleByFeeId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  ReverseParams
> {}

export interface ApiFeeChargedByOrganizationByFeeIdPath {
  get: ApiFeeChargedByOrganizationByFeeIdPathGetOperation
}

export interface ApiStatementsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  StatementResponseExample,
  StatementInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiStatementsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  StatementResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiStatementsPath {
  post: ApiStatementsPathPostOperation
  get: ApiStatementsPathGetOperation
}

export interface ApiStatementsByStatementIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  StatementResponseExampleByStatementId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  StatementByStatementIdParams
> {}

export interface ApiStatementsByStatementIdPath {
  get: ApiStatementsByStatementIdPathGetOperation
}

export interface ApiStatementsDownloadByStatementIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DownloadResponseExample,
  CustomerInput,
  CustomerQuery,
  DownloadDocumentHeader,
  StatementByStatementIdParams
> {}

export interface ApiStatementsDownloadByStatementIdPath {
  get: ApiStatementsDownloadByStatementIdPathGetOperation
}

export interface ApiTransfersPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  TransferResponseExample,
  TransferInput,
  CustomerQuery,
  TransferHeader,
  CustomerParams
> {}

export interface ApiTransfersPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  TransferResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiTransfersPath {
  post: ApiTransfersPathPostOperation
  get: ApiTransfersPathGetOperation
}

export interface ApiTransfersVerifyByTransferIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  VerifyResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  VerifyParams
> {}

export interface ApiTransfersVerifyByTransferIdPath {
  get: ApiTransfersVerifyByTransferIdPathGetOperation
}

export interface ApiTransfersByTransferIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  TransferResponseExampleByTransferId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  VerifyParams
> {}

export interface ApiTransfersByTransferIdPath {
  get: ApiTransfersByTransferIdPathGetOperation
}

export interface ApiCounterpartiesPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  CounterpartyResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCounterpartiesPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  CounterpartyResponseExampleApi,
  CustomerInput,
  CounterpartyApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCounterpartiesPath {
  post: ApiCounterpartiesPathPostOperation
  get: ApiCounterpartiesPathGetOperation
}

export interface ApiCounterpartiesByCounterPartyIdPathPatchOperation extends OpenApiOperationDefinition<
  Customer,
  CounterpartyResponseExampleByCounterPartyId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CounterpartyByCounterPartyIdParams
> {}

export interface ApiCounterpartiesByCounterPartyIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  CounterpartyResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CounterpartyByCounterPartyIdParams
> {}

export interface ApiCounterpartiesByCounterPartyIdPathDeleteOperation extends OpenApiOperationDefinition<
  Customer,
  CounterpartyResponseExample3,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CounterpartyByCounterPartyIdParams
> {}

export interface ApiCounterpartiesByCounterPartyIdPath {
  patch: ApiCounterpartiesByCounterPartyIdPathPatchOperation
  get: ApiCounterpartiesByCounterPartyIdPathGetOperation
  delete: ApiCounterpartiesByCounterPartyIdPathDeleteOperation
}

export interface ApiPaymentsVerifyAccountByBankIdOrBankCodeByAccountNumberPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  VerifyAccountResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  VerifyAccountParams
> {}

export interface ApiPaymentsVerifyAccountByBankIdOrBankCodeByAccountNumberPath {
  get: ApiPaymentsVerifyAccountByBankIdOrBankCodeByAccountNumberPathGetOperation
}

export interface ApiBanksPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BankResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiBanksPath {
  get: ApiBanksPathGetOperation
}

export interface ApiBillsBillersPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BillerResponseExample,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiBillsBillersPath {
  get: ApiBillsBillersPathGetOperation
}

export interface ApiBillsBillersByBillerIdProductsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  ProductResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  ProductParams
> {}

export interface ApiBillsBillersByBillerIdProductsPath {
  get: ApiBillsBillersByBillerIdProductsPathGetOperation
}

export interface ApiBillsCustomerValidationByProductSlugByCustomerIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  CustomerValidationResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerValidationParams
> {}

export interface ApiBillsCustomerValidationByProductSlugByCustomerIdPath {
  get: ApiBillsCustomerValidationByProductSlugByCustomerIdPathGetOperation
}

export interface ApiBillsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  BillResponseExample,
  BillInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiBillsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BillResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiBillsPath {
  post: ApiBillsPathPostOperation
  get: ApiBillsPathGetOperation
}

export interface ApiBillsByBillPaymentIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BillResponseExampleByBillPaymentId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  BillByBillPaymentIdParams
> {}

export interface ApiBillsByBillPaymentIdPath {
  get: ApiBillsByBillPaymentIdPathGetOperation
}

export interface ApiTransfersBulkPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  BulkResponseExample,
  BulkInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiTransfersBulkPath {
  post: ApiTransfersBulkPathPostOperation
}

export interface ApiTransfersBulkByBulkTransferIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BulkResponseExampleByBulkTransferId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  BulkByBulkTransferIdParams
> {}

export interface ApiTransfersBulkByBulkTransferIdPath {
  get: ApiTransfersBulkByBulkTransferIdPathGetOperation
}

export interface ApiCounterpartiesBulkPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  BulkResponseExampleCounterparty,
  BulkInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiCounterpartiesBulkPath {
  post: ApiCounterpartiesBulkPathPostOperation
}

export interface ApiPaymentsVerifyAccountBulkPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  BulkResponseExampleVerifyAccount,
  BulkInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiPaymentsVerifyAccountBulkPath {
  post: ApiPaymentsVerifyAccountBulkPathPostOperation
}

export interface ApiSubAccountsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  SubAccountResponseExample,
  UnfreezeInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSubAccountsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  SubAccountResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSubAccountsPath {
  post: ApiSubAccountsPathPostOperation
  get: ApiSubAccountsPathGetOperation
}

export interface ApiSubAccountsBalanceBySubAccountIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  BalanceResponseExampleBySubAccountId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  BalanceBySubAccountIdParams
> {}

export interface ApiSubAccountsBalanceBySubAccountIdPath {
  get: ApiSubAccountsBalanceBySubAccountIdPathGetOperation
}

export interface ApiSubAccountsBySubAccountIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  SubAccountResponseExampleBySubAccountId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  BalanceBySubAccountIdParams
> {}

export interface ApiSubAccountsBySubAccountIdPathPatchOperation extends OpenApiOperationDefinition<
  Customer,
  SubAccountResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  BalanceBySubAccountIdParams
> {}

export interface ApiSubAccountsBySubAccountIdPath {
  get: ApiSubAccountsBySubAccountIdPathGetOperation
  patch: ApiSubAccountsBySubAccountIdPathPatchOperation
}

export interface ApiTransactionsByTransactionIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  TransactionResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  TransactionParams
> {}

export interface ApiTransactionsByTransactionIdPath {
  get: ApiTransactionsByTransactionIdPathGetOperation
}

export interface ApiTransactionsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  TransactionResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiTransactionsPath {
  get: ApiTransactionsPathGetOperation
}

export interface ApiSubAccountsTransactionsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  TransactionResponseExampleSubAccount,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSubAccountsTransactionsPath {
  get: ApiSubAccountsTransactionsPathGetOperation
}

export interface ApiSavingsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  SavingResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  SavingResponseExample,
  UnfreezeInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsPath {
  get: ApiSavingsPathGetOperation
  post: ApiSavingsPathPostOperation
}

export interface ApiSavingsBySavingsIdRolloverPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  RolloverResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  RolloverParams
> {}

export interface ApiSavingsBySavingsIdRolloverPath {
  post: ApiSavingsBySavingsIdRolloverPathPostOperation
}

export interface ApiSavingsWithdrawalPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  WithdrawalResponseExampleSaving,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsWithdrawalPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  WithdrawalResponseExample,
  StatementInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsWithdrawalPath {
  get: ApiSavingsWithdrawalPathGetOperation
  post: ApiSavingsWithdrawalPathPostOperation
}

export interface ApiSavingsBySavingsIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  SavingResponseExampleBySavingsId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  RolloverParams
> {}

export interface ApiSavingsBySavingsIdPath {
  get: ApiSavingsBySavingsIdPathGetOperation
}

export interface ApiSavingsBySavingsIdWithdrawalPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  WithdrawalResponseExampleBySavingsId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  RolloverParams
> {}

export interface ApiSavingsBySavingsIdWithdrawalPath {
  get: ApiSavingsBySavingsIdWithdrawalPathGetOperation
}

export interface ApiSavingsWithdrawalByWithdrawalIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  WithdrawalResponseExampleByWithdrawalId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  WithdrawalByWithdrawalIdParams
> {}

export interface ApiSavingsWithdrawalByWithdrawalIdPath {
  get: ApiSavingsWithdrawalByWithdrawalIdPathGetOperation
}

export interface ApiSavingsDepositPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DepositResponseExampleSaving,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsDepositPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  DepositResponseExample,
  StatementInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiSavingsDepositPath {
  get: ApiSavingsDepositPathGetOperation
  post: ApiSavingsDepositPathPostOperation
}

export interface ApiSavingsDepositByDepositIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DepositResponseExampleByDepositId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  DepositByDepositIdParams
> {}

export interface ApiSavingsDepositByDepositIdPath {
  get: ApiSavingsDepositByDepositIdPathGetOperation
}

export interface ApiReportsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  ReportResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiReportsPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  ReportResponseExample,
  ReportInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiReportsPath {
  get: ApiReportsPathGetOperation
  post: ApiReportsPathPostOperation
}

export interface ApiReportsByReportIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  ReportResponseExampleByReportId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  ReportByReportIdParams
> {}

export interface ApiReportsByReportIdPath {
  get: ApiReportsByReportIdPathGetOperation
}

export interface ApiReportsDownloadByReportIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  DownloadResponseExampleByReportId,
  CustomerInput,
  CustomerQuery,
  DownloadDocumentHeader,
  ReportByReportIdParams
> {}

export interface ApiReportsDownloadByReportIdPath {
  get: ApiReportsDownloadByReportIdPathGetOperation
}

export interface ApiWebhooksPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  WebhookResponseExample,
  WebhookInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiWebhooksPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  WebhookResponseExampleApi,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiWebhooksPath {
  post: ApiWebhooksPathPostOperation
  get: ApiWebhooksPathGetOperation
}

export interface ApiWebhooksByWebhookIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  WebhookResponseExample2,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  WebhookByWebhookIdParams
> {}

export interface ApiWebhooksByWebhookIdPathDeleteOperation extends OpenApiOperationDefinition<
  Customer,
  WebhookResponseExample3,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  WebhookByWebhookIdParams
> {}

export interface ApiWebhooksByWebhookIdPathPatchOperation extends OpenApiOperationDefinition<
  Customer,
  WebhookResponseExampleByWebhookId,
  WebhookInput,
  CustomerQuery,
  CustomerHeader,
  WebhookByWebhookIdParams
> {}

export interface ApiWebhooksByWebhookIdPath {
  get: ApiWebhooksByWebhookIdPathGetOperation
  delete: ApiWebhooksByWebhookIdPathDeleteOperation
  patch: ApiWebhooksByWebhookIdPathPatchOperation
}

export interface ApiWebhooksVerifyByWebhookIdPathPostOperation extends OpenApiOperationDefinition<
  Customer,
  VerifyResponseExampleByWebhookId,
  VerifyByWebhookIdInput,
  CustomerQuery,
  CustomerHeader,
  WebhookByWebhookIdParams
> {}

export interface ApiWebhooksVerifyByWebhookIdPath {
  post: ApiWebhooksVerifyByWebhookIdPathPostOperation
}

export interface ApiEventsPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  EventResponseExample,
  CustomerInput,
  PaymentApiQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiEventsPath {
  get: ApiEventsPathGetOperation
}

export interface ApiEventsByEventIdPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  EventResponseExampleByEventId,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  EventByEventIdParams
> {}

export interface ApiEventsByEventIdPath {
  get: ApiEventsByEventIdPathGetOperation
}

export interface ApiEventsEventTypesPathGetOperation extends OpenApiOperationDefinition<
  Customer,
  EventTypeResponseExample,
  CustomerInput,
  CustomerQuery,
  CustomerHeader,
  CustomerParams
> {}

export interface ApiEventsEventTypesPath {
  get: ApiEventsEventTypesPathGetOperation
}

export interface Paths {
  '/api/v1/customers': ApiCustomersPath
  '/api/v1/customers/update/{customerId}': ApiCustomersUpdateByCustomerIdPath
  '/api/v1/customers/{customerId}': ApiCustomersByCustomerIdPath
  '/api/v1/customers/search': ApiCustomersSearchPath
  '/api/v1/customers/{customerId}/officers-requirement': ApiCustomersByCustomerIdOfficersRequirementPath
  '/api/v1/customers/{customerId}/verification/business': ApiCustomersByCustomerIdVerificationBusinessPath
  '/api/v1/customers/{customerId}/verification/individual': ApiCustomersByCustomerIdVerificationIndividualPath
  '/api/v1/documents/download-document/{customerId}/{documentId}': ApiDocumentsDownloadDocumentByCustomerIdByDocumentIdPath
  '/api/v1/documents/{customerId}/{documentId}': ApiDocumentsByCustomerIdByDocumentIdPath
  '/api/v1/documents/upload-document/{customerId}/{documentId}': ApiDocumentsUploadDocumentByCustomerIdByDocumentIdPath
  '/api/v1/documents/{customerId}': ApiDocumentsByCustomerIdPath
  '/api/v1/individuals/{customerId}/next-of-kin': ApiIndividualsByCustomerIdNextOfKinPath
  '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}': ApiIndividualsByCustomerIdNextOfKinByNextOfKinIdPath
  '/api/v1/payments/{paymentId}': ApiPaymentsByPaymentIdPath
  '/api/v1/payments': ApiPaymentsPath
  '/api/v1/payments/requery/{customerReference}': ApiPaymentsRequeryByCustomerReferencePath
  '/api/v1/accounts': ApiAccountsPath
  '/api/v1/accounts/{accountId}': ApiAccountsByAccountIdPath
  '/api/v1/accounts/balance/{accountId}': ApiAccountsBalanceByAccountIdPath
  '/api/v1/accounts/{accountId}/freeze': ApiAccountsByAccountIdFreezePath
  '/api/v1/accounts/unfreeze': ApiAccountsUnfreezePath
  '/api/v1/accounts/root-accounts': ApiAccountsRootAccountsPath
  '/api/v1/fee/custom-fee': ApiFeeCustomFeePath
  '/api/v1/fee/reverse/{feeId}': ApiFeeReverseByFeeIdPath
  '/api/v1/fee/charged-by-organization': ApiFeeChargedByOrganizationPath
  '/api/v1/fee/charged-by-organization/{feeId}': ApiFeeChargedByOrganizationByFeeIdPath
  '/api/v1/statements': ApiStatementsPath
  '/api/v1/statements/{statementId}': ApiStatementsByStatementIdPath
  '/api/v1/statements/download/{statementId}': ApiStatementsDownloadByStatementIdPath
  '/api/v1/transfers': ApiTransfersPath
  '/api/v1/transfers/verify/{transferId}': ApiTransfersVerifyByTransferIdPath
  '/api/v1/transfers/{transferId}': ApiTransfersByTransferIdPath
  '/api/v1/counterparties': ApiCounterpartiesPath
  '/api/v1/counterparties/{counterPartyId}': ApiCounterpartiesByCounterPartyIdPath
  '/api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}': ApiPaymentsVerifyAccountByBankIdOrBankCodeByAccountNumberPath
  '/api/v1/banks': ApiBanksPath
  '/api/v1/bills/billers': ApiBillsBillersPath
  '/api/v1/bills/billers/{billerId}/products': ApiBillsBillersByBillerIdProductsPath
  '/api/v1/bills/customer-validation/{productSlug}/{customerId}': ApiBillsCustomerValidationByProductSlugByCustomerIdPath
  '/api/v1/bills': ApiBillsPath
  '/api/v1/bills/{billPaymentId}': ApiBillsByBillPaymentIdPath
  '/api/v1/transfers/bulk': ApiTransfersBulkPath
  '/api/v1/transfers/bulk/{bulkTransferId}': ApiTransfersBulkByBulkTransferIdPath
  '/api/v1/counterparties/bulk': ApiCounterpartiesBulkPath
  '/api/v1/payments/verify-account/bulk': ApiPaymentsVerifyAccountBulkPath
  '/api/v1/sub-accounts': ApiSubAccountsPath
  '/api/v1/sub-accounts/balance/{subAccountId}': ApiSubAccountsBalanceBySubAccountIdPath
  '/api/v1/sub-accounts/{subAccountId}': ApiSubAccountsBySubAccountIdPath
  '/api/v1/transactions/{transactionId}': ApiTransactionsByTransactionIdPath
  '/api/v1/transactions': ApiTransactionsPath
  '/api/v1/sub-accounts/transactions': ApiSubAccountsTransactionsPath
  '/api/v1/savings': ApiSavingsPath
  '/api/v1/savings/{savingsId}/rollover': ApiSavingsBySavingsIdRolloverPath
  '/api/v1/savings/withdrawal': ApiSavingsWithdrawalPath
  '/api/v1/savings/{savingsId}': ApiSavingsBySavingsIdPath
  '/api/v1/savings/{savingsId}/withdrawal': ApiSavingsBySavingsIdWithdrawalPath
  '/api/v1/savings/withdrawal/{withdrawalId}': ApiSavingsWithdrawalByWithdrawalIdPath
  '/api/v1/savings/deposit': ApiSavingsDepositPath
  '/api/v1/savings/deposit/{depositId}': ApiSavingsDepositByDepositIdPath
  '/api/v1/reports': ApiReportsPath
  '/api/v1/reports/{reportId}': ApiReportsByReportIdPath
  '/api/v1/reports/download/{reportId}': ApiReportsDownloadByReportIdPath
  '/api/v1/webhooks': ApiWebhooksPath
  '/api/v1/webhooks/{webhookId}': ApiWebhooksByWebhookIdPath
  '/api/v1/webhooks/verify/{webhookId}': ApiWebhooksVerifyByWebhookIdPath
  '/api/v1/events': ApiEventsPath
  '/api/v1/events/{eventId}': ApiEventsByEventIdPath
  '/api/v1/events/event-types': ApiEventsEventTypesPath
}

export interface ExtractedApiDocument {
  openapi: '3.1.0'
  info: OpenApiInfo
  components?: OpenApiComponentsDefinition
  security?: OpenApiSecurityRequirementDefinition[]
  paths: Paths
}

export interface ExtractedApiDocumentApi {
  accountApis: {
    create(): Promise<Customer>
    list(query: AccountApiQuery): Promise<Customer>
    update(params: AccountByAccountIdParams): Promise<Customer>
    get(
      params: AccountByAccountIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  apiDocuments: {
    get(params: DownloadDocumentParams, query: CustomerQuery): Promise<Customer>
    getGetOperation(
      params: UpdateParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  balances: {
    get(
      params: AccountByAccountIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  bankApis: {
    list(query: CustomerQuery): Promise<Customer>
  }
  billApis: {
    create(body?: BillInput): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
    get(
      params: BillByBillPaymentIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  billerProducts: {
    list(params: ProductParams, query: CustomerQuery): Promise<Customer>
  }
  billers: {
    list(query: PaymentApiQuery): Promise<Customer>
  }
  bulks: {
    create(body: BulkInput): Promise<Customer>
  }
  businessVerifications: {
    create(params: UpdateParams): Promise<Customer>
  }
  chargedByOrganizations: {
    list(query: PaymentApiQuery): Promise<Customer>
    get(params: ReverseParams, query: CustomerQuery): Promise<Customer>
  }
  counterpartyApis: {
    create(): Promise<Customer>
    list(query: CounterpartyApiQuery): Promise<Customer>
    update(params: CounterpartyByCounterPartyIdParams): Promise<Customer>
    get(
      params: CounterpartyByCounterPartyIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
    delete(params: CounterpartyByCounterPartyIdParams): Promise<Customer>
  }
  customerApis: {
    create(body?: CustomerInput): Promise<Customer>
    list(query: CustomerQuery): Promise<Customer>
    get(params: UpdateParams, query: CustomerQuery): Promise<Customer>
    delete(params: UpdateParams): Promise<Customer>
  }
  customerValidationBills: {
    get(
      params: CustomerValidationParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  customFees: {
    create(body: CustomFeeInput): Promise<Customer>
  }
  deposits: {
    list(query: PaymentApiQuery): Promise<Customer>
    create(body: StatementInput): Promise<Customer>
    get(
      params: DepositByDepositIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  downloadDocumentDocuments: {
    get(
      params: DownloadDocumentParams,
      query: CustomerQuery,
      headers?: DownloadDocumentHeader,
    ): Promise<Customer>
  }
  downloads: {
    get(
      params: ReportByReportIdParams,
      query: CustomerQuery,
      headers?: DownloadDocumentHeader,
    ): Promise<Customer>
  }
  eventApis: {
    list(query: PaymentApiQuery): Promise<Customer>
    get(params: EventByEventIdParams, query: CustomerQuery): Promise<Customer>
  }
  eventTypes: {
    list(query: CustomerQuery): Promise<Customer>
  }
  freezeAccounts: {
    create(
      params: AccountByAccountIdParams,
      body?: FreezeInput,
    ): Promise<Customer>
  }
  individualVerifications: {
    create(params: UpdateParams, body?: IndividualInput): Promise<Customer>
  }
  nextOfKinIndividuals: {
    create(params: UpdateParams, body?: CustomerInput): Promise<Customer>
    get(params: UpdateParams, query: CustomerQuery): Promise<Customer>
    update(
      params: NextOfKinByCustomerIdAndNextOfKinIdParams,
      body?: CustomerInput,
    ): Promise<Customer>
    getGetOperation(
      params: NextOfKinByCustomerIdAndNextOfKinIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
    delete(params: NextOfKinByCustomerIdAndNextOfKinIdParams): Promise<Customer>
  }
  officersRequirementCustomers: {
    get(params: UpdateParams, query: CustomerQuery): Promise<Customer>
  }
  payments: {
    get(params: PaymentParams, query: CustomerQuery): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
  }
  reportApis: {
    list(query: PaymentApiQuery): Promise<Customer>
    create(body: ReportInput): Promise<Customer>
    get(params: ReportByReportIdParams, query: CustomerQuery): Promise<Customer>
  }
  requeries: {
    get(params: RequeryParams, query: CustomerQuery): Promise<Customer>
  }
  reverses: {
    create(params: ReverseParams): Promise<Customer>
  }
  rolloverSavings: {
    create(params: RolloverParams): Promise<Customer>
  }
  rootAccounts: {
    list(query: RootAccountQuery): Promise<Customer>
  }
  savingApis: {
    list(query: PaymentApiQuery): Promise<Customer>
    create(body: UnfreezeInput): Promise<Customer>
    get(params: RolloverParams, query: CustomerQuery): Promise<Customer>
  }
  searchs: {
    list(query: SearchQuery): Promise<Customer>
  }
  statementApis: {
    create(body: StatementInput): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
    get(
      params: StatementByStatementIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  statementDownloads: {
    get(
      params: StatementByStatementIdParams,
      query: CustomerQuery,
      headers?: DownloadDocumentHeader,
    ): Promise<Customer>
  }
  subAccountApis: {
    create(body: UnfreezeInput): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
    get(
      params: BalanceBySubAccountIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
    update(params: BalanceBySubAccountIdParams): Promise<Customer>
  }
  subAccountBalances: {
    get(
      params: BalanceBySubAccountIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  subAccountTransactions: {
    list(query: PaymentApiQuery): Promise<Customer>
  }
  transactions: {
    get(params: TransactionParams, query: CustomerQuery): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
  }
  transferApis: {
    create(body?: TransferInput, headers?: TransferHeader): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
    get(params: VerifyParams, query: CustomerQuery): Promise<Customer>
  }
  transferBulks: {
    create(body: BulkInput): Promise<Customer>
    get(
      params: BulkByBulkTransferIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
  unfreezes: {
    create(body: UnfreezeInput): Promise<Customer>
  }
  updates: {
    update(params: UpdateParams): Promise<Customer>
  }
  uploadDocumentDocuments: {
    create(
      params: DownloadDocumentParams,
      query: UploadDocumentQuery,
      body?: UploadDocumentInput,
    ): Promise<Customer>
  }
  verifies: {
    get(params: VerifyParams, query: CustomerQuery): Promise<Customer>
  }
  verifyAccountBulks: {
    create(body: BulkInput): Promise<Customer>
  }
  verifyAccountPayments: {
    get(params: VerifyAccountParams, query: CustomerQuery): Promise<Customer>
  }
  webhookApis: {
    create(body: WebhookInput): Promise<Customer>
    list(query: PaymentApiQuery): Promise<Customer>
    get(
      params: WebhookByWebhookIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
    delete(params: WebhookByWebhookIdParams): Promise<Customer>
    update(
      params: WebhookByWebhookIdParams,
      body?: WebhookInput,
    ): Promise<Customer>
  }
  webhookVerifies: {
    create(
      params: WebhookByWebhookIdParams,
      body?: VerifyByWebhookIdInput,
    ): Promise<Customer>
  }
  withdrawals: {
    list(query: PaymentApiQuery): Promise<Customer>
    create(body: StatementInput): Promise<Customer>
    get(params: RolloverParams, query: CustomerQuery): Promise<Customer>
    getGetOperation(
      params: WithdrawalByWithdrawalIdParams,
      query: CustomerQuery,
    ): Promise<Customer>
  }
}

export const extractedApiDocumentManifest = {
  groups: [
    {
      className: 'AccountApi',
      propertyName: 'accountApis',
      operations: [
        {
          path: '/api/v1/accounts',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Deposit Account',
          description:
            'Creates a deposit account for a customer. An account.created event is sent when the request is successful.',
          operationId: 'postApiV1Accounts',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/accounts',
          method: 'GET',
          methodName: 'list',
          summary: 'List Deposit Accounts',
          description: 'List all deposit accounts. Paging can be applied.',
          operationId: 'getApiV1Accounts',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'AccountApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'accountId',
              accessor: 'accountid',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'accountType',
              accessor: 'accounttype',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'metadata',
              accessor: 'metadata',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'query',
              accessor: 'query',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/accounts/{accountId}',
          method: 'PATCH',
          methodName: 'update',
          summary: 'Update Deposit Account',
          description: 'Update a deposit account.',
          operationId: 'patchApiV1AccountsAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'AccountByAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'accountId',
              accessor: 'accountid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/accounts/{accountId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Deposit Account',
          description: 'Fetch the details of a deposit account by id.',
          operationId: 'getApiV1AccountsAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'AccountByAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'accountId',
              accessor: 'accountid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'ApiDocument',
      propertyName: 'apiDocuments',
      operations: [
        {
          path: '/api/v1/documents/{customerId}/{documentId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Document',
          description:
            'Operation to fetch a single document belonging to a customer',
          operationId: 'getApiV1DocumentsCustomerIdDocumentId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'DownloadDocumentParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: 'Id of the customer',
            },
            {
              name: 'documentId',
              accessor: 'documentid',
              in: 'path',
              required: true,
              description: 'Id of the document',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/documents/{customerId}',
          method: 'GET',
          methodName: 'getGetOperation',
          summary: 'Fetch All Documents',
          description:
            'Operation to fetch all documents belonging to a customer',
          operationId: 'getApiV1DocumentsCustomerId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Balance',
      propertyName: 'balances',
      operations: [
        {
          path: '/api/v1/accounts/balance/{accountId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Balance',
          description: 'Fetch the balances of a deposit account by id.',
          operationId: 'getApiV1AccountsBalanceAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'AccountByAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'accountId',
              accessor: 'accountid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'BankApi',
      propertyName: 'bankApis',
      operations: [
        {
          path: '/api/v1/banks',
          method: 'GET',
          methodName: 'list',
          summary: 'List Banks',
          description: 'List all banks',
          operationId: 'getApiV1Banks',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'BillApi',
      propertyName: 'billApis',
      operations: [
        {
          path: '/api/v1/bills',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Bill Payment',
          description: 'COMING SOON',
          operationId: 'postApiV1Bills',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'BillInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/bills',
          method: 'GET',
          methodName: 'list',
          summary: 'List Bills Payment',
          description: 'List Bills Payment',
          operationId: 'getApiV1Bills',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/bills/{billPaymentId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Bill Payment',
          description: 'Fetch details of a bill payment by id.',
          operationId: 'getApiV1BillsBillPaymentId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'BillByBillPaymentIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'billPaymentId',
              accessor: 'billpaymentid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'BillerProduct',
      propertyName: 'billerProducts',
      operations: [
        {
          path: '/api/v1/bills/billers/{billerId}/products',
          method: 'GET',
          methodName: 'list',
          summary: 'List Biller Products',
          description: 'List Biller Products',
          operationId: 'getApiV1BillsBillersBillerIdProducts',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'ProductParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'billerId',
              accessor: 'billerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Biller',
      propertyName: 'billers',
      operations: [
        {
          path: '/api/v1/bills/billers',
          method: 'GET',
          methodName: 'list',
          summary: 'List Billers',
          description: 'List Billers',
          operationId: 'getApiV1BillsBillers',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Bulk',
      propertyName: 'bulks',
      operations: [
        {
          path: '/api/v1/counterparties/bulk',
          method: 'POST',
          methodName: 'create',
          summary: 'Bulk Create Counterparties',
          description: 'Create multiple counterparties in one request.',
          operationId: 'postApiV1CounterpartiesBulk',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'BulkInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'BusinessVerification',
      propertyName: 'businessVerifications',
      operations: [
        {
          path: '/api/v1/customers/{customerId}/verification/business',
          method: 'POST',
          methodName: 'create',
          summary: 'Kyc Validation for Business Customer',
          description: 'Kyc Validation for Business Customer',
          operationId: 'postApiV1CustomersCustomerIdVerificationBusiness',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'ChargedByOrganization',
      propertyName: 'chargedByOrganizations',
      operations: [
        {
          path: '/api/v1/fee/charged-by-organization',
          method: 'GET',
          methodName: 'list',
          summary: 'List Fees',
          description: 'List all the fees created.',
          operationId: 'getApiV1FeeChargedByOrganization',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/fee/charged-by-organization/{feeId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Fee',
          description: 'Fetch the details of a fee charged by id.',
          operationId: 'getApiV1FeeChargedByOrganizationFeeId',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'ReverseParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'feeId',
              accessor: 'feeid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'CounterpartyApi',
      propertyName: 'counterpartyApis',
      operations: [
        {
          path: '/api/v1/counterparties',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Counterparty',
          description: 'Endpoint to create counterParties',
          operationId: 'postApiV1Counterparties',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/counterparties',
          method: 'GET',
          methodName: 'list',
          summary: 'List Counterparties',
          description:
            'List all the counterparties that exist in an organization',
          operationId: 'getApiV1Counterparties',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CounterpartyApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'metadata',
              accessor: 'metadata',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'query',
              accessor: 'query',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/counterparties/{counterPartyId}',
          method: 'PATCH',
          methodName: 'update',
          summary: 'Update Counterparty',
          description: 'Update counterparty',
          operationId: 'patchApiV1CounterpartiesCounterPartyId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CounterpartyByCounterPartyIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'counterPartyId',
              accessor: 'counterpartyid',
              in: 'path',
              required: true,
              description: 'The counterparty id',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/counterparties/{counterPartyId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Counterparty',
          description: 'Fetch a single counterparty',
          operationId: 'getApiV1CounterpartiesCounterPartyId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CounterpartyByCounterPartyIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'counterPartyId',
              accessor: 'counterpartyid',
              in: 'path',
              required: true,
              description: 'The counterparty id',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/counterparties/{counterPartyId}',
          method: 'DELETE',
          methodName: 'delete',
          summary: 'Delete Counterparty',
          description: 'Operation to delete a Counterparty',
          operationId: 'deleteApiV1CounterpartiesCounterPartyId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CounterpartyByCounterPartyIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'counterPartyId',
              accessor: 'counterpartyid',
              in: 'path',
              required: true,
              description: 'Id of the CounterParty',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'CustomerApi',
      propertyName: 'customerApis',
      operations: [
        {
          path: '/api/v1/customers',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Customer',
          description: 'Endpoint to create Customer',
          operationId: 'postApiV1Customers',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/customers',
          method: 'GET',
          methodName: 'list',
          summary: 'List all Customer',
          description:
            'Operation to list all the customers that exist in an organization',
          operationId: 'getApiV1Customers',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'customerType',
              accessor: 'customertype',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'metadata',
              accessor: 'metadata',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'query',
              accessor: 'query',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/customers/{customerId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch customer',
          description: 'Operation to get the details of a customer',
          operationId: 'getApiV1CustomersCustomerId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: 'Id of the customer',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/customers/{customerId}',
          method: 'DELETE',
          methodName: 'delete',
          summary: 'Delete Customer',
          description: 'Operation to delete a Customer',
          operationId: 'deleteApiV1CustomersCustomerId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: 'Id of the customer',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'CustomerValidationBill',
      propertyName: 'customerValidationBills',
      operations: [
        {
          path: '/api/v1/bills/customer-validation/{productSlug}/{customerId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Verify Customer Details',
          description: "Validate customer's meter or smartcard number",
          operationId: 'getApiV1BillsCustomerValidationProductSlugCustomerId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerValidationParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'productSlug',
              accessor: 'productslug',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'CustomFee',
      propertyName: 'customFees',
      operations: [
        {
          path: '/api/v1/fee/custom-fee',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Fee',
          description: 'Charge a fee amount from an account.',
          operationId: 'postApiV1FeeCustomFee',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomFeeInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Deposit',
      propertyName: 'deposits',
      operations: [
        {
          path: '/api/v1/savings/deposit',
          method: 'GET',
          methodName: 'list',
          summary: 'List Deposit',
          description:
            'Operation to fetch all Deposit created by an organization',
          operationId: 'getApiV1SavingsDeposit',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/deposit',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a Deposit',
          description: 'Operation to create a Deposit',
          operationId: 'postApiV1SavingsDeposit',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'StatementInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/deposit/{depositId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch a Deposit',
          description: 'Operation to get details of a Deposit',
          operationId: 'getApiV1SavingsDepositDepositId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'DepositByDepositIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'depositId',
              accessor: 'depositid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'DownloadDocumentDocument',
      propertyName: 'downloadDocumentDocuments',
      operations: [
        {
          path: '/api/v1/documents/download-document/{customerId}/{documentId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Download Document',
          description: "Operation to download a customer's document",
          operationId: 'getApiV1DocumentsDownloadDocumentCustomerIdDocumentId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'DownloadDocumentHeader',
          paramsType: 'DownloadDocumentParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'documentId',
              accessor: 'documentid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [
            {
              name: 'accept',
              accessor: 'accept',
              in: 'header',
              required: false,
              description: 'Generated from available response content types',
            },
          ],
          security: undefined,
        },
      ],
    },
    {
      className: 'Download',
      propertyName: 'downloads',
      operations: [
        {
          path: '/api/v1/reports/download/{reportId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Download a report document',
          description: 'Operation to download a generated report',
          operationId: 'getApiV1ReportsDownloadReportId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'DownloadDocumentHeader',
          paramsType: 'ReportByReportIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'reportId',
              accessor: 'reportid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [
            {
              name: 'accept',
              accessor: 'accept',
              in: 'header',
              required: false,
              description: 'Generated from available response content types',
            },
          ],
          security: undefined,
        },
      ],
    },
    {
      className: 'EventApi',
      propertyName: 'eventApis',
      operations: [
        {
          path: '/api/v1/events',
          method: 'GET',
          methodName: 'list',
          summary: 'List Events',
          description:
            'Operation to fetch all events generated for an organization',
          operationId: 'getApiV1Events',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/events/{eventId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Event',
          description: 'Operation to fetch details of an event',
          operationId: 'getApiV1EventsEventId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'EventByEventIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'eventId',
              accessor: 'eventid',
              in: 'path',
              required: true,
              description: 'Id of the event',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'EventType',
      propertyName: 'eventTypes',
      operations: [
        {
          path: '/api/v1/events/event-types',
          method: 'GET',
          methodName: 'list',
          summary: 'Event Types',
          description: 'Operation to fetch all possible events types',
          operationId: 'getApiV1EventsEventTypes',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'FreezeAccount',
      propertyName: 'freezeAccounts',
      operations: [
        {
          path: '/api/v1/accounts/{accountId}/freeze',
          method: 'POST',
          methodName: 'create',
          summary: 'Freeze Deposit Account',
          description:
            'Blocks a deposit account. An account.frozen event is sent when the request is successful.',
          operationId: 'postApiV1AccountsAccountIdFreeze',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'FreezeInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'AccountByAccountIdParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'accountId',
              accessor: 'accountid',
              in: 'path',
              required: true,
              description: 'Id of the account to be frozen',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'IndividualVerification',
      propertyName: 'individualVerifications',
      operations: [
        {
          path: '/api/v1/customers/{customerId}/verification/individual',
          method: 'POST',
          methodName: 'create',
          summary: 'Kyc Validation for Individual Customer',
          description: 'Kyc Validation for Individual Customer',
          operationId: 'postApiV1CustomersCustomerIdVerificationIndividual',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'IndividualInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'NextOfKinIndividual',
      propertyName: 'nextOfKinIndividuals',
      operations: [
        {
          path: '/api/v1/individuals/{customerId}/next-of-kin',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Next Of Kin',
          description: 'Create a next of kin',
          operationId: 'postApiV1IndividualsCustomerIdNextOfKin',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/individuals/{customerId}/next-of-kin',
          method: 'GET',
          methodName: 'get',
          summary: 'List Next Of Kin',
          description: 'List next of kin',
          operationId: 'getApiV1IndividualsCustomerIdNextOfKin',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
          method: 'PATCH',
          methodName: 'update',
          summary: 'Update Next Of Kin',
          description: 'Update a next of kin',
          operationId: 'patchApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'NextOfKinByCustomerIdAndNextOfKinIdParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'nextOfKinId',
              accessor: 'nextofkinid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
          method: 'GET',
          methodName: 'getGetOperation',
          summary: 'Fetch Next Of Kin',
          description: 'Get details of a next of kin',
          operationId: 'getApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'NextOfKinByCustomerIdAndNextOfKinIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'nextOfKinId',
              accessor: 'nextofkinid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}',
          method: 'DELETE',
          methodName: 'delete',
          summary: 'Delete Next Of Kin',
          description: 'Delete a next of kin',
          operationId: 'deleteApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'NextOfKinByCustomerIdAndNextOfKinIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'nextOfKinId',
              accessor: 'nextofkinid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'OfficersRequirementCustomer',
      propertyName: 'officersRequirementCustomers',
      operations: [
        {
          path: '/api/v1/customers/{customerId}/officers-requirement',
          method: 'GET',
          methodName: 'get',
          summary: 'Officers Requirement',
          description:
            'Operation to get the officers requirement of a Business Customer',
          operationId: 'getApiV1CustomersCustomerIdOfficersRequirement',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: 'Id of the customer',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Payment',
      propertyName: 'payments',
      operations: [
        {
          path: '/api/v1/payments/{paymentId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Payment',
          description: 'Fetch a received payment details by id.',
          operationId: 'getApiV1PaymentsPaymentId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'PaymentParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'paymentId',
              accessor: 'paymentid',
              in: 'path',
              required: true,
              description: 'Id of the payment',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/payments',
          method: 'GET',
          methodName: 'list',
          summary: 'List Payments',
          description:
            'List all payments. Paging and filtering can be applied.',
          operationId: 'getApiV1Payments',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'ReportApi',
      propertyName: 'reportApis',
      operations: [
        {
          path: '/api/v1/reports',
          method: 'GET',
          methodName: 'list',
          summary: 'List Reports',
          description:
            'Operation to fetch all Reports created by an organization',
          operationId: 'getApiV1Reports',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/reports',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a Report',
          description: 'Operation to create a Report',
          operationId: 'postApiV1Reports',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'ReportInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/reports/{reportId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch a Report',
          description: 'Operation to get details of a report',
          operationId: 'getApiV1ReportsReportId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'ReportByReportIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'reportId',
              accessor: 'reportid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Requery',
      propertyName: 'requeries',
      operations: [
        {
          path: '/api/v1/payments/requery/{customerReference}',
          method: 'GET',
          methodName: 'get',
          summary: 'Verify Incoming Payment',
          description:
            'Requery an incoming payment to a dynamic VirtualNuban using the reference',
          operationId: 'getApiV1PaymentsRequeryCustomerReference',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'RequeryParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerReference',
              accessor: 'customerreference',
              in: 'path',
              required: true,
              description: 'The customer reference',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Reverse',
      propertyName: 'reverses',
      operations: [
        {
          path: '/api/v1/fee/reverse/{feeId}',
          method: 'POST',
          methodName: 'create',
          summary: 'Reverse Fee',
          description: 'Reverse a fee charged to an account',
          operationId: 'postApiV1FeeReverseFeeId',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'ReverseParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'feeId',
              accessor: 'feeid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'RolloverSaving',
      propertyName: 'rolloverSavings',
      operations: [
        {
          path: '/api/v1/savings/{savingsId}/rollover',
          method: 'POST',
          methodName: 'create',
          summary: 'Rollover a Savings',
          description: 'Operation to rollover a Savings',
          operationId: 'postApiV1SavingsSavingsIdRollover',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'RolloverParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'savingsId',
              accessor: 'savingsid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'RootAccount',
      propertyName: 'rootAccounts',
      operations: [
        {
          path: '/api/v1/accounts/root-accounts',
          method: 'GET',
          methodName: 'list',
          summary: 'List Root Accounts',
          description:
            "List your organisation's deposit accounts. Paging and filtering can be applied",
          operationId: 'getApiV1AccountsRootAccounts',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'RootAccountQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'accountType',
              accessor: 'accounttype',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'SavingApi',
      propertyName: 'savingApis',
      operations: [
        {
          path: '/api/v1/savings',
          method: 'GET',
          methodName: 'list',
          summary: 'List Savings',
          description:
            'Operation to fetch all Savings created by an organization',
          operationId: 'getApiV1Savings',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a Savings',
          description: 'Operation to create a Savings',
          operationId: 'postApiV1Savings',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'UnfreezeInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/{savingsId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch a Savings',
          description: 'Operation to get details of a Savings',
          operationId: 'getApiV1SavingsSavingsId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'RolloverParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'savingsId',
              accessor: 'savingsid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Search',
      propertyName: 'searchs',
      operations: [
        {
          path: '/api/v1/customers/search',
          method: 'GET',
          methodName: 'list',
          summary: 'Search customers',
          description:
            'Operation to search for an Individual or Business Customer using BVN, email, Phone number or RC Number',
          operationId: 'getApiV1CustomersSearch',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'SearchQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'customerType',
              accessor: 'customertype',
              in: 'query',
              required: false,
              description: undefined,
            },
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'searchValue',
              accessor: 'searchvalue',
              in: 'query',
              required: false,
              description: undefined,
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'StatementApi',
      propertyName: 'statementApis',
      operations: [
        {
          path: '/api/v1/statements',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Statement',
          description: 'Operation to generate an Account Statement',
          operationId: 'postApiV1Statements',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'StatementInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/statements',
          method: 'GET',
          methodName: 'list',
          summary: 'List Statements',
          description:
            'Operation to fetch all statements created by an organization',
          operationId: 'getApiV1Statements',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/statements/{statementId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Statement',
          description: 'Operation to get details of a statement',
          operationId: 'getApiV1StatementsStatementId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'StatementByStatementIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'statementId',
              accessor: 'statementid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'StatementDownload',
      propertyName: 'statementDownloads',
      operations: [
        {
          path: '/api/v1/statements/download/{statementId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Download a statement',
          description: 'Operation to download a generated statement',
          operationId: 'getApiV1StatementsDownloadStatementId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'DownloadDocumentHeader',
          paramsType: 'StatementByStatementIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'statementId',
              accessor: 'statementid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [
            {
              name: 'accept',
              accessor: 'accept',
              in: 'header',
              required: false,
              description: 'Generated from available response content types',
            },
          ],
          security: undefined,
        },
      ],
    },
    {
      className: 'SubAccountApi',
      propertyName: 'subAccountApis',
      operations: [
        {
          path: '/api/v1/sub-accounts',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a SubAccount',
          description: 'Operation to create a SubAccount',
          operationId: 'postApiV1SubAccounts',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'UnfreezeInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/sub-accounts',
          method: 'GET',
          methodName: 'list',
          summary: 'List SubAccount',
          description: 'Operation to list SubAccounts',
          operationId: 'getApiV1SubAccounts',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/sub-accounts/{subAccountId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch by SubAccount Id',
          description: 'Operation to details of a SubAccount by Id',
          operationId: 'getApiV1SubAccountsSubAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'BalanceBySubAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'subAccountId',
              accessor: 'subaccountid',
              in: 'path',
              required: true,
              description: 'Id of the SubAccount',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/sub-accounts/{subAccountId}',
          method: 'PATCH',
          methodName: 'update',
          summary: 'Update Sub Account',
          description: 'Update details of a Sub Account',
          operationId: 'patchApiV1SubAccountsSubAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'BalanceBySubAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'subAccountId',
              accessor: 'subaccountid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'SubAccountBalance',
      propertyName: 'subAccountBalances',
      operations: [
        {
          path: '/api/v1/sub-accounts/balance/{subAccountId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Sub Account Balance',
          description: 'Fetch the balances of a SubAccount',
          operationId: 'getApiV1SubAccountsBalanceSubAccountId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'BalanceBySubAccountIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'subAccountId',
              accessor: 'subaccountid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'SubAccountTransaction',
      propertyName: 'subAccountTransactions',
      operations: [
        {
          path: '/api/v1/sub-accounts/transactions',
          method: 'GET',
          methodName: 'list',
          summary: 'List SubAccount Transactions',
          description: 'Operation to query SubAccount transactions',
          operationId: 'getApiV1SubAccountsTransactions',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Transaction',
      propertyName: 'transactions',
      operations: [
        {
          path: '/api/v1/transactions/{transactionId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Transaction',
          description: 'Operation to fetch details of a single transaction',
          operationId: 'getApiV1TransactionsTransactionId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'TransactionParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'transactionId',
              accessor: 'transactionid',
              in: 'path',
              required: true,
              description: 'Id of the transaction',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/transactions',
          method: 'GET',
          methodName: 'list',
          summary: 'List Transactions',
          description: 'Operation to query transactions',
          operationId: 'getApiV1Transactions',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'TransferApi',
      propertyName: 'transferApis',
      operations: [
        {
          path: '/api/v1/transfers',
          method: 'POST',
          methodName: 'create',
          summary: 'Initiate Transfer',
          description: 'Endpoint to do transfer',
          operationId: 'postApiV1Transfers',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'TransferInput',
          queryType: 'CustomerQuery',
          headerType: 'TransferHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [],
          queryParams: [],
          headerParams: [
            {
              name: 'x-anchor-idempotent-key',
              accessor: 'xAnchorIdempotentKey',
              in: 'header',
              required: false,
              description:
                'This endpoint support the optional Idempotency feature.',
            },
          ],
          security: undefined,
        },
        {
          path: '/api/v1/transfers',
          method: 'GET',
          methodName: 'list',
          summary: 'List Transfers',
          description: 'Operation to query transfers',
          operationId: 'getApiV1Transfers',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/transfers/{transferId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Transfer',
          description: 'Operation to get details of a single transfer',
          operationId: 'getApiV1TransfersTransferId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'VerifyParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'transferId',
              accessor: 'transferid',
              in: 'path',
              required: true,
              description: 'Id of the transfer',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'TransferBulk',
      propertyName: 'transferBulks',
      operations: [
        {
          path: '/api/v1/transfers/bulk',
          method: 'POST',
          methodName: 'create',
          summary: 'Create Bulk Transfer',
          description:
            'Batch multiple transfers in a single request. Example transfer types are NIP and Book Transfer',
          operationId: 'postApiV1TransfersBulk',
          requestBodyDescription: undefined,
          responseDescription: 'Created',
          responseType: 'Customer',
          inputType: 'BulkInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/transfers/bulk/{bulkTransferId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch Bulk Transfer',
          description: 'Get the details and list of payment in a bulk transfer',
          operationId: 'getApiV1TransfersBulkBulkTransferId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'BulkByBulkTransferIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'bulkTransferId',
              accessor: 'bulktransferid',
              in: 'path',
              required: true,
              description: 'Id of the bulk transfer',
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Unfreeze',
      propertyName: 'unfreezes',
      operations: [
        {
          path: '/api/v1/accounts/unfreeze',
          method: 'POST',
          methodName: 'create',
          summary: 'Unfreeze Deposit Account',
          description: 'Unblock a deposit account.',
          operationId: 'postApiV1AccountsUnfreeze',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'UnfreezeInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Update',
      propertyName: 'updates',
      operations: [
        {
          path: '/api/v1/customers/update/{customerId}',
          method: 'PUT',
          methodName: 'update',
          summary: 'Update Customer',
          description: 'Endpoint to Update Customer',
          operationId: 'putApiV1CustomersUpdateCustomerId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'UpdateParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'UploadDocumentDocument',
      propertyName: 'uploadDocumentDocuments',
      operations: [
        {
          path: '/api/v1/documents/upload-document/{customerId}/{documentId}',
          method: 'POST',
          methodName: 'create',
          summary: 'Upload Document',
          description: 'Operation to upload customer documents',
          operationId: 'postApiV1DocumentsUploadDocumentCustomerIdDocumentId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'UploadDocumentInput',
          queryType: 'UploadDocumentQuery',
          headerType: 'CustomerHeader',
          paramsType: 'DownloadDocumentParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'customerId',
              accessor: 'customerid',
              in: 'path',
              required: true,
              description: 'Id of the customer',
            },
            {
              name: 'documentId',
              accessor: 'documentid',
              in: 'path',
              required: true,
              description: 'Id of the document being uploaded',
            },
          ],
          queryParams: [
            {
              name: 'textData',
              accessor: 'textdata',
              in: 'query',
              required: false,
              description: 'The text data being uploaded',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Verify',
      propertyName: 'verifies',
      operations: [
        {
          path: '/api/v1/transfers/verify/{transferId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Verify transfer',
          description: 'Operation to verify a transfer',
          operationId: 'getApiV1TransfersVerifyTransferId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'VerifyParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'transferId',
              accessor: 'transferid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'VerifyAccountBulk',
      propertyName: 'verifyAccountBulks',
      operations: [
        {
          path: '/api/v1/payments/verify-account/bulk',
          method: 'POST',
          methodName: 'create',
          summary: 'Bulk Verify Account Numbers',
          description:
            'Verify multiple account numbers in a single request. Returns the list of validated names',
          operationId: 'postApiV1PaymentsVerifyAccountBulk',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'BulkInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'VerifyAccountPayment',
      propertyName: 'verifyAccountPayments',
      operations: [
        {
          path: '/api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}',
          method: 'GET',
          methodName: 'get',
          summary: 'Verify Account Number',
          description: 'Verify the details of an account number',
          operationId:
            'getApiV1PaymentsVerifyAccountBankIdOrBankCodeAccountNumber',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'VerifyAccountParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'accountNumber',
              accessor: 'accountnumber',
              in: 'path',
              required: true,
              description: undefined,
            },
            {
              name: 'bankIdOrBankCode',
              accessor: 'bankidorbankcode',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'WebhookApi',
      propertyName: 'webhookApis',
      operations: [
        {
          path: '/api/v1/webhooks',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a Webhook',
          description: 'Operation to create a Webhook',
          operationId: 'postApiV1Webhooks',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'WebhookInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/webhooks',
          method: 'GET',
          methodName: 'list',
          summary: 'List Webhooks',
          description:
            'Operation to fetch all Webhooks created by an organization',
          operationId: 'getApiV1Webhooks',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/webhooks/{webhookId}',
          method: 'GET',
          methodName: 'get',
          summary: 'Fetch a Webhook',
          description: 'Operation to get details of a Webhook',
          operationId: 'getApiV1WebhooksWebhookId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'WebhookByWebhookIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'webhookId',
              accessor: 'webhookid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/webhooks/{webhookId}',
          method: 'DELETE',
          methodName: 'delete',
          summary: 'Delete Webhook',
          description: 'Operation to delete a Webhook',
          operationId: 'deleteApiV1WebhooksWebhookId',
          requestBodyDescription: undefined,
          responseDescription: 'Accepted',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'WebhookByWebhookIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'webhookId',
              accessor: 'webhookid',
              in: 'path',
              required: true,
              description: 'Id of the Webhook',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/webhooks/{webhookId}',
          method: 'PATCH',
          methodName: 'update',
          summary: 'Update a Webhook',
          description: 'Operation to update details of a Webhook',
          operationId: 'patchApiV1WebhooksWebhookId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'WebhookInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'WebhookByWebhookIdParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'webhookId',
              accessor: 'webhookid',
              in: 'path',
              required: true,
              description: 'Id of the Webhook',
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'WebhookVerify',
      propertyName: 'webhookVerifies',
      operations: [
        {
          path: '/api/v1/webhooks/verify/{webhookId}',
          method: 'POST',
          methodName: 'create',
          summary: 'Send sample event to a webhook',
          description: 'Operation to simulate sample event to a webhook',
          operationId: 'postApiV1WebhooksVerifyWebhookId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'VerifyByWebhookIdInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'WebhookByWebhookIdParams',
          hasBody: true,
          bodyRequired: false,
          pathParams: [
            {
              name: 'webhookId',
              accessor: 'webhookid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
      ],
    },
    {
      className: 'Withdrawal',
      propertyName: 'withdrawals',
      operations: [
        {
          path: '/api/v1/savings/withdrawal',
          method: 'GET',
          methodName: 'list',
          summary: 'List Withdrawal',
          description:
            'Operation to fetch all Withdrawal created by an organization',
          operationId: 'getApiV1SavingsWithdrawal',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'PaymentApiQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
            {
              name: 'page',
              accessor: 'page',
              in: 'query',
              required: false,
              description:
                'The page number of the requested page, defaults to 0',
            },
            {
              name: 'size',
              accessor: 'size',
              in: 'query',
              required: false,
              description: 'Number of records in each page, defaults to 20',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/withdrawal',
          method: 'POST',
          methodName: 'create',
          summary: 'Create a Withdrawal',
          description: 'Operation to create a Withdrawal',
          operationId: 'postApiV1SavingsWithdrawal',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'StatementInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'CustomerParams',
          hasBody: true,
          bodyRequired: true,
          pathParams: [],
          queryParams: [],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/{savingsId}/withdrawal',
          method: 'GET',
          methodName: 'get',
          summary: 'Savings withdrawal data',
          description: 'Operation to get savings withdrawal daya',
          operationId: 'getApiV1SavingsSavingsIdWithdrawal',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'RolloverParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'savingsId',
              accessor: 'savingsid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
        {
          path: '/api/v1/savings/withdrawal/{withdrawalId}',
          method: 'GET',
          methodName: 'getGetOperation',
          summary: 'Fetch a Withdrawal',
          description: 'Operation to get details of a Withdrawal',
          operationId: 'getApiV1SavingsWithdrawalWithdrawalId',
          requestBodyDescription: undefined,
          responseDescription: 'Success',
          responseType: 'Customer',
          inputType: 'CustomerInput',
          queryType: 'CustomerQuery',
          headerType: 'CustomerHeader',
          paramsType: 'WithdrawalByWithdrawalIdParams',
          hasBody: false,
          bodyRequired: false,
          pathParams: [
            {
              name: 'withdrawalId',
              accessor: 'withdrawalid',
              in: 'path',
              required: true,
              description: undefined,
            },
          ],
          queryParams: [
            {
              name: 'include',
              accessor: 'include',
              in: 'query',
              required: false,
              description: 'This can be used to fetch related resources.',
            },
          ],
          headerParams: [],
          security: undefined,
        },
      ],
    },
  ],
  securitySchemes: [],
  security: undefined,
} as const satisfies OpenApiSdkManifest

export const extractedApiDocument: ExtractedApiDocument = {
  openapi: '3.1.0',
  info: {
    title: 'Extracted API',
    version: '0.0.0',
  },
  paths: {
    '/api/v1/customers': {
      post: {
        summary: 'Create Customer',
        description: 'Endpoint to create Customer',
        operationId: 'postApiV1Customers',
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          address: {
                            type: 'object',
                            properties: {
                              country: {
                                type: 'string',
                                example: 'NG',
                              },
                              state: {
                                type: 'string',
                                example: 'KANO',
                              },
                            },
                            example: {
                              country: 'NG',
                              state: 'KANO',
                            },
                          },
                        },
                        example: {
                          address: {
                            country: 'NG',
                            state: 'KANO',
                          },
                        },
                      },
                    },
                    example: {
                      attributes: {
                        address: {
                          country: 'NG',
                          state: 'KANO',
                        },
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      address: {
                        country: 'NG',
                        state: 'KANO',
                      },
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    address: {
                      country: 'NG',
                      state: 'KANO',
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List all Customer',
        description:
          'Operation to list all the customers that exist in an organization',
        operationId: 'getApiV1Customers',
        parameters: [
          {
            name: 'customerType',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'metadata',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'query',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/update/{customerId}': {
      put: {
        summary: 'Update Customer',
        description: 'Endpoint to Update Customer',
        operationId: 'putApiV1CustomersUpdateCustomerId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/{customerId}': {
      get: {
        summary: 'Fetch customer',
        description: 'Operation to get the details of a customer',
        operationId: 'getApiV1CustomersCustomerId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            description: 'Id of the customer',
            schema: {
              type: 'string',
              description: 'Id of the customer',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      delete: {
        summary: 'Delete Customer',
        description: 'Operation to delete a Customer',
        operationId: 'deleteApiV1CustomersCustomerId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            description: 'Id of the customer',
            schema: {
              type: 'string',
              description: 'Id of the customer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/search': {
      get: {
        summary: 'Search customers',
        description:
          'Operation to search for an Individual or Business Customer using BVN, email, Phone number or RC Number',
        operationId: 'getApiV1CustomersSearch',
        parameters: [
          {
            name: 'customerType',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'searchValue',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/{customerId}/officers-requirement': {
      get: {
        summary: 'Officers Requirement',
        description:
          'Operation to get the officers requirement of a Business Customer',
        operationId: 'getApiV1CustomersCustomerIdOfficersRequirement',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            description: 'Id of the customer',
            schema: {
              type: 'string',
              description: 'Id of the customer',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/{customerId}/verification/business': {
      post: {
        summary: 'Kyc Validation for Business Customer',
        description: 'Kyc Validation for Business Customer',
        operationId: 'postApiV1CustomersCustomerIdVerificationBusiness',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/customers/{customerId}/verification/individual': {
      post: {
        summary: 'Kyc Validation for Individual Customer',
        description: 'Kyc Validation for Individual Customer',
        operationId: 'postApiV1CustomersCustomerIdVerificationIndividual',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          level: {
                            type: 'string',
                            example: 'TIER_3',
                          },
                        },
                        example: {
                          level: 'TIER_3',
                        },
                      },
                    },
                    example: {
                      attributes: {
                        level: 'TIER_3',
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      level: 'TIER_3',
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    level: 'TIER_3',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/documents/download-document/{customerId}/{documentId}': {
      get: {
        summary: 'Download Document',
        description: "Operation to download a customer's document",
        operationId: 'getApiV1DocumentsDownloadDocumentCustomerIdDocumentId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'documentId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
          {
            name: 'accept',
            in: 'header',
            required: false,
            description: 'Generated from available response content types',
            schema: {
              type: 'description',
              description: 'Generated from available response content types',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/documents/{customerId}/{documentId}': {
      get: {
        summary: 'Fetch Document',
        description:
          'Operation to fetch a single document belonging to a customer',
        operationId: 'getApiV1DocumentsCustomerIdDocumentId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            description: 'Id of the customer',
            schema: {
              type: 'string',
              description: 'Id of the customer',
            },
          },
          {
            name: 'documentId',
            in: 'path',
            required: true,
            description: 'Id of the document',
            schema: {
              type: 'string',
              description: 'Id of the document',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/documents/upload-document/{customerId}/{documentId}': {
      post: {
        summary: 'Upload Document',
        description: 'Operation to upload customer documents',
        operationId: 'postApiV1DocumentsUploadDocumentCustomerIdDocumentId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            description: 'Id of the customer',
            schema: {
              type: 'string',
              description: 'Id of the customer',
            },
          },
          {
            name: 'documentId',
            in: 'path',
            required: true,
            description: 'Id of the document being uploaded',
            schema: {
              type: 'string',
              description: 'Id of the document being uploaded',
            },
          },
          {
            name: 'textData',
            in: 'query',
            required: false,
            description: 'The text data being uploaded',
            schema: {
              type: 'string',
              description: 'The text data being uploaded',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  fileData: {
                    type: 'file',
                    description: 'The file being uploaded',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/documents/{customerId}': {
      get: {
        summary: 'Fetch All Documents',
        description: 'Operation to fetch all documents belonging to a customer',
        operationId: 'getApiV1DocumentsCustomerId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/individuals/{customerId}/next-of-kin': {
      post: {
        summary: 'Create Next Of Kin',
        description: 'Create a next of kin',
        operationId: 'postApiV1IndividualsCustomerIdNextOfKin',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          address: {
                            type: 'object',
                            properties: {
                              country: {
                                type: 'string',
                                example: 'NG',
                              },
                              state: {
                                type: 'string',
                                example: 'KANO',
                              },
                            },
                            example: {
                              country: 'NG',
                              state: 'KANO',
                            },
                          },
                        },
                        example: {
                          address: {
                            country: 'NG',
                            state: 'KANO',
                          },
                        },
                      },
                    },
                    example: {
                      attributes: {
                        address: {
                          country: 'NG',
                          state: 'KANO',
                        },
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      address: {
                        country: 'NG',
                        state: 'KANO',
                      },
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    address: {
                      country: 'NG',
                      state: 'KANO',
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Next Of Kin',
        description: 'List next of kin',
        operationId: 'getApiV1IndividualsCustomerIdNextOfKin',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/individuals/{customerId}/next-of-kin/{nextOfKinId}': {
      patch: {
        summary: 'Update Next Of Kin',
        description: 'Update a next of kin',
        operationId: 'patchApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nextOfKinId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          address: {
                            type: 'object',
                            properties: {
                              country: {
                                type: 'string',
                                example: 'NG',
                              },
                              state: {
                                type: 'string',
                                example: 'KANO',
                              },
                            },
                            example: {
                              country: 'NG',
                              state: 'KANO',
                            },
                          },
                        },
                        example: {
                          address: {
                            country: 'NG',
                            state: 'KANO',
                          },
                        },
                      },
                    },
                    example: {
                      attributes: {
                        address: {
                          country: 'NG',
                          state: 'KANO',
                        },
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      address: {
                        country: 'NG',
                        state: 'KANO',
                      },
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    address: {
                      country: 'NG',
                      state: 'KANO',
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'Fetch Next Of Kin',
        description: 'Get details of a next of kin',
        operationId: 'getApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nextOfKinId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      delete: {
        summary: 'Delete Next Of Kin',
        description: 'Delete a next of kin',
        operationId: 'deleteApiV1IndividualsCustomerIdNextOfKinNextOfKinId',
        parameters: [
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'nextOfKinId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '202': {
            description: 'Accepted',
          },
          '204': {
            description: 'Success',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/payments/{paymentId}': {
      get: {
        summary: 'Fetch Payment',
        description: 'Fetch a received payment details by id.',
        operationId: 'getApiV1PaymentsPaymentId',
        parameters: [
          {
            name: 'paymentId',
            in: 'path',
            required: true,
            description: 'Id of the payment',
            schema: {
              type: 'string',
              description: 'Id of the payment',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/payments': {
      get: {
        summary: 'List Payments',
        description: 'List all payments. Paging and filtering can be applied.',
        operationId: 'getApiV1Payments',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/payments/requery/{customerReference}': {
      get: {
        summary: 'Verify Incoming Payment',
        description:
          'Requery an incoming payment to a dynamic VirtualNuban using the reference',
        operationId: 'getApiV1PaymentsRequeryCustomerReference',
        parameters: [
          {
            name: 'customerReference',
            in: 'path',
            required: true,
            description: 'The customer reference',
            schema: {
              type: 'string',
              description: 'The customer reference',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts': {
      post: {
        summary: 'Create Deposit Account',
        description:
          'Creates a deposit account for a customer. An account.created event is sent when the request is successful.',
        operationId: 'postApiV1Accounts',
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Deposit Accounts',
        description: 'List all deposit accounts. Paging can be applied.',
        operationId: 'getApiV1Accounts',
        parameters: [
          {
            name: 'accountType',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'customerId',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'accountId',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'metadata',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'query',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts/{accountId}': {
      patch: {
        summary: 'Update Deposit Account',
        description: 'Update a deposit account.',
        operationId: 'patchApiV1AccountsAccountId',
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'Fetch Deposit Account',
        description: 'Fetch the details of a deposit account by id.',
        operationId: 'getApiV1AccountsAccountId',
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts/balance/{accountId}': {
      get: {
        summary: 'Fetch Balance',
        description: 'Fetch the balances of a deposit account by id.',
        operationId: 'getApiV1AccountsBalanceAccountId',
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts/{accountId}/freeze': {
      post: {
        summary: 'Freeze Deposit Account',
        description:
          'Blocks a deposit account. An account.frozen event is sent when the request is successful.',
        operationId: 'postApiV1AccountsAccountIdFreeze',
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            required: true,
            description: 'Id of the account to be frozen',
            schema: {
              type: 'string',
              description: 'Id of the account to be frozen',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          freezeReason: {
                            type: 'string',
                            example: 'FRAUD',
                          },
                        },
                        example: {
                          freezeReason: 'FRAUD',
                        },
                      },
                    },
                    example: {
                      attributes: {
                        freezeReason: 'FRAUD',
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      freezeReason: 'FRAUD',
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    freezeReason: 'FRAUD',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts/unfreeze': {
      post: {
        summary: 'Unfreeze Deposit Account',
        description: 'Unblock a deposit account.',
        operationId: 'postApiV1AccountsUnfreeze',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/accounts/root-accounts': {
      get: {
        summary: 'List Root Accounts',
        description:
          "List your organisation's deposit accounts. Paging and filtering can be applied",
        operationId: 'getApiV1AccountsRootAccounts',
        parameters: [
          {
            name: 'accountType',
            in: 'query',
            required: false,
            schema: {},
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/fee/custom-fee': {
      post: {
        summary: 'Create Fee',
        description: 'Charge a fee amount from an account.',
        operationId: 'postApiV1FeeCustomFee',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    attributes: {
                      currency: 'NGN',
                    },
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  attributes: {
                    currency: 'NGN',
                  },
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
          default: {
            description: 'Created',
          },
        },
      },
    },
    '/api/v1/fee/reverse/{feeId}': {
      post: {
        summary: 'Reverse Fee',
        description: 'Reverse a fee charged to an account',
        operationId: 'postApiV1FeeReverseFeeId',
        parameters: [
          {
            name: 'feeId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
          default: {
            description: 'Created',
          },
        },
      },
    },
    '/api/v1/fee/charged-by-organization': {
      get: {
        summary: 'List Fees',
        description: 'List all the fees created.',
        operationId: 'getApiV1FeeChargedByOrganization',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
          default: {
            description: 'Created',
          },
        },
      },
    },
    '/api/v1/fee/charged-by-organization/{feeId}': {
      get: {
        summary: 'Fetch Fee',
        description: 'Fetch the details of a fee charged by id.',
        operationId: 'getApiV1FeeChargedByOrganizationFeeId',
        parameters: [
          {
            name: 'feeId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
          default: {
            description: 'Created',
          },
        },
      },
    },
    '/api/v1/statements': {
      post: {
        summary: 'Create Statement',
        description: 'Operation to generate an Account Statement',
        operationId: 'postApiV1Statements',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Statements',
        description:
          'Operation to fetch all statements created by an organization',
        operationId: 'getApiV1Statements',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/statements/{statementId}': {
      get: {
        summary: 'Fetch Statement',
        description: 'Operation to get details of a statement',
        operationId: 'getApiV1StatementsStatementId',
        parameters: [
          {
            name: 'statementId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/statements/download/{statementId}': {
      get: {
        summary: 'Download a statement',
        description: 'Operation to download a generated statement',
        operationId: 'getApiV1StatementsDownloadStatementId',
        parameters: [
          {
            name: 'statementId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
          {
            name: 'accept',
            in: 'header',
            required: false,
            description: 'Generated from available response content types',
            schema: {
              type: 'description',
              description: 'Generated from available response content types',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transfers': {
      post: {
        summary: 'Initiate Transfer',
        description: 'Endpoint to do transfer',
        operationId: 'postApiV1Transfers',
        parameters: [
          {
            name: 'x-anchor-idempotent-key',
            in: 'header',
            required: false,
            description:
              'This endpoint support the optional Idempotency feature.',
            schema: {
              type: 'string',
              description:
                'This endpoint support the optional Idempotency feature.',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          currency: {
                            type: 'string',
                            example: 'NGN',
                          },
                        },
                        example: {
                          currency: 'NGN',
                        },
                      },
                      relationships: {
                        type: 'object',
                        properties: {
                          destinationAccount: {
                            type: 'object',
                            properties: {
                              data: {
                                type: 'object',
                                properties: {
                                  type: {
                                    type: 'string',
                                    example: 'SubAccount',
                                  },
                                },
                                example: {
                                  type: 'SubAccount',
                                },
                              },
                            },
                            example: {
                              data: {
                                type: 'SubAccount',
                              },
                            },
                          },
                          account: {
                            type: 'object',
                            properties: {
                              data: {
                                type: 'object',
                                properties: {
                                  type: {
                                    type: 'string',
                                    example: 'SubAccount',
                                  },
                                },
                                example: {
                                  type: 'SubAccount',
                                },
                              },
                            },
                            example: {
                              data: {
                                type: 'SubAccount',
                              },
                            },
                          },
                        },
                        example: {
                          destinationAccount: {
                            data: {
                              type: 'SubAccount',
                            },
                          },
                          account: {
                            data: {
                              type: 'SubAccount',
                            },
                          },
                        },
                      },
                    },
                    example: {
                      attributes: {
                        currency: 'NGN',
                      },
                      relationships: {
                        destinationAccount: {
                          data: {
                            type: 'SubAccount',
                          },
                        },
                        account: {
                          data: {
                            type: 'SubAccount',
                          },
                        },
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      currency: 'NGN',
                    },
                    relationships: {
                      destinationAccount: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    currency: 'NGN',
                  },
                  relationships: {
                    destinationAccount: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Transfers',
        description: 'Operation to query transfers',
        operationId: 'getApiV1Transfers',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transfers/verify/{transferId}': {
      get: {
        summary: 'Verify transfer',
        description: 'Operation to verify a transfer',
        operationId: 'getApiV1TransfersVerifyTransferId',
        parameters: [
          {
            name: 'transferId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transfers/{transferId}': {
      get: {
        summary: 'Fetch Transfer',
        description: 'Operation to get details of a single transfer',
        operationId: 'getApiV1TransfersTransferId',
        parameters: [
          {
            name: 'transferId',
            in: 'path',
            required: true,
            description: 'Id of the transfer',
            schema: {
              type: 'string',
              description: 'Id of the transfer',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/counterparties': {
      post: {
        summary: 'Create Counterparty',
        description: 'Endpoint to create counterParties',
        operationId: 'postApiV1Counterparties',
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Counterparties',
        description:
          'List all the counterparties that exist in an organization',
        operationId: 'getApiV1Counterparties',
        parameters: [
          {
            name: 'metadata',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'query',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/counterparties/{counterPartyId}': {
      patch: {
        summary: 'Update Counterparty',
        description: 'Update counterparty',
        operationId: 'patchApiV1CounterpartiesCounterPartyId',
        parameters: [
          {
            name: 'counterPartyId',
            in: 'path',
            required: true,
            description: 'The counterparty id',
            schema: {
              type: 'string',
              description: 'The counterparty id',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'Fetch Counterparty',
        description: 'Fetch a single counterparty',
        operationId: 'getApiV1CounterpartiesCounterPartyId',
        parameters: [
          {
            name: 'counterPartyId',
            in: 'path',
            required: true,
            description: 'The counterparty id',
            schema: {
              type: 'string',
              description: 'The counterparty id',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      delete: {
        summary: 'Delete Counterparty',
        description: 'Operation to delete a Counterparty',
        operationId: 'deleteApiV1CounterpartiesCounterPartyId',
        parameters: [
          {
            name: 'counterPartyId',
            in: 'path',
            required: true,
            description: 'Id of the CounterParty',
            schema: {
              type: 'string',
              description: 'Id of the CounterParty',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}': {
      get: {
        summary: 'Verify Account Number',
        description: 'Verify the details of an account number',
        operationId:
          'getApiV1PaymentsVerifyAccountBankIdOrBankCodeAccountNumber',
        parameters: [
          {
            name: 'bankIdOrBankCode',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'accountNumber',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/banks': {
      get: {
        summary: 'List Banks',
        description: 'List all banks',
        operationId: 'getApiV1Banks',
        parameters: [
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/bills/billers': {
      get: {
        summary: 'List Billers',
        description: 'List Billers',
        operationId: 'getApiV1BillsBillers',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/bills/billers/{billerId}/products': {
      get: {
        summary: 'List Biller Products',
        description: 'List Biller Products',
        operationId: 'getApiV1BillsBillersBillerIdProducts',
        parameters: [
          {
            name: 'billerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/bills/customer-validation/{productSlug}/{customerId}': {
      get: {
        summary: 'Verify Customer Details',
        description: "Validate customer's meter or smartcard number",
        operationId: 'getApiV1BillsCustomerValidationProductSlugCustomerId',
        parameters: [
          {
            name: 'productSlug',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'customerId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/bills': {
      post: {
        summary: 'Create Bill Payment',
        description: 'COMING SOON',
        operationId: 'postApiV1Bills',
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      relationships: {
                        type: 'object',
                        properties: {
                          account: {
                            type: 'object',
                            properties: {
                              data: {
                                type: 'object',
                                properties: {
                                  type: {
                                    type: 'string',
                                    example: 'SubAccount',
                                  },
                                },
                                example: {
                                  type: 'SubAccount',
                                },
                              },
                            },
                            example: {
                              data: {
                                type: 'SubAccount',
                              },
                            },
                          },
                        },
                        example: {
                          account: {
                            data: {
                              type: 'SubAccount',
                            },
                          },
                        },
                      },
                    },
                    example: {
                      relationships: {
                        account: {
                          data: {
                            type: 'SubAccount',
                          },
                        },
                      },
                    },
                  },
                },
                example: {
                  data: {
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
              },
              example: {
                data: {
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Bills Payment',
        description: 'List Bills Payment',
        operationId: 'getApiV1Bills',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/bills/{billPaymentId}': {
      get: {
        summary: 'Fetch Bill Payment',
        description: 'Fetch details of a bill payment by id.',
        operationId: 'getApiV1BillsBillPaymentId',
        parameters: [
          {
            name: 'billPaymentId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transfers/bulk': {
      post: {
        summary: 'Create Bulk Transfer',
        description:
          'Batch multiple transfers in a single request. Example transfer types are NIP and Book Transfer',
        operationId: 'postApiV1TransfersBulk',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                  },
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transfers/bulk/{bulkTransferId}': {
      get: {
        summary: 'Fetch Bulk Transfer',
        description: 'Get the details and list of payment in a bulk transfer',
        operationId: 'getApiV1TransfersBulkBulkTransferId',
        parameters: [
          {
            name: 'bulkTransferId',
            in: 'path',
            required: true,
            description: 'Id of the bulk transfer',
            schema: {
              type: 'string',
              description: 'Id of the bulk transfer',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/counterparties/bulk': {
      post: {
        summary: 'Bulk Create Counterparties',
        description: 'Create multiple counterparties in one request.',
        operationId: 'postApiV1CounterpartiesBulk',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                  },
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/payments/verify-account/bulk': {
      post: {
        summary: 'Bulk Verify Account Numbers',
        description:
          'Verify multiple account numbers in a single request. Returns the list of validated names',
        operationId: 'postApiV1PaymentsVerifyAccountBulk',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'array',
                  },
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/sub-accounts': {
      post: {
        summary: 'Create a SubAccount',
        description: 'Operation to create a SubAccount',
        operationId: 'postApiV1SubAccounts',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List SubAccount',
        description: 'Operation to list SubAccounts',
        operationId: 'getApiV1SubAccounts',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/sub-accounts/balance/{subAccountId}': {
      get: {
        summary: 'Fetch Sub Account Balance',
        description: 'Fetch the balances of a SubAccount',
        operationId: 'getApiV1SubAccountsBalanceSubAccountId',
        parameters: [
          {
            name: 'subAccountId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/sub-accounts/{subAccountId}': {
      get: {
        summary: 'Fetch by SubAccount Id',
        description: 'Operation to details of a SubAccount by Id',
        operationId: 'getApiV1SubAccountsSubAccountId',
        parameters: [
          {
            name: 'subAccountId',
            in: 'path',
            required: true,
            description: 'Id of the SubAccount',
            schema: {
              type: 'string',
              description: 'Id of the SubAccount',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      patch: {
        summary: 'Update Sub Account',
        description: 'Update details of a Sub Account',
        operationId: 'patchApiV1SubAccountsSubAccountId',
        parameters: [
          {
            name: 'subAccountId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transactions/{transactionId}': {
      get: {
        summary: 'Fetch Transaction',
        description: 'Operation to fetch details of a single transaction',
        operationId: 'getApiV1TransactionsTransactionId',
        parameters: [
          {
            name: 'transactionId',
            in: 'path',
            required: true,
            description: 'Id of the transaction',
            schema: {
              type: 'string',
              description: 'Id of the transaction',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/transactions': {
      get: {
        summary: 'List Transactions',
        description: 'Operation to query transactions',
        operationId: 'getApiV1Transactions',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/sub-accounts/transactions': {
      get: {
        summary: 'List SubAccount Transactions',
        description: 'Operation to query SubAccount transactions',
        operationId: 'getApiV1SubAccountsTransactions',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings': {
      get: {
        summary: 'List Savings',
        description:
          'Operation to fetch all Savings created by an organization',
        operationId: 'getApiV1Savings',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      post: {
        summary: 'Create a Savings',
        description: 'Operation to create a Savings',
        operationId: 'postApiV1Savings',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                required: ['data'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/{savingsId}/rollover': {
      post: {
        summary: 'Rollover a Savings',
        description: 'Operation to rollover a Savings',
        operationId: 'postApiV1SavingsSavingsIdRollover',
        parameters: [
          {
            name: 'savingsId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/withdrawal': {
      get: {
        summary: 'List Withdrawal',
        description:
          'Operation to fetch all Withdrawal created by an organization',
        operationId: 'getApiV1SavingsWithdrawal',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      post: {
        summary: 'Create a Withdrawal',
        description: 'Operation to create a Withdrawal',
        operationId: 'postApiV1SavingsWithdrawal',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/{savingsId}': {
      get: {
        summary: 'Fetch a Savings',
        description: 'Operation to get details of a Savings',
        operationId: 'getApiV1SavingsSavingsId',
        parameters: [
          {
            name: 'savingsId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/{savingsId}/withdrawal': {
      get: {
        summary: 'Savings withdrawal data',
        description: 'Operation to get savings withdrawal daya',
        operationId: 'getApiV1SavingsSavingsIdWithdrawal',
        parameters: [
          {
            name: 'savingsId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/withdrawal/{withdrawalId}': {
      get: {
        summary: 'Fetch a Withdrawal',
        description: 'Operation to get details of a Withdrawal',
        operationId: 'getApiV1SavingsWithdrawalWithdrawalId',
        parameters: [
          {
            name: 'withdrawalId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/deposit': {
      get: {
        summary: 'List Deposit',
        description:
          'Operation to fetch all Deposit created by an organization',
        operationId: 'getApiV1SavingsDeposit',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      post: {
        summary: 'Create a Deposit',
        description: 'Operation to create a Deposit',
        operationId: 'postApiV1SavingsDeposit',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/savings/deposit/{depositId}': {
      get: {
        summary: 'Fetch a Deposit',
        description: 'Operation to get details of a Deposit',
        operationId: 'getApiV1SavingsDepositDepositId',
        parameters: [
          {
            name: 'depositId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/reports': {
      get: {
        summary: 'List Reports',
        description:
          'Operation to fetch all Reports created by an organization',
        operationId: 'getApiV1Reports',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      post: {
        summary: 'Create a Report',
        description: 'Operation to create a Report',
        operationId: 'postApiV1Reports',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    attributes: {
                      reportType: 'transaction_history',
                    },
                    relationships: {
                      account: {
                        data: {
                          type: 'SubAccount',
                        },
                      },
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  attributes: {
                    reportType: 'transaction_history',
                  },
                  relationships: {
                    account: {
                      data: {
                        type: 'SubAccount',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/reports/{reportId}': {
      get: {
        summary: 'Fetch a Report',
        description: 'Operation to get details of a report',
        operationId: 'getApiV1ReportsReportId',
        parameters: [
          {
            name: 'reportId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/reports/download/{reportId}': {
      get: {
        summary: 'Download a report document',
        description: 'Operation to download a generated report',
        operationId: 'getApiV1ReportsDownloadReportId',
        parameters: [
          {
            name: 'reportId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
          {
            name: 'accept',
            in: 'header',
            required: false,
            description: 'Generated from available response content types',
            schema: {
              type: 'description',
              description: 'Generated from available response content types',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/webhooks': {
      post: {
        summary: 'Create a Webhook',
        description: 'Operation to create a Webhook',
        operationId: 'postApiV1Webhooks',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {},
                },
                example: {
                  data: {
                    attributes: {
                      deliveryMode: 'AtMostOnce',
                    },
                  },
                },
                required: ['data'],
              },
              example: {
                data: {
                  attributes: {
                    deliveryMode: 'AtMostOnce',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      get: {
        summary: 'List Webhooks',
        description:
          'Operation to fetch all Webhooks created by an organization',
        operationId: 'getApiV1Webhooks',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/webhooks/{webhookId}': {
      get: {
        summary: 'Fetch a Webhook',
        description: 'Operation to get details of a Webhook',
        operationId: 'getApiV1WebhooksWebhookId',
        parameters: [
          {
            name: 'webhookId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      delete: {
        summary: 'Delete Webhook',
        description: 'Operation to delete a Webhook',
        operationId: 'deleteApiV1WebhooksWebhookId',
        parameters: [
          {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Id of the Webhook',
            schema: {
              type: 'string',
              description: 'Id of the Webhook',
            },
          },
        ],
        responses: {
          '202': {
            description: 'Accepted',
          },
          '204': {
            description: 'No content',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
      patch: {
        summary: 'Update a Webhook',
        description: 'Operation to update details of a Webhook',
        operationId: 'patchApiV1WebhooksWebhookId',
        parameters: [
          {
            name: 'webhookId',
            in: 'path',
            required: true,
            description: 'Id of the Webhook',
            schema: {
              type: 'string',
              description: 'Id of the Webhook',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          deliveryMode: {
                            type: 'string',
                            example: 'AtMostOnce',
                          },
                        },
                        example: {
                          deliveryMode: 'AtMostOnce',
                        },
                      },
                    },
                    example: {
                      attributes: {
                        deliveryMode: 'AtMostOnce',
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      deliveryMode: 'AtMostOnce',
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    deliveryMode: 'AtMostOnce',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/webhooks/verify/{webhookId}': {
      post: {
        summary: 'Send sample event to a webhook',
        description: 'Operation to simulate sample event to a webhook',
        operationId: 'postApiV1WebhooksVerifyWebhookId',
        parameters: [
          {
            name: 'webhookId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: false,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    properties: {
                      attributes: {
                        type: 'object',
                        properties: {
                          eventType: {
                            type: 'string',
                            example: 'customer.created',
                          },
                        },
                        example: {
                          eventType: 'customer.created',
                        },
                      },
                    },
                    example: {
                      attributes: {
                        eventType: 'customer.created',
                      },
                    },
                  },
                },
                example: {
                  data: {
                    attributes: {
                      eventType: 'customer.created',
                    },
                  },
                },
              },
              example: {
                data: {
                  attributes: {
                    eventType: 'customer.created',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/events': {
      get: {
        summary: 'List Events',
        description:
          'Operation to fetch all events generated for an organization',
        operationId: 'getApiV1Events',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            description: 'The page number of the requested page, defaults to 0',
            schema: {
              type: 'string',
              description:
                'The page number of the requested page, defaults to 0',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            description: 'Number of records in each page, defaults to 20',
            schema: {
              type: 'string',
              description: 'Number of records in each page, defaults to 20',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/events/{eventId}': {
      get: {
        summary: 'Fetch Event',
        description: 'Operation to fetch details of an event',
        operationId: 'getApiV1EventsEventId',
        parameters: [
          {
            name: 'eventId',
            in: 'path',
            required: true,
            description: 'Id of the event',
            schema: {
              type: 'string',
              description: 'Id of the event',
            },
          },
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
    '/api/v1/events/event-types': {
      get: {
        summary: 'Event Types',
        description: 'Operation to fetch all possible events types',
        operationId: 'getApiV1EventsEventTypes',
        parameters: [
          {
            name: 'include',
            in: 'query',
            required: false,
            description: 'This can be used to fetch related resources.',
            schema: {
              type: 'string',
              description: 'This can be used to fetch related resources.',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Success',
          },
          '202': {
            description: 'Accepted',
          },
          '400': {
            description: 'Bad Request',
          },
          '401': {
            description: 'Unauthorized',
          },
          '403': {
            description: 'Forbidden',
          },
          '404': {
            description: 'Not Found',
          },
          '409': {
            description: 'Conflict',
          },
          '412': {
            description: 'Precondition Failed',
          },
          '429': {
            description: 'Too Many Requests',
          },
          '500': {
            description: 'Internal Server Error',
          },
          '503': {
            description: 'Service Unavailable',
          },
        },
      },
    },
  },
}

export const extractedApiDocumentSdk: OpenApiRuntimeBundle<ExtractedApiDocumentApi> =
  {
    document: extractedApiDocument,
    manifest: extractedApiDocumentManifest,
  }

export default extractedApiDocument
