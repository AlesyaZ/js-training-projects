import { KeyBackground } from './Constants';

export default async function getBackground(...BackgroundQuery) {
  const namePages = BackgroundQuery.join(' ');
  const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${namePages}&client_id=${KeyBackground}`);
  const result = await response.json();
  return result.urls.regular;
}
