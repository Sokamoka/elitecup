import { slice } from 'ramda';

type Feed = {
  permalink: string;
  media_type: string;
  thumbnail_url: string;
  media_url: string;
};

export function useInstagramFeed(): ComputedRef<Feed[]> {
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
