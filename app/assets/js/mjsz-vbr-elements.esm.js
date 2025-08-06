/**
 * name: @mjsz-vbr-elements/elements
 * version: v2.1.0 - 07/06/2023, 12:28:09
 * (c) 2023
 * description: Data visualization for MJSZ VBR
 * author: Ákos Stegner <akos.stegner@gmail.com>
 */
import { getCurrentScope as Bn, onScopeDispose as Fn, ref as F, readonly as Vn, watch as pt, nextTick as Yn, unref as c, isRef as Gr, shallowRef as cr, computed as z, reactive as Br, defineComponent as Fr, h as Hn, provide as Vr, inject as Yr, openBlock as $, createElementBlock as P, createElementVNode as D, Fragment as Rt, renderSlot as dt, normalizeStyle as ur, createVNode as M, Transition as Un, withCtx as N, normalizeClass as rt, createTextVNode as Ct, toDisplayString as Z, createCommentVNode as G, toRefs as Hr, renderList as ae, createBlock as K, withKeys as dr, withModifiers as Wt, onErrorCaptured as Wn, createSlots as Kn, defineCustomElement as mt } from "vue";
import { baseProps as gt, teamStatsProps as Xt, COLUMNS_STANDINGS_P_3 as qn, COLUMNS_STANDINGS_P_2 as Zn, DEFAULT_EXTERNAL_BASE_URL as Xn, COLUMNS_SCHEDULE as Jn, REFRESH_DELAY as Qn, playerStatsProps as Xe, COLUMNS_FIELD_PLAYERS as to, SORT_STATE_DESCEND as Dt, COLUMNS_FIELD_PLAYERS_PENALTY as eo, VBR_API_GOALIE_UNDER_PATH as ro, VBR_API_GOALIE_PATH as no, COLUMNS_GOALIES as oo, COLUMNS_TEAM_ATTENDANCE as ao, COLUMNS_TEAMS_FAIRPLAY as io, COLUMNS_TEAMS_PENALTY_KILLING as so, COLUMNS_TEAMS_POWERPLAY as lo, COLUMNS_SCORING_EFFICIENCY as co } from "@mjsz-vbr-elements/core";
function Je(e) {
  return Bn() ? (Fn(e), !0) : !1;
}
function ut(e) {
  return typeof e == "function" ? e() : c(e);
}
const ke = typeof window < "u", ce = () => {
}, uo = /* @__PURE__ */ fo();
function fo() {
  var e;
  return ke && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Ve(e, t = !1, r = "Timeout") {
  return new Promise((n, a) => {
    setTimeout(t ? () => a(r) : n, e);
  });
}
function Ye(e, t = !1) {
  function r(u, { flush: p = "sync", deep: f = !1, timeout: g, throwOnTimeout: h } = {}) {
    let v = null;
    const y = [new Promise((T) => {
      v = pt(
        e,
        (k) => {
          u(k) !== t && (v == null || v(), T(k));
        },
        {
          flush: p,
          deep: f,
          immediate: !0
        }
      );
    })];
    return g != null && y.push(
      Ve(g, h).then(() => ut(e)).finally(() => v == null ? void 0 : v())
    ), Promise.race(y);
  }
  function n(u, p) {
    if (!Gr(u))
      return r((k) => k === u, p);
    const { flush: f = "sync", deep: g = !1, timeout: h, throwOnTimeout: v } = p ?? {};
    let x = null;
    const T = [new Promise((k) => {
      x = pt(
        [e, u],
        ([j, R]) => {
          t !== (j === R) && (x == null || x(), k(j));
        },
        {
          flush: f,
          deep: g,
          immediate: !0
        }
      );
    })];
    return h != null && T.push(
      Ve(h, v).then(() => ut(e)).finally(() => (x == null || x(), ut(e)))
    ), Promise.race(T);
  }
  function a(u) {
    return r((p) => !!p, u);
  }
  function o(u) {
    return n(null, u);
  }
  function i(u) {
    return n(void 0, u);
  }
  function s(u) {
    return r(Number.isNaN, u);
  }
  function d(u, p) {
    return r((f) => {
      const g = Array.from(f);
      return g.includes(u) || g.includes(ut(u));
    }, p);
  }
  function l(u) {
    return m(1, u);
  }
  function m(u = 1, p) {
    let f = -1;
    return r(() => (f += 1, f >= u), p);
  }
  return Array.isArray(ut(e)) ? {
    toMatch: r,
    toContains: d,
    changed: l,
    changedTimes: m,
    get not() {
      return Ye(e, !t);
    }
  } : {
    toMatch: r,
    toBe: n,
    toBeTruthy: a,
    toBeNull: o,
    toBeNaN: s,
    toBeUndefined: i,
    changed: l,
    changedTimes: m,
    get not() {
      return Ye(e, !t);
    }
  };
}
function po(e) {
  return Ye(e);
}
function Ur(e, t, r = {}) {
  const {
    immediate: n = !0
  } = r, a = F(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function s() {
    a.value = !1, i();
  }
  function d(...l) {
    i(), a.value = !0, o = setTimeout(() => {
      a.value = !1, o = null, e(...l);
    }, ut(t));
  }
  return n && (a.value = !0, ke && d()), Je(s), {
    isPending: Vn(a),
    start: d,
    stop: s
  };
}
function mo(e, t, r) {
  const n = pt(e, (...a) => (Yn(() => n()), t(...a)), r);
}
function go(e, t, r) {
  return pt(
    e,
    (n, a, o) => {
      n && t(n, a, o);
    },
    r
  );
}
function ne(e) {
  var t;
  const r = ut(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const Wr = ke ? window : void 0, ho = ke ? window.document : void 0;
function ve(...e) {
  let t, r, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, n, a] = e, t = Wr) : [t, r, n, a] = e, !t)
    return ce;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((m) => m()), o.length = 0;
  }, s = (m, u, p, f) => (m.addEventListener(u, p, f), () => m.removeEventListener(u, p, f)), d = pt(
    () => [ne(t), ut(a)],
    ([m, u]) => {
      i(), m && o.push(
        ...r.flatMap((p) => n.map((f) => s(m, p, f, u)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    d(), i();
  };
  return Je(l), l;
}
let fr = !1;
function vo(e, t, r = {}) {
  const { window: n = Wr, ignore: a = [], capture: o = !0, detectIframe: i = !1 } = r;
  if (!n)
    return;
  uo && !fr && (fr = !0, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", ce)));
  let s = !0;
  const d = (p) => a.some((f) => {
    if (typeof f == "string")
      return Array.from(n.document.querySelectorAll(f)).some((g) => g === p.target || p.composedPath().includes(g));
    {
      const g = ne(f);
      return g && (p.target === g || p.composedPath().includes(g));
    }
  }), m = [
    ve(n, "click", (p) => {
      const f = ne(e);
      if (!(!f || f === p.target || p.composedPath().includes(f))) {
        if (p.detail === 0 && (s = !d(p)), !s) {
          s = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    ve(n, "pointerdown", (p) => {
      const f = ne(e);
      f && (s = !p.composedPath().includes(f) && !d(p));
    }, { passive: !0 }),
    i && ve(n, "blur", (p) => {
      var f;
      const g = ne(e);
      ((f = n.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(g != null && g.contains(n.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => m.forEach((p) => p());
}
var yo = Object.defineProperty, bo = Object.defineProperties, wo = Object.getOwnPropertyDescriptors, pr = Object.getOwnPropertySymbols, xo = Object.prototype.hasOwnProperty, _o = Object.prototype.propertyIsEnumerable, mr = (e, t, r) => t in e ? yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $o = (e, t) => {
  for (var r in t || (t = {}))
    xo.call(t, r) && mr(e, r, t[r]);
  if (pr)
    for (var r of pr(t))
      _o.call(t, r) && mr(e, r, t[r]);
  return e;
}, To = (e, t) => bo(e, wo(t));
function lt(e, t, r) {
  const {
    immediate: n = !0,
    delay: a = 0,
    onError: o = ce,
    onSuccess: i = ce,
    resetOnExecute: s = !0,
    shallow: d = !0,
    throwError: l
  } = r ?? {}, m = d ? cr(t) : F(t), u = F(!1), p = F(!1), f = cr(void 0);
  async function g(x = 0, ...y) {
    s && (m.value = t), f.value = void 0, u.value = !1, p.value = !0, x > 0 && await Ve(x);
    const T = typeof e == "function" ? e(...y) : e;
    try {
      const k = await T;
      m.value = k, u.value = !0, i(k);
    } catch (k) {
      if (f.value = k, o(k), l)
        throw k;
    } finally {
      p.value = !1;
    }
    return m.value;
  }
  n && g(a);
  const h = {
    state: m,
    isReady: u,
    isLoading: p,
    error: f,
    execute: g
  };
  function v() {
    return new Promise((x, y) => {
      po(p).toBe(!1).then(() => x(h)).catch(y);
    });
  }
  return To($o({}, h), {
    then(x, y) {
      return v().then(x, y);
    }
  });
}
function So({ document: e = ho } = {}) {
  if (!e)
    return F("visible");
  const t = F(e.visibilityState);
  return ve(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var ko = Object.defineProperty, gr = Object.getOwnPropertySymbols, Ao = Object.prototype.hasOwnProperty, Po = Object.prototype.propertyIsEnumerable, hr = (e, t, r) => t in e ? ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zo = (e, t) => {
  for (var r in t || (t = {}))
    Ao.call(t, r) && hr(e, r, t[r]);
  if (gr)
    for (var r of gr(t))
      Po.call(t, r) && hr(e, r, t[r]);
  return e;
};
async function Eo(e) {
  return new Promise((t, r) => {
    const n = new Image(), { src: a, srcset: o, sizes: i, class: s, loading: d, crossorigin: l } = e;
    n.src = a, o && (n.srcset = o), i && (n.sizes = i), s && (n.className = s), d && (n.loading = d), l && (n.crossOrigin = l), n.onload = () => t(n), n.onerror = r;
  });
}
function Lo(e, t = {}) {
  const r = lt(
    () => Eo(ut(e)),
    void 0,
    zo({
      resetOnExecute: !0
    }, t)
  );
  return pt(
    () => ut(e),
    () => r.execute(t.delay),
    { deep: !0 }
  ), r;
}
function Oo(e, t, r) {
  const { start: n } = Ur(o, t), a = F(!1);
  async function o() {
    a.value && (await e(), n());
  }
  function i() {
    a.value || (a.value = !0, o());
  }
  function s() {
    a.value = !1;
  }
  return r != null && r.immediate && i(), Je(s), {
    isActive: a,
    pause: s,
    resume: i
  };
}
const fe = (e) => ({}.VITE_CSS_CLASS_PREFIX || "mjsz-vbr-") + e;
function jo(e = [], t = {}) {
  const { delay: r = 0 } = t, n = F(!1), a = z(() => {
    const s = c(e);
    return Array.isArray(s) ? s.map((d) => c(d)).some(Boolean) : s;
  }), { start: o, stop: i } = Ur(() => {
    n.value = !0;
  }, r);
  return pt(
    a,
    (s) => {
      if (s)
        return o();
      i(), n.value = !1;
    },
    { immediate: !0, deep: !0 }
  ), n;
}
function Y(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function X(e) {
  return function t(r) {
    return arguments.length === 0 || Y(r) ? t : e.apply(this, arguments);
  };
}
function H(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Y(r) ? t : X(function(a) {
          return e(r, a);
        });
      default:
        return Y(r) && Y(n) ? t : Y(r) ? X(function(a) {
          return e(a, n);
        }) : Y(n) ? X(function(a) {
          return e(r, a);
        }) : e(r, n);
    }
  };
}
function Ae(e, t) {
  switch (e) {
    case 0:
      return function() {
        return t.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return t.apply(this, arguments);
      };
    case 2:
      return function(r, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function(r, n, a) {
        return t.apply(this, arguments);
      };
    case 4:
      return function(r, n, a, o) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(r, n, a, o, i) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, a, o, i, s) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, a, o, i, s, d) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, a, o, i, s, d, l) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, a, o, i, s, d, l, m) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, a, o, i, s, d, l, m, u) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Qe(e, t, r) {
  return function() {
    for (var n = [], a = 0, o = e, i = 0; i < t.length || a < arguments.length; ) {
      var s;
      i < t.length && (!Y(t[i]) || a >= arguments.length) ? s = t[i] : (s = arguments[a], a += 1), n[i] = s, Y(s) || (o -= 1), i += 1;
    }
    return o <= 0 ? r.apply(this, n) : Ae(o, Qe(e, n, r));
  };
}
var Pe = /* @__PURE__ */ H(function(t, r) {
  return t === 1 ? X(r) : Ae(t, Qe(t, [], r));
});
function St(e) {
  return function t(r, n, a) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Y(r) ? t : H(function(o, i) {
          return e(r, o, i);
        });
      case 2:
        return Y(r) && Y(n) ? t : Y(r) ? H(function(o, i) {
          return e(o, n, i);
        }) : Y(n) ? H(function(o, i) {
          return e(r, o, i);
        }) : X(function(o) {
          return e(r, n, o);
        });
      default:
        return Y(r) && Y(n) && Y(a) ? t : Y(r) && Y(n) ? H(function(o, i) {
          return e(o, i, a);
        }) : Y(r) && Y(a) ? H(function(o, i) {
          return e(o, n, i);
        }) : Y(n) && Y(a) ? H(function(o, i) {
          return e(r, o, i);
        }) : Y(r) ? X(function(o) {
          return e(o, n, a);
        }) : Y(n) ? X(function(o) {
          return e(r, o, a);
        }) : Y(a) ? X(function(o) {
          return e(r, n, o);
        }) : e(r, n, a);
    }
  };
}
const ze = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function Do(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function Ee(e, t, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!ze(n)) {
      for (var a = 0; a < e.length; ) {
        if (typeof n[e[a]] == "function")
          return n[e[a]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (Do(n)) {
        var o = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return o(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function Kr(e) {
  return e && e["@@transducer/reduced"] ? e : {
    "@@transducer/value": e,
    "@@transducer/reduced": !0
  };
}
const Kt = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(e) {
    return this.xf["@@transducer/result"](e);
  }
};
function vr(e) {
  for (var t = [], r; !(r = e.next()).done; )
    t.push(r.value);
  return t;
}
function yr(e, t, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (e(t, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function Mo(e) {
  var t = String(e).match(/^function (\w*)/);
  return t == null ? "" : t[1];
}
function ft(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Io(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
const Re = typeof Object.is == "function" ? Object.is : Io;
var br = Object.prototype.toString, qr = /* @__PURE__ */ function() {
  return br.call(arguments) === "[object Arguments]" ? function(t) {
    return br.call(t) === "[object Arguments]";
  } : function(t) {
    return ft("callee", t);
  };
}(), Co = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), wr = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], xr = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), Ro = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Bt = /* @__PURE__ */ X(typeof Object.keys == "function" && !xr ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, a = [], o = xr && qr(t);
  for (r in t)
    ft(r, t) && (!o || r !== "length") && (a[a.length] = r);
  if (Co)
    for (n = wr.length - 1; n >= 0; )
      r = wr[n], ft(r, t) && !Ro(a, r) && (a[a.length] = r), n -= 1;
  return a;
}), He = /* @__PURE__ */ X(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function _r(e, t, r, n) {
  var a = vr(e), o = vr(t);
  function i(s, d) {
    return tr(s, d, r.slice(), n.slice());
  }
  return !yr(function(s, d) {
    return !yr(i, d, s);
  }, o, a);
}
function tr(e, t, r, n) {
  if (Re(e, t))
    return !0;
  var a = He(e);
  if (a !== He(t))
    return !1;
  if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function")
    return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
  if (typeof e.equals == "function" || typeof t.equals == "function")
    return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof e.constructor == "function" && Mo(e.constructor) === "Promise")
        return e === t;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof e == typeof t && Re(e.valueOf(), t.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Re(e.valueOf(), t.valueOf()))
        return !1;
      break;
    case "Error":
      return e.name === t.name && e.message === t.message;
    case "RegExp":
      if (!(e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.sticky === t.sticky && e.unicode === t.unicode))
        return !1;
      break;
  }
  for (var o = r.length - 1; o >= 0; ) {
    if (r[o] === e)
      return n[o] === t;
    o -= 1;
  }
  switch (a) {
    case "Map":
      return e.size !== t.size ? !1 : _r(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
    case "Set":
      return e.size !== t.size ? !1 : _r(e.values(), t.values(), r.concat([e]), n.concat([t]));
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
  var i = Bt(e);
  if (i.length !== Bt(t).length)
    return !1;
  var s = r.concat([e]), d = n.concat([t]);
  for (o = i.length - 1; o >= 0; ) {
    var l = i[o];
    if (!(ft(l, t) && tr(t[l], e[l], s, d)))
      return !1;
    o -= 1;
  }
  return !0;
}
var Le = /* @__PURE__ */ H(function(t, r) {
  return tr(t, r, [], []);
});
function No(e, t, r) {
  var n, a;
  if (typeof e.indexOf == "function")
    switch (typeof t) {
      case "number":
        if (t === 0) {
          for (n = 1 / t; r < e.length; ) {
            if (a = e[r], a === 0 && 1 / a === n)
              return r;
            r += 1;
          }
          return -1;
        } else if (t !== t) {
          for (; r < e.length; ) {
            if (a = e[r], typeof a == "number" && a !== a)
              return r;
            r += 1;
          }
          return -1;
        }
        return e.indexOf(t, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return e.indexOf(t, r);
      case "object":
        if (t === null)
          return e.indexOf(t, r);
    }
  for (; r < e.length; ) {
    if (Le(e[r], t))
      return r;
    r += 1;
  }
  return -1;
}
function Zr(e, t) {
  return No(t, e, 0) >= 0;
}
function ye(e, t) {
  for (var r = 0, n = t.length, a = Array(n); r < n; )
    a[r] = e(t[r]), r += 1;
  return a;
}
function Ne(e) {
  var t = e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + t.replace(/"/g, '\\"') + '"';
}
var ee = function(t) {
  return (t < 10 ? "0" : "") + t;
}, Go = typeof Date.prototype.toISOString == "function" ? function(t) {
  return t.toISOString();
} : function(t) {
  return t.getUTCFullYear() + "-" + ee(t.getUTCMonth() + 1) + "-" + ee(t.getUTCDate()) + "T" + ee(t.getUTCHours()) + ":" + ee(t.getUTCMinutes()) + ":" + ee(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function Bo(e) {
  return function() {
    return !e.apply(this, arguments);
  };
}
function Xr(e, t, r) {
  for (var n = 0, a = r.length; n < a; )
    t = e(t, r[n]), n += 1;
  return t;
}
function Fo(e, t) {
  for (var r = 0, n = t.length, a = []; r < n; )
    e(t[r]) && (a[a.length] = t[r]), r += 1;
  return a;
}
function be(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var Vo = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = Kt.init, e.prototype["@@transducer/result"] = Kt.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(r) ? this.xf["@@transducer/step"](t, r) : t;
  }, e;
}();
function Yo(e) {
  return function(t) {
    return new Vo(e, t);
  };
}
var Jr = /* @__PURE__ */ H(
  /* @__PURE__ */ Ee(["fantasy-land/filter", "filter"], Yo, function(e, t) {
    return be(t) ? Xr(function(r, n) {
      return e(t[n]) && (r[n] = t[n]), r;
    }, {}, Bt(t)) : (
      // else
      Fo(e, t)
    );
  })
), Ho = /* @__PURE__ */ H(function(t, r) {
  return Jr(Bo(t), r);
});
function Qr(e, t) {
  var r = function(i) {
    var s = t.concat([e]);
    return Zr(i, s) ? "<Circular>" : Qr(i, s);
  }, n = function(o, i) {
    return ye(function(s) {
      return Ne(s) + ": " + r(o[s]);
    }, i.slice().sort());
  };
  switch (Object.prototype.toString.call(e)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + ye(r, e).join(", ") + "))";
    case "[object Array]":
      return "[" + ye(r, e).concat(n(e, Ho(function(o) {
        return /^\d+$/.test(o);
      }, Bt(e)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof e == "object" ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : Ne(Go(e))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(e)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof e == "object" ? "new Number(" + r(e.valueOf()) + ")" : 1 / e === -1 / 0 ? "-0" : e.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(e).sort()) + ")";
    case "[object String]":
      return typeof e == "object" ? "new String(" + r(e.valueOf()) + ")" : Ne(e);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof e.toString == "function") {
        var a = e.toString();
        if (a !== "[object Object]")
          return a;
      }
      return "{" + n(e, Bt(e)).join(", ") + "}";
  }
}
var Ue = /* @__PURE__ */ X(function(t) {
  return Qr(t, []);
}), Uo = /* @__PURE__ */ H(function(t, r) {
  if (t === r)
    return r;
  function n(d, l) {
    if (d > l != l > d)
      return l > d ? l : d;
  }
  var a = n(t, r);
  if (a !== void 0)
    return a;
  var o = n(typeof t, typeof r);
  if (o !== void 0)
    return o === typeof t ? t : r;
  var i = Ue(t), s = n(i, Ue(r));
  return s !== void 0 && s === i ? t : r;
}), Wo = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t;
  }
  return e.prototype["@@transducer/init"] = Kt.init, e.prototype["@@transducer/result"] = Kt.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.xf["@@transducer/step"](t, this.f(r));
  }, e;
}(), Ko = function(t) {
  return function(r) {
    return new Wo(t, r);
  };
}, qo = /* @__PURE__ */ H(
  /* @__PURE__ */ Ee(["fantasy-land/map", "map"], Ko, function(t, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return Pe(r.length, function() {
          return t.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return Xr(function(n, a) {
          return n[a] = t(r[a]), n;
        }, {}, Bt(r));
      default:
        return ye(t, r);
    }
  })
);
const Ft = qo, tn = Number.isInteger || function(t) {
  return t << 0 === t;
};
function Oe(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var en = /* @__PURE__ */ H(function(t, r) {
  var n = t < 0 ? r.length + t : t;
  return Oe(r) ? r.charAt(n) : r[n];
}), Zo = /* @__PURE__ */ H(function(t, r) {
  if (r != null)
    return tn(t) ? en(t, r) : r[t];
});
const qt = Zo;
var Xo = /* @__PURE__ */ H(function(t, r) {
  return Ft(qt(t), r);
}), Jo = /* @__PURE__ */ X(function(t) {
  return ze(t) ? !0 : !t || typeof t != "object" || Oe(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), $r = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Qo(e, t, r) {
  return function(a, o, i) {
    if (Jo(i))
      return e(a, o, i);
    if (i == null)
      return o;
    if (typeof i["fantasy-land/reduce"] == "function")
      return t(a, o, i, "fantasy-land/reduce");
    if (i[$r] != null)
      return r(a, o, i[$r]());
    if (typeof i.next == "function")
      return r(a, o, i);
    if (typeof i.reduce == "function")
      return t(a, o, i, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function ta(e, t, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var ea = /* @__PURE__ */ H(function(t, r) {
  return Ae(t.length, function() {
    return t.apply(r, arguments);
  });
});
function ra(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function na(e, t, r, n) {
  return e["@@transducer/result"](r[n](ea(e["@@transducer/step"], e), t));
}
var rn = /* @__PURE__ */ Qo(ta, na, ra), oa = /* @__PURE__ */ function() {
  function e(t) {
    this.f = t;
  }
  return e.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, e.prototype["@@transducer/result"] = function(t) {
    return t;
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(t, r);
  }, e;
}();
function nn(e) {
  return new oa(e);
}
var aa = /* @__PURE__ */ St(function(e, t, r) {
  return rn(typeof e == "function" ? nn(e) : e, t, r);
});
const on = aa;
var ia = /* @__PURE__ */ X(function(t) {
  return function() {
    return t;
  };
});
const Tr = ia;
var sa = /* @__PURE__ */ X(function(t) {
  return Pe(on(Uo, 0, Xo("length", t)), function() {
    for (var r = 0, n = t.length; r < n; ) {
      if (t[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const la = sa;
var ca = /* @__PURE__ */ St(function(t, r, n) {
  var a = t(r), o = t(n);
  return a < o ? -1 : a > o ? 1 : 0;
});
const an = ca;
function ua(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Function]" || t === "[object AsyncFunction]" || t === "[object GeneratorFunction]" || t === "[object AsyncGeneratorFunction]";
}
function da(e) {
  return new RegExp(e.source, e.flags ? e.flags : (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.dotAll ? "s" : ""));
}
function er(e, t, r) {
  if (r || (r = new pa()), fa(e))
    return e;
  var n = function(o) {
    var i = r.get(e);
    if (i)
      return i;
    r.set(e, o);
    for (var s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (o[s] = t ? er(e[s], !0, r) : e[s]);
    return o;
  };
  switch (He(e)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(e)));
    case "Array":
      return n([]);
    case "Date":
      return new Date(e.valueOf());
    case "RegExp":
      return da(e);
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
      return e.slice();
    default:
      return e;
  }
}
function fa(e) {
  var t = typeof e;
  return e == null || t != "object" && t != "function";
}
var pa = /* @__PURE__ */ function() {
  function e() {
    this.map = {}, this.length = 0;
  }
  return e.prototype.set = function(t, r) {
    const n = this.hash(t);
    let a = this.map[n];
    a || (this.map[n] = a = []), a.push([t, r]), this.length += 1;
  }, e.prototype.hash = function(t) {
    let r = [];
    for (var n in t)
      r.push(Object.prototype.toString.call(t[n]));
    return r.join();
  }, e.prototype.get = function(t) {
    if (this.length <= 180) {
      for (const a in this.map) {
        const o = this.map[a];
        for (let i = 0; i < o.length; i += 1) {
          const s = o[i];
          if (s[0] === t)
            return s[1];
        }
      }
      return;
    }
    const r = this.hash(t), n = this.map[r];
    if (n)
      for (let a = 0; a < n.length; a += 1) {
        const o = n[a];
        if (o[0] === t)
          return o[1];
      }
  }, e;
}();
function ma(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function rr(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return ze(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var ga = /* @__PURE__ */ St(
  /* @__PURE__ */ rr("slice", function(t, r, n) {
    return Array.prototype.slice.call(n, t, r);
  })
), ha = /* @__PURE__ */ X(
  /* @__PURE__ */ rr(
    "tail",
    /* @__PURE__ */ ga(1, 1 / 0)
  )
);
const va = ha;
function sn() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return Ae(arguments[0].length, on(ma, arguments[0], va(arguments)));
}
var ya = /* @__PURE__ */ X(function(t) {
  return Oe(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse();
});
const ba = ya;
function ln() {
  if (arguments.length === 0)
    throw new Error("compose requires at least one argument");
  return sn.apply(this, ba(arguments));
}
var wa = /* @__PURE__ */ function() {
  function e(t, r, n, a) {
    this.valueFn = t, this.valueAcc = r, this.keyFn = n, this.xf = a, this.inputs = {};
  }
  return e.prototype["@@transducer/init"] = Kt.init, e.prototype["@@transducer/result"] = function(t) {
    var r;
    for (r in this.inputs)
      if (ft(r, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[r]), t["@@transducer/reduced"])) {
        t = t["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, er(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), t;
  }, e;
}();
function xa(e, t, r) {
  return function(n) {
    return new wa(e, t, r, n);
  };
}
var _a = /* @__PURE__ */ Qe(
  4,
  [],
  /* @__PURE__ */ Ee([], xa, function(t, r, n, a) {
    var o = nn(function(i, s) {
      var d = n(s), l = t(ft(d, i) ? i[d] : er(r, !1), s);
      return l && l["@@transducer/reduced"] ? Kr(i) : (i[d] = l, i);
    });
    return rn(o, {}, a);
  })
), $a = /* @__PURE__ */ St(function(t, r, n) {
  var a = t(r), o = t(n);
  return a > o ? -1 : a < o ? 1 : 0;
});
const Ta = $a;
function Sa(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object Uint8ClampedArray]" || t === "[object Int8Array]" || t === "[object Uint8Array]" || t === "[object Int16Array]" || t === "[object Uint16Array]" || t === "[object Int32Array]" || t === "[object Uint32Array]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object BigInt64Array]" || t === "[object BigUint64Array]";
}
var ka = /* @__PURE__ */ X(function(t) {
  return t != null && typeof t["fantasy-land/empty"] == "function" ? t["fantasy-land/empty"]() : t != null && t.constructor != null && typeof t.constructor["fantasy-land/empty"] == "function" ? t.constructor["fantasy-land/empty"]() : t != null && typeof t.empty == "function" ? t.empty() : t != null && t.constructor != null && typeof t.constructor.empty == "function" ? t.constructor.empty() : ze(t) ? [] : Oe(t) ? "" : be(t) ? {} : qr(t) ? function() {
    return arguments;
  }() : Sa(t) ? t.constructor.from("") : void 0;
}), Aa = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t, this.idx = -1, this.found = !1;
  }
  return e.prototype["@@transducer/init"] = Kt.init, e.prototype["@@transducer/result"] = function(t) {
    return this.found || (t = this.xf["@@transducer/step"](t, -1)), this.xf["@@transducer/result"](t);
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.idx += 1, this.f(r) && (this.found = !0, t = Kr(this.xf["@@transducer/step"](t, this.idx))), t;
  }, e;
}();
function Pa(e) {
  return function(t) {
    return new Aa(e, t);
  };
}
var za = /* @__PURE__ */ H(
  /* @__PURE__ */ Ee([], Pa, function(t, r) {
    for (var n = 0, a = r.length; n < a; ) {
      if (t(r[n]))
        return n;
      n += 1;
    }
    return -1;
  })
);
const Ea = za;
var La = /* @__PURE__ */ H(
  /* @__PURE__ */ rr(
    "groupBy",
    /* @__PURE__ */ _a(function(e, t) {
      return e.push(t), e;
    }, [])
  )
);
const Oa = La;
var ja = /* @__PURE__ */ St(function(t, r, n) {
  return Pe(Math.max(t.length, r.length, n.length), function() {
    return t.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const Da = ja;
var Ma = /* @__PURE__ */ H(Zr);
const Ia = Ma;
var Ca = /* @__PURE__ */ H(function(t, r) {
  return Pe(t + 1, function() {
    var n = arguments[t];
    if (n != null && ua(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, t));
    throw new TypeError(Ue(n) + ' does not have a method named "' + r + '"');
  });
});
const cn = Ca;
var Ra = /* @__PURE__ */ X(function(t) {
  return t != null && Le(t, ka(t));
});
const Na = Ra;
var Ga = /* @__PURE__ */ H(function(t, r) {
  return t.map(function(n) {
    for (var a = r, o = 0, i; o < n.length; ) {
      if (a == null)
        return;
      i = n[o], a = tn(i) ? en(i, a) : a[i], o += 1;
    }
    return a;
  });
}), Ba = /* @__PURE__ */ H(function(t, r) {
  return Ga([t], r)[0];
});
const Fa = Ba;
var Va = /* @__PURE__ */ St(function(t, r, n) {
  var a = {}, o;
  r = r || {}, n = n || {};
  for (o in r)
    ft(o, r) && (a[o] = ft(o, n) ? t(o, r[o], n[o]) : r[o]);
  for (o in n)
    ft(o, n) && !ft(o, a) && (a[o] = n[o]);
  return a;
}), Ya = /* @__PURE__ */ St(function e(t, r, n) {
  return Va(function(a, o, i) {
    return be(o) && be(i) ? e(t, o, i) : t(a, o, i);
  }, r, n);
}), Ha = /* @__PURE__ */ H(function(t, r) {
  return Ya(function(n, a, o) {
    return o;
  }, t, r);
});
const Ua = Ha;
var Wa = /* @__PURE__ */ H(function(t, r) {
  for (var n = {}, a = {}, o = 0, i = t.length; o < i; )
    a[t[o]] = 1, o += 1;
  for (var s in r)
    a.hasOwnProperty(s) || (n[s] = r[s]);
  return n;
});
const Ka = Wa;
var qa = /* @__PURE__ */ St(function(t, r, n) {
  return Le(t, qt(r, n));
});
const Za = qa;
var Xa = /* @__PURE__ */ St(function(t, r, n) {
  return t(qt(r, n));
});
const Ja = Xa;
var Qa = /* @__PURE__ */ H(function(t, r) {
  return Array.prototype.slice.call(r, 0).sort(function(n, a) {
    for (var o = 0, i = 0; o === 0 && i < t.length; )
      o = t[i](n, a), i += 1;
    return o;
  });
});
const un = Qa;
var ti = /* @__PURE__ */ cn(1, "split");
const ue = ti;
var ei = /* @__PURE__ */ cn(0, "toLowerCase");
const ri = ei;
var re = `	
\v\f\r                　\u2028\u2029\uFEFF`, ni = "​", oi = typeof String.prototype.trim == "function", ai = /* @__PURE__ */ X(!oi || /* @__PURE__ */ re.trim() || !/* @__PURE__ */ ni.trim() ? function(t) {
  var r = new RegExp("^[" + re + "][" + re + "]*"), n = new RegExp("[" + re + "][" + re + "]*$");
  return t.replace(r, "").replace(n, "");
} : function(t) {
  return t.trim();
});
const we = ai, dn = Symbol("I18nContext"), tt = Br({
  messages: {},
  locale: "",
  fallbackLocale: ""
}), ii = ({ messages: e = {}, locale: t = "", fallbackLocale: r = "" }) => {
  tt.messages = e, tt.locale = t, tt.fallbackLocale = r;
  const n = (d, l = {}) => {
    const m = !Na(l), u = Ft(we, ue(".", d));
    return z(() => {
      const f = fn(u);
      return m ? li(f, l) : f;
    }).value;
  }, a = (d) => {
    const l = Ft(we, ue(".", d));
    return !!We(tt.locale, l, tt.messages);
  }, o = (d) => {
    tt.locale = d;
  }, s = {
    locale: z({
      get() {
        return tt.locale;
      },
      set(d) {
        tt.locale = d;
      }
    }),
    setLocale: o,
    translate: n,
    hasTranlation: a
  };
  return Vr(dn, s), {
    translate: n
  };
}, Jt = (e) => {
  e && (tt.messages = e.messages, tt.locale = e.locale, tt.fallbackLocale = e.fallbackLocale);
  const t = si();
  return {
    locale: t.locale,
    t: t.translate,
    setLocale: t.setLocale,
    hasTranlation: t.hasTranlation
  };
}, si = () => {
  const e = Yr(dn, null);
  if (e === null)
    throw new Error("Privider is missing a parent component.");
  return e;
}, fn = (e = []) => {
  let t = We(tt.locale, e, tt.messages);
  return !t && tt.fallbackLocale && (t = We(tt.fallbackLocale, e, tt.messages)), t || e.join(".");
};
function We(e, t, r) {
  return Fa([e, ...t], r);
}
const li = function(e, t) {
  return e.replace(/\{(\w+)\}/g, function(r, n) {
    return t[n];
  });
}, ci = Fr({
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
  setup(e, { slots: t }) {
    const r = Ft(we, ue(".", e.path)), n = fn(r), a = ue(/{|}/, n), o = Object.keys(t).map((i) => {
      const s = a.indexOf(i);
      return s > -1 && (a[s] = t[i]()[0]), a;
    });
    return () => Hn(e.tag, o);
  }
}), ui = "https://api.icehockey.hu/vbr", di = "https://www.jegkorongszovetseg.hu/event/game/", fi = "https://jegkorongszovetseg.hu/assets/images/player_blank.png", pi = "https://www.ersteliga.hu/stats/players#/player/", mi = "https://www.ersteliga.hu/stats/teams#/team/3314/21096?name=", Lt = "original", ie = "descend", Nt = "ascend", gi = (/* @__PURE__ */ new Map()).set("hu", "hu-hu").set("en", "hu-gb"), hi = (/* @__PURE__ */ new Map()).set("Europe/Budapest", { countryLabelKey: "hungary", timezone: "Europe/Budapest" }).set("Europe/Bucharest", { countryLabelKey: "romania", timezone: "Europe/Bucharest" }), vi = 1e3, yi = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  class: "svg-inline--fa fa-sort fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, bi = /* @__PURE__ */ D("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, null, -1), wi = [
  bi
];
function xi(e, t) {
  return $(), P("svg", yi, wi);
}
const Sr = { render: xi }, _i = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  class: "svg-inline--fa fa-sort-down fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, $i = /* @__PURE__ */ D("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, null, -1), Ti = [
  $i
];
function Si(e, t) {
  return $(), P("svg", _i, Ti);
}
const kr = { render: Si };
function pe(e) {
  return e.split("-")[1];
}
function nr(e) {
  return e === "y" ? "height" : "width";
}
function Gt(e) {
  return e.split("-")[0];
}
function me(e) {
  return ["top", "bottom"].includes(Gt(e)) ? "x" : "y";
}
function Ar(e, t, r) {
  let { reference: n, floating: a } = e;
  const o = n.x + n.width / 2 - a.width / 2, i = n.y + n.height / 2 - a.height / 2, s = me(t), d = nr(s), l = n[d] / 2 - a[d] / 2, m = s === "x";
  let u;
  switch (Gt(t)) {
    case "top":
      u = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      u = { x: o, y: n.y + n.height };
      break;
    case "right":
      u = { x: n.x + n.width, y: i };
      break;
    case "left":
      u = { x: n.x - a.width, y: i };
      break;
    default:
      u = { x: n.x, y: n.y };
  }
  switch (pe(t)) {
    case "start":
      u[s] -= l * (r && m ? -1 : 1);
      break;
    case "end":
      u[s] += l * (r && m ? -1 : 1);
  }
  return u;
}
const ki = async (e, t, r) => {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: o = [], platform: i } = r, s = o.filter(Boolean), d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: a }), { x: m, y: u } = Ar(l, n, d), p = n, f = {}, g = 0;
  for (let h = 0; h < s.length; h++) {
    const { name: v, fn: x } = s[h], { x: y, y: T, data: k, reset: j } = await x({ x: m, y: u, initialPlacement: n, placement: p, strategy: a, middlewareData: f, rects: l, platform: i, elements: { reference: e, floating: t } });
    m = y ?? m, u = T ?? u, f = { ...f, [v]: { ...f[v], ...k } }, j && g <= 50 && (g++, typeof j == "object" && (j.placement && (p = j.placement), j.rects && (l = j.rects === !0 ? await i.getElementRects({ reference: e, floating: t, strategy: a }) : j.rects), { x: m, y: u } = Ar(l, p, d)), h = -1);
  }
  return { x: m, y: u, placement: p, strategy: a, middlewareData: f };
};
function pn(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function xe(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function mn(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: o, rects: i, elements: s, strategy: d } = e, { boundary: l = "clippingAncestors", rootBoundary: m = "viewport", elementContext: u = "floating", altBoundary: p = !1, padding: f = 0 } = t, g = pn(f), h = s[p ? u === "floating" ? "reference" : "floating" : u], v = xe(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(h))) == null || r ? h : h.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: l, rootBoundary: m, strategy: d })), x = u === "floating" ? { ...i.floating, x: n, y: a } : i.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), T = await (o.isElement == null ? void 0 : o.isElement(y)) && await (o.getScale == null ? void 0 : o.getScale(y)) || { x: 1, y: 1 }, k = xe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: y, strategy: d }) : x);
  return { top: (v.top - k.top + g.top) / T.y, bottom: (k.bottom - v.bottom + g.bottom) / T.y, left: (v.left - k.left + g.left) / T.x, right: (k.right - v.right + g.right) / T.x };
}
const Ai = Math.min, Pi = Math.max;
function Ke(e, t, r) {
  return Pi(e, Ai(t, r));
}
const Pr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: r, padding: n = 0 } = e || {}, { x: a, y: o, placement: i, rects: s, platform: d, elements: l } = t;
  if (r == null)
    return {};
  const m = pn(n), u = { x: a, y: o }, p = me(i), f = nr(p), g = await d.getDimensions(r), h = p === "y", v = h ? "top" : "left", x = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", T = s.reference[f] + s.reference[p] - u[p] - s.floating[f], k = u[p] - s.reference[p], j = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(r));
  let R = j ? j[y] : 0;
  R && await (d.isElement == null ? void 0 : d.isElement(j)) || (R = l.floating[y] || s.floating[f]);
  const V = T / 2 - k / 2, q = m[v], I = R - g[f] - m[x], L = R / 2 - g[f] / 2 + V, B = Ke(q, L, I), J = pe(i) != null && L != B && s.reference[f] / 2 - (L < q ? m[v] : m[x]) - g[f] / 2 < 0;
  return { [p]: u[p] - (J ? L < q ? q - L : I - L : 0), data: { [p]: B, centerOffset: L - B } };
} }), zi = ["top", "right", "bottom", "left"];
zi.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ei = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _e(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ei[t]);
}
function Li(e, t, r) {
  r === void 0 && (r = !1);
  const n = pe(e), a = me(e), o = nr(a);
  let i = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = _e(i)), { main: i, cross: _e(i) };
}
const Oi = { start: "end", end: "start" };
function Ge(e) {
  return e.replace(/start|end/g, (t) => Oi[t]);
}
const ji = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: i, platform: s, elements: d } = t, { mainAxis: l = !0, crossAxis: m = !0, fallbackPlacements: u, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...h } = e, v = Gt(n), x = Gt(i) === i, y = await (s.isRTL == null ? void 0 : s.isRTL(d.floating)), T = u || (x || !g ? [_e(i)] : function(B) {
      const J = _e(B);
      return [Ge(B), J, Ge(J)];
    }(i));
    u || f === "none" || T.push(...function(B, J, A, _) {
      const w = pe(B);
      let S = function(b, E, O) {
        const C = ["left", "right"], W = ["right", "left"], U = ["top", "bottom"], Q = ["bottom", "top"];
        switch (b) {
          case "top":
          case "bottom":
            return O ? E ? W : C : E ? C : W;
          case "left":
          case "right":
            return E ? U : Q;
          default:
            return [];
        }
      }(Gt(B), A === "start", _);
      return w && (S = S.map((b) => b + "-" + w), J && (S = S.concat(S.map(Ge)))), S;
    }(i, g, f, y));
    const k = [i, ...T], j = await mn(t, h), R = [];
    let V = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (l && R.push(j[v]), m) {
      const { main: B, cross: J } = Li(n, o, y);
      R.push(j[B], j[J]);
    }
    if (V = [...V, { placement: n, overflows: R }], !R.every((B) => B <= 0)) {
      var q, I;
      const B = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, J = k[B];
      if (J)
        return { data: { index: B, overflows: V }, reset: { placement: J } };
      let A = (I = V.filter((_) => _.overflows[0] <= 0).sort((_, w) => _.overflows[1] - w.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!A)
        switch (p) {
          case "bestFit": {
            var L;
            const _ = (L = V.map((w) => [w.placement, w.overflows.filter((S) => S > 0).reduce((S, b) => S + b, 0)]).sort((w, S) => w[1] - S[1])[0]) == null ? void 0 : L[0];
            _ && (A = _);
            break;
          }
          case "initialPlacement":
            A = i;
        }
      if (n !== A)
        return { reset: { placement: A } };
    }
    return {};
  } };
}, Di = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, a = await async function(o, i) {
      const { placement: s, platform: d, elements: l } = o, m = await (d.isRTL == null ? void 0 : d.isRTL(l.floating)), u = Gt(s), p = pe(s), f = me(s) === "x", g = ["left", "top"].includes(u) ? -1 : 1, h = m && f ? -1 : 1, v = typeof i == "function" ? i(o) : i;
      let { mainAxis: x, crossAxis: y, alignmentAxis: T } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof T == "number" && (y = p === "end" ? -1 * T : T), f ? { x: y * h, y: x * g } : { x: x * g, y: y * h };
    }(t, e);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
};
function Mi(e) {
  return e === "x" ? "y" : "x";
}
const Ii = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: a } = t, { mainAxis: o = !0, crossAxis: i = !1, limiter: s = { fn: (v) => {
      let { x, y } = v;
      return { x, y };
    } }, ...d } = e, l = { x: r, y: n }, m = await mn(t, d), u = me(Gt(a)), p = Mi(u);
    let f = l[u], g = l[p];
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      f = Ke(f + m[u === "y" ? "top" : "left"], f, f - m[v]);
    }
    if (i) {
      const v = p === "y" ? "bottom" : "right";
      g = Ke(g + m[p === "y" ? "top" : "left"], g, g - m[v]);
    }
    const h = s.fn({ ...t, [u]: f, [p]: g });
    return { ...h, data: { x: h.x - r, y: h.y - n } };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function it(e) {
  return at(e).getComputedStyle(e);
}
function gn(e) {
  return e instanceof at(e).Node;
}
function jt(e) {
  return gn(e) ? (e.nodeName || "").toLowerCase() : "";
}
function st(e) {
  return e instanceof at(e).HTMLElement;
}
function ot(e) {
  return e instanceof at(e).Element;
}
function zr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof at(e).ShadowRoot || e instanceof ShadowRoot;
}
function de(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function Ci(e) {
  return ["table", "td", "th"].includes(jt(e));
}
function qe(e) {
  const t = or(), r = it(e);
  return r.transform !== "none" || r.perspective !== "none" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function or() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function je(e) {
  return ["html", "body", "#document"].includes(jt(e));
}
const Er = Math.min, se = Math.max, $e = Math.round;
function hn(e) {
  const t = it(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = st(e), o = a ? e.offsetWidth : r, i = a ? e.offsetHeight : n, s = $e(r) !== o || $e(n) !== i;
  return s && (r = o, n = i), { width: r, height: n, fallback: s };
}
function vn(e) {
  return ot(e) ? e : e.contextElement;
}
const yn = { x: 1, y: 1 };
function Ut(e) {
  const t = vn(e);
  if (!st(t))
    return yn;
  const r = t.getBoundingClientRect(), { width: n, height: a, fallback: o } = hn(t);
  let i = (o ? $e(r.width) : r.width) / n, s = (o ? $e(r.height) : r.height) / a;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
const Lr = { x: 0, y: 0 };
function bn(e, t, r) {
  var n, a;
  if (t === void 0 && (t = !0), !or())
    return Lr;
  const o = e ? at(e) : window;
  return !r || t && r !== o ? Lr : { x: ((n = o.visualViewport) == null ? void 0 : n.offsetLeft) || 0, y: ((a = o.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function Vt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), o = vn(e);
  let i = yn;
  t && (n ? ot(n) && (i = Ut(n)) : i = Ut(e));
  const s = bn(o, r, n);
  let d = (a.left + s.x) / i.x, l = (a.top + s.y) / i.y, m = a.width / i.x, u = a.height / i.y;
  if (o) {
    const p = at(o), f = n && ot(n) ? at(n) : n;
    let g = p.frameElement;
    for (; g && n && f !== p; ) {
      const h = Ut(g), v = g.getBoundingClientRect(), x = getComputedStyle(g);
      v.x += (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, v.y += (g.clientTop + parseFloat(x.paddingTop)) * h.y, d *= h.x, l *= h.y, m *= h.x, u *= h.y, d += v.x, l += v.y, g = at(g).frameElement;
    }
  }
  return xe({ width: m, height: u, x: d, y: l });
}
function Ot(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function De(e) {
  return ot(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wn(e) {
  return Vt(Ot(e)).left + De(e).scrollLeft;
}
function Zt(e) {
  if (jt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || zr(e) && e.host || Ot(e);
  return zr(t) ? t.host : t;
}
function xn(e) {
  const t = Zt(e);
  return je(t) ? t.ownerDocument.body : st(t) && de(t) ? t : xn(t);
}
function le(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = xn(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = at(n);
  return a ? t.concat(o, o.visualViewport || [], de(n) ? n : []) : t.concat(n, le(n));
}
function Or(e, t, r) {
  let n;
  if (t === "viewport")
    n = function(a, o) {
      const i = at(a), s = Ot(a), d = i.visualViewport;
      let l = s.clientWidth, m = s.clientHeight, u = 0, p = 0;
      if (d) {
        l = d.width, m = d.height;
        const f = or();
        (!f || f && o === "fixed") && (u = d.offsetLeft, p = d.offsetTop);
      }
      return { width: l, height: m, x: u, y: p };
    }(e, r);
  else if (t === "document")
    n = function(a) {
      const o = Ot(a), i = De(a), s = a.ownerDocument.body, d = se(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), l = se(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
      let m = -i.scrollLeft + wn(a);
      const u = -i.scrollTop;
      return it(s).direction === "rtl" && (m += se(o.clientWidth, s.clientWidth) - d), { width: d, height: l, x: m, y: u };
    }(Ot(e));
  else if (ot(t))
    n = function(a, o) {
      const i = Vt(a, !0, o === "fixed"), s = i.top + a.clientTop, d = i.left + a.clientLeft, l = st(a) ? Ut(a) : { x: 1, y: 1 };
      return { width: a.clientWidth * l.x, height: a.clientHeight * l.y, x: d * l.x, y: s * l.y };
    }(t, r);
  else {
    const a = bn(e);
    n = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return xe(n);
}
function _n(e, t) {
  const r = Zt(e);
  return !(r === t || !ot(r) || je(r)) && (it(r).position === "fixed" || _n(r, t));
}
function jr(e, t) {
  return st(e) && it(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Dr(e, t) {
  const r = at(e);
  if (!st(e))
    return r;
  let n = jr(e, t);
  for (; n && Ci(n) && it(n).position === "static"; )
    n = jr(n, t);
  return n && (jt(n) === "html" || jt(n) === "body" && it(n).position === "static" && !qe(n)) ? r : n || function(a) {
    let o = Zt(a);
    for (; st(o) && !je(o); ) {
      if (qe(o))
        return o;
      o = Zt(o);
    }
    return null;
  }(e) || r;
}
function Ri(e, t, r) {
  const n = st(t), a = Ot(t), o = r === "fixed", i = Vt(e, !0, o, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (n || !n && !o)
    if ((jt(t) !== "body" || de(a)) && (s = De(t)), st(t)) {
      const l = Vt(t, !0, o, t);
      d.x = l.x + t.clientLeft, d.y = l.y + t.clientTop;
    } else
      a && (d.x = wn(a));
  return { x: i.left + s.scrollLeft - d.x, y: i.top + s.scrollTop - d.y, width: i.width, height: i.height };
}
const Ni = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const o = r === "clippingAncestors" ? function(l, m) {
    const u = m.get(l);
    if (u)
      return u;
    let p = le(l).filter((v) => ot(v) && jt(v) !== "body"), f = null;
    const g = it(l).position === "fixed";
    let h = g ? Zt(l) : l;
    for (; ot(h) && !je(h); ) {
      const v = it(h), x = qe(h);
      x || v.position !== "fixed" || (f = null), (g ? !x && !f : !x && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || de(h) && !x && _n(l, h)) ? p = p.filter((y) => y !== h) : f = v, h = Zt(h);
    }
    return m.set(l, p), p;
  }(t, this._c) : [].concat(r), i = [...o, n], s = i[0], d = i.reduce((l, m) => {
    const u = Or(t, m, a);
    return l.top = se(u.top, l.top), l.right = Er(u.right, l.right), l.bottom = Er(u.bottom, l.bottom), l.left = se(u.left, l.left), l;
  }, Or(t, s, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = st(r), o = Ot(r);
  if (r === o)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((jt(r) !== "body" || de(o)) && (i = De(r)), st(r))) {
    const l = Vt(r);
    s = Ut(r), d.x = l.x + r.clientLeft, d.y = l.y + r.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - i.scrollLeft * s.x + d.x, y: t.y * s.y - i.scrollTop * s.y + d.y };
}, isElement: ot, getDimensions: function(e) {
  return hn(e);
}, getOffsetParent: Dr, getDocumentElement: Ot, getScale: Ut, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || Dr, o = this.getDimensions;
  return { reference: Ri(t, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => it(e).direction === "rtl" };
function Gi(e, t, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = !0, ancestorResize: o = !0, elementResize: i = !0, animationFrame: s = !1 } = n, d = a || o ? [...ot(e) ? le(e) : e.contextElement ? le(e.contextElement) : [], ...le(t)] : [];
  d.forEach((p) => {
    const f = !ot(p) && p.toString().includes("V");
    !a || s && !f || p.addEventListener("scroll", r, { passive: !0 }), o && p.addEventListener("resize", r);
  });
  let l, m = null;
  i && (m = new ResizeObserver(() => {
    r();
  }), ot(e) && !s && m.observe(e), ot(e) || !e.contextElement || s || m.observe(e.contextElement), m.observe(t));
  let u = s ? Vt(e) : null;
  return s && function p() {
    const f = Vt(e);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || r(), u = f, l = requestAnimationFrame(p);
  }(), r(), () => {
    var p;
    d.forEach((f) => {
      a && f.removeEventListener("scroll", r), o && f.removeEventListener("resize", r);
    }), (p = m) == null || p.disconnect(), m = null, s && cancelAnimationFrame(l);
  };
}
const Bi = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Ni, ...r }, o = { ...a.platform, _c: n };
  return ki(e, t, { ...a, platform: o });
}, Fi = (e, t = "body") => {
  if (!e)
    return;
  if (typeof t != "string") {
    t == null || t.append(e);
    return;
  }
  const r = document.querySelector(t);
  r == null || r.append(e);
};
function Vi({ middleware: e, placement: t = null, strategy: r, append: n, enabled: a }) {
  const o = F(null), i = F(null), s = F(null), d = F(null), l = F(null), m = F(null), u = F(null), p = F(r ?? "absolute"), f = F(null), g = () => {
    !o.value || !i.value || Bi(o.value, i.value, {
      middleware: e,
      placement: t,
      strategy: r
    }).then((v) => {
      s.value = v.x, d.value = v.y, p.value = v.strategy, l.value = v.middlewareData.arrow.x, m.value = v.middlewareData.arrow.y, u.value = v.placement;
    });
  };
  pt(
    () => ({
      reference: c(o),
      floating: c(i),
      append: c(n)
    }),
    ({ floating: v, append: x }) => {
      x && Fi(v, x), g();
    },
    { flush: "post" }
  ), pt(
    a,
    (v) => {
      if (!(!o.value || !i.value)) {
        if (!v)
          return h();
        f.value = Gi(o.value, i.value, g, {});
      }
    },
    { flush: "post" }
  );
  const h = () => {
    var v;
    (v = f.value) == null || v.call(f), f.value = null;
  };
  return {
    x: s,
    y: d,
    arrowX: l,
    arrowY: m,
    placement: u,
    reference: o,
    floating: i,
    strategy: p,
    update: g
  };
}
const Yi = (e) => {
  const { element: t, padding: r } = e;
  return {
    name: "arrow",
    options: e,
    fn(n) {
      return Gr(t) ? t.value != null ? Pr({ element: t.value, padding: r }).fn(n) : {} : t ? Pr({ element: t, padding: r }).fn(n) : {};
    }
  };
}, Hi = ["data-placement"], $n = {
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
  setup(e) {
    const t = e, r = F(!1), n = F(null), { x: a, y: o, arrowX: i, arrowY: s, placement: d, reference: l, floating: m, strategy: u } = Vi({
      placement: t.placement,
      middleware: [ji(), Ii({ padding: 5 }), Di(t.offset), Yi({ element: n, padding: 5 })],
      append: z(() => t.appendTo),
      enabled: r
    }), p = () => {
      t.disabled || (r.value = !0);
    }, f = () => {
      r.value = !1;
    }, g = (h) => {
      l.value = h;
    };
    return vo(m, (h) => {
      var v;
      (v = l.value) != null && v.contains(h.target) || f();
    }), (h, v) => ($(), P(Rt, null, [
      dt(h.$slots, "default", {
        setRef: g,
        show: p,
        hide: f
      }),
      D("div", {
        ref_key: "floating",
        ref: m,
        "data-placement": c(d),
        style: ur({
          position: c(u),
          top: c(o) ? `${c(o)}px` : "",
          left: c(a) ? `${c(a)}px` : ""
        })
      }, [
        M(Un, {
          name: "transition-fade",
          mode: "out-in"
        }, {
          default: N(() => [
            r.value ? ($(), P("div", {
              key: 0,
              class: rt(["floating-content", [`is-${t.theme}`]])
            }, [
              dt(h.$slots, "content", { close: f }, () => [
                Ct(Z(e.content), 1)
              ]),
              D("div", {
                ref_key: "arrowRef",
                ref: n,
                class: "is-arrow",
                style: ur({
                  position: c(u),
                  top: c(s) ? `${c(s)}px` : "",
                  left: c(i) ? `${c(i)}px` : ""
                })
              }, null, 4)
            ], 2)) : G("", !0)
          ]),
          _: 3
        })
      ], 12, Hi)
    ], 64));
  }
}, Ui = ["onMouseenter", "onMouseleave", "onFocus", "onBlur", "onClick", "onKeydown", "tabindex"], Wi = { key: 0 }, Ki = ["colspan"], qi = { key: 1 }, Zi = ["colspan"], Tn = {
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
  setup(e, { emit: t }) {
    const r = e, { isLoading: n, appendTo: a } = Hr(r), o = jo(n, { delay: vi }), { t: i } = Jt(), s = fe("table"), d = z(() => r.columns), l = z(() => Object.keys(r.columns).length), m = (u, p) => {
      u.sortOrders && t("sort", { target: p, orders: u.sortOrders });
    };
    return (u, p) => ($(), P("table", {
      class: rt(c(s))
    }, [
      D("thead", null, [
        D("tr", null, [
          ($(!0), P(Rt, null, ae(d.value, (f, g) => ($(), K($n, {
            key: g,
            placement: "top",
            content: f.tooltip,
            disabled: !f.tooltip,
            "append-to": c(a)
          }, {
            default: N(({ setRef: h, show: v, hide: x }) => [
              D("th", {
                ref_for: !0,
                ref: h,
                class: rt([
                  [f.class],
                  {
                    "is-active": g === e.sort.sortTarget && e.sort.orders[0].direction !== c(Lt),
                    "is-sortable": f.sortOrders,
                    "is-desc": g === e.sort.sortTarget && e.sort.orders[0].direction === c(ie),
                    "is-asc": g === e.sort.sortTarget && e.sort.orders[0].direction === c(Nt)
                  }
                ]),
                onMouseenter: v,
                onMouseleave: x,
                onFocus: v,
                onBlur: x,
                onClick: (y) => m(f, g),
                onKeydown: [
                  dr(Wt((y) => m(f, g), ["prevent"]), ["space"]),
                  dr(Wt((y) => m(f, g), ["prevent"]), ["enter"])
                ],
                tabindex: f.sortOrders ? 0 : -1,
                role: "button"
              }, [
                dt(u.$slots, `header-${g}`, { column: f }, () => [
                  Ct(Z(f.label), 1)
                ]),
                f.sortOrders && g !== e.sort.sortTarget ? ($(), K(c(Sr), {
                  key: 0,
                  class: "is-icon-sort"
                })) : G("", !0),
                g === e.sort.sortTarget && e.sort.orders[0].direction === c(Lt) ? ($(), K(c(Sr), {
                  key: 1,
                  class: "is-icon-sort"
                })) : G("", !0),
                g === e.sort.sortTarget && e.sort.orders[0].direction === c(ie) ? ($(), K(c(kr), {
                  key: 2,
                  class: "is-icon-sort"
                })) : G("", !0),
                g === e.sort.sortTarget && e.sort.orders[0].direction === c(Nt) ? ($(), K(c(kr), {
                  key: 3,
                  class: "is-icon-sort"
                })) : G("", !0)
              ], 42, Ui)
            ]),
            _: 2
          }, 1032, ["content", "disabled", "append-to"]))), 128))
        ])
      ]),
      D("tbody", null, [
        ($(!0), P(Rt, null, ae(r.rows, (f, g) => ($(), P("tr", { key: g }, [
          ($(!0), P(Rt, null, ae(d.value, (h, v) => ($(), P("td", {
            key: v,
            class: rt([
              [h.class],
              {
                "is-active": v === e.sort.sortTarget && e.sort.orders[0].direction !== c(Lt)
              }
            ])
          }, [
            dt(u.$slots, `cell-${v}`, {
              row: f,
              prop: v
            }, () => [
              Ct(Z(f[v]), 1)
            ])
          ], 2))), 128))
        ]))), 128))
      ]),
      c(o) && e.rows.length === 0 ? ($(), P("tfoot", Wi, [
        D("tr", null, [
          D("td", { colspan: l.value }, [
            dt(u.$slots, "loading", {}, () => [
              Ct(Z(c(i)("common.loading")), 1)
            ])
          ], 8, Ki)
        ])
      ])) : G("", !0),
      e.rows.length === 0 && !c(n) && !c(o) ? ($(), P("tfoot", qi, [
        D("tr", null, [
          D("td", { colspan: l.value }, [
            dt(u.$slots, "empty", {}, () => [
              Ct(Z(c(i)("common.noData")), 1)
            ])
          ], 8, Zi)
        ])
      ])) : G("", !0)
    ], 2));
  }
}, Xi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ji = /* @__PURE__ */ D("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1), Qi = /* @__PURE__ */ D("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}, null, -1), ts = /* @__PURE__ */ D("line", {
  x1: "12",
  y1: "17",
  x2: "12.01",
  y2: "17"
}, null, -1), es = [
  Ji,
  Qi,
  ts
];
function rs(e, t) {
  return $(), P("svg", Xi, es);
}
const ns = { render: rs }, ht = {
  __name: "ErrorNotice",
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, { t: r, hasTranlation: n } = Jt(), a = fe("error-notice"), o = z(() => {
      var i;
      return n(`errors.${t.error.key}`) ? r(`errors.${t.error.key}`, t.error.cause) : (i = t.error) == null ? void 0 : i.message;
    });
    return (i, s) => ($(), P("div", {
      class: rt(c(a))
    }, [
      M(c(ns), {
        class: "icon",
        width: "20",
        height: "20"
      }),
      D("span", null, Z(o.value), 1)
    ], 2));
  }
};
function os(e) {
  return e && e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((t) => t.toLowerCase()).join("-");
}
const Sn = Symbol("ErrorProviderContext"), vt = () => {
  const e = F(""), t = F({}), r = (o) => {
    console.log({ error: o }), e.value = o.message || o.error.message, t.value = {
      message: o.message,
      key: o.key || os(o.message),
      cause: o.cause
    };
  };
  return Vr(Sn, {
    onError: r,
    reset: () => {
      e.value = "", t.value = {};
    }
  }), window.onerror = (o) => {
    console.log("WINDOW_ONERROR:", o);
  }, Wn((o, i, s) => {
    console.log("onErrorCaptured:", o, i, s);
  }), {
    hasError: z(() => e.value.length > 0),
    message: e,
    error: t,
    onError: r
  };
}, kn = () => {
  const e = as();
  return {
    onError: e.onError,
    reset: e.reset
  };
}, as = () => {
  const e = Yr(Sn, null);
  if (e === null)
    throw new Error("Privider is missing a parent component.");
  return e;
}, is = {
  "undefined-column": "A(z) {column} oszlop nem létezik!",
  "invalid-season-name": "Érvénytelen szezon név",
  "api-key-not-found": "API Kulcs nem megfelelő"
}, ss = {
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
}, ls = {
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
}, cs = {
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
}, us = {
  errors: is,
  common: ss,
  table: ls,
  game: cs
}, ds = {
  "undefined-column": "The {column} column is not exists!",
  "invalid-season-name": "Invalid season name",
  "api-key-not-found": "API Key not found"
}, fs = {
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
}, ps = {
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
}, ms = {
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
}, gs = {
  errors: ds,
  common: fs,
  table: ps,
  game: ms
}, ct = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, hs = Fr({
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
  setup(e) {
    const t = Ua({ hu: us, en: gs }, e.messages), { translate: r } = ii({
      locale: z(() => e.locale),
      messages: t
    });
    return {
      translate: r
    };
  }
});
function vs(e, t, r, n, a, o) {
  return dt(e.$slots, "default", { t: e.translate });
}
const yt = /* @__PURE__ */ ct(hs, [["render", vs]]), ys = ["src"], bs = ["src", "title"], Te = {
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
  setup(e) {
    const t = e, { defaultSrc: r } = Hr(t), n = F({ src: t.src }), { error: a, isReady: o } = Lo(n, { resetOnExecute: !1, shallow: !1 });
    return (i, s) => ($(), P(Rt, null, [
      c(a) && c(r) ? ($(), P("img", {
        key: 0,
        src: c(r),
        class: rt(["is-loaded", i.$attrs.class])
      }, null, 10, ys)) : G("", !0),
      c(a) ? G("", !0) : ($(), P("img", {
        key: 1,
        src: n.value.src,
        class: rt([i.$attrs.class, { "is-loaded": c(o) }]),
        title: t.title
      }, null, 10, bs))
    ], 64));
  }
}, ws = { style: { "text-align": "center" } }, An = {
  __name: "LoadingIndicator",
  setup(e) {
    const { t } = Jt();
    return (r, n) => ($(), P("div", ws, Z(c(t)("common.loading")), 1));
  }
};
function xs({ currentPage: e, itemsPerPage: t = 20, totalItems: r, rangeLength: n = 5, update: a = ce }) {
  const o = z(() => Math.ceil(c(r) / t)), i = z(() => {
    const m = c(e) - 1, u = Array.from({ length: o.value }, (g, h) => h + 1), p = Math.floor(n / 2);
    let f = Math.max(m - p, 0);
    return f + n >= o.value && (f = Math.max(o.value - n, 0)), u.slice(f, f + n);
  }), s = (m) => {
    const u = c(e) + m;
    l(u) && a(u);
  }, d = (m) => {
    l(m) && a(m);
  }, l = (m) => m <= o.value && m > 0;
  return {
    page: e,
    range: i,
    pageCount: o,
    goTo: d,
    pageStep: s
  };
}
const _s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, $s = /* @__PURE__ */ D("polyline", { points: "15 18 9 12 15 6" }, null, -1), Ts = [
  $s
];
function Ss(e, t) {
  return $(), P("svg", _s, Ts);
}
const ks = { render: Ss }, As = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ps = /* @__PURE__ */ D("polyline", { points: "9 18 15 12 9 6" }, null, -1), zs = [
  Ps
];
function Es(e, t) {
  return $(), P("svg", As, zs);
}
const Ls = { render: Es }, Os = ["disabled"], js = ["disabled"], Ds = {
  key: 1,
  class: "is-disabled"
}, Ms = ["disabled", "onClick"], Is = {
  key: 2,
  class: "is-disabled"
}, Cs = /* @__PURE__ */ D("span", null, "...", -1), Rs = [
  Cs
], Ns = ["disabled"], Gs = ["disabled"], Me = {
  __name: "Paginator",
  props: {
    page: {
      type: Number,
      required: !1,
      default: 0,
      validator: (e) => e >= 0
    },
    itemsPerPage: {
      type: Number,
      required: !1,
      default: 10,
      validator: (e) => e > 0
    },
    totalItems: {
      type: Number,
      required: !0,
      validator: (e) => e >= 0
    },
    rangeLength: {
      type: Number,
      default: 3,
      validator: (e) => e >= 2
    },
    isCompact: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = e, n = fe("paginator"), { page: a, pageCount: o, range: i, goTo: s, pageStep: d } = xs({
      currentPage: z(() => r.page),
      totalItems: z(() => r.totalItems),
      itemsPerPage: r.itemsPerPage,
      rangeLength: r.rangeLength,
      update: (l) => t("change", l)
    });
    return (l, m) => c(o) > 1 ? ($(), P("div", {
      key: 0,
      class: rt(c(n))
    }, [
      D("button", {
        type: "button",
        disabled: c(a) === 1,
        onClick: m[0] || (m[0] = (u) => c(d)(-1))
      }, [
        dt(l.$slots, "prev", {}, () => [
          M(c(ks), { class: "icon paginator-left" })
        ])
      ], 8, Os),
      e.isCompact ? G("", !0) : ($(), P("button", {
        key: 0,
        type: "button",
        disabled: c(a) === 1,
        onClick: m[1] || (m[1] = (u) => c(s)(1))
      }, "1", 8, js)),
      e.isCompact ? G("", !0) : ($(), P("div", Ds, "...")),
      ($(!0), P(Rt, null, ae(c(i), (u) => ($(), P("button", {
        type: "button",
        key: u,
        class: rt({ "is-active": u === c(a) }),
        disabled: u === c(a),
        onClick: (p) => c(s)(u)
      }, Z(u), 11, Ms))), 128)),
      e.isCompact ? G("", !0) : ($(), P("div", Is, Rs)),
      e.isCompact ? G("", !0) : ($(), P("button", {
        key: 3,
        type: "button",
        disabled: c(a) === c(o),
        onClick: m[2] || (m[2] = (u) => c(s)(c(o)))
      }, Z(c(o)), 9, Ns)),
      D("button", {
        type: "button",
        disabled: c(a) === c(o),
        onClick: m[3] || (m[3] = Wt((u) => c(d)(1), ["prevent"]))
      }, [
        dt(l.$slots, "next", {}, () => [
          M(c(Ls), { class: "icon paginator-left" })
        ])
      ], 8, Gs)
    ], 2)) : G("", !0);
  }
}, Pn = {
  __name: "ResponsiveTable",
  setup(e) {
    const t = F(null), r = fe("table-responsive");
    return (n, a) => ($(), P("div", {
      ref_key: "el",
      ref: t,
      class: rt(c(r))
    }, [
      dt(n.$slots, "default", { el: t.value })
    ], 2));
  }
};
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", d = "hour", l = "day", m = "week", u = "month", p = "quarter", f = "year", g = "date", h = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var _ = ["th", "st", "nd", "rd"], w = A % 100;
      return "[" + A + (_[(w - 20) % 10] || _[w] || _[0]) + "]";
    } }, T = function(A, _, w) {
      var S = String(A);
      return !S || S.length >= _ ? A : "" + Array(_ + 1 - S.length).join(w) + A;
    }, k = { s: T, z: function(A) {
      var _ = -A.utcOffset(), w = Math.abs(_), S = Math.floor(w / 60), b = w % 60;
      return (_ <= 0 ? "+" : "-") + T(S, 2, "0") + ":" + T(b, 2, "0");
    }, m: function A(_, w) {
      if (_.date() < w.date())
        return -A(w, _);
      var S = 12 * (w.year() - _.year()) + (w.month() - _.month()), b = _.clone().add(S, u), E = w - b < 0, O = _.clone().add(S + (E ? -1 : 1), u);
      return +(-(S + (w - b) / (E ? b - O : O - b)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: u, y: f, w: m, d: l, D: g, h: d, m: s, s: i, ms: o, Q: p }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, j = "en", R = {};
    R[j] = y;
    var V = function(A) {
      return A instanceof B;
    }, q = function A(_, w, S) {
      var b;
      if (!_)
        return j;
      if (typeof _ == "string") {
        var E = _.toLowerCase();
        R[E] && (b = E), w && (R[E] = w, b = E);
        var O = _.split("-");
        if (!b && O.length > 1)
          return A(O[0]);
      } else {
        var C = _.name;
        R[C] = _, b = C;
      }
      return !S && b && (j = b), b || !S && j;
    }, I = function(A, _) {
      if (V(A))
        return A.clone();
      var w = typeof _ == "object" ? _ : {};
      return w.date = A, w.args = arguments, new B(w);
    }, L = k;
    L.l = q, L.i = V, L.w = function(A, _) {
      return I(A, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var B = function() {
      function A(w) {
        this.$L = q(w.locale, null, !0), this.parse(w);
      }
      var _ = A.prototype;
      return _.parse = function(w) {
        this.$d = function(S) {
          var b = S.date, E = S.utc;
          if (b === null)
            return /* @__PURE__ */ new Date(NaN);
          if (L.u(b))
            return /* @__PURE__ */ new Date();
          if (b instanceof Date)
            return new Date(b);
          if (typeof b == "string" && !/Z$/i.test(b)) {
            var O = b.match(v);
            if (O) {
              var C = O[2] - 1 || 0, W = (O[7] || "0").substring(0, 3);
              return E ? new Date(Date.UTC(O[1], C, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, W)) : new Date(O[1], C, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, W);
            }
          }
          return new Date(b);
        }(w), this.$x = w.x || {}, this.init();
      }, _.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, _.$utils = function() {
        return L;
      }, _.isValid = function() {
        return this.$d.toString() !== h;
      }, _.isSame = function(w, S) {
        var b = I(w);
        return this.startOf(S) <= b && b <= this.endOf(S);
      }, _.isAfter = function(w, S) {
        return I(w) < this.startOf(S);
      }, _.isBefore = function(w, S) {
        return this.endOf(S) < I(w);
      }, _.$g = function(w, S, b) {
        return L.u(w) ? this[S] : this.set(b, w);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(w, S) {
        var b = this, E = !!L.u(S) || S, O = L.p(w), C = function(Ht, et) {
          var Et = L.w(b.$u ? Date.UTC(b.$y, et, Ht) : new Date(b.$y, et, Ht), b);
          return E ? Et : Et.endOf(l);
        }, W = function(Ht, et) {
          return L.w(b.toDate()[Ht].apply(b.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(et)), b);
        }, U = this.$W, Q = this.$M, zt = this.$D, Tt = "set" + (this.$u ? "UTC" : "");
        switch (O) {
          case f:
            return E ? C(1, 0) : C(31, 11);
          case u:
            return E ? C(1, Q) : C(0, Q + 1);
          case m:
            var Qt = this.$locale().weekStart || 0, te = (U < Qt ? U + 7 : U) - Qt;
            return C(E ? zt - te : zt + (6 - te), Q);
          case l:
          case g:
            return W(Tt + "Hours", 0);
          case d:
            return W(Tt + "Minutes", 1);
          case s:
            return W(Tt + "Seconds", 2);
          case i:
            return W(Tt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(w) {
        return this.startOf(w, !1);
      }, _.$set = function(w, S) {
        var b, E = L.p(w), O = "set" + (this.$u ? "UTC" : ""), C = (b = {}, b[l] = O + "Date", b[g] = O + "Date", b[u] = O + "Month", b[f] = O + "FullYear", b[d] = O + "Hours", b[s] = O + "Minutes", b[i] = O + "Seconds", b[o] = O + "Milliseconds", b)[E], W = E === l ? this.$D + (S - this.$W) : S;
        if (E === u || E === f) {
          var U = this.clone().set(g, 1);
          U.$d[C](W), U.init(), this.$d = U.set(g, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          C && this.$d[C](W);
        return this.init(), this;
      }, _.set = function(w, S) {
        return this.clone().$set(w, S);
      }, _.get = function(w) {
        return this[L.p(w)]();
      }, _.add = function(w, S) {
        var b, E = this;
        w = Number(w);
        var O = L.p(S), C = function(Q) {
          var zt = I(E);
          return L.w(zt.date(zt.date() + Math.round(Q * w)), E);
        };
        if (O === u)
          return this.set(u, this.$M + w);
        if (O === f)
          return this.set(f, this.$y + w);
        if (O === l)
          return C(1);
        if (O === m)
          return C(7);
        var W = (b = {}, b[s] = n, b[d] = a, b[i] = r, b)[O] || 1, U = this.$d.getTime() + w * W;
        return L.w(U, this);
      }, _.subtract = function(w, S) {
        return this.add(-1 * w, S);
      }, _.format = function(w) {
        var S = this, b = this.$locale();
        if (!this.isValid())
          return b.invalidDate || h;
        var E = w || "YYYY-MM-DDTHH:mm:ssZ", O = L.z(this), C = this.$H, W = this.$m, U = this.$M, Q = b.weekdays, zt = b.months, Tt = function(et, Et, Ce, he) {
          return et && (et[Et] || et(S, E)) || Ce[Et].slice(0, he);
        }, Qt = function(et) {
          return L.s(C % 12 || 12, et, "0");
        }, te = b.meridiem || function(et, Et, Ce) {
          var he = et < 12 ? "AM" : "PM";
          return Ce ? he.toLowerCase() : he;
        }, Ht = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: L.s(U + 1, 2, "0"), MMM: Tt(b.monthsShort, U, zt, 3), MMMM: Tt(zt, U), D: this.$D, DD: L.s(this.$D, 2, "0"), d: String(this.$W), dd: Tt(b.weekdaysMin, this.$W, Q, 2), ddd: Tt(b.weekdaysShort, this.$W, Q, 3), dddd: Q[this.$W], H: String(C), HH: L.s(C, 2, "0"), h: Qt(1), hh: Qt(2), a: te(C, W, !0), A: te(C, W, !1), m: String(W), mm: L.s(W, 2, "0"), s: String(this.$s), ss: L.s(this.$s, 2, "0"), SSS: L.s(this.$ms, 3, "0"), Z: O };
        return E.replace(x, function(et, Et) {
          return Et || Ht[et] || O.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(w, S, b) {
        var E, O = L.p(S), C = I(w), W = (C.utcOffset() - this.utcOffset()) * n, U = this - C, Q = L.m(this, C);
        return Q = (E = {}, E[f] = Q / 12, E[u] = Q, E[p] = Q / 3, E[m] = (U - W) / 6048e5, E[l] = (U - W) / 864e5, E[d] = U / a, E[s] = U / n, E[i] = U / r, E)[O] || U, b ? Q : L.a(Q);
      }, _.daysInMonth = function() {
        return this.endOf(u).$D;
      }, _.$locale = function() {
        return R[this.$L];
      }, _.locale = function(w, S) {
        if (!w)
          return this.$L;
        var b = this.clone(), E = q(w, S, !0);
        return E && (b.$L = E), b;
      }, _.clone = function() {
        return L.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), J = B.prototype;
    return I.prototype = J, [["$ms", o], ["$s", i], ["$m", s], ["$H", d], ["$W", l], ["$M", u], ["$y", f], ["$D", g]].forEach(function(A) {
      J[A[1]] = function(_) {
        return this.$g(_, A[0], A[1]);
      };
    }), I.extend = function(A, _) {
      return A.$i || (A(_, B, I), A.$i = !0), I;
    }, I.locale = q, I.isDayjs = V, I.unix = function(A) {
      return I(1e3 * A);
    }, I.en = R[j], I.Ls = R, I.p = {}, I;
  });
})(zn);
var En = zn.exports;
const nt = /* @__PURE__ */ Yt(En);
var Ln = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var d = i.prototype;
      s.utc = function(h) {
        var v = { date: h, utc: !0, args: arguments };
        return new i(v);
      }, d.utc = function(h) {
        var v = s(this.toDate(), { locale: this.$L, utc: !0 });
        return h ? v.add(this.utcOffset(), r) : v;
      }, d.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var l = d.parse;
      d.parse = function(h) {
        h.utc && (this.$u = !0), this.$utils().u(h.$offset) || (this.$offset = h.$offset), l.call(this, h);
      };
      var m = d.init;
      d.init = function() {
        if (this.$u) {
          var h = this.$d;
          this.$y = h.getUTCFullYear(), this.$M = h.getUTCMonth(), this.$D = h.getUTCDate(), this.$W = h.getUTCDay(), this.$H = h.getUTCHours(), this.$m = h.getUTCMinutes(), this.$s = h.getUTCSeconds(), this.$ms = h.getUTCMilliseconds();
        } else
          m.call(this);
      };
      var u = d.utcOffset;
      d.utcOffset = function(h, v) {
        var x = this.$utils().u;
        if (x(h))
          return this.$u ? 0 : x(this.$offset) ? u.call(this) : this.$offset;
        if (typeof h == "string" && (h = function(j) {
          j === void 0 && (j = "");
          var R = j.match(n);
          if (!R)
            return null;
          var V = ("" + R[0]).match(a) || ["-", 0, 0], q = V[0], I = 60 * +V[1] + +V[2];
          return I === 0 ? 0 : q === "+" ? I : -I;
        }(h), h === null))
          return this;
        var y = Math.abs(h) <= 16 ? 60 * h : h, T = this;
        if (v)
          return T.$offset = y, T.$u = h === 0, T;
        if (h !== 0) {
          var k = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (T = this.local().add(y + k, r)).$offset = y, T.$x.$localOffset = k;
        } else
          T = this.utc();
        return T;
      };
      var p = d.format;
      d.format = function(h) {
        var v = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return p.call(this, v);
      }, d.valueOf = function() {
        var h = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * h;
      }, d.isUTC = function() {
        return !!this.$u;
      }, d.toISOString = function() {
        return this.toDate().toISOString();
      }, d.toString = function() {
        return this.toDate().toUTCString();
      };
      var f = d.toDate;
      d.toDate = function(h) {
        return h === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : f.call(this);
      };
      var g = d.diff;
      d.diff = function(h, v, x) {
        if (h && this.$u === h.$u)
          return g.call(this, h, v, x);
        var y = this.local(), T = s(h).local();
        return g.call(y, T, v, x);
      };
    };
  });
})(Ln);
var Bs = Ln.exports;
const Fs = /* @__PURE__ */ Yt(Bs);
var On = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(a, o, i) {
      var s, d = function(p, f, g) {
        g === void 0 && (g = {});
        var h = new Date(p), v = function(x, y) {
          y === void 0 && (y = {});
          var T = y.timeZoneName || "short", k = x + "|" + T, j = n[k];
          return j || (j = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: x, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: T }), n[k] = j), j;
        }(f, g);
        return v.formatToParts(h);
      }, l = function(p, f) {
        for (var g = d(p, f), h = [], v = 0; v < g.length; v += 1) {
          var x = g[v], y = x.type, T = x.value, k = r[y];
          k >= 0 && (h[k] = parseInt(T, 10));
        }
        var j = h[3], R = j === 24 ? 0 : j, V = h[0] + "-" + h[1] + "-" + h[2] + " " + R + ":" + h[4] + ":" + h[5] + ":000", q = +p;
        return (i.utc(V).valueOf() - (q -= q % 1e3)) / 6e4;
      }, m = o.prototype;
      m.tz = function(p, f) {
        p === void 0 && (p = s);
        var g = this.utcOffset(), h = this.toDate(), v = h.toLocaleString("en-US", { timeZone: p }), x = Math.round((h - new Date(v)) / 1e3 / 60), y = i(v).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(h.getTimezoneOffset() / 15) - x, !0);
        if (f) {
          var T = y.utcOffset();
          y = y.add(g - T, "minute");
        }
        return y.$x.$timezone = p, y;
      }, m.offsetName = function(p) {
        var f = this.$x.$timezone || i.tz.guess(), g = d(this.valueOf(), f, { timeZoneName: p }).find(function(h) {
          return h.type.toLowerCase() === "timezonename";
        });
        return g && g.value;
      };
      var u = m.startOf;
      m.startOf = function(p, f) {
        if (!this.$x || !this.$x.$timezone)
          return u.call(this, p, f);
        var g = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return u.call(g, p, f).tz(this.$x.$timezone, !0);
      }, i.tz = function(p, f, g) {
        var h = g && f, v = g || f || s, x = l(+i(), v);
        if (typeof p != "string")
          return i(p).tz(v);
        var y = function(R, V, q) {
          var I = R - 60 * V * 1e3, L = l(I, q);
          if (V === L)
            return [I, V];
          var B = l(I -= 60 * (L - V) * 1e3, q);
          return L === B ? [I, L] : [R - 60 * Math.min(L, B) * 1e3, Math.max(L, B)];
        }(i.utc(p, h).valueOf(), x, v), T = y[0], k = y[1], j = i(T).utcOffset(k);
        return j.$x.$timezone = v, j;
      }, i.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, i.tz.setDefault = function(p) {
        s = p;
      };
    };
  });
})(On);
var Vs = On.exports;
const Ys = /* @__PURE__ */ Yt(Vs);
var jn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    return function(r, n) {
      var a = n.prototype, o = a.format;
      a.format = function(i) {
        var s = this, d = this.$locale();
        if (!this.isValid())
          return o.bind(this)(i);
        var l = this.$utils(), m = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(u) {
          switch (u) {
            case "Q":
              return Math.ceil((s.$M + 1) / 3);
            case "Do":
              return d.ordinal(s.$D);
            case "gggg":
              return s.weekYear();
            case "GGGG":
              return s.isoWeekYear();
            case "wo":
              return d.ordinal(s.week(), "W");
            case "w":
            case "ww":
              return l.s(s.week(), u === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return l.s(s.isoWeek(), u === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return l.s(String(s.$H === 0 ? 24 : s.$H), u === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return u;
          }
        });
        return o.bind(this)(m);
      };
    };
  });
})(jn);
var Hs = jn.exports;
const Us = /* @__PURE__ */ Yt(Hs);
var Dn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(Dn);
var Ws = Dn.exports;
const Ks = /* @__PURE__ */ Yt(Ws);
var Mn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, i, s, d) {
        var l = a(o), m = a(i), u = (d = d || "()")[0] === "(", p = d[1] === ")";
        return (u ? this.isAfter(l, s) : !this.isBefore(l, s)) && (p ? this.isBefore(m, s) : !this.isAfter(m, s)) || (u ? this.isBefore(l, s) : !this.isAfter(l, s)) && (p ? this.isAfter(m, s) : !this.isBefore(m, s));
      };
    };
  });
})(Mn);
var qs = Mn.exports;
const Zs = /* @__PURE__ */ Yt(qs);
var In = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Mt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = r, i.format = function(d) {
        d === void 0 && (d = "YYYY-MM-DDTHH:mm:ssZ");
        var l = this.$locale().formats, m = function(u, p) {
          return u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(f, g, h) {
            var v = h && h.toUpperCase();
            return g || p[h] || r[h] || p[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, y, T) {
              return y || T.slice(1);
            });
          });
        }(d, l === void 0 ? {} : l);
        return s.call(this, m);
      };
    };
  });
})(In);
var Xs = In.exports;
const Js = /* @__PURE__ */ Yt(Xs);
var Qs = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(En);
  })(Mt, function(r) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var a = n(r), o = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(i) {
      return i + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(i, s, d, l) {
      return "néhány másodperc" + (l || s ? "" : "e");
    }, m: function(i, s, d, l) {
      return "egy perc" + (l || s ? "" : "e");
    }, mm: function(i, s, d, l) {
      return i + " perc" + (l || s ? "" : "e");
    }, h: function(i, s, d, l) {
      return "egy " + (l || s ? "óra" : "órája");
    }, hh: function(i, s, d, l) {
      return i + " " + (l || s ? "óra" : "órája");
    }, d: function(i, s, d, l) {
      return "egy " + (l || s ? "nap" : "napja");
    }, dd: function(i, s, d, l) {
      return i + " " + (l || s ? "nap" : "napja");
    }, M: function(i, s, d, l) {
      return "egy " + (l || s ? "hónap" : "hónapja");
    }, MM: function(i, s, d, l) {
      return i + " " + (l || s ? "hónap" : "hónapja");
    }, y: function(i, s, d, l) {
      return "egy " + (l || s ? "év" : "éve");
    }, yy: function(i, s, d, l) {
      return i + " " + (l || s ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return a.default.locale(o, null, !0), o;
  });
})(Qs);
nt.extend(Fs);
nt.extend(Ys);
nt.extend(Us);
nt.extend(Js);
nt.extend(Ks);
nt.extend(Zs);
const Cn = () => nt.tz.guess(), Be = (e = "", t = "", r = "", n = "hu") => (r = r || nt.tz.guess(), nt(e).isValid() ? nt(e).tz(r).locale(n).format(t) : ""), oe = (e = "", t = "", r = "hu") => {
  if (!nt(e).isValid())
    return "";
  t = t || nt.tz.guess();
  const a = new Intl.DateTimeFormat(tl(r), {
    timeZone: t,
    timeZoneName: "short"
  }).formatToParts(new Date(e)).find((o) => o.type === "timeZoneName");
  return a && a.value;
}, tl = (e) => gi.get(e), Rn = (e) => {
  const t = e.split(":");
  return parseInt(t[0], 10) * 60 + parseInt(t[1], 10);
}, el = (e, t = "day") => nt().isSameOrBefore(nt(e), t), rl = ["onClick"], nl = {
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
  setup(e, { emit: t }) {
    const r = e, { t: n } = Jt(), a = fe("timezone-selector"), o = z(() => oe(/* @__PURE__ */ new Date(), null, r.locale)), i = Cn(), s = z(() => Array.from(hi.values()).map((l) => ({
      ...l,
      isActive: oe(/* @__PURE__ */ new Date(), r.currentZone, r.locale) === oe(/* @__PURE__ */ new Date(), l.timezone, r.locale),
      zoneOffsetName: oe(/* @__PURE__ */ new Date(), l.timezone, r.locale)
    }))), d = (l) => t("change", l);
    return (l, m) => ($(), P("div", {
      class: rt(c(a))
    }, [
      M(c(ci), {
        path: "common.selectTimezone",
        tag: "span"
      }, {
        timezone: N(() => [
          D("a", {
            href: "#",
            onClick: m[0] || (m[0] = Wt((u) => d(c(i)), ["prevent"]))
          }, Z(o.value), 1)
        ]),
        _: 1
      }),
      ($(!0), P(Rt, null, ae(s.value, (u) => ($(), P("a", {
        key: u.countryLabelKey,
        href: "#",
        class: rt({ "is-active": u.isActive }),
        onClick: Wt((p) => d(u.timezone), ["prevent"])
      }, Z(c(n)(`common.${u.countryLabelKey}`)) + " (" + Z(u.zoneOffsetName) + ") ", 11, rl))), 128))
    ], 2));
  }
}, Nn = (e, t = "", r = {}) => {
  const n = F(""), { t: a } = Jt();
  if (t)
    try {
      const s = ol(c(e), t);
      e = Ka(s, c(e));
    } catch (s) {
      n.value = s;
    }
  const o = (s) => ({
    ...s,
    ...s.label && { label: a(s.label ?? "", c(r)) },
    ...s.tooltip && { tooltip: a(s.tooltip ?? "") }
  });
  return {
    columns: z(() => Ft(o, c(e))),
    error: n
  };
}, ol = (e, t = "") => {
  const r = Ft(we, ue(",", t)), n = Bt(e);
  if (r[0] === "")
    return resolve([]);
  const a = r.findIndex((o) => !n.includes(o));
  if (a > -1)
    throw r[a];
  return r;
};
class Gn extends Error {
  constructor(t, r = {}) {
    const { key: n, cause: a } = r;
    super(t), this.name = "WidgetError", this.key = n, this.cause = a;
  }
}
const Se = {
  message: "Undefined Column name Message",
  options: {
    key: "undefined-column",
    cause: {}
  }
}, al = { class: "is-portrait-image" }, il = ["href"], sl = ["href"], kt = {
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
  setup(e, { emit: t }) {
    const r = e, { onError: n } = kn(), a = z(() => r.columns), { columns: o, error: i } = Nn(a, r.hideColumns);
    i.value && n(
      new Gn(Se.message, {
        ...Se.options,
        cause: { column: i.value }
      })
    );
    const s = (d) => t("sort", d);
    return (d, l) => ($(), K(Pn, null, {
      default: N(({ el: m }) => [
        M(Tn, {
          columns: c(o),
          sort: r.sort,
          rows: r.rows,
          "is-loading": e.isLoading,
          "append-to": m,
          onSort: s
        }, Kn({
          "cell-index": N(({ row: u }) => [
            D("span", {
              class: rt(u.indexClass)
            }, Z(u.index), 3)
          ]),
          "cell-playerPortrait": N(({ row: u }) => [
            D("div", al, [
              ($(), K(Te, {
                key: u.id || u.playerId,
                src: u.playerPortrait,
                "default-src": c(fi)
              }, null, 8, ["src", "default-src"]))
            ])
          ]),
          "cell-teamLogo": N(({ row: u }) => [
            ($(), K(Te, {
              class: "is-logo-image",
              key: u.teamId || u.id,
              src: u.teamLogo
            }, null, 8, ["src"]))
          ]),
          loading: N(() => [
            M(An)
          ]),
          _: 2
        }, [
          e.isTeamLinked ? {
            name: "cell-teamName",
            fn: N(({ row: u }) => [
              D("a", {
                href: e.externalTeamResolver(u.teamName),
                target: "_blank"
              }, Z(u.teamName), 9, il)
            ]),
            key: "0"
          } : void 0,
          e.isPlayerLinked ? {
            name: "cell-name",
            fn: N(({ row: u }) => [
              D("a", {
                href: e.externalPlayerResolver(u.id),
                target: "_blank"
              }, Z(u.name), 9, sl)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["columns", "sort", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, bt = async (e, t, r) => {
  const n = `${ui}${c(e)}?${ll(r)}`;
  return new Promise((a, o) => {
    fetch(n, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": cl(t)
      }
    }).then((i) => i.json()).then((i) => {
      if (i.error)
        return o(i);
      a(i.data);
    }).catch((i) => {
      o(i);
    });
  });
}, ll = (e) => Object.keys(e).map((t) => t + "=" + e[t]).join("&"), cl = (e) => {
  var t;
  return e || ((t = window.__MJSZ_VBR_WIDGET__) != null && t.apiKey ? window.__MJSZ_VBR_WIDGET__.apiKey : {}.NODE_ENV !== "production" ? {}.VITE_VBR_API_KEY : "");
}, Ie = (e = {}) => {
  const { initial: t = 1, items: r = [], limit: n, auto: a = !1 } = e, o = F(t), i = (l) => el(l, "day");
  return mo(r, () => {
    if (!a)
      return;
    const l = Ea(Ja(i, "gameDate"))(c(r));
    o.value = l === -1 ? 1 : Math.floor(l / n) + 1;
  }), {
    page: o,
    change: (l) => {
      o.value = l;
    }
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
function Mr(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n, a, o = r.call(e), i = [];
  try {
    for (; (t === void 0 || t-- > 0) && !(n = o.next()).done; )
      i.push(n.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
var Ir;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(Ir || (Ir = {}));
var ul = { type: "xstate.init" };
function Fe(e) {
  return e === void 0 ? [] : [].concat(e);
}
function Cr(e, t) {
  return typeof (e = typeof e == "string" && t && t[e] ? t[e] : e) == "string" ? { type: e } : typeof e == "function" ? { type: e.name, exec: e } : e;
}
function Ze(e) {
  return function(t) {
    return e === t;
  };
}
function dl(e) {
  return typeof e == "string" ? { type: e } : e;
}
function Rr(e, t) {
  return { value: e, context: t, actions: [], changed: !1, matches: Ze(e) };
}
function Nr(e, t, r) {
  var n = t, a = !1;
  return [e.filter(function(o) {
    if (o.type === "xstate.assign") {
      a = !0;
      var i = Object.assign({}, n);
      return typeof o.assignment == "function" ? i = o.assignment(n, r) : Object.keys(o.assignment).forEach(function(s) {
        i[s] = typeof o.assignment[s] == "function" ? o.assignment[s](n, r) : o.assignment[s];
      }), n = i, !1;
    }
    return !0;
  }), n, a];
}
function fl(e, t) {
  t === void 0 && (t = {});
  var r = Mr(Nr(Fe(e.states[e.initial].entry).map(function(i) {
    return Cr(i, t.actions);
  }), e.context, ul), 2), n = r[0], a = r[1], o = { config: e, _options: t, initialState: { value: e.initial, actions: n, context: a, matches: Ze(e.initial) }, transition: function(i, s) {
    var d, l, m = typeof i == "string" ? { value: i, context: e.context } : i, u = m.value, p = m.context, f = dl(s), g = e.states[u];
    if (g.on) {
      var h = Fe(g.on[f.type]);
      try {
        for (var v = function(b) {
          var E = typeof Symbol == "function" && Symbol.iterator, O = E && b[E], C = 0;
          if (O)
            return O.call(b);
          if (b && typeof b.length == "number")
            return { next: function() {
              return b && C >= b.length && (b = void 0), { value: b && b[C++], done: !b };
            } };
          throw new TypeError(E ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }(h), x = v.next(); !x.done; x = v.next()) {
          var y = x.value;
          if (y === void 0)
            return Rr(u, p);
          var T = typeof y == "string" ? { target: y } : y, k = T.target, j = T.actions, R = j === void 0 ? [] : j, V = T.cond, q = V === void 0 ? function() {
            return !0;
          } : V, I = k === void 0, L = k ?? u, B = e.states[L];
          if (q(p, f)) {
            var J = Mr(Nr((I ? Fe(R) : [].concat(g.exit, R, B.entry).filter(function(b) {
              return b;
            })).map(function(b) {
              return Cr(b, o._options.actions);
            }), p, f), 3), A = J[0], _ = J[1], w = J[2], S = k ?? u;
            return { value: S, context: _, actions: A, changed: k !== u || A.length > 0 || w, matches: Ze(S) };
          }
        }
      } catch (b) {
        d = { error: b };
      } finally {
        try {
          x && !x.done && (l = v.return) && l.call(v);
        } finally {
          if (d)
            throw d.error;
        }
      }
    }
    return Rr(u, p);
  } };
  return o;
}
const pl = fl({
  id: "sort",
  initial: Lt,
  states: {
    [Lt]: {
      on: {
        DIRECTION1: ie,
        DIRECTION2: Nt
      }
    },
    [ie]: {
      on: {
        DIRECTION1: Nt,
        DIRECTION2: Lt
      }
    },
    [Nt]: {
      on: {
        DIRECTION1: Lt,
        DIRECTION2: ie
      }
    }
  }
}), ml = (e, t) => {
  const r = t === Nt ? "DIRECTION2" : "DIRECTION1";
  return pl.transition(e, r).value;
};
function At(e = {}) {
  const { sortTarget: t = null, orders: r = [] } = e, n = Br({ sortTarget: t, orders: r });
  return {
    sort: n,
    change: ({ target: o, orders: i }) => {
      if (n.sortTarget !== o) {
        n.sortTarget = o, n.orders = i;
        return;
      }
      const s = i.map((d, l) => ({
        ...d,
        direction: ml(n.orders[l].direction, d.direction)
      }));
      n.sortTarget = o, n.orders = s;
    }
  };
}
const wt = (e = []) => ({
  result: [...e],
  filteredRowsLength: 0,
  isFiltered: !1,
  value() {
    return {
      rows: this.result,
      totalItems: this.filteredRowsLength,
      totalItems: this.isFiltered ? this.filteredRowsLength : e.length
    };
  },
  filter(t, r = [], n = !1) {
    if (t) {
      const a = r.map(
        (i) => n ? Za(i, t) : sn(qt(i), ri, Ia(t))
      ), o = Jr(la([...a]), this.result);
      this.isFiltered = !0, this.filteredRowsLength = o.length, this.result = o;
    }
    return this;
  },
  sorted(t) {
    if (!t.sortTarget)
      return this;
    if (t.orders[0].direction === Lt)
      return this;
    const r = Da(Le(Nt), Tr(an), Tr(Ta));
    return this.result = un(t.orders.map((n) => ln(r(n.direction), qt)(n.target)))(this.result), this;
  },
  addIndex(t = null) {
    return this.result.reduce((r, n, a) => {
      const o = r[r.length - 1] || [], i = t && o[t] === n[t];
      return n.index = i ? o.index : a + 1, n.indexClass = i ? "is-duplicated" : null, r.push(n), r;
    }, []), this;
  },
  addContinuousIndex() {
    return this.result = this.result.map((t, r) => ({
      ...t,
      index: r + 1
    })), this;
  },
  pagination(t, r) {
    t = Number(t), r = Number(r);
    const n = (t - 1) * r, a = n + r;
    return this.result = this.result.slice(n, a), this;
  },
  playerName() {
    return this.result = this.result.map((t) => ({
      ...t,
      name: `${t.lastName} ${t.firstName}`
    })), this;
  },
  schedule(t = "", r = "hu") {
    return this.result = this.result.map((n) => ({
      ...n,
      gameResult: `${n.homeTeamScore}-${n.awayTeamScore}`,
      gameDateDate: Be(n.gameDate, "L dddd", t, r),
      gameDateTime: Be(n.gameDate, "HH:mm", t, r)
    })), this;
  },
  gameDateFilter(t) {
    return t === null ? this : (this.result = this.result.filter((r) => new Date(r.gameDate).getMonth() == t), this);
  },
  convertTimes(t = []) {
    return this.result = this.result.map((r) => (t.map((n) => r[n] ? r[`${n}Sec`] = Rn(r[n]) : r), r)), this;
  },
  groupByDays() {
    return this.result = Oa((t) => Be(t.gameDate, "YYYY-MM-DD"))(this.result), this;
  }
}), ge = (e, ...t) => Ft(ln(...t))(e), ar = (e) => ({
  ...e,
  ...e.lastName && { name: `${e.lastName} ${e.firstName}` }
}), ir = (e = []) => (t) => (e.map((r) => t[r] ? t[`${r}Sec`] = Rn(t[r]) : t), t), gl = (e, t) => new Date(e.gameDate).getTime() - new Date(t.gameDate).getTime(), hl = un([gl, an(qt("id"))]), vl = (e, t) => {
  const r = lr("gameResolver") || e;
  return typeof r == "function" ? r(t) : r ? r + t : di + t;
}, It = (e, t) => {
  const r = lr("teamResolver") || e;
  return typeof r == "function" ? r(t) : encodeURI(r ? r + t : mi + t);
}, sr = (e, t) => {
  const r = lr("playerResolver") || e;
  return typeof r == "function" ? r(t) : encodeURI(r ? r + t : pi + t);
}, lr = (e = "") => {
  var t;
  return (t = window == null ? void 0 : window.__MJSZ_VBR_WIDGET__) == null ? void 0 : t[e];
}, xt = `:root,:host{font-family:Roboto Condensed,Avenir,Helvetica,Arial,sans-serif;--vbr-widget-primary-color-0: #ffffff;--vbr-widget-primary-color-50: #eceff1;--vbr-widget-primary-color-100: #cfd8dc;--vbr-widget-primary-color-200: #b0bec5;--vbr-widget-primary-color-300: #90a4ae;--vbr-widget-primary-color-400: #78909c;--vbr-widget-primary-color-500: #607d8b;--vbr-widget-primary-color-600: #546e7a;--vbr-widget-primary-color-700: #455a64;--vbr-widget-primary-color-800: #37474f;--vbr-widget-primary-color-900: #263238;--vbr-widget-secondary-color-100: #dcedc8;--vbr-widget-secondary-color-200: #badb94;--vbr-widget-secondary-color-300: #aed581;--vbr-widget-secondary-color-400: #9ccc65;--vbr-widget-secondary-color-500: #8bc34a;--vbr-widget-secondary-color-700: #689f38;--vbr-widget-secondary-color-800: #558b2f;--vbr-widget-secondary-color-900: #33691e;--vbr-widget-danger-color-50: #ffebee;--vbr-widget-danger-color-100: #ffcdd2;--vbr-widget-danger-color-200: #ef9a9a;--vbr-widget-danger-color-300: #e57373;--vbr-widget-danger-color-400: #ef5350;--vbr-widget-danger-color-500: #f44336;--vbr-widget-danger-color-700: #d32f2f;--vbr-widget-danger-color-900: #b71c1c;--vbr-widget-danger-color-a400: #ff1744;--vbr-widget-live-game-color: #8bc34a;--vbr-widget-table-header-font-size: 12px;--vbr-widget-table-default-column-width: 30px;--vbr-widget-table-default-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-neutral-color: var(--vbr-widget-primary-color-300);--vbr-widget-table-header-bg-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-header-hover-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-color: var(--vbr-widget-primary-color-200);--vbr-widget-table-table-header-active-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-hover-bg-color: var(--vbr-widget-secondary-color-100);--vbr-widget-table-active-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-table-active-even-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-table-active-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-hover-bg-color: var(--vbr-widget-secondary-color-400);--vbr-widget-table-portrait-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-table-portrait-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-light-color: var(--vbr-widget-primary-color-600);--vbr-widget-table-cell-dark-color: var(--vbr-widget-primary-color-900);--vbr-widget-table-stripped-bg-color: #f8f9fa;--vbr-widget-table-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-table-label-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-logo-size: 20px;--vbr-widget-table-cell-portrait-size: 26px;--vbr-widget-paginator-color: var(--vbr-widget-primary-color-500);--vbr-widget-paginator-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-hover-color: var(--vbr-widget-primary-color-700);--vbr-widget-paginator-hover-bg-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-active-bg-color: var(--vbr-widget-primary-color-900);--vbr-widget-paginator-disabled-color: var(--vbr-widget-primary-color-200);--vbr-widget-tooltip-font-size: 12px;--vbr-widget-tooltip-color: #ffffff;--vbr-widget-tooltip-bg-color: #000000;--vbr-widget-popover-trigger-hover-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-popover-trigger-focus-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-popover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-dropdown-item-color: var(--vbr-widget-primary-color-500);--vbr-widget-dropdown-item-hover-color: var(--vbr-widget-primary-color-800);--vbr-widget-dropdown-item-hover-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-error-notice-bg-color: var(--vbr-widget-danger-color-50);--vbr-widget-error-notice-border-color: var(--vbr-widget-danger-color-100);--vbr-widget-error-notice-color: var(--vbr-widget-danger-color-700);--vbr-widget-link-color: var(--vbr-widget-secondary-color-700);--vbr-widget-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-base-input-color: var(--vbr-widget-primary-color-800);--vbr-widget-base-input-font-size: .875rem;--vbr-widget-base-input-border-color: var(--vbr-widget-primary-color-300);--vbr-widget-base-input-border-radius: 3px;--vbr-widget-form-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-form-label-font-size: .75rem;--vbr-widget-timezone-selector-color: var(--vbr-widget-primary-color-500);--vbr-widget-timezone-selector-font-size: .8125rem;--vbr-widget-badge-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-badge-color: var(--vbr-widget-primary-color-400);--vbr-widget-badge-font-size: .625rem;--vbr-widget-tab-btn-padding: .625rem 1rem;--vbr-widget-tab-btn-font-size: 1rem;--vbr-widget-tab-btn-font-weight: 500;--vbr-widget-tab-btn-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-color: var(--vbr-widget-primary-color-300);--vbr-widget-tab-btn-border-color: transparent;--vbr-widget-tab-btn-border-style: solid;--vbr-widget-tab-btn-border-width: 0 0 3px 0;--vbr-widget-tab-btn-text-transform: uppercase;--vbr-widget-tab-btn-hover-color: var(--vbr-widget-primary-color-500);--vbr-widget-tab-btn-hover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-hover-border-color: transparent;--vbr-widget-tab-btn-active-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-active-color: var(--vbr-widget-primary-color-900);--vbr-widget-tab-btn-active-border-color: var(--vbr-widget-secondary-color-500)}.transition-fade-enter-active,.transition-fade-leave-active{transition:all .25s ease}.transition-fade-enter-from,.transition-fade-leave-to{opacity:0;transform:translateY(5px)}img{opacity:0;transition:opacity .5s ease-out}img.is-loaded{opacity:1}a{color:var(--vbr-widget-link-color);text-decoration:none}a:hover{color:var(--vbr-widget-hover-color)}.floating-content.is-tooltip{background-color:var(--vbr-widget-tooltip-bg-color);color:var(--vbr-widget-tooltip-color);font-weight:700;padding:5px 10px;border-radius:4px;font-size:var(--vbr-widget-tooltip-font-size);white-space:nowrap;pointer-events:none}.floating-content.is-tooltip .is-arrow{background-color:var(--vbr-widget-tooltip-bg-color)}.floating-content.is-content{border-radius:4px;box-shadow:2px 14px 23px #00000040}.floating-content.is-content .is-arrow{background-color:var(--vbr-widget-primary-color-50)}.floating-content .is-arrow{position:absolute;width:8px;height:8px;transform:rotate(45deg)}[data-placement^=top] .floating-content .is-arrow{bottom:-4px}[data-placement^=bottom] .floating-content .is-arrow{top:-4px}[data-placement^=left] .floating-content .is-arrow{right:-4px}[data-placement^=right] .floating-content .is-arrow{left:-4px}.mjsz-vbr-error-notice{display:flex;align-items:center;justify-items:flex-start;margin:10px 0;padding:10px 20px;background-color:var(--vbr-widget-error-notice-bg-color);color:var(--vbr-widget-error-notice-color);border:1px solid var(--vbr-widget-error-notice-border-color)}.mjsz-vbr-error-notice .icon{margin-right:15px}.mjsz-vbr-timezone-selector{padding:3px 0;color:var(--vbr-widget-timezone-selector-color);font-size:var(--vbr-widget-timezone-selector-font-size);font-weight:500}.mjsz-vbr-timezone-selector .is-active{font-weight:700}.is-badge{display:inline-block;padding:.125rem .25rem;color:var(--vbr-widget-badge-color);font-size:var(--vbr-widget-badge-font-size);font-weight:700;text-transform:uppercase;background-color:var(--vbr-widget-badge-bg-color);border-radius:3px}.is-badge+.is-badge{margin-left:3px}.is-badge.is-invert{color:var(--vbr-widget-badge-bg-color);background-color:var(--vbr-widget-badge-color)}
`, _t = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, $t = `.mjsz-vbr-table-responsive{width:100%;overflow-x:auto}.mjsz-vbr-table-responsive table{width:100%}
`, yl = {
  __name: "Standings.ce",
  props: {
    ...gt,
    ...Xt,
    type: {
      type: String,
      default: "3",
      validator: (e) => ["2", "3"].includes(e)
    }
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = z(() => t.locale), { state: i, isLoading: s } = lt(
      () => bt("/v1/standings", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: d, change: l } = At(), m = z(() => wt(c(i)).sorted(d).addContinuousIndex().value()), u = z(() => t.type === "3" ? qn : Zn), p = (g) => l(g), f = (g) => It(t.externalTeamLink, g);
    return (g, h) => ($(), P("div", null, [
      M(c(yt), { locale: o.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: u.value,
            rows: m.value.rows,
            "is-loading": c(s),
            "hide-columns": g.hideColumns,
            sort: c(d),
            "external-team-resolver": f,
            "is-team-linked": g.isTeamLinked,
            onSort: p
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, bl = /* @__PURE__ */ ct(yl, [["styles", [xt, _t, $t]]]), wl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, xl = /* @__PURE__ */ D("rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  ry: "2"
}, null, -1), _l = /* @__PURE__ */ D("line", {
  x1: "8",
  y1: "21",
  x2: "16",
  y2: "21"
}, null, -1), $l = /* @__PURE__ */ D("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "21"
}, null, -1), Tl = [
  xl,
  _l,
  $l
];
function Sl(e, t) {
  return $(), P("svg", wl, Tl);
}
const kl = { render: Sl }, Al = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Pl = /* @__PURE__ */ D("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}, null, -1), zl = /* @__PURE__ */ D("circle", {
  cx: "12",
  cy: "5",
  r: "1"
}, null, -1), El = /* @__PURE__ */ D("circle", {
  cx: "12",
  cy: "19",
  r: "1"
}, null, -1), Ll = [
  Pl,
  zl,
  El
];
function Ol(e, t) {
  return $(), P("svg", Al, Ll);
}
const jl = { render: Ol }, Dl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ml = /* @__PURE__ */ D("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, null, -1), Il = /* @__PURE__ */ D("rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1",
  ry: "1"
}, null, -1), Cl = [
  Ml,
  Il
];
function Rl(e, t) {
  return $(), P("svg", Dl, Cl);
}
const Nl = { render: Rl }, Gl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Bl = /* @__PURE__ */ D("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }, null, -1), Fl = /* @__PURE__ */ D("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }, null, -1), Vl = [
  Bl,
  Fl
];
function Yl(e, t) {
  return $(), P("svg", Gl, Vl);
}
const Hl = { render: Yl }, Ul = {
  key: 0,
  class: "is-text-dark"
}, Wl = ["href"], Kl = {
  key: 0,
  class: "label"
}, ql = {
  key: 1,
  class: "label"
}, Zl = {
  key: 2,
  class: "label"
}, Xl = { key: 1 }, Jl = ["onClick"], Ql = { class: "is-dropdown-menu" }, tc = ["href"], ec = { key: 0 }, rc = ["href"], nc = {
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
      default: Xn
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
  setup(e) {
    const t = e, { onError: r } = kn(), { columns: n, error: a } = Nn(
      Jn,
      t.hideColumns,
      z(() => ({
        offsetName: t.offsetName
      }))
    );
    go(
      a,
      () => r(
        new Gn(Se.message, {
          ...Se.options,
          cause: { column: a.value }
        })
      ),
      {
        immediate: !0
      }
    );
    const { t: o } = Jt();
    return (i, s) => ($(), K(c(Pn), null, {
      default: N(({ el: d }) => [
        M(c(Tn), {
          columns: c(n),
          rows: t.rows,
          "is-loading": e.isLoading,
          "append-to": d
        }, {
          "cell-homeTeamLogo": N(({ row: l }) => [
            ($(), K(c(Te), {
              class: "is-logo-image is-right",
              key: l.id,
              src: l.homeTeamLogo
            }, null, 8, ["src"]))
          ]),
          "cell-awayTeamLogo": N(({ row: l }) => [
            ($(), K(c(Te), {
              class: "is-logo-image is-right",
              key: l.id,
              src: l.awayTeamLogo
            }, null, 8, ["src"]))
          ]),
          "cell-gameResult": N(({ row: l }) => [
            l.gameStatus === 0 ? ($(), P("span", Ul, "-:-")) : ($(), P("a", {
              key: 1,
              href: e.externalGameResolver(l.id),
              target: "_blank",
              class: rt({ "is-text-dark": l.gameStatus !== 1, "is-text-accent": l.gameStatus === 1 })
            }, Z(l.homeTeamScore) + ":" + Z(l.awayTeamScore), 11, Wl))
          ]),
          "cell-gameResultType": N(({ row: l }) => [
            l.isOvertime ? ($(), P("span", Kl, Z(c(o)("common.overtimeShort")), 1)) : G("", !0),
            l.isShootout ? ($(), P("span", ql, Z(c(o)("common.shootoutShort")), 1)) : G("", !0),
            l.seriesStandings ? ($(), P("span", Zl, Z(l.seriesStandings), 1)) : G("", !0)
          ]),
          "cell-broadcast": N(({ row: l }) => [
            l.broadcast ? ($(), K(c(kl), { key: 0 })) : ($(), P("span", Xl))
          ]),
          "cell-more": N(({ row: l }) => [
            M(c($n), {
              offset: 2,
              placement: "left",
              theme: "content",
              "append-to": d
            }, {
              default: N(({ setRef: m, show: u }) => [
                D("button", {
                  ref: m,
                  onClick: Wt(u, ["stop"])
                }, [
                  M(c(jl))
                ], 8, Jl)
              ]),
              content: N(() => [
                D("ul", Ql, [
                  D("li", null, [
                    D("a", {
                      href: e.externalBaseUrl + l.id,
                      class: "is-dropdown-item",
                      target: "_blank"
                    }, [
                      M(c(Nl), { width: "14" }),
                      Ct(" " + Z(c(o)("common.report")), 1)
                    ], 8, tc)
                  ]),
                  l.video ? ($(), P("li", ec, [
                    D("a", {
                      href: l.video,
                      class: "is-dropdown-item",
                      target: "_blank"
                    }, [
                      M(c(Hl), { width: "14" }),
                      Ct(" " + Z(c(o)("common.video")), 1)
                    ], 8, rc)
                  ])) : G("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["append-to"])
          ]),
          loading: N(() => [
            M(c(An))
          ]),
          _: 2
        }, 1032, ["columns", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, Pt = `.mjsz-vbr-paginator{display:flex;flex-direction:row;list-style-type:none;margin:10px 0;padding:0}.mjsz-vbr-paginator button,.mjsz-vbr-paginator div{display:flex;align-items:center;justify-content:center;padding:6px 12px;text-decoration:none;cursor:pointer;color:var(--vbr-widget-paginator-color);border:1px solid var(--vbr-widget-paginator-border-color);background-color:var(--vbr-widget-paginator-bg-color);margin-left:-1px}.mjsz-vbr-paginator button .icon,.mjsz-vbr-paginator div .icon{width:16px;height:16px;margin:0 -4px}.mjsz-vbr-paginator button:hover:not(.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator button.is-active),.mjsz-vbr-paginator div:hover:not(.mjsz-vbr-paginator div.is-disabled,.mjsz-vbr-paginator div.is-active){color:var(--vbr-widget-paginator-hover-color);background-color:var(--vbr-widget-paginator-hover-bg-color)}.mjsz-vbr-paginator button:disabled,.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator div:disabled,.mjsz-vbr-paginator div.is-disabled{color:var(--vbr-widget-paginator-disabled-color);background-color:var(--vbr-widget-paginator-bg-color);pointer-events:none;cursor:default}.mjsz-vbr-paginator button.is-active,.mjsz-vbr-paginator div.is-active{color:var(--vbr-widget-paginator-active-color);background-color:var(--vbr-widget-paginator-active-bg-color);border-color:var(--vbr-widget-paginator-active-bg-color);cursor:default}
`, oc = `.is-dropdown-menu{padding:8px 0;margin:0;min-width:160px;color:#000;list-style:none;background:var(--vbr-widget-popover-bg-color);border-radius:3px;box-shadow:0 5px 30px rgba(black,.3)}.is-dropdown-menu .is-dropdown-item{display:flex;align-items:center;padding:.25rem 1rem;font-family:var(--vbr-widget-font-family);line-height:24px;color:var(--vbr-widget-dropdown-item-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.is-dropdown-menu .is-dropdown-item:hover{color:var(--vbr-widget-dropdown-item-hover-color);background-color:var(--vbr-widget-dropdown-item-hover-bg-color)}.is-dropdown-menu .is-dropdown-item svg{margin-right:8px}
`, ac = {
  __name: "Schedule.ce",
  props: {
    ...gt,
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
      validator: (e) => e >= 1
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
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = z(() => t.locale), {
      state: i,
      isLoading: s,
      execute: d
    } = lt(
      () => bt("/v1/gamesList", t.apiKey, {
        championshipId: t.championshipId,
        division: t.division
      }),
      [],
      {
        resetOnExecute: !1,
        immediate: !t.autoRefresh,
        onError: (k) => {
          r(k), m == null || m();
        }
      }
    ), l = z(() => hl(i.value)), { pause: m, resume: u } = Oo(d, Qn, { immediate: !1 }), { page: p, change: f } = Ie({
      initial: t.initialPage,
      items: l,
      limit: t.limit,
      auto: t.autoInitialPage
    }), g = F(Cn()), h = z(() => oe(/* @__PURE__ */ new Date(), c(g), t.locale)), v = z(() => wt(c(l)).filter(t.teamFilterByName, ["homeTeamName", "awayTeamName"]).schedule(c(g), c(o)).pagination(c(p), t.limit).value());
    if (t.autoRefresh) {
      u();
      const k = So();
      pt(k, (j) => {
        if (j === "visible")
          return u();
        m();
      });
    }
    const x = z(() => {
      var k;
      return (k = v.value) == null ? void 0 : k.totalItems;
    }), y = (k) => {
      g.value = k;
    }, T = (k) => vl(t.externalGameLink, k);
    return (k, j) => ($(), P("div", null, [
      M(c(yt), {
        locale: t.locale
      }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          e.timezoneSelector ? ($(), K(c(nl), {
            key: t.locale,
            locale: t.locale,
            "current-zone": g.value,
            onChange: y
          }, null, 8, ["locale", "current-zone"])) : G("", !0),
          M(nc, {
            rows: v.value.rows,
            "is-loading": c(s),
            "offset-name": h.value,
            "hide-columns": t.hideColumns,
            "external-game-resolver": T
          }, null, 8, ["rows", "is-loading", "offset-name", "hide-columns"]),
          M(c(Me), {
            page: c(p),
            "items-per-page": t.limit,
            "total-items": x.value,
            "range-length": 5,
            onChange: c(f)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, ic = /* @__PURE__ */ ct(ac, [["styles", [xt, _t, $t, Pt, oc]]]), sc = {
  __name: "FieldPlayersLeader.ce",
  props: {
    ...gt,
    ...Xe
  },
  setup(e) {
    const t = e, r = to, n = z(() => t.locale), { onError: a, error: o, hasError: i } = vt(), { state: s, isLoading: d } = lt(
      () => bt("/v1/playersStatsPeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (y) => a(y)
      }
    ), { page: l, change: m } = Ie(), { sort: u, change: p } = At({
      sortTarget: "point",
      orders: [{ target: "point", direction: Dt }]
    }), f = z(() => ge(c(s), ar)), g = z(() => wt(c(f)).filter(t.teamFilterByName, ["teamName"]).sorted(u).addIndex(u.sortTarget).pagination(c(l), t.limit).value()), h = z(() => {
      var y;
      return (y = g.value) == null ? void 0 : y.totalItems;
    }), v = (y) => It(t.externalTeamLink, y), x = (y) => sr(t.externalPlayerLink, y);
    return (y, T) => ($(), P("div", null, [
      M(c(yt), { locale: n.value }, {
        default: N(() => [
          c(i) ? ($(), K(c(ht), {
            key: 0,
            error: c(o)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(r),
            rows: g.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(u),
            "external-team-resolver": v,
            "external-player-resolver": x,
            "is-team-linked": y.isTeamLinked,
            "is-player-linked": y.isPlayerLinked,
            onSort: c(p)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          M(c(Me), {
            page: c(l),
            "items-per-page": t.limit,
            "total-items": h.value,
            "range-length": 5,
            onChange: c(m)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, lc = /* @__PURE__ */ ct(sc, [["styles", [xt, _t, $t, Pt]]]), cc = {
  __name: "FieldPlayersPenalties.ce",
  props: {
    ...gt,
    ...Xe
  },
  setup(e) {
    const t = e, r = eo, n = z(() => t.locale), { onError: a, error: o, hasError: i } = vt(), { state: s, isLoading: d } = lt(
      () => bt("/v1/playersPenaltyPeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (y) => a(y)
      }
    ), { page: l, change: m } = Ie(), { sort: u, change: p } = At({
      sortTarget: "pim",
      orders: [{ target: "pim", direction: Dt }]
    }), f = z(() => ge(c(s), ar)), g = z(() => wt(c(f)).filter(t.teamFilterByName, ["teamName"]).sorted(u).addIndex(u.sortTarget).pagination(c(l), t.limit).value()), h = z(() => {
      var y;
      return (y = g.value) == null ? void 0 : y.totalItems;
    }), v = (y) => It(t.externalTeamLink, y), x = (y) => sr(t.externalPlayerLink, y);
    return (y, T) => ($(), P("div", null, [
      M(c(yt), { locale: n.value }, {
        default: N(() => [
          c(i) ? ($(), K(c(ht), {
            key: 0,
            error: c(o)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(r),
            rows: g.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(u),
            "external-team-resolver": v,
            "external-player-resolver": x,
            "is-team-linked": y.isTeamLinked,
            "is-player-linked": y.isPlayerLinked,
            onSort: c(p)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          M(c(Me), {
            page: c(l),
            "items-per-page": t.limit,
            "total-items": h.value,
            "range-length": 5,
            onChange: c(m)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, uc = /* @__PURE__ */ ct(cc, [["styles", [xt, _t, $t, Pt]]]), dc = {
  __name: "GoaliesLeader.ce",
  props: {
    ...gt,
    ...Xe,
    underLimit: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = oo, i = z(() => t.locale), s = z(() => t.underLimit ? ro : no), { state: d, isLoading: l } = lt(
      () => bt(s, t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (T) => r(T)
      }
    ), { page: m, change: u } = Ie(), { sort: p, change: f } = At({
      sortTarget: "svsPercent",
      orders: [{ target: "svsPercent", direction: Dt }]
    }), g = z(() => ge(c(d), ar, ir(["mip"]))), h = z(() => wt(c(g)).filter(t.teamFilterByName, ["teamName"]).playerName().sorted(p).addIndex(p.sortTarget).pagination(c(m), t.limit).value()), v = z(() => {
      var T;
      return (T = h.value) == null ? void 0 : T.totalItems;
    }), x = (T) => It(t.externalTeamLink, T), y = (T) => sr(t.externalPlayerLink, T);
    return (T, k) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: h.value.rows,
            "is-loading": c(l),
            "hide-columns": t.hideColumns,
            sort: c(p),
            "external-team-resolver": x,
            "external-player-resolver": y,
            "is-team-linked": T.isTeamLinked,
            "is-player-linked": T.isPlayerLinked,
            onSort: c(f)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "is-player-linked", "onSort"]),
          M(c(Me), {
            page: c(m),
            "items-per-page": t.limit,
            "total-items": v.value,
            "range-length": 5,
            onChange: c(u)
          }, null, 8, ["page", "items-per-page", "total-items", "onChange"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, fc = /* @__PURE__ */ ct(dc, [["styles", [xt, _t, $t, Pt]]]), pc = {
  __name: "TeamAttendance.ce",
  props: {
    ...gt,
    ...Xt
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = ao, i = z(() => t.locale), { state: s, isLoading: d } = lt(
      () => bt("/v1/teamAttendancePeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (f) => r(f)
      }
    ), { sort: l, change: m } = At({
      sortTarget: "totalAttendanceAvg",
      orders: [{ target: "totalAttendanceAvg", direction: Dt }]
    }), u = z(() => wt(c(s)).sorted(l).addIndex(l.sortTarget).value()), p = (f) => It(t.externalTeamLink, f);
    return (f, g) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: u.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(l),
            "external-team-resolver": p,
            "is-team-linked": f.isTeamLinked,
            onSort: c(m)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, mc = /* @__PURE__ */ ct(pc, [["styles", [xt, _t, $t, Pt]]]), gc = {
  __name: "TeamFairplay.ce",
  props: {
    ...gt,
    ...Xt
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = io, i = z(() => t.locale), { state: s, isLoading: d } = lt(
      () => bt("/v1/teamFairplayPeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (f) => r(f)
      }
    ), { sort: l, change: m } = At({
      sortTarget: "pim",
      orders: [{ target: "pim", direction: Dt }]
    }), u = z(() => wt(c(s)).sorted(l).addIndex(l.sortTarget).value()), p = (f) => externalTeamLinkResolver(t.externalTeamLink, f);
    return (f, g) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: u.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(l),
            "external-team-resolver": p,
            "is-team-linked": f.isTeamLinked,
            onSort: c(m)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, hc = /* @__PURE__ */ ct(gc, [["styles", [xt, _t, $t, Pt]]]), vc = {
  __name: "TeamPenaltyKilling.ce",
  props: {
    ...gt,
    ...Xt
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = so, i = z(() => t.locale), { state: s, isLoading: d } = lt(
      () => bt("/v1/teamPowerPlayPeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: l, change: m } = At({
      sortTarget: "pkPercent",
      orders: [{ target: "pkPercent", direction: Dt }]
    }), u = z(() => ge(c(s), ir(["dvgTime", "dvgTimePP1", "dvgTimePP2"]))), p = z(() => wt(c(u)).sorted(l).addIndex(l.sortTarget).value()), f = (g) => It(t.externalTeamLink, g);
    return (g, h) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: p.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(l),
            "external-team-resolver": f,
            "is-team-linked": g.isTeamLinked,
            onSort: c(m)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, yc = /* @__PURE__ */ ct(vc, [["styles", [xt, _t, $t, Pt]]]), bc = {
  __name: "TeamPowerplay.ce",
  props: {
    ...gt,
    ...Xt
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = lo, i = z(() => t.locale), { state: s, isLoading: d } = lt(
      () => bt("/v1/teamPowerPlayPeriod", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (g) => r(g)
      }
    ), { sort: l, change: m } = At({
      sortTarget: "ppPercent",
      orders: [{ target: "ppPercent", direction: Dt }]
    }), u = z(() => ge(c(s), ir(["advTime", "advTimePP1", "advTimePP2"]))), p = z(() => wt(c(u)).sorted(l).addIndex(l.sortTarget).value()), f = (g) => It(t.externalTeamLink, g);
    return (g, h) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: p.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(l),
            "external-team-resolver": f,
            "is-team-linked": g.isTeamLinked,
            onSort: c(m)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, wc = /* @__PURE__ */ ct(bc, [["styles", [xt, _t, $t, Pt]]]), xc = {
  __name: "TeamScoringEfficiency.ce",
  props: {
    ...gt,
    ...Xt
  },
  setup(e) {
    const t = e, { onError: r, error: n, hasError: a } = vt(), o = co, i = z(() => t.locale), { state: s, isLoading: d } = lt(
      () => bt("/v1/standings", t.apiKey, {
        championshipId: Number(t.championshipId),
        division: t.division
      }),
      [],
      {
        onError: (f) => r(f)
      }
    ), { sort: l, change: m } = At({
      sortTarget: "GFShots",
      orders: [{ target: "GFShots", direction: Dt }]
    }), u = z(() => wt(c(s)).sorted(l).addIndex(l.sortTarget).value()), p = (f) => It(t.externalTeamLink, f);
    return (f, g) => ($(), P("div", null, [
      M(c(yt), { locale: i.value }, {
        default: N(() => [
          c(a) ? ($(), K(c(ht), {
            key: 0,
            error: c(n)
          }, null, 8, ["error"])) : G("", !0),
          M(c(kt), {
            columns: c(o),
            rows: u.value.rows,
            "is-loading": c(d),
            "hide-columns": t.hideColumns,
            sort: c(l),
            "external-team-resolver": p,
            "is-team-linked": f.isTeamLinked,
            onSort: c(m)
          }, null, 8, ["columns", "rows", "is-loading", "hide-columns", "sort", "is-team-linked", "onSort"])
        ]),
        _: 1
      }, 8, ["locale"])
    ]));
  }
}, _c = /* @__PURE__ */ ct(xc, [["styles", [xt, _t, $t, Pt]]]), $c = mt(bl), Tc = mt(ic), Sc = mt(lc), kc = mt(uc), Ac = mt(fc), Pc = mt(mc), zc = mt(hc), Ec = mt(yc), Lc = mt(wc), Oc = mt(_c);
function Mc() {
  customElements.define("mjsz-vbr-standings", $c), customElements.define("mjsz-vbr-schedule", Tc), customElements.define("mjsz-vbr-players-leader", Sc), customElements.define("mjsz-vbr-players-penalties", kc), customElements.define("mjsz-vbr-goalies", Ac), customElements.define("mjsz-vbr-team-attendance", Pc), customElements.define("mjsz-vbr-team-fairplay", zc), customElements.define("mjsz-vbr-team-penalty-killing", Ec), customElements.define("mjsz-vbr-team-powerplay", Lc), customElements.define("mjsz-vbr-team-scoring", Oc);
}
export {
  Sc as FieldPlayersLeaderCE,
  kc as FieldPlayersPenaltiesCE,
  Ac as GoaliesLeaderCE,
  Tc as ScheduleCE,
  $c as StandingsCE,
  Pc as TeamAttendanceCE,
  zc as TeamFairplayCE,
  Ec as TeamPenaltyKillingCE,
  Lc as TeamPowerplayCE,
  Oc as TeamScoringEfficiencyCE,
  Mc as default
};
