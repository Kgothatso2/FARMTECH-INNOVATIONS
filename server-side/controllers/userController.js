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

const registerUser = (req, res) => {
    res.status(200).json({ msg: 'Register User'});
}

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