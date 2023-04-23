<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig();
// const url = `https://graph.instagram.com/me/media?fields=id,permalink,media_url&access_token=${runtimeConfig.public.instagramAccessToken}`;
// const { state } = useAsyncState(
//   () =>
//     $fetch<{ data: [] }>(url, {
//       method: 'GET',
//     }),
//   { data: [] }
// );
// const feeds = computed(() => state.value.data?.slice(0, 9) ?? []);
const feeds = useInstagramFeed();
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <template v-for="feed in feeds" :key="feed.id">
      <a :href="feed.permalink" target="_blank" class="aspect-square bg-slate-100 border">
        <img :src="feed.media_url" />
      </a>
    </template>
  </div>
</template>
