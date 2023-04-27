export function usePagination(page: Ref<number>, limit: number) {
  const from = ref(0);
  const to = ref(limit - 1);

  watch(page, (page) => {
    from.value = page ? page * limit : 0;
    to.value = page ? from.value + limit - 1 : limit - 1;
  });

  return { from, to };
}
