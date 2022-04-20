const models = require("../../models/index");
const {
  errorResponse,
  successResponse,
  notFoundResponse,
} = require("../../libs/response");
class CarController {
  async all(req, res) {
    try {
      const cars = await models.cars.findAll({
        include: [
          {
            model: models.sizes,
          },
        ],
      });
      return successResponse(res, cars);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
  async show(req, res) {
    try {
      const id = req.params.id;
      const car = await models.cars.findOne({
        where: {
          id: id,
        },
      });
      if (!car) {
        return notFoundResponse(res);
      }
      return successResponse(res, car);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
  async store(req, res) {}
  async update(req, res) {}
  async destroy(req, res) {}
}

module.exports = new CarController();
