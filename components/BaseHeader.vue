<script setup>
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>
<template>
  <div>
    <div class="flex items-center border-b border-slate-300 px-4 py-2 text-xs uppercase text-slate-400">
      <div class="flex-1">
        Elite Cup |
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['ml-1', { 'font-bold text-slate-900': locale.code === currentLocale }]"
        >
          {{ locale.code }}
        </NuxtLink>
      </div>

      <div class="space-x-2">
        <NuxtLink to="https://www.instagram.com/elitecup.eu/" target="_blank">
          <Icon name="cib:instagram" />
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/elitecup" target="_blank">
          <Icon name="cib:facebook" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between py-8">
      <NuxtLink :to="localePath('/')">
        <img src="~/assets/images/elite_cup_logo.svg" alt="Elite Cup" class="h-16" />
      </NuxtLink>
      <div class="flex items-center px-4 gap-8">
        <img src="~/assets/images/Bauer-logo-black.svg" alt="Marczi Skate" class="h-10 sm:h-16 object-contain" />
        <img src="~/assets/images/MS_logo.webp" alt="Marczi Skate" class="h-10 sm:h-16 object-contain" />
      </div>
    </div>
  </div>
</template>
