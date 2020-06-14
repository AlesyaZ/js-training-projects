import { KeyGeocoding } from './Constants';
import formatcoords from '../../node_modules/formatcoords';

export default async function getLocation(BackgroundQuery, landuage) {
  const Query = BackgroundQuery.join('');
  const requestURL = `https://api.opencagedata.com/geocode/v1/json?q=${Query}&key=${KeyGeocoding}&language=${landuage}&pretty=1`;
  const dataRes = await fetch(requestURL)
    .then((response) => response.json());
  if (dataRes.total_results === 0) {
    const langTranslation = await fetch(`../src/langTranslation/${landuage}.json`)
      .then((response) => response.json());
    throw new Error(langTranslation.error);
  }
  const data = dataRes.results[0];
  const city = `${data.components.city || data.components.town || data.components.village || data.components.county || data.formatted || ''}`;
  const country = `${data.components.country || ''}`;
  const location = {
    place: `${city}, ${country}`,
    coords: {
      lat: data.geometry.lat,
      long: data.geometry.lng,
    },
    formated: {
      lat: formatcoords(data.geometry.lat, data.geometry.lng).format(),
      long: formatcoords([data.geometry.lng, data.geometry.lat], false).format(),
    },
    timeZone: data.annotations.timezone.name,
  };
  return location;
}
