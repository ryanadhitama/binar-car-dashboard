const models = require("../../models/index");
const {
  errorResponse,
  successResponse
} = require("../../libs/response");

class SizeController {
  async all(req, res) {
    try {
      const sizes = await models.sizes.findAll();
      return successResponse(res, sizes);
    } catch (error) {
      return errorResponse(res, error);
    }
  }
}

module.exports = new SizeController();
