import { AnchorApiError, Core } from '../src/index'
import { describe, expect, it } from 'vitest'

/**
 * Read-only smoke test against the real Anchor sandbox. Opt in with
 * `ANCHOR_LIVE_TESTS=1` and a sandbox `ANCHOR_API_KEY`; it never runs live.
 */
const enabled = process.env.ANCHOR_LIVE_TESTS === '1' && !!process.env.ANCHOR_API_KEY

describe.skipIf(!enabled)(
  'Anchor sandbox',
  () => {
    const client = () =>
      new Core({
        apiKey: process.env.ANCHOR_API_KEY,
        environment: 'sandbox',
        debugLevel: 0,
      })

    it('lists banks', async () => {
      const banks = await client().api.banks.list()

      expect(Array.isArray(banks.data)).toBe(true)
      expect(banks.data[0]).toMatchObject({ id: expect.any(String), type: 'Bank' })
    })

    it('lists customers with pagination meta', async () => {
      const customers = await client().api.customers.list({ size: 2 })

      expect(Array.isArray(customers.data)).toBe(true)
      expect(customers.meta?.pagination).toMatchObject({ size: 2 })
    })

    it('surfaces Anchor errors as AnchorApiError', async () => {
      const error = await client()
        .api.customers.get('0000000000000-anc_ind_cst')
        .catch((e) => e)

      expect(error).toBeInstanceOf(AnchorApiError)
      expect(error.statusCode).toBeGreaterThanOrEqual(400)
      expect(error.errors.length).toBeGreaterThan(0)
    })
  },
  30000,
)
