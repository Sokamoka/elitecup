<script lang="ts" setup>
import { News } from '~/types/News';

const skip = ref(0);
const limit = ref(10);

// interface ApiResponse {
//   mainImage: string;
//   title: string;
//   lead: string;
//   publishedAt: string;
//   _path: string;
// }

definePageMeta({
  layout: false,
});

const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t('menu.news'),
});

const toDate = (date: string) => toDefaultDate(new Date(date));

// const { data: news } = await useFetch<{ data: ApiResponse[] }>(`/api/news?lang=${locale.value}`);

const { data: allPost } = await useAsyncData('totalnews', () => {
  return queryContent<News>(localePath('/news')).find();
});

const totalPost = computed(() => allPost.value?.length ?? 0);
const totalPage = computed(() => Math.ceil(totalPost.value / limit.value));

const { data, refresh } = await useAsyncData('news', () =>
  queryContent<News>(localePath('/news')).sort({ publishedAt: -1 }).skip(skip.value).limit(limit.value).find()
);

const prevPage = () => {
  skip.value -= limit.value;
  refresh();
};
const nextPage = () => {
  skip.value += limit.value;
  refresh();
};
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <template #header>
      <h1 class="text-2xl text-slate-900 font-bold mt-8">{{ $t('menu.news') }}</h1>
    </template>

    <div class="flex flex-col space-y-8">
      <div v-for="item in data" :key="item.id" class="flex flex-col sm:flex-row space-x-4 w-full">
        <div class="flex-shrink-0">
          <img class="h-auto sm:h-36 aspect-[16/10] rounded-lg" :src="item.mainImage" alt="Bonnie image" />
        </div>
        <div class="flex-1 flex flex-col items-stretch min-w-0">
          <time v-if="item.publishedAt" class="text-slate-400 my-2 text-sm">{{ toDate(item.publishedAt) }}</time>
          <p class="text-xl font-bold leading-tight text-slate-900 mb-2">
            {{ item.title }}
          </p>
          <div class="flex-1 text-base text-slate-500">{{ item.lead }}</div>
          <NuxtLink :to="localePath(item._path)">
            <FormButton variant="link" class="-ml-4 w-min text-sm whitespace-nowrap">Read more</FormButton>
          </NuxtLink>
        </div>
      </div>

      <div class="flex gap-x-2">
        <button class="button" :disabled="skip === 0" @click="prevPage">
          <Icon name="ic:outline-arrow-back-ios" />
        </button>

        <button class="button" :disabled="totalPage - 1 === skip" @click="nextPage">
          <Icon name="ic:outline-arrow-forward-ios" />
        </button>
      </div>
    </div>

    <template #sidebar>
      <ScheduleMainBox />
    </template>
  </NuxtLayout>
</template>
