/**
 * name: @mjsz-vbr-elements/extended
 * version: v2.1.0 - 07/06/2023, 12:28:09
 * (c) 2023
 * description: Data visualization for MJSZ VBR
 * author: Ákos Stegner <akos.stegner@gmail.com>
 */
import { computed as C, withDirectives as Zr, openBlock as x, createElementBlock as T, normalizeClass as H, unref as f, renderSlot as it, vModelSelect as to, watch as ut, nextTick as eo, getCurrentScope as ro, onScopeDispose as no, ref as G, readonly as Xr, isRef as Nt, reactive as Mt, shallowRef as ur, getCurrentInstance as oo, defineComponent as Jr, h as ao, provide as Qr, inject as tn, createElementVNode as S, Fragment as Z, normalizeStyle as dr, createVNode as F, Transition as io, withCtx as K, createTextVNode as dt, toDisplayString as k, createCommentVNode as R, toRefs as en, renderList as et, createBlock as at, withKeys as mr, withModifiers as re, onErrorCaptured as so, createSlots as lo, normalizeProps as rn, guardReactiveProps as nn, vModelText as co, mergeProps as uo, toHandlers as mo, toRef as pr, defineCustomElement as Ue } from "vue";
import { COLUMNS_FIELD_PLAYERS as ce, SORT_STATE_DESCEND as st, COLUMNS_FIELD_PLAYERS_PENALTY as po, COLUMNS_GOALIES as fr, COLUMNS_TEAM_ATTENDANCE as fo, COLUMNS_TEAMS_FAIRPLAY as go, COLUMNS_TEAMS_PENALTY_KILLING as vo, COLUMNS_TEAMS_POWERPLAY as ho, COLUMNS_SCORING_EFFICIENCY as bo, playerStatsProps as yo, REFRESH_DELAY as gr } from "@mjsz-vbr-elements/core";
const ct = (t) => ({}.VITE_CSS_CLASS_PREFIX || "mjsz-vbr-") + t, _t = {
  __name: "BaseSelect",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = ct("base-input"), a = C({ get: () => r.modelValue, set: (o) => e("update:modelValue", o) });
    return (o, i) => Zr((x(), T("select", {
      "onUpdate:modelValue": i[0] || (i[0] = (s) => a.value = s),
      class: H([f(n), "is-select"])
    }, [
      it(o.$slots, "default")
    ], 2)), [
      [to, a.value]
    ]);
  }
};
function Ke(t) {
  return ro() ? (no(t), !0) : !1;
}
function vt(t) {
  return typeof t == "function" ? t() : f(t);
}
const be = typeof window < "u", wo = (t) => typeof t < "u", pt = () => {
}, xo = /* @__PURE__ */ zo();
function zo() {
  var t;
  return be && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function $o(t, e) {
  function r(...n) {
    return new Promise((a, o) => {
      Promise.resolve(t(() => e.apply(this, n), { fn: e, thisArg: this, args: n })).then(a).catch(o);
    });
  }
  return r;
}
const on = (t) => t();
function So(t = on) {
  const e = G(!0);
  function r() {
    e.value = !1;
  }
  function n() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: Xr(e), pause: r, resume: n, eventFilter: a };
}
function Ne(t, e = !1, r = "Timeout") {
  return new Promise((n, a) => {
    setTimeout(e ? () => a(r) : n, t);
  });
}
function Re(t, e = !1) {
  function r(c, { flush: m = "sync", deep: d = !1, timeout: v, throwOnTimeout: p } = {}) {
    let h = null;
    const y = [new Promise((z) => {
      h = ut(
        t,
        (P) => {
          c(P) !== e && (h == null || h(), z(P));
        },
        {
          flush: m,
          deep: d,
          immediate: !0
        }
      );
    })];
    return v != null && y.push(
      Ne(v, p).then(() => vt(t)).finally(() => h == null ? void 0 : h())
    ), Promise.race(y);
  }
  function n(c, m) {
    if (!Nt(c))
      return r((P) => P === c, m);
    const { flush: d = "sync", deep: v = !1, timeout: p, throwOnTimeout: h } = m ?? {};
    let w = null;
    const z = [new Promise((P) => {
      w = ut(
        [t, c],
        ([E, L]) => {
          e !== (E === L) && (w == null || w(), P(E));
        },
        {
          flush: d,
          deep: v,
          immediate: !0
        }
      );
    })];
    return p != null && z.push(
      Ne(p, h).then(() => vt(t)).finally(() => (w == null || w(), vt(t)))
    ), Promise.race(z);
  }
  function a(c) {
    return r((m) => !!m, c);
  }
  function o(c) {
    return n(null, c);
  }
  function i(c) {
    return n(void 0, c);
  }
  function s(c) {
    return r(Number.isNaN, c);
  }
  function u(c, m) {
    return r((d) => {
      const v = Array.from(d);
      return v.includes(c) || v.includes(vt(c));
    }, m);
  }
  function l(c) {
    return g(1, c);
  }
  function g(c = 1, m) {
    let d = -1;
    return r(() => (d += 1, d >= c), m);
  }
  return Array.isArray(vt(t)) ? {
    toMatch: r,
    toContains: u,
    changed: l,
    changedTimes: g,
    get not() {
      return Re(t, !e);
    }
  } : {
    toMatch: r,
    toBe: n,
    toBeTruthy: a,
    toBeNull: o,
    toBeNaN: s,
    toBeUndefined: i,
    changed: l,
    changedTimes: g,
    get not() {
      return Re(t, !e);
    }
  };
}
function _o(t) {
  return Re(t);
}
function We(t, e, r = {}) {
  const {
    immediate: n = !0
  } = r, a = G(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function s() {
    a.value = !1, i();
  }
  function u(...l) {
    i(), a.value = !0, o = setTimeout(() => {
      a.value = !1, o = null, t(...l);
    }, vt(e));
  }
  return n && (a.value = !0, be && u()), Ke(s), {
    isPending: Xr(a),
    start: u,
    stop: s
  };
}
var vr = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, jo = Object.prototype.propertyIsEnumerable, ko = (t, e) => {
  var r = {};
  for (var n in t)
    To.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && vr)
    for (var n of vr(t))
      e.indexOf(n) < 0 && jo.call(t, n) && (r[n] = t[n]);
  return r;
};
function Po(t, e, r = {}) {
  const n = r, {
    eventFilter: a = on
  } = n, o = ko(n, [
    "eventFilter"
  ]);
  return ut(
    t,
    $o(
      a,
      e
    ),
    o
  );
}
function an(t, e, r) {
  const n = ut(t, (...a) => (eo(() => n()), e(...a)), r);
}
var Ao = Object.defineProperty, Oo = Object.defineProperties, Eo = Object.getOwnPropertyDescriptors, de = Object.getOwnPropertySymbols, sn = Object.prototype.hasOwnProperty, ln = Object.prototype.propertyIsEnumerable, hr = (t, e, r) => e in t ? Ao(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mo = (t, e) => {
  for (var r in e || (e = {}))
    sn.call(e, r) && hr(t, r, e[r]);
  if (de)
    for (var r of de(e))
      ln.call(e, r) && hr(t, r, e[r]);
  return t;
}, Io = (t, e) => Oo(t, Eo(e)), Do = (t, e) => {
  var r = {};
  for (var n in t)
    sn.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && de)
    for (var n of de(t))
      e.indexOf(n) < 0 && ln.call(t, n) && (r[n] = t[n]);
  return r;
};
function Lo(t, e, r = {}) {
  const n = r, {
    eventFilter: a
  } = n, o = Do(n, [
    "eventFilter"
  ]), { eventFilter: i, pause: s, resume: u, isActive: l } = So(a);
  return { stop: Po(
    t,
    e,
    Io(Mo({}, o), {
      eventFilter: i
    })
  ), pause: s, resume: u, isActive: l };
}
function qt(t) {
  var e;
  const r = vt(t);
  return (e = r == null ? void 0 : r.$el) != null ? e : r;
}
const qe = be ? window : void 0, Co = be ? window.document : void 0;
function Rt(...t) {
  let e, r, n, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([r, n, a] = t, e = qe) : [e, r, n, a] = t, !e)
    return pt;
  Array.isArray(r) || (r = [r]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((g) => g()), o.length = 0;
  }, s = (g, c, m, d) => (g.addEventListener(c, m, d), () => g.removeEventListener(c, m, d)), u = ut(
    () => [qt(e), vt(a)],
    ([g, c]) => {
      i(), g && o.push(
        ...r.flatMap((m) => n.map((d) => s(g, m, d, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    u(), i();
  };
  return Ke(l), l;
}
let br = !1;
function No(t, e, r = {}) {
  const { window: n = qe, ignore: a = [], capture: o = !0, detectIframe: i = !1 } = r;
  if (!n)
    return;
  xo && !br && (br = !0, Array.from(n.document.body.children).forEach((m) => m.addEventListener("click", pt)));
  let s = !0;
  const u = (m) => a.some((d) => {
    if (typeof d == "string")
      return Array.from(n.document.querySelectorAll(d)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = qt(d);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), g = [
    Rt(n, "click", (m) => {
      const d = qt(t);
      if (!(!d || d === m.target || m.composedPath().includes(d))) {
        if (m.detail === 0 && (s = !u(m)), !s) {
          s = !0;
          return;
        }
        e(m);
      }
    }, { passive: !0, capture: o }),
    Rt(n, "pointerdown", (m) => {
      const d = qt(t);
      d && (s = !m.composedPath().includes(d) && !u(m));
    }, { passive: !0 }),
    i && Rt(n, "blur", (m) => {
      var d;
      const v = qt(t);
      ((d = n.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(v != null && v.contains(n.document.activeElement)) && e(m);
    })
  ].filter(Boolean);
  return () => g.forEach((m) => m());
}
function yr(t, e = {}) {
  const {
    interrupt: r = !0,
    onError: n = pt,
    onFinished: a = pt
  } = e, o = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  }, i = Array.from(new Array(t.length), () => ({ state: o.pending, data: null })), s = Mt(i), u = G(-1);
  if (!t || t.length === 0)
    return a(), {
      activeIndex: u,
      result: s
    };
  function l(g, c) {
    u.value++, s[u.value].data = c, s[u.value].state = g;
  }
  return t.reduce((g, c) => g.then((m) => {
    var d;
    if (((d = s[u.value]) == null ? void 0 : d.state) === o.rejected && r) {
      a();
      return;
    }
    return c(m).then((v) => (l(o.fulfilled, v), u.value === t.length - 1 && a(), v));
  }).catch((m) => (l(o.rejected, m), n(), m)), Promise.resolve()), {
    activeIndex: u,
    result: s
  };
}
var Ro = Object.defineProperty, Go = Object.defineProperties, Fo = Object.getOwnPropertyDescriptors, wr = Object.getOwnPropertySymbols, Vo = Object.prototype.hasOwnProperty, Bo = Object.prototype.propertyIsEnumerable, xr = (t, e, r) => e in t ? Ro(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ho = (t, e) => {
  for (var r in e || (e = {}))
    Vo.call(e, r) && xr(t, r, e[r]);
  if (wr)
    for (var r of wr(e))
      Bo.call(e, r) && xr(t, r, e[r]);
  return t;
}, Yo = (t, e) => Go(t, Fo(e));
function cn(t, e, r) {
  const {
    immediate: n = !0,
    delay: a = 0,
    onError: o = pt,
    onSuccess: i = pt,
    resetOnExecute: s = !0,
    shallow: u = !0,
    throwError: l
  } = r ?? {}, g = u ? ur(e) : G(e), c = G(!1), m = G(!1), d = ur(void 0);
  async function v(w = 0, ...y) {
    s && (g.value = e), d.value = void 0, c.value = !1, m.value = !0, w > 0 && await Ne(w);
    const z = typeof t == "function" ? t(...y) : t;
    try {
      const P = await z;
      g.value = P, c.value = !0, i(P);
    } catch (P) {
      if (d.value = P, o(P), l)
        throw P;
    } finally {
      m.value = !1;
    }
    return g.value;
  }
  n && v(a);
  const p = {
    state: g,
    isReady: c,
    isLoading: m,
    error: d,
    execute: v
  };
  function h() {
    return new Promise((w, y) => {
      _o(m).toBe(!1).then(() => w(p)).catch(y);
    });
  }
  return Yo(Ho({}, p), {
    then(w, y) {
      return h().then(w, y);
    }
  });
}
function Uo(t) {
  return JSON.parse(JSON.stringify(t));
}
function Ko({ document: t = Co } = {}) {
  if (!t)
    return G("visible");
  const e = G(t.visibilityState);
  return Rt(t, "visibilitychange", () => {
    e.value = t.visibilityState;
  }), e;
}
var Wo = Object.defineProperty, zr = Object.getOwnPropertySymbols, qo = Object.prototype.hasOwnProperty, Zo = Object.prototype.propertyIsEnumerable, $r = (t, e, r) => e in t ? Wo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xo = (t, e) => {
  for (var r in e || (e = {}))
    qo.call(e, r) && $r(t, r, e[r]);
  if (zr)
    for (var r of zr(e))
      Zo.call(e, r) && $r(t, r, e[r]);
  return t;
};
async function Jo(t) {
  return new Promise((e, r) => {
    const n = new Image(), { src: a, srcset: o, sizes: i, class: s, loading: u, crossorigin: l } = t;
    n.src = a, o && (n.srcset = o), i && (n.sizes = i), s && (n.className = s), u && (n.loading = u), l && (n.crossOrigin = l), n.onload = () => e(n), n.onerror = r;
  });
}
function Qo(t, e = {}) {
  const r = cn(
    () => Jo(vt(t)),
    void 0,
    Xo({
      resetOnExecute: !0
    }, e)
  );
  return ut(
    () => vt(t),
    () => r.execute(e.delay),
    { deep: !0 }
  ), r;
}
function ta(t, e, r) {
  const { start: n } = We(o, e), a = G(!1);
  async function o() {
    a.value && (await t(), n());
  }
  function i() {
    a.value || (a.value = !0, o());
  }
  function s() {
    a.value = !1;
  }
  return r != null && r.immediate && i(), Ke(s), {
    isActive: a,
    pause: s,
    resume: i
  };
}
function un(t = "history", e = {}) {
  const {
    initialValue: r = {},
    removeNullishValues: n = !0,
    removeFalsyValues: a = !1,
    write: o = !0,
    window: i = qe
  } = e;
  if (!i)
    return Mt(r);
  const s = Mt({});
  function u() {
    if (t === "history")
      return i.location.search || "";
    if (t === "hash") {
      const w = i.location.hash || "", y = w.indexOf("?");
      return y > 0 ? w.slice(y) : "";
    } else
      return (i.location.hash || "").replace(/^#/, "");
  }
  function l(w) {
    const y = w.toString();
    if (t === "history")
      return `${y ? `?${y}` : ""}${i.location.hash || ""}`;
    if (t === "hash-params")
      return `${i.location.search || ""}${y ? `#${y}` : ""}`;
    const z = i.location.hash || "#", P = z.indexOf("?");
    return P > 0 ? `${z.slice(0, P)}${y ? `?${y}` : ""}` : `${z}${y ? `?${y}` : ""}`;
  }
  function g() {
    return new URLSearchParams(u());
  }
  function c(w) {
    const y = new Set(Object.keys(s));
    for (const z of w.keys()) {
      const P = w.getAll(z);
      s[z] = P.length > 1 ? P : w.get(z) || "", y.delete(z);
    }
    Array.from(y).forEach((z) => delete s[z]);
  }
  const { pause: m, resume: d } = Lo(
    s,
    () => {
      const w = new URLSearchParams("");
      Object.keys(s).forEach((y) => {
        const z = s[y];
        Array.isArray(z) ? z.forEach((P) => w.append(y, P)) : n && z == null || a && !z ? w.delete(y) : w.set(y, z);
      }), v(w);
    },
    { deep: !0 }
  );
  function v(w, y) {
    m(), y && c(w), i.history.replaceState(
      i.history.state,
      i.document.title,
      i.location.pathname + l(w)
    ), d();
  }
  function p() {
    o && v(g(), !0);
  }
  Rt(i, "popstate", p, !1), t !== "history" && Rt(i, "hashchange", p, !1);
  const h = g();
  return h.keys().next().value ? c(h) : Object.assign(s, r), s;
}
function ea(t, e, r, n = {}) {
  var a, o, i;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: l,
    deep: g = !1,
    defaultValue: c,
    shouldEmit: m
  } = n, d = oo(), v = r || (d == null ? void 0 : d.emit) || ((a = d == null ? void 0 : d.$emit) == null ? void 0 : a.bind(d)) || ((i = (o = d == null ? void 0 : d.proxy) == null ? void 0 : o.$emit) == null ? void 0 : i.bind(d == null ? void 0 : d.proxy));
  let p = l;
  e || (e = "modelValue"), p = l || p || `update:${e.toString()}`;
  const h = (z) => s ? typeof s == "function" ? s(z) : Uo(z) : z, w = () => wo(t[e]) ? h(t[e]) : c, y = (z) => {
    m ? m(z) && v(p, z) : v(p, z);
  };
  if (u) {
    const z = w(), P = G(z);
    return ut(
      () => t[e],
      (E) => P.value = h(E)
    ), ut(
      P,
      (E) => {
        (E !== t[e] || g) && y(E);
      },
      { deep: g }
    ), P;
  } else
    return C({
      get() {
        return w();
      },
      set(z) {
        y(z);
      }
    });
}
function ra(t, e, r = {}) {
  const n = {};
  for (const a in t)
    n[a] = ea(t, a, e, r);
  return n;
}
function dn(t = [], e = {}) {
  const { delay: r = 0 } = e, n = G(!1), a = C(() => {
    const s = f(t);
    return Array.isArray(s) ? s.map((u) => f(u)).some(Boolean) : s;
  }), { start: o, stop: i } = We(() => {
    n.value = !0;
  }, r);
  return ut(
    a,
    (s) => {
      if (s)
        return o();
      i(), n.value = !1;
    },
    { immediate: !0, deep: !0 }
  ), n;
}
function W(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function J(t) {
  return function e(r) {
    return arguments.length === 0 || W(r) ? e : t.apply(this, arguments);
  };
}
function U(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return W(r) ? e : J(function(a) {
          return t(r, a);
        });
      default:
        return W(r) && W(n) ? e : W(r) ? J(function(a) {
          return t(a, n);
        }) : W(n) ? J(function(a) {
          return t(r, a);
        }) : t(r, n);
    }
  };
}
function ye(t, e) {
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
      return function(r, n, a, o, i) {
        return e.apply(this, arguments);
      };
    case 6:
      return function(r, n, a, o, i, s) {
        return e.apply(this, arguments);
      };
    case 7:
      return function(r, n, a, o, i, s, u) {
        return e.apply(this, arguments);
      };
    case 8:
      return function(r, n, a, o, i, s, u, l) {
        return e.apply(this, arguments);
      };
    case 9:
      return function(r, n, a, o, i, s, u, l, g) {
        return e.apply(this, arguments);
      };
    case 10:
      return function(r, n, a, o, i, s, u, l, g, c) {
        return e.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function Ze(t, e, r) {
  return function() {
    for (var n = [], a = 0, o = t, i = 0; i < e.length || a < arguments.length; ) {
      var s;
      i < e.length && (!W(e[i]) || a >= arguments.length) ? s = e[i] : (s = arguments[a], a += 1), n[i] = s, W(s) || (o -= 1), i += 1;
    }
    return o <= 0 ? r.apply(this, n) : ye(o, Ze(t, n, r));
  };
}
var we = /* @__PURE__ */ U(function(e, r) {
  return e === 1 ? J(r) : ye(e, Ze(e, [], r));
});
function xt(t) {
  return function e(r, n, a) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return W(r) ? e : U(function(o, i) {
          return t(r, o, i);
        });
      case 2:
        return W(r) && W(n) ? e : W(r) ? U(function(o, i) {
          return t(o, n, i);
        }) : W(n) ? U(function(o, i) {
          return t(r, o, i);
        }) : J(function(o) {
          return t(r, n, o);
        });
      default:
        return W(r) && W(n) && W(a) ? e : W(r) && W(n) ? U(function(o, i) {
          return t(o, i, a);
        }) : W(r) && W(a) ? U(function(o, i) {
          return t(o, n, i);
        }) : W(n) && W(a) ? U(function(o, i) {
          return t(r, o, i);
        }) : W(r) ? J(function(o) {
          return t(o, n, a);
        }) : W(n) ? J(function(o) {
          return t(r, o, a);
        }) : W(a) ? J(function(o) {
          return t(r, n, o);
        }) : t(r, n, a);
    }
  };
}
const xe = Array.isArray || function(e) {
  return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]";
};
function na(t) {
  return t != null && typeof t["@@transducer/step"] == "function";
}
function ze(t, e, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!xe(n)) {
      for (var a = 0; a < t.length; ) {
        if (typeof n[t[a]] == "function")
          return n[t[a]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        a += 1;
      }
      if (na(n)) {
        var o = e.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return o(n);
      }
    }
    return r.apply(this, arguments);
  };
}
function mn(t) {
  return t && t["@@transducer/reduced"] ? t : {
    "@@transducer/value": t,
    "@@transducer/reduced": !0
  };
}
const Vt = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(t) {
    return this.xf["@@transducer/result"](t);
  }
};
function Sr(t) {
  for (var e = [], r; !(r = t.next()).done; )
    e.push(r.value);
  return e;
}
function _r(t, e, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (t(e, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function oa(t) {
  var e = String(t).match(/^function (\w*)/);
  return e == null ? "" : e[1];
}
function ht(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function aa(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
const Ie = typeof Object.is == "function" ? Object.is : aa;
var Tr = Object.prototype.toString, pn = /* @__PURE__ */ function() {
  return Tr.call(arguments) === "[object Arguments]" ? function(e) {
    return Tr.call(e) === "[object Arguments]";
  } : function(e) {
    return ht("callee", e);
  };
}(), ia = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), jr = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], kr = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), sa = function(e, r) {
  for (var n = 0; n < e.length; ) {
    if (e[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, It = /* @__PURE__ */ J(typeof Object.keys == "function" && !kr ? function(e) {
  return Object(e) !== e ? [] : Object.keys(e);
} : function(e) {
  if (Object(e) !== e)
    return [];
  var r, n, a = [], o = kr && pn(e);
  for (r in e)
    ht(r, e) && (!o || r !== "length") && (a[a.length] = r);
  if (ia)
    for (n = jr.length - 1; n >= 0; )
      r = jr[n], ht(r, e) && !sa(a, r) && (a[a.length] = r), n -= 1;
  return a;
}), Ge = /* @__PURE__ */ J(function(e) {
  return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
});
function Pr(t, e, r, n) {
  var a = Sr(t), o = Sr(e);
  function i(s, u) {
    return Xe(s, u, r.slice(), n.slice());
  }
  return !_r(function(s, u) {
    return !_r(i, u, s);
  }, o, a);
}
function Xe(t, e, r, n) {
  if (Ie(t, e))
    return !0;
  var a = Ge(t);
  if (a !== Ge(e))
    return !1;
  if (typeof t["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
    return typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t);
  if (typeof t.equals == "function" || typeof e.equals == "function")
    return typeof t.equals == "function" && t.equals(e) && typeof e.equals == "function" && e.equals(t);
  switch (a) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof t.constructor == "function" && oa(t.constructor) === "Promise")
        return t === e;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof t == typeof e && Ie(t.valueOf(), e.valueOf())))
        return !1;
      break;
    case "Date":
      if (!Ie(t.valueOf(), e.valueOf()))
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
      return t.size !== e.size ? !1 : Pr(t.entries(), e.entries(), r.concat([t]), n.concat([e]));
    case "Set":
      return t.size !== e.size ? !1 : Pr(t.values(), e.values(), r.concat([t]), n.concat([e]));
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
  var i = It(t);
  if (i.length !== It(e).length)
    return !1;
  var s = r.concat([t]), u = n.concat([e]);
  for (o = i.length - 1; o >= 0; ) {
    var l = i[o];
    if (!(ht(l, e) && Xe(e[l], t[l], s, u)))
      return !1;
    o -= 1;
  }
  return !0;
}
var $e = /* @__PURE__ */ U(function(e, r) {
  return Xe(e, r, [], []);
});
function la(t, e, r) {
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
    if ($e(t[r], e))
      return r;
    r += 1;
  }
  return -1;
}
function fn(t, e) {
  return la(e, t, 0) >= 0;
}
function ue(t, e) {
  for (var r = 0, n = e.length, a = Array(n); r < n; )
    a[r] = t(e[r]), r += 1;
  return a;
}
function De(t) {
  var e = t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + e.replace(/"/g, '\\"') + '"';
}
var Kt = function(e) {
  return (e < 10 ? "0" : "") + e;
}, ca = typeof Date.prototype.toISOString == "function" ? function(e) {
  return e.toISOString();
} : function(e) {
  return e.getUTCFullYear() + "-" + Kt(e.getUTCMonth() + 1) + "-" + Kt(e.getUTCDate()) + "T" + Kt(e.getUTCHours()) + ":" + Kt(e.getUTCMinutes()) + ":" + Kt(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
function ua(t) {
  return function() {
    return !t.apply(this, arguments);
  };
}
function gn(t, e, r) {
  for (var n = 0, a = r.length; n < a; )
    e = t(e, r[n]), n += 1;
  return e;
}
function da(t, e) {
  for (var r = 0, n = e.length, a = []; r < n; )
    t(e[r]) && (a[a.length] = e[r]), r += 1;
  return a;
}
function me(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var ma = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Vt.init, t.prototype["@@transducer/result"] = Vt.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.f(r) ? this.xf["@@transducer/step"](e, r) : e;
  }, t;
}();
function pa(t) {
  return function(e) {
    return new ma(t, e);
  };
}
var vn = /* @__PURE__ */ U(
  /* @__PURE__ */ ze(["fantasy-land/filter", "filter"], pa, function(t, e) {
    return me(e) ? gn(function(r, n) {
      return t(e[n]) && (r[n] = e[n]), r;
    }, {}, It(e)) : (
      // else
      da(t, e)
    );
  })
), fa = /* @__PURE__ */ U(function(e, r) {
  return vn(ua(e), r);
});
function hn(t, e) {
  var r = function(i) {
    var s = e.concat([t]);
    return fn(i, s) ? "<Circular>" : hn(i, s);
  }, n = function(o, i) {
    return ue(function(s) {
      return De(s) + ": " + r(o[s]);
    }, i.slice().sort());
  };
  switch (Object.prototype.toString.call(t)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + ue(r, t).join(", ") + "))";
    case "[object Array]":
      return "[" + ue(r, t).concat(n(t, fa(function(o) {
        return /^\d+$/.test(o);
      }, It(t)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof t == "object" ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : De(ca(t))) + ")";
    case "[object Map]":
      return "new Map(" + r(Array.from(t)) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof t == "object" ? "new Number(" + r(t.valueOf()) + ")" : 1 / t === -1 / 0 ? "-0" : t.toString(10);
    case "[object Set]":
      return "new Set(" + r(Array.from(t).sort()) + ")";
    case "[object String]":
      return typeof t == "object" ? "new String(" + r(t.valueOf()) + ")" : De(t);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof t.toString == "function") {
        var a = t.toString();
        if (a !== "[object Object]")
          return a;
      }
      return "{" + n(t, It(t)).join(", ") + "}";
  }
}
var Fe = /* @__PURE__ */ J(function(e) {
  return hn(e, []);
}), ga = /* @__PURE__ */ U(function(e, r) {
  if (e === r)
    return r;
  function n(u, l) {
    if (u > l != l > u)
      return l > u ? l : u;
  }
  var a = n(e, r);
  if (a !== void 0)
    return a;
  var o = n(typeof e, typeof r);
  if (o !== void 0)
    return o === typeof e ? e : r;
  var i = Fe(e), s = n(i, Fe(r));
  return s !== void 0 && s === i ? e : r;
}), va = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e;
  }
  return t.prototype["@@transducer/init"] = Vt.init, t.prototype["@@transducer/result"] = Vt.result, t.prototype["@@transducer/step"] = function(e, r) {
    return this.xf["@@transducer/step"](e, this.f(r));
  }, t;
}(), ha = function(e) {
  return function(r) {
    return new va(e, r);
  };
}, ba = /* @__PURE__ */ U(
  /* @__PURE__ */ ze(["fantasy-land/map", "map"], ha, function(e, r) {
    switch (Object.prototype.toString.call(r)) {
      case "[object Function]":
        return we(r.length, function() {
          return e.call(this, r.apply(this, arguments));
        });
      case "[object Object]":
        return gn(function(n, a) {
          return n[a] = e(r[a]), n;
        }, {}, It(r));
      default:
        return ue(e, r);
    }
  })
);
const wt = ba, bn = Number.isInteger || function(e) {
  return e << 0 === e;
};
function Se(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
var _e = /* @__PURE__ */ U(function(e, r) {
  var n = e < 0 ? r.length + e : e;
  return Se(r) ? r.charAt(n) : r[n];
}), ya = /* @__PURE__ */ U(function(e, r) {
  if (r != null)
    return bn(e) ? _e(e, r) : r[e];
});
const bt = ya;
var wa = /* @__PURE__ */ U(function(e, r) {
  return wt(bt(e), r);
}), xa = /* @__PURE__ */ J(function(e) {
  return xe(e) ? !0 : !e || typeof e != "object" || Se(e) ? !1 : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1;
}), Ar = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function za(t, e, r) {
  return function(a, o, i) {
    if (xa(i))
      return t(a, o, i);
    if (i == null)
      return o;
    if (typeof i["fantasy-land/reduce"] == "function")
      return e(a, o, i, "fantasy-land/reduce");
    if (i[Ar] != null)
      return r(a, o, i[Ar]());
    if (typeof i.next == "function")
      return r(a, o, i);
    if (typeof i.reduce == "function")
      return e(a, o, i, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function $a(t, e, r) {
  for (var n = 0, a = r.length; n < a; ) {
    if (e = t["@@transducer/step"](e, r[n]), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return t["@@transducer/result"](e);
}
var Sa = /* @__PURE__ */ U(function(e, r) {
  return ye(e.length, function() {
    return e.apply(r, arguments);
  });
});
function _a(t, e, r) {
  for (var n = r.next(); !n.done; ) {
    if (e = t["@@transducer/step"](e, n.value), e && e["@@transducer/reduced"]) {
      e = e["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return t["@@transducer/result"](e);
}
function Ta(t, e, r, n) {
  return t["@@transducer/result"](r[n](Sa(t["@@transducer/step"], t), e));
}
var yn = /* @__PURE__ */ za($a, Ta, _a), ja = /* @__PURE__ */ function() {
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
function wn(t) {
  return new ja(t);
}
var ka = /* @__PURE__ */ xt(function(t, e, r) {
  return yn(typeof t == "function" ? wn(t) : t, e, r);
});
const xn = ka;
var Pa = /* @__PURE__ */ J(function(e) {
  return function() {
    return e;
  };
});
const Or = Pa;
var Aa = /* @__PURE__ */ J(function(e) {
  return we(xn(ga, 0, wa("length", e)), function() {
    for (var r = 0, n = e.length; r < n; ) {
      if (e[r].apply(this, arguments))
        return !0;
      r += 1;
    }
    return !1;
  });
});
const Oa = Aa;
var Ea = /* @__PURE__ */ xt(function(e, r, n) {
  var a = e(r), o = e(n);
  return a < o ? -1 : a > o ? 1 : 0;
});
const Te = Ea;
function Ma(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Function]" || e === "[object AsyncFunction]" || e === "[object GeneratorFunction]" || e === "[object AsyncGeneratorFunction]";
}
function Ia(t) {
  return new RegExp(t.source, t.flags ? t.flags : (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : "") + (t.dotAll ? "s" : ""));
}
function Je(t, e, r) {
  if (r || (r = new La()), Da(t))
    return t;
  var n = function(o) {
    var i = r.get(t);
    if (i)
      return i;
    r.set(t, o);
    for (var s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (o[s] = e ? Je(t[s], !0, r) : t[s]);
    return o;
  };
  switch (Ge(t)) {
    case "Object":
      return n(Object.create(Object.getPrototypeOf(t)));
    case "Array":
      return n([]);
    case "Date":
      return new Date(t.valueOf());
    case "RegExp":
      return Ia(t);
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
function Da(t) {
  var e = typeof t;
  return t == null || e != "object" && e != "function";
}
var La = /* @__PURE__ */ function() {
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
        for (let i = 0; i < o.length; i += 1) {
          const s = o[i];
          if (s[0] === e)
            return s[1];
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
function Ca(t, e) {
  return function() {
    return e.call(this, t.apply(this, arguments));
  };
}
function Qe(t, e) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return e();
    var n = arguments[r - 1];
    return xe(n) || typeof n[t] != "function" ? e.apply(this, arguments) : n[t].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Na = /* @__PURE__ */ xt(
  /* @__PURE__ */ Qe("slice", function(e, r, n) {
    return Array.prototype.slice.call(n, e, r);
  })
), Ra = /* @__PURE__ */ J(
  /* @__PURE__ */ Qe(
    "tail",
    /* @__PURE__ */ Na(1, 1 / 0)
  )
);
const Ga = Ra;
function zn() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return ye(arguments[0].length, xn(Ca, arguments[0], Ga(arguments)));
}
var Fa = /* @__PURE__ */ J(function(e) {
  return Se(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse();
});
const Va = Fa;
function je() {
  if (arguments.length === 0)
    throw new Error("compose requires at least one argument");
  return zn.apply(this, Va(arguments));
}
var Ba = /* @__PURE__ */ _e(0);
const At = Ba;
var Ha = /* @__PURE__ */ function() {
  function t(e, r, n, a) {
    this.valueFn = e, this.valueAcc = r, this.keyFn = n, this.xf = a, this.inputs = {};
  }
  return t.prototype["@@transducer/init"] = Vt.init, t.prototype["@@transducer/result"] = function(e) {
    var r;
    for (r in this.inputs)
      if (ht(r, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[r]), e["@@transducer/reduced"])) {
        e = e["@@transducer/value"];
        break;
      }
    return this.inputs = null, this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    var n = this.keyFn(r);
    return this.inputs[n] = this.inputs[n] || [n, Je(this.valueAcc, !1)], this.inputs[n][1] = this.valueFn(this.inputs[n][1], r), e;
  }, t;
}();
function Ya(t, e, r) {
  return function(n) {
    return new Ha(t, e, r, n);
  };
}
var Ua = /* @__PURE__ */ Ze(
  4,
  [],
  /* @__PURE__ */ ze([], Ya, function(e, r, n, a) {
    var o = wn(function(i, s) {
      var u = n(s), l = e(ht(u, i) ? i[u] : Je(r, !1), s);
      return l && l["@@transducer/reduced"] ? mn(i) : (i[u] = l, i);
    });
    return yn(o, {}, a);
  })
), Ka = /* @__PURE__ */ xt(function(e, r, n) {
  var a = e(r), o = e(n);
  return a > o ? -1 : a < o ? 1 : 0;
});
const tr = Ka;
var Wa = /* @__PURE__ */ _e(-1);
const qa = Wa;
function Za(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object Uint8ClampedArray]" || e === "[object Int8Array]" || e === "[object Uint8Array]" || e === "[object Int16Array]" || e === "[object Uint16Array]" || e === "[object Int32Array]" || e === "[object Uint32Array]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object BigInt64Array]" || e === "[object BigUint64Array]";
}
var Xa = /* @__PURE__ */ J(function(e) {
  return e != null && typeof e["fantasy-land/empty"] == "function" ? e["fantasy-land/empty"]() : e != null && e.constructor != null && typeof e.constructor["fantasy-land/empty"] == "function" ? e.constructor["fantasy-land/empty"]() : e != null && typeof e.empty == "function" ? e.empty() : e != null && e.constructor != null && typeof e.constructor.empty == "function" ? e.constructor.empty() : xe(e) ? [] : Se(e) ? "" : me(e) ? {} : pn(e) ? function() {
    return arguments;
  }() : Za(e) ? e.constructor.from("") : void 0;
}), Ja = /* @__PURE__ */ function() {
  function t(e, r) {
    this.xf = r, this.f = e, this.idx = -1, this.found = !1;
  }
  return t.prototype["@@transducer/init"] = Vt.init, t.prototype["@@transducer/result"] = function(e) {
    return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e);
  }, t.prototype["@@transducer/step"] = function(e, r) {
    return this.idx += 1, this.f(r) && (this.found = !0, e = mn(this.xf["@@transducer/step"](e, this.idx))), e;
  }, t;
}();
function Qa(t) {
  return function(e) {
    return new Ja(t, e);
  };
}
var ti = /* @__PURE__ */ U(
  /* @__PURE__ */ ze([], Qa, function(e, r) {
    for (var n = 0, a = r.length; n < a; ) {
      if (e(r[n]))
        return n;
      n += 1;
    }
    return -1;
  })
);
const ei = ti;
var ri = /* @__PURE__ */ U(
  /* @__PURE__ */ Qe(
    "groupBy",
    /* @__PURE__ */ Ua(function(t, e) {
      return t.push(e), t;
    }, [])
  )
);
const ni = ri;
var oi = /* @__PURE__ */ xt(function(e, r, n) {
  return we(Math.max(e.length, r.length, n.length), function() {
    return e.apply(this, arguments) ? r.apply(this, arguments) : n.apply(this, arguments);
  });
});
const ai = oi;
var ii = /* @__PURE__ */ U(fn);
const si = ii;
var li = /* @__PURE__ */ U(function(e, r) {
  return we(e + 1, function() {
    var n = arguments[e];
    if (n != null && Ma(n[r]))
      return n[r].apply(n, Array.prototype.slice.call(arguments, 0, e));
    throw new TypeError(Fe(n) + ' does not have a method named "' + r + '"');
  });
});
const $n = li;
var ci = /* @__PURE__ */ J(function(e) {
  return e != null && $e(e, Xa(e));
});
const ui = ci;
var di = /* @__PURE__ */ U(function(e, r) {
  return e.map(function(n) {
    for (var a = r, o = 0, i; o < n.length; ) {
      if (a == null)
        return;
      i = n[o], a = bn(i) ? _e(i, a) : a[i], o += 1;
    }
    return a;
  });
}), mi = /* @__PURE__ */ U(function(e, r) {
  return di([e], r)[0];
});
const pi = mi;
var fi = /* @__PURE__ */ xt(function(e, r, n) {
  var a = {}, o;
  r = r || {}, n = n || {};
  for (o in r)
    ht(o, r) && (a[o] = ht(o, n) ? e(o, r[o], n[o]) : r[o]);
  for (o in n)
    ht(o, n) && !ht(o, a) && (a[o] = n[o]);
  return a;
}), gi = /* @__PURE__ */ xt(function t(e, r, n) {
  return fi(function(a, o, i) {
    return me(o) && me(i) ? t(e, o, i) : e(a, o, i);
  }, r, n);
}), vi = /* @__PURE__ */ U(function(e, r) {
  return gi(function(n, a, o) {
    return o;
  }, e, r);
});
const hi = vi;
var bi = /* @__PURE__ */ U(function(e, r) {
  for (var n = {}, a = {}, o = 0, i = e.length; o < i; )
    a[e[o]] = 1, o += 1;
  for (var s in r)
    a.hasOwnProperty(s) || (n[s] = r[s]);
  return n;
});
const yi = bi;
var wi = /* @__PURE__ */ U(function(e, r) {
  for (var n = {}, a = 0; a < e.length; )
    e[a] in r && (n[e[a]] = r[e[a]]), a += 1;
  return n;
});
const ke = wi;
var xi = /* @__PURE__ */ xt(function(e, r, n) {
  return $e(e, bt(r, n));
});
const zi = xi;
var $i = /* @__PURE__ */ xt(function(e, r, n) {
  return e(bt(r, n));
});
const Si = $i;
var _i = /* @__PURE__ */ U(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(e);
});
const Pe = _i;
var Ti = /* @__PURE__ */ U(function(e, r) {
  return Array.prototype.slice.call(r, 0).sort(function(n, a) {
    for (var o = 0, i = 0; o === 0 && i < e.length; )
      o = e[i](n, a), i += 1;
    return o;
  });
});
const Sn = Ti;
var ji = /* @__PURE__ */ $n(1, "split");
const ne = ji;
var ki = /* @__PURE__ */ $n(0, "toLowerCase");
const Pi = ki;
var Wt = `	
\v\f\r                　\u2028\u2029\uFEFF`, Ai = "​", Oi = typeof String.prototype.trim == "function", Ei = /* @__PURE__ */ J(!Oi || /* @__PURE__ */ Wt.trim() || !/* @__PURE__ */ Ai.trim() ? function(e) {
  var r = new RegExp("^[" + Wt + "][" + Wt + "]*"), n = new RegExp("[" + Wt + "][" + Wt + "]*$");
  return e.replace(r, "").replace(n, "");
} : function(e) {
  return e.trim();
});
const pe = Ei, _n = Symbol("I18nContext"), rt = Mt({
  messages: {},
  locale: "",
  fallbackLocale: ""
}), Mi = ({ messages: t = {}, locale: e = "", fallbackLocale: r = "" }) => {
  rt.messages = t, rt.locale = e, rt.fallbackLocale = r;
  const n = (u, l = {}) => {
    const g = !ui(l), c = wt(pe, ne(".", u));
    return C(() => {
      const d = Tn(c);
      return g ? Di(d, l) : d;
    }).value;
  }, a = (u) => {
    const l = wt(pe, ne(".", u));
    return !!Ve(rt.locale, l, rt.messages);
  }, o = (u) => {
    rt.locale = u;
  }, s = {
    locale: C({
      get() {
        return rt.locale;
      },
      set(u) {
        rt.locale = u;
      }
    }),
    setLocale: o,
    translate: n,
    hasTranlation: a
  };
  return Qr(_n, s), {
    translate: n
  };
}, zt = (t) => {
  t && (rt.messages = t.messages, rt.locale = t.locale, rt.fallbackLocale = t.fallbackLocale);
  const e = Ii();
  return {
    locale: e.locale,
    t: e.translate,
    setLocale: e.setLocale,
    hasTranlation: e.hasTranlation
  };
}, Ii = () => {
  const t = tn(_n, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, Tn = (t = []) => {
  let e = Ve(rt.locale, t, rt.messages);
  return !e && rt.fallbackLocale && (e = Ve(rt.fallbackLocale, t, rt.messages)), e || t.join(".");
};
function Ve(t, e, r) {
  return pi([t, ...e], r);
}
const Di = function(t, e) {
  return t.replace(/\{(\w+)\}/g, function(r, n) {
    return e[n];
  });
}, Li = Jr({
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
    const r = wt(pe, ne(".", t.path)), n = Tn(r), a = ne(/{|}/, n), o = Object.keys(e).map((i) => {
      const s = a.indexOf(i);
      return s > -1 && (a[s] = e[i]()[0]), a;
    });
    return () => ao(t.tag, o);
  }
}), Ci = "https://api.icehockey.hu/vbr", Ni = "https://www.jegkorongszovetseg.hu/event/game/", Ri = "https://jegkorongszovetseg.hu/assets/images/player_blank.png", Tt = "original", Qt = "descend", Ot = "ascend", Gi = (/* @__PURE__ */ new Map()).set("hu", "hu-hu").set("en", "hu-gb"), Fi = (/* @__PURE__ */ new Map()).set("Europe/Budapest", { countryLabelKey: "hungary", timezone: "Europe/Budapest" }).set("Europe/Bucharest", { countryLabelKey: "romania", timezone: "Europe/Bucharest" }), Vi = 1e3, Bi = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  class: "svg-inline--fa fa-sort fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, Hi = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
}, null, -1), Yi = [
  Hi
];
function Ui(t, e) {
  return x(), T("svg", Bi, Yi);
}
const Er = { render: Ui }, Ki = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  class: "svg-inline--fa fa-sort-down fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, Wi = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
}, null, -1), qi = [
  Wi
];
function Zi(t, e) {
  return x(), T("svg", Ki, qi);
}
const Mr = { render: Zi };
function ie(t) {
  return t.split("-")[1];
}
function er(t) {
  return t === "y" ? "height" : "width";
}
function Et(t) {
  return t.split("-")[0];
}
function se(t) {
  return ["top", "bottom"].includes(Et(t)) ? "x" : "y";
}
function Ir(t, e, r) {
  let { reference: n, floating: a } = t;
  const o = n.x + n.width / 2 - a.width / 2, i = n.y + n.height / 2 - a.height / 2, s = se(e), u = er(s), l = n[u] / 2 - a[u] / 2, g = s === "x";
  let c;
  switch (Et(e)) {
    case "top":
      c = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      c = { x: o, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: i };
      break;
    case "left":
      c = { x: n.x - a.width, y: i };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (ie(e)) {
    case "start":
      c[s] -= l * (r && g ? -1 : 1);
      break;
    case "end":
      c[s] += l * (r && g ? -1 : 1);
  }
  return c;
}
const Xi = async (t, e, r) => {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: o = [], platform: i } = r, s = o.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let l = await i.getElementRects({ reference: t, floating: e, strategy: a }), { x: g, y: c } = Ir(l, n, u), m = n, d = {}, v = 0;
  for (let p = 0; p < s.length; p++) {
    const { name: h, fn: w } = s[p], { x: y, y: z, data: P, reset: E } = await w({ x: g, y: c, initialPlacement: n, placement: m, strategy: a, middlewareData: d, rects: l, platform: i, elements: { reference: t, floating: e } });
    g = y ?? g, c = z ?? c, d = { ...d, [h]: { ...d[h], ...P } }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({ reference: t, floating: e, strategy: a }) : E.rects), { x: g, y: c } = Ir(l, m, u)), p = -1);
  }
  return { x: g, y: c, placement: m, strategy: a, middlewareData: d };
};
function jn(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function fe(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function kn(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: n, y: a, platform: o, rects: i, elements: s, strategy: u } = t, { boundary: l = "clippingAncestors", rootBoundary: g = "viewport", elementContext: c = "floating", altBoundary: m = !1, padding: d = 0 } = e, v = jn(d), p = s[m ? c === "floating" ? "reference" : "floating" : c], h = fe(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(p))) == null || r ? p : p.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: l, rootBoundary: g, strategy: u })), w = c === "floating" ? { ...i.floating, x: n, y: a } : i.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), z = await (o.isElement == null ? void 0 : o.isElement(y)) && await (o.getScale == null ? void 0 : o.getScale(y)) || { x: 1, y: 1 }, P = fe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: y, strategy: u }) : w);
  return { top: (h.top - P.top + v.top) / z.y, bottom: (P.bottom - h.bottom + v.bottom) / z.y, left: (h.left - P.left + v.left) / z.x, right: (P.right - h.right + v.right) / z.x };
}
const Ji = Math.min, Qi = Math.max;
function Be(t, e, r) {
  return Qi(t, Ji(e, r));
}
const Dr = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: r, padding: n = 0 } = t || {}, { x: a, y: o, placement: i, rects: s, platform: u, elements: l } = e;
  if (r == null)
    return {};
  const g = jn(n), c = { x: a, y: o }, m = se(i), d = er(m), v = await u.getDimensions(r), p = m === "y", h = p ? "top" : "left", w = p ? "bottom" : "right", y = p ? "clientHeight" : "clientWidth", z = s.reference[d] + s.reference[m] - c[m] - s.floating[d], P = c[m] - s.reference[m], E = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(r));
  let L = E ? E[y] : 0;
  L && await (u.isElement == null ? void 0 : u.isElement(E)) || (L = l.floating[y] || s.floating[d]);
  const V = z / 2 - P / 2, Y = g[h], D = L - v[d] - g[w], b = L / 2 - v[d] / 2 + V, B = Be(Y, b, D), Q = ie(i) != null && b != B && s.reference[d] / 2 - (b < Y ? g[h] : g[w]) - v[d] / 2 < 0;
  return { [m]: c[m] - (Q ? b < Y ? Y - b : D - b : 0), data: { [m]: B, centerOffset: b - B } };
} }), ts = ["top", "right", "bottom", "left"];
ts.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const es = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ge(t) {
  return t.replace(/left|right|bottom|top/g, (e) => es[e]);
}
function rs(t, e, r) {
  r === void 0 && (r = !1);
  const n = ie(t), a = se(t), o = er(a);
  let i = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (i = ge(i)), { main: i, cross: ge(i) };
}
const ns = { start: "end", end: "start" };
function Le(t) {
  return t.replace(/start|end/g, (e) => ns[e]);
}
const os = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: i, platform: s, elements: u } = e, { mainAxis: l = !0, crossAxis: g = !0, fallbackPlacements: c, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: v = !0, ...p } = t, h = Et(n), w = Et(i) === i, y = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), z = c || (w || !v ? [ge(i)] : function(B) {
      const Q = ge(B);
      return [Le(B), Q, Le(Q)];
    }(i));
    c || d === "none" || z.push(...function(B, Q, A, j) {
      const _ = ie(B);
      let O = function($, M, I) {
        const N = ["left", "right"], X = ["right", "left"], q = ["top", "bottom"], tt = ["bottom", "top"];
        switch ($) {
          case "top":
          case "bottom":
            return I ? M ? X : N : M ? N : X;
          case "left":
          case "right":
            return M ? q : tt;
          default:
            return [];
        }
      }(Et(B), A === "start", j);
      return _ && (O = O.map(($) => $ + "-" + _), Q && (O = O.concat(O.map(Le)))), O;
    }(i, v, d, y));
    const P = [i, ...z], E = await kn(e, p), L = [];
    let V = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (l && L.push(E[h]), g) {
      const { main: B, cross: Q } = rs(n, o, y);
      L.push(E[B], E[Q]);
    }
    if (V = [...V, { placement: n, overflows: L }], !L.every((B) => B <= 0)) {
      var Y, D;
      const B = (((Y = a.flip) == null ? void 0 : Y.index) || 0) + 1, Q = P[B];
      if (Q)
        return { data: { index: B, overflows: V }, reset: { placement: Q } };
      let A = (D = V.filter((j) => j.overflows[0] <= 0).sort((j, _) => j.overflows[1] - _.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!A)
        switch (m) {
          case "bestFit": {
            var b;
            const j = (b = V.map((_) => [_.placement, _.overflows.filter((O) => O > 0).reduce((O, $) => O + $, 0)]).sort((_, O) => _[1] - O[1])[0]) == null ? void 0 : b[0];
            j && (A = j);
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
}, as = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: r, y: n } = e, a = await async function(o, i) {
      const { placement: s, platform: u, elements: l } = o, g = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), c = Et(s), m = ie(s), d = se(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, p = g && d ? -1 : 1, h = typeof i == "function" ? i(o) : i;
      let { mainAxis: w, crossAxis: y, alignmentAxis: z } = typeof h == "number" ? { mainAxis: h, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
      return m && typeof z == "number" && (y = m === "end" ? -1 * z : z), d ? { x: y * p, y: w * v } : { x: w * v, y: y * p };
    }(e, t);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
};
function is(t) {
  return t === "x" ? "y" : "x";
}
const ss = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: r, y: n, placement: a } = e, { mainAxis: o = !0, crossAxis: i = !1, limiter: s = { fn: (h) => {
      let { x: w, y } = h;
      return { x: w, y };
    } }, ...u } = t, l = { x: r, y: n }, g = await kn(e, u), c = se(Et(a)), m = is(c);
    let d = l[c], v = l[m];
    if (o) {
      const h = c === "y" ? "bottom" : "right";
      d = Be(d + g[c === "y" ? "top" : "left"], d, d - g[h]);
    }
    if (i) {
      const h = m === "y" ? "bottom" : "right";
      v = Be(v + g[m === "y" ? "top" : "left"], v, v - g[h]);
    }
    const p = s.fn({ ...e, [c]: d, [m]: v });
    return { ...p, data: { x: p.x - r, y: p.y - n } };
  } };
};
function mt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ft(t) {
  return mt(t).getComputedStyle(t);
}
function Pn(t) {
  return t instanceof mt(t).Node;
}
function kt(t) {
  return Pn(t) ? (t.nodeName || "").toLowerCase() : "";
}
function gt(t) {
  return t instanceof mt(t).HTMLElement;
}
function lt(t) {
  return t instanceof mt(t).Element;
}
function Lr(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof mt(t).ShadowRoot || t instanceof ShadowRoot;
}
function oe(t) {
  const { overflow: e, overflowX: r, overflowY: n, display: a } = ft(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(a);
}
function ls(t) {
  return ["table", "td", "th"].includes(kt(t));
}
function He(t) {
  const e = rr(), r = ft(t);
  return r.transform !== "none" || r.perspective !== "none" || !e && !!r.backdropFilter && r.backdropFilter !== "none" || !e && !!r.filter && r.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function rr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ae(t) {
  return ["html", "body", "#document"].includes(kt(t));
}
const Cr = Math.min, te = Math.max, ve = Math.round;
function An(t) {
  const e = ft(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const a = gt(t), o = a ? t.offsetWidth : r, i = a ? t.offsetHeight : n, s = ve(r) !== o || ve(n) !== i;
  return s && (r = o, n = i), { width: r, height: n, fallback: s };
}
function On(t) {
  return lt(t) ? t : t.contextElement;
}
const En = { x: 1, y: 1 };
function Gt(t) {
  const e = On(t);
  if (!gt(e))
    return En;
  const r = e.getBoundingClientRect(), { width: n, height: a, fallback: o } = An(e);
  let i = (o ? ve(r.width) : r.width) / n, s = (o ? ve(r.height) : r.height) / a;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
const Nr = { x: 0, y: 0 };
function Mn(t, e, r) {
  var n, a;
  if (e === void 0 && (e = !0), !rr())
    return Nr;
  const o = t ? mt(t) : window;
  return !r || e && r !== o ? Nr : { x: ((n = o.visualViewport) == null ? void 0 : n.offsetLeft) || 0, y: ((a = o.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function Dt(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const a = t.getBoundingClientRect(), o = On(t);
  let i = En;
  e && (n ? lt(n) && (i = Gt(n)) : i = Gt(t));
  const s = Mn(o, r, n);
  let u = (a.left + s.x) / i.x, l = (a.top + s.y) / i.y, g = a.width / i.x, c = a.height / i.y;
  if (o) {
    const m = mt(o), d = n && lt(n) ? mt(n) : n;
    let v = m.frameElement;
    for (; v && n && d !== m; ) {
      const p = Gt(v), h = v.getBoundingClientRect(), w = getComputedStyle(v);
      h.x += (v.clientLeft + parseFloat(w.paddingLeft)) * p.x, h.y += (v.clientTop + parseFloat(w.paddingTop)) * p.y, u *= p.x, l *= p.y, g *= p.x, c *= p.y, u += h.x, l += h.y, v = mt(v).frameElement;
    }
  }
  return fe({ width: g, height: c, x: u, y: l });
}
function jt(t) {
  return ((Pn(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Oe(t) {
  return lt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function In(t) {
  return Dt(jt(t)).left + Oe(t).scrollLeft;
}
function Bt(t) {
  if (kt(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || Lr(t) && t.host || jt(t);
  return Lr(e) ? e.host : e;
}
function Dn(t) {
  const e = Bt(t);
  return Ae(e) ? e.ownerDocument.body : gt(e) && oe(e) ? e : Dn(e);
}
function ee(t, e) {
  var r;
  e === void 0 && (e = []);
  const n = Dn(t), a = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = mt(n);
  return a ? e.concat(o, o.visualViewport || [], oe(n) ? n : []) : e.concat(n, ee(n));
}
function Rr(t, e, r) {
  let n;
  if (e === "viewport")
    n = function(a, o) {
      const i = mt(a), s = jt(a), u = i.visualViewport;
      let l = s.clientWidth, g = s.clientHeight, c = 0, m = 0;
      if (u) {
        l = u.width, g = u.height;
        const d = rr();
        (!d || d && o === "fixed") && (c = u.offsetLeft, m = u.offsetTop);
      }
      return { width: l, height: g, x: c, y: m };
    }(t, r);
  else if (e === "document")
    n = function(a) {
      const o = jt(a), i = Oe(a), s = a.ownerDocument.body, u = te(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), l = te(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
      let g = -i.scrollLeft + In(a);
      const c = -i.scrollTop;
      return ft(s).direction === "rtl" && (g += te(o.clientWidth, s.clientWidth) - u), { width: u, height: l, x: g, y: c };
    }(jt(t));
  else if (lt(e))
    n = function(a, o) {
      const i = Dt(a, !0, o === "fixed"), s = i.top + a.clientTop, u = i.left + a.clientLeft, l = gt(a) ? Gt(a) : { x: 1, y: 1 };
      return { width: a.clientWidth * l.x, height: a.clientHeight * l.y, x: u * l.x, y: s * l.y };
    }(e, r);
  else {
    const a = Mn(t);
    n = { ...e, x: e.x - a.x, y: e.y - a.y };
  }
  return fe(n);
}
function Ln(t, e) {
  const r = Bt(t);
  return !(r === e || !lt(r) || Ae(r)) && (ft(r).position === "fixed" || Ln(r, e));
}
function Gr(t, e) {
  return gt(t) && ft(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function Fr(t, e) {
  const r = mt(t);
  if (!gt(t))
    return r;
  let n = Gr(t, e);
  for (; n && ls(n) && ft(n).position === "static"; )
    n = Gr(n, e);
  return n && (kt(n) === "html" || kt(n) === "body" && ft(n).position === "static" && !He(n)) ? r : n || function(a) {
    let o = Bt(a);
    for (; gt(o) && !Ae(o); ) {
      if (He(o))
        return o;
      o = Bt(o);
    }
    return null;
  }(t) || r;
}
function cs(t, e, r) {
  const n = gt(e), a = jt(e), o = r === "fixed", i = Dt(t, !0, o, e);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (n || !n && !o)
    if ((kt(e) !== "body" || oe(a)) && (s = Oe(e)), gt(e)) {
      const l = Dt(e, !0, o, e);
      u.x = l.x + e.clientLeft, u.y = l.y + e.clientTop;
    } else
      a && (u.x = In(a));
  return { x: i.left + s.scrollLeft - u.x, y: i.top + s.scrollTop - u.y, width: i.width, height: i.height };
}
const us = { getClippingRect: function(t) {
  let { element: e, boundary: r, rootBoundary: n, strategy: a } = t;
  const o = r === "clippingAncestors" ? function(l, g) {
    const c = g.get(l);
    if (c)
      return c;
    let m = ee(l).filter((h) => lt(h) && kt(h) !== "body"), d = null;
    const v = ft(l).position === "fixed";
    let p = v ? Bt(l) : l;
    for (; lt(p) && !Ae(p); ) {
      const h = ft(p), w = He(p);
      w || h.position !== "fixed" || (d = null), (v ? !w && !d : !w && h.position === "static" && d && ["absolute", "fixed"].includes(d.position) || oe(p) && !w && Ln(l, p)) ? m = m.filter((y) => y !== p) : d = h, p = Bt(p);
    }
    return g.set(l, m), m;
  }(e, this._c) : [].concat(r), i = [...o, n], s = i[0], u = i.reduce((l, g) => {
    const c = Rr(e, g, a);
    return l.top = te(c.top, l.top), l.right = Cr(c.right, l.right), l.bottom = Cr(c.bottom, l.bottom), l.left = te(c.left, l.left), l;
  }, Rr(e, s, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: r, strategy: n } = t;
  const a = gt(r), o = jt(r);
  if (r === o)
    return e;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((kt(r) !== "body" || oe(o)) && (i = Oe(r)), gt(r))) {
    const l = Dt(r);
    s = Gt(r), u.x = l.x + r.clientLeft, u.y = l.y + r.clientTop;
  }
  return { width: e.width * s.x, height: e.height * s.y, x: e.x * s.x - i.scrollLeft * s.x + u.x, y: e.y * s.y - i.scrollTop * s.y + u.y };
}, isElement: lt, getDimensions: function(t) {
  return An(t);
}, getOffsetParent: Fr, getDocumentElement: jt, getScale: Gt, async getElementRects(t) {
  let { reference: e, floating: r, strategy: n } = t;
  const a = this.getOffsetParent || Fr, o = this.getDimensions;
  return { reference: cs(e, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => ft(t).direction === "rtl" };
function ds(t, e, r, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = !0, ancestorResize: o = !0, elementResize: i = !0, animationFrame: s = !1 } = n, u = a || o ? [...lt(t) ? ee(t) : t.contextElement ? ee(t.contextElement) : [], ...ee(e)] : [];
  u.forEach((m) => {
    const d = !lt(m) && m.toString().includes("V");
    !a || s && !d || m.addEventListener("scroll", r, { passive: !0 }), o && m.addEventListener("resize", r);
  });
  let l, g = null;
  i && (g = new ResizeObserver(() => {
    r();
  }), lt(t) && !s && g.observe(t), lt(t) || !t.contextElement || s || g.observe(t.contextElement), g.observe(e));
  let c = s ? Dt(t) : null;
  return s && function m() {
    const d = Dt(t);
    !c || d.x === c.x && d.y === c.y && d.width === c.width && d.height === c.height || r(), c = d, l = requestAnimationFrame(m);
  }(), r(), () => {
    var m;
    u.forEach((d) => {
      a && d.removeEventListener("scroll", r), o && d.removeEventListener("resize", r);
    }), (m = g) == null || m.disconnect(), g = null, s && cancelAnimationFrame(l);
  };
}
const ms = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: us, ...r }, o = { ...a.platform, _c: n };
  return Xi(t, e, { ...a, platform: o });
}, ps = (t, e = "body") => {
  if (!t)
    return;
  if (typeof e != "string") {
    e == null || e.append(t);
    return;
  }
  const r = document.querySelector(e);
  r == null || r.append(t);
};
function fs({ middleware: t, placement: e = null, strategy: r, append: n, enabled: a }) {
  const o = G(null), i = G(null), s = G(null), u = G(null), l = G(null), g = G(null), c = G(null), m = G(r ?? "absolute"), d = G(null), v = () => {
    !o.value || !i.value || ms(o.value, i.value, {
      middleware: t,
      placement: e,
      strategy: r
    }).then((h) => {
      s.value = h.x, u.value = h.y, m.value = h.strategy, l.value = h.middlewareData.arrow.x, g.value = h.middlewareData.arrow.y, c.value = h.placement;
    });
  };
  ut(
    () => ({
      reference: f(o),
      floating: f(i),
      append: f(n)
    }),
    ({ floating: h, append: w }) => {
      w && ps(h, w), v();
    },
    { flush: "post" }
  ), ut(
    a,
    (h) => {
      if (!(!o.value || !i.value)) {
        if (!h)
          return p();
        d.value = ds(o.value, i.value, v, {});
      }
    },
    { flush: "post" }
  );
  const p = () => {
    var h;
    (h = d.value) == null || h.call(d), d.value = null;
  };
  return {
    x: s,
    y: u,
    arrowX: l,
    arrowY: g,
    placement: c,
    reference: o,
    floating: i,
    strategy: m,
    update: v
  };
}
const gs = (t) => {
  const { element: e, padding: r } = t;
  return {
    name: "arrow",
    options: t,
    fn(n) {
      return Nt(e) ? e.value != null ? Dr({ element: e.value, padding: r }).fn(n) : {} : e ? Dr({ element: e, padding: r }).fn(n) : {};
    }
  };
}, vs = ["data-placement"], hs = {
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
    const e = t, r = G(!1), n = G(null), { x: a, y: o, arrowX: i, arrowY: s, placement: u, reference: l, floating: g, strategy: c } = fs({
      placement: e.placement,
      middleware: [os(), ss({ padding: 5 }), as(e.offset), gs({ element: n, padding: 5 })],
      append: C(() => e.appendTo),
      enabled: r
    }), m = () => {
      e.disabled || (r.value = !0);
    }, d = () => {
      r.value = !1;
    }, v = (p) => {
      l.value = p;
    };
    return No(g, (p) => {
      var h;
      (h = l.value) != null && h.contains(p.target) || d();
    }), (p, h) => (x(), T(Z, null, [
      it(p.$slots, "default", {
        setRef: v,
        show: m,
        hide: d
      }),
      S("div", {
        ref_key: "floating",
        ref: g,
        "data-placement": f(u),
        style: dr({
          position: f(c),
          top: f(o) ? `${f(o)}px` : "",
          left: f(a) ? `${f(a)}px` : ""
        })
      }, [
        F(io, {
          name: "transition-fade",
          mode: "out-in"
        }, {
          default: K(() => [
            r.value ? (x(), T("div", {
              key: 0,
              class: H(["floating-content", [`is-${e.theme}`]])
            }, [
              it(p.$slots, "content", { close: d }, () => [
                dt(k(t.content), 1)
              ]),
              S("div", {
                ref_key: "arrowRef",
                ref: n,
                class: "is-arrow",
                style: dr({
                  position: f(c),
                  top: f(s) ? `${f(s)}px` : "",
                  left: f(i) ? `${f(i)}px` : ""
                })
              }, null, 4)
            ], 2)) : R("", !0)
          ]),
          _: 3
        })
      ], 12, vs)
    ], 64));
  }
}, bs = ["onMouseenter", "onMouseleave", "onFocus", "onBlur", "onClick", "onKeydown", "tabindex"], ys = { key: 0 }, ws = ["colspan"], xs = { key: 1 }, zs = ["colspan"], $s = {
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
    const r = t, { isLoading: n, appendTo: a } = en(r), o = dn(n, { delay: Vi }), { t: i } = zt(), s = ct("table"), u = C(() => r.columns), l = C(() => Object.keys(r.columns).length), g = (c, m) => {
      c.sortOrders && e("sort", { target: m, orders: c.sortOrders });
    };
    return (c, m) => (x(), T("table", {
      class: H(f(s))
    }, [
      S("thead", null, [
        S("tr", null, [
          (x(!0), T(Z, null, et(u.value, (d, v) => (x(), at(hs, {
            key: v,
            placement: "top",
            content: d.tooltip,
            disabled: !d.tooltip,
            "append-to": f(a)
          }, {
            default: K(({ setRef: p, show: h, hide: w }) => [
              S("th", {
                ref_for: !0,
                ref: p,
                class: H([
                  [d.class],
                  {
                    "is-active": v === t.sort.sortTarget && t.sort.orders[0].direction !== f(Tt),
                    "is-sortable": d.sortOrders,
                    "is-desc": v === t.sort.sortTarget && t.sort.orders[0].direction === f(Qt),
                    "is-asc": v === t.sort.sortTarget && t.sort.orders[0].direction === f(Ot)
                  }
                ]),
                onMouseenter: h,
                onMouseleave: w,
                onFocus: h,
                onBlur: w,
                onClick: (y) => g(d, v),
                onKeydown: [
                  mr(re((y) => g(d, v), ["prevent"]), ["space"]),
                  mr(re((y) => g(d, v), ["prevent"]), ["enter"])
                ],
                tabindex: d.sortOrders ? 0 : -1,
                role: "button"
              }, [
                it(c.$slots, `header-${v}`, { column: d }, () => [
                  dt(k(d.label), 1)
                ]),
                d.sortOrders && v !== t.sort.sortTarget ? (x(), at(f(Er), {
                  key: 0,
                  class: "is-icon-sort"
                })) : R("", !0),
                v === t.sort.sortTarget && t.sort.orders[0].direction === f(Tt) ? (x(), at(f(Er), {
                  key: 1,
                  class: "is-icon-sort"
                })) : R("", !0),
                v === t.sort.sortTarget && t.sort.orders[0].direction === f(Qt) ? (x(), at(f(Mr), {
                  key: 2,
                  class: "is-icon-sort"
                })) : R("", !0),
                v === t.sort.sortTarget && t.sort.orders[0].direction === f(Ot) ? (x(), at(f(Mr), {
                  key: 3,
                  class: "is-icon-sort"
                })) : R("", !0)
              ], 42, bs)
            ]),
            _: 2
          }, 1032, ["content", "disabled", "append-to"]))), 128))
        ])
      ]),
      S("tbody", null, [
        (x(!0), T(Z, null, et(r.rows, (d, v) => (x(), T("tr", { key: v }, [
          (x(!0), T(Z, null, et(u.value, (p, h) => (x(), T("td", {
            key: h,
            class: H([
              [p.class],
              {
                "is-active": h === t.sort.sortTarget && t.sort.orders[0].direction !== f(Tt)
              }
            ])
          }, [
            it(c.$slots, `cell-${h}`, {
              row: d,
              prop: h
            }, () => [
              dt(k(d[h]), 1)
            ])
          ], 2))), 128))
        ]))), 128))
      ]),
      f(o) && t.rows.length === 0 ? (x(), T("tfoot", ys, [
        S("tr", null, [
          S("td", { colspan: l.value }, [
            it(c.$slots, "loading", {}, () => [
              dt(k(f(i)("common.loading")), 1)
            ])
          ], 8, ws)
        ])
      ])) : R("", !0),
      t.rows.length === 0 && !f(n) && !f(o) ? (x(), T("tfoot", xs, [
        S("tr", null, [
          S("td", { colspan: l.value }, [
            it(c.$slots, "empty", {}, () => [
              dt(k(f(i)("common.noData")), 1)
            ])
          ], 8, zs)
        ])
      ])) : R("", !0)
    ], 2));
  }
}, Ss = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _s = /* @__PURE__ */ S("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1), Ts = /* @__PURE__ */ S("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}, null, -1), js = /* @__PURE__ */ S("line", {
  x1: "12",
  y1: "17",
  x2: "12.01",
  y2: "17"
}, null, -1), ks = [
  _s,
  Ts,
  js
];
function Ps(t, e) {
  return x(), T("svg", Ss, ks);
}
const As = { render: Ps }, Cn = {
  __name: "ErrorNotice",
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, { t: r, hasTranlation: n } = zt(), a = ct("error-notice"), o = C(() => {
      var i;
      return n(`errors.${e.error.key}`) ? r(`errors.${e.error.key}`, e.error.cause) : (i = e.error) == null ? void 0 : i.message;
    });
    return (i, s) => (x(), T("div", {
      class: H(f(a))
    }, [
      F(f(As), {
        class: "icon",
        width: "20",
        height: "20"
      }),
      S("span", null, k(o.value), 1)
    ], 2));
  }
};
function Os(t) {
  return t && t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e) => e.toLowerCase()).join("-");
}
const Nn = Symbol("ErrorProviderContext"), Es = () => {
  const t = G(""), e = G({}), r = (o) => {
    console.log({ error: o }), t.value = o.message || o.error.message, e.value = {
      message: o.message,
      key: o.key || Os(o.message),
      cause: o.cause
    };
  };
  return Qr(Nn, {
    onError: r,
    reset: () => {
      t.value = "", e.value = {};
    }
  }), window.onerror = (o) => {
    console.log("WINDOW_ONERROR:", o);
  }, so((o, i, s) => {
    console.log("onErrorCaptured:", o, i, s);
  }), {
    hasError: C(() => t.value.length > 0),
    message: t,
    error: e,
    onError: r
  };
}, nr = () => {
  const t = Ms();
  return {
    onError: t.onError,
    reset: t.reset
  };
}, Ms = () => {
  const t = tn(Nn, null);
  if (t === null)
    throw new Error("Privider is missing a parent component.");
  return t;
}, Rn = {
  __name: "ErrorProvider",
  setup(t) {
    const { message: e, hasError: r, error: n } = Es();
    return (a, o) => it(a.$slots, "default", {
      message: f(e),
      error: f(n),
      hasError: f(r)
    });
  }
}, Is = {
  "undefined-column": "A(z) {column} oszlop nem létezik!",
  "invalid-season-name": "Érvénytelen szezon név",
  "api-key-not-found": "API Kulcs nem megfelelő"
}, Ds = {
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
}, Ls = {
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
}, Cs = {
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
}, Ns = {
  errors: Is,
  common: Ds,
  table: Ls,
  game: Cs
}, Rs = {
  "undefined-column": "The {column} column is not exists!",
  "invalid-season-name": "Invalid season name",
  "api-key-not-found": "API Key not found"
}, Gs = {
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
}, Fs = {
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
}, Vs = {
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
}, Bs = {
  errors: Rs,
  common: Gs,
  table: Fs,
  game: Vs
}, Ee = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Hs = Jr({
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
    const e = hi({ hu: Ns, en: Bs }, t.messages), { translate: r } = Mi({
      locale: C(() => t.locale),
      messages: e
    });
    return {
      translate: r
    };
  }
});
function Ys(t, e, r, n, a, o) {
  return it(t.$slots, "default", { t: t.translate });
}
const or = /* @__PURE__ */ Ee(Hs, [["render", Ys]]), Us = ["src"], Ks = ["src", "title"], Ht = {
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
    const e = t, { defaultSrc: r } = en(e), n = G({ src: e.src }), { error: a, isReady: o } = Qo(n, { resetOnExecute: !1, shallow: !1 });
    return (i, s) => (x(), T(Z, null, [
      f(a) && f(r) ? (x(), T("img", {
        key: 0,
        src: f(r),
        class: H(["is-loaded", i.$attrs.class])
      }, null, 10, Us)) : R("", !0),
      f(a) ? R("", !0) : (x(), T("img", {
        key: 1,
        src: n.value.src,
        class: H([i.$attrs.class, { "is-loaded": f(o) }]),
        title: e.title
      }, null, 10, Ks))
    ], 64));
  }
}, Ws = { style: { "text-align": "center" } }, Gn = {
  __name: "LoadingIndicator",
  setup(t) {
    const { t: e } = zt();
    return (r, n) => (x(), T("div", Ws, k(f(e)("common.loading")), 1));
  }
};
function qs({ currentPage: t, itemsPerPage: e = 20, totalItems: r, rangeLength: n = 5, update: a = pt }) {
  const o = C(() => Math.ceil(f(r) / e)), i = C(() => {
    const g = f(t) - 1, c = Array.from({ length: o.value }, (v, p) => p + 1), m = Math.floor(n / 2);
    let d = Math.max(g - m, 0);
    return d + n >= o.value && (d = Math.max(o.value - n, 0)), c.slice(d, d + n);
  }), s = (g) => {
    const c = f(t) + g;
    l(c) && a(c);
  }, u = (g) => {
    l(g) && a(g);
  }, l = (g) => g <= o.value && g > 0;
  return {
    page: t,
    range: i,
    pageCount: o,
    goTo: u,
    pageStep: s
  };
}
const Zs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Xs = /* @__PURE__ */ S("polyline", { points: "15 18 9 12 15 6" }, null, -1), Js = [
  Xs
];
function Qs(t, e) {
  return x(), T("svg", Zs, Js);
}
const tl = { render: Qs }, el = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, rl = /* @__PURE__ */ S("polyline", { points: "9 18 15 12 9 6" }, null, -1), nl = [
  rl
];
function ol(t, e) {
  return x(), T("svg", el, nl);
}
const al = { render: ol }, il = ["disabled"], sl = ["disabled"], ll = {
  key: 1,
  class: "is-disabled"
}, cl = ["disabled", "onClick"], ul = {
  key: 2,
  class: "is-disabled"
}, dl = /* @__PURE__ */ S("span", null, "...", -1), ml = [
  dl
], pl = ["disabled"], fl = ["disabled"], gl = {
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
    const r = t, n = ct("paginator"), { page: a, pageCount: o, range: i, goTo: s, pageStep: u } = qs({
      currentPage: C(() => r.page),
      totalItems: C(() => r.totalItems),
      itemsPerPage: r.itemsPerPage,
      rangeLength: r.rangeLength,
      update: (l) => e("change", l)
    });
    return (l, g) => f(o) > 1 ? (x(), T("div", {
      key: 0,
      class: H(f(n))
    }, [
      S("button", {
        type: "button",
        disabled: f(a) === 1,
        onClick: g[0] || (g[0] = (c) => f(u)(-1))
      }, [
        it(l.$slots, "prev", {}, () => [
          F(f(tl), { class: "icon paginator-left" })
        ])
      ], 8, il),
      t.isCompact ? R("", !0) : (x(), T("button", {
        key: 0,
        type: "button",
        disabled: f(a) === 1,
        onClick: g[1] || (g[1] = (c) => f(s)(1))
      }, "1", 8, sl)),
      t.isCompact ? R("", !0) : (x(), T("div", ll, "...")),
      (x(!0), T(Z, null, et(f(i), (c) => (x(), T("button", {
        type: "button",
        key: c,
        class: H({ "is-active": c === f(a) }),
        disabled: c === f(a),
        onClick: (m) => f(s)(c)
      }, k(c), 11, cl))), 128)),
      t.isCompact ? R("", !0) : (x(), T("div", ul, ml)),
      t.isCompact ? R("", !0) : (x(), T("button", {
        key: 3,
        type: "button",
        disabled: f(a) === f(o),
        onClick: g[2] || (g[2] = (c) => f(s)(f(o)))
      }, k(f(o)), 9, pl)),
      S("button", {
        type: "button",
        disabled: f(a) === f(o),
        onClick: g[3] || (g[3] = re((c) => f(u)(1), ["prevent"]))
      }, [
        it(l.$slots, "next", {}, () => [
          F(f(al), { class: "icon paginator-left" })
        ])
      ], 8, fl)
    ], 2)) : R("", !0);
  }
}, Fn = {
  __name: "ResponsiveTable",
  setup(t) {
    const e = G(null), r = ct("table-responsive");
    return (n, a) => (x(), T("div", {
      ref_key: "el",
      ref: e,
      class: H(f(r))
    }, [
      it(n.$slots, "default", { el: e.value })
    ], 2));
  }
};
var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", u = "hour", l = "day", g = "week", c = "month", m = "quarter", d = "year", v = "date", p = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var j = ["th", "st", "nd", "rd"], _ = A % 100;
      return "[" + A + (j[(_ - 20) % 10] || j[_] || j[0]) + "]";
    } }, z = function(A, j, _) {
      var O = String(A);
      return !O || O.length >= j ? A : "" + Array(j + 1 - O.length).join(_) + A;
    }, P = { s: z, z: function(A) {
      var j = -A.utcOffset(), _ = Math.abs(j), O = Math.floor(_ / 60), $ = _ % 60;
      return (j <= 0 ? "+" : "-") + z(O, 2, "0") + ":" + z($, 2, "0");
    }, m: function A(j, _) {
      if (j.date() < _.date())
        return -A(_, j);
      var O = 12 * (_.year() - j.year()) + (_.month() - j.month()), $ = j.clone().add(O, c), M = _ - $ < 0, I = j.clone().add(O + (M ? -1 : 1), c);
      return +(-(O + (_ - $) / (M ? $ - I : I - $)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: c, y: d, w: g, d: l, D: v, h: u, m: s, s: i, ms: o, Q: m }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, E = "en", L = {};
    L[E] = y;
    var V = function(A) {
      return A instanceof B;
    }, Y = function A(j, _, O) {
      var $;
      if (!j)
        return E;
      if (typeof j == "string") {
        var M = j.toLowerCase();
        L[M] && ($ = M), _ && (L[M] = _, $ = M);
        var I = j.split("-");
        if (!$ && I.length > 1)
          return A(I[0]);
      } else {
        var N = j.name;
        L[N] = j, $ = N;
      }
      return !O && $ && (E = $), $ || !O && E;
    }, D = function(A, j) {
      if (V(A))
        return A.clone();
      var _ = typeof j == "object" ? j : {};
      return _.date = A, _.args = arguments, new B(_);
    }, b = P;
    b.l = Y, b.i = V, b.w = function(A, j) {
      return D(A, { locale: j.$L, utc: j.$u, x: j.$x, $offset: j.$offset });
    };
    var B = function() {
      function A(_) {
        this.$L = Y(_.locale, null, !0), this.parse(_);
      }
      var j = A.prototype;
      return j.parse = function(_) {
        this.$d = function(O) {
          var $ = O.date, M = O.utc;
          if ($ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u($))
            return /* @__PURE__ */ new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var I = $.match(h);
            if (I) {
              var N = I[2] - 1 || 0, X = (I[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(I[1], N, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, X)) : new Date(I[1], N, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, X);
            }
          }
          return new Date($);
        }(_), this.$x = _.x || {}, this.init();
      }, j.init = function() {
        var _ = this.$d;
        this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
      }, j.$utils = function() {
        return b;
      }, j.isValid = function() {
        return this.$d.toString() !== p;
      }, j.isSame = function(_, O) {
        var $ = D(_);
        return this.startOf(O) <= $ && $ <= this.endOf(O);
      }, j.isAfter = function(_, O) {
        return D(_) < this.startOf(O);
      }, j.isBefore = function(_, O) {
        return this.endOf(O) < D(_);
      }, j.$g = function(_, O, $) {
        return b.u(_) ? this[O] : this.set($, _);
      }, j.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, j.valueOf = function() {
        return this.$d.getTime();
      }, j.startOf = function(_, O) {
        var $ = this, M = !!b.u(O) || O, I = b.p(_), N = function(Ct, ot) {
          var St = b.w($.$u ? Date.UTC($.$y, ot, Ct) : new Date($.$y, ot, Ct), $);
          return M ? St : St.endOf(l);
        }, X = function(Ct, ot) {
          return b.w($.toDate()[Ct].apply($.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ot)), $);
        }, q = this.$W, tt = this.$M, $t = this.$D, yt = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case d:
            return M ? N(1, 0) : N(31, 11);
          case c:
            return M ? N(1, tt) : N(0, tt + 1);
          case g:
            var Yt = this.$locale().weekStart || 0, Ut = (q < Yt ? q + 7 : q) - Yt;
            return N(M ? $t - Ut : $t + (6 - Ut), tt);
          case l:
          case v:
            return X(yt + "Hours", 0);
          case u:
            return X(yt + "Minutes", 1);
          case s:
            return X(yt + "Seconds", 2);
          case i:
            return X(yt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, j.endOf = function(_) {
        return this.startOf(_, !1);
      }, j.$set = function(_, O) {
        var $, M = b.p(_), I = "set" + (this.$u ? "UTC" : ""), N = ($ = {}, $[l] = I + "Date", $[v] = I + "Date", $[c] = I + "Month", $[d] = I + "FullYear", $[u] = I + "Hours", $[s] = I + "Minutes", $[i] = I + "Seconds", $[o] = I + "Milliseconds", $)[M], X = M === l ? this.$D + (O - this.$W) : O;
        if (M === c || M === d) {
          var q = this.clone().set(v, 1);
          q.$d[N](X), q.init(), this.$d = q.set(v, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          N && this.$d[N](X);
        return this.init(), this;
      }, j.set = function(_, O) {
        return this.clone().$set(_, O);
      }, j.get = function(_) {
        return this[b.p(_)]();
      }, j.add = function(_, O) {
        var $, M = this;
        _ = Number(_);
        var I = b.p(O), N = function(tt) {
          var $t = D(M);
          return b.w($t.date($t.date() + Math.round(tt * _)), M);
        };
        if (I === c)
          return this.set(c, this.$M + _);
        if (I === d)
          return this.set(d, this.$y + _);
        if (I === l)
          return N(1);
        if (I === g)
          return N(7);
        var X = ($ = {}, $[s] = n, $[u] = a, $[i] = r, $)[I] || 1, q = this.$d.getTime() + _ * X;
        return b.w(q, this);
      }, j.subtract = function(_, O) {
        return this.add(-1 * _, O);
      }, j.format = function(_) {
        var O = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || p;
        var M = _ || "YYYY-MM-DDTHH:mm:ssZ", I = b.z(this), N = this.$H, X = this.$m, q = this.$M, tt = $.weekdays, $t = $.months, yt = function(ot, St, Me, le) {
          return ot && (ot[St] || ot(O, M)) || Me[St].slice(0, le);
        }, Yt = function(ot) {
          return b.s(N % 12 || 12, ot, "0");
        }, Ut = $.meridiem || function(ot, St, Me) {
          var le = ot < 12 ? "AM" : "PM";
          return Me ? le.toLowerCase() : le;
        }, Ct = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: q + 1, MM: b.s(q + 1, 2, "0"), MMM: yt($.monthsShort, q, $t, 3), MMMM: yt($t, q), D: this.$D, DD: b.s(this.$D, 2, "0"), d: String(this.$W), dd: yt($.weekdaysMin, this.$W, tt, 2), ddd: yt($.weekdaysShort, this.$W, tt, 3), dddd: tt[this.$W], H: String(N), HH: b.s(N, 2, "0"), h: Yt(1), hh: Yt(2), a: Ut(N, X, !0), A: Ut(N, X, !1), m: String(X), mm: b.s(X, 2, "0"), s: String(this.$s), ss: b.s(this.$s, 2, "0"), SSS: b.s(this.$ms, 3, "0"), Z: I };
        return M.replace(w, function(ot, St) {
          return St || Ct[ot] || I.replace(":", "");
        });
      }, j.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, j.diff = function(_, O, $) {
        var M, I = b.p(O), N = D(_), X = (N.utcOffset() - this.utcOffset()) * n, q = this - N, tt = b.m(this, N);
        return tt = (M = {}, M[d] = tt / 12, M[c] = tt, M[m] = tt / 3, M[g] = (q - X) / 6048e5, M[l] = (q - X) / 864e5, M[u] = q / a, M[s] = q / n, M[i] = q / r, M)[I] || q, $ ? tt : b.a(tt);
      }, j.daysInMonth = function() {
        return this.endOf(c).$D;
      }, j.$locale = function() {
        return L[this.$L];
      }, j.locale = function(_, O) {
        if (!_)
          return this.$L;
        var $ = this.clone(), M = Y(_, O, !0);
        return M && ($.$L = M), $;
      }, j.clone = function() {
        return b.w(this.$d, this);
      }, j.toDate = function() {
        return new Date(this.valueOf());
      }, j.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, j.toISOString = function() {
        return this.$d.toISOString();
      }, j.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), Q = B.prototype;
    return D.prototype = Q, [["$ms", o], ["$s", i], ["$m", s], ["$H", u], ["$W", l], ["$M", c], ["$y", d], ["$D", v]].forEach(function(A) {
      Q[A[1]] = function(j) {
        return this.$g(j, A[0], A[1]);
      };
    }), D.extend = function(A, j) {
      return A.$i || (A(j, B, D), A.$i = !0), D;
    }, D.locale = Y, D.isDayjs = V, D.unix = function(A) {
      return D(1e3 * A);
    }, D.en = L[E], D.Ls = L, D.p = {}, D;
  });
})(Vn);
var Bn = Vn.exports;
const nt = /* @__PURE__ */ Lt(Bn);
var Hn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var u = i.prototype;
      s.utc = function(p) {
        var h = { date: p, utc: !0, args: arguments };
        return new i(h);
      }, u.utc = function(p) {
        var h = s(this.toDate(), { locale: this.$L, utc: !0 });
        return p ? h.add(this.utcOffset(), r) : h;
      }, u.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var l = u.parse;
      u.parse = function(p) {
        p.utc && (this.$u = !0), this.$utils().u(p.$offset) || (this.$offset = p.$offset), l.call(this, p);
      };
      var g = u.init;
      u.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else
          g.call(this);
      };
      var c = u.utcOffset;
      u.utcOffset = function(p, h) {
        var w = this.$utils().u;
        if (w(p))
          return this.$u ? 0 : w(this.$offset) ? c.call(this) : this.$offset;
        if (typeof p == "string" && (p = function(E) {
          E === void 0 && (E = "");
          var L = E.match(n);
          if (!L)
            return null;
          var V = ("" + L[0]).match(a) || ["-", 0, 0], Y = V[0], D = 60 * +V[1] + +V[2];
          return D === 0 ? 0 : Y === "+" ? D : -D;
        }(p), p === null))
          return this;
        var y = Math.abs(p) <= 16 ? 60 * p : p, z = this;
        if (h)
          return z.$offset = y, z.$u = p === 0, z;
        if (p !== 0) {
          var P = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (z = this.local().add(y + P, r)).$offset = y, z.$x.$localOffset = P;
        } else
          z = this.utc();
        return z;
      };
      var m = u.format;
      u.format = function(p) {
        var h = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return m.call(this, h);
      }, u.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var d = u.toDate;
      u.toDate = function(p) {
        return p === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this);
      };
      var v = u.diff;
      u.diff = function(p, h, w) {
        if (p && this.$u === p.$u)
          return v.call(this, p, h, w);
        var y = this.local(), z = s(p).local();
        return v.call(y, z, h, w);
      };
    };
  });
})(Hn);
var vl = Hn.exports;
const hl = /* @__PURE__ */ Lt(vl);
var Yn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(a, o, i) {
      var s, u = function(m, d, v) {
        v === void 0 && (v = {});
        var p = new Date(m), h = function(w, y) {
          y === void 0 && (y = {});
          var z = y.timeZoneName || "short", P = w + "|" + z, E = n[P];
          return E || (E = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: w, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: z }), n[P] = E), E;
        }(d, v);
        return h.formatToParts(p);
      }, l = function(m, d) {
        for (var v = u(m, d), p = [], h = 0; h < v.length; h += 1) {
          var w = v[h], y = w.type, z = w.value, P = r[y];
          P >= 0 && (p[P] = parseInt(z, 10));
        }
        var E = p[3], L = E === 24 ? 0 : E, V = p[0] + "-" + p[1] + "-" + p[2] + " " + L + ":" + p[4] + ":" + p[5] + ":000", Y = +m;
        return (i.utc(V).valueOf() - (Y -= Y % 1e3)) / 6e4;
      }, g = o.prototype;
      g.tz = function(m, d) {
        m === void 0 && (m = s);
        var v = this.utcOffset(), p = this.toDate(), h = p.toLocaleString("en-US", { timeZone: m }), w = Math.round((p - new Date(h)) / 1e3 / 60), y = i(h).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(p.getTimezoneOffset() / 15) - w, !0);
        if (d) {
          var z = y.utcOffset();
          y = y.add(v - z, "minute");
        }
        return y.$x.$timezone = m, y;
      }, g.offsetName = function(m) {
        var d = this.$x.$timezone || i.tz.guess(), v = u(this.valueOf(), d, { timeZoneName: m }).find(function(p) {
          return p.type.toLowerCase() === "timezonename";
        });
        return v && v.value;
      };
      var c = g.startOf;
      g.startOf = function(m, d) {
        if (!this.$x || !this.$x.$timezone)
          return c.call(this, m, d);
        var v = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return c.call(v, m, d).tz(this.$x.$timezone, !0);
      }, i.tz = function(m, d, v) {
        var p = v && d, h = v || d || s, w = l(+i(), h);
        if (typeof m != "string")
          return i(m).tz(h);
        var y = function(L, V, Y) {
          var D = L - 60 * V * 1e3, b = l(D, Y);
          if (V === b)
            return [D, V];
          var B = l(D -= 60 * (b - V) * 1e3, Y);
          return b === B ? [D, b] : [L - 60 * Math.min(b, B) * 1e3, Math.max(b, B)];
        }(i.utc(m, p).valueOf(), w, h), z = y[0], P = y[1], E = i(z).utcOffset(P);
        return E.$x.$timezone = h, E;
      }, i.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, i.tz.setDefault = function(m) {
        s = m;
      };
    };
  });
})(Yn);
var bl = Yn.exports;
const yl = /* @__PURE__ */ Lt(bl);
var Un = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    return function(r, n) {
      var a = n.prototype, o = a.format;
      a.format = function(i) {
        var s = this, u = this.$locale();
        if (!this.isValid())
          return o.bind(this)(i);
        var l = this.$utils(), g = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(c) {
          switch (c) {
            case "Q":
              return Math.ceil((s.$M + 1) / 3);
            case "Do":
              return u.ordinal(s.$D);
            case "gggg":
              return s.weekYear();
            case "GGGG":
              return s.isoWeekYear();
            case "wo":
              return u.ordinal(s.week(), "W");
            case "w":
            case "ww":
              return l.s(s.week(), c === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return l.s(s.isoWeek(), c === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return l.s(String(s.$H === 0 ? 24 : s.$H), c === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return c;
          }
        });
        return o.bind(this)(g);
      };
    };
  });
})(Un);
var wl = Un.exports;
const xl = /* @__PURE__ */ Lt(wl);
var Kn = { exports: {} };
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
})(Kn);
var zl = Kn.exports;
const $l = /* @__PURE__ */ Lt(zl);
var Wn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, i, s, u) {
        var l = a(o), g = a(i), c = (u = u || "()")[0] === "(", m = u[1] === ")";
        return (c ? this.isAfter(l, s) : !this.isBefore(l, s)) && (m ? this.isBefore(g, s) : !this.isAfter(g, s)) || (c ? this.isBefore(l, s) : !this.isAfter(l, s)) && (m ? this.isAfter(g, s) : !this.isBefore(g, s));
      };
    };
  });
})(Wn);
var Sl = Wn.exports;
const _l = /* @__PURE__ */ Lt(Sl);
var qn = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(Pt, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = r, i.format = function(u) {
        u === void 0 && (u = "YYYY-MM-DDTHH:mm:ssZ");
        var l = this.$locale().formats, g = function(c, m) {
          return c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(d, v, p) {
            var h = p && p.toUpperCase();
            return v || m[p] || r[p] || m[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(w, y, z) {
              return y || z.slice(1);
            });
          });
        }(u, l === void 0 ? {} : l);
        return s.call(this, g);
      };
    };
  });
})(qn);
var Tl = qn.exports;
const jl = /* @__PURE__ */ Lt(Tl);
var kl = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n(Bn);
  })(Pt, function(r) {
    function n(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var a = n(r), o = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(i) {
      return i + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(i, s, u, l) {
      return "néhány másodperc" + (l || s ? "" : "e");
    }, m: function(i, s, u, l) {
      return "egy perc" + (l || s ? "" : "e");
    }, mm: function(i, s, u, l) {
      return i + " perc" + (l || s ? "" : "e");
    }, h: function(i, s, u, l) {
      return "egy " + (l || s ? "óra" : "órája");
    }, hh: function(i, s, u, l) {
      return i + " " + (l || s ? "óra" : "órája");
    }, d: function(i, s, u, l) {
      return "egy " + (l || s ? "nap" : "napja");
    }, dd: function(i, s, u, l) {
      return i + " " + (l || s ? "nap" : "napja");
    }, M: function(i, s, u, l) {
      return "egy " + (l || s ? "hónap" : "hónapja");
    }, MM: function(i, s, u, l) {
      return i + " " + (l || s ? "hónap" : "hónapja");
    }, y: function(i, s, u, l) {
      return "egy " + (l || s ? "év" : "éve");
    }, yy: function(i, s, u, l) {
      return i + " " + (l || s ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return a.default.locale(o, null, !0), o;
  });
})(kl);
nt.extend(hl);
nt.extend(yl);
nt.extend(xl);
nt.extend(jl);
nt.extend($l);
nt.extend(_l);
const ar = () => nt.tz.guess(), Ft = (t = "", e = "", r = "", n = "hu") => (r = r || nt.tz.guess(), nt(t).isValid() ? nt(t).tz(r).locale(n).format(e) : ""), Zt = (t = "", e = "", r = "hu") => {
  if (!nt(t).isValid())
    return "";
  e = e || nt.tz.guess();
  const a = new Intl.DateTimeFormat(Pl(r), {
    timeZone: e,
    timeZoneName: "short"
  }).formatToParts(new Date(t)).find((o) => o.type === "timeZoneName");
  return a && a.value;
}, Pl = (t) => Gi.get(t), Zn = (t) => {
  const e = t.split(":");
  return parseInt(e[0], 10) * 60 + parseInt(e[1], 10);
}, Al = (t, e = "day") => nt().isSameOrBefore(nt(t), e), Ol = (t, e, r) => nt(t).isBetween(e, nt(r)), El = ["onClick"], Ml = {
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
    const r = t, { t: n } = zt(), a = ct("timezone-selector"), o = C(() => Zt(/* @__PURE__ */ new Date(), null, r.locale)), i = ar(), s = C(() => Array.from(Fi.values()).map((l) => ({
      ...l,
      isActive: Zt(/* @__PURE__ */ new Date(), r.currentZone, r.locale) === Zt(/* @__PURE__ */ new Date(), l.timezone, r.locale),
      zoneOffsetName: Zt(/* @__PURE__ */ new Date(), l.timezone, r.locale)
    }))), u = (l) => e("change", l);
    return (l, g) => (x(), T("div", {
      class: H(f(a))
    }, [
      F(f(Li), {
        path: "common.selectTimezone",
        tag: "span"
      }, {
        timezone: K(() => [
          S("a", {
            href: "#",
            onClick: g[0] || (g[0] = re((c) => u(f(i)), ["prevent"]))
          }, k(o.value), 1)
        ]),
        _: 1
      }),
      (x(!0), T(Z, null, et(s.value, (c) => (x(), T("a", {
        key: c.countryLabelKey,
        href: "#",
        class: H({ "is-active": c.isActive }),
        onClick: re((m) => u(c.timezone), ["prevent"])
      }, k(f(n)(`common.${c.countryLabelKey}`)) + " (" + k(c.zoneOffsetName) + ") ", 11, El))), 128))
    ], 2));
  }
}, Il = (t, e = "", r = {}) => {
  const n = G(""), { t: a } = zt();
  if (e)
    try {
      const s = Dl(f(t), e);
      t = yi(s, f(t));
    } catch (s) {
      n.value = s;
    }
  const o = (s) => ({
    ...s,
    ...s.label && { label: a(s.label ?? "", f(r)) },
    ...s.tooltip && { tooltip: a(s.tooltip ?? "") }
  });
  return {
    columns: C(() => wt(o, f(t))),
    error: n
  };
}, Dl = (t, e = "") => {
  const r = wt(pe, ne(",", e)), n = It(t);
  if (r[0] === "")
    return resolve([]);
  const a = r.findIndex((o) => !n.includes(o));
  if (a > -1)
    throw r[a];
  return r;
};
class ir extends Error {
  constructor(e, r = {}) {
    const { key: n, cause: a } = r;
    super(e), this.name = "WidgetError", this.key = n, this.cause = a;
  }
}
const Vr = {
  message: "Undefined Column name Message",
  options: {
    key: "undefined-column",
    cause: {}
  }
}, he = {
  message: "Invalid season name",
  options: {
    key: "invalid-season-name",
    cause: {}
  }
}, Ll = { class: "is-portrait-image" }, Cl = ["href"], Nl = ["href"], Rl = {
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
    const r = t, { onError: n } = nr(), a = C(() => r.columns), { columns: o, error: i } = Il(a, r.hideColumns);
    i.value && n(
      new ir(Vr.message, {
        ...Vr.options,
        cause: { column: i.value }
      })
    );
    const s = (u) => e("sort", u);
    return (u, l) => (x(), at(Fn, null, {
      default: K(({ el: g }) => [
        F($s, {
          columns: f(o),
          sort: r.sort,
          rows: r.rows,
          "is-loading": t.isLoading,
          "append-to": g,
          onSort: s
        }, lo({
          "cell-index": K(({ row: c }) => [
            S("span", {
              class: H(c.indexClass)
            }, k(c.index), 3)
          ]),
          "cell-playerPortrait": K(({ row: c }) => [
            S("div", Ll, [
              (x(), at(Ht, {
                key: c.id || c.playerId,
                src: c.playerPortrait,
                "default-src": f(Ri)
              }, null, 8, ["src", "default-src"]))
            ])
          ]),
          "cell-teamLogo": K(({ row: c }) => [
            (x(), at(Ht, {
              class: "is-logo-image",
              key: c.teamId || c.id,
              src: c.teamLogo
            }, null, 8, ["src"]))
          ]),
          loading: K(() => [
            F(Gn)
          ]),
          _: 2
        }, [
          t.isTeamLinked ? {
            name: "cell-teamName",
            fn: K(({ row: c }) => [
              S("a", {
                href: t.externalTeamResolver(c.teamName),
                target: "_blank"
              }, k(c.teamName), 9, Cl)
            ]),
            key: "0"
          } : void 0,
          t.isPlayerLinked ? {
            name: "cell-name",
            fn: K(({ row: c }) => [
              S("a", {
                href: t.externalPlayerResolver(c.id),
                target: "_blank"
              }, k(c.name), 9, Nl)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["columns", "sort", "rows", "is-loading", "append-to"])
      ]),
      _: 1
    }));
  }
}, Xt = async (t, e, r) => {
  const n = `${Ci}${f(t)}?${Gl(r)}`;
  return new Promise((a, o) => {
    fetch(n, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": Fl(e)
      }
    }).then((i) => i.json()).then((i) => {
      if (i.error)
        return o(i);
      a(i.data);
    }).catch((i) => {
      o(i);
    });
  });
}, Gl = (t) => Object.keys(t).map((e) => e + "=" + t[e]).join("&"), Fl = (t) => {
  var e;
  return t || ((e = window.__MJSZ_VBR_WIDGET__) != null && e.apiKey ? window.__MJSZ_VBR_WIDGET__.apiKey : {}.NODE_ENV !== "production" ? {}.VITE_VBR_API_KEY : "");
}, Vl = (t = {}) => {
  const { initial: e = 1, items: r = [], limit: n, auto: a = !1 } = t, o = G(e), i = (l) => Al(l, "day");
  return an(r, () => {
    if (!a)
      return;
    const l = ei(Si(i, "gameDate"))(f(r));
    o.value = l === -1 ? 1 : Math.floor(l / n) + 1;
  }), {
    page: o,
    change: (l) => {
      o.value = l;
    }
  };
}, Jt = ({ options: t = {}, transform: e = (n) => n, onError: r = pt }) => {
  const { path: n, apiKey: a, params: o } = t, {
    state: i,
    error: s,
    isLoading: u,
    execute: l
  } = cn(() => Xt(n, a, f(o)).then((g) => e(g)), [], {
    immediate: !1,
    resetOnExecute: !1,
    onError: r
  });
  return {
    state: i,
    error: s,
    isLoading: u,
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
function Br(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n, a, o = r.call(t), i = [];
  try {
    for (; (e === void 0 || e-- > 0) && !(n = o.next()).done; )
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
var Hr;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(Hr || (Hr = {}));
var Bl = { type: "xstate.init" };
function Ce(t) {
  return t === void 0 ? [] : [].concat(t);
}
function Yr(t, e) {
  return typeof (t = typeof t == "string" && e && e[t] ? e[t] : t) == "string" ? { type: t } : typeof t == "function" ? { type: t.name, exec: t } : t;
}
function Ye(t) {
  return function(e) {
    return t === e;
  };
}
function Hl(t) {
  return typeof t == "string" ? { type: t } : t;
}
function Ur(t, e) {
  return { value: t, context: e, actions: [], changed: !1, matches: Ye(t) };
}
function Kr(t, e, r) {
  var n = e, a = !1;
  return [t.filter(function(o) {
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
function Yl(t, e) {
  e === void 0 && (e = {});
  var r = Br(Kr(Ce(t.states[t.initial].entry).map(function(i) {
    return Yr(i, e.actions);
  }), t.context, Bl), 2), n = r[0], a = r[1], o = { config: t, _options: e, initialState: { value: t.initial, actions: n, context: a, matches: Ye(t.initial) }, transition: function(i, s) {
    var u, l, g = typeof i == "string" ? { value: i, context: t.context } : i, c = g.value, m = g.context, d = Hl(s), v = t.states[c];
    if (v.on) {
      var p = Ce(v.on[d.type]);
      try {
        for (var h = function($) {
          var M = typeof Symbol == "function" && Symbol.iterator, I = M && $[M], N = 0;
          if (I)
            return I.call($);
          if ($ && typeof $.length == "number")
            return { next: function() {
              return $ && N >= $.length && ($ = void 0), { value: $ && $[N++], done: !$ };
            } };
          throw new TypeError(M ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }(p), w = h.next(); !w.done; w = h.next()) {
          var y = w.value;
          if (y === void 0)
            return Ur(c, m);
          var z = typeof y == "string" ? { target: y } : y, P = z.target, E = z.actions, L = E === void 0 ? [] : E, V = z.cond, Y = V === void 0 ? function() {
            return !0;
          } : V, D = P === void 0, b = P ?? c, B = t.states[b];
          if (Y(m, d)) {
            var Q = Br(Kr((D ? Ce(L) : [].concat(v.exit, L, B.entry).filter(function($) {
              return $;
            })).map(function($) {
              return Yr($, o._options.actions);
            }), m, d), 3), A = Q[0], j = Q[1], _ = Q[2], O = P ?? c;
            return { value: O, context: j, actions: A, changed: P !== c || A.length > 0 || _, matches: Ye(O) };
          }
        }
      } catch ($) {
        u = { error: $ };
      } finally {
        try {
          w && !w.done && (l = h.return) && l.call(h);
        } finally {
          if (u)
            throw u.error;
        }
      }
    }
    return Ur(c, m);
  } };
  return o;
}
const Ul = Yl({
  id: "sort",
  initial: Tt,
  states: {
    [Tt]: {
      on: {
        DIRECTION1: Qt,
        DIRECTION2: Ot
      }
    },
    [Qt]: {
      on: {
        DIRECTION1: Ot,
        DIRECTION2: Tt
      }
    },
    [Ot]: {
      on: {
        DIRECTION1: Tt,
        DIRECTION2: Qt
      }
    }
  }
}), Kl = (t, e) => {
  const r = e === Ot ? "DIRECTION2" : "DIRECTION1";
  return Ul.transition(t, r).value;
};
function Wl(t = {}) {
  const { sortTarget: e = null, orders: r = [] } = t, n = Mt({ sortTarget: e, orders: r });
  return {
    sort: n,
    change: ({ target: o, orders: i }) => {
      if (n.sortTarget !== o) {
        n.sortTarget = o, n.orders = i;
        return;
      }
      const s = i.map((u, l) => ({
        ...u,
        direction: Kl(n.orders[l].direction, u.direction)
      }));
      n.sortTarget = o, n.orders = s;
    }
  };
}
function ql(t = !1, e = pt, r = pt) {
  if (!f(t))
    return;
  const n = Ko();
  ut(n, (a) => {
    if (a === "visible")
      return e();
    r();
  });
}
const Xn = (t = []) => ({
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
        (i) => n ? zi(i, e) : zn(bt(i), Pi, si(e))
      ), o = vn(Oa([...a]), this.result);
      this.isFiltered = !0, this.filteredRowsLength = o.length, this.result = o;
    }
    return this;
  },
  sorted(e) {
    if (!e.sortTarget)
      return this;
    if (e.orders[0].direction === Tt)
      return this;
    const r = ai($e(Ot), Or(Te), Or(tr));
    return this.result = Sn(e.orders.map((n) => je(r(n.direction), bt)(n.target)))(this.result), this;
  },
  addIndex(e = null) {
    return this.result.reduce((r, n, a) => {
      const o = r[r.length - 1] || [], i = e && o[e] === n[e];
      return n.index = i ? o.index : a + 1, n.indexClass = i ? "is-duplicated" : null, r.push(n), r;
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
      gameDateDate: Ft(n.gameDate, "L dddd", e, r),
      gameDateTime: Ft(n.gameDate, "HH:mm", e, r)
    })), this;
  },
  gameDateFilter(e) {
    return e === null ? this : (this.result = this.result.filter((r) => new Date(r.gameDate).getMonth() == e), this);
  },
  convertTimes(e = []) {
    return this.result = this.result.map((r) => (e.map((n) => r[n] ? r[`${n}Sec`] = Zn(r[n]) : r), r)), this;
  },
  groupByDays() {
    return this.result = ni((e) => Ft(e.gameDate, "YYYY-MM-DD"))(this.result), this;
  }
}), Zl = (t, ...e) => wt(je(...e))(t), Xl = (t) => ({
  ...t,
  ...t.lastName && { name: `${t.lastName} ${t.firstName}` }
}), Jl = (t = []) => (e) => (t.map((r) => e[r] ? e[`${r}Sec`] = Zn(e[r]) : e), e), Ql = (t, e) => new Date(t.gameDate).getTime() - new Date(e.gameDate).getTime(), tc = Sn([Ql, Te(bt("id"))]), Jn = (t, e) => {
  const r = ec("gameResolver") || t;
  return typeof r == "function" ? r(e) : r ? r + e : Ni + e;
}, ec = (t = "") => {
  var e;
  return (e = window == null ? void 0 : window.__MJSZ_VBR_WIDGET__) == null ? void 0 : e[t];
}, rc = {
  report: "Riport",
  video: "Videó",
  season: "Szezon",
  section: "Szakasz",
  teams: "Csapatok",
  filterName: "Szűrés névre",
  players: "Játékosok",
  month: "Hónap",
  homeOrAway: "Hazai vagy Vendég",
  home: "Hazai",
  away: "Vendég"
}, nc = {
  points: "Pontok",
  goals: "Gólok",
  assists: "Gólpasszok",
  penalties: "Büntetések",
  goalies: "Kapusok",
  goaliesLimit: "Kapusok 40% jégidő alatt",
  teamAttendance: "Nézőszám",
  teamFairplay: "Büntetések",
  teamPenaltyKilling: "Emberhátrányok",
  teamPowerplay: "Emberelőnyök",
  teamScoringEfficiency: "Hatékonyság"
}, oc = {
  Negyeddöntő1: "Negyeddöntő 1",
  Negyeddöntő2: "Negyeddöntő 2",
  Negyeddöntő3: "Negyeddöntő 3",
  Negyeddöntő4: "Negyeddöntő 4",
  Elődöntő1: "Elődöntő 1",
  Elődöntő2: "Elődöntő 2",
  Döntő: "Döntő"
}, sr = {
  selection: rc,
  report: nc,
  playoffs: oc
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
}, ic = {
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
}, sc = {
  Negyeddöntő1: "Quarterfinal 1",
  Negyeddöntő2: "Quarterfinal 2",
  Negyeddöntő3: "Quarterfinal 3",
  Negyeddöntő4: "Quarterfinal 4",
  Elődöntő1: "Semifinal 1",
  Elődöntő2: "Semifinal 2",
  Döntő: "Final"
}, lr = {
  selection: ac,
  report: ic,
  playoffs: sc
}, cr = `:root,:host{font-family:Roboto Condensed,Avenir,Helvetica,Arial,sans-serif;--vbr-widget-primary-color-0: #ffffff;--vbr-widget-primary-color-50: #eceff1;--vbr-widget-primary-color-100: #cfd8dc;--vbr-widget-primary-color-200: #b0bec5;--vbr-widget-primary-color-300: #90a4ae;--vbr-widget-primary-color-400: #78909c;--vbr-widget-primary-color-500: #607d8b;--vbr-widget-primary-color-600: #546e7a;--vbr-widget-primary-color-700: #455a64;--vbr-widget-primary-color-800: #37474f;--vbr-widget-primary-color-900: #263238;--vbr-widget-secondary-color-100: #dcedc8;--vbr-widget-secondary-color-200: #badb94;--vbr-widget-secondary-color-300: #aed581;--vbr-widget-secondary-color-400: #9ccc65;--vbr-widget-secondary-color-500: #8bc34a;--vbr-widget-secondary-color-700: #689f38;--vbr-widget-secondary-color-800: #558b2f;--vbr-widget-secondary-color-900: #33691e;--vbr-widget-danger-color-50: #ffebee;--vbr-widget-danger-color-100: #ffcdd2;--vbr-widget-danger-color-200: #ef9a9a;--vbr-widget-danger-color-300: #e57373;--vbr-widget-danger-color-400: #ef5350;--vbr-widget-danger-color-500: #f44336;--vbr-widget-danger-color-700: #d32f2f;--vbr-widget-danger-color-900: #b71c1c;--vbr-widget-danger-color-a400: #ff1744;--vbr-widget-live-game-color: #8bc34a;--vbr-widget-table-header-font-size: 12px;--vbr-widget-table-default-column-width: 30px;--vbr-widget-table-default-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-neutral-color: var(--vbr-widget-primary-color-300);--vbr-widget-table-header-bg-color: var(--vbr-widget-primary-color-800);--vbr-widget-table-header-hover-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-color: var(--vbr-widget-primary-color-200);--vbr-widget-table-table-header-active-bg-color: var(--vbr-widget-primary-color-700);--vbr-widget-table-header-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-table-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-hover-bg-color: var(--vbr-widget-secondary-color-100);--vbr-widget-table-active-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-table-active-even-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-table-active-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-table-active-hover-bg-color: var(--vbr-widget-secondary-color-400);--vbr-widget-table-portrait-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-table-portrait-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-light-color: var(--vbr-widget-primary-color-600);--vbr-widget-table-cell-dark-color: var(--vbr-widget-primary-color-900);--vbr-widget-table-stripped-bg-color: #f8f9fa;--vbr-widget-table-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-table-label-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-table-cell-logo-size: 20px;--vbr-widget-table-cell-portrait-size: 26px;--vbr-widget-paginator-color: var(--vbr-widget-primary-color-500);--vbr-widget-paginator-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-hover-color: var(--vbr-widget-primary-color-700);--vbr-widget-paginator-hover-bg-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-border-color: var(--vbr-widget-primary-color-100);--vbr-widget-paginator-active-color: var(--vbr-widget-primary-color-0);--vbr-widget-paginator-active-bg-color: var(--vbr-widget-primary-color-900);--vbr-widget-paginator-disabled-color: var(--vbr-widget-primary-color-200);--vbr-widget-tooltip-font-size: 12px;--vbr-widget-tooltip-color: #ffffff;--vbr-widget-tooltip-bg-color: #000000;--vbr-widget-popover-trigger-hover-bg-color: var(--vbr-widget-secondary-color-200);--vbr-widget-popover-trigger-focus-bg-color: var(--vbr-widget-secondary-color-300);--vbr-widget-popover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-dropdown-item-color: var(--vbr-widget-primary-color-500);--vbr-widget-dropdown-item-hover-color: var(--vbr-widget-primary-color-800);--vbr-widget-dropdown-item-hover-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-error-notice-bg-color: var(--vbr-widget-danger-color-50);--vbr-widget-error-notice-border-color: var(--vbr-widget-danger-color-100);--vbr-widget-error-notice-color: var(--vbr-widget-danger-color-700);--vbr-widget-link-color: var(--vbr-widget-secondary-color-700);--vbr-widget-hover-color: var(--vbr-widget-secondary-color-900);--vbr-widget-base-input-color: var(--vbr-widget-primary-color-800);--vbr-widget-base-input-font-size: .875rem;--vbr-widget-base-input-border-color: var(--vbr-widget-primary-color-300);--vbr-widget-base-input-border-radius: 3px;--vbr-widget-form-label-color: var(--vbr-widget-primary-color-500);--vbr-widget-form-label-font-size: .75rem;--vbr-widget-timezone-selector-color: var(--vbr-widget-primary-color-500);--vbr-widget-timezone-selector-font-size: .8125rem;--vbr-widget-badge-bg-color: var(--vbr-widget-primary-color-50);--vbr-widget-badge-color: var(--vbr-widget-primary-color-400);--vbr-widget-badge-font-size: .625rem;--vbr-widget-tab-btn-padding: .625rem 1rem;--vbr-widget-tab-btn-font-size: 1rem;--vbr-widget-tab-btn-font-weight: 500;--vbr-widget-tab-btn-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-color: var(--vbr-widget-primary-color-300);--vbr-widget-tab-btn-border-color: transparent;--vbr-widget-tab-btn-border-style: solid;--vbr-widget-tab-btn-border-width: 0 0 3px 0;--vbr-widget-tab-btn-text-transform: uppercase;--vbr-widget-tab-btn-hover-color: var(--vbr-widget-primary-color-500);--vbr-widget-tab-btn-hover-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-hover-border-color: transparent;--vbr-widget-tab-btn-active-bg-color: var(--vbr-widget-primary-color-0);--vbr-widget-tab-btn-active-color: var(--vbr-widget-primary-color-900);--vbr-widget-tab-btn-active-border-color: var(--vbr-widget-secondary-color-500)}.transition-fade-enter-active,.transition-fade-leave-active{transition:all .25s ease}.transition-fade-enter-from,.transition-fade-leave-to{opacity:0;transform:translateY(5px)}img{opacity:0;transition:opacity .5s ease-out}img.is-loaded{opacity:1}a{color:var(--vbr-widget-link-color);text-decoration:none}a:hover{color:var(--vbr-widget-hover-color)}.floating-content.is-tooltip{background-color:var(--vbr-widget-tooltip-bg-color);color:var(--vbr-widget-tooltip-color);font-weight:700;padding:5px 10px;border-radius:4px;font-size:var(--vbr-widget-tooltip-font-size);white-space:nowrap;pointer-events:none}.floating-content.is-tooltip .is-arrow{background-color:var(--vbr-widget-tooltip-bg-color)}.floating-content.is-content{border-radius:4px;box-shadow:2px 14px 23px #00000040}.floating-content.is-content .is-arrow{background-color:var(--vbr-widget-primary-color-50)}.floating-content .is-arrow{position:absolute;width:8px;height:8px;transform:rotate(45deg)}[data-placement^=top] .floating-content .is-arrow{bottom:-4px}[data-placement^=bottom] .floating-content .is-arrow{top:-4px}[data-placement^=left] .floating-content .is-arrow{right:-4px}[data-placement^=right] .floating-content .is-arrow{left:-4px}.mjsz-vbr-error-notice{display:flex;align-items:center;justify-items:flex-start;margin:10px 0;padding:10px 20px;background-color:var(--vbr-widget-error-notice-bg-color);color:var(--vbr-widget-error-notice-color);border:1px solid var(--vbr-widget-error-notice-border-color)}.mjsz-vbr-error-notice .icon{margin-right:15px}.mjsz-vbr-timezone-selector{padding:3px 0;color:var(--vbr-widget-timezone-selector-color);font-size:var(--vbr-widget-timezone-selector-font-size);font-weight:500}.mjsz-vbr-timezone-selector .is-active{font-weight:700}.is-badge{display:inline-block;padding:.125rem .25rem;color:var(--vbr-widget-badge-color);font-size:var(--vbr-widget-badge-font-size);font-weight:700;text-transform:uppercase;background-color:var(--vbr-widget-badge-bg-color);border-radius:3px}.is-badge+.is-badge{margin-left:3px}.is-badge.is-invert{color:var(--vbr-widget-badge-bg-color);background-color:var(--vbr-widget-badge-color)}
`, lc = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, cc = `.mjsz-vbr-playoffs .mjsz-vbr-table{table-layout:fixed}.mjsz-vbr-playoffs .mjsz-vbr-table table,.mjsz-vbr-playoffs .mjsz-vbr-table th,.mjsz-vbr-playoffs .mjsz-vbr-table td{border-collapse:collapse}@media (max-width: 600px){.mjsz-vbr-playoffs .mjsz-vbr-table{table-layout:auto}}.mjsz-vbr-playoffs .mjsz-vbr-section-title{padding:10px;text-align:center;font-size:16px;font-weight:700;color:var(--vbr-widget-primary-color-100);background-color:var(--vbr-widget-primary-color-700)}.mjsz-vbr-playoffs .mjsz-vbr-section-details{display:grid;grid-template-columns:1fr fit-content(100px) fit-content(100px) fit-content(100px) 1fr;align-items:center;gap:20px;padding:20px;background-color:var(--vbr-widget-primary-color-50)}@media (max-width: 600px){.mjsz-vbr-playoffs .mjsz-vbr-section-details{grid-template-columns:1fr}}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-logo-image{width:70px;height:70px}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-result{font-size:4rem;font-weight:700;text-align:center;color:var(--vbr-widget-primary-color-800)}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-team-name{font-size:20px;font-weight:700;color:var(--vbr-widget-primary-color-800)}.mjsz-vbr-playoffs .mjsz-vbr-section-details .is-right{text-align:right}
`, uc = { class: "mjsz-vbr-playoffs" }, dc = { class: "mjsz-vbr-section-title" }, mc = { class: "mjsz-vbr-section-details" }, pc = { class: "is-team-name is-right" }, fc = { class: "is-result" }, gc = { class: "is-team-name" }, vc = { class: "mjsz-vbr-table" }, hc = { style: { width: "5%" } }, bc = {
  style: { width: "15%" },
  class: "is-text-left"
}, yc = { style: { width: "3%" } }, wc = { class: "is-text-right is-text-bold is-w-auto" }, xc = { style: { width: "1%" } }, zc = {
  key: 0,
  class: "is-text-dark"
}, $c = ["href"], Sc = { style: { width: "2%" } }, _c = {
  key: 0,
  class: "label"
}, Tc = {
  key: 1,
  class: "label"
}, jc = {
  key: 2,
  class: "label"
}, kc = { class: "is-text-left is-text-bold is-w-auto" }, Pc = { class: "is-text-left is-text-light is-w-auto" }, Ac = {
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
    const e = t, { state: r, execute: n } = Jt({
      options: {
        path: "/v1/playoffsTree",
        apiKey: e.apiKey,
        params: C(() => ({ championshipId: e.championshipId }))
      }
    });
    n();
    const a = ar(), o = { en: lr, hu: sr }, i = (l) => Jn(e.externalGameLink, l), s = (l) => Ft(l, "L dddd", a, e.locale), u = (l) => Ft(l, "HH:mm", a, e.locale);
    return (l, g) => (x(), T("div", uc, [
      F(f(or), {
        locale: e.locale,
        messages: o
      }, {
        default: K(({ t: c }) => [
          (x(!0), T(Z, null, et(f(r), (m) => (x(), T("div", null, [
            S("div", dc, k(c(`playoffs.${m.tertiaryName}`)), 1),
            S("div", mc, [
              S("div", pc, k(m.homeTeamName), 1),
              S("div", null, [
                F(f(Ht), {
                  class: "is-logo-image",
                  src: m.homeTeamLogo
                }, null, 8, ["src"])
              ]),
              S("div", fc, k(m.seriesStandings), 1),
              S("div", null, [
                F(f(Ht), {
                  class: "is-logo-image",
                  src: m.awayTeamLogo
                }, null, 8, ["src"])
              ]),
              S("div", gc, k(m.awayTeamName), 1)
            ]),
            F(f(Fn), null, {
              default: K(() => [
                S("table", vc, [
                  S("tbody", null, [
                    (x(!0), T(Z, null, et(m.games, (d) => (x(), T("tr", {
                      key: d.id
                    }, [
                      S("td", hc, k(d.name), 1),
                      S("td", bc, k(s(d.gameDate)), 1),
                      S("td", yc, k(u(d.gameDate)), 1),
                      S("td", wc, k(d.homeTeamName), 1),
                      S("td", xc, [
                        d.gameStatus === 0 ? (x(), T("span", zc, "-:-")) : (x(), T("a", {
                          key: 1,
                          href: i(d.id),
                          target: "_blank",
                          class: H({ "is-text-dark": d.gameStatus !== 1, "is-text-accent": d.gameStatus === 1 })
                        }, k(d.homeTeamScore) + ":" + k(d.awayTeamScore), 11, $c))
                      ]),
                      S("td", Sc, [
                        d.isOvertime ? (x(), T("span", _c, k(c("common.overtimeShort")), 1)) : R("", !0),
                        d.isShootout ? (x(), T("span", Tc, k(c("common.shootoutShort")), 1)) : R("", !0),
                        d.seriesStandings ? (x(), T("span", jc, k(d.seriesStandings), 1)) : R("", !0)
                      ]),
                      S("td", kc, k(d.awayTeamName), 1),
                      S("td", Pc, k(d.location), 1)
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
}, Oc = /* @__PURE__ */ Ee(Ac, [["styles", [cr, lc, cc]]]), ae = "players", Wr = "teams", qr = (/* @__PURE__ */ new Map()).set("points", {
  api: "/v1/playersStatsPeriod",
  columns: ce,
  sort: {
    sortTarget: "point",
    orders: [{ target: "point", direction: st }]
  }
}).set("goals", {
  api: "/v1/playersStatsPeriod",
  columns: ce,
  sort: {
    sortTarget: "g",
    orders: [{ target: "g", direction: st }]
  }
}).set("assists", {
  api: "/v1/playersStatsPeriod",
  columns: ce,
  sort: {
    sortTarget: "a",
    orders: [{ target: "a", direction: st }]
  }
}).set("plusminus", {
  api: "/v1/playersStatsPeriod",
  columns: ce,
  sort: {
    sortTarget: "plusMinus",
    orders: [{ target: "plusMinus", direction: st }]
  }
}).set("playerspenalties", {
  api: "/v1/playersPenaltyPeriod",
  columns: po,
  sort: {
    sortTarget: "pim",
    orders: [{ target: "pim", direction: st }]
  }
}).set("goalies", {
  api: "/v1/playersGoaliePeriod",
  columns: fr,
  sort: {
    sortTarget: "svsPercent",
    orders: [{ target: "svsPercent", direction: st }]
  }
}).set("goaliesunderlimit", {
  api: "/v1/playersGoalieUnderPeriod",
  columns: fr,
  sort: {
    sortTarget: "svsPercent",
    orders: [{ target: "svsPercent", direction: st }]
  }
}).set("teamAttandance", {
  api: "/v1/teamAttendancePeriod",
  columns: fo,
  sort: {
    sortTarget: "totalAttendanceAvg",
    orders: [{ target: "totalAttendanceAvg", direction: st }]
  }
}).set("teamFairplay", {
  api: "/v1/teamFairplayPeriod",
  columns: go,
  sort: {
    sortTarget: "pim",
    orders: [{ target: "pim", direction: st }]
  }
}).set("teamPenaltiKilling", {
  api: "/v1/teamPowerPlayPeriod",
  columns: vo,
  sort: {
    sortTarget: "pkPercent",
    orders: [{ target: "pkPercent", direction: st }]
  }
}).set("teamPowerplay", {
  api: "/v1/teamPowerPlayPeriod",
  columns: ho,
  sort: {
    sortTarget: "ppPercent",
    orders: [{ target: "ppPercent", direction: st }]
  }
}).set("teamScoringEfficiency", {
  api: "/v1/standings",
  columns: bo,
  sort: {
    sortTarget: "GFShots",
    orders: [{ target: "GFShots", direction: st }]
  }
}), Ec = (t) => [
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
], Mc = (t) => [
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
], Ic = (t) => je(Pe(tr(bt("championshipId"))), wt(ke(["championshipId", "seasonName"])))(t), Dc = (t) => Pe(Te(bt("teamName")), t), Lc = (t) => t.report ? t.report : t.type ? t.type === ae ? "points" : "teamAttandance" : "points", Cc = {
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
    const e = t, { t: r } = zt(), { onError: n } = nr(), a = un("history"), o = Mt({
      loading: !1,
      seasons: [],
      championshipId: Number(a.championshipId) || e.championshipId,
      sections: [],
      section: a.section || null,
      teams: [],
      teamFilter: Number(a.teamFilter) || null,
      playerFilter: "",
      reportType: a.type || ae,
      reports: null,
      currentReport: Lc(a),
      rows: [],
      columns: null,
      api: null
    }), i = qr.get("points");
    o.columns = i.columns, o.api = i.api;
    const s = C(
      () => o.reportType === ae ? Ec(r) : Mc(r)
    ), { page: u, change: l } = Vl(), { sort: g, change: c } = Wl({
      sortTarget: "point",
      orders: [{ target: "point", direction: st }]
    }), m = async () => {
      try {
        o.loading = !0;
        const b = await Xt("/v1/championshipSeasons", e.apiKey, {
          championshipName: e.championshipName
        });
        if (b.length === 0)
          throw new ir(he.message, he.options);
        o.seasons = Ic(b), o.championshipId || (o.championshipId = At(o.seasons).championshipId);
      } catch (b) {
        n(b);
      } finally {
        o.loading = !1;
      }
    }, d = async () => {
      try {
        o.loading = !0;
        const b = await Xt("/v1/championshipSections", e.apiKey, {
          championshipId: o.championshipId
        });
        o.sections = b.sectionName, o.sections && !o.sections.includes(o.section) && (o.section = At(o.sections));
      } catch (b) {
        n(b);
      } finally {
        o.loading = !1;
      }
    }, v = async () => {
      try {
        o.loading = !0, o.rows = [], l(1);
        const b = await Xt(o.api, e.apiKey, {
          championshipId: o.championshipId,
          division: o.section
        });
        o.rows = Zl(
          b,
          Xl,
          Jl(["dvgTime", "dvgTimePP1", "dvgTimePP2", "advTime", "advTimePP1", "advTimePP2", "mip"])
        );
      } catch (b) {
        n(b);
      } finally {
        o.loading = !1;
      }
    }, p = async () => {
      try {
        o.loading = !0, o.rows = [];
        const b = await Xt("/v1/championshipTeams", e.apiKey, {
          championshipId: o.championshipId
        });
        o.teams = Dc(b);
      } catch (b) {
        n(b);
      } finally {
        o.loading = !1;
      }
    }, h = C(
      () => Xn(o.rows).filter(o.teamFilter, ["teamId"], !0).filter(o.playerFilter, ["name"]).sorted(g).addIndex(g.sortTarget).pagination(f(u), e.limit).value()
    ), w = C(() => [(u.value - 1) * e.limit + 1, Math.min(u.value * e.limit, h.value.totalItems)]), y = () => {
      const b = qr.get(o.currentReport);
      o.columns = b.columns, o.api = b.api, g.sortTarget = b.sort.sortTarget, g.orders = b.sort.orders;
    }, z = async (b) => {
      o.championshipId = b, a.championshipId = b, await d(), a.section = o.section, await p(), await v();
    }, P = async (b) => {
      o.section = b, a.section = b, await v();
    }, E = (b) => {
      o.currentReport = b, a.report = b, y(), v();
    }, L = (b) => {
      l(1), o.teamFilter = Number(b) || null, a.teamFilter = b || null;
    }, V = (b) => {
      l(1), b instanceof Event && (b = b.target.value), o.playerFilter = b;
    }, Y = (b) => {
      o.reportType = b, o.currentReport = At(s.value).value, o.teamFilter = null, o.playerFilter = "", a.report = o.currentReport, a.teamFilter = null, a.type = b, y(), v();
    };
    return (async () => {
      await m(), await d(), await p(), y(), await v();
    })(), (b, B) => it(b.$slots, "default", rn(nn({
      ...o,
      rows: h.value,
      sort: f(g),
      page: f(u),
      range: w.value,
      selectorProps: {
        reports: s.value,
        ...f(ke)(
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
          o
        )
      },
      selectorListeners: {
        onSeasonChange: z,
        onSectionChange: P,
        onReportChange: E,
        onStatTypeChange: Y,
        onTeamChange: L,
        onPlayerInput: V
      },
      onPaginatorChange: f(l),
      onSort: f(c)
    })));
  }
}, Nc = {
  class: "g-row is-mb-5",
  style: { "flex-wrap": "wrap", gap: "20px", margin: "20px 0" }
}, Rc = ["value"], Gc = ["value"], Fc = ["value"], Vc = { value: null }, Bc = ["value"], Hc = ["disabled"], Yc = {
  __name: "StatisticSelector",
  props: {
    seasons: {
      type: Array,
      defauét: () => []
    },
    championshipId: {
      type: Number,
      default: 0
    },
    sections: {
      type: Array,
      defauét: () => []
    },
    section: {
      type: String,
      default: ""
    },
    reports: {
      type: Array,
      defauét: () => []
    },
    currentReport: {
      type: String,
      default: ""
    },
    teams: {
      type: Array,
      defauét: () => []
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
    const r = t, { t: n } = zt(), a = C({
      get: () => r.championshipId,
      set: (d) => e("onSeasonChange", d)
    }), o = C({
      get: () => r.section,
      set: (d) => e("onSectionChange", d)
    }), i = C({
      get: () => r.currentReport,
      set: (d) => e("onReportChange", d)
    }), s = C({
      get: () => r.teamFilter,
      set: (d) => e("onTeamChange", d)
    }), u = C({
      get: () => r.playerFilter,
      set: (d) => e("onPlayerInput", d)
    }), l = (d) => {
      e("onStatTypeChange", d);
    }, g = ct("base-input"), c = ct("label"), m = ct("tab-button");
    return (d, v) => (x(), T(Z, null, [
      S("div", Nc, [
        S("div", null, [
          S("label", {
            for: "season",
            class: H(f(c))
          }, k(f(n)("selection.season")), 3),
          F(f(_t), {
            id: "season",
            modelValue: a.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p)
          }, {
            default: K(() => [
              (x(!0), T(Z, null, et(t.seasons, (p) => (x(), T("option", {
                key: p.championshipId,
                value: p.championshipId
              }, k(p.seasonName), 9, Rc))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        S("div", null, [
          S("label", {
            for: "section",
            class: H(f(c))
          }, k(f(n)("selection.section")), 3),
          F(f(_t), {
            id: "section",
            modelValue: o.value,
            "onUpdate:modelValue": v[1] || (v[1] = (p) => o.value = p)
          }, {
            default: K(() => [
              (x(!0), T(Z, null, et(t.sections, (p) => (x(), T("option", {
                key: p,
                value: p
              }, k(p), 9, Gc))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        S("div", null, [
          S("label", {
            for: "report",
            class: H(f(c))
          }, k(f(n)("selection.report")), 3),
          F(f(_t), {
            id: "report",
            modelValue: i.value,
            "onUpdate:modelValue": v[2] || (v[2] = (p) => i.value = p)
          }, {
            default: K(() => [
              (x(!0), T(Z, null, et(t.reports, ({ name: p, value: h }) => (x(), T("option", {
                key: h,
                value: h
              }, k(p), 9, Fc))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        t.reportType === "players" ? (x(), T(Z, { key: 0 }, [
          S("div", null, [
            S("label", {
              for: "teams",
              class: H(f(c))
            }, k(f(n)("selection.teams")), 3),
            F(f(_t), {
              id: "teams",
              modelValue: s.value,
              "onUpdate:modelValue": v[3] || (v[3] = (p) => s.value = p),
              disabled: t.reportType !== "players"
            }, {
              default: K(() => [
                S("option", Vc, k(f(n)("common.all")), 1),
                (x(!0), T(Z, null, et(t.teams, ({ teamId: p, teamName: h }) => (x(), T("option", {
                  key: p,
                  value: p
                }, k(h), 9, Bc))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "disabled"])
          ]),
          S("div", null, [
            S("label", {
              for: "player",
              class: H(f(c))
            }, k(f(n)("selection.filterName")), 3),
            Zr(S("input", {
              id: "player",
              type: "text",
              "onUpdate:modelValue": v[4] || (v[4] = (p) => u.value = p),
              class: H(f(g)),
              disabled: t.reportType !== "players"
            }, null, 10, Hc), [
              [co, u.value]
            ])
          ])
        ], 64)) : R("", !0)
      ]),
      S("div", null, [
        S("button", {
          type: "button",
          onClick: v[5] || (v[5] = (p) => l(f(ae))),
          class: H([f(m), { "is-active": t.reportType === f(ae) }])
        }, k(f(n)("selection.players")), 3),
        S("button", {
          type: "button",
          onClick: v[6] || (v[6] = (p) => l(f(Wr))),
          class: H([f(m), { "is-active": t.reportType === f(Wr) }])
        }, k(f(n)("selection.teams")), 3)
      ])
    ], 64));
  }
}, Uc = `.mjsz-vbr-base-input{padding:.375rem .75rem;color:var(--vbr-widget-base-input-color);border:1px solid var(--vbr-widget-base-input-border-color);border-radius:var(--vbr-widget-base-input-border-radius);width:100%;-moz-padding-start:calc(.75rem - 3px);font-size:var(--vbr-widget-base-input-font-size);font-weight:400;line-height:1.5;background-color:#fff;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.mjsz-vbr-base-input:disabled{opacity:.3}.mjsz-vbr-base-input.is-select{padding-right:2.25rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}label{display:block;margin-bottom:3px;color:var(--vbr-widget-form-label-color);font-size:var(--vbr-widget-form-label-font-size);font-weight:700;text-transform:uppercase}.mjsz-vbr-tab-button{padding:var(--vbr-widget-tab-btn-padding);font-family:inherit;font-size:var(--vbr-widget-tab-btn-font-size);font-weight:var(--vbr-widget-tab-btn-font-weight);color:var(--vbr-widget-tab-btn-color);text-transform:var(--vbr-widget-tab-btn-text-transform);background-color:var(--vbr-widget-tab-btn-bg-color);border-color:var(--vbr-widget-tab-btn-border-color);border-width:var(--vbr-widget-tab-btn-border-width);border-style:var(--vbr-widget-tab-btn-border-style);outline:none;box-shadow:none;cursor:pointer}.mjsz-vbr-tab-button:hover{color:var(--vbr-widget-tab-btn-hover-color);border-color:var(--vbr-widget-tab-btn-hover-border-color);background-color:var(--vbr-widget-tab-btn-hover-bg-color)}.mjsz-vbr-tab-button.is-active{color:var(--vbr-widget-tab-btn-active-color);border-color:var(--vbr-widget-tab-btn-active-border-color);background-color:var(--vbr-widget-tab-btn-active-bg-color)}
`, Kc = `.mjsz-vbr-table{border-collapse:collapse;border-spacing:0}.mjsz-vbr-table table,.mjsz-vbr-table caption,.mjsz-vbr-table tbody,.mjsz-vbr-table tfoot,.mjsz-vbr-table thead,.mjsz-vbr-table tr,.mjsz-vbr-table th,.mjsz-vbr-table td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.mjsz-vbr-table{color:var(--vbr-widget-table-color);background-color:var(--vbr-widget-table-default-bg-color)}.mjsz-vbr-table th{width:var(--vbr-widget-table-default-column-width);background-color:var(--vbr-widget-table-header-bg-color);font-size:var(--vbr-widget-table-header-font-size);font-weight:700;color:var(--vbr-widget-table-header-color);text-align:center}.mjsz-vbr-table th:focus-visible,.mjsz-vbr-table th:hover{background-color:var(--vbr-widget-table-header-hover-bg-color);outline:none}.mjsz-vbr-table th.is-sortable{position:relative;cursor:pointer}.mjsz-vbr-table th.is-sortable .icon-sort{opacity:.5}.mjsz-vbr-table th.is-active{background-color:var(--vbr-widget-table-table-header-active-bg-color);color:var(--vbr-widget-table-header-active-color)}.mjsz-vbr-table th.is-active .icon-sort{opacity:1}.mjsz-vbr-table th.is-asc,.mjsz-vbr-table th.is-desc{position:relative}.mjsz-vbr-table th.is-w-auto{width:auto}.mjsz-vbr-table th .is-icon-sort{width:11px;height:11px;margin-left:5px}.mjsz-vbr-table td{text-align:center}.mjsz-vbr-table td.is-active{font-weight:700;color:var(--vbr-widget-table-active-color);background-color:var(--vbr-widget-table-active-bg-color)}.mjsz-vbr-table td .is-text-light,.mjsz-vbr-table td.is-text-light{color:var(--vbr-widget-table-cell-light-color)}.mjsz-vbr-table td .is-text-dark,.mjsz-vbr-table td.is-text-dark{color:var(--vbr-widget-table-cell-dark-color)}.mjsz-vbr-table td .is-logo-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-logo-size);height:var(--vbr-widget-table-cell-logo-size)}.mjsz-vbr-table td .is-portrait-image{display:inline-block;vertical-align:middle;width:var(--vbr-widget-table-cell-portrait-size);height:var(--vbr-widget-table-cell-portrait-size);object-fit:cover;object-position:top;overflow:hidden;border-radius:100%;border:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-table td .is-portrait-image img{width:var(--vbr-widget-table-cell-portrait-size);height:auto}.mjsz-vbr-table td.is-text-bold{font-weight:700}.mjsz-vbr-table td.is-text-xl{font-size:1.2 rem}.mjsz-vbr-table td .is-text-accent{color:var(--vbr-widget-secondary-color-500)}.mjsz-vbr-table td.is-w-auto{width:auto}.mjsz-vbr-table td svg{width:16px;height:16px}.mjsz-vbr-table td button{padding:3px;line-height:0;border:none;outline:none;background-color:transparent}.mjsz-vbr-table td button:hover{background-color:var(--vbr-widget-popover-trigger-hover-bg-color)}.mjsz-vbr-table td button:active,.mjsz-vbr-table td button:focus{background-color:var(--vbr-widget-popover-trigger-focus-bg-color)}.mjsz-vbr-table td a{text-decoration:none}.mjsz-vbr-table td .label{padding:3px 6px;font-size:11px;font-weight:700;color:var(--vbr-widget-table-label-color);background-color:var(--vbr-widget-table-label-bg-color);border-radius:2px}.mjsz-vbr-table td .label:not(:last-of-type){margin-right:3px}.mjsz-vbr-table td a{color:var(--vbr-widget-link-color)}.mjsz-vbr-table td a:hover{color:var(--vbr-widget-hover-color)}.mjsz-vbr-table th,.mjsz-vbr-table td{padding:8px;white-space:nowrap;vertical-align:middle}.mjsz-vbr-table th.is-text-left,.mjsz-vbr-table td.is-text-left{text-align:left}.mjsz-vbr-table th.is-text-right,.mjsz-vbr-table td.is-text-right{text-align:right}.mjsz-vbr-table th.is-has-image,.mjsz-vbr-table td.is-has-image{padding:0 2px}.mjsz-vbr-table th .is-duplicated,.mjsz-vbr-table td .is-duplicated{color:var(--vbr-widget-table-neutral-color)}.mjsz-vbr-table tr:nth-child(even){background-color:var(--vbr-widget-table-stripped-bg-color)}.mjsz-vbr-table tr:nth-child(even) td.is-active{background-color:var(--vbr-widget-table-active-even-bg-color)}.mjsz-vbr-table tr:focus-within,.mjsz-vbr-table tr:hover{color:var(--vbr-widget-table-hover-color);background-color:var(--vbr-widget-table-hover-bg-color)}.mjsz-vbr-table tr:focus-within td.is-active,.mjsz-vbr-table tr:hover td.is-active{color:var(--vbr-widget-table-active-hover-color);background-color:var(--vbr-widget-table-active-hover-bg-color)}
`, Qn = `.g-row{display:flex;flex-wrap:wrap}.g-col{flex:1 0 0%}[class^=g-col-]{flex:0 0 auto}.g-col-6{width:50%}.g-col-5{width:41.66666667%}.g-col-3{width:25%}.g-col-auto{width:auto}
`, Wc = `.mjsz-vbr-table-responsive{width:100%;overflow-x:auto}.mjsz-vbr-table-responsive table{width:100%}
`, qc = `.mjsz-vbr-paginator{display:flex;flex-direction:row;list-style-type:none;margin:10px 0;padding:0}.mjsz-vbr-paginator button,.mjsz-vbr-paginator div{display:flex;align-items:center;justify-content:center;padding:6px 12px;text-decoration:none;cursor:pointer;color:var(--vbr-widget-paginator-color);border:1px solid var(--vbr-widget-paginator-border-color);background-color:var(--vbr-widget-paginator-bg-color);margin-left:-1px}.mjsz-vbr-paginator button .icon,.mjsz-vbr-paginator div .icon{width:16px;height:16px;margin:0 -4px}.mjsz-vbr-paginator button:hover:not(.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator button.is-active),.mjsz-vbr-paginator div:hover:not(.mjsz-vbr-paginator div.is-disabled,.mjsz-vbr-paginator div.is-active){color:var(--vbr-widget-paginator-hover-color);background-color:var(--vbr-widget-paginator-hover-bg-color)}.mjsz-vbr-paginator button:disabled,.mjsz-vbr-paginator button.is-disabled,.mjsz-vbr-paginator div:disabled,.mjsz-vbr-paginator div.is-disabled{color:var(--vbr-widget-paginator-disabled-color);background-color:var(--vbr-widget-paginator-bg-color);pointer-events:none;cursor:default}.mjsz-vbr-paginator button.is-active,.mjsz-vbr-paginator div.is-active{color:var(--vbr-widget-paginator-active-color);background-color:var(--vbr-widget-paginator-active-bg-color);border-color:var(--vbr-widget-paginator-active-bg-color);cursor:default}
`, Zc = { style: { display: "flex", "align-items": "center" } }, Xc = {
  key: 0,
  style: { "flex-grow": "1", "text-align": "right" }
}, Jc = {
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
    ...yo
  },
  setup(t) {
    const e = t, r = { en: lr, hu: sr }, n = (o) => externalTeamLinkResolver(e.externalTeamLink, o), a = (o) => externalPlayerLinkResolver(e.externalPlayerLink, o);
    return (o, i) => (x(), T("div", null, [
      F(f(or), {
        locale: e.locale,
        messages: r
      }, {
        default: K(() => [
          F(f(Rn), null, {
            default: K(({ hasError: s, error: u }) => [
              F(Cc, {
                "championship-name": t.championshipName,
                "championship-id": t.championshipId,
                limit: e.limit,
                "api-key": t.apiKey
              }, {
                default: K(({
                  sort: l,
                  columns: g,
                  rows: c,
                  page: m,
                  range: d,
                  loading: v,
                  selectorProps: p,
                  selectorListeners: h,
                  onPaginatorChange: w,
                  onSort: y
                }) => [
                  s ? (x(), at(f(Cn), {
                    key: 0,
                    error: u
                  }, null, 8, ["error"])) : (x(), at(Yc, uo({ key: 1 }, p, mo(h)), null, 16)),
                  F(f(Rl), {
                    columns: g,
                    rows: c.rows,
                    sort: l,
                    "is-loading": v,
                    "external-team-resolver": n,
                    "external-player-resolver": a,
                    "is-team-linked": o.isTeamLinked,
                    "is-player-linked": o.isPlayerLinked,
                    "hide-columns": t.hideColumns,
                    onSort: y
                  }, null, 8, ["columns", "rows", "sort", "is-loading", "is-team-linked", "is-player-linked", "hide-columns", "onSort"]),
                  S("div", Zc, [
                    F(f(gl), {
                      page: m,
                      "items-per-page": e.limit,
                      "total-items": c.totalItems,
                      "range-length": 5,
                      onChange: w
                    }, null, 8, ["page", "items-per-page", "total-items", "onChange"]),
                    c.totalItems > 0 ? (x(), T("div", Xc, k(d.join("-")) + " / " + k(c.totalItems) + " db", 1)) : R("", !0)
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
}, Qc = /* @__PURE__ */ Ee(Jc, [["styles", [cr, Uc, Kc, Qn, Wc, qc]]]), tu = (t, e) => {
  if (t.length === 0)
    throw new ir(he.message, he.options);
  e.seasons = nu(t), e.championshipId || (e.championshipId = At(e.seasons).championshipId);
}, eu = (t, e) => {
  e.sections = t.sectionName, e.sections && !e.sections.includes(e.section) && (e.section = At(e.sections));
}, ru = (t, e) => {
  e.teams = ou(t);
}, nu = (t) => je(Pe(tr(bt("seasonName"))), wt(ke(["championshipId", "seasonName"])))(t), ou = (t) => Pe(Te(bt("teamName")), t), au = (t = [], e = "hu", r = pt) => {
  const n = G([]), a = G(null), o = G([]), i = () => {
    o.value = t.value.reduce((u, l) => {
      var d;
      const g = new Date(l.gameDate), c = (d = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(g)) == null ? void 0 : d.toLowerCase(), m = new Intl.DateTimeFormat(e.value, { month: "long" }).format(g);
      return u[c] || (u[c] = { value: g.getMonth(), name: iu(m) }), u;
    }, {}), n.value = Object.values(o.value);
  }, s = () => {
    var c, m, d, v;
    const u = Ol(/* @__PURE__ */ new Date(), (c = At(t.value)) == null ? void 0 : c.gameDate, (m = qa(t.value)) == null ? void 0 : m.gameDate), l = (d = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(/* @__PURE__ */ new Date())) == null ? void 0 : d.toLowerCase(), g = ke([l], o.value);
    a.value = g && u ? (/* @__PURE__ */ new Date()).getMonth() : (v = At(n.value)) == null ? void 0 : v.value, r(a.value);
  };
  return ut([t, e], i), an(t, () => {
    i(), s();
  }), {
    months: n,
    selectedMonth: a
  };
};
function iu(t) {
  return t[0].toUpperCase() + t.slice(1);
}
const su = {
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
    const e = t, r = un("history"), n = Mt({
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
    }), a = pr(e, "timezone"), { onError: o } = nr(), i = C(() => {
      switch (n.selectedTeamGameType) {
        case "all":
          return ["homeTeamId", "awayTeamId"];
        case "home":
          return ["homeTeamId"];
        default:
          return ["awayTeamId"];
      }
    }), { isLoading: s, execute: u } = Jt({
      options: {
        path: "/v1/championshipSeasons",
        apiKey: e.apiKey,
        params: { championshipName: n.championshipName }
      },
      transform: (b) => tu(b, n),
      onError: o
    }), { isLoading: l, execute: g } = Jt({
      options: {
        path: "/v1/championshipSections",
        apiKey: e.apiKey,
        params: C(() => ({ championshipId: n.championshipId }))
      },
      transform: (b) => eu(b, n),
      onError: o
    }), { isLoading: c, execute: m } = Jt({
      options: {
        path: "/v1/championshipTeams",
        apiKey: e.apiKey,
        params: C(() => ({ championshipId: n.championshipId }))
      },
      transform: (b) => ru(b, n),
      onError: o
    }), {
      isLoading: d,
      state: v,
      execute: p
    } = Jt({
      options: {
        path: "/v1/gamesList",
        apiKey: e.apiKey,
        params: C(() => ({ championshipId: n.championshipId, division: n.section }))
      },
      transform: (b) => tc(b),
      onError: o
    }), h = dn([l, s, c, d], { delay: 1e3 }), { months: w } = au(v, pr(e, "locale"), (b) => {
      n.selectedMonth = b;
    }), { pause: y, resume: z } = ta(p, gr, { immediate: !1 });
    ql(e.autoRefresh, z, y);
    const P = C(() => Xn(f(v)).filter(n.selectedTeam, i.value, !0).schedule(f(a), f(e.locale)).gameDateFilter(f(n.selectedMonth)).groupByDays().value());
    yr([u, g, m, p], {
      onFinished: () => {
        e.autoRefresh && We(z, gr);
      }
    });
    const E = (b) => {
      n.championshipId = b, r.championshipId = b, e.autoRefresh && z(), n.selectedTeam = null, r.selectedTeam = null, n.selectedMonth = null, r.selectedMonth = null, n.selectedTeamGameType = "all", r.selectedTeamGameType = null, yr([g, m, p]), e.autoRefresh && z();
    }, L = (b) => {
      n.selectedMonth = b, r.selectedMonth = b;
    }, V = (b) => {
      n.section = b, r.section = b, n.selectedMonth = null, r.selectedMonth = null, p();
    }, Y = (b) => {
      n.selectedTeam = b, r.selectedTeam = b, b || (n.selectedTeamGameType = "all", r.selectedTeamGameType = null);
    }, D = (b) => {
      n.selectedTeamGameType = b, r.selectedTeamGameType = b;
    };
    return (b, B) => it(b.$slots, "default", rn(nn({
      ...n,
      games: P.value,
      months: f(w),
      isLoading: f(h),
      changeSeason: E,
      changeMonth: L,
      changeSection: V,
      changeTeam: Y,
      changeTeamType: D
    })));
  }
}, lu = {
  class: "g-row",
  style: { "column-gap": "8px" }
}, cu = ["value"], uu = { value: null }, du = ["value"], mu = { value: null }, pu = ["value"], fu = { value: "all" }, gu = { value: "home" }, vu = { value: "away" }, hu = {
  __name: "ScheduleSelector",
  props: {
    seasons: {
      type: Array,
      defauét: () => []
    },
    championshipId: {
      type: Number,
      default: 0
    },
    months: {
      type: Array,
      defauét: () => []
    },
    selectedMonth: {
      type: Number,
      default: null
    },
    teams: {
      type: Array,
      defauét: () => []
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
    const r = t, { t: n } = zt(), { championshipId: a, selectedMonth: o, selectedTeam: i, selectedTeamGameType: s } = ra(r, e), u = C(() => i.value === null), l = ct("label");
    return (g, c) => (x(), T("div", lu, [
      S("div", null, [
        S("label", {
          for: "season",
          class: H(f(l))
        }, k(f(n)("selection.season")), 3),
        F(f(_t), {
          id: "season",
          modelValue: f(a),
          "onUpdate:modelValue": c[0] || (c[0] = (m) => Nt(a) ? a.value = m : null)
        }, {
          default: K(() => [
            (x(!0), T(Z, null, et(t.seasons, (m) => (x(), T("option", {
              key: m.championshipId,
              value: m.championshipId
            }, k(m.seasonName), 9, cu))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      S("div", null, [
        S("label", {
          for: "months",
          class: H(f(l))
        }, k(f(n)("selection.month")), 3),
        F(f(_t), {
          id: "months",
          modelValue: f(o),
          "onUpdate:modelValue": c[1] || (c[1] = (m) => Nt(o) ? o.value = m : null)
        }, {
          default: K(() => [
            S("option", uu, k(f(n)("common.all")), 1),
            (x(!0), T(Z, null, et(t.months, (m) => (x(), T("option", {
              key: m.value,
              value: m.value
            }, k(m.name), 9, du))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      S("div", null, [
        S("label", {
          for: "teams",
          class: H(f(l))
        }, k(f(n)("selection.teams")), 3),
        F(f(_t), {
          id: "teams",
          modelValue: f(i),
          "onUpdate:modelValue": c[2] || (c[2] = (m) => Nt(i) ? i.value = m : null),
          style: { "max-width": "200px" }
        }, {
          default: K(() => [
            S("option", mu, k(f(n)("common.all")), 1),
            (x(!0), T(Z, null, et(t.teams, (m) => (x(), T("option", {
              key: m.teamId,
              value: m.teamId
            }, k(m.teamName), 9, pu))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      S("div", null, [
        S("label", {
          for: "type",
          class: H(f(l))
        }, k(f(n)("selection.homeOrAway")), 3),
        F(f(_t), {
          id: "type",
          modelValue: f(s),
          "onUpdate:modelValue": c[3] || (c[3] = (m) => Nt(s) ? s.value = m : null),
          disabled: u.value
        }, {
          default: K(() => [
            S("option", fu, k(f(n)("common.all")), 1),
            S("option", gu, k(f(n)("selection.home")), 1),
            S("option", vu, k(f(n)("selection.away")), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "disabled"])
      ])
    ]));
  }
}, bu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, yu = /* @__PURE__ */ S("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }, null, -1), wu = /* @__PURE__ */ S("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }, null, -1), xu = [
  yu,
  wu
];
function zu(t, e) {
  return x(), T("svg", bu, xu);
}
const $u = { render: zu }, Su = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _u = /* @__PURE__ */ S("rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  ry: "2"
}, null, -1), Tu = /* @__PURE__ */ S("line", {
  x1: "8",
  y1: "21",
  x2: "16",
  y2: "21"
}, null, -1), ju = /* @__PURE__ */ S("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "21"
}, null, -1), ku = [
  _u,
  Tu,
  ju
];
function Pu(t, e) {
  return x(), T("svg", Su, ku);
}
const Au = { render: Pu }, Ou = { class: "is-info is-text-sm" }, Eu = { href: "#" }, Mu = { class: "is-home-team" }, Iu = { class: "g-row" }, Du = {
  key: 0,
  class: "is-badge is-invert"
}, Lu = {
  key: 1,
  class: "is-badge is-invert"
}, Cu = {
  key: 2,
  class: "is-badge"
}, Nu = ["href"], Ru = {
  key: 0,
  class: "is-text-xl is-text-bold"
}, Gu = {
  key: 1,
  class: "is-text-xl is-text-bold"
}, Fu = {
  key: 2,
  class: "is-text-xl is-text-bold"
}, Vu = { key: 3 }, Bu = {
  key: 0,
  class: "is-text-xs is-opacity-30"
}, Hu = { class: "is-text-sm" }, Yu = {
  key: 0,
  class: "is-text-xs is-uppercase"
}, Uu = { class: "is-away-team" }, Ku = {
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
      default: pt
    }
  },
  setup(t) {
    const { t: e } = zt(), r = ct("card-item");
    return (n, a) => (x(), T("div", {
      class: H(f(r))
    }, [
      S("div", Ou, [
        dt(k(t.game.name) + " - " + k(t.game.divisionName) + " - " + k(t.game.location) + " ", 1),
        t.game.broadcast ? (x(), T(Z, { key: 0 }, [
          dt("- "),
          F(f(Au), { height: "16" }),
          dt(" ")
        ], 64)) : R("", !0),
        t.game.video ? (x(), T(Z, { key: 1 }, [
          dt("- "),
          S("a", Eu, [
            F(f($u), { height: "18" })
          ])
        ], 64)) : R("", !0)
      ]),
      S("div", Mu, [
        dt(k(t.game.homeTeamName) + " ", 1),
        F(f(Ht), {
          class: "is-logo-image",
          src: t.game.homeTeamLogo
        }, null, 8, ["src"])
      ]),
      S("div", {
        class: H(["is-game-data", { "is-live": t.game.gameStatus === 1 }])
      }, [
        S("div", Iu, [
          t.game.isOvertime ? (x(), T("span", Du, k(f(e)("common.overtimeShort")), 1)) : R("", !0),
          t.game.isShootout ? (x(), T("span", Lu, k(f(e)("common.shootoutShort")), 1)) : R("", !0),
          t.game.seriesStandings ? (x(), T("span", Cu, k(t.game.seriesStandings), 1)) : R("", !0)
        ]),
        S("a", {
          href: t.gameLink(t.game.id)
        }, [
          t.game.gameStatus > 0 && t.game.gameStatus < 3 ? (x(), T("span", Ru, k(t.game.homeTeamScore) + " - " + k(t.game.awayTeamScore), 1)) : R("", !0),
          t.game.gameStatus === 3 ? (x(), T("span", Gu, k(f(e)("game.status.jury")), 1)) : R("", !0),
          t.game.gameStatus === 4 ? (x(), T("span", Fu, k(f(e)("game.status.delayed")), 1)) : R("", !0),
          t.game.gameStatus === 0 ? (x(), T("span", Vu, k(t.game.gameDateTime), 1)) : R("", !0)
        ], 8, Nu),
        t.game.gameStatus === 0 ? (x(), T("span", Bu, "(" + k(t.offsetName) + ")", 1)) : R("", !0),
        t.game.gameStatus > 0 ? (x(), T(Z, { key: 1 }, [
          S("div", Hu, k(t.game.periodResults), 1),
          t.game.gameStatus !== 2 ? (x(), T("div", Yu, k(t.game.period), 1)) : R("", !0)
        ], 64)) : R("", !0)
      ], 2),
      S("div", Uu, [
        F(f(Ht), {
          class: "is-logo-image",
          src: t.game.awayTeamLogo
        }, null, 8, ["src"]),
        dt(" " + k(t.game.awayTeamName), 1)
      ])
    ], 2));
  }
}, Wu = `.is-text-right{text-align:right}.is-text-center{text-align:center}.is-text-bold{font-weight:700}.is-text-xs{font-size:.75rem;line-height:1rem}.is-text-sm{font-size:.875rem;line-height:1.25rem}.is-text-base{font-size:1rem;line-height:1.5rem}.is-text-lg{font-size:1.125rem;line-height:1.75rem}.is-text-xl{font-size:1.25rem;line-height:1.75rem}.is-uppercase{text-transform:uppercase}.is-opacity-20{opacity:.2}.is-opacity-30{opacity:.3}.is-opacity-50{opacity:.5}.is-mb-5{margin-bottom:1rem}
`, qu = `.mjsz-vbr-base-input{padding:.375rem .75rem;color:var(--vbr-widget-base-input-color);border:1px solid var(--vbr-widget-base-input-border-color);border-radius:var(--vbr-widget-base-input-border-radius);width:100%;-moz-padding-start:calc(.75rem - 3px);font-size:var(--vbr-widget-base-input-font-size);font-weight:400;line-height:1.5;background-color:#fff;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}.mjsz-vbr-base-input:disabled{opacity:.3}.mjsz-vbr-base-input.is-select{padding-right:2.25rem;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px}label{display:block;margin-bottom:3px;color:var(--vbr-widget-form-label-color);font-size:var(--vbr-widget-form-label-font-size);font-weight:700;text-transform:uppercase}.mjsz-vbr-tab-button{padding:var(--vbr-widget-tab-btn-padding);font-family:inherit;font-size:var(--vbr-widget-tab-btn-font-size);font-weight:var(--vbr-widget-tab-btn-font-weight);color:var(--vbr-widget-tab-btn-color);text-transform:var(--vbr-widget-tab-btn-text-transform);background-color:var(--vbr-widget-tab-btn-bg-color);border-color:var(--vbr-widget-tab-btn-border-color);border-width:var(--vbr-widget-tab-btn-border-width);border-style:var(--vbr-widget-tab-btn-border-style);outline:none;box-shadow:none;cursor:pointer}.mjsz-vbr-tab-button:hover{color:var(--vbr-widget-tab-btn-hover-color);border-color:var(--vbr-widget-tab-btn-hover-border-color);background-color:var(--vbr-widget-tab-btn-hover-bg-color)}.mjsz-vbr-tab-button.is-active{color:var(--vbr-widget-tab-btn-active-color);border-color:var(--vbr-widget-tab-btn-active-border-color);background-color:var(--vbr-widget-tab-btn-active-bg-color)}
`, Zu = `.is-card{background-color:#fff;padding:15px;margin-bottom:20px;box-shadow:0 2px 4px #0000001a,0 2px 2px #0000001a}.is-card>div{border-bottom:1px solid var(--vbr-widget-primary-color-100)}.is-card>div:last-of-type{border:none}.mjsz-vbr-card-item{display:grid;grid-gap:1rem;grid-template-columns:2fr 1fr 2fr;padding:2rem 0;border-bottom:1px solid var(--vbr-widget-primary-color-100)}.mjsz-vbr-card-item svg{display:block}.mjsz-vbr-card-item .is-info{grid-column:1/4;display:flex;justify-content:center;align-items:center;color:var(--vbr-widget-primary-color-500)}.mjsz-vbr-card-item .is-home-team{display:flex;gap:8px;align-items:center;justify-content:flex-end;font-weight:700}.mjsz-vbr-card-item .is-away-team{display:flex;gap:8px;align-items:center;justify-content:flex-start;font-weight:700}.mjsz-vbr-card-item .is-logo-image{width:40px}.mjsz-vbr-card-item .is-game-data{display:flex;flex-direction:column;align-items:center;justify-content:center}.mjsz-vbr-card-item .is-game-data a{display:flex;flex-direction:column;align-items:center;color:var(--vbr-widget-primary-color-900)}.mjsz-vbr-card-item .is-game-data a:hover{color:var(--vbr-widget-primary-color-600)}.mjsz-vbr-card-item .is-game-data.is-live,.mjsz-vbr-card-item .is-game-data.is-live a{color:var(--vbr-widget-live-game-color)}.mjsz-vbr-section-selector{margin:20px 0;border-bottom:1px solid var(--vbr-widget-primary-color-200)}
`, Xu = ["onClick"], Ju = { class: "is-card" }, Qu = {
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
    const e = t, r = G(ar()), n = C(() => Zt(/* @__PURE__ */ new Date(), f(r), e.locale)), a = ct("tab-button"), o = ct("section-selector"), i = { en: lr, hu: sr }, s = (l) => Jn(e.externalGameLink, l), u = (l) => {
      r.value = l;
    };
    return (l, g) => (x(), T("div", null, [
      F(f(or), {
        locale: e.locale,
        messages: i
      }, {
        default: K(() => [
          F(f(Rn), null, {
            default: K(({ error: c, hasError: m }) => [
              m ? (x(), at(f(Cn), {
                key: 0,
                error: c
              }, null, 8, ["error"])) : R("", !0),
              F(su, {
                locale: t.locale,
                timezone: r.value,
                "championship-name": t.championshipName,
                "auto-refresh": e.autoRefresh
              }, {
                default: K(({
                  seasons: d,
                  championshipId: v,
                  sections: p,
                  section: h,
                  teams: w,
                  games: y,
                  months: z,
                  isLoading: P,
                  selectedMonth: E,
                  selectedTeam: L,
                  selectedTeamGameType: V,
                  changeSeason: Y,
                  changeMonth: D,
                  changeSection: b,
                  changeTeam: B,
                  changeTeamType: Q
                }) => [
                  F(hu, {
                    seasons: d,
                    "championship-id": v,
                    months: z,
                    "selected-month": E,
                    teams: w,
                    "selected-team": L,
                    "selected-team-game-type": V,
                    "onUpdate:championshipId": Y,
                    "onUpdate:selectedMonth": D,
                    "onUpdate:selectedTeam": B,
                    "onUpdate:selectedTeamGameType": Q
                  }, null, 8, ["seasons", "championship-id", "months", "selected-month", "teams", "selected-team", "selected-team-game-type", "onUpdate:championshipId", "onUpdate:selectedMonth", "onUpdate:selectedTeam", "onUpdate:selectedTeamGameType"]),
                  S("div", {
                    class: H(f(o))
                  }, [
                    (x(!0), T(Z, null, et(p, (A) => (x(), T("button", {
                      key: A,
                      onClick: (j) => b(A),
                      class: H([f(a), { "is-active": A === h }])
                    }, k(A), 11, Xu))), 128))
                  ], 2),
                  e.timezoneSelector ? (x(), at(f(Ml), {
                    class: "is-mb-5",
                    key: e.locale,
                    locale: e.locale,
                    "current-zone": r.value,
                    onChange: u
                  }, null, 8, ["locale", "current-zone"])) : R("", !0),
                  P ? (x(), at(f(Gn), { key: 1 })) : (x(!0), T(Z, { key: 2 }, et(y.rows, (A, j) => (x(), T("div", { key: j }, [
                    dt(k(f(Ft)(j, "L dddd", r.value, t.locale)) + " ", 1),
                    S("div", Ju, [
                      (x(!0), T(Z, null, et(A, (_) => (x(), at(Ku, {
                        key: _.id,
                        game: _,
                        "offset-name": n.value,
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
}, td = /* @__PURE__ */ Ee(Qu, [["styles", [cr, Wu, qu, Qn, Zu]]]), ed = Ue(Qc), rd = Ue(td), nd = Ue(Oc);
function id() {
  customElements.define("mjsz-vbr-statistics", ed), customElements.define("mjsz-vbr-schedule-liga", rd), customElements.define("mjsz-vbr-playoffs", nd);
}
export {
  nd as PlayoffsCE,
  rd as ScheduleLigaCE,
  ed as StatisticsCE,
  id as default
};
