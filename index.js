function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city.value;
  let apiKey = "50863a45edtc0d26o66bb25fa39f84fc";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;
  axios.get(url).then(displayWeather);
}
