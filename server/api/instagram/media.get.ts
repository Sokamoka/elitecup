import { ofetch } from 'ofetch';

export default defineEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();

  try {
    const feed = await ofetch('https://graph.instagram.com/me/media', {
      method: 'GET',
      query: {
        fields: 'id,permalink,media_url,media_type,thumbnail_url',
        access_token: runtimeConfig.public.instagramAccessToken,
      },
    });
    return feed;
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
