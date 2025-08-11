<script setup lang="ts">
import SeasonProvider from '~/components/SeasonProvider.vue';

const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold my-8">
    {{ $t('menu.games') }}
  </h1>

  <SeasonProvider class="space-y-8" :championship-id="4037" #default="{ championshipId, data }">
    <div v-for="(tournament, index) in data">
      <h2 class="font-bold text-xl leading-10">{{ index + 1 }}. Tournament</h2>
      <mjsz-vbr-schedule
        :locale="locale"
        :championship-id="championshipId"
        :phase-id="tournament.phaseId"
        hide-columns="broadcast,more"
      />
      <mjsz-vbr-standings :locale="locale" :championship-id="championshipId" :phase-id="tournament.phaseId" />
    </div>
  </SeasonProvider>
</template>
