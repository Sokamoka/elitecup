<script lang="ts" setup>
import { News } from '~/types/News';

definePageMeta({
  layout: false,
  middleware: ['news'],
});

const route = useRoute();
const { locale, locales, t } = useI18n();

const currentIso = computed(() => locales.value.find((loc: { code: string }) => loc.code === locale.value));

const toDate = (date: string) => toDefaultDateTime(new Date(date), currentIso.value?.iso);

const { data, error } = await useFetch<News>('/api/news', {
  query: { slug: route.params.slug },
});

useHead({
  title: t(data.value?.title),
});
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <main class="prose max-w-none prose-sm sm:prose sm:max-w-none prose-slate">
      <template v-if="data">
        <Title>{{ data?.title }}</Title>

        <img v-if="data?.image" class="w-full rounded-lg" :src="data?.image" :alt="data?.title" />
        <img
          v-else
          src="~/assets/images/elitecup_default_image.svg"
          class="object-cover aspect-[16/10] bg-slate-100 border border-slate-200 rounded-lg"
        />
        <time class="block text-slate-400 mt-6 mb-4">{{ toDate(data?.published_at) }}</time>
        <h1>{{ data?.title }}</h1>
        <h2 v-html="data?.lead" />

        <div v-html="data.content" />
      </template>
      <div v-if="error">
        Ezen a nyelven nem elérhető ez a hír
        <button class="button">Go to news page</button>
      </div>
    </main>
    <template #sidebar>
      <ScheduleMainBox />
    </template>
  </NuxtLayout>
</template>

<style scoped>
.prose :deep(p) {
  @apply leading-normal mb-4 text-slate-700;
}
</style>
