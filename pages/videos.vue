<script setup lang="ts">
import { VIDEO_PAGE_LIMIT_PER_PAGE } from '~/constants';

const { t } = useI18n();

useHead({
  title: t('menu.videos'),
});

const page = ref(0);
const { from, to } = usePagination(page, VIDEO_PAGE_LIMIT_PER_PAGE);
const { state: videos, isLoading, isFetchMoreVisible, error } = await useVideoList({ from, to });

const isLazyLoading = useLazyLoadingState({ loadingState: isLoading, delay: 300 });

const { format } = useFormatDefaultDate();

const onReload = () => {
  window.location.reload();
};
const fetchMore = () => {
  page.value++;
};
</script>

<template>
  <div>
    <h1 class="text-2xl text-slate-900 font-bold my-8">
      {{ $t('title.videos') }}
    </h1>

    <div v-if="error" class="flex flex-col items-center">
      <img src="~/assets/images/304.svg" class="w-full max-w-md" />
      <p class="pt-4 pb-2 font-semibold text-slate-900 text-xl leading-6 uppercase">Something went wrong</p>
      <p class="pb-4 font-semibold text-slate-400">{{ error }}</p>
      <FormButton variant="outlined" @click="onReload">Reload</FormButton>
    </div>

    <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      <template v-if="isLazyLoading && !error && videos.length === 0">
        <div class="bg-slate-100 border border-slate-200 rounded-lg animate-pulse h-64" />
        <div class="bg-slate-100 border border-slate-200 rounded-lg animate-pulse h-64" />
      </template>
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
