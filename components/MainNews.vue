<script setup>
const { locale } = useI18n();
const { data: news } = await useFetch(`/api/news?lang=${locale.value}`);
const moreNews = computed(() => [...news.value].slice(1, 5));
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-4">
    <div class="flex-1">
      <NewsCard
        :main-image="news[0].image"
        :title="news[0].title"
        :lead="news[0].lead"
        :id="news[0].id"
        :created-at="news[0].createdAt"
      />
    </div>
    <div class="w-full sm:w-1/3">
      <template v-for="post in moreNews" :key="post.id">
        <NewsCard :title="post.title" :lead="post.lead" :id="post.id" :created-at="post.createdAt" />
      </template>
    </div>
  </div>
</template>
