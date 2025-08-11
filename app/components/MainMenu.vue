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
  link: 'text-white text-base uppercase',
  childLink: 'text-base',
  // content: 'bg-gray-900 border-gray-900',
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
        to: localePath('/files/Cup_reg_U18_24_25.pdf'),
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
        to: localePath('/files/Cup_reg_U16_24_25_v2.pdf'),
      },
      {
        label: 'Season 2024-2025',
        to: localePath('/u16/archive/season-2024-2025'),
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
  <div class="bg-slate-900 px-2 rounded-lg text-white font-bold">
    <a href="#" @click.prevent="isMenuOpen = !isMenuOpen" class="flex items-center py-3 px-2 sm:hidden">
      <Icon name="ic:baseline-menu" class="text-2xl" />
    </a>
    <div :class="['grid transition-all duration-200 ease-in-out', isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]']">
      <div class="flex flex-col sm:flex-row overflow-hidden sm:overflow-visible">
        <NuxtLink :to="localePath('/news')" class="p-3 uppercase">{{ $t('menu.news') }}</NuxtLink>
        <HeadlessMenu as="div" class="relative inline-block text-left" v-slot="{ open }">
          <HeadlessMenuButton
            :class="[
              'group inline-flex items-center p-3 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase',
              { 'bg-slate-600': open },
            ]"
          >
            <span>U-18</span>
            <Icon name="ic:baseline-arrow-drop-down" />
          </HeadlessMenuButton>
          <HeadlessMenuItems
            class="relative sm:absolute sm:-left-2 w-full sm:w-56 origin-top-right divide-y divide-slate-100 bg-slate-700 shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          >
            <div class="px-1 py-1">
              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u18/schedule')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.schedule') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u18/standings')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.standings') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u18/statistics')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.statistics') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u18/archive')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.archive') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  to="/files/Cup_reg_U18_24_25.pdf"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('menu.regulations') }}
                </NuxtLink>
              </HeadlessMenuItem>
            </div>
          </HeadlessMenuItems>
        </HeadlessMenu>

        <HeadlessMenu as="div" class="relative inline-block text-left" v-slot="{ open }">
          <HeadlessMenuButton
            :class="[
              'group inline-flex items-center p-3 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase',
              { 'bg-slate-600': open },
            ]"
          >
            <span>U-16</span>
            <Icon name="ic:baseline-arrow-drop-down" />
          </HeadlessMenuButton>
          <HeadlessMenuItems
            class="relative sm:absolute sm:-left-2 w-full sm:w-56 origin-top-right divide-y divide-slate-100 bg-slate-700 shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          >
            <div class="px-1 py-1">
              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u16/games')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.games') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u16/standings')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Standings
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u16/statistics')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.statistics') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  :to="localePath('/u16/archive')"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  {{ $t('menu.archive') }}
                </NuxtLink>
              </HeadlessMenuItem>

              <HeadlessMenuItem v-slot="{ active }">
                <NuxtLink
                  to="/files/Cup_reg_U16_24_25_v2.pdf"
                  :class="[
                    active ? 'text-red-500' : 'text-white-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  target="_blank"
                  rel="noopener"
                >
                  {{ $t('menu.regulations') }}
                </NuxtLink>
              </HeadlessMenuItem>
            </div>
          </HeadlessMenuItems>
        </HeadlessMenu>

        <NuxtLink :to="localePath('/schedule')" class="p-3 uppercase">{{ $t('menu.schedule') }}</NuxtLink>
        <NuxtLink :to="localePath('/videos')" class="p-3 uppercase">{{ $t('menu.videos') }}</NuxtLink>
        <NuxtLink :to="localePath('/page/project')" class="p-3 uppercase">{{ $t('menu.project') }}</NuxtLink>
        <NuxtLink :to="localePath('/page/contacts')" class="p-3 uppercase">{{ $t('menu.contacts') }}</NuxtLink>
      </div>
    </div>
  </div>
  <!-- before:bg-red-500 -->
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
