import { groupBy, head, map, path, sortBy, keys, curry } from 'ramda';
import type { VBRSchedule } from '~/types/Videos';

export function useTeams() {
  const schedule: Ref<VBRSchedule[]> = useSchedule();

  const teams = computed(() => {
    const grouped = groupBy(path(['homeTeam', 'longName']))(unref(schedule));
    const mapped = map(firstItem(grouped))(keys(grouped));
    // const mapped = compose(redd(grouped), keys)(grouped);
    // console.log(mapped);
    return sortBy(path(['homeTeam', 'longName']))(mapped);
  });

  return teams;
}

const firstItem = curry((item, key) => {
  return head(item[key]);
});
