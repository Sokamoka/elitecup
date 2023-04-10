// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  nitro: {
    preset: "netlify",
  },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts'],

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
});
