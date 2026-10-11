import '@oapiex/sdk-kit'

declare module '@oapiex/sdk-kit' {
    interface UserConfig {
        /** Anchor API key, read from `anchor.config.js`. */
        apiKey?: string
    }
}
