// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: "netlify",
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts','@nuxtjs/i18n'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  googleFonts: {
    families: {
      'Roboto Condensed': true,
      download: true,
      inject: true,
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'hu',
        iso: 'hu-HU',
        file: 'hu-HU.json'
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en'
  }
});
