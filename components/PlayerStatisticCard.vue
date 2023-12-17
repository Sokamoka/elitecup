<script setup lang="ts">
import type { PlayerStats } from '~/types/PlayerStats';

interface Props {
  title: string;
  data: PlayerStats[];
  dataKey: 'point' | 'g' | 'a' | 'plusMinus' | 'svsPercent' | 'pim';
  externalLink: string;
  externalParams: string;
}

const props = defineProps<Props>();

const router = useRouter();

const navigate = () => {
  const params = Object.fromEntries(new URLSearchParams(props.externalParams));
  router.push({ path: props.externalLink, ...(params && { query: params }) });
};
</script>

<template>
  <section>
    <div class="grid grid-cols-[1fr_40px] pt-4 pb-2 mb-2 border-b border-slate-500">
      <span class="text-white font-semibold uppercase"> {{ title }} </span>
      <button type="button" class="text-right" @click="navigate">
        <Icon name="ic:baseline-keyboard-arrow-right" class="text-slate-400" />
      </button>
    </div>
    <div class="grid grid-cols-[20px_1fr_40px] grid-flow-row text-sm gap-2">
      <template v-for="player in data" :key="player.id">
        <img :src="player.teamLogo" :title="player.teamName" class="w-4 h-4" />
        <span class="text-white truncate">{{ player.lastName }} {{ player.firstName }}</span>
        <span class="text-slate-400 text-right">{{ player[dataKey] }}</span>
      </template>
    </div>
  </section>
</template>
