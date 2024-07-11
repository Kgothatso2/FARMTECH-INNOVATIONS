const express = require('express');
const router = express.Router();
const { addField } = require('../controllers/fieldController');
// const auth = require();

router.post('/fields', addField);

module.exports = router;