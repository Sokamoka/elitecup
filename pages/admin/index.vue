<script setup>
definePageMeta({
  // layout: 'admin',
  // middleware: ['auth'],
  key: 'admin/dashboard'
});
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold leading-10 uppercase">
        {{ $t('admin.title.dashboard') }}
      </h1>
      <!-- <FormButton variant="secondary" @click="onCreateNew">
        {{ $t('admin.common.new') }}
      </FormButton> -->
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row w-full">
      <MainBox title="Manage Videos" class="bg-slate-50 border-slate-300 shadow-sm">
        <template #header-append>
          <NuxtLink :to="localePath('/admin/videos')" v-slot="{ navigate }" custom>
            <FormButton variant="link" class="text-sm -mr-4" @click="navigate">{{ $t('common.edit') }}</FormButton>
          </NuxtLink>
        </template>
        <Videos />
      </MainBox>
    </div>
  </div>
</template>
