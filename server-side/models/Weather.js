const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (location) => {
  try {
    const response = await axios.get(`${baseUrl}?q=${location}&appid=${apiKey}&units=metric`);
    return response.data;
  } catch (err) {
    console.error('Error fetching weather data:', err);
  }
};

module.exports = getWeather;
