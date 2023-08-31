<script setup lang="ts">
import { refDefault, useStorage } from '@vueuse/core';
import { format, isValid, parseISO } from 'date-fns';
import { ConfirmPromise } from '~/components/Form/Confirm.vue';
import { ToastPromise } from '~/components/Form/Toast.vue';
import { News } from '~/types/News';
// import { Database } from '~/types/Database';

definePageMeta({
  middleware: ['auth'],
  key: 'admin/news',
});

const columns = {
  title: {
    label: 'admin.table.title.short',
    tooltip: 'admin.table.title.tooltip',
    class: 'text-left font-bold',
  },
  locale: {
    label: 'admin.table.locale.short',
    tooltip: 'admin.table.locale.tooltip',
    class: 'w-[80px] text-center',
  },
  published_at: {
    label: 'admin.table.publishedAt.short',
    tooltip: 'admin.table.publishedAt.tooltip',
    class: 'w-[140px] text-center',
  },
  is_active: {
    label: 'admin.table.active.short',
    tooltip: 'admin.table.active.tooltip',
    class: 'w-[100px] text-center',
  },
  scheduled_at: {
    label: 'admin.table.active.short',
    tooltip: 'admin.table.active.tooltip',
    class: 'w-[140px] text-center',
  },
  action: {
    label: 'admin.table.action.short',
    tooltip: 'admin.table.action.tooltip',
    class: 'w-[120px] text-right',
  },
};

const { locales, t } = useI18n();
const localePath = useLocalePath();
const client = useSupabaseClient();

const limit = 12;
const page = ref(0);

const raw = useStorage('elitecup:admin:news', 'en');
const localeFilter = refDefault(raw, 'en');

const { from, to } = usePagination(page, limit);

const { data: posts, refresh } = await useFetch<{ posts: News[]; count: number }>('/api/admin/posts', {
  query: { from, to, locale: localeFilter },
  transform: ({ posts, count }) => {
    return {
      posts: posts.map((post) => {
        return {
          ...post,
          created_at: format(parseISO(post.created_at), 'yyyy, LLLL dd. HH:mm'),
          scheduled_at: isValid(parseISO(post.scheduled_at))
            ? format(parseISO(post.scheduled_at), 'yyyy, LLLL dd. HH:mm')
            : '',
        };
      }),
      count,
    };
  },
});

const maxPage = computed(() => {
  const count = posts.value?.count ?? 0;
  return Math.floor(count / limit);
});

const pageRange = computed(() => {
  const count = posts.value?.count ?? 0;
  return [page.value * limit + 1, Math.min((page.value + 1) * limit, count)];
});

async function onDelete({ id, title, image }: News) {
  const result = await ConfirmPromise.start();
  if (!result) return;

  try {
    await deletePost(id.toString());
    await deletePostImage([image]);
    refresh();
    ToastPromise.start(`${t('admin.messages.delete')} (${title})`);
  } catch (error: any) {
    ToastPromise.start(error.message, 'error');
  }
}

async function deletePost(id: string) {
  const { data, error } = await client.from('posts').delete().eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

async function deletePostImage(files: string[]) {
  const fileNames = files.map((file) => getFileName(file));
  const { data, error } = await client.storage.from('posts').remove(fileNames);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

function onPrev() {
  page.value--;
}
function onNext() {
  page.value++;
}

function onChangeFilter(value: string) {
  raw.value = value;
}
</script>

<template>
  <div class="py-8">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
      <h1 class="flex-1 text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.news') }}
      </h1>

      <div class="flex gap-2 text-xs text-slate-400 font-bold">
        <button :class="{ 'text-slate-900': localeFilter === 'all' }" @click="onChangeFilter('all')">
          {{ t('common.all') }}
        </button>
        <button
          v-for="locale in locales"
          :key="locale.code"
          :class="['uppercase', { 'text-slate-900': localeFilter === locale.code }]"
          @click="onChangeFilter(locale.code)"
        >
          {{ locale.code }}
        </button>
      </div>
      <NuxtLink :to="localePath('/admin/manage-post/new')" v-slot="{ navigate }" custom>
        <FormButton variant="secondary" size="sm" @click="navigate">
          {{ $t('admin.common.new') }}
        </FormButton>
      </NuxtLink>
    </div>

    <div class="rounded-lg bg-white shadow-sm w-full overflow-hidden">
      <div class="w-full overflow-x-auto">
        <DataTable :rows="posts?.posts || []" :columns="columns">
          <template #cell-title="{ row }">
            <NuxtLink :to="localePath(`/admin/manage-post/${row.id}`)" class="grid grid-cols-[3rem_1fr] grid-rows-2">
              <div class="row-span-2">
                <div
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 overflow-hidden shadow-inner"
                >
                  <img v-if="row.image" :src="row.image" class="object-cover aspect-square" />
                  <Icon v-else name="ic:twotone-photo-size-select-actual" class="opacity-30 text-lg" />
                </div>
              </div>
              <div>
                {{ row.title }}
              </div>
              <p class="text-slate-400 text-sm font-normal">{{ row.created_at }}</p>
            </NuxtLink>
          </template>

          <template #cell-published_at="{ row }">
            <span
              v-if="row.published_at"
              class="bg-red-500 rounded-full text-xs text-white text-center py-0.5 px-3 uppercase font-semibold"
            >
              Published
            </span>
            <span
              v-else
              class="bg-slate-300 rounded-full text-xs text-slate-500 text-center py-0.5 px-3 uppercase font-semibold"
              >Not Published</span
            >
          </template>

          <template #cell-scheduled_at="{ row }">
            <span
              v-if="row.scheduled_at"
              :title="row.scheduled_at"
              :class="[
                'rounded-full text-xs text-center py-0.5 px-3 uppercase font-semibold',
                row.scheduled_at && !row.published_at ? 'bg-amber-500 text-white ' : 'bg-slate-200 text-slate-400',
              ]"
            >
              Scheduled
            </span>
          </template>

          <template #cell-locale="{ row }">
            <Icon v-if="row.locale === 'en'" name="flagpack:us" />
            <Icon v-if="row.locale === 'hu'" name="flagpack:hu" />
          </template>

          <template #cell-is_active="{ row }">
            <Icon
              name="ic:twotone-check-circle"
              :class="['text-xl', row.is_active ? 'text-green-500' : 'text-slate-300']"
            />
          </template>

          <template #cell-action="{ row }">
            <div class="text-xl space-x-2">
              <a :href="`/news/${row.slug}?preview=true`" target="_blank" class="hover:text-red-500">
                <Icon name="ic:twotone-remove-red-eye" />
              </a>
              <nuxt-link :to="localePath(`/admin/manage-post/${row.id}`)" v-slot="{ navigate }" custom>
                <button type="button" class="hover:text-red-500" @click="navigate">
                  <Icon name="ic:twotone-edit" />
                </button>
              </nuxt-link>
              <button type="button" class="hover:text-red-500" @click="onDelete(row)">
                <Icon name="ic:twotone-delete" />
              </button>
            </div>
          </template>
        </DataTable>
      </div>

      <div class="flex items-center py-2 px-4 bg-slate-300 text-slate-500 font-bold text-xs uppercase">
        <div class="flex-1">
          {{ $t('admin.common.pageRangeNews', [pageRange[0], pageRange[1], posts?.count]) }}
        </div>
        <div>
          <button type="button" class="p-2 disabled:text-slate-400 uppercase" :disabled="page === 0" @click="onPrev">
            Prev
          </button>
          <button
            type="button"
            class="p-2 disabled:text-slate-400 uppercase"
            :disabled="page === maxPage"
            @click="onNext"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
