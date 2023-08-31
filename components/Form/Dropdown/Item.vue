<template>
  <HeadlessMenuItem v-slot="{ active }">
    <button
      :class="[
        active ? 'bg-slate-500 text-white' : 'text-slate-700',
        'grid grid-cols-[20px_1fr] w-full text-left gap-1 items-center rounded-md px-2 py-2 text-sm',
      ]"
    >
      <slot />
    </button>
  </HeadlessMenuItem>
</template>
