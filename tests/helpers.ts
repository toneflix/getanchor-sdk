import { vi } from 'vitest'

import { Core, transport } from '../src/index'
import type { TransportRequest, TransportResponse } from '../src/index'

export const API_KEY = 'anc_test_key'

/**
 * A sandbox client whose network calls are captured instead of sent. Each call
 * answers with `response` (a 200 with an empty document unless overridden).
 *
 * @param response
 */
export const mockClient = (response: TransportResponse = { status: 200, data: { data: {} } }) => {
    const send = vi.spyOn(transport, 'send').mockResolvedValue(response)
    const client = new Core({ apiKey: API_KEY, environment: 'sandbox', debugLevel: 0 })

    const lastRequest = (): TransportRequest => {
        const call = send.mock.calls.at(-1)
        if (!call) throw new Error('No request was sent')

        return call[0]
    }

    return { client, send, lastRequest }
}

/** Split a captured URL into its path and decoded query parameters. */
export const parseUrl = (url: string) => {
    const parsed = new URL(url)

    return {
        origin: parsed.origin,
        path: parsed.pathname,
        query: Object.fromEntries(parsed.searchParams.entries()),
    }
}
