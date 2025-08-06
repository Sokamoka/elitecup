<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <MainBox :title="$t('title.videos')" class="h-full">
    <template #header-append>
      <NuxtLink :to="localePath('/videos')" v-slot="{ navigate }" custom>
        <FormButton variant="link" class="text-sm -mr-4" @click="navigate">{{ $t('common.allVideos') }}</FormButton>
      </NuxtLink>
    </template>
    <Videos />
  </MainBox>
</template>
