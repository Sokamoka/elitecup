<script lang="ts" setup>
const props = defineProps({
  mainImage: {
    type: String,
    default: '',
  },

  isMainNewsCard: {
    type: Boolean,
    default: false,
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

const toDate = (date: string) => toDefaultDate(new Date(date), locale.value);
</script>
<template>
  <div class="bg-white border border-slate-200 rounded-lg overflow-hidden">
    <img v-if="isMainNewsCard && mainImage" :src="mainImage" class="object-cover aspect-video" />
    <img v-else-if="isMainNewsCard" src="~/assets/images/elitecup_default_image.svg" class="object-cover bg-slate-100 aspect-[16/10]" />
    <div class="p-4">
      <time :class="['block text-slate-400 font-medium', isMainNewsCard ? 'text-base mb-3' : 'text-sm mb-2']">
        {{ toDate(createdAt) }}
      </time>
      <dt :class="['font-bold text-slate-900 uppercase', isMainNewsCard ? 'text-2xl' : 'text-base']">{{ title }}</dt>
      <dd :class="['text-slate-500 mb-4', isMainNewsCard ? 'text-base' : 'text-sm']" v-html="lead" />

      <NuxtLink :to="localePath(id)" v-slot="{ navigate }" custom>
        <FormButton v-if="isMainNewsCard" variant="primary" @click="navigate">{{ $t('common.readMore') }}</FormButton>
        <FormButton v-else variant="link" class="text-sm p-2 -ml-2.5 -mb-2" @click="navigate">{{
          $t('common.readMore')
        }}</FormButton>
      </NuxtLink>
    </div>
  </div>
</template>
