<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="border border-gray-200 rounded-lg">
    <div v-if="title" class="flex justify-between items-center p-4">
      <h3 class="text-2xl font-bold">{{ title }}</h3>
      <slot name="header-append" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
