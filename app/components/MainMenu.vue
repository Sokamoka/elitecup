<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const isMenuOpen = ref<boolean>(false);

const { t } = useI18n();
const localePath = useLocalePath();

const isMiddleScreen = useMediaQuery('(min-width: 640px)');
watch(isMiddleScreen, (isMiddleScreen) => {
  if (isMiddleScreen) {
    isMenuOpen.value = false;
  }
});

const ui = {
  link: 'text-white text-base uppercase hover:before:bg-red-500 hover:text-white data-[state=open]:text-white data-[state=open]:before:bg-red-500 data-[active]:before:bg-red-500',
  childLink: 'text-base data-[active]:text-red-500',
};

const items = ref<NavigationMenuItem[]>([
  {
    label: t('menu.news'),
    to: localePath('/news'),
  },
  {
    label: 'U-18',
    children: [
      {
        label: 'Turnaments',
        to: localePath('/u18/tournaments'),
      },
      {
        label: 'Standings',
        to: localePath('/u18/standings'),
      },
      {
        label: 'Statistics',
        to: localePath('/u18/statistics'),
      },
      {
        label: t('menu.regulations'),
        to: '/files/Cup_reg_U18_24_25.pdf',
        target: '_blank',
      },
      {
        label: 'Season 2024-2025',
        to: localePath('/u18/archive/season-2024-2025'),
      },
      {
        label: 'Season 2023-2024',
        to: localePath('/u18/archive/season-2023-2024'),
      },
      {
        label: 'Season 2022-2023',
        to: localePath('/u18/archive/season-2022-2023'),
      },
    ],
  },
  {
    label: 'U-16',
    children: [
      {
        label: 'Turnaments',
        to: localePath('/u16/tournaments'),
      },
      {
        label: 'Standings',
        to: localePath('/u16/standings'),
      },
      {
        label: 'Statistics',
        to: localePath('/u16/statistics'),
      },
      {
        label: t('menu.regulations'),
        to: '/files/Cup_reg_U16_24_25_v2.pdf',
        target: '_blank',
      },
      {
        label: 'Season 2024-2025',
        to: localePath('/u16/archive/season-2024-2025'),
      },
      {
        label: 'Season 2023-2024',
        to: localePath('/u16/archive/season-2023-2024'),
      },
      {
        label: 'Season 2022-2023',
        to: localePath('/u16/archive/season-2022-2023'),
      },
    ],
  },
  {
    label: 'Schedule',
    to: localePath('/schedule'),
  },
  {
    label: 'Videos',
    to: localePath('/videos'),
  },
  {
    label: 'Project',
    to: localePath('/page/project'),
  },
  {
    label: 'Contacts',
    to: localePath('/page/contacts'),
  },
]);
</script>

<template>
  <div class="bg-slate-900 px-2 rounded-lg">
    <UNavigationMenu :items="items" :ui="ui" class="w-full" />
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.router-link-active {
  @apply bg-red-500 text-white;
}
</style>
