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
  <div class="border border-gray-300 rounded-lg p-4">
    <div class="flex flex-col gap-4">
      <div class="image aspect-video">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
      <dl>
        <dt class="text-gray-900 text-xs font-bold">{{ $t('email') }}</dt>
        <dd>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </dd>
        <dt class="text-gray-900 text-xs font-bold">{{ $t('phone') }}</dt>
        <dd>
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
