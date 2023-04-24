<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col border border-slate-200 rounded-lg">
    <div v-if="title" class="flex justify-between items-center p-4">
      <h3 class="text-2xl font-bold">{{ title }}</h3>
      <slot name="header-append" />
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
