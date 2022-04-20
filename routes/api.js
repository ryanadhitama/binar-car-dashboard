const api = require('express').Router();
const CarController = require('../controllers/api/car.controller')
const SizeController = require('../controllers/api/size.controller')

api.get('/cars', CarController.all);
api.get('/cars/:id', CarController.show);

api.get('/sizes', SizeController.all);

module.exports = api;