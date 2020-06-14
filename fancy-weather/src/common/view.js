function setLocation(location) {
  document.querySelector('.place_location').innerText = location;
}

function setWeatherForToday(weather) {
  const descriptionWeather = document.getElementById('description_weather');

  document.querySelector('.degree').innerText = weather.temp;
  document.querySelector('.weather_img').src = `../assets/img/weather/${weather.icon}.svg`;
  descriptionWeather.innerText = weather.description_weather;
  descriptionWeather.dataset.i18n = `weather.${weather.weatherCode}`;
  document.getElementById('feels-like').innerText = weather.tempFeelsLike;
  document.getElementById('wind').innerText = weather.wind;
  document.getElementById('humidity').innerText = weather.humidity;
}

function setForecast(forecast) {
  document.querySelectorAll('.forecast_three-day').forEach((threeDay, i) => {
    const forecastThreeDay = threeDay;
    forecastThreeDay.querySelector('.forecast_three-day__date').innerText = forecast[i].weekday.name;
    forecastThreeDay.querySelector('.forecast_three-day__date').dataset.i18n = `weekday.${forecast[i].weekday.order}`;
    forecastThreeDay.querySelector('.forecast_three-day__degree').innerText = forecast[i].temp;
    forecastThreeDay.querySelector('.forecast_three-day__weather-img').src = `../assets/img/weather/${forecast[i].icon}.svg`;
  });
}

function setCoords(lat, long) {
  document.querySelector('.latitude .value').innerText = lat;
  document.querySelector('.longitude .value').innerText = long;
}

export default function WeatherView(location, weatherForToday, forecast) {
  setLocation(location.place);
  setWeatherForToday(weatherForToday);
  setForecast(forecast);
  setCoords(location.formated.lat, location.formated.long);
}
