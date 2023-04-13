<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <MainBox :title="$t('title.schedule')" class="h-full">
    <template #header-append>
      <NuxtLink :to="localePath('/schedule')" v-slot="{ navigate }" custom>
        <FormButton variant="link" class="text-sm" @click="navigate">{{ $t('common.allGames') }}</FormButton>
      </NuxtLink>
    </template>
    <Schedule />
  </MainBox>
</template>
