<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

useContentHead(data)
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8 mb-4">{{ data.title }}</h1>
  <main class="prose mb-8 text-slate-700">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>

<style>
.prose p {
  @apply mb-4;
}
.prose a {
  @apply text-slate-700 font-medium hover:text-red-500;
}
</style>
