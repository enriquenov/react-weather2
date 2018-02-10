var axios = require('axios');

var urlBase = "http://api.openweathermap.org/data/2.5/";
var API_KEY = "2d33c7b8363de03942cccc98d15bbdcd";

function getQueryStringData(city) {
  return {
    q: city,
    type: accurate,
    APPID: API_KEY,
    cnt: 5
  }
}

function getCurrentWeather(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then((weatherData) => {
      return weatherData.data
    });
}

function getForecast(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then((forecastData) => {
      return forecastData.data
    });

}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};
