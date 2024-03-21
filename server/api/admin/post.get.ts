import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  const client = await serverSupabaseClient(event);

  const { data, error } = await client.from('posts').select().eq('id', id).single();

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }

  return data;
});
