import { addDays, isAfter, isBefore, subDays } from 'date-fns';
import { compose, map, slice } from 'ramda';
import type { ScheduleItem } from '~/types/Videos';

export function useScheduleMain() {
  const schedule: Ref<ScheduleItem[]> = useSchedule();

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

  const range = computed(() => {
    const filtered = getDateRange(schedule.value || []);
    return compose(slice(0, 12), map(transformGames) as any)(filtered);
  });

  return {
    schedule,
    range,
  };
}

const transformGames = (game: { name: string }) => ({
  ...game,
  name: game.name.includes('U16') ? 'U-16' : 'U-18',
});

const getDateRange = (data: ScheduleItem[]) => {
  const now = new Date();

  const current = data.find((game) => isAfter(new Date(game.gameDate), now));
  if (!current) return data;
  const min = subDays(new Date(current.gameDate), 14);
  const max = addDays(new Date(current.gameDate), 31);

  const filtered = data.filter(
    (game) => isAfter(new Date(game.gameDate), min) && isBefore(new Date(game.gameDate), max)
  );
  return filtered;
};
