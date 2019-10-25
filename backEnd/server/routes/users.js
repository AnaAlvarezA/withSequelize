const usersController = require('../controllers').users;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/user', md_auth.auth, usersController.create);
    app.post('/api/login', usersController.login);
    app.get('/api/users', md_auth.auth, usersController.getAll);
}