export function useScheduleRaw(options: { limit: number }) {
  const { limit = 12 } = options || {};

  const schedule = useSchedule();
  const end = ref(limit);

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

  const range = computed(() => schedule.value.slice(0, end.value));
  const isFetchMoreVisible = computed(() => range.value.length < schedule.value.length);

  const fetchMore = () => (end.value = end.value + limit);

  return {
    range,
    schedule,
    isFetchMoreVisible,
    fetchMore,
  };
}
