<template>
  <div class="w-screen h-screen bg-slate-200">
    <div class="flex flex-col">
      <AdminHeader />
      <div class="flex-1 flex w-full">
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
