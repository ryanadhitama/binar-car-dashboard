const api = require("express").Router();
const APICarController = require("../controllers/api/car.controller");
const APISizeController = require("../controllers/api/size.controller");

api.get("/cars", APICarController.all);
api.get("/cars/:id", APICarController.show);
api.post("/cars", APICarController.store);
api.put("/cars/:id", APICarController.update);
api.delete("/cars/:id", APICarController.destroy);

api.get("/sizes", APISizeController.all);

module.exports = api;
