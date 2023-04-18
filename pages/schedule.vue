<script setup>
const { locale, locales, t } = useI18n();
const { schedule } = useScheduleRaw();

useHead({
  title: t('menu.schedule'),
});

const currentLocale = computed(() => locales.value?.find((loc) => loc.code === locale.value));

const { grouped, formatGameDate, formatGameDateTime } = useGroupSchedule(schedule, currentLocale);
</script>

<template>
  <div class="pb-8">
    <h1 class="text-2xl text-gray-900 font-bold my-8">{{ $t('title.schedule') }}</h1>

    <div class="w-full overflow-x-auto">
      <template v-for="(group, key) in grouped" :key="key">
        <div class="text-gray-900 whitespace-nowrap mb-4">
          {{ formatGameDate(key) }}
        </div>
        <table class="table-fixed w-full mb-8">
          <tr v-for="game in group" :key="game.id">
            <td class="text-gray-500 w-20">
              {{ game.name }}
            </td>
            <td class="text-gray-500 w-12">
              {{ formatGameDateTime(game.gameDate) }}
            </td>
            <td class="w-36 text-gray-500">
              {{ game.divisionName }}
            </td>
            <td class="text-right text-gray-800 font-semibold text-lg whitespace-nowrap px-2 truncate">
              {{ game.homeTeamName }}
            </td>
            <td class="w-8">
              <img :src="game.homeTeamLogo" class="w-5" />
            </td>
            <td class="text-lg font-bold text-gray-900 whitespace-nowrap w-8">
              <template v-if="game.gameStatus === 0">-:-</template>
              <template v-else> {{ game.homeTeamScore }}:{{ game.awayTeamScore }} </template>
            </td>
            <td class="w-8">
              <span v-if="game.isOvertime" class="text-xs bg-gray-200 p-1 text-gray-400 rounded font-bold">OT</span>
              <span v-if="game.isShootout" class="text-xs bg-gray-200 p-1 text-gray-400 rounded font-bold">SO</span>
            </td>
            <td class="w-8 text-center">
              <img :src="game.awayTeamLogo" class="w-5" />
            </td>
            <td class="text-gray-800 font-semibold text-lg whitespace-nowrap px-2 truncate">
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
