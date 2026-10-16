import { getBaseConfig, Core as KitCore } from '@oapiex/sdk-kit'
import type {
  ApiKeyAuthConfig,
  Environment,
  InitOptions as KitInitOptions,
  UserConfig,
} from '@oapiex/sdk-kit'

import { ApiBinder } from './ApiBinder'

export const ANCHOR_URLS = {
  live: 'https://api.getanchor.co',
  sandbox: 'https://api.sandbox.getanchor.co',
} as const

export interface InitOptions extends KitInitOptions {
  /** Your Anchor API key, sent as `x-anchor-key`. Falls back to `ANCHOR_API_KEY`. */
  apiKey?: string
}

const normalizeEnvironment = (value?: string): Environment | undefined =>
  value === 'live' || value === 'sandbox' ? value : undefined

/**
 * Build an `x-anchor-key` auth strategy.
 *
 * @param apiKey
 */
export const anchorApiKeyAuth = (apiKey: string): ApiKeyAuthConfig => ({
  type: 'apiKey',
  in: 'header',
  name: 'x-anchor-key',
  value: apiKey,
})

/**
 * The URLs a config file set, without the kit's empty placeholders.
 *
 * @param urls
 */
const configuredUrls = (urls?: UserConfig['urls']) =>
  Object.fromEntries(Object.entries(urls ?? {}).filter(([, url]) => Boolean(url)))

export class Core extends KitCore {
  static override apiClass = ApiBinder

  /** Read `anchor.config.*`, whatever other SDKs in the process read. */
  static override configFile = 'anchor.config'

  declare api: ApiBinder

  /**
   * Create an Anchor client.
   *
   * The environment defaults to `sandbox` so a missing setting can never move
   * real money; pass `live` (or set `ANCHOR_ENVIRONMENT=live`) for production.
   *
   * @param apiKey  The API key, or an options object.
   * @param env     `sandbox` or `live`.
   * @param config  Extra kit configuration (timeout, headers, urls, debugLevel...).
   */
  constructor(options?: InitOptions)
  constructor(apiKey?: string, env?: Environment, config?: Partial<UserConfig>)
  constructor(apiKey?: string | InitOptions, env?: Environment, config?: Partial<UserConfig>) {
    // This SDK's config file plus explicit kit defaults; never what another
    // client in the process was configured with.
    const base = getBaseConfig(Core.configFile)
    const options: Partial<InitOptions> =
      typeof apiKey === 'object' && apiKey !== null
        ? apiKey
        : { ...config, apiKey, environment: env ?? config?.environment }

    const { apiKey: explicitKey, ...rest } = options
    const key = explicitKey ?? base.apiKey ?? process.env.ANCHOR_API_KEY
    const auth = rest.auth ?? (key ? anchorApiKeyAuth(key) : base.auth)

    if (!auth) {
      throw new Error('An Anchor API key is required: pass `apiKey` or set ANCHOR_API_KEY.')
    }

    super({
      ...rest,
      environment:
        rest.environment ??
        normalizeEnvironment(process.env.ANCHOR_ENVIRONMENT) ??
        normalizeEnvironment(process.env.ENVIRONMENT) ??
        base.environment ??
        'sandbox',
      urls: { ...ANCHOR_URLS, ...configuredUrls(base.urls), ...rest.urls },
      auth,
    })
  }
}
