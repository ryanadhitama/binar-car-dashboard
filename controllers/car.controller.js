class CarController {
  index(req, res) {
    const locals = {
      title: "List Car",
      layout: "./layouts/dashboard",
    };
    res.render("pages/car/index", locals);
  }
  create(req, res) {
    const locals = {
      title: "Add New Car",
      layout: "./layouts/dashboard",
    };
    res.render("pages/car/form", locals);
  }
  show(req, res) {
    const locals = {
      title: 'Update Car Information',
      layout: './layouts/dashboard'
    }
    res.render('pages/car/form', locals)
  }
}

module.exports = new CarController();
