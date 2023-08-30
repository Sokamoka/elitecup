<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { snakeKeys, toKebabCase } from 'js-convert-case';
import { omit } from 'ramda';
import { addHours, getHours, isBefore, isToday } from 'date-fns';
import { ConfirmPromise } from '~/components/Form/Confirm.vue';
import { ToastPromise } from '~/components/Form/Toast.vue';
import { ModalPromise } from '~/components/Form/Modal.vue';
import { convertPostResponse } from '~/utils/posts';
import { Database } from '~/types/Database';
import { getFileName } from '~/utils/storage';
import { News } from '~/types/News';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

definePageMeta({
  middleware: ['auth'],
  key: 'admin/manage-news',
});

const isSlugOpen = ref<boolean>(false);
const route = useRoute();
const { t, locales } = useI18n();
const localePath = useLocalePath();
const client = useSupabaseClient<Database>();

const id = route.params.id;

const state = reactive({
  id: null,
  title: '',
  slug: '',
  lead: '',
  content: '',
  locale: 'en',
  image: '',
  isActive: false,
  createdAt: null,
  publishedAt: null,
});

const { data, error, execute } = await useFetch<News>('/api/admin/post', {
  query: { id },
  immediate: false,
});

if (id !== 'new') execute();

const rules = {
  title: { required },
  slug: { required },
};

const calendarTimeRules = ref({
  // hours: (hour: number, { date }) => {
  //   if (isToday(date)) {
  //     if (hour < getHours(addHours(new Date(), 1))) return false;
  //   }
  //   return true;
  // },
  minutes: 0,
  seconds: 0,
});

const scheduledPublishDateTime = ref(initialScheduledPublishDate());

const v$ = useVuelidate(rules, state);

const localeItems = computed(() =>
  locales.value.map((locale: { code: string }) => ({ value: locale.code, name: locale.code.toUpperCase() }))
);

watch(data, (data) => {
  convertPostResponse(data || {}, state);
});
watch(error, (error: any) => {
  if (!error) return;
  ToastPromise.start(error, 'error');
});

async function save() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  const payload = snakeKeys({
    ...omit(['createdAt', 'publishedAt', 'id', 'image'], state),
    ...(Boolean(state.id) && { id: state.id }),
  });
  const { error, data } = await client.from('posts').upsert(payload).select().single();
  if (error) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
    return;
  }
  state.createdAt = data.created_at;
  state.id = data.id;
  ToastPromise.start(t('admin.messages.save'));
  return;
}

function onTitleChange() {
  state.slug = toKebabCase(state.title);
}

function formatDateTime(date: string | null) {
  if (!date) return '';
  return toDefaultDateTime(new Date(date), 'hu-HU');
}

async function onOpenScheduleModal() {
  ModalPromise.start('Title');
}

async function onPublishPostImmediate() {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  const result = await ConfirmPromise.start(t('admin.messages.publishDialog'));
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
  ToastPromise.start(t('admin.messages.publish'));
}

async function onActivate(value: boolean) {
  const { error } = await client.from('posts').update({ is_active: value }).eq('id', state.id);
  if (error) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
    return;
  }
  ToastPromise.start(t('admin.messages.activation'));
}

async function onImageSelect(event?: HTMLElementEvent<HTMLInputElement>): Promise<void> {
  let files = event?.target?.files;
  if (!files) return;
  let file = files[0];
  if (state.image) {
    await deleteImageFile([state.image]);
  }
  state.image = URL.createObjectURL(file);
  try {
    const { publicUrl } = await uploadImage(file);
    await client.from('posts').update({ image: publicUrl }).eq('id', state.id);
    state.image = publicUrl;
    ToastPromise.start('Image added!');
  } catch (error: any) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
  }
}

async function uploadImage(file: File) {
  let uuid = self.crypto.randomUUID();
  let fileExtension = file.name.split('.').pop();
  const fileName = `public/post/${uuid}.${fileExtension}`;
  const { error } = await client.storage.from('posts').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) {
    throw new Error(error.message);
  }

  const { data: publicUrl } = client.storage.from('posts').getPublicUrl(fileName);
  return publicUrl;
}

async function onDeleteImage() {
  const result = await ConfirmPromise.start(t('admin.messages.deleteImageDialog'));
  if (!result) return;

  try {
    await deleteImageFile([state.image]);
    await deleteImageFromDb('');
    state.image = '';
    ToastPromise.start(t('admin.messages.deleteImage'));
  } catch (error: any) {
    ToastPromise.start(useDBError(error, 'post', t), 'error');
  }
}

