<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const { state } = useAsyncState(() => $fetch('/api/admin/posts', { query: { from: 0, to: 4, locale: locale.value } }), {
  count: 0,
  posts: [],
});
const { format } = useFormatDefaultDate();
</script>
<template>
  <div class="p-2">
    <template v-for="news in state.posts">
      <NuxtLink
        :to="localePath(`/admin/manage-post/${news.id}`)"
        class="flex items-start space-x-4 p-2 w-full hover:bg-slate-100 rounded-lg"
      >
        <div class="flex-shrink-0">
          <img v-if="news.image" class="w-8 h-8 rounded-full" :src="news.image" :alt="news.title" />
          <div v-else class="w-8 h-8 rounded-full bg-slate-200"></div>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold leading-tight text-slate-900">
            {{ news.title }}
          </p>
          <p class="text-sm text-slate-500 truncate dark:text-slate-400">{{ format(news.published_at) }}</p>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>
