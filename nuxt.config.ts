import tailwindTypography from '@tailwindcss/typography';
// import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: 'netlify',
    routeRules: {
      '/api/videos': { headers: { 'cache-control': 'public, max-age=300' } },
      '/api/videos-main': { headers: { 'cache-control': 'public, max-age=60' } },
      '/api/instagram/media': { headers: { 'cache-control': 'public, max-age=3600' } },
      '/api/news-list': { headers: { 'cache-control': 'public, max-age=60' } },
      '/api/news': { headers: { 'cache-control': 'public, max-age=300' } },
      '/api/schedule': { headers: { 'cache-control': 'public, max-age=300' } },
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('mjsz-vbr-'),
    },
  },

  app: {
    head: {
      titleTemplate: 'EliteCup.eu - %s',
    },
  },

  runtimeConfig: {
    instagramClientId: process.env.NUXT_INSTAGRAM_CLIENT_ID,
    instagramClientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    instagramClientRedirectUri: process.env.NUXT_INSTAGRAM_REDIRECT_URI,
    public: {
      facebookAppId: process.env.NUXT_FACEBOOK_APP_ID,
      vbrApiKey: process.env.NUXT_VBR_API_KEY,
    },
  },

  plugins: [{ src: '~/plugins/facebook-page-plugin.ts', mode: 'client' }],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxt/icon',
    'nuxt-headlessui',
    '@zadigetvoltaire/nuxt-gtm',
    '@mjsz-vbr-elements/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },

  googleFonts: {
    families: {
      'Roboto Condensed': [400, 500, 600, 700],
      download: true,
      inject: true,
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      // {
      //   code: 'hu',
      //   iso: 'hu-HU',
      //   file: 'hu-HU.json',
      // },
    ],
    defaultLocale: 'en',
  },

  headlessui: {
    prefix: 'Headless',
  },

  gtm: {
    id: 'GTM-KK3DG5VV',
  },

  mjszVbrElements: {
    apiKey: process.env.NUXT_VBR_API_KEY,
  },

  supabase: {
    redirect: false,
  },
});
