const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// OpenWeatherAPI Key (replace with your own key)
const openWeatherApiKey = '5ca2c55347ff4c5711dc624fb93f9959';

// Route to get weather information based on city name
app.get('/weather', async (req, res) => {
  try {
    const cityName = req.params.city;
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=1526273&appid=${openWeatherApiKey}`);
    const weatherData = weatherResponse.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Route to get additional data from another API (replace with your own API)
app.get('/additional-data', async (req, res) => {
  try {
    // Make requests to additional APIs here
    // ...
    res.json({ data: 'Additional data from API' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching additional data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
