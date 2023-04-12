<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const route = useRoute();
const { locale, locales } = useI18n();
const localePath = useLocalePath();

interface ApiResponse {
  data: {
    image: string;
    title: string;
    lead: string;
    content: string;
    createdAt: string;
    id: string | number;
  };
}

const currentIso = computed(() => locales.value?.find((loc) => loc.code === locale.value));

const toDate = (date: string) => toDefaultDate(new Date(date), currentIso.value?.iso);

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
          <NuxtLink :to="localePath('/schedule')" v-slot="{ navigate }" custom>
            <FormButton variant="link" class="text-sm" @click="navigate"> All games </FormButton>
          </NuxtLink>
        </template>
        <Schedule />
      </MainBox>
    </template>
  </NuxtLayout>
</template>
