export default defineEventHandler((event) => {
  const { start, limit } = getQuery(event);
  return mockSchedule;
});

const mockSchedule = [
  {
    homeTeamName: 'Titánok',
    homeTeamScore: 7,
    awayTeamName: 'Dunaújvárosi Acélbikák',
    awayTeamScore: 2,
    gameName: 'EL 29',
    location: 'Győr',
    gameDate: '2020-12-01T18:30:00+01:00',
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
    gameName: 'EL 29',
    location: 'Győr',
    gameDate: '2020-12-02T18:30:00+01:00',
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
];
