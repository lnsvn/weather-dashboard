var searchBtn = document.getElementById("search");

// function to test api
function apiTest() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?lat=41.7637&lon=-72.6850&appid=78d9b295a8a505d8adc473cd8e483c38";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.addEventListener("click", apiTest);
