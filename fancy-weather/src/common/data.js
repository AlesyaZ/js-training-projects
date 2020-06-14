export default function getTodayDate(language, timezone) {
  const lang = {
    en: 'en-US',
    ru: 'ru-RU',
    be: ['Нд',
      'Аўт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Пн',
    ],
  };

  const months = {
    be: [
      'Студзеня',
      'Лютага',
      'Сакавіка',
      'Красавіка',
      'Мая',
      'Чэрвеня',
      'Ліпеня',
      'Аўгуста',
      'Верасеня',
      'Кастрычніка',
      'Лістапада',
      'Снежаня',
    ],
  };

  const clockOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: timezone,
  };

  const date = new Date();
  const clock = date.toLocaleDateString(language, clockOptions).split(', ')[1];

  const getDateLang = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    timeZone: timezone,
  };

  function toDate() {
    try {
      return date.toLocaleDateString(lang[language], getDateLang);
    } catch (e) {
      return `${lang[language][date.getDay()]}, ${[date.getDate(timezone)]}, ${months[language][date.getMonth()]}`;
    }
  }
  return `${[toDate()]} ${clock}`;
}
