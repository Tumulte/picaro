"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.promise.js");

var _passportLocal = require("passport-local");

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _nanoid = require("nanoid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function initialize(passport, getUser) {
  var authenticateUser = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password, done) {
      var user, clearPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = getUser(username);

              if (user) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", done(null, false, {
                message: "No user with that username"
              }));

            case 3:
              _context.prev = 3;
              clearPassword = _cryptoJs.default.AES.decrypt(user.password, (0, _nanoid.nanoid)(21)).toString(_cryptoJs.default.enc.Utf8);

              if (!(password === clearPassword)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", done(null, user));

            case 9:
              return _context.abrupt("return", done(null, false, {
                message: "Password incorrect"
              }));

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", done(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
    }));

    return function authenticateUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  passport.use(new _passportLocal.Strategy(authenticateUser));
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    done(null, getUser(id, "id"));
  });
}

var _default = initialize;
exports.default = _default;