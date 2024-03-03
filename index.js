function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city.value;
}
