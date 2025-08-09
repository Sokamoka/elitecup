<script setup>
const { locale } = useI18n();

const { data: news } = await useFetch('/api/news-list', {
  query: {
    locale: locale.value,
    from: 0,
    to: 4,
  },
});

const moreNews = computed(() => [...news.value.posts].slice(1, 5));
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_33%] sm:grid-rows-2 lg:grid-rows-4 grid-flow-row gap-4 mb-4">
    <div class="sm:row-span-2 lg:row-span-4">
      <NewsCard
        class="lg:h-full"
        :main-image="news.posts[0].image"
        :title="news.posts[0].title"
        :lead="news.posts[0].lead"
        :id="`/news/${news.posts[0].slug}`"
        :created-at="news.posts[0].published_at"
        is-main-news-card
      />
    </div>
    <template v-for="post in moreNews" :key="post._path">
      <NewsCard :title="post.title" :lead="post.lead" :id="`/news/${post.slug}`" :created-at="post.published_at" />
    </template>
  </div>
</template>
