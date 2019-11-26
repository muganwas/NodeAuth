'use strict'
const UsersController = require('../Controllers/UsersController');
const getUsers = UsersController.getUsers;
const createUser = UsersController.createUser;
const login = UsersController.login;
module.exports.Routes = app => {
    app.get('/api/users', getUsers);
    app.post('/api/user', createUser);
    app.post('/api/login', login);
}