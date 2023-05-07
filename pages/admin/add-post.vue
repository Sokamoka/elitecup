<script setup lang="ts">
// const { $quill } = useNuxtApp();
import { Quill } from '@vueup/vue-quill';

const state = reactive({
  title: '',
  lead: null,
  content: null,
});

const quill = new Quill();

// console.dir($quill);
// onMounted(() => console.log($quill));
const html = computed(() => {
  if (!state.content) return '';
  return quill.clipboard;
});
</script>
<template>
  <div class="py-8">
    <div class="flex gap-2 items-center mb-4">
      <h1 class="flex-1 text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>
      <FormButton variant="secondary" size="sm">
        {{ $t('admin.common.save') }}
      </FormButton>
      <FormButton variant="primary" size="sm">
        {{ $t('admin.common.publish') }}
      </FormButton>
    </div>

    <div class="flex flex-col-reverse md:flex-row gap-4 rounded-lg bg-white shadow-sm p-4 w-full">
      <div class="w-full md:w-3/5">
        <fieldset>
          <label class="text-xs font-semibold uppercase" for="title">Title:</label>
          <FormInput id="title" :has-error="false" />
          <!-- <p v-if="v$.password.$error" class="form-error">
            {{ v$.password.$errors[0].$message }}
          </p> -->
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="lead">Lead</label>
          <!-- <FormInput id="lead" :has-error="false" /> -->
          <QuillEditor theme="snow" v-model:content="state.lead" />
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase">Content</label>
          <QuillEditor theme="snow" v-model:content="state.content" />

          <div ref="html" />
          <pre>
            {{ html }}
          </pre>
        </fieldset>
      </div>
      <div class="w-full md:w-2/5">
        <fieldset>
          <label class="text-xs font-semibold uppercase" for="slug">Slug</label>
          <FormInput id="slug" :has-error="false" />
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">Locale</label>
          <FormInput id="locale" :has-error="false" />
        </fieldset>
      </div>
    </div>
  </div>
</template>
