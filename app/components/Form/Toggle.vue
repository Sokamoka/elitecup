<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const { modelValue } = useVModels(props, emit);
</script>

<template>
  <label class="flex w-full justify-between">
    <slot name="label">
      <label class="text-base font-medium text-slate-500 normal-case mr-2">{{ label }}</label>
    </slot>
    <input
      v-model="modelValue"
      type="checkbox"
      class="appearance-none w-10 focus:outline-none checked:bg-green-500 h-6 bg-slate-300 rounded-full before:inline-block before:rounded-full before:bg-slate-500 checked:before:bg-white before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-1 before:mt-1"
    />
  </label>
</template>
