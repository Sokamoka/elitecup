<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, url as urlValidator } from '@vuelidate/validators';

export interface Props {
  games?: [];
  gameId?: number | null;
  url?: string;
  isEdit: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  games: () => [],
  gameId: null,
  url: '',
  isEdit: false,
});

const emit = defineEmits(['update:gameId', 'update:url', 'submit']);

const query = ref('');

const { gameId, url } = useVModels(props, emit);

const rules = {
  gameId: { required },
  url: { required },
};

const v$ = useVuelidate(rules, { url, gameId });

const filteredGames = computed(() => {
  return query.value === ''
    ? props.games
    : props.games.filter(
        (game) =>
          game.homeTeamName.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, '')) ||
          game.awayTeamName.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, ''))
      );
});

const displayValue = (id: number) => {
  const item = props.games?.find((game) => game.id === id);
  return item ? item.fullName : '';
};

const onSubmit = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;

  const selectedGame = props.games.find((game) => game.id === gameId.value);
  emit('submit', {
    game_name: selectedGame?.fullName ?? '',
    game_date: selectedGame?.gameDate ?? '',
  });
};

const resetValidator = () => v$.value.$reset();

defineExpose({ resetValidator });
</script>
<template>
  <div class="p-4">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <fieldset>
        <label class="label block">Game:</label>
        <FormAutocomplete
          v-model="gameId"
          v-model:query="query"
          :items="filteredGames"
          :display-value="displayValue"
          :has-error="v$.gameId.$error"
        >
          <template #default="{ item, active }">
            <p class="font-bold">{{ item.homeTeamName }} - {{ item.awayTeamName }}</p>
            <p>
              {{ item.formattedGameDate }} -
              <span :class="[active ? 'text-slate-300' : 'text-slate-500']">{{ item.name }}</span>
            </p>
          </template>
        </FormAutocomplete>
        <p v-if="v$.gameId.$error" class="form-error">
          {{ v$.gameId.$errors[0].$message }}
        </p>
      </fieldset>

      <fieldset>
        <label class="label">Video url:</label>
        <FormInput v-model="url" :has-error="v$.url.$error" />
        <p v-if="v$.url.$error" class="form-error">
          {{ v$.url.$errors[0].$message }}
        </p>
      </fieldset>

      <!-- <div v-if="errorMessage">
        {{ errorMessage }}
      </div> -->

      <fieldset>
        <FormButton type="submit">
          {{ isEdit ? 'Update video' : 'Add video' }}
        </FormButton>
      </fieldset>
    </form>
  </div>
</template>
