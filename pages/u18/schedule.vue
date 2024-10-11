<script setup>
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.schedule-u18') }}
  </h1>
  <div class="py-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">1. Karcfalva</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45652" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45652" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">2. Krynica</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45654" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45654" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">3. Nitra</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45660" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45660" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">4. St. Pölten</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45662" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45662" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">5. Salzburg</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45663" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45663" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">6. Székesfehérvár</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45664" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45664" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">Preparation</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="3724" phase-id="45720" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="3724" phase-id="45720" />
    </div>
  </div>
</template>
