export default function getSeasons(date) {
  let seasons = new Date(date).getMonth();
  if (date === undefined) {
    seasons = new Date().getMonth();
  } else {
    return seasons;
  }

  if (seasons >= 8 && seasons < 11) {
    return 'autumn';
  }
  if (seasons >= 2 && seasons < 5) {
    return 'spring';
  }
  if (seasons >= 5 && seasons < 8) {
    return 'summer';
  }
  return 'winter';
}
