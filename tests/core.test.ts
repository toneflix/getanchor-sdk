import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { createClient, Core, transport } from '../src/index'

const savedEnv = { ...process.env }

describe('Core', () => {
  beforeEach(() => {
    delete process.env.ANCHOR_API_KEY
    delete process.env.ANCHOR_ENVIRONMENT
    delete process.env.ENVIRONMENT
    vi.spyOn(transport, 'send').mockResolvedValue({ status: 200, data: { data: [] } })
  })

  afterEach(() => {
    process.env = { ...savedEnv }
    vi.restoreAllMocks()
  })

  const lastUrl = () => vi.mocked(transport.send).mock.calls.at(-1)?.[0].url ?? ''

  it('targets the sandbox unless live is asked for', async () => {
    const client = new Core({ apiKey: 'k', debugLevel: 0 })
    await client.api.banks.list()

    expect(client.getEnvironment()).toBe('sandbox')
    expect(lastUrl()).toBe('https://api.sandbox.getanchor.co/api/v1/banks')
  })

  it('targets production when the environment is live', async () => {
    const client = new Core('k', 'live', { debugLevel: 0 })
    await client.api.banks.list()

    expect(lastUrl()).toBe('https://api.getanchor.co/api/v1/banks')
  })

  it('reads the API key from ANCHOR_API_KEY', async () => {
    process.env.ANCHOR_API_KEY = 'from-env'
    const client = createClient({ environment: 'sandbox', debugLevel: 0 })
    await client.api.banks.list()

    expect(vi.mocked(transport.send).mock.calls.at(-1)?.[0].headers['x-anchor-key']).toBe(
      'from-env',
    )
  })

  it('honours a custom base URL', async () => {
    const client = new Core({
      apiKey: 'k',
      environment: 'sandbox',
      debugLevel: 0,
      urls: { sandbox: 'https://anchor.proxy.test' },
    })
    await client.api.banks.list()

    expect(lastUrl()).toBe('https://anchor.proxy.test/api/v1/banks')
  })

  it('binds every resource namespace', () => {
    const client = new Core({ apiKey: 'k', debugLevel: 0 })

    expect(
      Object.keys(client.api).filter((key) => typeof (client.api as never)[key] === 'object'),
    ).toEqual(
      expect.arrayContaining([
        'customers',
        'businesses',
        'nextOfKin',
        'documents',
        'accounts',
        'accountNumbers',
        'subAccounts',
        'inboundTransfers',
        'payments',
        'virtualNubans',
        'counterparties',
        'banks',
        'transfers',
        'transactions',
        'fees',
        'rewards',
        'cards',
        'cardTransfers',
        'cardPayments',
        'reservedAccounts',
        'payWithTransfers',
        'payIns',
        'bills',
        'statements',
        'reports',
        'events',
        'webhooks',
        'countries',
      ]),
    )
  })

  it("keeps two clients' keys, environments and base URLs apart", async () => {
    const send = vi.mocked(transport.send)
    const sandbox = new Core({ apiKey: 'sandbox-key', environment: 'sandbox', debugLevel: 0 })
    // Created second: with a shared kit config this used to take over the first client.
    const live = new Core({
      apiKey: 'live-key',
      environment: 'live',
      debugLevel: 0,
      urls: { live: 'https://anchor.proxy.test' },
    })

    await sandbox.api.banks.list()
    const [sandboxRequest] = send.mock.calls.at(-1)!
    await live.api.banks.list()
    const [liveRequest] = send.mock.calls.at(-1)!

    expect(sandboxRequest.url).toBe('https://api.sandbox.getanchor.co/api/v1/banks')
    expect(sandboxRequest.headers['x-anchor-key']).toBe('sandbox-key')
    expect(sandboxRequest.config?.environment).toBe('sandbox')

    expect(liveRequest.url).toBe('https://anchor.proxy.test/api/v1/banks')
    expect(liveRequest.headers['x-anchor-key']).toBe('live-key')
    expect(liveRequest.config?.environment).toBe('live')
  })
})
