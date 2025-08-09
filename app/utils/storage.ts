export function getFileName(url: string) {
  console.log(url);
  const regex = /public\/post\/.+?\.[^.]+$/;
  const match = url.match(regex);

  console.log({ match });

  return match?.[0] ?? '';
}
