import { afterEach, describe, expect, it, vi } from 'vitest'

import { AnchorApiError, HttpException, serializeQuery } from '../src/index'
import type { AnchorCollection, Customer } from '../src/index'
import { API_KEY, mockClient, parseUrl } from './helpers'

const header = (headers: Record<string, string>, name: string) =>
    Object.entries(headers).find(([key]) => key.toLowerCase() === name.toLowerCase())?.[1]

describe('request pipeline', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('authenticates with the x-anchor-key header', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.banks.list()

        expect(header(lastRequest().headers, 'x-anchor-key')).toBe(API_KEY)
    })

    it('returns the whole JSON:API document, including included and pagination', async () => {
        const document: AnchorCollection<Customer> = {
            data: [{ id: 'cst_1', type: 'IndividualCustomer', attributes: { email: 'ada@example.com' } }],
            included: [{ id: 'acc_1', type: 'DepositAccount', attributes: {} }],
            meta: { pagination: { number: 0, size: 20, total: 1, totalPages: 1 } },
        }
        const { client } = mockClient({ status: 200, data: document })

        const result = await client.api.customers.list()

        expect(result).toEqual(document)
    })

    it('sends the idempotency key Anchor documents for transfers', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.transfers.create(
            {
                type: 'NIPTransfer',
                attributes: { amount: 150000, currency: 'NGN', reason: 'rent', reference: 'rent-2026-10' },
                relationships: {
                    account: { data: { id: 'acc_1', type: 'DepositAccount' } },
                    counterParty: { data: { id: 'cp_1', type: 'CounterParty' } },
                },
            },
            { idempotencyKey: 'idem-123' },
        )

        expect(header(lastRequest().headers, 'x-anchor-idempotent-key')).toBe('idem-123')
    })

    it('wraps the resource in Anchor\'s { data } envelope, including bulk arrays', async () => {
        const { client, lastRequest } = mockClient()
        const counterparty = {
            type: 'CounterParty' as const,
            attributes: { accountName: 'Ada Obi', accountNumber: '0123456789', bankCode: '000014' },
        }

        await client.api.counterparties.create(counterparty)
        expect(lastRequest().body).toEqual({ data: counterparty })

        await client.api.counterparties.createBulk([counterparty, counterparty])
        expect(lastRequest().body).toEqual({ data: [counterparty, counterparty] })
    })

    it('sends no body when a write takes none', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.cards.freeze('card_1')

        expect(lastRequest().body).toBeUndefined()
    })

    it('reveals card details with the reveal token instead of the API key', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.cards.revealDetails('reveal.jwt')

        const { headers } = lastRequest()
        expect(header(headers, 'Authorization')).toBe('Bearer reveal.jwt')
        expect(header(headers, 'x-anchor-key')).toBeUndefined()
    })

    it('mints and spends a reveal token in one call when given a cardId', async () => {
        const { client, send } = mockClient()
        const details = { data: { id: 'card_1', type: 'CardDetails', attributes: { pan: '5399830000000234', cvv: '123' } } }
        send
            .mockResolvedValueOnce({ status: 201, data: { data: { token: 'minted.jwt', expiresAt: '2026-10-12T10:05:00Z', expiresInSeconds: 300 } } })
            .mockResolvedValueOnce({ status: 200, data: details })

        const result = await client.api.cards.revealDetails({ cardId: 'card_1' })

        expect(result).toEqual(details)
        expect(send).toHaveBeenCalledTimes(2)

        const [mint, reveal] = send.mock.calls.map(([request]) => request)
        expect(mint.method).toBe('POST')
        expect(parseUrl(mint.url).path).toBe('/api/v1/cards/card_1/reveal-token')
        expect(header(mint.headers, 'x-anchor-key')).toBe(API_KEY)

        expect(reveal.method).toBe('GET')
        expect(parseUrl(reveal.url).path).toBe('/api/v1/cards/details')
        expect(header(reveal.headers, 'Authorization')).toBe('Bearer minted.jwt')
        expect(header(reveal.headers, 'x-anchor-key')).toBeUndefined()
    })

    it('does not reveal anything when minting the token fails', async () => {
        const { client, send } = mockClient()
        send.mockResolvedValueOnce({
            status: 403,
            data: { errors: [{ title: 'Forbidden', status: '403', detail: 'Card permission required' }] },
        })

        await expect(client.api.cards.revealDetails({ cardId: 'card_1' })).rejects.toThrow('Forbidden: Card permission required')
        expect(send).toHaveBeenCalledTimes(1)
    })

    it('refuses to reveal when Anchor returns no token', async () => {
        const { client, send } = mockClient({ status: 201, data: { data: {} } })

        await expect(client.api.cards.revealDetails({ cardId: 'card_1' })).rejects.toThrow('did not return a card reveal token')
        expect(send).toHaveBeenCalledTimes(1)
    })

    it('uploads document files as multipart form data', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.documents.upload('cst_1', 'doc_1', {
            file: new Uint8Array([37, 80, 68, 70]),
            fileName: 'cac.pdf',
            contentType: 'application/pdf',
        })

        const { body, headers, url } = lastRequest()
        expect(body).toBeInstanceOf(FormData)
        const file = (body as FormData).get('fileData') as File
        expect(file.name).toBe('cac.pdf')
        expect(file.type).toBe('application/pdf')
        expect(header(headers, 'Content-Type')).toBe('multipart/form-data')
        expect(parseUrl(url).query).toEqual({})
    })

    it('throws AnchorApiError carrying Anchor\'s errors array', async () => {
        const { client } = mockClient({
            status: 404,
            data: { errors: [{ title: 'Not found', status: '404', detail: 'Account was not found' }] },
        })

        const error = await client.api.accounts.get('acc_missing').catch(e => e)

        expect(error).toBeInstanceOf(AnchorApiError)
        expect(error).toBeInstanceOf(HttpException)
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe('Not found: Account was not found')
        expect(error.errors).toEqual([{ title: 'Not found', status: '404', detail: 'Account was not found' }])
    })

    it('still throws a useful error when the body is not JSON:API', async () => {
        const { client } = mockClient({ status: 502, data: 'Bad Gateway' })

        const error = await client.api.banks.list().catch(e => e)

        expect(error).toBeInstanceOf(AnchorApiError)
        expect(error.statusCode).toBe(502)
        expect(error.message).toBe('Bad Gateway')
    })

    it('does not swallow transport failures', async () => {
        const { client, send } = mockClient()
        send.mockRejectedValueOnce(new Error('socket hang up'))

        await expect(client.api.banks.list()).rejects.toThrow('socket hang up')
    })
})

describe('serializeQuery', () => {
    it('drops empty values, joins arrays and flattens objects', () => {
        expect(serializeQuery({
            accountId: 'acc_1',
            page: 0,
            onlySubAccount: false,
            include: ['Customer', 'AccountNumber'],
            sort: [],
            to: undefined,
            from: null,
            query: '',
            metadata: { tier: 'gold' },
        })).toEqual({
            accountId: 'acc_1',
            page: 0,
            onlySubAccount: false,
            include: 'Customer,AccountNumber',
            'metadata[tier]': 'gold',
        })
    })
})
