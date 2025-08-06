export function useGetStat(type: string, id: string, store: Ref) {
  const config = useRuntimeConfig();
  const url = `https://api.icehockey.hu/vbr/v2/${type}?championshipId=${id}`;

  const { execute } = useAsyncState(
    () =>
      $fetch<{ data: [] }>(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': config.public.vbrApiKey,
        },
      }),
    { data: [] },
    {
      immediate: false,
      resetOnExecute: false,
      onSuccess(response: { data: [] }) {
        store.value = response.data;
      },
    }
  );

  if (store.value.length === 0) {
    execute();
  }

  return {
    data: store,
  };
}
