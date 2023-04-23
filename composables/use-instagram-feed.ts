import { slice } from 'ramda';

export function useInstagramFeed() {
  const feed = useInstagramFeedState();

  const { execute } = useAsyncState(
    () => $fetch('/api/instagram/media'),
    { data: [] },
    {
      immediate: false,
      resetOnExecute: false,
      onSuccess({ data }) {
        feed.value = data;
      },
    }
  );

  if (feed.value.length === 0) {
    execute();
  }

  const data = computed(() => slice(0, 9)(feed.value));

  return data;
}
