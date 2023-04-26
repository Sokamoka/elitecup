<script setup>
import { createConfig } from '~/assets/js/mjsz-vbr-bundle.esm-browser.js';
const config = useRuntimeConfig();

createConfig({
  apiKey: config.public.vbrApiKey,
});

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  console.log('START')
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  console.log('END')
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
