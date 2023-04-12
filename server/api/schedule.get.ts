import { ofetch } from 'ofetch';
import { sortBy, prop } from 'ramda';
import { useArrayJoin, useAsyncQueue } from '@vueuse/core';

export default defineEventHandler(async (event) => {
  let { start, limit } = getQuery(event);
  start = Number(start);
  limit = Number(limit);

  const divisions = ['Preliminary Round - A', 'Preliminary Round - B'];

  // const { activeIndex, result } = useAsyncQueue(divisions.map((id) => fetchFromVBR(id)));
  // console.log(activeIndex.value)
  // console.log(result);

  try {
    const u18 = await fetchFromVBR('Preliminary Round - A');
    const u16 = await fetchFromVBR('Preliminary Round - B');

    const result = [...u18.data, ...u16.data];
    // console.log(result);
    const sorted = sortBy(prop('gameDate'))(result);
    return sorted.slice(start, start + limit);
  } catch (error) {
    console.log(error);
  }

  const sorted = sortBy(prop('gameDate'))(mockSchedule);
  return sorted.slice(start, start + limit);
});

async function fetchFromVBR(id: string) {
  const url = `https://api.icehockey.hu/vbr/v1/gamesList?championshipId=3312&division=${id}`;
  // const url = `http://localhost:3333/vbr/v1/gamesList?championshipId=3314&division=Alapszakasz`;

  return ofetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      origin: 'http://localhost:3000',
      'Content-Type': 'application/json',
      // 'X-API-KEY': '9b918f8ddadbdb2382949a37946642aa9a3f73b8',
      'X-API-KEY': 'dd8adf5fdb738b3741fa579b5ede5ce69b681f62',
    },
  });
}

const mockSchedule = [
  {
    homeTeamName: 'Titánok',
    homeTeamScore: 7,
    awayTeamName: 'Dunaújvárosi Acélbikák',
    awayTeamScore: 2,
    gameName: 'EL 29',
    location: 'Győr',
    gameDate: '2020-12-03T18:30:00+01:00',
    id: 59370,
    divisionName: 'Alapszakasz',
    championshipName: 'Erste Liga',
    broadcast: false,
    homeTeamId: 20083,
    awayTeamId: 20079,
    gameStatus: 2,
    result: '7:2 (1:0, 2:2, 4:0)',
    isOvertime: false,
    isShootout: false,
    homeTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20078.png',
    awayTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20082.png',
  },
  {
    homeTeamName: 'Titánok',
    homeTeamScore: 7,
    awayTeamName: 'Dunaújvárosi Acélbikák',
    awayTeamScore: 2,
    gameName: 'EL 30',
    location: 'Győr',
    gameDate: '2020-12-02T18:30:00+01:00',
    id: 59371,
    divisionName: 'Alapszakasz',
    championshipName: 'Erste Liga',
    broadcast: false,
    homeTeamId: 20083,
    awayTeamId: 20079,
    gameStatus: 2,
    result: '7:2 (1:0, 2:2, 4:0)',
    isOvertime: false,
    isShootout: false,
    homeTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20078.png',
    awayTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20082.png',
  },
  {
    homeTeamName: 'Titánok',
    homeTeamScore: 7,
    awayTeamName: 'Dunaújvárosi Acélbikák',
    awayTeamScore: 2,
    gameName: 'EL 31',
    location: 'Győr',
    gameDate: '2020-12-05T18:30:00+01:00',
    id: 59372,
    divisionName: 'Alapszakasz',
    championshipName: 'Erste Liga',
    broadcast: false,
    homeTeamId: 20083,
    awayTeamId: 20079,
    gameStatus: 2,
    result: '7:2 (1:0, 2:2, 4:0)',
    isOvertime: false,
    isShootout: false,
    homeTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20078.png',
    awayTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20082.png',
  },
  {
    homeTeamName: 'Barani-HSMH Banska Bystrica',
    homeTeamScore: 7,
    awayTeamName: 'Dunaújvárosi Acélbikák',
    awayTeamScore: 2,
    gameName: 'EL 32',
    location: 'Győr',
    gameDate: '2020-12-05T15:00:00+01:00',
    id: 59373,
    divisionName: 'Alapszakasz',
    championshipName: 'Erste Liga',
    broadcast: false,
    homeTeamId: 20083,
    awayTeamId: 20079,
    gameStatus: 2,
    result: '7:2 (1:0, 2:2, 4:0)',
    isOvertime: false,
    isShootout: false,
    homeTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20078.png',
    awayTeamLogo: 'https://api.icehockey.hu/static/api/team-logo/20082.png',
  },
];
