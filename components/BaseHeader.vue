<script setup>
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>
<template>
  <div>
    <div class="flex items-center justify-between border-b border-gray-300 px-4 py-2 text-xs uppercase text-gray-400">
      <div>
        Elite Cup |
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['ml-1', { 'font-bold text-gray-900': locale.code === currentLocale }]"
        >
          {{ locale.code }}
        </NuxtLink>
      </div>

      <div class="space-x-2">
        <Icon name="cib:instagram" />
        <Icon name="cib:facebook" />
      </div>
    </div>
    <div class="flex justify-between py-8">
      <NuxtLink :to="localePath('/')">
        <img src="~/assets/images/elite_cup_logo.svg" alt="Elite Cup" class="h-16" />
      </NuxtLink>
      <div>Supporters</div>
    </div>
  </div>
</template>
