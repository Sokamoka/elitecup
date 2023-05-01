import { prop, sortBy } from 'ramda';
import { PlayerStats } from '~/types/PlayerStats';

export function usePlayerStatsByType(data: Ref<[]>, key: string): ComputedRef<PlayerStats[]> {
  const ordered = computed(() => {
    const sorted = sortBy(prop(key))(data.value);
    return sorted.reverse().slice(0, 5);
  });

  return ordered;
}
