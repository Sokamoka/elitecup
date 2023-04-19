// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: 'netlify',
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

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'nuxt-headlessui',
    'nuxt-icon',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
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
      {
        code: 'hu',
        iso: 'hu-HU',
        file: 'hu-HU.json',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
  },

  headlessui: {
    prefix: 'Headless',
  },

  content: {
    navigation: {
      fields: ['publishedAt', 'lead', 'mainImage'],
    },
  },
});
