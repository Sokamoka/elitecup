<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { snakeKeys, toSnakeCase } from 'js-convert-case';
import { omit } from 'ramda';
import { ConfirmPromise } from '~/components/Form/Confirm.vue';
import { Database } from '~/types/Database';
import { ToastPromise } from '~/components/Form/Toast.vue';
import { convertPostResponse } from '~/utils/posts';

definePageMeta({
  middleware: ['auth'],
  key: 'admin/manage-news',
});

const isSlugOpen = ref<boolean>(false);
const route = useRoute();
const { t } = useI18n();
const client = useSupabaseClient<Database>();

const id = route.params.id;

const state = reactive({
  id: null,
  title: '',
  slug: '',
  lead: '',
  content: '',
  locale: 'hu',
  isActive: false,
  createdAt: null,
  publishedAt: null,
});

const { data, error, execute } = await useFetch('/api/admin/post', {
  query: { id },
  immediate: false,
});

if (id !== 'new') execute();

const rules = {
  title: { required },
  slug: { required },
};

const v$ = useVuelidate(rules, state);

watch(data, (response) => {
  convertPostResponse(response, state);
});
watch(error, (error) => {
  ToastPromise.start(error, 'error');
});

async function save() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  const payload = snakeKeys({ ...omit(['createdAt', 'publishedAt', 'id'], state), ...(id !== 'new' && { id }) });
  const { error, data } = await client.from('posts').upsert(payload).select().single();
  if (error) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
    return;
  }
  state.createdAt = data.created_at;
  state.id = data.id;
  ToastPromise.start('Save success!');
  return;
}

function onTitleChange() {
  state.slug = toSnakeCase(state.title);
}

function formatDateTime(date: string | null) {
  if (!date) return '';
  return toDefaultDateTime(new Date(date), 'hu-HU');
}

async function onPublishPost() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  const result = await ConfirmPromise.start('Are you sure you want to publish this post?');
  if (!result) return;
  if (!state.id) {
    await save();
  }
  const { error, data } = await client
    .from('posts')
    .update({ published_at: new Date(), is_active: true })
    .eq('id', state.id)
    .select('published_at, is_active')
    .single();
  if (error) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
    return;
  }
  state.publishedAt = data.published_at;
  state.isActive = data.is_active;
  ToastPromise.start('Publish success!');
}

async function onActivate(value: boolean) {
  const { error } = await client.from('posts').update({ is_active: value }).eq('id', state.id);
  if (error) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
    return;
  }
  ToastPromise.start('Activation changed!');
}
</script>
<template>
  <div class="py-8">
    <div class="flex flex-col sm:flex-row gap-2 items-center mb-4">
      <h1 class="flex-1 text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>
      <div v-if="state.publishedAt">
        <FormToggle v-model="state.isActive" label="Active" @update:model-value="onActivate" />
      </div>
      <FormButton v-else variant="primary" size="sm" @click="onPublishPost">
        {{ $t('admin.common.publish') }}
      </FormButton>

      <FormButton
        tag="a"
        :href="`/news/${state.slug}?preview=true`"
        target="_blank"
        variant="outlined"
        size="sm"
        class="w-full sm:w-auto"
      >
        {{ $t('admin.common.preview') }}
      </FormButton>

      <FormButton variant="secondary" size="sm" class="w-full sm:w-auto" @click="save">
        {{ $t('admin.common.save') }}
      </FormButton>
    </div>

    <div class="flex flex-col gap-4 rounded-lg bg-white shadow-sm p-4 w-full">
      <div class="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">Created At</label>
          <p class="text-sm text-slate-500 bg-slate-100 p-3 rounded-md">
            <template v-if="state.createdAt">
              {{ formatDateTime(state.createdAt) }}
            </template>
            <template v-else> New post </template>
          </p>
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">Published At</label>
          <p class="text-sm text-slate-500 bg-slate-100 p-3 rounded-md">
            <template v-if="state.publishedAt">
              {{ formatDateTime(state.publishedAt) }}
            </template>
            <template v-else> Not published </template>
          </p>
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">Locale</label>
          <FormInput id="locale" v-model="state.locale" :has-error="false" />
        </fieldset>
      </div>

      <hr />

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="title">Title</label>
        <FormInput id="title" v-model="state.title" :has-error="v$.title.$error" @change="onTitleChange" />
        <p v-if="v$.title.$error" class="form-error">
          {{ v$.title.$errors[0].$message }}
        </p>
        <div>
          <div class="flex items-center">
            <div class="flex-1 text-slate-500 text-sm font-medium truncate">
              Slug: https://elitecup.eu/news/{{ state.slug }}
            </div>
            <FormButton variant="link" size="xs" @click="isSlugOpen ? (isSlugOpen = false) : (isSlugOpen = true)">
              Edit
            </FormButton>
          </div>
          <div
            :class="[
              'grid transition-all duration-200 ease-in-out',
              isSlugOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ]"
          >
            <div class="overflow-hidden">
              <label class="text-xs font-semibold uppercase" for="slug">Slug</label>
              <FormInput
                id="slug"
                v-model="state.slug"
                :has-error="v$.slug.$error"
                :aria-hidden="!isSlugOpen"
                :tabindex="isSlugOpen ? 0 : -1"
              />
              <p v-if="v$.slug.$error" class="form-error">
                {{ v$.slug.$errors[0].$message }}
              </p>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="lead">Lead</label>
        <FormEditor v-model="state.lead" />
      </fieldset>

      <fieldset>
        <label class="text-xs font-semibold uppercase">Content</label>
        <FormEditor v-model="state.content" :height="400" />
      </fieldset>
    </div>

    <div class="flex items-center justify-end gap-2 py-4">
      <div v-if="state.publishedAt">
        <FormToggle v-model="state.isActive" label="Active" @update:model-value="onActivate" />
      </div>
      <FormButton v-else variant="primary" size="sm" @click="onPublishPost">
        {{ $t('admin.common.publish') }}
      </FormButton>

      <FormButton tag="a" :href="`/news/${state.slug}?preview=true`" target="_blank" variant="outlined" size="sm">
        {{ $t('admin.common.preview') }}
      </FormButton>

      <FormButton variant="secondary" size="sm" @click="save">
        {{ $t('admin.common.save') }}
      </FormButton>
    </div>
  </div>
</template>
