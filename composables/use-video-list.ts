import { VideosResponse } from '~/types/Videos';

export interface UseVideoListOptions {
  from: Ref<number>;
  to: Ref<number>;
}

export async function useVideoList(options: UseVideoListOptions) {
  const { from, to } = options;
  const state = shallowRef([]);
  const totalCount = ref<number>(0);

  const { data, error, pending } = await useFetch<{ videos: VideosResponse[]; count: number }>('/api/videos', {
    query: { from, to },
  });

  watch(
    data,
    (res) => {
      const { videos, count } = res || {};
      state.value = state.value.concat(videos);
      totalCount.value = count || 0;
    },
    {
      immediate: true,
    }
  );

  const isFetchMoreVisible = computed(() => unref(state).length < unref(totalCount));

  return {
    state,
    isLoading: pending,
    error,
    isFetchMoreVisible,
  };
}
