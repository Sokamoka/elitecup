<script setup>
import { createConfig } from '~/assets/js/mjsz-vbr-elements-core.esm.js';
import MjszVbrElements from '~/assets/js/mjsz-vbr-elements.esm.js';
import MjszVbrElementsExtended from '~/assets/js/mjsz-vbr-elements-extended.esm.js';

const config = useRuntimeConfig();

createConfig({
  modules: [MjszVbrElements, MjszVbrElementsExtended],
  apiKey: config.public.vbrApiKey,
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
