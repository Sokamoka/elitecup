<script setup lang="ts">
const { state: videos, isFetchMoreVisible, fetchMore } = useVideoList();

const { format } = useFormatDefaultDate();
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">
      {{ $t('title.videos') }}
    </h1>

    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      <template v-for="video in videos" :key="video.id">
        <MainBox class="hover:border-slate-400">
          <a :href="video.externalLink" target="_blank">
            <figure class="relative flex flex-col h-full overflow-hidden rounded-t-lg">
              <div
                v-if="video.gameStatus === 1"
                class="absolute top-1 left-1 bg-red-500 text-white rounded text-xs font-semibold px-1 uppercase"
              >
                Live
              </div>
              <img v-if="video.image" class="aspect-video object-cover" :src="video.image" alt="Bonnie image" />
              <div v-else class="aspect-video bg-slate-100" />
              <figcaption class="p-4 flex-1 text-slate-900 font-bold leading-tight">
                {{ video.title }}
              </figcaption>
              <time class="pb-4 px-4 text-slate-500 text-sm mt-4">
                {{ format(video.date) }}
              </time>
            </figure>
          </a>
        </MainBox>
      </template>
    </div>

    <FetchMoreObserver v-if="isFetchMoreVisible" @intersect="fetchMore">
      <button type="button" class="button flex items-center gap-x-2 mx-auto" @click="fetchMore">
        <Icon name="ic:outline-add-circle-outline" />
        {{ $t('common.moreGames') }}
      </button>
    </FetchMoreObserver>
  </div>
</template>
