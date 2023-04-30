import { ofetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const { code }: any = getQuery(event);

  try {
    const { access_token } = await getToken(code);
    const longLiveToken = await getLongLiveToken(access_token);
    return longLiveToken;
  } catch (error) {
    return error;
  }
});

function getToken(code: string) {
  const config = useRuntimeConfig();
  return ofetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: config.instagramClientId,
      client_secret: config.instagramClientSecret,
      grant_type: 'authorization_code',
      redirect_uri: config.instagramClientRedirectUri,
      code,
    }),
  });
}

function getLongLiveToken(shortLivedAccessToken: string) {
  return ofetch('https://graph.instagram.com/access_token', {
    method: 'GET',
    query: {
      grant_type: 'ig_exchange_token',
      client_secret: process.env.NUXT_INSTAGRAM_CLIENT_SECRET,
      access_token: shortLivedAccessToken,
    },
  });
}
