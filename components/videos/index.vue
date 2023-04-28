<script setup lang="ts">
const { state: videos } = useAsyncState(() => $fetch('/api/videos-main'), []);
</script>
<template>
  <div class="space-y-2 px-2 pb-4">
    <VideosItem
      v-for="video in videos"
      :title="video.title"
      :image="video.image"
      :date="video.gameDate"
      :game-status="video.gameStatus"
      :external-link="video.externalLink"
    />
  </div>
</template>
