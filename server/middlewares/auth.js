const User        = require('../models/user');
const { decode }  = require('../helpers/jwt');

module.exports = {
    authentication: function (req, res, next) {
        try {
            const token = req.headers.access_token
            if (token) {
                const decoded = decode(req.headers.access_token)
                req.authenticatedUser = decoded

                User
                    .findById(req.authenticatedUser._id)
                    .then(user => {
                        if (user) {

                            next();
                        } else {
                            res
                                .status(401)
                                .json({
                                    message: 'Token is not valid'
                                })
                        }
                    })
                    .catch(err => {
                        next(err);
                    })
            } else {
                res
                    .status(401)
                    .json({
                        message: 'Please login to continue'
                    })
            }
        } catch (err) {
            res
                .status(401)
                .json({
                    message: 'Please login to continue'
                })
        }
    }
}
