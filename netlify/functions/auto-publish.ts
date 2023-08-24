import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
// import { schedule } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// autoPublishHandler
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    // .eq('is_active', false)
    const { data } = await supabaseClient.from('posts').select('id').lte('published_at', new Date().toISOString());

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
