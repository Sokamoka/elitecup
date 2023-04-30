<script setup lang="ts">
import { tabsContext, ApiElement } from './internal';

const tabPanels = ref<ApiElement[]>([]);
const isFakeTabVisible = ref<boolean>(true);

const api = {
  add: (element: ApiElement) => {
    tabPanels.value.push(element);
  },
};

provide(tabsContext, api);

onMounted(() => (isFakeTabVisible.value = false));
</script>

<template>
  <HeadlessTabGroup>
    <HeadlessTabList>
      <HeadlessTab v-if="isFakeTabVisible" />

      <template v-for="tab in tabPanels" :key="tab.title">
        <HeadlessTab as="template" v-slot="{ selected }">
          <button
            type="button"
            :class="[
              'uppercase px-4 py-3 font-bold outline-none border-b-4',
              { 'border-red-500 text-slate-900': selected, ' border-transparent text-slate-400': !selected },
            ]"
          >
            {{ tab.title }}
          </button>
        </HeadlessTab>
      </template>
    </HeadlessTabList>

    <HeadlessTabPanels>
      <slot />
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
