<script setup>
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>
<template>
  <div>
    <div class="flex items-center border-b border-slate-300 px-4 py-2 text-xs uppercase text-slate-400">
      <div class="flex-1">
        Elite Cup
        <!-- <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['ml-1', { 'font-bold text-slate-900': locale.code === currentLocale }]"
        >
          {{ locale.code }}
        </NuxtLink> -->
      </div>

      <div class="space-x-2">
        <NuxtLink to="https://www.instagram.com/elitecup.eu/" target="_blank">
          <Icon name="cib:instagram" />
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/elitecup" target="_blank">
          <Icon name="cib:facebook" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/@elitecup2514" target="_blank">
          <Icon name="cib:youtube" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between py-5">
      <NuxtLink :to="localePath('/')">
        <img src="~/assets/images/elite_cup_logo.svg" alt="Elite Cup" class="h-20" />
      </NuxtLink>
      <div class="flex items-center px-4 gap-8">
        <a href="https://www.marcziskate.hu/" target="_blank"
          ><img src="~/assets/images/Bauer-logo-black.svg" alt="Marczi Skate" class="h-10 sm:h-16 object-contain"
        /></a>
        <a href="https://www.marcziskate.hu/" target="_blank"
          ><img src="~/assets/images/hockeylab-logo.svg" alt="Marczi Skate" class="h-10 sm:h-16 object-contain"
        /></a>
      </div>
    </div>
  </div>
</template>
