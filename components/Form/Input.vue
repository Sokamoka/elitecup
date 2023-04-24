<script lang="ts">
export default {
  name: 'FormInput',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [Number, String],
      default: '',
    },
  },

  setup(props, { emit }) {
    const { modelValue } = useVModels(props, emit);

    return {
      modelValue,
    };
  },
};
</script>

<template>
  <div
    class="flex items-center bg-slate-50 border border-slate-300 text-slate-500 focus-within:border-slate-700 focus-within:text-slate-700 rounded-lg w-full"
  >
    <slot name="prepend" />
    <input v-model="modelValue" class="p-2 outline-none flex-1 w-full bg-transparent" v-bind="$attrs" />
    <slot name="append" />
  </div>
</template>
