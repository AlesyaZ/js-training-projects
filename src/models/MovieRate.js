export default async function getRate(imdbID, key) {
  const data = [];
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${key}`;
  const response = await fetch(url);
  await response.text().then((elemMovie) => {
    data.push(elemMovie);
  });
  return JSON.parse(data);
}
