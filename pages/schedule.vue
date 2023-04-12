<script setup>
import { format, parseISO, intlFormat } from 'date-fns';

const start = ref(0);
const limit = 1000;
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
      <template v-for="(group, key) in grouped" :key="key">
        <div class="text-gray-500 whitespace-nowrap mb-4">
          {{ toDate(key) }}
        </div>
        <table class="table-fixed w-full mb-8">
          <tr v-for="game in group" :key="game.id">
            <td class="text-gray-500 w-20">
              {{ game.name }}
            </td>
            <td class="text-gray-500 w-12">
              {{ formatGameDateTime(game.gameDate) }}
            </td>
            <td class="w-36">
              {{ game.divisionName }}
            </td>
            <td class="text-right font-bold text-lg whitespace-nowrap px-2 truncate">
              {{ game.homeTeamName }}
            </td>
            <td class="w-8">
              <img :src="game.homeTeamLogo" class="w-5" />
            </td>
            <td class="text-lg whitespace-nowrap w-8">{{ game.homeTeamScore }}:{{ game.awayTeamScore }}</td>
            <td class="w-8">
              <span v-if="game.isOvertime" class="text-xs bg-gray-200 p-1 text-gray-400 rounded font-bold">OT</span>
              <span v-if="game.isShootout" class="text-xs bg-gray-200 p-1 text-gray-400 rounded font-bold">SO</span>
            </td>
            <td class="w-8 text-center">
              <img :src="game.awayTeamLogo" class="w-5" />
            </td>
            <td class="font-bold text-lg whitespace-nowrap px-2 truncate">
              {{ game.awayTeamName }}
            </td>
            <td class="text-gray-500">
              {{ game.location }}
            </td>
          </tr>
        </table>
      </template>
    </div>
  </div>
</template>
