import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { from, to, locale }: any = getQuery(event);

  const client = await serverSupabaseClient(event);

  const { data, count, error } = await client
    .from('posts')
    .select('*', { count: 'exact' })
    .order('published_at', { ascending: false })
    .eq('is_active', true)
    .eq('locale', locale)
    .range(from, to);

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return { posts: data, count };
});
