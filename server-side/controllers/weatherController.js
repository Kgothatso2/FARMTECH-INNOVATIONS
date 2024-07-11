/* 
* description - to get weather data from openweathermap api
* route - GET /api/v1/weather
* access - users
*/
const getWeather = require('../models/Weather');
const fetchWeather = async (req, res) => {
    const location = req.query.location || 'Lilongwe';
    try {
        const weather = await getWeather(location);
        res.json(weather);
    } catch (err) {
        res.status(500).json({message: 'Error fetching weather data'});
    }
};

module.exports = { fetchWeather };