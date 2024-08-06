import { groupBy, head, map, path, sortBy, keys, curry, prop } from 'ramda';
import type { VBRSchedule } from '~/types/Videos';

export function useTeams() {
  const schedule: Ref<VBRSchedule[]> = useSchedule();

  const teams = computed(() => {
    console.log(schedule.value);
    const homeTeams = map(
      (item) => ({ name: item.homeTeam.longName, id: item.homeTeam.id, logo: item.homeTeam.logo }),
      unref(schedule)
    );
    const awayTeams = map(
      (item) => ({ name: item.awayTeam.longName, id: item.awayTeam.id, logo: item.awayTeam.logo }),
      unref(schedule)
    );
    
    const grouped = groupBy(prop('name'))([...homeTeams, ...awayTeams]);
    const mapped = map(firstItem(grouped))(keys(grouped));
    return sortBy(prop('name'))(mapped);
  });

  return teams;
}

const firstItem = curry((item, key) => {
  return head(item[key]);
});
