import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { from, to } = getQuery(event);

  const { data, count, error } = await client
    .from('videos')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return { videos: data, count };
});
