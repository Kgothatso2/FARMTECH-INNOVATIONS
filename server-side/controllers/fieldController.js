const Field = require('../models/Field');
const User = require('../models/User');

/**
 * @description Add a new field to user
 * @route - POST /api/v1/add_field
 * @access - private(user)
 */
const addField = async (req, res) => {
    try {
        const { fieldName, fieldSize, fieldLocation, fieldLog, username } = req.body;
        // const userId = req.user._id;

        // find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // check that user already has 10 fields
        const fieldCount = await Field.countDocuments({ userId: user._id});
        if (fieldCount >= 10) {
            return res.status(400).json({ message: 'You can only add up to 10 fields.' });
        }

        // create new field
        const field = new Field({
            fieldName,
            fieldSize,
            fieldLocation,
            fieldLog,
            userId: user._id
        });

        // save field to database
        await field.save();

        // add field id to user's fields array
        user.fields.push(field._id);
        await user.save();

        console.log(user.fields);

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
    const { userId } = req.query;
    try {
        const fields = await Field.find({ userId });
        res.status(200).json(fields);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

module.exports = { addField, listFields };