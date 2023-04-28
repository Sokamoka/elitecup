<script setup lang="ts">
const localePath = useLocalePath();
</script>
<template>
  <div class="w-full sm:w-40 xl:w-64">
    <p class="text-xl p-4 text-slate-700 font-bold uppercase mt-6">
      {{ $t('admin.title.menu') }}
    </p>
    <ul role="list" class="p-4 space-y-3">
      <li>
        <NuxtLink :to="localePath('/admin')" class="menu-item">
          <Icon name="ic:twotone-other-houses" />
          <span class="ml-2 truncate">{{ $t('admin.menu.home') }}</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/admin/post')" class="menu-item">
          <Icon name="ic:twotone-newspaper" />
          <span class="ml-2 truncate">{{ $t('admin.menu.editNews') }}</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/admin/videos')" class="menu-item">
          <Icon name="ic:twotone-ondemand-video" />
          <span class="ml-2 truncate">{{ $t('admin.menu.videos') }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-item {
  @apply flex items-center text-slate-500 hover:text-slate-700 font-medium leading-6;
}
</style>
