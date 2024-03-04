function searchCity(event) {
  event.preventDefault();
  let apiKey = "50863a45edtc0d26o66bb25fa39f84fc";
  let city = document.querySelector("#city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city.value;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}&units=metric
`;
  axios.get(url).then(weatherData);
}
let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", searchCity);

function weatherData(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);

  let weatherCondition = document.querySelector("#description");
  weatherCondition.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  let weatherIcon = document.querySelector("#icon");
  weatherIcon.src = `${response.data.condition.icon_url}`;

  let date = new Date(response.data.time * 1000);
  let dateFormat = document.querySelector("#date");
  let formattedDate = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
  dateFormat.innerHTML = formattedDate;
  console.log(formattedDate);
}
