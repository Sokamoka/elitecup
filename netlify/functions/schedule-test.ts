import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const testTandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  await supabaseClient.from('instagram').insert({});

  return {
    statusCode: 200,
  };
};

const handler = schedule('@hourly', testTandler);

export { handler };
