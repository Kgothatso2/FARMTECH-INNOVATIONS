const express = require('express');
const router = express.Router();
const { addField, listFields } = require('../controllers/fieldController');
// const auth = require();

router.post('/add_field', addField);
router.get('/list_fields', listFields);

module.exports = router;