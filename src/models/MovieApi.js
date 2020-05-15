export default async function getMovies(name, pageNumber, key) {
  const data = [];
  const url = `https://www.omdbapi.com/?s=${name}&type=movie&page=${pageNumber}&apikey=${key}`;
  const response = await fetch(url);
  await response.text().then((elemMovie) => {
    data.push(elemMovie);
  });
  return JSON.parse(data);
}
