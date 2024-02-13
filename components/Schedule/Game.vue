<script setup>
const props = defineProps({
  gameTime: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div class="flex items-center gap-2">
    <div class="text-slate-400 text-sm">{{ $attrs.name }}</div>
    <div class="text-slate-400 text-sm">{{ gameTime }}</div>
    <div class="flex-1 text-right text-slate-900 text-sm truncate sm:hidden lg:block">{{ $attrs.homeTeam.longName }}</div>
    <img :src="$attrs.homeTeam.logo" :title="$attrs.homeTeam.longName" class="w-5 h-5" />
    <div class="font-bold">
      <template v-if="$attrs.gameStatus === 0">-:-</template>
      <template v-else> {{ $attrs.homeTeamScore }}:{{ $attrs.awayTeamScore }} </template>
    </div>
    <img :src="$attrs.awayTeam.logo" :title="$attrs.awayTeam.longName" class="w-5 h-5" />
    <div class="flex-1 text-slate-900 text-sm truncate sm:hidden lg:block">{{ $attrs.awayTeam.longName }}</div>
  </div>
</template>
