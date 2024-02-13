<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.standings-u16') }}
  </h1>
  <div class="py-8">
    <mjsz-vbr-standings :locale="locale" championship-id="3444" />
  </div>
</template>
