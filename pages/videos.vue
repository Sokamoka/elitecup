<script setup lang="ts">
const { state: videos } = useAsyncState(() => $fetch('/api/videos'), []);

const { format } = useFormatDefaultDate();
</script>

<template>
  <div>
    <h1 class="text-2xl text-gray-900 font-bold my-8">
      {{ $t('title.videos') }}
    </h1>

    <div class="grid grid-flow-row grid-cols-4 gap-4 mb-8">
      <template v-for="video in videos" :key="video.id">
        <MainBox class="hover:border-gray-400">
          <a :href="video.externalLink" target="_blank">
            <figure class="flex flex-col h-full overflow-hidden rounded-t-lg">
              <img v-if="video.image" class="aspect-video object-cover" :src="video.image" alt="Bonnie image" />
              <div v-else class="aspect-video bg-gray-100" />
              <figcaption class="p-4 flex-1 text-gray-900 font-bold leading-tight">
                {{ video.title }}
              </figcaption>
              <time class="pb-4 px-4 text-gray-500 text-sm mt-4">
                {{ format(video.date) }}
              </time>
            </figure>
          </a>
        </MainBox>
      </template>
    </div>
  </div>
</template>
