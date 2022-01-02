"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.isUserAuthenticated = isUserAuthenticated;

require("core-js/modules/es.array.concat.js");

var _passport = _interopRequireDefault(require("passport"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _nanoid = require("nanoid");

var _passportConfig = _interopRequireDefault(require("./passportConfig.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db;
var prefix = "";
var appName = "";

if (process.env.NODE_ENV === "development") {
  prefix = "/public";
}

var getUser = function getUser(value) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "username";
  var parameters = {};
  parameters[type] = value;
  return db.findOne(parameters);
};

function _default(app, userDb) {
  appName = app.get("appName");
  db = userDb;
  (0, _passportConfig.default)(_passport.default, getUser);
  app.use((0, _cookieSession.default)({
    secret: (0, _nanoid.nanoid)(20),
    resave: true,
    saveUninitialized: false
  }));
  app.use(_passport.default.initialize());
  app.use(_passport.default.session());
  app.post("/admin/login", isUserAuthenticated, _passport.default.authenticate("local", {
    successRedirect: "".concat(prefix, "/").concat(app.get("appName")),
    failureRedirect: "/admin/login",
    failureFlash: true
  }));
  app.get("/admin/login", isUserAuthenticated, function (req, res) {
    app.set("views", "".concat(__dirname, "/Views"));
    res.render("login");
  });
  app.get("/admin/logout", function (req, res) {
    req.logOut();
    res.redirect("".concat(prefix, "/").concat(app.get("appName")));
  });
}

function isUserAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("".concat(prefix, "/").concat(appName));
  }

  next();
}