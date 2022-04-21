const api = require("express").Router();
const multer = require("multer");
const form = multer({ dest: "public/uploads/car" });
const APICarController = require("../controllers/api/car.controller");
const APISizeController = require("../controllers/api/size.controller");
const APIUploadController = require("../controllers/api/upload.controller");

api.get("/cars", APICarController.all);
api.get("/cars/:id", APICarController.show);
api.post("/cars", APICarController.store);
api.put("/cars/:id", APICarController.update);
api.delete("/cars/:id", APICarController.destroy);

api.get("/sizes", APISizeController.all);

api.post("/upload", form.single("attachment"), APIUploadController.upload);

module.exports = api;
