import { KeyTranslate } from './Constants';

export default async function getTranslation(text, langBefore, langAfter) {
  const requestURL = await fetch(
    `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KeyTranslate}&text=${text}&lang=${langBefore}-${langAfter}`,
  );
  const response = await requestURL.json();
  return response.text[0];
}
