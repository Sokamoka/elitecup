<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const props = defineProps<{
  championshipId: number;
}>();

const { data } = await useFetch('https://api.icehockey.hu/vbr/v2/championship-sections', {
  headers: {
    origin: 'https://www.elitecup.eu',
    'Content-Type': 'application/json',
    'X-API-KEY': runtimeConfig.public.vbrApiKey,
  },
  query: computed(() => ({ championshipId: props.championshipId })),
  transform: (response) => response.data[0].phases,
});
</script>

<template>
  <div>
    <slot :data="data" :championshipId="props.championshipId" />
  </div>
</template>
