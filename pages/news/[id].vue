<script lang="ts" setup>
const route = useRoute();

interface ApiResponse {
  data: {
    image: string;
    title: string;
    lead: string;
    content: string;
    createdAt: string;
    id: string | number;
  };
};

const toDate = (date: string) => toDefaultDate(new Date(date));

const { data: post }: ApiResponse = await useFetch(`/api/news?id=${route.params.id}`);
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <div>
      <img class="w-full rounded-lg" :src="post.image" :alt="post.title" />
      <time class="block text-gray-400 my-2 text-sm">{{ toDate(post.createdAt) }}</time>
      <h1 class="text-2xl text-gray-900 font-bold">{{ post.title }}</h1>
      <p class="text-base text-gray-500 mb-8">{{ post.lead }}</p>
      <div class="text-gray-900" v-html="post.content" />
    </div>
    <template #sidebar>
      <MainBox title="Schedule">
        <template #header-append>
          <FormButton variant="link" class="text-sm"> All games </FormButton>
        </template>
        <Schedule />
      </MainBox>
    </template>
  </NuxtLayout>
</template>
