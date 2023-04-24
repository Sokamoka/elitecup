<script setup lang="ts">
import { VBR_CHAMPIONSHIP_ID_U16, VBR_CHAMPIONSHIP_ID_U18 } from '~/constants';

const localePath = useLocalePath();

const playerStatsU18 = usePlayerStatsU18();
const goalieStatsU18 = useGoalieStatsU18();
const penaltiesStatsU18 = usePenaltiesStatsU18();

const playerStatsU16 = usePlayerStatsU16();
const goalieStatsU16 = useGoalieStatsU16();
const penaltiesStatsU16 = usePenaltiesStatsU16();

const { data: playerStatsU18Data } = useGetStat('playersStatsChampionship', VBR_CHAMPIONSHIP_ID_U18, playerStatsU18);
const { data: goalieStatsU18Data } = useGetStat('playersGoalieChampionship', VBR_CHAMPIONSHIP_ID_U18, goalieStatsU18);
const { data: penaltiesStatsU18Data } = useGetStat(
  'playersPenaltyChampionship',
  VBR_CHAMPIONSHIP_ID_U18,
  penaltiesStatsU18
);

const { data: playerStatsU16Data } = useGetStat('playersStatsChampionship', VBR_CHAMPIONSHIP_ID_U16, playerStatsU16);
const { data: goalieStatsU16Data } = useGetStat('playersGoalieChampionship', VBR_CHAMPIONSHIP_ID_U16, goalieStatsU16);
const { data: penaltiesStatsU16Data } = useGetStat(
  'playersPenaltyChampionship',
  VBR_CHAMPIONSHIP_ID_U16,
  penaltiesStatsU16
);

const pointStat = usePlayerStatsByType(playerStatsU18Data, 'point');
const goalStat = usePlayerStatsByType(playerStatsU18Data, 'g');
const assistsStat = usePlayerStatsByType(playerStatsU18Data, 'a');
const plusMinusStat = usePlayerStatsByType(playerStatsU18Data, 'plusMinus');
const percentStat = usePlayerStatsByType(goalieStatsU18Data, 'svsPercent');
const penaltyStat = usePlayerStatsByType(penaltiesStatsU18Data, 'pim');

const pointStatU16 = usePlayerStatsByType(playerStatsU16Data, 'point');
const goalStatU16 = usePlayerStatsByType(playerStatsU16Data, 'g');
const assistsStatU16 = usePlayerStatsByType(playerStatsU16Data, 'a');
const plusMinusStatU16 = usePlayerStatsByType(playerStatsU16Data, 'plusMinus');
const percentStatU16 = usePlayerStatsByType(goalieStatsU16Data, 'svsPercent');
const penaltyStatU16 = usePlayerStatsByType(penaltiesStatsU16Data, 'pim');
</script>

<template>
  <HeadlessTabGroup as="div" class="bg-slate-900 rounded-lg p-4 mb-8">
    <HeadlessTabList class="flex items-end gap-4 border-b border-slate-300 pb-2">
      <span class="text-white text-2xl font-bold mr-2">{{ $t('title.statistics') }}</span>
      <HeadlessTab as="template" v-slot="{ selected }">
        <button :class="['font-bold leading-7 outline-none', selected ? 'text-white' : 'text-slate-400']">U-18</button>
      </HeadlessTab>
      <HeadlessTab as="template" v-slot="{ selected }">
        <button :class="['font-bold leading-7 outline-none', selected ? 'text-white' : 'text-slate-400']">U-16</button>
      </HeadlessTab>
    </HeadlessTabList>
    <HeadlessTabPanels>
      <HeadlessTabPanel class="grid sm:grid-cols-3 lg:grid-cols-6 mb-2 gap-4">
        <PlayerStatisticCard
          :title="$t('statistics.points')"
          :data="pointStat"
          data-key="point"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=points'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.goals')"
          :data="goalStat"
          data-key="g"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=goals'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.assists')"
          :data="assistsStat"
          data-key="a"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=assists'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.plusMinus')"
          :data="plusMinusStat"
          data-key="plusMinus"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=plusminus'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.penalties')"
          :data="penaltyStat"
          data-key="pim"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=playerspenalties'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.goalies')"
          :data="percentStat"
          data-key="svsPercent"
          :external-link="localePath('/u18/statistics')"
          :external-params="'?report=goalies'"
        />
      </HeadlessTabPanel>

      <HeadlessTabPanel class="grid sm:grid-cols-3 lg:grid-cols-6 mb-2 gap-4">
        <PlayerStatisticCard
          :title="$t('statistics.points')"
          :data="pointStatU16"
          data-key="point"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=points'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.goals')"
          :data="goalStatU16"
          data-key="g"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=goals'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.assists')"
          :data="assistsStatU16"
          data-key="a"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=assists'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.plusMinus')"
          :data="plusMinusStatU16"
          data-key="plusMinus"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=plusminus'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.penalties')"
          :data="penaltyStatU16"
          data-key="pim"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=playerspenalties'"
        />

        <PlayerStatisticCard
          :title="$t('statistics.goalies')"
          :data="percentStatU16"
          data-key="svsPercent"
          :external-link="localePath('/u16/statistics')"
          :external-params="'?report=goalies'"
        />
      </HeadlessTabPanel>
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
