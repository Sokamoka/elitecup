<template>
  <div class="w-40 xl:w-64">
    <p class="text-xl text-slate-700 font-bold uppercase mt-10 mb-4">Menu</p>
    <ul role="list" class="p-4 space-y-3">
      <li>
        <NuxtLink to="/admin" class="menu-item">
          <Icon name="ic:twotone-other-houses" />
          <span class="ml-2">Home</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin/post" class="menu-item">
          <Icon name="ic:twotone-newspaper" />
          <span class="ml-2">Edit News</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin/videos" class="menu-item">
          <Icon name="ic:twotone-ondemand-video" />
          <span class="ml-2">Videos</span>
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
