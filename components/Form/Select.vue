<script setup lang="ts">
export interface Props {
  modelValue?: string | null;
  items?: any[];
  displayValue?: (item: any) => string;
  hasError?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  items: () => [],
  displayValue: (item: any) => item,
  hasError: false,
});

const emit = defineEmits(['update:modelValue', 'change', 'select']);

const value = useVModel(props, 'modelValue', emit);
</script>
<template>
  <HeadlessListbox v-model="value">
    <div class="relative">
      <HeadlessListboxButton
        :class="[
          'relative w-full cursor-default overflow-hidden rounded-lg text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-opacity-75 focus-visible:rounded-lg focus-visible:ring-offset-2 focus-visible:ring-offset-slate-400',
          hasError ? 'border-red-500 bg-red-100' : 'border-slate-300 bg-slate-50',
        ]"
      >
        <span class="block truncate p-2 text-slate-500">{{ displayValue(modelValue) }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <Icon name="ic:twotone-arrow-drop-down" class="h-5 w-5 text-slate-400" aria-hidden="true" />
        </span>
      </HeadlessListboxButton>
      <HeadlessTransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <HeadlessListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <HeadlessListboxOption
            v-for="item in items"
            as="template"
            :key="item.value"
            :value="item.value"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4"
              :class="{
                'bg-slate-500 text-white': active,
                'text-slate-900': !active,
              }"
            >
              <slot :item="item" :selected="selected" :active="active">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ item.name }}
                </span>
              </slot>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-white': active, 'text-green-500': !active }"
              >
                <Icon name="ic:twotone-check" class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </HeadlessTransitionRoot>
    </div>
  </HeadlessListbox>
</template>
