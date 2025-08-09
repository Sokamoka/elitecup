import { format, parseISO, intlFormat } from 'date-fns';

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

export function useGroupSchedule(data: Ref, locale: Ref) {
  const grouped = computed(() => groupByGameDate(unref(data)));

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
        locale: unref(locale)?.iso,
      }
    );

  const formatGameDateTime = (date: string) => format(parseISO(date), 'HH:mm');

  return {
    grouped,
    formatGameDate,
    formatGameDateTime,
  };
}
