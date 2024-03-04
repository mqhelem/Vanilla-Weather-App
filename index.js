function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city.value;
  let apiKey = "50863a45edtc0d26o66bb25fa39f84fc";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;
  axios.get(url).then(displayWeather);
  console.log(response.data);
}
function displayWeather(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.temperature);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.temperature.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.condition.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}
console.log(humidity);
console.group(wind);
