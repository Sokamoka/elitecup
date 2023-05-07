<script setup>
definePageMeta({
  // layout: 'admin',
  middleware: ['auth'],
  key: 'admin/manage-news',
});

const localePath = useLocalePath();
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>

      <NuxtLink :to="localePath('/admin/manage-post/new')" v-slot="{ navigate }" custom>
        <FormButton variant="secondary" size="sm" @click="navigate">
          {{ $t('admin.common.new') }}
        </FormButton>
      </NuxtLink>
    </div>

    <div class="rounded-lg bg-white shadow-sm p-4 w-full">
      <p class="text-xl font-bold p-8 uppercase">Under Construction!</p>
    </div>
  </div>
</template>
