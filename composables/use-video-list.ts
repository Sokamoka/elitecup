export function useVideoList(options = {}) {
  const { limit = 24 } = options;
  const state = ref([]);
  const skip = ref(0);
  const totalCount = ref<number>(0);

  const { execute } = useAsyncState(
    () =>
      $fetch('/api/videos', {
        query: { from: unref(skip), to: unref(skip) + unref(limit) - 1 },
      }),
    { videos: [], count: 0 },
    {
      // immediate: false,
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
    isFetchMoreVisible,
    fetchMore,
  };
}
