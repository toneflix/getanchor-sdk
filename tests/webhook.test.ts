import { createHmac } from 'node:crypto'
import { describe, expect, it } from 'vitest'

import { AnchorWebhookError, AnchorWebhooks, findIncluded, relationshipId } from '../src/index'

const TOKEN = 'whk_test_token'

const BARE = JSON.stringify({
  id: '17290000280070-anc_et',
  type: 'nip.inbound.received',
  attributes: { createdAt: '2024-10-15T13:47:08.012431205' },
  relationships: {
    transfer: { data: { id: 'inb_1', type: 'InboundNIPTransfer' } },
    account: { data: { id: 'acc_1', type: 'DepositAccount' } },
  },
})

const WRAPPED = JSON.stringify({
  data: {
    id: '176346-anc_py_et',
    type: 'payin.received',
    attributes: { createdAt: '2025-11-18T10:47:15.334277538' },
    relationships: { payIn: { data: { id: 'py_1', type: 'PayIn' } } },
  },
  included: [
    {
      id: 'py_1',
      type: 'PayIn',
      attributes: { amount: 300000, currency: 'NGN', status: 'COMPLETED' },
    },
  ],
})

describe('AnchorWebhooks', () => {
  const webhooks = new AnchorWebhooks(TOKEN)

  it("matches the signature recipe in Anchor's docs", () => {
    // Straight from https://docs.getanchor.co/docs/verify-webhooks (JavaScript tab).
    const documented = Buffer.from(
      createHmac('sha1', '1234').update('{"hello": "world"}').digest('hex'),
    ).toString('base64')

    expect(new AnchorWebhooks('1234').sign('{"hello": "world"}')).toBe(documented)
  })

  it('verifies a bare event and parses it', () => {
    const event = webhooks.verify(BARE, { 'x-anchor-signature': webhooks.sign(BARE) })

    expect(event.id).toBe('17290000280070-anc_et')
    expect(event.type).toBe('nip.inbound.received')
    expect(relationshipId(event, 'transfer')).toBe('inb_1')
    expect(event.included).toEqual([])
  })

  it('unwraps a "support included" event and keeps the included resources', () => {
    const event = webhooks.verify(Buffer.from(WRAPPED), {
      'X-Anchor-Signature': [webhooks.sign(WRAPPED)],
    })

    expect(event.type).toBe('payin.received')
    expect(findIncluded(event, [event, 'payIn'])?.attributes).toMatchObject({ amount: 300000 })
  })

  it('accepts the signature value directly', () => {
    expect(webhooks.verify(BARE, webhooks.sign(BARE)).type).toBe('nip.inbound.received')
  })

  it('rejects a tampered body', () => {
    const signature = webhooks.sign(BARE)
    const tampered = BARE.replace('acc_1', 'acc_2')

    expect(() => webhooks.verify(tampered, { 'x-anchor-signature': signature })).toThrow(
      AnchorWebhookError,
    )
  })

  it('rejects a signature made with another token', () => {
    const forged = new AnchorWebhooks('someone-else').sign(BARE)

    expect(webhooks.isValid(BARE, forged)).toBe(false)
    expect(() => webhooks.verify(BARE, { 'x-anchor-signature': forged })).toThrow(
      'Invalid Anchor webhook signature',
    )
  })

  it('rejects a delivery with no signature header', () => {
    expect(() => webhooks.verify(BARE, {})).toThrow('Missing x-anchor-signature header')
  })

  it('rejects bodies that are not events', () => {
    expect(() => webhooks.parse('not json')).toThrow('Webhook body is not valid JSON')
    expect(() => webhooks.parse('{"data":{}}')).toThrow('Webhook body has no event type')
  })

  it('requires a token', () => {
    expect(() => new AnchorWebhooks('')).toThrow(AnchorWebhookError)
  })
})
