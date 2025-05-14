// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://api.stage.codewithbeto.dev/script.js',
          defer: true,
          'data-website-id': '65c786c1-68c0-4156-a962-11a4c07ac40c'
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
  css: ["~/assets/css/main.css", "~/assets/css/noise.css"],
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
