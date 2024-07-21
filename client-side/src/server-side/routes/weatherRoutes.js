const express = require('express');
const router = express.Router();
const { fetchWeather } = require('../controllers/weatherController');

router.get('/weather', fetchWeather);

module.exports = router;
