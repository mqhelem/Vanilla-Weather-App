function searchCity(event) {
  event.preventDefault();
  let apiKey = "50863a45edtc0d26o66bb25fa39f84fc";
  let city = document.querySelector("#city").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
`;
  axios.get(url).then(searchCity);
}

function weatherData(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = response.data.temperature;
}
