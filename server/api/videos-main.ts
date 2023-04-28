import { serverSupabaseClient } from '#supabase/server';
import { VBR_CHAMPIONSHIP_IDS } from '~/constants';
import { scheduleService } from '~/utils/services';
import { getYouTubeVideoId } from '~/utils/youtube';

export interface VideosResponse {
  id: number;
  title: string;
  externalLink: string;
  date: string;
  image: string;
  gameDate: string;
  gameStatus: number;
}

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('videos')
    .select()
    .lte('game_date', new Date().toISOString())
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  const schedule = await scheduleService(VBR_CHAMPIONSHIP_IDS);

  // Merge data
  const videos: VideosResponse[] = (data || []).reduce<VideosResponse[]>((acc, item) => {
    const scheduleItem = (schedule || []).find((game) => game.id === item.game_id);

    acc.push({
      id: item.id,
      title: item.game_name,
      externalLink: item.url,
      date: item.created_at,
      image: getVideoImage(item.url),
      gameDate: scheduleItem?.gameDate ?? new Date(1970, 0, 1),
      gameStatus: scheduleItem?.gameStatus ?? 0,
    });
    return acc;
  }, []);
  return videos;
});

function getVideoImage(link: string) {
  const videoId = getYouTubeVideoId(link);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }
  return '/img/elite_cup_logo.svg';
}
