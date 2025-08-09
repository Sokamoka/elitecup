import { format, parseISO } from 'date-fns';
import { groupBy } from 'ramda';

export function toDefaultDate(date: Date, locale: string = 'en-US') {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export const groupByGameDate = groupBy((game: { gameDate: string }) => {
  return format(parseISO(game.gameDate), 'yyyy-MM-dd');
});

export function toDefaultDateTime(date: Date, locale: string = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
