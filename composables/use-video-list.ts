export interface UseVideoListOptions {
  limit?: number;
}

export function useVideoList(options: UseVideoListOptions = {}) {
  const { limit = 24 } = options;
  const state = ref([]);
  const skip = ref(0);
  const totalCount = ref<number>(0);

  const { execute, isLoading, error } = useAsyncState(
    () =>
      $fetch('/api/videos', {
        query: { from: unref(skip), to: unref(skip) + unref(limit) - 1 },
      }),
    { videos: [], count: 0 },
    {
      resetOnExecute: false,
      onSuccess({ videos, count }) {
        state.value = state.value.concat(videos);
        totalCount.value = count || 0;
      },
    }
  );

  const isFetchMoreVisible = computed(() => unref(state).length < unref(totalCount));

  const fetchMore = () => {
    skip.value += unref(limit);
    execute();
  };

  return {
    state,
    isLoading,
    error,
    isFetchMoreVisible,
    fetchMore,
  };
}
