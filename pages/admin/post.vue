<script setup>
import { ConfirmPromise } from '~/components/Form/Confirm.vue';

definePageMeta({
  // layout: 'admin',
  // middleware: ['auth'],
  key: 'admin/manage-news'
});

const onCreateNew = () => {
  ConfirmPromise.start();
};
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>
      <FormButton variant="secondary" @click="onCreateNew">
        {{ $t('admin.common.new') }}
      </FormButton>
    </div>

    <div class="rounded-lg bg-white shadow-sm p-4 w-full">
      <p class="text-xl font-bold p-8 uppercase">Under Construction!</p>
    </div>
  </div>
</template>
