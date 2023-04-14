import { groupBy, prop, sortBy } from 'ramda';

export function usePlayerStatsByType(data: Ref<[]>, key: string) {
  const ordered = computed(() => {
    // const group = groupBy(prop('id'))(data.value);
    // console.log(group);
    const sorted = sortBy(prop(key))(data.value);
    return sorted.reverse().slice(0, 5);
  });

  return ordered;
}
