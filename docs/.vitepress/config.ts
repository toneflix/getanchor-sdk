import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'Anchor SDK',
  description: 'TypeScript and Node.js SDK for working with the Anchor API.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Examples', link: '/guide/examples' },
      { text: 'Reference', link: '/reference/types-and-utilities' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Usage Patterns', link: '/guide/usage-patterns' },
          { text: 'Webhooks', link: '/guide/webhooks' },
          { text: 'Examples', link: '/guide/examples' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Overview', link: '/api/overview' },
          { text: 'Customers and Onboarding', link: '/api/customers-and-onboarding' },
          { text: 'Accounts and Balances', link: '/api/accounts-and-balances' },
          { text: 'Transfers and Payouts', link: '/api/transfers-and-payouts' },
          { text: 'Cards', link: '/api/cards' },
          { text: 'Collections', link: '/api/collections' },
          { text: 'Bills', link: '/api/bills' },
          { text: 'Reporting and Events', link: '/api/reporting-and-events' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Types and Utilities', link: '/reference/types-and-utilities' },
        ],
      },
    ],
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/toneflix/getanchor-sdk' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/getanchor-sdk' },
      { icon: 'discord', link: 'https://discord.gg/wQP2CkHj' },
    ],
  },
})
