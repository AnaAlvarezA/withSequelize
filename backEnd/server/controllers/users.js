const users = require('../models').users;
const jwt = require('../services/jwt');

function createUser(req, res) {
    users.create(req.body)
        .then(user => {
            res.status(200).send({ user });
        })
        .catch(err => {
            res.status(500).send({ err });
        })
}

function login(req, res) {
    users.findOne({
            where: {
                user: req.body.user,
                password: req.body.password
            }
        })
        .then(user => {
            if (user) {
                if (req.body.token) {
                    res.status(200).send({
                        token: jwt.createToken(user)
                    });
                } else {
                    res.status(200).send({
                        user: user,
                    });
                }
            } else {
                res.status(401).send({ message: "Acceso no autorizado" });
            }

        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrió un error al buscar el Usuario" });
        })


    function getAll() {
        users.all()
            .then(users => {
                res.status(200).send({ users });
            })
            .catch(err => {
                res.status(500).send({ message: "Ocurrió un error al buscar los usuarios" });
            })
    }
    module.exports = {
        create,
        login,
        getAll
    }