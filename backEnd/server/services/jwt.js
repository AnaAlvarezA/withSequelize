const jwt = require('jsonwebtoken');
const config = require('../config/config');
const secret = config.token_secret;

exports.createToken = (user) => {
    const params = {
        sub: user.id,
        user: user.user,
        id_role: user.id_role
    }

    const jwt = jsonwebtoken.create(params, secret);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 2);
    jwt.setExpiration(expiration);

    const token = jwt.compact();

    return token;
}