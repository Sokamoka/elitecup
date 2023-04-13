<script setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col sm:flex-row bg-gray-900 px-4 rounded-lg text-white font-bold uppercase">
    <NuxtLink :to="localePath('/news')" class="p-3">{{ $t('menu.news') }}</NuxtLink>
    <span class="p-3">U-18</span>
    <span class="p-3">U-16</span>
    <NuxtLink :to="localePath('/schedule')" class="p-3">{{ $t('menu.schedule') }}</NuxtLink>
    <NuxtLink :to="localePath('/videos')" class="p-3">{{ $t('menu.videos') }}</NuxtLink>
    <NuxtLink :to="localePath('/page/project')" class="p-3">{{ $t('menu.project') }}</NuxtLink>
    <NuxtLink :to="localePath('/page/contacts')" class="p-3">{{ $t('menu.contacts') }}</NuxtLink>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-red-500;
}
</style>
