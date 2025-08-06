<script lang="ts">
export default {
  name: 'FormInput',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [Number, String],
      default: '',
    },

    hasError: {
      type: Boolean,
      default: false,
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
    :class="[
      'flex items-center border rounded-lg w-full',
      hasError
        ? 'bg-red-100 border-red-500 text-red-500'
        : 'bg-slate-50 border-slate-300 text-slate-500 focus-within:border-slate-700 focus-within:text-slate-700',
    ]"
  >
    <slot name="prepend" />
    <input v-model="modelValue" class="p-2 outline-none flex-1 w-full bg-transparent" v-bind="$attrs" />
    <slot name="append" />
  </div>
</template>
