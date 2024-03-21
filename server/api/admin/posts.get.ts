import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { from, to, locale = 'all' }: any = getQuery(event);

  const client = await serverSupabaseClient(event);

  let query = client
    .from('posts')
    .select('id, created_at, published_at, title, is_active, locale, slug, image, scheduled_at', { count: 'exact' });

  if (locale !== 'all') query = query.eq('locale', locale);
  query = query.order('created_at', { ascending: false }).range(from, to);

  const { data, count, error } = await query;

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return { posts: data, count };
});
