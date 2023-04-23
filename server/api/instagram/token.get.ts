import { ofetch } from 'ofetch';

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  try {
    const { access_token } = await getToken(code);
    const longLiveToken = await getLongLiveToken(access_token);
    return longLiveToken;
  } catch (error) {
    return error;
  }
});

function getToken(code: string) {
  return ofetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: {
      client_id: process.env.INSTAGRAM_CLIENT_ID,
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
      code,
    },
  });
}

function getLongLiveToken(shortLivedAccessToken: string) {
  return ofetch('https://graph.instagram.com/access_token', {
    method: 'GET',
    query: {
      grant_type: 'ig_exchange_token',
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
      access_token: shortLivedAccessToken,
    },
  });
}
