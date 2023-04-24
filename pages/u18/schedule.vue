<script setup>
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.schedule-u18') }}
  </h1>
  <div class="py-8">
    <FormTab>
      <FormTabPanel title="Group A">
        <mjsz-vbr-schedule :locale="locale" championship-id="3312" division="Preliminary Round - A" />
      </FormTabPanel>
      <FormTabPanel title="Group B">
        <mjsz-vbr-schedule :locale="locale" championship-id="3312" division="Preliminary Round - B" />
      </FormTabPanel>
    </FormTab>
  </div>
</template>
