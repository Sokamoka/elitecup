<script setup>
const { locale, locales } = useI18n();
const { range } = useScheduleMain();

const currentLocale = computed(() => locales.value?.find((loc) => loc.code === locale.value));
const { grouped, formatGameDate, formatGameDateTime } = useGroupSchedule(range, currentLocale);
</script>

<template>
  <div class="px-4">
    <div v-for="(group, key) in grouped" :key="key" class="mb-8">
      <p class="text-slate-500 mb-4">{{ formatGameDate(key) }}</p>
      <template v-for="game in group" :key="game.id">
        <ScheduleGame :game-time="formatGameDateTime(game.gameDate)" v-bind="game" />
      </template>
    </div>
  </div>
</template>
