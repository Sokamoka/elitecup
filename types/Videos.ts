export interface VideosSchema {
  id: number;
  created_at: string;
  game_id: number;
  game_name: string;
  game_date: Date;
  url: string;
}

export interface VideosResponse {
  id: number;
  title: string;
  externalLink: string;
  date: string;
  image: string;
  gameDate: string;
  gameStatus: number;
}

export interface VBRSchedule {
  homeTeam: { longName: string };
}

export interface ScheduleItem {
  id: number;
  game_name: string;
  gameDate: string;
  gameStatus: number;
}
