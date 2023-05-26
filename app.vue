<script setup>
import { createConfig } from '~/assets/js/mjsz-vbr-bundle.esm.js';
const config = useRuntimeConfig();

createConfig({
  apiKey: config.public.vbrApiKey,
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
