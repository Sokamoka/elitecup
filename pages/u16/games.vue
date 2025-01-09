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

    <div>
      <h2 class="font-bold text-xl leading-10">5. Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45686" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45686" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">6. Brunico</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45687" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45687" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Preparation</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45719" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45719" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">7. Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45821" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45821" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">8. Székesfehérvár</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45827" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45827" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">9. Budapest</h2>

      <mjsz-vbr-schedule :locale="locale" championship-id="3782" phase-id="45828" />
      <mjsz-vbr-standings :locale="locale" championship-id="3782" phase-id="45828" />
    </div>
  </div>
</template>
