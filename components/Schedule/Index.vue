<script setup>
const start = ref(0);
const limit = 12;
const { data } = await useFetch(`/api/schedule?start=${start.value}&limit=${limit}`);

const { grouped, formatGameDate, formatGameDateTime } = useGroupSchedule(data);
</script>

<template>
  <div class="px-4">
    <div v-for="(group, key) in grouped" :key="key" class="mb-8">
      <p class="text-gray-400 mb-4">{{ formatGameDate(key) }}</p>
      <template v-for="game in group" :key="game.id">
        <ScheduleGame :game-time="formatGameDateTime(game.gameDate)" v-bind="game" />
      </template>
    </div>
  </div>
</template>
