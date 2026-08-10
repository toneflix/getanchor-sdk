import { BaseApi } from './BaseApi'

import { AccountApi } from './Apis/AccountApi'
import { ApiDocument } from './Apis/ApiDocument'
import { Balance } from './Apis/Balance'
import { BankApi } from './Apis/BankApi'
import { BillApi } from './Apis/BillApi'
import { BillerProduct } from './Apis/BillerProduct'
import { Biller } from './Apis/Biller'
import { Bulk } from './Apis/Bulk'
import { BusinessVerification } from './Apis/BusinessVerification'
import { ChargedByOrganization } from './Apis/ChargedByOrganization'
import { CounterpartyApi } from './Apis/CounterpartyApi'
import { CustomerApi } from './Apis/CustomerApi'
import { CustomerValidationBill } from './Apis/CustomerValidationBill'
import { CustomFee } from './Apis/CustomFee'
import { Deposit } from './Apis/Deposit'
import { DownloadDocumentDocument } from './Apis/DownloadDocumentDocument'
import { Download } from './Apis/Download'
import { EventApi } from './Apis/EventApi'
import { EventType } from './Apis/EventType'
import { FreezeAccount } from './Apis/FreezeAccount'
import { IndividualVerification } from './Apis/IndividualVerification'
import { NextOfKinIndividual } from './Apis/NextOfKinIndividual'
import { OfficersRequirementCustomer } from './Apis/OfficersRequirementCustomer'
import { Payment } from './Apis/Payment'
import { ReportApi } from './Apis/ReportApi'
import { Requery } from './Apis/Requery'
import { Reverse } from './Apis/Reverse'
import { RolloverSaving } from './Apis/RolloverSaving'
import { RootAccount } from './Apis/RootAccount'
import { SavingApi } from './Apis/SavingApi'
import { Search } from './Apis/Search'
import { StatementApi } from './Apis/StatementApi'
import { StatementDownload } from './Apis/StatementDownload'
import { SubAccountApi } from './Apis/SubAccountApi'
import { SubAccountBalance } from './Apis/SubAccountBalance'
import { SubAccountTransaction } from './Apis/SubAccountTransaction'
import { Transaction } from './Apis/Transaction'
import { TransferApi } from './Apis/TransferApi'
import { TransferBulk } from './Apis/TransferBulk'
import { Unfreeze } from './Apis/Unfreeze'
import { Update } from './Apis/Update'
import { UploadDocumentDocument } from './Apis/UploadDocumentDocument'
import { Verify } from './Apis/Verify'
import { VerifyAccountBulk } from './Apis/VerifyAccountBulk'
import { VerifyAccountPayment } from './Apis/VerifyAccountPayment'
import { WebhookApi } from './Apis/WebhookApi'
import { WebhookVerify } from './Apis/WebhookVerify'
import { Withdrawal } from './Apis/Withdrawal'

export class ApiBinder extends BaseApi {
    accountApis!: AccountApi
    apiDocuments!: ApiDocument
    balances!: Balance
    bankApis!: BankApi
    billApis!: BillApi
    billerProducts!: BillerProduct
    billers!: Biller
    bulks!: Bulk
    businessVerifications!: BusinessVerification
    chargedByOrganizations!: ChargedByOrganization
    counterpartyApis!: CounterpartyApi
    customerApis!: CustomerApi
    customerValidationBills!: CustomerValidationBill
    customFees!: CustomFee
    deposits!: Deposit
    downloadDocumentDocuments!: DownloadDocumentDocument
    downloads!: Download
    eventApis!: EventApi
    eventTypes!: EventType
    freezeAccounts!: FreezeAccount
    individualVerifications!: IndividualVerification
    nextOfKinIndividuals!: NextOfKinIndividual
    officersRequirementCustomers!: OfficersRequirementCustomer
    payments!: Payment
    reportApis!: ReportApi
    requeries!: Requery
    reverses!: Reverse
    rolloverSavings!: RolloverSaving
    rootAccounts!: RootAccount
    savingApis!: SavingApi
    searchs!: Search
    statementApis!: StatementApi
    statementDownloads!: StatementDownload
    subAccountApis!: SubAccountApi
    subAccountBalances!: SubAccountBalance
    subAccountTransactions!: SubAccountTransaction
    transactions!: Transaction
    transferApis!: TransferApi
    transferBulks!: TransferBulk
    unfreezes!: Unfreeze
    updates!: Update
    uploadDocumentDocuments!: UploadDocumentDocument
    verifies!: Verify
    verifyAccountBulks!: VerifyAccountBulk
    verifyAccountPayments!: VerifyAccountPayment
    webhookApis!: WebhookApi
    webhookVerifies!: WebhookVerify
    withdrawals!: Withdrawal

    protected override boot () {
        this.accountApis = new AccountApi(this.core)
        this.apiDocuments = new ApiDocument(this.core)
        this.balances = new Balance(this.core)
        this.bankApis = new BankApi(this.core)
        this.billApis = new BillApi(this.core)
        this.billerProducts = new BillerProduct(this.core)
        this.billers = new Biller(this.core)
        this.bulks = new Bulk(this.core)
        this.businessVerifications = new BusinessVerification(this.core)
        this.chargedByOrganizations = new ChargedByOrganization(this.core)
        this.counterpartyApis = new CounterpartyApi(this.core)
        this.customerApis = new CustomerApi(this.core)
        this.customerValidationBills = new CustomerValidationBill(this.core)
        this.customFees = new CustomFee(this.core)
        this.deposits = new Deposit(this.core)
        this.downloadDocumentDocuments = new DownloadDocumentDocument(this.core)
        this.downloads = new Download(this.core)
        this.eventApis = new EventApi(this.core)
        this.eventTypes = new EventType(this.core)
        this.freezeAccounts = new FreezeAccount(this.core)
        this.individualVerifications = new IndividualVerification(this.core)
        this.nextOfKinIndividuals = new NextOfKinIndividual(this.core)
        this.officersRequirementCustomers = new OfficersRequirementCustomer(this.core)
        this.payments = new Payment(this.core)
        this.reportApis = new ReportApi(this.core)
        this.requeries = new Requery(this.core)
        this.reverses = new Reverse(this.core)
        this.rolloverSavings = new RolloverSaving(this.core)
        this.rootAccounts = new RootAccount(this.core)
        this.savingApis = new SavingApi(this.core)
        this.searchs = new Search(this.core)
        this.statementApis = new StatementApi(this.core)
        this.statementDownloads = new StatementDownload(this.core)
        this.subAccountApis = new SubAccountApi(this.core)
        this.subAccountBalances = new SubAccountBalance(this.core)
        this.subAccountTransactions = new SubAccountTransaction(this.core)
        this.transactions = new Transaction(this.core)
        this.transferApis = new TransferApi(this.core)
        this.transferBulks = new TransferBulk(this.core)
        this.unfreezes = new Unfreeze(this.core)
        this.updates = new Update(this.core)
        this.uploadDocumentDocuments = new UploadDocumentDocument(this.core)
        this.verifies = new Verify(this.core)
        this.verifyAccountBulks = new VerifyAccountBulk(this.core)
        this.verifyAccountPayments = new VerifyAccountPayment(this.core)
        this.webhookApis = new WebhookApi(this.core)
        this.webhookVerifies = new WebhookVerify(this.core)
        this.withdrawals = new Withdrawal(this.core)
    }
}