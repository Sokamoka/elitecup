import { ofetch } from 'ofetch';
import { sortBy, prop } from 'ramda';

export default defineEventHandler(async () => {
  const divisions = ['3311', '3312'];

  try {
    const [u18, u16] = await Promise.all(divisions.map((id) => fetchFromVBR2(id)));

    const result = [...(u18?.data ?? {}), ...(u16?.data ?? {})];
    const sorted = sortBy(prop('gameDate'))(result);
    return sorted;
  } catch (error) {
    console.log(error);
  }

  return [];
});

async function fetchFromVBR2(id: string) {
  const url = `https://api.icehockey.hu/vbr/v1/gamesList?division=&championshipId=${id}`;

  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      origin: 'http://localhost:3000',
      'Content-Type': 'application/json',
      'X-API-KEY': 'd86552a5fadf25a1bd666bc8634c510856bf33c9',
    },
  });
  const responseData = await response.json();
  return responseData;
}
