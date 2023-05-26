import { unref as i, getCurrentScope as ya, onScopeDispose as wa, ref as F, watch as gt, nextTick as xa, shallowRef as _a, reactive as qt, getCurrentInstance as za, computed as O, defineComponent as uo, h as ka, provide as po, inject as go, onErrorCaptured as Ta, withDirectives as mo, openBlock as f, createElementBlock as z, isRef as wt, normalizeClass as V, renderSlot as ut, vModelSelect as Sa, createElementVNode as _, Fragment as J, normalizeStyle as Pr, createVNode as L, Transition as Pa, withCtx as C, createTextVNode as dt, toDisplayString as P, createCommentVNode as E, toRefs as bo, renderList as at, createBlock as W, withKeys as $r, withModifiers as re, createSlots as $a, normalizeProps as vo, guardReactiveProps as fo, vModelText as ja, mergeProps as Oa, toHandlers as Aa, toRef as jr, defineCustomElement as mt } from "vue";
/*!
  * MJSZ VBR Widgets v2.0.0-alpha.0
  * (c) 2023 Akos Stegner
  * Released: 26/05/2023, 15:01:21
  * Released under the MIT License.
  */
var Or;
const Le = typeof window < "u", La = (t) => typeof t < "u", Ia = (t) => typeof t == "function", Ea = (t) => typeof t == "string", _t = () => {
};
Le && ((Or = window == null ? void 0 : window.navigator) == null ? void 0 : Or.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _e(t) {
  return typeof t == "function" ? t() : i(t);
}
function Ca(t, e) {
  function r(...o) {
    t(() => e.apply(this, o), { fn: e, thisArg: this, args: o });
  }
  return r;
}
const ho = (t) => t();
function Na(t = ho) {
  const e = F(!0);
  function r() {
    e.value = !1;
  }
  function o() {
    e.value = !0;
  }
  return { isActive: e, pause: r, resume: o, eventFilter: (...n) => {
    e.value && t(...n);
  } };
}
function Ma(t, e = !1, r = "Timeout") {
  return new Promise((o, a) => {
    setTimeout(e ? () => a(r) : o, t);
  });
}
function Da(t) {
  return t;
}
function mr(t) {
  return ya() ? (wa(t), !0) : !1;
}
function br(t, e, r = {}) {
  const {
    immediate: o = !0
  } = r, a = F(!1);
  let n = null;
  function s() {
    n && (clearTimeout(n), n = null);
  }
  function l() {
    a.value = !1, s();
  }
  function c(...d) {
    s(), a.value = !0, n = setTimeout(() => {
      a.value = !1, n = null, t(...d);
    }, _e(e));
  }
  return o && (a.value = !0, Le && c()), mr(l), {
    isPending: a,
    start: c,
    stop: l
  };
}
var Ar = Object.getOwnPropertySymbols, Ra = Object.prototype.hasOwnProperty, Ga = Object.prototype.propertyIsEnumerable, Fa = (t, e) => {
  var r = {};
  for (var o in t)
    Ra.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
  if (t != null && Ar)
    for (var o of Ar(t))
      e.indexOf(o) < 0 && Ga.call(t, o) && (r[o] = t[o]);
  return r;
};
function Va(t, e, r = {}) {
  const o = r, {
    eventFilter: a = ho
  } = o, n = Fa(o, [
    "eventFilter"
  ]);
  return gt(t, Ca(a, e), n);
}
function yo(t, e, r) {
  const o = gt(t, (...a) => (xa(() => o()), e(...a)), r);
}
var Ba = Object.defineProperty, Ha = Object.defineProperties, Ya = Object.getOwnPropertyDescriptors, ze = Object.getOwnPropertySymbols, wo = Object.prototype.hasOwnProperty, xo = Object.prototype.propertyIsEnumerable, Lr = (t, e, r) => e in t ? Ba(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ua = (t, e) => {
  for (var r in e || (e = {}))
    wo.call(e, r) && Lr(t, r, e[r]);
  if (ze)
    for (var r of ze(e))
      xo.call(e, r) && Lr(t, r, e[r]);
  return t;
}, Ka = (t, e) => Ha(t, Ya(e)), Wa = (t, e) => {
  var r = {};
  for (var o in t)
    wo.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
  if (t != null && ze)
    for (var o of ze(t))
      e.indexOf(o) < 0 && xo.call(t, o) && (r[o] = t[o]);
  return r;
};
function qa(t, e, r = {}) {
  const o = r, {
    eventFilter: a
  } = o, n = Wa(o, [
    "eventFilter"
  ]), { eventFilter: s, pause: l, resume: c, isActive: d } = Na(a);
  return { stop: Va(t, e, Ka(Ua({}, n), {
    eventFilter: s
  })), pause: l, resume: c, isActive: d };
}
function Za(t, e, r) {
  return gt(t, (o, a, n) => {
    o && e(o, a, n);
  }, r);
}
function de(t) {
  var e;
  const r = _e(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
const vr = Le ? window : void 0, Xa = Le ? window.document : void 0;
function Kt(...t) {
  let e, r, o, a;
  if (Ea(t[0]) || Array.isArray(t[0]) ? ([r, o, a] = t, e = vr) : [e, r, o, a] = t, !e)
    return _t;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const n = [], s = () => {
    n.forEach((v) => v()), n.length = 0;
  }, l = (v, u, p) => (v.addEventListener(u, p, a), () => v.removeEventListener(u, p, a)), c = gt(() => de(e), (v) => {
    s(), v && n.push(...r.flatMap((u) => o.map((p) => l(v, u, p))));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), s();
  };
  return mr(d), d;
}
function Ja(t, e, r = {}) {
  const { window: o = vr, ignore: a, capture: n = !0, detectIframe: s = !1 } = r;
  if (!o)
    return;
  let l = !0, c;
  const d = (g) => {
    o.clearTimeout(c);
    const m = de(t);
    if (!(!m || m === g.target || g.composedPath().includes(m))) {
      if (!l) {
        l = !0;
        return;
      }
      e(g);
    }
  }, v = (g) => a && a.some((m) => {
    const b = de(m);
    return b && (g.target === b || g.composedPath().includes(b));
  }), u = [
    Kt(o, "click", d, { passive: !0, capture: n }),
    Kt(o, "pointerdown", (g) => {
      const m = de(t);
      m && (l = !g.composedPath().includes(m) && !v(g));
    }, { passive: !0 }),
    Kt(o, "pointerup", (g) => {
      if (g.button === 0) {
        const m = g.composedPath();
        g.composedPath = () => m, c = o.setTimeout(() => d(g), 50);
      }
    }, { passive: !0 }),
    s && Kt(o, "blur", (g) => {
      var m;
      const b = de(t);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(b != null && b.contains(o.document.activeElement)) && e(g);
    })
  ].filter(Boolean);
  return () => u.forEach((g) => g());
}
function Ir(t, e = {}) {
  const {
    interrupt: r = !0,
    onError: o = _t,
    onFinished: a = _t
  } = e, n = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  }, s = Array.from(new Array(t.length), () => ({ state: n.pending, data: null })), l = qt(s), c = F(-1);
  if (!t || t.length === 0)
    return a(), {
      activeIndex: c,
      result: l
    };
  function d(v, u) {
    c.value++, l[c.value].data = u, l[c.value].state = v;
  }
  return t.reduce((v, u) => v.then((p) => {
    var g;
    if (((g = l[c.value]) == null ? void 0 : g.state) === n.rejected && r) {
      a();
      return;
    }
    return u(p).then((m) => (d(n.fulfilled, m), c.value === t.length - 1 && a(), m));
  }).catch((p) => (d(n.rejected, p), o(), p)), Promise.resolve()), {
    activeIndex: c,
    result: l
  };
}
function vt(t, e, r) {
  const {
    immediate: o = !0,
    delay: a = 0,
    onError: n = _t,
    resetOnExecute: s = !0,
    shallow: l = !0,
    throwError: c
  } = r != null ? r : {}, d = l ? _a(e) : F(e), v = F(!1), u = F(!1), p = F(void 0);
  async function g(m = 0, ...b) {
    s && (d.value = e), p.value = void 0, v.value = !1, u.value = !0, m > 0 && await Ma(m);
    const x = typeof t == "function" ? t(...b) : t;
    try {
      const k = await x;
      d.value = k, v.value = !0;
    } catch (k) {
      if (p.value = k, n(k), c)
        throw p;
    } finally {
      u.value = !1;
    }
    return d.value;
  }
  return o && g(a), {
    state: d,
    isReady: v,
    isLoading: u,
    error: p,
    execute: g
  };
}
function Qa(t) {
  return JSON.parse(JSON.stringify(t));
}
const nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ir = "__vueuse_ssr_handlers__";
nr[ir] = nr[ir] || {};
nr[ir];
function _o({ document: t = Xa } = {}) {
  if (!t)
    return F("visible");
  const e = F(t.visibilityState);
  return Kt(t, "visibilitychange", () => {
    e.value = t.visibilityState;
  }), e;
}
var tn = Object.defineProperty, Er = Object.getOwnPropertySymbols, en = Object.prototype.hasOwnProperty, rn = Object.prototype.propertyIsEnumerable, Cr = (t, e, r) => e in t ? tn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, on = (t, e) => {
  for (var r in e || (e = {}))
    en.call(e, r) && Cr(t, r, e[r]);
  if (Er)
    for (var r of Er(e))
      rn.call(e, r) && Cr(t, r, e[r]);
  return t;
};
async function an(t) {
  return new Promise((e, r) => {
    const o = new Image(), { src: a, srcset: n, sizes: s } = t;
    o.src = a, n && (o.srcset = n), s && (o.sizes = s), o.onload = () => e(o), o.onerror = r;
  });
}
const nn = (t, e = {}) => {
  const r = vt(() => an(_e(t)), void 0, on({
    resetOnExecute: !0
  }, e));
  return gt(() => _e(t), () => r.execute(e.delay), { deep: !0 }), r;
};
var Nr;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Nr || (Nr = {}));
function zo(t, e, r) {
  const { start: o } = br(n, e), a = F(!1);
  async function n() {
    !a.value || (await t(), o());
  }
  function s() {
    a.value || (a.value = !0, n());
  }
  function l() {
    a.value = !1;
  }
  return r != null && r.immediate && s(), mr(l), {
    isActive: a,
    pause: l,
    resume: s
  };
}
var sn = Object.defineProperty, Mr = Object.getOwnPropertySymbols, ln = Object.prototype.hasOwnProperty, cn = Object.prototype.propertyIsEnumerable, Dr = (t, e, r) => e in t ? sn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, dn = (t, e) => {
  for (var r in e || (e = {}))
    ln.call(e, r) && Dr(t, r, e[r]);
  if (Mr)
    for (var r of Mr(e))
      cn.call(e, r) && Dr(t, r, e[r]);
  return t;
};
const un = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
dn({
  linear: Da
}, un);
function ko(t = "history", e = {}) {
  const {
    initialValue: r = {},
    removeNullishValues: o = !0,
    removeFalsyValues: a = !1,
    write: n = !0,
    window: s = vr
  } = e;
  if (!s)
    return qt(r);
  const l = qt({});
  function c() {
    if (t === "history")
      return s.location.search || "";
    if (t === "hash") {
      const k = s.location.hash || "", w = k.indexOf("?");
      return w > 0 ? k.slice(w) : "";
    } else
      return (s.location.hash || "").replace(/^#/, "");
  }
  function d(k) {
    const w = k.toString();
    if (t === "history")
      return `${w ? `?${w}` : ""}${s.location.hash || ""}`;
    if (t === "hash-params")
      return `${s.location.search || ""}${w ? `#${w}` : ""}`;
    const T = s.location.hash || "#", A = T.indexOf("?");
    return A > 0 ? `${T.slice(0, A)}${w ? `?${w}` : ""}` : `${T}${w ? `?${w}` : ""}`;
  }
  function v() {
    return new URLSearchParams(c());
  }
  function u(k) {
    const w = new Set(Object.keys(l));
    for (const T of k.keys()) {
      const A = k.getAll(T);
      l[T] = A.length > 1 ? A : k.get(T) || "", w.delete(T);
    }
    Array.from(w).forEach((T) => delete l[T]);
  }
  const { pause: p, resume: g } = qa(l, () => {
    const k = new URLSearchParams("");
    Object.keys(l).forEach((w) => {
      const T = l[w];
      Array.isArray(T) ? T.forEach((A) => k.append(w, A)) : o && T == null || a && !T ? k.delete(w) : k.set(w, T);
    }), m(k);
  }, { deep: !0 });
  function m(k, w) {
    p(), w && u(k), s.history.replaceState(s.history.state, s.document.title, s.location.pathname + d(k)), g();
  }
  function b() {
    !n || m(v(), !0);
  }
  Kt(s, "popstate", b, !1), t !== "history" && Kt(s, "hashchange", b, !1);
  const x = v();
  return x.keys().next().value ? u(x) : Object.assign(l, r), l;
}
function pn(t, e, r, o = {}) {
  var a, n, s;
  const {
    clone: l = !1,
    passive: c = !1,
    eventName: d,
    deep: v = !1,
    defaultValue: u
  } = o, p = za(), g = r || (p == null ? void 0 : p.emit) || ((a = p == null ? void 0 : p.$emit) == null ? void 0 : a.bind(p)) || ((s = (n = p == null ? void 0 : p.proxy) == null ? void 0 : n.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let m = d;
  e || (e = "modelValue"), m = d || m || `update:${e.toString()}`;
  const b = (k) => l ? Ia(l) ? l(k) : Qa(k) : k, x = () => La(t[e]) ? b(t[e]) : u;
  if (c) {
    const k = x(), w = F(k);
    return gt(() => t[e], (T) => w.value = b(T)), gt(w, (T) => {
      (T !== t[e] || v) && g(m, T);
    }, { deep: v }), w;
  } else
    return O({
      get() {
        return x();
      },
      set(k) {
        g(m, k);
      }
    });
}
function gn(t, e, r = {}) {
  const o = {};
  for (const a in t)
    o[a] = pn(t, a, e, r);
  return o;
}
function Z(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function tt(t) {
  return function e(r) {
    return arguments.length === 0 || Z(r) ? e : t.apply(this, arguments);
  };
}
function K(t) {
  return function e(r, o) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return Z(r) ? e : tt(function(a) {
          return t(r, a);
        });
      default:
        return Z(r) && Z(o) ? e : Z(r) ? tt(function(a) {
          return t(a, o);
        }) : Z(o) ? tt(function(a) {
          return t(r, a);
        }) : t(r, o);
    }
  };
}
function Ie(t, e) {
  switch (t) {
    case 0:
      return function() {
        return e.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return e.apply(this, arguments);
      };
    case 2:
      return function(r, o) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(r, o, a) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(r, o, a, n) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(r, o, a, n, s) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, o, a, n, s, l) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, o, a, n, s, l, c) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, o, a, n, s, l, c, d) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, o, a, n, s, l, c, d, v) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, o, a, n, s, l, c, d, v, u) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Ee(t, e, r) {
  return function() {
    for (var o = [], a = 0, n = t, s = 0; s < e.length || a < arguments.length; ) {
      var l;
      s < e.length && (!Z(e[s]) || a >= arguments.length) ? l = e[s] : (l = arguments[a], a += 1), o[s] = l, Z(l) || (n -= 1), s += 1;
    }
    return n <= 0 ? r.apply(this, o) : Ie(n, Ee(t, o, r));
  };
}
var mn = /* @__PURE__ */ K(function(e, r) {
  return e === 1 ? tt(r) : Ie(e, Ee(e, [], r));
});
const Ce = mn;
function Xt(t) {
  return function e(r, o, a) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return Z(r) ? e : K(function(n, s) {
          return t(r, n, s);
        });
      case 2:
        return Z(r) && Z(o) ? e : Z(r) ? K(function(n, s) {
          return t(n, o, s);
        }) : Z(o) ? K(function(n, s) {
          return t(r, n, s);
        }) : tt(function(n) {
          return t(r, o, n);
        });
      default:
        return Z(r) && Z(o) && Z(a) ? e : Z(r) && Z(o) ? K(function(n, s) {
          return t(n, s, a);
        }) : Z(r) && Z(a) ? K(function(n, s) {
          return t(n, o, s);
        }) : Z(o) && Z(a) ? K(function(n, s) {
          return t(r, n, s);
        }) : Z(r) ? tt(function(n) {
          return t(n, o, a);
        }) : Z(o) ? tt(function(n) {
          return t(r, n, a);
        }) : Z(a) ? tt(function(n) {
          return t(r, o, n);
        }) : t(r, o, a);
    }
  };
}
const Ne = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function bn(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function Me(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var o = arguments[arguments.length - 1];
    if (!Ne(o)) {
      for (var a = 0; a < t.length; ) {
        if (typeof o[t[a]] == "function")
          return o[t[a]].apply(o, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (bn(o)) {
        var n = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return n(o);
      }
    }
    return r.apply(this, arguments);
  };
}
function To(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const oe = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
var vn = /* @__PURE__ */ K(function(e, r) {
  return r > e ? r : e;
});
const fn = vn;
function xe(t, e) {
  for (var r = 0, o = e.length, a = Array(o); r < o; )
    a[r] = t(e[r]), r += 1;
  return a;
}
function De(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var hn = /* @__PURE__ */ tt(function(e) {
  return Ne(e) ? !0 : !e || typeof e != "object" || De(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
});
const yn = hn;
var wn = /* @__PURE__ */ function() {
  function t(e) {
    this.f = e;
  }
  return t.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, t.prototype["@@transducer/result"] = function(e) {
    return e;
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(e, r);
  }, t;
}();
function xn(t) {
  return new wn(t);
}
var _n = /* @__PURE__ */ K(function(e, r) {
  return Ie(e.length, function() {
    return e.apply(r, arguments);
  });
});
const zn = _n;
function kn(t, e, r) {
  for (var o = 0, a = r.length; o < a; ) {
    if (e = t["@@transducer/step"](e, r[o]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    o += 1;
  }
  return t["@@transducer/result"](e);
}
function Rr(t, e, r) {
  for (var o = r.next(); !o.done; ) {
    if (e = t["@@transducer/step"](e, o.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    o = r.next();
  }
  return t["@@transducer/result"](e);
}
function Gr(t, e, r, o) {
  return t["@@transducer/result"](r[o](zn(t["@@transducer/step"], t), e));
}
var Fr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Re(t, e, r) {
  if (typeof t == "function" && (t = xn(t)), yn(r))
    return kn(t, e, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return Gr(t, e, r, "fantasy-land/reduce");
  if (r[Fr] != null)
    return Rr(t, e, r[Fr]());
  if (typeof r.next == "function")
    return Rr(t, e, r);
  if (typeof r.reduce == "function")
    return Gr(t, e, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
var Tn = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = oe.init, t.prototype["@@transducer/result"] = oe.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), Sn = /* @__PURE__ */ K(function(e, r) {
  return new Tn(e, r);
});
const Pn = Sn;
function ae(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Vr = Object.prototype.toString, $n = /* @__PURE__ */ function() {
  return Vr.call(arguments) === "[object Arguments]" ? function(e) {
    return Vr.call(e) === "[object Arguments]";
  } : function(e) {
    return ae("callee", e);
  };
}();
const So = $n;
var jn = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Br = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Hr = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), On = function(e, r) {
  for (var o = 0; o < e.length; ) {
    if (e[o] === r)
      return !0;
    o += 1;
  }
  return !1;
}, An = /* @__PURE__ */ tt(typeof Object.keys == "function" && !Hr ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, o, a = [], n = Hr && So(e);
  for (r in e)
    ae(r, e) && (!n || r !== "length") && (a[a.length] = r);
  if (jn)
    for (o = Br.length - 1; o >= 0; )
      r = Br[o], ae(r, e) && !On(a, r) && (a[a.length] = r), o -= 1;
  return a;
});
const Zt = An;
var Ln = /* @__PURE__ */ K(
  /* @__PURE__ */ Me(["fantasy-land/map", "map"], Pn, function(e, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return Ce(r.length, function() {
          return e.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return Re(function(o, a) {
          return o[a] = e(r[a]), o;
        }, {}, Zt(r));
      default:
        return xe(e, r);
    }
  })
);
const At = Ln, Po = Number.isInteger || function(e) {
  return e << 0 === e;
};
var In = /* @__PURE__ */ K(function(e, r) {
  var o = e < 0 ? r.length + e : e;
  return De(r) ? r.charAt(o) : r[o];
});
const Ge = In;
var En = /* @__PURE__ */ K(function(e, r) {
  if (r != null)
    return Po(e) ? Ge(e, r) : r[e];
});
const zt = En;
var Cn = /* @__PURE__ */ K(function(e, r) {
  return At(zt(e), r);
});
const Nn = Cn;
var Mn = /* @__PURE__ */ Xt(Re);
const $o = Mn;
var Dn = /* @__PURE__ */ tt(function(e) {
  return function() {
    return e;
  };
});
const Yr = Dn;
var Rn = /* @__PURE__ */ tt(function(e) {
  return Ce($o(fn, 0, Nn("length", e)), function() {
    for (var r = 0, o = e.length; r < o; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const Gn = Rn;
var Fn = /* @__PURE__ */ Xt(function(e, r, o) {
  var a = e(r), n = e(o);
  return a < n ? -1 : a > n ? 1 : 0;
});
const Fe = Fn;
function Vn(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
function Bn(t) {
  return new RegExp(t.source, (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : ""));
}
var Hn = /* @__PURE__ */ tt(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
const sr = Hn;
function jo(t, e, r, o) {
  var a = function(s) {
    for (var l = e.length, c = 0; c < l; ) {
      if (t === e[c])
        return r[c];
      c += 1;
    }
    e[c] = t, r[c] = s;
    for (var d in t)
      t.hasOwnProperty(d) && (s[d] = o ? jo(t[d], e, r, !0) : t[d]);
    return s;
  };
  switch (sr(t)) {
    case "Object":
      return a(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return a([]);
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return Bn(t);
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      return t.slice();
    default:
      return t;
  }
}
function Yn(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function fr(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var o = arguments[r - 1];
    return Ne(o) || typeof o[t] != "function" ? e.apply(this, arguments) : o[t].apply(o, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Un = /* @__PURE__ */ Xt(
  /* @__PURE__ */ fr("slice", function(e, r, o) {
    return Array.prototype.slice.call(o, e, r);
  })
);
const Kn = Un;
var Wn = /* @__PURE__ */ tt(
  /* @__PURE__ */ fr(
    "tail",
    /* @__PURE__ */ Kn(1, 1 / 0)
  )
);
const qn = Wn;
function Oo() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Ie(arguments[0].length, $o(Yn, arguments[0], qn(arguments)));
}
var Zn = /* @__PURE__ */ tt(function(e) {
  return De(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse();
});
const Xn = Zn;
function Ve() {
  if (arguments.length === 0)
    throw new Error("compose requires at least one argument");
  return Oo.apply(this, Xn(arguments));
}
var Jn = /* @__PURE__ */ Ge(0);
const Wt = Jn;
function Ur(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function Kr(t, e, r) {
  for (var o = 0, a = r.length; o < a; ) {
    if (t(e, r[o]))
      return !0;
    o += 1;
  }
  return !1;
}
function Qn(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function ti(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const rr = typeof Object.is == "function" ? Object.is : ti;
function Wr(t, e, r, o) {
  var a = Ur(t), n = Ur(e);
  function s(l, c) {
    return hr(l, c, r.slice(), o.slice());
  }
  return !Kr(function(l, c) {
    return !Kr(s, c, l);
  }, n, a);
}
function hr(t, e, r, o) {
  if (rr(t, e))
    return !0;
  var a = sr(t);
  if (a !== sr(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && Qn(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && rr(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!rr(t.valueOf(), e.valueOf()))
        return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (!(t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.sticky === e.sticky && t.unicode === e.unicode))
        return !1;
      break;
  }
  for (var n = r.length - 1; n >= 0; ) {
    if (r[n] === t)
      return o[n] === e;
    n -= 1;
  }
  switch (a) {
    case "Map":
      return t.size !== e.size ? !1 : Wr(t.entries(), e.entries(), r.concat([t]), o.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Wr(t.values(), e.values(), r.concat([t]), o.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var s = Zt(t);
  if (s.length !== Zt(e).length)
    return !1;
  var l = r.concat([t]), c = o.concat([e]);
  for (n = s.length - 1; n >= 0; ) {
    var d = s[n];
    if (!(ae(d, e) && hr(e[d], t[d], l, c)))
      return !1;
    n -= 1;
  }
  return !0;
}
var ei = /* @__PURE__ */ K(function(e, r) {
  return hr(e, r, [], []);
});
const Be = ei;
function ri(t, e, r) {
  var o, a;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (o = 1 / e; r < t.length; ) {
            if (a = t[r], a === 0 && 1 / a === o)
              return r;
            r += 1;
          }
          return -1;
        } else if (e !== e) {
          for (; r < t.length; ) {
            if (a = t[r], typeof a == "number" && a !== a)
              return r;
            r += 1;
          }
          return -1;
        }
        return t.indexOf(e, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return t.indexOf(e, r);
      case "object":
        if (e === null)
          return t.indexOf(e, r);
    }
  for (; r < t.length; ) {
    if (Be(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function Ao(t, e) {
  return ri(e, t, 0) >= 0;
}
function or(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var le = function(e) {
  return (e < 10 ? "0" : "") + e;
}, oi = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + le(e.getUTCMonth() + 1) + "-" + le(e.getUTCDate()) + "T" + le(e.getUTCHours()) + ":" + le(e.getUTCMinutes()) + ":" + le(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
const ai = oi;
function ni(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function ii(t, e) {
  for (var r = 0, o = e.length, a = []; r < o; )
    t(e[r]) && (a[a.length] = e[r]), r += 1;
  return a;
}
function Lo(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var si = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = oe.init, t.prototype["@@transducer/result"] = oe.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}(), li = /* @__PURE__ */ K(function(e, r) {
  return new si(e, r);
});
const ci = li;
var di = /* @__PURE__ */ K(
  /* @__PURE__ */ Me(["fantasy-land/filter", "filter"], ci, function(t, e) {
    return Lo(e) ? Re(function(r, o) {
      return t(e[o]) && (r[o] = e[o]), r;
    }, {}, Zt(e)) : ii(t, e);
  })
);
const Io = di;
var ui = /* @__PURE__ */ K(function(e, r) {
  return Io(ni(e), r);
});
const pi = ui;
function Eo(t, e) {
  var r = function(s) {
    var l = e.concat([t]);
    return Ao(s, l) ? "<Circular>" : Eo(s, l);
  }, o = function(n, s) {
    return xe(function(l) {
      return or(l) + ": " + r(n[l]);
    }, s.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + xe(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + xe(r, t).concat(o(t, pi(function(n) {
        return /^\d+$/.test(n);
      }, Zt(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : or(ai(t))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : or(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var a = t.toString();
        if (a !== "[object Object]")
          return a;
      }
      return "{" + o(t, Zt(t)).join(", ") + "}";
  }
}
var gi = /* @__PURE__ */ tt(function(e) {
  return Eo(e, []);
});
const mi = gi;
var bi = /* @__PURE__ */ function() {
  function t(e, r, o, a) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = o, this.xf = a, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = oe.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (ae(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var o = this.keyFn(r);
    return this.inputs[o] = this.inputs[o] || [o, this.valueAcc], this.inputs[o][1] = this.valueFn(this.inputs[o][1], r), e;
  }, t;
}(), vi = /* @__PURE__ */ Ee(4, [], function(e, r, o, a) {
  return new bi(e, r, o, a);
});
const fi = vi;
var hi = /* @__PURE__ */ Ee(
  4,
  [],
  /* @__PURE__ */ Me([], fi, function(e, r, o, a) {
    return Re(function(n, s) {
      var l = o(s), c = e(ae(l, n) ? n[l] : jo(r, [], [], !1), s);
      return c && c["@@transducer/reduced"] ? To(n) : (n[l] = c, n);
    }, {}, a);
  })
);
const yi = hi;
var wi = /* @__PURE__ */ Xt(function(e, r, o) {
  var a = e(r), n = e(o);
  return a > n ? -1 : a < n ? 1 : 0;
});
const yr = wi;
var xi = /* @__PURE__ */ Ge(-1);
const _i = xi;
function zi(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var ki = /* @__PURE__ */ tt(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : Ne(e) ? [] : De(e) ? "" : Lo(e) ? {} : So(e) ? function() {
    return arguments;
  }() : zi(e) ? e.constructor.from("") : void 0;
});
const Ti = ki;
var Si = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.idx = -1, this.found = !1;
  }
  return t.prototype["@@transducer/init"] = oe.init, t.prototype["@@transducer/result"] = function(e) {
    return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.idx += 1, this.f(r) && (this.found = !0, e = To(this.xf["@@transducer/step"](e, this.idx))), e;
  }, t;
}(), Pi = /* @__PURE__ */ K(function(e, r) {
  return new Si(e, r);
});
const $i = Pi;
var ji = /* @__PURE__ */ K(
  /* @__PURE__ */ Me([], $i, function(e, r) {
    for (var o = 0, a = r.length; o < a; ) {
      if (e(r[o]))
        return o;
      o += 1;
    }
    return -1;
  })
);
const Oi = ji;
var Ai = /* @__PURE__ */ K(
  /* @__PURE__ */ fr(
    "groupBy",
    /* @__PURE__ */ yi(function(t, e) {
      return t.push(e), t;
    }, [])
  )
);
const Li = Ai;
var Ii = /* @__PURE__ */ Xt(function(e, r, o) {
  return Ce(Math.max(e.length, r.length, o.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : o.apply(this, arguments);
  });
});
const Ei = Ii;
var Ci = /* @__PURE__ */ K(Ao);
const Ni = Ci;
var Mi = /* @__PURE__ */ K(function(e, r) {
  return Ce(e + 1, function() {
    var o = arguments[e];
    if (o != null && Vn(o[r]))
      return o[r].apply(o, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(mi(o) + ' does not have a method named "' + r + '"');
  });
});
const Co = Mi;
var Di = /* @__PURE__ */ tt(function(e) {
  return e != null && Be(e, Ti(e));
});
const Ri = Di;
var Gi = /* @__PURE__ */ K(function(e, r) {
  return e.map(function(o) {
    for (var a = r, n = 0, s; n < o.length; ) {
      if (a == null)
        return;
      s = o[n], a = Po(s) ? Ge(s, a) : a[s], n += 1;
    }
    return a;
  });
});
const Fi = Gi;
var Vi = /* @__PURE__ */ K(function(e, r) {
  return Fi([e], r)[0];
});
const Bi = Vi;
var Hi = /* @__PURE__ */ K(function(e, r) {
  for (var o = {}, a = {}, n = 0, s = e.length; n < s; )
    a[e[n]] = 1, n += 1;
  for (var l in r)
    a.hasOwnProperty(l) || (o[l] = r[l]);
  return o;
});
const Yi = Hi;
var Ui = /* @__PURE__ */ K(function(e, r) {
  for (var o = {}, a = 0; a < e.length; )
    e[a] in r && (o[e[a]] = r[e[a]]), a += 1;
  return o;
});
const He = Ui;
var Ki = /* @__PURE__ */ Xt(function(e, r, o) {
  return Be(r, zt(e, o));
});
const Wi = Ki;
var qi = /* @__PURE__ */ Xt(function(e, r, o) {
  return e(zt(r, o));
});
const Zi = qi;
var Xi = /* @__PURE__ */ K(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
});
const Ye = Xi;
var Ji = /* @__PURE__ */ K(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(function(o, a) {
    for (var n = 0, s = 0; n === 0 && s < e.length; )
      n = e[s](o, a), s += 1;
    return n;
  });
});
const No = Ji;
var Qi = /* @__PURE__ */ Co(1, "split");
const me = Qi;
var ts = /* @__PURE__ */ Co(0, "toLowerCase");
const es = ts;
var ce = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`, rs = "\u200B", os = typeof String.prototype.trim == "function", as = /* @__PURE__ */ tt(!os || /* @__PURE__ */ ce.trim() || !/* @__PURE__ */ rs.trim() ? function(e) {
  var r = new RegExp("^[" + ce + "][" + ce + "]*"), o = new RegExp("[" + ce + "][" + ce + "]*$");
  return e.replace(r, "").replace(o, "");
} : function(e) {
  return e.trim();
});
const ke = as, Mo = Symbol("I18nContext"), it = qt({
  messages: {},
  locale: "",
  fallbackLocale: ""
}), ns = ({ messages: t = {}, locale: e = "", fallbackLocale: r = "" }) => {
  it.messages = t, it.locale = e, it.fallbackLocale = r;
  const o = (c, d = {}) => {
    const v = !Ri(d), u = At(ke, me(".", c));
    return O(() => {
      const g = Do(u);
      return v ? ss(g, d) : g;
    }).value;
  }, a = (c) => {
    const d = At(ke, me(".", c));
    return Boolean(lr(it.locale, d, it.messages));
  }, n = (c) => {
    it.locale = c;
  }, l = {
    locale: O({
      get() {
        return it.locale;
      },
      set(c) {
        it.locale = c;
      }
    }),
    setLocale: n,
    translate: o,
    hasTranlation: a
  };
  return po(Mo, l), {
    translate: o
  };
}, Tt = (t) => {
  t && (it.messages = t.messages, it.locale = t.locale, it.fallbackLocale = t.fallbackLocale);
  const e = is();
  return {
    locale: e.locale,
    t: e.translate,
    setLocale: e.setLocale,
    hasTranlation: e.hasTranlation
  };
}, is = () => {
  const t = go(Mo, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, Do = (t = []) => {
  let e = lr(it.locale, t, it.messages);
  return !e && it.fallbackLocale && (e = lr(it.fallbackLocale, t, it.messages)), e || t.join(".");
};
function lr(t, e, r) {
  return Bi([t, ...e], r);
}
const ss = function(t, e) {
  return t.replace(/\{(\w+)\}/g, function(r, o) {
    return e[o];
  });
}, ls = uo({
  props: {
    tag: {
      type: String,
      default: "div"
    },
    path: {
      type: String,
      defult: ""
    }
  },
  setup(t, { slots: e }) {
    const r = At(ke, me(".", t.path)), o = Do(r), a = me(/{|}/, o), n = Object.keys(e).map((s) => {
      const l = a.indexOf(s);
      return l > -1 && (a[l] = e[s]()[0]), a;
    });
    return () => ka(t.tag, n);
  }
}), Ro = (t, e = "", r = {}) => {
  const o = F(""), { t: a } = Tt();
  if (e)
    try {
      const l = cs(i(t), e);
      t = Yi(l, i(t));
    } catch (l) {
      o.value = l;
    }
  const n = (l) => {
    var c, d;
    return {
      ...l,
      ...l.label && { label: a((c = l.label) != null ? c : "", i(r)) },
      ...l.tooltip && { tooltip: a((d = l.tooltip) != null ? d : "") }
    };
  };
  return {
    columns: O(() => At(n, i(t))),
    error: o
  };
}, cs = (t, e = "") => {
  const r = At(ke, me(",", e)), o = Zt(t);
  if (r[0] === "")
    return resolve([]);
  const a = r.findIndex((n) => !o.includes(n));
  if (a > -1)
    throw r[a];
  return r;
};
function ds(t) {
  return t && t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e) => e.toLowerCase()).join("-");
}
const Go = Symbol("ErrorProviderContext"), xt = () => {
  const t = F(""), e = F({}), r = (n) => {
    console.log({ error: n }), t.value = n.message || n.error.message, e.value = {
      message: n.message,
      key: n.key || ds(n.message),
      cause: n.cause
    };
  };
  return po(Go, {
    onError: r,
    reset: () => {
      t.value = "", e.value = {};
    }
  }), window.onerror = (n) => {
    console.log("WINDOW_ONERROR:", n);
  }, Ta((n, s, l) => {
    console.log("onErrorCaptured:", n, s, l);
  }), {
    hasError: O(() => t.value.length > 0),
    message: t,
    error: e,
    onError: r
  };
}, Ue = () => {
  const t = us();
  return {
    onError: t.onError,
    reset: t.reset
  };
}, us = () => {
  const t = go(Go, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, lt = async (t, e, r) => {
  const o = `https://api.icehockey.hu/vbr${i(t)}?${ps(r)}`;
  return new Promise((a, n) => {
    fetch(o, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": gs(e)
      }
    }).then((s) => s.json()).then((s) => {
      if (s.error)
        return n(s);
      a(s.data);
    }).catch((s) => {
      n(s);
    });
  });
}, ps = (t) => Object.keys(t).map((e) => e + "=" + t[e]).join("&"), gs = (t) => {
  var e;
  return t || ((e = window.__MJSZ_VBR_WIDGET__) != null && e.apiKey ? window.__MJSZ_VBR_WIDGET__.apiKey : ({}.NODE_ENV !== "production", ""));
};
function Fo(t = [], e = {}) {
  const { delay: r = 0 } = e, o = F(!1), a = O(() => {
    const l = i(t);
    return Array.isArray(l) ? l.map((c) => i(c)).some(Boolean) : l;
  }), { start: n, stop: s } = br(() => {
    o.value = !0;
  }, r);
  return gt(
    a,
    (l) => {
      if (l)
        return n();
      s(), o.value = !1;
    },
    { immediate: !0, deep: !0 }
  ), o;
}
const pt = (t) => "mjsz-vbr-" + t;
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wr = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    var r = 1e3, o = 6e4, a = 36e5, n = "millisecond", s = "second", l = "minute", c = "hour", d = "day", v = "week", u = "month", p = "quarter", g = "year", m = "date", b = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, T = function(I, j, $) {
      var M = String(I);
      return !M || M.length >= j ? I : "" + Array(j + 1 - M.length).join($) + I;
    }, A = { s: T, z: function(I) {
      var j = -I.utcOffset(), $ = Math.abs(j), M = Math.floor($ / 60), S = $ % 60;
      return (j <= 0 ? "+" : "-") + T(M, 2, "0") + ":" + T(S, 2, "0");
    }, m: function I(j, $) {
      if (j.date() < $.date())
        return -I($, j);
      var M = 12 * ($.year() - j.year()) + ($.month() - j.month()), S = j.clone().add(M, u), D = $ - S < 0, R = j.clone().add(M + (D ? -1 : 1), u);
      return +(-(M + ($ - S) / (D ? S - R : R - S)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: u, y: g, w: v, d, D: m, h: c, m: l, s, ms: n, Q: p }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, G = "en", B = {};
    B[G] = w;
    var U = function(I) {
      return I instanceof et;
    }, Y = function I(j, $, M) {
      var S;
      if (!j)
        return G;
      if (typeof j == "string") {
        var D = j.toLowerCase();
        B[D] && (S = D), $ && (B[D] = $, S = D);
        var R = j.split("-");
        if (!S && R.length > 1)
          return I(R[0]);
      } else {
        var H = j.name;
        B[H] = j, S = H;
      }
      return !M && S && (G = S), S || !M && G;
    }, N = function(I, j) {
      if (U(I))
        return I.clone();
      var $ = typeof j == "object" ? j : {};
      return $.date = I, $.args = arguments, new et($);
    }, h = A;
    h.l = Y, h.i = U, h.w = function(I, j) {
      return N(I, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
    };
    var et = function() {
      function I($) {
        this.$L = Y($.locale, null, !0), this.parse($);
      }
      var j = I.prototype;
      return j.parse = function($) {
        this.$d = function(M) {
          var S = M.date, D = M.utc;
          if (S === null)
            return new Date(NaN);
          if (h.u(S))
            return new Date();
          if (S instanceof Date)
            return new Date(S);
          if (typeof S == "string" && !/Z$/i.test(S)) {
            var R = S.match(x);
            if (R) {
              var H = R[2] - 1 || 0, rt = (R[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(R[1], H, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, rt)) : new Date(R[1], H, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, rt);
            }
          }
          return new Date(S);
        }($), this.$x = $.x || {}, this.init();
      }, j.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, j.$utils = function() {
        return h;
      }, j.isValid = function() {
        return this.$d.toString() !== b;
      }, j.isSame = function($, M) {
        var S = N($);
        return this.startOf(M) <= S && S <= this.endOf(M);
      }, j.isAfter = function($, M) {
        return N($) < this.startOf(M);
      }, j.isBefore = function($, M) {
        return this.endOf(M) < N($);
      }, j.$g = function($, M, S) {
        return h.u($) ? this[M] : this.set(S, $);
      }, j.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, j.valueOf = function() {
        return this.$d.getTime();
      }, j.startOf = function($, M) {
        var S = this, D = !!h.u(M) || M, R = h.p($), H = function(Qt, ct) {
          var Mt = h.w(S.$u ? Date.UTC(S.$y, ct, Qt) : new Date(S.$y, ct, Qt), S);
          return D ? Mt : Mt.endOf(d);
        }, rt = function(Qt, ct) {
          return h.w(S.toDate()[Qt].apply(S.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ct)), S);
        }, Q = this.$W, nt = this.$M, Nt = this.$D, Ot = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case g:
            return D ? H(1, 0) : H(31, 11);
          case u:
            return D ? H(1, nt) : H(0, nt + 1);
          case v:
            var ie = this.$locale().weekStart || 0, se = (Q < ie ? Q + 7 : Q) - ie;
            return H(D ? Nt - se : Nt + (6 - se), nt);
          case d:
          case m:
            return rt(Ot + "Hours", 0);
          case c:
            return rt(Ot + "Minutes", 1);
          case l:
            return rt(Ot + "Seconds", 2);
          case s:
            return rt(Ot + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, j.endOf = function($) {
        return this.startOf($, !1);
      }, j.$set = function($, M) {
        var S, D = h.p($), R = "set" + (this.$u ? "UTC" : ""), H = (S = {}, S[d] = R + "Date", S[m] = R + "Date", S[u] = R + "Month", S[g] = R + "FullYear", S[c] = R + "Hours", S[l] = R + "Minutes", S[s] = R + "Seconds", S[n] = R + "Milliseconds", S)[D], rt = D === d ? this.$D + (M - this.$W) : M;
        if (D === u || D === g) {
          var Q = this.clone().set(m, 1);
          Q.$d[H](rt), Q.init(), this.$d = Q.set(m, Math.min(this.$D, Q.daysInMonth())).$d;
        } else
          H && this.$d[H](rt);
        return this.init(), this;
      }, j.set = function($, M) {
        return this.clone().$set($, M);
      }, j.get = function($) {
        return this[h.p($)]();
      }, j.add = function($, M) {
        var S, D = this;
        $ = Number($);
        var R = h.p(M), H = function(nt) {
          var Nt = N(D);
          return h.w(Nt.date(Nt.date() + Math.round(nt * $)), D);
        };
        if (R === u)
          return this.set(u, this.$M + $);
        if (R === g)
          return this.set(g, this.$y + $);
        if (R === d)
          return H(1);
        if (R === v)
          return H(7);
        var rt = (S = {}, S[l] = o, S[c] = a, S[s] = r, S)[R] || 1, Q = this.$d.getTime() + $ * rt;
        return h.w(Q, this);
      }, j.subtract = function($, M) {
        return this.add(-1 * $, M);
      }, j.format = function($) {
        var M = this, S = this.$locale();
        if (!this.isValid())
          return S.invalidDate || b;
        var D = $ || "YYYY-MM-DDTHH:mm:ssZ", R = h.z(this), H = this.$H, rt = this.$m, Q = this.$M, nt = S.weekdays, Nt = S.months, Ot = function(ct, Mt, er, we) {
          return ct && (ct[Mt] || ct(M, D)) || er[Mt].slice(0, we);
        }, ie = function(ct) {
          return h.s(H % 12 || 12, ct, "0");
        }, se = S.meridiem || function(ct, Mt, er) {
          var we = ct < 12 ? "AM" : "PM";
          return er ? we.toLowerCase() : we;
        }, Qt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: Q + 1, MM: h.s(Q + 1, 2, "0"), MMM: Ot(S.monthsShort, Q, Nt, 3), MMMM: Ot(Nt, Q), D: this.$D, DD: h.s(this.$D, 2, "0"), d: String(this.$W), dd: Ot(S.weekdaysMin, this.$W, nt, 2), ddd: Ot(S.weekdaysShort, this.$W, nt, 3), dddd: nt[this.$W], H: String(H), HH: h.s(H, 2, "0"), h: ie(1), hh: ie(2), a: se(H, rt, !0), A: se(H, rt, !1), m: String(rt), mm: h.s(rt, 2, "0"), s: String(this.$s), ss: h.s(this.$s, 2, "0"), SSS: h.s(this.$ms, 3, "0"), Z: R };
        return D.replace(k, function(ct, Mt) {
          return Mt || Qt[ct] || R.replace(":", "");
        });
      }, j.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, j.diff = function($, M, S) {
        var D, R = h.p(M), H = N($), rt = (H.utcOffset() - this.utcOffset()) * o, Q = this - H, nt = h.m(this, H);
        return nt = (D = {}, D[g] = nt / 12, D[u] = nt, D[p] = nt / 3, D[v] = (Q - rt) / 6048e5, D[d] = (Q - rt) / 864e5, D[c] = Q / a, D[l] = Q / o, D[s] = Q / r, D)[R] || Q, S ? nt : h.a(nt);
      }, j.daysInMonth = function() {
        return this.endOf(u).$D;
      }, j.$locale = function() {
        return B[this.$L];
      }, j.locale = function($, M) {
        if (!$)
          return this.$L;
        var S = this.clone(), D = Y($, M, !0);
        return D && (S.$L = D), S;
      }, j.clone = function() {
        return h.w(this.$d, this);
      }, j.toDate = function() {
        return new Date(this.valueOf());
      }, j.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, j.toISOString = function() {
        return this.$d.toISOString();
      }, j.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), ot = et.prototype;
    return N.prototype = ot, [["$ms", n], ["$s", s], ["$m", l], ["$H", c], ["$W", d], ["$M", u], ["$y", g], ["$D", m]].forEach(function(I) {
      ot[I[1]] = function(j) {
        return this.$g(j, I[0], I[1]);
      };
    }), N.extend = function(I, j) {
      return I.$i || (I(j, et, N), I.$i = !0), N;
    }, N.locale = Y, N.isDayjs = U, N.unix = function(I) {
      return N(1e3 * I);
    }, N.en = B[G], N.Ls = B, N.p = {}, N;
  });
})(wr);
const st = wr.exports;
var Vo = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    var r = "minute", o = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(n, s, l) {
      var c = s.prototype;
      l.utc = function(b) {
        var x = { date: b, utc: !0, args: arguments };
        return new s(x);
      }, c.utc = function(b) {
        var x = l(this.toDate(), { locale: this.$L, utc: !0 });
        return b ? x.add(this.utcOffset(), r) : x;
      }, c.local = function() {
        return l(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var d = c.parse;
      c.parse = function(b) {
        b.utc && (this.$u = !0), this.$utils().u(b.$offset) || (this.$offset = b.$offset), d.call(this, b);
      };
      var v = c.init;
      c.init = function() {
        if (this.$u) {
          var b = this.$d;
          this.$y = b.getUTCFullYear(), this.$M = b.getUTCMonth(), this.$D = b.getUTCDate(), this.$W = b.getUTCDay(), this.$H = b.getUTCHours(), this.$m = b.getUTCMinutes(), this.$s = b.getUTCSeconds(), this.$ms = b.getUTCMilliseconds();
        } else
          v.call(this);
      };
      var u = c.utcOffset;
      c.utcOffset = function(b, x) {
        var k = this.$utils().u;
        if (k(b))
          return this.$u ? 0 : k(this.$offset) ? u.call(this) : this.$offset;
        if (typeof b == "string" && (b = function(G) {
          G === void 0 && (G = "");
          var B = G.match(o);
          if (!B)
            return null;
          var U = ("" + B[0]).match(a) || ["-", 0, 0], Y = U[0], N = 60 * +U[1] + +U[2];
          return N === 0 ? 0 : Y === "+" ? N : -N;
        }(b), b === null))
          return this;
        var w = Math.abs(b) <= 16 ? 60 * b : b, T = this;
        if (x)
          return T.$offset = w, T.$u = b === 0, T;
        if (b !== 0) {
          var A = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (T = this.local().add(w + A, r)).$offset = w, T.$x.$localOffset = A;
        } else
          T = this.utc();
        return T;
      };
      var p = c.format;
      c.format = function(b) {
        var x = b || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return p.call(this, x);
      }, c.valueOf = function() {
        var b = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * b;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var g = c.toDate;
      c.toDate = function(b) {
        return b === "s" && this.$offset ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
      };
      var m = c.diff;
      c.diff = function(b, x, k) {
        if (b && this.$u === b.$u)
          return m.call(this, b, x, k);
        var w = this.local(), T = l(b).local();
        return m.call(w, T, x, k);
      };
    };
  });
})(Vo);
const ms = Vo.exports;
var Bo = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, o = {};
    return function(a, n, s) {
      var l, c = function(p, g, m) {
        m === void 0 && (m = {});
        var b = new Date(p), x = function(k, w) {
          w === void 0 && (w = {});
          var T = w.timeZoneName || "short", A = k + "|" + T, G = o[A];
          return G || (G = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: k, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: T }), o[A] = G), G;
        }(g, m);
        return x.formatToParts(b);
      }, d = function(p, g) {
        for (var m = c(p, g), b = [], x = 0; x < m.length; x += 1) {
          var k = m[x], w = k.type, T = k.value, A = r[w];
          A >= 0 && (b[A] = parseInt(T, 10));
        }
        var G = b[3], B = G === 24 ? 0 : G, U = b[0] + "-" + b[1] + "-" + b[2] + " " + B + ":" + b[4] + ":" + b[5] + ":000", Y = +p;
        return (s.utc(U).valueOf() - (Y -= Y % 1e3)) / 6e4;
      }, v = n.prototype;
      v.tz = function(p, g) {
        p === void 0 && (p = l);
        var m = this.utcOffset(), b = this.toDate(), x = b.toLocaleString("en-US", { timeZone: p }), k = Math.round((b - new Date(x)) / 1e3 / 60), w = s(x).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(b.getTimezoneOffset() / 15) - k, !0);
        if (g) {
          var T = w.utcOffset();
          w = w.add(m - T, "minute");
        }
        return w.$x.$timezone = p, w;
      }, v.offsetName = function(p) {
        var g = this.$x.$timezone || s.tz.guess(), m = c(this.valueOf(), g, { timeZoneName: p }).find(function(b) {
          return b.type.toLowerCase() === "timezonename";
        });
        return m && m.value;
      };
      var u = v.startOf;
      v.startOf = function(p, g) {
        if (!this.$x || !this.$x.$timezone)
          return u.call(this, p, g);
        var m = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return u.call(m, p, g).tz(this.$x.$timezone, !0);
      }, s.tz = function(p, g, m) {
        var b = m && g, x = m || g || l, k = d(+s(), x);
        if (typeof p != "string")
          return s(p).tz(x);
        var w = function(B, U, Y) {
          var N = B - 60 * U * 1e3, h = d(N, Y);
          if (U === h)
            return [N, U];
          var et = d(N -= 60 * (h - U) * 1e3, Y);
          return h === et ? [N, h] : [B - 60 * Math.min(h, et) * 1e3, Math.max(h, et)];
        }(s.utc(p, b).valueOf(), k, x), T = w[0], A = w[1], G = s(T).utcOffset(A);
        return G.$x.$timezone = x, G;
      }, s.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, s.tz.setDefault = function(p) {
        l = p;
      };
    };
  });
})(Bo);
const bs = Bo.exports;
var Ho = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    return function(r, o, a) {
      var n = o.prototype, s = n.format;
      a.en.ordinal = function(l) {
        var c = ["th", "st", "nd", "rd"], d = l % 100;
        return "[" + l + (c[(d - 20) % 10] || c[d] || c[0]) + "]";
      }, n.format = function(l) {
        var c = this, d = this.$locale();
        if (!this.isValid())
          return s.bind(this)(l);
        var v = this.$utils(), u = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
          switch (p) {
            case "Q":
              return Math.ceil((c.$M + 1) / 3);
            case "Do":
              return d.ordinal(c.$D);
            case "gggg":
              return c.weekYear();
            case "GGGG":
              return c.isoWeekYear();
            case "wo":
              return d.ordinal(c.week(), "W");
            case "w":
            case "ww":
              return v.s(c.week(), p === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return v.s(c.isoWeek(), p === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return v.s(String(c.$H === 0 ? 24 : c.$H), p === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(c.$d.getTime() / 1e3);
            case "x":
              return c.$d.getTime();
            case "z":
              return "[" + c.offsetName() + "]";
            case "zzz":
              return "[" + c.offsetName("long") + "]";
            default:
              return p;
          }
        });
        return s.bind(this)(u);
      };
    };
  });
})(Ho);
const vs = Ho.exports;
var Yo = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    return function(r, o) {
      o.prototype.isSameOrBefore = function(a, n) {
        return this.isSame(a, n) || this.isBefore(a, n);
      };
    };
  });
})(Yo);
const fs = Yo.exports;
var Uo = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    return function(r, o, a) {
      o.prototype.isBetween = function(n, s, l, c) {
        var d = a(n), v = a(s), u = (c = c || "()")[0] === "(", p = c[1] === ")";
        return (u ? this.isAfter(d, l) : !this.isBefore(d, l)) && (p ? this.isBefore(v, l) : !this.isAfter(v, l)) || (u ? this.isBefore(d, l) : !this.isAfter(d, l)) && (p ? this.isAfter(v, l) : !this.isBefore(v, l));
      };
    };
  });
})(Uo);
const hs = Uo.exports;
var Ko = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(Bt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(o, a, n) {
      var s = a.prototype, l = s.format;
      n.en.formats = r, s.format = function(c) {
        c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
        var d = this.$locale().formats, v = function(u, p) {
          return u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, m, b) {
            var x = b && b.toUpperCase();
            return m || p[b] || r[b] || p[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, w, T) {
              return w || T.slice(1);
            });
          });
        }(c, d === void 0 ? {} : d);
        return l.call(this, v);
      };
    };
  });
})(Ko);
const ys = Ko.exports;
var ws = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o(wr.exports);
  })(Bt, function(r) {
    function o(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var a = o(r), n = { name: "hu", weekdays: "vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat".split("_"), weekdaysShort: "vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december".split("_"), monthsShort: "jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec".split("_"), ordinal: function(s) {
      return s + ".";
    }, weekStart: 1, relativeTime: { future: "%s m\xFAlva", past: "%s", s: function(s, l, c, d) {
      return "n\xE9h\xE1ny m\xE1sodperc" + (d || l ? "" : "e");
    }, m: function(s, l, c, d) {
      return "egy perc" + (d || l ? "" : "e");
    }, mm: function(s, l, c, d) {
      return s + " perc" + (d || l ? "" : "e");
    }, h: function(s, l, c, d) {
      return "egy " + (d || l ? "\xF3ra" : "\xF3r\xE1ja");
    }, hh: function(s, l, c, d) {
      return s + " " + (d || l ? "\xF3ra" : "\xF3r\xE1ja");
    }, d: function(s, l, c, d) {
      return "egy " + (d || l ? "nap" : "napja");
    }, dd: function(s, l, c, d) {
      return s + " " + (d || l ? "nap" : "napja");
    }, M: function(s, l, c, d) {
      return "egy " + (d || l ? "h\xF3nap" : "h\xF3napja");
    }, MM: function(s, l, c, d) {
      return s + " " + (d || l ? "h\xF3nap" : "h\xF3napja");
    }, y: function(s, l, c, d) {
      return "egy " + (d || l ? "\xE9v" : "\xE9ve");
    }, yy: function(s, l, c, d) {
      return s + " " + (d || l ? "\xE9v" : "\xE9ve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return a.default.locale(n, null, !0), n;
  });
})(ws);
const Wo = "https://www.jegkorongszovetseg.hu/event/game/", xs = "https://jegkorongszovetseg.hu/assets/images/player_blank.png", _s = "https://www.ersteliga.hu/stats/players#/player/", zs = "https://www.ersteliga.hu/stats/teams#/team/3314/21096?name=", Dt = "original", y = "descend", q = "ascend", ks = (/* @__PURE__ */ new Map()).set("hu", "hu-hu").set("en", "hu-gb"), Ts = (/* @__PURE__ */ new Map()).set("Europe/Budapest", { countryLabelKey: "hungary", timezone: "Europe/Budapest" }).set("Europe/Bucharest", { countryLabelKey: "romania", timezone: "Europe/Bucharest" }), Ss = "/v1/playersGoaliePeriod", Ps = "/v1/playersGoalieUnderPeriod", cr = 1e3 * 60 * 5, $s = 1e3;
st.extend(ms);
st.extend(bs);
st.extend(vs);
st.extend(ys);
st.extend(fs);
st.extend(hs);
const Ke = () => st.tz.guess(), ee = (t = "", e = "", r = "", o = "hu") => (r = r || st.tz.guess(), st(t).isValid() ? st(t).tz(r).locale(o).format(e) : ""), te = (t = "", e = "", r = "hu") => {
  if (!st(t).isValid())
    return "";
  e = e || st.tz.guess();
  const a = new Intl.DateTimeFormat(js(r), {
    timeZone: e,
    timeZoneName: "short"
  }).formatToParts(new Date(t)).find((n) => n.type === "timeZoneName");
  return a && a.value;
}, js = (t) => ks.get(t), qo = (t) => {
  const e = t.split(":");
  return parseInt(e[0], 10) * 60 + parseInt(e[1], 10);
}, Os = (t, e = "day") => st().isSameOrBefore(st(t), e), As = (t, e, r) => st(t).isBetween(e, st(r)), ve = (t = {}) => {
  const { initial: e = 1, items: r = [], limit: o, auto: a = !1 } = t, n = F(e), s = (d) => Os(d, "day");
  return yo(r, () => {
    if (!a)
      return;
    const d = Oi(Zi(s, "gameDate"))(i(r));
    n.value = d === -1 ? 1 : Math.floor(d / o) + 1;
  }), {
    page: n,
    change: (d) => {
      n.value = d;
    }
  };
};
function Ls({ currentPage: t, itemsPerPage: e = 20, totalItems: r, rangeLength: o = 5, update: a = _t }) {
  const n = O(() => Math.ceil(i(r) / e)), s = O(() => {
    const v = i(t) - 1, u = Array.from({ length: n.value }, (m, b) => b + 1), p = Math.floor(o / 2);
    let g = Math.max(v - p, 0);
    return g + o >= n.value && (g = Math.max(n.value - o, 0)), u.slice(g, g + o);
  }), l = (v) => {
    const u = i(t) + v;
    d(u) && a(u);
  }, c = (v) => {
    d(v) && a(v);
  }, d = (v) => v <= n.value && v > 0;
  return {
    page: t,
    range: s,
    pageCount: n,
    goTo: c,
    pageStep: l
  };
}
const ue = ({ options: t = {}, transform: e = (o) => o, onError: r = _t }) => {
  const { path: o, apiKey: a, params: n } = t, {
    state: s,
    error: l,
    isLoading: c,
    execute: d
  } = vt(() => lt(o, a, i(n)).then((v) => e(v)), [], {
    immediate: !1,
    resetOnExecute: !1,
    onError: r
  });
  return {
    state: s,
    error: l,
    isLoading: c,
    execute: d
  };
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function qr(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var o, a, n = r.call(t), s = [];
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      s.push(o.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
var Zr;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(Zr || (Zr = {}));
var Is = { type: "xstate.init" };
function ar(t) {
  return t === void 0 ? [] : [].concat(t);
}
function Xr(t, e) {
  return typeof (t = typeof t == "string" && e && e[t] ? e[t] : t) == "string" ? { type: t } : typeof t == "function" ? { type: t.name, exec: t } : t;
}
function dr(t) {
  return function(e) {
    return t === e;
  };
}
function Es(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Jr(t, e) {
  return { value: t, context: e, actions: [], changed: !1, matches: dr(t) };
}
function Qr(t, e, r) {
  var o = e, a = !1;
  return [t.filter(function(n) {
    if (n.type === "xstate.assign") {
      a = !0;
      var s = Object.assign({}, o);
      return typeof n.assignment == "function" ? s = n.assignment(o, r) : Object.keys(n.assignment).forEach(function(l) {
        s[l] = typeof n.assignment[l] == "function" ? n.assignment[l](o, r) : n.assignment[l];
      }), o = s, !1;
    }
    return !0;
  }), o, a];
}
function Cs(t, e) {
  e === void 0 && (e = {});
  var r = qr(Qr(ar(t.states[t.initial].entry).map(function(s) {
    return Xr(s, e.actions);
  }), t.context, Is), 2), o = r[0], a = r[1], n = { config: t, _options: e, initialState: { value: t.initial, actions: o, context: a, matches: dr(t.initial) }, transition: function(s, l) {
    var c, d, v = typeof s == "string" ? { value: s, context: t.context } : s, u = v.value, p = v.context, g = Es(l), m = t.states[u];
    if (m.on) {
      var b = ar(m.on[g.type]);
      try {
        for (var x = function(S) {
          var D = typeof Symbol == "function" && Symbol.iterator, R = D && S[D], H = 0;
          if (R)
            return R.call(S);
          if (S && typeof S.length == "number")
            return { next: function() {
              return S && H >= S.length && (S = void 0), { value: S && S[H++], done: !S };
            } };
          throw new TypeError(D ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }(b), k = x.next(); !k.done; k = x.next()) {
          var w = k.value;
          if (w === void 0)
            return Jr(u, p);
          var T = typeof w == "string" ? { target: w } : w, A = T.target, G = T.actions, B = G === void 0 ? [] : G, U = T.cond, Y = U === void 0 ? function() {
            return !0;
          } : U, N = A === void 0, h = A != null ? A : u, et = t.states[h];
          if (Y(p, g)) {
            var ot = qr(Qr((N ? ar(B) : [].concat(m.exit, B, et.entry).filter(function(S) {
              return S;
            })).map(function(S) {
              return Xr(S, n._options.actions);
            }), p, g), 3), I = ot[0], j = ot[1], $ = ot[2], M = A != null ? A : u;
            return { value: M, context: j, actions: I, changed: A !== u || I.length > 0 || $, matches: dr(M) };
          }
        }
      } catch (S) {
        c = { error: S };
      } finally {
        try {
          k && !k.done && (d = x.return) && d.call(x);
        } finally {
          if (c)
            throw c.error;
        }
      }
    }
    return Jr(u, p);
  } };
  return n;
}
const Ns = Cs({
  id: "sort",
  initial: Dt,
  states: {
    [Dt]: {
      on: {
        DIRECTION1: y,
        DIRECTION2: q
      }
    },
    [y]: {
      on: {
        DIRECTION1: q,
        DIRECTION2: Dt
      }
    },
    [q]: {
      on: {
        DIRECTION1: Dt,
        DIRECTION2: y
      }
    }
  }
}), Ms = (t, e) => {
  const r = e === q ? "DIRECTION2" : "DIRECTION1";
  return Ns.transition(t, r).value;
};
function St(t = {}) {
  const { sortTarget: e = null, orders: r = [] } = t, o = qt({ sortTarget: e, orders: r });
  return {
    sort: o,
    change: ({ target: n, orders: s }) => {
      if (o.sortTarget !== n) {
        o.sortTarget = n, o.orders = s;
        return;
      }
      const l = s.map((c, d) => ({
        ...c,
        direction: Ms(o.orders[d].direction, c.direction)
      }));
      o.sortTarget = n, o.orders = l;
    }
  };
}
function Ds(t = !1, e = _t, r = _t) {
  if (!i(t))
    return;
  const o = _o();
  gt(o, (a) => {
    if (a === "visible")
      return e();
    r();
  });
}
const ft = (t = []) => ({
  result: [...t],
  filteredRowsLength: 0,
  isFiltered: !1,
  value() {
    return {
      rows: this.result,
      totalItems: this.filteredRowsLength,
      totalItems: this.isFiltered ? this.filteredRowsLength : t.length
    };
  },
  filter(e, r = [], o = !1) {
    if (e) {
      const a = r.map(
        (s) => o ? Wi(s, e) : Oo(zt(s), es, Ni(e))
      ), n = Io(Gn([...a]), this.result);
      this.isFiltered = !0, this.filteredRowsLength = n.length, this.result = n;
    }
    return this;
  },
  sorted(e) {
    if (!e.sortTarget)
      return this;
    if (e.orders[0].direction === Dt)
      return this;
    const r = Ei(Be(q), Yr(Fe), Yr(yr));
    return this.result = No(e.orders.map((o) => Ve(r(o.direction), zt)(o.target)))(this.result), this;
  },
  addIndex(e = null) {
    return this.result.reduce((r, o, a) => {
      const n = r[r.length - 1] || [], s = e && n[e] === o[e];
      return o.index = s ? n.index : a + 1, o.indexClass = s ? "is-duplicated" : null, r.push(o), r;
    }, []), this;
  },
  addContinuousIndex() {
    return this.result = this.result.map((e, r) => ({
      ...e,
      index: r + 1
    })), this;
  },
  pagination(e, r) {
    e = Number(e), r = Number(r);
    const o = (e - 1) * r, a = o + r;
    return this.result = this.result.slice(o, a), this;
  },
  playerName() {
    return this.result = this.result.map((e) => ({
      ...e,
      name: `${e.lastName} ${e.firstName}`
    })), this;
  },
  schedule(e = "", r = "hu") {
    return this.result = this.result.map((o) => ({
      ...o,
      gameResult: `${o.homeTeamScore}-${o.awayTeamScore}`,
      gameDateDate: ee(o.gameDate, "L dddd", e, r),
      gameDateTime: ee(o.gameDate, "HH:mm", e, r)
    })), this;
  },
  gameDateFilter(e) {
    return e === null ? this : (this.result = this.result.filter((r) => new Date(r.gameDate).getMonth() == e), this);
  },
  convertTimes(e = []) {
    return this.result = this.result.map((r) => (e.map((o) => r[o] ? r[`${o}Sec`] = qo(r[o]) : r), r)), this;
  },
  groupByDays() {
    return this.result = Li((e) => ee(e.gameDate, "YYYY-MM-DD"))(this.result), this;
  }
}), ne = (t, ...e) => At(Ve(...e))(t), We = (t) => ({
  ...t,
  ...t.lastName && { name: `${t.lastName} ${t.firstName}` }
}), qe = (t = []) => (e) => (t.map((r) => e[r] ? e[`${r}Sec`] = qo(e[r]) : e), e), Rs = (t, e) => new Date(t.gameDate).getTime() - new Date(e.gameDate).getTime(), Zo = No([Rs, Fe(zt("id"))]), Gs = (t, e = "body") => {
  if (!t)
    return;
  if (typeof e != "string") {
    e == null || e.append(t);
    return;
  }
  const r = document.querySelector(e);
  r == null || r.append(t);
};
class Ze extends Error {
  constructor(e, r = {}) {
    const { key: o, cause: a } = r;
    super(e), this.name = "WidgetError", this.key = o, this.cause = a;
  }
}
const Te = {
  message: "Undefined Column name Message",
  options: {
    key: "undefined-column",
    cause: {}
  }
}, Se = {
  message: "Invalid season name",
  options: {
    key: "invalid-season-name",
    cause: {}
  }
}, xr = (t, e) => {
  const r = zr("gameResolver") || t;
  return console.log(r), typeof r == "function" ? r(e) : r ? r + e : Wo + e;
}, Ht = (t, e) => {
  const r = zr("teamResolver") || t;
  return typeof r == "function" ? r(e) : encodeURI(r ? r + e : zs + e);
}, _r = (t, e) => {
  const r = zr("playerResolver") || t;
  return typeof r == "function" ? r(e) : encodeURI(r ? r + e : _s + e);
}, zr = (t = "") => {
  var e;
  return (e = window == null ? void 0 : window.__MJSZ_VBR_WIDGET__) == null ? void 0 : e[t];
}, Rt = {
  __name: "BaseSelect",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, o = pt("base-input"), a = O({ get: () => r.modelValue, set: (n) => e("update:modelValue", n) });
    return (n, s) => mo((f(), z("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (l) => wt(a) ? a.value = l : null),
      class: V([i(o), "is-select"])
    }, [
      ut(n.$slots, "default")
    ], 2)), [
      [Sa, i(a)]
    ]);
  }
}, X = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, a] of e)
    r[o] = a;
  return r;
}, Fs = {}, Vs = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  class: "svg-inline--fa fa-sort fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, Bs = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, null, -1), Hs = [
  Bs
];
function Ys(t, e) {
  return f(), z("svg", Vs, Hs);
}
const to = /* @__PURE__ */ X(Fs, [["render", Ys]]), Us = {}, Ks = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  class: "svg-inline--fa fa-sort-down fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, Ws = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, null, -1), qs = [
  Ws
];
function Zs(t, e) {
  return f(), z("svg", Ks, qs);
}
const Xs = /* @__PURE__ */ X(Us, [["render", Zs]]), Js = {}, Qs = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-up",
  class: "svg-inline--fa fa-sort-up fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, tl = /* @__PURE__ */ _("path", {
  fill: "currentColor",
  d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
}, null, -1), el = [
  tl
];
function rl(t, e) {
  return f(), z("svg", Qs, el);
}
const ol = /* @__PURE__ */ X(Js, [["render", rl]]);
function fe(t) {
  return t.split("-")[0];
}
function Xe(t) {
  return t.split("-")[1];
}
function he(t) {
  return ["top", "bottom"].includes(fe(t)) ? "x" : "y";
}
function kr(t) {
  return t === "y" ? "height" : "width";
}
function eo(t, e, r) {
  let {
    reference: o,
    floating: a
  } = t;
  const n = o.x + o.width / 2 - a.width / 2, s = o.y + o.height / 2 - a.height / 2, l = he(e), c = kr(l), d = o[c] / 2 - a[c] / 2, v = fe(e), u = l === "x";
  let p;
  switch (v) {
    case "top":
      p = {
        x: n,
        y: o.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: n,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: s
      };
      break;
    case "left":
      p = {
        x: o.x - a.width,
        y: s
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Xe(e)) {
    case "start":
      p[l] -= d * (r && u ? -1 : 1);
      break;
    case "end":
      p[l] += d * (r && u ? -1 : 1);
      break;
  }
  return p;
}
const al = async (t, e, r) => {
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: n = [],
    platform: s
  } = r, l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: a
  }), {
    x: d,
    y: v
  } = eo(c, o, l), u = o, p = {}, g = 0;
  for (let m = 0; m < n.length; m++) {
    const {
      name: b,
      fn: x
    } = n[m], {
      x: k,
      y: w,
      data: T,
      reset: A
    } = await x({
      x: d,
      y: v,
      initialPlacement: o,
      placement: u,
      strategy: a,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = k != null ? k : d, v = w != null ? w : v, p = {
      ...p,
      [b]: {
        ...p[b],
        ...T
      }
    }, A && g <= 50) {
      g++, typeof A == "object" && (A.placement && (u = A.placement), A.rects && (c = A.rects === !0 ? await s.getElementRects({
        reference: t,
        floating: e,
        strategy: a
      }) : A.rects), {
        x: d,
        y: v
      } = eo(c, u, l)), m = -1;
      continue;
    }
  }
  return {
    x: d,
    y: v,
    placement: u,
    strategy: a,
    middlewareData: p
  };
};
function nl(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Xo(t) {
  return typeof t != "number" ? nl(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Pe(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function Jo(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: o,
    y: a,
    platform: n,
    rects: s,
    elements: l,
    strategy: c
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = e, m = Xo(g), x = l[p ? u === "floating" ? "reference" : "floating" : u], k = Pe(await n.getClippingRect({
    element: (r = await (n.isElement == null ? void 0 : n.isElement(x))) == null || r ? x : x.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: v,
    strategy: c
  })), w = Pe(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: u === "floating" ? {
      ...s.floating,
      x: o,
      y: a
    } : s.reference,
    offsetParent: await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(l.floating)),
    strategy: c
  }) : s[u]);
  return {
    top: k.top - w.top + m.top,
    bottom: w.bottom - k.bottom + m.bottom,
    left: k.left - w.left + m.left,
    right: w.right - k.right + m.right
  };
}
const il = Math.min, sl = Math.max;
function ur(t, e, r) {
  return sl(t, il(e, r));
}
const ro = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: r,
      padding: o = 0
    } = t != null ? t : {}, {
      x: a,
      y: n,
      placement: s,
      rects: l,
      platform: c
    } = e;
    if (r == null)
      return {};
    const d = Xo(o), v = {
      x: a,
      y: n
    }, u = he(s), p = Xe(s), g = kr(u), m = await c.getDimensions(r), b = u === "y" ? "top" : "left", x = u === "y" ? "bottom" : "right", k = l.reference[g] + l.reference[u] - v[u] - l.floating[g], w = v[u] - l.reference[u], T = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(r));
    let A = T ? u === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0;
    A === 0 && (A = l.floating[g]);
    const G = k / 2 - w / 2, B = d[b], U = A - m[g] - d[x], Y = A / 2 - m[g] / 2 + G, N = ur(B, Y, U), ot = (p === "start" ? d[b] : d[x]) > 0 && Y !== N && l.reference[g] <= l.floating[g] ? Y < B ? B - Y : U - Y : 0;
    return {
      [u]: v[u] - ot,
      data: {
        [u]: N,
        centerOffset: Y - N
      }
    };
  }
}), ll = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $e(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ll[e]);
}
function cl(t, e, r) {
  r === void 0 && (r = !1);
  const o = Xe(t), a = he(t), n = kr(a);
  let s = a === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[n] > e.floating[n] && (s = $e(s)), {
    main: s,
    cross: $e(s)
  };
}
const dl = {
  start: "end",
  end: "start"
};
function oo(t) {
  return t.replace(/start|end/g, (e) => dl[e]);
}
function ul(t) {
  const e = $e(t);
  return [oo(t), e, oo(e)];
}
const pl = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r;
      const {
        placement: o,
        middlewareData: a,
        rects: n,
        initialPlacement: s,
        platform: l,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: v = !0,
        fallbackPlacements: u,
        fallbackStrategy: p = "bestFit",
        flipAlignment: g = !0,
        ...m
      } = t, b = fe(o), k = u || (b === s || !g ? [$e(s)] : ul(s)), w = [s, ...k], T = await Jo(e, m), A = [];
      let G = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(T[b]), v) {
        const {
          main: N,
          cross: h
        } = cl(o, n, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
        A.push(T[N], T[h]);
      }
      if (G = [...G, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var B, U;
        const N = ((B = (U = a.flip) == null ? void 0 : U.index) != null ? B : 0) + 1, h = w[N];
        if (h)
          return {
            data: {
              index: N,
              overflows: G
            },
            reset: {
              placement: h
            }
          };
        let et = "bottom";
        switch (p) {
          case "bestFit": {
            var Y;
            const ot = (Y = G.map((I) => [I, I.overflows.filter((j) => j > 0).reduce((j, $) => j + $, 0)]).sort((I, j) => I[1] - j[1])[0]) == null ? void 0 : Y[0].placement;
            ot && (et = ot);
            break;
          }
          case "initialPlacement":
            et = s;
            break;
        }
        if (o !== et)
          return {
            reset: {
              placement: et
            }
          };
      }
      return {};
    }
  };
};
async function gl(t, e) {
  const {
    placement: r,
    platform: o,
    elements: a
  } = t, n = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), s = fe(r), l = Xe(r), c = he(r) === "x", d = ["left", "top"].includes(s) ? -1 : 1, v = n && c ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return l && typeof m == "number" && (g = l === "end" ? m * -1 : m), c ? {
    x: g * v,
    y: p * d
  } : {
    x: p * d,
    y: g * v
  };
}
const ml = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: o
      } = e, a = await gl(e, t);
      return {
        x: r + a.x,
        y: o + a.y,
        data: a
      };
    }
  };
};
function bl(t) {
  return t === "x" ? "y" : "x";
}
const vl = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: o,
        placement: a
      } = e, {
        mainAxis: n = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (x) => {
            let {
              x: k,
              y: w
            } = x;
            return {
              x: k,
              y: w
            };
          }
        },
        ...c
      } = t, d = {
        x: r,
        y: o
      }, v = await Jo(e, c), u = he(fe(a)), p = bl(u);
      let g = d[u], m = d[p];
      if (n) {
        const x = u === "y" ? "top" : "left", k = u === "y" ? "bottom" : "right", w = g + v[x], T = g - v[k];
        g = ur(w, g, T);
      }
      if (s) {
        const x = p === "y" ? "top" : "left", k = p === "y" ? "bottom" : "right", w = m + v[x], T = m - v[k];
        m = ur(w, m, T);
      }
      const b = l.fn({
        ...e,
        [u]: g,
        [p]: m
      });
      return {
        ...b,
        data: {
          x: b.x - r,
          y: b.y - o
        }
      };
    }
  };
};
function Qo(t) {
  return t && t.document && t.location && t.alert && t.setInterval;
}
function Et(t) {
  if (t == null)
    return window;
  if (!Qo(t)) {
    const e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Gt(t) {
  return Et(t).getComputedStyle(t);
}
function Lt(t) {
  return Qo(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function ta() {
  const t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map((e) => e.brand + "/" + e.version).join(" ") : navigator.userAgent;
}
function kt(t) {
  return t instanceof Et(t).HTMLElement;
}
function Ft(t) {
  return t instanceof Et(t).Element;
}
function fl(t) {
  return t instanceof Et(t).Node;
}
function je(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = Et(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Je(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: o
  } = Gt(t);
  return /auto|scroll|overlay|hidden/.test(e + o + r);
}
function hl(t) {
  return ["table", "td", "th"].includes(Lt(t));
}
function ea(t) {
  const e = /firefox/i.test(ta()), r = Gt(t);
  return r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].includes(r.willChange) || e && r.willChange === "filter" || e && (r.filter ? r.filter !== "none" : !1);
}
function ra() {
  return !/^((?!chrome|android).)*safari/i.test(ta());
}
const ao = Math.min, ge = Math.max, Oe = Math.round;
function It(t, e, r) {
  var o, a, n, s;
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const l = t.getBoundingClientRect();
  let c = 1, d = 1;
  e && kt(t) && (c = t.offsetWidth > 0 && Oe(l.width) / t.offsetWidth || 1, d = t.offsetHeight > 0 && Oe(l.height) / t.offsetHeight || 1);
  const v = Ft(t) ? Et(t) : window, u = !ra() && r, p = (l.left + (u && (o = (a = v.visualViewport) == null ? void 0 : a.offsetLeft) != null ? o : 0)) / c, g = (l.top + (u && (n = (s = v.visualViewport) == null ? void 0 : s.offsetTop) != null ? n : 0)) / d, m = l.width / c, b = l.height / d;
  return {
    width: m,
    height: b,
    top: g,
    right: p + m,
    bottom: g + b,
    left: p,
    x: p,
    y: g
  };
}
function Yt(t) {
  return ((fl(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Qe(t) {
  return Ft(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function oa(t) {
  return It(Yt(t)).left + Qe(t).scrollLeft;
}
function yl(t) {
  const e = It(t);
  return Oe(e.width) !== t.offsetWidth || Oe(e.height) !== t.offsetHeight;
}
function wl(t, e, r) {
  const o = kt(e), a = Yt(e), n = It(
    t,
    o && yl(e),
    r === "fixed"
  );
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (o || !o && r !== "fixed")
    if ((Lt(e) !== "body" || Je(a)) && (s = Qe(e)), kt(e)) {
      const c = It(e, !0);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      a && (l.x = oa(a));
  return {
    x: n.left + s.scrollLeft - l.x,
    y: n.top + s.scrollTop - l.y,
    width: n.width,
    height: n.height
  };
}
function aa(t) {
  return Lt(t) === "html" ? t : t.assignedSlot || t.parentNode || (je(t) ? t.host : null) || Yt(t);
}
function no(t) {
  return !kt(t) || Gt(t).position === "fixed" ? null : t.offsetParent;
}
function xl(t) {
  let e = aa(t);
  for (je(e) && (e = e.host); kt(e) && !["html", "body"].includes(Lt(e)); ) {
    if (ea(e))
      return e;
    {
      const r = e.parentNode;
      e = je(r) ? r.host : r;
    }
  }
  return null;
}
function pr(t) {
  const e = Et(t);
  let r = no(t);
  for (; r && hl(r) && Gt(r).position === "static"; )
    r = no(r);
  return r && (Lt(r) === "html" || Lt(r) === "body" && Gt(r).position === "static" && !ea(r)) ? e : r || xl(t) || e;
}
function io(t) {
  if (kt(t))
    return {
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  const e = It(t);
  return {
    width: e.width,
    height: e.height
  };
}
function _l(t) {
  let {
    rect: e,
    offsetParent: r,
    strategy: o
  } = t;
  const a = kt(r), n = Yt(r);
  if (r === n)
    return e;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if ((a || !a && o !== "fixed") && ((Lt(r) !== "body" || Je(n)) && (s = Qe(r)), kt(r))) {
    const c = It(r, !0);
    l.x = c.x + r.clientLeft, l.y = c.y + r.clientTop;
  }
  return {
    ...e,
    x: e.x - s.scrollLeft + l.x,
    y: e.y - s.scrollTop + l.y
  };
}
function zl(t, e) {
  const r = Et(t), o = Yt(t), a = r.visualViewport;
  let n = o.clientWidth, s = o.clientHeight, l = 0, c = 0;
  if (a) {
    n = a.width, s = a.height;
    const d = ra();
    (d || !d && e === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: n,
    height: s,
    x: l,
    y: c
  };
}
function kl(t) {
  var e;
  const r = Yt(t), o = Qe(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, n = ge(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = ge(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
  let l = -o.scrollLeft + oa(t);
  const c = -o.scrollTop;
  return Gt(a || r).direction === "rtl" && (l += ge(r.clientWidth, a ? a.clientWidth : 0) - n), {
    width: n,
    height: s,
    x: l,
    y: c
  };
}
function na(t) {
  const e = aa(t);
  return ["html", "body", "#document"].includes(Lt(e)) ? t.ownerDocument.body : kt(e) && Je(e) ? e : na(e);
}
function Ae(t, e) {
  var r;
  e === void 0 && (e = []);
  const o = na(t), a = o === ((r = t.ownerDocument) == null ? void 0 : r.body), n = Et(o), s = a ? [n].concat(n.visualViewport || [], Je(o) ? o : []) : o, l = e.concat(s);
  return a ? l : l.concat(Ae(s));
}
function Tl(t, e) {
  const r = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && je(r)) {
    let o = e;
    do {
      if (o && t === o)
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Sl(t, e) {
  const r = It(t, !1, e === "fixed"), o = r.top + t.clientTop, a = r.left + t.clientLeft;
  return {
    top: o,
    left: a,
    x: a,
    y: o,
    right: a + t.clientWidth,
    bottom: o + t.clientHeight,
    width: t.clientWidth,
    height: t.clientHeight
  };
}
function so(t, e, r) {
  return e === "viewport" ? Pe(zl(t, r)) : Ft(e) ? Sl(e, r) : Pe(kl(Yt(t)));
}
function Pl(t) {
  const e = Ae(t), o = ["absolute", "fixed"].includes(Gt(t).position) && kt(t) ? pr(t) : t;
  return Ft(o) ? e.filter((a) => Ft(a) && Tl(a, o) && Lt(a) !== "body") : [];
}
function $l(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: o,
    strategy: a
  } = t;
  const s = [...r === "clippingAncestors" ? Pl(e) : [].concat(r), o], l = s[0], c = s.reduce((d, v) => {
    const u = so(e, v, a);
    return d.top = ge(u.top, d.top), d.right = ao(u.right, d.right), d.bottom = ao(u.bottom, d.bottom), d.left = ge(u.left, d.left), d;
  }, so(e, l, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
const jl = {
  getClippingRect: $l,
  convertOffsetParentRelativeRectToViewportRelativeRect: _l,
  isElement: Ft,
  getDimensions: io,
  getOffsetParent: pr,
  getDocumentElement: Yt,
  getElementRects: (t) => {
    let {
      reference: e,
      floating: r,
      strategy: o
    } = t;
    return {
      reference: wl(e, pr(r), o),
      floating: {
        ...io(r),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => Gt(t).direction === "rtl"
};
function Ol(t, e, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: n = !0,
    elementResize: s = !0,
    animationFrame: l = !1
  } = o, c = a && !l, d = n && !l, v = c || d ? [...Ft(t) ? Ae(t) : [], ...Ae(e)] : [];
  v.forEach((b) => {
    c && b.addEventListener("scroll", r, {
      passive: !0
    }), d && b.addEventListener("resize", r);
  });
  let u = null;
  if (s) {
    let b = !0;
    u = new ResizeObserver(() => {
      b || r(), b = !1;
    }), Ft(t) && !l && u.observe(t), u.observe(e);
  }
  let p, g = l ? It(t) : null;
  l && m();
  function m() {
    const b = It(t);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && r(), g = b, p = requestAnimationFrame(m);
  }
  return r(), () => {
    var b;
    v.forEach((x) => {
      c && x.removeEventListener("scroll", r), d && x.removeEventListener("resize", r);
    }), (b = u) == null || b.disconnect(), u = null, l && cancelAnimationFrame(p);
  };
}
const Al = (t, e, r) => al(t, e, {
  platform: jl,
  ...r
});
function Ll({ middleware: t, placement: e = null, strategy: r, append: o, enabled: a }) {
  const n = F(null), s = F(null), l = F(null), c = F(null), d = F(null), v = F(null), u = F(null), p = F(r != null ? r : "absolute"), g = F(null), m = () => {
    !n.value || !s.value || Al(n.value, s.value, {
      middleware: t,
      placement: e,
      strategy: r
    }).then((x) => {
      l.value = x.x, c.value = x.y, p.value = x.strategy, d.value = x.middlewareData.arrow.x, v.value = x.middlewareData.arrow.y, u.value = x.placement;
    });
  };
  gt(
    () => ({
      reference: i(n),
      floating: i(s),
      append: i(o)
    }),
    ({ floating: x, append: k }) => {
      k && Gs(x, k), m();
    },
    { flush: "post" }
  ), gt(
    a,
    (x) => {
      if (!(!n.value || !s.value)) {
        if (!x)
          return b();
        g.value = Ol(n.value, s.value, m, {});
      }
    },
    { flush: "post" }
  );
  const b = () => {
    var x;
    (x = g.value) == null || x.call(g), g.value = null;
  };
  return {
    x: l,
    y: c,
    arrowX: d,
    arrowY: v,
    placement: u,
    reference: n,
    floating: s,
    strategy: p,
    update: m
  };
}
const Il = (t) => {
  const { element: e, padding: r } = t;
  return {
    name: "arrow",
    options: t,
    fn(o) {
      return wt(e) ? e.value != null ? ro({ element: e.value, padding: r }).fn(o) : {} : e ? ro({ element: e, padding: r }).fn(o) : {};
    }
  };
}, El = ["data-placement"], ia = {
  __name: "FloatingPanel",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom"
    },
    theme: {
      type: String,
      default: "tooltip"
    },
    content: {
      type: String,
      default: ""
    },
    appendTo: {
      type: [Object, String],
      default: "body"
    },
    offset: {
      type: Number,
      default: 2
    }
  },
  setup(t) {
    const e = t, r = F(!1), o = F(null), { x: a, y: n, arrowX: s, arrowY: l, placement: c, reference: d, floating: v, strategy: u } = Ll({
      placement: e.placement,
      middleware: [pl(), vl({ padding: 5 }), ml(e.offset), Il({ element: o, padding: 5 })],
      append: O(() => e.appendTo),
      enabled: r
    }), p = () => {
      e.disabled || (r.value = !0);
    }, g = () => {
      r.value = !1;
    }, m = (b) => {
      d.value = b;
    };
    return Ja(v, (b) => {
      var x;
      (x = d.value) != null && x.contains(b.target) || g();
    }), (b, x) => (f(), z(J, null, [
      ut(b.$slots, "default", {
        setRef: m,
        show: p,
        hide: g
      }),
      _("div", {
        ref_key: "floating",
        ref: v,
        "data-placement": i(c),
        style: Pr({
          position: i(u),
          top: i(n) ? `${i(n)}px` : "",
          left: i(a) ? `${i(a)}px` : ""
        })
      }, [
        L(Pa, {
          name: "transition-fade",
          mode: "out-in"
        }, {
          default: C(() => [
            r.value ? (f(), z("div", {
              key: 0,
              class: V(["floating-content", [`is-${e.theme}`]])
            }, [
              ut(b.$slots, "content", { close: g }, () => [
                dt(P(t.content), 1)
              ]),
              _("div", {
                ref_key: "arrowRef",
                ref: o,
                class: "is-arrow",
                style: Pr({
                  position: i(u),
                  top: i(l) ? `${i(l)}px` : "",
                  left: i(s) ? `${i(s)}px` : ""
                })
              }, null, 4)
            ], 2)) : E("", !0)
          ]),
          _: 3
        })
      ], 12, El)
    ], 64));
  }
}, Cl = ["onMouseenter", "onMouseleave", "onFocus", "onBlur", "onClick", "onKeydown", "tabindex"], Nl = { key: 0 }, Ml = ["colspan"], Dl = { key: 1 }, Rl = ["colspan"], sa = {
  __name: "DataTable",
  props: {
    columns: {
      type: Object,
      default: () => ({})
    },
    rows: {
      type: Array,
      default: () => []
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    appendTo: {
      type: [Object, String],
      default: null
    }
  },
  emits: ["sort"],
  setup(t, { emit: e }) {
    const r = t, { isLoading: o, appendTo: a } = bo(r), n = Fo(o, { delay: $s }), { t: s } = Tt(), l = pt("table"), c = O(() => r.columns), d = O(() => Object.keys(r.columns).length), v = (u, p) => {
      !u.sortOrders || e("sort", { target: p, orders: u.sortOrders });
    };
    return (u, p) => (f(), z("table", {
      class: V(i(l))
    }, [
      _("thead", null, [
        _("tr", null, [
          (f(!0), z(J, null, at(i(c), (g, m) => (f(), W(ia, {
            key: m,
            placement: "top",
            content: g.tooltip,
            disabled: !g.tooltip,
            "append-to": i(a)
          }, {
            default: C(({ setRef: b, show: x, hide: k }) => [
              _("th", {
                ref_for: !0,
                ref: b,
                class: V([
                  [g.class],
                  {
                    "is-active": m === t.sort.sortTarget && t.sort.orders[0].direction !== i(Dt),
                    "is-sortable": g.sortOrders,
                    "is-desc": m === t.sort.sortTarget && t.sort.orders[0].direction === i(y),
                    "is-asc": m === t.sort.sortTarget && t.sort.orders[0].direction === i(q)
                  }
                ]),
                onMouseenter: x,
                onMouseleave: k,
                onFocus: x,
                onBlur: k,
                onClick: (w) => v(g, m),
                onKeydown: [
                  $r(re((w) => v(g, m), ["prevent"]), ["space"]),
                  $r(re((w) => v(g, m), ["prevent"]), ["enter"])
                ],
                tabindex: g.sortOrders ? 0 : -1,
                role: "button"
              }, [
                ut(u.$slots, `header-${m}`, { column: g }, () => [
                  dt(P(g.label), 1)
                ]),
                g.sortOrders && m !== t.sort.sortTarget ? (f(), W(to, {
                  key: 0,
                  class: "is-icon-sort"
                })) : E("", !0),
                m === t.sort.sortTarget && t.sort.orders[0].direction === i(Dt) ? (f(), W(to, {
                  key: 1,
                  class: "is-icon-sort"
                })) : E("", !0),
                m === t.sort.sortTarget && t.sort.orders[0].direction === i(y) ? (f(), W(Xs, {
                  key: 2,
                  class: "is-icon-sort"
                })) : E("", !0),
                m === t.sort.sortTarget && t.sort.orders[0].direction === i(q) ? (f(), W(ol, {
                  key: 3,
                  class: "is-icon-sort"
                })) : E("", !0)
              ], 42, Cl)
            ]),
            _: 2
          }, 1032, ["content", "disabled", "append-to"]))), 128))
        ])
      ]),
      _("tbody", null, [
        (f(!0), z(J, null, at(r.rows, (g, m) => (f(), z("tr", { key: m }, [
          (f(!0), z(J, null, at(i(c), (b, x) => (f(), z("td", {
            key: x,
            class: V([
              [b.class],
              {
                "is-active": x === t.sort.sortTarget && t.sort.orders[0].direction !== i(Dt)
              }
            ])
          }, [
            ut(u.$slots, `cell-${x}`, {
              row: g,
              prop: x
            }, () => [
              dt(P(g[x]), 1)
            ])
          ], 2))), 128))
        ]))), 128))
      ]),
      i(n) && t.rows.length === 0 ? (f(), z("tfoot", Nl, [
        _("tr", null, [
          _("td", { colspan: i(d) }, [
            ut(u.$slots, "loading", {}, () => [
              dt(P(i(s)("common.loading")), 1)
            ])
          ], 8, Ml)
        ])
      ])) : E("", !0),
      t.rows.length === 0 && !i(o) && !i(n) ? (f(), z("tfoot", Dl, [
        _("tr", null, [
          _("td", { colspan: i(d) }, [
            ut(u.$slots, "empty", {}, () => [
              dt(P(i(s)("common.noData")), 1)
            ])
          ], 8, Rl)
        ])
      ])) : E("", !0)
    ], 2));
  }
}, Gl = {}, Fl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Vl = /* @__PURE__ */ _("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1), Bl = /* @__PURE__ */ _("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}, null, -1), Hl = /* @__PURE__ */ _("line", {
  x1: "12",
  y1: "17",
  x2: "12.01",
  y2: "17"
}, null, -1), Yl = [
  Vl,
  Bl,
  Hl
];
function Ul(t, e) {
  return f(), z("svg", Fl, Yl);
}
const Kl = /* @__PURE__ */ X(Gl, [["render", Ul]]), ht = {
  __name: "ErrorNotice",
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, { t: r, hasTranlation: o } = Tt(), a = pt("error-notice"), n = O(() => {
      var s;
      return o(`errors.${e.error.key}`) ? r(`errors.${e.error.key}`, e.error.cause) : (s = e.error) == null ? void 0 : s.message;
    });
    return (s, l) => (f(), z("div", {
      class: V(i(a))
    }, [
      L(Kl, {
        class: "icon",
        width: "20",
        height: "20"
      }),
      _("span", null, P(i(n)), 1)
    ], 2));
  }
}, la = {
  __name: "ErrorProvider",
  setup(t) {
    const { message: e, hasError: r, error: o } = xt();
    return (a, n) => ut(a.$slots, "default", {
      message: i(e),
      error: i(o),
      hasError: i(r)
    });
  }
}, Wl = {
  "undefined-column": "A(z) {column} oszlop nem l\xE9tezik!",
  "invalid-season-name": "\xC9rv\xE9nytelen szezon n\xE9v",
  "api-key-not-found": "API Kulcs nem megfelel\u0151"
}, ql = {
  loading: "T\xF6lt\u0151d\xE9s...",
  noData: "Nincs megjelen\xEDthet\u0151 adat",
  selectTimezone: "*Minden id\u0151pont a sz\xE1m\xEDt\xF3g\xE9p id\u0151z\xF3n\xE1ja szerint jelenik meg ({timezone}). V\xE1lt\xE1s: ",
  hungary: "Magyarorsz\xE1g",
  romania: "Rom\xE1nia",
  shootoutShort: "SU.",
  overtimeShort: "HU.",
  all: "Mind",
  report: "Jegyz\u0151k\xF6nyv"
}, Zl = {
  report: "Riport",
  video: "Vide\xF3",
  season: "Szezon",
  section: "Szakasz",
  teams: "Csapatok",
  filterName: "Sz\u0171r\xE9s n\xE9vre",
  players: "J\xE1t\xE9kosok",
  month: "H\xF3nap",
  homeOrAway: "Hazai vagy Vend\xE9g",
  home: "Hazai",
  away: "Vend\xE9g"
}, Xl = {
  points: "Pontok",
  goals: "G\xF3lok",
  assists: "G\xF3lpasszok",
  penalties: "B\xFCntet\xE9sek",
  goalies: "Kapusok",
  goaliesLimit: "Kapusok 40% j\xE9gid\u0151 alatt",
  teamAttendance: "N\xE9z\u0151sz\xE1m",
  teamFairplay: "B\xFCntet\xE9sek",
  teamPenaltyKilling: "Emberh\xE1tr\xE1nyok",
  teamPowerplay: "Emberel\u0151ny\xF6k",
  teamScoringEfficiency: "Hat\xE9konys\xE1g"
}, Jl = {
  Negyedd\u00F6nt\u01511: "Negyedd\xF6nt\u0151 1",
  Negyedd\u00F6nt\u01512: "Negyedd\xF6nt\u0151 2",
  Negyedd\u00F6nt\u01513: "Negyedd\xF6nt\u0151 3",
  Negyedd\u00F6nt\u01514: "Negyedd\xF6nt\u0151 4",
  El\u0151d\u00F6nt\u01511: "El\u0151d\xF6nt\u0151 1",
  El\u0151d\u00F6nt\u01512: "El\u0151d\xF6nt\u0151 2",
  D\u00F6nt\u0151: "D\xF6nt\u0151"
}, Ql = {
  blank: "#",
  team: {
    short: "Csapat",
    tooltip: "Csapatn\xE9v"
  },
  game: {
    short: "M",
    tooltip: "M\xE9rk\u0151z\xE9ssz\xE1m"
  },
  wins: {
    short: "GY",
    tooltip: "Gy\u0151zelem"
  },
  draw: {
    short: "D",
    tooltip: "D\xF6ntetlen"
  },
  otw: {
    short: "GYH",
    tooltip: "Gy\u0151zelem Hosszabb\xEDt\xE1sban"
  },
  otl: {
    short: "VH",
    tooltip: "Veres\xE9g Hosszabb\xEDt\xE1sban"
  },
  losses: {
    short: "V",
    tooltip: "Veres\xE9g"
  },
  goalFor: {
    short: "SZG",
    tooltip: "Szerzett G\xF3l"
  },
  goalAgainst: {
    short: "KG",
    tooltip: "Kapott G\xF3l"
  },
  goalDiff: {
    short: "GK",
    tooltip: "G\xF3lk\xFCl\xF6nbs\xE9g"
  },
  name: {
    short: "N\xE9v",
    tooltip: "J\xE1t\xE9kosn\xE9v"
  },
  goals: {
    short: "G",
    tooltip: "G\xF3lok"
  },
  assists: {
    short: "A",
    tooltip: "G\xF3lpasszok"
  },
  points: {
    short: "P",
    tooltip: "Pontok"
  },
  plusMinus: {
    short: "+/-",
    tooltip: "Plussz/Minusz"
  },
  sog: {
    short: "L",
    tooltip: "L\xF6v\xE9sek"
  },
  sogPercent: {
    short: "L%",
    tooltip: "L\xF6v\xE9s Hat\xE9konys\xE1g"
  },
  gameName: {
    short: "#",
    tooltip: "M\xE9rk\u0151z\xE9s Sorsz\xE1ma"
  },
  gameDate: {
    short: "D\xE1tum",
    tooltip: "M\xE9rk\u0151z\xE9s D\xE1tuma"
  },
  gameDateTime: {
    short: "*Id\u0151 ({offsetName})",
    tooltip: "M\xE9rk\u0151z\xE9s kezd\xE9si ideje (Z\xF3na neve)"
  },
  homeTeam: {
    short: "Hazai",
    tooltip: "Hazai Csapat"
  },
  awayTeam: {
    short: "Vend\xE9g",
    tooltip: "Vend\xE9g Csapat"
  },
  location: {
    short: "Helysz\xEDn",
    tooltip: "M\xE9rk\u0151z\xE9s Helysz\xEDne"
  },
  broadcast: {
    short: "TV",
    tooltip: "TV K\xF6zvet\xEDt\xE9s"
  },
  minorPenalties: {
    short: "MINOR",
    tooltip: "Kisb\xFCntet\xE9s (2p)"
  },
  majorPenalties: {
    short: "MAJOR",
    tooltip: "B\xFCntet\xE9s (5p)"
  },
  misconducts: {
    short: "MISC",
    tooltip: "Fegyelmi b\xFCntet\xE9s (10p)"
  },
  gameMisconducts: {
    short: "GA-MI",
    tooltip: "Fegyelmi b\xFCntet\xE9s (20p)"
  },
  matchPenalties: {
    short: "MATCH",
    tooltip: "V\xE9gleges ki\xE1ll\xEDt\xE1sok (25p)"
  },
  pim: {
    short: "B\xDCP",
    tooltip: "B\xFCntet\xE9s Percek"
  },
  pimPerGame: {
    short: "B\xDCP/M",
    tooltip: "M\xE9rk\u0151z\xE9senk\xE9nti B\xFCntet\xE9s Percek"
  },
  gpgk: {
    short: "M",
    tooltip: "M\xE9rk\u0151z\xE9sre Nevezve"
  },
  gpi: {
    short: "LM",
    tooltip: "M\xE9rk\u0151z\xE9sen J\xE1tszott"
  },
  toi: {
    short: "TOI",
    tooltip: "J\xE9gen T\xF6lt\xF6tt Id\u0151"
  },
  toiPercent: {
    short: "TOI%",
    tooltip: "J\xE9gen T\xF6lt\xF6tt Id\u0151 Sz\xE1zal\xE9k"
  },
  ga: {
    short: "GA",
    tooltip: "Kapott G\xF3l"
  },
  gaa: {
    short: "GAA",
    tooltip: "Kapott G\xF3l\xE1tlag"
  },
  sa: {
    short: "KL",
    tooltip: "Kapott L\xF6v\xE9s"
  },
  svs: {
    short: "VL",
    tooltip: "V\xE9dett L\xF6v\xE9s"
  },
  svsPercent: {
    short: "VH%",
    tooltip: "V\xE9d\xE9s Hat\xE9konys\xE1g"
  },
  homeHeader: {
    short: "Hazai:",
    tooltip: ""
  },
  awayHeader: {
    short: "Vend\xE9g:",
    tooltip: ""
  },
  totalHeader: {
    short: "\xD6sszes:",
    tooltip: ""
  },
  homeGame: {
    short: "M",
    tooltip: "Hazai M\xE9rk\u0151z\xE9s"
  },
  awayGame: {
    short: "M",
    tooltip: "Vend\xE9g M\xE9rk\u0151z\xE9s"
  },
  totalGame: {
    short: "M",
    tooltip: "\xD6sszes M\xE9rk\u0151z\xE9s"
  },
  homeAttendance: {
    short: "N\xE9z\u0151sz\xE1m",
    tooltip: "Hazai N\xE9z\u0151"
  },
  awayAttendance: {
    short: "N\xE9z\u0151sz\xE1m",
    tooltip: "Vend\xE9g N\xE9z\u0151"
  },
  totalAttendance: {
    short: "N\xE9z\u0151sz\xE1m",
    tooltip: "\xD6sszes N\xE9z\u0151"
  },
  homeAttendanceAvg: {
    short: "\xC1tlag",
    tooltip: "Hazi N\xE9z\u0151 \xC1tlag"
  },
  awayAttendanceAvg: {
    short: "\xC1tlag",
    tooltip: "Vend\xE9g N\xE9z\u0151 \xC1tlag"
  },
  totalAttendanceAvg: {
    short: "\xC1tlag",
    tooltip: "\xD6sszes N\xE9z\u0151 \xC1tlag"
  },
  powerplayDisadvantages: {
    short: "DVG",
    tooltip: "Emberh\xE1tr\xE1nyok"
  },
  dvgTime: {
    short: "DVG-T",
    tooltip: "Emberh\xE1tr\xE1nyban T\xF6lt\xF6tt Id\u0151"
  },
  dvgTimePP1: {
    short: "DVG-T PP1",
    tooltip: "Szimpla emberh\xE1tr\xE1nyban t\xF6lt\xF6tt id\u0151"
  },
  dvgTimePP2: {
    short: "DVG-T PP2",
    tooltip: "Kett\u0151s emberh\xE1tr\xE1nyban t\xF6lt\xF6tt id\u0151"
  },
  ppga: {
    short: "PPGA",
    tooltip: "Emberh\xE1tr\xE1nyban kapott g\xF3lok"
  },
  shgf: {
    short: "SHGF",
    tooltip: "Emberh\xE1tr\xE1nyban szerzett g\xF3l"
  },
  pkPercent: {
    short: "PK%",
    tooltip: "Emberh\xE1tr\xE1ny kiv\xE9dekez\xE9s"
  },
  adv: {
    short: "ADV",
    tooltip: "Emberel\u0151ny\xF6k sz\xE1ma"
  },
  advTime: {
    short: "ADV-T",
    tooltip: "Emberel\u0151nyben t\xF6lt\xF6tt id\u0151"
  },
  advTimePP1: {
    short: "ADV-T PP1",
    tooltip: "Szimpla emberel\u0151nyben t\xF6lt\xF6tt id\u0151"
  },
  advTimePP2: {
    short: "ADV-T PP2",
    tooltip: "Kett\u0151s emberel\u0151nyben t\xF6lt\xF6tt id\u0151"
  },
  ppgf: {
    short: "PPGF",
    tooltip: "Emberel\u0151nyben szerzett g\xF3lok"
  },
  shga: {
    short: "SHGA",
    tooltip: "Emberel\u0151nyben kapott g\xF3lok"
  },
  ppPercent: {
    short: "PP%",
    tooltip: "Emberel\u0151ny kihaszn\xE1l\xE1s"
  },
  gfgp: {
    short: "GF/GP",
    tooltip: "Szerzett g\xF3l\xE1tlag"
  },
  gagp: {
    short: "GA/GP",
    tooltip: "Kapott g\xF3l\xE1tlag"
  },
  sogp: {
    short: "Shots/GP",
    tooltip: "\xC1tlagos l\xF6v\xE9ssz\xE1m"
  },
  sagp: {
    short: "SA/GP",
    tooltip: "\xC1tlagos kapott l\xF6v\xE9ssz\xE1m"
  }
}, tc = {
  data: {
    localTime: "Helysz\xEDn szerinti id\u0151"
  },
  status: {
    jury: "Versenyb\xEDr\xF3s\xE1g",
    delayed: "Elhalasztva"
  },
  period: {
    Bemeleg\u00EDt\u00E9s: "Bemeleg\xEDt\xE9s",
    "Bemeleg\xEDt\xE9s v\xE9ge": "Bemeleg\xEDt\xE9s V\xE9ge",
    "1. harmad": "I. harmad",
    "1. harmad v\xE9ge": "I. harmad V\xE9ge",
    "2. harmad": "II. harmad",
    "2. harmad v\xE9ge": "II. harmad V\xE9ge",
    "3. harmad": "III. harmad",
    "3. harmad v\xE9ge": "III. harmad V\xE9ge",
    "4. harmad": "IV. harmad",
    "4. harmad v\xE9ge": "IV. harmad V\xE9ge",
    "5. harmad": "V. harmad",
    "5. harmad v\xE9ge": "V. harmad V\xE9ge",
    "6. harmad": "VI. harmad",
    "6. harmad v\xE9ge": "VI. harmad V\xE9ge",
    Hosszabb\u00EDt\u00E1s: "Hosszabb\xEDt\xE1s",
    "Hosszabb\xEDt\xE1s v\xE9ge": "Hosszabb\xEDt\xE1s v\xE9ge",
    B\u00FCntet\u0151k: "Sz\xE9tl\xF6v\xE9s",
    "B\xFCntet\u0151k v\xE9ge": "Sz\xE9tl\xF6v\xE9s v\xE9ge",
    V\u00E9geredm\u00E9ny: "V\xE9geredm\xE9ny",
    Sz\u00E9tl\u00F6v\u00E9s: "Sz\xE9tl\xF6v\xE9s"
  }
}, ec = {
  errors: Wl,
  common: ql,
  selection: Zl,
  report: Xl,
  playoffs: Jl,
  table: Ql,
  game: tc
}, rc = {
  "undefined-column": "The {column} column is not exists!",
  "invalid-season-name": "Invalid season name",
  "api-key-not-found": "API Key not found"
}, oc = {
  loading: "Loading...",
  noData: "No data to display",
  selectTimezone: "*All times are displayed according to your computer's time zone ({timezone}). Change: ",
  hungary: "Hungary",
  romania: "Romania",
  shootoutShort: "SO",
  overtimeShort: "OT",
  all: "All",
  report: "Report Sheet"
}, ac = {
  report: "Report",
  video: "Video",
  season: "Season",
  section: "Section",
  teams: "Teams",
  filterName: "Filter by Name",
  players: "Players",
  month: "Month",
  homeOrAway: "Home or Away",
  home: "Home",
  away: "Away"
}, nc = {
  points: "Points",
  goals: "Goals",
  assists: "Assists",
  penalties: "Penalties",
  goalies: "Goalies",
  goaliesLimit: "Goalies under 40%",
  teamAttendance: "Attendance",
  teamFairplay: "Fairplay",
  teamPenaltyKilling: "Penalty Killing",
  teamPowerplay: "Powerplay",
  teamScoringEfficiency: "Scoring Efficiency"
}, ic = {
  Negyedd\u00F6nt\u01511: "Quarterfinal 1",
  Negyedd\u00F6nt\u01512: "Quarterfinal 2",
  Negyedd\u00F6nt\u01513: "Quarterfinal 3",
  Negyedd\u00F6nt\u01514: "Quarterfinal 4",
  El\u0151d\u00F6nt\u01511: "Semifinal 1",
  El\u0151d\u00F6nt\u01512: "Semifinal 2",
  D\u00F6nt\u0151: "Final"
}, sc = {
  blank: "#",
  team: {
    short: "Team",
    tooltip: "Team name"
  },
  game: {
    short: "GP",
    tooltip: "Game Played"
  },
  wins: {
    short: "W",
    tooltip: "Wins"
  },
  draw: {
    short: "D",
    tooltip: "Draw"
  },
  otw: {
    short: "OTW",
    tooltip: "Overtime Wins"
  },
  otl: {
    short: "OTL",
    tooltip: "Overtime Losses"
  },
  losses: {
    short: "L",
    tooltip: "Losses"
  },
  goalFor: {
    short: "GF",
    tooltip: "Goals For"
  },
  goalAgainst: {
    short: "GA",
    tooltip: "Goals Against"
  },
  goalDiff: {
    short: "GD",
    tooltip: "Goal Differential"
  },
  points: {
    short: "PTS",
    tooltip: "Points"
  },
  name: {
    short: "Name",
    tooltip: "Player name"
  },
  goals: {
    short: "G",
    tooltip: "Goals"
  },
  assists: {
    short: "A",
    tooltip: "Assists"
  },
  plusMinus: {
    short: "+/-",
    tooltip: "Plus/Minus"
  },
  sog: {
    short: "SOG",
    tooltip: "Shots on Goal"
  },
  sogPercent: {
    short: "SOG%",
    tooltip: "Shots on Goal Percent"
  },
  gameName: {
    short: "#",
    tooltip: "Game name"
  },
  gameDate: {
    short: "Date",
    tooltip: "Scheduled Date"
  },
  gameDateTime: {
    short: "*Time ({offsetName})",
    tooltip: "Scheduled Time (Offset Name)"
  },
  homeTeam: {
    short: "Home",
    tooltip: "Home Team"
  },
  awayTeam: {
    short: "Away",
    tooltip: "Away Team"
  },
  location: {
    short: "Location",
    tooltip: "Game Location"
  },
  broadcast: {
    short: "Broadcast",
    tooltip: "Television Broadcast"
  },
  minorPenalties: {
    short: "MINOR",
    tooltip: "Penalties Minor"
  },
  majorPenalties: {
    short: "MAJOR",
    tooltip: "Penalties Major"
  },
  misconducts: {
    short: "MISC",
    tooltip: "Penalties Misconduct"
  },
  gameMisconducts: {
    short: "GA-MI",
    tooltip: "Penalties Game Misconduct"
  },
  matchPenalties: {
    short: "MATCH",
    tooltip: "Penalties Match"
  },
  pim: {
    short: "PIM",
    tooltip: "Penalty Minutes"
  },
  pimPerGame: {
    short: "PIM/G",
    tooltip: "Penalty Minutes per Game"
  },
  gpgk: {
    short: "GP",
    tooltip: "Games Played"
  },
  gpi: {
    short: "GPI",
    tooltip: "Games Played In"
  },
  toi: {
    short: "TOI",
    tooltip: "Time On Ice"
  },
  toiPercent: {
    short: "TOI%",
    tooltip: "Time On Ice as Percentage"
  },
  ga: {
    short: "GA",
    tooltip: "Goals Against"
  },
  gaa: {
    short: "GAA",
    tooltip: "Goals Against Average"
  },
  sa: {
    short: "SA",
    tooltip: "Shots Against"
  },
  svs: {
    short: "SVS",
    tooltip: "Saves"
  },
  svsPercent: {
    short: "SV%",
    tooltip: "Save Percentage"
  },
  homeHeader: {
    short: "Home:",
    tooltip: ""
  },
  awayHeader: {
    short: "Away:",
    tooltip: ""
  },
  totalHeader: {
    short: "Total:",
    tooltip: ""
  },
  homeGame: {
    short: "GP",
    tooltip: "Home Games Played"
  },
  awayGame: {
    short: "GP",
    tooltip: "Away Games Played"
  },
  totalGame: {
    short: "GP",
    tooltip: "Total Games Played"
  },
  homeAttendance: {
    short: "Att",
    tooltip: "Home Attendance"
  },
  awayAttendance: {
    short: "Att",
    tooltip: "Away Attendance"
  },
  totalAttendance: {
    short: "Att",
    tooltip: "Total Attendance"
  },
  homeAttendanceAvg: {
    short: "Avg",
    tooltip: "Home Average Attendance"
  },
  awayAttendanceAvg: {
    short: "Avg",
    tooltip: "Away Average Attendance"
  },
  totalAttendanceAvg: {
    short: "Avg",
    tooltip: "Total Average Attendance"
  },
  powerplayDisadvantages: {
    short: "DVG",
    tooltip: "Disadvantages (Number of Times Shorthanded)"
  },
  dvgTime: {
    short: "DVG-T",
    tooltip: "Disadvantages Time"
  },
  dvgTimePP1: {
    short: "DVG-T PP1",
    tooltip: "Disadvantages Time (Period of PP1)"
  },
  dvgTimePP2: {
    short: "DVG-T PP2",
    tooltip: "Disadvantages Time (Period of PP2)"
  },
  ppga: {
    short: "PPGA",
    tooltip: "Powerplay Goals Against"
  },
  shgf: {
    short: "SHGF",
    tooltip: "Shorthanded Goals For"
  },
  pkPercent: {
    short: "PK%",
    tooltip: "Penalty Killing Percentage"
  },
  adv: {
    short: "ADV",
    tooltip: "Advantages (Times on Powerplay)"
  },
  advTime: {
    short: "ADV-T",
    tooltip: "Advantages Time (Period of Powerplay)"
  },
  advTimePP1: {
    short: "ADV-T PP1",
    tooltip: "Advantages Time (Period of PP1)"
  },
  advTimePP2: {
    short: "ADV-T PP2",
    tooltip: "Advantages Time (Period of PP2)"
  },
  ppgf: {
    short: "PPGF",
    tooltip: "Powerplay Goals For"
  },
  shga: {
    short: "SHGA",
    tooltip: "Shorthanded Goals Against"
  },
  ppPercent: {
    short: "PP%",
    tooltip: "Powerplay Percentage"
  },
  gfgp: {
    short: "GF/GP",
    tooltip: "Szerzett g\xF3l\xE1tlag"
  },
  gagp: {
    short: "GA/GP",
    tooltip: "Kapott g\xF3l\xE1tlag"
  },
  sogp: {
    short: "Shots/GP",
    tooltip: "\xC1tlagos l\xF6v\xE9ssz\xE1m"
  },
  sagp: {
    short: "SA/GP",
    tooltip: "Shots Against per Game"
  }
}, lc = {
  data: {
    localTime: "Game local time"
  },
  status: {
    jury: "Jury result",
    delayed: "Game delayed"
  },
  period: {
    Bemeleg\u00EDt\u00E9s: "Warm-up",
    "Bemeleg\xEDt\xE9s v\xE9ge": "Warm-up End",
    "1. harmad": "First period",
    "1. harmad v\xE9ge": "First period End",
    "2. harmad": "Second period",
    "2. harmad v\xE9ge": "Second period End",
    "3. harmad": "Third period",
    "3. harmad v\xE9ge": "Third period End",
    "4. harmad": "IV. period",
    "4. harmad v\xE9ge": "IV. period End",
    "5. harmad": "V. period",
    "5. harmad v\xE9ge": "V. period End",
    "6. harmad": "VI. period",
    "6. harmad v\xE9ge": "VI. period End",
    Hosszabb\u00EDt\u00E1s: "Overtime",
    "Hosszabb\xEDt\xE1s v\xE9ge": "Overtime End",
    B\u00FCntet\u0151l\u00F6v\u00E9sek: "Penalty Shot",
    V\u00E9geredm\u00E9ny: "Game Completed",
    Sz\u00E9tl\u00F6v\u00E9s: "Shoot Out"
  }
}, cc = {
  errors: rc,
  common: oc,
  selection: ac,
  report: nc,
  playoffs: ic,
  table: sc,
  game: lc
}, dc = uo({
  props: {
    locale: {
      type: String,
      default: "hu"
    }
  },
  setup(t) {
    const { translate: e } = ns({
      locale: O(() => t.locale),
      messages: {
        hu: ec,
        en: cc
      }
    });
    return {
      translate: e
    };
  }
});
function uc(t, e, r, o, a, n) {
  return ut(t.$slots, "default", { t: t.translate });
}
const bt = /* @__PURE__ */ X(dc, [["render", uc]]), pc = ["src"], gc = ["src", "title"], Vt = {
  __name: "Image",
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    defaultSrc: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, { defaultSrc: r } = bo(e), o = F({ src: e.src }), { error: a, isReady: n } = nn(o, { resetOnExecute: !1, shallow: !1 });
    return (s, l) => (f(), z(J, null, [
      i(a) && i(r) ? (f(), z("img", {
        key: 0,
        src: i(r),
        class: V(["is-loaded", s.$attrs.class])
      }, null, 10, pc)) : E("", !0),
      i(a) ? E("", !0) : (f(), z("img", {
        key: 1,
        src: o.value.src,
        class: V([s.$attrs.class, { "is-loaded": i(n) }]),
        title: e.title
      }, null, 10, gc))
    ], 64));
  }
}, mc = { style: { "text-align": "center" } }, Tr = {
  __name: "LoadingIndicator",
  setup(t) {
    const { t: e } = Tt();
    return (r, o) => (f(), z("div", mc, P(i(e)("common.loading")), 1));
  }
}, bc = {}, vc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fc = /* @__PURE__ */ _("polyline", { points: "15 18 9 12 15 6" }, null, -1), hc = [
  fc
];
function yc(t, e) {
  return f(), z("svg", vc, hc);
}
const wc = /* @__PURE__ */ X(bc, [["render", yc]]), xc = {}, _c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, zc = /* @__PURE__ */ _("polyline", { points: "9 18 15 12 9 6" }, null, -1), kc = [
  zc
];
function Tc(t, e) {
  return f(), z("svg", _c, kc);
}
const Sc = /* @__PURE__ */ X(xc, [["render", Tc]]), Pc = ["disabled"], $c = ["disabled"], jc = {
  key: 1,
  class: "is-disabled"
}, Oc = ["disabled", "onClick"], Ac = {
  key: 2,
  class: "is-disabled"
}, Lc = /* @__PURE__ */ _("span", null, "...", -1), Ic = [
  Lc
], Ec = ["disabled"], Cc = ["disabled"], ye = {
  __name: "Paginator",
  props: {
    page: {
      type: Number,
      required: !1,
      default: 0,
      validator: (t) => t >= 0
    },
    itemsPerPage: {
      type: Number,
      required: !1,
      default: 10,
      validator: (t) => t > 0
    },
    totalItems: {
      type: Number,
      required: !0,
      validator: (t) => t >= 0
    },
    rangeLength: {
      type: Number,
      default: 3,
      validator: (t) => t >= 2
    },
    isCompact: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, o = pt("paginator"), { page: a, pageCount: n, range: s, goTo: l, pageStep: c } = Ls({
      currentPage: O(() => r.page),
      totalItems: O(() => r.totalItems),
      itemsPerPage: r.itemsPerPage,
      rangeLength: r.rangeLength,
      update: (d) => e("change", d)
    });
    return (d, v) => i(n) > 1 ? (f(), z("div", {
      key: 0,
      class: V(i(o))
    }, [
      _("button", {
        type: "button",
        disabled: i(a) === 1,
        onClick: v[0] || (v[0] = (u) => i(c)(-1))
      }, [
        ut(d.$slots, "prev", {}, () => [
          L(wc, { class: "icon paginator-left" })
        ])
      ], 8, Pc),
      t.isCompact ? E("", !0) : (f(), z("button", {
        key: 0,
        type: "button",
        disabled: i(a) === 1,
        onClick: v[1] || (v[1] = (u) => i(l)(1))
      }, "1", 8, $c)),
      t.isCompact ? E("", !0) : (f(), z("div", jc, "...")),
      (f(!0), z(J, null, at(i(s), (u) => (f(), z("button", {
        type: "button",
        key: u,
        class: V({ "is-active": u === i(a) }),
        disabled: u === i(a),
        onClick: (p) => i(l)(u)
      }, P(u), 11, Oc))), 128)),
      t.isCompact ? E("", !0) : (f(), z("div", Ac, Ic)),
      t.isCompact ? E("", !0) : (f(), z("button", {
        key: 3,
        type: "button",
        disabled: i(a) === i(n),
        onClick: v[2] || (v[2] = (u) => i(l)(i(n)))
      }, P(i(n)), 9, Ec)),
      _("button", {
        type: "button",
        disabled: i(a) === i(n),
        onClick: v[3] || (v[3] = re((u) => i(c)(1), ["prevent"]))
      }, [
        ut(d.$slots, "next", {}, () => [
          L(Sc, { class: "icon paginator-left" })
        ])
      ], 8, Cc)
    ], 2)) : E("", !0);
  }
}, Sr = {
  __name: "ResponsiveTable",
  setup(t) {
    const e = F(null), r = pt("table-responsive");
    return (o, a) => (f(), z("div", {
      ref_key: "el",
      ref: e,
      class: V(i(r))
    }, [
      ut(o.$slots, "default", { el: e.value })
    ], 2));
  }
}, Nc = ["onClick"], ca = {
  __name: "TimezoneSelector",
  props: {
    locale: {
      type: String,
      default: "hu"
    },
    currentZone: {
      type: String,
      required: !0
    }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = t, { t: o } = Tt(), a = pt("timezone-selector"), n = O(() => te(new Date(), null, r.locale)), s = Ke(), l = O(() => Array.from(Ts.values()).map((d) => ({
      ...d,
      isActive: te(new Date(), r.currentZone, r.locale) === te(new Date(), d.timezone, r.locale),
      zoneOffsetName: te(new Date(), d.timezone, r.locale)
    }))), c = (d) => e("change", d);
    return (d, v) => (f(), z("div", {
      class: V(i(a))
    }, [
      L(i(ls), {
        path: "common.selectTimezone",
        tag: "span"
      }, {
        timezone: C(() => [
          _("a", {
            href: "#",
            onClick: v[0] || (v[0] = re((u) => c(i(s)), ["prevent"]))
          }, P(i(n)), 1)
        ]),
        _: 1
      }),
      (f(!0), z(J, null, at(i(l), (u) => (f(), z("a", {
        key: u.countryLabelKey,
        href: "#",
        class: V({ "is-active": u.isActive }),
        onClick: re((p) => c(u.timezone), ["prevent"])
      }, P(i(o)(`common.${u.countryLabelKey}`)) + " (" + P(u.zoneOffsetName) + ") ", 11, Nc))), 128))
    ], 2));
  }
}, Mc = { class: "is-portrait-image" }, Dc = ["href"], Rc = ["href"], Pt = {
  __name: "StatisticsTable",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    rows: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      deafult: !1
    },
    hideColumns: {
      type: String,
      default: ""
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    externalTeamResolver: {
      type: Function,
      required: !0
    },
    externalPlayerResolver: {
      type: Function,
      default: () => {
      }
    },
    isTeamLinked: {
      type: Boolean,
      default: !1
    },
    isPlayerLinked: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  setup(t, { emit: e }) {
    const r = t, { onError: o } = Ue(), a = O(() => r.columns), { columns: n, error: s } = Ro(a, r.hideColumns);
    s.value && o(
      new Ze(Te.message, {
        ...Te.options,
        cause: { column: s.value }
      })
    );
    const l = (c) => e("sort", c);
    return (c, d) => (f(), W(Sr, null, {
      default: C(({ el: v }) => [
        L(sa, {
          columns: i(n),
          sort: r.sort,
          rows: r.rows,
          "is-loading": t.isLoading,
          "append-to": v,
          onSort: l
        }, $a({
          "cell-index": C(({ row: u }) => [
            _("span", {
              class: V(u.indexClass)
            }, P(u.index), 3)
          ]),
          "cell-playerPortrait": C(({ row: u }) => [
            _("div", Mc, [
              (f(), W(Vt, {
                key: u.id || u.playerId,
                src: u.playerPortrait,
                "default-src": i(xs)
              }, null, 8, ["src", "default-src"]))
            ])
          ]),
          "cell-teamLogo": C(({ row: u }) => [
            (f(), W(Vt, {
              class: "is-logo-image",
              key: u.teamId || u.id,
              src: u.teamLogo
            }, null, 8, ["src"]))
          ]),
          loading: C(() => [
            L(Tr)
          ]),
          _: 2
        }, [
          t.isTeamLinked ? {
            name: "cell-teamName",
            fn: C(({ row: u }) => [
              _("a", {
                href: t.externalTeamResolver(u.teamName),
                target: "_blank"
              }, P(u.teamName), 9, Dc)
            ]),
            key: "0"
          } : void 0,
          t.isPlayerLinked ? {
            name: "cell-name",
            fn: C(({ row: u }) => [
              _("a", {
                href: t.externalPlayerResolver(u.id),
                target: "_blank"
              }, P(u.name), 9, Rc)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["columns", "sort", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, $t = {
  locale: {
    type: String,
    default: "hu"
  },
  championshipId: {
    type: String,
    default: ""
  },
  division: {
    type: String,
    default: ""
  },
  apiKey: {
    type: String,
    default: ""
  },
  hideColumns: {
    type: String,
    default: ""
  }
}, Jt = {
  externalTeamLink: {
    type: [String, Function],
    default: ""
  },
  isTeamLinked: {
    type: Boolean,
    default: !1
  }
}, tr = {
  limit: {
    type: Number,
    default: 20
  },
  teamFilterByName: {
    type: String,
    default: ""
  },
  externalPlayerLink: {
    type: [String, Function],
    default: ""
  },
  isPlayerLinked: {
    type: Boolean,
    default: !1
  },
  ...Jt
}, Gc = {
  name: {
    label: "table.gameName.short",
    tooltip: "table.gameName.tooltip",
    class: "is-text-left is-text-light"
  },
  gameDateDate: {
    label: "table.gameDate.short",
    tooltip: "table.gameDate.tooltip",
    class: "is-text-left"
  },
  gameDateTime: {
    label: "table.gameDateTime.short",
    tooltip: "table.gameDateTime.tooltip",
    class: "is-text-left"
  },
  homeTeamName: {
    label: "table.homeTeam.short",
    tooltip: "table.homeTeam.tooltip",
    class: "is-text-right is-w-auto is-text-bold"
  },
  homeTeamLogo: {
    label: "",
    class: "is-has-image"
  },
  gameResult: {
    label: "",
    class: "is-text-bold is-text-xl"
  },
  gameResultType: {
    label: "",
    tooltip: ""
  },
  awayTeamLogo: {
    label: "",
    class: "is-has-image"
  },
  awayTeamName: {
    label: "table.awayTeam.short",
    tooltip: "table.awayTeam.tooltip",
    class: "is-text-left is-w-auto is-text-bold"
  },
  location: {
    label: "table.location.short",
    tooltip: "table.location.tooltip",
    class: "is-text-left"
  },
  broadcast: {
    label: "table.broadcast.short",
    tooltip: "table.broadcast.tooltip"
  },
  more: {
    label: ""
  }
}, Fc = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  m: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "m", direction: y }]
  },
  p3: {
    label: "table.wins.short",
    tooltip: "table.wins.tooltip",
    sortOrders: [
      { target: "p3", direction: y },
      { target: "p2", direction: y }
    ]
  },
  p2: {
    label: "table.otw.short",
    tooltip: "table.otw.tooltip",
    sortOrders: [{ target: "p2", direction: y }]
  },
  p1: {
    label: "table.otl.short",
    tooltip: "table.otl.tooltip",
    sortOrders: [{ target: "p1", direction: q }]
  },
  p0: {
    label: "table.losses.short",
    tooltip: "table.losses.tooltip",
    sortOrders: [{ target: "p0", direction: q }]
  },
  plus: {
    label: "table.goalFor.short",
    tooltip: "table.goalFor.tooltip",
    sortOrders: [{ target: "plus", direction: y }]
  },
  minus: {
    label: "table.goalAgainst.short",
    tooltip: "table.goalAgainst.tooltip",
    sortOrders: [{ target: "minus", direction: q }]
  },
  gk: {
    label: "table.goalDiff.short",
    tooltip: "table.goalDiff.tooltip",
    sortOrders: [{ target: "gk", direction: y }]
  },
  p: {
    label: "table.points.short",
    tooltip: "table.points.tooltip",
    class: "is-text-bold",
    sortOrders: [{ target: "p", direction: y }]
  }
}, Vc = {
  index: {
    label: "#",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  m: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "m", direction: y }]
  },
  p2: {
    label: "table.wins.short",
    tooltip: "table.wins.tooltip",
    sortOrders: [
      { target: "p2", direction: y },
      { target: "p1", direction: y }
    ]
  },
  p1: {
    label: "table.draw.short",
    tooltip: "table.draw.tooltip",
    sortOrders: [
      { target: "p1", direction: y },
      { target: "p2", direction: y }
    ]
  },
  p0: {
    label: "table.losses.short",
    tooltip: "table.losses.tooltip",
    sortOrders: [{ target: "p0", direction: q }]
  },
  plus: {
    label: "table.goalFor.short",
    tooltip: "table.goalFor.tooltip",
    sortOrders: [{ target: "plus", direction: y }]
  },
  minus: {
    label: "table.goalAgainst.short",
    tooltip: "table.goalAgainst.tooltip",
    sortOrders: [{ target: "minus", direction: q }]
  },
  gk: {
    label: "table.goalDiff.short",
    tooltip: "table.goalDiff.tooltip",
    sortOrders: [{ target: "gk", direction: y }]
  },
  p: {
    label: "table.points.short",
    tooltip: "table.points.tooltip",
    class: "is-text-bold",
    sortOrders: [{ target: "p", direction: y }]
  }
}, pe = {
  index: {
    label: "#",
    class: "is-text-left"
  },
  playerPortrait: {
    label: "",
    class: "is-has-image"
  },
  name: {
    label: "table.name.short",
    tooltip: "table.name.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "name", direction: q }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gp: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  g: {
    label: "table.goals.short",
    tooltip: "table.goals.tooltip",
    sortOrders: [
      { target: "g", direction: y },
      { target: "a", direction: y }
    ]
  },
  a: {
    label: "table.assists.short",
    tooltip: "table.assists.tooltip",
    sortOrders: [
      { target: "a", direction: y },
      { target: "g", direction: y }
    ]
  },
  point: {
    label: "table.points.short",
    tooltip: "table.points.tooltip",
    sortOrders: [{ target: "point", direction: y }]
  },
  plusMinus: {
    label: "table.plusMinus.short",
    tooltip: "table.plusMinus.tooltip",
    sortOrders: [{ target: "plusMinus", direction: y }]
  },
  shoot: {
    label: "table.sog.short",
    tooltip: "table.sog.tooltip",
    sortOrders: [{ target: "shoot", direction: y }]
  },
  shootPercent: {
    label: "table.sogPercent.short",
    tooltip: "table.sogPercent.tooltip",
    sortOrders: [{ target: "shootPercent", direction: y }]
  }
}, da = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  playerPortrait: {
    label: "",
    class: "is-has-image"
  },
  name: {
    label: "table.name.short",
    tooltip: "table.name.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "name", direction: q }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gp: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  p2: {
    label: "table.minorPenalties.short",
    tooltip: "table.minorPenalties.tooltip",
    sortOrders: [
      { target: "p2", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p5: {
    label: "table.majorPenalties.short",
    tooltip: "table.majorPenalties.tooltip",
    sortOrders: [
      { target: "p5", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p10: {
    label: "table.misconducts.short",
    tooltip: "table.misconducts.tooltip",
    sortOrders: [
      { target: "p10", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p20: {
    label: "table.gameMisconducts.short",
    tooltip: "table.gameMisconducts.tooltip",
    sortOrders: [
      { target: "p20", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p25: {
    label: "table.matchPenalties.short",
    tooltip: "table.matchPenalties.tooltip",
    sortOrders: [
      { target: "p25", direction: y },
      { target: "pim", direction: y }
    ]
  },
  pim: {
    label: "table.pim.short",
    tooltip: "table.pim.tooltip",
    sortOrders: [{ target: "pim", direction: y }]
  }
}, gr = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  playerPortrait: {
    label: "",
    class: "is-has-image"
  },
  name: {
    label: "table.name.short",
    tooltip: "table.name.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "name", direction: q }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gkd: {
    label: "table.gpgk.short",
    tooltip: "table.gpgk.tooltip",
    sortOrders: [{ target: "gkd", direction: y }]
  },
  gpi: {
    label: "table.gpi.short",
    tooltip: "table.gpi.tooltip",
    sortOrders: [{ target: "gpi", direction: y }]
  },
  mip: {
    label: "table.toi.short",
    tooltip: "table.toi.tooltip",
    sortOrders: [{ target: "mipSec", direction: y }]
  },
  mipPercent: {
    label: "table.toiPercent.short",
    tooltip: "table.toiPercent.tooltip",
    sortOrders: [{ target: "mipPercent", direction: y }]
  },
  ga: {
    label: "table.ga.short",
    tooltip: "table.ga.tooltip",
    sortOrders: [{ target: "ga", direction: y }]
  },
  gaa: {
    label: "table.gaa.short",
    tooltip: "table.gaa.tooltip",
    sortOrders: [{ target: "gaa", direction: y }]
  },
  sa: {
    label: "table.sa.short",
    tooltip: "table.sa.tooltip",
    sortOrders: [{ target: "sa", direction: y }]
  },
  svs: {
    label: "table.svs.short",
    tooltip: "table.svs.tooltip",
    sortOrders: [{ target: "svs", direction: y }]
  },
  svsPercent: {
    label: "table.svsPercent.short",
    tooltip: "table.svsPercent.tooltip",
    sortOrders: [{ target: "svsPercent", direction: y }]
  }
}, ua = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  home: {
    label: "table.homeHeader.short"
  },
  homeGame: {
    label: "table.homeGame.short",
    tooltip: "table.homeGame.tooltip",
    sortOrders: [{ target: "homeGame", direction: y }]
  },
  homeAttendance: {
    label: "table.homeAttendance.short",
    tooltip: "table.homeAttendance.tooltip",
    sortOrders: [{ target: "homeAttendance", direction: y }]
  },
  homeAttendanceAvg: {
    label: "table.homeAttendanceAvg.short",
    tooltip: "table.homeAttendanceAvg.tooltip",
    sortOrders: [{ target: "homeAttendanceAvg", direction: y }]
  },
  away: {
    label: "table.awayHeader.short"
  },
  awayGame: {
    label: "table.awayGame.short",
    tooltip: "table.awayGame.tooltip",
    sortOrders: [{ target: "awayGame", direction: y }]
  },
  awayAttendance: {
    label: "table.awayAttendance.short",
    tooltip: "table.awayAttendance.tooltip",
    sortOrders: [{ target: "awayAttendance", direction: y }]
  },
  awayAttendanceAvg: {
    label: "table.awayAttendanceAvg.short",
    tooltip: "table.awayAttendanceAvg.tooltip",
    sortOrders: [{ target: "awayAttendanceAvg", direction: y }]
  },
  total: {
    label: "table.totalHeader.short"
  },
  totalGame: {
    label: "table.totalGame.short",
    tooltip: "table.totalGame.tooltip",
    sortOrders: [{ target: "totalGame", direction: y }]
  },
  totalAttendance: {
    label: "table.totalAttendance.short",
    tooltip: "table.totalAttendance.tooltip",
    sortOrders: [{ target: "totalAttendance", direction: y }]
  },
  totalAttendanceAvg: {
    label: "table.totalAttendanceAvg.short",
    tooltip: "table.totalAttendanceAvg.tooltip",
    sortOrders: [{ target: "totalAttendanceAvg", direction: y }]
  }
}, pa = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gp: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  p2: {
    label: "table.minorPenalties.short",
    tooltip: "table.minorPenalties.tooltip",
    sortOrders: [
      { target: "p2", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p5: {
    label: "table.majorPenalties.short",
    tooltip: "table.majorPenalties.tooltip",
    sortOrders: [
      { target: "p5", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p10: {
    label: "table.misconducts.short",
    tooltip: "table.misconducts.tooltip",
    sortOrders: [
      { target: "p10", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p20: {
    label: "table.gameMisconducts.short",
    tooltip: "table.gameMisconducts.tooltip",
    sortOrders: [
      { target: "p20", direction: y },
      { target: "pim", direction: y }
    ]
  },
  p25: {
    label: "table.matchPenalties.short",
    tooltip: "table.matchPenalties.tooltip",
    sortOrders: [
      { target: "p25", direction: y },
      { target: "pim", direction: y }
    ]
  },
  pimPerGame: {
    label: "table.pimPerGame.short",
    tooltip: "table.pimPerGame.tooltip",
    sortOrders: [{ target: "pimPerGame", direction: y }]
  },
  pim: {
    label: "table.pim.short",
    tooltip: "table.pim.tooltip",
    sortOrders: [{ target: "pim", direction: y }]
  }
}, ga = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gp: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  dvg: {
    label: "table.powerplayDisadvantages.short",
    tooltip: "table.powerplayDisadvantages.tooltip",
    sortOrders: [{ target: "dvg", direction: y }]
  },
  dvgTime: {
    label: "table.dvgTime.short",
    tooltip: "table.dvgTime.tooltip",
    sortOrders: [{ target: "dvgTimeSec", direction: y }]
  },
  dvgTimePP1: {
    label: "table.dvgTimePP1.short",
    tooltip: "table.dvgTimePP1.tooltip",
    sortOrders: [{ target: "dvgTimePP1Sec", direction: y }]
  },
  dvgTimePP2: {
    label: "table.dvgTimePP2.short",
    tooltip: "table.dvgTimePP2.tooltip",
    sortOrders: [{ target: "dvgTimePP2", direction: y }]
  },
  ppga: {
    label: "table.ppga.short",
    tooltip: "table.ppga.tooltip",
    sortOrders: [{ target: "ppga", direction: y }]
  },
  shgf: {
    label: "table.shgf.short",
    tooltip: "table.shgf.tooltip",
    sortOrders: [{ target: "shgf", direction: y }]
  },
  pkPercent: {
    label: "table.pkPercent.short",
    tooltip: "table.pkPercent.tooltip",
    sortOrders: [{ target: "pkPercent", direction: y }]
  }
}, ma = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  gp: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  adv: {
    label: "table.adv.short",
    tooltip: "table.adv.tooltip",
    sortOrders: [{ target: "adv", direction: y }]
  },
  advTime: {
    label: "table.advTime.short",
    tooltip: "table.advTime.tooltip",
    sortOrders: [{ target: "advTimeSec", direction: y }]
  },
  advTimePP1: {
    label: "table.advTimePP1.short",
    tooltip: "table.advTimePP1.tooltip",
    sortOrders: [{ target: "advTimePP1Sec", direction: y }]
  },
  advTimePP2: {
    label: "table.advTimePP2.short",
    tooltip: "table.advTimePP2.tooltip",
    sortOrders: [{ target: "advTimePP2Sec", direction: y }]
  },
  ppgf: {
    label: "table.ppgf.short",
    tooltip: "table.ppgf.tooltip",
    sortOrders: [{ target: "ppgf", direction: y }]
  },
  shga: {
    label: "table.shga.short",
    tooltip: "table.shga.tooltip",
    sortOrders: [{ target: "shga", direction: y }]
  },
  ppPercent: {
    label: "table.ppPercent.short",
    tooltip: "table.ppPercent.tooltip",
    sortOrders: [{ target: "ppPercent", direction: y }]
  }
}, ba = {
  index: {
    label: "table.blank",
    class: "is-text-left"
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto is-text-bold",
    sortOrders: [{ target: "teamName", direction: q }]
  },
  m: {
    label: "table.game.short",
    tooltip: "table.game.tooltip",
    sortOrders: [{ target: "gp", direction: y }]
  },
  plus: {
    label: "table.goalFor.short",
    tooltip: "table.goalFor.tooltip",
    sortOrders: [{ target: "plus", direction: y }]
  },
  minus: {
    label: "table.goalAgainst.short",
    tooltip: "table.goalAgainst.tooltip",
    sortOrders: [{ target: "minus", direction: q }]
  },
  gk: {
    label: "table.goalDiff.short",
    tooltip: "table.goalDiff.tooltip",
    sortOrders: [{ target: "gk", direction: y }]
  },
  GFGP: {
    label: "table.gfgp.short",
    tooltip: "table.gfgp.tooltip",
    sortOrders: [{ target: "GFGP", direction: y }]
  },
  GAGP: {
    label: "table.gagp.short",
    tooltip: "table.gagp.tooltip",
    sortOrders: [{ target: "GAGP", direction: q }]
  },
  Shots: {
    label: "table.sog.short",
    tooltip: "table.sog.tooltip",
    sortOrders: [{ target: "Shots", direction: y }]
  },
  SA: {
    label: "table.sa.short",
    tooltip: "table.sa.tooltip",
    sortOrders: [{ target: "SA", direction: q }]
  },
  ShotsGP: {
    label: "table.sogp.short",
    tooltip: "table.sogp.tooltip",
    sortOrders: [{ target: "ShotsGP", direction: y }]
  },
  SAGP: {
    label: "table.sagp.short",
    tooltip: "table.sagp.tooltip",
    sortOrders: [{ target: "SAGP", direction: q }]
  },
  GFShots: {
    label: "table.sogPercent.short",
    tooltip: "table.sogPercent.tooltip",
    sortOrders: [{ target: "GFShots", direction: y }]
  }
}, Bc = {}, Hc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Yc = /* @__PURE__ */ _("rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  ry: "2"
}, null, -1), Uc = /* @__PURE__ */ _("line", {
  x1: "8",
  y1: "21",
  x2: "16",
  y2: "21"
}, null, -1), Kc = /* @__PURE__ */ _("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "21"
}, null, -1), Wc = [
  Yc,
  Uc,
  Kc
];
function qc(t, e) {
  return f(), z("svg", Hc, Wc);
}
const va = /* @__PURE__ */ X(Bc, [["render", qc]]), Zc = {}, Xc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Jc = /* @__PURE__ */ _("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}, null, -1), Qc = /* @__PURE__ */ _("circle", {
  cx: "12",
  cy: "5",
  r: "1"
}, null, -1), td = /* @__PURE__ */ _("circle", {
  cx: "12",
  cy: "19",
  r: "1"
}, null, -1), ed = [
  Jc,
  Qc,
  td
];
function rd(t, e) {
  return f(), z("svg", Xc, ed);
}
const od = /* @__PURE__ */ X(Zc, [["render", rd]]), ad = {}, nd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, id = /* @__PURE__ */ _("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, null, -1), sd = /* @__PURE__ */ _("rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1",
  ry: "1"
}, null, -1), ld = [
  id,
  sd
];
function cd(t, e) {
  return f(), z("svg", nd, ld);
}
const dd = /* @__PURE__ */ X(ad, [["render", cd]]), ud = {}, pd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, gd = /* @__PURE__ */ _("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }, null, -1), md = /* @__PURE__ */ _("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }, null, -1), bd = [
  gd,
  md
];
function vd(t, e) {
  return f(), z("svg", pd, bd);
}
const fa = /* @__PURE__ */ X(ud, [["render", vd]]), fd = {
  key: 0,
  class: "is-text-dark"
}, hd = ["href"], yd = {
  key: 0,
  class: "label"
}, wd = {
  key: 1,
  class: "label"
}, xd = {
  key: 2,
  class: "label"
}, _d = { key: 1 }, zd = ["onClick"], kd = { class: "is-dropdown-menu" }, Td = ["href"], Sd = { key: 0 }, Pd = ["href"], $d = {
  __name: "ScheduleTable",
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      deafult: !1
    },
    externalBaseUrl: {
      type: String,
      default: Wo
    },
    hideColumns: {
      type: String,
      default: ""
    },
    offsetName: {
      type: String,
      default: ""
    },
    externalGameResolver: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = t, { onError: r } = Ue(), { columns: o, error: a } = Ro(
      Gc,
      e.hideColumns,
      O(() => ({
        offsetName: e.offsetName
      }))
    );
    Za(
      a,
      () => r(
        new Ze(Te.message, {
          ...Te.options,
          cause: { column: a.value }
        })
      ),
      {
        immediate: !0
      }
    );
    const { t: n } = Tt();
    return (s, l) => (f(), W(i(Sr), null, {
      default: C(({ el: c }) => [
        L(i(sa), {
          columns: i(o),
          rows: e.rows,
          "is-loading": t.isLoading,
          "append-to": c
        }, {
          "cell-homeTeamLogo": C(({ row: d }) => [
            (f(), W(i(Vt), {
              class: "is-logo-image is-right",
              key: d.id,
              src: d.homeTeamLogo
            }, null, 8, ["src"]))
          ]),
          "cell-awayTeamLogo": C(({ row: d }) => [
            (f(), W(i(Vt), {
              class: "is-logo-image is-right",
              key: d.id,
              src: d.awayTeamLogo
            }, null, 8, ["src"]))
          ]),
          "cell-gameResult": C(({ row: d }) => [
            d.gameStatus === 0 ? (f(), z("span", fd, "-:-")) : (f(), z("a", {
              key: 1,
              href: t.externalGameResolver(d.id),
              target: "_blank",
              class: V({ "is-text-dark": d.gameStatus !== 1, "is-text-accent": d.gameStatus === 1 })
            }, P(d.homeTeamScore) + ":" + P(d.awayTeamScore), 11, hd))
          ]),
          "cell-gameResultType": C(({ row: d }) => [
            d.isOvertime ? (f(), z("span", yd, P(i(n)("common.overtimeShort")), 1)) : E("", !0),
            d.isShootout ? (f(), z("span", wd, P(i(n)("common.shootoutShort")), 1)) : E("", !0),
            d.seriesStandings ? (f(), z("span", xd, P(d.seriesStandings), 1)) : E("", !0)
          ]),
          "cell-broadcast": C(({ row: d }) => [
            d.broadcast ? (f(), W(i(va), { key: 0 })) : (f(), z("span", _d))
          ]),
          "cell-more": C(({ row: d }) => [
            L(i(ia), {
              offset: 2,
              placement: "left",
              theme: "content",
              "append-to": c
            }, {
              default: C(({ setRef: v, show: u }) => [
                _("button", {
                  ref: v,
                  onClick: re(u, ["stop"])
                }, [
                  L(i(od))
                ], 8, zd)
              ]),
              content: C(() => [
                _("ul", kd, [
                  _("li", null, [
                    _("a", {
                      href: t.externalBaseUrl + d.id,
                      class: "is-dropdown-item",
                      target: "_blank"
                    }, [
                      L(i(dd), { width: "14" }),
                      dt(" " + P(i(n)("common.report")), 1)
                    ], 8, Td)
                  ]),
                  d.video ? (f(), z("li", Sd, [
                    _("a", {
                      href: d.video,
                      class: "is-dropdown-item",
                      target: "_blank"
                    }, [
                      L(i(fa), { width: "14" }),
                      dt(" " + P(i(n)("common.video")), 1)
                    ], 8, Pd)
                  ])) : E("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["append-to"])
          ]),
          loading: C(() => [
            L(i(Tr))
          ]),
          _: 2
        }, 1032, ["columns", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, jd = `:root,:host{font-family:Roboto Condensed,Avenir,Helvetica,Arial,sans-serif;--vbr-widget-primary-color-0: #ffffff;--vbr-widget-primary-color-50: #eceff1;--vbr-widget-primary-color-100: #cfd8dc;--vbr-widget-primary-color-200: #b0bec5;--vbr-widget-primary-color-300: #90a4ae;--vbr-widget-primary-color-400: #78909c;--vbr-widget-primary-color-500: #607d8b;--vbr-widget-primary-color-600: #546e7a;--vbr-widget-primary-color-700: #455a64;--vbr-widget-primary-color-800: #37474f;--vbr-widget-primary-color-900: #263238;--vbr-widget-secondary-color-100: #dcedc8;--vbr-widget-secondary-color-200: #badb94;--vbr-widget-secondary-color-300: #aed581;--vbr-widget-secondary-color-400: #9ccc65;--vbr-widget-secondary-color-500: #8bc34a;--vbr-widget-secondary-color-700: #689f38;--vbr-widget-secondary-color-800: #558b2f;--vbr-widget-secondary-color-900: #33691e;--vbr-widget-danger-color-50: #ffebee;--vbr-widget-danger-color-100: #ffcdd2;--vbr-widget-danger-color-200: #ef9a9a;--vbr-widget-danger-color-300: #e57373;--vbr-widget-danger-color-400: #ef5350;--vbr-widget-danger-color-500: #f44336;--vbr-widget-danger-color-700: #d32f2f;--vbr-widget-danger-color-900: #b71c1c;--vbr-widget-danger-color-a400: #ff1744;--vbr-widget-live-game-color: #8bc34a;--vbr-widget-table-header-font-size: 12px;--vbr-widget-table-default-column-width: 30px;--vbr-widget-table-default-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-neutral-color: var(--vbr-widget-primary-color-300);--vbr-widget-table-header-bg-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-header-hover-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-color: var(--vbr-widget-primary-color-200);--vbr-widget-table-table-header-active-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-hover-bg-color: var(--vbr-widget-secondary-color-100);--vbr-widget-table-active-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-table-active-even-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-table-active-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-hover-bg-color: var(--vbr-widget-secondary-color-400);--vbr-widget-table-portrait-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-table-portrait-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-light-color: var(--vbr-widget-primary-color-600);--vbr-widget-table-cell-dark-color: var(--vbr-widget-primary-color-900);--vbr-widget-table-stripped-bg-color: #f8f9fa;--vbr-widget-table-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-table-label-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-logo-size: 20px;--vbr-widget-table-cell-portrait-size: 26px;--vbr-widget-paginator-color: var(--vbr-widget-primary-color-500);--vbr-widget-paginator-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-hover-color: var(--vbr-widget-primary-color-700);--vbr-widget-paginator-hover-bg-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-active-bg-color: var(--vbr-widget-primary-color-900);--vbr-widget-paginator-disabled-color: var(--vbr-widget-primary-color-200);--vbr-widget-tooltip-font-size: 12px;--vbr-widget-tooltip-color: #ffffff;--vbr-widget-tooltip-bg-color: #000000;--vbr-widget-popover-trigger-hover-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-popover-trigger-focus-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-popover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-dropdown-item-color: var(--vbr-widget-primary-color-500);--vbr-widget-dropdown-item-hover-color: var(--vbr-widget-primary-color-800);--vbr-widget-dropdown-item-hover-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-error-notice-bg-color: var(--vbr-widget-danger-color-50);--vbr-widget-error-notice-border-color: var(--vbr-widget-danger-color-100);--vbr-widget-error-notice-color: var(--vbr-widget-danger-color-700);--vbr-widget-link-color: var(--vbr-widget-secondary-color-700);--vbr-widget-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-base-input-color: var(--vbr-widget-primary-color-800);--vbr-widget-base-input-font-size: .875rem;--vbr-widget-base-input-border-color: var(--vbr-widget-primary-color-300);--vbr-widget-base-input-border-radius: 3px;--vbr-widget-form-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-form-label-font-size: .75rem;--vbr-widget-timezone-selector-color: var(--vbr-widget-primary-color-500);--vbr-widget-timezone-selector-font-size: .8125rem;--vbr-widget-badge-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-badge-color: var(--vbr-widget-primary-color-400);--vbr-widget-badge-font-size: .625rem;--vbr-widget-tab-btn-padding: .625rem 1rem;--vbr-widget-tab-btn-font-size: 1rem;--vbr-widget-tab-btn-font-weight: 500;--vbr-widget-tab-btn-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-color: var(--vbr-widget-primary-color-300);--vbr-widget-tab-btn-border-color: transparent;--vbr-widget-tab-btn-border-style: solid;--vbr-widget-tab-btn-border-width: 0 0 3px 0;--vbr-widget-tab-btn-text-transform: uppercase;--vbr-widget-tab-btn-hover-color: var(--vbr-widget-primary-color-500);--vbr-widget-tab-btn-hover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-hover-border-color: transparent;--vbr-widget-tab-btn-active-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-active-color: var(--vbr-widget-primary-color-900);--vbr-widget-tab-btn-active-border-color: var(--vbr-widget-secondary-color-500)}.transition-fade-enter-active,.transition-fade-leave-active{transition:all .25s ease}.transition-fade-enter-from,.transition-fade-leave-to{opacity:0;transform:translateY(5px)}img{opacity:0;transition:opacity .5s ease-out}img.is-loaded{opacity:1}a{color:var(--vbr-widget-link-color);text-decoration:none}a:hover{color:var(--vbr-widget-hover-color)}.floating-content.is-tooltip{background-color:var(--vbr-widget-tooltip-bg-color);color:var(--vbr-widget-tooltip-color);font-weight:700;padding:5px 10px;border-radius:4px;font-size:var(--vbr-widget-tooltip-font-size);white-space:nowrap;pointer-events:none}.floating-content.is-tooltip .is-arrow{background-color:var(--vbr-widget-tooltip-bg-color)}.floating-content.is-content{border-radius:4px;box-shadow:2px 14px 23px #00000040}.floating-content.is-content .is-arrow{background-color:var(--vbr-widget-primary-color-50)}.floating-content .is-arrow{position:absolute;width:8px;height:8px;transform:rotate(45deg)}[data-placement^=top] .floating-content .is-arrow{bottom:-4px}[data-placement^=bottom] .floating-content .is-arrow{top:-4px}[data-placement^=left] .floating-content .is-arrow{right:-4px}[data-placement^=right] .floating-content .is-arrow{left:-4px}.mjsz-vbr-error-notice{display:flex;align-items:center;justify-items:flex-start;margin:10px 0;padding:10px 20px;background-color:var(--vbr-widget-error-notice-bg-color);color:var(--vbr-widget-error-notice-color);border:1px solid var(--vbr-widget-error-notice-border-color)}.mjsz-vbr-error-notice .icon{margin-right:15px}.mjsz-vbr-timezone-selector{padding:3px 0;color:var(--vbr-widget-timezone-selector-color);font-size:var(--vbr-widget-timezone-selector-font-size);font-weight:500}.mjsz-vbr-timezone-selector .is-active{font-weight:700}.is-badge{display:inline-block;padding:.125rem .25rem;color:var(--vbr-widget-badge-color);font-size:var(--vbr-widget-badge-font-size);font-weight:700;text-transform:uppercase;background-color:var(--vbr-widget-badge-bg-color);border-radius:3px}.is-badge+.is-badge{margin-left:3px}.is-badge.is-invert{color:var(--vbr-widget-badge-bg-color);background-color:var(--vbr-widget-badge-color)}
`, Od = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, Ad = `.mjsz-vbr-table-responsive{width:100%;overflow-x:auto}.mjsz-vbr-table-responsive table{width:100%}
`, Ld = `.mjsz-vbr-paginator{display:flex;flex-direction:row;list-style-type:none;margin:10px 0;padding:0}.mjsz-vbr-paginator button,.mjsz-vbr-paginator div{display:flex;align-items:center;justify-content:center;padding:6px 12px;text-decoration:none;cursor:pointer;color:var(--vbr-widget-paginator-color);border:1px solid var(--vbr-widget-paginator-border-color);background-color:var(--vbr-widget-paginator-bg-color);margin-left:-1px}.mjsz-vbr-paginator button .icon,.mjsz-vbr-paginator div .icon{width:16px;height:16px;margin:0 -4px}.mjsz-vbr-paginator button:hover:not(.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator button.is-active),.mjsz-vbr-paginator div:hover:not(.mjsz-vbr-paginator div.is-disabled,.mjsz-vbr-paginator div.is-active){color:var(--vbr-widget-paginator-hover-color);background-color:var(--vbr-widget-paginator-hover-bg-color)}.mjsz-vbr-paginator button:disabled,.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator div:disabled,.mjsz-vbr-paginator div.is-disabled{color:var(--vbr-widget-paginator-disabled-color);background-color:var(--vbr-widget-paginator-bg-color);pointer-events:none;cursor:default}.mjsz-vbr-paginator button.is-active,.mjsz-vbr-paginator div.is-active{color:var(--vbr-widget-paginator-active-color);background-color:var(--vbr-widget-paginator-active-bg-color);border-color:var(--vbr-widget-paginator-active-bg-color);cursor:default}
`, Id = `.is-dropdown-menu{padding:8px 0;margin:0;min-width:160px;color:#000;list-style:none;background:var(--vbr-widget-popover-bg-color);border-radius:3px;box-shadow:0 5px 30px rgba(black,.3)}.is-dropdown-menu .is-dropdown-item{display:flex;align-items:center;padding:.25rem 1rem;font-family:var(--vbr-widget-font-family);line-height:24px;color:var(--vbr-widget-dropdown-item-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.is-dropdown-menu .is-dropdown-item:hover{color:var(--vbr-widget-dropdown-item-hover-color);background-color:var(--vbr-widget-dropdown-item-hover-bg-color)}.is-dropdown-menu .is-dropdown-item svg{margin-right:8px}
`, Ed = {
  __name: "Schedule.ce",
  props: {
    ...$t,
    pagination: {
      type: Boolean,
      default: !0
    },
    limit: {
      type: Number,
      default: 20
    },
    teamFilterByName: {
      type: String,
      default: ""
    },
    initialPage: {
      type: Number,
      default: 1,
      validator: (t) => t >= 1
    },
    autoInitialPage: {
      type: Boolean,
      default: !1
    },
    externalGameLink: {
      type: [String, Function],
      default: ""
    },
    timezoneSelector: {
      type: Boolean,
      default: !1
    },
    autoRefresh: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = O(() => e.locale), {
      state: s,
      isLoading: l,
      execute: c
    } = vt(
      () => lt("/v1/gamesList", e.apiKey, {
        championshipId: e.championshipId,
        division: e.division
      }),
      [],
      {
        resetOnExecute: !1,
        immediate: !e.autoRefresh,
        onError: (A) => {
          r(A), v == null || v();
        }
      }
    ), d = O(() => Zo(s.value)), { pause: v, resume: u } = zo(c, cr, { immediate: !1 }), { page: p, change: g } = ve({
      initial: e.initialPage,
      items: d,
      limit: e.limit,
      auto: e.autoInitialPage
    }), m = F(Ke()), b = O(() => te(new Date(), i(m), e.locale)), x = O(() => ft(i(d)).filter(e.teamFilterByName, ["homeTeamName", "awayTeamName"]).schedule(i(m), i(n)).pagination(i(p), e.limit).value());
    if (e.autoRefresh) {
      u();
      const A = _o();
      gt(A, (G) => {
        if (G === "visible")
          return u();
        v();
      });
    }
    const k = O(() => {
      var A;
      return (A = x.value) == null ? void 0 : A.totalItems;
    }), w = (A) => {
      m.value = A;
    }, T = (A) => xr(e.externalGameLink, A);
    return (A, G) => (f(), z("div", null, [
      L(i(bt), {
        locale: e.locale
      }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          t.timezoneSelector ? (f(), W(i(ca), {
            key: e.locale,
            locale: e.locale,
            "current-zone": m.value,
            onChange: w
          }, null, 8, ["locale", "current-zone"])) : E("", !0),
          L($d, {
            rows: i(x).rows,
            "is-loading": i(l),
            "offset-name": i(b),
            "hide-columns": e.hideColumns,
            "external-game-resolver": T
          }, null, 8, ["rows", "is-loading", "offset-name", "hide-columns"]),
          L(i(ye), {
            page: i(p),
            "items-per-page": e.limit,
            "total-items": i(k),
            "range-length": 5,
            onChange: i(g)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Cd = /* @__PURE__ */ X(Ed, [["styles", [jd, Od, Ad, Ld, Id]]]), yt = `:root,:host{font-family:Roboto Condensed,Avenir,Helvetica,Arial,sans-serif;--vbr-widget-primary-color-0: #ffffff;--vbr-widget-primary-color-50: #eceff1;--vbr-widget-primary-color-100: #cfd8dc;--vbr-widget-primary-color-200: #b0bec5;--vbr-widget-primary-color-300: #90a4ae;--vbr-widget-primary-color-400: #78909c;--vbr-widget-primary-color-500: #607d8b;--vbr-widget-primary-color-600: #546e7a;--vbr-widget-primary-color-700: #455a64;--vbr-widget-primary-color-800: #37474f;--vbr-widget-primary-color-900: #263238;--vbr-widget-secondary-color-100: #dcedc8;--vbr-widget-secondary-color-200: #badb94;--vbr-widget-secondary-color-300: #aed581;--vbr-widget-secondary-color-400: #9ccc65;--vbr-widget-secondary-color-500: #8bc34a;--vbr-widget-secondary-color-700: #689f38;--vbr-widget-secondary-color-800: #558b2f;--vbr-widget-secondary-color-900: #33691e;--vbr-widget-danger-color-50: #ffebee;--vbr-widget-danger-color-100: #ffcdd2;--vbr-widget-danger-color-200: #ef9a9a;--vbr-widget-danger-color-300: #e57373;--vbr-widget-danger-color-400: #ef5350;--vbr-widget-danger-color-500: #f44336;--vbr-widget-danger-color-700: #d32f2f;--vbr-widget-danger-color-900: #b71c1c;--vbr-widget-danger-color-a400: #ff1744;--vbr-widget-live-game-color: #8bc34a;--vbr-widget-table-header-font-size: 12px;--vbr-widget-table-default-column-width: 30px;--vbr-widget-table-default-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-neutral-color: var(--vbr-widget-primary-color-300);--vbr-widget-table-header-bg-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-header-hover-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-color: var(--vbr-widget-primary-color-200);--vbr-widget-table-table-header-active-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-hover-bg-color: var(--vbr-widget-secondary-color-100);--vbr-widget-table-active-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-table-active-even-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-table-active-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-hover-bg-color: var(--vbr-widget-secondary-color-400);--vbr-widget-table-portrait-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-table-portrait-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-light-color: var(--vbr-widget-primary-color-600);--vbr-widget-table-cell-dark-color: var(--vbr-widget-primary-color-900);--vbr-widget-table-stripped-bg-color: #f8f9fa;--vbr-widget-table-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-table-label-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-logo-size: 20px;--vbr-widget-table-cell-portrait-size: 26px;--vbr-widget-paginator-color: var(--vbr-widget-primary-color-500);--vbr-widget-paginator-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-hover-color: var(--vbr-widget-primary-color-700);--vbr-widget-paginator-hover-bg-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-active-bg-color: var(--vbr-widget-primary-color-900);--vbr-widget-paginator-disabled-color: var(--vbr-widget-primary-color-200);--vbr-widget-tooltip-font-size: 12px;--vbr-widget-tooltip-color: #ffffff;--vbr-widget-tooltip-bg-color: #000000;--vbr-widget-popover-trigger-hover-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-popover-trigger-focus-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-popover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-dropdown-item-color: var(--vbr-widget-primary-color-500);--vbr-widget-dropdown-item-hover-color: var(--vbr-widget-primary-color-800);--vbr-widget-dropdown-item-hover-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-error-notice-bg-color: var(--vbr-widget-danger-color-50);--vbr-widget-error-notice-border-color: var(--vbr-widget-danger-color-100);--vbr-widget-error-notice-color: var(--vbr-widget-danger-color-700);--vbr-widget-link-color: var(--vbr-widget-secondary-color-700);--vbr-widget-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-base-input-color: var(--vbr-widget-primary-color-800);--vbr-widget-base-input-font-size: .875rem;--vbr-widget-base-input-border-color: var(--vbr-widget-primary-color-300);--vbr-widget-base-input-border-radius: 3px;--vbr-widget-form-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-form-label-font-size: .75rem;--vbr-widget-timezone-selector-color: var(--vbr-widget-primary-color-500);--vbr-widget-timezone-selector-font-size: .8125rem;--vbr-widget-badge-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-badge-color: var(--vbr-widget-primary-color-400);--vbr-widget-badge-font-size: .625rem;--vbr-widget-tab-btn-padding: .625rem 1rem;--vbr-widget-tab-btn-font-size: 1rem;--vbr-widget-tab-btn-font-weight: 500;--vbr-widget-tab-btn-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-color: var(--vbr-widget-primary-color-300);--vbr-widget-tab-btn-border-color: transparent;--vbr-widget-tab-btn-border-style: solid;--vbr-widget-tab-btn-border-width: 0 0 3px 0;--vbr-widget-tab-btn-text-transform: uppercase;--vbr-widget-tab-btn-hover-color: var(--vbr-widget-primary-color-500);--vbr-widget-tab-btn-hover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-hover-border-color: transparent;--vbr-widget-tab-btn-active-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-active-color: var(--vbr-widget-primary-color-900);--vbr-widget-tab-btn-active-border-color: var(--vbr-widget-secondary-color-500)}.transition-fade-enter-active,.transition-fade-leave-active{transition:all .25s ease}.transition-fade-enter-from,.transition-fade-leave-to{opacity:0;transform:translateY(5px)}img{opacity:0;transition:opacity .5s ease-out}img.is-loaded{opacity:1}a{color:var(--vbr-widget-link-color);text-decoration:none}a:hover{color:var(--vbr-widget-hover-color)}.floating-content.is-tooltip{background-color:var(--vbr-widget-tooltip-bg-color);color:var(--vbr-widget-tooltip-color);font-weight:700;padding:5px 10px;border-radius:4px;font-size:var(--vbr-widget-tooltip-font-size);white-space:nowrap;pointer-events:none}.floating-content.is-tooltip .is-arrow{background-color:var(--vbr-widget-tooltip-bg-color)}.floating-content.is-content{border-radius:4px;box-shadow:2px 14px 23px #00000040}.floating-content.is-content .is-arrow{background-color:var(--vbr-widget-primary-color-50)}.floating-content .is-arrow{position:absolute;width:8px;height:8px;transform:rotate(45deg)}[data-placement^=top] .floating-content .is-arrow{bottom:-4px}[data-placement^=bottom] .floating-content .is-arrow{top:-4px}[data-placement^=left] .floating-content .is-arrow{right:-4px}[data-placement^=right] .floating-content .is-arrow{left:-4px}.mjsz-vbr-error-notice{display:flex;align-items:center;justify-items:flex-start;margin:10px 0;padding:10px 20px;background-color:var(--vbr-widget-error-notice-bg-color);color:var(--vbr-widget-error-notice-color);border:1px solid var(--vbr-widget-error-notice-border-color)}.mjsz-vbr-error-notice .icon{margin-right:15px}.mjsz-vbr-timezone-selector{padding:3px 0;color:var(--vbr-widget-timezone-selector-color);font-size:var(--vbr-widget-timezone-selector-font-size);font-weight:500}.mjsz-vbr-timezone-selector .is-active{font-weight:700}.is-badge{display:inline-block;padding:.125rem .25rem;color:var(--vbr-widget-badge-color);font-size:var(--vbr-widget-badge-font-size);font-weight:700;text-transform:uppercase;background-color:var(--vbr-widget-badge-bg-color);border-radius:3px}.is-badge+.is-badge{margin-left:3px}.is-badge.is-invert{color:var(--vbr-widget-badge-bg-color);background-color:var(--vbr-widget-badge-color)}
`, jt = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, Ct = `.mjsz-vbr-table-responsive{width:100%;overflow-x:auto}.mjsz-vbr-table-responsive table{width:100%}
`, Nd = {
  __name: "Standings.ce",
  props: {
    ...$t,
    ...Jt,
    type: {
      type: String,
      default: "3",
      validator: (t) => ["2", "3"].includes(t)
    }
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = O(() => e.locale), { state: s, isLoading: l } = vt(
      () => lt("/v1/standings", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (m) => r(m)
      }
    ), { sort: c, change: d } = St(), v = O(() => ft(i(s)).sorted(c).addContinuousIndex().value()), u = O(() => e.type === "3" ? Fc : Vc), p = (m) => d(m), g = (m) => Ht(e.externalTeamLink, m);
    return (m, b) => (f(), z("div", null, [
      L(i(bt), { locale: i(n) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(u),
            rows: i(v).rows,
            "is-loading": i(l),
            "hide-columns": m.hideColumns,
            sort: i(c),
            "external-team-resolver": g,
            "is-team-linked": m.isTeamLinked,
            onSort: p
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Md = /* @__PURE__ */ X(Nd, [["styles", [yt, jt, Ct]]]), Ut = `.mjsz-vbr-paginator{display:flex;flex-direction:row;list-style-type:none;margin:10px 0;padding:0}.mjsz-vbr-paginator button,.mjsz-vbr-paginator div{display:flex;align-items:center;justify-content:center;padding:6px 12px;text-decoration:none;cursor:pointer;color:var(--vbr-widget-paginator-color);border:1px solid var(--vbr-widget-paginator-border-color);background-color:var(--vbr-widget-paginator-bg-color);margin-left:-1px}.mjsz-vbr-paginator button .icon,.mjsz-vbr-paginator div .icon{width:16px;height:16px;margin:0 -4px}.mjsz-vbr-paginator button:hover:not(.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator button.is-active),.mjsz-vbr-paginator div:hover:not(.mjsz-vbr-paginator div.is-disabled,.mjsz-vbr-paginator div.is-active){color:var(--vbr-widget-paginator-hover-color);background-color:var(--vbr-widget-paginator-hover-bg-color)}.mjsz-vbr-paginator button:disabled,.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator div:disabled,.mjsz-vbr-paginator div.is-disabled{color:var(--vbr-widget-paginator-disabled-color);background-color:var(--vbr-widget-paginator-bg-color);pointer-events:none;cursor:default}.mjsz-vbr-paginator button.is-active,.mjsz-vbr-paginator div.is-active{color:var(--vbr-widget-paginator-active-color);background-color:var(--vbr-widget-paginator-active-bg-color);border-color:var(--vbr-widget-paginator-active-bg-color);cursor:default}
`, Dd = {
  __name: "FieldPlayersLeader.ce",
  props: {
    ...$t,
    ...tr
  },
  setup(t) {
    const e = t, r = pe, o = O(() => e.locale), { onError: a, error: n, hasError: s } = xt(), { state: l, isLoading: c } = vt(
      () => lt("/v1/playersStatsPeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (w) => a(w)
      }
    ), { page: d, change: v } = ve(), { sort: u, change: p } = St({
      sortTarget: "point",
      orders: [{ target: "point", direction: y }]
    }), g = O(() => ne(i(l), We)), m = O(() => ft(i(g)).filter(e.teamFilterByName, ["teamName"]).sorted(u).addIndex(u.sortTarget).pagination(i(d), e.limit).value()), b = O(() => {
      var w;
      return (w = m.value) == null ? void 0 : w.totalItems;
    }), x = (w) => Ht(e.externalTeamLink, w), k = (w) => _r(e.externalPlayerLink, w);
    return (w, T) => (f(), z("div", null, [
      L(i(bt), { locale: i(o) }, {
        default: C(() => [
          i(s) ? (f(), W(i(ht), {
            key: 0,
            error: i(n)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(r),
            rows: i(m).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(u),
            "external-team-resolver": x,
            "external-player-resolver": k,
            "is-team-linked": w.isTeamLinked,
            "is-player-linked": w.isPlayerLinked,
            onSort: i(p)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          L(i(ye), {
            page: i(d),
            "items-per-page": e.limit,
            "total-items": i(b),
            "range-length": 5,
            onChange: i(v)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Rd = /* @__PURE__ */ X(Dd, [["styles", [yt, jt, Ct, Ut]]]), Gd = {
  __name: "FieldPlayersPenalties.ce",
  props: {
    ...$t,
    ...tr
  },
  setup(t) {
    const e = t, r = da, o = O(() => e.locale), { onError: a, error: n, hasError: s } = xt(), { state: l, isLoading: c } = vt(
      () => lt("/v1/playersPenaltyPeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (w) => a(w)
      }
    ), { page: d, change: v } = ve(), { sort: u, change: p } = St({
      sortTarget: "pim",
      orders: [{ target: "pim", direction: y }]
    }), g = O(() => ne(i(l), We)), m = O(() => ft(i(g)).filter(e.teamFilterByName, ["teamName"]).sorted(u).addIndex(u.sortTarget).pagination(i(d), e.limit).value()), b = O(() => {
      var w;
      return (w = m.value) == null ? void 0 : w.totalItems;
    }), x = (w) => Ht(e.externalTeamLink, w), k = (w) => _r(e.externalPlayerLink, w);
    return (w, T) => (f(), z("div", null, [
      L(i(bt), { locale: i(o) }, {
        default: C(() => [
          i(s) ? (f(), W(i(ht), {
            key: 0,
            error: i(n)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(r),
            rows: i(m).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(u),
            "external-team-resolver": x,
            "external-player-resolver": k,
            "is-team-linked": w.isTeamLinked,
            "is-player-linked": w.isPlayerLinked,
            onSort: i(p)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          L(i(ye), {
            page: i(d),
            "items-per-page": e.limit,
            "total-items": i(b),
            "range-length": 5,
            onChange: i(v)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Fd = /* @__PURE__ */ X(Gd, [["styles", [yt, jt, Ct, Ut]]]), Vd = {
  __name: "GoaliesLeader.ce",
  props: {
    ...$t,
    ...tr,
    underLimit: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = gr, s = O(() => e.locale), l = O(() => e.underLimit ? Ps : Ss), { state: c, isLoading: d } = vt(
      () => lt(l, e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (T) => r(T)
      }
    ), { page: v, change: u } = ve(), { sort: p, change: g } = St({
      sortTarget: "svsPercent",
      orders: [{ target: "svsPercent", direction: y }]
    }), m = O(() => ne(i(c), We, qe(["mip"]))), b = O(() => ft(i(m)).filter(e.teamFilterByName, ["teamName"]).playerName().sorted(p).addIndex(p.sortTarget).pagination(i(v), e.limit).value()), x = O(() => {
      var T;
      return (T = b.value) == null ? void 0 : T.totalItems;
    }), k = (T) => Ht(e.externalTeamLink, T), w = (T) => _r(e.externalPlayerLink, T);
    return (T, A) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(b).rows,
            "is-loading": i(d),
            "hide-columns": e.hideColumns,
            sort: i(p),
            "external-team-resolver": k,
            "external-player-resolver": w,
            "is-team-linked": T.isTeamLinked,
            "is-player-linked": T.isPlayerLinked,
            onSort: i(g)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          L(i(ye), {
            page: i(v),
            "items-per-page": e.limit,
            "total-items": i(x),
            "range-length": 5,
            onChange: i(u)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Bd = /* @__PURE__ */ X(Vd, [["styles", [yt, jt, Ct, Ut]]]), Hd = {
  __name: "TeamAttendance.ce",
  props: {
    ...$t,
    ...Jt
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = ua, s = O(() => e.locale), { state: l, isLoading: c } = vt(
      () => lt("/v1/teamAttendancePeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: d, change: v } = St({
      sortTarget: "totalAttendanceAvg",
      orders: [{ target: "totalAttendanceAvg", direction: y }]
    }), u = O(() => ft(i(l)).sorted(d).addIndex(d.sortTarget).value()), p = (g) => Ht(e.externalTeamLink, g);
    return (g, m) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(u).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(d),
            "external-team-resolver": p,
            "is-team-linked": g.isTeamLinked,
            onSort: i(v)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Yd = /* @__PURE__ */ X(Hd, [["styles", [yt, jt, Ct, Ut]]]), Ud = {
  __name: "TeamFairplay.ce",
  props: {
    ...$t,
    ...Jt
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = pa, s = O(() => e.locale), { state: l, isLoading: c } = vt(
      () => lt("/v1/teamFairplayPeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: d, change: v } = St({
      sortTarget: "pim",
      orders: [{ target: "pim", direction: y }]
    }), u = O(() => ft(i(l)).sorted(d).addIndex(d.sortTarget).value()), p = (g) => externalTeamLinkResolver(e.externalTeamLink, g);
    return (g, m) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(u).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(d),
            "external-team-resolver": p,
            "is-team-linked": g.isTeamLinked,
            onSort: i(v)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Kd = /* @__PURE__ */ X(Ud, [["styles", [yt, jt, Ct, Ut]]]), Wd = {
  __name: "TeamPenaltyKilling.ce",
  props: {
    ...$t,
    ...Jt
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = ga, s = O(() => e.locale), { state: l, isLoading: c } = vt(
      () => lt("/v1/teamPowerPlayPeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (m) => r(m)
      }
    ), { sort: d, change: v } = St({
      sortTarget: "pkPercent",
      orders: [{ target: "pkPercent", direction: y }]
    }), u = O(() => ne(i(l), qe(["dvgTime", "dvgTimePP1", "dvgTimePP2"]))), p = O(() => ft(i(u)).sorted(d).addIndex(d.sortTarget).value()), g = (m) => Ht(e.externalTeamLink, m);
    return (m, b) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(p).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(d),
            "external-team-resolver": g,
            "is-team-linked": m.isTeamLinked,
            onSort: i(v)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, qd = /* @__PURE__ */ X(Wd, [["styles", [yt, jt, Ct, Ut]]]), Zd = {
  __name: "TeamPowerplay.ce",
  props: {
    ...$t,
    ...Jt
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = ma, s = O(() => e.locale), { state: l, isLoading: c } = vt(
      () => lt("/v1/teamPowerPlayPeriod", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (m) => r(m)
      }
    ), { sort: d, change: v } = St({
      sortTarget: "ppPercent",
      orders: [{ target: "ppPercent", direction: y }]
    }), u = O(() => ne(i(l), qe(["advTime", "advTimePP1", "advTimePP2"]))), p = O(() => ft(i(u)).sorted(d).addIndex(d.sortTarget).value()), g = (m) => Ht(e.externalTeamLink, m);
    return (m, b) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(p).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(d),
            "external-team-resolver": g,
            "is-team-linked": m.isTeamLinked,
            onSort: i(v)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Xd = /* @__PURE__ */ X(Zd, [["styles", [yt, jt, Ct, Ut]]]), Jd = {
  __name: "TeamScoringEfficiency.ce",
  props: {
    ...$t,
    ...Jt
  },
  setup(t) {
    const e = t, { onError: r, error: o, hasError: a } = xt(), n = ba, s = O(() => e.locale), { state: l, isLoading: c } = vt(
      () => lt("/v1/standings", e.apiKey, {
        championshipId: Number(e.championshipId),
        division: e.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: d, change: v } = St({
      sortTarget: "GFShots",
      orders: [{ target: "GFShots", direction: y }]
    }), u = O(() => ft(i(l)).sorted(d).addIndex(d.sortTarget).value()), p = (g) => Ht(e.externalTeamLink, g);
    return (g, m) => (f(), z("div", null, [
      L(i(bt), { locale: i(s) }, {
        default: C(() => [
          i(a) ? (f(), W(i(ht), {
            key: 0,
            error: i(o)
          }, null, 8, ["error"])) : E("", !0),
          L(i(Pt), {
            columns: i(n),
            rows: i(u).rows,
            "is-loading": i(c),
            "hide-columns": e.hideColumns,
            sort: i(d),
            "external-team-resolver": p,
            "is-team-linked": g.isTeamLinked,
            onSort: i(v)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Qd = /* @__PURE__ */ X(Jd, [["styles", [yt, jt, Ct, Ut]]]), be = "players", lo = "teams", co = (/* @__PURE__ */ new Map()).set("points", {
  api: "/v1/playersStatsPeriod",
  columns: pe,
  sort: {
    sortTarget: "point",
    orders: [{ target: "point", direction: y }]
  }
}).set("goals", {
  api: "/v1/playersStatsPeriod",
  columns: pe,
  sort: {
    sortTarget: "g",
    orders: [{ target: "g", direction: y }]
  }
}).set("assists", {
  api: "/v1/playersStatsPeriod",
  columns: pe,
  sort: {
    sortTarget: "a",
    orders: [{ target: "a", direction: y }]
  }
}).set("plusminus", {
  api: "/v1/playersStatsPeriod",
  columns: pe,
  sort: {
    sortTarget: "plusMinus",
    orders: [{ target: "plusMinus", direction: y }]
  }
}).set("playerspenalties", {
  api: "/v1/playersPenaltyPeriod",
  columns: da,
  sort: {
    sortTarget: "pim",
    orders: [{ target: "pim", direction: y }]
  }
}).set("goalies", {
  api: "/v1/playersGoaliePeriod",
  columns: gr,
  sort: {
    sortTarget: "svsPercent",
    orders: [{ target: "svsPercent", direction: y }]
  }
}).set("goaliesunderlimit", {
  api: "/v1/playersGoalieUnderPeriod",
  columns: gr,
  sort: {
    sortTarget: "svsPercent",
    orders: [{ target: "svsPercent", direction: y }]
  }
}).set("teamAttandance", {
  api: "/v1/teamAttendancePeriod",
  columns: ua,
  sort: {
    sortTarget: "totalAttendanceAvg",
    orders: [{ target: "totalAttendanceAvg", direction: y }]
  }
}).set("teamFairplay", {
  api: "/v1/teamFairplayPeriod",
  columns: pa,
  sort: {
    sortTarget: "pim",
    orders: [{ target: "pim", direction: y }]
  }
}).set("teamPenaltiKilling", {
  api: "/v1/teamPowerPlayPeriod",
  columns: ga,
  sort: {
    sortTarget: "pkPercent",
    orders: [{ target: "pkPercent", direction: y }]
  }
}).set("teamPowerplay", {
  api: "/v1/teamPowerPlayPeriod",
  columns: ma,
  sort: {
    sortTarget: "ppPercent",
    orders: [{ target: "ppPercent", direction: y }]
  }
}).set("teamScoringEfficiency", {
  api: "/v1/standings",
  columns: ba,
  sort: {
    sortTarget: "GFShots",
    orders: [{ target: "GFShots", direction: y }]
  }
}), tu = (t) => [
  {
    name: t("report.points"),
    value: "points"
  },
  {
    name: t("report.goals"),
    value: "goals"
  },
  {
    name: t("report.assists"),
    value: "assists"
  },
  {
    name: "+/-",
    value: "plusminus"
  },
  {
    name: t("report.penalties"),
    value: "playerspenalties"
  },
  {
    name: t("report.goalies"),
    value: "goalies"
  },
  {
    name: t("report.goaliesLimit"),
    value: "goaliesunderlimit"
  }
], eu = (t) => [
  {
    name: t("report.teamAttendance"),
    value: "teamAttandance"
  },
  {
    name: t("report.teamFairplay"),
    value: "teamFairplay"
  },
  {
    name: t("report.teamPenaltyKilling"),
    value: "teamPenaltiKilling"
  },
  {
    name: t("report.teamPowerplay"),
    value: "teamPowerplay"
  },
  {
    name: t("report.teamScoringEfficiency"),
    value: "teamScoringEfficiency"
  }
], ru = (t) => Ve(Ye(yr(zt("championshipId"))), At(He(["championshipId", "seasonName"])))(t), ou = (t) => Ye(Fe(zt("teamName")), t), au = (t) => t.report ? t.report : t.type ? t.type === be ? "points" : "teamAttandance" : "points", nu = {
  __name: "StatisticsProvider",
  props: {
    championshipName: {
      type: String,
      default: ""
    },
    championshipId: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 20
    },
    apiKey: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, { t: r } = Tt(), { onError: o } = Ue(), a = ko("history"), n = qt({
      loading: !1,
      seasons: [],
      championshipId: Number(a.championshipId) || e.championshipId,
      sections: [],
      section: a.section || null,
      teams: [],
      teamFilter: Number(a.teamFilter) || null,
      playerFilter: "",
      reportType: a.type || be,
      reports: null,
      currentReport: au(a),
      rows: [],
      columns: null,
      api: null
    }), s = co.get("points");
    n.columns = s.columns, n.api = s.api;
    const l = O(
      () => n.reportType === be ? tu(r) : eu(r)
    ), { page: c, change: d } = ve(), { sort: v, change: u } = St({
      sortTarget: "point",
      orders: [{ target: "point", direction: y }]
    }), p = async () => {
      try {
        n.loading = !0;
        const h = await lt("/v1/championshipSeasons", e.apiKey, {
          championshipName: e.championshipName
        });
        if (h.length === 0)
          throw new Ze(Se.message, Se.options);
        n.seasons = ru(h), n.championshipId || (n.championshipId = Wt(n.seasons).championshipId);
      } catch (h) {
        o(h);
      } finally {
        n.loading = !1;
      }
    }, g = async () => {
      try {
        n.loading = !0;
        const h = await lt("/v1/championshipSections", e.apiKey, {
          championshipId: n.championshipId
        });
        n.sections = h.sectionName, n.sections && !n.sections.includes(n.section) && (n.section = Wt(n.sections));
      } catch (h) {
        o(h);
      } finally {
        n.loading = !1;
      }
    }, m = async () => {
      try {
        n.loading = !0, n.rows = [], d(1);
        const h = await lt(n.api, e.apiKey, {
          championshipId: n.championshipId,
          division: n.section
        });
        n.rows = ne(
          h,
          We,
          qe(["dvgTime", "dvgTimePP1", "dvgTimePP2", "advTime", "advTimePP1", "advTimePP2", "mip"])
        );
      } catch (h) {
        o(h);
      } finally {
        n.loading = !1;
      }
    }, b = async () => {
      try {
        n.loading = !0, n.rows = [];
        const h = await lt("/v1/championshipTeams", e.apiKey, {
          championshipId: n.championshipId
        });
        n.teams = ou(h);
      } catch (h) {
        o(h);
      } finally {
        n.loading = !1;
      }
    }, x = O(
      () => ft(n.rows).filter(n.teamFilter, ["teamId"], !0).filter(n.playerFilter, ["name"]).sorted(v).addIndex(v.sortTarget).pagination(i(c), e.limit).value()
    ), k = O(() => [(c.value - 1) * e.limit + 1, Math.min(c.value * e.limit, x.value.totalItems)]), w = () => {
      const h = co.get(n.currentReport);
      n.columns = h.columns, n.api = h.api, v.sortTarget = h.sort.sortTarget, v.orders = h.sort.orders;
    }, T = async (h) => {
      n.championshipId = h, a.championshipId = h, await g(), a.section = n.section, await b(), await m();
    }, A = async (h) => {
      n.section = h, a.section = h, await m();
    }, G = (h) => {
      n.currentReport = h, a.report = h, w(), m();
    }, B = (h) => {
      d(1), n.teamFilter = Number(h) || null, a.teamFilter = h || null;
    }, U = (h) => {
      d(1), h instanceof Event && (h = h.target.value), n.playerFilter = h;
    }, Y = (h) => {
      n.reportType = h, n.currentReport = Wt(l.value).value, n.teamFilter = null, n.playerFilter = "", a.report = n.currentReport, a.teamFilter = null, a.type = h, w(), m();
    };
    return (async () => {
      await p(), await g(), await b(), w(), await m();
    })(), (h, et) => ut(h.$slots, "default", vo(fo({
      ...n,
      rows: i(x),
      sort: i(v),
      page: i(c),
      range: i(k),
      selectorProps: {
        reports: i(l),
        ...i(He)(
          [
            "seasons",
            "championshipId",
            "sections",
            "section",
            "currentReport",
            "reportType",
            "teams",
            "teamFilter",
            "playerFilter"
          ],
          n
        )
      },
      selectorListeners: {
        onSeasonChange: T,
        onSectionChange: A,
        onReportChange: G,
        onStatTypeChange: Y,
        onTeamChange: B,
        onPlayerInput: U
      },
      onPaginatorChange: i(d),
      onSort: i(u)
    })));
  }
}, iu = {
  class: "g-row is-mb-5",
  style: { "flex-wrap": "wrap", gap: "20px", margin: "20px 0" }
}, su = ["value"], lu = ["value"], cu = ["value"], du = { value: null }, uu = ["value"], pu = ["disabled"], gu = {
  __name: "StatisticSelector",
  props: {
    seasons: {
      type: Array,
      defau\u00E9t: () => []
    },
    championshipId: {
      type: Number,
      default: 0
    },
    sections: {
      type: Array,
      defau\u00E9t: () => []
    },
    section: {
      type: String,
      default: ""
    },
    reports: {
      type: Array,
      defau\u00E9t: () => []
    },
    currentReport: {
      type: String,
      default: ""
    },
    teams: {
      type: Array,
      defau\u00E9t: () => []
    },
    reportType: {
      type: String,
      default: ""
    },
    teamFilter: {
      type: Number,
      default: null
    },
    playerFilter: {
      type: String,
      default: ""
    }
  },
  emits: [
    "onPlayerInput",
    "onSeasonChange",
    "onSectionChange",
    "onReportChange",
    "onTeamChange",
    "onStatTypeChange"
  ],
  setup(t, { emit: e }) {
    const r = t, { t: o } = Tt(), a = O({
      get: () => r.championshipId,
      set: (g) => e("onSeasonChange", g)
    }), n = O({
      get: () => r.section,
      set: (g) => e("onSectionChange", g)
    }), s = O({
      get: () => r.currentReport,
      set: (g) => e("onReportChange", g)
    }), l = O({
      get: () => r.teamFilter,
      set: (g) => e("onTeamChange", g)
    }), c = O({
      get: () => r.playerFilter,
      set: (g) => e("onPlayerInput", g)
    }), d = (g) => {
      e("onStatTypeChange", g);
    }, v = pt("base-input"), u = pt("label"), p = pt("tab-button");
    return (g, m) => (f(), z(J, null, [
      _("div", iu, [
        _("div", null, [
          _("label", {
            for: "season",
            class: V(i(u))
          }, P(i(o)("selection.season")), 3),
          L(i(Rt), {
            id: "season",
            modelValue: i(a),
            "onUpdate:modelValue": m[0] || (m[0] = (b) => wt(a) ? a.value = b : null)
          }, {
            default: C(() => [
              (f(!0), z(J, null, at(t.seasons, (b) => (f(), z("option", {
                key: b.championshipId,
                value: b.championshipId
              }, P(b.seasonName), 9, su))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _("div", null, [
          _("label", {
            for: "section",
            class: V(i(u))
          }, P(i(o)("selection.section")), 3),
          L(i(Rt), {
            id: "section",
            modelValue: i(n),
            "onUpdate:modelValue": m[1] || (m[1] = (b) => wt(n) ? n.value = b : null)
          }, {
            default: C(() => [
              (f(!0), z(J, null, at(t.sections, (b) => (f(), z("option", {
                key: b,
                value: b
              }, P(b), 9, lu))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _("div", null, [
          _("label", {
            for: "report",
            class: V(i(u))
          }, P(i(o)("selection.report")), 3),
          L(i(Rt), {
            id: "report",
            modelValue: i(s),
            "onUpdate:modelValue": m[2] || (m[2] = (b) => wt(s) ? s.value = b : null)
          }, {
            default: C(() => [
              (f(!0), z(J, null, at(t.reports, ({ name: b, value: x }) => (f(), z("option", {
                key: x,
                value: x
              }, P(b), 9, cu))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _("div", null, [
          _("label", {
            for: "teams",
            class: V(i(u))
          }, P(i(o)("selection.teams")), 3),
          L(i(Rt), {
            id: "teams",
            modelValue: i(l),
            "onUpdate:modelValue": m[3] || (m[3] = (b) => wt(l) ? l.value = b : null),
            disabled: t.reportType !== "players"
          }, {
            default: C(() => [
              _("option", du, P(i(o)("common.all")), 1),
              (f(!0), z(J, null, at(t.teams, ({ teamId: b, teamName: x }) => (f(), z("option", {
                key: b,
                value: b
              }, P(x), 9, uu))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])
        ]),
        _("div", null, [
          _("label", {
            for: "player",
            class: V(i(u))
          }, P(i(o)("selection.filterName")), 3),
          mo(_("input", {
            id: "player",
            type: "text",
            "onUpdate:modelValue": m[4] || (m[4] = (b) => wt(c) ? c.value = b : null),
            class: V(i(v)),
            disabled: t.reportType !== "players"
          }, null, 10, pu), [
            [ja, i(c)]
          ])
        ])
      ]),
      _("div", null, [
        _("button", {
          type: "button",
          onClick: m[5] || (m[5] = (b) => d(i(be))),
          class: V([i(p), { "is-active": t.reportType === i(be) }])
        }, P(i(o)("selection.players")), 3),
        _("button", {
          type: "button",
          onClick: m[6] || (m[6] = (b) => d(i(lo))),
          class: V([i(p), { "is-active": t.reportType === i(lo) }])
        }, P(i(o)("selection.teams")), 3)
      ])
    ], 64));
  }
}, mu = `.mjsz-vbr-base-input{padding:.375rem .75rem;color:var(--vbr-widget-base-input-color);border:1px solid var(--vbr-widget-base-input-border-color);border-radius:var(--vbr-widget-base-input-border-radius);width:100%;-moz-padding-start:calc(.75rem - 3px);font-size:var(--vbr-widget-base-input-font-size);font-weight:400;line-height:1.5;background-color:#fff;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.mjsz-vbr-base-input.is-select{padding-right:2.25rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}label{display:block;margin-bottom:3px;color:var(--vbr-widget-form-label-color);font-size:var(--vbr-widget-form-label-font-size);font-weight:700;text-transform:uppercase}.mjsz-vbr-tab-button{padding:var(--vbr-widget-tab-btn-padding);font-family:inherit;font-size:var(--vbr-widget-tab-btn-font-size);font-weight:var(--vbr-widget-tab-btn-font-weight);color:var(--vbr-widget-tab-btn-color);text-transform:var(--vbr-widget-tab-btn-text-transform);background-color:var(--vbr-widget-tab-btn-bg-color);border-color:var(--vbr-widget-tab-btn-border-color);border-width:var(--vbr-widget-tab-btn-border-width);border-style:var(--vbr-widget-tab-btn-border-style);outline:none;box-shadow:none;cursor:pointer}.mjsz-vbr-tab-button:hover{color:var(--vbr-widget-tab-btn-hover-color);border-color:var(--vbr-widget-tab-btn-hover-border-color);background-color:var(--vbr-widget-tab-btn-hover-bg-color)}.mjsz-vbr-tab-button.is-active{color:var(--vbr-widget-tab-btn-active-color);border-color:var(--vbr-widget-tab-btn-active-border-color);background-color:var(--vbr-widget-tab-btn-active-bg-color)}
`, bu = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, ha = `.g-row{display:flex;flex-wrap:wrap}.g-col{flex:1 0 0%}[class^=g-col-]{flex:0 0 auto}.g-col-6{width:50%}.g-col-5{width:41.66666667%}.g-col-3{width:25%}.g-col-auto{width:auto}
`, vu = `.mjsz-vbr-table-responsive{width:100%;overflow-x:auto}.mjsz-vbr-table-responsive table{width:100%}
`, fu = `.mjsz-vbr-paginator{display:flex;flex-direction:row;list-style-type:none;margin:10px 0;padding:0}.mjsz-vbr-paginator button,.mjsz-vbr-paginator div{display:flex;align-items:center;justify-content:center;padding:6px 12px;text-decoration:none;cursor:pointer;color:var(--vbr-widget-paginator-color);border:1px solid var(--vbr-widget-paginator-border-color);background-color:var(--vbr-widget-paginator-bg-color);margin-left:-1px}.mjsz-vbr-paginator button .icon,.mjsz-vbr-paginator div .icon{width:16px;height:16px;margin:0 -4px}.mjsz-vbr-paginator button:hover:not(.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator button.is-active),.mjsz-vbr-paginator div:hover:not(.mjsz-vbr-paginator div.is-disabled,.mjsz-vbr-paginator div.is-active){color:var(--vbr-widget-paginator-hover-color);background-color:var(--vbr-widget-paginator-hover-bg-color)}.mjsz-vbr-paginator button:disabled,.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator div:disabled,.mjsz-vbr-paginator div.is-disabled{color:var(--vbr-widget-paginator-disabled-color);background-color:var(--vbr-widget-paginator-bg-color);pointer-events:none;cursor:default}.mjsz-vbr-paginator button.is-active,.mjsz-vbr-paginator div.is-active{color:var(--vbr-widget-paginator-active-color);background-color:var(--vbr-widget-paginator-active-bg-color);border-color:var(--vbr-widget-paginator-active-bg-color);cursor:default}
`, hu = { style: { display: "flex", "align-items": "center" } }, yu = { style: { "flex-grow": "1", "text-align": "right" } }, wu = {
  __name: "Statistics.ce",
  props: {
    locale: {
      type: String,
      default: "hu"
    },
    apiKey: {
      type: String,
      default: ""
    },
    championshipName: {
      type: String,
      default: ""
    },
    championshipId: {
      type: Number,
      default: 0
    },
    hideColumns: {
      type: String,
      default: ""
    },
    ...tr
  },
  setup(t) {
    const e = t, r = (a) => externalTeamLinkResolver(e.externalTeamLink, a), o = (a) => externalPlayerLinkResolver(e.externalPlayerLink, a);
    return (a, n) => (f(), z("div", null, [
      L(i(bt), {
        locale: e.locale
      }, {
        default: C(() => [
          L(i(la), null, {
            default: C(({ message: s, hasError: l, error: c }) => [
              L(nu, {
                "championship-name": t.championshipName,
                "championship-id": t.championshipId,
                limit: e.limit,
                "api-key": t.apiKey
              }, {
                default: C(({
                  sort: d,
                  columns: v,
                  rows: u,
                  page: p,
                  range: g,
                  loading: m,
                  selectorProps: b,
                  selectorListeners: x,
                  onPaginatorChange: k,
                  onSort: w
                }) => [
                  l ? (f(), W(i(ht), {
                    key: 0,
                    error: c
                  }, null, 8, ["error"])) : (f(), W(gu, Oa({ key: 1 }, b, Aa(x)), null, 16)),
                  L(i(Pt), {
                    columns: v,
                    rows: u.rows,
                    sort: d,
                    "is-loading": m,
                    "external-team-resolver": r,
                    "external-player-resolver": o,
                    "is-team-linked": a.isTeamLinked,
                    "is-player-linked": a.isPlayerLinked,
                    "hide-columns": t.hideColumns,
                    onSort: w
                  }, null, 8, ["columns", "rows", "sort", "is-loading", "is-team-linked", "is-player-linked", "hide-columns", "onSort"]),
                  _("div", hu, [
                    L(i(ye), {
                      page: p,
                      "items-per-page": e.limit,
                      "total-items": u.totalItems,
                      "range-length": 5,
                      onChange: k
                    }, null, 8, ["page", "items-per-page", "total-items", "onChange"]),
                    _("div", yu, P(g.join("-")) + " / " + P(u.totalItems) + " db", 1)
                  ])
                ]),
                _: 2
              }, 1032, ["championship-name", "championship-id", "limit", "api-key"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, xu = /* @__PURE__ */ X(wu, [["styles", [yt, mu, bu, ha, vu, fu]]]), _u = (t, e) => {
  if (t.length === 0)
    throw new Ze(Se.message, Se.options);
  e.seasons = Tu(t), e.championshipId || (e.championshipId = Wt(e.seasons).championshipId);
}, zu = (t, e) => {
  e.sections = t.sectionName, e.sections && !e.sections.includes(e.section) && (e.section = Wt(e.sections));
}, ku = (t, e) => {
  e.teams = Su(t);
}, Tu = (t) => Ve(Ye(yr(zt("seasonName"))), At(He(["championshipId", "seasonName"])))(t), Su = (t) => Ye(Fe(zt("teamName")), t), Pu = (t = [], e = "hu", r = _t) => {
  const o = F([]), a = F(null), n = F([]), s = () => {
    n.value = t.value.reduce((c, d) => {
      var g;
      const v = new Date(d.gameDate), u = (g = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(v)) == null ? void 0 : g.toLowerCase(), p = new Intl.DateTimeFormat(e.value, { month: "long" }).format(v);
      return c[u] || (c[u] = { value: v.getMonth(), name: $u(p) }), c;
    }, {}), o.value = Object.values(n.value);
  }, l = () => {
    var u, p, g, m;
    const c = As(new Date(), (u = Wt(t.value)) == null ? void 0 : u.gameDate, (p = _i(t.value)) == null ? void 0 : p.gameDate), d = (g = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(new Date())) == null ? void 0 : g.toLowerCase(), v = He([d], n.value);
    a.value = v && c ? new Date().getMonth() : (m = Wt(o.value)) == null ? void 0 : m.value, r(a.value);
  };
  return gt([t, e], s), yo(t, () => {
    s(), l();
  }), {
    months: o,
    selectedMonth: a
  };
};
function $u(t) {
  return t[0].toUpperCase() + t.slice(1);
}
const ju = {
  __name: "DataProvider",
  props: {
    championshipName: {
      type: String,
      default: ""
    },
    championshipId: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 20
    },
    apiKey: {
      type: String,
      default: ""
    },
    locale: {
      type: String,
      default: "hu"
    },
    timezone: {
      type: String,
      default: ""
    },
    autoRefresh: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = ko("history"), o = qt({
      championshipName: e.championshipName,
      loading: !1,
      seasons: [],
      championshipId: Number(r.championshipId) || 0,
      sections: [],
      section: r.section || null,
      teams: [],
      selectedMonth: Number(r.selectedMonth) || null,
      selectedTeam: Number(r.selectedTeam) || null,
      selectedTeamGameType: r.selectedTeamGameType || "all"
    }), a = jr(e, "timezone"), { onError: n } = Ue(), s = O(() => {
      switch (o.selectedTeamGameType) {
        case "all":
          return ["homeTeamId", "awayTeamId"];
        case "home":
          return ["homeTeamId"];
        default:
          return ["awayTeamId"];
      }
    }), { isLoading: l, execute: c } = ue({
      options: {
        path: "/v1/championshipSeasons",
        apiKey: e.apiKey,
        params: { championshipName: o.championshipName }
      },
      transform: (h) => _u(h, o),
      onError: n
    }), { isLoading: d, execute: v } = ue({
      options: {
        path: "/v1/championshipSections",
        apiKey: e.apiKey,
        params: O(() => ({ championshipId: o.championshipId }))
      },
      transform: (h) => zu(h, o),
      onError: n
    }), { isLoading: u, execute: p } = ue({
      options: {
        path: "/v1/championshipTeams",
        apiKey: e.apiKey,
        params: O(() => ({ championshipId: o.championshipId }))
      },
      transform: (h) => ku(h, o),
      onError: n
    }), {
      isLoading: g,
      state: m,
      execute: b
    } = ue({
      options: {
        path: "/v1/gamesList",
        apiKey: e.apiKey,
        params: O(() => ({ championshipId: o.championshipId, division: o.section }))
      },
      transform: (h) => Zo(h),
      onError: n
    }), x = Fo([d, l, u, g], { delay: 1e3 }), { months: k } = Pu(m, jr(e, "locale"), (h) => {
      o.selectedMonth = h;
    }), { pause: w, resume: T } = zo(b, cr, { immediate: !1 });
    Ds(e.autoRefresh, T, w);
    const A = O(() => ft(i(m)).filter(o.selectedTeam, s.value, !0).schedule(i(a), i(e.locale)).gameDateFilter(i(o.selectedMonth)).groupByDays().value());
    Ir([c, v, p, b], {
      onFinished: () => {
        e.autoRefresh && br(T, cr);
      }
    });
    const G = (h) => {
      o.championshipId = h, r.championshipId = h, e.autoRefresh && T(), o.selectedTeam = null, r.selectedTeam = null, o.selectedMonth = null, r.selectedMonth = null, o.selectedTeamGameType = "all", r.selectedTeamGameType = null, Ir([v, p, b]), e.autoRefresh && T();
    }, B = (h) => {
      o.selectedMonth = h, r.selectedMonth = h;
    }, U = (h) => {
      o.section = h, r.section = h, o.selectedMonth = null, r.selectedMonth = null, b();
    }, Y = (h) => {
      o.selectedTeam = h, r.selectedTeam = h, h || (o.selectedTeamGameType = "all", r.selectedTeamGameType = null);
    }, N = (h) => {
      o.selectedTeamGameType = h, r.selectedTeamGameType = h;
    };
    return (h, et) => ut(h.$slots, "default", vo(fo({
      ...o,
      games: i(A),
      months: i(k),
      isLoading: i(x),
      changeSeason: G,
      changeMonth: B,
      changeSection: U,
      changeTeam: Y,
      changeTeamType: N
    })));
  }
}, Ou = {
  class: "g-row",
  style: { "column-gap": "8px" }
}, Au = ["value"], Lu = { value: null }, Iu = ["value"], Eu = { value: null }, Cu = ["value"], Nu = { value: "all" }, Mu = { value: "home" }, Du = { value: "away" }, Ru = {
  __name: "ScheduleSelector",
  props: {
    seasons: {
      type: Array,
      defau\u00E9t: () => []
    },
    championshipId: {
      type: Number,
      default: 0
    },
    months: {
      type: Array,
      defau\u00E9t: () => []
    },
    selectedMonth: {
      type: Number,
      default: null
    },
    teams: {
      type: Array,
      defau\u00E9t: () => []
    },
    selectedTeam: {
      type: Number,
      default: null
    },
    selectedTeamGameType: {
      type: String,
      default: "all"
    }
  },
  emits: [
    "update:championshipId",
    "update:selectedMonth",
    "update:selectedTeam",
    "update:selectedTeamGameType"
  ],
  setup(t, { emit: e }) {
    const r = t, { t: o } = Tt(), { championshipId: a, selectedMonth: n, selectedTeam: s, selectedTeamGameType: l } = gn(r, e), c = O(() => s.value === null), d = pt("label");
    return (v, u) => (f(), z("div", Ou, [
      _("div", null, [
        _("label", {
          for: "season",
          class: V(i(d))
        }, P(i(o)("selection.season")), 3),
        L(i(Rt), {
          id: "season",
          modelValue: i(a),
          "onUpdate:modelValue": u[0] || (u[0] = (p) => wt(a) ? a.value = p : null)
        }, {
          default: C(() => [
            (f(!0), z(J, null, at(t.seasons, (p) => (f(), z("option", {
              key: p.championshipId,
              value: p.championshipId
            }, P(p.seasonName), 9, Au))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _("div", null, [
        _("label", {
          for: "months",
          class: V(i(d))
        }, P(i(o)("selection.month")), 3),
        L(i(Rt), {
          id: "months",
          modelValue: i(n),
          "onUpdate:modelValue": u[1] || (u[1] = (p) => wt(n) ? n.value = p : null)
        }, {
          default: C(() => [
            _("option", Lu, P(i(o)("common.all")), 1),
            (f(!0), z(J, null, at(t.months, (p) => (f(), z("option", {
              key: p.value,
              value: p.value
            }, P(p.name), 9, Iu))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _("div", null, [
        _("label", {
          for: "teams",
          class: V(i(d))
        }, P(i(o)("selection.teams")), 3),
        L(i(Rt), {
          id: "teams",
          modelValue: i(s),
          "onUpdate:modelValue": u[2] || (u[2] = (p) => wt(s) ? s.value = p : null),
          style: { "max-width": "200px" }
        }, {
          default: C(() => [
            _("option", Eu, P(i(o)("common.all")), 1),
            (f(!0), z(J, null, at(t.teams, (p) => (f(), z("option", {
              key: p.teamId,
              value: p.teamId
            }, P(p.teamName), 9, Cu))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _("div", null, [
        _("label", {
          for: "type",
          class: V(i(d))
        }, P(i(o)("selection.homeOrAway")), 3),
        L(i(Rt), {
          id: "type",
          modelValue: i(l),
          "onUpdate:modelValue": u[3] || (u[3] = (p) => wt(l) ? l.value = p : null),
          disabled: i(c)
        }, {
          default: C(() => [
            _("option", Nu, P(i(o)("common.all")), 1),
            _("option", Mu, P(i(o)("selection.home")), 1),
            _("option", Du, P(i(o)("selection.away")), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "disabled"])
      ])
    ]));
  }
}, Gu = { class: "is-info is-text-sm" }, Fu = { href: "#" }, Vu = { class: "is-home-team" }, Bu = { class: "g-row" }, Hu = {
  key: 0,
  class: "is-badge is-invert"
}, Yu = {
  key: 1,
  class: "is-badge is-invert"
}, Uu = {
  key: 2,
  class: "is-badge"
}, Ku = ["href"], Wu = {
  key: 0,
  class: "is-text-xl is-text-bold"
}, qu = {
  key: 1,
  class: "is-text-xl is-text-bold"
}, Zu = {
  key: 2,
  class: "is-text-xl is-text-bold"
}, Xu = { key: 3 }, Ju = {
  key: 0,
  class: "is-text-xs is-opacity-30"
}, Qu = { class: "is-text-sm" }, tp = {
  key: 0,
  class: "is-text-xs is-uppercase"
}, ep = { class: "is-away-team" }, rp = {
  __name: "Item",
  props: {
    game: {
      type: Object,
      required: !0
    },
    offsetName: {
      type: String,
      default: ""
    },
    gameLink: {
      type: Function,
      default: _t
    }
  },
  setup(t) {
    const { t: e } = Tt(), r = pt("card-item");
    return (o, a) => (f(), z("div", {
      class: V(i(r))
    }, [
      _("div", Gu, [
        dt(P(t.game.name) + " - " + P(t.game.divisionName) + " - " + P(t.game.location) + " ", 1),
        t.game.broadcast ? (f(), z(J, { key: 0 }, [
          dt("-\xA0"),
          L(i(va), { height: "16" }),
          dt("\xA0")
        ], 64)) : E("", !0),
        t.game.video ? (f(), z(J, { key: 1 }, [
          dt("-\xA0"),
          _("a", Fu, [
            L(i(fa), { height: "18" })
          ])
        ], 64)) : E("", !0)
      ]),
      _("div", Vu, [
        dt(P(t.game.homeTeamName) + " ", 1),
        L(i(Vt), {
          class: "is-logo-image",
          src: t.game.homeTeamLogo
        }, null, 8, ["src"])
      ]),
      _("div", {
        class: V(["is-game-data", { "is-live": t.game.gameStatus === 1 }])
      }, [
        _("div", Bu, [
          t.game.isOvertime ? (f(), z("span", Hu, P(i(e)("common.overtimeShort")), 1)) : E("", !0),
          t.game.isShootout ? (f(), z("span", Yu, P(i(e)("common.shootoutShort")), 1)) : E("", !0),
          t.game.seriesStandings ? (f(), z("span", Uu, P(t.game.seriesStandings), 1)) : E("", !0)
        ]),
        _("a", {
          href: t.gameLink(t.game.id)
        }, [
          t.game.gameStatus > 0 && t.game.gameStatus < 3 ? (f(), z("span", Wu, P(t.game.homeTeamScore) + " - " + P(t.game.awayTeamScore), 1)) : E("", !0),
          t.game.gameStatus === 3 ? (f(), z("span", qu, P(i(e)("game.status.jury")), 1)) : E("", !0),
          t.game.gameStatus === 4 ? (f(), z("span", Zu, P(i(e)("game.status.delayed")), 1)) : E("", !0),
          t.game.gameStatus === 0 ? (f(), z("span", Xu, P(t.game.gameDateTime), 1)) : E("", !0)
        ], 8, Ku),
        t.game.gameStatus === 0 ? (f(), z("span", Ju, "(" + P(t.offsetName) + ")", 1)) : E("", !0),
        t.game.gameStatus > 0 ? (f(), z(J, { key: 1 }, [
          _("div", Qu, P(t.game.periodResults), 1),
          t.game.gameStatus !== 2 ? (f(), z("div", tp, P(t.game.period), 1)) : E("", !0)
        ], 64)) : E("", !0)
      ], 2),
      _("div", ep, [
        L(i(Vt), {
          class: "is-logo-image",
          src: t.game.awayTeamLogo
        }, null, 8, ["src"]),
        dt(" " + P(t.game.awayTeamName), 1)
      ])
    ], 2));
  }
}, op = `.is-text-right{text-align:right}.is-text-center{text-align:center}.is-text-bold{font-weight:700}.is-text-xs{font-size:.75rem;line-height:1rem}.is-text-sm{font-size:.875rem;line-height:1.25rem}.is-text-base{font-size:1rem;line-height:1.5rem}.is-text-lg{font-size:1.125rem;line-height:1.75rem}.is-text-xl{font-size:1.25rem;line-height:1.75rem}.is-uppercase{text-transform:uppercase}.is-opacity-20{opacity:.2}.is-opacity-30{opacity:.3}.is-opacity-50{opacity:.5}.is-mb-5{margin-bottom:1rem}
`, ap = `.mjsz-vbr-base-input{padding:.375rem .75rem;color:var(--vbr-widget-base-input-color);border:1px solid var(--vbr-widget-base-input-border-color);border-radius:var(--vbr-widget-base-input-border-radius);width:100%;-moz-padding-start:calc(.75rem - 3px);font-size:var(--vbr-widget-base-input-font-size);font-weight:400;line-height:1.5;background-color:#fff;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.mjsz-vbr-base-input.is-select{padding-right:2.25rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}label{display:block;margin-bottom:3px;color:var(--vbr-widget-form-label-color);font-size:var(--vbr-widget-form-label-font-size);font-weight:700;text-transform:uppercase}.mjsz-vbr-tab-button{padding:var(--vbr-widget-tab-btn-padding);font-family:inherit;font-size:var(--vbr-widget-tab-btn-font-size);font-weight:var(--vbr-widget-tab-btn-font-weight);color:var(--vbr-widget-tab-btn-color);text-transform:var(--vbr-widget-tab-btn-text-transform);background-color:var(--vbr-widget-tab-btn-bg-color);border-color:var(--vbr-widget-tab-btn-border-color);border-width:var(--vbr-widget-tab-btn-border-width);border-style:var(--vbr-widget-tab-btn-border-style);outline:none;box-shadow:none;cursor:pointer}.mjsz-vbr-tab-button:hover{color:var(--vbr-widget-tab-btn-hover-color);border-color:var(--vbr-widget-tab-btn-hover-border-color);background-color:var(--vbr-widget-tab-btn-hover-bg-color)}.mjsz-vbr-tab-button.is-active{color:var(--vbr-widget-tab-btn-active-color);border-color:var(--vbr-widget-tab-btn-active-border-color);background-color:var(--vbr-widget-tab-btn-active-bg-color)}
`, np = `.is-card{background-color:#fff;padding:15px;margin-bottom:20px;box-shadow:0 2px 4px #0000001a,0 2px 2px #0000001a}.is-card>div{border-bottom:1px solid var(--vbr-widget-primary-color-100)}.is-card>div:last-of-type{border:none}.mjsz-vbr-card-item{display:grid;grid-gap:1rem;grid-template-columns:2fr 1fr 2fr;padding:2rem 0;border-bottom:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-card-item svg{display:block}.mjsz-vbr-card-item .is-info{grid-column:1/4;display:flex;justify-content:center;align-items:center;color:var(--vbr-widget-primary-color-500)}.mjsz-vbr-card-item .is-home-team{display:flex;gap:8px;align-items:center;justify-content:flex-end;font-weight:700}.mjsz-vbr-card-item .is-away-team{display:flex;gap:8px;align-items:center;justify-content:flex-start;font-weight:700}.mjsz-vbr-card-item .is-logo-image{width:40px}.mjsz-vbr-card-item .is-game-data{display:flex;flex-direction:column;align-items:center;justify-content:center}.mjsz-vbr-card-item .is-game-data a{display:flex;flex-direction:column;align-items:center;color:var(--vbr-widget-primary-color-900)}.mjsz-vbr-card-item .is-game-data a:hover{color:var(--vbr-widget-primary-color-600)}.mjsz-vbr-card-item .is-game-data.is-live,.mjsz-vbr-card-item .is-game-data.is-live a{color:var(--vbr-widget-live-game-color)}.mjsz-vbr-section-selector{margin:20px 0;border-bottom:1px solid var(--vbr-widget-primary-color-200)}
`, ip = ["onClick"], sp = { class: "is-card" }, lp = {
  __name: "ScheduleLiga.ce",
  props: {
    locale: {
      type: String,
      default: "hu"
    },
    apiKey: {
      type: String,
      default: ""
    },
    championshipName: {
      type: String,
      default: ""
    },
    championshipId: {
      type: Number,
      default: 0
    },
    autoRefresh: {
      type: Boolean,
      default: !1
    },
    timezoneSelector: {
      type: Boolean,
      default: !1
    },
    externalGameLink: {
      type: [String, Function],
      default: ""
    }
  },
  setup(t) {
    const e = t, r = F(Ke()), o = O(() => te(new Date(), i(r), e.locale)), a = pt("tab-button"), n = pt("section-selector"), s = (c) => xr(e.externalGameLink, c), l = (c) => {
      r.value = c;
    };
    return (c, d) => (f(), z("div", null, [
      L(i(bt), {
        locale: e.locale
      }, {
        default: C(() => [
          L(i(la), null, {
            default: C(({ error: v, hasError: u }) => [
              u ? (f(), W(i(ht), {
                key: 0,
                error: v
              }, null, 8, ["error"])) : E("", !0),
              L(ju, {
                locale: t.locale,
                timezone: r.value,
                "championship-name": t.championshipName,
                "auto-refresh": e.autoRefresh
              }, {
                default: C(({
                  seasons: p,
                  championshipId: g,
                  sections: m,
                  section: b,
                  teams: x,
                  games: k,
                  months: w,
                  isLoading: T,
                  selectedMonth: A,
                  selectedTeam: G,
                  selectedTeamGameType: B,
                  changeSeason: U,
                  changeMonth: Y,
                  changeSection: N,
                  changeTeam: h,
                  changeTeamType: et
                }) => [
                  L(Ru, {
                    seasons: p,
                    "championship-id": g,
                    months: w,
                    "selected-month": A,
                    teams: x,
                    "selected-team": G,
                    "selected-team-game-type": B,
                    "onUpdate:championshipId": U,
                    "onUpdate:selectedMonth": Y,
                    "onUpdate:selectedTeam": h,
                    "onUpdate:selectedTeamGameType": et
                  }, null, 8, ["seasons", "championship-id", "months", "selected-month", "teams", "selected-team", "selected-team-game-type", "onUpdate:championshipId", "onUpdate:selectedMonth", "onUpdate:selectedTeam", "onUpdate:selectedTeamGameType"]),
                  _("div", {
                    class: V(i(n))
                  }, [
                    (f(!0), z(J, null, at(m, (ot) => (f(), z("button", {
                      key: ot,
                      onClick: (I) => N(ot),
                      class: V([i(a), { "is-active": ot === b }])
                    }, P(ot), 11, ip))), 128))
                  ], 2),
                  e.timezoneSelector ? (f(), W(i(ca), {
                    class: "is-mb-5",
                    key: e.locale,
                    locale: e.locale,
                    "current-zone": r.value,
                    onChange: l
                  }, null, 8, ["locale", "current-zone"])) : E("", !0),
                  T ? (f(), W(i(Tr), { key: 1 })) : (f(!0), z(J, { key: 2 }, at(k.rows, (ot, I) => (f(), z("div", { key: I }, [
                    dt(P(i(ee)(I, "L dddd", r.value, t.locale)) + " ", 1),
                    _("div", sp, [
                      (f(!0), z(J, null, at(ot, (j) => (f(), W(rp, {
                        key: j.id,
                        game: j,
                        "offset-name": i(o),
                        "game-link": s
                      }, null, 8, ["game", "offset-name"]))), 128))
                    ])
                  ]))), 128))
                ]),
                _: 1
              }, 8, ["locale", "timezone", "championship-name", "auto-refresh"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, cp = /* @__PURE__ */ X(lp, [["styles", [yt, op, ap, ha, np]]]), dp = `.mjsz-vbr-playoffs .mjsz-vbr-table{table-layout:fixed}.mjsz-vbr-playoffs .mjsz-vbr-table table,.mjsz-vbr-playoffs .mjsz-vbr-table th,.mjsz-vbr-playoffs .mjsz-vbr-table td{border-collapse:collapse}@media (max-width: 600px){.mjsz-vbr-playoffs .mjsz-vbr-table{table-layout:auto}}.mjsz-vbr-playoffs .mjsz-vbr-section-title{padding:10px;text-align:center;font-size:16px;font-weight:700;color:var(--vbr-widget-primary-color-100);background-color:var(--vbr-widget-primary-color-700)}.mjsz-vbr-playoffs .mjsz-vbr-section-details{display:grid;grid-template-columns:1fr fit-content(100px) fit-content(100px) fit-content(100px) 1fr;align-items:center;gap:20px;padding:20px;background-color:var(--vbr-widget-primary-color-50)}@media (max-width: 600px){.mjsz-vbr-playoffs .mjsz-vbr-section-details{grid-template-columns:1fr}}.mjsz-vbr-playoffs .mjsz-vbr-section-details :deep(.is-logo-image){width:70px;height:70px}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-result{font-size:4rem;font-weight:700;text-align:center;color:var(--vbr-widget-primary-color-800)}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-team-name{font-size:20px;font-weight:700;color:var(--vbr-widget-primary-color-800)}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-right{text-align:right}
`, up = { class: "mjsz-vbr-playoffs" }, pp = { class: "mjsz-vbr-section-title" }, gp = { class: "mjsz-vbr-section-details" }, mp = { class: "is-team-name is-right" }, bp = { class: "is-result" }, vp = { class: "is-team-name" }, fp = { class: "mjsz-vbr-table" }, hp = { style: { width: "5%" } }, yp = {
  style: { width: "15%" },
  class: "is-text-left"
}, wp = { style: { width: "3%" } }, xp = { class: "is-text-right is-text-bold is-w-auto" }, _p = { style: { width: "1%" } }, zp = {
  key: 0,
  class: "is-text-dark"
}, kp = ["href"], Tp = { style: { width: "2%" } }, Sp = {
  key: 0,
  class: "label"
}, Pp = {
  key: 1,
  class: "label"
}, $p = {
  key: 2,
  class: "label"
}, jp = { class: "is-text-left is-text-bold is-w-auto" }, Op = { class: "is-text-left is-text-light is-w-auto" }, Ap = {
  __name: "Playoffs.ce",
  props: {
    locale: {
      type: String,
      default: "hu"
    },
    apiKey: {
      type: String,
      default: ""
    },
    championshipId: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const e = t, { state: r, execute: o } = ue({
      options: {
        path: "/v1/playoffsTree",
        apiKey: e.apiKey,
        params: O(() => ({ championshipId: e.championshipId }))
      }
    });
    o();
    const a = Ke(), n = (c) => xr(e.externalGameLink, c), s = (c) => ee(c, "L dddd", a, e.locale), l = (c) => ee(c, "HH:mm", a, e.locale);
    return (c, d) => (f(), z("div", up, [
      L(i(bt), {
        locale: e.locale
      }, {
        default: C(({ t: v }) => [
          (f(!0), z(J, null, at(i(r), (u) => (f(), z("div", null, [
            _("div", pp, P(v(`playoffs.${u.tertiaryName}`)), 1),
            _("div", gp, [
              _("div", mp, P(u.homeTeamName), 1),
              _("div", null, [
                L(i(Vt), {
                  class: "is-logo-image",
                  src: u.homeTeamLogo
                }, null, 8, ["src"])
              ]),
              _("div", bp, P(u.seriesStandings), 1),
              _("div", null, [
                L(i(Vt), {
                  class: "is-logo-image",
                  src: u.awayTeamLogo
                }, null, 8, ["src"])
              ]),
              _("div", vp, P(u.awayTeamName), 1)
            ]),
            L(i(Sr), null, {
              default: C(() => [
                _("table", fp, [
                  _("tbody", null, [
                    (f(!0), z(J, null, at(u.games, (p) => (f(), z("tr", {
                      key: p.id
                    }, [
                      _("td", hp, P(p.name), 1),
                      _("td", yp, P(s(p.gameDate)), 1),
                      _("td", wp, P(l(p.gameDate)), 1),
                      _("td", xp, P(p.homeTeamName), 1),
                      _("td", _p, [
                        p.gameStatus === 0 ? (f(), z("span", zp, "-:-")) : (f(), z("a", {
                          key: 1,
                          href: n(p.id),
                          target: "_blank",
                          class: V({ "is-text-dark": p.gameStatus !== 1, "is-text-accent": p.gameStatus === 1 })
                        }, P(p.homeTeamScore) + ":" + P(p.awayTeamScore), 11, kp))
                      ]),
                      _("td", Tp, [
                        p.isOvertime ? (f(), z("span", Sp, P(v("common.overtimeShort")), 1)) : E("", !0),
                        p.isShootout ? (f(), z("span", Pp, P(v("common.shootoutShort")), 1)) : E("", !0),
                        p.seriesStandings ? (f(), z("span", $p, P(p.seriesStandings), 1)) : E("", !0)
                      ]),
                      _("td", jp, P(p.awayTeamName), 1),
                      _("td", Op, P(p.location), 1)
                    ]))), 128))
                  ])
                ])
              ]),
              _: 2
            }, 1024)
          ]))), 256))
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, Lp = /* @__PURE__ */ X(Ap, [["styles", [yt, jt, dp]]]), Ip = mt(Cd), Ep = mt(Md), Cp = mt(Rd), Np = mt(Fd), Mp = mt(Bd), Dp = mt(Yd), Rp = mt(Kd), Gp = mt(qd), Fp = mt(Xd), Vp = mt(Qd), Bp = mt(xu), Hp = mt(cp), Yp = mt(Lp);
function Up() {
  customElements.define("mjsz-vbr-schedule", Ip), customElements.define("mjsz-vbr-standings", Ep), customElements.define("mjsz-vbr-players-leader", Cp), customElements.define("mjsz-vbr-players-penalties", Np), customElements.define("mjsz-vbr-goalies", Mp), customElements.define("mjsz-vbr-team-attendance", Dp), customElements.define("mjsz-vbr-team-fairplay", Rp), customElements.define("mjsz-vbr-team-penalty-killing", Gp), customElements.define("mjsz-vbr-team-powerplay", Fp), customElements.define("mjsz-vbr-team-scoring", Vp), customElements.define("mjsz-vbr-statistics", Bp), customElements.define("mjsz-vbr-schedule-liga", Hp), customElements.define("mjsz-vbr-playoffs", Yp);
}
const Wp = ({ apiKey: t, gameResolver: e, teamResolver: r, playerResolver: o }) => {
  window.__MJSZ_VBR_WIDGET__ = { apiKey: t, gameResolver: e, teamResolver: r, playerResolver: o }, Up();
};
export {
  Cp as FieldPlayersLeaderCE,
  Np as FieldPlayersPenaltiesCE,
  Mp as GoaliesLeaderCE,
  Yp as PlayoffsCE,
  Ip as ScheduleCE,
  Hp as ScheduleLigaCE,
  Ep as StandingsCE,
  Bp as StatisticsCE,
  Dp as TeamAttendanceCE,
  Rp as TeamFairplayCE,
  Gp as TeamPenaltyKillingCE,
  Fp as TeamPowerplayCE,
  Vp as TeamScoringEfficiencyCE,
  Wp as createConfig,
  Up as register
};
