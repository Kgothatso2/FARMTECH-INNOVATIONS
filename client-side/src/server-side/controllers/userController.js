const User = require('../models/User');
const bcrypt = require('bcryptjs');

/**
 * description - Authenticat a user
 * route - POST /api/v1/users/auth
 * access - public
 */

const authenticateUser = (req, res) => {
    res.status(200).json({ msg: 'Authenticate User'});
}

/**
 * description - Register a new user
 * route - POST /api/v1/users/
 * access - public
 */

const registerUser = async (req, res) => {
    const { lastname, firstname, username, email, password } = req.body;

    try {
        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // create new user
        const salts = 10;
        const hashedPassword = await bcrypt.hash(password, salts);

        const newUser = new User({
            firstname, lastname, username, email, password: hashedPassword
        });

        // save new user to database
        await newUser.save();

        res.status(201).json({ msg: 'User created successfully', newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ msg: 'Server Error' });
    }
};

/**
 * description -Logout a user
 * route - POST /api/v1/users/logout
 * access - public
 */

const logoutUser = (req, res) => {
    res.status(200).json({ msg: 'Logout User'});
}

module.exports = {
    authenticateUser,
    registerUser,
    logoutUser,
}