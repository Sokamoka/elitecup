import { ofetch } from 'ofetch';
import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const refreshAccessTokenHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { data } = await supabaseClient
    .from('instagram')
    .select('access_token')
    .order('id', { ascending: true })
    .limit(1)
    .single();

  const response = await ofetch('https://graph.instagram.com/refresh_access_token', {
    method: 'GET',
    query: {
      grant_type: 'ig_refresh_token',
      access_token: data?.access_token,
    },
  });

  await supabaseClient.from('instagram').insert({ access_token: response?.access_token });

  return {
    statusCode: 200,
  };
};

const handler = schedule('@monthly', refreshAccessTokenHandler);

export { handler };
