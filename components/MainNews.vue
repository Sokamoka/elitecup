<script setup>
import { omit } from 'ramda';

const { locale } = useI18n();
const localePath = useLocalePath();
// const { data: news } = await useFetch(`/api/news?lang=${locale.value}`);
const { data: news } = await useAsyncData('homepage', () => {
  return queryContent(localePath('/news')).sort({ publishedAt: -1 }).skip(0).limit(4).find();
});
const moreNews = computed(() => [...news.value].slice(1, 3));
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-4">
    <div class="flex-1">
      <NewsCard
        :main-image="news[0].mainImage"
        :title="news[0].title"
        :lead="news[0].lead"
        :id="news[0]._path"
        :created-at="news[0].publishedAt"
      />
    </div>
    <div class="w-full sm:w-1/3">
      <template v-for="post in moreNews" :key="post._path">
        <NewsCard :title="post.title" :lead="post.lead" :id="post._path" :created-at="post.publishedAt" />
      </template>
    </div>
  </div>
</template>
