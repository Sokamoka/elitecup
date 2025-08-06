/**
 * name: @mjsz-vbr-elements/core
 * version: v2.1.0 - 07/06/2023, 12:28:06
 * (c) 2023
 * description: Data visualization for MJSZ VBR
 * author: Ákos Stegner <akos.stegner@gmail.com>
 */
import { computed as Z, withDirectives as cn, openBlock as L, createElementBlock as z, normalizeClass as rt, unref as b, renderSlot as ot, vModelSelect as un, ref as H, readonly as fn, watch as dt, nextTick as dn, getCurrentScope as pn, onScopeDispose as mn, isRef as mr, shallowRef as ze, reactive as hr, defineComponent as gr, h as hn, provide as yr, inject as vr, createElementVNode as R, Fragment as Ot, normalizeStyle as Ne, createVNode as $t, Transition as gn, withCtx as lt, createTextVNode as Rt, toDisplayString as Q, createCommentVNode as et, toRefs as br, renderList as Bt, createBlock as gt, withKeys as Ce, withModifiers as Ht, onErrorCaptured as yn, createSlots as vn } from "vue";
const It = (t) => ({}.VITE_CSS_CLASS_PREFIX || "mjsz-vbr-") + t, Ci = {
  __name: "BaseSelect",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = It("base-input"), a = Z({ get: () => r.modelValue, set: (o) => e("update:modelValue", o) });
    return (o, s) => cn((L(), z("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
      class: rt([b(n), "is-select"])
    }, [
      ot(o.$slots, "default")
    ], 2)), [
      [un, a.value]
    ]);
  }
};
function wr(t) {
  return pn() ? (mn(t), !0) : !1;
}
function ct(t) {
  return typeof t == "function" ? t() : b(t);
}
const ae = typeof window < "u", bt = () => {
}, bn = /* @__PURE__ */ wn();
function wn() {
  var t;
  return ae && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function we(t, e = !1, r = "Timeout") {
  return new Promise((n, a) => {
    setTimeout(e ? () => a(r) : n, t);
  });
}
function Pe(t, e = !1) {
  function r(u, { flush: d = "sync", deep: f = !1, timeout: h, throwOnTimeout: p } = {}) {
    let g = null;
    const A = [new Promise((_) => {
      g = dt(
        t,
        (M) => {
          u(M) !== e && (g == null || g(), _(M));
        },
        {
          flush: d,
          deep: f,
          immediate: !0
        }
      );
    })];
    return h != null && A.push(
      we(h, p).then(() => ct(t)).finally(() => g == null ? void 0 : g())
    ), Promise.race(A);
  }
  function n(u, d) {
    if (!mr(u))
      return r((M) => M === u, d);
    const { flush: f = "sync", deep: h = !1, timeout: p, throwOnTimeout: g } = d ?? {};
    let O = null;
    const _ = [new Promise((M) => {
      O = dt(
        [t, u],
        ([k, N]) => {
          e !== (k === N) && (O == null || O(), M(k));
        },
        {
          flush: f,
          deep: h,
          immediate: !0
        }
      );
    })];
    return p != null && _.push(
      we(p, g).then(() => ct(t)).finally(() => (O == null || O(), ct(t)))
    ), Promise.race(_);
  }
  function a(u) {
    return r((d) => !!d, u);
  }
  function o(u) {
    return n(null, u);
  }
  function s(u) {
    return n(void 0, u);
  }
  function i(u) {
    return r(Number.isNaN, u);
  }
  function c(u, d) {
    return r((f) => {
      const h = Array.from(f);
      return h.includes(u) || h.includes(ct(u));
    }, d);
  }
  function l(u) {
    return m(1, u);
  }
  function m(u = 1, d) {
    let f = -1;
    return r(() => (f += 1, f >= u), d);
  }
  return Array.isArray(ct(t)) ? {
    toMatch: r,
    toContains: c,
    changed: l,
    changedTimes: m,
    get not() {
      return Pe(t, !e);
    }
  } : {
    toMatch: r,
    toBe: n,
    toBeTruthy: a,
    toBeNull: o,
    toBeNaN: i,
    toBeUndefined: s,
    changed: l,
    changedTimes: m,
    get not() {
      return Pe(t, !e);
    }
  };
}
function Pn(t) {
  return Pe(t);
}
function On(t, e, r = {}) {
  const {
    immediate: n = !0
  } = r, a = H(!1);
  let o = null;
  function s() {
    o && (clearTimeout(o), o = null);
  }
  function i() {
    a.value = !1, s();
  }
  function c(...l) {
    s(), a.value = !0, o = setTimeout(() => {
      a.value = !1, o = null, t(...l);
    }, ct(e));
  }
  return n && (a.value = !0, ae && c()), wr(i), {
    isPending: fn(a),
    start: c,
    stop: i
  };
}
function An(t, e, r) {
  const n = dt(t, (...a) => (dn(() => n()), e(...a)), r);
}
function jt(t) {
  var e;
  const r = ct(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
const Pr = ae ? window : void 0, $n = ae ? window.document : void 0;
function Jt(...t) {
  let e, r, n, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([r, n, a] = t, e = Pr) : [e, r, n, a] = t, !e)
    return bt;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], s = () => {
    o.forEach((m) => m()), o.length = 0;
  }, i = (m, u, d, f) => (m.addEventListener(u, d, f), () => m.removeEventListener(u, d, f)), c = dt(
    () => [jt(e), ct(a)],
    ([m, u]) => {
      s(), m && o.push(
        ...r.flatMap((d) => n.map((f) => i(m, d, f, u)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), s();
  };
  return wr(l), l;
}
let Ge = !1;
function xn(t, e, r = {}) {
  const { window: n = Pr, ignore: a = [], capture: o = !0, detectIframe: s = !1 } = r;
  if (!n)
    return;
  bn && !Ge && (Ge = !0, Array.from(n.document.body.children).forEach((d) => d.addEventListener("click", bt)));
  let i = !0;
  const c = (d) => a.some((f) => {
    if (typeof f == "string")
      return Array.from(n.document.querySelectorAll(f)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = jt(f);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), m = [
    Jt(n, "click", (d) => {
      const f = jt(t);
      if (!(!f || f === d.target || d.composedPath().includes(f))) {
        if (d.detail === 0 && (i = !c(d)), !i) {
          i = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: o }),
    Jt(n, "pointerdown", (d) => {
      const f = jt(t);
      f && (i = !d.composedPath().includes(f) && !c(d));
    }, { passive: !0 }),
    s && Jt(n, "blur", (d) => {
      var f;
      const h = jt(t);
      ((f = n.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && e(d);
    })
  ].filter(Boolean);
  return () => m.forEach((d) => d());
}
var _n = Object.defineProperty, Sn = Object.defineProperties, Tn = Object.getOwnPropertyDescriptors, Re = Object.getOwnPropertySymbols, Dn = Object.prototype.hasOwnProperty, Mn = Object.prototype.propertyIsEnumerable, je = (t, e, r) => e in t ? _n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kn = (t, e) => {
  for (var r in e || (e = {}))
    Dn.call(e, r) && je(t, r, e[r]);
  if (Re)
    for (var r of Re(e))
      Mn.call(e, r) && je(t, r, e[r]);
  return t;
}, Ln = (t, e) => Sn(t, Tn(e));
function Or(t, e, r) {
  const {
    immediate: n = !0,
    delay: a = 0,
    onError: o = bt,
    onSuccess: s = bt,
    resetOnExecute: i = !0,
    shallow: c = !0,
    throwError: l
  } = r ?? {}, m = c ? ze(e) : H(e), u = H(!1), d = H(!1), f = ze(void 0);
  async function h(O = 0, ...A) {
    i && (m.value = e), f.value = void 0, u.value = !1, d.value = !0, O > 0 && await we(O);
    const _ = typeof t == "function" ? t(...A) : t;
    try {
      const M = await _;
      m.value = M, u.value = !0, s(M);
    } catch (M) {
      if (f.value = M, o(M), l)
        throw M;
    } finally {
      d.value = !1;
    }
    return m.value;
  }
  n && h(a);
  const p = {
    state: m,
    isReady: u,
    isLoading: d,
    error: f,
    execute: h
  };
  function g() {
    return new Promise((O, A) => {
      Pn(d).toBe(!1).then(() => O(p)).catch(A);
    });
  }
  return Ln(kn({}, p), {
    then(O, A) {
      return g().then(O, A);
    }
  });
}
function En({ document: t = $n } = {}) {
  if (!t)
    return H("visible");
  const e = H(t.visibilityState);
  return Jt(t, "visibilitychange", () => {
    e.value = t.visibilityState;
  }), e;
}
var In = Object.defineProperty, Be = Object.getOwnPropertySymbols, zn = Object.prototype.hasOwnProperty, Nn = Object.prototype.propertyIsEnumerable, Fe = (t, e, r) => e in t ? In(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cn = (t, e) => {
  for (var r in e || (e = {}))
    zn.call(e, r) && Fe(t, r, e[r]);
  if (Be)
    for (var r of Be(e))
      Nn.call(e, r) && Fe(t, r, e[r]);
  return t;
};
async function Gn(t) {
  return new Promise((e, r) => {
    const n = new Image(), { src: a, srcset: o, sizes: s, class: i, loading: c, crossorigin: l } = t;
    n.src = a, o && (n.srcset = o), s && (n.sizes = s), i && (n.className = i), c && (n.loading = c), l && (n.crossOrigin = l), n.onload = () => e(n), n.onerror = r;
  });
}
function Rn(t, e = {}) {
  const r = Or(
    () => Gn(ct(t)),
    void 0,
    Cn({
      resetOnExecute: !0
    }, e)
  );
  return dt(
    () => ct(t),
    () => r.execute(e.delay),
    { deep: !0 }
  ), r;
}
function jn(t = [], e = {}) {
  const { delay: r = 0 } = e, n = H(!1), a = Z(() => {
    const i = b(t);
    return Array.isArray(i) ? i.map((c) => b(c)).some(Boolean) : i;
  }), { start: o, stop: s } = On(() => {
    n.value = !0;
  }, r);
  return dt(
    a,
    (i) => {
      if (i)
        return o();
      s(), n.value = !1;
    },
    { immediate: !0, deep: !0 }
  ), n;
}
function B(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function W(t) {
  return function e(r) {
    return arguments.length === 0 || B(r) ? e : t.apply(this, arguments);
  };
}
function F(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return B(r) ? e : W(function(a) {
          return t(r, a);
        });
      default:
        return B(r) && B(n) ? e : B(r) ? W(function(a) {
          return t(a, n);
        }) : B(n) ? W(function(a) {
          return t(r, a);
        }) : t(r, n);
    }
  };
}
function se(t, e) {
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
      return function(r, n) {
        return e.apply(this, arguments);
      };
    case 3:
      return function(r, n, a) {
        return e.apply(this, arguments);
      };
    case 4:
      return function(r, n, a, o) {
        return e.apply(this, arguments);
      };
    case 5:
      return function(r, n, a, o, s) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, n, a, o, s, i) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, n, a, o, s, i, c) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, n, a, o, s, i, c, l) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, n, a, o, s, i, c, l, m) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, a, o, s, i, c, l, m, u) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Te(t, e, r) {
  return function() {
    for (var n = [], a = 0, o = t, s = 0; s < e.length || a < arguments.length; ) {
      var i;
      s < e.length && (!B(e[s]) || a >= arguments.length) ? i = e[s] : (i = arguments[a], a += 1), n[s] = i, B(i) || (o -= 1), s += 1;
    }
    return o <= 0 ? r.apply(this, n) : se(o, Te(t, n, r));
  };
}
var ie = /* @__PURE__ */ F(function(e, r) {
  return e === 1 ? W(r) : se(e, Te(e, [], r));
});
function pt(t) {
  return function e(r, n, a) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return B(r) ? e : F(function(o, s) {
          return t(r, o, s);
        });
      case 2:
        return B(r) && B(n) ? e : B(r) ? F(function(o, s) {
          return t(o, n, s);
        }) : B(n) ? F(function(o, s) {
          return t(r, o, s);
        }) : W(function(o) {
          return t(r, n, o);
        });
      default:
        return B(r) && B(n) && B(a) ? e : B(r) && B(n) ? F(function(o, s) {
          return t(o, s, a);
        }) : B(r) && B(a) ? F(function(o, s) {
          return t(o, n, s);
        }) : B(n) && B(a) ? F(function(o, s) {
          return t(r, o, s);
        }) : B(r) ? W(function(o) {
          return t(o, n, a);
        }) : B(n) ? W(function(o) {
          return t(r, o, a);
        }) : B(a) ? W(function(o) {
          return t(r, n, o);
        }) : t(r, n, a);
    }
  };
}
const le = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function Bn(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function ce(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!le(n)) {
      for (var a = 0; a < t.length; ) {
        if (typeof n[t[a]] == "function")
          return n[t[a]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (Bn(n)) {
        var o = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return o(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function Ar(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const kt = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
function Ve(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function He(t, e, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function Fn(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function ut(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Vn(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const he = typeof Object.is == "function" ? Object.is : Vn;
var Ye = Object.prototype.toString, $r = /* @__PURE__ */ function() {
  return Ye.call(arguments) === "[object Arguments]" ? function(e) {
    return Ye.call(e) === "[object Arguments]";
  } : function(e) {
    return ut("callee", e);
  };
}(), Hn = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Ue = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], We = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), Yn = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, xt = /* @__PURE__ */ W(typeof Object.keys == "function" && !We ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, a = [], o = We && $r(e);
  for (r in e)
    ut(r, e) && (!o || r !== "length") && (a[a.length] = r);
  if (Hn)
    for (n = Ue.length - 1; n >= 0; )
      r = Ue[n], ut(r, e) && !Yn(a, r) && (a[a.length] = r), n -= 1;
  return a;
}), Oe = /* @__PURE__ */ W(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Ke(t, e, r, n) {
  var a = Ve(t), o = Ve(e);
  function s(i, c) {
    return De(i, c, r.slice(), n.slice());
  }
  return !He(function(i, c) {
    return !He(s, c, i);
  }, o, a);
}
function De(t, e, r, n) {
  if (he(t, e))
    return !0;
  var a = Oe(t);
  if (a !== Oe(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && Fn(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && he(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!he(t.valueOf(), e.valueOf()))
        return !1;
      break;
    case "Error":
      return t.name === e.name && t.message === e.message;
    case "RegExp":
      if (!(t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.sticky === e.sticky && t.unicode === e.unicode))
        return !1;
      break;
  }
  for (var o = r.length - 1; o >= 0; ) {
    if (r[o] === t)
      return n[o] === e;
    o -= 1;
  }
  switch (a) {
    case "Map":
      return t.size !== e.size ? !1 : Ke(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Ke(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var s = xt(t);
  if (s.length !== xt(e).length)
    return !1;
  var i = r.concat([t]), c = n.concat([e]);
  for (o = s.length - 1; o >= 0; ) {
    var l = s[o];
    if (!(ut(l, e) && De(e[l], t[l], i, c)))
      return !1;
    o -= 1;
  }
  return !0;
}
var ue = /* @__PURE__ */ F(function(e, r) {
  return De(e, r, [], []);
});
function Un(t, e, r) {
  var n, a;
  if (typeof t.indexOf == "function")
    switch (typeof e) {
      case "number":
        if (e === 0) {
          for (n = 1 / e; r < t.length; ) {
            if (a = t[r], a === 0 && 1 / a === n)
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
    if (ue(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function xr(t, e) {
  return Un(e, t, 0) >= 0;
}
function Qt(t, e) {
  for (var r = 0, n = e.length, a = Array(n); r < n; )
    a[r] = t(e[r]), r += 1;
  return a;
}
function ge(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Ct = function(e) {
  return (e < 10 ? "0" : "") + e;
}, Wn = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Ct(e.getUTCMonth() + 1) + "-" + Ct(e.getUTCDate()) + "T" + Ct(e.getUTCHours()) + ":" + Ct(e.getUTCMinutes()) + ":" + Ct(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function Kn(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function _r(t, e, r) {
  for (var n = 0, a = r.length; n < a; )
    e = t(e, r[n]), n += 1;
  return e;
}
function qn(t, e) {
  for (var r = 0, n = e.length, a = []; r < n; )
    t(e[r]) && (a[a.length] = e[r]), r += 1;
  return a;
}
function te(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var Zn = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = kt.init, t.prototype["@@transducer/result"] = kt.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function Xn(t) {
  return function(e) {
    return new Zn(t, e);
  };
}
var Sr = /* @__PURE__ */ F(
  /* @__PURE__ */ ce(["fantasy-land/filter", "filter"], Xn, function(t, e) {
    return te(e) ? _r(function(r, n) {
      return t(e[n]) && (r[n] = e[n]), r;
    }, {}, xt(e)) : (
      // else
      qn(t, e)
    );
  })
), Jn = /* @__PURE__ */ F(function(e, r) {
  return Sr(Kn(e), r);
});
function Tr(t, e) {
  var r = function(s) {
    var i = e.concat([t]);
    return xr(s, i) ? "<Circular>" : Tr(s, i);
  }, n = function(o, s) {
    return Qt(function(i) {
      return ge(i) + ": " + r(o[i]);
    }, s.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + Qt(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + Qt(r, t).concat(n(t, Jn(function(o) {
        return /^\d+$/.test(o);
      }, xt(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : ge(Wn(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : ge(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var a = t.toString();
        if (a !== "[object Object]")
          return a;
      }
      return "{" + n(t, xt(t)).join(", ") + "}";
  }
}
var Ae = /* @__PURE__ */ W(function(e) {
  return Tr(e, []);
}), Qn = /* @__PURE__ */ F(function(e, r) {
  if (e === r)
    return r;
  function n(c, l) {
    if (c > l != l > c)
      return l > c ? l : c;
  }
  var a = n(e, r);
  if (a !== void 0)
    return a;
  var o = n(typeof e, typeof r);
  if (o !== void 0)
    return o === typeof e ? e : r;
  var s = Ae(e), i = n(s, Ae(r));
  return i !== void 0 && i === s ? e : r;
}), to = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = kt.init, t.prototype["@@transducer/result"] = kt.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), eo = function(e) {
  return function(r) {
    return new to(e, r);
  };
}, ro = /* @__PURE__ */ F(
  /* @__PURE__ */ ce(["fantasy-land/map", "map"], eo, function(e, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return ie(r.length, function() {
          return e.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return _r(function(n, a) {
          return n[a] = e(r[a]), n;
        }, {}, xt(r));
      default:
        return Qt(e, r);
    }
  })
);
const _t = ro, Dr = Number.isInteger || function(e) {
  return e << 0 === e;
};
function fe(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var Mr = /* @__PURE__ */ F(function(e, r) {
  var n = e < 0 ? r.length + e : e;
  return fe(r) ? r.charAt(n) : r[n];
}), no = /* @__PURE__ */ F(function(e, r) {
  if (r != null)
    return Dr(e) ? Mr(e, r) : r[e];
});
const Lt = no;
var oo = /* @__PURE__ */ F(function(e, r) {
  return _t(Lt(e), r);
}), ao = /* @__PURE__ */ W(function(e) {
  return le(e) ? !0 : !e || typeof e != "object" || fe(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), qe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function so(t, e, r) {
  return function(a, o, s) {
    if (ao(s))
      return t(a, o, s);
    if (s == null)
      return o;
    if (typeof s["fantasy-land/reduce"] == "function")
      return e(a, o, s, "fantasy-land/reduce");
    if (s[qe] != null)
      return r(a, o, s[qe]());
    if (typeof s.next == "function")
      return r(a, o, s);
    if (typeof s.reduce == "function")
      return e(a, o, s, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function io(t, e, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var lo = /* @__PURE__ */ F(function(e, r) {
  return se(e.length, function() {
    return e.apply(r, arguments);
  });
});
function co(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function uo(t, e, r, n) {
  return t["@@transducer/result"](r[n](lo(t["@@transducer/step"], t), e));
}
var kr = /* @__PURE__ */ so(io, uo, co), fo = /* @__PURE__ */ function() {
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
function Lr(t) {
  return new fo(t);
}
var po = /* @__PURE__ */ pt(function(t, e, r) {
  return kr(typeof t == "function" ? Lr(t) : t, e, r);
});
const Er = po;
var mo = /* @__PURE__ */ W(function(e) {
  return function() {
    return e;
  };
});
const Ze = mo;
var ho = /* @__PURE__ */ W(function(e) {
  return ie(Er(Qn, 0, oo("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const go = ho;
var yo = /* @__PURE__ */ pt(function(e, r, n) {
  var a = e(r), o = e(n);
  return a < o ? -1 : a > o ? 1 : 0;
});
const Ir = yo;
function vo(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
function bo(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Me(t, e, r) {
  if (r || (r = new Po()), wo(t))
    return t;
  var n = function(o) {
    var s = r.get(t);
    if (s)
      return s;
    r.set(t, o);
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (o[i] = e ? Me(t[i], !0, r) : t[i]);
    return o;
  };
  switch (Oe(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n([]);
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return bo(t);
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
function wo(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var Po = /* @__PURE__ */ function() {
  function t() {
    this.map = {}, this.length = 0;
  }
  return t.prototype.set = function(e, r) {
    const n = this.hash(e);
    let a = this.map[n];
    a || (this.map[n] = a = []), a.push([e, r]), this.length += 1;
  }, t.prototype.hash = function(e) {
    let r = [];
    for (var n in e)
      r.push(Object.prototype.toString.call(e[n]));
    return r.join();
  }, t.prototype.get = function(e) {
    if (this.length <= 180) {
      for (const a in this.map) {
        const o = this.map[a];
        for (let s = 0; s < o.length; s += 1) {
          const i = o[s];
          if (i[0] === e)
            return i[1];
        }
      }
      return;
    }
    const r = this.hash(e), n = this.map[r];
    if (n)
      for (let a = 0; a < n.length; a += 1) {
        const o = n[a];
        if (o[0] === e)
          return o[1];
      }
  }, t;
}();
function Oo(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function ke(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return le(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Ao = /* @__PURE__ */ pt(
  /* @__PURE__ */ ke("slice", function(e, r, n) {
    return Array.prototype.slice.call(n, e, r);
  })
), $o = /* @__PURE__ */ W(
  /* @__PURE__ */ ke(
    "tail",
    /* @__PURE__ */ Ao(1, 1 / 0)
  )
);
const xo = $o;
function zr() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return se(arguments[0].length, Er(Oo, arguments[0], xo(arguments)));
}
var _o = /* @__PURE__ */ W(function(e) {
  return fe(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse();
});
const So = _o;
function Nr() {
  if (arguments.length === 0)
    throw new Error("compose requires at least one argument");
  return zr.apply(this, So(arguments));
}
var To = /* @__PURE__ */ function() {
  function t(e, r, n, a) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = a, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = kt.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (ut(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Me(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function Do(t, e, r) {
  return function(n) {
    return new To(t, e, r, n);
  };
}
var Mo = /* @__PURE__ */ Te(
  4,
  [],
  /* @__PURE__ */ ce([], Do, function(e, r, n, a) {
    var o = Lr(function(s, i) {
      var c = n(i), l = e(ut(c, s) ? s[c] : Me(r, !1), i);
      return l && l["@@transducer/reduced"] ? Ar(s) : (s[c] = l, s);
    });
    return kr(o, {}, a);
  })
), ko = /* @__PURE__ */ pt(function(e, r, n) {
  var a = e(r), o = e(n);
  return a > o ? -1 : a < o ? 1 : 0;
});
const Lo = ko;
function Eo(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var Io = /* @__PURE__ */ W(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : le(e) ? [] : fe(e) ? "" : te(e) ? {} : $r(e) ? function() {
    return arguments;
  }() : Eo(e) ? e.constructor.from("") : void 0;
}), zo = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.idx = -1, this.found = !1;
  }
  return t.prototype["@@transducer/init"] = kt.init, t.prototype["@@transducer/result"] = function(e) {
    return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.idx += 1, this.f(r) && (this.found = !0, e = Ar(this.xf["@@transducer/step"](e, this.idx))), e;
  }, t;
}();
function No(t) {
  return function(e) {
    return new zo(t, e);
  };
}
var Co = /* @__PURE__ */ F(
  /* @__PURE__ */ ce([], No, function(e, r) {
    for (var n = 0, a = r.length; n < a; ) {
      if (e(r[n]))
        return n;
      n += 1;
    }
    return -1;
  })
);
const Go = Co;
var Ro = /* @__PURE__ */ F(
  /* @__PURE__ */ ke(
    "groupBy",
    /* @__PURE__ */ Mo(function(t, e) {
      return t.push(e), t;
    }, [])
  )
);
const jo = Ro;
var Bo = /* @__PURE__ */ pt(function(e, r, n) {
  return ie(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const Fo = Bo;
var Vo = /* @__PURE__ */ F(xr);
const Ho = Vo;
var Yo = /* @__PURE__ */ F(function(e, r) {
  return ie(e + 1, function() {
    var n = arguments[e];
    if (n != null && vo(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Ae(n) + ' does not have a method named "' + r + '"');
  });
});
const Cr = Yo;
var Uo = /* @__PURE__ */ W(function(e) {
  return e != null && ue(e, Io(e));
});
const Wo = Uo;
var Ko = /* @__PURE__ */ F(function(e, r) {
  return e.map(function(n) {
    for (var a = r, o = 0, s; o < n.length; ) {
      if (a == null)
        return;
      s = n[o], a = Dr(s) ? Mr(s, a) : a[s], o += 1;
    }
    return a;
  });
}), qo = /* @__PURE__ */ F(function(e, r) {
  return Ko([e], r)[0];
});
const Zo = qo;
var Xo = /* @__PURE__ */ pt(function(e, r, n) {
  var a = {}, o;
  r = r || {}, n = n || {};
  for (o in r)
    ut(o, r) && (a[o] = ut(o, n) ? e(o, r[o], n[o]) : r[o]);
  for (o in n)
    ut(o, n) && !ut(o, a) && (a[o] = n[o]);
  return a;
}), Jo = /* @__PURE__ */ pt(function t(e, r, n) {
  return Xo(function(a, o, s) {
    return te(o) && te(s) ? t(e, o, s) : e(a, o, s);
  }, r, n);
}), Qo = /* @__PURE__ */ F(function(e, r) {
  return Jo(function(n, a, o) {
    return o;
  }, e, r);
});
const ta = Qo;
var ea = /* @__PURE__ */ F(function(e, r) {
  for (var n = {}, a = {}, o = 0, s = e.length; o < s; )
    a[e[o]] = 1, o += 1;
  for (var i in r)
    a.hasOwnProperty(i) || (n[i] = r[i]);
  return n;
});
const ra = ea;
var na = /* @__PURE__ */ pt(function(e, r, n) {
  return ue(e, Lt(r, n));
});
const oa = na;
var aa = /* @__PURE__ */ pt(function(e, r, n) {
  return e(Lt(r, n));
});
const sa = aa;
var ia = /* @__PURE__ */ F(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(function(n, a) {
    for (var o = 0, s = 0; o === 0 && s < e.length; )
      o = e[s](n, a), s += 1;
    return o;
  });
});
const Gr = ia;
var la = /* @__PURE__ */ Cr(1, "split");
const Yt = la;
var ca = /* @__PURE__ */ Cr(0, "toLowerCase");
const ua = ca;
var Gt = `	
\v\f\r                　\u2028\u2029\uFEFF`, fa = "​", da = typeof String.prototype.trim == "function", pa = /* @__PURE__ */ W(!da || /* @__PURE__ */ Gt.trim() || !/* @__PURE__ */ fa.trim() ? function(e) {
  var r = new RegExp("^[" + Gt + "][" + Gt + "]*"), n = new RegExp("[" + Gt + "][" + Gt + "]*$");
  return e.replace(r, "").replace(n, "");
} : function(e) {
  return e.trim();
});
const ee = pa, Rr = Symbol("I18nContext"), J = hr({
  messages: {},
  locale: "",
  fallbackLocale: ""
}), ma = ({ messages: t = {}, locale: e = "", fallbackLocale: r = "" }) => {
  J.messages = t, J.locale = e, J.fallbackLocale = r;
  const n = (c, l = {}) => {
    const m = !Wo(l), u = _t(ee, Yt(".", c));
    return Z(() => {
      const f = jr(u);
      return m ? ga(f, l) : f;
    }).value;
  }, a = (c) => {
    const l = _t(ee, Yt(".", c));
    return !!$e(J.locale, l, J.messages);
  }, o = (c) => {
    J.locale = c;
  }, i = {
    locale: Z({
      get() {
        return J.locale;
      },
      set(c) {
        J.locale = c;
      }
    }),
    setLocale: o,
    translate: n,
    hasTranlation: a
  };
  return yr(Rr, i), {
    translate: n
  };
}, Wt = (t) => {
  t && (J.messages = t.messages, J.locale = t.locale, J.fallbackLocale = t.fallbackLocale);
  const e = ha();
  return {
    locale: e.locale,
    t: e.translate,
    setLocale: e.setLocale,
    hasTranlation: e.hasTranlation
  };
}, ha = () => {
  const t = vr(Rr, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, jr = (t = []) => {
  let e = $e(J.locale, t, J.messages);
  return !e && J.fallbackLocale && (e = $e(J.fallbackLocale, t, J.messages)), e || t.join(".");
};
function $e(t, e, r) {
  return Zo([t, ...e], r);
}
const ga = function(t, e) {
  return t.replace(/\{(\w+)\}/g, function(r, n) {
    return e[n];
  });
}, ya = gr({
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
    const r = _t(ee, Yt(".", t.path)), n = jr(r), a = Yt(/{|}/, n), o = Object.keys(e).map((s) => {
      const i = a.indexOf(s);
      return i > -1 && (a[i] = e[s]()[0]), a;
    });
    return () => hn(t.tag, o);
  }
}), va = "https://api.icehockey.hu/vbr", ba = "https://www.jegkorongszovetseg.hu/event/game/", wa = "https://jegkorongszovetseg.hu/assets/images/player_blank.png", Pa = "https://www.ersteliga.hu/stats/players#/player/", Oa = "https://www.ersteliga.hu/stats/teams#/team/3314/21096?name=", yt = "original", y = "descend", C = "ascend", Aa = (/* @__PURE__ */ new Map()).set("hu", "hu-hu").set("en", "hu-gb"), $a = (/* @__PURE__ */ new Map()).set("Europe/Budapest", { countryLabelKey: "hungary", timezone: "Europe/Budapest" }).set("Europe/Bucharest", { countryLabelKey: "romania", timezone: "Europe/Bucharest" }), Gi = "/v1/playersGoaliePeriod", Ri = "/v1/playersGoalieUnderPeriod", ji = 1e3 * 60 * 5, xa = 1e3, _a = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  class: "svg-inline--fa fa-sort fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, Sa = /* @__PURE__ */ R("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, null, -1), Ta = [
  Sa
];
function Da(t, e) {
  return L(), z("svg", _a, Ta);
}
const Xe = { render: Da }, Ma = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  class: "svg-inline--fa fa-sort-down fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, ka = /* @__PURE__ */ R("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, null, -1), La = [
  ka
];
function Ea(t, e) {
  return L(), z("svg", Ma, La);
}
const Je = { render: Ea };
function Kt(t) {
  return t.split("-")[1];
}
function Le(t) {
  return t === "y" ? "height" : "width";
}
function At(t) {
  return t.split("-")[0];
}
function qt(t) {
  return ["top", "bottom"].includes(At(t)) ? "x" : "y";
}
function Qe(t, e, r) {
  let { reference: n, floating: a } = t;
  const o = n.x + n.width / 2 - a.width / 2, s = n.y + n.height / 2 - a.height / 2, i = qt(e), c = Le(i), l = n[c] / 2 - a[c] / 2, m = i === "x";
  let u;
  switch (At(e)) {
    case "top":
      u = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      u = { x: o, y: n.y + n.height };
      break;
    case "right":
      u = { x: n.x + n.width, y: s };
      break;
    case "left":
      u = { x: n.x - a.width, y: s };
      break;
    default:
      u = { x: n.x, y: n.y };
  }
  switch (Kt(e)) {
    case "start":
      u[i] -= l * (r && m ? -1 : 1);
      break;
    case "end":
      u[i] += l * (r && m ? -1 : 1);
  }
  return u;
}
const Ia = async (t, e, r) => {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: o = [], platform: s } = r, i = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({ reference: t, floating: e, strategy: a }), { x: m, y: u } = Qe(l, n, c), d = n, f = {}, h = 0;
  for (let p = 0; p < i.length; p++) {
    const { name: g, fn: O } = i[p], { x: A, y: _, data: M, reset: k } = await O({ x: m, y: u, initialPlacement: n, placement: d, strategy: a, middlewareData: f, rects: l, platform: s, elements: { reference: t, floating: e } });
    m = A ?? m, u = _ ?? u, f = { ...f, [g]: { ...f[g], ...M } }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (l = k.rects === !0 ? await s.getElementRects({ reference: t, floating: e, strategy: a }) : k.rects), { x: m, y: u } = Qe(l, d, c)), p = -1);
  }
  return { x: m, y: u, placement: d, strategy: a, middlewareData: f };
};
function Br(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function re(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Fr(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: n, y: a, platform: o, rects: s, elements: i, strategy: c } = t, { boundary: l = "clippingAncestors", rootBoundary: m = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, h = Br(f), p = i[d ? u === "floating" ? "reference" : "floating" : u], g = re(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(p))) == null || r ? p : p.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)), boundary: l, rootBoundary: m, strategy: c })), O = u === "floating" ? { ...s.floating, x: n, y: a } : s.reference, A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), _ = await (o.isElement == null ? void 0 : o.isElement(A)) && await (o.getScale == null ? void 0 : o.getScale(A)) || { x: 1, y: 1 }, M = re(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: O, offsetParent: A, strategy: c }) : O);
  return { top: (g.top - M.top + h.top) / _.y, bottom: (M.bottom - g.bottom + h.bottom) / _.y, left: (g.left - M.left + h.left) / _.x, right: (M.right - g.right + h.right) / _.x };
}
const za = Math.min, Na = Math.max;
function xe(t, e, r) {
  return Na(t, za(e, r));
}
const tr = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: r, padding: n = 0 } = t || {}, { x: a, y: o, placement: s, rects: i, platform: c, elements: l } = e;
  if (r == null)
    return {};
  const m = Br(n), u = { x: a, y: o }, d = qt(s), f = Le(d), h = await c.getDimensions(r), p = d === "y", g = p ? "top" : "left", O = p ? "bottom" : "right", A = p ? "clientHeight" : "clientWidth", _ = i.reference[f] + i.reference[d] - u[d] - i.floating[f], M = u[d] - i.reference[d], k = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(r));
  let N = k ? k[A] : 0;
  N && await (c.isElement == null ? void 0 : c.isElement(k)) || (N = l.floating[A] || i.floating[f]);
  const j = _ / 2 - M / 2, U = m[g], E = N - h[f] - m[O], T = N / 2 - h[f] / 2 + j, G = xe(U, T, E), K = Kt(s) != null && T != G && i.reference[f] / 2 - (T < U ? m[g] : m[O]) - h[f] / 2 < 0;
  return { [d]: u[d] - (K ? T < U ? U - T : E - T : 0), data: { [d]: G, centerOffset: T - G } };
} }), Ca = ["top", "right", "bottom", "left"];
Ca.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Ga = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ne(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ga[e]);
}
function Ra(t, e, r) {
  r === void 0 && (r = !1);
  const n = Kt(t), a = qt(t), o = Le(a);
  let s = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = ne(s)), { main: s, cross: ne(s) };
}
const ja = { start: "end", end: "start" };
function ye(t) {
  return t.replace(/start|end/g, (e) => ja[e]);
}
const Ba = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: s, platform: i, elements: c } = e, { mainAxis: l = !0, crossAxis: m = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: h = !0, ...p } = t, g = At(n), O = At(s) === s, A = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), _ = u || (O || !h ? [ne(s)] : function(G) {
      const K = ne(G);
      return [ye(G), K, ye(K)];
    }(s));
    u || f === "none" || _.push(...function(G, K, x, P) {
      const w = Kt(G);
      let $ = function(v, S, D) {
        const I = ["left", "right"], Y = ["right", "left"], V = ["top", "bottom"], q = ["bottom", "top"];
        switch (v) {
          case "top":
          case "bottom":
            return D ? S ? Y : I : S ? I : Y;
          case "left":
          case "right":
            return S ? V : q;
          default:
            return [];
        }
      }(At(G), x === "start", P);
      return w && ($ = $.map((v) => v + "-" + w), K && ($ = $.concat($.map(ye)))), $;
    }(s, h, f, A));
    const M = [s, ..._], k = await Fr(e, p), N = [];
    let j = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (l && N.push(k[g]), m) {
      const { main: G, cross: K } = Ra(n, o, A);
      N.push(k[G], k[K]);
    }
    if (j = [...j, { placement: n, overflows: N }], !N.every((G) => G <= 0)) {
      var U, E;
      const G = (((U = a.flip) == null ? void 0 : U.index) || 0) + 1, K = M[G];
      if (K)
        return { data: { index: G, overflows: j }, reset: { placement: K } };
      let x = (E = j.filter((P) => P.overflows[0] <= 0).sort((P, w) => P.overflows[1] - w.overflows[1])[0]) == null ? void 0 : E.placement;
      if (!x)
        switch (d) {
          case "bestFit": {
            var T;
            const P = (T = j.map((w) => [w.placement, w.overflows.filter(($) => $ > 0).reduce(($, v) => $ + v, 0)]).sort((w, $) => w[1] - $[1])[0]) == null ? void 0 : T[0];
            P && (x = P);
            break;
          }
          case "initialPlacement":
            x = s;
        }
      if (n !== x)
        return { reset: { placement: x } };
    }
    return {};
  } };
}, Fa = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: r, y: n } = e, a = await async function(o, s) {
      const { placement: i, platform: c, elements: l } = o, m = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), u = At(i), d = Kt(i), f = qt(i) === "x", h = ["left", "top"].includes(u) ? -1 : 1, p = m && f ? -1 : 1, g = typeof s == "function" ? s(o) : s;
      let { mainAxis: O, crossAxis: A, alignmentAxis: _ } = typeof g == "number" ? { mainAxis: g, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
      return d && typeof _ == "number" && (A = d === "end" ? -1 * _ : _), f ? { x: A * p, y: O * h } : { x: O * h, y: A * p };
    }(e, t);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
};
function Va(t) {
  return t === "x" ? "y" : "x";
}
const Ha = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: r, y: n, placement: a } = e, { mainAxis: o = !0, crossAxis: s = !1, limiter: i = { fn: (g) => {
      let { x: O, y: A } = g;
      return { x: O, y: A };
    } }, ...c } = t, l = { x: r, y: n }, m = await Fr(e, c), u = qt(At(a)), d = Va(u);
    let f = l[u], h = l[d];
    if (o) {
      const g = u === "y" ? "bottom" : "right";
      f = xe(f + m[u === "y" ? "top" : "left"], f, f - m[g]);
    }
    if (s) {
      const g = d === "y" ? "bottom" : "right";
      h = xe(h + m[d === "y" ? "top" : "left"], h, h - m[g]);
    }
    const p = i.fn({ ...e, [u]: f, [d]: h });
    return { ...p, data: { x: p.x - r, y: p.y - n } };
  } };
};
function at(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function st(t) {
  return at(t).getComputedStyle(t);
}
function Vr(t) {
  return t instanceof at(t).Node;
}
function wt(t) {
  return Vr(t) ? (t.nodeName || "").toLowerCase() : "";
}
function it(t) {
  return t instanceof at(t).HTMLElement;
}
function nt(t) {
  return t instanceof at(t).Element;
}
function er(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof at(t).ShadowRoot || t instanceof ShadowRoot;
}
function Ut(t) {
  const { overflow: e, overflowX: r, overflowY: n, display: a } = st(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(a);
}
function Ya(t) {
  return ["table", "td", "th"].includes(wt(t));
}
function _e(t) {
  const e = Ee(), r = st(t);
  return r.transform !== "none" || r.perspective !== "none" || !e && !!r.backdropFilter && r.backdropFilter !== "none" || !e && !!r.filter && r.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Ee() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function de(t) {
  return ["html", "body", "#document"].includes(wt(t));
}
const rr = Math.min, Ft = Math.max, oe = Math.round;
function Hr(t) {
  const e = st(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const a = it(t), o = a ? t.offsetWidth : r, s = a ? t.offsetHeight : n, i = oe(r) !== o || oe(n) !== s;
  return i && (r = o, n = s), { width: r, height: n, fallback: i };
}
function Yr(t) {
  return nt(t) ? t : t.contextElement;
}
const Ur = { x: 1, y: 1 };
function Mt(t) {
  const e = Yr(t);
  if (!it(e))
    return Ur;
  const r = e.getBoundingClientRect(), { width: n, height: a, fallback: o } = Hr(e);
  let s = (o ? oe(r.width) : r.width) / n, i = (o ? oe(r.height) : r.height) / a;
  return s && Number.isFinite(s) || (s = 1), i && Number.isFinite(i) || (i = 1), { x: s, y: i };
}
const nr = { x: 0, y: 0 };
function Wr(t, e, r) {
  var n, a;
  if (e === void 0 && (e = !0), !Ee())
    return nr;
  const o = t ? at(t) : window;
  return !r || e && r !== o ? nr : { x: ((n = o.visualViewport) == null ? void 0 : n.offsetLeft) || 0, y: ((a = o.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function St(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const a = t.getBoundingClientRect(), o = Yr(t);
  let s = Ur;
  e && (n ? nt(n) && (s = Mt(n)) : s = Mt(t));
  const i = Wr(o, r, n);
  let c = (a.left + i.x) / s.x, l = (a.top + i.y) / s.y, m = a.width / s.x, u = a.height / s.y;
  if (o) {
    const d = at(o), f = n && nt(n) ? at(n) : n;
    let h = d.frameElement;
    for (; h && n && f !== d; ) {
      const p = Mt(h), g = h.getBoundingClientRect(), O = getComputedStyle(h);
      g.x += (h.clientLeft + parseFloat(O.paddingLeft)) * p.x, g.y += (h.clientTop + parseFloat(O.paddingTop)) * p.y, c *= p.x, l *= p.y, m *= p.x, u *= p.y, c += g.x, l += g.y, h = at(h).frameElement;
    }
  }
  return re({ width: m, height: u, x: c, y: l });
}
function vt(t) {
  return ((Vr(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function pe(t) {
  return nt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Kr(t) {
  return St(vt(t)).left + pe(t).scrollLeft;
}
function Et(t) {
  if (wt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || er(t) && t.host || vt(t);
  return er(e) ? e.host : e;
}
function qr(t) {
  const e = Et(t);
  return de(e) ? e.ownerDocument.body : it(e) && Ut(e) ? e : qr(e);
}
function Vt(t, e) {
  var r;
  e === void 0 && (e = []);
  const n = qr(t), a = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = at(n);
  return a ? e.concat(o, o.visualViewport || [], Ut(n) ? n : []) : e.concat(n, Vt(n));
}
function or(t, e, r) {
  let n;
  if (e === "viewport")
    n = function(a, o) {
      const s = at(a), i = vt(a), c = s.visualViewport;
      let l = i.clientWidth, m = i.clientHeight, u = 0, d = 0;
      if (c) {
        l = c.width, m = c.height;
        const f = Ee();
        (!f || f && o === "fixed") && (u = c.offsetLeft, d = c.offsetTop);
      }
      return { width: l, height: m, x: u, y: d };
    }(t, r);
  else if (e === "document")
    n = function(a) {
      const o = vt(a), s = pe(a), i = a.ownerDocument.body, c = Ft(o.scrollWidth, o.clientWidth, i.scrollWidth, i.clientWidth), l = Ft(o.scrollHeight, o.clientHeight, i.scrollHeight, i.clientHeight);
      let m = -s.scrollLeft + Kr(a);
      const u = -s.scrollTop;
      return st(i).direction === "rtl" && (m += Ft(o.clientWidth, i.clientWidth) - c), { width: c, height: l, x: m, y: u };
    }(vt(t));
  else if (nt(e))
    n = function(a, o) {
      const s = St(a, !0, o === "fixed"), i = s.top + a.clientTop, c = s.left + a.clientLeft, l = it(a) ? Mt(a) : { x: 1, y: 1 };
      return { width: a.clientWidth * l.x, height: a.clientHeight * l.y, x: c * l.x, y: i * l.y };
    }(e, r);
  else {
    const a = Wr(t);
    n = { ...e, x: e.x - a.x, y: e.y - a.y };
  }
  return re(n);
}
function Zr(t, e) {
  const r = Et(t);
  return !(r === e || !nt(r) || de(r)) && (st(r).position === "fixed" || Zr(r, e));
}
function ar(t, e) {
  return it(t) && st(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function sr(t, e) {
  const r = at(t);
  if (!it(t))
    return r;
  let n = ar(t, e);
  for (; n && Ya(n) && st(n).position === "static"; )
    n = ar(n, e);
  return n && (wt(n) === "html" || wt(n) === "body" && st(n).position === "static" && !_e(n)) ? r : n || function(a) {
    let o = Et(a);
    for (; it(o) && !de(o); ) {
      if (_e(o))
        return o;
      o = Et(o);
    }
    return null;
  }(t) || r;
}
function Ua(t, e, r) {
  const n = it(e), a = vt(e), o = r === "fixed", s = St(t, !0, o, e);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && !o)
    if ((wt(e) !== "body" || Ut(a)) && (i = pe(e)), it(e)) {
      const l = St(e, !0, o, e);
      c.x = l.x + e.clientLeft, c.y = l.y + e.clientTop;
    } else
      a && (c.x = Kr(a));
  return { x: s.left + i.scrollLeft - c.x, y: s.top + i.scrollTop - c.y, width: s.width, height: s.height };
}
const Wa = { getClippingRect: function(t) {
  let { element: e, boundary: r, rootBoundary: n, strategy: a } = t;
  const o = r === "clippingAncestors" ? function(l, m) {
    const u = m.get(l);
    if (u)
      return u;
    let d = Vt(l).filter((g) => nt(g) && wt(g) !== "body"), f = null;
    const h = st(l).position === "fixed";
    let p = h ? Et(l) : l;
    for (; nt(p) && !de(p); ) {
      const g = st(p), O = _e(p);
      O || g.position !== "fixed" || (f = null), (h ? !O && !f : !O && g.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Ut(p) && !O && Zr(l, p)) ? d = d.filter((A) => A !== p) : f = g, p = Et(p);
    }
    return m.set(l, d), d;
  }(e, this._c) : [].concat(r), s = [...o, n], i = s[0], c = s.reduce((l, m) => {
    const u = or(e, m, a);
    return l.top = Ft(u.top, l.top), l.right = rr(u.right, l.right), l.bottom = rr(u.bottom, l.bottom), l.left = Ft(u.left, l.left), l;
  }, or(e, i, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: r, strategy: n } = t;
  const a = it(r), o = vt(r);
  if (r === o)
    return e;
  let s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((wt(r) !== "body" || Ut(o)) && (s = pe(r)), it(r))) {
    const l = St(r);
    i = Mt(r), c.x = l.x + r.clientLeft, c.y = l.y + r.clientTop;
  }
  return { width: e.width * i.x, height: e.height * i.y, x: e.x * i.x - s.scrollLeft * i.x + c.x, y: e.y * i.y - s.scrollTop * i.y + c.y };
}, isElement: nt, getDimensions: function(t) {
  return Hr(t);
}, getOffsetParent: sr, getDocumentElement: vt, getScale: Mt, async getElementRects(t) {
  let { reference: e, floating: r, strategy: n } = t;
  const a = this.getOffsetParent || sr, o = this.getDimensions;
  return { reference: Ua(e, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => st(t).direction === "rtl" };
function Ka(t, e, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = !0, ancestorResize: o = !0, elementResize: s = !0, animationFrame: i = !1 } = n, c = a || o ? [...nt(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [], ...Vt(e)] : [];
  c.forEach((d) => {
    const f = !nt(d) && d.toString().includes("V");
    !a || i && !f || d.addEventListener("scroll", r, { passive: !0 }), o && d.addEventListener("resize", r);
  });
  let l, m = null;
  s && (m = new ResizeObserver(() => {
    r();
  }), nt(t) && !i && m.observe(t), nt(t) || !t.contextElement || i || m.observe(t.contextElement), m.observe(e));
  let u = i ? St(t) : null;
  return i && function d() {
    const f = St(t);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || r(), u = f, l = requestAnimationFrame(d);
  }(), r(), () => {
    var d;
    c.forEach((f) => {
      a && f.removeEventListener("scroll", r), o && f.removeEventListener("resize", r);
    }), (d = m) == null || d.disconnect(), m = null, i && cancelAnimationFrame(l);
  };
}
const qa = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Wa, ...r }, o = { ...a.platform, _c: n };
  return Ia(t, e, { ...a, platform: o });
}, Za = (t, e = "body") => {
  if (!t)
    return;
  if (typeof e != "string") {
    e == null || e.append(t);
    return;
  }
  const r = document.querySelector(e);
  r == null || r.append(t);
};
function Xa({ middleware: t, placement: e = null, strategy: r, append: n, enabled: a }) {
  const o = H(null), s = H(null), i = H(null), c = H(null), l = H(null), m = H(null), u = H(null), d = H(r ?? "absolute"), f = H(null), h = () => {
    !o.value || !s.value || qa(o.value, s.value, {
      middleware: t,
      placement: e,
      strategy: r
    }).then((g) => {
      i.value = g.x, c.value = g.y, d.value = g.strategy, l.value = g.middlewareData.arrow.x, m.value = g.middlewareData.arrow.y, u.value = g.placement;
    });
  };
  dt(
    () => ({
      reference: b(o),
      floating: b(s),
      append: b(n)
    }),
    ({ floating: g, append: O }) => {
      O && Za(g, O), h();
    },
    { flush: "post" }
  ), dt(
    a,
    (g) => {
      if (!(!o.value || !s.value)) {
        if (!g)
          return p();
        f.value = Ka(o.value, s.value, h, {});
      }
    },
    { flush: "post" }
  );
  const p = () => {
    var g;
    (g = f.value) == null || g.call(f), f.value = null;
  };
  return {
    x: i,
    y: c,
    arrowX: l,
    arrowY: m,
    placement: u,
    reference: o,
    floating: s,
    strategy: d,
    update: h
  };
}
const Ja = (t) => {
  const { element: e, padding: r } = t;
  return {
    name: "arrow",
    options: t,
    fn(n) {
      return mr(e) ? e.value != null ? tr({ element: e.value, padding: r }).fn(n) : {} : e ? tr({ element: e, padding: r }).fn(n) : {};
    }
  };
}, Qa = ["data-placement"], ts = {
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
    const e = t, r = H(!1), n = H(null), { x: a, y: o, arrowX: s, arrowY: i, placement: c, reference: l, floating: m, strategy: u } = Xa({
      placement: e.placement,
      middleware: [Ba(), Ha({ padding: 5 }), Fa(e.offset), Ja({ element: n, padding: 5 })],
      append: Z(() => e.appendTo),
      enabled: r
    }), d = () => {
      e.disabled || (r.value = !0);
    }, f = () => {
      r.value = !1;
    }, h = (p) => {
      l.value = p;
    };
    return xn(m, (p) => {
      var g;
      (g = l.value) != null && g.contains(p.target) || f();
    }), (p, g) => (L(), z(Ot, null, [
      ot(p.$slots, "default", {
        setRef: h,
        show: d,
        hide: f
      }),
      R("div", {
        ref_key: "floating",
        ref: m,
        "data-placement": b(c),
        style: Ne({
          position: b(u),
          top: b(o) ? `${b(o)}px` : "",
          left: b(a) ? `${b(a)}px` : ""
        })
      }, [
        $t(gn, {
          name: "transition-fade",
          mode: "out-in"
        }, {
          default: lt(() => [
            r.value ? (L(), z("div", {
              key: 0,
              class: rt(["floating-content", [`is-${e.theme}`]])
            }, [
              ot(p.$slots, "content", { close: f }, () => [
                Rt(Q(t.content), 1)
              ]),
              R("div", {
                ref_key: "arrowRef",
                ref: n,
                class: "is-arrow",
                style: Ne({
                  position: b(u),
                  top: b(i) ? `${b(i)}px` : "",
                  left: b(s) ? `${b(s)}px` : ""
                })
              }, null, 4)
            ], 2)) : et("", !0)
          ]),
          _: 3
        })
      ], 12, Qa)
    ], 64));
  }
}, es = ["onMouseenter", "onMouseleave", "onFocus", "onBlur", "onClick", "onKeydown", "tabindex"], rs = { key: 0 }, ns = ["colspan"], os = { key: 1 }, as = ["colspan"], ss = {
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
    const r = t, { isLoading: n, appendTo: a } = br(r), o = jn(n, { delay: xa }), { t: s } = Wt(), i = It("table"), c = Z(() => r.columns), l = Z(() => Object.keys(r.columns).length), m = (u, d) => {
      u.sortOrders && e("sort", { target: d, orders: u.sortOrders });
    };
    return (u, d) => (L(), z("table", {
      class: rt(b(i))
    }, [
      R("thead", null, [
        R("tr", null, [
          (L(!0), z(Ot, null, Bt(c.value, (f, h) => (L(), gt(ts, {
            key: h,
            placement: "top",
            content: f.tooltip,
            disabled: !f.tooltip,
            "append-to": b(a)
          }, {
            default: lt(({ setRef: p, show: g, hide: O }) => [
              R("th", {
                ref_for: !0,
                ref: p,
                class: rt([
                  [f.class],
                  {
                    "is-active": h === t.sort.sortTarget && t.sort.orders[0].direction !== b(yt),
                    "is-sortable": f.sortOrders,
                    "is-desc": h === t.sort.sortTarget && t.sort.orders[0].direction === b(y),
                    "is-asc": h === t.sort.sortTarget && t.sort.orders[0].direction === b(C)
                  }
                ]),
                onMouseenter: g,
                onMouseleave: O,
                onFocus: g,
                onBlur: O,
                onClick: (A) => m(f, h),
                onKeydown: [
                  Ce(Ht((A) => m(f, h), ["prevent"]), ["space"]),
                  Ce(Ht((A) => m(f, h), ["prevent"]), ["enter"])
                ],
                tabindex: f.sortOrders ? 0 : -1,
                role: "button"
              }, [
                ot(u.$slots, `header-${h}`, { column: f }, () => [
                  Rt(Q(f.label), 1)
                ]),
                f.sortOrders && h !== t.sort.sortTarget ? (L(), gt(b(Xe), {
                  key: 0,
                  class: "is-icon-sort"
                })) : et("", !0),
                h === t.sort.sortTarget && t.sort.orders[0].direction === b(yt) ? (L(), gt(b(Xe), {
                  key: 1,
                  class: "is-icon-sort"
                })) : et("", !0),
                h === t.sort.sortTarget && t.sort.orders[0].direction === b(y) ? (L(), gt(b(Je), {
                  key: 2,
                  class: "is-icon-sort"
                })) : et("", !0),
                h === t.sort.sortTarget && t.sort.orders[0].direction === b(C) ? (L(), gt(b(Je), {
                  key: 3,
                  class: "is-icon-sort"
                })) : et("", !0)
              ], 42, es)
            ]),
            _: 2
          }, 1032, ["content", "disabled", "append-to"]))), 128))
        ])
      ]),
      R("tbody", null, [
        (L(!0), z(Ot, null, Bt(r.rows, (f, h) => (L(), z("tr", { key: h }, [
          (L(!0), z(Ot, null, Bt(c.value, (p, g) => (L(), z("td", {
            key: g,
            class: rt([
              [p.class],
              {
                "is-active": g === t.sort.sortTarget && t.sort.orders[0].direction !== b(yt)
              }
            ])
          }, [
            ot(u.$slots, `cell-${g}`, {
              row: f,
              prop: g
            }, () => [
              Rt(Q(f[g]), 1)
            ])
          ], 2))), 128))
        ]))), 128))
      ]),
      b(o) && t.rows.length === 0 ? (L(), z("tfoot", rs, [
        R("tr", null, [
          R("td", { colspan: l.value }, [
            ot(u.$slots, "loading", {}, () => [
              Rt(Q(b(s)("common.loading")), 1)
            ])
          ], 8, ns)
        ])
      ])) : et("", !0),
      t.rows.length === 0 && !b(n) && !b(o) ? (L(), z("tfoot", os, [
        R("tr", null, [
          R("td", { colspan: l.value }, [
            ot(u.$slots, "empty", {}, () => [
              Rt(Q(b(s)("common.noData")), 1)
            ])
          ], 8, as)
        ])
      ])) : et("", !0)
    ], 2));
  }
}, is = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ls = /* @__PURE__ */ R("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1), cs = /* @__PURE__ */ R("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}, null, -1), us = /* @__PURE__ */ R("line", {
  x1: "12",
  y1: "17",
  x2: "12.01",
  y2: "17"
}, null, -1), fs = [
  ls,
  cs,
  us
];
function ds(t, e) {
  return L(), z("svg", is, fs);
}
const ps = { render: ds }, Bi = {
  __name: "ErrorNotice",
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, { t: r, hasTranlation: n } = Wt(), a = It("error-notice"), o = Z(() => {
      var s;
      return n(`errors.${e.error.key}`) ? r(`errors.${e.error.key}`, e.error.cause) : (s = e.error) == null ? void 0 : s.message;
    });
    return (s, i) => (L(), z("div", {
      class: rt(b(a))
    }, [
      $t(b(ps), {
        class: "icon",
        width: "20",
        height: "20"
      }),
      R("span", null, Q(o.value), 1)
    ], 2));
  }
};
function ms(t) {
  return t && t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e) => e.toLowerCase()).join("-");
}
const Xr = Symbol("ErrorProviderContext"), hs = () => {
  const t = H(""), e = H({}), r = (o) => {
    console.log({ error: o }), t.value = o.message || o.error.message, e.value = {
      message: o.message,
      key: o.key || ms(o.message),
      cause: o.cause
    };
  };
  return yr(Xr, {
    onError: r,
    reset: () => {
      t.value = "", e.value = {};
    }
  }), window.onerror = (o) => {
    console.log("WINDOW_ONERROR:", o);
  }, yn((o, s, i) => {
    console.log("onErrorCaptured:", o, s, i);
  }), {
    hasError: Z(() => t.value.length > 0),
    message: t,
    error: e,
    onError: r
  };
}, gs = () => {
  const t = ys();
  return {
    onError: t.onError,
    reset: t.reset
  };
}, ys = () => {
  const t = vr(Xr, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, Fi = {
  __name: "ErrorProvider",
  setup(t) {
    const { message: e, hasError: r, error: n } = hs();
    return (a, o) => ot(a.$slots, "default", {
      message: b(e),
      error: b(n),
      hasError: b(r)
    });
  }
}, vs = {
  "undefined-column": "A(z) {column} oszlop nem létezik!",
  "invalid-season-name": "Érvénytelen szezon név",
  "api-key-not-found": "API Kulcs nem megfelelő"
}, bs = {
  loading: "Töltődés...",
  noData: "Nincs megjeleníthető adat",
  selectTimezone: "*Minden időpont a számítógép időzónája szerint jelenik meg ({timezone}). Váltás: ",
  hungary: "Magyarország",
  romania: "Románia",
  shootoutShort: "SU.",
  overtimeShort: "HU.",
  all: "Mind",
  report: "Jegyzőkönyv",
  video: "Videó"
}, ws = {
  blank: "#",
  team: {
    short: "Csapat",
    tooltip: "Csapatnév"
  },
  game: {
    short: "M",
    tooltip: "Mérkőzésszám"
  },
  wins: {
    short: "GY",
    tooltip: "Győzelem"
  },
  draw: {
    short: "D",
    tooltip: "Döntetlen"
  },
  otw: {
    short: "GYH",
    tooltip: "Győzelem Hosszabbításban"
  },
  otl: {
    short: "VH",
    tooltip: "Vereség Hosszabbításban"
  },
  losses: {
    short: "V",
    tooltip: "Vereség"
  },
  goalFor: {
    short: "SZG",
    tooltip: "Szerzett Gól"
  },
  goalAgainst: {
    short: "KG",
    tooltip: "Kapott Gól"
  },
  goalDiff: {
    short: "GK",
    tooltip: "Gólkülönbség"
  },
  name: {
    short: "Név",
    tooltip: "Játékosnév"
  },
  goals: {
    short: "G",
    tooltip: "Gólok"
  },
  assists: {
    short: "A",
    tooltip: "Gólpasszok"
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
    tooltip: "Lövések"
  },
  sogPercent: {
    short: "L%",
    tooltip: "Lövés Hatékonyság"
  },
  gameName: {
    short: "#",
    tooltip: "Mérkőzés Sorszáma"
  },
  gameDate: {
    short: "Dátum",
    tooltip: "Mérkőzés Dátuma"
  },
  gameDateTime: {
    short: "*Idő ({offsetName})",
    tooltip: "Mérkőzés kezdési ideje (Zóna neve)"
  },
  homeTeam: {
    short: "Hazai",
    tooltip: "Hazai Csapat"
  },
  awayTeam: {
    short: "Vendég",
    tooltip: "Vendég Csapat"
  },
  location: {
    short: "Helyszín",
    tooltip: "Mérkőzés Helyszíne"
  },
  broadcast: {
    short: "TV",
    tooltip: "TV Közvetítés"
  },
  minorPenalties: {
    short: "MINOR",
    tooltip: "Kisbüntetés (2p)"
  },
  majorPenalties: {
    short: "MAJOR",
    tooltip: "Büntetés (5p)"
  },
  misconducts: {
    short: "MISC",
    tooltip: "Fegyelmi büntetés (10p)"
  },
  gameMisconducts: {
    short: "GA-MI",
    tooltip: "Fegyelmi büntetés (20p)"
  },
  matchPenalties: {
    short: "MATCH",
    tooltip: "Végleges kiállítások (25p)"
  },
  pim: {
    short: "BÜP",
    tooltip: "Büntetés Percek"
  },
  pimPerGame: {
    short: "BÜP/M",
    tooltip: "Mérkőzésenkénti Büntetés Percek"
  },
  gpgk: {
    short: "M",
    tooltip: "Mérkőzésre Nevezve"
  },
  gpi: {
    short: "LM",
    tooltip: "Mérkőzésen Játszott"
  },
  toi: {
    short: "TOI",
    tooltip: "Jégen Töltött Idő"
  },
  toiPercent: {
    short: "TOI%",
    tooltip: "Jégen Töltött Idő Százalék"
  },
  ga: {
    short: "GA",
    tooltip: "Kapott Gól"
  },
  gaa: {
    short: "GAA",
    tooltip: "Kapott Gólátlag"
  },
  sa: {
    short: "KL",
    tooltip: "Kapott Lövés"
  },
  svs: {
    short: "VL",
    tooltip: "Védett Lövés"
  },
  svsPercent: {
    short: "VH%",
    tooltip: "Védés Hatékonyság"
  },
  homeHeader: {
    short: "Hazai:",
    tooltip: ""
  },
  awayHeader: {
    short: "Vendég:",
    tooltip: ""
  },
  totalHeader: {
    short: "Összes:",
    tooltip: ""
  },
  homeGame: {
    short: "M",
    tooltip: "Hazai Mérkőzés"
  },
  awayGame: {
    short: "M",
    tooltip: "Vendég Mérkőzés"
  },
  totalGame: {
    short: "M",
    tooltip: "Összes Mérkőzés"
  },
  homeAttendance: {
    short: "Nézőszám",
    tooltip: "Hazai Néző"
  },
  awayAttendance: {
    short: "Nézőszám",
    tooltip: "Vendég Néző"
  },
  totalAttendance: {
    short: "Nézőszám",
    tooltip: "Összes Néző"
  },
  homeAttendanceAvg: {
    short: "Átlag",
    tooltip: "Hazi Néző Átlag"
  },
  awayAttendanceAvg: {
    short: "Átlag",
    tooltip: "Vendég Néző Átlag"
  },
  totalAttendanceAvg: {
    short: "Átlag",
    tooltip: "Összes Néző Átlag"
  },
  powerplayDisadvantages: {
    short: "DVG",
    tooltip: "Emberhátrányok"
  },
  dvgTime: {
    short: "DVG-T",
    tooltip: "Emberhátrányban Töltött Idő"
  },
  dvgTimePP1: {
    short: "DVG-T PP1",
    tooltip: "Szimpla emberhátrányban töltött idő"
  },
  dvgTimePP2: {
    short: "DVG-T PP2",
    tooltip: "Kettős emberhátrányban töltött idő"
  },
  ppga: {
    short: "PPGA",
    tooltip: "Emberhátrányban kapott gólok"
  },
  shgf: {
    short: "SHGF",
    tooltip: "Emberhátrányban szerzett gól"
  },
  pkPercent: {
    short: "PK%",
    tooltip: "Emberhátrány kivédekezés"
  },
  adv: {
    short: "ADV",
    tooltip: "Emberelőnyök száma"
  },
  advTime: {
    short: "ADV-T",
    tooltip: "Emberelőnyben töltött idő"
  },
  advTimePP1: {
    short: "ADV-T PP1",
    tooltip: "Szimpla emberelőnyben töltött idő"
  },
  advTimePP2: {
    short: "ADV-T PP2",
    tooltip: "Kettős emberelőnyben töltött idő"
  },
  ppgf: {
    short: "PPGF",
    tooltip: "Emberelőnyben szerzett gólok"
  },
  shga: {
    short: "SHGA",
    tooltip: "Emberelőnyben kapott gólok"
  },
  ppPercent: {
    short: "PP%",
    tooltip: "Emberelőny kihasználás"
  },
  gfgp: {
    short: "GF/GP",
    tooltip: "Szerzett gólátlag"
  },
  gagp: {
    short: "GA/GP",
    tooltip: "Kapott gólátlag"
  },
  sogp: {
    short: "Shots/GP",
    tooltip: "Átlagos lövésszám"
  },
  sagp: {
    short: "SA/GP",
    tooltip: "Átlagos kapott lövésszám"
  }
}, Ps = {
  data: {
    localTime: "Helyszín szerinti idő"
  },
  status: {
    jury: "Versenybíróság",
    delayed: "Elhalasztva"
  },
  period: {
    Bemelegítés: "Bemelegítés",
    "Bemelegítés vége": "Bemelegítés Vége",
    "1. harmad": "I. harmad",
    "1. harmad vége": "I. harmad Vége",
    "2. harmad": "II. harmad",
    "2. harmad vége": "II. harmad Vége",
    "3. harmad": "III. harmad",
    "3. harmad vége": "III. harmad Vége",
    "4. harmad": "IV. harmad",
    "4. harmad vége": "IV. harmad Vége",
    "5. harmad": "V. harmad",
    "5. harmad vége": "V. harmad Vége",
    "6. harmad": "VI. harmad",
    "6. harmad vége": "VI. harmad Vége",
    Hosszabbítás: "Hosszabbítás",
    "Hosszabbítás vége": "Hosszabbítás vége",
    Büntetők: "Szétlövés",
    "Büntetők vége": "Szétlövés vége",
    Végeredmény: "Végeredmény",
    Szétlövés: "Szétlövés"
  }
}, Os = {
  errors: vs,
  common: bs,
  table: ws,
  game: Ps
}, As = {
  "undefined-column": "The {column} column is not exists!",
  "invalid-season-name": "Invalid season name",
  "api-key-not-found": "API Key not found"
}, $s = {
  loading: "Loading...",
  noData: "No data to display",
  selectTimezone: "*All times are displayed according to your computer's time zone ({timezone}). Change: ",
  hungary: "Hungary",
  romania: "Romania",
  shootoutShort: "SO",
  overtimeShort: "OT",
  all: "All",
  report: "Report Sheet",
  video: "Video"
}, xs = {
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
    tooltip: "Szerzett gólátlag"
  },
  gagp: {
    short: "GA/GP",
    tooltip: "Kapott gólátlag"
  },
  sogp: {
    short: "Shots/GP",
    tooltip: "Átlagos lövésszám"
  },
  sagp: {
    short: "SA/GP",
    tooltip: "Shots Against per Game"
  }
}, _s = {
  data: {
    localTime: "Game local time"
  },
  status: {
    jury: "Jury result",
    delayed: "Game delayed"
  },
  period: {
    Bemelegítés: "Warm-up",
    "Bemelegítés vége": "Warm-up End",
    "1. harmad": "First period",
    "1. harmad vége": "First period End",
    "2. harmad": "Second period",
    "2. harmad vége": "Second period End",
    "3. harmad": "Third period",
    "3. harmad vége": "Third period End",
    "4. harmad": "IV. period",
    "4. harmad vége": "IV. period End",
    "5. harmad": "V. period",
    "5. harmad vége": "V. period End",
    "6. harmad": "VI. period",
    "6. harmad vége": "VI. period End",
    Hosszabbítás: "Overtime",
    "Hosszabbítás vége": "Overtime End",
    Büntetőlövések: "Penalty Shot",
    Végeredmény: "Game Completed",
    Szétlövés: "Shoot Out"
  }
}, Ss = {
  errors: As,
  common: $s,
  table: xs,
  game: _s
}, Jr = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Ts = gr({
  props: {
    locale: {
      type: String,
      default: "hu"
    },
    messages: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = ta({ hu: Os, en: Ss }, t.messages), { translate: r } = ma({
      locale: Z(() => t.locale),
      messages: e
    });
    return {
      translate: r
    };
  }
});
function Ds(t, e, r, n, a, o) {
  return ot(t.$slots, "default", { t: t.translate });
}
const Vi = /* @__PURE__ */ Jr(Ts, [["render", Ds]]), Ms = ["src"], ks = ["src", "title"], ir = {
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
    const e = t, { defaultSrc: r } = br(e), n = H({ src: e.src }), { error: a, isReady: o } = Rn(n, { resetOnExecute: !1, shallow: !1 });
    return (s, i) => (L(), z(Ot, null, [
      b(a) && b(r) ? (L(), z("img", {
        key: 0,
        src: b(r),
        class: rt(["is-loaded", s.$attrs.class])
      }, null, 10, Ms)) : et("", !0),
      b(a) ? et("", !0) : (L(), z("img", {
        key: 1,
        src: n.value.src,
        class: rt([s.$attrs.class, { "is-loaded": b(o) }]),
        title: e.title
      }, null, 10, ks))
    ], 64));
  }
}, Ls = { style: { "text-align": "center" } }, Es = {
  __name: "LoadingIndicator",
  setup(t) {
    const { t: e } = Wt();
    return (r, n) => (L(), z("div", Ls, Q(b(e)("common.loading")), 1));
  }
};
function Is({ currentPage: t, itemsPerPage: e = 20, totalItems: r, rangeLength: n = 5, update: a = bt }) {
  const o = Z(() => Math.ceil(b(r) / e)), s = Z(() => {
    const m = b(t) - 1, u = Array.from({ length: o.value }, (h, p) => p + 1), d = Math.floor(n / 2);
    let f = Math.max(m - d, 0);
    return f + n >= o.value && (f = Math.max(o.value - n, 0)), u.slice(f, f + n);
  }), i = (m) => {
    const u = b(t) + m;
    l(u) && a(u);
  }, c = (m) => {
    l(m) && a(m);
  }, l = (m) => m <= o.value && m > 0;
  return {
    page: t,
    range: s,
    pageCount: o,
    goTo: c,
    pageStep: i
  };
}
const zs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ns = /* @__PURE__ */ R("polyline", { points: "15 18 9 12 15 6" }, null, -1), Cs = [
  Ns
];
function Gs(t, e) {
  return L(), z("svg", zs, Cs);
}
const Rs = { render: Gs }, js = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Bs = /* @__PURE__ */ R("polyline", { points: "9 18 15 12 9 6" }, null, -1), Fs = [
  Bs
];
function Vs(t, e) {
  return L(), z("svg", js, Fs);
}
const Hs = { render: Vs }, Ys = ["disabled"], Us = ["disabled"], Ws = {
  key: 1,
  class: "is-disabled"
}, Ks = ["disabled", "onClick"], qs = {
  key: 2,
  class: "is-disabled"
}, Zs = /* @__PURE__ */ R("span", null, "...", -1), Xs = [
  Zs
], Js = ["disabled"], Qs = ["disabled"], Hi = {
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
    const r = t, n = It("paginator"), { page: a, pageCount: o, range: s, goTo: i, pageStep: c } = Is({
      currentPage: Z(() => r.page),
      totalItems: Z(() => r.totalItems),
      itemsPerPage: r.itemsPerPage,
      rangeLength: r.rangeLength,
      update: (l) => e("change", l)
    });
    return (l, m) => b(o) > 1 ? (L(), z("div", {
      key: 0,
      class: rt(b(n))
    }, [
      R("button", {
        type: "button",
        disabled: b(a) === 1,
        onClick: m[0] || (m[0] = (u) => b(c)(-1))
      }, [
        ot(l.$slots, "prev", {}, () => [
          $t(b(Rs), { class: "icon paginator-left" })
        ])
      ], 8, Ys),
      t.isCompact ? et("", !0) : (L(), z("button", {
        key: 0,
        type: "button",
        disabled: b(a) === 1,
        onClick: m[1] || (m[1] = (u) => b(i)(1))
      }, "1", 8, Us)),
      t.isCompact ? et("", !0) : (L(), z("div", Ws, "...")),
      (L(!0), z(Ot, null, Bt(b(s), (u) => (L(), z("button", {
        type: "button",
        key: u,
        class: rt({ "is-active": u === b(a) }),
        disabled: u === b(a),
        onClick: (d) => b(i)(u)
      }, Q(u), 11, Ks))), 128)),
      t.isCompact ? et("", !0) : (L(), z("div", qs, Xs)),
      t.isCompact ? et("", !0) : (L(), z("button", {
        key: 3,
        type: "button",
        disabled: b(a) === b(o),
        onClick: m[2] || (m[2] = (u) => b(i)(b(o)))
      }, Q(b(o)), 9, Js)),
      R("button", {
        type: "button",
        disabled: b(a) === b(o),
        onClick: m[3] || (m[3] = Ht((u) => b(c)(1), ["prevent"]))
      }, [
        ot(l.$slots, "next", {}, () => [
          $t(b(Hs), { class: "icon paginator-left" })
        ])
      ], 8, Qs)
    ], 2)) : et("", !0);
  }
}, ti = {
  __name: "ResponsiveTable",
  setup(t) {
    const e = H(null), r = It("table-responsive");
    return (n, a) => (L(), z("div", {
      ref_key: "el",
      ref: e,
      class: rt(b(r))
    }, [
      ot(n.$slots, "default", { el: e.value })
    ], 2));
  }
};
var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qr = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", s = "second", i = "minute", c = "hour", l = "day", m = "week", u = "month", d = "quarter", f = "year", h = "date", p = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(x) {
      var P = ["th", "st", "nd", "rd"], w = x % 100;
      return "[" + x + (P[(w - 20) % 10] || P[w] || P[0]) + "]";
    } }, _ = function(x, P, w) {
      var $ = String(x);
      return !$ || $.length >= P ? x : "" + Array(P + 1 - $.length).join(w) + x;
    }, M = { s: _, z: function(x) {
      var P = -x.utcOffset(), w = Math.abs(P), $ = Math.floor(w / 60), v = w % 60;
      return (P <= 0 ? "+" : "-") + _($, 2, "0") + ":" + _(v, 2, "0");
    }, m: function x(P, w) {
      if (P.date() < w.date())
        return -x(w, P);
      var $ = 12 * (w.year() - P.year()) + (w.month() - P.month()), v = P.clone().add($, u), S = w - v < 0, D = P.clone().add($ + (S ? -1 : 1), u);
      return +(-($ + (w - v) / (S ? v - D : D - v)) || 0);
    }, a: function(x) {
      return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
    }, p: function(x) {
      return { M: u, y: f, w: m, d: l, D: h, h: c, m: i, s, ms: o, Q: d }[x] || String(x || "").toLowerCase().replace(/s$/, "");
    }, u: function(x) {
      return x === void 0;
    } }, k = "en", N = {};
    N[k] = A;
    var j = function(x) {
      return x instanceof G;
    }, U = function x(P, w, $) {
      var v;
      if (!P)
        return k;
      if (typeof P == "string") {
        var S = P.toLowerCase();
        N[S] && (v = S), w && (N[S] = w, v = S);
        var D = P.split("-");
        if (!v && D.length > 1)
          return x(D[0]);
      } else {
        var I = P.name;
        N[I] = P, v = I;
      }
      return !$ && v && (k = v), v || !$ && k;
    }, E = function(x, P) {
      if (j(x))
        return x.clone();
      var w = typeof P == "object" ? P : {};
      return w.date = x, w.args = arguments, new G(w);
    }, T = M;
    T.l = U, T.i = j, T.w = function(x, P) {
      return E(x, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
    };
    var G = function() {
      function x(w) {
        this.$L = U(w.locale, null, !0), this.parse(w);
      }
      var P = x.prototype;
      return P.parse = function(w) {
        this.$d = function($) {
          var v = $.date, S = $.utc;
          if (v === null)
            return /* @__PURE__ */ new Date(NaN);
          if (T.u(v))
            return /* @__PURE__ */ new Date();
          if (v instanceof Date)
            return new Date(v);
          if (typeof v == "string" && !/Z$/i.test(v)) {
            var D = v.match(g);
            if (D) {
              var I = D[2] - 1 || 0, Y = (D[7] || "0").substring(0, 3);
              return S ? new Date(Date.UTC(D[1], I, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, Y)) : new Date(D[1], I, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, Y);
            }
          }
          return new Date(v);
        }(w), this.$x = w.x || {}, this.init();
      }, P.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, P.$utils = function() {
        return T;
      }, P.isValid = function() {
        return this.$d.toString() !== p;
      }, P.isSame = function(w, $) {
        var v = E(w);
        return this.startOf($) <= v && v <= this.endOf($);
      }, P.isAfter = function(w, $) {
        return E(w) < this.startOf($);
      }, P.isBefore = function(w, $) {
        return this.endOf($) < E(w);
      }, P.$g = function(w, $, v) {
        return T.u(w) ? this[$] : this.set(v, w);
      }, P.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, P.valueOf = function() {
        return this.$d.getTime();
      }, P.startOf = function(w, $) {
        var v = this, S = !!T.u($) || $, D = T.p(w), I = function(Dt, tt) {
          var ht = T.w(v.$u ? Date.UTC(v.$y, tt, Dt) : new Date(v.$y, tt, Dt), v);
          return S ? ht : ht.endOf(l);
        }, Y = function(Dt, tt) {
          return T.w(v.toDate()[Dt].apply(v.toDate("s"), (S ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(tt)), v);
        }, V = this.$W, q = this.$M, mt = this.$D, ft = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case f:
            return S ? I(1, 0) : I(31, 11);
          case u:
            return S ? I(1, q) : I(0, q + 1);
          case m:
            var zt = this.$locale().weekStart || 0, Nt = (V < zt ? V + 7 : V) - zt;
            return I(S ? mt - Nt : mt + (6 - Nt), q);
          case l:
          case h:
            return Y(ft + "Hours", 0);
          case c:
            return Y(ft + "Minutes", 1);
          case i:
            return Y(ft + "Seconds", 2);
          case s:
            return Y(ft + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, P.endOf = function(w) {
        return this.startOf(w, !1);
      }, P.$set = function(w, $) {
        var v, S = T.p(w), D = "set" + (this.$u ? "UTC" : ""), I = (v = {}, v[l] = D + "Date", v[h] = D + "Date", v[u] = D + "Month", v[f] = D + "FullYear", v[c] = D + "Hours", v[i] = D + "Minutes", v[s] = D + "Seconds", v[o] = D + "Milliseconds", v)[S], Y = S === l ? this.$D + ($ - this.$W) : $;
        if (S === u || S === f) {
          var V = this.clone().set(h, 1);
          V.$d[I](Y), V.init(), this.$d = V.set(h, Math.min(this.$D, V.daysInMonth())).$d;
        } else
          I && this.$d[I](Y);
        return this.init(), this;
      }, P.set = function(w, $) {
        return this.clone().$set(w, $);
      }, P.get = function(w) {
        return this[T.p(w)]();
      }, P.add = function(w, $) {
        var v, S = this;
        w = Number(w);
        var D = T.p($), I = function(q) {
          var mt = E(S);
          return T.w(mt.date(mt.date() + Math.round(q * w)), S);
        };
        if (D === u)
          return this.set(u, this.$M + w);
        if (D === f)
          return this.set(f, this.$y + w);
        if (D === l)
          return I(1);
        if (D === m)
          return I(7);
        var Y = (v = {}, v[i] = n, v[c] = a, v[s] = r, v)[D] || 1, V = this.$d.getTime() + w * Y;
        return T.w(V, this);
      }, P.subtract = function(w, $) {
        return this.add(-1 * w, $);
      }, P.format = function(w) {
        var $ = this, v = this.$locale();
        if (!this.isValid())
          return v.invalidDate || p;
        var S = w || "YYYY-MM-DDTHH:mm:ssZ", D = T.z(this), I = this.$H, Y = this.$m, V = this.$M, q = v.weekdays, mt = v.months, ft = function(tt, ht, me, Zt) {
          return tt && (tt[ht] || tt($, S)) || me[ht].slice(0, Zt);
        }, zt = function(tt) {
          return T.s(I % 12 || 12, tt, "0");
        }, Nt = v.meridiem || function(tt, ht, me) {
          var Zt = tt < 12 ? "AM" : "PM";
          return me ? Zt.toLowerCase() : Zt;
        }, Dt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: V + 1, MM: T.s(V + 1, 2, "0"), MMM: ft(v.monthsShort, V, mt, 3), MMMM: ft(mt, V), D: this.$D, DD: T.s(this.$D, 2, "0"), d: String(this.$W), dd: ft(v.weekdaysMin, this.$W, q, 2), ddd: ft(v.weekdaysShort, this.$W, q, 3), dddd: q[this.$W], H: String(I), HH: T.s(I, 2, "0"), h: zt(1), hh: zt(2), a: Nt(I, Y, !0), A: Nt(I, Y, !1), m: String(Y), mm: T.s(Y, 2, "0"), s: String(this.$s), ss: T.s(this.$s, 2, "0"), SSS: T.s(this.$ms, 3, "0"), Z: D };
        return S.replace(O, function(tt, ht) {
          return ht || Dt[tt] || D.replace(":", "");
        });
      }, P.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, P.diff = function(w, $, v) {
        var S, D = T.p($), I = E(w), Y = (I.utcOffset() - this.utcOffset()) * n, V = this - I, q = T.m(this, I);
        return q = (S = {}, S[f] = q / 12, S[u] = q, S[d] = q / 3, S[m] = (V - Y) / 6048e5, S[l] = (V - Y) / 864e5, S[c] = V / a, S[i] = V / n, S[s] = V / r, S)[D] || V, v ? q : T.a(q);
      }, P.daysInMonth = function() {
        return this.endOf(u).$D;
      }, P.$locale = function() {
        return N[this.$L];
      }, P.locale = function(w, $) {
        if (!w)
          return this.$L;
        var v = this.clone(), S = U(w, $, !0);
        return S && (v.$L = S), v;
      }, P.clone = function() {
        return T.w(this.$d, this);
      }, P.toDate = function() {
        return new Date(this.valueOf());
      }, P.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, P.toISOString = function() {
        return this.$d.toISOString();
      }, P.toString = function() {
        return this.$d.toUTCString();
      }, x;
    }(), K = G.prototype;
    return E.prototype = K, [["$ms", o], ["$s", s], ["$m", i], ["$H", c], ["$W", l], ["$M", u], ["$y", f], ["$D", h]].forEach(function(x) {
      K[x[1]] = function(P) {
        return this.$g(P, x[0], x[1]);
      };
    }), E.extend = function(x, P) {
      return x.$i || (x(P, G, E), x.$i = !0), E;
    }, E.locale = U, E.isDayjs = j, E.unix = function(x) {
      return E(1e3 * x);
    }, E.en = N[k], E.Ls = N, E.p = {}, E;
  });
})(Qr);
var tn = Qr.exports;
const X = /* @__PURE__ */ Tt(tn);
var en = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, s, i) {
      var c = s.prototype;
      i.utc = function(p) {
        var g = { date: p, utc: !0, args: arguments };
        return new s(g);
      }, c.utc = function(p) {
        var g = i(this.toDate(), { locale: this.$L, utc: !0 });
        return p ? g.add(this.utcOffset(), r) : g;
      }, c.local = function() {
        return i(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var l = c.parse;
      c.parse = function(p) {
        p.utc && (this.$u = !0), this.$utils().u(p.$offset) || (this.$offset = p.$offset), l.call(this, p);
      };
      var m = c.init;
      c.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else
          m.call(this);
      };
      var u = c.utcOffset;
      c.utcOffset = function(p, g) {
        var O = this.$utils().u;
        if (O(p))
          return this.$u ? 0 : O(this.$offset) ? u.call(this) : this.$offset;
        if (typeof p == "string" && (p = function(k) {
          k === void 0 && (k = "");
          var N = k.match(n);
          if (!N)
            return null;
          var j = ("" + N[0]).match(a) || ["-", 0, 0], U = j[0], E = 60 * +j[1] + +j[2];
          return E === 0 ? 0 : U === "+" ? E : -E;
        }(p), p === null))
          return this;
        var A = Math.abs(p) <= 16 ? 60 * p : p, _ = this;
        if (g)
          return _.$offset = A, _.$u = p === 0, _;
        if (p !== 0) {
          var M = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (_ = this.local().add(A + M, r)).$offset = A, _.$x.$localOffset = M;
        } else
          _ = this.utc();
        return _;
      };
      var d = c.format;
      c.format = function(p) {
        var g = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return d.call(this, g);
      }, c.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var f = c.toDate;
      c.toDate = function(p) {
        return p === "s" && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this);
      };
      var h = c.diff;
      c.diff = function(p, g, O) {
        if (p && this.$u === p.$u)
          return h.call(this, p, g, O);
        var A = this.local(), _ = i(p).local();
        return h.call(A, _, g, O);
      };
    };
  });
})(en);
var ei = en.exports;
const ri = /* @__PURE__ */ Tt(ei);
var rn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(a, o, s) {
      var i, c = function(d, f, h) {
        h === void 0 && (h = {});
        var p = new Date(d), g = function(O, A) {
          A === void 0 && (A = {});
          var _ = A.timeZoneName || "short", M = O + "|" + _, k = n[M];
          return k || (k = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: O, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: _ }), n[M] = k), k;
        }(f, h);
        return g.formatToParts(p);
      }, l = function(d, f) {
        for (var h = c(d, f), p = [], g = 0; g < h.length; g += 1) {
          var O = h[g], A = O.type, _ = O.value, M = r[A];
          M >= 0 && (p[M] = parseInt(_, 10));
        }
        var k = p[3], N = k === 24 ? 0 : k, j = p[0] + "-" + p[1] + "-" + p[2] + " " + N + ":" + p[4] + ":" + p[5] + ":000", U = +d;
        return (s.utc(j).valueOf() - (U -= U % 1e3)) / 6e4;
      }, m = o.prototype;
      m.tz = function(d, f) {
        d === void 0 && (d = i);
        var h = this.utcOffset(), p = this.toDate(), g = p.toLocaleString("en-US", { timeZone: d }), O = Math.round((p - new Date(g)) / 1e3 / 60), A = s(g).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(p.getTimezoneOffset() / 15) - O, !0);
        if (f) {
          var _ = A.utcOffset();
          A = A.add(h - _, "minute");
        }
        return A.$x.$timezone = d, A;
      }, m.offsetName = function(d) {
        var f = this.$x.$timezone || s.tz.guess(), h = c(this.valueOf(), f, { timeZoneName: d }).find(function(p) {
          return p.type.toLowerCase() === "timezonename";
        });
        return h && h.value;
      };
      var u = m.startOf;
      m.startOf = function(d, f) {
        if (!this.$x || !this.$x.$timezone)
          return u.call(this, d, f);
        var h = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return u.call(h, d, f).tz(this.$x.$timezone, !0);
      }, s.tz = function(d, f, h) {
        var p = h && f, g = h || f || i, O = l(+s(), g);
        if (typeof d != "string")
          return s(d).tz(g);
        var A = function(N, j, U) {
          var E = N - 60 * j * 1e3, T = l(E, U);
          if (j === T)
            return [E, j];
          var G = l(E -= 60 * (T - j) * 1e3, U);
          return T === G ? [E, T] : [N - 60 * Math.min(T, G) * 1e3, Math.max(T, G)];
        }(s.utc(d, p).valueOf(), O, g), _ = A[0], M = A[1], k = s(_).utcOffset(M);
        return k.$x.$timezone = g, k;
      }, s.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, s.tz.setDefault = function(d) {
        i = d;
      };
    };
  });
})(rn);
var ni = rn.exports;
const oi = /* @__PURE__ */ Tt(ni);
var nn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    return function(r, n) {
      var a = n.prototype, o = a.format;
      a.format = function(s) {
        var i = this, c = this.$locale();
        if (!this.isValid())
          return o.bind(this)(s);
        var l = this.$utils(), m = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(u) {
          switch (u) {
            case "Q":
              return Math.ceil((i.$M + 1) / 3);
            case "Do":
              return c.ordinal(i.$D);
            case "gggg":
              return i.weekYear();
            case "GGGG":
              return i.isoWeekYear();
            case "wo":
              return c.ordinal(i.week(), "W");
            case "w":
            case "ww":
              return l.s(i.week(), u === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return l.s(i.isoWeek(), u === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return l.s(String(i.$H === 0 ? 24 : i.$H), u === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(i.$d.getTime() / 1e3);
            case "x":
              return i.$d.getTime();
            case "z":
              return "[" + i.offsetName() + "]";
            case "zzz":
              return "[" + i.offsetName("long") + "]";
            default:
              return u;
          }
        });
        return o.bind(this)(m);
      };
    };
  });
})(nn);
var ai = nn.exports;
const si = /* @__PURE__ */ Tt(ai);
var on = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(on);
var ii = on.exports;
const li = /* @__PURE__ */ Tt(ii);
var an = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, s, i, c) {
        var l = a(o), m = a(s), u = (c = c || "()")[0] === "(", d = c[1] === ")";
        return (u ? this.isAfter(l, i) : !this.isBefore(l, i)) && (d ? this.isBefore(m, i) : !this.isAfter(m, i)) || (u ? this.isBefore(l, i) : !this.isAfter(l, i)) && (d ? this.isAfter(m, i) : !this.isBefore(m, i));
      };
    };
  });
})(an);
var ci = an.exports;
const ui = /* @__PURE__ */ Tt(ci);
var sn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var s = a.prototype, i = s.format;
      o.en.formats = r, s.format = function(c) {
        c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
        var l = this.$locale().formats, m = function(u, d) {
          return u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(f, h, p) {
            var g = p && p.toUpperCase();
            return h || d[p] || r[p] || d[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(O, A, _) {
              return A || _.slice(1);
            });
          });
        }(c, l === void 0 ? {} : l);
        return i.call(this, m);
      };
    };
  });
})(sn);
var fi = sn.exports;
const di = /* @__PURE__ */ Tt(fi);
var pi = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n(tn);
  })(Pt, function(r) {
    function n(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var a = n(r), o = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(s) {
      return s + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(s, i, c, l) {
      return "néhány másodperc" + (l || i ? "" : "e");
    }, m: function(s, i, c, l) {
      return "egy perc" + (l || i ? "" : "e");
    }, mm: function(s, i, c, l) {
      return s + " perc" + (l || i ? "" : "e");
    }, h: function(s, i, c, l) {
      return "egy " + (l || i ? "óra" : "órája");
    }, hh: function(s, i, c, l) {
      return s + " " + (l || i ? "óra" : "órája");
    }, d: function(s, i, c, l) {
      return "egy " + (l || i ? "nap" : "napja");
    }, dd: function(s, i, c, l) {
      return s + " " + (l || i ? "nap" : "napja");
    }, M: function(s, i, c, l) {
      return "egy " + (l || i ? "hónap" : "hónapja");
    }, MM: function(s, i, c, l) {
      return s + " " + (l || i ? "hónap" : "hónapja");
    }, y: function(s, i, c, l) {
      return "egy " + (l || i ? "év" : "éve");
    }, yy: function(s, i, c, l) {
      return s + " " + (l || i ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return a.default.locale(o, null, !0), o;
  });
})(pi);
X.extend(ri);
X.extend(oi);
X.extend(si);
X.extend(di);
X.extend(li);
X.extend(ui);
const mi = () => X.tz.guess(), ve = (t = "", e = "", r = "", n = "hu") => (r = r || X.tz.guess(), X(t).isValid() ? X(t).tz(r).locale(n).format(e) : ""), Xt = (t = "", e = "", r = "hu") => {
  if (!X(t).isValid())
    return "";
  e = e || X.tz.guess();
  const a = new Intl.DateTimeFormat(hi(r), {
    timeZone: e,
    timeZoneName: "short"
  }).formatToParts(new Date(t)).find((o) => o.type === "timeZoneName");
  return a && a.value;
}, hi = (t) => Aa.get(t), ln = (t) => {
  const e = t.split(":");
  return parseInt(e[0], 10) * 60 + parseInt(e[1], 10);
}, gi = (t, e = "day") => X().isSameOrBefore(X(t), e), Yi = (t, e, r) => X(t).isBetween(e, X(r)), Ui = (t, e, r = "month") => X(t).isSame(e, r), yi = ["onClick"], Wi = {
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
    const r = t, { t: n } = Wt(), a = It("timezone-selector"), o = Z(() => Xt(/* @__PURE__ */ new Date(), null, r.locale)), s = mi(), i = Z(() => Array.from($a.values()).map((l) => ({
      ...l,
      isActive: Xt(/* @__PURE__ */ new Date(), r.currentZone, r.locale) === Xt(/* @__PURE__ */ new Date(), l.timezone, r.locale),
      zoneOffsetName: Xt(/* @__PURE__ */ new Date(), l.timezone, r.locale)
    }))), c = (l) => e("change", l);
    return (l, m) => (L(), z("div", {
      class: rt(b(a))
    }, [
      $t(b(ya), {
        path: "common.selectTimezone",
        tag: "span"
      }, {
        timezone: lt(() => [
          R("a", {
            href: "#",
            onClick: m[0] || (m[0] = Ht((u) => c(b(s)), ["prevent"]))
          }, Q(o.value), 1)
        ]),
        _: 1
      }),
      (L(!0), z(Ot, null, Bt(i.value, (u) => (L(), z("a", {
        key: u.countryLabelKey,
        href: "#",
        class: rt({ "is-active": u.isActive }),
        onClick: Ht((d) => c(u.timezone), ["prevent"])
      }, Q(b(n)(`common.${u.countryLabelKey}`)) + " (" + Q(u.zoneOffsetName) + ") ", 11, yi))), 128))
    ], 2));
  }
}, vi = (t, e = "", r = {}) => {
  const n = H(""), { t: a } = Wt();
  if (e)
    try {
      const i = bi(b(t), e);
      t = ra(i, b(t));
    } catch (i) {
      n.value = i;
    }
  const o = (i) => ({
    ...i,
    ...i.label && { label: a(i.label ?? "", b(r)) },
    ...i.tooltip && { tooltip: a(i.tooltip ?? "") }
  });
  return {
    columns: Z(() => _t(o, b(t))),
    error: n
  };
}, bi = (t, e = "") => {
  const r = _t(ee, Yt(",", e)), n = xt(t);
  if (r[0] === "")
    return resolve([]);
  const a = r.findIndex((o) => !n.includes(o));
  if (a > -1)
    throw r[a];
  return r;
};
class wi extends Error {
  constructor(e, r = {}) {
    const { key: n, cause: a } = r;
    super(e), this.name = "WidgetError", this.key = n, this.cause = a;
  }
}
const lr = {
  message: "Undefined Column name Message",
  options: {
    key: "undefined-column",
    cause: {}
  }
}, Ki = {
  message: "Invalid season name",
  options: {
    key: "invalid-season-name",
    cause: {}
  }
}, Pi = { class: "is-portrait-image" }, Oi = ["href"], Ai = ["href"], qi = {
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
    const r = t, { onError: n } = gs(), a = Z(() => r.columns), { columns: o, error: s } = vi(a, r.hideColumns);
    s.value && n(
      new wi(lr.message, {
        ...lr.options,
        cause: { column: s.value }
      })
    );
    const i = (c) => e("sort", c);
    return (c, l) => (L(), gt(ti, null, {
      default: lt(({ el: m }) => [
        $t(ss, {
          columns: b(o),
          sort: r.sort,
          rows: r.rows,
          "is-loading": t.isLoading,
          "append-to": m,
          onSort: i
        }, vn({
          "cell-index": lt(({ row: u }) => [
            R("span", {
              class: rt(u.indexClass)
            }, Q(u.index), 3)
          ]),
          "cell-playerPortrait": lt(({ row: u }) => [
            R("div", Pi, [
              (L(), gt(ir, {
                key: u.id || u.playerId,
                src: u.playerPortrait,
                "default-src": b(wa)
              }, null, 8, ["src", "default-src"]))
            ])
          ]),
          "cell-teamLogo": lt(({ row: u }) => [
            (L(), gt(ir, {
              class: "is-logo-image",
              key: u.teamId || u.id,
              src: u.teamLogo
            }, null, 8, ["src"]))
          ]),
          loading: lt(() => [
            $t(Es)
          ]),
          _: 2
        }, [
          t.isTeamLinked ? {
            name: "cell-teamName",
            fn: lt(({ row: u }) => [
              R("a", {
                href: t.externalTeamResolver(u.teamName),
                target: "_blank"
              }, Q(u.teamName), 9, Oi)
            ]),
            key: "0"
          } : void 0,
          t.isPlayerLinked ? {
            name: "cell-name",
            fn: lt(({ row: u }) => [
              R("a", {
                href: t.externalPlayerResolver(u.id),
                target: "_blank"
              }, Q(u.name), 9, Ai)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["columns", "sort", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, $i = {};
function xi(t, e) {
  return L(), z("div", null, " Test-8 ");
}
const Zi = /* @__PURE__ */ Jr($i, [["render", xi]]), _i = async (t, e, r) => {
  const n = `${va}${b(t)}?${Si(r)}`;
  return new Promise((a, o) => {
    fetch(n, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": Ti(e)
      }
    }).then((s) => s.json()).then((s) => {
      if (s.error)
        return o(s);
      a(s.data);
    }).catch((s) => {
      o(s);
    });
  });
}, Si = (t) => Object.keys(t).map((e) => e + "=" + t[e]).join("&"), Ti = (t) => {
  var e;
  return t || ((e = window.__MJSZ_VBR_WIDGET__) != null && e.apiKey ? window.__MJSZ_VBR_WIDGET__.apiKey : {}.NODE_ENV !== "production" ? {}.VITE_VBR_API_KEY : "");
}, Xi = (t = {}) => {
  const { initial: e = 1, items: r = [], limit: n, auto: a = !1 } = t, o = H(e), s = (l) => gi(l, "day");
  return An(r, () => {
    if (!a)
      return;
    const l = Go(sa(s, "gameDate"))(b(r));
    o.value = l === -1 ? 1 : Math.floor(l / n) + 1;
  }), {
    page: o,
    change: (l) => {
      o.value = l;
    }
  };
}, Ji = ({ options: t = {}, transform: e = (n) => n, onError: r = bt }) => {
  const { path: n, apiKey: a, params: o } = t, {
    state: s,
    error: i,
    isLoading: c,
    execute: l
  } = Or(() => _i(n, a, b(o)).then((m) => e(m)), [], {
    immediate: !1,
    resetOnExecute: !1,
    onError: r
  });
  return {
    state: s,
    error: i,
    isLoading: c,
    execute: l
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
function cr(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n, a, o = r.call(t), s = [];
  try {
    for (; (e === void 0 || e-- > 0) && !(n = o.next()).done; )
      s.push(n.value);
  } catch (i) {
    a = { error: i };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
var ur;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(ur || (ur = {}));
var Di = { type: "xstate.init" };
function be(t) {
  return t === void 0 ? [] : [].concat(t);
}
function fr(t, e) {
  return typeof (t = typeof t == "string" && e && e[t] ? e[t] : t) == "string" ? { type: t } : typeof t == "function" ? { type: t.name, exec: t } : t;
}
function Se(t) {
  return function(e) {
    return t === e;
  };
}
function Mi(t) {
  return typeof t == "string" ? { type: t } : t;
}
function dr(t, e) {
  return { value: t, context: e, actions: [], changed: !1, matches: Se(t) };
}
function pr(t, e, r) {
  var n = e, a = !1;
  return [t.filter(function(o) {
    if (o.type === "xstate.assign") {
      a = !0;
      var s = Object.assign({}, n);
      return typeof o.assignment == "function" ? s = o.assignment(n, r) : Object.keys(o.assignment).forEach(function(i) {
        s[i] = typeof o.assignment[i] == "function" ? o.assignment[i](n, r) : o.assignment[i];
      }), n = s, !1;
    }
    return !0;
  }), n, a];
}
function ki(t, e) {
  e === void 0 && (e = {});
  var r = cr(pr(be(t.states[t.initial].entry).map(function(s) {
    return fr(s, e.actions);
  }), t.context, Di), 2), n = r[0], a = r[1], o = { config: t, _options: e, initialState: { value: t.initial, actions: n, context: a, matches: Se(t.initial) }, transition: function(s, i) {
    var c, l, m = typeof s == "string" ? { value: s, context: t.context } : s, u = m.value, d = m.context, f = Mi(i), h = t.states[u];
    if (h.on) {
      var p = be(h.on[f.type]);
      try {
        for (var g = function(v) {
          var S = typeof Symbol == "function" && Symbol.iterator, D = S && v[S], I = 0;
          if (D)
            return D.call(v);
          if (v && typeof v.length == "number")
            return { next: function() {
              return v && I >= v.length && (v = void 0), { value: v && v[I++], done: !v };
            } };
          throw new TypeError(S ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }(p), O = g.next(); !O.done; O = g.next()) {
          var A = O.value;
          if (A === void 0)
            return dr(u, d);
          var _ = typeof A == "string" ? { target: A } : A, M = _.target, k = _.actions, N = k === void 0 ? [] : k, j = _.cond, U = j === void 0 ? function() {
            return !0;
          } : j, E = M === void 0, T = M ?? u, G = t.states[T];
          if (U(d, f)) {
            var K = cr(pr((E ? be(N) : [].concat(h.exit, N, G.entry).filter(function(v) {
              return v;
            })).map(function(v) {
              return fr(v, o._options.actions);
            }), d, f), 3), x = K[0], P = K[1], w = K[2], $ = M ?? u;
            return { value: $, context: P, actions: x, changed: M !== u || x.length > 0 || w, matches: Se($) };
          }
        }
      } catch (v) {
        c = { error: v };
      } finally {
        try {
          O && !O.done && (l = g.return) && l.call(g);
        } finally {
          if (c)
            throw c.error;
        }
      }
    }
    return dr(u, d);
  } };
  return o;
}
const Li = ki({
  id: "sort",
  initial: yt,
  states: {
    [yt]: {
      on: {
        DIRECTION1: y,
        DIRECTION2: C
      }
    },
    [y]: {
      on: {
        DIRECTION1: C,
        DIRECTION2: yt
      }
    },
    [C]: {
      on: {
        DIRECTION1: yt,
        DIRECTION2: y
      }
    }
  }
}), Ei = (t, e) => {
  const r = e === C ? "DIRECTION2" : "DIRECTION1";
  return Li.transition(t, r).value;
};
function Qi(t = {}) {
  const { sortTarget: e = null, orders: r = [] } = t, n = hr({ sortTarget: e, orders: r });
  return {
    sort: n,
    change: ({ target: o, orders: s }) => {
      if (n.sortTarget !== o) {
        n.sortTarget = o, n.orders = s;
        return;
      }
      const i = s.map((c, l) => ({
        ...c,
        direction: Ei(n.orders[l].direction, c.direction)
      }));
      n.sortTarget = o, n.orders = i;
    }
  };
}
function tl(t = !1, e = bt, r = bt) {
  if (!b(t))
    return;
  const n = En();
  dt(n, (a) => {
    if (a === "visible")
      return e();
    r();
  });
}
const el = (t = []) => ({
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
  filter(e, r = [], n = !1) {
    if (e) {
      const a = r.map(
        (s) => n ? oa(s, e) : zr(Lt(s), ua, Ho(e))
      ), o = Sr(go([...a]), this.result);
      this.isFiltered = !0, this.filteredRowsLength = o.length, this.result = o;
    }
    return this;
  },
  sorted(e) {
    if (!e.sortTarget)
      return this;
    if (e.orders[0].direction === yt)
      return this;
    const r = Fo(ue(C), Ze(Ir), Ze(Lo));
    return this.result = Gr(e.orders.map((n) => Nr(r(n.direction), Lt)(n.target)))(this.result), this;
  },
  addIndex(e = null) {
    return this.result.reduce((r, n, a) => {
      const o = r[r.length - 1] || [], s = e && o[e] === n[e];
      return n.index = s ? o.index : a + 1, n.indexClass = s ? "is-duplicated" : null, r.push(n), r;
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
    const n = (e - 1) * r, a = n + r;
    return this.result = this.result.slice(n, a), this;
  },
  playerName() {
    return this.result = this.result.map((e) => ({
      ...e,
      name: `${e.lastName} ${e.firstName}`
    })), this;
  },
  schedule(e = "", r = "hu") {
    return this.result = this.result.map((n) => ({
      ...n,
      gameResult: `${n.homeTeamScore}-${n.awayTeamScore}`,
      gameDateDate: ve(n.gameDate, "L dddd", e, r),
      gameDateTime: ve(n.gameDate, "HH:mm", e, r)
    })), this;
  },
  gameDateFilter(e) {
    return e === null ? this : (this.result = this.result.filter((r) => new Date(r.gameDate).getMonth() == e), this);
  },
  convertTimes(e = []) {
    return this.result = this.result.map((r) => (e.map((n) => r[n] ? r[`${n}Sec`] = ln(r[n]) : r), r)), this;
  },
  groupByDays() {
    return this.result = jo((e) => ve(e.gameDate, "YYYY-MM-DD"))(this.result), this;
  }
}), rl = (t, ...e) => _t(Nr(...e))(t), nl = (t) => ({
  ...t,
  ...t.lastName && { name: `${t.lastName} ${t.firstName}` }
}), ol = (t = []) => (e) => (t.map((r) => e[r] ? e[`${r}Sec`] = ln(e[r]) : e), e), Ii = (t, e) => new Date(t.gameDate).getTime() - new Date(e.gameDate).getTime(), al = Gr([Ii, Ir(Lt("id"))]), sl = (t, e) => {
  const r = Ie("gameResolver") || t;
  return typeof r == "function" ? r(e) : r ? r + e : ba + e;
}, il = (t, e) => {
  const r = Ie("teamResolver") || t;
  return typeof r == "function" ? r(e) : encodeURI(r ? r + e : Oa + e);
}, ll = (t, e) => {
  const r = Ie("playerResolver") || t;
  return typeof r == "function" ? r(e) : encodeURI(r ? r + e : Pa + e);
}, Ie = (t = "") => {
  var e;
  return (e = window == null ? void 0 : window.__MJSZ_VBR_WIDGET__) == null ? void 0 : e[t];
}, cl = {
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
}, zi = {
  externalTeamLink: {
    type: [String, Function],
    default: ""
  },
  isTeamLinked: {
    type: Boolean,
    default: !1
  }
}, ul = {
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
  ...zi
}, fl = {
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
}, dl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
    sortOrders: [{ target: "p1", direction: C }]
  },
  p0: {
    label: "table.losses.short",
    tooltip: "table.losses.tooltip",
    sortOrders: [{ target: "p0", direction: C }]
  },
  plus: {
    label: "table.goalFor.short",
    tooltip: "table.goalFor.tooltip",
    sortOrders: [{ target: "plus", direction: y }]
  },
  minus: {
    label: "table.goalAgainst.short",
    tooltip: "table.goalAgainst.tooltip",
    sortOrders: [{ target: "minus", direction: C }]
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
}, pl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
    sortOrders: [{ target: "p0", direction: C }]
  },
  plus: {
    label: "table.goalFor.short",
    tooltip: "table.goalFor.tooltip",
    sortOrders: [{ target: "plus", direction: y }]
  },
  minus: {
    label: "table.goalAgainst.short",
    tooltip: "table.goalAgainst.tooltip",
    sortOrders: [{ target: "minus", direction: C }]
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
}, ml = {
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
    sortOrders: [{ target: "name", direction: C }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: C }]
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
}, hl = {
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
    sortOrders: [{ target: "name", direction: C }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: C }]
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
}, gl = {
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
    sortOrders: [{ target: "name", direction: C }]
  },
  teamLogo: {
    label: "",
    class: "is-has-image"
  },
  teamName: {
    label: "table.team.short",
    tooltip: "table.team.tooltip",
    class: "is-text-left is-w-auto",
    sortOrders: [{ target: "teamName", direction: C }]
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
}, yl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
}, vl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
}, bl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
}, wl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
}, Pl = {
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
    sortOrders: [{ target: "teamName", direction: C }]
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
    sortOrders: [{ target: "minus", direction: C }]
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
    sortOrders: [{ target: "GAGP", direction: C }]
  },
  Shots: {
    label: "table.sog.short",
    tooltip: "table.sog.tooltip",
    sortOrders: [{ target: "Shots", direction: y }]
  },
  SA: {
    label: "table.sa.short",
    tooltip: "table.sa.tooltip",
    sortOrders: [{ target: "SA", direction: C }]
  },
  ShotsGP: {
    label: "table.sogp.short",
    tooltip: "table.sogp.tooltip",
    sortOrders: [{ target: "ShotsGP", direction: y }]
  },
  SAGP: {
    label: "table.sagp.short",
    tooltip: "table.sagp.tooltip",
    sortOrders: [{ target: "SAGP", direction: C }]
  },
  GFShots: {
    label: "table.sogPercent.short",
    tooltip: "table.sogPercent.tooltip",
    sortOrders: [{ target: "GFShots", direction: y }]
  }
}, Ol = ({ modules: t = [], apiKey: e, gameResolver: r, teamResolver: n, playerResolver: a }) => {
  if (window.__MJSZ_VBR_WIDGET__ = { apiKey: e, gameResolver: r, teamResolver: n, playerResolver: a }, t.length === 0)
    throw new Error("At least one module must be set");
  t.forEach((o) => {
    o == null || o();
  });
};
export {
  $a as AVAILABLE_TIMEZONES_BY_COUNTRY,
  Ci as BaseSelect,
  ml as COLUMNS_FIELD_PLAYERS,
  hl as COLUMNS_FIELD_PLAYERS_PENALTY,
  gl as COLUMNS_GOALIES,
  fl as COLUMNS_SCHEDULE,
  Pl as COLUMNS_SCORING_EFFICIENCY,
  pl as COLUMNS_STANDINGS_P_2,
  dl as COLUMNS_STANDINGS_P_3,
  vl as COLUMNS_TEAMS_FAIRPLAY,
  bl as COLUMNS_TEAMS_PENALTY_KILLING,
  wl as COLUMNS_TEAMS_POWERPLAY,
  yl as COLUMNS_TEAM_ATTENDANCE,
  ba as DEFAULT_EXTERNAL_BASE_URL,
  Pa as DEFAULT_EXTERNAL_PLAYER_URL,
  Oa as DEFAULT_EXTERNAL_TEAM_URL,
  wa as DEFAULT_PORTRAIT_IMAGE_URL,
  ss as DataTable,
  Bi as ErrorNotice,
  Fi as ErrorProvider,
  ts as FloatingPanel,
  Vi as I18NProvider,
  ir as Image,
  Ki as InvalidSeasonName,
  xa as LAZY_LOADING_STATE_DELAY,
  Aa as LOCALE_FOR_LANG,
  Es as LoadingIndicator,
  Hi as Paginator,
  ji as REFRESH_DELAY,
  ti as ResponsiveTable,
  C as SORT_STATE_ASCEND,
  y as SORT_STATE_DESCEND,
  yt as SORT_STATE_ORIGINAL,
  qi as StatisticsTable,
  Zi as Test,
  Wi as TimezoneSelector,
  lr as UndefinedColumn,
  va as VBR_API_BASE_URL,
  Gi as VBR_API_GOALIE_PATH,
  Ri as VBR_API_GOALIE_UNDER_PATH,
  wi as WidgetError,
  Za as appendTo,
  cl as baseProps,
  el as convert,
  ln as convertMinToSec,
  ol as convertTimes,
  Ol as createConfig,
  ma as createI18n,
  sl as externalGameLinkResolver,
  ll as externalPlayerLinkResolver,
  il as externalTeamLinkResolver,
  _i as fetchVBRData,
  ve as format,
  mi as getLocalTimezone,
  ya as i18n,
  Yi as isBetween,
  Ui as isSame,
  gi as isSameOrBefore,
  Xt as offsetName,
  nl as playerName,
  ul as playerStatsProps,
  rl as rawConvert,
  al as sortGames,
  zi as teamStatsProps,
  ms as toKebabCase,
  vi as useColumns,
  gs as useError,
  hs as useErrorProvider,
  Wt as useI18n,
  jn as useLazyLoadingState,
  It as useMainClass,
  Xi as usePage,
  Ji as useServices,
  Qi as useSort,
  tl as useVisibilityChange,
  bi as validateColumnsName
};
