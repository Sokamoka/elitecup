<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.games') }}
  </h1>
  <div class="mb-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">1. Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45651" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45651" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">2. Miskolc</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45653" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45653" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">3. Vienna</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45655" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45655" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">4. Ljubljana</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45665" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45665" />
    </div>
  </div>
</template>
