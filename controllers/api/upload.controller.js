const fs = require("fs");
var uuid = require("uuid");

class UploadController {
  async upload(req, res) {
    let result = {};

    if (req.file) {
      let originalName = req.file.originalname;
      let newName = uuid.v4() + "_" + originalName;
      let temporary = req.file.path;
      fs.copyFileSync(temporary, `public/uploads/car/${newName}`);
      fs.unlinkSync(temporary);
      result.attachment = newName;
    }

    res.json(result);
  }
}

module.exports = new UploadController();
