<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.statistics') }}
  </h1>
  <mjsz-vbr-statistics :locale="locale" championship-name="Elite Cup U16" />
</template>
