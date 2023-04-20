<script setup lang="ts">
const url =
  'https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJVbGZA4dFhnWEV1dUhCdzVDQXI3cDBFU1RzN1VISFdwSWVHaFNjb0F2dWltT1lIVjdtMDNsMktfb2pxZAWYxclZAWaVBYckxEeGJILWdpSzlYandxSVY1N1htdXJ3Q3llU3dZARjF4X0owR0FqdXlLbm5KcEpRQlVlT0VF';
const { state } = useAsyncState(
  () =>
    $fetch<{ data: [] }>(url, {
      method: 'GET',
    }),
  { data: [] }
);
const feeds = computed(() => state.value.data?.slice(0, 9) ?? []);
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <div v-for="feed in feeds" class="aspect-square bg-slate-100 border">
      <img :src="feed.media_url" />
    </div>
  </div>
</template>
