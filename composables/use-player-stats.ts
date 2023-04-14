import { prop, sortBy } from 'ramda';

export function usePlayerStatsByType(data: Ref<[]>, key: string) {
  const ordered = computed(() => {
    const sorted = sortBy(prop(key))(data.value);
    return sorted.reverse().slice(0, 5);
  });

  return ordered;
}
