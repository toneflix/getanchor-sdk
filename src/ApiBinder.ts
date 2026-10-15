import { BaseApi } from './BaseApi'

import { AccountNumbers } from './Apis/AccountNumbers'
import { VirtualNubans } from './Apis/VirtualNubans'
import { Accounts } from './Apis/Accounts'
import { Banks } from './Apis/Banks'
import { Bills } from './Apis/Bills'
import { Businesses } from './Apis/Businesses'
import { CardPayments } from './Apis/CardPayments'
import { Cards } from './Apis/Cards'
import { CardTransfers } from './Apis/CardTransfers'
import { PayIns, PayWithTransfers, ReservedAccounts } from './Apis/Collections'
import { Counterparties } from './Apis/Counterparties'
import { Customers } from './Apis/Customers'
import { Documents } from './Apis/Documents'
import { Fees } from './Apis/Fees'
import { InboundTransfers } from './Apis/InboundTransfers'
import { NextOfKin } from './Apis/NextOfKin'
import { Countries, Events, Webhooks } from './Apis/Platform'
import { Reports, Statements } from './Apis/Reporting'
import { Rewards } from './Apis/Rewards'
import { SubAccounts } from './Apis/SubAccounts'
import { Transactions } from './Apis/Transactions'
import { Transfers } from './Apis/Transfers'

export class ApiBinder extends BaseApi {
    // Customers & onboarding
    customers!: Customers
    businesses!: Businesses
    nextOfKin!: NextOfKin
    documents!: Documents

    // Banking
    accounts!: Accounts
    accountNumbers!: AccountNumbers
    virtualNubans!: VirtualNubans
    subAccounts!: SubAccounts
    inboundTransfers!: InboundTransfers

    // Money movement
    counterparties!: Counterparties
    banks!: Banks
    transfers!: Transfers
    transactions!: Transactions
    fees!: Fees
    rewards!: Rewards

    // Cards
    cards!: Cards
    cardTransfers!: CardTransfers
    cardPayments!: CardPayments

    // Collections
    reservedAccounts!: ReservedAccounts
    payWithTransfers!: PayWithTransfers
    payIns!: PayIns

    // Bills
    bills!: Bills

    // Reporting
    statements!: Statements
    reports!: Reports

    // Platform
    events!: Events
    webhooks!: Webhooks
    countries!: Countries

    protected override boot () {
        this.customers = new Customers(this.core)
        this.businesses = new Businesses(this.core)
        this.nextOfKin = new NextOfKin(this.core)
        this.documents = new Documents(this.core)
        this.accounts = new Accounts(this.core)
        this.accountNumbers = new AccountNumbers(this.core)
        this.virtualNubans = new VirtualNubans(this.core)
        this.subAccounts = new SubAccounts(this.core)
        this.inboundTransfers = new InboundTransfers(this.core)
        this.counterparties = new Counterparties(this.core)
        this.banks = new Banks(this.core)
        this.transfers = new Transfers(this.core)
        this.transactions = new Transactions(this.core)
        this.fees = new Fees(this.core)
        this.rewards = new Rewards(this.core)
        this.cards = new Cards(this.core)
        this.cardTransfers = new CardTransfers(this.core)
        this.cardPayments = new CardPayments(this.core)
        this.reservedAccounts = new ReservedAccounts(this.core)
        this.payWithTransfers = new PayWithTransfers(this.core)
        this.payIns = new PayIns(this.core)
        this.bills = new Bills(this.core)
        this.statements = new Statements(this.core)
        this.reports = new Reports(this.core)
        this.events = new Events(this.core)
        this.webhooks = new Webhooks(this.core)
        this.countries = new Countries(this.core)
    }
}
