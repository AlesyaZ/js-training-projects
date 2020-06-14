import getLocation from '../models/getGeocoding';
import { getweatherForToday, getForecast } from '../models/getWeather';
import WeatherView from '../common/view';
import searchMap from '../models/getMap';
import setError from '../common/setError';

export default class Search {
  constructor(SearchWeather) {
    this.SearchWeather = SearchWeather;
  }

  static async search(language, unit, ...BackgroundQuery) {
    let timeZoneSeasons = {};
    try {
      const location = await getLocation(BackgroundQuery, language);
      const weatherForToday = await getweatherForToday(
        location.coords.lat, location.coords.long, language, unit,
      );
      const forecast = await getForecast(
        location.coords.lat, location.coords.long, language, unit, 3,
      );
      WeatherView(location, weatherForToday, forecast);
      searchMap(location.coords.lat, location.coords.long);
      timeZoneSeasons.backgroundQuery = [weatherForToday.season, weatherForToday.dayTime];
      timeZoneSeasons.timeZone = location.timeZone;
      setError('');
    } catch (e) {
      setError(e.message);
      timeZoneSeasons = null;
    }
    return timeZoneSeasons;
  }
}
