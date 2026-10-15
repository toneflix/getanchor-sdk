import { afterEach, describe, expect, it, vi } from 'vitest'

import type { ApiBinder } from '../src/index'
import { mockClient, parseUrl } from './helpers'

const body = { type: 'Probe', attributes: {} } as never

interface Case {
  name: string
  call: (api: ApiBinder) => Promise<unknown>
  method: string
  path: string
  query?: Record<string, string>
  sendsBody?: boolean
}

/**
 * Every documented endpoint, with the method and path Anchor expects. A wrong
 * verb, a mistyped path or a dropped body fails here without hitting the network.
 */
const cases: Case[] = [
  // Customers
  {
    name: 'customers.create',
    call: (a) => a.customers.create(body),
    method: 'POST',
    path: '/api/v1/customers',
    sendsBody: true,
  },
  {
    name: 'customers.list',
    call: (a) => a.customers.list({ customerType: 'IndividualCustomer', page: 1, size: 5 }),
    method: 'GET',
    path: '/api/v1/customers',
    query: { customerType: 'IndividualCustomer', page: '1', size: '5' },
  },
  {
    name: 'customers.get',
    call: (a) => a.customers.get('cst_1', { include: ['DepositAccount', 'Document'] }),
    method: 'GET',
    path: '/api/v1/customers/cst_1',
    query: { include: 'DepositAccount,Document' },
  },
  {
    name: 'customers.update',
    call: (a) => a.customers.update('cst_1', body),
    method: 'PUT',
    path: '/api/v1/customers/update/cst_1',
    sendsBody: true,
  },
  {
    name: 'customers.delete',
    call: (a) => a.customers.delete('cst_1'),
    method: 'DELETE',
    path: '/api/v1/customers/cst_1',
  },
  {
    name: 'customers.search',
    call: (a) =>
      a.customers.search({ customerType: 'IndividualCustomer', searchValue: '22222222226' }),
    method: 'GET',
    path: '/api/v1/customers/search',
    query: { customerType: 'IndividualCustomer', searchValue: '22222222226' },
  },
  {
    name: 'customers.verifyIndividual',
    call: (a) => a.customers.verifyIndividual('cst_1', body),
    method: 'POST',
    path: '/api/v1/customers/cst_1/verification/individual',
    sendsBody: true,
  },
  {
    name: 'customers.verifyBusiness',
    call: (a) => a.customers.verifyBusiness('cst_1'),
    method: 'POST',
    path: '/api/v1/customers/cst_1/verification/business',
  },
  {
    name: 'customers.officersRequirement',
    call: (a) => a.customers.officersRequirement('cst_1'),
    method: 'GET',
    path: '/api/v1/customers/cst_1/officers-requirement',
  },

  // Businesses
  {
    name: 'businesses.update',
    call: (a) => a.businesses.update('bus_1', body),
    method: 'PATCH',
    path: '/api/v1/businesses/bus_1',
    sendsBody: true,
  },
  {
    name: 'businesses.addOfficer',
    call: (a) => a.businesses.addOfficer('bus_1', body),
    method: 'POST',
    path: '/api/v1/businesses/bus_1/officers',
    sendsBody: true,
  },
  {
    name: 'businesses.updateOfficer',
    call: (a) => a.businesses.updateOfficer('bus_1', 'off_1', body),
    method: 'PATCH',
    path: '/api/v1/businesses/bus_1/officers/off_1',
    sendsBody: true,
  },
  {
    name: 'businesses.deleteOfficer',
    call: (a) => a.businesses.deleteOfficer('bus_1', 'off_1'),
    method: 'DELETE',
    path: '/api/v1/businesses/bus_1/officers/off_1',
  },

  // Next of kin
  {
    name: 'nextOfKin.create',
    call: (a) => a.nextOfKin.create('cst_1', body),
    method: 'POST',
    path: '/api/v1/individuals/cst_1/next-of-kin',
    sendsBody: true,
  },
  {
    name: 'nextOfKin.list',
    call: (a) => a.nextOfKin.list('cst_1'),
    method: 'GET',
    path: '/api/v1/individuals/cst_1/next-of-kin',
  },
  {
    name: 'nextOfKin.get',
    call: (a) => a.nextOfKin.get('cst_1', 'nok_1'),
    method: 'GET',
    path: '/api/v1/individuals/cst_1/next-of-kin/nok_1',
  },
  {
    name: 'nextOfKin.update',
    call: (a) => a.nextOfKin.update('cst_1', 'nok_1', body),
    method: 'PATCH',
    path: '/api/v1/individuals/cst_1/next-of-kin/nok_1',
    sendsBody: true,
  },
  {
    name: 'nextOfKin.delete',
    call: (a) => a.nextOfKin.delete('cst_1', 'nok_1'),
    method: 'DELETE',
    path: '/api/v1/individuals/cst_1/next-of-kin/nok_1',
  },

  // Documents
  {
    name: 'documents.list',
    call: (a) => a.documents.list('cst_1'),
    method: 'GET',
    path: '/api/v1/documents/cst_1',
  },
  {
    name: 'documents.get',
    call: (a) => a.documents.get('cst_1', 'doc_1'),
    method: 'GET',
    path: '/api/v1/documents/cst_1/doc_1',
  },
  {
    name: 'documents.download',
    call: (a) => a.documents.download('cst_1', 'doc_1'),
    method: 'GET',
    path: '/api/v1/documents/download-document/cst_1/doc_1',
  },
  {
    name: 'documents.upload (text)',
    call: (a) => a.documents.upload('cst_1', 'doc_1', { text: 'RC123456' }),
    method: 'POST',
    path: '/api/v1/documents/upload-document/cst_1/doc_1',
    query: { textData: 'RC123456' },
  },

  // Accounts
  {
    name: 'accounts.create',
    call: (a) => a.accounts.create(body),
    method: 'POST',
    path: '/api/v1/accounts',
    sendsBody: true,
  },
  {
    name: 'accounts.list',
    call: (a) => a.accounts.list({ customerId: 'cst_1' }),
    method: 'GET',
    path: '/api/v1/accounts',
    query: { customerId: 'cst_1' },
  },
  {
    name: 'accounts.get',
    call: (a) => a.accounts.get('acc_1', { include: 'AccountNumber' }),
    method: 'GET',
    path: '/api/v1/accounts/acc_1',
    query: { include: 'AccountNumber' },
  },
  {
    name: 'accounts.update',
    call: (a) => a.accounts.update('acc_1', body),
    method: 'PATCH',
    path: '/api/v1/accounts/acc_1',
    sendsBody: true,
  },
  {
    name: 'accounts.balance',
    call: (a) => a.accounts.balance('acc_1'),
    method: 'GET',
    path: '/api/v1/accounts/balance/acc_1',
  },
  {
    name: 'accounts.rootAccounts',
    call: (a) => a.accounts.rootAccounts({ accountType: 'MASTER' }),
    method: 'GET',
    path: '/api/v1/accounts/root-accounts',
    query: { accountType: 'MASTER' },
  },
  {
    name: 'accounts.freeze',
    call: (a) => a.accounts.freeze('acc_1', body),
    method: 'POST',
    path: '/api/v1/accounts/acc_1/freeze',
    sendsBody: true,
  },
  {
    name: 'accounts.unfreeze',
    call: (a) => a.accounts.unfreeze(body),
    method: 'POST',
    path: '/api/v1/accounts/unfreeze',
    sendsBody: true,
  },
  {
    name: 'accountNumbers.get',
    call: (a) => a.accountNumbers.get('num_1'),
    method: 'GET',
    path: '/api/v1/account-numbers/num_1',
  },
  {
    name: 'virtualNubans.get',
    call: (a) => a.virtualNubans.get('vn_1'),
    method: 'GET',
    path: '/api/v1/virtual-nubans/vn_1',
  },
  {
    name: 'accountNumbers.list',
    call: (a) => a.accountNumbers.list({ AccountId: 'acc_1' }),
    method: 'GET',
    path: '/api/v1/account-numbers',
    query: { AccountId: 'acc_1' },
  },
  {
    name: 'payments.get',
    call: (a) => a.payments.get('py_1', { include: 'VirtualNuban' }),
    method: 'GET',
    path: '/api/v1/payments/py_1',
    query: { include: 'VirtualNuban' },
  },
  {
    name: 'inboundTransfers.get',
    call: (a) => a.inboundTransfers.get('inb_1', { include: 'DepositAccount' }),
    method: 'GET',
    path: '/api/v1/inbound-transfers/inb_1',
    query: { include: 'DepositAccount' },
  },

  // Sub accounts
  {
    name: 'subAccounts.create',
    call: (a) => a.subAccounts.create(body),
    method: 'POST',
    path: '/api/v1/sub-accounts',
    sendsBody: true,
  },
  {
    name: 'subAccounts.list',
    call: (a) => a.subAccounts.list({ accountId: 'acc_1' }),
    method: 'GET',
    path: '/api/v1/sub-accounts',
    query: { accountId: 'acc_1' },
  },
  {
    name: 'subAccounts.get',
    call: (a) => a.subAccounts.get('sub_1'),
    method: 'GET',
    path: '/api/v1/sub-accounts/sub_1',
  },
  {
    name: 'subAccounts.update',
    call: (a) => a.subAccounts.update('sub_1', body),
    method: 'PATCH',
    path: '/api/v1/sub-accounts/sub_1',
    sendsBody: true,
  },
  {
    name: 'subAccounts.balance',
    call: (a) => a.subAccounts.balance('sub_1'),
    method: 'GET',
    path: '/api/v1/sub-accounts/balance/sub_1',
  },
  {
    name: 'subAccounts.transactions',
    call: (a) => a.subAccounts.transactions({ subAccountId: 'sub_1' }),
    method: 'GET',
    path: '/api/v1/sub-accounts/transactions',
    query: { subAccountId: 'sub_1' },
  },

  // Counterparties & banks
  {
    name: 'counterparties.create',
    call: (a) => a.counterparties.create(body),
    method: 'POST',
    path: '/api/v1/counterparties',
    sendsBody: true,
  },
  {
    name: 'counterparties.createBulk',
    call: (a) => a.counterparties.createBulk(body),
    method: 'POST',
    path: '/api/v1/counterparties/bulk',
    sendsBody: true,
  },
  {
    name: 'counterparties.list',
    call: (a) => a.counterparties.list({ query: 'ada' }),
    method: 'GET',
    path: '/api/v1/counterparties',
    query: { query: 'ada' },
  },
  {
    name: 'counterparties.get',
    call: (a) => a.counterparties.get('cp_1'),
    method: 'GET',
    path: '/api/v1/counterparties/cp_1',
  },
  {
    name: 'counterparties.update',
    call: (a) => a.counterparties.update('cp_1', body),
    method: 'PATCH',
    path: '/api/v1/counterparties/cp_1',
    sendsBody: true,
  },
  {
    name: 'counterparties.delete',
    call: (a) => a.counterparties.delete('cp_1'),
    method: 'DELETE',
    path: '/api/v1/counterparties/cp_1',
  },
  { name: 'banks.list', call: (a) => a.banks.list(), method: 'GET', path: '/api/v1/banks' },
  {
    name: 'banks.verifyAccount',
    call: (a) => a.banks.verifyAccount('000014', '0123456789'),
    method: 'GET',
    path: '/api/v1/payments/verify-account/000014/0123456789',
  },
  {
    name: 'banks.verifyAccounts',
    call: (a) => a.banks.verifyAccounts(body),
    method: 'POST',
    path: '/api/v1/payments/verify-account/bulk',
    sendsBody: true,
  },

  // Transfers & ledger
  {
    name: 'transfers.create',
    call: (a) => a.transfers.create(body),
    method: 'POST',
    path: '/api/v1/transfers',
    sendsBody: true,
  },
  {
    name: 'transfers.list',
    call: (a) => a.transfers.list({ accountId: 'acc_1', status: 'COMPLETED' }),
    method: 'GET',
    path: '/api/v1/transfers',
    query: { accountId: 'acc_1', status: 'COMPLETED' },
  },
  {
    name: 'transfers.get',
    call: (a) => a.transfers.get('trf_1'),
    method: 'GET',
    path: '/api/v1/transfers/trf_1',
  },
  {
    name: 'transfers.verify',
    call: (a) => a.transfers.verify('trf_1'),
    method: 'GET',
    path: '/api/v1/transfers/verify/trf_1',
  },
  {
    name: 'transfers.getByReference',
    call: (a) => a.transfers.getByReference('ref 1/a'),
    method: 'GET',
    path: '/api/v1/transfers/by-reference/ref%201%2Fa',
  },
  {
    name: 'transfers.createBulk',
    call: (a) => a.transfers.createBulk(body),
    method: 'POST',
    path: '/api/v1/transfers/bulk',
    sendsBody: true,
  },
  {
    name: 'transfers.getBulk',
    call: (a) => a.transfers.getBulk('blk_1'),
    method: 'GET',
    path: '/api/v1/transfers/bulk/blk_1',
  },
  {
    name: 'transactions.list',
    call: (a) => a.transactions.list({ accountId: 'acc_1', direction: 'Credit' }),
    method: 'GET',
    path: '/api/v1/transactions',
    query: { accountId: 'acc_1', direction: 'Credit' },
  },
  {
    name: 'transactions.get',
    call: (a) => a.transactions.get('txn_1'),
    method: 'GET',
    path: '/api/v1/transactions/txn_1',
  },
  {
    name: 'fees.charge',
    call: (a) => a.fees.charge(body),
    method: 'POST',
    path: '/api/v1/fee/custom-fee',
    sendsBody: true,
  },
  {
    name: 'fees.reverse',
    call: (a) => a.fees.reverse('fee_1'),
    method: 'POST',
    path: '/api/v1/fee/reverse/fee_1',
  },
  {
    name: 'fees.list',
    call: (a) => a.fees.list({ feeType: 'CUSTOM' }),
    method: 'GET',
    path: '/api/v1/fee/charged-by-organization',
    query: { feeType: 'CUSTOM' },
  },
  {
    name: 'fees.get',
    call: (a) => a.fees.get('fee_1'),
    method: 'GET',
    path: '/api/v1/fee/charged-by-organization/fee_1',
  },
  {
    name: 'rewards.create',
    call: (a) => a.rewards.create(body),
    method: 'POST',
    path: '/api/v1/rewards',
    sendsBody: true,
  },

  // Cards
  {
    name: 'cards.create',
    call: (a) => a.cards.create(body),
    method: 'POST',
    path: '/api/v1/cards',
    sendsBody: true,
  },
  {
    name: 'cards.list',
    call: (a) => a.cards.list({ customerId: 'cst_1' }),
    method: 'GET',
    path: '/api/v1/cards',
    query: { customerId: 'cst_1' },
  },
  {
    name: 'cards.get',
    call: (a) => a.cards.get('card_1'),
    method: 'GET',
    path: '/api/v1/cards/card_1',
  },
  {
    name: 'cards.update',
    call: (a) => a.cards.update('card_1', body),
    method: 'POST',
    path: '/api/v1/cards/card_1',
    sendsBody: true,
  },
  {
    name: 'cards.freeze',
    call: (a) => a.cards.freeze('card_1'),
    method: 'POST',
    path: '/api/v1/cards/card_1/freeze',
  },
  {
    name: 'cards.unfreeze',
    call: (a) => a.cards.unfreeze('card_1'),
    method: 'POST',
    path: '/api/v1/cards/card_1/unfreeze',
  },
  {
    name: 'cards.cancel',
    call: (a) => a.cards.cancel('card_1'),
    method: 'DELETE',
    path: '/api/v1/cards/card_1',
  },
  {
    name: 'cards.createRevealToken',
    call: (a) => a.cards.createRevealToken('card_1'),
    method: 'POST',
    path: '/api/v1/cards/card_1/reveal-token',
  },
  {
    name: 'cards.revealDetails',
    call: (a) => a.cards.revealDetails('reveal.jwt'),
    method: 'GET',
    path: '/api/v1/cards/details',
  },
  {
    name: 'cardTransfers.create',
    call: (a) => a.cardTransfers.create(body),
    method: 'POST',
    path: '/api/v1/card-transfers',
    sendsBody: true,
  },
  {
    name: 'cardPayments.list',
    call: (a) => a.cardPayments.list({ page: 0 }),
    method: 'GET',
    path: '/api/v1/card-payments',
    query: { page: '0' },
  },
  {
    name: 'cardPayments.get',
    call: (a) => a.cardPayments.get('pay_1', { include: 'CardPaymentHistory' }),
    method: 'GET',
    path: '/api/v1/card-payments/pay_1',
    query: { include: 'CardPaymentHistory' },
  },

  // Collections
  {
    name: 'reservedAccounts.create',
    call: (a) => a.reservedAccounts.create(body),
    method: 'POST',
    path: '/pay/reserved-account',
    sendsBody: true,
  },
  {
    name: 'payWithTransfers.create',
    call: (a) => a.payWithTransfers.create(body),
    method: 'POST',
    path: '/pay/pay-with-transfer',
    sendsBody: true,
  },
  {
    name: 'payWithTransfers.get',
    call: (a) => a.payWithTransfers.get('pwt_1'),
    method: 'GET',
    path: '/pay/pay-with-transfer/pwt_1',
  },
  {
    name: 'payIns.get',
    call: (a) => a.payIns.get('py_1', { include: 'Charge,ReservedAccount' }),
    method: 'GET',
    path: '/pay/payin/py_1',
    query: { include: 'Charge,ReservedAccount' },
  },

  // Bills
  {
    name: 'bills.create',
    call: (a) => a.bills.create(body),
    method: 'POST',
    path: '/api/v1/bills',
    sendsBody: true,
  },
  {
    name: 'bills.list',
    call: (a) => a.bills.list({ category: 'airtime' }),
    method: 'GET',
    path: '/api/v1/bills',
    query: { category: 'airtime' },
  },
  {
    name: 'bills.get',
    call: (a) => a.bills.get('bll_1'),
    method: 'GET',
    path: '/api/v1/bills/bll_1',
  },
  {
    name: 'bills.billers',
    call: (a) => a.bills.billers({ category: 'data' }),
    method: 'GET',
    path: '/api/v1/bills/billers',
    query: { category: 'data' },
  },
  {
    name: 'bills.products',
    call: (a) => a.bills.products('blr_1'),
    method: 'GET',
    path: '/api/v1/bills/billers/blr_1/products',
  },
  {
    name: 'bills.validateCustomer',
    call: (a) => a.bills.validateCustomer('dstv_premium', '7030495169'),
    method: 'GET',
    path: '/api/v1/bills/customer-validation/dstv_premium/7030495169',
  },

  // Reporting
  {
    name: 'statements.create',
    call: (a) => a.statements.create(body),
    method: 'POST',
    path: '/api/v1/statements',
    sendsBody: true,
  },
  {
    name: 'statements.list',
    call: (a) => a.statements.list({ accountId: 'acc_1' }),
    method: 'GET',
    path: '/api/v1/statements',
    query: { accountId: 'acc_1' },
  },
  {
    name: 'statements.get',
    call: (a) => a.statements.get('stm_1'),
    method: 'GET',
    path: '/api/v1/statements/stm_1',
  },
  {
    name: 'statements.download',
    call: (a) => a.statements.download('stm_1'),
    method: 'GET',
    path: '/api/v1/statements/download/stm_1',
  },
  {
    name: 'reports.create',
    call: (a) => a.reports.create(body),
    method: 'POST',
    path: '/api/v1/reports',
    sendsBody: true,
  },
  { name: 'reports.list', call: (a) => a.reports.list(), method: 'GET', path: '/api/v1/reports' },
  {
    name: 'reports.get',
    call: (a) => a.reports.get('rpt_1'),
    method: 'GET',
    path: '/api/v1/reports/rpt_1',
  },
  {
    name: 'reports.download',
    call: (a) => a.reports.download('rpt_1'),
    method: 'GET',
    path: '/api/v1/reports/download/rpt_1',
  },

  // Platform
  {
    name: 'events.list',
    call: (a) => a.events.list({ type: 'nip.transfer.successful' }),
    method: 'GET',
    path: '/api/v1/events',
    query: { type: 'nip.transfer.successful' },
  },
  {
    name: 'events.get',
    call: (a) => a.events.get('evt_1'),
    method: 'GET',
    path: '/api/v1/events/evt_1',
  },
  {
    name: 'events.types',
    call: (a) => a.events.types(),
    method: 'GET',
    path: '/api/v1/events/event-types',
  },
  {
    name: 'webhooks.create',
    call: (a) => a.webhooks.create(body),
    method: 'POST',
    path: '/api/v1/webhooks',
    sendsBody: true,
  },
  {
    name: 'webhooks.list',
    call: (a) => a.webhooks.list(),
    method: 'GET',
    path: '/api/v1/webhooks',
  },
  {
    name: 'webhooks.get',
    call: (a) => a.webhooks.get('wk_1'),
    method: 'GET',
    path: '/api/v1/webhooks/wk_1',
  },
  {
    name: 'webhooks.update',
    call: (a) => a.webhooks.update('wk_1', body),
    method: 'PATCH',
    path: '/api/v1/webhooks/wk_1',
    sendsBody: true,
  },
  {
    name: 'webhooks.delete',
    call: (a) => a.webhooks.delete('wk_1'),
    method: 'DELETE',
    path: '/api/v1/webhooks/wk_1',
  },
  {
    name: 'webhooks.sendSample',
    call: (a) => a.webhooks.sendSample('wk_1', body),
    method: 'POST',
    path: '/api/v1/webhooks/verify/wk_1',
    sendsBody: true,
  },
  {
    name: 'countries.list',
    call: (a) => a.countries.list({ countryCode: 'NG' }),
    method: 'GET',
    path: '/api/v1/countries',
    query: { countryCode: 'NG' },
  },
  {
    name: 'countries.states',
    call: (a) => a.countries.states('NG'),
    method: 'GET',
    path: '/api/v1/countries/NG/states',
  },
]

describe('endpoints', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each(cases)('$name → $method $path', async ({ call, method, path, query, sendsBody }) => {
    const { client, lastRequest } = mockClient()

    await call(client.api)

    const request = lastRequest()
    const url = parseUrl(request.url)

    expect(request.method).toBe(method)
    expect(url.origin).toBe('https://api.sandbox.getanchor.co')
    expect(url.path).toBe(path)
    expect(url.query).toEqual(query ?? {})

    if (sendsBody) {
      expect(request.body).toEqual({ data: body })
    } else {
      expect(request.body).toBeUndefined()
    }
  })

  it('covers every method on every resource', () => {
    const { client } = mockClient()
    const api = client.api as unknown as Record<string, object>
    const covered = new Set(cases.map((c) => c.name.split(' ')[0]))
    const missing: string[] = []

    for (const [resource, instance] of Object.entries(api)) {
      if (!instance || typeof instance !== 'object') continue
      const proto = Object.getPrototypeOf(instance)
      for (const method of Object.getOwnPropertyNames(proto)) {
        if (method === 'constructor' || method.startsWith('_')) continue
        if (!covered.has(`${resource}.${method}`)) missing.push(`${resource}.${method}`)
      }
    }

    expect(missing).toEqual([])
  })
})
