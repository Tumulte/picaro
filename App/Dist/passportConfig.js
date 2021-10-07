"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.to-string.js");

var _passportLocal = require("passport-local");

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _nanoid = require("nanoid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(passport, getUser) {
  const authenticateUser = async function authenticateUser(username, password, done) {
    const user = getUser(username);

    if (!user) {
      return done(null, false, {
        message: "No user with that username"
      });
    }

    try {
      const clearPassword = _cryptoJs.default.AES.decrypt(user.password, (0, _nanoid.nanoid)(21)).toString(_cryptoJs.default.enc.Utf8);

      if (password === clearPassword) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Password incorrect"
        });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new _passportLocal.Strategy(authenticateUser));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    done(null, getUser(id, "id"));
  });
}

var _default = initialize;
exports.default = _default;