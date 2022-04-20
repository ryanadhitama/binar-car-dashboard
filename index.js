require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const flash = require("connect-flash");
const session = require('express-session')
const bodyParser = require("body-parser");
const path = require("path");
const toastr = require("express-toastr");
const routes = require("./routes");
const env = process.env;

const app = express();

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
    user: null,
  })
);
app.use(flash());
app.use(
  toastr({
    positionClass: "toast-top-right",
  })
);
app.use(function (req, res, next) {
  res.locals.toasts = req.toastr.render();
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/admin");

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(env.PORT, () => {
  console.info(`App listening at http://localhost:${env.PORT}`);
});

module.exports = app;
