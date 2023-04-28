export function getYouTubeVideoId(link: string) {
  let regex = /^https?:\/\/(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|live\/))([\w-]{11})(?:\S+)?$/;
  let match = link.match(regex);
  if (match) {
    return match[1];
  } else {
    return '';
  }
}
