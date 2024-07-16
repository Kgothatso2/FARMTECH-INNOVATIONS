const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    // Check if jsonwebtoken exists && is verified
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redirect('/');
    }
}

module.exports = { requireAuth };