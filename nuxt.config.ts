// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
