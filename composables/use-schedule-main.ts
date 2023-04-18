import { compose, map, slice } from 'ramda';

export function useScheduleMain() {
  const schedule = useSchedule();

  const { execute } = useAsyncState(() => $fetch('/api/schedule'), [], {
    immediate: false,
    resetOnExecute: false,
    onSuccess(data) {
      schedule.value = data;
    },
  });

  if (schedule.value.length === 0) {
    execute();
  }

  const range = computed(() => compose(slice(0, 12), map(transformGames) as any)(schedule.value));

  return {
    schedule,
    range,
  };
}

const transformGames = (game: { name: string }) => ({
  ...game,
  name: game.name.includes('U16') ? 'U-16' : 'U-18',
});

// const getDateRange = (data: []) => {
//   const now = new Date(2022, 9, 1);
//   const filtered = data.filter((game) => game.gameDate);
//   return filtered;
// };
