const jwt = require('jsonwebtoken');

module.exports = {
    sign: function(_id, name) {
        return jwt.sign({ _id, name } , process.env.JWT_SECRET)
    },

    decode: function(accesstoken) {
        return jwt.verify(accesstoken, process.env.JWT_SECRET)
    }
}