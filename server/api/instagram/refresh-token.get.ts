import { ofetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const { token } = getQuery(event);

  try {
    const response = await ofetch('https://graph.instagram.com/refresh_access_token', {
      method: 'GET',
      body: {
        grant_type: 'ig_refresh_token',
        access_token: token,
      },
    });
    return response;
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
