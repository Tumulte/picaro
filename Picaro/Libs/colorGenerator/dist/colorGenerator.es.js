var Se = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var y = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
};
var c = (r, t, e) => (Se(r, t, "access private method"), e);
var N, J, F, Q;
class Ce {
  constructor(t) {
    y(this, N);
    y(this, F);
    this.color = t;
  }
  isHexColor(t) {
    return /^#([0-9A-F]{3}){1,2}$/i.test("#ABC");
  }
  hexToRgb(t) {
    if (!this.isHexColor)
      throw new Error("Not a valid Hex color");
    if (this.color = this.getString(t || this.color), this.color.includes("rgb("))
      return this;
    let e = this.color.replace("#", "");
    e.length === 3 && (e = e.split("").map(
      function(a) {
        return `${a + a}`;
      }
    ).join(""));
    const o = c(this, N, J).call(this, e.substring(0, 2)), i = c(this, N, J).call(this, e.substring(2, 4)), n = c(this, N, J).call(this, e.substring(4, 6));
    return this.color = {
      red: o,
      green: i,
      blue: n
    }, this;
  }
  rgbToHex(t) {
    if (this.color = this.getValueCollection(t || this.color), "red" in this.color)
      this.color = `#${c(this, F, Q).call(this, this.color.red)}${c(this, F, Q).call(this, this.color.green)}${c(this, F, Q).call(this, this.color.blue)}`;
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
    const e = [
      this.color.red / 255,
      this.color.green / 255,
      this.color.blue / 255
    ];
    e.sort(function(h, f) {
      return h - f;
    });
    const o = e[0], i = e[1], n = e[2], a = Math.round((o + n) * 100 / 2);
    if (n === o && i === o)
      return this.color = {
        light: a,
        saturation: 0,
        hue: 0
      }, this;
    let l;
    a > 50 ? l = (n - o) / (2 - n - o) : l = (n - o) / (n + o), l = Math.round(l * 100);
    let s;
    return n === this.color.red / 255 ? s = (this.color.green - this.color.blue) / 255 / (n - o) : n === this.color.green / 255 ? s = 2 + (this.color.blue - this.color.red) / 255 / (n - o) : s = 4 + (this.color.red - this.color.green) / 255 / (n - o), s < 0 ? s = Math.round(s * 60) + 360 : s = Math.round(s * 60), this.color = {
      light: a,
      saturation: l,
      hue: s
    }, this;
  }
  hslToRgb(t) {
    if (this.color = this.getValueCollection(t), !("hue" in this.color))
      throw new Error('The hslToRgb method require a "{hue: XXX, saturation: YYY, light: ZZZ}" object as input value, or hsl(XXX, YYY%, ZZZ%) string');
    const e = this.color.light / 100, o = this.color.saturation / 100, i = this.color.hue / 360;
    if (this.color.saturation === 0) {
      const u = Math.round(e * 255);
      return this.color = {
        red: u,
        green: u,
        blue: u
      }, this;
    }
    let n;
    e < 0.5 ? n = e * (1 + o) : n = e + o - e * o;
    const a = 2 * e - n, l = function(u, v, b) {
      return b < 0 ? b += 1 : b > 1 && (b -= 1), b < 1 / 6 ? u + (v - u) * 6 * b : b < 1 / 2 ? v : b < 2 / 3 ? u + (v - u) * (2 / 3 - b) * 6 : u;
    }, s = l(a, n, i + 1 / 3), h = l(a, n, i), f = l(a, n, i - 1 / 3);
    return this.color = {
      red: Math.round(s * 255),
      green: Math.round(h * 255),
      blue: Math.round(f * 255)
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
    const e = new RegExp(/^#([0-9a-f]{3}){1,2}$/i);
    if (typeof this.color == "object")
      return this.color;
    if (this.color.indexOf("rgb(") > -1) {
      const o = this.color.split("(")[1].split(",");
      return {
        red: parseInt(o[0]),
        green: parseInt(o[1]),
        blue: parseInt(o[2])
      };
    } else if (this.color.indexOf("hsl(") > -1) {
      const o = this.color.split("(")[1].split(" ");
      return {
        hue: parseInt(o[0]),
        saturation: parseInt(o[1]),
        light: parseInt(o[2])
      };
    } else if (e.test(this.color)) {
      const o = this.color;
      return {
        hexred: o.substring(1, 3),
        hexgreen: o.substring(3, 5),
        hexblue: o.substring(5, 7)
      };
    } else
      throw new Error("The color you provided is not a valid color");
  }
}
N = new WeakSet(), J = function(t) {
  return parseInt(t, 16);
}, F = new WeakSet(), Q = function(t) {
  let e = t.toString(16);
  return e.length === 1 && (e = `0${e}`), e.toUpperCase();
};
var Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Y = function(r) {
  return r && r.Math == Math && r;
}, S = (
  // eslint-disable-next-line es-x/no-global-this -- safe
  Y(typeof globalThis == "object" && globalThis) || Y(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Y(typeof self == "object" && self) || Y(typeof Yr == "object" && Yr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Lr = {}, I = function(r) {
  try {
    return !!r();
  } catch {
    return !0;
  }
}, Oe = I, j = !Oe(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), Ie = I, Br = !Ie(function() {
  var r = (function() {
  }).bind();
  return typeof r != "function" || r.hasOwnProperty("prototype");
}), Te = Br, z = Function.prototype.call, Vr = Te ? z.bind(z) : function() {
  return z.apply(z, arguments);
}, Gr = {}, mt = {}.propertyIsEnumerable, Et = Object.getOwnPropertyDescriptor, we = Et && !mt.call({ 1: 2 }, 1);
Gr.f = we ? function(t) {
  var e = Et(this, t);
  return !!e && e.enumerable;
} : mt;
var xt = function(r, t) {
  return {
    enumerable: !(r & 1),
    configurable: !(r & 2),
    writable: !(r & 4),
    value: t
  };
}, jt = Br, Mt = Function.prototype, me = Mt.bind, xr = Mt.call, Ee = jt && me.bind(xr, xr), g = jt ? function(r) {
  return r && Ee(r);
} : function(r) {
  return r && function() {
    return xr.apply(r, arguments);
  };
}, Pt = g, xe = Pt({}.toString), je = Pt("".slice), Ur = function(r) {
  return je(xe(r), 8, -1);
}, Me = g, Pe = I, Re = Ur, fr = Object, _e = Me("".split), Rt = Pe(function() {
  return !fr("z").propertyIsEnumerable(0);
}) ? function(r) {
  return Re(r) == "String" ? _e(r, "") : fr(r);
} : fr, _t = function(r) {
  return r == null;
}, De = _t, Ae = TypeError, Dt = function(r) {
  if (De(r))
    throw Ae("Can't call method on " + r);
  return r;
}, Ne = Rt, Fe = Dt, sr = function(r) {
  return Ne(Fe(r));
}, jr = typeof document == "object" && document.all, He = typeof jr > "u" && jr !== void 0, At = {
  all: jr,
  IS_HTMLDDA: He
}, Nt = At, Le = Nt.all, p = Nt.IS_HTMLDDA ? function(r) {
  return typeof r == "function" || r === Le;
} : function(r) {
  return typeof r == "function";
}, zr = p, Ft = At, Be = Ft.all, H = Ft.IS_HTMLDDA ? function(r) {
  return typeof r == "object" ? r !== null : zr(r) || r === Be;
} : function(r) {
  return typeof r == "object" ? r !== null : zr(r);
}, br = S, Ve = p, Ge = function(r) {
  return Ve(r) ? r : void 0;
}, cr = function(r, t) {
  return arguments.length < 2 ? Ge(br[r]) : br[r] && br[r][t];
}, Ue = g, Ke = Ue({}.isPrototypeOf), ke = cr, Xe = ke("navigator", "userAgent") || "", Ht = S, gr = Xe, Wr = Ht.process, qr = Ht.Deno, Jr = Wr && Wr.versions || qr && qr.version, Qr = Jr && Jr.v8, $, er;
Qr && ($ = Qr.split("."), er = $[0] > 0 && $[0] < 4 ? 1 : +($[0] + $[1]));
!er && gr && ($ = gr.match(/Edge\/(\d+)/), (!$ || $[1] >= 74) && ($ = gr.match(/Chrome\/(\d+)/), $ && (er = +$[1])));
var Ze = er, rt = Ze, Ye = I, Lt = !!Object.getOwnPropertySymbols && !Ye(function() {
  var r = Symbol();
  return !String(r) || !(Object(r) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && rt && rt < 41;
}), ze = Lt, Bt = ze && !Symbol.sham && typeof Symbol.iterator == "symbol", We = cr, qe = p, Je = Ke, Qe = Bt, ro = Object, Vt = Qe ? function(r) {
  return typeof r == "symbol";
} : function(r) {
  var t = We("Symbol");
  return qe(t) && Je(t.prototype, ro(r));
}, to = String, eo = function(r) {
  try {
    return to(r);
  } catch {
    return "Object";
  }
}, oo = p, no = eo, io = TypeError, Gt = function(r) {
  if (oo(r))
    return r;
  throw io(no(r) + " is not a function");
}, ao = Gt, lo = _t, so = function(r, t) {
  var e = r[t];
  return lo(e) ? void 0 : ao(e);
}, dr = Vr, yr = p, pr = H, co = TypeError, uo = function(r, t) {
  var e, o;
  if (t === "string" && yr(e = r.toString) && !pr(o = dr(e, r)) || yr(e = r.valueOf) && !pr(o = dr(e, r)) || t !== "string" && yr(e = r.toString) && !pr(o = dr(e, r)))
    return o;
  throw co("Can't convert object to primitive value");
}, Ut = { exports: {} }, tt = S, ho = Object.defineProperty, Kr = function(r, t) {
  try {
    ho(tt, r, { value: t, configurable: !0, writable: !0 });
  } catch {
    tt[r] = t;
  }
  return t;
}, vo = S, fo = Kr, et = "__core-js_shared__", bo = vo[et] || fo(et, {}), kr = bo, ot = kr;
(Ut.exports = function(r, t) {
  return ot[r] || (ot[r] = t !== void 0 ? t : {});
})("versions", []).push({
  version: "3.25.2",
  mode: "global",
  copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Kt = Ut.exports, go = Dt, yo = Object, kt = function(r) {
  return yo(go(r));
}, po = g, $o = kt, So = po({}.hasOwnProperty), _ = Object.hasOwn || function(t, e) {
  return So($o(t), e);
}, Co = g, Oo = 0, Io = Math.random(), To = Co(1 .toString), Xt = function(r) {
  return "Symbol(" + (r === void 0 ? "" : r) + ")_" + To(++Oo + Io, 36);
}, wo = S, mo = Kt, nt = _, Eo = Xt, it = Lt, Zt = Bt, D = mo("wks"), R = wo.Symbol, at = R && R.for, xo = Zt ? R : R && R.withoutSetter || Eo, ur = function(r) {
  if (!nt(D, r) || !(it || typeof D[r] == "string")) {
    var t = "Symbol." + r;
    it && nt(R, r) ? D[r] = R[r] : Zt && at ? D[r] = at(t) : D[r] = xo(t);
  }
  return D[r];
}, jo = Vr, lt = H, st = Vt, Mo = so, Po = uo, Ro = ur, _o = TypeError, Do = Ro("toPrimitive"), Ao = function(r, t) {
  if (!lt(r) || st(r))
    return r;
  var e = Mo(r, Do), o;
  if (e) {
    if (t === void 0 && (t = "default"), o = jo(e, r, t), !lt(o) || st(o))
      return o;
    throw _o("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), Po(r, t);
}, No = Ao, Fo = Vt, Yt = function(r) {
  var t = No(r, "string");
  return Fo(t) ? t : t + "";
}, Ho = S, ct = H, Mr = Ho.document, Lo = ct(Mr) && ct(Mr.createElement), Bo = function(r) {
  return Lo ? Mr.createElement(r) : {};
}, Vo = j, Go = I, Uo = Bo, zt = !Vo && !Go(function() {
  return Object.defineProperty(Uo("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), Ko = j, ko = Vr, Xo = Gr, Zo = xt, Yo = sr, zo = Yt, Wo = _, qo = zt, ut = Object.getOwnPropertyDescriptor;
Lr.f = Ko ? ut : function(t, e) {
  if (t = Yo(t), e = zo(e), qo)
    try {
      return ut(t, e);
    } catch {
    }
  if (Wo(t, e))
    return Zo(!ko(Xo.f, t, e), t[e]);
};
var hr = {}, Jo = j, Qo = I, rn = Jo && Qo(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), tn = H, en = String, on = TypeError, Wt = function(r) {
  if (tn(r))
    return r;
  throw on(en(r) + " is not an object");
}, nn = j, an = zt, ln = rn, W = Wt, ht = Yt, sn = TypeError, $r = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, Sr = "enumerable", Cr = "configurable", Or = "writable";
hr.f = nn ? ln ? function(t, e, o) {
  if (W(t), e = ht(e), W(o), typeof t == "function" && e === "prototype" && "value" in o && Or in o && !o[Or]) {
    var i = cn(t, e);
    i && i[Or] && (t[e] = o.value, o = {
      configurable: Cr in o ? o[Cr] : i[Cr],
      enumerable: Sr in o ? o[Sr] : i[Sr],
      writable: !1
    });
  }
  return $r(t, e, o);
} : $r : function(t, e, o) {
  if (W(t), e = ht(e), W(o), an)
    try {
      return $r(t, e, o);
    } catch {
    }
  if ("get" in o || "set" in o)
    throw sn("Accessors not supported");
  return "value" in o && (t[e] = o.value), t;
};
var un = j, hn = hr, vn = xt, qt = un ? function(r, t, e) {
  return hn.f(r, t, vn(1, e));
} : function(r, t, e) {
  return r[t] = e, r;
}, Jt = { exports: {} }, Pr = j, fn = _, Qt = Function.prototype, bn = Pr && Object.getOwnPropertyDescriptor, Xr = fn(Qt, "name"), gn = Xr && (function() {
}).name === "something", dn = Xr && (!Pr || Pr && bn(Qt, "name").configurable), yn = {
  EXISTS: Xr,
  PROPER: gn,
  CONFIGURABLE: dn
}, pn = g, $n = p, Rr = kr, Sn = pn(Function.toString);
$n(Rr.inspectSource) || (Rr.inspectSource = function(r) {
  return Sn(r);
});
var re = Rr.inspectSource, Cn = S, On = p, vt = Cn.WeakMap, In = On(vt) && /native code/.test(String(vt)), Tn = Kt, wn = Xt, ft = Tn("keys"), mn = function(r) {
  return ft[r] || (ft[r] = wn(r));
}, te = {}, En = In, ee = S, Ir = g, xn = H, jn = qt, Tr = _, wr = kr, Mn = mn, Pn = te, bt = "Object already initialized", _r = ee.TypeError, Rn = ee.WeakMap, or, V, nr, _n = function(r) {
  return nr(r) ? V(r) : or(r, {});
}, Dn = function(r) {
  return function(t) {
    var e;
    if (!xn(t) || (e = V(t)).type !== r)
      throw _r("Incompatible receiver, " + r + " required");
    return e;
  };
};
if (En || wr.state) {
  var P = wr.state || (wr.state = new Rn()), An = Ir(P.get), gt = Ir(P.has), Nn = Ir(P.set);
  or = function(r, t) {
    if (gt(P, r))
      throw _r(bt);
    return t.facade = r, Nn(P, r, t), t;
  }, V = function(r) {
    return An(P, r) || {};
  }, nr = function(r) {
    return gt(P, r);
  };
} else {
  var A = Mn("state");
  Pn[A] = !0, or = function(r, t) {
    if (Tr(r, A))
      throw _r(bt);
    return t.facade = r, jn(r, A, t), t;
  }, V = function(r) {
    return Tr(r, A) ? r[A] : {};
  }, nr = function(r) {
    return Tr(r, A);
  };
}
var Fn = {
  set: or,
  get: V,
  has: nr,
  enforce: _n,
  getterFor: Dn
}, Hn = I, Ln = p, q = _, Dr = j, Bn = yn.CONFIGURABLE, Vn = re, oe = Fn, Gn = oe.enforce, Un = oe.get, rr = Object.defineProperty, Kn = Dr && !Hn(function() {
  return rr(function() {
  }, "length", { value: 8 }).length !== 8;
}), kn = String(String).split("String"), Xn = Jt.exports = function(r, t, e) {
  String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!q(r, "name") || Bn && r.name !== t) && (Dr ? rr(r, "name", { value: t, configurable: !0 }) : r.name = t), Kn && e && q(e, "arity") && r.length !== e.arity && rr(r, "length", { value: e.arity });
  try {
    e && q(e, "constructor") && e.constructor ? Dr && rr(r, "prototype", { writable: !1 }) : r.prototype && (r.prototype = void 0);
  } catch {
  }
  var o = Gn(r);
  return q(o, "source") || (o.source = kn.join(typeof t == "string" ? t : "")), r;
};
Function.prototype.toString = Xn(function() {
  return Ln(this) && Un(this).source || Vn(this);
}, "toString");
var Zn = Jt.exports, Yn = p, zn = hr, Wn = Zn, qn = Kr, Jn = function(r, t, e, o) {
  o || (o = {});
  var i = o.enumerable, n = o.name !== void 0 ? o.name : t;
  if (Yn(e) && Wn(e, n, o), o.global)
    i ? r[t] = e : qn(t, e);
  else {
    try {
      o.unsafe ? r[t] && (i = !0) : delete r[t];
    } catch {
    }
    i ? r[t] = e : zn.f(r, t, {
      value: e,
      enumerable: !1,
      configurable: !o.nonConfigurable,
      writable: !o.nonWritable
    });
  }
  return r;
}, ne = {}, Qn = Math.ceil, ri = Math.floor, ti = Math.trunc || function(t) {
  var e = +t;
  return (e > 0 ? ri : Qn)(e);
}, ei = ti, ie = function(r) {
  var t = +r;
  return t !== t || t === 0 ? 0 : ei(t);
}, oi = ie, ni = Math.max, ii = Math.min, ai = function(r, t) {
  var e = oi(r);
  return e < 0 ? ni(e + t, 0) : ii(e, t);
}, li = ie, si = Math.min, ci = function(r) {
  return r > 0 ? si(li(r), 9007199254740991) : 0;
}, ui = ci, ae = function(r) {
  return ui(r.length);
}, hi = sr, vi = ai, fi = ae, dt = function(r) {
  return function(t, e, o) {
    var i = hi(t), n = fi(i), a = vi(o, n), l;
    if (r && e != e) {
      for (; n > a; )
        if (l = i[a++], l != l)
          return !0;
    } else
      for (; n > a; a++)
        if ((r || a in i) && i[a] === e)
          return r || a || 0;
    return !r && -1;
  };
}, bi = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: dt(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: dt(!1)
}, gi = g, mr = _, di = sr, yi = bi.indexOf, pi = te, yt = gi([].push), le = function(r, t) {
  var e = di(r), o = 0, i = [], n;
  for (n in e)
    !mr(pi, n) && mr(e, n) && yt(i, n);
  for (; t.length > o; )
    mr(e, n = t[o++]) && (~yi(i, n) || yt(i, n));
  return i;
}, se = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], $i = le, Si = se, Ci = Si.concat("length", "prototype");
ne.f = Object.getOwnPropertyNames || function(t) {
  return $i(t, Ci);
};
var ce = {};
ce.f = Object.getOwnPropertySymbols;
var Oi = cr, Ii = g, Ti = ne, wi = ce, mi = Wt, Ei = Ii([].concat), xi = Oi("Reflect", "ownKeys") || function(t) {
  var e = Ti.f(mi(t)), o = wi.f;
  return o ? Ei(e, o(t)) : e;
}, pt = _, ji = xi, Mi = Lr, Pi = hr, Ri = function(r, t, e) {
  for (var o = ji(t), i = Pi.f, n = Mi.f, a = 0; a < o.length; a++) {
    var l = o[a];
    !pt(r, l) && !(e && pt(e, l)) && i(r, l, n(t, l));
  }
}, _i = I, Di = p, Ai = /#|\.prototype\./, X = function(r, t) {
  var e = Fi[Ni(r)];
  return e == Li ? !0 : e == Hi ? !1 : Di(t) ? _i(t) : !!t;
}, Ni = X.normalize = function(r) {
  return String(r).replace(Ai, ".").toLowerCase();
}, Fi = X.data = {}, Hi = X.NATIVE = "N", Li = X.POLYFILL = "P", Bi = X, Er = S, Vi = Lr.f, Gi = qt, Ui = Jn, Ki = Kr, ki = Ri, Xi = Bi, ue = function(r, t) {
  var e = r.target, o = r.global, i = r.stat, n, a, l, s, h, f;
  if (o ? a = Er : i ? a = Er[e] || Ki(e, {}) : a = (Er[e] || {}).prototype, a)
    for (l in t) {
      if (h = t[l], r.dontCallGetSet ? (f = Vi(a, l), s = f && f.value) : s = a[l], n = Xi(o ? l : e + (i ? "." : "#") + l, r.forced), !n && s !== void 0) {
        if (typeof h == typeof s)
          continue;
        ki(h, s);
      }
      (r.sham || s && s.sham) && Gi(h, "sham", !0), Ui(a, l, h, r);
    }
}, $t = g, Zi = Gt, Yi = Br, zi = $t($t.bind), Wi = function(r, t) {
  return Zi(r), t === void 0 ? r : Yi ? zi(r, t) : function() {
    return r.apply(t, arguments);
  };
}, qi = Ur, Ji = Array.isArray || function(t) {
  return qi(t) == "Array";
}, Qi = ur, ra = Qi("toStringTag"), he = {};
he[ra] = "z";
var ta = String(he) === "[object z]", ea = ta, oa = p, tr = Ur, na = ur, ia = na("toStringTag"), aa = Object, la = tr(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments", sa = function(r, t) {
  try {
    return r[t];
  } catch {
  }
}, ca = ea ? tr : function(r) {
  var t, e, o;
  return r === void 0 ? "Undefined" : r === null ? "Null" : typeof (e = sa(t = aa(r), ia)) == "string" ? e : la ? tr(t) : (o = tr(t)) == "Object" && oa(t.callee) ? "Arguments" : o;
}, ua = g, ha = I, ve = p, va = ca, fa = cr, ba = re, fe = function() {
}, ga = [], be = fa("Reflect", "construct"), Zr = /^\s*(?:class|function)\b/, da = ua(Zr.exec), ya = !Zr.exec(fe), B = function(t) {
  if (!ve(t))
    return !1;
  try {
    return be(fe, ga, t), !0;
  } catch {
    return !1;
  }
}, ge = function(t) {
  if (!ve(t))
    return !1;
  switch (va(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return ya || !!da(Zr, ba(t));
  } catch {
    return !0;
  }
};
ge.sham = !0;
var pa = !be || ha(function() {
  var r;
  return B(B.call) || !B(Object) || !B(function() {
    r = !0;
  }) || r;
}) ? ge : B, St = Ji, $a = pa, Sa = H, Ca = ur, Oa = Ca("species"), Ct = Array, Ia = function(r) {
  var t;
  return St(r) && (t = r.constructor, $a(t) && (t === Ct || St(t.prototype)) ? t = void 0 : Sa(t) && (t = t[Oa], t === null && (t = void 0))), t === void 0 ? Ct : t;
}, Ta = Ia, wa = function(r, t) {
  return new (Ta(r))(t === 0 ? 0 : t);
}, ma = Wi, Ea = g, xa = Rt, ja = kt, Ma = ae, Pa = wa, Ot = Ea([].push), m = function(r) {
  var t = r == 1, e = r == 2, o = r == 3, i = r == 4, n = r == 6, a = r == 7, l = r == 5 || n;
  return function(s, h, f, u) {
    for (var v = ja(s), b = xa(v), vr = ma(h, f), Z = Ma(b), d = 0, T = u || Pa, w = t ? T(s, Z) : e || a ? T(s, 0) : void 0, M, L; Z > d; d++)
      if ((l || d in b) && (M = b[d], L = vr(M, d, v), r))
        if (t)
          w[d] = L;
        else if (L)
          switch (r) {
            case 3:
              return !0;
            case 5:
              return M;
            case 6:
              return d;
            case 2:
              Ot(w, M);
          }
        else
          switch (r) {
            case 4:
              return !1;
            case 7:
              Ot(w, M);
          }
    return n ? -1 : o || i ? i : w;
  };
}, Ra = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: m(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: m(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: m(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: m(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: m(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: m(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: m(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: m(7)
}, _a = I, Da = function(r, t) {
  var e = [][r];
  return !!e && _a(function() {
    e.call(null, t || function() {
      return 1;
    }, 1);
  });
}, Aa = Ra.forEach, Na = Da, Fa = Na("forEach"), Ha = Fa ? [].forEach : function(t) {
  return Aa(this, t, arguments.length > 1 ? arguments[1] : void 0);
}, La = ue, It = Ha;
La({ target: "Array", proto: !0, forced: [].forEach != It }, {
  forEach: It
});
var Ba = S, Va = g, Ga = function(r, t) {
  return Va(Ba[r].prototype[t]);
}, Ua = Ga;
Ua("Array", "forEach");
var Ka = le, ka = se, Xa = Object.keys || function(t) {
  return Ka(t, ka);
}, Za = j, de = g, Ya = Xa, za = sr, Wa = Gr.f, qa = de(Wa), Ja = de([].push), Tt = function(r) {
  return function(t) {
    for (var e = za(t), o = Ya(e), i = o.length, n = 0, a = [], l; i > n; )
      l = o[n++], (!Za || qa(e, l)) && Ja(a, r ? [l, e[l]] : e[l]);
    return a;
  };
}, Qa = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: Tt(!0),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: Tt(!1)
}, rl = ue, tl = Qa.entries;
rl({ target: "Object", stat: !0 }, {
  entries: function(t) {
    return tl(t);
  }
});
var el = S, ol = el, nl = ol;
nl.Object.entries;
const il = {
  linear(r) {
    return r;
  },
  easeIn(r) {
    return 1 - Math.cos(r * 3.1415 / 2);
  },
  easeInHard(r) {
    return r * r;
  },
  easeInHarder(r) {
    return r * r * r;
  },
  easeOut(r) {
    return Math.sin(r * 3.1415 / 2);
  },
  easeOutHard(r) {
    return 1 - (1 - r) * (1 - r);
  },
  easeOutHarder(r) {
    return 1 - Math.pow(1 - r, 3);
  },
  easeInOut(r) {
    return -(Math.cos(3.1415 * r) - 1) / 2;
  },
  easeInOutHard(r) {
    return r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2;
  },
  easeInOutHarder(r) {
    return r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2;
  }
}, wt = Object.entries(il), al = function(r) {
  const t = [];
  for (let e = 0; e < 10; e++) {
    const o = Math.floor(e * r.length / 10);
    t[e] = r[o];
  }
  return t;
};
var G, Ar, U, Nr, K, Fr, ir, ye, ar, pe, C, E, k, Hr, O, x, lr, $e;
class sl {
  constructor(t) {
    y(this, G);
    y(this, U);
    y(this, K);
    y(this, ir);
    y(this, ar);
    y(this, C);
    y(this, k);
    y(this, O);
    y(this, lr);
    this.dominant = t, this.lightVariation = 0, this.satVariation = 10, this.hueVariation = 0, this.hueCurve = 0, this.hueMove = 0, this.satMove = 0, this.satCurve = 0, this.lightMove = 0, this.lightCurve = 0, this.count = 10, this.full = !0, this.textLight = 0, this.textHue = 0, this.textSaturation = 0, this.colorUtils = new Ce(t), this.hsl = this.colorUtils.hexToHsl().getValueCollection(), this.colorCollection = {
      dominant: t,
      combinationCollection: [],
      dominantSubCollection: [],
      dominantTextSubCollection: [],
      graySubCollection: [],
      grayTextSubCollection: [],
      alertSubCollection: [],
      alertTextSubCollection: [],
      warningSubCollection: [],
      warningTextSubCollection: [],
      infoSubCollection: [],
      infoTextSubCollection: [],
      successSubCollection: [],
      successTextSubCollection: []
    };
  }
  updateColor(t) {
    if (typeof t == "string")
      this.colorCollection.dominant = t, this.hsl = this.colorUtils.hexToHsl(t).getValueCollection();
    else if ("hue" in t)
      this.hsl = t, this.dominant = this.colorUtils.hslToHex(t).getString(), this.colorCollection.dominant = this.colorUtils.hslToHex(t).getString();
    else
      throw new Error("Invalid color format");
    return this;
  }
  generate(t = [], {
    count: e = "10",
    text: { light: o = "50", saturation: i = "0", hue: n = "0" } = {},
    hue: { variation: a = "0", curve: l = "0", move: s = "0" } = {},
    light: { variation: h = "5", move: f = "0", curve: u = "0" } = {},
    saturation: { variation: v = "0", move: b = "0", curve: vr = "0" } = {},
    full: Z = !0
  } = {}) {
    this.count = parseInt(e, 10), this.hueVariation = parseInt(a, 10), this.hueCurve = parseInt(l, 10), this.hueMove = parseInt(s, 10), this.satVariation = parseInt(v, 10), this.satMove = parseInt(b, 10), this.satCurve = parseInt(vr, 10), this.lightVariation = parseInt(h, 10), this.lightMove = parseInt(f, 10), this.lightCurve = parseInt(u, 10), this.full = Z, this.textLight = parseInt(o, 10), this.textSaturation = parseInt(i, 10), this.textHue = parseInt(n, 10), this.colorCollection.dominantSubCollection = c(this, C, E).call(this, this.hsl), this.colorCollection.dominantTextSubCollection = c(this, O, x).call(this, this.colorCollection.dominantSubCollection), this.colorCollection.combinationCollection = [], t.forEach((T) => {
      const w = T.saturation !== void 0 ? T.saturation : this.hsl.saturation, M = T.light !== void 0 ? T.light : this.hsl.light, L = {
        hue: this.hsl.hue + T.hueVariation,
        saturation: w,
        light: M
      };
      c(this, ar, pe).call(this, L);
    }), this.colorCollection.graySubCollection = c(this, C, E).call(this, {
      hue: this.hsl.hue,
      saturation: 0,
      light: this.hsl.light
    }, !0), this.colorCollection.grayTextSubCollection = c(this, O, x).call(this, this.colorCollection.graySubCollection);
    const d = (() => {
      const w = 60 * Math.round(this.hsl.hue / 60);
      return Math.round((this.hsl.hue - w) / 2);
    })();
    return this.colorCollection.alertSubCollection = c(this, C, E).call(this, {
      hue: 0 + d,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    }), this.colorCollection.alertTextSubCollection = c(this, O, x).call(this, this.colorCollection.alertSubCollection), this.colorCollection.warningSubCollection = c(this, C, E).call(this, {
      hue: 60 + d,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    }), this.colorCollection.warningTextSubCollection = c(this, O, x).call(this, this.colorCollection.warningSubCollection), this.colorCollection.successSubCollection = c(this, C, E).call(this, {
      hue: 120 + d * 2,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    }), this.colorCollection.successTextSubCollection = c(this, O, x).call(this, this.colorCollection.successSubCollection), this.colorCollection.infoSubCollection = c(this, C, E).call(this, {
      hue: 240 + d,
      saturation: this.hsl.saturation,
      light: this.hsl.light
    }), this.colorCollection.infoTextSubCollection = c(this, O, x).call(this, this.colorCollection.infoSubCollection), this.colorCollection;
  }
}
G = new WeakSet(), Ar = function(t, e = 0, o = 100) {
  return t < e ? e : t > o ? o : t;
}, U = new WeakSet(), Nr = function(t) {
  return t > 360 ? t - 360 : t < 0 ? t + 360 : t;
}, K = new WeakSet(), Fr = function(t, e, o = 10, i = 0, n = 0) {
  let a = 0;
  const l = Math.round(o / 2);
  for (let u = 1; u <= 5; u++)
    t + (u - 1) * e > 100 ? a += 1 : t - u * e < 0 && (a -= 1);
  const h = a * e + i, f = [];
  for (let u = 0; u < o; u++) {
    let v;
    u < l ? v = t - (o / 2 - u) * e - h : v = t + (u - o / 2) * e - h, v = Math.round(wt[n][1](v / 100) * 100), v = Math.max(v, 0), v = Math.min(v, 100), f[u] = v;
  }
  return f;
}, ir = new WeakSet(), ye = function(t, e = 10) {
  const o = this.hueVariation, i = this.hueCurve, n = Math.round(e / 2), a = [];
  for (let l = 0; l < e; l++) {
    let s;
    const h = wt[i][1](l / 10) * 10, f = o * h;
    l < n ? s = t - o * n + f : s = t + o * (h - n), a.push(c(this, U, Nr).call(this, s) + this.hueMove);
  }
  return a;
}, ar = new WeakSet(), pe = function(t) {
  t.hue = c(this, U, Nr).call(this, t.hue);
  const e = this.colorUtils.hslToHex(t).getString(), o = this.colorCollection.combinationCollection;
  o.push({
    hex: e,
    hue: t.hue,
    light: t.light,
    saturation: t.saturation,
    subCombination: [],
    textSubCombination: []
  }), c(this, lr, $e).call(this);
  const i = o[o.length - 1];
  i.textSubCombination = c(this, O, x).call(this, i.subCombination);
}, C = new WeakSet(), E = function(t, e) {
  const o = c(this, K, Fr).call(this, t.light, this.lightVariation, this.count, this.lightMove, this.lightCurve), i = c(this, K, Fr).call(this, t.saturation, this.satVariation, this.count, this.satMove, this.satCurve), n = c(this, ir, ye).call(this, t.hue, this.count), a = [];
  for (let l = 0; l < this.count; l++)
    a[l] = {
      hue: n[l] || t.hue,
      light: o[l],
      saturation: e ? 0 : i[l],
      hex: this.colorUtils.hslToHex(
        {
          hue: n[l] || t.hue,
          light: c(this, G, Ar).call(this, o[l]),
          saturation: e ? 0 : c(this, G, Ar).call(this, i[l])
        }
      ).getString()
    };
  return this.full ? al(a) : a;
}, k = new WeakSet(), Hr = function(t, e, o, i) {
  let n = 0, a = 50;
  return i === "light" && (a = 60), i === "light" && e.hue >= 200 && e.hue <= 300 && (a = 75), Math.abs(e[i] - o[i]) > t ? n = o[i] : e[i] < a ? n = e[i] + t > 100 ? 100 : e[i] + t : n = e[i] - t < 0 ? 0 : e[i] - t, n;
}, O = new WeakSet(), x = function(t) {
  Math.round(t.length / 2);
  const e = [...t].reverse(), o = [];
  return t.forEach((i, n) => {
    const a = c(this, k, Hr).call(this, this.textLight, i, e[n], "light"), l = c(this, k, Hr).call(this, this.textSaturation, i, e[n], "saturation"), s = { hue: e[n].hue, saturation: l, light: a, hex: "" }, h = this.colorUtils.hslToHex(s).getString();
    s.hex = h, o.push(s);
  }), o;
}, lr = new WeakSet(), $e = function() {
  const t = this.colorCollection.combinationCollection, e = t[t.length - 1];
  e.subCombination = c(this, C, E).call(this, e);
};
export {
  sl as GenerateColorSet
};
