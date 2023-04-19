export function useGetStat(type: string, id: string, store: Ref) {
  const url = `https://api.icehockey.hu/vbr/v1/${type}?championshipId=${id}`;

  const { execute } = useAsyncState(
    () =>
      $fetch<{ data: [] }>(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'd86552a5fadf25a1bd666bc8634c510856bf33c9',
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
