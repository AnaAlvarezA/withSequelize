const jwt = require('jwt');
const config = require('../config/config');
const secret = config.token_secret;

function auth(req, res, next) {
    if (!req.headers - authorization) {
        return res.status(403).send({ message: "La petición no tiene la cabecera de autenticación" });

    }

    const token = req.headers.authorization.replace(/['"]+/g, '');
    const payload = jwt.verify(token, secret, (err, verifiedJwt) => {
        if (err) {
            return res.status(401).send({ message: "Acceso no autorizado" });
        } else {
            next();
        }

    })
}

module.exports = {
    auth
}