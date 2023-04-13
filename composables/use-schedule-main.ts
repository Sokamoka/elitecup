export function useScheduleMain() {
  const schedule = useSchedule();

  const { execute } = useAsyncState(
    () => $fetch('/api/schedule'),
    [],
    {
      immediate: false,
      resetOnExecute: false,
      onSuccess(data) {
        schedule.value = data;
      },
    }
  );

  if (schedule.value.length === 0) {
    execute();
  }

  const range = computed(() => schedule.value.slice(0, 12));

  return {
    schedule,
    range,
  };
}

// const getDateRange = (data: []) => {
//   const now = new Date(2022, 9, 1);
//   const filtered = data.filter((game) => game.gameDate);
//   return filtered;
// };
