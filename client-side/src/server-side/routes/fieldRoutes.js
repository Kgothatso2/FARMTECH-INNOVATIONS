const express = require('express');
const router = express.Router();
const { addField, updateField, listFields, getField } = require('../controllers/fieldController');
const { addFieldLog, deleteFieldLog, updateFieldLog, listFieldLogs } = require('../controllers/fieldLogController');
// const auth = require();

// add field
router.post('/add_field', addField);

// update field
router.put('/update_field/:fieldId', updateField);

// list fields
router.get('/:userId/list_fields', listFields);

// Add a field log
router.post('/fields/:fieldId/fieldlogs', addFieldLog);

// Delete a field log
router.delete('/fields/:fieldId/fieldlogs/:logId', deleteFieldLog);

// Update a field log
router.put('/fields/:fieldId/fieldlogs/:logId', updateFieldLog);

// List all field logs for a field
router.get('/fields/:fieldId/fieldlogs', listFieldLogs);

// Route to get a specific field by ID
router.get('/fields/:fieldId', getField);

module.exports = router;