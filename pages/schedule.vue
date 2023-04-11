<script setup>
import { format, parseISO, intlFormat } from 'date-fns';

const start = ref(0);
const limit = 10;
const { data } = await useFetch(`/api/schedule?start=${start.value}&limit=${limit}`);

const grouped = computed(() => groupByGameDate(data.value));
const toDate = (date) =>
  intlFormat(
    new Date(date),
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    {
      locale: 'en-US',
    }
  );
const formatGameDateTime = (date) => format(parseISO(date), 'HH:mm');
</script>

<template>
  <div class="pb-8">
    <h1 class="text-2xl text-gray-900 font-bold my-8">Schedule</h1>

    <div class="w-full overflow-x-auto">
      <div v-for="(group, key) in grouped" :key="key" class="mb-8">
        <p class="text-gray-500 mb-4">{{ toDate(key) }}</p>
        <div
          v-for="game in group"
          :key="game.id"
          class="grid grid-cols-[fit-content(100px)_fit-content(200px)_fit-content(200px)_1fr_fit-content(40px)_fit-content(40px)_fit-content(40px)_1fr_0.5fr] gap-2"
        >
          <div class="text-gray-500">
            {{ game.gameName }}
          </div>
          <div class="text-gray-500">
            {{ formatGameDateTime(game.gameDate) }}
          </div>
          <div class="">
            {{ game.divisionName }}
          </div>
          <div class="text-right font-bold text-lg whitespace-nowrap">
            {{ game.homeTeamName }}
          </div>
          <img :src="game.homeTeamLogo" class="w-7" />
          <div class="text-lg">{{ game.homeTeamScore }}:{{ game.awayTeamScore }}</div>
          <img :src="game.awayTeamLogo" class="w-7" />
          <div class="font-bold text-lg whitespace-nowrap">
            {{ game.awayTeamName }}
          </div>
          <div class="text-gray-500">
            {{ game.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
