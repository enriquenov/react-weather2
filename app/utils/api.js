var axios = require('axios');

var API_KEY = "2d33c7b8363de03942cccc98d15bbdcd";
var city;

function getCity(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${API_KEY}`)
    .then(function(weather){
      return weather.data
    })
}
