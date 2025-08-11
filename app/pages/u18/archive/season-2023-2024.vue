<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">{{ $t('menu.season') }} 2024-2025</h1>

    <SeasonProvider class="space-y-8" :championship-id="3445" #default="{ championshipId, data }">
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
  </div>
</template>
