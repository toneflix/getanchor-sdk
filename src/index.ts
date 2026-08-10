import type { ApiKeyAuthConfig, BaseApi as KitBaseApi, Core as KitCore } from '@oapiex/sdk-kit'
import { createSdk as createBoundSdk, getConfig, setConfigFileBasename, updateConfig } from '@oapiex/sdk-kit'
import { extractedApiDocumentManifest, extractedApiDocumentSdk } from './Schema'

import type { ExtractedApiDocumentApi } from './Schema'
import { InitOptions } from './types'

export * from './Schema'
export { ApiBinder } from './ApiBinder'
export { BaseApi } from './BaseApi'
export { AccountApi as AccountApiApi } from './Apis/AccountApi'
export { ApiDocument as ApiDocumentApi } from './Apis/ApiDocument'
export { Balance as BalanceApi } from './Apis/Balance'
export { BankApi as BankApiApi } from './Apis/BankApi'
export { BillApi as BillApiApi } from './Apis/BillApi'
export { BillerProduct as BillerProductApi } from './Apis/BillerProduct'
export { Biller as BillerApi } from './Apis/Biller'
export { Bulk as BulkApi } from './Apis/Bulk'
export { BusinessVerification as BusinessVerificationApi } from './Apis/BusinessVerification'
export { ChargedByOrganization as ChargedByOrganizationApi } from './Apis/ChargedByOrganization'
export { CounterpartyApi as CounterpartyApiApi } from './Apis/CounterpartyApi'
export { CustomerApi as CustomerApiApi } from './Apis/CustomerApi'
export { CustomerValidationBill as CustomerValidationBillApi } from './Apis/CustomerValidationBill'
export { CustomFee as CustomFeeApi } from './Apis/CustomFee'
export { Deposit as DepositApi } from './Apis/Deposit'
export { DownloadDocumentDocument as DownloadDocumentDocumentApi } from './Apis/DownloadDocumentDocument'
export { Download as DownloadApi } from './Apis/Download'
export { EventApi as EventApiApi } from './Apis/EventApi'
export { EventType as EventTypeApi } from './Apis/EventType'
export { FreezeAccount as FreezeAccountApi } from './Apis/FreezeAccount'
export { IndividualVerification as IndividualVerificationApi } from './Apis/IndividualVerification'
export { NextOfKinIndividual as NextOfKinIndividualApi } from './Apis/NextOfKinIndividual'
export { OfficersRequirementCustomer as OfficersRequirementCustomerApi } from './Apis/OfficersRequirementCustomer'
export { Payment as PaymentApi } from './Apis/Payment'
export { ReportApi as ReportApiApi } from './Apis/ReportApi'
export { Requery as RequeryApi } from './Apis/Requery'
export { Reverse as ReverseApi } from './Apis/Reverse'
export { RolloverSaving as RolloverSavingApi } from './Apis/RolloverSaving'
export { RootAccount as RootAccountApi } from './Apis/RootAccount'
export { SavingApi as SavingApiApi } from './Apis/SavingApi'
export { Search as SearchApi } from './Apis/Search'
export { StatementApi as StatementApiApi } from './Apis/StatementApi'
export { StatementDownload as StatementDownloadApi } from './Apis/StatementDownload'
export { SubAccountApi as SubAccountApiApi } from './Apis/SubAccountApi'
export { SubAccountBalance as SubAccountBalanceApi } from './Apis/SubAccountBalance'
export { SubAccountTransaction as SubAccountTransactionApi } from './Apis/SubAccountTransaction'
export { Transaction as TransactionApi } from './Apis/Transaction'
export { TransferApi as TransferApiApi } from './Apis/TransferApi'
export { TransferBulk as TransferBulkApi } from './Apis/TransferBulk'
export { Unfreeze as UnfreezeApi } from './Apis/Unfreeze'
export { Update as UpdateApi } from './Apis/Update'
export { UploadDocumentDocument as UploadDocumentDocumentApi } from './Apis/UploadDocumentDocument'
export { Verify as VerifyApi } from './Apis/Verify'
export { VerifyAccountBulk as VerifyAccountBulkApi } from './Apis/VerifyAccountBulk'
export { VerifyAccountPayment as VerifyAccountPaymentApi } from './Apis/VerifyAccountPayment'
export { WebhookApi as WebhookApiApi } from './Apis/WebhookApi'
export { WebhookVerify as WebhookVerifyApi } from './Apis/WebhookVerify'
export { Withdrawal as WithdrawalApi } from './Apis/Withdrawal'
export { Core } from './Core'

export const securitySchemes = extractedApiDocumentManifest.securitySchemes
export const security = extractedApiDocumentManifest.security
export const createClient = (
    options: InitOptions
): KitCore & { api: KitBaseApi & ExtractedApiDocumentApi } => {
    const config = getConfig()

    options = {
        ...options,
        auth: {
            in: 'header',
            type: 'apiKey',
            name: 'x-anchor-key',
            token: config.apiKey ?? (config.auth as any)?.apiKey ?? (options.auth as any)?.apiKey ?? options.apiKey ?? process.env.ANCHOR_API_KEY!,
            ...config.auth,
            ...options.auth,
        } as ApiKeyAuthConfig,
        urls: {
            live: 'https://api.getanchor.co',
            sandbox: 'https://api.sandbox.getanchor.co',
            ...config.urls,
            ...options.urls,
        },
    }

    const client = createBoundSdk(extractedApiDocumentSdk, options) as KitCore & { api: KitBaseApi & ExtractedApiDocumentApi }

    return client
}

setConfigFileBasename('anchor.config')

updateConfig({
    urls: {
        live: 'https://api.getanchor.co',
        sandbox: 'https://api.sandbox.getanchor.co',
    },
})

export {
    BadRequestException,
    Builder,
    ForbiddenRequestException,
    Http,
    HttpException,
    setConfigFileBasename,
    UnauthorizedRequestException,
    WebhookValidator,
    createSdk,
} from '@oapiex/sdk-kit'

export type {
    AuthConfig,
    InitOptions,
    UnifiedResponse,
    XGenericObject,
} from '@oapiex/sdk-kit'