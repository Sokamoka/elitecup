<script setup lang="ts">
import { tabsContext } from './internal';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

const api = inject(tabsContext, null);

onMounted(() => api?.add({ title: props.title, disabled: props.disabled }));
</script>

<template>
  <HeadlessTabPanel>
    <slot />
  </HeadlessTabPanel>
</template>
