<template>
  <div class="w-screen min-h-screen flex flex-col bg-slate-200 overflow-hidden">
    <AdminHeader />
    <div class="flex-1 overflow-y-auto">
      <div class="flex container mx-auto">
        <AdminMenu />
        <div class="flex-1 px-4 overflow-hidden">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
