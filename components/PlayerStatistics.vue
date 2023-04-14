<script setup lang="ts">
const localePath = useLocalePath();

const playerStatsU18 = usePlayerStatsU18();
const goalieStatsU18 = useGoalieStatsU18();
const penaltiesStatsU18 = usePenaltiesStatsU18();

const playerStatsU16 = usePlayerStatsU16();
const goalieStatsU16 = useGoalieStatsU16();
const penaltiesStatsU16 = usePenaltiesStatsU16();

const { data: playerStatsU18Data } = useGetStat('playersStatsChampionship', 3312, playerStatsU18);
const { data: goalieStatsU18Data } = useGetStat('playersGoalieChampionship', 3312, goalieStatsU18);
const { data: penaltiesStatsU18Data } = useGetStat('playersPenaltyChampionship', 3312, penaltiesStatsU18);

const { data: playerStatsU16Data } = useGetStat('playersStatsChampionship', 3311, playerStatsU16);
const { data: goalieStatsU16Data } = useGetStat('playersGoalieChampionship', 3311, goalieStatsU16);
const { data: penaltiesStatsU16Data } = useGetStat('playersPenaltyChampionship', 3311, penaltiesStatsU16);

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
  <HeadlessTabGroup as="div" class="bg-gray-900 rounded-lg p-4 mb-8">
    <HeadlessTabList class="flex items-end gap-4 border-b border-gray-300 pb-2">
      <span class="text-white text-2xl font-bold">Statistics</span>
      <HeadlessTab class="text-white">U-18</HeadlessTab>
      <HeadlessTab class="text-white">U-16</HeadlessTab>
    </HeadlessTabList>
    <HeadlessTabPanels>
      <HeadlessTabPanel class="grid sm:grid-cols-3 md:grid-cols-6 mb-2 gap-4">
        <PlayerStatisticCard
          title="Points"
          :data="pointStat"
          data-key="point"
          :external-link="localePath('/u18/statistics?report=points')"
        />

        <PlayerStatisticCard title="Goals" :data="goalStat" data-key="g" />

        <PlayerStatisticCard title="Assists" :data="assistsStat" data-key="a" />

        <PlayerStatisticCard title="+/-" :data="plusMinusStat" data-key="plusMinus" />

        <PlayerStatisticCard title="Penalties" :data="penaltyStat" data-key="pim" />

        <PlayerStatisticCard title="Goalies" :data="percentStat" data-key="svsPercent" />
      </HeadlessTabPanel>
      <HeadlessTabPanel class="grid sm:grid-cols-3 md:grid-cols-6 mb-2 gap-4">
        <PlayerStatisticCard
          title="Points"
          :data="pointStatU16"
          data-key="point"
          :external-link="localePath('/u18/statistics?report=points')"
        />

        <PlayerStatisticCard title="Goals" :data="goalStatU16" data-key="g" />

        <PlayerStatisticCard title="Assists" :data="assistsStatU16" data-key="a" />

        <PlayerStatisticCard title="+/-" :data="plusMinusStatU16" data-key="plusMinus" />

        <PlayerStatisticCard title="Penalties" :data="penaltyStatU16" data-key="pim" />

        <PlayerStatisticCard title="Goalies" :data="percentStatU16" data-key="svsPercent" />
      </HeadlessTabPanel>
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
