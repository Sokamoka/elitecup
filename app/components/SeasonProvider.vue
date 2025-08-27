<script setup lang="ts">
import * as R from 'ramda';
import type { ChampionshipSectionsPhase } from '~~/shared/types/Championship';

interface ChampionshipSectionsResponse {
  data: [{ phases: ChampionshipSectionsPhase[] }];
}

const sortFn = R.sortWith<ChampionshipSectionsPhase>([
  R.ascend(R.prop('phaseName')),
  R.ascend((obj) => R.path(['phaseSubType', 'phaseSubTypeName'], obj) ?? ''),
]);

const runtimeConfig = useRuntimeConfig();

const props = defineProps<{
  championshipId: number;
}>();

const { data } = await useFetch<ChampionshipSectionsPhase[]>('https://api.icehockey.hu/vbr/v2/championship-sections', {
  headers: {
    origin: 'https://www.elitecup.eu',
    'Content-Type': 'application/json',
    'X-API-KEY': runtimeConfig.public.vbrApiKey,
  },
  server: false,
  query: computed(() => ({ championshipId: props.championshipId })),
  transform: (response) => sortPhases((response as unknown as ChampionshipSectionsResponse).data[0].phases),
});

function sortPhases(phases: ChampionshipSectionsPhase[]): ChampionshipSectionsPhase[] {
  return sortFn(phases);
}
</script>

<template>
  <div>
    <slot :data="data" :championshipId="props.championshipId" />
  </div>
</template>
