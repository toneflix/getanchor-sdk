import { defineConfig } from '@oapiex/sdk-kit'
/**
 * See https://toneflix.github.io/oapiex/reference/configuration for docs
 */
export default defineConfig({
  apiKey: process.env.ANCHOR_API_KEY,
  environment: 'sandbox',
  debugLevel: 3,
})