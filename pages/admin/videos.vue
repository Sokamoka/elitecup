<script setup lang="ts">
import { format, parseISO } from 'date-fns';
import { ModalPromise } from '~/components/Form/Modal.vue';
import { ToastPromise } from '~/components/Form/Toast.vue';
import { ConfirmPromise } from '~/components/Form/Confirm.vue';
import { Games } from '~/types/Games';
import { DataTableColumns } from '~/types/DataTable';
import { Database } from '~/types/Database';

type VideoItem = {
  id?: number | null | undefined;
  created_at?: string | null | undefined;
  game_id: number | null;
  game_name: string;
  game_date: string;
  url: string;
};

type VideoResponseItem = {
  id: number;
  created_at: string;
  game_id: number;
  game_name: string;
  game_date: string;
  url: string;
};

type VideoResponse = {
  videos: VideoResponseItem[];
  count: number;
};

interface UpdateState {
  id: number | null | undefined;
  gameId: number | null | undefined;
  url: string;
}

definePageMeta({
  // layout: 'admin',
  middleware: ['auth'],
  key: 'admin/videos',
});

const columns: DataTableColumns = {
  game_name: {
    label: 'admin.table.gameName.short',
    tooltip: 'admin.table.gameName.tooltip',
    class: 'text-left font-bold',
  },
  game_id: {
    label: 'admin.table.gameId.short',
    tooltip: 'admin.table.gameId.tooltip',
    class: 'w-[100px] text-left',
  },
  url: {
    label: 'admin.table.videoUrl.short',
    tooltip: 'admin.table.videoUrl.tooltip',
    class: 'w-[360px] text-left truncate',
  },
  action: {
    label: 'admin.table.action.short',
    tooltip: 'admin.table.action.tooltip',
    class: 'w-[120px] text-right',
  },
};

const { t } = useI18n();
const client = useSupabaseClient<Database>();

const limit = 12;
const page = ref(0);

const updateState: UpdateState = reactive({
  id: null,
  gameId: null,
  url: '',
});

const { from, to } = usePagination(page, limit);

const { data: games } = await useFetch<Games[]>('/api/schedule', {
  transform: (games) =>
    games.map((game) => ({
      ...game,
      fullName: `${game.homeTeamName} - ${game.awayTeamName}`,
      formattedGameDate: format(parseISO(game.gameDate), 'yyyy-MM-dd HH:mm'),
    })),

  onResponseError({ response }) {
    const errorMessage = response.statusText;
    ToastPromise.start(errorMessage, 'error');
  },
});

const { data: videos, refresh } = await useFetch<VideoResponse>('/api/admin/videos', {
  query: { from: from, to: to },
  transform: ({ videos, count }) => {
    return {
      videos: videos.map((game: VideoResponseItem) => ({
        ...game,
        game_date: format(parseISO(game.game_date), 'yyyy, LLLL dd. HH:mm'),
      })),
      count,
    };
  },
});

const maxPage = computed(() => {
  const count = videos.value?.count ?? 0;
  return Math.floor(count / limit);
});

const pageRange = computed(() => {
  const count = videos.value?.count ?? 0;
  return [page.value * limit + 1, Math.min((page.value + 1) * limit, count)];
});

const onAddVideo = async (payload: Pick<VideoItem, 'game_name' | 'game_date'>, resolve: (v: boolean) => void) => {
  const upsertData: VideoItem = {
    ...(updateState.id && { id: updateState.id }),
    game_id: updateState.gameId || null,
    url: updateState.url,
    ...payload,
  };
  const { error } = await client.from('videos').upsert(upsertData).select().single();

  if (error) {
    ToastPromise.start(useDBError(error, 'video', t), 'error');
    return;
  }
  refresh();
  resolve(true);
  ToastPromise.start(`${t('admin.messages.update')} (${payload.game_name})`);
};

const onEdit = ({ id, game_id, url }: VideoItem) => {
  updateState.id = id;
  updateState.gameId = game_id;
  updateState.url = url;
  ModalPromise.start(t('admin.manageVideo.modal.editVideo'));
};

const onDelete = async (payload: VideoItem) => {
  const result = await ConfirmPromise.start();
  if (!result) return;

  const { error } = await client.from('videos').delete().eq('id', payload.id);
  if (error) {
    ToastPromise.start(error?.message, 'error');
    return;
  }
  refresh();
  ToastPromise.start(`${t('admin.messages.delete')} (${payload.game_name})`);
};

const onCreateNew = () => {
  updateState.id = null;
  updateState.gameId = null;
  updateState.url = '';
  ModalPromise.start(t('admin.manageVideo.modal.addVideo'));
};

const onPrev = () => {
  page.value--;
};
const onNext = () => {
  page.value++;
};
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold uppercase">
        {{ $t('admin.title.editVideos') }}
      </h1>
      <FormButton variant="secondary" size="sm" @click="onCreateNew">
        {{ $t('admin.common.new') }}
      </FormButton>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="w-full overflow-x-auto">
        <DataTable :rows="videos?.videos || []" :columns="columns">
          <template #cell-game_name="{ row }">
            <p>{{ row.game_name }}</p>
            <p class="text-slate-400 text-sm font-normal">{{ row.game_date }}</p>
          </template>

          <template #cell-action="{ row }">
            <div class="text-xl space-x-2">
              <a :href="row.url" target="_blank" class="hover:text-red-500">
                <Icon name="ic:twotone-remove-red-eye" />
              </a>
              <button type="button" class="hover:text-red-500" @click="onEdit(row)">
                <Icon name="ic:twotone-edit" />
              </button>
              <button type="button" class="hover:text-red-500" @click="onDelete(row)">
                <Icon name="ic:twotone-delete" />
              </button>
            </div>
          </template>
        </DataTable>
      </div>

      <div class="flex items-center py-2 px-4 bg-slate-300 text-slate-500 font-bold">
        <div class="flex-1">
          {{ $t('admin.common.pageRange', [pageRange[0], pageRange[1], videos?.count]) }}
        </div>
        <div>
          <button type="button" class="p-2 disabled:text-slate-400" :disabled="page === 0" @click="onPrev">Prev</button>
          <button type="button" class="p-2 disabled:text-slate-400" :disabled="page === maxPage" @click="onNext">
            Next
          </button>
        </div>
      </div>
    </div>

    <FormModal #default="{ resolve }">
      <AdminManageVideo
        :games="games"
        v-model:game-id="updateState.gameId"
        v-model:url="updateState.url"
        :is-edit="Boolean(updateState.id)"
        @submit="onAddVideo($event, resolve)"
      />
    </FormModal>
  </div>
</template>
