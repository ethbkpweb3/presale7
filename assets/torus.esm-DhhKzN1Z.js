import { bj as oi, bk as Be, bl as je, ap as bo } from "./index-CpP-AC1q.js";
import {
  l as si,
  a as go,
  _ as I,
  r as dt,
  s as yo,
  p as St,
  d as ve,
  o as _o,
  e as Gn,
  b as wo,
  i as mo,
  c as So,
} from "./index-CVIP3emZ.js";
import { e as Qe } from "./events-sPNiP9gX.js";
function Ao(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function Eo(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ao(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (n = s[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function qn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qn(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
const fn = si.getLogger("http-helpers");
fn.setLevel(go.levels.INFO);
let cn = "torus-default";
const Ro = "x-api-key";
function To(e) {
  cn = e;
}
async function Io(e, t) {
  let n = null;
  try {
    n = new URL(e);
  } catch {}
  return fetch(e, t);
}
function Do() {
  const e = {};
  return cn && (e[Ro] = cn), e;
}
function vo(e) {
  fn.info(`Response: ${e.status} ${e.statusText}`), fn.info(`Url: ${e.url}`);
}
const ai = async function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = { mode: "cors", headers: {} };
  n.useAPIKey && (r.headers = Yn(Yn({}, r.headers), Do()));
  const i = oi(r, t, { method: "GET" }),
    s = await Io(e, i);
  if (s.ok) return s.json();
  throw (vo(s), s);
};
var li = { exports: {} },
  Kt = { exports: {} },
  z = {
    ArrayIsArray(e) {
      return Array.isArray(e);
    },
    ArrayPrototypeIncludes(e, t) {
      return e.includes(t);
    },
    ArrayPrototypeIndexOf(e, t) {
      return e.indexOf(t);
    },
    ArrayPrototypeJoin(e, t) {
      return e.join(t);
    },
    ArrayPrototypeMap(e, t) {
      return e.map(t);
    },
    ArrayPrototypePop(e, t) {
      return e.pop(t);
    },
    ArrayPrototypePush(e, t) {
      return e.push(t);
    },
    ArrayPrototypeSlice(e, t, n) {
      return e.slice(t, n);
    },
    Error,
    FunctionPrototypeCall(e, t, ...n) {
      return e.call(t, ...n);
    },
    FunctionPrototypeSymbolHasInstance(e, t) {
      return Function.prototype[Symbol.hasInstance].call(e, t);
    },
    MathFloor: Math.floor,
    Number,
    NumberIsInteger: Number.isInteger,
    NumberIsNaN: Number.isNaN,
    NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
    NumberParseInt: Number.parseInt,
    ObjectDefineProperties(e, t) {
      return Object.defineProperties(e, t);
    },
    ObjectDefineProperty(e, t, n) {
      return Object.defineProperty(e, t, n);
    },
    ObjectGetOwnPropertyDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t);
    },
    ObjectKeys(e) {
      return Object.keys(e);
    },
    ObjectSetPrototypeOf(e, t) {
      return Object.setPrototypeOf(e, t);
    },
    Promise,
    PromisePrototypeCatch(e, t) {
      return e.catch(t);
    },
    PromisePrototypeThen(e, t, n) {
      return e.then(t, n);
    },
    PromiseReject(e) {
      return Promise.reject(e);
    },
    PromiseResolve(e) {
      return Promise.resolve(e);
    },
    ReflectApply: Reflect.apply,
    RegExpPrototypeTest(e, t) {
      return e.test(t);
    },
    SafeSet: Set,
    String,
    StringPrototypeSlice(e, t, n) {
      return e.slice(t, n);
    },
    StringPrototypeToLowerCase(e) {
      return e.toLowerCase();
    },
    StringPrototypeToUpperCase(e) {
      return e.toUpperCase();
    },
    StringPrototypeTrim(e) {
      return e.trim();
    },
    Symbol,
    SymbolFor: Symbol.for,
    SymbolAsyncIterator: Symbol.asyncIterator,
    SymbolHasInstance: Symbol.hasInstance,
    SymbolIterator: Symbol.iterator,
    SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
    SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
    TypedArrayPrototypeSet(e, t, n) {
      return e.set(t, n);
    },
    Boolean,
    Uint8Array,
  },
  di = { exports: {} };
(function (e) {
  const t = Be,
    { kResistStopPropagation: n, SymbolDispose: r } = z,
    i = globalThis.AbortSignal || dt().AbortSignal,
    s = globalThis.AbortController || dt().AbortController,
    l = Object.getPrototypeOf(async function () {}).constructor,
    c = globalThis.Blob || t.Blob,
    h =
      typeof c < "u"
        ? function (b) {
            return b instanceof c;
          }
        : function (b) {
            return !1;
          },
    p = (g, b) => {
      if (
        g !== void 0 &&
        (g === null || typeof g != "object" || !("aborted" in g))
      )
        throw new ERR_INVALID_ARG_TYPE(b, "AbortSignal", g);
    },
    f = (g, b) => {
      if (typeof g != "function")
        throw new ERR_INVALID_ARG_TYPE(b, "Function", g);
    };
  class S extends Error {
    constructor(b) {
      if (!Array.isArray(b))
        throw new TypeError(`Expected input to be an Array, got ${typeof b}`);
      let A = "";
      for (let y = 0; y < b.length; y++)
        A += `    ${b[y].stack}
`;
      super(A), (this.name = "AggregateError"), (this.errors = b);
    }
  }
  (e.exports = {
    AggregateError: S,
    kEmptyObject: Object.freeze({}),
    once(g) {
      let b = !1;
      return function (...A) {
        b || ((b = !0), g.apply(this, A));
      };
    },
    createDeferredPromise: function () {
      let g, b;
      return {
        promise: new Promise((y, E) => {
          (g = y), (b = E);
        }),
        resolve: g,
        reject: b,
      };
    },
    promisify(g) {
      return new Promise((b, A) => {
        g((y, ...E) => (y ? A(y) : b(...E)));
      });
    },
    debuglog() {
      return function () {};
    },
    format(g, ...b) {
      return g.replace(/%([sdifj])/g, function (...[A, y]) {
        const E = b.shift();
        return y === "f"
          ? E.toFixed(6)
          : y === "j"
          ? JSON.stringify(E)
          : y === "s" && typeof E == "object"
          ? `${E.constructor !== Object ? E.constructor.name : ""} {}`.trim()
          : E.toString();
      });
    },
    inspect(g) {
      switch (typeof g) {
        case "string":
          if (g.includes("'"))
            if (g.includes('"')) {
              if (!g.includes("`") && !g.includes("${")) return `\`${g}\``;
            } else return `"${g}"`;
          return `'${g}'`;
        case "number":
          return isNaN(g) ? "NaN" : Object.is(g, -0) ? String(g) : g;
        case "bigint":
          return `${String(g)}n`;
        case "boolean":
        case "undefined":
          return String(g);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(g) {
        return g instanceof l;
      },
      isArrayBufferView(g) {
        return ArrayBuffer.isView(g);
      },
    },
    isBlob: h,
    deprecate(g, b) {
      return g;
    },
    addAbortListener:
      Qe.addAbortListener ||
      function (b, A) {
        if (b === void 0)
          throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", b);
        p(b, "signal"), f(A, "listener");
        let y;
        return (
          b.aborted
            ? queueMicrotask(() => A())
            : (b.addEventListener("abort", A, {
                __proto__: null,
                once: !0,
                [n]: !0,
              }),
              (y = () => {
                b.removeEventListener("abort", A);
              })),
          {
            __proto__: null,
            [r]() {
              var E;
              (E = y) === null || E === void 0 || E();
            },
          }
        );
      },
    AbortSignalAny:
      i.any ||
      function (b) {
        if (b.length === 1) return b[0];
        const A = new s(),
          y = () => A.abort();
        return (
          b.forEach((E) => {
            p(E, "signals"), E.addEventListener("abort", y, { once: !0 });
          }),
          A.signal.addEventListener(
            "abort",
            () => {
              b.forEach((E) => E.removeEventListener("abort", y));
            },
            { once: !0 }
          ),
          A.signal
        );
      },
  }),
    (e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom"));
})(di);
var se = di.exports,
  Rn = {};
const { format: Co, inspect: Et, AggregateError: Oo } = se,
  Po = globalThis.AggregateError || Oo,
  Mo = Symbol("kIsNodeError"),
  No = [
    "string",
    "function",
    "number",
    "object",
    "Function",
    "Object",
    "boolean",
    "bigint",
    "symbol",
  ],
  Lo = /^([A-Z][a-z0-9]*)+$/,
  ko = "__node_internal_",
  It = {};
function $e(e, t) {
  if (!e) throw new It.ERR_INTERNAL_ASSERTION(t);
}
function Xn(e) {
  let t = "",
    n = e.length;
  const r = e[0] === "-" ? 1 : 0;
  for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
  return `${e.slice(0, n)}${t}`;
}
function Uo(e, t, n) {
  if (typeof t == "function")
    return (
      $e(
        t.length <= n.length,
        `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${t.length}).`
      ),
      t(...n)
    );
  const r = (t.match(/%[dfijoOs]/g) || []).length;
  return (
    $e(
      r === n.length,
      `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${r}).`
    ),
    n.length === 0 ? t : Co(t, ...n)
  );
}
function ne(e, t, n) {
  n || (n = Error);
  class r extends n {
    constructor(...s) {
      super(Uo(e, t, s));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(r.prototype, {
    name: { value: n.name, writable: !0, enumerable: !1, configurable: !0 },
    toString: {
      value() {
        return `${this.name} [${e}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0,
    },
  }),
    (r.prototype.code = e),
    (r.prototype[Mo] = !0),
    (It[e] = r);
}
function zn(e) {
  const t = ko + e.name;
  return Object.defineProperty(e, "name", { value: t }), e;
}
function Wo(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors)) return t.errors.push(e), t;
    const n = new Po([t, e], t.message);
    return (n.code = t.code), n;
  }
  return e || t;
}
let $o = class extends Error {
  constructor(t = "The operation was aborted", n = void 0) {
    if (n !== void 0 && typeof n != "object")
      throw new It.ERR_INVALID_ARG_TYPE("options", "Object", n);
    super(t, n), (this.code = "ABORT_ERR"), (this.name = "AbortError");
  }
};
ne("ERR_ASSERTION", "%s", Error);
ne(
  "ERR_INVALID_ARG_TYPE",
  (e, t, n) => {
    $e(typeof e == "string", "'name' must be a string"),
      Array.isArray(t) || (t = [t]);
    let r = "The ";
    e.endsWith(" argument")
      ? (r += `${e} `)
      : (r += `"${e}" ${e.includes(".") ? "property" : "argument"} `),
      (r += "must be ");
    const i = [],
      s = [],
      l = [];
    for (const h of t)
      $e(
        typeof h == "string",
        "All expected entries have to be of type string"
      ),
        No.includes(h)
          ? i.push(h.toLowerCase())
          : Lo.test(h)
          ? s.push(h)
          : ($e(
              h !== "object",
              'The value "object" should be written as "Object"'
            ),
            l.push(h));
    if (s.length > 0) {
      const h = i.indexOf("object");
      h !== -1 && (i.splice(i, h, 1), s.push("Object"));
    }
    if (i.length > 0) {
      switch (i.length) {
        case 1:
          r += `of type ${i[0]}`;
          break;
        case 2:
          r += `one of type ${i[0]} or ${i[1]}`;
          break;
        default: {
          const h = i.pop();
          r += `one of type ${i.join(", ")}, or ${h}`;
        }
      }
      (s.length > 0 || l.length > 0) && (r += " or ");
    }
    if (s.length > 0) {
      switch (s.length) {
        case 1:
          r += `an instance of ${s[0]}`;
          break;
        case 2:
          r += `an instance of ${s[0]} or ${s[1]}`;
          break;
        default: {
          const h = s.pop();
          r += `an instance of ${s.join(", ")}, or ${h}`;
        }
      }
      l.length > 0 && (r += " or ");
    }
    switch (l.length) {
      case 0:
        break;
      case 1:
        l[0].toLowerCase() !== l[0] && (r += "an "), (r += `${l[0]}`);
        break;
      case 2:
        r += `one of ${l[0]} or ${l[1]}`;
        break;
      default: {
        const h = l.pop();
        r += `one of ${l.join(", ")}, or ${h}`;
      }
    }
    if (n == null) r += `. Received ${n}`;
    else if (typeof n == "function" && n.name)
      r += `. Received function ${n.name}`;
    else if (typeof n == "object") {
      var c;
      if ((c = n.constructor) !== null && c !== void 0 && c.name)
        r += `. Received an instance of ${n.constructor.name}`;
      else {
        const h = Et(n, { depth: -1 });
        r += `. Received ${h}`;
      }
    } else {
      let h = Et(n, { colors: !1 });
      h.length > 25 && (h = `${h.slice(0, 25)}...`),
        (r += `. Received type ${typeof n} (${h})`);
    }
    return r;
  },
  TypeError
);
ne(
  "ERR_INVALID_ARG_VALUE",
  (e, t, n = "is invalid") => {
    let r = Et(t);
    return (
      r.length > 128 && (r = r.slice(0, 128) + "..."),
      `The ${
        e.includes(".") ? "property" : "argument"
      } '${e}' ${n}. Received ${r}`
    );
  },
  TypeError
);
ne(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, n) => {
    var r;
    const i =
      n != null && (r = n.constructor) !== null && r !== void 0 && r.name
        ? `instance of ${n.constructor.name}`
        : `type ${typeof n}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
  },
  TypeError
);
ne(
  "ERR_MISSING_ARGS",
  (...e) => {
    $e(e.length > 0, "At least one arg needs to be specified");
    let t;
    const n = e.length;
    switch (
      ((e = (Array.isArray(e) ? e : [e]).map((r) => `"${r}"`).join(" or ")), n)
    ) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const r = e.pop();
          t += `The ${e.join(", ")}, and ${r} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
ne(
  "ERR_OUT_OF_RANGE",
  (e, t, n) => {
    $e(t, 'Missing "range" argument');
    let r;
    return (
      Number.isInteger(n) && Math.abs(n) > 2 ** 32
        ? (r = Xn(String(n)))
        : typeof n == "bigint"
        ? ((r = String(n)),
          (n > 2n ** 32n || n < -(2n ** 32n)) && (r = Xn(r)),
          (r += "n"))
        : (r = Et(n)),
      `The value of "${e}" is out of range. It must be ${t}. Received ${r}`
    );
  },
  RangeError
);
ne("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
ne("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
ne(
  "ERR_STREAM_ALREADY_FINISHED",
  "Cannot call %s after a stream was finished",
  Error
);
ne("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
ne(
  "ERR_STREAM_DESTROYED",
  "Cannot call %s after a stream was destroyed",
  Error
);
ne("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
ne("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
ne("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
ne(
  "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
  "stream.unshift() after end event",
  Error
);
ne("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
ne("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var ue = {
  AbortError: $o,
  aggregateTwoErrors: zn(Wo),
  hideStackFrames: zn,
  codes: It,
};
const {
    ArrayIsArray: Tn,
    ArrayPrototypeIncludes: ui,
    ArrayPrototypeJoin: fi,
    ArrayPrototypeMap: xo,
    NumberIsInteger: In,
    NumberIsNaN: Bo,
    NumberMAX_SAFE_INTEGER: jo,
    NumberMIN_SAFE_INTEGER: Ho,
    NumberParseInt: Fo,
    ObjectPrototypeHasOwnProperty: Vo,
    RegExpPrototypeExec: ci,
    String: Ko,
    StringPrototypeToUpperCase: Go,
    StringPrototypeTrim: qo,
  } = z,
  {
    hideStackFrames: ce,
    codes: {
      ERR_SOCKET_BAD_PORT: Yo,
      ERR_INVALID_ARG_TYPE: ie,
      ERR_INVALID_ARG_VALUE: et,
      ERR_OUT_OF_RANGE: xe,
      ERR_UNKNOWN_SIGNAL: Zn,
    },
  } = ue,
  { normalizeEncoding: Xo } = se,
  { isAsyncFunction: zo, isArrayBufferView: Zo } = se.types,
  Jn = {};
function Jo(e) {
  return e === (e | 0);
}
function Qo(e) {
  return e === e >>> 0;
}
const es = /^[0-7]+$/,
  ts = "must be a 32-bit unsigned integer or an octal string";
function ns(e, t, n) {
  if ((typeof e > "u" && (e = n), typeof e == "string")) {
    if (ci(es, e) === null) throw new et(t, e, ts);
    e = Fo(e, 8);
  }
  return hi(e, t), e;
}
const rs = ce((e, t, n = Ho, r = jo) => {
    if (typeof e != "number") throw new ie(t, "number", e);
    if (!In(e)) throw new xe(t, "an integer", e);
    if (e < n || e > r) throw new xe(t, `>= ${n} && <= ${r}`, e);
  }),
  is = ce((e, t, n = -2147483648, r = 2147483647) => {
    if (typeof e != "number") throw new ie(t, "number", e);
    if (!In(e)) throw new xe(t, "an integer", e);
    if (e < n || e > r) throw new xe(t, `>= ${n} && <= ${r}`, e);
  }),
  hi = ce((e, t, n = !1) => {
    if (typeof e != "number") throw new ie(t, "number", e);
    if (!In(e)) throw new xe(t, "an integer", e);
    const r = n ? 1 : 0,
      i = 4294967295;
    if (e < r || e > i) throw new xe(t, `>= ${r} && <= ${i}`, e);
  });
function Dn(e, t) {
  if (typeof e != "string") throw new ie(t, "string", e);
}
function os(e, t, n = void 0, r) {
  if (typeof e != "number") throw new ie(t, "number", e);
  if (
    (n != null && e < n) ||
    (r != null && e > r) ||
    ((n != null || r != null) && Bo(e))
  )
    throw new xe(
      t,
      `${n != null ? `>= ${n}` : ""}${n != null && r != null ? " && " : ""}${
        r != null ? `<= ${r}` : ""
      }`,
      e
    );
}
const ss = ce((e, t, n) => {
  if (!ui(n, e)) {
    const i =
      "must be one of: " +
      fi(
        xo(n, (s) => (typeof s == "string" ? `'${s}'` : Ko(s))),
        ", "
      );
    throw new et(t, e, i);
  }
});
function pi(e, t) {
  if (typeof e != "boolean") throw new ie(t, "boolean", e);
}
function Gt(e, t, n) {
  return e == null || !Vo(e, t) ? n : e[t];
}
const as = ce((e, t, n = null) => {
    const r = Gt(n, "allowArray", !1),
      i = Gt(n, "allowFunction", !1);
    if (
      (!Gt(n, "nullable", !1) && e === null) ||
      (!r && Tn(e)) ||
      (typeof e != "object" && (!i || typeof e != "function"))
    )
      throw new ie(t, "Object", e);
  }),
  ls = ce((e, t) => {
    if (e != null && typeof e != "object" && typeof e != "function")
      throw new ie(t, "a dictionary", e);
  }),
  Dt = ce((e, t, n = 0) => {
    if (!Tn(e)) throw new ie(t, "Array", e);
    if (e.length < n) {
      const r = `must be longer than ${n}`;
      throw new et(t, e, r);
    }
  });
function ds(e, t) {
  Dt(e, t);
  for (let n = 0; n < e.length; n++) Dn(e[n], `${t}[${n}]`);
}
function us(e, t) {
  Dt(e, t);
  for (let n = 0; n < e.length; n++) pi(e[n], `${t}[${n}]`);
}
function fs(e, t) {
  Dt(e, t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n],
      i = `${t}[${n}]`;
    if (r == null) throw new ie(i, "AbortSignal", r);
    bi(r, i);
  }
}
function cs(e, t = "signal") {
  if ((Dn(e, t), Jn[e] === void 0))
    throw Jn[Go(e)] !== void 0
      ? new Zn(e + " (signals must use all capital letters)")
      : new Zn(e);
}
const hs = ce((e, t = "buffer") => {
  if (!Zo(e)) throw new ie(t, ["Buffer", "TypedArray", "DataView"], e);
});
function ps(e, t) {
  const n = Xo(t),
    r = e.length;
  if (n === "hex" && r % 2 !== 0)
    throw new et("encoding", t, `is invalid for data of length ${r}`);
}
function bs(e, t = "Port", n = !0) {
  if (
    (typeof e != "number" && typeof e != "string") ||
    (typeof e == "string" && qo(e).length === 0) ||
    +e !== +e >>> 0 ||
    e > 65535 ||
    (e === 0 && !n)
  )
    throw new Yo(t, e, n);
  return e | 0;
}
const bi = ce((e, t) => {
    if (
      e !== void 0 &&
      (e === null || typeof e != "object" || !("aborted" in e))
    )
      throw new ie(t, "AbortSignal", e);
  }),
  gs = ce((e, t) => {
    if (typeof e != "function") throw new ie(t, "Function", e);
  }),
  ys = ce((e, t) => {
    if (typeof e != "function" || zo(e)) throw new ie(t, "Function", e);
  }),
  _s = ce((e, t) => {
    if (e !== void 0) throw new ie(t, "undefined", e);
  });
function ws(e, t, n) {
  if (!ui(n, e)) throw new ie(t, `('${fi(n, "|")}')`, e);
}
const ms = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Qn(e, t) {
  if (typeof e > "u" || !ci(ms, e))
    throw new et(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function Ss(e) {
  if (typeof e == "string") return Qn(e, "hints"), e;
  if (Tn(e)) {
    const t = e.length;
    let n = "";
    if (t === 0) return n;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      Qn(i, "hints"), (n += i), r !== t - 1 && (n += ", ");
    }
    return n;
  }
  throw new et(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var ut = {
    isInt32: Jo,
    isUint32: Qo,
    parseFileMode: ns,
    validateArray: Dt,
    validateStringArray: ds,
    validateBooleanArray: us,
    validateAbortSignalArray: fs,
    validateBoolean: pi,
    validateBuffer: hs,
    validateDictionary: ls,
    validateEncoding: ps,
    validateFunction: gs,
    validateInt32: is,
    validateInteger: rs,
    validateNumber: os,
    validateObject: as,
    validateOneOf: ss,
    validatePlainFunction: ys,
    validatePort: bs,
    validateSignalName: cs,
    validateString: Dn,
    validateUint32: hi,
    validateUndefined: _s,
    validateUnion: ws,
    validateAbortSignal: bi,
    validateLinkHeaderValue: Ss,
  },
  vn = { exports: {} };
const { SymbolAsyncIterator: er, SymbolIterator: tr, SymbolFor: He } = z,
  gi = He("nodejs.stream.destroyed"),
  yi = He("nodejs.stream.errored"),
  hn = He("nodejs.stream.readable"),
  pn = He("nodejs.stream.writable"),
  _i = He("nodejs.stream.disturbed"),
  As = He("nodejs.webstream.isClosedPromise"),
  Es = He("nodejs.webstream.controllerErrorFunction");
function vt(e, t = !1) {
  var n;
  return !!(
    e &&
    typeof e.pipe == "function" &&
    typeof e.on == "function" &&
    (!t || (typeof e.pause == "function" && typeof e.resume == "function")) &&
    (!e._writableState ||
      ((n = e._readableState) === null || n === void 0
        ? void 0
        : n.readable) !== !1) &&
    (!e._writableState || e._readableState)
  );
}
function Ct(e) {
  var t;
  return !!(
    e &&
    typeof e.write == "function" &&
    typeof e.on == "function" &&
    (!e._readableState ||
      ((t = e._writableState) === null || t === void 0
        ? void 0
        : t.writable) !== !1)
  );
}
function Rs(e) {
  return !!(
    e &&
    typeof e.pipe == "function" &&
    e._readableState &&
    typeof e.on == "function" &&
    typeof e.write == "function"
  );
}
function _e(e) {
  return (
    e &&
    (e._readableState ||
      e._writableState ||
      (typeof e.write == "function" && typeof e.on == "function") ||
      (typeof e.pipe == "function" && typeof e.on == "function"))
  );
}
function wi(e) {
  return !!(
    e &&
    !_e(e) &&
    typeof e.pipeThrough == "function" &&
    typeof e.getReader == "function" &&
    typeof e.cancel == "function"
  );
}
function mi(e) {
  return !!(
    e &&
    !_e(e) &&
    typeof e.getWriter == "function" &&
    typeof e.abort == "function"
  );
}
function Si(e) {
  return !!(
    e &&
    !_e(e) &&
    typeof e.readable == "object" &&
    typeof e.writable == "object"
  );
}
function Ts(e) {
  return wi(e) || mi(e) || Si(e);
}
function Is(e, t) {
  return e == null
    ? !1
    : t === !0
    ? typeof e[er] == "function"
    : t === !1
    ? typeof e[tr] == "function"
    : typeof e[er] == "function" || typeof e[tr] == "function";
}
function Ot(e) {
  if (!_e(e)) return null;
  const t = e._writableState,
    n = e._readableState,
    r = t || n;
  return !!(e.destroyed || e[gi] || (r != null && r.destroyed));
}
function Ai(e) {
  if (!Ct(e)) return null;
  if (e.writableEnded === !0) return !0;
  const t = e._writableState;
  return t != null && t.errored
    ? !1
    : typeof (t == null ? void 0 : t.ended) != "boolean"
    ? null
    : t.ended;
}
function Ds(e, t) {
  if (!Ct(e)) return null;
  if (e.writableFinished === !0) return !0;
  const n = e._writableState;
  return n != null && n.errored
    ? !1
    : typeof (n == null ? void 0 : n.finished) != "boolean"
    ? null
    : !!(n.finished || (t === !1 && n.ended === !0 && n.length === 0));
}
function vs(e) {
  if (!vt(e)) return null;
  if (e.readableEnded === !0) return !0;
  const t = e._readableState;
  return !t || t.errored
    ? !1
    : typeof (t == null ? void 0 : t.ended) != "boolean"
    ? null
    : t.ended;
}
function Ei(e, t) {
  if (!vt(e)) return null;
  const n = e._readableState;
  return n != null && n.errored
    ? !1
    : typeof (n == null ? void 0 : n.endEmitted) != "boolean"
    ? null
    : !!(n.endEmitted || (t === !1 && n.ended === !0 && n.length === 0));
}
function Ri(e) {
  return e && e[hn] != null
    ? e[hn]
    : typeof (e == null ? void 0 : e.readable) != "boolean"
    ? null
    : Ot(e)
    ? !1
    : vt(e) && e.readable && !Ei(e);
}
function Ti(e) {
  return e && e[pn] != null
    ? e[pn]
    : typeof (e == null ? void 0 : e.writable) != "boolean"
    ? null
    : Ot(e)
    ? !1
    : Ct(e) && e.writable && !Ai(e);
}
function Cs(e, t) {
  return _e(e)
    ? Ot(e)
      ? !0
      : !(
          ((t == null ? void 0 : t.readable) !== !1 && Ri(e)) ||
          ((t == null ? void 0 : t.writable) !== !1 && Ti(e))
        )
    : null;
}
function Os(e) {
  var t, n;
  return _e(e)
    ? e.writableErrored
      ? e.writableErrored
      : (t =
          (n = e._writableState) === null || n === void 0
            ? void 0
            : n.errored) !== null && t !== void 0
      ? t
      : null
    : null;
}
function Ps(e) {
  var t, n;
  return _e(e)
    ? e.readableErrored
      ? e.readableErrored
      : (t =
          (n = e._readableState) === null || n === void 0
            ? void 0
            : n.errored) !== null && t !== void 0
      ? t
      : null
    : null;
}
function Ms(e) {
  if (!_e(e)) return null;
  if (typeof e.closed == "boolean") return e.closed;
  const t = e._writableState,
    n = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" ||
    typeof (n == null ? void 0 : n.closed) == "boolean"
    ? (t == null ? void 0 : t.closed) || (n == null ? void 0 : n.closed)
    : typeof e._closed == "boolean" && Ii(e)
    ? e._closed
    : null;
}
function Ii(e) {
  return (
    typeof e._closed == "boolean" &&
    typeof e._defaultKeepAlive == "boolean" &&
    typeof e._removedConnection == "boolean" &&
    typeof e._removedContLen == "boolean"
  );
}
function Di(e) {
  return typeof e._sent100 == "boolean" && Ii(e);
}
function Ns(e) {
  var t;
  return (
    typeof e._consuming == "boolean" &&
    typeof e._dumped == "boolean" &&
    ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) ===
      void 0
  );
}
function Ls(e) {
  if (!_e(e)) return null;
  const t = e._writableState,
    n = e._readableState,
    r = t || n;
  return (
    (!r && Di(e)) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1)
  );
}
function ks(e) {
  var t;
  return !!(
    e &&
    ((t = e[_i]) !== null && t !== void 0
      ? t
      : e.readableDidRead || e.readableAborted)
  );
}
function Us(e) {
  var t, n, r, i, s, l, c, h, p, f;
  return !!(
    e &&
    ((t =
      (n =
        (r =
          (i =
            (s =
              (l = e[yi]) !== null && l !== void 0 ? l : e.readableErrored) !==
              null && s !== void 0
              ? s
              : e.writableErrored) !== null && i !== void 0
            ? i
            : (c = e._readableState) === null || c === void 0
            ? void 0
            : c.errorEmitted) !== null && r !== void 0
          ? r
          : (h = e._writableState) === null || h === void 0
          ? void 0
          : h.errorEmitted) !== null && n !== void 0
        ? n
        : (p = e._readableState) === null || p === void 0
        ? void 0
        : p.errored) !== null && t !== void 0
      ? t
      : !((f = e._writableState) === null || f === void 0) && f.errored)
  );
}
var Te = {
  isDestroyed: Ot,
  kIsDestroyed: gi,
  isDisturbed: ks,
  kIsDisturbed: _i,
  isErrored: Us,
  kIsErrored: yi,
  isReadable: Ri,
  kIsReadable: hn,
  kIsClosedPromise: As,
  kControllerErrorFunction: Es,
  kIsWritable: pn,
  isClosed: Ms,
  isDuplexNodeStream: Rs,
  isFinished: Cs,
  isIterable: Is,
  isReadableNodeStream: vt,
  isReadableStream: wi,
  isReadableEnded: vs,
  isReadableFinished: Ei,
  isReadableErrored: Ps,
  isNodeStream: _e,
  isWebStream: Ts,
  isWritable: Ti,
  isWritableNodeStream: Ct,
  isWritableStream: mi,
  isWritableEnded: Ai,
  isWritableFinished: Ds,
  isWritableErrored: Os,
  isServerRequest: Ns,
  isServerResponse: Di,
  willEmitClose: Ls,
  isTransformStream: Si,
};
const De = je(),
  { AbortError: vi, codes: Ws } = ue,
  { ERR_INVALID_ARG_TYPE: $s, ERR_STREAM_PREMATURE_CLOSE: nr } = Ws,
  { kEmptyObject: bn, once: gn } = se,
  {
    validateAbortSignal: xs,
    validateFunction: Bs,
    validateObject: js,
    validateBoolean: Hs,
  } = ut,
  { Promise: Fs, PromisePrototypeThen: Vs, SymbolDispose: Ci } = z,
  {
    isClosed: Ks,
    isReadable: rr,
    isReadableNodeStream: qt,
    isReadableStream: Gs,
    isReadableFinished: ir,
    isReadableErrored: or,
    isWritable: sr,
    isWritableNodeStream: ar,
    isWritableStream: qs,
    isWritableFinished: lr,
    isWritableErrored: dr,
    isNodeStream: Ys,
    willEmitClose: Xs,
    kIsClosedPromise: zs,
  } = Te;
let Ze;
function Zs(e) {
  return e.setHeader && typeof e.abort == "function";
}
const yn = () => {};
function Oi(e, t, n) {
  var r, i;
  if (
    (arguments.length === 2
      ? ((n = t), (t = bn))
      : t == null
      ? (t = bn)
      : js(t, "options"),
    Bs(n, "callback"),
    xs(t.signal, "options.signal"),
    (n = gn(n)),
    Gs(e) || qs(e))
  )
    return Js(e, t, n);
  if (!Ys(e))
    throw new $s("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const s = (r = t.readable) !== null && r !== void 0 ? r : qt(e),
    l = (i = t.writable) !== null && i !== void 0 ? i : ar(e),
    c = e._writableState,
    h = e._readableState,
    p = () => {
      e.writable || g();
    };
  let f = Xs(e) && qt(e) === s && ar(e) === l,
    S = lr(e, !1);
  const g = () => {
    (S = !0),
      e.destroyed && (f = !1),
      !(f && (!e.readable || s)) && (!s || b) && n.call(e);
  };
  let b = ir(e, !1);
  const A = () => {
      (b = !0),
        e.destroyed && (f = !1),
        !(f && (!e.writable || l)) && (!l || S) && n.call(e);
    },
    y = (L) => {
      n.call(e, L);
    };
  let E = Ks(e);
  const O = () => {
      E = !0;
      const L = dr(e) || or(e);
      if (L && typeof L != "boolean") return n.call(e, L);
      if (s && !b && qt(e, !0) && !ir(e, !1)) return n.call(e, new nr());
      if (l && !S && !lr(e, !1)) return n.call(e, new nr());
      n.call(e);
    },
    P = () => {
      E = !0;
      const L = dr(e) || or(e);
      if (L && typeof L != "boolean") return n.call(e, L);
      n.call(e);
    },
    w = () => {
      e.req.on("finish", g);
    };
  Zs(e)
    ? (e.on("complete", g),
      f || e.on("abort", O),
      e.req ? w() : e.on("request", w))
    : l && !c && (e.on("end", p), e.on("close", p)),
    !f && typeof e.aborted == "boolean" && e.on("aborted", O),
    e.on("end", A),
    e.on("finish", g),
    t.error !== !1 && e.on("error", y),
    e.on("close", O),
    E
      ? De.nextTick(O)
      : (c != null && c.errorEmitted) || (h != null && h.errorEmitted)
      ? f || De.nextTick(P)
      : ((!s && (!f || rr(e)) && (S || sr(e) === !1)) ||
          (!l && (!f || sr(e)) && (b || rr(e) === !1)) ||
          (h && e.req && e.aborted)) &&
        De.nextTick(P);
  const x = () => {
    (n = yn),
      e.removeListener("aborted", O),
      e.removeListener("complete", g),
      e.removeListener("abort", O),
      e.removeListener("request", w),
      e.req && e.req.removeListener("finish", g),
      e.removeListener("end", p),
      e.removeListener("close", p),
      e.removeListener("finish", g),
      e.removeListener("end", A),
      e.removeListener("error", y),
      e.removeListener("close", O);
  };
  if (t.signal && !E) {
    const L = () => {
      const q = n;
      x(), q.call(e, new vi(void 0, { cause: t.signal.reason }));
    };
    if (t.signal.aborted) De.nextTick(L);
    else {
      Ze = Ze || se.addAbortListener;
      const q = Ze(t.signal, L),
        ae = n;
      n = gn((...j) => {
        q[Ci](), ae.apply(e, j);
      });
    }
  }
  return x;
}
function Js(e, t, n) {
  let r = !1,
    i = yn;
  if (t.signal)
    if (
      ((i = () => {
        (r = !0), n.call(e, new vi(void 0, { cause: t.signal.reason }));
      }),
      t.signal.aborted)
    )
      De.nextTick(i);
    else {
      Ze = Ze || se.addAbortListener;
      const l = Ze(t.signal, i),
        c = n;
      n = gn((...h) => {
        l[Ci](), c.apply(e, h);
      });
    }
  const s = (...l) => {
    r || De.nextTick(() => n.apply(e, l));
  };
  return Vs(e[zs].promise, s, s), yn;
}
function Qs(e, t) {
  var n;
  let r = !1;
  return (
    t === null && (t = bn),
    (n = t) !== null &&
      n !== void 0 &&
      n.cleanup &&
      (Hs(t.cleanup, "cleanup"), (r = t.cleanup)),
    new Fs((i, s) => {
      const l = Oi(e, t, (c) => {
        r && l(), c ? s(c) : i();
      });
    })
  );
}
vn.exports = Oi;
vn.exports.finished = Qs;
var Ce = vn.exports;
const ge = je(),
  {
    aggregateTwoErrors: ea,
    codes: { ERR_MULTIPLE_CALLBACK: ta },
    AbortError: na,
  } = ue,
  { Symbol: Pi } = z,
  {
    kIsDestroyed: ra,
    isDestroyed: ia,
    isFinished: oa,
    isServerRequest: sa,
  } = Te,
  Mi = Pi("kDestroy"),
  _n = Pi("kConstruct");
function Ni(e, t, n) {
  e &&
    (e.stack,
    t && !t.errored && (t.errored = e),
    n && !n.errored && (n.errored = e));
}
function aa(e, t) {
  const n = this._readableState,
    r = this._writableState,
    i = r || n;
  return (r != null && r.destroyed) || (n != null && n.destroyed)
    ? (typeof t == "function" && t(), this)
    : (Ni(e, r, n),
      r && (r.destroyed = !0),
      n && (n.destroyed = !0),
      i.constructed
        ? ur(this, e, t)
        : this.once(Mi, function (s) {
            ur(this, ea(s, e), t);
          }),
      this);
}
function ur(e, t, n) {
  let r = !1;
  function i(s) {
    if (r) return;
    r = !0;
    const l = e._readableState,
      c = e._writableState;
    Ni(s, c, l),
      c && (c.closed = !0),
      l && (l.closed = !0),
      typeof n == "function" && n(s),
      s ? ge.nextTick(la, e, s) : ge.nextTick(Li, e);
  }
  try {
    e._destroy(t || null, i);
  } catch (s) {
    i(s);
  }
}
function la(e, t) {
  wn(e, t), Li(e);
}
function Li(e) {
  const t = e._readableState,
    n = e._writableState;
  n && (n.closeEmitted = !0),
    t && (t.closeEmitted = !0),
    ((n != null && n.emitClose) || (t != null && t.emitClose)) &&
      e.emit("close");
}
function wn(e, t) {
  const n = e._readableState,
    r = e._writableState;
  (r != null && r.errorEmitted) ||
    (n != null && n.errorEmitted) ||
    (r && (r.errorEmitted = !0),
    n && (n.errorEmitted = !0),
    e.emit("error", t));
}
function da() {
  const e = this._readableState,
    t = this._writableState;
  e &&
    ((e.constructed = !0),
    (e.closed = !1),
    (e.closeEmitted = !1),
    (e.destroyed = !1),
    (e.errored = null),
    (e.errorEmitted = !1),
    (e.reading = !1),
    (e.ended = e.readable === !1),
    (e.endEmitted = e.readable === !1)),
    t &&
      ((t.constructed = !0),
      (t.destroyed = !1),
      (t.closed = !1),
      (t.closeEmitted = !1),
      (t.errored = null),
      (t.errorEmitted = !1),
      (t.finalCalled = !1),
      (t.prefinished = !1),
      (t.ended = t.writable === !1),
      (t.ending = t.writable === !1),
      (t.finished = t.writable === !1));
}
function mn(e, t, n) {
  const r = e._readableState,
    i = e._writableState;
  if ((i != null && i.destroyed) || (r != null && r.destroyed)) return this;
  (r != null && r.autoDestroy) || (i != null && i.autoDestroy)
    ? e.destroy(t)
    : t &&
      (t.stack,
      i && !i.errored && (i.errored = t),
      r && !r.errored && (r.errored = t),
      n ? ge.nextTick(wn, e, t) : wn(e, t));
}
function ua(e, t) {
  if (typeof e._construct != "function") return;
  const n = e._readableState,
    r = e._writableState;
  n && (n.constructed = !1),
    r && (r.constructed = !1),
    e.once(_n, t),
    !(e.listenerCount(_n) > 1) && ge.nextTick(fa, e);
}
function fa(e) {
  let t = !1;
  function n(r) {
    if (t) {
      mn(e, r ?? new ta());
      return;
    }
    t = !0;
    const i = e._readableState,
      s = e._writableState,
      l = s || i;
    i && (i.constructed = !0),
      s && (s.constructed = !0),
      l.destroyed ? e.emit(Mi, r) : r ? mn(e, r, !0) : ge.nextTick(ca, e);
  }
  try {
    e._construct((r) => {
      ge.nextTick(n, r);
    });
  } catch (r) {
    ge.nextTick(n, r);
  }
}
function ca(e) {
  e.emit(_n);
}
function fr(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function ki(e) {
  e.emit("close");
}
function ha(e, t) {
  e.emit("error", t), ge.nextTick(ki, e);
}
function pa(e, t) {
  !e ||
    ia(e) ||
    (!t && !oa(e) && (t = new na()),
    sa(e)
      ? ((e.socket = null), e.destroy(t))
      : fr(e)
      ? e.abort()
      : fr(e.req)
      ? e.req.abort()
      : typeof e.destroy == "function"
      ? e.destroy(t)
      : typeof e.close == "function"
      ? e.close()
      : t
      ? ge.nextTick(ha, e, t)
      : ge.nextTick(ki, e),
    e.destroyed || (e[ra] = !0));
}
var tt = {
  construct: ua,
  destroyer: pa,
  destroy: aa,
  undestroy: da,
  errorOrDestroy: mn,
};
const { ArrayIsArray: ba, ObjectSetPrototypeOf: Ui } = z,
  { EventEmitter: Pt } = Qe;
function Mt(e) {
  Pt.call(this, e);
}
Ui(Mt.prototype, Pt.prototype);
Ui(Mt, Pt);
Mt.prototype.pipe = function (e, t) {
  const n = this;
  function r(f) {
    e.writable && e.write(f) === !1 && n.pause && n.pause();
  }
  n.on("data", r);
  function i() {
    n.readable && n.resume && n.resume();
  }
  e.on("drain", i),
    !e._isStdio && (!t || t.end !== !1) && (n.on("end", l), n.on("close", c));
  let s = !1;
  function l() {
    s || ((s = !0), e.end());
  }
  function c() {
    s || ((s = !0), typeof e.destroy == "function" && e.destroy());
  }
  function h(f) {
    p(), Pt.listenerCount(this, "error") === 0 && this.emit("error", f);
  }
  Sn(n, "error", h), Sn(e, "error", h);
  function p() {
    n.removeListener("data", r),
      e.removeListener("drain", i),
      n.removeListener("end", l),
      n.removeListener("close", c),
      n.removeListener("error", h),
      e.removeListener("error", h),
      n.removeListener("end", p),
      n.removeListener("close", p),
      e.removeListener("close", p);
  }
  return (
    n.on("end", p), n.on("close", p), e.on("close", p), e.emit("pipe", n), e
  );
};
function Sn(e, t, n) {
  if (typeof e.prependListener == "function") return e.prependListener(t, n);
  !e._events || !e._events[t]
    ? e.on(t, n)
    : ba(e._events[t])
    ? e._events[t].unshift(n)
    : (e._events[t] = [n, e._events[t]]);
}
var Cn = { Stream: Mt, prependListener: Sn },
  Wi = { exports: {} };
(function (e) {
  const { SymbolDispose: t } = z,
    { AbortError: n, codes: r } = ue,
    { isNodeStream: i, isWebStream: s, kControllerErrorFunction: l } = Te,
    c = Ce,
    { ERR_INVALID_ARG_TYPE: h } = r;
  let p;
  const f = (S, g) => {
    if (typeof S != "object" || !("aborted" in S))
      throw new h(g, "AbortSignal", S);
  };
  (e.exports.addAbortSignal = function (g, b) {
    if ((f(g, "signal"), !i(b) && !s(b)))
      throw new h("stream", ["ReadableStream", "WritableStream", "Stream"], b);
    return e.exports.addAbortSignalNoValidate(g, b);
  }),
    (e.exports.addAbortSignalNoValidate = function (S, g) {
      if (typeof S != "object" || !("aborted" in S)) return g;
      const b = i(g)
        ? () => {
            g.destroy(new n(void 0, { cause: S.reason }));
          }
        : () => {
            g[l](new n(void 0, { cause: S.reason }));
          };
      if (S.aborted) b();
      else {
        p = p || se.addAbortListener;
        const A = p(S, b);
        c(g, A[t]);
      }
      return g;
    });
})(Wi);
var Nt = Wi.exports;
const {
    StringPrototypeSlice: cr,
    SymbolIterator: ga,
    TypedArrayPrototypeSet: gt,
    Uint8Array: ya,
  } = z,
  { Buffer: Yt } = Be,
  { inspect: _a } = se;
var wa = class {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  push(t) {
    const n = { data: t, next: null };
    this.length > 0 ? (this.tail.next = n) : (this.head = n),
      (this.tail = n),
      ++this.length;
  }
  unshift(t) {
    const n = { data: t, next: this.head };
    this.length === 0 && (this.tail = n), (this.head = n), ++this.length;
  }
  shift() {
    if (this.length === 0) return;
    const t = this.head.data;
    return (
      this.length === 1
        ? (this.head = this.tail = null)
        : (this.head = this.head.next),
      --this.length,
      t
    );
  }
  clear() {
    (this.head = this.tail = null), (this.length = 0);
  }
  join(t) {
    if (this.length === 0) return "";
    let n = this.head,
      r = "" + n.data;
    for (; (n = n.next) !== null; ) r += t + n.data;
    return r;
  }
  concat(t) {
    if (this.length === 0) return Yt.alloc(0);
    const n = Yt.allocUnsafe(t >>> 0);
    let r = this.head,
      i = 0;
    for (; r; ) gt(n, r.data, i), (i += r.data.length), (r = r.next);
    return n;
  }
  consume(t, n) {
    const r = this.head.data;
    if (t < r.length) {
      const i = r.slice(0, t);
      return (this.head.data = r.slice(t)), i;
    }
    return t === r.length
      ? this.shift()
      : n
      ? this._getString(t)
      : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[ga]() {
    for (let t = this.head; t; t = t.next) yield t.data;
  }
  _getString(t) {
    let n = "",
      r = this.head,
      i = 0;
    do {
      const s = r.data;
      if (t > s.length) (n += s), (t -= s.length);
      else {
        t === s.length
          ? ((n += s),
            ++i,
            r.next ? (this.head = r.next) : (this.head = this.tail = null))
          : ((n += cr(s, 0, t)), (this.head = r), (r.data = cr(s, t)));
        break;
      }
      ++i;
    } while ((r = r.next) !== null);
    return (this.length -= i), n;
  }
  _getBuffer(t) {
    const n = Yt.allocUnsafe(t),
      r = t;
    let i = this.head,
      s = 0;
    do {
      const l = i.data;
      if (t > l.length) gt(n, l, r - t), (t -= l.length);
      else {
        t === l.length
          ? (gt(n, l, r - t),
            ++s,
            i.next ? (this.head = i.next) : (this.head = this.tail = null))
          : (gt(n, new ya(l.buffer, l.byteOffset, t), r - t),
            (this.head = i),
            (i.data = l.slice(t)));
        break;
      }
      ++s;
    } while ((i = i.next) !== null);
    return (this.length -= s), n;
  }
  [Symbol.for("nodejs.util.inspect.custom")](t, n) {
    return _a(this, { ...n, depth: 0, customInspect: !1 });
  }
};
const { MathFloor: ma, NumberIsInteger: Sa } = z,
  { validateInteger: Aa } = ut,
  { ERR_INVALID_ARG_VALUE: Ea } = ue.codes;
let $i = 16 * 1024,
  xi = 16;
function Ra(e, t, n) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null;
}
function Bi(e) {
  return e ? xi : $i;
}
function Ta(e, t) {
  Aa(t, "value", 0), e ? (xi = t) : ($i = t);
}
function Ia(e, t, n, r) {
  const i = Ra(t, r, n);
  if (i != null) {
    if (!Sa(i) || i < 0) {
      const s = r ? `options.${n}` : "options.highWaterMark";
      throw new Ea(s, i);
    }
    return ma(i);
  }
  return Bi(e.objectMode);
}
var Lt = {
  getHighWaterMark: Ia,
  getDefaultHighWaterMark: Bi,
  setDefaultHighWaterMark: Ta,
};
const hr = je(),
  { PromisePrototypeThen: Da, SymbolAsyncIterator: pr, SymbolIterator: br } = z,
  { Buffer: va } = Be,
  { ERR_INVALID_ARG_TYPE: Ca, ERR_STREAM_NULL_VALUES: Oa } = ue.codes;
function Pa(e, t, n) {
  let r;
  if (typeof t == "string" || t instanceof va)
    return new e({
      objectMode: !0,
      ...n,
      read() {
        this.push(t), this.push(null);
      },
    });
  let i;
  if (t && t[pr]) (i = !0), (r = t[pr]());
  else if (t && t[br]) (i = !1), (r = t[br]());
  else throw new Ca("iterable", ["Iterable"], t);
  const s = new e({ objectMode: !0, highWaterMark: 1, ...n });
  let l = !1;
  (s._read = function () {
    l || ((l = !0), h());
  }),
    (s._destroy = function (p, f) {
      Da(
        c(p),
        () => hr.nextTick(f, p),
        (S) => hr.nextTick(f, S || p)
      );
    });
  async function c(p) {
    const f = p != null,
      S = typeof r.throw == "function";
    if (f && S) {
      const { value: g, done: b } = await r.throw(p);
      if ((await g, b)) return;
    }
    if (typeof r.return == "function") {
      const { value: g } = await r.return();
      await g;
    }
  }
  async function h() {
    for (;;) {
      try {
        const { value: p, done: f } = i ? await r.next() : r.next();
        if (f) s.push(null);
        else {
          const S = p && typeof p.then == "function" ? await p : p;
          if (S === null) throw ((l = !1), new Oa());
          if (s.push(S)) continue;
          l = !1;
        }
      } catch (p) {
        s.destroy(p);
      }
      break;
    }
  }
  return s;
}
var ji = Pa,
  Xt,
  gr;
function kt() {
  if (gr) return Xt;
  gr = 1;
  const e = je(),
    {
      ArrayPrototypeIndexOf: t,
      NumberIsInteger: n,
      NumberIsNaN: r,
      NumberParseInt: i,
      ObjectDefineProperties: s,
      ObjectKeys: l,
      ObjectSetPrototypeOf: c,
      Promise: h,
      SafeSet: p,
      SymbolAsyncDispose: f,
      SymbolAsyncIterator: S,
      Symbol: g,
    } = z;
  (Xt = N), (N.ReadableState = me);
  const { EventEmitter: b } = Qe,
    { Stream: A, prependListener: y } = Cn,
    { Buffer: E } = Be,
    { addAbortSignal: O } = Nt,
    P = Ce;
  let w = se.debuglog("stream", (o) => {
    w = o;
  });
  const x = wa,
    L = tt,
    { getHighWaterMark: q, getDefaultHighWaterMark: ae } = Lt,
    {
      aggregateTwoErrors: j,
      codes: {
        ERR_INVALID_ARG_TYPE: Z,
        ERR_METHOD_NOT_IMPLEMENTED: le,
        ERR_OUT_OF_RANGE: de,
        ERR_STREAM_PUSH_AFTER_EOF: W,
        ERR_STREAM_UNSHIFT_AFTER_END_EVENT: m,
      },
      AbortError: H,
    } = ue,
    { validateObject: k } = ut,
    U = g("kPaused"),
    { StringDecoder: J } = yo,
    Q = ji;
  c(N.prototype, A.prototype), c(N, A);
  const Y = () => {},
    { errorOrDestroy: ee } = L,
    F = 1,
    we = 2,
    M = 4,
    te = 8,
    he = 16,
    Ke = 32,
    Ge = 64,
    qe = 128,
    nt = 256,
    $t = 512,
    rt = 1024,
    Ye = 2048,
    d = 4096,
    u = 8192,
    _ = 16384,
    v = 32768,
    C = 65536,
    K = 1 << 17,
    G = 1 << 18;
  function V(o) {
    return {
      enumerable: !1,
      get() {
        return (this.state & o) !== 0;
      },
      set(a) {
        a ? (this.state |= o) : (this.state &= ~o);
      },
    };
  }
  s(me.prototype, {
    objectMode: V(F),
    ended: V(we),
    endEmitted: V(M),
    reading: V(te),
    constructed: V(he),
    sync: V(Ke),
    needReadable: V(Ge),
    emittedReadable: V(qe),
    readableListening: V(nt),
    resumeScheduled: V($t),
    errorEmitted: V(rt),
    emitClose: V(Ye),
    autoDestroy: V(d),
    destroyed: V(u),
    closed: V(_),
    closeEmitted: V(v),
    multiAwaitDrain: V(C),
    readingMore: V(K),
    dataEmitted: V(G),
  });
  function me(o, a, R) {
    typeof R != "boolean" && (R = a instanceof Ee()),
      (this.state = Ye | d | he | Ke),
      o && o.objectMode && (this.state |= F),
      R && o && o.readableObjectMode && (this.state |= F),
      (this.highWaterMark = o
        ? q(this, o, "readableHighWaterMark", R)
        : ae(!1)),
      (this.buffer = new x()),
      (this.length = 0),
      (this.pipes = []),
      (this.flowing = null),
      (this[U] = null),
      o && o.emitClose === !1 && (this.state &= ~Ye),
      o && o.autoDestroy === !1 && (this.state &= ~d),
      (this.errored = null),
      (this.defaultEncoding = (o && o.defaultEncoding) || "utf8"),
      (this.awaitDrainWriters = null),
      (this.decoder = null),
      (this.encoding = null),
      o &&
        o.encoding &&
        ((this.decoder = new J(o.encoding)), (this.encoding = o.encoding));
  }
  function N(o) {
    if (!(this instanceof N)) return new N(o);
    const a = this instanceof Ee();
    (this._readableState = new me(o, this, a)),
      o &&
        (typeof o.read == "function" && (this._read = o.read),
        typeof o.destroy == "function" && (this._destroy = o.destroy),
        typeof o.construct == "function" && (this._construct = o.construct),
        o.signal && !a && O(o.signal, this)),
      A.call(this, o),
      L.construct(this, () => {
        this._readableState.needReadable && bt(this, this._readableState);
      });
  }
  (N.prototype.destroy = L.destroy),
    (N.prototype._undestroy = L.undestroy),
    (N.prototype._destroy = function (o, a) {
      a(o);
    }),
    (N.prototype[b.captureRejectionSymbol] = function (o) {
      this.destroy(o);
    }),
    (N.prototype[f] = function () {
      let o;
      return (
        this.destroyed ||
          ((o = this.readableEnded ? null : new H()), this.destroy(o)),
        new h((a, R) => P(this, (T) => (T && T !== o ? R(T) : a(null))))
      );
    }),
    (N.prototype.push = function (o, a) {
      return Ie(this, o, a, !1);
    }),
    (N.prototype.unshift = function (o, a) {
      return Ie(this, o, a, !0);
    });
  function Ie(o, a, R, T) {
    w("readableAddChunk", a);
    const D = o._readableState;
    let re;
    if (
      (D.state & F ||
        (typeof a == "string"
          ? ((R = R || D.defaultEncoding),
            D.encoding !== R &&
              (T && D.encoding
                ? (a = E.from(a, R).toString(D.encoding))
                : ((a = E.from(a, R)), (R = ""))))
          : a instanceof E
          ? (R = "")
          : A._isUint8Array(a)
          ? ((a = A._uint8ArrayToBuffer(a)), (R = ""))
          : a != null &&
            (re = new Z("chunk", ["string", "Buffer", "Uint8Array"], a))),
      re)
    )
      ee(o, re);
    else if (a === null) (D.state &= ~te), io(o, D);
    else if (D.state & F || (a && a.length > 0))
      if (T)
        if (D.state & M) ee(o, new m());
        else {
          if (D.destroyed || D.errored) return !1;
          xt(o, D, a, !0);
        }
      else if (D.ended) ee(o, new W());
      else {
        if (D.destroyed || D.errored) return !1;
        (D.state &= ~te),
          D.decoder && !R
            ? ((a = D.decoder.write(a)),
              D.objectMode || a.length !== 0 ? xt(o, D, a, !1) : bt(o, D))
            : xt(o, D, a, !1);
      }
    else T || ((D.state &= ~te), bt(o, D));
    return !D.ended && (D.length < D.highWaterMark || D.length === 0);
  }
  function xt(o, a, R, T) {
    a.flowing && a.length === 0 && !a.sync && o.listenerCount("data") > 0
      ? (a.state & C
          ? a.awaitDrainWriters.clear()
          : (a.awaitDrainWriters = null),
        (a.dataEmitted = !0),
        o.emit("data", R))
      : ((a.length += a.objectMode ? 1 : R.length),
        T ? a.buffer.unshift(R) : a.buffer.push(R),
        a.state & Ge && pt(o)),
      bt(o, a);
  }
  (N.prototype.isPaused = function () {
    const o = this._readableState;
    return o[U] === !0 || o.flowing === !1;
  }),
    (N.prototype.setEncoding = function (o) {
      const a = new J(o);
      (this._readableState.decoder = a),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      const R = this._readableState.buffer;
      let T = "";
      for (const D of R) T += a.write(D);
      return (
        R.clear(),
        T !== "" && R.push(T),
        (this._readableState.length = T.length),
        this
      );
    });
  const no = 1073741824;
  function ro(o) {
    if (o > no) throw new de("size", "<= 1GiB", o);
    return (
      o--,
      (o |= o >>> 1),
      (o |= o >>> 2),
      (o |= o >>> 4),
      (o |= o >>> 8),
      (o |= o >>> 16),
      o++,
      o
    );
  }
  function kn(o, a) {
    return o <= 0 || (a.length === 0 && a.ended)
      ? 0
      : a.state & F
      ? 1
      : r(o)
      ? a.flowing && a.length
        ? a.buffer.first().length
        : a.length
      : o <= a.length
      ? o
      : a.ended
      ? a.length
      : 0;
  }
  N.prototype.read = function (o) {
    w("read", o), o === void 0 ? (o = NaN) : n(o) || (o = i(o, 10));
    const a = this._readableState,
      R = o;
    if (
      (o > a.highWaterMark && (a.highWaterMark = ro(o)),
      o !== 0 && (a.state &= ~qe),
      o === 0 &&
        a.needReadable &&
        ((a.highWaterMark !== 0 ? a.length >= a.highWaterMark : a.length > 0) ||
          a.ended))
    )
      return (
        w("read: emitReadable", a.length, a.ended),
        a.length === 0 && a.ended ? Bt(this) : pt(this),
        null
      );
    if (((o = kn(o, a)), o === 0 && a.ended))
      return a.length === 0 && Bt(this), null;
    let T = (a.state & Ge) !== 0;
    if (
      (w("need readable", T),
      (a.length === 0 || a.length - o < a.highWaterMark) &&
        ((T = !0), w("length less than watermark", T)),
      a.ended || a.reading || a.destroyed || a.errored || !a.constructed)
    )
      (T = !1), w("reading, ended or constructing", T);
    else if (T) {
      w("do read"), (a.state |= te | Ke), a.length === 0 && (a.state |= Ge);
      try {
        this._read(a.highWaterMark);
      } catch (re) {
        ee(this, re);
      }
      (a.state &= ~Ke), a.reading || (o = kn(R, a));
    }
    let D;
    return (
      o > 0 ? (D = Bn(o, a)) : (D = null),
      D === null
        ? ((a.needReadable = a.length <= a.highWaterMark), (o = 0))
        : ((a.length -= o),
          a.multiAwaitDrain
            ? a.awaitDrainWriters.clear()
            : (a.awaitDrainWriters = null)),
      a.length === 0 &&
        (a.ended || (a.needReadable = !0), R !== o && a.ended && Bt(this)),
      D !== null &&
        !a.errorEmitted &&
        !a.closeEmitted &&
        ((a.dataEmitted = !0), this.emit("data", D)),
      D
    );
  };
  function io(o, a) {
    if ((w("onEofChunk"), !a.ended)) {
      if (a.decoder) {
        const R = a.decoder.end();
        R &&
          R.length &&
          (a.buffer.push(R), (a.length += a.objectMode ? 1 : R.length));
      }
      (a.ended = !0),
        a.sync
          ? pt(o)
          : ((a.needReadable = !1), (a.emittedReadable = !0), Un(o));
    }
  }
  function pt(o) {
    const a = o._readableState;
    w("emitReadable", a.needReadable, a.emittedReadable),
      (a.needReadable = !1),
      a.emittedReadable ||
        (w("emitReadable", a.flowing),
        (a.emittedReadable = !0),
        e.nextTick(Un, o));
  }
  function Un(o) {
    const a = o._readableState;
    w("emitReadable_", a.destroyed, a.length, a.ended),
      !a.destroyed &&
        !a.errored &&
        (a.length || a.ended) &&
        (o.emit("readable"), (a.emittedReadable = !1)),
      (a.needReadable = !a.flowing && !a.ended && a.length <= a.highWaterMark),
      $n(o);
  }
  function bt(o, a) {
    !a.readingMore &&
      a.constructed &&
      ((a.readingMore = !0), e.nextTick(oo, o, a));
  }
  function oo(o, a) {
    for (
      ;
      !a.reading &&
      !a.ended &&
      (a.length < a.highWaterMark || (a.flowing && a.length === 0));

    ) {
      const R = a.length;
      if ((w("maybeReadMore read 0"), o.read(0), R === a.length)) break;
    }
    a.readingMore = !1;
  }
  (N.prototype._read = function (o) {
    throw new le("_read()");
  }),
    (N.prototype.pipe = function (o, a) {
      const R = this,
        T = this._readableState;
      T.pipes.length === 1 &&
        (T.multiAwaitDrain ||
          ((T.multiAwaitDrain = !0),
          (T.awaitDrainWriters = new p(
            T.awaitDrainWriters ? [T.awaitDrainWriters] : []
          )))),
        T.pipes.push(o),
        w("pipe count=%d opts=%j", T.pipes.length, a);
      const re =
        (!a || a.end !== !1) && o !== e.stdout && o !== e.stderr ? Hn : it;
      T.endEmitted ? e.nextTick(re) : R.once("end", re), o.on("unpipe", fe);
      function fe(Pe, Se) {
        w("onunpipe"),
          Pe === R &&
            Se &&
            Se.hasUnpiped === !1 &&
            ((Se.hasUnpiped = !0), po());
      }
      function Hn() {
        w("onend"), o.end();
      }
      let Oe,
        Fn = !1;
      function po() {
        w("cleanup"),
          o.removeListener("close", Ft),
          o.removeListener("finish", Vt),
          Oe && o.removeListener("drain", Oe),
          o.removeListener("error", Ht),
          o.removeListener("unpipe", fe),
          R.removeListener("end", Hn),
          R.removeListener("end", it),
          R.removeListener("data", Kn),
          (Fn = !0),
          Oe &&
            T.awaitDrainWriters &&
            (!o._writableState || o._writableState.needDrain) &&
            Oe();
      }
      function Vn() {
        Fn ||
          (T.pipes.length === 1 && T.pipes[0] === o
            ? (w("false write response, pause", 0),
              (T.awaitDrainWriters = o),
              (T.multiAwaitDrain = !1))
            : T.pipes.length > 1 &&
              T.pipes.includes(o) &&
              (w("false write response, pause", T.awaitDrainWriters.size),
              T.awaitDrainWriters.add(o)),
          R.pause()),
          Oe || ((Oe = so(R, o)), o.on("drain", Oe));
      }
      R.on("data", Kn);
      function Kn(Pe) {
        w("ondata");
        const Se = o.write(Pe);
        w("dest.write", Se), Se === !1 && Vn();
      }
      function Ht(Pe) {
        if (
          (w("onerror", Pe),
          it(),
          o.removeListener("error", Ht),
          o.listenerCount("error") === 0)
        ) {
          const Se = o._writableState || o._readableState;
          Se && !Se.errorEmitted ? ee(o, Pe) : o.emit("error", Pe);
        }
      }
      y(o, "error", Ht);
      function Ft() {
        o.removeListener("finish", Vt), it();
      }
      o.once("close", Ft);
      function Vt() {
        w("onfinish"), o.removeListener("close", Ft), it();
      }
      o.once("finish", Vt);
      function it() {
        w("unpipe"), R.unpipe(o);
      }
      return (
        o.emit("pipe", R),
        o.writableNeedDrain === !0
          ? Vn()
          : T.flowing || (w("pipe resume"), R.resume()),
        o
      );
    });
  function so(o, a) {
    return function () {
      const T = o._readableState;
      T.awaitDrainWriters === a
        ? (w("pipeOnDrain", 1), (T.awaitDrainWriters = null))
        : T.multiAwaitDrain &&
          (w("pipeOnDrain", T.awaitDrainWriters.size),
          T.awaitDrainWriters.delete(a)),
        (!T.awaitDrainWriters || T.awaitDrainWriters.size === 0) &&
          o.listenerCount("data") &&
          o.resume();
    };
  }
  (N.prototype.unpipe = function (o) {
    const a = this._readableState,
      R = { hasUnpiped: !1 };
    if (a.pipes.length === 0) return this;
    if (!o) {
      const D = a.pipes;
      (a.pipes = []), this.pause();
      for (let re = 0; re < D.length; re++)
        D[re].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    const T = t(a.pipes, o);
    return T === -1
      ? this
      : (a.pipes.splice(T, 1),
        a.pipes.length === 0 && this.pause(),
        o.emit("unpipe", this, R),
        this);
  }),
    (N.prototype.on = function (o, a) {
      const R = A.prototype.on.call(this, o, a),
        T = this._readableState;
      return (
        o === "data"
          ? ((T.readableListening = this.listenerCount("readable") > 0),
            T.flowing !== !1 && this.resume())
          : o === "readable" &&
            !T.endEmitted &&
            !T.readableListening &&
            ((T.readableListening = T.needReadable = !0),
            (T.flowing = !1),
            (T.emittedReadable = !1),
            w("on readable", T.length, T.reading),
            T.length ? pt(this) : T.reading || e.nextTick(ao, this)),
        R
      );
    }),
    (N.prototype.addListener = N.prototype.on),
    (N.prototype.removeListener = function (o, a) {
      const R = A.prototype.removeListener.call(this, o, a);
      return o === "readable" && e.nextTick(Wn, this), R;
    }),
    (N.prototype.off = N.prototype.removeListener),
    (N.prototype.removeAllListeners = function (o) {
      const a = A.prototype.removeAllListeners.apply(this, arguments);
      return (o === "readable" || o === void 0) && e.nextTick(Wn, this), a;
    });
  function Wn(o) {
    const a = o._readableState;
    (a.readableListening = o.listenerCount("readable") > 0),
      a.resumeScheduled && a[U] === !1
        ? (a.flowing = !0)
        : o.listenerCount("data") > 0
        ? o.resume()
        : a.readableListening || (a.flowing = null);
  }
  function ao(o) {
    w("readable nexttick read 0"), o.read(0);
  }
  N.prototype.resume = function () {
    const o = this._readableState;
    return (
      o.flowing ||
        (w("resume"), (o.flowing = !o.readableListening), lo(this, o)),
      (o[U] = !1),
      this
    );
  };
  function lo(o, a) {
    a.resumeScheduled || ((a.resumeScheduled = !0), e.nextTick(uo, o, a));
  }
  function uo(o, a) {
    w("resume", a.reading),
      a.reading || o.read(0),
      (a.resumeScheduled = !1),
      o.emit("resume"),
      $n(o),
      a.flowing && !a.reading && o.read(0);
  }
  N.prototype.pause = function () {
    return (
      w("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (w("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState[U] = !0),
      this
    );
  };
  function $n(o) {
    const a = o._readableState;
    for (w("flow", a.flowing); a.flowing && o.read() !== null; );
  }
  (N.prototype.wrap = function (o) {
    let a = !1;
    o.on("data", (T) => {
      !this.push(T) && o.pause && ((a = !0), o.pause());
    }),
      o.on("end", () => {
        this.push(null);
      }),
      o.on("error", (T) => {
        ee(this, T);
      }),
      o.on("close", () => {
        this.destroy();
      }),
      o.on("destroy", () => {
        this.destroy();
      }),
      (this._read = () => {
        a && o.resume && ((a = !1), o.resume());
      });
    const R = l(o);
    for (let T = 1; T < R.length; T++) {
      const D = R[T];
      this[D] === void 0 &&
        typeof o[D] == "function" &&
        (this[D] = o[D].bind(o));
    }
    return this;
  }),
    (N.prototype[S] = function () {
      return xn(this);
    }),
    (N.prototype.iterator = function (o) {
      return o !== void 0 && k(o, "options"), xn(this, o);
    });
  function xn(o, a) {
    typeof o.read != "function" && (o = N.wrap(o, { objectMode: !0 }));
    const R = fo(o, a);
    return (R.stream = o), R;
  }
  async function* fo(o, a) {
    let R = Y;
    function T(fe) {
      this === o ? (R(), (R = Y)) : (R = fe);
    }
    o.on("readable", T);
    let D;
    const re = P(o, { writable: !1 }, (fe) => {
      (D = fe ? j(D, fe) : null), R(), (R = Y);
    });
    try {
      for (;;) {
        const fe = o.destroyed ? null : o.read();
        if (fe !== null) yield fe;
        else {
          if (D) throw D;
          if (D === null) return;
          await new h(T);
        }
      }
    } catch (fe) {
      throw ((D = j(D, fe)), D);
    } finally {
      (D || (a == null ? void 0 : a.destroyOnReturn) !== !1) &&
      (D === void 0 || o._readableState.autoDestroy)
        ? L.destroyer(o, null)
        : (o.off("readable", T), re());
    }
  }
  s(N.prototype, {
    readable: {
      __proto__: null,
      get() {
        const o = this._readableState;
        return (
          !!o &&
          o.readable !== !1 &&
          !o.destroyed &&
          !o.errorEmitted &&
          !o.endEmitted
        );
      },
      set(o) {
        this._readableState && (this._readableState.readable = !!o);
      },
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return this._readableState.dataEmitted;
      },
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return !!(
          this._readableState.readable !== !1 &&
          (this._readableState.destroyed || this._readableState.errored) &&
          !this._readableState.endEmitted
        );
      },
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (o) {
        this._readableState && (this._readableState.flowing = o);
      },
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      },
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      },
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      },
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      },
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      },
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(o) {
        this._readableState && (this._readableState.destroyed = o);
      },
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      },
    },
  }),
    s(me.prototype, {
      pipesCount: {
        __proto__: null,
        get() {
          return this.pipes.length;
        },
      },
      paused: {
        __proto__: null,
        get() {
          return this[U] !== !1;
        },
        set(o) {
          this[U] = !!o;
        },
      },
    }),
    (N._fromList = Bn);
  function Bn(o, a) {
    if (a.length === 0) return null;
    let R;
    return (
      a.objectMode
        ? (R = a.buffer.shift())
        : !o || o >= a.length
        ? (a.decoder
            ? (R = a.buffer.join(""))
            : a.buffer.length === 1
            ? (R = a.buffer.first())
            : (R = a.buffer.concat(a.length)),
          a.buffer.clear())
        : (R = a.buffer.consume(o, a.decoder)),
      R
    );
  }
  function Bt(o) {
    const a = o._readableState;
    w("endReadable", a.endEmitted),
      a.endEmitted || ((a.ended = !0), e.nextTick(co, a, o));
  }
  function co(o, a) {
    if (
      (w("endReadableNT", o.endEmitted, o.length),
      !o.errored && !o.closeEmitted && !o.endEmitted && o.length === 0)
    ) {
      if (
        ((o.endEmitted = !0),
        a.emit("end"),
        a.writable && a.allowHalfOpen === !1)
      )
        e.nextTick(ho, a);
      else if (o.autoDestroy) {
        const R = a._writableState;
        (!R || (R.autoDestroy && (R.finished || R.writable === !1))) &&
          a.destroy();
      }
    }
  }
  function ho(o) {
    o.writable && !o.writableEnded && !o.destroyed && o.end();
  }
  N.from = function (o, a) {
    return Q(N, o, a);
  };
  let jt;
  function jn() {
    return jt === void 0 && (jt = {}), jt;
  }
  return (
    (N.fromWeb = function (o, a) {
      return jn().newStreamReadableFromReadableStream(o, a);
    }),
    (N.toWeb = function (o, a) {
      return jn().newReadableStreamFromStreamReadable(o, a);
    }),
    (N.wrap = function (o, a) {
      var R, T;
      return new N({
        objectMode:
          (R =
            (T = o.readableObjectMode) !== null && T !== void 0
              ? T
              : o.objectMode) !== null && R !== void 0
            ? R
            : !0,
        ...a,
        destroy(D, re) {
          L.destroyer(o, D), re(D);
        },
      }).wrap(o);
    }),
    Xt
  );
}
var zt, yr;
function On() {
  if (yr) return zt;
  yr = 1;
  const e = je(),
    {
      ArrayPrototypeSlice: t,
      Error: n,
      FunctionPrototypeSymbolHasInstance: r,
      ObjectDefineProperty: i,
      ObjectDefineProperties: s,
      ObjectSetPrototypeOf: l,
      StringPrototypeToLowerCase: c,
      Symbol: h,
      SymbolHasInstance: p,
    } = z;
  (zt = k), (k.WritableState = m);
  const { EventEmitter: f } = Qe,
    S = Cn.Stream,
    { Buffer: g } = Be,
    b = tt,
    { addAbortSignal: A } = Nt,
    { getHighWaterMark: y, getDefaultHighWaterMark: E } = Lt,
    {
      ERR_INVALID_ARG_TYPE: O,
      ERR_METHOD_NOT_IMPLEMENTED: P,
      ERR_MULTIPLE_CALLBACK: w,
      ERR_STREAM_CANNOT_PIPE: x,
      ERR_STREAM_DESTROYED: L,
      ERR_STREAM_ALREADY_FINISHED: q,
      ERR_STREAM_NULL_VALUES: ae,
      ERR_STREAM_WRITE_AFTER_END: j,
      ERR_UNKNOWN_ENCODING: Z,
    } = ue.codes,
    { errorOrDestroy: le } = b;
  l(k.prototype, S.prototype), l(k, S);
  function de() {}
  const W = h("kOnFinished");
  function m(d, u, _) {
    typeof _ != "boolean" && (_ = u instanceof Ee()),
      (this.objectMode = !!(d && d.objectMode)),
      _ && (this.objectMode = this.objectMode || !!(d && d.writableObjectMode)),
      (this.highWaterMark = d ? y(this, d, "writableHighWaterMark", _) : E(!1)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    const v = !!(d && d.decodeStrings === !1);
    (this.decodeStrings = !v),
      (this.defaultEncoding = (d && d.defaultEncoding) || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = ee.bind(void 0, u)),
      (this.writecb = null),
      (this.writelen = 0),
      (this.afterWriteTickInfo = null),
      H(this),
      (this.pendingcb = 0),
      (this.constructed = !0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = !d || d.emitClose !== !1),
      (this.autoDestroy = !d || d.autoDestroy !== !1),
      (this.errored = null),
      (this.closed = !1),
      (this.closeEmitted = !1),
      (this[W] = []);
  }
  function H(d) {
    (d.buffered = []),
      (d.bufferedIndex = 0),
      (d.allBuffers = !0),
      (d.allNoop = !0);
  }
  (m.prototype.getBuffer = function () {
    return t(this.buffered, this.bufferedIndex);
  }),
    i(m.prototype, "bufferedRequestCount", {
      __proto__: null,
      get() {
        return this.buffered.length - this.bufferedIndex;
      },
    });
  function k(d) {
    const u = this instanceof Ee();
    if (!u && !r(k, this)) return new k(d);
    (this._writableState = new m(d, this, u)),
      d &&
        (typeof d.write == "function" && (this._write = d.write),
        typeof d.writev == "function" && (this._writev = d.writev),
        typeof d.destroy == "function" && (this._destroy = d.destroy),
        typeof d.final == "function" && (this._final = d.final),
        typeof d.construct == "function" && (this._construct = d.construct),
        d.signal && A(d.signal, this)),
      S.call(this, d),
      b.construct(this, () => {
        const _ = this._writableState;
        _.writing || te(this, _), qe(this, _);
      });
  }
  i(k, p, {
    __proto__: null,
    value: function (d) {
      return r(this, d)
        ? !0
        : this !== k
        ? !1
        : d && d._writableState instanceof m;
    },
  }),
    (k.prototype.pipe = function () {
      le(this, new x());
    });
  function U(d, u, _, v) {
    const C = d._writableState;
    if (typeof _ == "function") (v = _), (_ = C.defaultEncoding);
    else {
      if (!_) _ = C.defaultEncoding;
      else if (_ !== "buffer" && !g.isEncoding(_)) throw new Z(_);
      typeof v != "function" && (v = de);
    }
    if (u === null) throw new ae();
    if (!C.objectMode)
      if (typeof u == "string")
        C.decodeStrings !== !1 && ((u = g.from(u, _)), (_ = "buffer"));
      else if (u instanceof g) _ = "buffer";
      else if (S._isUint8Array(u))
        (u = S._uint8ArrayToBuffer(u)), (_ = "buffer");
      else throw new O("chunk", ["string", "Buffer", "Uint8Array"], u);
    let K;
    return (
      C.ending ? (K = new j()) : C.destroyed && (K = new L("write")),
      K
        ? (e.nextTick(v, K), le(d, K, !0), K)
        : (C.pendingcb++, J(d, C, u, _, v))
    );
  }
  (k.prototype.write = function (d, u, _) {
    return U(this, d, u, _) === !0;
  }),
    (k.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (k.prototype.uncork = function () {
      const d = this._writableState;
      d.corked && (d.corked--, d.writing || te(this, d));
    }),
    (k.prototype.setDefaultEncoding = function (u) {
      if ((typeof u == "string" && (u = c(u)), !g.isEncoding(u)))
        throw new Z(u);
      return (this._writableState.defaultEncoding = u), this;
    });
  function J(d, u, _, v, C) {
    const K = u.objectMode ? 1 : _.length;
    u.length += K;
    const G = u.length < u.highWaterMark;
    return (
      G || (u.needDrain = !0),
      u.writing || u.corked || u.errored || !u.constructed
        ? (u.buffered.push({ chunk: _, encoding: v, callback: C }),
          u.allBuffers && v !== "buffer" && (u.allBuffers = !1),
          u.allNoop && C !== de && (u.allNoop = !1))
        : ((u.writelen = K),
          (u.writecb = C),
          (u.writing = !0),
          (u.sync = !0),
          d._write(_, v, u.onwrite),
          (u.sync = !1)),
      G && !u.errored && !u.destroyed
    );
  }
  function Q(d, u, _, v, C, K, G) {
    (u.writelen = v),
      (u.writecb = G),
      (u.writing = !0),
      (u.sync = !0),
      u.destroyed
        ? u.onwrite(new L("write"))
        : _
        ? d._writev(C, u.onwrite)
        : d._write(C, K, u.onwrite),
      (u.sync = !1);
  }
  function Y(d, u, _, v) {
    --u.pendingcb, v(_), M(u), le(d, _);
  }
  function ee(d, u) {
    const _ = d._writableState,
      v = _.sync,
      C = _.writecb;
    if (typeof C != "function") {
      le(d, new w());
      return;
    }
    (_.writing = !1),
      (_.writecb = null),
      (_.length -= _.writelen),
      (_.writelen = 0),
      u
        ? (u.stack,
          _.errored || (_.errored = u),
          d._readableState &&
            !d._readableState.errored &&
            (d._readableState.errored = u),
          v ? e.nextTick(Y, d, _, u, C) : Y(d, _, u, C))
        : (_.buffered.length > _.bufferedIndex && te(d, _),
          v
            ? _.afterWriteTickInfo !== null && _.afterWriteTickInfo.cb === C
              ? _.afterWriteTickInfo.count++
              : ((_.afterWriteTickInfo = {
                  count: 1,
                  cb: C,
                  stream: d,
                  state: _,
                }),
                e.nextTick(F, _.afterWriteTickInfo))
            : we(d, _, 1, C));
  }
  function F({ stream: d, state: u, count: _, cb: v }) {
    return (u.afterWriteTickInfo = null), we(d, u, _, v);
  }
  function we(d, u, _, v) {
    for (
      !u.ending &&
      !d.destroyed &&
      u.length === 0 &&
      u.needDrain &&
      ((u.needDrain = !1), d.emit("drain"));
      _-- > 0;

    )
      u.pendingcb--, v();
    u.destroyed && M(u), qe(d, u);
  }
  function M(d) {
    if (d.writing) return;
    for (let C = d.bufferedIndex; C < d.buffered.length; ++C) {
      var u;
      const { chunk: K, callback: G } = d.buffered[C],
        V = d.objectMode ? 1 : K.length;
      (d.length -= V),
        G((u = d.errored) !== null && u !== void 0 ? u : new L("write"));
    }
    const _ = d[W].splice(0);
    for (let C = 0; C < _.length; C++) {
      var v;
      _[C]((v = d.errored) !== null && v !== void 0 ? v : new L("end"));
    }
    H(d);
  }
  function te(d, u) {
    if (u.corked || u.bufferProcessing || u.destroyed || !u.constructed) return;
    const { buffered: _, bufferedIndex: v, objectMode: C } = u,
      K = _.length - v;
    if (!K) return;
    let G = v;
    if (((u.bufferProcessing = !0), K > 1 && d._writev)) {
      u.pendingcb -= K - 1;
      const V = u.allNoop
          ? de
          : (N) => {
              for (let Ie = G; Ie < _.length; ++Ie) _[Ie].callback(N);
            },
        me = u.allNoop && G === 0 ? _ : t(_, G);
      (me.allBuffers = u.allBuffers), Q(d, u, !0, u.length, me, "", V), H(u);
    } else {
      do {
        const { chunk: V, encoding: me, callback: N } = _[G];
        _[G++] = null;
        const Ie = C ? 1 : V.length;
        Q(d, u, !1, Ie, V, me, N);
      } while (G < _.length && !u.writing);
      G === _.length
        ? H(u)
        : G > 256
        ? (_.splice(0, G), (u.bufferedIndex = 0))
        : (u.bufferedIndex = G);
    }
    u.bufferProcessing = !1;
  }
  (k.prototype._write = function (d, u, _) {
    if (this._writev) this._writev([{ chunk: d, encoding: u }], _);
    else throw new P("_write()");
  }),
    (k.prototype._writev = null),
    (k.prototype.end = function (d, u, _) {
      const v = this._writableState;
      typeof d == "function"
        ? ((_ = d), (d = null), (u = null))
        : typeof u == "function" && ((_ = u), (u = null));
      let C;
      if (d != null) {
        const K = U(this, d, u);
        K instanceof n && (C = K);
      }
      return (
        v.corked && ((v.corked = 1), this.uncork()),
        C ||
          (!v.errored && !v.ending
            ? ((v.ending = !0), qe(this, v, !0), (v.ended = !0))
            : v.finished
            ? (C = new q("end"))
            : v.destroyed && (C = new L("end"))),
        typeof _ == "function" &&
          (C || v.finished ? e.nextTick(_, C) : v[W].push(_)),
        this
      );
    });
  function he(d) {
    return (
      d.ending &&
      !d.destroyed &&
      d.constructed &&
      d.length === 0 &&
      !d.errored &&
      d.buffered.length === 0 &&
      !d.finished &&
      !d.writing &&
      !d.errorEmitted &&
      !d.closeEmitted
    );
  }
  function Ke(d, u) {
    let _ = !1;
    function v(C) {
      if (_) {
        le(d, C ?? w());
        return;
      }
      if (((_ = !0), u.pendingcb--, C)) {
        const K = u[W].splice(0);
        for (let G = 0; G < K.length; G++) K[G](C);
        le(d, C, u.sync);
      } else
        he(u) &&
          ((u.prefinished = !0),
          d.emit("prefinish"),
          u.pendingcb++,
          e.nextTick(nt, d, u));
    }
    (u.sync = !0), u.pendingcb++;
    try {
      d._final(v);
    } catch (C) {
      v(C);
    }
    u.sync = !1;
  }
  function Ge(d, u) {
    !u.prefinished &&
      !u.finalCalled &&
      (typeof d._final == "function" && !u.destroyed
        ? ((u.finalCalled = !0), Ke(d, u))
        : ((u.prefinished = !0), d.emit("prefinish")));
  }
  function qe(d, u, _) {
    he(u) &&
      (Ge(d, u),
      u.pendingcb === 0 &&
        (_
          ? (u.pendingcb++,
            e.nextTick(
              (v, C) => {
                he(C) ? nt(v, C) : C.pendingcb--;
              },
              d,
              u
            ))
          : he(u) && (u.pendingcb++, nt(d, u))));
  }
  function nt(d, u) {
    u.pendingcb--, (u.finished = !0);
    const _ = u[W].splice(0);
    for (let v = 0; v < _.length; v++) _[v]();
    if ((d.emit("finish"), u.autoDestroy)) {
      const v = d._readableState;
      (!v || (v.autoDestroy && (v.endEmitted || v.readable === !1))) &&
        d.destroy();
    }
  }
  s(k.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      },
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(d) {
        this._writableState && (this._writableState.destroyed = d);
      },
    },
    writable: {
      __proto__: null,
      get() {
        const d = this._writableState;
        return (
          !!d &&
          d.writable !== !1 &&
          !d.destroyed &&
          !d.errored &&
          !d.ending &&
          !d.ended
        );
      },
      set(d) {
        this._writableState && (this._writableState.writable = !!d);
      },
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      },
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      },
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      },
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      },
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const d = this._writableState;
        return d ? !d.destroyed && !d.ending && d.needDrain : !1;
      },
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      },
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      },
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      },
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      },
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function () {
        return !!(
          this._writableState.writable !== !1 &&
          (this._writableState.destroyed || this._writableState.errored) &&
          !this._writableState.finished
        );
      },
    },
  });
  const $t = b.destroy;
  (k.prototype.destroy = function (d, u) {
    const _ = this._writableState;
    return (
      !_.destroyed &&
        (_.bufferedIndex < _.buffered.length || _[W].length) &&
        e.nextTick(M, _),
      $t.call(this, d, u),
      this
    );
  }),
    (k.prototype._undestroy = b.undestroy),
    (k.prototype._destroy = function (d, u) {
      u(d);
    }),
    (k.prototype[f.captureRejectionSymbol] = function (d) {
      this.destroy(d);
    });
  let rt;
  function Ye() {
    return rt === void 0 && (rt = {}), rt;
  }
  return (
    (k.fromWeb = function (d, u) {
      return Ye().newStreamWritableFromWritableStream(d, u);
    }),
    (k.toWeb = function (d) {
      return Ye().newWritableStreamFromStreamWritable(d);
    }),
    zt
  );
}
var Zt, _r;
function Ma() {
  if (_r) return Zt;
  _r = 1;
  const e = je(),
    t = Be,
    {
      isReadable: n,
      isWritable: r,
      isIterable: i,
      isNodeStream: s,
      isReadableNodeStream: l,
      isWritableNodeStream: c,
      isDuplexNodeStream: h,
      isReadableStream: p,
      isWritableStream: f,
    } = Te,
    S = Ce,
    {
      AbortError: g,
      codes: { ERR_INVALID_ARG_TYPE: b, ERR_INVALID_RETURN_VALUE: A },
    } = ue,
    { destroyer: y } = tt,
    E = Ee(),
    O = kt(),
    P = On(),
    { createDeferredPromise: w } = se,
    x = ji,
    L = globalThis.Blob || t.Blob,
    q =
      typeof L < "u"
        ? function (m) {
            return m instanceof L;
          }
        : function (m) {
            return !1;
          },
    ae = globalThis.AbortController || dt().AbortController,
    { FunctionPrototypeCall: j } = z;
  class Z extends E {
    constructor(m) {
      super(m),
        (m == null ? void 0 : m.readable) === !1 &&
          ((this._readableState.readable = !1),
          (this._readableState.ended = !0),
          (this._readableState.endEmitted = !0)),
        (m == null ? void 0 : m.writable) === !1 &&
          ((this._writableState.writable = !1),
          (this._writableState.ending = !0),
          (this._writableState.ended = !0),
          (this._writableState.finished = !0));
    }
  }
  Zt = function W(m, H) {
    if (h(m)) return m;
    if (l(m)) return de({ readable: m });
    if (c(m)) return de({ writable: m });
    if (s(m)) return de({ writable: !1, readable: !1 });
    if (p(m)) return de({ readable: O.fromWeb(m) });
    if (f(m)) return de({ writable: P.fromWeb(m) });
    if (typeof m == "function") {
      const { value: U, write: J, final: Q, destroy: Y } = le(m);
      if (i(U))
        return x(Z, U, { objectMode: !0, write: J, final: Q, destroy: Y });
      const ee = U == null ? void 0 : U.then;
      if (typeof ee == "function") {
        let F;
        const we = j(
          ee,
          U,
          (M) => {
            if (M != null) throw new A("nully", "body", M);
          },
          (M) => {
            y(F, M);
          }
        );
        return (F = new Z({
          objectMode: !0,
          readable: !1,
          write: J,
          final(M) {
            Q(async () => {
              try {
                await we, e.nextTick(M, null);
              } catch (te) {
                e.nextTick(M, te);
              }
            });
          },
          destroy: Y,
        }));
      }
      throw new A("Iterable, AsyncIterable or AsyncFunction", H, U);
    }
    if (q(m)) return W(m.arrayBuffer());
    if (i(m)) return x(Z, m, { objectMode: !0, writable: !1 });
    if (
      p(m == null ? void 0 : m.readable) &&
      f(m == null ? void 0 : m.writable)
    )
      return Z.fromWeb(m);
    if (
      typeof (m == null ? void 0 : m.writable) == "object" ||
      typeof (m == null ? void 0 : m.readable) == "object"
    ) {
      const U =
          m != null && m.readable
            ? l(m == null ? void 0 : m.readable)
              ? m == null
                ? void 0
                : m.readable
              : W(m.readable)
            : void 0,
        J =
          m != null && m.writable
            ? c(m == null ? void 0 : m.writable)
              ? m == null
                ? void 0
                : m.writable
              : W(m.writable)
            : void 0;
      return de({ readable: U, writable: J });
    }
    const k = m == null ? void 0 : m.then;
    if (typeof k == "function") {
      let U;
      return (
        j(
          k,
          m,
          (J) => {
            J != null && U.push(J), U.push(null);
          },
          (J) => {
            y(U, J);
          }
        ),
        (U = new Z({ objectMode: !0, writable: !1, read() {} }))
      );
    }
    throw new b(
      H,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise",
      ],
      m
    );
  };
  function le(W) {
    let { promise: m, resolve: H } = w();
    const k = new ae(),
      U = k.signal;
    return {
      value: W(
        (async function* () {
          for (;;) {
            const Q = m;
            m = null;
            const { chunk: Y, done: ee, cb: F } = await Q;
            if ((e.nextTick(F), ee)) return;
            if (U.aborted) throw new g(void 0, { cause: U.reason });
            ({ promise: m, resolve: H } = w()), yield Y;
          }
        })(),
        { signal: U }
      ),
      write(Q, Y, ee) {
        const F = H;
        (H = null), F({ chunk: Q, done: !1, cb: ee });
      },
      final(Q) {
        const Y = H;
        (H = null), Y({ done: !0, cb: Q });
      },
      destroy(Q, Y) {
        k.abort(), Y(Q);
      },
    };
  }
  function de(W) {
    const m =
        W.readable && typeof W.readable.read != "function"
          ? O.wrap(W.readable)
          : W.readable,
      H = W.writable;
    let k = !!n(m),
      U = !!r(H),
      J,
      Q,
      Y,
      ee,
      F;
    function we(M) {
      const te = ee;
      (ee = null), te ? te(M) : M && F.destroy(M);
    }
    return (
      (F = new Z({
        readableObjectMode: !!(m != null && m.readableObjectMode),
        writableObjectMode: !!(H != null && H.writableObjectMode),
        readable: k,
        writable: U,
      })),
      U &&
        (S(H, (M) => {
          (U = !1), M && y(m, M), we(M);
        }),
        (F._write = function (M, te, he) {
          H.write(M, te) ? he() : (J = he);
        }),
        (F._final = function (M) {
          H.end(), (Q = M);
        }),
        H.on("drain", function () {
          if (J) {
            const M = J;
            (J = null), M();
          }
        }),
        H.on("finish", function () {
          if (Q) {
            const M = Q;
            (Q = null), M();
          }
        })),
      k &&
        (S(m, (M) => {
          (k = !1), M && y(m, M), we(M);
        }),
        m.on("readable", function () {
          if (Y) {
            const M = Y;
            (Y = null), M();
          }
        }),
        m.on("end", function () {
          F.push(null);
        }),
        (F._read = function () {
          for (;;) {
            const M = m.read();
            if (M === null) {
              Y = F._read;
              return;
            }
            if (!F.push(M)) return;
          }
        })),
      (F._destroy = function (M, te) {
        !M && ee !== null && (M = new g()),
          (Y = null),
          (J = null),
          (Q = null),
          ee === null ? te(M) : ((ee = te), y(H, M), y(m, M));
      }),
      F
    );
  }
  return Zt;
}
var Jt, wr;
function Ee() {
  if (wr) return Jt;
  wr = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: n,
    ObjectSetPrototypeOf: r,
  } = z;
  Jt = l;
  const i = kt(),
    s = On();
  r(l.prototype, i.prototype), r(l, i);
  {
    const f = n(s.prototype);
    for (let S = 0; S < f.length; S++) {
      const g = f[S];
      l.prototype[g] || (l.prototype[g] = s.prototype[g]);
    }
  }
  function l(f) {
    if (!(this instanceof l)) return new l(f);
    i.call(this, f),
      s.call(this, f),
      f
        ? ((this.allowHalfOpen = f.allowHalfOpen !== !1),
          f.readable === !1 &&
            ((this._readableState.readable = !1),
            (this._readableState.ended = !0),
            (this._readableState.endEmitted = !0)),
          f.writable === !1 &&
            ((this._writableState.writable = !1),
            (this._writableState.ending = !0),
            (this._writableState.ended = !0),
            (this._writableState.finished = !0)))
        : (this.allowHalfOpen = !0);
  }
  e(l.prototype, {
    writable: { __proto__: null, ...t(s.prototype, "writable") },
    writableHighWaterMark: {
      __proto__: null,
      ...t(s.prototype, "writableHighWaterMark"),
    },
    writableObjectMode: {
      __proto__: null,
      ...t(s.prototype, "writableObjectMode"),
    },
    writableBuffer: { __proto__: null, ...t(s.prototype, "writableBuffer") },
    writableLength: { __proto__: null, ...t(s.prototype, "writableLength") },
    writableFinished: {
      __proto__: null,
      ...t(s.prototype, "writableFinished"),
    },
    writableCorked: { __proto__: null, ...t(s.prototype, "writableCorked") },
    writableEnded: { __proto__: null, ...t(s.prototype, "writableEnded") },
    writableNeedDrain: {
      __proto__: null,
      ...t(s.prototype, "writableNeedDrain"),
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(f) {
        this._readableState &&
          this._writableState &&
          ((this._readableState.destroyed = f),
          (this._writableState.destroyed = f));
      },
    },
  });
  let c;
  function h() {
    return c === void 0 && (c = {}), c;
  }
  (l.fromWeb = function (f, S) {
    return h().newStreamDuplexFromReadableWritablePair(f, S);
  }),
    (l.toWeb = function (f) {
      return h().newReadableWritablePairFromDuplex(f);
    });
  let p;
  return (
    (l.from = function (f) {
      return p || (p = Ma()), p(f, "body");
    }),
    Jt
  );
}
const { ObjectSetPrototypeOf: Hi, Symbol: Na } = z;
var Fi = Re;
const { ERR_METHOD_NOT_IMPLEMENTED: La } = ue.codes,
  Pn = Ee(),
  { getHighWaterMark: ka } = Lt;
Hi(Re.prototype, Pn.prototype);
Hi(Re, Pn);
const lt = Na("kCallback");
function Re(e) {
  if (!(this instanceof Re)) return new Re(e);
  const t = e ? ka(this, e, "readableHighWaterMark", !0) : null;
  t === 0 &&
    (e = {
      ...e,
      highWaterMark: null,
      readableHighWaterMark: t,
      writableHighWaterMark: e.writableHighWaterMark || 0,
    }),
    Pn.call(this, e),
    (this._readableState.sync = !1),
    (this[lt] = null),
    e &&
      (typeof e.transform == "function" && (this._transform = e.transform),
      typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", Ua);
}
function An(e) {
  typeof this._flush == "function" && !this.destroyed
    ? this._flush((t, n) => {
        if (t) {
          e ? e(t) : this.destroy(t);
          return;
        }
        n != null && this.push(n), this.push(null), e && e();
      })
    : (this.push(null), e && e());
}
function Ua() {
  this._final !== An && An.call(this);
}
Re.prototype._final = An;
Re.prototype._transform = function (e, t, n) {
  throw new La("_transform()");
};
Re.prototype._write = function (e, t, n) {
  const r = this._readableState,
    i = this._writableState,
    s = r.length;
  this._transform(e, t, (l, c) => {
    if (l) {
      n(l);
      return;
    }
    c != null && this.push(c),
      i.ended || s === r.length || r.length < r.highWaterMark
        ? n()
        : (this[lt] = n);
  });
};
Re.prototype._read = function () {
  if (this[lt]) {
    const e = this[lt];
    (this[lt] = null), e();
  }
};
const { ObjectSetPrototypeOf: Vi } = z;
var Ki = Je;
const Mn = Fi;
Vi(Je.prototype, Mn.prototype);
Vi(Je, Mn);
function Je(e) {
  if (!(this instanceof Je)) return new Je(e);
  Mn.call(this, e);
}
Je.prototype._transform = function (e, t, n) {
  n(null, e);
};
const at = je(),
  {
    ArrayIsArray: Wa,
    Promise: $a,
    SymbolAsyncIterator: xa,
    SymbolDispose: Ba,
  } = z,
  Rt = Ce,
  { once: ja } = se,
  Ha = tt,
  mr = Ee(),
  {
    aggregateTwoErrors: Fa,
    codes: {
      ERR_INVALID_ARG_TYPE: En,
      ERR_INVALID_RETURN_VALUE: Qt,
      ERR_MISSING_ARGS: Va,
      ERR_STREAM_DESTROYED: Ka,
      ERR_STREAM_PREMATURE_CLOSE: Ga,
    },
    AbortError: qa,
  } = ue,
  { validateFunction: Ya, validateAbortSignal: Xa } = ut,
  {
    isIterable: ke,
    isReadable: en,
    isReadableNodeStream: At,
    isNodeStream: Sr,
    isTransformStream: ze,
    isWebStream: za,
    isReadableStream: tn,
    isReadableFinished: Za,
  } = Te,
  Ja = globalThis.AbortController || dt().AbortController;
let nn, rn, on;
function Ar(e, t, n) {
  let r = !1;
  e.on("close", () => {
    r = !0;
  });
  const i = Rt(e, { readable: t, writable: n }, (s) => {
    r = !s;
  });
  return {
    destroy: (s) => {
      r || ((r = !0), Ha.destroyer(e, s || new Ka("pipe")));
    },
    cleanup: i,
  };
}
function Qa(e) {
  return Ya(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function sn(e) {
  if (ke(e)) return e;
  if (At(e)) return el(e);
  throw new En("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* el(e) {
  rn || (rn = kt()), yield* rn.prototype[xa].call(e);
}
async function yt(e, t, n, { end: r }) {
  let i,
    s = null;
  const l = (p) => {
      if ((p && (i = p), s)) {
        const f = s;
        (s = null), f();
      }
    },
    c = () =>
      new $a((p, f) => {
        i
          ? f(i)
          : (s = () => {
              i ? f(i) : p();
            });
      });
  t.on("drain", l);
  const h = Rt(t, { readable: !1 }, l);
  try {
    t.writableNeedDrain && (await c());
    for await (const p of e) t.write(p) || (await c());
    r && (t.end(), await c()), n();
  } catch (p) {
    n(i !== p ? Fa(i, p) : p);
  } finally {
    h(), t.off("drain", l);
  }
}
async function an(e, t, n, { end: r }) {
  ze(t) && (t = t.writable);
  const i = t.getWriter();
  try {
    for await (const s of e) await i.ready, i.write(s).catch(() => {});
    await i.ready, r && (await i.close()), n();
  } catch (s) {
    try {
      await i.abort(s), n(s);
    } catch (l) {
      n(l);
    }
  }
}
function tl(...e) {
  return Gi(e, ja(Qa(e)));
}
function Gi(e, t, n) {
  if ((e.length === 1 && Wa(e[0]) && (e = e[0]), e.length < 2))
    throw new Va("streams");
  const r = new Ja(),
    i = r.signal,
    s = n == null ? void 0 : n.signal,
    l = [];
  Xa(s, "options.signal");
  function c() {
    A(new qa());
  }
  on = on || se.addAbortListener;
  let h;
  s && (h = on(s, c));
  let p, f;
  const S = [];
  let g = 0;
  function b(P) {
    A(P, --g === 0);
  }
  function A(P, w) {
    var x;
    if (
      (P && (!p || p.code === "ERR_STREAM_PREMATURE_CLOSE") && (p = P),
      !(!p && !w))
    ) {
      for (; S.length; ) S.shift()(p);
      (x = h) === null || x === void 0 || x[Ba](),
        r.abort(),
        w && (p || l.forEach((L) => L()), at.nextTick(t, p, f));
    }
  }
  let y;
  for (let P = 0; P < e.length; P++) {
    const w = e[P],
      x = P < e.length - 1,
      L = P > 0,
      q = x || (n == null ? void 0 : n.end) !== !1,
      ae = P === e.length - 1;
    if (Sr(w)) {
      let j = function (Z) {
        Z &&
          Z.name !== "AbortError" &&
          Z.code !== "ERR_STREAM_PREMATURE_CLOSE" &&
          b(Z);
      };
      if (q) {
        const { destroy: Z, cleanup: le } = Ar(w, x, L);
        S.push(Z), en(w) && ae && l.push(le);
      }
      w.on("error", j),
        en(w) &&
          ae &&
          l.push(() => {
            w.removeListener("error", j);
          });
    }
    if (P === 0)
      if (typeof w == "function") {
        if (((y = w({ signal: i })), !ke(y)))
          throw new Qt("Iterable, AsyncIterable or Stream", "source", y);
      } else ke(w) || At(w) || ze(w) ? (y = w) : (y = mr.from(w));
    else if (typeof w == "function") {
      if (ze(y)) {
        var E;
        y = sn((E = y) === null || E === void 0 ? void 0 : E.readable);
      } else y = sn(y);
      if (((y = w(y, { signal: i })), x)) {
        if (!ke(y, !0)) throw new Qt("AsyncIterable", `transform[${P - 1}]`, y);
      } else {
        var O;
        nn || (nn = Ki);
        const j = new nn({ objectMode: !0 }),
          Z = (O = y) === null || O === void 0 ? void 0 : O.then;
        if (typeof Z == "function")
          g++,
            Z.call(
              y,
              (W) => {
                (f = W), W != null && j.write(W), q && j.end(), at.nextTick(b);
              },
              (W) => {
                j.destroy(W), at.nextTick(b, W);
              }
            );
        else if (ke(y, !0)) g++, yt(y, j, b, { end: q });
        else if (tn(y) || ze(y)) {
          const W = y.readable || y;
          g++, yt(W, j, b, { end: q });
        } else throw new Qt("AsyncIterable or Promise", "destination", y);
        y = j;
        const { destroy: le, cleanup: de } = Ar(y, !1, !0);
        S.push(le), ae && l.push(de);
      }
    } else if (Sr(w)) {
      if (At(y)) {
        g += 2;
        const j = nl(y, w, b, { end: q });
        en(w) && ae && l.push(j);
      } else if (ze(y) || tn(y)) {
        const j = y.readable || y;
        g++, yt(j, w, b, { end: q });
      } else if (ke(y)) g++, yt(y, w, b, { end: q });
      else
        throw new En(
          "val",
          [
            "Readable",
            "Iterable",
            "AsyncIterable",
            "ReadableStream",
            "TransformStream",
          ],
          y
        );
      y = w;
    } else if (za(w)) {
      if (At(y)) g++, an(sn(y), w, b, { end: q });
      else if (tn(y) || ke(y)) g++, an(y, w, b, { end: q });
      else if (ze(y)) g++, an(y.readable, w, b, { end: q });
      else
        throw new En(
          "val",
          [
            "Readable",
            "Iterable",
            "AsyncIterable",
            "ReadableStream",
            "TransformStream",
          ],
          y
        );
      y = w;
    } else y = mr.from(w);
  }
  return (
    ((i != null && i.aborted) || (s != null && s.aborted)) && at.nextTick(c), y
  );
}
function nl(e, t, n, { end: r }) {
  let i = !1;
  if (
    (t.on("close", () => {
      i || n(new Ga());
    }),
    e.pipe(t, { end: !1 }),
    r)
  ) {
    let s = function () {
      (i = !0), t.end();
    };
    Za(e) ? at.nextTick(s) : e.once("end", s);
  } else n();
  return (
    Rt(e, { readable: !0, writable: !1 }, (s) => {
      const l = e._readableState;
      s &&
      s.code === "ERR_STREAM_PREMATURE_CLOSE" &&
      l &&
      l.ended &&
      !l.errored &&
      !l.errorEmitted
        ? e.once("end", n).once("error", n)
        : n(s);
    }),
    Rt(t, { readable: !1, writable: !0 }, n)
  );
}
var Nn = { pipelineImpl: Gi, pipeline: tl };
const { pipeline: rl } = Nn,
  _t = Ee(),
  { destroyer: il } = tt,
  {
    isNodeStream: wt,
    isReadable: Er,
    isWritable: Rr,
    isWebStream: ln,
    isTransformStream: Me,
    isWritableStream: Tr,
    isReadableStream: Ir,
  } = Te,
  {
    AbortError: ol,
    codes: { ERR_INVALID_ARG_VALUE: Dr, ERR_MISSING_ARGS: sl },
  } = ue,
  al = Ce;
var qi = function (...t) {
  if (t.length === 0) throw new sl("streams");
  if (t.length === 1) return _t.from(t[0]);
  const n = [...t];
  if (
    (typeof t[0] == "function" && (t[0] = _t.from(t[0])),
    typeof t[t.length - 1] == "function")
  ) {
    const b = t.length - 1;
    t[b] = _t.from(t[b]);
  }
  for (let b = 0; b < t.length; ++b)
    if (!(!wt(t[b]) && !ln(t[b]))) {
      if (b < t.length - 1 && !(Er(t[b]) || Ir(t[b]) || Me(t[b])))
        throw new Dr(`streams[${b}]`, n[b], "must be readable");
      if (b > 0 && !(Rr(t[b]) || Tr(t[b]) || Me(t[b])))
        throw new Dr(`streams[${b}]`, n[b], "must be writable");
    }
  let r, i, s, l, c;
  function h(b) {
    const A = l;
    (l = null), A ? A(b) : b ? c.destroy(b) : !g && !S && c.destroy();
  }
  const p = t[0],
    f = rl(t, h),
    S = !!(Rr(p) || Tr(p) || Me(p)),
    g = !!(Er(f) || Ir(f) || Me(f));
  if (
    ((c = new _t({
      writableObjectMode: !!(p != null && p.writableObjectMode),
      readableObjectMode: !!(f != null && f.readableObjectMode),
      writable: S,
      readable: g,
    })),
    S)
  ) {
    if (wt(p))
      (c._write = function (A, y, E) {
        p.write(A, y) ? E() : (r = E);
      }),
        (c._final = function (A) {
          p.end(), (i = A);
        }),
        p.on("drain", function () {
          if (r) {
            const A = r;
            (r = null), A();
          }
        });
    else if (ln(p)) {
      const y = (Me(p) ? p.writable : p).getWriter();
      (c._write = async function (E, O, P) {
        try {
          await y.ready, y.write(E).catch(() => {}), P();
        } catch (w) {
          P(w);
        }
      }),
        (c._final = async function (E) {
          try {
            await y.ready, y.close().catch(() => {}), (i = E);
          } catch (O) {
            E(O);
          }
        });
    }
    const b = Me(f) ? f.readable : f;
    al(b, () => {
      if (i) {
        const A = i;
        (i = null), A();
      }
    });
  }
  if (g) {
    if (wt(f))
      f.on("readable", function () {
        if (s) {
          const b = s;
          (s = null), b();
        }
      }),
        f.on("end", function () {
          c.push(null);
        }),
        (c._read = function () {
          for (;;) {
            const b = f.read();
            if (b === null) {
              s = c._read;
              return;
            }
            if (!c.push(b)) return;
          }
        });
    else if (ln(f)) {
      const A = (Me(f) ? f.readable : f).getReader();
      c._read = async function () {
        for (;;)
          try {
            const { value: y, done: E } = await A.read();
            if (!c.push(y)) return;
            if (E) {
              c.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return (
    (c._destroy = function (b, A) {
      !b && l !== null && (b = new ol()),
        (s = null),
        (r = null),
        (i = null),
        l === null ? A(b) : ((l = A), wt(f) && il(f, b));
    }),
    c
  );
};
const ll = globalThis.AbortController || dt().AbortController,
  {
    codes: {
      ERR_INVALID_ARG_VALUE: dl,
      ERR_INVALID_ARG_TYPE: ft,
      ERR_MISSING_ARGS: ul,
      ERR_OUT_OF_RANGE: fl,
    },
    AbortError: ye,
  } = ue,
  { validateAbortSignal: Fe, validateInteger: vr, validateObject: Ve } = ut,
  cl = z.Symbol("kWeak"),
  hl = z.Symbol("kResistStopPropagation"),
  { finished: pl } = Ce,
  bl = qi,
  { addAbortSignalNoValidate: gl } = Nt,
  { isWritable: yl, isNodeStream: _l } = Te,
  { deprecate: wl } = se,
  {
    ArrayPrototypePush: ml,
    Boolean: Sl,
    MathFloor: Cr,
    Number: Al,
    NumberIsNaN: El,
    Promise: Or,
    PromiseReject: Pr,
    PromiseResolve: Rl,
    PromisePrototypeThen: Mr,
    Symbol: Yi,
  } = z,
  Tt = Yi("kEmpty"),
  Nr = Yi("kEof");
function Tl(e, t) {
  if (
    (t != null && Ve(t, "options"),
    (t == null ? void 0 : t.signal) != null && Fe(t.signal, "options.signal"),
    _l(e) && !yl(e))
  )
    throw new dl("stream", e, "must be writable");
  const n = bl(this, e);
  return t != null && t.signal && gl(t.signal, n), n;
}
function Ut(e, t) {
  if (typeof e != "function")
    throw new ft("fn", ["Function", "AsyncFunction"], e);
  t != null && Ve(t, "options"),
    (t == null ? void 0 : t.signal) != null && Fe(t.signal, "options.signal");
  let n = 1;
  (t == null ? void 0 : t.concurrency) != null && (n = Cr(t.concurrency));
  let r = n - 1;
  return (
    (t == null ? void 0 : t.highWaterMark) != null && (r = Cr(t.highWaterMark)),
    vr(n, "options.concurrency", 1),
    vr(r, "options.highWaterMark", 0),
    (r += n),
    async function* () {
      const s = se.AbortSignalAny([t == null ? void 0 : t.signal].filter(Sl)),
        l = this,
        c = [],
        h = { signal: s };
      let p,
        f,
        S = !1,
        g = 0;
      function b() {
        (S = !0), A();
      }
      function A() {
        (g -= 1), y();
      }
      function y() {
        f && !S && g < n && c.length < r && (f(), (f = null));
      }
      async function E() {
        try {
          for await (let O of l) {
            if (S) return;
            if (s.aborted) throw new ye();
            try {
              if (((O = e(O, h)), O === Tt)) continue;
              O = Rl(O);
            } catch (P) {
              O = Pr(P);
            }
            (g += 1),
              Mr(O, A, b),
              c.push(O),
              p && (p(), (p = null)),
              !S &&
                (c.length >= r || g >= n) &&
                (await new Or((P) => {
                  f = P;
                }));
          }
          c.push(Nr);
        } catch (O) {
          const P = Pr(O);
          Mr(P, A, b), c.push(P);
        } finally {
          (S = !0), p && (p(), (p = null));
        }
      }
      E();
      try {
        for (;;) {
          for (; c.length > 0; ) {
            const O = await c[0];
            if (O === Nr) return;
            if (s.aborted) throw new ye();
            O !== Tt && (yield O), c.shift(), y();
          }
          await new Or((O) => {
            p = O;
          });
        }
      } finally {
        (S = !0), f && (f(), (f = null));
      }
    }.call(this)
  );
}
function Il(e = void 0) {
  return (
    e != null && Ve(e, "options"),
    (e == null ? void 0 : e.signal) != null && Fe(e.signal, "options.signal"),
    async function* () {
      let n = 0;
      for await (const i of this) {
        var r;
        if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
          throw new ye({ cause: e.signal.reason });
        yield [n++, i];
      }
    }.call(this)
  );
}
async function Xi(e, t = void 0) {
  for await (const n of Ln.call(this, e, t)) return !0;
  return !1;
}
async function Dl(e, t = void 0) {
  if (typeof e != "function")
    throw new ft("fn", ["Function", "AsyncFunction"], e);
  return !(await Xi.call(this, async (...n) => !(await e(...n)), t));
}
async function vl(e, t) {
  for await (const n of Ln.call(this, e, t)) return n;
}
async function Cl(e, t) {
  if (typeof e != "function")
    throw new ft("fn", ["Function", "AsyncFunction"], e);
  async function n(r, i) {
    return await e(r, i), Tt;
  }
  for await (const r of Ut.call(this, n, t));
}
function Ln(e, t) {
  if (typeof e != "function")
    throw new ft("fn", ["Function", "AsyncFunction"], e);
  async function n(r, i) {
    return (await e(r, i)) ? r : Tt;
  }
  return Ut.call(this, n, t);
}
class Ol extends ul {
  constructor() {
    super("reduce"),
      (this.message = "Reduce of an empty stream requires an initial value");
  }
}
async function Pl(e, t, n) {
  var r;
  if (typeof e != "function")
    throw new ft("reducer", ["Function", "AsyncFunction"], e);
  n != null && Ve(n, "options"),
    (n == null ? void 0 : n.signal) != null && Fe(n.signal, "options.signal");
  let i = arguments.length > 1;
  if (n != null && (r = n.signal) !== null && r !== void 0 && r.aborted) {
    const p = new ye(void 0, { cause: n.signal.reason });
    throw (this.once("error", () => {}), await pl(this.destroy(p)), p);
  }
  const s = new ll(),
    l = s.signal;
  if (n != null && n.signal) {
    const p = { once: !0, [cl]: this, [hl]: !0 };
    n.signal.addEventListener("abort", () => s.abort(), p);
  }
  let c = !1;
  try {
    for await (const p of this) {
      var h;
      if (
        ((c = !0),
        n != null && (h = n.signal) !== null && h !== void 0 && h.aborted)
      )
        throw new ye();
      i ? (t = await e(t, p, { signal: l })) : ((t = p), (i = !0));
    }
    if (!c && !i) throw new Ol();
  } finally {
    s.abort();
  }
  return t;
}
async function Ml(e) {
  e != null && Ve(e, "options"),
    (e == null ? void 0 : e.signal) != null && Fe(e.signal, "options.signal");
  const t = [];
  for await (const r of this) {
    var n;
    if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
      throw new ye(void 0, { cause: e.signal.reason });
    ml(t, r);
  }
  return t;
}
function Nl(e, t) {
  const n = Ut.call(this, e, t);
  return async function* () {
    for await (const i of n) yield* i;
  }.call(this);
}
function zi(e) {
  if (((e = Al(e)), El(e))) return 0;
  if (e < 0) throw new fl("number", ">= 0", e);
  return e;
}
function Ll(e, t = void 0) {
  return (
    t != null && Ve(t, "options"),
    (t == null ? void 0 : t.signal) != null && Fe(t.signal, "options.signal"),
    (e = zi(e)),
    async function* () {
      var r;
      if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
        throw new ye();
      for await (const s of this) {
        var i;
        if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
          throw new ye();
        e-- <= 0 && (yield s);
      }
    }.call(this)
  );
}
function kl(e, t = void 0) {
  return (
    t != null && Ve(t, "options"),
    (t == null ? void 0 : t.signal) != null && Fe(t.signal, "options.signal"),
    (e = zi(e)),
    async function* () {
      var r;
      if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
        throw new ye();
      for await (const s of this) {
        var i;
        if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
          throw new ye();
        if ((e-- > 0 && (yield s), e <= 0)) return;
      }
    }.call(this)
  );
}
Rn.streamReturningOperators = {
  asIndexedPairs: wl(
    Il,
    "readable.asIndexedPairs will be removed in a future version."
  ),
  drop: Ll,
  filter: Ln,
  flatMap: Nl,
  map: Ut,
  take: kl,
  compose: Tl,
};
Rn.promiseReturningOperators = {
  every: Dl,
  forEach: Cl,
  reduce: Pl,
  toArray: Ml,
  some: Xi,
  find: vl,
};
var dn, Lr;
function Zi() {
  if (Lr) return dn;
  Lr = 1;
  const { ArrayPrototypePop: e, Promise: t } = z,
    { isIterable: n, isNodeStream: r, isWebStream: i } = Te,
    { pipelineImpl: s } = Nn,
    { finished: l } = Ce;
  Ji();
  function c(...h) {
    return new t((p, f) => {
      let S, g;
      const b = h[h.length - 1];
      if (b && typeof b == "object" && !r(b) && !n(b) && !i(b)) {
        const A = e(h);
        (S = A.signal), (g = A.end);
      }
      s(
        h,
        (A, y) => {
          A ? f(A) : p(y);
        },
        { signal: S, end: g }
      );
    });
  }
  return (dn = { finished: l, pipeline: c }), dn;
}
var kr;
function Ji() {
  if (kr) return Kt.exports;
  kr = 1;
  const { Buffer: e } = Be,
    { ObjectDefineProperty: t, ObjectKeys: n, ReflectApply: r } = z,
    {
      promisify: { custom: i },
    } = se,
    { streamReturningOperators: s, promiseReturningOperators: l } = Rn,
    {
      codes: { ERR_ILLEGAL_CONSTRUCTOR: c },
    } = ue,
    h = qi,
    { setDefaultHighWaterMark: p, getDefaultHighWaterMark: f } = Lt,
    { pipeline: S } = Nn,
    { destroyer: g } = tt,
    b = Ce,
    A = Zi(),
    y = Te,
    E = (Kt.exports = Cn.Stream);
  (E.isDestroyed = y.isDestroyed),
    (E.isDisturbed = y.isDisturbed),
    (E.isErrored = y.isErrored),
    (E.isReadable = y.isReadable),
    (E.isWritable = y.isWritable),
    (E.Readable = kt());
  for (const P of n(s)) {
    let x = function (...L) {
      if (new.target) throw c();
      return E.Readable.from(r(w, this, L));
    };
    const w = s[P];
    t(x, "name", { __proto__: null, value: w.name }),
      t(x, "length", { __proto__: null, value: w.length }),
      t(E.Readable.prototype, P, {
        __proto__: null,
        value: x,
        enumerable: !1,
        configurable: !0,
        writable: !0,
      });
  }
  for (const P of n(l)) {
    let x = function (...L) {
      if (new.target) throw c();
      return r(w, this, L);
    };
    const w = l[P];
    t(x, "name", { __proto__: null, value: w.name }),
      t(x, "length", { __proto__: null, value: w.length }),
      t(E.Readable.prototype, P, {
        __proto__: null,
        value: x,
        enumerable: !1,
        configurable: !0,
        writable: !0,
      });
  }
  (E.Writable = On()),
    (E.Duplex = Ee()),
    (E.Transform = Fi),
    (E.PassThrough = Ki),
    (E.pipeline = S);
  const { addAbortSignal: O } = Nt;
  return (
    (E.addAbortSignal = O),
    (E.finished = b),
    (E.destroy = g),
    (E.compose = h),
    (E.setDefaultHighWaterMark = p),
    (E.getDefaultHighWaterMark = f),
    t(E, "promises", {
      __proto__: null,
      configurable: !0,
      enumerable: !0,
      get() {
        return A;
      },
    }),
    t(S, i, {
      __proto__: null,
      enumerable: !0,
      get() {
        return A.pipeline;
      },
    }),
    t(b, i, {
      __proto__: null,
      enumerable: !0,
      get() {
        return A.finished;
      },
    }),
    (E.Stream = E),
    (E._isUint8Array = function (w) {
      return w instanceof Uint8Array;
    }),
    (E._uint8ArrayToBuffer = function (w) {
      return e.from(w.buffer, w.byteOffset, w.byteLength);
    }),
    Kt.exports
  );
}
(function (e) {
  const t = Ji(),
    n = Zi(),
    r = t.Readable.destroy;
  (e.exports = t.Readable),
    (e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer),
    (e.exports._isUint8Array = t._isUint8Array),
    (e.exports.isDisturbed = t.isDisturbed),
    (e.exports.isErrored = t.isErrored),
    (e.exports.isReadable = t.isReadable),
    (e.exports.Readable = t.Readable),
    (e.exports.Writable = t.Writable),
    (e.exports.Duplex = t.Duplex),
    (e.exports.Transform = t.Transform),
    (e.exports.PassThrough = t.PassThrough),
    (e.exports.addAbortSignal = t.addAbortSignal),
    (e.exports.finished = t.finished),
    (e.exports.destroy = t.destroy),
    (e.exports.destroy = r),
    (e.exports.pipeline = t.pipeline),
    (e.exports.compose = t.compose),
    Object.defineProperty(t, "promises", {
      configurable: !0,
      enumerable: !0,
      get() {
        return n;
      },
    }),
    (e.exports.Stream = t.Stream),
    (e.exports.default = e.exports);
})(li);
var ct = li.exports;
function mt() {}
const Ur = "SYN",
  un = "ACK",
  Wr = "BRK";
class $r extends ct.Duplex {
  constructor(t) {
    let {
      name: n,
      target: r,
      targetWindow: i = window,
      targetOrigin: s = "*",
    } = t;
    if (
      (super({ objectMode: !0 }),
      I(this, "_init", void 0),
      I(this, "_haveSyn", void 0),
      I(this, "_name", void 0),
      I(this, "_target", void 0),
      I(this, "_targetWindow", void 0),
      I(this, "_targetOrigin", void 0),
      I(this, "_onMessage", void 0),
      I(this, "_synIntervalId", void 0),
      !n || !r)
    )
      throw new Error("Invalid input.");
    (this._init = !1),
      (this._haveSyn = !1),
      (this._name = n),
      (this._target = r),
      (this._targetWindow = i),
      (this._targetOrigin = s),
      (this._onMessage = this.onMessage.bind(this)),
      (this._synIntervalId = null),
      window.addEventListener("message", this._onMessage, !1),
      this._handShake();
  }
  _break() {
    this.cork(),
      this._write(Wr, null, mt),
      (this._haveSyn = !1),
      (this._init = !1);
  }
  _handShake() {
    this._write(Ur, null, mt), this.cork();
  }
  _onData(t) {
    if (!this._init)
      t === Ur
        ? ((this._haveSyn = !0), this._write(un, null, mt))
        : t === un &&
          ((this._init = !0),
          this._haveSyn || this._write(un, null, mt),
          this.uncork());
    else if (t === Wr) this._break();
    else
      try {
        this.push(t);
      } catch (n) {
        this.emit("error", n);
      }
  }
  _postMessage(t) {
    const n = this._targetOrigin;
    this._targetWindow.postMessage({ target: this._target, data: t }, n);
  }
  onMessage(t) {
    const n = t.data;
    (this._targetOrigin !== "*" && t.origin !== this._targetOrigin) ||
      t.source !== this._targetWindow ||
      typeof n != "object" ||
      n.target !== this._name ||
      !n.data ||
      this._onData(n.data);
  }
  _read() {}
  _write(t, n, r) {
    this._postMessage(t), r();
  }
  _destroy() {
    window.removeEventListener("message", this._onMessage, !1);
  }
}
function xr(e, t, n) {
  try {
    Reflect.apply(e, t, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    });
  }
}
function Ul(e) {
  const t = e.length,
    n = new Array(t);
  for (let r = 0; r < t; r += 1) n[r] = e[r];
  return n;
}
class ht extends Qe.EventEmitter {
  emit(t) {
    let n = t === "error";
    const r = this._events;
    if (r !== void 0) n = n && r.error === void 0;
    else if (!n) return !1;
    for (
      var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), l = 1;
      l < i;
      l++
    )
      s[l - 1] = arguments[l];
    if (n) {
      let h;
      if ((s.length > 0 && ([h] = s), h instanceof Error)) throw h;
      const p = new Error(`Unhandled error.${h ? ` (${h.message})` : ""}`);
      throw ((p.context = h), p);
    }
    const c = r[t];
    if (c === void 0) return !1;
    if (typeof c == "function") xr(c, this, s);
    else {
      const h = c.length,
        p = Ul(c);
      for (let f = 0; f < h; f += 1) xr(p[f], this, s);
    }
    return !0;
  }
}
class ot extends Error {
  constructor(t) {
    let { code: n, message: r, data: i } = t;
    if (!Number.isInteger(n)) throw new Error("code must be an integer");
    if (!r || typeof r != "string") throw new Error("message must be string");
    super(r),
      I(this, "code", void 0),
      I(this, "data", void 0),
      (this.code = n),
      i !== void 0 && (this.data = i);
  }
  toString() {
    return wo({
      code: this.code,
      message: this.message,
      data: this.data,
      stack: this.stack,
    });
  }
}
function Wl() {
  const e = {};
  function t() {
    return !1;
  }
  const n = new ht();
  function r(h) {
    const p = e[h.id];
    if (!p) throw new Error(`StreamMiddleware - Unknown response id "${h.id}"`);
    delete e[h.id], Object.assign(p.res, h), setTimeout(p.end);
  }
  function i(h) {
    n.emit("notification", h);
  }
  function s(h, p, f) {
    let S;
    try {
      !h.id ? i(h) : r(h);
    } catch (g) {
      S = g;
    }
    f(S);
  }
  const l = new ct.Duplex({ objectMode: !0, read: t, write: s });
  return {
    events: n,
    middleware: (h, p, f, S) => {
      l.push(h), (e[h.id] = { req: h, res: p, next: f, end: S });
    },
    stream: l,
  };
}
function $l() {
  return (e, t, n, r) => {
    const i = e.id,
      s = Math.random().toString(36).slice(2);
    (e.id = s),
      (t.id = s),
      n((l) => {
        (e.id = i), (t.id = i), l();
      });
  };
}
function Br(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Br(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Br(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
class Ae extends ht {
  constructor() {
    super(), I(this, "_middleware", void 0), (this._middleware = []);
  }
  static async _runAllMiddleware(t, n, r) {
    const i = [];
    let s = null,
      l = !1;
    for (const c of r)
      if ((([s, l] = await Ae._runMiddleware(t, n, c, i)), l)) break;
    return [s, l, i.reverse()];
  }
  static _runMiddleware(t, n, r, i) {
    return new Promise((s) => {
      const l = (h) => {
          const p = h || n.error;
          p && (n.error = ve.serializeError(p)), s([p, !0]);
        },
        c = (h) => {
          n.error
            ? l(n.error)
            : (h &&
                (typeof h != "function" &&
                  l(
                    new ot({
                      code: -32603,
                      message:
                        "JRPCEngine: 'next' return handlers must be functions",
                    })
                  ),
                i.push(h)),
              s([null, !1]));
        };
      try {
        r(t, n, c, l);
      } catch (h) {
        l(h);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const n of t)
      await new Promise((r, i) => {
        n((s) => (s ? i(s) : r()));
      });
  }
  static _checkForCompletion(t, n, r) {
    if (!("result" in n) && !("error" in n))
      throw new ot({
        code: -32603,
        message: "Response has no error or result for request",
      });
    if (!r) throw new ot({ code: -32603, message: "Nothing ended request" });
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, n) {
    if (n && typeof n != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t)
      ? n
        ? this._handleBatch(t, n)
        : this._handleBatch(t)
      : n
      ? this._handle(t, n)
      : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, n, r, i) => {
      try {
        const [s, l, c] = await Ae._runAllMiddleware(t, n, this._middleware);
        return l
          ? (await Ae._runReturnHandlers(c), i(s))
          : r(async (h) => {
              try {
                await Ae._runReturnHandlers(c);
              } catch (p) {
                return h(p);
              }
              return h();
            });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(t, n) {
    try {
      const r = await Promise.all(t.map(this._promiseHandle.bind(this)));
      return n ? n(null, r) : r;
    } catch (r) {
      if (n) return n(r);
      throw r;
    }
  }
  _promiseHandle(t) {
    return new Promise((n) => {
      this._handle(t, (r, i) => {
        n(i);
      });
    });
  }
  async _handle(t, n) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const l = new ot({
        code: -32603,
        message: "request must be plain object",
      });
      return n(l, { id: void 0, jsonrpc: "2.0", error: l });
    }
    if (typeof t.method != "string") {
      const l = new ot({ code: -32603, message: "method must be string" });
      return n(l, { id: t.id, jsonrpc: "2.0", error: l });
    }
    const r = xl({}, t),
      i = { id: r.id, jsonrpc: r.jsonrpc };
    let s = null;
    try {
      await this._processRequest(r, i);
    } catch (l) {
      s = l;
    }
    return (
      s && (delete i.result, i.error || (i.error = ve.serializeError(s))),
      n(s, i)
    );
  }
  async _processRequest(t, n) {
    const [r, i, s] = await Ae._runAllMiddleware(t, n, this._middleware);
    if ((Ae._checkForCompletion(t, n, i), await Ae._runReturnHandlers(s), r))
      throw r;
  }
}
class Bl extends ct.Duplex {
  constructor(t) {
    let { parent: n, name: r } = t;
    super({ objectMode: !0 }),
      I(this, "_parent", void 0),
      I(this, "_name", void 0),
      (this._parent = n),
      (this._name = r);
  }
  _read() {}
  _write(t, n, r) {
    this._parent.push({ name: this._name, data: t }), r();
  }
}
function jr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jr(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : jr(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
const Fr = Symbol("IGNORE_SUBSTREAM");
class Qi extends ct.Duplex {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(Hr(Hr({}, t), {}, { objectMode: !0 })),
      I(this, "_substreams", void 0),
      I(this, "getStream", void 0),
      (this._substreams = {});
  }
  createStream(t) {
    if (!t) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[t])
      throw new Error(
        `ObjectMultiplex - Substream for name "${t}" already exists`
      );
    const n = new Bl({ parent: this, name: t });
    return (
      (this._substreams[t] = n), jl(this, (r) => n.destroy(r || void 0)), n
    );
  }
  ignoreStream(t) {
    if (!t) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[t])
      throw new Error(
        `ObjectMultiplex - Substream for name "${t}" already exists`
      );
    this._substreams[t] = Fr;
  }
  _read() {}
  _write(t, n, r) {
    const { name: i, data: s } = t;
    if (!i)
      return (
        window.console.warn(
          `ObjectMultiplex - malformed chunk without name "${t}"`
        ),
        r()
      );
    const l = this._substreams[i];
    return l
      ? (l !== Fr && l.push(s), r())
      : (window.console.warn(
          `ObjectMultiplex - orphaned data for stream "${i}"`
        ),
        r());
  }
}
function jl(e, t) {
  const n = _o(t);
  Gn(e, { readable: !1 }, n), Gn(e, { writable: !1 }, n);
}
function Hl(e) {
  const t = new Qi();
  return (
    (t.getStream = function (r) {
      return this._substreams[r] ? this._substreams[r] : this.createStream(r);
    }),
    St(e, t, e, (n) => {
      n && window.console.error(n);
    }),
    t
  );
}
const Ue = {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    TWITCH: "twitch",
    REDDIT: "reddit",
    DISCORD: "discord",
    EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless",
  },
  Vr = {
    [Ue.GOOGLE]: "tkey-google",
    [Ue.FACEBOOK]: "tkey-facebook",
    [Ue.TWITCH]: "tkey-twitch",
    [Ue.REDDIT]: "tkey-reddit",
    [Ue.DISCORD]: "tkey-discord",
    [Ue.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless",
  },
  X = {
    MOONPAY: "moonpay",
    WYRE: "wyre",
    RAMPNETWORK: "rampnetwork",
    XANPOOL: "xanpool",
    MERCURYO: "mercuryo",
    TRANSAK: "transak",
    BANXA: "banxa",
  },
  $ = {
    MAINNET: "mainnet",
    MATIC: "matic",
    BSC_MAINNET: "bsc_mainnet",
    AVALANCHE_MAINNET: "avalanche_mainnet",
    XDAI: "xdai",
    ARBITRUM_MAINNET: "arbitrum_mainnet",
    OPTIMISM_MAINNET: "optimism_mainnet",
  },
  Fl = {
    PRODUCTION: "production",
    DEVELOPMENT: "development",
    BINANCE: "binance",
    TESTING: "testing",
    LRC: "lrc",
    BETA: "beta",
    BNB: "bnb",
    POLYGON: "polygon",
    ALPHA: "alpha",
  },
  Xe = {
    BOTTOM_LEFT: "bottom-left",
    TOP_LEFT: "top-left",
    BOTTOM_RIGHT: "bottom-right",
    TOP_RIGHT: "top-right",
  },
  Vl = [
    "ETH",
    "USDT",
    "USDC",
    "TUSD",
    "EOSDT",
    "USD",
    "DAI",
    "GUSD",
    "DKKT",
    "PAX",
    "ILS",
    "RUB",
    "BYN",
    "EUR",
    "GBP",
    "JPY",
    "KRW",
    "PLN",
    "MXN",
    "AUD",
    "BRL",
    "CAD",
    "CHF",
    "KPW",
    "LAK",
    "LBP",
    "LKR",
    "XOF",
    "CNHT",
    "DOGE",
    "UAH",
    "TRY",
    "HKD",
    "XJP",
    "SGD",
    "USC",
    "NZD",
    "NGN",
    "RUR",
    "COP",
    "GHS",
    "EGP",
    "IDR",
    "BHD",
    "CRC",
    "PEN",
    "AED",
    "DOP",
    "PKR",
    "HUF",
    "VND",
    "XAR",
    "LTC",
    "RON",
    "OMR",
    "MYR",
    "DKK",
    "UGX",
    "ZMW",
    "SAR",
    "SEK",
    "GEL",
    "RWF",
    "IRR",
    "TZS",
    "CNY",
    "VEF",
    "BDT",
    "HRK",
    "CLP",
    "THB",
    "XAF",
    "ARS",
    "UYU",
    "SZL",
    "KZT",
    "NOK",
    "KES",
    "PAB",
    "INR",
    "CZK",
    "MAD",
    "TWD",
    "PHP",
    "ZAR",
    "BOB",
    "CDF",
    "DASH",
    "VES",
    "ISK",
    "MWK",
    "BAM",
    "TTD",
    "XRP",
    "JOD",
    "RSD",
    "HNL",
    "BGN",
    "GTQ",
    "BWP",
    "XMR",
    "MMK",
    "QAR",
    "AOA",
    "KWD",
    "MUR",
    "WUSD",
    "WEUR",
    "WAVES",
    "WTRY",
    "LRD",
    "LSL",
    "LYD",
    "AWG",
    "MDL",
    "BTO",
    "EURS",
    "CHFT",
    "MKD",
    "MNT",
    "MOP",
    "MRO",
    "MVR",
    "VOLLAR",
    "CKUSD",
    "KHR",
    "VUV",
    "BITCNY",
    "QC",
    "BBD",
    "NAD",
    "NPR",
    "PGK",
    "PYG",
    "BIF",
    "BMD",
    "BND",
    "XLM",
    "BNB",
    "SCR",
    "BAT",
    "CRO",
    "HT",
    "KCS",
    "LEO",
    "LINK",
    "MKR",
    "NPXS",
    "OMG",
    "REP",
    "ZB",
    "ZIL",
    "ZRX",
    "BCH",
    "BZD",
    "CUP",
    "CVE",
    "DJF",
    "DZD",
    "ERN",
    "ETB",
    "FJD",
    "FKP",
    "BUSD",
    "ANCT",
    "ALL",
    "AMD",
    "ANG",
    "CNYX",
    "IQD",
    "UZS",
    "TND",
    "GGP",
    "XAU",
    "KGS",
    "GIP",
    "JMD",
    "ZEC",
    "USDP",
    "BSV",
    "EMC2",
    "SNT",
    "GTO",
    "POWR",
    "EUSD",
    "EURT",
    "BCY",
    "BTS",
    "ATM",
    "BLOCKPAY",
    "ARDR",
    "AMP",
    "B2X",
    "BITGOLD",
    "BITEUR",
    "ATB",
    "BITUSD",
    "AGRS",
    "DFXT",
    "HIKEN",
    "BIX",
    "KNC",
    "EOS",
    "COB",
    "COSS",
    "BMH",
    "NANO",
    "BDG",
    "BNT",
    "XVG",
    "LKK1Y",
    "LKK",
    "USDK",
    "EURN",
    "NZDT",
    "JSE",
    "GMD",
    "GNF",
    "GYD",
    "YER",
    "XPF",
    "HTG",
    "SLL",
    "SOS",
    "WST",
    "SVC",
    "SYP",
    "NEO",
    "KMF",
    "JUMP",
    "AYA",
    "BLAST",
    "WGR",
    "BCN",
    "BTG",
    "URALS",
    "INN",
    "USDQ",
    "CNH",
    "HUSD",
    "BKRW",
    "NZDX",
    "EURX",
    "CADX",
    "USDEX",
    "JPYX",
    "AUDX",
    "VNDC",
    "EON",
    "GBPX",
    "CHFX",
    "USDJ",
    "IDRT",
    "USDS",
    "USDN",
    "BIDR",
    "IDK",
    "BSD",
    "BTN",
    "KYD",
    "NIO",
    "SBD",
    "SDG",
    "SHP",
    "TOP",
    "XCD",
    "XCHF",
    "CNYT",
    "GYEN",
    "ZUSD",
    "GOLD",
    "TRX",
    "TRYB",
    "PLATC",
    "STRAX",
    "UST",
    "GLM",
    "VAI",
    "BRZ",
    "DDRST",
    "XAUT",
    "MIM",
  ],
  Kl = {
    [X.MOONPAY]: [
      "AUD",
      "BGN",
      "BRL",
      "CAD",
      "CHF",
      "CNY",
      "COP",
      "CZK",
      "DKK",
      "DOP",
      "EGP",
      "EUR",
      "GBP",
      "HKD",
      "HRK",
      "IDR",
      "ILS",
      "JPY",
      "JOD",
      "KES",
      "KRW",
      "KWD",
      "LKR",
      "MAD",
      "MXN",
      "MYR",
      "NGN",
      "NOK",
      "NZD",
      "OMR",
      "PEN",
      "PKR",
      "PLN",
      "RON",
      "RUB",
      "SEK",
      "SGD",
      "THB",
      "TRY",
      "TWD",
      "USD",
      "VND",
      "ZAR",
    ],
    [X.WYRE]: [
      "USD",
      "EUR",
      "GBP",
      "AUD",
      "CAD",
      "NZD",
      "CNY",
      "ARS",
      "BRL",
      "CHF",
      "CLP",
      "COP",
      "CZK",
      "DKK",
      "HKD",
      "ILS",
      "INR",
      "ISK",
      "JPY",
      "KRW",
      "MXN",
      "MYR",
      "NOK",
      "PHP",
      "PLN",
      "SEK",
      "SGD",
      "THB",
      "VND",
      "ZAR",
    ],
    [X.RAMPNETWORK]: [
      "USD",
      "EUR",
      "GBP",
      "BMD",
      "BAM",
      "BWP",
      "BRL",
      "BGN",
      "COP",
      "CRC",
      "CZK",
      "DKK",
      "DOP",
      "GEL",
      "GTQ",
      "HNL",
      "HUF",
      "ISK",
      "INR",
      "ILS",
      "KZT",
      "KES",
      "KWD",
      "LAK",
      "MKD",
      "MYR",
      "MXN",
      "MDL",
      "MZN",
      "NZD",
      "NGN",
      "PYG",
      "PEN",
      "PLN",
      "RON",
      "RSD",
      "SGD",
      "ZAR",
      "LKR",
      "SEK",
      "CHF",
      "TJS",
      "THB",
      "UYU",
    ],
    [X.XANPOOL]: [
      "SGD",
      "HKD",
      "THB",
      "PHP",
      "INR",
      "IDR",
      "MYR",
      "AUD",
      "NZD",
      "KRW",
    ],
    [X.MERCURYO]: [
      "EUR",
      "USD",
      "GBP",
      "TRY",
      "JPY",
      "BRL",
      "NGN",
      "VND",
      "MXN",
      "KRW",
      "PLN",
      "SEK",
      "CHF",
      "CAD",
      "CZK",
      "DKK",
      "BGN",
      "HKD",
      "AUD",
      "INR",
    ],
    [X.TRANSAK]: [
      "ARS",
      "AUD",
      "BBD",
      "BGN",
      "BMD",
      "BRL",
      "CAD",
      "CHF",
      "CLP",
      "CRC",
      "CZK",
      "DKK",
      "DOP",
      "EUR",
      "FJD",
      "FKP",
      "GBP",
      "GIP",
      "HRK",
      "HUF",
      "IDR",
      "ILS",
      "ISK",
      "JMD",
      "JPY",
      "KES",
      "KRW",
      "MDL",
      "MXN",
      "MYR",
      "NOK",
      "NZD",
      "PEN",
      "PHP",
      "PLN",
      "PYG",
      "RON",
      "SEK",
      "SGD",
      "THB",
      "TRY",
      "TZS",
      "USD",
      "ZAR",
    ],
    [X.BANXA]: [
      "AUD",
      "CAD",
      "CZK",
      "DKK",
      "EUR",
      "GBP",
      "HKD",
      "JPY",
      "NOK",
      "NZD",
      "NZD",
      "PLN",
      "RUB",
      "SEK",
      "SGD",
      "TRY",
      "USD",
    ],
  },
  Gl = new Set(Vl);
function Ne(e) {
  return Kl[e].filter((n) => Gl.has(n));
}
const ql = {
    [X.MOONPAY]: {
      line1: "Credit/ Debit Card/ Apple Pay",
      line2: "4.5% or 5 USD",
      line3: "2,000€/day, 10,000€/mo",
      supportPage: "https://help.moonpay.io/en/",
      minOrderValue: 24.99,
      maxOrderValue: 5e4,
      validCurrencies: Ne(X.MOONPAY),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "aave", display: "AAVE" },
          { value: "bat", display: "BAT" },
          { value: "dai", display: "DAI" },
          { value: "eth", display: "ETH" },
          { value: "mkr", display: "MKR" },
          { value: "matic", display: "MATIC" },
          { value: "usdt", display: "USDT" },
          { value: "uni", display: "UNI" },
          { value: "usdc", display: "USDC" },
          { value: "weth", display: "WETH" },
        ],
        [$.MATIC]: [
          { value: "eth_polygon", display: "ETH" },
          { value: "matic_polygon", display: "MATIC" },
          { value: "usdc_polygon", display: "USDC" },
          { value: "usdt_polygon", display: "USDT" },
        ],
        [$.BSC_MAINNET]: [
          { value: "bnb_bsc", display: "BNB" },
          { value: "busd_bsc", display: "BUSD" },
        ],
        [$.AVALANCHE_MAINNET]: [
          { value: "avax_cchain", display: "AVAX" },
          { value: "usdc_cchain", display: "USDC" },
        ],
        [$.ARBITRUM_MAINNET]: [
          { value: "eth_arbitrum", display: "ETH" },
          { value: "usdc_arbitrum", display: "USDC" },
        ],
        [$.OPTIMISM_MAINNET]: [
          { value: "eth_optimism", display: "ETH" },
          { value: "usdc_optimism", display: "USDC" },
        ],
      },
      includeFees: !0,
      api: !0,
      enforceMax: !1,
    },
    [X.WYRE]: {
      line1: "Apple Pay/ Debit/ Credit Card",
      line2: "4.9% + 30¢ or 5 USD",
      line3: "$250/day",
      supportPage: "https://support.sendwyre.com/en/",
      minOrderValue: 5,
      maxOrderValue: 500,
      validCurrencies: Ne(X.WYRE),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "AAVE", display: "AAVE" },
          { value: "COMP", display: "COMP" },
          { value: "BAT", display: "BAT" },
          { value: "BUSD", display: "BUSD" },
          { value: "DAI", display: "DAI" },
          { value: "ETH", display: "ETH" },
          { value: "WBTC", display: "WBTC" },
          { value: "MKR", display: "MKR" },
          { value: "UNI", display: "UNI" },
          { value: "WETH", display: "WETH" },
          { value: "USDC", display: "USDC" },
          { value: "USDT", display: "USDT" },
        ],
        [$.MATIC]: [
          { value: "mUSDC", display: "USDC" },
          { value: "MATIC", display: "MATIC" },
          { value: "MWETH", display: "WETH" },
        ],
        [$.AVALANCHE_MAINNET]: [
          { value: "AVAXC", display: "AVAX" },
          { value: "AVAXCUSDC", display: "USDC" },
        ],
        [$.BSC_MAINNET]: [
          { value: "BNB", display: "BNB" },
          { value: "BBUSD", display: "BUSD" },
        ],
      },
      includeFees: !1,
      api: !0,
      enforceMax: !1,
    },
    [X.RAMPNETWORK]: {
      line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
      line2: "0.49% - 2.9%",
      line3: "5,000€/purchase, 20,000€/mo",
      supportPage: "https://instant.ramp.network/",
      minOrderValue: 50,
      maxOrderValue: 2e4,
      validCurrencies: Ne(X.RAMPNETWORK),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "ETH", display: "ETH" },
          { value: "DAI", display: "DAI" },
          { value: "BAT", display: "BAT" },
          { value: "USDC", display: "USDC" },
          { value: "USDT", display: "USDT" },
        ],
        [$.MATIC]: [
          { value: "MATIC_BAT", display: "BAT" },
          { value: "MATIC_DAI", display: "DAI" },
          { value: "MATIC_MATIC", display: "MATIC" },
          { value: "MATIC_USDC", display: "USDC" },
          { value: "MATIC_USDT", display: "USDT" },
        ],
        [$.AVALANCHE_MAINNET]: [
          { value: "AVAX_AVAX", display: "AVAX" },
          { value: "AVAX_USDC", display: "USDC" },
          { value: "AVAX_USDT", display: "USDT" },
        ],
        [$.ARBITRUM_MAINNET]: [
          { value: "ARBITRUM_ETH", display: "ETH" },
          { value: "ARBITRUM_USDC.e	", display: "USDC" },
          { value: "ARBITRUM_USDT", display: "USDT" },
        ],
        [$.OPTIMISM_MAINNET]: [
          { value: "OPTIMISM_DAI", display: "DAI" },
          { value: "OPTIMISM_OPTIMISM", display: "OPTIMISM" },
          { value: "OPTIMISM_USDC", display: "USDC" },
          { value: "OPTIMISM_USDT", display: "USDT" },
        ],
        [$.BSC_MAINNET]: [
          { value: "BSC_BNB", display: "BNB" },
          { value: "BSC_BUSD", display: "BUSD" },
        ],
      },
      includeFees: !0,
      api: !0,
      receiveHint: "walletTopUp.receiveHintRamp",
      enforceMax: !1,
    },
    [X.XANPOOL]: {
      line1:
        "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
      line2: "2.5% buying, 3% selling",
      line3: "$2,500 / day",
      supportPage: "mailto:support@xanpool.com",
      minOrderValue: 100,
      maxOrderValue: 2500,
      validCurrencies: Ne(X.XANPOOL),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "ETH", display: "ETH" },
          { value: "USDT", display: "USDT" },
          { value: "USDC", display: "USDC" },
        ],
      },
      includeFees: !0,
      api: !0,
      sell: !0,
      enforceMax: !1,
    },
    [X.MERCURYO]: {
      line1: "Credit/ Debit Card/ Apple Pay",
      line2: "3.95% or 4 USD",
      line3: "10,000€/day, 25,000€/mo",
      supportPage: "mailto:support@mercuryo.io",
      minOrderValue: 30,
      maxOrderValue: 5e3,
      validCurrencies: Ne(X.MERCURYO),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "ETH", display: "ETH" },
          { value: "BAT", display: "BAT" },
          { value: "USDT", display: "USDT" },
          { value: "DAI", display: "DAI" },
        ],
        [$.BSC_MAINNET]: [
          { value: "BNB", display: "BNB" },
          { value: "BUSD", display: "BUSD" },
          { value: "1INCH", display: "1INCH" },
        ],
        [$.AVALANCHE_MAINNET]: [{ value: "AVAX", display: "AVAX" }],
        [$.MATIC]: [{ value: "MATIC", display: "MATIC" }],
      },
      includeFees: !0,
      api: !0,
      enforceMax: !1,
    },
    [X.TRANSAK]: {
      line1:
        "Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy",
      line2: "0.99% - 5.5% or 5 USD",
      line3: "$5,000/day, $28,000/mo",
      supportPage: "https://support.transak.com/hc/en-US",
      minOrderValue: 30,
      maxOrderValue: 500,
      validCurrencies: Ne(X.TRANSAK),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "1INCH", display: "1INCH" },
          { value: "BAT", display: "BAT" },
          { value: "AAVE", display: "AAVE" },
          { value: "DAI", display: "DAI" },
          { value: "ETH", display: "ETH" },
          { value: "USDC", display: "USDC" },
          { value: "USDT", display: "USDT" },
        ],
        [$.MATIC]: [
          { value: "BAT", display: "BAT" },
          { value: "AAVE", display: "AAVE" },
          { value: "DAI", display: "DAI" },
          { value: "MATIC", display: "MATIC" },
          { value: "USDC", display: "USDC" },
          { value: "USDT", display: "USDT" },
          { value: "WETH", display: "WETH" },
        ],
        [$.BSC_MAINNET]: [
          { value: "BAT", display: "BAT" },
          { value: "BNB", display: "BNB" },
          { value: "BUSD", display: "BUSD" },
        ],
        [$.AVALANCHE_MAINNET]: [{ value: "AVAX", display: "AVAX" }],
        [$.OPTIMISM_MAINNET]: [
          { value: "ETH", display: "ETH" },
          { value: "USDC", display: "USDC" },
        ],
        [$.ARBITRUM_MAINNET]: [
          { value: "USDC", display: "USDC" },
          { value: "ETH", display: "ETH" },
        ],
      },
      includeFees: !0,
      enforceMax: !0,
    },
    [X.BANXA]: {
      line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
      line2: "0.49% - 2.9%",
      line3: "5,000€/purchase, 20,000€/mo",
      supportPage: "https://support.banxa.com",
      minOrderValue: 20,
      maxOrderValue: 15e3,
      validCurrencies: Ne(X.BANXA),
      validCryptoCurrenciesByChain: {
        [$.MAINNET]: [
          { value: "ETH", display: "ETH" },
          { value: "DAI", display: "DAI" },
          { value: "MKR", display: "MKR" },
          { value: "USDT", display: "USDT" },
          { value: "BUSD", display: "BUSD" },
          { value: "USDC", display: "USDC" },
          { value: "BAT", display: "BAT" },
          { value: "AAVE", display: "AAVE" },
          { value: "COMP", display: "COMP" },
          { value: "UNI", display: "UNI" },
        ],
        [$.MATIC]: [{ value: "MATIC", display: "MATIC" }],
      },
      includeFees: !0,
      enforceMax: !0,
    },
  },
  Yl = {
    en: {
      embed: {
        continue: "Continue",
        actionRequired: "Authorization required",
        pendingAction: "Click continue to proceed with your request in a popup",
        cookiesRequired: "Cookies Required",
        enableCookies:
          "Please enable cookies in your browser preferences to access Torus",
        clickHere: "More Info",
      },
    },
    de: {
      embed: {
        continue: "Fortsetzen",
        actionRequired: "Autorisierung erforderlich",
        pendingAction:
          "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
        cookiesRequired: "Cookies benötigt",
        enableCookies:
          "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
        clickHere: "Mehr Info",
      },
    },
    ja: {
      embed: {
        continue: "継続する",
        actionRequired: "認証が必要です",
        pendingAction:
          "続行をクリックして、ポップアップでリクエストを続行します",
        cookiesRequired: "必要なクッキー",
        enableCookies:
          "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
        clickHere: "詳しくは",
      },
    },
    ko: {
      embed: {
        continue: "계속하다",
        actionRequired: "승인 필요",
        pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
        cookiesRequired: "쿠키 필요",
        enableCookies:
          "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
        clickHere: "더 많은 정보",
      },
    },
    zh: {
      embed: {
        continue: "继续",
        actionRequired: "需要授权",
        pendingAction: "单击继续以在弹出窗口中继续您的请求",
        cookiesRequired: "必填Cookie",
        enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
        clickHere: "更多信息",
      },
    },
  };
var be = {
  supportedVerifierList: Object.values(Ue),
  paymentProviders: ql,
  api: "https://api.tor.us",
  translations: Yl,
  prodTorusUrl: "",
  localStorageKeyPrefix: "torus-",
};
const st = (e) => {
    const t = window.document.createElement("template"),
      n = e.trim();
    return (t.innerHTML = n), t.content.firstChild;
  },
  pe = (e, t, n) => {
    const r = (i) => {
      n(i), e.removeListener(t, r);
    };
    e.on(t, r);
  };
var B = si.getLogger("torus-embed"),
  oe = {
    errors: {
      disconnected: () => "Torus: Lost connection to Torus.",
      permanentlyDisconnected: () =>
        "Torus: Disconnected from iframe. Page reload required.",
      sendSiteMetadata: () =>
        "Torus: Failed to send site metadata. This is an internal error, please report this bug.",
      unsupportedSync: (e) =>
        `Torus: The Torus Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
      invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
      invalidOptions: (e, t) =>
        `Invalid options. Received: { maxEventListeners: ${e}, shouldSendMetadata: ${t} }`,
      invalidRequestArgs: () =>
        "Expected a single, non-array, object argument.",
      invalidRequestMethod: () => "'args.method' must be a non-empty string.",
      invalidRequestParams: () =>
        "'args.params' must be an object or array if provided.",
      invalidLoggerObject: () => "'args.logger' must be an object if provided.",
      invalidLoggerMethod: (e) =>
        `'args.logger' must include required method '${e}'.`,
    },
    info: { connected: (e) => `Torus: Connected to chain with ID "${e}".` },
    warnings: {
      enableDeprecation:
        'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
      sendDeprecation: `Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      events: {
        close: `Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
        data: `Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
        networkChanged: `Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
        notification: `Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      },
      publicConfigStore:
        'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.',
    },
  };
function Kr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kr(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kr(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
class Xl extends ht {
  constructor(t) {
    super(),
      I(this, "_state", void 0),
      t === void 0 ? (this._state = {}) : (this._state = t);
  }
  getState() {
    return this._getState();
  }
  putState(t) {
    this._putState(t), this.emit("update", t);
  }
  updateState(t) {
    if (t && typeof t == "object") {
      const n = this.getState();
      this.putState(Gr(Gr({}, n), t));
    } else this.putState(t);
  }
  subscribe(t) {
    this.on("update", t);
  }
  unsubscribe(t) {
    this.removeListener("update", t);
  }
  _getState() {
    return this._state;
  }
  _putState(t) {
    this._state = t;
  }
}
class zl extends ct.Duplex {
  constructor(t) {
    super({ objectMode: !0 }),
      I(this, "handler", void 0),
      I(this, "obsStore", void 0),
      this.resume(),
      (this.handler = (n) => this.push(n)),
      (this.obsStore = t),
      this.obsStore.subscribe(this.handler);
  }
  pipe(t, n) {
    const r = super.pipe(t, n);
    return t.write(this.obsStore.getState()), r;
  }
  _write(t, n, r) {
    this.obsStore.putState(t), r();
  }
  _read(t) {}
  _destroy(t, n) {
    this.obsStore.unsubscribe(this.handler), super._destroy(t, n);
  }
}
function Zl(e) {
  return new zl(e);
}
function qr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qr(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qr(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
const { paymentProviders: Xr } = be,
  Jl = (e, t) => {
    const n = {};
    if (!e) return { errors: n, isValid: !0 };
    if (e && !Xr[e])
      return (
        (n.provider = "Invalid Provider"),
        { errors: n, isValid: Object.keys(n).length === 0 }
      );
    const r = Xr[e],
      i = t || {};
    if (i.fiatValue) {
      const s = +parseFloat(i.fiatValue.toString()) || 0;
      s < r.minOrderValue &&
        (n.fiatValue = "Requested amount is lower than supported"),
        s > r.maxOrderValue &&
          r.enforceMax &&
          (n.fiatValue = "Requested amount is higher than supported");
    }
    if (
      (i.selectedCurrency &&
        !r.validCurrencies.includes(i.selectedCurrency) &&
        (n.selectedCurrency = "Unsupported currency"),
      i.selectedCryptoCurrency)
    ) {
      const s = Object.values(r.validCryptoCurrenciesByChain)
          .flat()
          .map((c) => c.value),
        l =
          e === X.MOONPAY
            ? i.selectedCryptoCurrency.toLowerCase()
            : i.selectedCryptoCurrency;
      s &&
        !s.includes(l) &&
        (n.selectedCryptoCurrency = "Unsupported cryptoCurrency");
    }
    return { errors: n, isValid: Object.keys(n).length === 0 };
  };
function Ql() {
  return (e, t, n) => {
    (typeof e.method != "string" || !e.method) &&
      (t.error = ve.rpcErrors.invalidRequest({
        message: "The request 'method' must be a non-empty string.",
        data: Yr(
          Yr({}, e || {}),
          {},
          { cause: "The request 'method' must be a non-empty string." }
        ),
      })),
      n((r) => {
        const { error: i } = t;
        return i && B.error(`MetaMask - RPC Error: ${i.message}`, i), r();
      });
  };
}
function zr(e, t, n) {
  let r = `MetaMask: Lost connection to "${e}".`;
  t != null &&
    t.stack &&
    (r += `
${t.stack}`),
    B.warn(r),
    n && n.listenerCount("error") > 0 && n.emit("error", r);
}
const We = () => Math.random().toString(36).slice(2),
  eo = async (e, t) => {
    let n, r;
    const i = "2.2.9";
    let s = t.version || i;
    try {
      if ((e === "binance" || e === "production") && !t.version) {
        let l;
        be.prodTorusUrl
          ? (l = { data: be.prodTorusUrl })
          : (l = await ai(
              `${be.api}/latestversion?name=@toruslabs/torus-embed&version=${i}`,
              {},
              { useAPIKey: !0 }
            )),
          (s = l.data),
          (be.prodTorusUrl = l.data);
      }
    } catch (l) {
      B.error(l, "unable to fetch latest version");
    }
    switch ((B.info("version used: ", s), e)) {
      case "binance":
        (n = `https://binance.tor.us/v${s}`), (r = "info");
        break;
      case "testing":
        (n = "https://testing.tor.us"), (r = "debug");
        break;
      case "bnb":
        (n = "https://bnb.tor.us"), (r = "error");
        break;
      case "polygon":
        (n = "https://polygon.tor.us"), (r = "error");
        break;
      case "lrc":
        (n = "https://lrc.tor.us"), (r = "debug");
        break;
      case "beta":
        (n = "https://beta.tor.us"), (r = "debug");
        break;
      case "development":
        (n = "http://localhost:4050"), (r = "debug");
        break;
      case "alpha":
        (n = "https://alpha.tor.us"), (r = "debug");
        break;
      default:
        (n = `https://app.tor.us/v${s}`), (r = "error");
        break;
    }
    return { torusUrl: n, logLevel: r };
  },
  Zr = () => {
    let e = window.navigator.language || "en-US";
    const t = e.split("-");
    return (
      (e = Object.prototype.hasOwnProperty.call(be.translations, t[0])
        ? t[0]
        : "en"),
      e
    );
  },
  ed = ["eth_subscription"],
  to = () => {},
  Jr =
    "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375",
  td =
    "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315",
  Qr =
    "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
function nd() {
  const e = window.screenLeft !== void 0 ? window.screenLeft : window.screenX,
    t = window.screenTop !== void 0 ? window.screenTop : window.screenY,
    n = 1200,
    r = 700,
    i = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : window.screen.width,
    s = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : window.screen.height,
    l = 1,
    c = Math.abs((i - n) / 2 / l + e),
    h = Math.abs((s - r) / 2 / l + t);
  return `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${
    r / l
  },width=${n / l},top=${h},left=${c}`;
}
function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ei(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ei(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
ht.defaultMaxListeners = 100;
const ti = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return (r, i) =>
    r || i.error
      ? t(r || i.error)
      : !n || Array.isArray(i)
      ? e(i)
      : e(i.result);
};
class Wt extends ht {
  constructor(t) {
    let {
      maxEventListeners: n = 100,
      shouldSendMetadata: r = !0,
      jsonRpcStreamName: i = "provider",
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (
      (super(),
      I(this, "chainId", void 0),
      I(this, "selectedAddress", void 0),
      I(this, "_rpcEngine", void 0),
      I(this, "networkVersion", void 0),
      I(this, "shouldSendMetadata", void 0),
      I(this, "isTorus", void 0),
      I(this, "_publicConfigStore", void 0),
      I(this, "tryPreopenHandle", void 0),
      I(this, "enable", void 0),
      I(this, "_state", void 0),
      I(this, "_jsonRpcConnection", void 0),
      I(this, "_sentWarnings", {
        enable: !1,
        experimentalMethods: !1,
        send: !1,
        publicConfigStore: !1,
        events: { close: !1, data: !1, networkChanged: !1, notification: !1 },
      }),
      !mo.duplex(t))
    )
      throw new Error(oe.errors.invalidDuplexStream());
    (this.isTorus = !0),
      this.setMaxListeners(n),
      (this._state = Le({}, Wt._defaultState)),
      (this.selectedAddress = null),
      (this.networkVersion = null),
      (this.chainId = null),
      (this.shouldSendMetadata = r),
      (this._handleAccountsChanged = this._handleAccountsChanged.bind(this)),
      (this._handleChainChanged = this._handleChainChanged.bind(this)),
      (this._handleUnlockStateChanged =
        this._handleUnlockStateChanged.bind(this)),
      (this._handleConnect = this._handleConnect.bind(this)),
      (this._handleDisconnect = this._handleDisconnect.bind(this)),
      (this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this)),
      (this._sendSync = this._sendSync.bind(this)),
      (this._rpcRequest = this._rpcRequest.bind(this)),
      (this._warnOfDeprecation = this._warnOfDeprecation.bind(this)),
      (this._initializeState = this._initializeState.bind(this)),
      (this.request = this.request.bind(this)),
      (this.send = this.send.bind(this)),
      (this.sendAsync = this.sendAsync.bind(this));
    const s = new Qi();
    St(t, s, t, this._handleStreamDisconnect.bind(this, "MetaMask")),
      (this._publicConfigStore = new Xl({ storageKey: "Metamask-Config" })),
      St(
        s.createStream("publicConfig"),
        Zl(this._publicConfigStore),
        zr.bind(this, "MetaMask PublicConfigStore")
      ),
      s.ignoreStream("phishing"),
      this.on("connect", () => {
        this._state.isConnected = !0;
      });
    const l = Wl();
    St(
      l.stream,
      s.createStream(i),
      l.stream,
      this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")
    );
    const c = new Ae();
    c.push($l()),
      c.push(Ql()),
      c.push(l.middleware),
      (this._rpcEngine = c),
      l.events.on("notification", (h) => {
        const { method: p, params: f } = h;
        p === "wallet_accountsChanged"
          ? this._handleAccountsChanged(f)
          : p === "wallet_unlockStateChanged"
          ? this._handleUnlockStateChanged(f)
          : p === "wallet_chainChanged"
          ? this._handleChainChanged(f)
          : ed.includes(h.method) &&
            (this.emit("data", h),
            this.emit("notification", f.result),
            this.emit("message", { type: p, data: f }));
      });
  }
  get publicConfigStore() {
    return (
      this._sentWarnings.publicConfigStore ||
        (B.warn(oe.warnings.publicConfigStore),
        (this._sentWarnings.publicConfigStore = !0)),
      this._publicConfigStore
    );
  }
  isConnected() {
    return this._state.isConnected;
  }
  async request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw ve.rpcErrors.invalidRequest({
        message: oe.errors.invalidRequestArgs(),
        data: Le(
          Le({}, t || {}),
          {},
          { cause: oe.errors.invalidRequestArgs() }
        ),
      });
    const { method: n, params: r } = t;
    if (typeof n != "string" || n.length === 0)
      throw ve.rpcErrors.invalidRequest({
        message: oe.errors.invalidRequestMethod(),
        data: Le(
          Le({}, t || {}),
          {},
          { cause: oe.errors.invalidRequestArgs() }
        ),
      });
    if (
      r !== void 0 &&
      !Array.isArray(r) &&
      (typeof r != "object" || r === null)
    )
      throw ve.rpcErrors.invalidRequest({
        message: oe.errors.invalidRequestParams(),
        data: Le(
          Le({}, t || {}),
          {},
          { cause: oe.errors.invalidRequestArgs() }
        ),
      });
    return new Promise((i, s) => {
      this._rpcRequest({ method: n, params: r }, ti(i, s));
    });
  }
  sendAsync(t, n) {
    this._rpcRequest(t, n);
  }
  addListener(t, n) {
    return this._warnOfDeprecation(t), super.addListener(t, n);
  }
  on(t, n) {
    return this._warnOfDeprecation(t), super.on(t, n);
  }
  once(t, n) {
    return this._warnOfDeprecation(t), super.once(t, n);
  }
  prependListener(t, n) {
    return this._warnOfDeprecation(t), super.prependListener(t, n);
  }
  prependOnceListener(t, n) {
    return this._warnOfDeprecation(t), super.prependOnceListener(t, n);
  }
  async _initializeState() {
    try {
      const {
        accounts: t,
        chainId: n,
        isUnlocked: r,
        networkVersion: i,
      } = await this.request({ method: "wallet_getProviderState" });
      this.emit("connect", { chainId: n }),
        this._handleChainChanged({ chainId: n, networkVersion: i }),
        this._handleUnlockStateChanged({ accounts: t, isUnlocked: r }),
        this._handleAccountsChanged(t);
    } catch (t) {
      B.error(
        "MetaMask: Failed to get initial state. Please report this bug.",
        t
      );
    } finally {
      B.info("initialized state"),
        (this._state.initialized = !0),
        this.emit("_initialized");
    }
  }
  _rpcRequest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = n;
    const s = t;
    if (!Array.isArray(s)) {
      if (
        (s.jsonrpc || (s.jsonrpc = "2.0"),
        s.method === "eth_accounts" || s.method === "eth_requestAccounts")
      )
        i = (l, c) => {
          this._handleAccountsChanged(
            c.result || [],
            s.method === "eth_accounts",
            r
          ),
            n(l, c);
        };
      else if (s.method === "wallet_getProviderState") {
        this._rpcEngine.handle(t, i);
        return;
      }
    }
    this.tryPreopenHandle(s, i);
  }
  send(t, n) {
    return (
      this._sentWarnings.send ||
        (B.warn(oe.warnings.sendDeprecation), (this._sentWarnings.send = !0)),
      typeof t == "string" && (!n || Array.isArray(n))
        ? new Promise((r, i) => {
            try {
              this._rpcRequest({ method: t, params: n }, ti(r, i, !1));
            } catch (s) {
              i(s);
            }
          })
        : t && typeof t == "object" && typeof n == "function"
        ? this._rpcRequest(t, n)
        : this._sendSync(t)
    );
  }
  _sendSync(t) {
    let n;
    switch (t.method) {
      case "eth_accounts":
        n = this.selectedAddress ? [this.selectedAddress] : [];
        break;
      case "eth_coinbase":
        n = this.selectedAddress || null;
        break;
      case "eth_uninstallFilter":
        this._rpcRequest(t, to), (n = !0);
        break;
      case "net_version":
        n = this.networkVersion || null;
        break;
      default:
        throw new Error(oe.errors.unsupportedSync(t.method));
    }
    return { id: t.id, jsonrpc: t.jsonrpc, result: n };
  }
  _handleConnect(t) {
    this._state.isConnected ||
      ((this._state.isConnected = !0),
      this.emit("connect", { chainId: t }),
      B.debug(oe.info.connected(t)));
  }
  _handleDisconnect(t, n) {
    if (
      this._state.isConnected ||
      (!this._state.isPermanentlyDisconnected && !t)
    ) {
      this._state.isConnected = !1;
      let r;
      t
        ? ((r = new ve.EthereumProviderError(
            1013,
            n || oe.errors.disconnected()
          )),
          B.debug(r))
        : ((r = new ve.EthereumProviderError(
            1011,
            n || oe.errors.permanentlyDisconnected()
          )),
          B.error(r),
          (this.chainId = null),
          (this._state.accounts = null),
          (this.selectedAddress = null),
          (this._state.isUnlocked = !1),
          (this._state.isPermanentlyDisconnected = !0)),
        this.emit("disconnect", r);
    }
  }
  _handleStreamDisconnect(t, n) {
    zr(t, n, this), this._handleDisconnect(!1, n ? n.message : void 0);
  }
  _handleAccountsChanged(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = t;
    Array.isArray(i) ||
      (B.error(
        "MetaMask: Received non-array accounts parameter. Please report this bug.",
        i
      ),
      (i = []));
    for (const s of t)
      if (typeof s != "string") {
        B.error(
          "MetaMask: Received non-string account. Please report this bug.",
          t
        ),
          (i = []);
        break;
      }
    So(this._state.accounts, i) ||
      (n &&
        Array.isArray(this._state.accounts) &&
        this._state.accounts.length > 0 &&
        !r &&
        B.error(
          'MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.',
          i
        ),
      (this._state.accounts = i),
      this.emit("accountsChanged", i)),
      this.selectedAddress !== i[0] && (this.selectedAddress = i[0] || null);
  }
  _handleChainChanged() {
    let { chainId: t, networkVersion: n } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!t || !n) {
      B.error(
        "MetaMask: Received invalid network parameters. Please report this bug.",
        { chainId: t, networkVersion: n }
      );
      return;
    }
    n === "loading"
      ? this._handleDisconnect(!0)
      : (this._handleConnect(t),
        t !== this.chainId &&
          ((this.chainId = t),
          this._state.initialized && this.emit("chainChanged", this.chainId)));
  }
  _handleUnlockStateChanged() {
    let { accounts: t, isUnlocked: n } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof n != "boolean") {
      B.error(
        "MetaMask: Received invalid isUnlocked parameter. Please report this bug.",
        { isUnlocked: n }
      );
      return;
    }
    n !== this._state.isUnlocked &&
      ((this._state.isUnlocked = n), this._handleAccountsChanged(t || []));
  }
  _warnOfDeprecation(t) {
    this._sentWarnings.events[t] === !1 &&
      (B.warn(oe.warnings.events[t]), (this._sentWarnings.events[t] = !0));
  }
}
I(Wt, "_defaultState", {
  accounts: null,
  isConnected: !1,
  isUnlocked: !1,
  initialized: !1,
  isPermanentlyDisconnected: !1,
  hasEmittedConnection: !1,
});
class ni extends Qe.EventEmitter {
  constructor(t) {
    let { url: n, target: r, features: i } = t;
    super(),
      I(this, "url", void 0),
      I(this, "target", void 0),
      I(this, "features", void 0),
      I(this, "window", void 0),
      I(this, "windowTimer", void 0),
      I(this, "iClosedWindow", void 0),
      (this.url = n),
      (this.target = r || "_blank"),
      (this.features = i || nd()),
      (this.window = void 0),
      (this.windowTimer = void 0),
      (this.iClosedWindow = !1),
      this._setupTimer();
  }
  _setupTimer() {
    this.windowTimer = Number(
      setInterval(() => {
        this.window &&
          this.window.closed &&
          (clearInterval(this.windowTimer),
          this.iClosedWindow || this.emit("close"),
          (this.iClosedWindow = !1),
          (this.window = void 0)),
          this.window === void 0 && clearInterval(this.windowTimer);
      }, 500)
    );
  }
  open() {
    var t;
    (this.window = window.open(this.url.href, this.target, this.features)),
      (t = this.window) !== null &&
        t !== void 0 &&
        t.focus &&
        this.window.focus();
  }
  close() {
    (this.iClosedWindow = !0), this.window && this.window.close();
  }
  redirect(t) {
    t
      ? window.location.replace(this.url.href)
      : (window.location.href = this.url.href);
  }
}
function ri(e) {
  return new Promise((t, n) => {
    try {
      const r = document.createElement("img");
      (r.onload = () => t(!0)), (r.onerror = () => t(!1)), (r.src = e);
    } catch (r) {
      n(r);
    }
  });
}
const rd = (e) => {
  const { document: t } = e,
    n = t.querySelector('head > meta[property="og:site_name"]');
  if (n) return n.content;
  const r = t.querySelector('head > meta[name="title"]');
  return r
    ? r.content
    : t.title && t.title.length > 0
    ? t.title
    : e.location.hostname;
};
async function id(e) {
  const { document: t } = e;
  let n = t.querySelector('head > link[rel="shortcut icon"]');
  return (n && (await ri(n.href))) ||
    ((n = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find(
      (r) => !!r.href
    )),
    n && (await ri(n.href)))
    ? n.href
    : null;
}
const od = async () => ({ name: rd(window), icon: await id(window) });
async function sd(e) {
  try {
    const t = await od();
    e.handle(
      {
        jsonrpc: "2.0",
        id: We(),
        method: "wallet_sendDomainMetadata",
        params: t,
      },
      to
    );
  } catch (t) {
    B.error({ message: oe.errors.sendSiteMetadata(), originalError: t });
  }
}
const ad = ["host", "chainId", "networkName"];
function ii(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ld(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ii(Object(n), !0).forEach(function (r) {
          I(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ii(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
const dd = [
  "eth_sendTransaction",
  "eth_signTypedData",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  "eth_getEncryptionPublicKey",
  "eth_decrypt",
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
];
(async function () {
  try {
    if (typeof document > "u") return;
    const t = document.createElement("link"),
      { torusUrl: n } = await eo("production", { version: "" });
    (t.href = `${n}/popup`),
      (t.crossOrigin = "anonymous"),
      (t.type = "text/html"),
      (t.rel = "prefetch"),
      t.relList &&
        t.relList.supports &&
        t.relList.supports("prefetch") &&
        document.head.appendChild(t);
  } catch (t) {
    B.warn(t);
  }
})();
class bd {
  constructor() {
    let {
      buttonPosition: t = Xe.BOTTOM_LEFT,
      buttonSize: n = 56,
      modalZIndex: r = 99999,
      apiKey: i = "torus-default",
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    I(this, "buttonPosition", Xe.BOTTOM_LEFT),
      I(this, "buttonSize", void 0),
      I(this, "torusUrl", void 0),
      I(this, "torusIframe", void 0),
      I(this, "styleLink", void 0),
      I(this, "isLoggedIn", void 0),
      I(this, "isInitialized", void 0),
      I(this, "torusWidgetVisibility", void 0),
      I(this, "torusAlert", void 0),
      I(this, "apiKey", void 0),
      I(this, "modalZIndex", void 0),
      I(this, "alertZIndex", void 0),
      I(this, "torusAlertContainer", void 0),
      I(this, "isIframeFullScreen", void 0),
      I(this, "whiteLabel", void 0),
      I(this, "requestedVerifier", void 0),
      I(this, "currentVerifier", void 0),
      I(this, "embedTranslations", void 0),
      I(this, "ethereum", void 0),
      I(this, "provider", void 0),
      I(this, "communicationMux", void 0),
      I(this, "isLoginCallback", void 0),
      I(this, "paymentProviders", be.paymentProviders),
      I(this, "loginHint", ""),
      I(this, "useWalletConnect", void 0),
      I(this, "isCustomLogin", !1),
      (this.buttonPosition = t),
      (this.buttonSize = n),
      (this.torusUrl = ""),
      (this.isLoggedIn = !1),
      (this.isInitialized = !1),
      (this.torusWidgetVisibility = !0),
      (this.requestedVerifier = ""),
      (this.currentVerifier = ""),
      (this.apiKey = i),
      To(i),
      (this.modalZIndex = r),
      (this.alertZIndex = r + 1e3),
      (this.isIframeFullScreen = !1);
  }
  async init() {
    let {
      buildEnv: t = Fl.PRODUCTION,
      enableLogging: n = !1,
      network: r = {
        host: "mainnet",
        chainId: null,
        networkName: "",
        blockExplorer: "",
        ticker: "",
        tickerName: "",
      },
      loginConfig: i = {},
      showTorusButton: s = !0,
      integrity: l = { version: "" },
      whiteLabel: c,
      useWalletConnect: h = !1,
      mfaLevel: p = "default",
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this.isInitialized) throw new Error("Already initialized");
    const { torusUrl: f, logLevel: S } = await eo(t, l);
    B.info(f, "url loaded"),
      (this.torusUrl = f),
      (this.whiteLabel = c),
      (this.useWalletConnect = h),
      (this.isCustomLogin =
        !!(i && Object.keys(i).length > 0) ||
        !!(c && Object.keys(c).length > 0)),
      B.setDefaultLevel(S),
      n ? B.enableAll() : B.disableAll(),
      (this.torusWidgetVisibility = s);
    const g = new URL(f);
    g.pathname.endsWith("/")
      ? (g.pathname += "popup")
      : (g.pathname += "/popup"),
      (g.hash = `#isCustomLogin=${this.isCustomLogin}`),
      (this.torusIframe = st(`<iframe
        id="torusIframe"
        allow=${h ? "camera" : ""}
        class="torusIframe"
        src="${g.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%; color-scheme: none;
        height: 100%; border: none; border-radius: 0; z-index: ${
          this.modalZIndex
        }"
      ></iframe>`)),
      (this.torusAlertContainer = st('<div id="torusAlertContainer"></div>')),
      (this.torusAlertContainer.style.display = "none"),
      this.torusAlertContainer.style.setProperty(
        "z-index",
        this.alertZIndex.toString()
      );
    const b = window.document.createElement("link");
    b.setAttribute("rel", "stylesheet"),
      b.setAttribute("type", "text/css"),
      b.setAttribute("href", `${f}/css/widget.css`),
      (this.styleLink = b);
    const { defaultLanguage: A = Zr(), customTranslations: y = {} } =
        this.whiteLabel || {},
      O = oi(be.translations, y)[A] || be.translations[Zr()];
    return (
      (this.embedTranslations = O.embed),
      new Promise((P, w) => {
        (this.torusIframe.onload = async () => {
          this._setupWeb3();
          const x = this.communicationMux.getStream("init_stream");
          x.on("data", (L) => {
            const { name: q, data: ae, error: j } = L;
            q === "init_complete" && ae.success
              ? ((this.isInitialized = !0),
                this._displayIframe(this.isIframeFullScreen),
                P(void 0))
              : j && w(new Error(j));
          }),
            x.write({
              name: "init_stream",
              data: {
                loginConfig: i,
                whiteLabel: this.whiteLabel,
                buttonPosition: this.buttonPosition,
                buttonSize: this.buttonSize,
                torusWidgetVisibility: this.torusWidgetVisibility,
                apiKey: this.apiKey,
                network: r,
                mfaLevel: p,
              },
            });
        }),
          window.document.head.appendChild(this.styleLink),
          window.document.body.appendChild(this.torusIframe),
          window.document.body.appendChild(this.torusAlertContainer);
      })
    );
  }
  login() {
    let { verifier: t = "", login_hint: n = "" } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.isInitialized) throw new Error("Call init() first");
    return (
      (this.requestedVerifier = t), (this.loginHint = n), this.ethereum.enable()
    );
  }
  logout() {
    return new Promise((t, n) => {
      if (!this.isLoggedIn) {
        n(new Error("User has not logged in yet"));
        return;
      }
      this.communicationMux.getStream("logout").write({ name: "logOut" });
      const i = this.communicationMux.getStream("status");
      pe(i, "data", (l) => {
        l.loggedIn
          ? n(new Error("Some Error Occured"))
          : ((this.isLoggedIn = !1),
            (this.currentVerifier = ""),
            (this.requestedVerifier = ""),
            t());
      });
    });
  }
  async cleanUp() {
    this.isLoggedIn && (await this.logout()), this.clearInit();
  }
  clearInit() {
    function t(n) {
      return n instanceof Element || n instanceof HTMLDocument;
    }
    t(this.styleLink) &&
      window.document.body.contains(this.styleLink) &&
      (this.styleLink.remove(), (this.styleLink = void 0)),
      t(this.torusIframe) &&
        window.document.body.contains(this.torusIframe) &&
        (this.torusIframe.remove(), (this.torusIframe = void 0)),
      t(this.torusAlertContainer) &&
        window.document.body.contains(this.torusAlertContainer) &&
        ((this.torusAlert = void 0),
        this.torusAlertContainer.remove(),
        (this.torusAlertContainer = void 0)),
      (this.isInitialized = !1);
  }
  hideTorusButton() {
    (this.torusWidgetVisibility = !1),
      this._sendWidgetVisibilityStatus(!1),
      this._displayIframe();
  }
  showTorusButton() {
    (this.torusWidgetVisibility = !0),
      this._sendWidgetVisibilityStatus(!0),
      this._displayIframe();
  }
  setProvider(t) {
    let { host: n = "mainnet", chainId: r = null, networkName: i = "" } = t,
      s = Eo(t, ad);
    return new Promise((l, c) => {
      const h = this.communicationMux.getStream("provider_change");
      pe(h, "data", (S) => {
        const { err: g, success: b } = S.data;
        B.info(S), g ? c(g) : b ? l() : c(new Error("some error occurred"));
      });
      const f = We();
      this._handleWindow(f, { target: "_blank", features: Jr }),
        h.write({
          name: "show_provider_change",
          data: {
            network: ld({ host: n, chainId: r, networkName: i }, s),
            preopenInstanceId: f,
            override: !1,
          },
        });
    });
  }
  showWallet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.communicationMux.getStream("show_wallet"),
      i = t ? `/${t}` : "";
    r.write({ name: "show_wallet", data: { path: i } }),
      pe(r, "data", (l) => {
        if (l.name === "show_wallet_instance") {
          const { instanceId: c } = l.data,
            h = new URL(`${this.torusUrl}/wallet${i}`);
          h.searchParams.append("integrity", "true"),
            h.searchParams.append("instanceId", c),
            Object.keys(n).forEach((f) => {
              h.searchParams.append(f, n[f]);
            }),
            (h.hash = `#isCustomLogin=${this.isCustomLogin}`),
            new ni({ url: h, features: td }).open();
        }
      });
  }
  async getPublicAddress(t) {
    let { verifier: n, verifierId: r, isExtended: i = !1 } = t;
    if (!be.supportedVerifierList.includes(n) || !Vr[n])
      throw new Error("Unsupported verifier");
    const s = n,
      l = Vr[n],
      c = new URL("https://api.tor.us/lookup/torus");
    return (
      c.searchParams.append("verifier", l),
      c.searchParams.append("verifierId", r),
      c.searchParams.append("walletVerifier", s),
      c.searchParams.append("network", "mainnet"),
      c.searchParams.append("isExtended", i.toString()),
      ai(
        c.href,
        { headers: { "Content-Type": "application/json; charset=utf-8" } },
        { useAPIKey: !0 }
      )
    );
  }
  getUserInfo(t) {
    return new Promise((n, r) => {
      if (this.isLoggedIn) {
        const i = this.communicationMux.getStream("user_info_access");
        i.write({ name: "user_info_access_request" }),
          pe(i, "data", (l) => {
            const {
              name: c,
              data: { approved: h, payload: p, rejected: f, newRequest: S },
            } = l;
            if (c === "user_info_access_response") {
              if (h) n(p);
              else if (f) r(new Error("User rejected the request"));
              else if (S) {
                const g = this.communicationMux.getStream("user_info");
                pe(g, "data", (y) => {
                  y.name === "user_info_response" &&
                    (y.data.approved
                      ? n(y.data.payload)
                      : r(new Error("User rejected the request")));
                });
                const A = We();
                this._handleWindow(A, { target: "_blank", features: Jr }),
                  g.write({
                    name: "user_info_request",
                    data: { message: t, preopenInstanceId: A },
                  });
              }
            }
          });
      } else r(new Error("User has not logged in yet"));
    });
  }
  initiateTopup(t, n) {
    return new Promise((r, i) => {
      if (this.isInitialized) {
        const { errors: s, isValid: l } = Jl(t, n);
        if (!l) {
          i(new Error(JSON.stringify(s)));
          return;
        }
        const c = this.communicationMux.getStream("topup");
        pe(c, "data", (f) => {
          f.name === "topup_response" &&
            (f.data.success ? r(f.data.success) : i(new Error(f.data.error)));
        });
        const p = We();
        this._handleWindow(p),
          c.write({
            name: "topup_request",
            data: { provider: t, params: n, preopenInstanceId: p },
          });
      } else i(new Error("Torus is not initialized yet"));
    });
  }
  async loginWithPrivateKey(t) {
    const { privateKey: n, userInfo: r } = t;
    return new Promise((i, s) => {
      if (this.isInitialized) {
        if (bo.from(n, "hex").length !== 32) {
          s(
            new Error(
              "Invalid private key, Please provide a 32 byte valid secp25k1 private key"
            )
          );
          return;
        }
        const l = this.communicationMux.getStream("login_with_private_key");
        pe(l, "data", (h) => {
          h.name === "login_with_private_key_response" &&
            (h.data.success ? i(h.data.success) : s(new Error(h.data.error)));
        }),
          l.write({
            name: "login_with_private_key_request",
            data: { privateKey: n, userInfo: r },
          });
      } else s(new Error("Torus is not initialized yet"));
    });
  }
  async showWalletConnectScanner() {
    if (!this.useWalletConnect)
      throw new Error(
        "Set `useWalletConnect` as true in init function options to use wallet connect scanner"
      );
    return new Promise((t, n) => {
      if (this.isLoggedIn) {
        const r = this.communicationMux.getStream("wallet_connect_stream");
        pe(r, "data", (s) => {
          s.name === "wallet_connect_stream_res" &&
            (s.data.success ? t(s.data.success) : n(new Error(s.data.error)),
            this._displayIframe());
        }),
          r.write({ name: "wallet_connect_stream_req" }),
          this._displayIframe(!0);
      } else n(new Error("User has not logged in yet"));
    });
  }
  _handleWindow(t) {
    let {
      url: n,
      target: r,
      features: i,
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t) {
      const s = this.communicationMux.getStream("window"),
        l = new URL(n || `${this.torusUrl}/redirect?preopenInstanceId=${t}`);
      l.hash
        ? (l.hash += `&isCustomLogin=${this.isCustomLogin}`)
        : (l.hash = `#isCustomLogin=${this.isCustomLogin}`);
      const c = new ni({ url: l, target: r, features: i });
      if ((c.open(), !c.window)) {
        this._createPopupBlockAlert(t, l.href);
        return;
      }
      s.write({ name: "opened_window", data: { preopenInstanceId: t } });
      const h = (p) => {
        let { preopenInstanceId: f, close: S } = p;
        f === t && S && (c.close(), s.removeListener("data", h));
      };
      s.on("data", h),
        c.once("close", () => {
          s.write({ data: { preopenInstanceId: t, closed: !0 } }),
            s.removeListener("data", h);
        });
    }
  }
  _setEmbedWhiteLabel(t) {
    const { theme: n } = this.whiteLabel || {};
    if (n) {
      const { isDark: r = !1, colors: i = {} } = n;
      r && t.classList.add("torus-dark"),
        i.torusBrand1 && t.style.setProperty("--torus-brand-1", i.torusBrand1),
        i.torusGray2 && t.style.setProperty("--torus-gray-2", i.torusGray2);
    }
  }
  _getLogoUrl() {
    var t, n;
    let r = `${this.torusUrl}/images/torus_icon-blue.svg`;
    if (
      (t = this.whiteLabel) !== null &&
      t !== void 0 &&
      (n = t.theme) !== null &&
      n !== void 0 &&
      n.isDark
    ) {
      var i;
      r =
        ((i = this.whiteLabel) === null || i === void 0
          ? void 0
          : i.logoLight) || r;
    } else {
      var s;
      r =
        ((s = this.whiteLabel) === null || s === void 0
          ? void 0
          : s.logoDark) || r;
    }
    return r;
  }
  _sendWidgetVisibilityStatus(t) {
    this.communicationMux
      .getStream("torus-widget-visibility")
      .write({ data: t });
  }
  _displayIframe() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const n = {},
      r = this.buttonSize + 14;
    if (t)
      (n.display = "block"),
        (n.width = "100%"),
        (n.height = "100%"),
        (n.top = "0px"),
        (n.right = "0px"),
        (n.left = "0px"),
        (n.bottom = "0px");
    else
      switch (
        ((n.display = this.torusWidgetVisibility ? "block" : "none"),
        (n.height = `${r}px`),
        (n.width = `${r}px`),
        this.buttonPosition)
      ) {
        case Xe.TOP_LEFT:
          (n.top = "0px"),
            (n.left = "0px"),
            (n.right = "auto"),
            (n.bottom = "auto");
          break;
        case Xe.TOP_RIGHT:
          (n.top = "0px"),
            (n.right = "0px"),
            (n.left = "auto"),
            (n.bottom = "auto");
          break;
        case Xe.BOTTOM_RIGHT:
          (n.bottom = "0px"),
            (n.right = "0px"),
            (n.top = "auto"),
            (n.left = "auto");
          break;
        case Xe.BOTTOM_LEFT:
        default:
          (n.bottom = "0px"),
            (n.left = "0px"),
            (n.top = "auto"),
            (n.right = "auto");
          break;
      }
    Object.assign(this.torusIframe.style, n), (this.isIframeFullScreen = t);
  }
  _setupWeb3() {
    B.info("setupWeb3 running");
    const t = new $r({
        name: "embed_metamask",
        target: "iframe_metamask",
        targetWindow: this.torusIframe.contentWindow,
        targetOrigin: new URL(this.torusUrl).origin,
      }),
      n = new $r({
        name: "embed_comm",
        target: "iframe_comm",
        targetWindow: this.torusIframe.contentWindow,
        targetOrigin: new URL(this.torusUrl).origin,
      }),
      r = new Wt(t),
      i = (f) => {
        const S = r[f];
        r[f] = function (b) {
          if (b && b === "eth_requestAccounts") return r.enable();
          for (
            var A = arguments.length, y = new Array(A > 1 ? A - 1 : 0), E = 1;
            E < A;
            E++
          )
            y[E - 1] = arguments[E];
          return S.apply(this, [b, ...y]);
        };
      };
    i("send"),
      i("sendAsync"),
      (r.enable = () =>
        new Promise((f, S) => {
          r.sendAsync(
            {
              jsonrpc: "2.0",
              id: We(),
              method: "eth_requestAccounts",
              params: [],
            },
            (g, b) => {
              const { result: A } = b || {};
              if (g)
                setTimeout(() => {
                  S(g);
                }, 50);
              else if (Array.isArray(A) && A.length > 0) {
                const y = () => {
                  if (
                    this.requestedVerifier !== "" &&
                    this.currentVerifier !== this.requestedVerifier
                  ) {
                    const { requestedVerifier: E } = this;
                    this.logout()
                      .then((O) => {
                        (this.requestedVerifier = E),
                          this._showLoginPopup(!0, f, S);
                      })
                      .catch((O) => S(O));
                  } else f(A);
                };
                this.isLoggedIn ? y() : (this.isLoginCallback = y);
              } else this._showLoginPopup(!0, f, S);
            }
          );
        })),
      (r.tryPreopenHandle = (f, S) => {
        const g = f;
        if (!Array.isArray(g) && dd.includes(g.method)) {
          const b = We();
          this._handleWindow(b, { target: "_blank", features: Qr }),
            (g.preopenInstanceId = b);
        }
        r._rpcEngine.handle(g, S);
      });
    const s = new Proxy(r, { deleteProperty: () => !0 });
    this.ethereum = s;
    const l = Hl(n);
    (this.communicationMux = l),
      l.getStream("window").on("data", (f) => {
        f.name === "create_window" &&
          this._createPopupBlockAlert(f.data.preopenInstanceId, f.data.url);
      }),
      l.getStream("widget").on("data", (f) => {
        const { data: S } = f;
        this._displayIframe(S);
      }),
      l.getStream("status").on("data", (f) => {
        f.loggedIn
          ? ((this.isLoggedIn = f.loggedIn),
            (this.currentVerifier = f.verifier))
          : this._displayIframe(),
          this.isLoginCallback &&
            (this.isLoginCallback(), delete this.isLoginCallback);
      }),
      (this.provider = s),
      this.provider.shouldSendMetadata && sd(this.provider._rpcEngine),
      r._initializeState(),
      B.debug("Torus - injected provider");
  }
  _showLoginPopup(t, n, r) {
    const i = (l) => {
        const { err: c, selectedAddress: h } = l;
        c ? (B.error(c), r && r(c)) : n && n([h]),
          this.isIframeFullScreen && this._displayIframe();
      },
      s = this.communicationMux.getStream("oauth");
    if (!this.requestedVerifier)
      this._displayIframe(!0),
        pe(s, "data", i),
        s.write({ name: "oauth_modal", data: { calledFromEmbed: t } });
    else {
      pe(s, "data", i);
      const l = We();
      this._handleWindow(l),
        s.write({
          name: "oauth",
          data: {
            calledFromEmbed: t,
            verifier: this.requestedVerifier,
            preopenInstanceId: l,
            login_hint: this.loginHint,
          },
        });
    }
  }
  _createPopupBlockAlert(t, n) {
    const r = this._getLogoUrl(),
      i = st(
        `<div id="torusAlert" class="torus-alert--v2"><div id="torusAlert__logo"><img src="${r}" /></div><div><h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1><p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p></div></div>`
      ),
      s = st(
        `<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`
      ),
      l = st('<div id="torusAlert__btn-container"></div>');
    l.appendChild(s),
      i.appendChild(l),
      this._setEmbedWhiteLabel(i),
      (this.torusAlertContainer.style.display = "block"),
      this.torusAlertContainer.appendChild(i),
      s.addEventListener("click", () => {
        this._handleWindow(t, { url: n, target: "_blank", features: Qr }),
          i.remove(),
          this.torusAlertContainer.children.length === 0 &&
            (this.torusAlertContainer.style.display = "none");
      });
  }
}
export {
  Xe as BUTTON_POSITION,
  X as PAYMENT_PROVIDER,
  $ as SUPPORTED_PAYMENT_NETWORK,
  Fl as TORUS_BUILD_ENV,
  Wt as TorusInpageProvider,
  Vr as WALLET_OPENLOGIN_VERIFIER_MAP,
  Ue as WALLET_VERIFIERS,
  bd as default,
};
