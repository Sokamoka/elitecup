import { sortBy, prop } from 'ramda';
import { VBR_CHAMPIONSHIP_IDS } from '~/constants';

export default defineEventHandler(async () => {
  const chsmpionships = VBR_CHAMPIONSHIP_IDS;

  try {
    const [u18, u16] = await Promise.all(chsmpionships.map((id) => fetchFromVBR(id)));

    const result = [...(u18?.data ?? {}), ...(u16?.data ?? {})];
    const sorted = sortBy(prop('gameDate'))(result);
    return sorted;
  } catch (error) {
    console.log(error);
  }

  return [];
});

async function fetchFromVBR(id: string) {
  const url = `https://api.icehockey.hu/vbr/v1/gamesList?division=&championshipId=${id}`;

  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      origin: 'https://www.elitecup.eu',
      'Content-Type': 'application/json',
      'X-API-KEY': 'd86552a5fadf25a1bd666bc8634c510856bf33c9',
    },
  });
  const responseData = await response.json();
  return responseData;
}
