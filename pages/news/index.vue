<script setup>
const { data: news } = await useFetch('/api/news');
</script>

<template>
  <NuxtLayout name="sub" class="mb-8">
    <div class="flex flex-col space-y-8">
      <div v-for="item in news" :key="item.id" class="flex space-x-4 w-full">
        <div class="flex-shrink-0">
          <img class="h-32 aspect-video" :src="item.image" alt="Bonnie image" />
        </div>
        <div class="flex-1 flex flex-col items-stretch min-w-0">
          <time class="text-gray-400 mb-2 text-sm">{{ item.createdAt }}</time>
          <p class="text-xl font-bold leading-tight text-gray-900 mb-2">
            {{ item.title }}
          </p>
          <div class="flex-1 text-base text-gray-500">{{ item.lead }}</div>
          <NuxtLink :to="`/news/${item.id}`">
            <FormButton variant="link" class="-ml-4 w-min text-sm whitespace-nowrap">Read more ></FormButton>
          </NuxtLink>
        </div>
      </div>
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
