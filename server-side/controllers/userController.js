const User = require("../models/User");
const { handleErrors } = require("../middlewares/errorHandler");

/**
 * description - Authenticat a user
 * route - POST /api/v1/users/auth
 * access - public
 */

const authenticateUser = (req, res) => {
  res.status(200).json({ msg: "Authenticate User" });
};

/**
 * description - Register a new user
 * route - POST /api/v1/users/
 * access - public
 */

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

/**
 * description -Logout a user
 * route - POST /api/v1/users/logout
 * access - public
 */

const logoutUser = (req, res) => {
  res.status(200).json({ msg: "Logout User" });
};

module.exports = {
  authenticateUser,
  registerUser,
  logoutUser,
};
