import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event);

  const client = serverSupabaseClient(event);

  const { data, error } = await client.from('posts').select().eq('slug', slug).single();

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return data;
});
