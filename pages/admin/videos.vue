<script setup lang="ts">
import { format, parseISO } from 'date-fns';

type VideoItem = {
  id: number | null;
  created_at: string;
  game_id: number | null;
  game_name: string;
  url: string;
};

interface UpdateState {
  id: number | null;
  gameId: number | null | undefined;
  url: string;
}

definePageMeta({
  layout: 'admin',
});

const columns = {
  game_id: {
    label: 'admin.table.gameId.short',
    tooltip: 'admin.table.gameId.tooltip',
    class: 'w-24 text-left',
  },
  game_name: {
    label: 'admin.table.gameName.short',
    tooltip: 'admin.table.gameName.tooltip',
    class: 'text-left font-bold',
  },
  url: {
    label: 'admin.table.videoUrl.short',
    tooltip: 'admin.table.videoUrl.tooltip',
    class: 'text-left',
  },
  action: {
    label: 'admin.table.action.short',
    tooltip: 'admin.table.action.tooltip',
    class: 'w-10 text-right',
  },
};

const errorMessage = ref('');
const client = useSupabaseClient();

const updateState: UpdateState = reactive({
  id: null,
  gameId: null,
  url: '',
});

const { data: games } = await useAsyncData('games', () => $fetch('/api/schedule'), {
  transform: (games) =>
    games.map((game) => ({
      ...game,
      fullName: `${game.homeTeamName} - ${game.awayTeamName}`,
      formattedGameDate: format(parseISO(game.gameDate), 'yyyy-MM-dd hh:mm'),
    })),
});

const { data: videos } = await useFetch('/api/admin/videos');

const onAddVideo = async (payload: Partial<VideoItem>) => {
  errorMessage.value = '';
  const upsertData = {
    ...(updateState.id && { id: updateState.id }),
    game_id: updateState.gameId,
    url: updateState.url,
    ...payload,
  };
  console.log(upsertData);
  const { data, error } = await client.from('videos').upsert(upsertData).select().single();

  if (error) {
    errorMessage.value = error.message;
  }
  console.log(data);
};

const onEdit = ({ id, game_id, url }: VideoItem) => {
  updateState.id = id;
  updateState.gameId = game_id;
  updateState.url = url;
};

const onDelete = (payload: VideoItem) => {
  console.log(payload);
};

const onCreateNew = () => {
  updateState.id = null;
  updateState.gameId = null;
  updateState.url = '';
};
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold uppercase">Edit Videos</h1>
      <FormButton variant="secondary" @click="onCreateNew">New</FormButton>
    </div>

    <AdminManageVideo
      :games="games"
      v-model:game-id="updateState.gameId"
      v-model:url="updateState.url"
      @submit="onAddVideo"
    />

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="w-full overflow-x-auto">
        <DataTable :rows="videos.videos" :columns="columns">
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
    </div>
  </div>
</template>
