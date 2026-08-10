import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Anchor SDK',
  description: 'TypeScript and Node.js SDK for the Anchor API.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/overview' },
      { text: 'Reference', link: '/reference/types-and-utilities' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
      },
      {
        text: 'API',
        items: [{ text: 'Overview', link: '/api/overview' }],
      },
      {
        text: 'Reference',
        items: [{ text: 'Types and Utilities', link: '/reference/types-and-utilities' }],
      },
    ],
    search: { provider: 'local' },
  },
})
