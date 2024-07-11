const Field = require('../models/Field');

/**
 * @description Add a new field to user
 * route - POST /api/v1/fields/
 * access - private(user)
 */
const addField = async (req, res) => {
    try {
        const { fieldName, fieldSize, fieldLocation, fieldLog } = req.body;
        // const userId = req.user._id;

        // check that user already has 10 fields
        // const fieldCount = await Field.countDocuments({ userId });
        // if (fieldCount >= 10) {
        //     return res.status(400).json({ message: 'You can only add up to 10 fields.' });
        // }

        // create new field
        const field = new Field({
            fieldName,
            fieldSize,
            fieldLocation,
            fieldLog,
            // userId
        });

        await field.save();
        res.status(201).json({ msg: 'Field added successfully', field });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
}

/**
 * description - list all fields
 * route - GET /api/v1/list_fields
 * access - private(user)
 */
const listFields = async (req, res) => {
  return;    
}

module.exports = { addField };