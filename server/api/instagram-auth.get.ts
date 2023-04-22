import { ofetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  // const { instagramClientId } = useRuntimeConfig();

  let { code } = getQuery(event);
  code = code?.replace('#_', '');

  try {
    const token = await getToken(code);
    const longLiveToken = await getLongLiveToken(token);
    return longLiveToken;
  } catch (error) {
    return error;
  }
});

function getToken(code: string) {
  const { instagramClientId, instagramClientSecret, instagramRedirectUri } = useRuntimeConfig();
  return ofetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: {
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      client_secret: instagramClientSecret,
      grant_type: 'authorization_code',
      redirect_uri: instagramRedirectUri,
      code,
    },
  });
}

function getLongLiveToken(shortLivedAccessToken: string) {
  const { instagramClientSecret } = useRuntimeConfig();
  return ofetch('https://graph.instagram.com/access_token', {
    method: 'GET',
    query: {
      grant_type: 'ig_exchange_token',
      client_secret: instagramClientSecret,
      access_token: shortLivedAccessToken,
    },
  });
}
