<script setup>
const props = defineProps({
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="border border-gray-200 rounded-lg hover:border-gray-400">
    <div class="flex flex-col gap-4">
      <div
        class="flex justify-center p-4 image aspect-video bg-white border-b border-gray-200 rounded-t-lg overflow-hidden"
      >
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
      <dl class="grid grid-cols-[26px_1fr] items-center gap-y-2 p-4 pt-0">
          <Icon name="ic:outline-email" class="text-gray-400" />
          <a :href="`mailto:${email}`" class="truncate">{{ email }}</a>
          <Icon name="ic:outline-local-phone" class="text-gray-400" />
          <a :href="`tel:${phone}`" class="truncate">{{ phone }}</a>
      </dl>
    </div>
  </div>
</template>

<style scoped>
.image :deep(img) {
  display: block;
  aspect-ratio: 16/9;
  object-fit: contain;
  width: auto;
  height: auto;
}
</style>
