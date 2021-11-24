const Route = require('express');
const route = new Route();
const AuthController = require('../controllers/auth.controller');

route.get('/auth/getuserstatus', AuthController.getUserStatus);
route.post('/auth/login', AuthController.login);

module.exports = route;