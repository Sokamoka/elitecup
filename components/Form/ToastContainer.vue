<script setup lang="ts">
export interface Props {
  closeTimeout?: number;
}

const props = withDefaults(defineProps<Props>(), {
  closeTimeout: 10000,
});
</script>

<template>
  <div class="fixed left-5 bottom-5 flex flex-col gap-4 z-50">
    <FormToast :close-timeout="props.closeTimeout" />
  </div>
</template>
