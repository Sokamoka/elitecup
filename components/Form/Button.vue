<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },

  isFullWidth: {
    type: Boolean,
    default: false,
  },
});

const mainClasses = computed(() => [
  "button",
  [`is-${props.variant}`],
  {
    "w-full": props.isFullWidth,
  },
]);
</script>

<template>
  <button type="button" :class="mainClasses">
    <slot />
    <Icon name="ic:baseline-keyboard-arrow-right" />
  </button>
</template>
