<script setup>
import { createConfig } from '~/assets/js/mjsz-vbr-elements-core.esm.js';
import MjszVbrElements from '~/assets/js/mjsz-vbr-elements.esm.js';
import MjszVbrElementsExtended from '~/assets/js/mjsz-vbr-elements-extended.esm.js';

createConfig({
  modules: [MjszVbrElements, MjszVbrElementsExtended],
  apiKey: 'dd8adf5fdb738b3741fa579b5ede5ce69b681f62',
});
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
