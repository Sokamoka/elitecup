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
    <div class="text-gray-400 text-sm">{{ $attrs.name }}</div>
    <div class="text-gray-400 text-sm">{{ gameTime }}</div>
    <div class="flex-1 text-right text-gray-900 text-sm truncate">{{ $attrs.homeTeamName }}</div>
    <img :src="$attrs.homeTeamLogo" class="w-5 h-5" />
    <div class="font-bold">
      <template v-if="$attrs.gameStatus === 0">-:-</template>
      <template v-else>
        {{ $attrs.homeTeamScore }}:{{ $attrs.awayTeamScore }}
      </template>
    </div>
    <img :src="$attrs.awayTeamLogo" class="w-5 h-5" />
    <div class="flex-1 text-gray-900 text-sm truncate">{{ $attrs.awayTeamName }}</div>
  </div>
</template>
