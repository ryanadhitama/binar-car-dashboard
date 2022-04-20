const api = require('express').Router();
const APICarController = require('../controllers/api/car.controller')
const APISizeController = require('../controllers/api/size.controller')

api.get('/cars', APICarController.all);
api.get('/cars/:id', APICarController.show);

api.get('/sizes', APISizeController.all);

module.exports = api;