<script setup>
const teams = useTeams();
</script>

<template>
  <p class="text-2xl font-bold text-slate-900 mb-4 px-4">
    {{ $t('title.teams') }}
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 grid-flow-row gap-4 mb-8">
    <MainBox v-for="team in teams" :key="team.homeTeamId">
      <img :src="team.logo" :title="team.name" :alt="team.name" class="w-24 h-auto mx-auto my-4" />
    </MainBox>
  </div>
</template>
