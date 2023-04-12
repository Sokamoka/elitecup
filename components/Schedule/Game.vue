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
    <div class="text-gray-400">U-16</div>
    <div class="text-gray-400">{{ gameTime }}</div>
    <div class="flex-1 text-right text-gray-900 truncate">{{ $attrs.homeTeamName }}</div>
    <img :src="$attrs.homeTeamLogo" class="w-5 h-5" />
    <div class="font-bold">{{ $attrs.homeTeamScore }}:{{ $attrs.awayTeamScore }}</div>
    <img :src="$attrs.awayTeamLogo" class="w-5 h-5" />
    <div class="flex-1 text-gray-900 truncate">{{ $attrs.awayTeamName }}</div>
  </div>
</template>
