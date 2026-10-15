import { describe, expect, it } from 'vitest'

import * as sdk from '../src/index'

describe('package exports', () => {
    it('exposes the client, errors, webhook verifier and helpers', () => {
        expect(sdk.Core).toBeTypeOf('function')
        expect(sdk.createClient).toBeTypeOf('function')
        expect(sdk.ApiBinder).toBeTypeOf('function')
        expect(sdk.BaseApi).toBeTypeOf('function')
        expect(sdk.AnchorApiError).toBeTypeOf('function')
        expect(sdk.HttpException).toBeTypeOf('function')
        expect(sdk.AnchorWebhooks).toBeTypeOf('function')
        expect(sdk.AnchorWebhookError).toBeTypeOf('function')
        expect(sdk.findIncluded).toBeTypeOf('function')
        expect(sdk.resolveFile).toBeTypeOf('function')
        expect(sdk.AnchorFileError).toBeTypeOf('function')
        expect(sdk.relationshipId).toBeTypeOf('function')
        expect(sdk.defineConfig).toBeTypeOf('function')
        expect(sdk.ANCHOR_URLS).toEqual({
            live: 'https://api.getanchor.co',
            sandbox: 'https://api.sandbox.getanchor.co',
        })
        expect(sdk.ANCHOR_SIGNATURE_HEADER).toBe('x-anchor-signature')
    })

    it('exposes each resource class', () => {
        for (const name of [
            'CustomersApi', 'BusinessesApi', 'NextOfKinApi', 'DocumentsApi', 'AccountsApi',
            'AccountNumbersApi', 'VirtualNubansApi', 'SubAccountsApi', 'InboundTransfersApi', 'CounterpartiesApi',
            'BanksApi', 'TransfersApi', 'TransactionsApi', 'FeesApi', 'RewardsApi', 'CardsApi',
            'CardTransfersApi', 'CardPaymentsApi', 'ReservedAccountsApi', 'PayWithTransfersApi',
            'PayInsApi', 'BillsApi', 'StatementsApi', 'ReportsApi', 'EventsApi', 'WebhooksApi',
            'CountriesApi',
        ]) {
            expect(sdk[name as keyof typeof sdk], name).toBeTypeOf('function')
        }
    })
})
