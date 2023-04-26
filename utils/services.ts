export async function scheduleService(championships: string[]) {
  const [u18, u16] = await Promise.all(championships.map((id) => fetchFromVBR(id)));
  const result = [...(u18?.data ?? {}), ...(u16?.data ?? {})];
  return result;
}

async function fetchFromVBR(id: string) {
  const runtimeConfig = useRuntimeConfig();
  const url = `https://api.icehockey.hu/vbr/v1/gamesList?division=&championshipId=${id}`;

  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      origin: 'https://www.elitecup.eu',
      'Content-Type': 'application/json',
      'X-API-KEY': runtimeConfig.public.vbrApiKey,
    },
  });
  const responseData = await response.json();
  return responseData;
}
