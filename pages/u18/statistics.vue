<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-gray-900 font-bold my-8">
    {{ $t('menu.statistics') }}
  </h1>
  <ClientOnly>
    <mjsz-vbr-statistics :locale="locale" championship-name="Elite Cup U18" />
  </ClientOnly>
</template>
