const express = require('express');
const { authenticateUser, registerUser, checkAuth, logoutUser } = require('../controllers/userController');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');

router.post('/auth', authenticateUser);
router.post('/', registerUser);
router.get('/logout', logoutUser)
router.get('/check-auth', auth, checkAuth);

module.exports = router;
