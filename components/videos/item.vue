<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },

  image: {
    type: String,
    default: '',
  },

  date: {
    type: String,
    default: '',
  },

  externalLink: {
    type: String,
    default: '',
  },
});

const { format } = useFormatDefaultDate();
</script>
<template>
  <a :href="externalLink" target="_blank" class="flex items-start space-x-4 p-2 w-full hover:bg-slate-100 rounded-lg">
    <div class="flex-shrink-0">
      <img v-if="image" class="w-8 h-8 rounded-full" :src="image" :alt="title" />
      <div v-else class="w-8 h-8 rounded-full bg-slate-200"></div>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-semibold leading-tight text-slate-900">
        {{ title }}
      </p>
      <p class="text-sm text-slate-500 truncate dark:text-slate-400">{{ format(date) }}</p>
    </div>
  </a>
</template>
