<script setup>
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.schedule-u18') }}
  </h1>
  <div class="py-8 space-y-8">
    <div>
      <h2 class="font-bold text-xl leading-10">1. Székesfehérvár</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="4056" phase-id="46116" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="4056" phase-id="46116" />
    </div>

    <div>
      <h2 class="font-bold text-xl leading-10">2. Poprad</h2>
      <mjsz-vbr-schedule :locale="locale" championship-id="4056" phase-id="46120" hide-columns="broadcast,more" />
      <mjsz-vbr-standings :locale="locale" championship-id="4056" phase-id="46120" />
    </div>
  </div>
</template>
