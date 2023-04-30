export const useSchedule = () => useState<[]>('schedule', () => []);
export const usePlayerStatsU18 = () => useState<[]>('playerStatsU18', () => []);
export const usePlayerStatsU16 = () => useState<[]>('playerStatsU16', () => []);
export const useGoalieStatsU18 = () => useState<[]>('goalieStatsU18', () => []);
export const useGoalieStatsU16 = () => useState<[]>('goalieStatsU16', () => []);
export const usePenaltiesStatsU18 = () => useState<[]>('penaltiesStatsU18', () => []);
export const usePenaltiesStatsU16 = () => useState<[]>('penaltiesStatsU16', () => []);

export const useInstagramFeedState = () => useState<[]>('instagramFeed', () => []);
