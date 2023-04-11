<template>
  <div class="w-screen h-screen bg-slate-200">
    <div class="flex flex-col">
      <div class="flex h-14 bg-white shadow-sm shadow-slate-500 items-center px-4">
        <NuxtLink to="/admin" class="font-bold text-xl">Elite Cup Admin</NuxtLink>
      </div>
      <div class="flex-1 flex">
        <div class="w-64">
          <ul class="p-8">
            <li>Home</li>
            <li>Edit News</li>
          </ul>
        </div>
        <div class="flex-1 px-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
