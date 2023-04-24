<script setup lang="ts">
const { state } = useAsyncState(() => $fetch('/api/videos'), []);

const videos = computed(() => state.value.slice(0, 5));
</script>
<template>
  <div class="space-y-2 px-2 pb-4">
    <VideosItem
      v-for="video in videos"
      :title="video.title"
      :image="video.image"
      :date="video.date"
      :external-link="video.externalLink"
    />
  </div>
</template>
