<script setup lang="ts">
import { useAttrs } from 'vue';
import { useVModel } from '@vueuse/core';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

interface Props {
  modelValue: string | Date | null;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
});
const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

const value = useVModel(props, 'modelValue', emit);
</script>

<template>
  <DatePicker v-model="value" v-bind="attrs" is24hr expanded borderless />
</template>
