<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },

  size: {
    type: String,
    default: '',
    validator: (value: string) => ['xs', 'sm', ''].includes(value),
  },

  isFullWidth: {
    type: Boolean,
    default: false,
  },
});

const mainClasses = computed(() => [
  'button',
  [`is-${props.variant}`, props.size ? `is-${props.size}` : ''],
  {
    'w-full': props.isFullWidth,
  },
]);
</script>

<template>
  <button type="button" :class="mainClasses">
    <slot />
    <Icon name="ic:baseline-keyboard-arrow-right" />
  </button>
</template>
