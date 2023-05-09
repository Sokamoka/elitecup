<script lang="ts" setup>
import { News } from '~/types/News';

const page = ref(0);
const limit = 5;

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

const { locale, t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t('menu.news'),
});

const { from, to } = usePagination(page, limit);

const { data } = await useFetch<{ posts: News[]; count: number }>('/api/news-list', {
  query: {
    locale: locale.value,
    from,
    to,
  },
});

const maxPage = computed(() => {
  const count = data.value?.count ?? 0;
  return Math.ceil(count / limit) - 1;
});

const prevPage = () => {
  page.value--;
};
const nextPage = () => {
  page.value++;
};
const toDate = (date: string) => toDefaultDate(new Date(date));
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <template #header>
      <h1 class="text-2xl text-slate-900 font-bold mt-8">{{ $t('menu.news') }}</h1>
    </template>

    <div class="flex flex-col space-y-8">
      <div v-for="item in data?.posts" :key="item.id" class="flex flex-col sm:flex-row space-x-4 w-full">
        <div class="flex-shrink-0">
          <img class="h-auto sm:h-36 aspect-[16/10] rounded-lg" :src="item.image" :alt="item.title" />
        </div>
        <div class="flex-1 flex flex-col items-stretch min-w-0">
          <time v-if="item.published_at" class="text-slate-400 my-2 text-sm">{{ toDate(item.published_at) }}</time>
          <p class="text-xl font-bold leading-tight text-slate-900 mb-2">
            {{ item.title }}
          </p>
          <div class="flex-1 text-base text-slate-500" v-html="item.lead" />
          <NuxtLink :to="localePath(`/news/${item.slug}`)">
            <FormButton variant="link" class="-ml-4 w-min text-sm whitespace-nowrap">
              {{ $t('common.readMore') }}
            </FormButton>
          </NuxtLink>
        </div>
      </div>

      <div class="flex gap-x-2">
        <button class="button" :disabled="page === 0" @click="prevPage">
          <Icon name="ic:outline-arrow-back-ios" />
        </button>

        <button class="button" :disabled="page === maxPage" @click="nextPage">
          <Icon name="ic:outline-arrow-forward-ios" />
        </button>
      </div>
    </div>

    <template #sidebar>
      <ScheduleMainBox />
    </template>
  </NuxtLayout>
</template>
