<script lang="ts" setup>
const props = defineProps({
  mainImage: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  lead: {
    type: String,
    default: '',
  },

  id: {
    type: [String, Number],
    default: '',
  },

  createdAt: {
    type: String,
    default: '',
  },
});

const { locale } = useI18n();
const localePath = useLocalePath();

const isMainNewsCard = computed(() => Boolean(props.mainImage));

const toDate = (date: string) => toDefaultDate(new Date(date), locale.value);
</script>
<template>
  <div class="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <img v-if="isMainNewsCard" :src="mainImage" class="w-full" />
    <div class="p-4">
      <time :class="['block text-gray-400 font-medium', isMainNewsCard ? 'text-base mb-3' : 'text-sm mb-2']">
        {{ toDate(createdAt) }}
      </time>
      <dt :class="['font-bold text-gray-900 uppercase', isMainNewsCard ? 'text-2xl' : 'text-base']">{{ title }}</dt>
      <dd :class="['text-gray-500 mb-4', isMainNewsCard ? 'text-base' : 'text-sm']">
        {{ lead }}
      </dd>

      <NuxtLink :to="localePath(`/news/${id}`)" v-slot="{ navigate }" custom>
        <FormButton v-if="isMainNewsCard" variant="primary" @click="navigate">Read more</FormButton>
        <FormButton v-else variant="link" class="text-sm p-2 -ml-2.5 -mb-2" @click="navigate">Read more</FormButton>
      </NuxtLink>
    </div>
  </div>
</template>
