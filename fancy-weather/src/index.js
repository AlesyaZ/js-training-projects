import './style.css';

import LanguageChange from './controllSwitcher/LanguageSwitcher';
import DegreeChange from './unit/DegreeSwitcher';
import BGSwitcher from './controllSwitcher/BackgroundSwitch';
import getTodayDate from './common/data';
import SearcherMicrophone from './control/SearchMicrophone';

const defaultLang = localStorage.getItem('lang') || 'en';
const defaultUnit = localStorage.getItem('unit') || 'M';

function getClock(container, lang = 'en', timeZone = 'Europe/Minsk') {
  const clock = {
    container,
    lang,
    timeZone,
    counter: 1,
    start() {
      const date = getTodayDate(this.lang, this.timeZone);
      this.container.innerText = date;
      setTimeout(() => this.start(), 1000);
    },
  };
  return clock;
}

const languageSwitch = new LanguageChange(document.getElementById('lang-switcher'), defaultLang);
const DegreeSwitch = new DegreeChange(document.getElementById('unit-switcher'), defaultUnit);
const bgSwitcher = new BGSwitcher(document.getElementById('switch-update-background'), document.body);
const dateClock = getClock(document.querySelector('.date-time_today'), languageSwitch.currentLang);

async function updatePage(...BackgroundQuery) {
  const resultbackgrdate = await SearcherMicrophone.search(
    languageSwitch.currentLang, DegreeSwitch.currentUnit, BackgroundQuery,
  );
  if (resultbackgrdate) {
    bgSwitcher.updateBackground(resultbackgrdate.backgroundQuery);
    dateClock.timeZone = resultbackgrdate.timeZone;
  }
}

async function init(lat, long) {
  await updatePage(lat, long);
  dateClock.start();
  document.querySelector('.loader_container').remove();
}

const voiceSearcher = new SearcherMicrophone(document.getElementById('location-searcher'), document.getElementById('SearchMicrophone'));
voiceSearcher.SearchWeather.onsubmit = () => {
  const BackgroundQuery = document.querySelector('.input').value;
  updatePage(BackgroundQuery);
  return false;
};

languageSwitch.element.addEventListener('click', (event) => {
  languageSwitch.switchLang(event);
  dateClock.lang = languageSwitch.currentLang;
});

document.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.getCurrentPosition((response) => {
    init(response.coords.latitude, response.coords.longitude);
  });
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', languageSwitch.currentLang);
  localStorage.setItem('unit', DegreeSwitch.currentUnit);
});
