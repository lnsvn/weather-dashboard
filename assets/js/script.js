var searchFormEl = document.getElementById("search-form");
var cityInput = document.getElementById("city-search");
var apiKey = "78d9b295a8a505d8adc473cd8e483c38";

function formSubmitHandler(event) {
  event.preventDefault();

  var cityName = cityInput.value.trim();

  if (cityName) {
    search(cityName);
    cityName.value = "";
  } else {
    alert("Enter a city name.");
  }
}

function search(cityName) {
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

searchFormEl.addEventListener("submit", formSubmitHandler);
