<script lang="ts" setup>
definePageMeta({
  layout: false,
});

// const route = useRoute();
const { locale, locales } = useI18n();

const { path } = useRoute();

// interface ApiResponse {
//   data: {
//     image: string;
//     title: string;
//     lead: string;
//     content: string;
//     createdAt: string;
//     id: string | number;
//   };
// }

const currentIso = computed(() => locales.value?.find((loc) => loc.code === locale.value));

const toDate = (date: string) => toDefaultDate(new Date(date), currentIso.value?.iso);

// const { data: post }: ApiResponse = await useFetch(`/api/news?id=${route.params.id}`);

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <main class="prose">
      <template v-if="data">
        <Title>{{ data?.title }}</Title>

        <img class="w-full rounded-lg" :src="data?.mainImage" :alt="data?.title" />
        <time class="block text-gray-400 mt-6 mb-4 text-sm">{{ toDate(data?.publishedAt) }}</time>
        <h1 class="text-3xl text-gray-950 font-bold leading-none mb-6">{{ data?.title }}</h1>
        <h2 class="text-xl text-gray-700 mb-8">{{ data?.lead }}</h2>

        <ContentRenderer :value="data" />
      </template>
      <div v-else>
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
  @apply leading-normal mb-4 text-gray-700;
}
</style>
