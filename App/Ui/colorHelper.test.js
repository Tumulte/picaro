var expect = require("chai").expect;
var hexToRgb = require("./colorHelper").hexToRgb;
var rgbToHsl = require("./colorHelper").rgbToHsl;
var hslToRgb = require("./colorHelper").hslToRgb;
var rgbToHex = require("./colorHelper").rgbToHex;
var pink = "#EA05CA";
var grey = "777777";
var green = "4B2";
var darkBlue = "#148";



describe('hexadecimal is converted to decimal', () => {
  it("return the decimal values", () => {
    expect(hexToRgb(pink).red).to.equal(234);
    expect(hexToRgb(pink).green).to.equal(5);
    expect(hexToRgb(pink).blue).to.equal(202);
  });
});

describe('The hexa is converted to HSL', () => {
  it("return the HSL of a clear value", () => {
    expect(rgbToHsl(pink)).to.deep.equal({
      "light": 47,
      "saturation": 96,
      "hue": 308
    });

  });
  it("return the HSL of a 3 digit dark value", () => {
    expect(rgbToHsl(darkBlue)).to.deep.equal({
      "light": 30,
      "saturation": 78,
      "hue": 214
    });
  });
  it("return the HSL of a 3 digit value with no #", () => {
    expect(rgbToHsl(green)).to.deep.equal({
      "light": 43,
      "saturation": 69,
      "hue": 107
    });
  });
  it("return the HSL of achromatic color with no #", () => {
    expect(rgbToHsl(grey)).to.deep.equal({
      "light": 47,
      "saturation": 0,
      "hue": 0
    });
  });
});
describe('The HSL is converted to RGB', () => {
  it("return the HSL of achromatic color with no #", () => {

    expect(hslToRgb({
      "hue": 17,
      "saturation": 19,
      "light": 63
    })).to.deep.equal({
      "red": 179,
      "green": 153,
      "blue": 143
    });
  });
  it("return the HSL of achromatic color with no #", () => {

    expect(hslToRgb({
      "hue": 177,
      "saturation": 100,
      "light": 47
    })).to.deep.equal({
      "red": 0,
      "green": 240,
      "blue": 228
    });
  });
  it("return the HSL of achromatic color with no #", () => {

    expect(hslToRgb({
      "hue": 0,
      "saturation": 0,
      "light": 47
    })).to.deep.equal({
      "red": 120,
      "green": 120,
      "blue": 120
    });
  });
});
describe('Decimal is converted to hexa', () => {
  it("return the hexa values", () => {
    expect(rgbToHex({
      "red": 2,
      "green": 46,
      "blue": 148
    })).to.equal("#022E94");
  });
});
