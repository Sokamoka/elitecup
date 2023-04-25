<script setup lang="ts">
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

const { gameId, url } = useVModels(props, emit);

const onSubmit = () => {
  const gameObject = props.games.find((game) => game.id === gameId.value);
  emit('submit', {
    game_name: `${gameObject.homeTeamName} - ${gameObject.awayTeamName}`,
  });
};
</script>
<template>
  <div class="rounded-lg bg-white shadow-md p-4 w-full mb-8">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <fieldset>
        <label class="label block">Game:</label>
        <select v-model="gameId">
          <option v-for="game in games" :key="game.id" :value="game.id">
            {{ game.homeTeamName }} - {{ game.awayTeamName }}
          </option>
        </select>
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
