"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _cssGenerator = require("./cssGenerator");

var _cssFileGenerator = require("./cssFileGenerator");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cssData = {
  dominant: "#7094E1",
  variationLightAmt: "5",
  variationSatAmt: "8",
  selectorCollection: {
    html: {
      "font-size": "16px"
    },
    body: {
      background: {
        type: "color",
        data: ["gray", 11]
      },
      color: {
        type: "color",
        data: ["dominant", 0]
      },
      "font-family": "Knile-Regular.otf",
      padding: {
        type: "ratio",
        data: "p"
      }
    },
    "h1, h2, h3, h4, h5, h6": {
      "font-family": "Arial",
      color: {
        type: "color",
        data: [0, 2]
      },
      "font-weight": "bold"
    },
    h1: {
      "font-size": "4.2rem",
      "line-height": "4.2rem",
      "margin-bottom": "1.6rem",
      "margin-top": "1.6rem"
    },
    h2: {
      "font-size": "3rem",
      "margin-bottom": "2rem",
      "line-height": "3rem",
      "margin-top": "1.3rem"
    },
    h3: {
      "font-size": "2rem",
      "line-height": "3rem",
      "margin-bottom": "1.3rem",
      "margin-top": "0rem"
    },
    h4: {
      "font-size": "1.6rem",
      "line-height": "2rem",
      "margin-bottom": "1.3rem",
      "margin-top": "0rem"
    },
    h6: {
      "font-size": "1rem",
      "line-height": "1rem",
      "margin-bottom": "0rem",
      "margin-top": "0rem"
    },
    h5: {
      "margin-bottom": "1.3rem",
      "margin-top": "0rem",
      "font-size": "1rem",
      "line-height": "1rem"
    },
    mkClssaltfont: {
      "font-family": ""
    }
  },
  colorParameterCollection: [{
    hueVariation: -201,
    saturation: 73,
    light: 49
  }, {
    hueVariation: -188,
    saturation: 87,
    light: 58
  }],
  fontOrigin: "local",
  "font-size": "18",
  id: "NTD9gyEL",
  setName: "default3",
  fontFamilyMain: "Knile-Regular.otf",
  fontFamilyAlt: "test.ttf",
  fontFamilyTitle: "Arial",
  ratioCollection: {
    h1: {
      text: "header 1",
      "margin-top": "1.6",
      "margin-topottom": "1.6",
      "font-size": "4.2",
      "line-height": "4.2"
    },
    h2: {
      text: "header 2",
      "margin-top": "1.3",
      "margin-bottom": "2",
      "font-size": "3",
      "line-height": "3"
    },
    h3: {
      text: "header 3",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "2",
      "line-height": "3"
    },
    h4: {
      text: "header 4",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "1.6",
      "line-height": "2"
    },
    h5: {
      text: "header 5",
      "margin-top": "0",
      "margin-bottom": "1.3",
      "font-size": "1",
      "line-height": "1"
    },
    h6: {
      text: "header 6",
      "margin-top": "0",
      "margin-bottom": "0",
      "font-size": "1",
      "line-height": "1"
    },
    p: {
      "line-height": 1.5,
      "font-size": 1,
      "margin-bottom": 0,
      "margin-top": 0,
      text: "base text"
    },
    html: {
      "line-height": 24,
      "font-size": 16
    }
  }
};
var cssTarget = "/* START This is an automatically generated CSS, do not edit */\n@font-face {\n    font-family: \"Knile-Regular\";\n    src: url(\"/fonts/Knile-Regular.otf\");\n}\n\n@font-face {\n    font-family: \"test\";\n    src: url(\"/fonts/test.ttf\");\n}\n:root {\n    --dominant: #7094E1;\n    --color0: #D85F22;\n    --color0-sub0: #4D382E;\n    --color0-sub1: #624232;\n    --color0-sub2: #7A4B33;\n    --color0-sub3: #945333;\n    --color0-sub4: #B05B30;\n    --color0-sub5: #CE622C;\n    --color0-sub6: #DF6D34;\n    --color0-sub7: #EB7A42;\n    --color0-sub8: #F58851;\n    --color0-sub9: #FD9663;\n    --color1: #F19D37;\n    --color1-sub0: #685641;\n    --color1-sub1: #7F6443;\n    --color1-sub2: #987243;\n    --color1-sub3: #B48041;\n    --color1-sub4: #C98E45;\n    --color1-sub5: #D79B50;\n    --color1-sub6: #E4A75E;\n    --color1-sub7: #EEB46D;\n    --color1-sub8: #F6C07E;\n    --color1-sub9: #FCCC92;\n}\nhtml{\n    font-size: 16px;\n}\n#rf-content-container {\n    font-family: Knile-Regular;\n    height: 100%;\n    background: #fff;\n    color: #4E5F83;\n    font-family: Knile-Regular;\n    padding: 1.5rem;\n}\n#rf-content-container h1,\n#rf-content-container h2,\n#rf-content-container h3,\n#rf-content-container h4,\n#rf-content-container h5,\n#rf-content-container h6 {\n    font-family: Arial;\n    color: #7A4B33;\n    font-weight: bold;\n}\n#rf-content-container h1 {\n    font-size: 4.2rem;\n    line-height: 4.2rem;\n    margin-bottom: 1.6rem;\n    margin-top: 1.6rem;\n}\n#rf-content-container h2 {\n    font-size: 3rem;\n    margin-bottom: 2rem;\n    line-height: 3rem;\n    margin-top: 1.3rem;\n}\n#rf-content-container h3 {\n    font-size: 2rem;\n    line-height: 3rem;\n    margin-bottom: 1.3rem;\n}\n#rf-content-container h4 {\n    font-size: 1.6rem;\n    line-height: 2rem;\n    margin-bottom: 1.3rem;\n}\n#rf-content-container h6 {\n    font-size: 1rem;\n    line-height: 1rem;\n}\n#rf-content-container h5 {\n    margin-bottom: 1.3rem;\n    font-size: 1rem;\n    line-height: 1rem;\n}\n\n/* END This was an automatically generated CSS, do not edit */";
var dir = "".concat(__dirname, "/../../static/jesttest");
beforeAll( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (_fs.default.existsSync(dir)) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return _fs.default.mkdirSync(dir);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
describe("checking the CSS generator", function () {
  it("Generates the proper CSS based on the Vue parameters", function () {
    expect((0, _cssGenerator.generateCSS)(cssData)).toEqual(cssTarget);
  });
  it("Generate the proper CSS file", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var content;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _cssFileGenerator.generateCSSFile)("jestTest", cssData);

          case 2:
            _context2.next = 4;
            return _fs.default.readFileSync(dir + "/baseStyle.css", "utf8");

          case 4:
            content = _context2.sent;
            expect(content).toEqual(cssTarget);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it("Gererates the fonts with google fonts", function () {
    cssData.fontOrigin = "google";
    expect((0, _cssGenerator.generateCSS)(cssData)).toContain('@import url("https://fonts.googleapis.com/css?family=Knile-Regular.otf&display=swap");');
    expect((0, _cssGenerator.generateCSS)(cssData)).toContain('@import url("https://fonts.googleapis.com/css?family=test.ttf&display=swap");');
  });
});