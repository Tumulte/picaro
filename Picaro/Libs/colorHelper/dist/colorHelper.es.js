var H = (c, t, o) => {
  if (!t.has(c))
    throw TypeError("Cannot " + o);
};
var w = (c, t, o) => {
  if (t.has(c))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(c) : t.set(c, o);
};
var g = (c, t, o) => (H(c, t, "access private method"), o);
var a, d, b, f;
class C {
  constructor(t) {
    w(this, a);
    w(this, b);
    this.color = t;
  }
  isHexColor(t) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(t);
  }
  hexToRgb(t) {
    if (!this.isHexColor)
      throw new Error("Not a valid Hex color");
    if (this.color = this.getString(t || this.color), this.color.includes("rgb("))
      return this;
    let o = this.color.replace("#", "");
    o.length === 3 && (o = o.split("").map(
      function(s) {
        return `${s + s}`;
      }
    ).join(""));
    const e = g(this, a, d).call(this, o.substring(0, 2)), u = g(this, a, d).call(this, o.substring(2, 4)), r = g(this, a, d).call(this, o.substring(4, 6));
    return this.color = {
      red: e,
      green: u,
      blue: r
    }, this;
  }
  rgbToHex(t) {
    if (this.color = this.getValueCollection(t || this.color), "red" in this.color)
      this.color = `#${g(this, b, f).call(this, this.color.red)}${g(this, b, f).call(this, this.color.green)}${g(this, b, f).call(this, this.color.blue)}`;
    else
      throw new Error(
        'The rgbToHex method require a "{red: XXX, green: YYY, blue: ZZZ}" object as input value'
      );
    return this;
  }
  rgbToHsl(t) {
    if (this.color = this.getValueCollection(t || this.color), !("red" in this.color))
      throw new Error(
        'The rgbToHsl method require a "{red: XXX, green: YYY, blue: ZZZ}" object as input value'
      );
    const o = [
      this.color.red / 255,
      this.color.green / 255,
      this.color.blue / 255
    ];
    o.sort(function(x, p) {
      return x - p;
    });
    const e = o[0], u = o[1], r = o[2], s = Math.round((e + r) * 100 / 2);
    if (r === e && u === e)
      return this.color = {
        light: s,
        saturation: 0,
        hue: 0
      }, this;
    let l;
    s > 50 ? l = (r - e) / (2 - r - e) : l = (r - e) / (r + e), l = Math.round(l * 100);
    let i;
    return r === this.color.red / 255 ? i = (this.color.green - this.color.blue) / 255 / (r - e) : r === this.color.green / 255 ? i = 2 + (this.color.blue - this.color.red) / 255 / (r - e) : i = 4 + (this.color.red - this.color.green) / 255 / (r - e), i < 0 ? i = Math.round(i * 60) + 360 : i = Math.round(i * 60), this.color = {
      light: s,
      saturation: l,
      hue: i
    }, this;
  }
  hslToRgb(t) {
    if (this.color = this.getValueCollection(t), !("hue" in this.color))
      throw new Error('The hslToRgb method require a "{hue: XXX, saturation: YYY, light: ZZZ}" object as input value, or hsl(XXX, YYY%, ZZZ%) string');
    const o = this.color.light / 100, e = this.color.saturation / 100, u = this.color.hue / 360;
    if (this.color.saturation === 0) {
      const h = Math.round(o * 255);
      return this.color = {
        red: h,
        green: h,
        blue: h
      }, this;
    }
    let r;
    o < 0.5 ? r = o * (1 + e) : r = o + e - o * e;
    const s = 2 * o - r, l = function(h, T, n) {
      return n < 0 ? n += 1 : n > 1 && (n -= 1), n < 1 / 6 ? h + (T - h) * 6 * n : n < 1 / 2 ? T : n < 2 / 3 ? h + (T - h) * (2 / 3 - n) * 6 : h;
    }, i = l(s, r, u + 1 / 3), x = l(s, r, u), p = l(s, r, u - 1 / 3);
    return this.color = {
      red: Math.round(i * 255),
      green: Math.round(x * 255),
      blue: Math.round(p * 255)
    }, this;
  }
  hexToHsl(t) {
    return t && (this.color = t), this.color = this.hexToRgb(this.color).getValueCollection(), this.color = this.rgbToHsl(this.color).getValueCollection(), this;
  }
  hslToHex(t) {
    return t && (this.color = t), this.color = this.hslToRgb(this.color).getValueCollection(), this.color = this.rgbToHex(this.color).getValueCollection(), this;
  }
  getString(t) {
    if (t && (this.color = t), typeof this.color == "string")
      return this.color;
    if ("red" in this.color)
      return `rgb(${this.color.red},${this.color.green},${this.color.blue})`;
    if ("hue" in this.color)
      return `hsl(${this.color.hue},${this.color.saturation}%,${this.color.light}%)`;
    if ("hexred" in this.color)
      return `#${this.color.hexred}${this.color.hexgreen}${this.color.hexblue}`;
    throw new Error(
      'The getString method only takes Objects with the following keys : "hue, saturation, light" (with HSL values) - "hexblue, hexgreen, hexred" (with Hexadecimal RGB), "red, green, blue" (with base 256 RGB)'
    );
  }
  getValueCollection(t) {
    if (typeof t < "u" && (this.color = t), typeof this.color != "string")
      return this.color;
    const o = new RegExp(/^#([0-9a-f]{3}){1,2}$/i);
    if (typeof this.color == "object")
      return this.color;
    if (this.color.indexOf("rgb(") > -1) {
      const e = this.color.split("(")[1].split(",");
      return {
        red: parseInt(e[0]),
        green: parseInt(e[1]),
        blue: parseInt(e[2])
      };
    } else if (this.color.indexOf("hsl(") > -1) {
      const e = this.color.split("(")[1].split(" ");
      return {
        hue: parseInt(e[0]),
        saturation: parseInt(e[1]),
        light: parseInt(e[2])
      };
    } else if (o.test(this.color)) {
      const e = this.color;
      return {
        hexred: e.substring(1, 3),
        hexgreen: e.substring(3, 5),
        hexblue: e.substring(5, 7)
      };
    } else
      throw new Error("The color you provided is not a valid color");
  }
}
a = new WeakSet(), d = function(t) {
  return parseInt(t, 16);
}, b = new WeakSet(), f = function(t) {
  let o = t.toString(16);
  return o.length === 1 && (o = `0${o}`), o.toUpperCase();
};
export {
  C as ColorHelper
};
