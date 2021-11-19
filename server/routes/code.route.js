const Route = require('express');
const route = new Route();
const CodeController = require('../controllers/code.controller');

route.post('/getcode', CodeController.getCode);

module.exports = route;