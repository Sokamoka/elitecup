<script lang="ts" setup>
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
  return queryContent(localePath('/news')).find();
});

const totalPost = computed(() => allPost.value?.length ?? 0);
const totalPage = computed(() => Math.ceil(totalPost.value / limit.value));

const { data, refresh } = await useAsyncData('news', () => {
  return queryContent(localePath('/news')).sort({ publishedAt: -1 }).skip(skip.value).limit(limit.value).find();
});

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
      <h1 class="text-2xl text-gray-900 font-bold mt-8">{{ $t('menu.news') }}</h1>
    </template>

    <div class="flex flex-col space-y-8">
      <!-- <div v-for="item in news" :key="item.id" class="flex space-x-4 w-full">
        <div class="flex-shrink-0">
          <img class="h-32 aspect-video rounded-lg" :src="item.image" alt="Bonnie image" />
        </div>
        <div class="flex-1 flex flex-col items-stretch min-w-0">
          <time class="text-gray-400 mb-2 text-sm">{{ toDate(item.createdAt) }}</time>
          <p class="text-xl font-bold leading-tight text-gray-900 mb-2">
            {{ item.title }}
          </p>
          <div class="flex-1 text-base text-gray-500">{{ item.lead }}</div>
          <NuxtLink :to="localePath(`/news/${item.id}`)">
            <FormButton variant="link" class="-ml-4 w-min text-sm whitespace-nowrap">Read more ></FormButton>
          </NuxtLink>
        </div>
      </div> -->

      <div v-for="item in data" :key="item.path" class="flex flex-col sm:flex-row space-x-4 w-full">
        <div class="flex-shrink-0">
          <img class="h-auto sm:h-36 aspect-[16/10] rounded-lg" :src="item.mainImage" alt="Bonnie image" />
        </div>
        <div class="flex-1 flex flex-col items-stretch min-w-0">
          <time v-if="item.publishedAt" class="text-gray-400 my-2 text-sm">{{ toDate(item.publishedAt) }}</time>
          <p class="text-xl font-bold leading-tight text-gray-900 mb-2">
            {{ item.title }}
          </p>
          <div class="flex-1 text-base text-gray-500">{{ item.lead }}</div>
          <NuxtLink :to="localePath(item?._path)">
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
