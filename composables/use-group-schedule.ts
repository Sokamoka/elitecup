import { format, parseISO, intlFormat } from 'date-fns';

export function useGroupSchedule(data: Ref) {
  const grouped = computed(() => groupByGameDate(data.value));

  const formatGameDate = (date: string) =>
    intlFormat(
      new Date(date),
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      {
        locale: 'en-US',
      }
    );

  const formatGameDateTime = (date: string) => format(parseISO(date), 'HH:mm');

  return {
    grouped,
    formatGameDate,
    formatGameDateTime,
  };
}
