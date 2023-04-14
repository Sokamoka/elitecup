<script setup lang="ts">
const localePath = useLocalePath();

const playerStatsU18 = usePlayerStatsU18();
const goalieStatsU18 = useGoalieStatsU18();
const penaltiesStatsU18 = usePenaltiesStatsU18();

const { data: playerStatsU18Data } = useGetStat('playersStatsChampionship', 3312, playerStatsU18);
const { data: goalieStatsU18Data } = useGetStat('playersGoalieChampionship', 3312, goalieStatsU18);
const { data: penaltiesStatsU18Data } = useGetStat('playersPenaltyChampionship', 3312, penaltiesStatsU18);

const pointStat = usePlayerStatsByType(playerStatsU18Data, 'point');
const goalStat = usePlayerStatsByType(playerStatsU18Data, 'g');
const assistsStat = usePlayerStatsByType(playerStatsU18Data, 'a');
const plusMinusStat = usePlayerStatsByType(playerStatsU18Data, 'plusMinus');
const percentStat = usePlayerStatsByType(goalieStatsU18Data, 'svsPercent');
const penaltyStat = usePlayerStatsByType(penaltiesStatsU18Data, 'pim');
</script>

<template>
  <div class="bg-gray-900 rounded-lg p-4 mb-8">
    <div class="flex items-end gap-4 border-b border-gray-300 pb-2">
      <span class="text-white text-2xl font-bold">Statistics</span>
      <span class="text-white">U-18</span>
      <span class="text-white">U-16</span>
    </div>
    <div data-test="panel">
      <div class="grid sm:grid-cols-3 md:grid-cols-6 mb-2 gap-4">
        <PlayerStatisticCard
          title="Points"
          :data="pointStat"
          data-key="point"
          :external-link="localePath('/u18/statistics?report=points')"
        />
  
        <PlayerStatisticCard title="Goals" :data="goalStat" data-key="g" />
  
        <PlayerStatisticCard title="Assists" :data="assistsStat" data-key="a" />
  
        <PlayerStatisticCard title="+/-" :data="plusMinusStat" data-key="plusMinus" />
  
        <PlayerStatisticCard title="Goalies" :data="percentStat" data-key="svsPercent" />
  
        <PlayerStatisticCard title="Penalties" :data="penaltyStat" data-key="pim" />
      </div>
    </div>
  </div>
</template>
