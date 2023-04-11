<script setup>
const start = ref(0);
const limit = 10;
const { data } = await useFetch(`/api/schedule?start=${start.value}&limit=${limit}`);
</script>

<template>
  <div class="pb-8">
    <h1 class="text-2xl text-gray-900 font-bold my-8">Schedule</h1>
    <div class="overflow-x-scroll">
      <table class="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Result</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in data" :key="game.id">
            <td>{{ game.gameName }}</td>
            <td>{{ game.gameDate }}</td>
            <td class="text-right font-semibold">{{ game.homeTeamName }}</td>
            <td class="text-center">{{ game.homeTeamScore }}:{{ game.awayTeamScore }}</td>
            <td class="font-semibold">{{ game.awayTeamName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
