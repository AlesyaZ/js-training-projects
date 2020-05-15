export default async function getTranslation(word) {
  const data = [];
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200501T111237Z.5a0d582363b62eb5.75a35eae2bcb27a2db5d5e37cdff02cebeb24a65&text=${word}&lang=ru-en`;
  const response = await fetch(url);
  await response.text().then((elemMovie) => {
    data.push(elemMovie);
  });
  return JSON.parse(data);
}
