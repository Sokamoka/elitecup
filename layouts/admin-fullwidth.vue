<template>
  <div class="w-screen h-screen bg-slate-200">
    <div class="flex flex-col">
      <AdminHeader />
      <div class="flex-1 flex w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
