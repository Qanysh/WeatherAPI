// const map = L.map('map').setView([0, 0], 2);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// // Example code to get weather information
// async function getWeather(city) {
//   try {
//     const response = await fetch(`/weather/${city}`);
//     const weatherData = await response.json();
//     console.log(weatherData);
//     // Handle weather data here, update the map, etc.
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Example code to get additional data
// async function getAdditionalData() {
//   try {
//     const response = await fetch('/additional-data');
//     const additionalData = await response.json();
//     console.log(additionalData);
//     // Handle additional data here
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Example usage
// getWeather('London');
// getAdditionalData();
fetch(`https://api.openweathermap.org/data/2.5/weather?id=1526273&appid=${openWeatherApiKey}`)
  .then(function(resp) {return resp.json() })
  .then(function (data){
    console.log(data);
  })
