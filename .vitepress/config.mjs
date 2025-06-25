import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SFIN",
  description: "My collection of free stuff on the Internet!",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  themeConfig: {
    logo: 'assets/fin.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guides', link: '/guides' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        items: [
          { text: '⚡ Start', link: '/start' },
          { text: '🌐 Websites', link: '/websites' },
          { text: '🖥️ Softwares', link: '/softwares' },
          { text: '🎥 Videos', link: '/videos' },
          { text: '📰 Articles', link: '/articles' },
          { text: '📚 Guides', link: '/guides' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/silentfin' }
    ],
    footer: {
      message: 'Made with ❤ by <a href="https://github.com/silentfin">silentfin</a>',
      copyright: '© 2025'
    }
  }
})
