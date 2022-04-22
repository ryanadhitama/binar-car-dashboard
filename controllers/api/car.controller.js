const models = require("../../models/index");
const fs = require("fs");
const {
  errorResponse,
  successResponse,
  successFetchResponse,
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
      return successFetchResponse(res, cars);
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
      return successFetchResponse(res, car);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
  async store(req, res) {
    const { name, size_id, price, image } = req.body;

    try {
      const car = await models.cars.create({
        name,
        size_id,
        price,
        image,
      });
      if (car) {
        req.toastr.success("Data Berhasil Disimpan");
        return successResponse(res, "Data Berhasil Disimpan");
      }
    } catch (error) {
      return errorResponse(res, error);
    }
  }
  async update(req, res) {
    const id = req.params.id;
    const { name, size_id, price, image } = req.body;

    try {
      const car = await models.cars.update(
        {
          name,
          size_id,
          price,
          image,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (car) {
        req.toastr.success("Data Berhasil Diedit");
        return successResponse(res, "Data Berhasil Diedit");
      }
    } catch (error) {
      return errorResponse(res, error);
    }
  }
  async destroy(req, res) {
    const id = req.params.id;
    try {
      const data = await models.cars.findOne({
        where: {
          id: id,
        },
      });

      if (data) {
        fs.unlinkSync(`public/uploads/car/${data.image}`);
      }

      const car = models.cars.destroy({
        where: {
          id: id,
        },
      });

      if (car) {
        req.toastr.info("Data Berhasil Dihapus");
        return successResponse(res, "Data Berhasil Dihapus");
      }
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

module.exports = new CarController();
