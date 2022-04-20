const routes = require('express').Router();
const api = require('./api');

routes.get('/ping', function(req, res) {
    return res.send('pong')
});
routes.use('/api', api)

module.exports = routes;