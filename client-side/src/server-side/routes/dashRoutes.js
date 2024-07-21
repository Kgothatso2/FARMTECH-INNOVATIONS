const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashController');

router.get('/dashboard/:userId', getDashboardData);

module.exports = router;
