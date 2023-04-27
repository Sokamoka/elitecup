<script setup lang="ts">
import Games from '~/pages/u16/games.vue';

export interface Props {
  games?: [];
  gameId?: number | null;
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  games: () => [],
  gameId: null,
  url: '',
});

const emit = defineEmits(['update:gameId', 'update:url', 'submit']);

const query = ref('');

const { gameId, url } = useVModels(props, emit);

const filteredGames = computed(() => {
  return query.value === ''
    ? props.games
    : props.games.filter(
        (game) =>
          game.homeTeamName.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, '')) ||
          game.awayTeamName.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, ''))
      );
});

const displayValue = (id) => {
  const item = props.games?.find((it) => it.id === id);
  return item ? item.fullName : '';
};

const onSubmit = () => {
  const selectedGame = props.games.find((game) => game.id === gameId.value);
  emit('submit', {
    game_name: selectedGame?.fullName ?? '',
  });
};
</script>
<template>
  <div class="rounded-lg bg-white shadow-md p-4 w-full mb-8">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <fieldset>
        <label class="label block">Game:</label>
        <FormAutocomplete v-model="gameId" v-model:query="query" :items="filteredGames" :display-value="displayValue">
          <template #default="{ item, active }">
            <p class="font-bold">{{ item.homeTeamName }} - {{ item.awayTeamName }}</p>
            <p>
              {{ item.formattedGameDate }} - <span :class="[active ? 'text-slate-300' : 'text-slate-500']">{{ item.name }}</span>
            </p>
          </template>
        </FormAutocomplete>
      </fieldset>

      <fieldset>
        <label class="label">Video url:</label>
        <FormInput v-model="url" />
      </fieldset>

      <!-- <div v-if="errorMessage">
        {{ errorMessage }}
      </div> -->

      <fieldset>
        <FormButton type="submit">Add</FormButton>
      </fieldset>
    </form>
  </div>
</template>
