// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s',
      script: [
        {
          src: 'https://api.stage.codewithbeto.dev/script.js',
          defer: true,
          'data-website-id': 'a5a38b06-22c6-4e51-ba27-cce4f9f8b57f'
        }
      ],
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'author',
          content: 'Céss White',
        },
        {
          name: 'theme-color',
          content: '#fafafa',
          media: '(prefers-color-scheme: light)',
        },
        {
          name: 'theme-color',
          content: '#0a0a0a',
          media: '(prefers-color-scheme: dark)',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          href: '/icon.svg',
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-07',
  modules: ['@nuxt/ui'],
  typescript: {
    typeCheck: true
  }
})
