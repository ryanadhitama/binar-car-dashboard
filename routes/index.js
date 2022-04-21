const routes = require('express').Router();
const CarController = require('../controllers/car.controller')
const api = require('./api');

routes.get('/', CarController.index);
routes.get('/car', CarController.index);
routes.get('/car/create', CarController.create);
routes.get('/car/:id/edit', CarController.show)

routes.use('/api', api)

module.exports = routes;