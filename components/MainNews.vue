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
  <div class="flex flex-col sm:flex-row gap-4 mb-4">
    <div class="flex-1">
      <NewsCard
        :main-image="news.posts[0].image"
        :title="news.posts[0].title"
        :lead="news.posts[0].lead"
        :id="`/news/${news.posts[0].slug}`"
        :created-at="news.posts[0].published_at"
        is-main-news-card
      />
    </div>
    <div class="w-full sm:w-1/3">
      <template v-for="post in moreNews" :key="post._path">
        <NewsCard :title="post.title" :lead="post.lead" :id="post.slug" :created-at="post.published_at" />
      </template>
    </div>
  </div>
</template>
