import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { from, to }: any = getQuery(event);

  const client = serverSupabaseClient(event);

  const { data, count, error } = await client
    .from('posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return { posts: data, count };
});
