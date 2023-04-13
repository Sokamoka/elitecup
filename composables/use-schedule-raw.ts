export function useScheduleRaw() {
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

  // const range = computed(() => schedule.value.slice(0, 12));

  return {
    schedule,
    // range,
  };
}
