// HTML Var
var cityNameInput = document.getElementById(`city-name-form`)
var searchBtn = document.getElementById(`search-button`)
var searchList = document.getElementById(`search-list`)
var currentWeatherEl = document.getElementById(`current-weather`)
var weatherForecastEl = document.getElementById(`weather-forecast`)



var url = `https://api.openweathermap.org/data/2.5/weather?q=`
var apiKey = `&units=imperial&appid=445334ff4b4a5bd010296351c9bf3d55`


// show search history list
var showCityHistory = function (name) {
  var cityHistoryInput = document.createElement(`li`)
  cityHistoryInput.textContent = name
  console.log(name)
  cityHistoryInput.addEventListener(`click`, function (click) {
    currentWeatherEl.innerHTML = ``
    weatherForecastEl.innerHTML = ``
    getCurrentWeather(click.target.textContent)
  })
};

var getCurrentWeather = function (cityName) {
  var currentURL = `https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&units=imperial&appid=445334ff4b4a5bd010296351c9bf3d55`
  fetch(currentURL)
    .then(function (response) {
      return response.json();
    })
    
  console.log("yo")
  
  }