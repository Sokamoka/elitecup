<script setup lang="ts">
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
    class: 'text-left font-medium',
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

const state = reactive({
  game: {},
  url: '',
});

const { data: games } = await useAsyncData('users', () => $fetch('/api/schedule'), {
  // transform: (users) =>
  //   users.map((user) => ({
  //     id: user.id,
  //     fullName: `${user.firstName} ${user.surname}`,
  //   })),
});

const { data: videos } = await useFetch('/api/admin/videos', {
  headers: useRequestHeaders(['cookie']),
});

const onAddVideo = async () => {
  errorMessage.value = '';
  const { error } = await client.from('videos').insert({
    game_id: state.game.id,
    game_name: `${state.game.homeTeamName} - ${state.game.awayTeamName}`,
    url: state.url,
  });

  if (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="py-8">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl text-slate-700 font-bold uppercase">Edit Videos</h1>
      <FormButton variant="secondary">New</FormButton>
    </div>

    <div class="rounded-lg bg-white shadow-md p-4 w-full mb-8">
      <form @submit.prevent="onAddVideo" class="space-y-4">
        <fieldset>
          <label class="label block">Game:</label>
          <select v-model="state.game">
            <option v-for="game in games" :key="game.id" :value="game">
              {{ game.homeTeamName }} - {{ game.awayTeamName }}
            </option>
          </select>
        </fieldset>
        <fieldset>
          <label class="label">Video url:</label>
          <FormInput v-model="state.url" />
        </fieldset>

        <div v-if="errorMessage">
          {{ errorMessage }}
        </div>

        <fieldset>
          <FormButton type="submit">Add</FormButton>
        </fieldset>
      </form>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="w-full overflow-x-auto">
        <DataTable :rows="videos.videos" :columns="columns">
          <template #cell-action>
            <div class="text-xl space-x-2">
              <Icon name="ic:twotone-remove-red-eye" />
              <Icon name="ic:twotone-edit" />
              <Icon name="ic:twotone-delete" />
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>
