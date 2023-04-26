<script setup>
import FetchMoreObserver from '~/components/FetchMoreObserver.vue';

const { locale, locales, t } = useI18n();
useHead({
  title: t('menu.schedule'),
});

const { range, isFetchMoreVisible, fetchMore } = await useScheduleRaw();

const currentLocale = computed(() => locales.value?.find((loc) => loc.code === locale.value));

const { grouped, formatGameDate, formatGameDateTime } = useGroupSchedule(range, currentLocale);
</script>

<template>
  <div class="pb-8">
    <h1 class="text-2xl text-slate-900 font-bold my-8">{{ $t('title.schedule') }}</h1>

    <div class="w-full overflow-x-auto">
      <template v-for="(group, key) in grouped" :key="key">
        <div class="text-slate-900 whitespace-nowrap mb-4">
          {{ formatGameDate(key) }}
        </div>
        <table class="table-fixed w-full mb-8">
          <tr v-for="game in group" :key="game.id">
            <td class="text-slate-500 w-20">
              {{ game.name }}
            </td>
            <td class="text-slate-500 w-12">
              {{ formatGameDateTime(game.gameDate) }}
            </td>
            <td class="w-36 text-slate-500">
              {{ game.divisionName }}
            </td>
            <td class="text-right text-slate-800 font-semibold text-lg whitespace-nowrap px-2 truncate">
              {{ game.homeTeamName }}
            </td>
            <td class="w-8">
              <img :src="game.homeTeamLogo" class="w-5" />
            </td>
            <td class="text-lg font-bold text-slate-900 whitespace-nowrap w-8">
              <template v-if="game.gameStatus === 0">-:-</template>
              <template v-else> {{ game.homeTeamScore }}:{{ game.awayTeamScore }} </template>
            </td>
            <td class="w-8">
              <span v-if="game.isOvertime" class="text-xs bg-slate-200 p-1 text-slate-400 rounded font-bold">OT</span>
              <span v-if="game.isShootout" class="text-xs bg-slate-200 p-1 text-slate-400 rounded font-bold">SO</span>
            </td>
            <td class="w-8 text-center">
              <img :src="game.awayTeamLogo" class="w-5" />
            </td>
            <td class="text-slate-800 font-semibold text-lg whitespace-nowrap px-2 truncate">
              {{ game.awayTeamName }}
            </td>
            <td class="text-slate-500">
              {{ game.location }}
            </td>
          </tr>
        </table>
      </template>
    </div>

    <FetchMoreObserver @intersect="fetchMore">
      <button v-if="isFetchMoreVisible" class="button flex items-center gap-x-2 mx-auto" @click="fetchMore">
        <Icon name="ic:outline-add-circle-outline" />
        {{ $t('common.moreGames') }}
      </button>
    </FetchMoreObserver>
  </div>
</template>
