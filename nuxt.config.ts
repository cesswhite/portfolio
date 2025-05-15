// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://api.stage.codewithbeto.dev/script.js',
          defer: true,
          'data-website-id': 'a5a38b06-22c6-4e51-ba27-cce4f9f8b57f'
        }
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ]
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
