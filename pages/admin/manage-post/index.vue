<script setup>
import { refDefault, useStorage } from '@vueuse/core';
import { format, parseISO } from 'date-fns';
import { ConfirmPromise } from '~/components/Form/Confirm.vue';
import { ToastPromise } from '~/components/Form/Toast.vue';
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
// const localeFilter = ref(null);

const raw = useStorage('elitecup:admin:news');
const localeFilter = refDefault(raw, 'en');

const { from, to } = usePagination(page, limit);

const { data: posts, refresh } = await useFetch('/api/admin/posts', {
  query: { from, to, locale: localeFilter },
  transform: ({ posts, count }) => {
    return {
      posts: posts.map((post) => ({
        ...post,
        created_at: format(parseISO(post.created_at), 'yyyy, LLLL dd. HH:mm'),
        // created_at: toDefaultDateTime(parseISO(post.created_at)),
      })),
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

async function onDelete({ id, title }) {
  const result = await ConfirmPromise.start();
  if (!result) return;

  const { error } = await client.from('posts').delete().eq('id', id);
  if (error) {
    ToastPromise.start(error?.message, 'error');
    return;
  }
  refresh();
  ToastPromise.start(`${t('admin.messages.delete')} (${title})`);
}

function onPrev() {
  page.value--;
}
function onNext() {
  page.value++;
}

function onChangeFilter(value) {
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
        <button :class="{ 'text-slate-900': localeFilter === 'all' }" @click="onChangeFilter('all')">ALL</button>
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
        <DataTable :rows="posts.posts || []" :columns="columns">
          <template #cell-title="{ row }">
            <NuxtLink :to="localePath(`/admin/manage-post/${row.id}`)">
              {{ row.title }}
            </NuxtLink>
            <p class="text-slate-400 text-sm font-normal">{{ row.created_at }}</p>
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
          {{ $t('admin.common.pageRange', [pageRange[0], pageRange[1], posts?.count]) }}
        </div>
        <div>
          <button type="button" class="p-2 disabled:text-slate-400" :disabled="page === 0" @click="onPrev">Prev</button>
          <button type="button" class="p-2 disabled:text-slate-400" :disabled="page === maxPage" @click="onNext">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
