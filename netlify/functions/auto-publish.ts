import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

interface ConvertUpsert {
  id: number
}

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const autoPublishHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { data } = await supabaseClient
    .from('posts')
    .select('id')
    .lte('scheduled_at', new Date().toISOString())
    .is('published_at', null);

  await supabaseClient.from('posts').upsert(convertUpsertData(data || [])).select();

  return {
    statusCode: 200,
  };
};

const handler = schedule('@hourly', autoPublishHandler);

export { handler };

function convertUpsertData(data: ConvertUpsert[]) {
  return data.map((row) => ({ ...row, published_at: new Date(), is_active: true }));
}
