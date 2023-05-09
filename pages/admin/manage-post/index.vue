<script setup>
import { format, parseISO } from 'date-fns';

definePageMeta({
  middleware: ['auth'],
  key: 'admin/manage-news',
});

const columns = {
  title: {
    label: 'admin.table.gameName.short',
    tooltip: 'admin.table.gameName.tooltip',
    class: 'text-left font-bold',
  },
  locale: {
    label: 'admin.table.videoUrl.short',
    tooltip: 'admin.table.videoUrl.tooltip',
    class: 'text-left truncate',
  },
  published_at: {
    label: 'admin.table.videoUrl.short',
    tooltip: 'admin.table.videoUrl.tooltip',
    class: 'text-left truncate',
  },
  is_active: {
    label: 'admin.table.videoUrl.short',
    tooltip: 'admin.table.videoUrl.tooltip',
    class: 'text-left truncate',
  },
  action: {
    label: 'admin.table.action.short',
    tooltip: 'admin.table.action.tooltip',
    class: 'w-[120px] text-right',
  },
};

const limit = 12;
const page = ref(0);

const localePath = useLocalePath();
const { from, to } = usePagination(page, limit);

const { data: posts } = await useFetch('/api/admin/posts', {
  query: { from: from, to: to },
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

function onDelete({id}) {
  console.log('DELETE:', id)
}
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

    <div class="rounded-lg bg-white shadow-sm w-full overflow-hidden">
      <div class="w-full overflow-x-auto">
        <DataTable :rows="posts.posts || []" :columns="columns">
          <template #cell-title="{ row }">
            <p>{{ row.title }}</p>
            <p class="text-slate-400 text-sm font-normal">{{ row.created_at }}</p>
          </template>

          <template #cell-published_at="{ row }">
            <p class="bg-green-500 rounded-full text-xs text-white text-center">Published</p>
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
    </div>
  </div>
</template>
