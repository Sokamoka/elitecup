<script setup lang="ts">
const props = defineProps<{ direction: string }>();
</script>

<template>
  <HeadlessMenu as="div" class="relative">
    <HeadlessMenuButton as="template">
      <slot></slot>
    </HeadlessMenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        :class="[
          'absolute right-0 my-1 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10',
          direction === 'top' ? 'origin-bottom-right bottom-full' : 'origin-top-right',
        ]"
      >
        <div class="px-1 py-1">
          <slot name="items" />
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>
