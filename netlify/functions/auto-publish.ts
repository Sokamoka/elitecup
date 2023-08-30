import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
// import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// autoPublishHandler
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const { data } = await supabaseClient
      .from('posts')
      .select('id')
      .lte('scheduled_at', new Date().toISOString())
      .is('published_at', null);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

// const handler = schedule('@hourly', autoPublishHandler);

export { handler };
