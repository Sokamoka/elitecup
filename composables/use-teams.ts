import { groupBy, head, map, prop, sortBy, keys, curry } from 'ramda';

export function useTeams() {
  const schedule = useSchedule();

  const teams = computed(() => {
    const grouped = groupBy(prop('homeTeamName'))(unref(schedule));
    const mapped = map(firstItem(grouped))(keys(grouped));
    // const mapped = compose(redd(grouped), keys)(grouped);
    // console.log(mapped);
    return sortBy(prop('homeTeamName'))(mapped);
  });

  return teams;
}

const firstItem = curry((item, key) => {
  return head(item[key]);
});
