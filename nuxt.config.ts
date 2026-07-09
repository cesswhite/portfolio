import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from './app/config/site'
import { themeScript } from './app/composables/useTheme'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: siteConfig.url,
    },
  },
  app: {
    head: {
      titleTemplate: '%s',
      title: siteConfig.title,
      script: [
        {
          key: 'theme-init',
          innerHTML: themeScript,
          tagPosition: 'head',
        },
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
          name: 'description',
          content: siteConfig.description,
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
  css: ['~/assets/css/main.css'],
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-07',
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  typescript: {
    typeCheck: process.env.NODE_ENV === 'development',
  },
})
