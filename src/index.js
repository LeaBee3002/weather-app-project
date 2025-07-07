function refreshWeather(response) {
  let currentTemperature = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let getCity = document.querySelector("#city");
  let weatherDetails = document.querySelector("#weather-details");
  let description = response.data.condition.description;
  let getHumidity = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let getWind = document.querySelector("#wind");
  let wind = response.data.wind.speed;

  getWind.innerHTML = `${wind}km/h`;
  getHumidity.innerHTML = `${humidity}%`;
  weatherDetails.innerHTML = description;
  getCity.innerHTML = response.data.city;
  currentTemperature.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "b6b1o92d8e370e4c61367bb1efbt0a3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function commitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let getCity = document.querySelector("#city");
  getCity.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", commitSearch);

searchCity("London");
