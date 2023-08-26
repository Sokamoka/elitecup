import { serverSupabaseClient } from '#supabase/server';
import { ofetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);

  const { data, error } = await client
    .from('instagram')
    .select('access_token')
    .order('id', { ascending: true })
    .limit(1)
    .single();

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  try {
    const feed = await ofetch('https://graph.instagram.com/me/media', {
      method: 'GET',
      query: {
        fields: 'id,permalink,media_url,media_type,thumbnail_url',
        access_token: data.access_token,
      },
    });
    return feed;
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
