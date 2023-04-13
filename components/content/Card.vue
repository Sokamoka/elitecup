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
  <div
    class="border border-gray-300 rounded-lg hover:border-gray-500 hover:outline hover:outline-gray-500"
  >
    <div class="flex flex-col gap-4">
      <div class="image aspect-video bg-white rounded-lg p-4">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
      <dl class="p-4">
        <dt class="text-gray-900 text-xs font-bold">{{ $t('email') }}</dt>
        <dd class="space-x-2">
          <Icon name="ic:outline-email" class="text-gray-400" />
          <a :href="`mailto:${email}`">{{ email }}</a>
        </dd>
        <dt class="text-gray-900 text-xs font-bold">{{ $t('phone') }}</dt>
        <dd class="space-x-2">
          <Icon name="ic:outline-local-phone" class="text-gray-400" />
          <a :href="`tel:${phone}`">{{ phone }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style scoped>
.image :deep(img) {
  aspect-ratio: 16/10;
  object-fit: contain;
}
</style>