async function deleteImageFile(files: [string]) {
  const fileNames = files.map((file) => getFileName(file));
  const { data, error } = await client.storage.from('posts').remove(fileNames);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

async function deleteImageFromDb(url: string) {
  const { data, error } = await client.from('posts').update({ image: url }).eq('id', state.id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

async function onPublishPostScheduled(resolve: (v: boolean) => void) {
  // if(isBefore(scheduledPublishDateTime.value, new Date())) return;
  await client.from('posts').update({ scheduled_at: scheduledPublishDateTime.value }).eq('id', state.id);
  resolve(true);
}

function displayLocale(value: string) {
  return localeItems.value.find((locale: Ref<string>) => locale.value === value)?.name ?? '';
}
</script>
<template>
  <div class="py-8">
    <div class="flex flex-col sm:flex-row gap-2 items-center mb-4">
      <NuxtLink :to="localePath('/admin/manage-post')" class="text-slate-500 hover:text-slate-900">
        <Icon name="ic:round-arrow-back-ios" class="text-lg -mt-0.5" />
      </NuxtLink>
      <h1 class="flex-1 text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>
      <div v-if="state.publishedAt">
        <FormToggle v-model="state.isActive" :label="t('admin.managePosts.active')" @update:model-value="onActivate" />
      </div>

      <FormButton v-else variant="primary" size="sm" @click="onPublishPostImmediate">
        {{ $t('admin.common.publish') }}
      </FormButton>

      <FormButton variant="primary" size="sm" @click="onOpenScheduleModal">
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

    <FormModal #default="{ resolve }">
      <FormDatePicker
        v-model="scheduledPublishDateTime"
        mode="dateTime"
        :time-accuracy="1"
        :min-date="new Date()"
        :rules="calendarTimeRules"
        is-required
      ></FormDatePicker>
      <div class="p-3 text-right border-t border-slate-300">
        <FormButton variant="primary" size="sm" @click="onPublishPostScheduled(resolve)">
          {{ $t('admin.common.publish') }}
        </FormButton>
      </div>
    </FormModal>

    <div class="flex flex-col gap-4 rounded-lg bg-white shadow-sm p-4 w-full">
      <div class="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">{{ t('admin.managePosts.createdAt') }}</label>
          <p class="text-sm text-slate-500 bg-slate-100 p-3 rounded-md">
            <template v-if="state.createdAt">
              {{ formatDateTime(state.createdAt) }}
            </template>
            <template v-else> {{ t('admin.managePosts.newPost') }} </template>
          </p>
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">{{ t('admin.managePosts.publishedAt') }}</label>
          <p class="text-sm text-slate-500 bg-slate-100 p-3 rounded-md">
            <template v-if="state.publishedAt">
              {{ formatDateTime(state.publishedAt) }}
            </template>
            <template v-else> {{ t('admin.managePosts.notPublished') }} </template>
          </p>
        </fieldset>

        <fieldset>
          <label class="text-xs font-semibold uppercase" for="locale">{{ t('admin.managePosts.locale') }}</label>
          <FormSelect id="locale" v-model="state.locale" :display-value="displayLocale" :items="localeItems" />
        </fieldset>
      </div>

      <hr />

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="locale">{{ t('admin.managePosts.mainImage') }}</label>

        <div
          v-if="id === 'new' && !state.id"
          class="p-4 text-amber-600 text-sm bg-amber-100 border border-amber-300 rounded-lg"
        >
          <p class="font-bold uppercase text-amber-700">{{ t('admin.common.warning') }}</p>
          <p>{{ t('admin.messages.saveFirst') }}</p>
        </div>

        <div v-else class="flex flex-col sm:flex-row gap-4">
          <div
            class="flex items-center justify-center bg-slate-200 border border-dashed border-slate-400 rounded-lg overflow-hidden w-full max-w-xs aspect-video"
          >
            <img v-if="state.image" :src="state.image" class="object-cover aspect-video" />
            <Icon v-else name="ic:twotone-photo-size-select-actual" class="opacity-30 text-6xl text-slate-400" />
          </div>
          <div class="flex flex-col gap-4">
            <input type="file" accept=".jpg, .jpeg, .png, .webp" class="button" @change="onImageSelect" />
            <FormButton @click="onDeleteImage" :disabled="!state.image">
              {{ t('admin.managePosts.deleteImage') }}
            </FormButton>
          </div>
        </div>
      </fieldset>

      <hr />

      <fieldset>
        <label class="text-xs font-semibold uppercase" for="title">{{ t('admin.managePosts.title') }}</label>
        <FormInput id="title" v-model="state.title" :has-error="v$.title.$error" @change="onTitleChange" />
        <p v-if="v$.title.$error" class="form-error">
          {{ v$.title.$errors[0].$message }}
        </p>
        <div>
          <div class="flex items-center">
            <div class="flex-1 text-slate-500 text-sm font-medium truncate">
              {{ t('admin.managePosts.slugHint') }}{{ state.slug }}
            </div>
            <FormButton variant="link" size="xs" @click="isSlugOpen ? (isSlugOpen = false) : (isSlugOpen = true)">
              {{ t('common.edit') }}
            </FormButton>
          </div>
          <div
            :class="[
              'grid transition-all duration-200 ease-in-out',
              isSlugOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            ]"
          >
            <div class="overflow-hidden">
              <label class="text-xs font-semibold uppercase" for="slug">{{ t('admin.managePosts.slug') }}</label>
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
        <label class="text-xs font-semibold uppercase" for="lead">{{ t('admin.managePosts.lead') }}</label>
        <FormEditor v-model="state.lead" />
      </fieldset>

      <fieldset>
        <label class="text-xs font-semibold uppercase">{{ t('admin.managePosts.content') }}</label>
        <FormEditor v-model="state.content" :height="250" />
      </fieldset>
    </div>

    <div class="flex items-center justify-end gap-2 py-4">
      <div v-if="state.publishedAt">
        <FormToggle v-model="state.isActive" label="Active" @update:model-value="onActivate" />
      </div>
      <FormButton v-else variant="primary" size="sm" @click="onPublishPostImmediate">
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
