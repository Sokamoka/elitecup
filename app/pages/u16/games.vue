<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.games') }}
  </h1>

  <div class="mb-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">1. Poprad</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="4037" phase-id="46117" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="4037" phase-id="46117" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">2. Miskolc, Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="4037" phase-id="46118" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="4037" phase-id="46118" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">3. Ljubljana</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="4037" phase-id="46121" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="4037" phase-id="46121" />
    </div>
  </div>
</template>
