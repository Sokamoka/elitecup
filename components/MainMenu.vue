<script setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col sm:flex-row bg-gray-900 px-4 rounded-lg text-white font-bold">
    <NuxtLink :to="localePath('/news')" class="p-3 uppercase">{{ $t('menu.news') }}</NuxtLink>
    <HeadlessMenu as="div" class="relative inline-block text-left" v-slot="{ open }">
      <HeadlessMenuButton
        :class="[
          'group inline-flex items-center p-3 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase',
          { 'bg-gray-600': open },
        ]"
      >
        <span>U-18</span>
        <Icon name="ic:baseline-arrow-drop-down" />
      </HeadlessMenuButton>
      <HeadlessMenuItems
        class="relative sm:absolute -left-2 w-full sm:w-56 origin-top-right divide-y divide-gray-100 bg-gray-700 shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              Schedule
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
              Standings
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
              Statistics
            </NuxtLink>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </HeadlessMenu>
    
    <HeadlessMenu as="div" class="relative inline-block text-left" v-slot="{ open }">
      <HeadlessMenuButton
        :class="[
          'group inline-flex items-center p-3 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase',
          { 'bg-gray-600': open },
        ]"
      >
        <span>U-16</span>
        <Icon name="ic:baseline-arrow-drop-down" />
      </HeadlessMenuButton>
      <HeadlessMenuItems
        class="relative sm:absolute -left-2 w-full sm:w-56 origin-top-right divide-y divide-gray-100 bg-gray-700 shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              Games
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
              Standings
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
</template>

<style scoped>
.router-link-active {
  @apply bg-red-500 text-white;
}
</style>
