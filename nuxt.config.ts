// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  googleFonts: {
    families: {
      Inter: true,
      download: true,
      inject: true,
    },
  },
});
