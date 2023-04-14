<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  data: {
    type: Array,
    default: () => [],
  },

  dataKey: {
    type: String,
    required: true,
  },

  externalLink: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section>
    <div class="grid grid-cols-[1fr_40px] pt-4 pb-2 mb-2 border-b border-gray-500">
      <span class="text-white font-semibold uppercase"> {{ title }} </span>
      <NuxtLink :to="externalLink" class="text-right"> <Icon name="ic:baseline-keyboard-arrow-right" class="text-gray-400" /> </NuxtLink>
    </div>
    <div class="grid grid-cols-[20px_1fr_40px] grid-flow-row text-sm gap-2">
      <template v-for="player in data" :key="player.id">
        <img :src="player.teamLogo" :title="player.teamName" class="w-4 h-4">
        <span class="text-white">{{ player.lastName }} {{ player.firstName }}</span>
        <span class="text-gray-400 text-right">{{ player[dataKey] }}</span>
      </template>
    </div>
  </section>
</template>
