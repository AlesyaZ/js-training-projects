import { KeyWeater } from './Constants';
import getSeasons from '../common/getSeasons';
import getDateWeek from '../common/getDate';

export async function getweatherForToday(lat, long, lang, unit) {
  const requestURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&lang=${lang}&units=${unit}&key=${KeyWeater}`;
  const dataRes = await fetch(requestURL)
    .then((response) => response.json());
  const data = dataRes.data[0];
  const weatherForToday = {
    temp: Math.round(data.temp),
    tempFeelsLike: Math.round(data.app_temp),
    description_weather: data.weather.description,
    icon: data.weather.icon,
    weatherCode: data.weather.code,
    wind: Math.round(data.wind_spd),
    humidity: data.rh,
    season: getSeasons(),
  };
  weatherForToday.dayTime = (weatherForToday.icon.slice(-1) === 'd') ? 'day' : 'night';
  return weatherForToday;
}

export async function getForecast(lat, long, lang, unit, daysNumber) {
  const requestURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&lang=${lang}&units=${unit}&days=${daysNumber + 1}&key=${KeyWeater}`;
  let data = await fetch(requestURL)
    .then((response) => response.json());
  data = data.data.slice(1);
  const langTranslation = await fetch(`../src/langTranslation/${lang}.json`)
    .then((response) => response.json());
  const forecast = [];
  data.forEach((dayForecast) => {
    const dayForecastObj = {
      weekday: {
        name: langTranslation.weekday[getDateWeek(dayForecast.datetime)],
        order: getDateWeek(dayForecast.datetime),
      },
      temp: Math.round(dayForecast.temp),
      icon: dayForecast.weather.icon,
    };
    forecast.push(dayForecastObj);
  });
  return forecast;
}
