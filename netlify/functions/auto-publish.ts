import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
// import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// autoPublishHandler
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { data } = await supabaseClient
    .from('posts')
    .select('id')
    .lte('scheduled_at', new Date().toISOString())
    .is('published_at', null);

  await supabaseClient.from('posts').upsert(convertUpsertData(data)).select();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

// const handler = schedule('@hourly', autoPublishHandler);

export { handler };

function convertUpsertData(data) {
  return data.map((row) => ({ ...row, published_at: new Date(), is_active: true }));
}
