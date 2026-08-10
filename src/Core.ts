import { ApiKeyAuthConfig, Environment, getConfig, Core as KitCore, UserConfig } from '@oapiex/sdk-kit'

import { ApiBinder } from './ApiBinder'
import { InitOptions } from './types'

export class Core extends KitCore {
    static override apiClass = ApiBinder

    declare api: ApiBinder

    /**
     * Creates an instance of Core.
     * 
     * @param clientSecret 
     */
    constructor(apiKey?: InitOptions)
    constructor(apiKey?: string, env?: Environment, config?: Partial<UserConfig>)
    constructor(
        apiKey?: string | InitOptions,
        env?: Environment,
        config?: Partial<UserConfig>
    ) {
        const conf = getConfig()
        config = {
            ...conf,
            ...config,
            urls: {
                live: 'https://api.getanchor.co',
                sandbox: 'https://api.sandbox.getanchor.co',
                ...config?.urls,
                ...config?.urls,
            },
            auth: {
                in: 'header',
                type: 'apiKey',
                name: 'x-anchor-key',
                value: (typeof apiKey === 'object' ? (apiKey.auth as any)?.value : apiKey) ?? conf.apiKey ?? (conf.auth as any)?.value ?? process.env.ANCHOR_API_KEY!,
                ...(typeof apiKey === 'object' ? (apiKey as InitOptions).auth : {}),
            } as ApiKeyAuthConfig,
        }

        super(
            undefined,
            typeof apiKey === 'string' ? apiKey : '',
            undefined,
            env,
            config
        )
    }
} 