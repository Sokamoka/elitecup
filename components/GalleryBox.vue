<script setup lang="ts">
const feeds = useInstagramFeed();

const navigate = async () => {
  await navigateTo('https://www.instagram.com/elitecup.eu/', { external: true });
};
</script>

<template>
  <MainBox title="Instagram" class="h-full">
    <template #header-append>
      <a href="https://www.instagram.com/elitecup.eu/" target="_blank" class="button is-link text-sm -mr-4">
        {{ $t('common.profile') }}
        <Icon name="ic:baseline-keyboard-arrow-right" />
      </a>
    </template>
    <div class="grid grid-cols-3 grid-rows-3">
      <template v-for="feed in feeds" :key="feed.id">
        <a :href="feed.permalink" target="_blank" class="aspect-square bg-slate-100 border">
          <img :src="feed.media_url" />
        </a>
      </template>
    </div>
  </MainBox>
</template>
