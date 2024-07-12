const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT secret key
const jwtSecret = process.env.JWT_SECRET;

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
 * desc - login a user, create a token for authentication
 * route - POST /api/v1/users/login
 * access - public
 */
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if password is defined
        if (!user.password) {
            return res.status(500).json({ message: 'Server error: user password is not defined' });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error' });
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
    loginUser,
    logoutUser,
}