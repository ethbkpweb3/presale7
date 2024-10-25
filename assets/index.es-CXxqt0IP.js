const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BurEAbzY.js",
      "assets/index-CpP-AC1q.js",
      "assets/index-CFpBmM1l.css",
    ])
) => i.map((i) => d[i]);
import {
  bY as Pn,
  bZ as Cu,
  b_ as Tu,
  bB as rr,
  bA as mh,
  bC as wh,
  bk as Ru,
  by as Ht,
  b$ as _h,
  c0 as Sa,
  c1 as Ia,
  c2 as Re,
  ap as Kt,
  c3 as $u,
  ak as xa,
  c4 as Nu,
  aq as Fu,
} from "./index-CpP-AC1q.js";
import { e as Gt, i as Da } from "./events-sPNiP9gX.js";
import { c as qu } from "./_commonjs-dynamic-modules-TDtrdbi3.js";
const Lu = `Ethereum Signed Message:
`;
function Eh(r) {
  return (
    typeof r == "string" && (r = Pn(r)),
    Cu(Tu([Pn(Lu), Pn(String(r.length)), r]))
  );
}
var co = function (r, e, t) {
    if (t || arguments.length === 2)
      for (var i = 0, s = e.length, n; i < s; i++)
        (n || !(i in e)) &&
          (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
    return r.concat(n || Array.prototype.slice.call(e));
  },
  Uu = (function () {
    function r(e, t, i) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.type = "browser");
    }
    return r;
  })(),
  ju = (function () {
    function r(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = rr.platform);
    }
    return r;
  })(),
  zu = (function () {
    function r(e, t, i, s) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.bot = s),
        (this.type = "bot-device");
    }
    return r;
  })(),
  Bu = (function () {
    function r() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return r;
  })(),
  ku = (function () {
    function r() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return r;
  })(),
  Hu =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Ku =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  ho = 3,
  Vu = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Hu],
  ],
  fo = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Gu(r) {
  return typeof document > "u" &&
    typeof navigator < "u" &&
    navigator.product === "ReactNative"
    ? new ku()
    : typeof navigator < "u"
    ? Ju(navigator.userAgent)
    : Xu();
}
function Wu(r) {
  return (
    r !== "" &&
    Vu.reduce(function (e, t) {
      var i = t[0],
        s = t[1];
      if (e) return e;
      var n = s.exec(r);
      return !!n && [i, n];
    }, !1)
  );
}
function Ju(r) {
  var e = Wu(r);
  if (!e) return null;
  var t = e[0],
    i = e[1];
  if (t === "searchbot") return new Bu();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s
    ? s.length < ho && (s = co(co([], s, !0), Qu(ho - s.length), !0))
    : (s = []);
  var n = s.join("."),
    a = Yu(r),
    o = Ku.exec(r);
  return o && o[1] ? new zu(t, n, a, o[1]) : new Uu(t, n, a);
}
function Yu(r) {
  for (var e = 0, t = fo.length; e < t; e++) {
    var i = fo[e],
      s = i[0],
      n = i[1],
      a = n.exec(r);
    if (a) return s;
  }
  return null;
}
function Xu() {
  var r = typeof rr < "u" && rr.version;
  return r ? new ju(rr.version.slice(1)) : null;
}
function Qu(r) {
  for (var e = [], t = 0; t < r; t++) e.push("0");
  return e;
}
var Z = {};
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
***************************************************************************** */ var Qn =
  function (r, e) {
    return (
      (Qn =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, i) {
            t.__proto__ = i;
          }) ||
        function (t, i) {
          for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
        }),
      Qn(r, e)
    );
  };
function Zu(r, e) {
  Qn(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Zn = function () {
  return (
    (Zn =
      Object.assign ||
      function (e) {
        for (var t, i = 1, s = arguments.length; i < s; i++) {
          t = arguments[i];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    Zn.apply(this, arguments)
  );
};
function ed(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[s]) &&
        (t[i[s]] = r[i[s]]);
  return t;
}
function td(r, e, t, i) {
  var s = arguments.length,
    n =
      s < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(r, e, t, i);
  else
    for (var o = r.length - 1; o >= 0; o--)
      (a = r[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, t, n) : a(e, t)) || n);
  return s > 3 && n && Object.defineProperty(e, t, n), n;
}
function rd(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function id(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function sd(r, e, t, i) {
  function s(n) {
    return n instanceof t
      ? n
      : new t(function (a) {
          a(n);
        });
  }
  return new (t || (t = Promise))(function (n, a) {
    function o(g) {
      try {
        h(i.next(g));
      } catch (y) {
        a(y);
      }
    }
    function f(g) {
      try {
        h(i.throw(g));
      } catch (y) {
        a(y);
      }
    }
    function h(g) {
      g.done ? n(g.value) : s(g.value).then(o, f);
    }
    h((i = i.apply(r, e || [])).next());
  });
}
function nd(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    i,
    s,
    n,
    a;
  return (
    (a = { next: o(0), throw: o(1), return: o(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function o(h) {
    return function (g) {
      return f([h, g]);
    };
  }
  function f(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          s &&
            (n =
              h[0] & 2
                ? s.return
                : h[0]
                ? s.throw || ((n = s.return) && n.call(s), 0)
                : s.next) &&
            !(n = n.call(s, h[1])).done)
        )
          return n;
        switch (((s = 0), n && (h = [h[0] & 2, n.value]), h[0])) {
          case 0:
          case 1:
            n = h;
            break;
          case 4:
            return t.label++, { value: h[1], done: !1 };
          case 5:
            t.label++, (s = h[1]), (h = [0]);
            continue;
          case 7:
            (h = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((n = t.trys),
              !(n = n.length > 0 && n[n.length - 1]) &&
                (h[0] === 6 || h[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (h[0] === 3 && (!n || (h[1] > n[0] && h[1] < n[3]))) {
              t.label = h[1];
              break;
            }
            if (h[0] === 6 && t.label < n[1]) {
              (t.label = n[1]), (n = h);
              break;
            }
            if (n && t.label < n[2]) {
              (t.label = n[2]), t.ops.push(h);
              break;
            }
            n[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        h = e.call(r, t);
      } catch (g) {
        (h = [6, g]), (s = 0);
      } finally {
        i = n = 0;
      }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function ad(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function od(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function ea(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Sh(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    s,
    n = [],
    a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) n.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}
function cd() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(Sh(arguments[e]));
  return r;
}
function hd() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var n = arguments[e], a = 0, o = n.length; a < o; a++, s++)
      i[s] = n[a];
  return i;
}
function ts(r) {
  return this instanceof ts ? ((this.v = r), this) : new ts(r);
}
function fd(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    s,
    n = [];
  return (
    (s = {}),
    a("next"),
    a("throw"),
    a("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function a(E) {
    i[E] &&
      (s[E] = function (w) {
        return new Promise(function (S, $) {
          n.push([E, w, S, $]) > 1 || o(E, w);
        });
      });
  }
  function o(E, w) {
    try {
      f(i[E](w));
    } catch (S) {
      y(n[0][3], S);
    }
  }
  function f(E) {
    E.value instanceof ts
      ? Promise.resolve(E.value.v).then(h, g)
      : y(n[0][2], E);
  }
  function h(E) {
    o("next", E);
  }
  function g(E) {
    o("throw", E);
  }
  function y(E, w) {
    E(w), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function ud(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (s) {
      throw s;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(s, n) {
    e[s] = r[s]
      ? function (a) {
          return (t = !t)
            ? { value: ts(r[s](a)), done: s === "return" }
            : n
            ? n(a)
            : a;
        }
      : n;
  }
}
function dd(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof ea == "function" ? ea(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(n) {
    t[n] =
      r[n] &&
      function (a) {
        return new Promise(function (o, f) {
          (a = r[n](a)), s(o, f, a.done, a.value);
        });
      };
  }
  function s(n, a, o, f) {
    Promise.resolve(f).then(function (h) {
      n({ value: h, done: o });
    }, a);
  }
}
function ld(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function pd(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function gd(r) {
  return r && r.__esModule ? r : { default: r };
}
function bd(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function vd(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const yd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Zn;
        },
        __asyncDelegator: ud,
        __asyncGenerator: fd,
        __asyncValues: dd,
        __await: ts,
        __awaiter: sd,
        __classPrivateFieldGet: bd,
        __classPrivateFieldSet: vd,
        __createBinding: ad,
        __decorate: td,
        __exportStar: od,
        __extends: Zu,
        __generator: nd,
        __importDefault: gd,
        __importStar: pd,
        __makeTemplateObject: ld,
        __metadata: id,
        __param: rd,
        __read: Sh,
        __rest: ed,
        __spread: cd,
        __spreadArrays: hd,
        __values: ea,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rn = mh(yd);
var Mn = {},
  Bi = {},
  uo;
function md() {
  if (uo) return Bi;
  (uo = 1),
    Object.defineProperty(Bi, "__esModule", { value: !0 }),
    (Bi.delay = void 0);
  function r(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (Bi.delay = r), Bi;
}
var Ur = {},
  An = {},
  jr = {},
  lo;
function wd() {
  return (
    lo ||
      ((lo = 1),
      Object.defineProperty(jr, "__esModule", { value: !0 }),
      (jr.ONE_THOUSAND = jr.ONE_HUNDRED = void 0),
      (jr.ONE_HUNDRED = 100),
      (jr.ONE_THOUSAND = 1e3)),
    jr
  );
}
var On = {},
  po;
function _d() {
  return (
    po ||
      ((po = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.ONE_YEAR =
            r.FOUR_WEEKS =
            r.THREE_WEEKS =
            r.TWO_WEEKS =
            r.ONE_WEEK =
            r.THIRTY_DAYS =
            r.SEVEN_DAYS =
            r.FIVE_DAYS =
            r.THREE_DAYS =
            r.ONE_DAY =
            r.TWENTY_FOUR_HOURS =
            r.TWELVE_HOURS =
            r.SIX_HOURS =
            r.THREE_HOURS =
            r.ONE_HOUR =
            r.SIXTY_MINUTES =
            r.THIRTY_MINUTES =
            r.TEN_MINUTES =
            r.FIVE_MINUTES =
            r.ONE_MINUTE =
            r.SIXTY_SECONDS =
            r.THIRTY_SECONDS =
            r.TEN_SECONDS =
            r.FIVE_SECONDS =
            r.ONE_SECOND =
              void 0),
          (r.ONE_SECOND = 1),
          (r.FIVE_SECONDS = 5),
          (r.TEN_SECONDS = 10),
          (r.THIRTY_SECONDS = 30),
          (r.SIXTY_SECONDS = 60),
          (r.ONE_MINUTE = r.SIXTY_SECONDS),
          (r.FIVE_MINUTES = r.ONE_MINUTE * 5),
          (r.TEN_MINUTES = r.ONE_MINUTE * 10),
          (r.THIRTY_MINUTES = r.ONE_MINUTE * 30),
          (r.SIXTY_MINUTES = r.ONE_MINUTE * 60),
          (r.ONE_HOUR = r.SIXTY_MINUTES),
          (r.THREE_HOURS = r.ONE_HOUR * 3),
          (r.SIX_HOURS = r.ONE_HOUR * 6),
          (r.TWELVE_HOURS = r.ONE_HOUR * 12),
          (r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24),
          (r.ONE_DAY = r.TWENTY_FOUR_HOURS),
          (r.THREE_DAYS = r.ONE_DAY * 3),
          (r.FIVE_DAYS = r.ONE_DAY * 5),
          (r.SEVEN_DAYS = r.ONE_DAY * 7),
          (r.THIRTY_DAYS = r.ONE_DAY * 30),
          (r.ONE_WEEK = r.SEVEN_DAYS),
          (r.TWO_WEEKS = r.ONE_WEEK * 2),
          (r.THREE_WEEKS = r.ONE_WEEK * 3),
          (r.FOUR_WEEKS = r.ONE_WEEK * 4),
          (r.ONE_YEAR = r.ONE_DAY * 365);
      })(On)),
    On
  );
}
var go;
function Ih() {
  return (
    go ||
      ((go = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const e = rn;
        e.__exportStar(wd(), r), e.__exportStar(_d(), r);
      })(An)),
    An
  );
}
var bo;
function Ed() {
  if (bo) return Ur;
  (bo = 1),
    Object.defineProperty(Ur, "__esModule", { value: !0 }),
    (Ur.fromMiliseconds = Ur.toMiliseconds = void 0);
  const r = Ih();
  function e(i) {
    return i * r.ONE_THOUSAND;
  }
  Ur.toMiliseconds = e;
  function t(i) {
    return Math.floor(i / r.ONE_THOUSAND);
  }
  return (Ur.fromMiliseconds = t), Ur;
}
var vo;
function Sd() {
  return (
    vo ||
      ((vo = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const e = rn;
        e.__exportStar(md(), r), e.__exportStar(Ed(), r);
      })(Mn)),
    Mn
  );
}
var ai = {},
  yo;
function Id() {
  if (yo) return ai;
  (yo = 1),
    Object.defineProperty(ai, "__esModule", { value: !0 }),
    (ai.Watch = void 0);
  class r {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const i = this.get(t);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const s = Date.now() - i.started;
      this.timestamps.set(t, { started: i.started, elapsed: s });
    }
    get(t) {
      const i = this.timestamps.get(t);
      if (typeof i > "u") throw new Error(`No timestamp found for label: ${t}`);
      return i;
    }
    elapsed(t) {
      const i = this.get(t);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return (ai.Watch = r), (ai.default = r), ai;
}
var Cn = {},
  ki = {},
  mo;
function xd() {
  if (mo) return ki;
  (mo = 1),
    Object.defineProperty(ki, "__esModule", { value: !0 }),
    (ki.IWatch = void 0);
  class r {}
  return (ki.IWatch = r), ki;
}
var wo;
function Dd() {
  return (
    wo ||
      ((wo = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          rn.__exportStar(xd(), r);
      })(Cn)),
    Cn
  );
}
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = rn;
  e.__exportStar(Sd(), r),
    e.__exportStar(Id(), r),
    e.__exportStar(Dd(), r),
    e.__exportStar(Ih(), r);
})(Z);
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.getLocalStorage =
  Ge.getLocalStorageOrThrow =
  Ge.getCrypto =
  Ge.getCryptoOrThrow =
  xh =
  Ge.getLocation =
  Ge.getLocationOrThrow =
  Pa =
  Ge.getNavigator =
  Ge.getNavigatorOrThrow =
  sn =
  Ge.getDocument =
  Ge.getDocumentOrThrow =
  Ge.getFromWindowOrThrow =
  Ge.getFromWindow =
    void 0;
function Qr(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
Ge.getFromWindow = Qr;
function vi(r) {
  const e = Qr(r);
  if (!e) throw new Error(`${r} is not defined in Window`);
  return e;
}
Ge.getFromWindowOrThrow = vi;
function Pd() {
  return vi("document");
}
Ge.getDocumentOrThrow = Pd;
function Md() {
  return Qr("document");
}
var sn = (Ge.getDocument = Md);
function Ad() {
  return vi("navigator");
}
Ge.getNavigatorOrThrow = Ad;
function Od() {
  return Qr("navigator");
}
var Pa = (Ge.getNavigator = Od);
function Cd() {
  return vi("location");
}
Ge.getLocationOrThrow = Cd;
function Td() {
  return Qr("location");
}
var xh = (Ge.getLocation = Td);
function Rd() {
  return vi("crypto");
}
Ge.getCryptoOrThrow = Rd;
function $d() {
  return Qr("crypto");
}
Ge.getCrypto = $d;
function Nd() {
  return vi("localStorage");
}
Ge.getLocalStorageOrThrow = Nd;
function Fd() {
  return Qr("localStorage");
}
Ge.getLocalStorage = Fd;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
var Dh = (Ma.getWindowMetadata = void 0);
const _o = Ge;
function qd() {
  let r, e;
  try {
    (r = _o.getDocumentOrThrow()), (e = _o.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const y = r.getElementsByTagName("link"),
      E = [];
    for (let w = 0; w < y.length; w++) {
      const S = y[w],
        $ = S.getAttribute("rel");
      if ($ && $.toLowerCase().indexOf("icon") > -1) {
        const q = S.getAttribute("href");
        if (q)
          if (
            q.toLowerCase().indexOf("https:") === -1 &&
            q.toLowerCase().indexOf("http:") === -1 &&
            q.indexOf("//") !== 0
          ) {
            let z = e.protocol + "//" + e.host;
            if (q.indexOf("/") === 0) z += q;
            else {
              const C = e.pathname.split("/");
              C.pop();
              const L = C.join("/");
              z += L + "/" + q;
            }
            E.push(z);
          } else if (q.indexOf("//") === 0) {
            const z = e.protocol + q;
            E.push(z);
          } else E.push(q);
      }
    }
    return E;
  }
  function i(...y) {
    const E = r.getElementsByTagName("meta");
    for (let w = 0; w < E.length; w++) {
      const S = E[w],
        $ = ["itemprop", "property", "name"]
          .map((q) => S.getAttribute(q))
          .filter((q) => (q ? y.includes(q) : !1));
      if ($.length && $) {
        const q = S.getAttribute("content");
        if (q) return q;
      }
    }
    return "";
  }
  function s() {
    let y = i("name", "og:site_name", "og:title", "twitter:title");
    return y || (y = r.title), y;
  }
  function n() {
    return i(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const a = s(),
    o = n(),
    f = e.origin,
    h = t();
  return { description: o, url: f, icons: h, name: a };
}
Dh = Ma.getWindowMetadata = qd;
var rs = {},
  Ld = (r) =>
    encodeURIComponent(r).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  Ph = "%[a-f0-9]{2}",
  Eo = new RegExp("(" + Ph + ")|([^%]+?)", "gi"),
  So = new RegExp("(" + Ph + ")+", "gi");
function ta(r, e) {
  try {
    return [decodeURIComponent(r.join(""))];
  } catch {}
  if (r.length === 1) return r;
  e = e || 1;
  var t = r.slice(0, e),
    i = r.slice(e);
  return Array.prototype.concat.call([], ta(t), ta(i));
}
function Ud(r) {
  try {
    return decodeURIComponent(r);
  } catch {
    for (var e = r.match(Eo) || [], t = 1; t < e.length; t++)
      (r = ta(e, t).join("")), (e = r.match(Eo) || []);
    return r;
  }
}
function jd(r) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = So.exec(r); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var i = Ud(t[0]);
      i !== t[0] && (e[t[0]] = i);
    }
    t = So.exec(r);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), n = 0; n < s.length; n++) {
    var a = s[n];
    r = r.replace(new RegExp(a, "g"), e[a]);
  }
  return r;
}
var zd = function (r) {
    if (typeof r != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof r + "`"
      );
    try {
      return (r = r.replace(/\+/g, " ")), decodeURIComponent(r);
    } catch {
      return jd(r);
    }
  },
  Bd = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [r];
    const t = r.indexOf(e);
    return t === -1 ? [r] : [r.slice(0, t), r.slice(t + e.length)];
  },
  kd = function (r, e) {
    for (
      var t = {}, i = Object.keys(r), s = Array.isArray(e), n = 0;
      n < i.length;
      n++
    ) {
      var a = i[n],
        o = r[a];
      (s ? e.indexOf(a) !== -1 : e(a, o, r)) && (t[a] = o);
    }
    return t;
  };
(function (r) {
  const e = Ld,
    t = zd,
    i = Bd,
    s = kd,
    n = (C) => C == null,
    a = Symbol("encodeFragmentIdentifier");
  function o(C) {
    switch (C.arrayFormat) {
      case "index":
        return (L) => (A, T) => {
          const R = A.length;
          return T === void 0 ||
            (C.skipNull && T === null) ||
            (C.skipEmptyString && T === "")
            ? A
            : T === null
            ? [...A, [g(L, C), "[", R, "]"].join("")]
            : [...A, [g(L, C), "[", g(R, C), "]=", g(T, C)].join("")];
        };
      case "bracket":
        return (L) => (A, T) =>
          T === void 0 ||
          (C.skipNull && T === null) ||
          (C.skipEmptyString && T === "")
            ? A
            : T === null
            ? [...A, [g(L, C), "[]"].join("")]
            : [...A, [g(L, C), "[]=", g(T, C)].join("")];
      case "colon-list-separator":
        return (L) => (A, T) =>
          T === void 0 ||
          (C.skipNull && T === null) ||
          (C.skipEmptyString && T === "")
            ? A
            : T === null
            ? [...A, [g(L, C), ":list="].join("")]
            : [...A, [g(L, C), ":list=", g(T, C)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const L = C.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (A) => (T, R) =>
          R === void 0 ||
          (C.skipNull && R === null) ||
          (C.skipEmptyString && R === "")
            ? T
            : ((R = R === null ? "" : R),
              T.length === 0
                ? [[g(A, C), L, g(R, C)].join("")]
                : [[T, g(R, C)].join(C.arrayFormatSeparator)]);
      }
      default:
        return (L) => (A, T) =>
          T === void 0 ||
          (C.skipNull && T === null) ||
          (C.skipEmptyString && T === "")
            ? A
            : T === null
            ? [...A, g(L, C)]
            : [...A, [g(L, C), "=", g(T, C)].join("")];
    }
  }
  function f(C) {
    let L;
    switch (C.arrayFormat) {
      case "index":
        return (A, T, R) => {
          if (
            ((L = /\[(\d*)\]$/.exec(A)), (A = A.replace(/\[\d*\]$/, "")), !L)
          ) {
            R[A] = T;
            return;
          }
          R[A] === void 0 && (R[A] = {}), (R[A][L[1]] = T);
        };
      case "bracket":
        return (A, T, R) => {
          if (((L = /(\[\])$/.exec(A)), (A = A.replace(/\[\]$/, "")), !L)) {
            R[A] = T;
            return;
          }
          if (R[A] === void 0) {
            R[A] = [T];
            return;
          }
          R[A] = [].concat(R[A], T);
        };
      case "colon-list-separator":
        return (A, T, R) => {
          if (((L = /(:list)$/.exec(A)), (A = A.replace(/:list$/, "")), !L)) {
            R[A] = T;
            return;
          }
          if (R[A] === void 0) {
            R[A] = [T];
            return;
          }
          R[A] = [].concat(R[A], T);
        };
      case "comma":
      case "separator":
        return (A, T, R) => {
          const l = typeof T == "string" && T.includes(C.arrayFormatSeparator),
            P =
              typeof T == "string" &&
              !l &&
              y(T, C).includes(C.arrayFormatSeparator);
          T = P ? y(T, C) : T;
          const H =
            l || P
              ? T.split(C.arrayFormatSeparator).map((Y) => y(Y, C))
              : T === null
              ? T
              : y(T, C);
          R[A] = H;
        };
      case "bracket-separator":
        return (A, T, R) => {
          const l = /(\[\])$/.test(A);
          if (((A = A.replace(/\[\]$/, "")), !l)) {
            R[A] = T && y(T, C);
            return;
          }
          const P =
            T === null
              ? []
              : T.split(C.arrayFormatSeparator).map((H) => y(H, C));
          if (R[A] === void 0) {
            R[A] = P;
            return;
          }
          R[A] = [].concat(R[A], P);
        };
      default:
        return (A, T, R) => {
          if (R[A] === void 0) {
            R[A] = T;
            return;
          }
          R[A] = [].concat(R[A], T);
        };
    }
  }
  function h(C) {
    if (typeof C != "string" || C.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function g(C, L) {
    return L.encode ? (L.strict ? e(C) : encodeURIComponent(C)) : C;
  }
  function y(C, L) {
    return L.decode ? t(C) : C;
  }
  function E(C) {
    return Array.isArray(C)
      ? C.sort()
      : typeof C == "object"
      ? E(Object.keys(C))
          .sort((L, A) => Number(L) - Number(A))
          .map((L) => C[L])
      : C;
  }
  function w(C) {
    const L = C.indexOf("#");
    return L !== -1 && (C = C.slice(0, L)), C;
  }
  function S(C) {
    let L = "";
    const A = C.indexOf("#");
    return A !== -1 && (L = C.slice(A)), L;
  }
  function $(C) {
    C = w(C);
    const L = C.indexOf("?");
    return L === -1 ? "" : C.slice(L + 1);
  }
  function q(C, L) {
    return (
      L.parseNumbers &&
      !Number.isNaN(Number(C)) &&
      typeof C == "string" &&
      C.trim() !== ""
        ? (C = Number(C))
        : L.parseBooleans &&
          C !== null &&
          (C.toLowerCase() === "true" || C.toLowerCase() === "false") &&
          (C = C.toLowerCase() === "true"),
      C
    );
  }
  function z(C, L) {
    (L = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      L
    )),
      h(L.arrayFormatSeparator);
    const A = f(L),
      T = Object.create(null);
    if (typeof C != "string" || ((C = C.trim().replace(/^[?#&]/, "")), !C))
      return T;
    for (const R of C.split("&")) {
      if (R === "") continue;
      let [l, P] = i(L.decode ? R.replace(/\+/g, " ") : R, "=");
      (P =
        P === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(L.arrayFormat)
          ? P
          : y(P, L)),
        A(y(l, L), P, T);
    }
    for (const R of Object.keys(T)) {
      const l = T[R];
      if (typeof l == "object" && l !== null)
        for (const P of Object.keys(l)) l[P] = q(l[P], L);
      else T[R] = q(l, L);
    }
    return L.sort === !1
      ? T
      : (L.sort === !0
          ? Object.keys(T).sort()
          : Object.keys(T).sort(L.sort)
        ).reduce((R, l) => {
          const P = T[l];
          return (
            P && typeof P == "object" && !Array.isArray(P)
              ? (R[l] = E(P))
              : (R[l] = P),
            R
          );
        }, Object.create(null));
  }
  (r.extract = $),
    (r.parse = z),
    (r.stringify = (C, L) => {
      if (!C) return "";
      (L = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        L
      )),
        h(L.arrayFormatSeparator);
      const A = (P) =>
          (L.skipNull && n(C[P])) || (L.skipEmptyString && C[P] === ""),
        T = o(L),
        R = {};
      for (const P of Object.keys(C)) A(P) || (R[P] = C[P]);
      const l = Object.keys(R);
      return (
        L.sort !== !1 && l.sort(L.sort),
        l
          .map((P) => {
            const H = C[P];
            return H === void 0
              ? ""
              : H === null
              ? g(P, L)
              : Array.isArray(H)
              ? H.length === 0 && L.arrayFormat === "bracket-separator"
                ? g(P, L) + "[]"
                : H.reduce(T(P), []).join("&")
              : g(P, L) + "=" + g(H, L);
          })
          .filter((P) => P.length > 0)
          .join("&")
      );
    }),
    (r.parseUrl = (C, L) => {
      L = Object.assign({ decode: !0 }, L);
      const [A, T] = i(C, "#");
      return Object.assign(
        { url: A.split("?")[0] || "", query: z($(C), L) },
        L && L.parseFragmentIdentifier && T
          ? { fragmentIdentifier: y(T, L) }
          : {}
      );
    }),
    (r.stringifyUrl = (C, L) => {
      L = Object.assign({ encode: !0, strict: !0, [a]: !0 }, L);
      const A = w(C.url).split("?")[0] || "",
        T = r.extract(C.url),
        R = r.parse(T, { sort: !1 }),
        l = Object.assign(R, C.query);
      let P = r.stringify(l, L);
      P && (P = `?${P}`);
      let H = S(C.url);
      return (
        C.fragmentIdentifier &&
          (H = `#${L[a] ? g(C.fragmentIdentifier, L) : C.fragmentIdentifier}`),
        `${A}${P}${H}`
      );
    }),
    (r.pick = (C, L, A) => {
      A = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, A);
      const { url: T, query: R, fragmentIdentifier: l } = r.parseUrl(C, A);
      return r.stringifyUrl(
        { url: T, query: s(R, L), fragmentIdentifier: l },
        A
      );
    }),
    (r.exclude = (C, L, A) => {
      const T = Array.isArray(L) ? (R) => !L.includes(R) : (R, l) => !L(R, l);
      return r.pick(C, T, A);
    });
})(rs);
var Aa = {},
  nn = {},
  ye = {},
  Mh = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  function e(o, f) {
    var h = (o >>> 16) & 65535,
      g = o & 65535,
      y = (f >>> 16) & 65535,
      E = f & 65535;
    return (g * E + (((h * E + g * y) << 16) >>> 0)) | 0;
  }
  r.mul = Math.imul || e;
  function t(o, f) {
    return (o + f) | 0;
  }
  r.add = t;
  function i(o, f) {
    return (o - f) | 0;
  }
  r.sub = i;
  function s(o, f) {
    return (o << f) | (o >>> (32 - f));
  }
  r.rotl = s;
  function n(o, f) {
    return (o << (32 - f)) | (o >>> f);
  }
  r.rotr = n;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  (r.isInteger = Number.isInteger || a),
    (r.MAX_SAFE_INTEGER = 9007199254740991),
    (r.isSafeInteger = function (o) {
      return (
        r.isInteger(o) && o >= -r.MAX_SAFE_INTEGER && o <= r.MAX_SAFE_INTEGER
      );
    });
})(Mh);
Object.defineProperty(ye, "__esModule", { value: !0 });
var Ah = Mh;
function Hd(r, e) {
  return e === void 0 && (e = 0), (((r[e + 0] << 8) | r[e + 1]) << 16) >> 16;
}
ye.readInt16BE = Hd;
function Kd(r, e) {
  return e === void 0 && (e = 0), ((r[e + 0] << 8) | r[e + 1]) >>> 0;
}
ye.readUint16BE = Kd;
function Vd(r, e) {
  return e === void 0 && (e = 0), (((r[e + 1] << 8) | r[e]) << 16) >> 16;
}
ye.readInt16LE = Vd;
function Gd(r, e) {
  return e === void 0 && (e = 0), ((r[e + 1] << 8) | r[e]) >>> 0;
}
ye.readUint16LE = Gd;
function Oh(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 8),
    (e[t + 1] = r >>> 0),
    e
  );
}
ye.writeUint16BE = Oh;
ye.writeInt16BE = Oh;
function Ch(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 0),
    (e[t + 1] = r >>> 8),
    e
  );
}
ye.writeUint16LE = Ch;
ye.writeInt16LE = Ch;
function ra(r, e) {
  return (
    e === void 0 && (e = 0),
    (r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]
  );
}
ye.readInt32BE = ra;
function ia(r, e) {
  return (
    e === void 0 && (e = 0),
    ((r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]) >>> 0
  );
}
ye.readUint32BE = ia;
function sa(r, e) {
  return (
    e === void 0 && (e = 0),
    (r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]
  );
}
ye.readInt32LE = sa;
function na(r, e) {
  return (
    e === void 0 && (e = 0),
    ((r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]) >>> 0
  );
}
ye.readUint32LE = na;
function Bs(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 24),
    (e[t + 1] = r >>> 16),
    (e[t + 2] = r >>> 8),
    (e[t + 3] = r >>> 0),
    e
  );
}
ye.writeUint32BE = Bs;
ye.writeInt32BE = Bs;
function ks(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 0),
    (e[t + 1] = r >>> 8),
    (e[t + 2] = r >>> 16),
    (e[t + 3] = r >>> 24),
    e
  );
}
ye.writeUint32LE = ks;
ye.writeInt32LE = ks;
function Wd(r, e) {
  e === void 0 && (e = 0);
  var t = ra(r, e),
    i = ra(r, e + 4);
  return t * 4294967296 + i - (i >> 31) * 4294967296;
}
ye.readInt64BE = Wd;
function Jd(r, e) {
  e === void 0 && (e = 0);
  var t = ia(r, e),
    i = ia(r, e + 4);
  return t * 4294967296 + i;
}
ye.readUint64BE = Jd;
function Yd(r, e) {
  e === void 0 && (e = 0);
  var t = sa(r, e),
    i = sa(r, e + 4);
  return i * 4294967296 + t - (t >> 31) * 4294967296;
}
ye.readInt64LE = Yd;
function Xd(r, e) {
  e === void 0 && (e = 0);
  var t = na(r, e),
    i = na(r, e + 4);
  return i * 4294967296 + t;
}
ye.readUint64LE = Xd;
function Th(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Bs((r / 4294967296) >>> 0, e, t),
    Bs(r >>> 0, e, t + 4),
    e
  );
}
ye.writeUint64BE = Th;
ye.writeInt64BE = Th;
function Rh(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    ks(r >>> 0, e, t),
    ks((r / 4294967296) >>> 0, e, t + 4),
    e
  );
}
ye.writeUint64LE = Rh;
ye.writeInt64LE = Rh;
function Qd(r, e, t) {
  if ((t === void 0 && (t = 0), r % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = r / 8 + t - 1; n >= t; n--)
    (i += e[n] * s), (s *= 256);
  return i;
}
ye.readUintBE = Qd;
function Zd(r, e, t) {
  if ((t === void 0 && (t = 0), r % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, s = 1, n = t; n < t + r / 8; n++) (i += e[n] * s), (s *= 256);
  return i;
}
ye.readUintLE = Zd;
function el(r, e, t, i) {
  if (
    (t === void 0 && (t = new Uint8Array(r / 8)),
    i === void 0 && (i = 0),
    r % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ah.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, n = r / 8 + i - 1; n >= i; n--)
    (t[n] = (e / s) & 255), (s *= 256);
  return t;
}
ye.writeUintBE = el;
function tl(r, e, t, i) {
  if (
    (t === void 0 && (t = new Uint8Array(r / 8)),
    i === void 0 && (i = 0),
    r % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ah.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, n = i; n < i + r / 8; n++) (t[n] = (e / s) & 255), (s *= 256);
  return t;
}
ye.writeUintLE = tl;
function rl(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e);
}
ye.readFloat32BE = rl;
function il(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e, !0);
}
ye.readFloat32LE = il;
function sl(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e);
}
ye.readFloat64BE = sl;
function nl(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e, !0);
}
ye.readFloat64LE = nl;
function al(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r), e;
}
ye.writeFloat32BE = al;
function ol(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r, !0), e;
}
ye.writeFloat32LE = ol;
function cl(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r), e;
}
ye.writeFloat64BE = cl;
function hl(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r, !0), e;
}
ye.writeFloat64LE = hl;
var Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function fl(r) {
  for (var e = 0; e < r.length; e++) r[e] = 0;
  return r;
}
Ft.wipe = fl;
Object.defineProperty(nn, "__esModule", { value: !0 });
var St = ye,
  aa = Ft,
  ul = 20;
function dl(r, e, t) {
  for (
    var i = 1634760805,
      s = 857760878,
      n = 2036477234,
      a = 1797285236,
      o = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      f = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      h = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      g = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      y = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      E = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      w = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      S = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      $ = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      q = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      z = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      C = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      L = i,
      A = s,
      T = n,
      R = a,
      l = o,
      P = f,
      H = h,
      Y = g,
      M = y,
      c = E,
      v = w,
      d = S,
      b = $,
      _ = q,
      D = z,
      x = C,
      m = 0;
    m < ul;
    m += 2
  )
    (L = (L + l) | 0),
      (b ^= L),
      (b = (b >>> 16) | (b << 16)),
      (M = (M + b) | 0),
      (l ^= M),
      (l = (l >>> 20) | (l << 12)),
      (A = (A + P) | 0),
      (_ ^= A),
      (_ = (_ >>> 16) | (_ << 16)),
      (c = (c + _) | 0),
      (P ^= c),
      (P = (P >>> 20) | (P << 12)),
      (T = (T + H) | 0),
      (D ^= T),
      (D = (D >>> 16) | (D << 16)),
      (v = (v + D) | 0),
      (H ^= v),
      (H = (H >>> 20) | (H << 12)),
      (R = (R + Y) | 0),
      (x ^= R),
      (x = (x >>> 16) | (x << 16)),
      (d = (d + x) | 0),
      (Y ^= d),
      (Y = (Y >>> 20) | (Y << 12)),
      (T = (T + H) | 0),
      (D ^= T),
      (D = (D >>> 24) | (D << 8)),
      (v = (v + D) | 0),
      (H ^= v),
      (H = (H >>> 25) | (H << 7)),
      (R = (R + Y) | 0),
      (x ^= R),
      (x = (x >>> 24) | (x << 8)),
      (d = (d + x) | 0),
      (Y ^= d),
      (Y = (Y >>> 25) | (Y << 7)),
      (A = (A + P) | 0),
      (_ ^= A),
      (_ = (_ >>> 24) | (_ << 8)),
      (c = (c + _) | 0),
      (P ^= c),
      (P = (P >>> 25) | (P << 7)),
      (L = (L + l) | 0),
      (b ^= L),
      (b = (b >>> 24) | (b << 8)),
      (M = (M + b) | 0),
      (l ^= M),
      (l = (l >>> 25) | (l << 7)),
      (L = (L + P) | 0),
      (x ^= L),
      (x = (x >>> 16) | (x << 16)),
      (v = (v + x) | 0),
      (P ^= v),
      (P = (P >>> 20) | (P << 12)),
      (A = (A + H) | 0),
      (b ^= A),
      (b = (b >>> 16) | (b << 16)),
      (d = (d + b) | 0),
      (H ^= d),
      (H = (H >>> 20) | (H << 12)),
      (T = (T + Y) | 0),
      (_ ^= T),
      (_ = (_ >>> 16) | (_ << 16)),
      (M = (M + _) | 0),
      (Y ^= M),
      (Y = (Y >>> 20) | (Y << 12)),
      (R = (R + l) | 0),
      (D ^= R),
      (D = (D >>> 16) | (D << 16)),
      (c = (c + D) | 0),
      (l ^= c),
      (l = (l >>> 20) | (l << 12)),
      (T = (T + Y) | 0),
      (_ ^= T),
      (_ = (_ >>> 24) | (_ << 8)),
      (M = (M + _) | 0),
      (Y ^= M),
      (Y = (Y >>> 25) | (Y << 7)),
      (R = (R + l) | 0),
      (D ^= R),
      (D = (D >>> 24) | (D << 8)),
      (c = (c + D) | 0),
      (l ^= c),
      (l = (l >>> 25) | (l << 7)),
      (A = (A + H) | 0),
      (b ^= A),
      (b = (b >>> 24) | (b << 8)),
      (d = (d + b) | 0),
      (H ^= d),
      (H = (H >>> 25) | (H << 7)),
      (L = (L + P) | 0),
      (x ^= L),
      (x = (x >>> 24) | (x << 8)),
      (v = (v + x) | 0),
      (P ^= v),
      (P = (P >>> 25) | (P << 7));
  St.writeUint32LE((L + i) | 0, r, 0),
    St.writeUint32LE((A + s) | 0, r, 4),
    St.writeUint32LE((T + n) | 0, r, 8),
    St.writeUint32LE((R + a) | 0, r, 12),
    St.writeUint32LE((l + o) | 0, r, 16),
    St.writeUint32LE((P + f) | 0, r, 20),
    St.writeUint32LE((H + h) | 0, r, 24),
    St.writeUint32LE((Y + g) | 0, r, 28),
    St.writeUint32LE((M + y) | 0, r, 32),
    St.writeUint32LE((c + E) | 0, r, 36),
    St.writeUint32LE((v + w) | 0, r, 40),
    St.writeUint32LE((d + S) | 0, r, 44),
    St.writeUint32LE((b + $) | 0, r, 48),
    St.writeUint32LE((_ + q) | 0, r, 52),
    St.writeUint32LE((D + z) | 0, r, 56),
    St.writeUint32LE((x + C) | 0, r, 60);
}
function $h(r, e, t, i, s) {
  if ((s === void 0 && (s = 0), r.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var n, a;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (n = new Uint8Array(16)), (a = n.length - e.length), n.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (n = e), (a = s);
  }
  for (var o = new Uint8Array(64), f = 0; f < t.length; f += 64) {
    dl(o, n, r);
    for (var h = f; h < f + 64 && h < t.length; h++) i[h] = t[h] ^ o[h - f];
    pl(n, 0, a);
  }
  return aa.wipe(o), s === 0 && aa.wipe(n), i;
}
nn.streamXOR = $h;
function ll(r, e, t, i) {
  return i === void 0 && (i = 0), aa.wipe(t), $h(r, e, t, t, i);
}
nn.stream = ll;
function pl(r, e, t) {
  for (var i = 1; t--; )
    (i = (i + (r[e] & 255)) | 0), (r[e] = i & 255), (i >>>= 8), e++;
  if (i > 0) throw new Error("ChaCha: counter overflow");
}
var Nh = {},
  $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
function gl(r, e, t) {
  return (~(r - 1) & e) | ((r - 1) & t);
}
$r.select = gl;
function bl(r, e) {
  return (((r | 0) - (e | 0) - 1) >>> 31) & 1;
}
$r.lessOrEqual = bl;
function Fh(r, e) {
  if (r.length !== e.length) return 0;
  for (var t = 0, i = 0; i < r.length; i++) t |= r[i] ^ e[i];
  return 1 & ((t - 1) >>> 8);
}
$r.compare = Fh;
function vl(r, e) {
  return r.length === 0 || e.length === 0 ? !1 : Fh(r, e) !== 0;
}
$r.equal = vl;
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = $r,
    t = Ft;
  r.DIGEST_LENGTH = 16;
  var i = (function () {
    function a(o) {
      (this.digestLength = r.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var f = o[0] | (o[1] << 8);
      this._r[0] = f & 8191;
      var h = o[2] | (o[3] << 8);
      this._r[1] = ((f >>> 13) | (h << 3)) & 8191;
      var g = o[4] | (o[5] << 8);
      this._r[2] = ((h >>> 10) | (g << 6)) & 7939;
      var y = o[6] | (o[7] << 8);
      this._r[3] = ((g >>> 7) | (y << 9)) & 8191;
      var E = o[8] | (o[9] << 8);
      (this._r[4] = ((y >>> 4) | (E << 12)) & 255),
        (this._r[5] = (E >>> 1) & 8190);
      var w = o[10] | (o[11] << 8);
      this._r[6] = ((E >>> 14) | (w << 2)) & 8191;
      var S = o[12] | (o[13] << 8);
      this._r[7] = ((w >>> 11) | (S << 5)) & 8065;
      var $ = o[14] | (o[15] << 8);
      (this._r[8] = ((S >>> 8) | ($ << 8)) & 8191),
        (this._r[9] = ($ >>> 5) & 127),
        (this._pad[0] = o[16] | (o[17] << 8)),
        (this._pad[1] = o[18] | (o[19] << 8)),
        (this._pad[2] = o[20] | (o[21] << 8)),
        (this._pad[3] = o[22] | (o[23] << 8)),
        (this._pad[4] = o[24] | (o[25] << 8)),
        (this._pad[5] = o[26] | (o[27] << 8)),
        (this._pad[6] = o[28] | (o[29] << 8)),
        (this._pad[7] = o[30] | (o[31] << 8));
    }
    return (
      (a.prototype._blocks = function (o, f, h) {
        for (
          var g = this._fin ? 0 : 2048,
            y = this._h[0],
            E = this._h[1],
            w = this._h[2],
            S = this._h[3],
            $ = this._h[4],
            q = this._h[5],
            z = this._h[6],
            C = this._h[7],
            L = this._h[8],
            A = this._h[9],
            T = this._r[0],
            R = this._r[1],
            l = this._r[2],
            P = this._r[3],
            H = this._r[4],
            Y = this._r[5],
            M = this._r[6],
            c = this._r[7],
            v = this._r[8],
            d = this._r[9];
          h >= 16;

        ) {
          var b = o[f + 0] | (o[f + 1] << 8);
          y += b & 8191;
          var _ = o[f + 2] | (o[f + 3] << 8);
          E += ((b >>> 13) | (_ << 3)) & 8191;
          var D = o[f + 4] | (o[f + 5] << 8);
          w += ((_ >>> 10) | (D << 6)) & 8191;
          var x = o[f + 6] | (o[f + 7] << 8);
          S += ((D >>> 7) | (x << 9)) & 8191;
          var m = o[f + 8] | (o[f + 9] << 8);
          ($ += ((x >>> 4) | (m << 12)) & 8191), (q += (m >>> 1) & 8191);
          var u = o[f + 10] | (o[f + 11] << 8);
          z += ((m >>> 14) | (u << 2)) & 8191;
          var I = o[f + 12] | (o[f + 13] << 8);
          C += ((u >>> 11) | (I << 5)) & 8191;
          var K = o[f + 14] | (o[f + 15] << 8);
          (L += ((I >>> 8) | (K << 8)) & 8191), (A += (K >>> 5) | g);
          var k = 0,
            W = k;
          (W += y * T),
            (W += E * (5 * d)),
            (W += w * (5 * v)),
            (W += S * (5 * c)),
            (W += $ * (5 * M)),
            (k = W >>> 13),
            (W &= 8191),
            (W += q * (5 * Y)),
            (W += z * (5 * H)),
            (W += C * (5 * P)),
            (W += L * (5 * l)),
            (W += A * (5 * R)),
            (k += W >>> 13),
            (W &= 8191);
          var V = k;
          (V += y * R),
            (V += E * T),
            (V += w * (5 * d)),
            (V += S * (5 * v)),
            (V += $ * (5 * c)),
            (k = V >>> 13),
            (V &= 8191),
            (V += q * (5 * M)),
            (V += z * (5 * Y)),
            (V += C * (5 * H)),
            (V += L * (5 * P)),
            (V += A * (5 * l)),
            (k += V >>> 13),
            (V &= 8191);
          var ee = k;
          (ee += y * l),
            (ee += E * R),
            (ee += w * T),
            (ee += S * (5 * d)),
            (ee += $ * (5 * v)),
            (k = ee >>> 13),
            (ee &= 8191),
            (ee += q * (5 * c)),
            (ee += z * (5 * M)),
            (ee += C * (5 * Y)),
            (ee += L * (5 * H)),
            (ee += A * (5 * P)),
            (k += ee >>> 13),
            (ee &= 8191);
          var U = k;
          (U += y * P),
            (U += E * l),
            (U += w * R),
            (U += S * T),
            (U += $ * (5 * d)),
            (k = U >>> 13),
            (U &= 8191),
            (U += q * (5 * v)),
            (U += z * (5 * c)),
            (U += C * (5 * M)),
            (U += L * (5 * Y)),
            (U += A * (5 * H)),
            (k += U >>> 13),
            (U &= 8191);
          var B = k;
          (B += y * H),
            (B += E * P),
            (B += w * l),
            (B += S * R),
            (B += $ * T),
            (k = B >>> 13),
            (B &= 8191),
            (B += q * (5 * d)),
            (B += z * (5 * v)),
            (B += C * (5 * c)),
            (B += L * (5 * M)),
            (B += A * (5 * Y)),
            (k += B >>> 13),
            (B &= 8191);
          var F = k;
          (F += y * Y),
            (F += E * H),
            (F += w * P),
            (F += S * l),
            (F += $ * R),
            (k = F >>> 13),
            (F &= 8191),
            (F += q * T),
            (F += z * (5 * d)),
            (F += C * (5 * v)),
            (F += L * (5 * c)),
            (F += A * (5 * M)),
            (k += F >>> 13),
            (F &= 8191);
          var p = k;
          (p += y * M),
            (p += E * Y),
            (p += w * H),
            (p += S * P),
            (p += $ * l),
            (k = p >>> 13),
            (p &= 8191),
            (p += q * R),
            (p += z * T),
            (p += C * (5 * d)),
            (p += L * (5 * v)),
            (p += A * (5 * c)),
            (k += p >>> 13),
            (p &= 8191);
          var N = k;
          (N += y * c),
            (N += E * M),
            (N += w * Y),
            (N += S * H),
            (N += $ * P),
            (k = N >>> 13),
            (N &= 8191),
            (N += q * l),
            (N += z * R),
            (N += C * T),
            (N += L * (5 * d)),
            (N += A * (5 * v)),
            (k += N >>> 13),
            (N &= 8191);
          var J = k;
          (J += y * v),
            (J += E * c),
            (J += w * M),
            (J += S * Y),
            (J += $ * H),
            (k = J >>> 13),
            (J &= 8191),
            (J += q * P),
            (J += z * l),
            (J += C * R),
            (J += L * T),
            (J += A * (5 * d)),
            (k += J >>> 13),
            (J &= 8191);
          var X = k;
          (X += y * d),
            (X += E * v),
            (X += w * c),
            (X += S * M),
            (X += $ * Y),
            (k = X >>> 13),
            (X &= 8191),
            (X += q * H),
            (X += z * P),
            (X += C * l),
            (X += L * R),
            (X += A * T),
            (k += X >>> 13),
            (X &= 8191),
            (k = ((k << 2) + k) | 0),
            (k = (k + W) | 0),
            (W = k & 8191),
            (k = k >>> 13),
            (V += k),
            (y = W),
            (E = V),
            (w = ee),
            (S = U),
            ($ = B),
            (q = F),
            (z = p),
            (C = N),
            (L = J),
            (A = X),
            (f += 16),
            (h -= 16);
        }
        (this._h[0] = y),
          (this._h[1] = E),
          (this._h[2] = w),
          (this._h[3] = S),
          (this._h[4] = $),
          (this._h[5] = q),
          (this._h[6] = z),
          (this._h[7] = C),
          (this._h[8] = L),
          (this._h[9] = A);
      }),
      (a.prototype.finish = function (o, f) {
        f === void 0 && (f = 0);
        var h = new Uint16Array(10),
          g,
          y,
          E,
          w;
        if (this._leftover) {
          for (w = this._leftover, this._buffer[w++] = 1; w < 16; w++)
            this._buffer[w] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (g = this._h[1] >>> 13, this._h[1] &= 8191, w = 2; w < 10; w++)
          (this._h[w] += g), (g = this._h[w] >>> 13), (this._h[w] &= 8191);
        for (
          this._h[0] += g * 5,
            g = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += g,
            g = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += g,
            h[0] = this._h[0] + 5,
            g = h[0] >>> 13,
            h[0] &= 8191,
            w = 1;
          w < 10;
          w++
        )
          (h[w] = this._h[w] + g), (g = h[w] >>> 13), (h[w] &= 8191);
        for (h[9] -= 8192, y = (g ^ 1) - 1, w = 0; w < 10; w++) h[w] &= y;
        for (y = ~y, w = 0; w < 10; w++) this._h[w] = (this._h[w] & y) | h[w];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            E = this._h[0] + this._pad[0],
            this._h[0] = E & 65535,
            w = 1;
          w < 8;
          w++
        )
          (E = (((this._h[w] + this._pad[w]) | 0) + (E >>> 16)) | 0),
            (this._h[w] = E & 65535);
        return (
          (o[f + 0] = this._h[0] >>> 0),
          (o[f + 1] = this._h[0] >>> 8),
          (o[f + 2] = this._h[1] >>> 0),
          (o[f + 3] = this._h[1] >>> 8),
          (o[f + 4] = this._h[2] >>> 0),
          (o[f + 5] = this._h[2] >>> 8),
          (o[f + 6] = this._h[3] >>> 0),
          (o[f + 7] = this._h[3] >>> 8),
          (o[f + 8] = this._h[4] >>> 0),
          (o[f + 9] = this._h[4] >>> 8),
          (o[f + 10] = this._h[5] >>> 0),
          (o[f + 11] = this._h[5] >>> 8),
          (o[f + 12] = this._h[6] >>> 0),
          (o[f + 13] = this._h[6] >>> 8),
          (o[f + 14] = this._h[7] >>> 0),
          (o[f + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (a.prototype.update = function (o) {
        var f = 0,
          h = o.length,
          g;
        if (this._leftover) {
          (g = 16 - this._leftover), g > h && (g = h);
          for (var y = 0; y < g; y++)
            this._buffer[this._leftover + y] = o[f + y];
          if (((h -= g), (f += g), (this._leftover += g), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (h >= 16 &&
            ((g = h - (h % 16)), this._blocks(o, f, g), (f += g), (h -= g)),
          h)
        ) {
          for (var y = 0; y < h; y++)
            this._buffer[this._leftover + y] = o[f + y];
          this._leftover += h;
        }
        return this;
      }),
      (a.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var o = new Uint8Array(16);
        return this.finish(o), o;
      }),
      (a.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      a
    );
  })();
  r.Poly1305 = i;
  function s(a, o) {
    var f = new i(a);
    f.update(o);
    var h = f.digest();
    return f.clean(), h;
  }
  r.oneTimeAuth = s;
  function n(a, o) {
    return a.length !== r.DIGEST_LENGTH || o.length !== r.DIGEST_LENGTH
      ? !1
      : e.equal(a, o);
  }
  r.equal = n;
})(Nh);
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = nn,
    t = Nh,
    i = Ft,
    s = ye,
    n = $r;
  (r.KEY_LENGTH = 32), (r.NONCE_LENGTH = 12), (r.TAG_LENGTH = 16);
  var a = new Uint8Array(16),
    o = (function () {
      function f(h) {
        if (
          ((this.nonceLength = r.NONCE_LENGTH),
          (this.tagLength = r.TAG_LENGTH),
          h.length !== r.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return (
        (f.prototype.seal = function (h, g, y, E) {
          if (h.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var w = new Uint8Array(16);
          w.set(h, w.length - h.length);
          var S = new Uint8Array(32);
          e.stream(this._key, w, S, 4);
          var $ = g.length + this.tagLength,
            q;
          if (E) {
            if (E.length !== $)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            q = E;
          } else q = new Uint8Array($);
          return (
            e.streamXOR(this._key, w, g, q, 4),
            this._authenticate(
              q.subarray(q.length - this.tagLength, q.length),
              S,
              q.subarray(0, q.length - this.tagLength),
              y
            ),
            i.wipe(w),
            q
          );
        }),
        (f.prototype.open = function (h, g, y, E) {
          if (h.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (g.length < this.tagLength) return null;
          var w = new Uint8Array(16);
          w.set(h, w.length - h.length);
          var S = new Uint8Array(32);
          e.stream(this._key, w, S, 4);
          var $ = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              $,
              S,
              g.subarray(0, g.length - this.tagLength),
              y
            ),
            !n.equal($, g.subarray(g.length - this.tagLength, g.length)))
          )
            return null;
          var q = g.length - this.tagLength,
            z;
          if (E) {
            if (E.length !== q)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            z = E;
          } else z = new Uint8Array(q);
          return (
            e.streamXOR(
              this._key,
              w,
              g.subarray(0, g.length - this.tagLength),
              z,
              4
            ),
            i.wipe(w),
            z
          );
        }),
        (f.prototype.clean = function () {
          return i.wipe(this._key), this;
        }),
        (f.prototype._authenticate = function (h, g, y, E) {
          var w = new t.Poly1305(g);
          E &&
            (w.update(E),
            E.length % 16 > 0 && w.update(a.subarray(E.length % 16))),
            w.update(y),
            y.length % 16 > 0 && w.update(a.subarray(y.length % 16));
          var S = new Uint8Array(8);
          E && s.writeUint64LE(E.length, S),
            w.update(S),
            s.writeUint64LE(y.length, S),
            w.update(S);
          for (var $ = w.digest(), q = 0; q < $.length; q++) h[q] = $[q];
          w.clean(), i.wipe($), i.wipe(S);
        }),
        f
      );
    })();
  r.ChaCha20Poly1305 = o;
})(Aa);
var qh = {},
  hs = {},
  Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
function yl(r) {
  return (
    typeof r.saveState < "u" &&
    typeof r.restoreState < "u" &&
    typeof r.cleanSavedState < "u"
  );
}
Oa.isSerializableHash = yl;
Object.defineProperty(hs, "__esModule", { value: !0 });
var ar = Oa,
  ml = $r,
  wl = Ft,
  Lh = (function () {
    function r(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var i = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(i).clean()
        : i.set(t);
      for (var s = 0; s < i.length; s++) i[s] ^= 54;
      this._inner.update(i);
      for (var s = 0; s < i.length; s++) i[s] ^= 106;
      this._outer.update(i),
        ar.isSerializableHash(this._inner) &&
          ar.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        wl.wipe(i);
    }
    return (
      (r.prototype.reset = function () {
        if (
          !ar.isSerializableHash(this._inner) ||
          !ar.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        ar.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          ar.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (r.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (r.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (!ar.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (r.prototype.restoreState = function (e) {
        if (
          !ar.isSerializableHash(this._inner) ||
          !ar.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        if (!ar.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      r
    );
  })();
hs.HMAC = Lh;
function _l(r, e, t) {
  var i = new Lh(r, e);
  i.update(t);
  var s = i.digest();
  return i.clean(), s;
}
hs.hmac = _l;
hs.equal = ml.equal;
Object.defineProperty(qh, "__esModule", { value: !0 });
var Io = hs,
  xo = Ft,
  El = (function () {
    function r(e, t, i, s) {
      i === void 0 && (i = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = s);
      var n = Io.hmac(this._hash, i, t);
      (this._hmac = new Io.HMAC(e, n)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (r.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (r.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[i] = this._buffer[this._bufpos++]);
        return t;
      }),
      (r.prototype.clean = function () {
        this._hmac.clean(),
          xo.wipe(this._buffer),
          xo.wipe(this._counter),
          (this._bufpos = 0);
      }),
      r
    );
  })(),
  Sl = (qh.HKDF = El),
  Nr = {},
  an = {},
  on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.BrowserRandomSource = void 0;
const Do = 65536;
class Il {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let i = 0; i < t.length; i += Do)
      this._crypto.getRandomValues(
        t.subarray(i, i + Math.min(t.length - i, Do))
      );
    return t;
  }
}
on.BrowserRandomSource = Il;
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.NodeRandomSource = void 0;
const xl = Ft;
class Dl {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof qu < "u")
    ) {
      const e = wh;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(e);
    for (let s = 0; s < i.length; s++) i[s] = t[s];
    return (0, xl.wipe)(t), i;
  }
}
cn.NodeRandomSource = Dl;
Object.defineProperty(an, "__esModule", { value: !0 });
an.SystemRandomSource = void 0;
const Pl = on,
  Ml = cn;
class Al {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new Pl.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new Ml.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
an.SystemRandomSource = Al;
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.randomStringForEntropy =
      r.randomString =
      r.randomUint32 =
      r.randomBytes =
      r.defaultRandomSource =
        void 0);
  const e = an,
    t = ye,
    i = Ft;
  r.defaultRandomSource = new e.SystemRandomSource();
  function s(h, g = r.defaultRandomSource) {
    return g.randomBytes(h);
  }
  r.randomBytes = s;
  function n(h = r.defaultRandomSource) {
    const g = s(4, h),
      y = (0, t.readUint32LE)(g);
    return (0, i.wipe)(g), y;
  }
  r.randomUint32 = n;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(h, g = a, y = r.defaultRandomSource) {
    if (g.length < 2) throw new Error("randomString charset is too short");
    if (g.length > 256) throw new Error("randomString charset is too long");
    let E = "";
    const w = g.length,
      S = 256 - (256 % w);
    for (; h > 0; ) {
      const $ = s(Math.ceil((h * 256) / S), y);
      for (let q = 0; q < $.length && h > 0; q++) {
        const z = $[q];
        z < S && ((E += g.charAt(z % w)), h--);
      }
      (0, i.wipe)($);
    }
    return E;
  }
  r.randomString = o;
  function f(h, g = a, y = r.defaultRandomSource) {
    const E = Math.ceil(h / (Math.log(g.length) / Math.LN2));
    return o(E, g, y);
  }
  r.randomStringForEntropy = f;
})(Nr);
var fs = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = ye,
    t = Ft;
  (r.DIGEST_LENGTH = 32), (r.BLOCK_SIZE = 64);
  var i = (function () {
    function o() {
      (this.digestLength = r.DIGEST_LENGTH),
        (this.blockSize = r.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (o.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (o.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (o.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (o.prototype.update = function (f, h) {
        if ((h === void 0 && (h = f.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var g = 0;
        if (((this._bytesHashed += h), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            (this._buffer[this._bufferLength++] = f[g++]), h--;
          this._bufferLength === this.blockSize &&
            (n(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          h >= this.blockSize &&
          ((g = n(this._temp, this._state, f, g, h)), (h %= this.blockSize));
          h > 0;

        )
          (this._buffer[this._bufferLength++] = f[g++]), h--;
        return this;
      }),
      (o.prototype.finish = function (f) {
        if (!this._finished) {
          var h = this._bytesHashed,
            g = this._bufferLength,
            y = (h / 536870912) | 0,
            E = h << 3,
            w = h % 64 < 56 ? 64 : 128;
          this._buffer[g] = 128;
          for (var S = g + 1; S < w - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(y, this._buffer, w - 8),
            e.writeUint32BE(E, this._buffer, w - 4),
            n(this._temp, this._state, this._buffer, 0, w),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 4; S++)
          e.writeUint32BE(this._state[S], f, S * 4);
        return this;
      }),
      (o.prototype.digest = function () {
        var f = new Uint8Array(this.digestLength);
        return this.finish(f), f;
      }),
      (o.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (o.prototype.restoreState = function (f) {
        return (
          this._state.set(f.state),
          (this._bufferLength = f.bufferLength),
          f.buffer && this._buffer.set(f.buffer),
          (this._bytesHashed = f.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (o.prototype.cleanSavedState = function (f) {
        t.wipe(f.state),
          f.buffer && t.wipe(f.buffer),
          (f.bufferLength = 0),
          (f.bytesHashed = 0);
      }),
      o
    );
  })();
  r.SHA256 = i;
  var s = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function n(o, f, h, g, y) {
    for (; y >= 64; ) {
      for (
        var E = f[0],
          w = f[1],
          S = f[2],
          $ = f[3],
          q = f[4],
          z = f[5],
          C = f[6],
          L = f[7],
          A = 0;
        A < 16;
        A++
      ) {
        var T = g + A * 4;
        o[A] = e.readUint32BE(h, T);
      }
      for (var A = 16; A < 64; A++) {
        var R = o[A - 2],
          l = ((R >>> 17) | (R << 15)) ^ ((R >>> 19) | (R << 13)) ^ (R >>> 10);
        R = o[A - 15];
        var P = ((R >>> 7) | (R << 25)) ^ ((R >>> 18) | (R << 14)) ^ (R >>> 3);
        o[A] = ((l + o[A - 7]) | 0) + ((P + o[A - 16]) | 0);
      }
      for (var A = 0; A < 64; A++) {
        var l =
            ((((((q >>> 6) | (q << 26)) ^
              ((q >>> 11) | (q << 21)) ^
              ((q >>> 25) | (q << 7))) +
              ((q & z) ^ (~q & C))) |
              0) +
              ((L + ((s[A] + o[A]) | 0)) | 0)) |
            0,
          P =
            ((((E >>> 2) | (E << 30)) ^
              ((E >>> 13) | (E << 19)) ^
              ((E >>> 22) | (E << 10))) +
              ((E & w) ^ (E & S) ^ (w & S))) |
            0;
        (L = C),
          (C = z),
          (z = q),
          (q = ($ + l) | 0),
          ($ = S),
          (S = w),
          (w = E),
          (E = (l + P) | 0);
      }
      (f[0] += E),
        (f[1] += w),
        (f[2] += S),
        (f[3] += $),
        (f[4] += q),
        (f[5] += z),
        (f[6] += C),
        (f[7] += L),
        (g += 64),
        (y -= 64);
    }
    return g;
  }
  function a(o) {
    var f = new i();
    f.update(o);
    var h = f.digest();
    return f.clean(), h;
  }
  r.hash = a;
})(fs);
var Ca = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.sharedKey =
      r.generateKeyPair =
      r.generateKeyPairFromSeed =
      r.scalarMultBase =
      r.scalarMult =
      r.SHARED_KEY_LENGTH =
      r.SECRET_KEY_LENGTH =
      r.PUBLIC_KEY_LENGTH =
        void 0);
  const e = Nr,
    t = Ft;
  (r.PUBLIC_KEY_LENGTH = 32),
    (r.SECRET_KEY_LENGTH = 32),
    (r.SHARED_KEY_LENGTH = 32);
  function i(A) {
    const T = new Float64Array(16);
    if (A) for (let R = 0; R < A.length; R++) T[R] = A[R];
    return T;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const n = i([56129, 1]);
  function a(A) {
    let T = 1;
    for (let R = 0; R < 16; R++) {
      let l = A[R] + T + 65535;
      (T = Math.floor(l / 65536)), (A[R] = l - T * 65536);
    }
    A[0] += T - 1 + 37 * (T - 1);
  }
  function o(A, T, R) {
    const l = ~(R - 1);
    for (let P = 0; P < 16; P++) {
      const H = l & (A[P] ^ T[P]);
      (A[P] ^= H), (T[P] ^= H);
    }
  }
  function f(A, T) {
    const R = i(),
      l = i();
    for (let P = 0; P < 16; P++) l[P] = T[P];
    a(l), a(l), a(l);
    for (let P = 0; P < 2; P++) {
      R[0] = l[0] - 65517;
      for (let Y = 1; Y < 15; Y++)
        (R[Y] = l[Y] - 65535 - ((R[Y - 1] >> 16) & 1)), (R[Y - 1] &= 65535);
      R[15] = l[15] - 32767 - ((R[14] >> 16) & 1);
      const H = (R[15] >> 16) & 1;
      (R[14] &= 65535), o(l, R, 1 - H);
    }
    for (let P = 0; P < 16; P++)
      (A[2 * P] = l[P] & 255), (A[2 * P + 1] = l[P] >> 8);
  }
  function h(A, T) {
    for (let R = 0; R < 16; R++) A[R] = T[2 * R] + (T[2 * R + 1] << 8);
    A[15] &= 32767;
  }
  function g(A, T, R) {
    for (let l = 0; l < 16; l++) A[l] = T[l] + R[l];
  }
  function y(A, T, R) {
    for (let l = 0; l < 16; l++) A[l] = T[l] - R[l];
  }
  function E(A, T, R) {
    let l,
      P,
      H = 0,
      Y = 0,
      M = 0,
      c = 0,
      v = 0,
      d = 0,
      b = 0,
      _ = 0,
      D = 0,
      x = 0,
      m = 0,
      u = 0,
      I = 0,
      K = 0,
      k = 0,
      W = 0,
      V = 0,
      ee = 0,
      U = 0,
      B = 0,
      F = 0,
      p = 0,
      N = 0,
      J = 0,
      X = 0,
      me = 0,
      fe = 0,
      ce = 0,
      qe = 0,
      ve = 0,
      pe = 0,
      $e = R[0],
      he = R[1],
      oe = R[2],
      xe = R[3],
      ne = R[4],
      se = R[5],
      ge = R[6],
      re = R[7],
      ae = R[8],
      Te = R[9],
      ie = R[10],
      ue = R[11],
      Fe = R[12],
      de = R[13],
      le = R[14],
      Le = R[15];
    (l = T[0]),
      (H += l * $e),
      (Y += l * he),
      (M += l * oe),
      (c += l * xe),
      (v += l * ne),
      (d += l * se),
      (b += l * ge),
      (_ += l * re),
      (D += l * ae),
      (x += l * Te),
      (m += l * ie),
      (u += l * ue),
      (I += l * Fe),
      (K += l * de),
      (k += l * le),
      (W += l * Le),
      (l = T[1]),
      (Y += l * $e),
      (M += l * he),
      (c += l * oe),
      (v += l * xe),
      (d += l * ne),
      (b += l * se),
      (_ += l * ge),
      (D += l * re),
      (x += l * ae),
      (m += l * Te),
      (u += l * ie),
      (I += l * ue),
      (K += l * Fe),
      (k += l * de),
      (W += l * le),
      (V += l * Le),
      (l = T[2]),
      (M += l * $e),
      (c += l * he),
      (v += l * oe),
      (d += l * xe),
      (b += l * ne),
      (_ += l * se),
      (D += l * ge),
      (x += l * re),
      (m += l * ae),
      (u += l * Te),
      (I += l * ie),
      (K += l * ue),
      (k += l * Fe),
      (W += l * de),
      (V += l * le),
      (ee += l * Le),
      (l = T[3]),
      (c += l * $e),
      (v += l * he),
      (d += l * oe),
      (b += l * xe),
      (_ += l * ne),
      (D += l * se),
      (x += l * ge),
      (m += l * re),
      (u += l * ae),
      (I += l * Te),
      (K += l * ie),
      (k += l * ue),
      (W += l * Fe),
      (V += l * de),
      (ee += l * le),
      (U += l * Le),
      (l = T[4]),
      (v += l * $e),
      (d += l * he),
      (b += l * oe),
      (_ += l * xe),
      (D += l * ne),
      (x += l * se),
      (m += l * ge),
      (u += l * re),
      (I += l * ae),
      (K += l * Te),
      (k += l * ie),
      (W += l * ue),
      (V += l * Fe),
      (ee += l * de),
      (U += l * le),
      (B += l * Le),
      (l = T[5]),
      (d += l * $e),
      (b += l * he),
      (_ += l * oe),
      (D += l * xe),
      (x += l * ne),
      (m += l * se),
      (u += l * ge),
      (I += l * re),
      (K += l * ae),
      (k += l * Te),
      (W += l * ie),
      (V += l * ue),
      (ee += l * Fe),
      (U += l * de),
      (B += l * le),
      (F += l * Le),
      (l = T[6]),
      (b += l * $e),
      (_ += l * he),
      (D += l * oe),
      (x += l * xe),
      (m += l * ne),
      (u += l * se),
      (I += l * ge),
      (K += l * re),
      (k += l * ae),
      (W += l * Te),
      (V += l * ie),
      (ee += l * ue),
      (U += l * Fe),
      (B += l * de),
      (F += l * le),
      (p += l * Le),
      (l = T[7]),
      (_ += l * $e),
      (D += l * he),
      (x += l * oe),
      (m += l * xe),
      (u += l * ne),
      (I += l * se),
      (K += l * ge),
      (k += l * re),
      (W += l * ae),
      (V += l * Te),
      (ee += l * ie),
      (U += l * ue),
      (B += l * Fe),
      (F += l * de),
      (p += l * le),
      (N += l * Le),
      (l = T[8]),
      (D += l * $e),
      (x += l * he),
      (m += l * oe),
      (u += l * xe),
      (I += l * ne),
      (K += l * se),
      (k += l * ge),
      (W += l * re),
      (V += l * ae),
      (ee += l * Te),
      (U += l * ie),
      (B += l * ue),
      (F += l * Fe),
      (p += l * de),
      (N += l * le),
      (J += l * Le),
      (l = T[9]),
      (x += l * $e),
      (m += l * he),
      (u += l * oe),
      (I += l * xe),
      (K += l * ne),
      (k += l * se),
      (W += l * ge),
      (V += l * re),
      (ee += l * ae),
      (U += l * Te),
      (B += l * ie),
      (F += l * ue),
      (p += l * Fe),
      (N += l * de),
      (J += l * le),
      (X += l * Le),
      (l = T[10]),
      (m += l * $e),
      (u += l * he),
      (I += l * oe),
      (K += l * xe),
      (k += l * ne),
      (W += l * se),
      (V += l * ge),
      (ee += l * re),
      (U += l * ae),
      (B += l * Te),
      (F += l * ie),
      (p += l * ue),
      (N += l * Fe),
      (J += l * de),
      (X += l * le),
      (me += l * Le),
      (l = T[11]),
      (u += l * $e),
      (I += l * he),
      (K += l * oe),
      (k += l * xe),
      (W += l * ne),
      (V += l * se),
      (ee += l * ge),
      (U += l * re),
      (B += l * ae),
      (F += l * Te),
      (p += l * ie),
      (N += l * ue),
      (J += l * Fe),
      (X += l * de),
      (me += l * le),
      (fe += l * Le),
      (l = T[12]),
      (I += l * $e),
      (K += l * he),
      (k += l * oe),
      (W += l * xe),
      (V += l * ne),
      (ee += l * se),
      (U += l * ge),
      (B += l * re),
      (F += l * ae),
      (p += l * Te),
      (N += l * ie),
      (J += l * ue),
      (X += l * Fe),
      (me += l * de),
      (fe += l * le),
      (ce += l * Le),
      (l = T[13]),
      (K += l * $e),
      (k += l * he),
      (W += l * oe),
      (V += l * xe),
      (ee += l * ne),
      (U += l * se),
      (B += l * ge),
      (F += l * re),
      (p += l * ae),
      (N += l * Te),
      (J += l * ie),
      (X += l * ue),
      (me += l * Fe),
      (fe += l * de),
      (ce += l * le),
      (qe += l * Le),
      (l = T[14]),
      (k += l * $e),
      (W += l * he),
      (V += l * oe),
      (ee += l * xe),
      (U += l * ne),
      (B += l * se),
      (F += l * ge),
      (p += l * re),
      (N += l * ae),
      (J += l * Te),
      (X += l * ie),
      (me += l * ue),
      (fe += l * Fe),
      (ce += l * de),
      (qe += l * le),
      (ve += l * Le),
      (l = T[15]),
      (W += l * $e),
      (V += l * he),
      (ee += l * oe),
      (U += l * xe),
      (B += l * ne),
      (F += l * se),
      (p += l * ge),
      (N += l * re),
      (J += l * ae),
      (X += l * Te),
      (me += l * ie),
      (fe += l * ue),
      (ce += l * Fe),
      (qe += l * de),
      (ve += l * le),
      (pe += l * Le),
      (H += 38 * V),
      (Y += 38 * ee),
      (M += 38 * U),
      (c += 38 * B),
      (v += 38 * F),
      (d += 38 * p),
      (b += 38 * N),
      (_ += 38 * J),
      (D += 38 * X),
      (x += 38 * me),
      (m += 38 * fe),
      (u += 38 * ce),
      (I += 38 * qe),
      (K += 38 * ve),
      (k += 38 * pe),
      (P = 1),
      (l = H + P + 65535),
      (P = Math.floor(l / 65536)),
      (H = l - P * 65536),
      (l = Y + P + 65535),
      (P = Math.floor(l / 65536)),
      (Y = l - P * 65536),
      (l = M + P + 65535),
      (P = Math.floor(l / 65536)),
      (M = l - P * 65536),
      (l = c + P + 65535),
      (P = Math.floor(l / 65536)),
      (c = l - P * 65536),
      (l = v + P + 65535),
      (P = Math.floor(l / 65536)),
      (v = l - P * 65536),
      (l = d + P + 65535),
      (P = Math.floor(l / 65536)),
      (d = l - P * 65536),
      (l = b + P + 65535),
      (P = Math.floor(l / 65536)),
      (b = l - P * 65536),
      (l = _ + P + 65535),
      (P = Math.floor(l / 65536)),
      (_ = l - P * 65536),
      (l = D + P + 65535),
      (P = Math.floor(l / 65536)),
      (D = l - P * 65536),
      (l = x + P + 65535),
      (P = Math.floor(l / 65536)),
      (x = l - P * 65536),
      (l = m + P + 65535),
      (P = Math.floor(l / 65536)),
      (m = l - P * 65536),
      (l = u + P + 65535),
      (P = Math.floor(l / 65536)),
      (u = l - P * 65536),
      (l = I + P + 65535),
      (P = Math.floor(l / 65536)),
      (I = l - P * 65536),
      (l = K + P + 65535),
      (P = Math.floor(l / 65536)),
      (K = l - P * 65536),
      (l = k + P + 65535),
      (P = Math.floor(l / 65536)),
      (k = l - P * 65536),
      (l = W + P + 65535),
      (P = Math.floor(l / 65536)),
      (W = l - P * 65536),
      (H += P - 1 + 37 * (P - 1)),
      (P = 1),
      (l = H + P + 65535),
      (P = Math.floor(l / 65536)),
      (H = l - P * 65536),
      (l = Y + P + 65535),
      (P = Math.floor(l / 65536)),
      (Y = l - P * 65536),
      (l = M + P + 65535),
      (P = Math.floor(l / 65536)),
      (M = l - P * 65536),
      (l = c + P + 65535),
      (P = Math.floor(l / 65536)),
      (c = l - P * 65536),
      (l = v + P + 65535),
      (P = Math.floor(l / 65536)),
      (v = l - P * 65536),
      (l = d + P + 65535),
      (P = Math.floor(l / 65536)),
      (d = l - P * 65536),
      (l = b + P + 65535),
      (P = Math.floor(l / 65536)),
      (b = l - P * 65536),
      (l = _ + P + 65535),
      (P = Math.floor(l / 65536)),
      (_ = l - P * 65536),
      (l = D + P + 65535),
      (P = Math.floor(l / 65536)),
      (D = l - P * 65536),
      (l = x + P + 65535),
      (P = Math.floor(l / 65536)),
      (x = l - P * 65536),
      (l = m + P + 65535),
      (P = Math.floor(l / 65536)),
      (m = l - P * 65536),
      (l = u + P + 65535),
      (P = Math.floor(l / 65536)),
      (u = l - P * 65536),
      (l = I + P + 65535),
      (P = Math.floor(l / 65536)),
      (I = l - P * 65536),
      (l = K + P + 65535),
      (P = Math.floor(l / 65536)),
      (K = l - P * 65536),
      (l = k + P + 65535),
      (P = Math.floor(l / 65536)),
      (k = l - P * 65536),
      (l = W + P + 65535),
      (P = Math.floor(l / 65536)),
      (W = l - P * 65536),
      (H += P - 1 + 37 * (P - 1)),
      (A[0] = H),
      (A[1] = Y),
      (A[2] = M),
      (A[3] = c),
      (A[4] = v),
      (A[5] = d),
      (A[6] = b),
      (A[7] = _),
      (A[8] = D),
      (A[9] = x),
      (A[10] = m),
      (A[11] = u),
      (A[12] = I),
      (A[13] = K),
      (A[14] = k),
      (A[15] = W);
  }
  function w(A, T) {
    E(A, T, T);
  }
  function S(A, T) {
    const R = i();
    for (let l = 0; l < 16; l++) R[l] = T[l];
    for (let l = 253; l >= 0; l--) w(R, R), l !== 2 && l !== 4 && E(R, R, T);
    for (let l = 0; l < 16; l++) A[l] = R[l];
  }
  function $(A, T) {
    const R = new Uint8Array(32),
      l = new Float64Array(80),
      P = i(),
      H = i(),
      Y = i(),
      M = i(),
      c = i(),
      v = i();
    for (let D = 0; D < 31; D++) R[D] = A[D];
    (R[31] = (A[31] & 127) | 64), (R[0] &= 248), h(l, T);
    for (let D = 0; D < 16; D++) H[D] = l[D];
    P[0] = M[0] = 1;
    for (let D = 254; D >= 0; --D) {
      const x = (R[D >>> 3] >>> (D & 7)) & 1;
      o(P, H, x),
        o(Y, M, x),
        g(c, P, Y),
        y(P, P, Y),
        g(Y, H, M),
        y(H, H, M),
        w(M, c),
        w(v, P),
        E(P, Y, P),
        E(Y, H, c),
        g(c, P, Y),
        y(P, P, Y),
        w(H, P),
        y(Y, M, v),
        E(P, Y, n),
        g(P, P, M),
        E(Y, Y, P),
        E(P, M, v),
        E(M, H, l),
        w(H, c),
        o(P, H, x),
        o(Y, M, x);
    }
    for (let D = 0; D < 16; D++)
      (l[D + 16] = P[D]),
        (l[D + 32] = Y[D]),
        (l[D + 48] = H[D]),
        (l[D + 64] = M[D]);
    const d = l.subarray(32),
      b = l.subarray(16);
    S(d, d), E(b, b, d);
    const _ = new Uint8Array(32);
    return f(_, b), _;
  }
  r.scalarMult = $;
  function q(A) {
    return $(A, s);
  }
  r.scalarMultBase = q;
  function z(A) {
    if (A.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
    const T = new Uint8Array(A);
    return { publicKey: q(T), secretKey: T };
  }
  r.generateKeyPairFromSeed = z;
  function C(A) {
    const T = (0, e.randomBytes)(32, A),
      R = z(T);
    return (0, t.wipe)(T), R;
  }
  r.generateKeyPair = C;
  function L(A, T, R = !1) {
    if (A.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (T.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const l = $(A, T);
    if (R) {
      let P = 0;
      for (let H = 0; H < l.length; H++) P |= l[H];
      if (P === 0) throw new Error("X25519: invalid shared key");
    }
    return l;
  }
  r.sharedKey = L;
})(Ca);
function Uh(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function Ns(r, e) {
  e || (e = r.reduce((s, n) => s + n.length, 0));
  const t = Uh(e);
  let i = 0;
  for (const s of r) t.set(s, i), (i += s.length);
  return t;
}
function Ol(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var n = r.charAt(s),
      a = n.charCodeAt(0);
    if (t[a] !== 255) throw new TypeError(n + " is ambiguous");
    t[a] = s;
  }
  var o = r.length,
    f = r.charAt(0),
    h = Math.log(o) / Math.log(256),
    g = Math.log(256) / Math.log(o);
  function y(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var $ = 0, q = 0, z = 0, C = S.length; z !== C && S[z] === 0; )
      z++, $++;
    for (var L = ((C - z) * g + 1) >>> 0, A = new Uint8Array(L); z !== C; ) {
      for (
        var T = S[z], R = 0, l = L - 1;
        (T !== 0 || R < q) && l !== -1;
        l--, R++
      )
        (T += (256 * A[l]) >>> 0), (A[l] = T % o >>> 0), (T = (T / o) >>> 0);
      if (T !== 0) throw new Error("Non-zero carry");
      (q = R), z++;
    }
    for (var P = L - q; P !== L && A[P] === 0; ) P++;
    for (var H = f.repeat($); P < L; ++P) H += r.charAt(A[P]);
    return H;
  }
  function E(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var $ = 0;
    if (S[$] !== " ") {
      for (var q = 0, z = 0; S[$] === f; ) q++, $++;
      for (
        var C = ((S.length - $) * h + 1) >>> 0, L = new Uint8Array(C);
        S[$];

      ) {
        var A = t[S.charCodeAt($)];
        if (A === 255) return;
        for (var T = 0, R = C - 1; (A !== 0 || T < z) && R !== -1; R--, T++)
          (A += (o * L[R]) >>> 0),
            (L[R] = A % 256 >>> 0),
            (A = (A / 256) >>> 0);
        if (A !== 0) throw new Error("Non-zero carry");
        (z = T), $++;
      }
      if (S[$] !== " ") {
        for (var l = C - z; l !== C && L[l] === 0; ) l++;
        for (var P = new Uint8Array(q + (C - l)), H = q; l !== C; )
          P[H++] = L[l++];
        return P;
      }
    }
  }
  function w(S) {
    var $ = E(S);
    if ($) return $;
    throw new Error(`Non-${e} character`);
  }
  return { encode: y, decodeUnsafe: E, decode: w };
}
var Cl = Ol,
  Tl = Cl;
const Rl = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  $l = (r) => new TextEncoder().encode(r),
  Nl = (r) => new TextDecoder().decode(r);
class Fl {
  constructor(e, t, i) {
    (this.name = e), (this.prefix = t), (this.baseEncode = i);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ql {
  constructor(e, t, i) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return jh(this, e);
  }
}
class Ll {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return jh(this, e);
  }
  decode(e) {
    const t = e[0],
      i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const jh = (r, e) =>
  new Ll({
    ...(r.decoders || { [r.prefix]: r }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class Ul {
  constructor(e, t, i, s) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = i),
      (this.baseDecode = s),
      (this.encoder = new Fl(e, t, i)),
      (this.decoder = new ql(e, t, s));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const hn = ({ name: r, prefix: e, encode: t, decode: i }) => new Ul(r, e, t, i),
  us = ({ prefix: r, name: e, alphabet: t }) => {
    const { encode: i, decode: s } = Tl(t, e);
    return hn({ prefix: r, name: e, encode: i, decode: (n) => Rl(s(n)) });
  },
  jl = (r, e, t, i) => {
    const s = {};
    for (let g = 0; g < e.length; ++g) s[e[g]] = g;
    let n = r.length;
    for (; r[n - 1] === "="; ) --n;
    const a = new Uint8Array(((n * t) / 8) | 0);
    let o = 0,
      f = 0,
      h = 0;
    for (let g = 0; g < n; ++g) {
      const y = s[r[g]];
      if (y === void 0) throw new SyntaxError(`Non-${i} character`);
      (f = (f << t) | y),
        (o += t),
        o >= 8 && ((o -= 8), (a[h++] = 255 & (f >> o)));
    }
    if (o >= t || 255 & (f << (8 - o)))
      throw new SyntaxError("Unexpected end of data");
    return a;
  },
  zl = (r, e, t) => {
    const i = e[e.length - 1] === "=",
      s = (1 << t) - 1;
    let n = "",
      a = 0,
      o = 0;
    for (let f = 0; f < r.length; ++f)
      for (o = (o << 8) | r[f], a += 8; a > t; )
        (a -= t), (n += e[s & (o >> a)]);
    if ((a && (n += e[s & (o << (t - a))]), i))
      for (; (n.length * t) & 7; ) n += "=";
    return n;
  },
  mt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    hn({
      prefix: e,
      name: r,
      encode(s) {
        return zl(s, i, t);
      },
      decode(s) {
        return jl(s, i, t, r);
      },
    }),
  Bl = hn({
    prefix: "\0",
    name: "identity",
    encode: (r) => Nl(r),
    decode: (r) => $l(r),
  }),
  kl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: Bl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hl = mt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  Kl = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: Hl }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Vl = mt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  Gl = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: Vl }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Wl = us({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  Jl = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: Wl }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Yl = mt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Xl = mt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  Ql = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: Yl, base16upper: Xl },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Zl = mt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  e0 = mt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  t0 = mt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  r0 = mt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  i0 = mt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  s0 = mt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  n0 = mt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  a0 = mt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  o0 = mt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  c0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: Zl,
        base32hex: i0,
        base32hexpad: n0,
        base32hexpadupper: a0,
        base32hexupper: s0,
        base32pad: t0,
        base32padupper: r0,
        base32upper: e0,
        base32z: o0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  h0 = us({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  f0 = us({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  u0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: h0, base36upper: f0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  d0 = us({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  l0 = us({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  p0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: d0, base58flickr: l0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  g0 = mt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  b0 = mt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  v0 = mt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  y0 = mt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  m0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: g0,
        base64pad: b0,
        base64url: v0,
        base64urlpad: y0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zh = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  w0 = zh.reduce((r, e, t) => ((r[t] = e), r), []),
  _0 = zh.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function E0(r) {
  return r.reduce((e, t) => ((e += w0[t]), e), "");
}
function S0(r) {
  const e = [];
  for (const t of r) {
    const i = _0[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const I0 = hn({ prefix: "🚀", name: "base256emoji", encode: E0, decode: S0 }),
  x0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: I0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const Po = {
  ...kl,
  ...Kl,
  ...Gl,
  ...Jl,
  ...Ql,
  ...c0,
  ...u0,
  ...p0,
  ...m0,
  ...x0,
};
function Bh(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
const Mo = Bh(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  Tn = Bh(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      const e = Uh(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  kh = {
    utf8: Mo,
    "utf-8": Mo,
    hex: Po.base16,
    latin1: Tn,
    ascii: Tn,
    binary: Tn,
    ...Po,
  };
function lt(r, e = "utf8") {
  const t = kh[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
function pt(r, e = "utf8") {
  const t = kh[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(r).substring(1);
}
var Hh = {};
const D0 = "elliptic",
  P0 = "6.5.7",
  M0 = "EC cryptography",
  A0 = "lib/elliptic.js",
  O0 = ["lib"],
  C0 = {
    lint: "eslint lib test",
    "lint:fix": "npm run lint -- --fix",
    unit: "istanbul test _mocha --reporter=spec test/index.js",
    test: "npm run lint && npm run unit",
    version: "grunt dist && git add dist/",
  },
  T0 = { type: "git", url: "git@github.com:indutny/elliptic" },
  R0 = ["EC", "Elliptic", "curve", "Cryptography"],
  $0 = "Fedor Indutny <fedor@indutny.com>",
  N0 = "MIT",
  F0 = { url: "https://github.com/indutny/elliptic/issues" },
  q0 = "https://github.com/indutny/elliptic",
  L0 = {
    brfs: "^2.0.2",
    coveralls: "^3.1.0",
    eslint: "^7.6.0",
    grunt: "^1.2.1",
    "grunt-browserify": "^5.3.0",
    "grunt-cli": "^1.3.2",
    "grunt-contrib-connect": "^3.0.0",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-contrib-uglify": "^5.0.0",
    "grunt-mocha-istanbul": "^5.0.2",
    "grunt-saucelabs": "^9.0.1",
    istanbul: "^0.4.5",
    mocha: "^8.0.1",
  },
  U0 = {
    "bn.js": "^4.11.9",
    brorand: "^1.1.0",
    "hash.js": "^1.0.0",
    "hmac-drbg": "^1.0.1",
    inherits: "^2.0.4",
    "minimalistic-assert": "^1.0.1",
    "minimalistic-crypto-utils": "^1.0.1",
  },
  j0 = {
    name: D0,
    version: P0,
    description: M0,
    main: A0,
    files: O0,
    scripts: C0,
    repository: T0,
    keywords: R0,
    author: $0,
    license: N0,
    bugs: F0,
    homepage: q0,
    devDependencies: L0,
    dependencies: U0,
  };
var qt = {},
  Ta = { exports: {} };
Ta.exports;
(function (r) {
  (function (e, t) {
    function i(M, c) {
      if (!M) throw new Error(c || "Assertion failed");
    }
    function s(M, c) {
      M.super_ = c;
      var v = function () {};
      (v.prototype = c.prototype),
        (M.prototype = new v()),
        (M.prototype.constructor = M);
    }
    function n(M, c, v) {
      if (n.isBN(M)) return M;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        M !== null &&
          ((c === "le" || c === "be") && ((v = c), (c = 10)),
          this._init(M || 0, c || 10, v || "be"));
    }
    typeof e == "object" ? (e.exports = n) : (t.BN = n),
      (n.BN = n),
      (n.wordSize = 26);
    var a;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (a = window.Buffer)
        : (a = Ru.Buffer);
    } catch {}
    (n.isBN = function (c) {
      return c instanceof n
        ? !0
        : c !== null &&
            typeof c == "object" &&
            c.constructor.wordSize === n.wordSize &&
            Array.isArray(c.words);
    }),
      (n.max = function (c, v) {
        return c.cmp(v) > 0 ? c : v;
      }),
      (n.min = function (c, v) {
        return c.cmp(v) < 0 ? c : v;
      }),
      (n.prototype._init = function (c, v, d) {
        if (typeof c == "number") return this._initNumber(c, v, d);
        if (typeof c == "object") return this._initArray(c, v, d);
        v === "hex" && (v = 16),
          i(v === (v | 0) && v >= 2 && v <= 36),
          (c = c.toString().replace(/\s+/g, ""));
        var b = 0;
        c[0] === "-" && (b++, (this.negative = 1)),
          b < c.length &&
            (v === 16
              ? this._parseHex(c, b, d)
              : (this._parseBase(c, v, b),
                d === "le" && this._initArray(this.toArray(), v, d)));
      }),
      (n.prototype._initNumber = function (c, v, d) {
        c < 0 && ((this.negative = 1), (c = -c)),
          c < 67108864
            ? ((this.words = [c & 67108863]), (this.length = 1))
            : c < 4503599627370496
            ? ((this.words = [c & 67108863, (c / 67108864) & 67108863]),
              (this.length = 2))
            : (i(c < 9007199254740992),
              (this.words = [c & 67108863, (c / 67108864) & 67108863, 1]),
              (this.length = 3)),
          d === "le" && this._initArray(this.toArray(), v, d);
      }),
      (n.prototype._initArray = function (c, v, d) {
        if ((i(typeof c.length == "number"), c.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(c.length / 3)),
          (this.words = new Array(this.length));
        for (var b = 0; b < this.length; b++) this.words[b] = 0;
        var _,
          D,
          x = 0;
        if (d === "be")
          for (b = c.length - 1, _ = 0; b >= 0; b -= 3)
            (D = c[b] | (c[b - 1] << 8) | (c[b - 2] << 16)),
              (this.words[_] |= (D << x) & 67108863),
              (this.words[_ + 1] = (D >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), _++);
        else if (d === "le")
          for (b = 0, _ = 0; b < c.length; b += 3)
            (D = c[b] | (c[b + 1] << 8) | (c[b + 2] << 16)),
              (this.words[_] |= (D << x) & 67108863),
              (this.words[_ + 1] = (D >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), _++);
        return this.strip();
      });
    function o(M, c) {
      var v = M.charCodeAt(c);
      return v >= 65 && v <= 70
        ? v - 55
        : v >= 97 && v <= 102
        ? v - 87
        : (v - 48) & 15;
    }
    function f(M, c, v) {
      var d = o(M, v);
      return v - 1 >= c && (d |= o(M, v - 1) << 4), d;
    }
    n.prototype._parseHex = function (c, v, d) {
      (this.length = Math.ceil((c.length - v) / 6)),
        (this.words = new Array(this.length));
      for (var b = 0; b < this.length; b++) this.words[b] = 0;
      var _ = 0,
        D = 0,
        x;
      if (d === "be")
        for (b = c.length - 1; b >= v; b -= 2)
          (x = f(c, v, b) << _),
            (this.words[D] |= x & 67108863),
            _ >= 18
              ? ((_ -= 18), (D += 1), (this.words[D] |= x >>> 26))
              : (_ += 8);
      else {
        var m = c.length - v;
        for (b = m % 2 === 0 ? v + 1 : v; b < c.length; b += 2)
          (x = f(c, v, b) << _),
            (this.words[D] |= x & 67108863),
            _ >= 18
              ? ((_ -= 18), (D += 1), (this.words[D] |= x >>> 26))
              : (_ += 8);
      }
      this.strip();
    };
    function h(M, c, v, d) {
      for (var b = 0, _ = Math.min(M.length, v), D = c; D < _; D++) {
        var x = M.charCodeAt(D) - 48;
        (b *= d),
          x >= 49
            ? (b += x - 49 + 10)
            : x >= 17
            ? (b += x - 17 + 10)
            : (b += x);
      }
      return b;
    }
    (n.prototype._parseBase = function (c, v, d) {
      (this.words = [0]), (this.length = 1);
      for (var b = 0, _ = 1; _ <= 67108863; _ *= v) b++;
      b--, (_ = (_ / v) | 0);
      for (
        var D = c.length - d,
          x = D % b,
          m = Math.min(D, D - x) + d,
          u = 0,
          I = d;
        I < m;
        I += b
      )
        (u = h(c, I, I + b, v)),
          this.imuln(_),
          this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
      if (x !== 0) {
        var K = 1;
        for (u = h(c, I, c.length, v), I = 0; I < x; I++) K *= v;
        this.imuln(K),
          this.words[0] + u < 67108864 ? (this.words[0] += u) : this._iaddn(u);
      }
      this.strip();
    }),
      (n.prototype.copy = function (c) {
        c.words = new Array(this.length);
        for (var v = 0; v < this.length; v++) c.words[v] = this.words[v];
        (c.length = this.length),
          (c.negative = this.negative),
          (c.red = this.red);
      }),
      (n.prototype.clone = function () {
        var c = new n(null);
        return this.copy(c), c;
      }),
      (n.prototype._expand = function (c) {
        for (; this.length < c; ) this.words[this.length++] = 0;
        return this;
      }),
      (n.prototype.strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (n.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      (n.prototype.inspect = function () {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      });
    var g = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      y = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      E = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (n.prototype.toString = function (c, v) {
      (c = c || 10), (v = v | 0 || 1);
      var d;
      if (c === 16 || c === "hex") {
        d = "";
        for (var b = 0, _ = 0, D = 0; D < this.length; D++) {
          var x = this.words[D],
            m = (((x << b) | _) & 16777215).toString(16);
          (_ = (x >>> (24 - b)) & 16777215),
            _ !== 0 || D !== this.length - 1
              ? (d = g[6 - m.length] + m + d)
              : (d = m + d),
            (b += 2),
            b >= 26 && ((b -= 26), D--);
        }
        for (_ !== 0 && (d = _.toString(16) + d); d.length % v !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      if (c === (c | 0) && c >= 2 && c <= 36) {
        var u = y[c],
          I = E[c];
        d = "";
        var K = this.clone();
        for (K.negative = 0; !K.isZero(); ) {
          var k = K.modn(I).toString(c);
          (K = K.idivn(I)),
            K.isZero() ? (d = k + d) : (d = g[u - k.length] + k + d);
        }
        for (this.isZero() && (d = "0" + d); d.length % v !== 0; ) d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      i(!1, "Base should be between 2 and 36");
    }),
      (n.prototype.toNumber = function () {
        var c = this.words[0];
        return (
          this.length === 2
            ? (c += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (c += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              i(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -c : c
        );
      }),
      (n.prototype.toJSON = function () {
        return this.toString(16);
      }),
      (n.prototype.toBuffer = function (c, v) {
        return i(typeof a < "u"), this.toArrayLike(a, c, v);
      }),
      (n.prototype.toArray = function (c, v) {
        return this.toArrayLike(Array, c, v);
      }),
      (n.prototype.toArrayLike = function (c, v, d) {
        var b = this.byteLength(),
          _ = d || Math.max(1, b);
        i(b <= _, "byte array longer than desired length"),
          i(_ > 0, "Requested array length <= 0"),
          this.strip();
        var D = v === "le",
          x = new c(_),
          m,
          u,
          I = this.clone();
        if (D) {
          for (u = 0; !I.isZero(); u++)
            (m = I.andln(255)), I.iushrn(8), (x[u] = m);
          for (; u < _; u++) x[u] = 0;
        } else {
          for (u = 0; u < _ - b; u++) x[u] = 0;
          for (u = 0; !I.isZero(); u++)
            (m = I.andln(255)), I.iushrn(8), (x[_ - u - 1] = m);
        }
        return x;
      }),
      Math.clz32
        ? (n.prototype._countBits = function (c) {
            return 32 - Math.clz32(c);
          })
        : (n.prototype._countBits = function (c) {
            var v = c,
              d = 0;
            return (
              v >= 4096 && ((d += 13), (v >>>= 13)),
              v >= 64 && ((d += 7), (v >>>= 7)),
              v >= 8 && ((d += 4), (v >>>= 4)),
              v >= 2 && ((d += 2), (v >>>= 2)),
              d + v
            );
          }),
      (n.prototype._zeroBits = function (c) {
        if (c === 0) return 26;
        var v = c,
          d = 0;
        return (
          v & 8191 || ((d += 13), (v >>>= 13)),
          v & 127 || ((d += 7), (v >>>= 7)),
          v & 15 || ((d += 4), (v >>>= 4)),
          v & 3 || ((d += 2), (v >>>= 2)),
          v & 1 || d++,
          d
        );
      }),
      (n.prototype.bitLength = function () {
        var c = this.words[this.length - 1],
          v = this._countBits(c);
        return (this.length - 1) * 26 + v;
      });
    function w(M) {
      for (var c = new Array(M.bitLength()), v = 0; v < c.length; v++) {
        var d = (v / 26) | 0,
          b = v % 26;
        c[v] = (M.words[d] & (1 << b)) >>> b;
      }
      return c;
    }
    (n.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var c = 0, v = 0; v < this.length; v++) {
        var d = this._zeroBits(this.words[v]);
        if (((c += d), d !== 26)) break;
      }
      return c;
    }),
      (n.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (n.prototype.toTwos = function (c) {
        return this.negative !== 0
          ? this.abs().inotn(c).iaddn(1)
          : this.clone();
      }),
      (n.prototype.fromTwos = function (c) {
        return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone();
      }),
      (n.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (n.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (n.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (n.prototype.iuor = function (c) {
        for (; this.length < c.length; ) this.words[this.length++] = 0;
        for (var v = 0; v < c.length; v++)
          this.words[v] = this.words[v] | c.words[v];
        return this.strip();
      }),
      (n.prototype.ior = function (c) {
        return i((this.negative | c.negative) === 0), this.iuor(c);
      }),
      (n.prototype.or = function (c) {
        return this.length > c.length
          ? this.clone().ior(c)
          : c.clone().ior(this);
      }),
      (n.prototype.uor = function (c) {
        return this.length > c.length
          ? this.clone().iuor(c)
          : c.clone().iuor(this);
      }),
      (n.prototype.iuand = function (c) {
        var v;
        this.length > c.length ? (v = c) : (v = this);
        for (var d = 0; d < v.length; d++)
          this.words[d] = this.words[d] & c.words[d];
        return (this.length = v.length), this.strip();
      }),
      (n.prototype.iand = function (c) {
        return i((this.negative | c.negative) === 0), this.iuand(c);
      }),
      (n.prototype.and = function (c) {
        return this.length > c.length
          ? this.clone().iand(c)
          : c.clone().iand(this);
      }),
      (n.prototype.uand = function (c) {
        return this.length > c.length
          ? this.clone().iuand(c)
          : c.clone().iuand(this);
      }),
      (n.prototype.iuxor = function (c) {
        var v, d;
        this.length > c.length ? ((v = this), (d = c)) : ((v = c), (d = this));
        for (var b = 0; b < d.length; b++)
          this.words[b] = v.words[b] ^ d.words[b];
        if (this !== v) for (; b < v.length; b++) this.words[b] = v.words[b];
        return (this.length = v.length), this.strip();
      }),
      (n.prototype.ixor = function (c) {
        return i((this.negative | c.negative) === 0), this.iuxor(c);
      }),
      (n.prototype.xor = function (c) {
        return this.length > c.length
          ? this.clone().ixor(c)
          : c.clone().ixor(this);
      }),
      (n.prototype.uxor = function (c) {
        return this.length > c.length
          ? this.clone().iuxor(c)
          : c.clone().iuxor(this);
      }),
      (n.prototype.inotn = function (c) {
        i(typeof c == "number" && c >= 0);
        var v = Math.ceil(c / 26) | 0,
          d = c % 26;
        this._expand(v), d > 0 && v--;
        for (var b = 0; b < v; b++) this.words[b] = ~this.words[b] & 67108863;
        return (
          d > 0 && (this.words[b] = ~this.words[b] & (67108863 >> (26 - d))),
          this.strip()
        );
      }),
      (n.prototype.notn = function (c) {
        return this.clone().inotn(c);
      }),
      (n.prototype.setn = function (c, v) {
        i(typeof c == "number" && c >= 0);
        var d = (c / 26) | 0,
          b = c % 26;
        return (
          this._expand(d + 1),
          v
            ? (this.words[d] = this.words[d] | (1 << b))
            : (this.words[d] = this.words[d] & ~(1 << b)),
          this.strip()
        );
      }),
      (n.prototype.iadd = function (c) {
        var v;
        if (this.negative !== 0 && c.negative === 0)
          return (
            (this.negative = 0),
            (v = this.isub(c)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && c.negative !== 0)
          return (
            (c.negative = 0),
            (v = this.isub(c)),
            (c.negative = 1),
            v._normSign()
          );
        var d, b;
        this.length > c.length ? ((d = this), (b = c)) : ((d = c), (b = this));
        for (var _ = 0, D = 0; D < b.length; D++)
          (v = (d.words[D] | 0) + (b.words[D] | 0) + _),
            (this.words[D] = v & 67108863),
            (_ = v >>> 26);
        for (; _ !== 0 && D < d.length; D++)
          (v = (d.words[D] | 0) + _),
            (this.words[D] = v & 67108863),
            (_ = v >>> 26);
        if (((this.length = d.length), _ !== 0))
          (this.words[this.length] = _), this.length++;
        else if (d !== this)
          for (; D < d.length; D++) this.words[D] = d.words[D];
        return this;
      }),
      (n.prototype.add = function (c) {
        var v;
        return c.negative !== 0 && this.negative === 0
          ? ((c.negative = 0), (v = this.sub(c)), (c.negative ^= 1), v)
          : c.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (v = c.sub(this)), (this.negative = 1), v)
          : this.length > c.length
          ? this.clone().iadd(c)
          : c.clone().iadd(this);
      }),
      (n.prototype.isub = function (c) {
        if (c.negative !== 0) {
          c.negative = 0;
          var v = this.iadd(c);
          return (c.negative = 1), v._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(c),
            (this.negative = 1),
            this._normSign()
          );
        var d = this.cmp(c);
        if (d === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var b, _;
        d > 0 ? ((b = this), (_ = c)) : ((b = c), (_ = this));
        for (var D = 0, x = 0; x < _.length; x++)
          (v = (b.words[x] | 0) - (_.words[x] | 0) + D),
            (D = v >> 26),
            (this.words[x] = v & 67108863);
        for (; D !== 0 && x < b.length; x++)
          (v = (b.words[x] | 0) + D),
            (D = v >> 26),
            (this.words[x] = v & 67108863);
        if (D === 0 && x < b.length && b !== this)
          for (; x < b.length; x++) this.words[x] = b.words[x];
        return (
          (this.length = Math.max(this.length, x)),
          b !== this && (this.negative = 1),
          this.strip()
        );
      }),
      (n.prototype.sub = function (c) {
        return this.clone().isub(c);
      });
    function S(M, c, v) {
      v.negative = c.negative ^ M.negative;
      var d = (M.length + c.length) | 0;
      (v.length = d), (d = (d - 1) | 0);
      var b = M.words[0] | 0,
        _ = c.words[0] | 0,
        D = b * _,
        x = D & 67108863,
        m = (D / 67108864) | 0;
      v.words[0] = x;
      for (var u = 1; u < d; u++) {
        for (
          var I = m >>> 26,
            K = m & 67108863,
            k = Math.min(u, c.length - 1),
            W = Math.max(0, u - M.length + 1);
          W <= k;
          W++
        ) {
          var V = (u - W) | 0;
          (b = M.words[V] | 0),
            (_ = c.words[W] | 0),
            (D = b * _ + K),
            (I += (D / 67108864) | 0),
            (K = D & 67108863);
        }
        (v.words[u] = K | 0), (m = I | 0);
      }
      return m !== 0 ? (v.words[u] = m | 0) : v.length--, v.strip();
    }
    var $ = function (c, v, d) {
      var b = c.words,
        _ = v.words,
        D = d.words,
        x = 0,
        m,
        u,
        I,
        K = b[0] | 0,
        k = K & 8191,
        W = K >>> 13,
        V = b[1] | 0,
        ee = V & 8191,
        U = V >>> 13,
        B = b[2] | 0,
        F = B & 8191,
        p = B >>> 13,
        N = b[3] | 0,
        J = N & 8191,
        X = N >>> 13,
        me = b[4] | 0,
        fe = me & 8191,
        ce = me >>> 13,
        qe = b[5] | 0,
        ve = qe & 8191,
        pe = qe >>> 13,
        $e = b[6] | 0,
        he = $e & 8191,
        oe = $e >>> 13,
        xe = b[7] | 0,
        ne = xe & 8191,
        se = xe >>> 13,
        ge = b[8] | 0,
        re = ge & 8191,
        ae = ge >>> 13,
        Te = b[9] | 0,
        ie = Te & 8191,
        ue = Te >>> 13,
        Fe = _[0] | 0,
        de = Fe & 8191,
        le = Fe >>> 13,
        Le = _[1] | 0,
        je = Le & 8191,
        ze = Le >>> 13,
        Yt = _[2] | 0,
        Ue = Yt & 8191,
        He = Yt >>> 13,
        Ir = _[3] | 0,
        Je = Ir & 8191,
        we = Ir >>> 13,
        Ye = _[4] | 0,
        _e = Ye & 8191,
        Ee = Ye >>> 13,
        Ze = _[5] | 0,
        be = Ze & 8191,
        Pe = Ze >>> 13,
        at = _[6] | 0,
        Me = at & 8191,
        Ae = at >>> 13,
        ot = _[7] | 0,
        De = ot & 8191,
        Se = ot >>> 13,
        Ke = _[8] | 0,
        Oe = Ke & 8191,
        Ce = Ke >>> 13,
        Es = _[9] | 0,
        tt = Es & 8191,
        rt = Es >>> 13;
      (d.negative = c.negative ^ v.negative),
        (d.length = 19),
        (m = Math.imul(k, de)),
        (u = Math.imul(k, le)),
        (u = (u + Math.imul(W, de)) | 0),
        (I = Math.imul(W, le));
      var Rt = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Rt >>> 26)) | 0),
        (Rt &= 67108863),
        (m = Math.imul(ee, de)),
        (u = Math.imul(ee, le)),
        (u = (u + Math.imul(U, de)) | 0),
        (I = Math.imul(U, le)),
        (m = (m + Math.imul(k, je)) | 0),
        (u = (u + Math.imul(k, ze)) | 0),
        (u = (u + Math.imul(W, je)) | 0),
        (I = (I + Math.imul(W, ze)) | 0);
      var xi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (xi >>> 26)) | 0),
        (xi &= 67108863),
        (m = Math.imul(F, de)),
        (u = Math.imul(F, le)),
        (u = (u + Math.imul(p, de)) | 0),
        (I = Math.imul(p, le)),
        (m = (m + Math.imul(ee, je)) | 0),
        (u = (u + Math.imul(ee, ze)) | 0),
        (u = (u + Math.imul(U, je)) | 0),
        (I = (I + Math.imul(U, ze)) | 0),
        (m = (m + Math.imul(k, Ue)) | 0),
        (u = (u + Math.imul(k, He)) | 0),
        (u = (u + Math.imul(W, Ue)) | 0),
        (I = (I + Math.imul(W, He)) | 0);
      var Di = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Di >>> 26)) | 0),
        (Di &= 67108863),
        (m = Math.imul(J, de)),
        (u = Math.imul(J, le)),
        (u = (u + Math.imul(X, de)) | 0),
        (I = Math.imul(X, le)),
        (m = (m + Math.imul(F, je)) | 0),
        (u = (u + Math.imul(F, ze)) | 0),
        (u = (u + Math.imul(p, je)) | 0),
        (I = (I + Math.imul(p, ze)) | 0),
        (m = (m + Math.imul(ee, Ue)) | 0),
        (u = (u + Math.imul(ee, He)) | 0),
        (u = (u + Math.imul(U, Ue)) | 0),
        (I = (I + Math.imul(U, He)) | 0),
        (m = (m + Math.imul(k, Je)) | 0),
        (u = (u + Math.imul(k, we)) | 0),
        (u = (u + Math.imul(W, Je)) | 0),
        (I = (I + Math.imul(W, we)) | 0);
      var Pi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Pi >>> 26)) | 0),
        (Pi &= 67108863),
        (m = Math.imul(fe, de)),
        (u = Math.imul(fe, le)),
        (u = (u + Math.imul(ce, de)) | 0),
        (I = Math.imul(ce, le)),
        (m = (m + Math.imul(J, je)) | 0),
        (u = (u + Math.imul(J, ze)) | 0),
        (u = (u + Math.imul(X, je)) | 0),
        (I = (I + Math.imul(X, ze)) | 0),
        (m = (m + Math.imul(F, Ue)) | 0),
        (u = (u + Math.imul(F, He)) | 0),
        (u = (u + Math.imul(p, Ue)) | 0),
        (I = (I + Math.imul(p, He)) | 0),
        (m = (m + Math.imul(ee, Je)) | 0),
        (u = (u + Math.imul(ee, we)) | 0),
        (u = (u + Math.imul(U, Je)) | 0),
        (I = (I + Math.imul(U, we)) | 0),
        (m = (m + Math.imul(k, _e)) | 0),
        (u = (u + Math.imul(k, Ee)) | 0),
        (u = (u + Math.imul(W, _e)) | 0),
        (I = (I + Math.imul(W, Ee)) | 0);
      var Mi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Mi >>> 26)) | 0),
        (Mi &= 67108863),
        (m = Math.imul(ve, de)),
        (u = Math.imul(ve, le)),
        (u = (u + Math.imul(pe, de)) | 0),
        (I = Math.imul(pe, le)),
        (m = (m + Math.imul(fe, je)) | 0),
        (u = (u + Math.imul(fe, ze)) | 0),
        (u = (u + Math.imul(ce, je)) | 0),
        (I = (I + Math.imul(ce, ze)) | 0),
        (m = (m + Math.imul(J, Ue)) | 0),
        (u = (u + Math.imul(J, He)) | 0),
        (u = (u + Math.imul(X, Ue)) | 0),
        (I = (I + Math.imul(X, He)) | 0),
        (m = (m + Math.imul(F, Je)) | 0),
        (u = (u + Math.imul(F, we)) | 0),
        (u = (u + Math.imul(p, Je)) | 0),
        (I = (I + Math.imul(p, we)) | 0),
        (m = (m + Math.imul(ee, _e)) | 0),
        (u = (u + Math.imul(ee, Ee)) | 0),
        (u = (u + Math.imul(U, _e)) | 0),
        (I = (I + Math.imul(U, Ee)) | 0),
        (m = (m + Math.imul(k, be)) | 0),
        (u = (u + Math.imul(k, Pe)) | 0),
        (u = (u + Math.imul(W, be)) | 0),
        (I = (I + Math.imul(W, Pe)) | 0);
      var Ai = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Ai >>> 26)) | 0),
        (Ai &= 67108863),
        (m = Math.imul(he, de)),
        (u = Math.imul(he, le)),
        (u = (u + Math.imul(oe, de)) | 0),
        (I = Math.imul(oe, le)),
        (m = (m + Math.imul(ve, je)) | 0),
        (u = (u + Math.imul(ve, ze)) | 0),
        (u = (u + Math.imul(pe, je)) | 0),
        (I = (I + Math.imul(pe, ze)) | 0),
        (m = (m + Math.imul(fe, Ue)) | 0),
        (u = (u + Math.imul(fe, He)) | 0),
        (u = (u + Math.imul(ce, Ue)) | 0),
        (I = (I + Math.imul(ce, He)) | 0),
        (m = (m + Math.imul(J, Je)) | 0),
        (u = (u + Math.imul(J, we)) | 0),
        (u = (u + Math.imul(X, Je)) | 0),
        (I = (I + Math.imul(X, we)) | 0),
        (m = (m + Math.imul(F, _e)) | 0),
        (u = (u + Math.imul(F, Ee)) | 0),
        (u = (u + Math.imul(p, _e)) | 0),
        (I = (I + Math.imul(p, Ee)) | 0),
        (m = (m + Math.imul(ee, be)) | 0),
        (u = (u + Math.imul(ee, Pe)) | 0),
        (u = (u + Math.imul(U, be)) | 0),
        (I = (I + Math.imul(U, Pe)) | 0),
        (m = (m + Math.imul(k, Me)) | 0),
        (u = (u + Math.imul(k, Ae)) | 0),
        (u = (u + Math.imul(W, Me)) | 0),
        (I = (I + Math.imul(W, Ae)) | 0);
      var Xt = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Xt >>> 26)) | 0),
        (Xt &= 67108863),
        (m = Math.imul(ne, de)),
        (u = Math.imul(ne, le)),
        (u = (u + Math.imul(se, de)) | 0),
        (I = Math.imul(se, le)),
        (m = (m + Math.imul(he, je)) | 0),
        (u = (u + Math.imul(he, ze)) | 0),
        (u = (u + Math.imul(oe, je)) | 0),
        (I = (I + Math.imul(oe, ze)) | 0),
        (m = (m + Math.imul(ve, Ue)) | 0),
        (u = (u + Math.imul(ve, He)) | 0),
        (u = (u + Math.imul(pe, Ue)) | 0),
        (I = (I + Math.imul(pe, He)) | 0),
        (m = (m + Math.imul(fe, Je)) | 0),
        (u = (u + Math.imul(fe, we)) | 0),
        (u = (u + Math.imul(ce, Je)) | 0),
        (I = (I + Math.imul(ce, we)) | 0),
        (m = (m + Math.imul(J, _e)) | 0),
        (u = (u + Math.imul(J, Ee)) | 0),
        (u = (u + Math.imul(X, _e)) | 0),
        (I = (I + Math.imul(X, Ee)) | 0),
        (m = (m + Math.imul(F, be)) | 0),
        (u = (u + Math.imul(F, Pe)) | 0),
        (u = (u + Math.imul(p, be)) | 0),
        (I = (I + Math.imul(p, Pe)) | 0),
        (m = (m + Math.imul(ee, Me)) | 0),
        (u = (u + Math.imul(ee, Ae)) | 0),
        (u = (u + Math.imul(U, Me)) | 0),
        (I = (I + Math.imul(U, Ae)) | 0),
        (m = (m + Math.imul(k, De)) | 0),
        (u = (u + Math.imul(k, Se)) | 0),
        (u = (u + Math.imul(W, De)) | 0),
        (I = (I + Math.imul(W, Se)) | 0);
      var Oi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Oi >>> 26)) | 0),
        (Oi &= 67108863),
        (m = Math.imul(re, de)),
        (u = Math.imul(re, le)),
        (u = (u + Math.imul(ae, de)) | 0),
        (I = Math.imul(ae, le)),
        (m = (m + Math.imul(ne, je)) | 0),
        (u = (u + Math.imul(ne, ze)) | 0),
        (u = (u + Math.imul(se, je)) | 0),
        (I = (I + Math.imul(se, ze)) | 0),
        (m = (m + Math.imul(he, Ue)) | 0),
        (u = (u + Math.imul(he, He)) | 0),
        (u = (u + Math.imul(oe, Ue)) | 0),
        (I = (I + Math.imul(oe, He)) | 0),
        (m = (m + Math.imul(ve, Je)) | 0),
        (u = (u + Math.imul(ve, we)) | 0),
        (u = (u + Math.imul(pe, Je)) | 0),
        (I = (I + Math.imul(pe, we)) | 0),
        (m = (m + Math.imul(fe, _e)) | 0),
        (u = (u + Math.imul(fe, Ee)) | 0),
        (u = (u + Math.imul(ce, _e)) | 0),
        (I = (I + Math.imul(ce, Ee)) | 0),
        (m = (m + Math.imul(J, be)) | 0),
        (u = (u + Math.imul(J, Pe)) | 0),
        (u = (u + Math.imul(X, be)) | 0),
        (I = (I + Math.imul(X, Pe)) | 0),
        (m = (m + Math.imul(F, Me)) | 0),
        (u = (u + Math.imul(F, Ae)) | 0),
        (u = (u + Math.imul(p, Me)) | 0),
        (I = (I + Math.imul(p, Ae)) | 0),
        (m = (m + Math.imul(ee, De)) | 0),
        (u = (u + Math.imul(ee, Se)) | 0),
        (u = (u + Math.imul(U, De)) | 0),
        (I = (I + Math.imul(U, Se)) | 0),
        (m = (m + Math.imul(k, Oe)) | 0),
        (u = (u + Math.imul(k, Ce)) | 0),
        (u = (u + Math.imul(W, Oe)) | 0),
        (I = (I + Math.imul(W, Ce)) | 0);
      var Ci = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Ci >>> 26)) | 0),
        (Ci &= 67108863),
        (m = Math.imul(ie, de)),
        (u = Math.imul(ie, le)),
        (u = (u + Math.imul(ue, de)) | 0),
        (I = Math.imul(ue, le)),
        (m = (m + Math.imul(re, je)) | 0),
        (u = (u + Math.imul(re, ze)) | 0),
        (u = (u + Math.imul(ae, je)) | 0),
        (I = (I + Math.imul(ae, ze)) | 0),
        (m = (m + Math.imul(ne, Ue)) | 0),
        (u = (u + Math.imul(ne, He)) | 0),
        (u = (u + Math.imul(se, Ue)) | 0),
        (I = (I + Math.imul(se, He)) | 0),
        (m = (m + Math.imul(he, Je)) | 0),
        (u = (u + Math.imul(he, we)) | 0),
        (u = (u + Math.imul(oe, Je)) | 0),
        (I = (I + Math.imul(oe, we)) | 0),
        (m = (m + Math.imul(ve, _e)) | 0),
        (u = (u + Math.imul(ve, Ee)) | 0),
        (u = (u + Math.imul(pe, _e)) | 0),
        (I = (I + Math.imul(pe, Ee)) | 0),
        (m = (m + Math.imul(fe, be)) | 0),
        (u = (u + Math.imul(fe, Pe)) | 0),
        (u = (u + Math.imul(ce, be)) | 0),
        (I = (I + Math.imul(ce, Pe)) | 0),
        (m = (m + Math.imul(J, Me)) | 0),
        (u = (u + Math.imul(J, Ae)) | 0),
        (u = (u + Math.imul(X, Me)) | 0),
        (I = (I + Math.imul(X, Ae)) | 0),
        (m = (m + Math.imul(F, De)) | 0),
        (u = (u + Math.imul(F, Se)) | 0),
        (u = (u + Math.imul(p, De)) | 0),
        (I = (I + Math.imul(p, Se)) | 0),
        (m = (m + Math.imul(ee, Oe)) | 0),
        (u = (u + Math.imul(ee, Ce)) | 0),
        (u = (u + Math.imul(U, Oe)) | 0),
        (I = (I + Math.imul(U, Ce)) | 0),
        (m = (m + Math.imul(k, tt)) | 0),
        (u = (u + Math.imul(k, rt)) | 0),
        (u = (u + Math.imul(W, tt)) | 0),
        (I = (I + Math.imul(W, rt)) | 0);
      var Ti = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Ti >>> 26)) | 0),
        (Ti &= 67108863),
        (m = Math.imul(ie, je)),
        (u = Math.imul(ie, ze)),
        (u = (u + Math.imul(ue, je)) | 0),
        (I = Math.imul(ue, ze)),
        (m = (m + Math.imul(re, Ue)) | 0),
        (u = (u + Math.imul(re, He)) | 0),
        (u = (u + Math.imul(ae, Ue)) | 0),
        (I = (I + Math.imul(ae, He)) | 0),
        (m = (m + Math.imul(ne, Je)) | 0),
        (u = (u + Math.imul(ne, we)) | 0),
        (u = (u + Math.imul(se, Je)) | 0),
        (I = (I + Math.imul(se, we)) | 0),
        (m = (m + Math.imul(he, _e)) | 0),
        (u = (u + Math.imul(he, Ee)) | 0),
        (u = (u + Math.imul(oe, _e)) | 0),
        (I = (I + Math.imul(oe, Ee)) | 0),
        (m = (m + Math.imul(ve, be)) | 0),
        (u = (u + Math.imul(ve, Pe)) | 0),
        (u = (u + Math.imul(pe, be)) | 0),
        (I = (I + Math.imul(pe, Pe)) | 0),
        (m = (m + Math.imul(fe, Me)) | 0),
        (u = (u + Math.imul(fe, Ae)) | 0),
        (u = (u + Math.imul(ce, Me)) | 0),
        (I = (I + Math.imul(ce, Ae)) | 0),
        (m = (m + Math.imul(J, De)) | 0),
        (u = (u + Math.imul(J, Se)) | 0),
        (u = (u + Math.imul(X, De)) | 0),
        (I = (I + Math.imul(X, Se)) | 0),
        (m = (m + Math.imul(F, Oe)) | 0),
        (u = (u + Math.imul(F, Ce)) | 0),
        (u = (u + Math.imul(p, Oe)) | 0),
        (I = (I + Math.imul(p, Ce)) | 0),
        (m = (m + Math.imul(ee, tt)) | 0),
        (u = (u + Math.imul(ee, rt)) | 0),
        (u = (u + Math.imul(U, tt)) | 0),
        (I = (I + Math.imul(U, rt)) | 0);
      var Ri = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Ri >>> 26)) | 0),
        (Ri &= 67108863),
        (m = Math.imul(ie, Ue)),
        (u = Math.imul(ie, He)),
        (u = (u + Math.imul(ue, Ue)) | 0),
        (I = Math.imul(ue, He)),
        (m = (m + Math.imul(re, Je)) | 0),
        (u = (u + Math.imul(re, we)) | 0),
        (u = (u + Math.imul(ae, Je)) | 0),
        (I = (I + Math.imul(ae, we)) | 0),
        (m = (m + Math.imul(ne, _e)) | 0),
        (u = (u + Math.imul(ne, Ee)) | 0),
        (u = (u + Math.imul(se, _e)) | 0),
        (I = (I + Math.imul(se, Ee)) | 0),
        (m = (m + Math.imul(he, be)) | 0),
        (u = (u + Math.imul(he, Pe)) | 0),
        (u = (u + Math.imul(oe, be)) | 0),
        (I = (I + Math.imul(oe, Pe)) | 0),
        (m = (m + Math.imul(ve, Me)) | 0),
        (u = (u + Math.imul(ve, Ae)) | 0),
        (u = (u + Math.imul(pe, Me)) | 0),
        (I = (I + Math.imul(pe, Ae)) | 0),
        (m = (m + Math.imul(fe, De)) | 0),
        (u = (u + Math.imul(fe, Se)) | 0),
        (u = (u + Math.imul(ce, De)) | 0),
        (I = (I + Math.imul(ce, Se)) | 0),
        (m = (m + Math.imul(J, Oe)) | 0),
        (u = (u + Math.imul(J, Ce)) | 0),
        (u = (u + Math.imul(X, Oe)) | 0),
        (I = (I + Math.imul(X, Ce)) | 0),
        (m = (m + Math.imul(F, tt)) | 0),
        (u = (u + Math.imul(F, rt)) | 0),
        (u = (u + Math.imul(p, tt)) | 0),
        (I = (I + Math.imul(p, rt)) | 0);
      var $i = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + ($i >>> 26)) | 0),
        ($i &= 67108863),
        (m = Math.imul(ie, Je)),
        (u = Math.imul(ie, we)),
        (u = (u + Math.imul(ue, Je)) | 0),
        (I = Math.imul(ue, we)),
        (m = (m + Math.imul(re, _e)) | 0),
        (u = (u + Math.imul(re, Ee)) | 0),
        (u = (u + Math.imul(ae, _e)) | 0),
        (I = (I + Math.imul(ae, Ee)) | 0),
        (m = (m + Math.imul(ne, be)) | 0),
        (u = (u + Math.imul(ne, Pe)) | 0),
        (u = (u + Math.imul(se, be)) | 0),
        (I = (I + Math.imul(se, Pe)) | 0),
        (m = (m + Math.imul(he, Me)) | 0),
        (u = (u + Math.imul(he, Ae)) | 0),
        (u = (u + Math.imul(oe, Me)) | 0),
        (I = (I + Math.imul(oe, Ae)) | 0),
        (m = (m + Math.imul(ve, De)) | 0),
        (u = (u + Math.imul(ve, Se)) | 0),
        (u = (u + Math.imul(pe, De)) | 0),
        (I = (I + Math.imul(pe, Se)) | 0),
        (m = (m + Math.imul(fe, Oe)) | 0),
        (u = (u + Math.imul(fe, Ce)) | 0),
        (u = (u + Math.imul(ce, Oe)) | 0),
        (I = (I + Math.imul(ce, Ce)) | 0),
        (m = (m + Math.imul(J, tt)) | 0),
        (u = (u + Math.imul(J, rt)) | 0),
        (u = (u + Math.imul(X, tt)) | 0),
        (I = (I + Math.imul(X, rt)) | 0);
      var xr = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (xr >>> 26)) | 0),
        (xr &= 67108863),
        (m = Math.imul(ie, _e)),
        (u = Math.imul(ie, Ee)),
        (u = (u + Math.imul(ue, _e)) | 0),
        (I = Math.imul(ue, Ee)),
        (m = (m + Math.imul(re, be)) | 0),
        (u = (u + Math.imul(re, Pe)) | 0),
        (u = (u + Math.imul(ae, be)) | 0),
        (I = (I + Math.imul(ae, Pe)) | 0),
        (m = (m + Math.imul(ne, Me)) | 0),
        (u = (u + Math.imul(ne, Ae)) | 0),
        (u = (u + Math.imul(se, Me)) | 0),
        (I = (I + Math.imul(se, Ae)) | 0),
        (m = (m + Math.imul(he, De)) | 0),
        (u = (u + Math.imul(he, Se)) | 0),
        (u = (u + Math.imul(oe, De)) | 0),
        (I = (I + Math.imul(oe, Se)) | 0),
        (m = (m + Math.imul(ve, Oe)) | 0),
        (u = (u + Math.imul(ve, Ce)) | 0),
        (u = (u + Math.imul(pe, Oe)) | 0),
        (I = (I + Math.imul(pe, Ce)) | 0),
        (m = (m + Math.imul(fe, tt)) | 0),
        (u = (u + Math.imul(fe, rt)) | 0),
        (u = (u + Math.imul(ce, tt)) | 0),
        (I = (I + Math.imul(ce, rt)) | 0);
      var Ni = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Ni >>> 26)) | 0),
        (Ni &= 67108863),
        (m = Math.imul(ie, be)),
        (u = Math.imul(ie, Pe)),
        (u = (u + Math.imul(ue, be)) | 0),
        (I = Math.imul(ue, Pe)),
        (m = (m + Math.imul(re, Me)) | 0),
        (u = (u + Math.imul(re, Ae)) | 0),
        (u = (u + Math.imul(ae, Me)) | 0),
        (I = (I + Math.imul(ae, Ae)) | 0),
        (m = (m + Math.imul(ne, De)) | 0),
        (u = (u + Math.imul(ne, Se)) | 0),
        (u = (u + Math.imul(se, De)) | 0),
        (I = (I + Math.imul(se, Se)) | 0),
        (m = (m + Math.imul(he, Oe)) | 0),
        (u = (u + Math.imul(he, Ce)) | 0),
        (u = (u + Math.imul(oe, Oe)) | 0),
        (I = (I + Math.imul(oe, Ce)) | 0),
        (m = (m + Math.imul(ve, tt)) | 0),
        (u = (u + Math.imul(ve, rt)) | 0),
        (u = (u + Math.imul(pe, tt)) | 0),
        (I = (I + Math.imul(pe, rt)) | 0);
      var Fi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Fi >>> 26)) | 0),
        (Fi &= 67108863),
        (m = Math.imul(ie, Me)),
        (u = Math.imul(ie, Ae)),
        (u = (u + Math.imul(ue, Me)) | 0),
        (I = Math.imul(ue, Ae)),
        (m = (m + Math.imul(re, De)) | 0),
        (u = (u + Math.imul(re, Se)) | 0),
        (u = (u + Math.imul(ae, De)) | 0),
        (I = (I + Math.imul(ae, Se)) | 0),
        (m = (m + Math.imul(ne, Oe)) | 0),
        (u = (u + Math.imul(ne, Ce)) | 0),
        (u = (u + Math.imul(se, Oe)) | 0),
        (I = (I + Math.imul(se, Ce)) | 0),
        (m = (m + Math.imul(he, tt)) | 0),
        (u = (u + Math.imul(he, rt)) | 0),
        (u = (u + Math.imul(oe, tt)) | 0),
        (I = (I + Math.imul(oe, rt)) | 0);
      var Lt = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Lt >>> 26)) | 0),
        (Lt &= 67108863),
        (m = Math.imul(ie, De)),
        (u = Math.imul(ie, Se)),
        (u = (u + Math.imul(ue, De)) | 0),
        (I = Math.imul(ue, Se)),
        (m = (m + Math.imul(re, Oe)) | 0),
        (u = (u + Math.imul(re, Ce)) | 0),
        (u = (u + Math.imul(ae, Oe)) | 0),
        (I = (I + Math.imul(ae, Ce)) | 0),
        (m = (m + Math.imul(ne, tt)) | 0),
        (u = (u + Math.imul(ne, rt)) | 0),
        (u = (u + Math.imul(se, tt)) | 0),
        (I = (I + Math.imul(se, rt)) | 0);
      var qi = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (qi >>> 26)) | 0),
        (qi &= 67108863),
        (m = Math.imul(ie, Oe)),
        (u = Math.imul(ie, Ce)),
        (u = (u + Math.imul(ue, Oe)) | 0),
        (I = Math.imul(ue, Ce)),
        (m = (m + Math.imul(re, tt)) | 0),
        (u = (u + Math.imul(re, rt)) | 0),
        (u = (u + Math.imul(ae, tt)) | 0),
        (I = (I + Math.imul(ae, rt)) | 0);
      var Li = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      (x = (((I + (u >>> 13)) | 0) + (Li >>> 26)) | 0),
        (Li &= 67108863),
        (m = Math.imul(ie, tt)),
        (u = Math.imul(ie, rt)),
        (u = (u + Math.imul(ue, tt)) | 0),
        (I = Math.imul(ue, rt));
      var Ui = (((x + m) | 0) + ((u & 8191) << 13)) | 0;
      return (
        (x = (((I + (u >>> 13)) | 0) + (Ui >>> 26)) | 0),
        (Ui &= 67108863),
        (D[0] = Rt),
        (D[1] = xi),
        (D[2] = Di),
        (D[3] = Pi),
        (D[4] = Mi),
        (D[5] = Ai),
        (D[6] = Xt),
        (D[7] = Oi),
        (D[8] = Ci),
        (D[9] = Ti),
        (D[10] = Ri),
        (D[11] = $i),
        (D[12] = xr),
        (D[13] = Ni),
        (D[14] = Fi),
        (D[15] = Lt),
        (D[16] = qi),
        (D[17] = Li),
        (D[18] = Ui),
        x !== 0 && ((D[19] = x), d.length++),
        d
      );
    };
    Math.imul || ($ = S);
    function q(M, c, v) {
      (v.negative = c.negative ^ M.negative), (v.length = M.length + c.length);
      for (var d = 0, b = 0, _ = 0; _ < v.length - 1; _++) {
        var D = b;
        b = 0;
        for (
          var x = d & 67108863,
            m = Math.min(_, c.length - 1),
            u = Math.max(0, _ - M.length + 1);
          u <= m;
          u++
        ) {
          var I = _ - u,
            K = M.words[I] | 0,
            k = c.words[u] | 0,
            W = K * k,
            V = W & 67108863;
          (D = (D + ((W / 67108864) | 0)) | 0),
            (V = (V + x) | 0),
            (x = V & 67108863),
            (D = (D + (V >>> 26)) | 0),
            (b += D >>> 26),
            (D &= 67108863);
        }
        (v.words[_] = x), (d = D), (D = b);
      }
      return d !== 0 ? (v.words[_] = d) : v.length--, v.strip();
    }
    function z(M, c, v) {
      var d = new C();
      return d.mulp(M, c, v);
    }
    n.prototype.mulTo = function (c, v) {
      var d,
        b = this.length + c.length;
      return (
        this.length === 10 && c.length === 10
          ? (d = $(this, c, v))
          : b < 63
          ? (d = S(this, c, v))
          : b < 1024
          ? (d = q(this, c, v))
          : (d = z(this, c, v)),
        d
      );
    };
    function C(M, c) {
      (this.x = M), (this.y = c);
    }
    (C.prototype.makeRBT = function (c) {
      for (
        var v = new Array(c), d = n.prototype._countBits(c) - 1, b = 0;
        b < c;
        b++
      )
        v[b] = this.revBin(b, d, c);
      return v;
    }),
      (C.prototype.revBin = function (c, v, d) {
        if (c === 0 || c === d - 1) return c;
        for (var b = 0, _ = 0; _ < v; _++)
          (b |= (c & 1) << (v - _ - 1)), (c >>= 1);
        return b;
      }),
      (C.prototype.permute = function (c, v, d, b, _, D) {
        for (var x = 0; x < D; x++) (b[x] = v[c[x]]), (_[x] = d[c[x]]);
      }),
      (C.prototype.transform = function (c, v, d, b, _, D) {
        this.permute(D, c, v, d, b, _);
        for (var x = 1; x < _; x <<= 1)
          for (
            var m = x << 1,
              u = Math.cos((2 * Math.PI) / m),
              I = Math.sin((2 * Math.PI) / m),
              K = 0;
            K < _;
            K += m
          )
            for (var k = u, W = I, V = 0; V < x; V++) {
              var ee = d[K + V],
                U = b[K + V],
                B = d[K + V + x],
                F = b[K + V + x],
                p = k * B - W * F;
              (F = k * F + W * B),
                (B = p),
                (d[K + V] = ee + B),
                (b[K + V] = U + F),
                (d[K + V + x] = ee - B),
                (b[K + V + x] = U - F),
                V !== m && ((p = u * k - I * W), (W = u * W + I * k), (k = p));
            }
      }),
      (C.prototype.guessLen13b = function (c, v) {
        var d = Math.max(v, c) | 1,
          b = d & 1,
          _ = 0;
        for (d = (d / 2) | 0; d; d = d >>> 1) _++;
        return 1 << (_ + 1 + b);
      }),
      (C.prototype.conjugate = function (c, v, d) {
        if (!(d <= 1))
          for (var b = 0; b < d / 2; b++) {
            var _ = c[b];
            (c[b] = c[d - b - 1]),
              (c[d - b - 1] = _),
              (_ = v[b]),
              (v[b] = -v[d - b - 1]),
              (v[d - b - 1] = -_);
          }
      }),
      (C.prototype.normalize13b = function (c, v) {
        for (var d = 0, b = 0; b < v / 2; b++) {
          var _ =
            Math.round(c[2 * b + 1] / v) * 8192 + Math.round(c[2 * b] / v) + d;
          (c[b] = _ & 67108863),
            _ < 67108864 ? (d = 0) : (d = (_ / 67108864) | 0);
        }
        return c;
      }),
      (C.prototype.convert13b = function (c, v, d, b) {
        for (var _ = 0, D = 0; D < v; D++)
          (_ = _ + (c[D] | 0)),
            (d[2 * D] = _ & 8191),
            (_ = _ >>> 13),
            (d[2 * D + 1] = _ & 8191),
            (_ = _ >>> 13);
        for (D = 2 * v; D < b; ++D) d[D] = 0;
        i(_ === 0), i((_ & -8192) === 0);
      }),
      (C.prototype.stub = function (c) {
        for (var v = new Array(c), d = 0; d < c; d++) v[d] = 0;
        return v;
      }),
      (C.prototype.mulp = function (c, v, d) {
        var b = 2 * this.guessLen13b(c.length, v.length),
          _ = this.makeRBT(b),
          D = this.stub(b),
          x = new Array(b),
          m = new Array(b),
          u = new Array(b),
          I = new Array(b),
          K = new Array(b),
          k = new Array(b),
          W = d.words;
        (W.length = b),
          this.convert13b(c.words, c.length, x, b),
          this.convert13b(v.words, v.length, I, b),
          this.transform(x, D, m, u, b, _),
          this.transform(I, D, K, k, b, _);
        for (var V = 0; V < b; V++) {
          var ee = m[V] * K[V] - u[V] * k[V];
          (u[V] = m[V] * k[V] + u[V] * K[V]), (m[V] = ee);
        }
        return (
          this.conjugate(m, u, b),
          this.transform(m, u, W, D, b, _),
          this.conjugate(W, D, b),
          this.normalize13b(W, b),
          (d.negative = c.negative ^ v.negative),
          (d.length = c.length + v.length),
          d.strip()
        );
      }),
      (n.prototype.mul = function (c) {
        var v = new n(null);
        return (v.words = new Array(this.length + c.length)), this.mulTo(c, v);
      }),
      (n.prototype.mulf = function (c) {
        var v = new n(null);
        return (v.words = new Array(this.length + c.length)), z(this, c, v);
      }),
      (n.prototype.imul = function (c) {
        return this.clone().mulTo(c, this);
      }),
      (n.prototype.imuln = function (c) {
        i(typeof c == "number"), i(c < 67108864);
        for (var v = 0, d = 0; d < this.length; d++) {
          var b = (this.words[d] | 0) * c,
            _ = (b & 67108863) + (v & 67108863);
          (v >>= 26),
            (v += (b / 67108864) | 0),
            (v += _ >>> 26),
            (this.words[d] = _ & 67108863);
        }
        return v !== 0 && ((this.words[d] = v), this.length++), this;
      }),
      (n.prototype.muln = function (c) {
        return this.clone().imuln(c);
      }),
      (n.prototype.sqr = function () {
        return this.mul(this);
      }),
      (n.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (n.prototype.pow = function (c) {
        var v = w(c);
        if (v.length === 0) return new n(1);
        for (var d = this, b = 0; b < v.length && v[b] === 0; b++, d = d.sqr());
        if (++b < v.length)
          for (var _ = d.sqr(); b < v.length; b++, _ = _.sqr())
            v[b] !== 0 && (d = d.mul(_));
        return d;
      }),
      (n.prototype.iushln = function (c) {
        i(typeof c == "number" && c >= 0);
        var v = c % 26,
          d = (c - v) / 26,
          b = (67108863 >>> (26 - v)) << (26 - v),
          _;
        if (v !== 0) {
          var D = 0;
          for (_ = 0; _ < this.length; _++) {
            var x = this.words[_] & b,
              m = ((this.words[_] | 0) - x) << v;
            (this.words[_] = m | D), (D = x >>> (26 - v));
          }
          D && ((this.words[_] = D), this.length++);
        }
        if (d !== 0) {
          for (_ = this.length - 1; _ >= 0; _--)
            this.words[_ + d] = this.words[_];
          for (_ = 0; _ < d; _++) this.words[_] = 0;
          this.length += d;
        }
        return this.strip();
      }),
      (n.prototype.ishln = function (c) {
        return i(this.negative === 0), this.iushln(c);
      }),
      (n.prototype.iushrn = function (c, v, d) {
        i(typeof c == "number" && c >= 0);
        var b;
        v ? (b = (v - (v % 26)) / 26) : (b = 0);
        var _ = c % 26,
          D = Math.min((c - _) / 26, this.length),
          x = 67108863 ^ ((67108863 >>> _) << _),
          m = d;
        if (((b -= D), (b = Math.max(0, b)), m)) {
          for (var u = 0; u < D; u++) m.words[u] = this.words[u];
          m.length = D;
        }
        if (D !== 0)
          if (this.length > D)
            for (this.length -= D, u = 0; u < this.length; u++)
              this.words[u] = this.words[u + D];
          else (this.words[0] = 0), (this.length = 1);
        var I = 0;
        for (u = this.length - 1; u >= 0 && (I !== 0 || u >= b); u--) {
          var K = this.words[u] | 0;
          (this.words[u] = (I << (26 - _)) | (K >>> _)), (I = K & x);
        }
        return (
          m && I !== 0 && (m.words[m.length++] = I),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        );
      }),
      (n.prototype.ishrn = function (c, v, d) {
        return i(this.negative === 0), this.iushrn(c, v, d);
      }),
      (n.prototype.shln = function (c) {
        return this.clone().ishln(c);
      }),
      (n.prototype.ushln = function (c) {
        return this.clone().iushln(c);
      }),
      (n.prototype.shrn = function (c) {
        return this.clone().ishrn(c);
      }),
      (n.prototype.ushrn = function (c) {
        return this.clone().iushrn(c);
      }),
      (n.prototype.testn = function (c) {
        i(typeof c == "number" && c >= 0);
        var v = c % 26,
          d = (c - v) / 26,
          b = 1 << v;
        if (this.length <= d) return !1;
        var _ = this.words[d];
        return !!(_ & b);
      }),
      (n.prototype.imaskn = function (c) {
        i(typeof c == "number" && c >= 0);
        var v = c % 26,
          d = (c - v) / 26;
        if (
          (i(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= d)
        )
          return this;
        if (
          (v !== 0 && d++, (this.length = Math.min(d, this.length)), v !== 0)
        ) {
          var b = 67108863 ^ ((67108863 >>> v) << v);
          this.words[this.length - 1] &= b;
        }
        return this.strip();
      }),
      (n.prototype.maskn = function (c) {
        return this.clone().imaskn(c);
      }),
      (n.prototype.iaddn = function (c) {
        return (
          i(typeof c == "number"),
          i(c < 67108864),
          c < 0
            ? this.isubn(-c)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) < c
              ? ((this.words[0] = c - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(c), (this.negative = 1), this)
            : this._iaddn(c)
        );
      }),
      (n.prototype._iaddn = function (c) {
        this.words[0] += c;
        for (var v = 0; v < this.length && this.words[v] >= 67108864; v++)
          (this.words[v] -= 67108864),
            v === this.length - 1
              ? (this.words[v + 1] = 1)
              : this.words[v + 1]++;
        return (this.length = Math.max(this.length, v + 1)), this;
      }),
      (n.prototype.isubn = function (c) {
        if ((i(typeof c == "number"), i(c < 67108864), c < 0))
          return this.iaddn(-c);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(c), (this.negative = 1), this;
        if (((this.words[0] -= c), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var v = 0; v < this.length && this.words[v] < 0; v++)
            (this.words[v] += 67108864), (this.words[v + 1] -= 1);
        return this.strip();
      }),
      (n.prototype.addn = function (c) {
        return this.clone().iaddn(c);
      }),
      (n.prototype.subn = function (c) {
        return this.clone().isubn(c);
      }),
      (n.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (n.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (n.prototype._ishlnsubmul = function (c, v, d) {
        var b = c.length + d,
          _;
        this._expand(b);
        var D,
          x = 0;
        for (_ = 0; _ < c.length; _++) {
          D = (this.words[_ + d] | 0) + x;
          var m = (c.words[_] | 0) * v;
          (D -= m & 67108863),
            (x = (D >> 26) - ((m / 67108864) | 0)),
            (this.words[_ + d] = D & 67108863);
        }
        for (; _ < this.length - d; _++)
          (D = (this.words[_ + d] | 0) + x),
            (x = D >> 26),
            (this.words[_ + d] = D & 67108863);
        if (x === 0) return this.strip();
        for (i(x === -1), x = 0, _ = 0; _ < this.length; _++)
          (D = -(this.words[_] | 0) + x),
            (x = D >> 26),
            (this.words[_] = D & 67108863);
        return (this.negative = 1), this.strip();
      }),
      (n.prototype._wordDiv = function (c, v) {
        var d = this.length - c.length,
          b = this.clone(),
          _ = c,
          D = _.words[_.length - 1] | 0,
          x = this._countBits(D);
        (d = 26 - x),
          d !== 0 &&
            ((_ = _.ushln(d)), b.iushln(d), (D = _.words[_.length - 1] | 0));
        var m = b.length - _.length,
          u;
        if (v !== "mod") {
          (u = new n(null)),
            (u.length = m + 1),
            (u.words = new Array(u.length));
          for (var I = 0; I < u.length; I++) u.words[I] = 0;
        }
        var K = b.clone()._ishlnsubmul(_, 1, m);
        K.negative === 0 && ((b = K), u && (u.words[m] = 1));
        for (var k = m - 1; k >= 0; k--) {
          var W =
            (b.words[_.length + k] | 0) * 67108864 +
            (b.words[_.length + k - 1] | 0);
          for (
            W = Math.min((W / D) | 0, 67108863), b._ishlnsubmul(_, W, k);
            b.negative !== 0;

          )
            W--,
              (b.negative = 0),
              b._ishlnsubmul(_, 1, k),
              b.isZero() || (b.negative ^= 1);
          u && (u.words[k] = W);
        }
        return (
          u && u.strip(),
          b.strip(),
          v !== "div" && d !== 0 && b.iushrn(d),
          { div: u || null, mod: b }
        );
      }),
      (n.prototype.divmod = function (c, v, d) {
        if ((i(!c.isZero()), this.isZero()))
          return { div: new n(0), mod: new n(0) };
        var b, _, D;
        return this.negative !== 0 && c.negative === 0
          ? ((D = this.neg().divmod(c, v)),
            v !== "mod" && (b = D.div.neg()),
            v !== "div" &&
              ((_ = D.mod.neg()), d && _.negative !== 0 && _.iadd(c)),
            { div: b, mod: _ })
          : this.negative === 0 && c.negative !== 0
          ? ((D = this.divmod(c.neg(), v)),
            v !== "mod" && (b = D.div.neg()),
            { div: b, mod: D.mod })
          : this.negative & c.negative
          ? ((D = this.neg().divmod(c.neg(), v)),
            v !== "div" &&
              ((_ = D.mod.neg()), d && _.negative !== 0 && _.isub(c)),
            { div: D.div, mod: _ })
          : c.length > this.length || this.cmp(c) < 0
          ? { div: new n(0), mod: this }
          : c.length === 1
          ? v === "div"
            ? { div: this.divn(c.words[0]), mod: null }
            : v === "mod"
            ? { div: null, mod: new n(this.modn(c.words[0])) }
            : { div: this.divn(c.words[0]), mod: new n(this.modn(c.words[0])) }
          : this._wordDiv(c, v);
      }),
      (n.prototype.div = function (c) {
        return this.divmod(c, "div", !1).div;
      }),
      (n.prototype.mod = function (c) {
        return this.divmod(c, "mod", !1).mod;
      }),
      (n.prototype.umod = function (c) {
        return this.divmod(c, "mod", !0).mod;
      }),
      (n.prototype.divRound = function (c) {
        var v = this.divmod(c);
        if (v.mod.isZero()) return v.div;
        var d = v.div.negative !== 0 ? v.mod.isub(c) : v.mod,
          b = c.ushrn(1),
          _ = c.andln(1),
          D = d.cmp(b);
        return D < 0 || (_ === 1 && D === 0)
          ? v.div
          : v.div.negative !== 0
          ? v.div.isubn(1)
          : v.div.iaddn(1);
      }),
      (n.prototype.modn = function (c) {
        i(c <= 67108863);
        for (var v = (1 << 26) % c, d = 0, b = this.length - 1; b >= 0; b--)
          d = (v * d + (this.words[b] | 0)) % c;
        return d;
      }),
      (n.prototype.idivn = function (c) {
        i(c <= 67108863);
        for (var v = 0, d = this.length - 1; d >= 0; d--) {
          var b = (this.words[d] | 0) + v * 67108864;
          (this.words[d] = (b / c) | 0), (v = b % c);
        }
        return this.strip();
      }),
      (n.prototype.divn = function (c) {
        return this.clone().idivn(c);
      }),
      (n.prototype.egcd = function (c) {
        i(c.negative === 0), i(!c.isZero());
        var v = this,
          d = c.clone();
        v.negative !== 0 ? (v = v.umod(c)) : (v = v.clone());
        for (
          var b = new n(1), _ = new n(0), D = new n(0), x = new n(1), m = 0;
          v.isEven() && d.isEven();

        )
          v.iushrn(1), d.iushrn(1), ++m;
        for (var u = d.clone(), I = v.clone(); !v.isZero(); ) {
          for (var K = 0, k = 1; !(v.words[0] & k) && K < 26; ++K, k <<= 1);
          if (K > 0)
            for (v.iushrn(K); K-- > 0; )
              (b.isOdd() || _.isOdd()) && (b.iadd(u), _.isub(I)),
                b.iushrn(1),
                _.iushrn(1);
          for (var W = 0, V = 1; !(d.words[0] & V) && W < 26; ++W, V <<= 1);
          if (W > 0)
            for (d.iushrn(W); W-- > 0; )
              (D.isOdd() || x.isOdd()) && (D.iadd(u), x.isub(I)),
                D.iushrn(1),
                x.iushrn(1);
          v.cmp(d) >= 0
            ? (v.isub(d), b.isub(D), _.isub(x))
            : (d.isub(v), D.isub(b), x.isub(_));
        }
        return { a: D, b: x, gcd: d.iushln(m) };
      }),
      (n.prototype._invmp = function (c) {
        i(c.negative === 0), i(!c.isZero());
        var v = this,
          d = c.clone();
        v.negative !== 0 ? (v = v.umod(c)) : (v = v.clone());
        for (
          var b = new n(1), _ = new n(0), D = d.clone();
          v.cmpn(1) > 0 && d.cmpn(1) > 0;

        ) {
          for (var x = 0, m = 1; !(v.words[0] & m) && x < 26; ++x, m <<= 1);
          if (x > 0)
            for (v.iushrn(x); x-- > 0; ) b.isOdd() && b.iadd(D), b.iushrn(1);
          for (var u = 0, I = 1; !(d.words[0] & I) && u < 26; ++u, I <<= 1);
          if (u > 0)
            for (d.iushrn(u); u-- > 0; ) _.isOdd() && _.iadd(D), _.iushrn(1);
          v.cmp(d) >= 0 ? (v.isub(d), b.isub(_)) : (d.isub(v), _.isub(b));
        }
        var K;
        return (
          v.cmpn(1) === 0 ? (K = b) : (K = _), K.cmpn(0) < 0 && K.iadd(c), K
        );
      }),
      (n.prototype.gcd = function (c) {
        if (this.isZero()) return c.abs();
        if (c.isZero()) return this.abs();
        var v = this.clone(),
          d = c.clone();
        (v.negative = 0), (d.negative = 0);
        for (var b = 0; v.isEven() && d.isEven(); b++) v.iushrn(1), d.iushrn(1);
        do {
          for (; v.isEven(); ) v.iushrn(1);
          for (; d.isEven(); ) d.iushrn(1);
          var _ = v.cmp(d);
          if (_ < 0) {
            var D = v;
            (v = d), (d = D);
          } else if (_ === 0 || d.cmpn(1) === 0) break;
          v.isub(d);
        } while (!0);
        return d.iushln(b);
      }),
      (n.prototype.invm = function (c) {
        return this.egcd(c).a.umod(c);
      }),
      (n.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (n.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (n.prototype.andln = function (c) {
        return this.words[0] & c;
      }),
      (n.prototype.bincn = function (c) {
        i(typeof c == "number");
        var v = c % 26,
          d = (c - v) / 26,
          b = 1 << v;
        if (this.length <= d)
          return this._expand(d + 1), (this.words[d] |= b), this;
        for (var _ = b, D = d; _ !== 0 && D < this.length; D++) {
          var x = this.words[D] | 0;
          (x += _), (_ = x >>> 26), (x &= 67108863), (this.words[D] = x);
        }
        return _ !== 0 && ((this.words[D] = _), this.length++), this;
      }),
      (n.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (n.prototype.cmpn = function (c) {
        var v = c < 0;
        if (this.negative !== 0 && !v) return -1;
        if (this.negative === 0 && v) return 1;
        this.strip();
        var d;
        if (this.length > 1) d = 1;
        else {
          v && (c = -c), i(c <= 67108863, "Number is too big");
          var b = this.words[0] | 0;
          d = b === c ? 0 : b < c ? -1 : 1;
        }
        return this.negative !== 0 ? -d | 0 : d;
      }),
      (n.prototype.cmp = function (c) {
        if (this.negative !== 0 && c.negative === 0) return -1;
        if (this.negative === 0 && c.negative !== 0) return 1;
        var v = this.ucmp(c);
        return this.negative !== 0 ? -v | 0 : v;
      }),
      (n.prototype.ucmp = function (c) {
        if (this.length > c.length) return 1;
        if (this.length < c.length) return -1;
        for (var v = 0, d = this.length - 1; d >= 0; d--) {
          var b = this.words[d] | 0,
            _ = c.words[d] | 0;
          if (b !== _) {
            b < _ ? (v = -1) : b > _ && (v = 1);
            break;
          }
        }
        return v;
      }),
      (n.prototype.gtn = function (c) {
        return this.cmpn(c) === 1;
      }),
      (n.prototype.gt = function (c) {
        return this.cmp(c) === 1;
      }),
      (n.prototype.gten = function (c) {
        return this.cmpn(c) >= 0;
      }),
      (n.prototype.gte = function (c) {
        return this.cmp(c) >= 0;
      }),
      (n.prototype.ltn = function (c) {
        return this.cmpn(c) === -1;
      }),
      (n.prototype.lt = function (c) {
        return this.cmp(c) === -1;
      }),
      (n.prototype.lten = function (c) {
        return this.cmpn(c) <= 0;
      }),
      (n.prototype.lte = function (c) {
        return this.cmp(c) <= 0;
      }),
      (n.prototype.eqn = function (c) {
        return this.cmpn(c) === 0;
      }),
      (n.prototype.eq = function (c) {
        return this.cmp(c) === 0;
      }),
      (n.red = function (c) {
        return new H(c);
      }),
      (n.prototype.toRed = function (c) {
        return (
          i(!this.red, "Already a number in reduction context"),
          i(this.negative === 0, "red works only with positives"),
          c.convertTo(this)._forceRed(c)
        );
      }),
      (n.prototype.fromRed = function () {
        return (
          i(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (n.prototype._forceRed = function (c) {
        return (this.red = c), this;
      }),
      (n.prototype.forceRed = function (c) {
        return (
          i(!this.red, "Already a number in reduction context"),
          this._forceRed(c)
        );
      }),
      (n.prototype.redAdd = function (c) {
        return (
          i(this.red, "redAdd works only with red numbers"),
          this.red.add(this, c)
        );
      }),
      (n.prototype.redIAdd = function (c) {
        return (
          i(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, c)
        );
      }),
      (n.prototype.redSub = function (c) {
        return (
          i(this.red, "redSub works only with red numbers"),
          this.red.sub(this, c)
        );
      }),
      (n.prototype.redISub = function (c) {
        return (
          i(this.red, "redISub works only with red numbers"),
          this.red.isub(this, c)
        );
      }),
      (n.prototype.redShl = function (c) {
        return (
          i(this.red, "redShl works only with red numbers"),
          this.red.shl(this, c)
        );
      }),
      (n.prototype.redMul = function (c) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, c),
          this.red.mul(this, c)
        );
      }),
      (n.prototype.redIMul = function (c) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, c),
          this.red.imul(this, c)
        );
      }),
      (n.prototype.redSqr = function () {
        return (
          i(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (n.prototype.redISqr = function () {
        return (
          i(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (n.prototype.redSqrt = function () {
        return (
          i(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (n.prototype.redInvm = function () {
        return (
          i(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (n.prototype.redNeg = function () {
        return (
          i(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (n.prototype.redPow = function (c) {
        return (
          i(this.red && !c.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, c)
        );
      });
    var L = { k256: null, p224: null, p192: null, p25519: null };
    function A(M, c) {
      (this.name = M),
        (this.p = new n(c, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new n(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (A.prototype._tmp = function () {
      var c = new n(null);
      return (c.words = new Array(Math.ceil(this.n / 13))), c;
    }),
      (A.prototype.ireduce = function (c) {
        var v = c,
          d;
        do
          this.split(v, this.tmp),
            (v = this.imulK(v)),
            (v = v.iadd(this.tmp)),
            (d = v.bitLength());
        while (d > this.n);
        var b = d < this.n ? -1 : v.ucmp(this.p);
        return (
          b === 0
            ? ((v.words[0] = 0), (v.length = 1))
            : b > 0
            ? v.isub(this.p)
            : v.strip !== void 0
            ? v.strip()
            : v._strip(),
          v
        );
      }),
      (A.prototype.split = function (c, v) {
        c.iushrn(this.n, 0, v);
      }),
      (A.prototype.imulK = function (c) {
        return c.imul(this.k);
      });
    function T() {
      A.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    s(T, A),
      (T.prototype.split = function (c, v) {
        for (var d = 4194303, b = Math.min(c.length, 9), _ = 0; _ < b; _++)
          v.words[_] = c.words[_];
        if (((v.length = b), c.length <= 9)) {
          (c.words[0] = 0), (c.length = 1);
          return;
        }
        var D = c.words[9];
        for (v.words[v.length++] = D & d, _ = 10; _ < c.length; _++) {
          var x = c.words[_] | 0;
          (c.words[_ - 10] = ((x & d) << 4) | (D >>> 22)), (D = x);
        }
        (D >>>= 22),
          (c.words[_ - 10] = D),
          D === 0 && c.length > 10 ? (c.length -= 10) : (c.length -= 9);
      }),
      (T.prototype.imulK = function (c) {
        (c.words[c.length] = 0), (c.words[c.length + 1] = 0), (c.length += 2);
        for (var v = 0, d = 0; d < c.length; d++) {
          var b = c.words[d] | 0;
          (v += b * 977),
            (c.words[d] = v & 67108863),
            (v = b * 64 + ((v / 67108864) | 0));
        }
        return (
          c.words[c.length - 1] === 0 &&
            (c.length--, c.words[c.length - 1] === 0 && c.length--),
          c
        );
      });
    function R() {
      A.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    s(R, A);
    function l() {
      A.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    s(l, A);
    function P() {
      A.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    s(P, A),
      (P.prototype.imulK = function (c) {
        for (var v = 0, d = 0; d < c.length; d++) {
          var b = (c.words[d] | 0) * 19 + v,
            _ = b & 67108863;
          (b >>>= 26), (c.words[d] = _), (v = b);
        }
        return v !== 0 && (c.words[c.length++] = v), c;
      }),
      (n._prime = function (c) {
        if (L[c]) return L[c];
        var v;
        if (c === "k256") v = new T();
        else if (c === "p224") v = new R();
        else if (c === "p192") v = new l();
        else if (c === "p25519") v = new P();
        else throw new Error("Unknown prime " + c);
        return (L[c] = v), v;
      });
    function H(M) {
      if (typeof M == "string") {
        var c = n._prime(M);
        (this.m = c.p), (this.prime = c);
      } else
        i(M.gtn(1), "modulus must be greater than 1"),
          (this.m = M),
          (this.prime = null);
    }
    (H.prototype._verify1 = function (c) {
      i(c.negative === 0, "red works only with positives"),
        i(c.red, "red works only with red numbers");
    }),
      (H.prototype._verify2 = function (c, v) {
        i((c.negative | v.negative) === 0, "red works only with positives"),
          i(c.red && c.red === v.red, "red works only with red numbers");
      }),
      (H.prototype.imod = function (c) {
        return this.prime
          ? this.prime.ireduce(c)._forceRed(this)
          : c.umod(this.m)._forceRed(this);
      }),
      (H.prototype.neg = function (c) {
        return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this);
      }),
      (H.prototype.add = function (c, v) {
        this._verify2(c, v);
        var d = c.add(v);
        return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
      }),
      (H.prototype.iadd = function (c, v) {
        this._verify2(c, v);
        var d = c.iadd(v);
        return d.cmp(this.m) >= 0 && d.isub(this.m), d;
      }),
      (H.prototype.sub = function (c, v) {
        this._verify2(c, v);
        var d = c.sub(v);
        return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
      }),
      (H.prototype.isub = function (c, v) {
        this._verify2(c, v);
        var d = c.isub(v);
        return d.cmpn(0) < 0 && d.iadd(this.m), d;
      }),
      (H.prototype.shl = function (c, v) {
        return this._verify1(c), this.imod(c.ushln(v));
      }),
      (H.prototype.imul = function (c, v) {
        return this._verify2(c, v), this.imod(c.imul(v));
      }),
      (H.prototype.mul = function (c, v) {
        return this._verify2(c, v), this.imod(c.mul(v));
      }),
      (H.prototype.isqr = function (c) {
        return this.imul(c, c.clone());
      }),
      (H.prototype.sqr = function (c) {
        return this.mul(c, c);
      }),
      (H.prototype.sqrt = function (c) {
        if (c.isZero()) return c.clone();
        var v = this.m.andln(3);
        if ((i(v % 2 === 1), v === 3)) {
          var d = this.m.add(new n(1)).iushrn(2);
          return this.pow(c, d);
        }
        for (var b = this.m.subn(1), _ = 0; !b.isZero() && b.andln(1) === 0; )
          _++, b.iushrn(1);
        i(!b.isZero());
        var D = new n(1).toRed(this),
          x = D.redNeg(),
          m = this.m.subn(1).iushrn(1),
          u = this.m.bitLength();
        for (u = new n(2 * u * u).toRed(this); this.pow(u, m).cmp(x) !== 0; )
          u.redIAdd(x);
        for (
          var I = this.pow(u, b),
            K = this.pow(c, b.addn(1).iushrn(1)),
            k = this.pow(c, b),
            W = _;
          k.cmp(D) !== 0;

        ) {
          for (var V = k, ee = 0; V.cmp(D) !== 0; ee++) V = V.redSqr();
          i(ee < W);
          var U = this.pow(I, new n(1).iushln(W - ee - 1));
          (K = K.redMul(U)), (I = U.redSqr()), (k = k.redMul(I)), (W = ee);
        }
        return K;
      }),
      (H.prototype.invm = function (c) {
        var v = c._invmp(this.m);
        return v.negative !== 0
          ? ((v.negative = 0), this.imod(v).redNeg())
          : this.imod(v);
      }),
      (H.prototype.pow = function (c, v) {
        if (v.isZero()) return new n(1).toRed(this);
        if (v.cmpn(1) === 0) return c.clone();
        var d = 4,
          b = new Array(1 << d);
        (b[0] = new n(1).toRed(this)), (b[1] = c);
        for (var _ = 2; _ < b.length; _++) b[_] = this.mul(b[_ - 1], c);
        var D = b[0],
          x = 0,
          m = 0,
          u = v.bitLength() % 26;
        for (u === 0 && (u = 26), _ = v.length - 1; _ >= 0; _--) {
          for (var I = v.words[_], K = u - 1; K >= 0; K--) {
            var k = (I >> K) & 1;
            if ((D !== b[0] && (D = this.sqr(D)), k === 0 && x === 0)) {
              m = 0;
              continue;
            }
            (x <<= 1),
              (x |= k),
              m++,
              !(m !== d && (_ !== 0 || K !== 0)) &&
                ((D = this.mul(D, b[x])), (m = 0), (x = 0));
          }
          u = 26;
        }
        return D;
      }),
      (H.prototype.convertTo = function (c) {
        var v = c.umod(this.m);
        return v === c ? v.clone() : v;
      }),
      (H.prototype.convertFrom = function (c) {
        var v = c.clone();
        return (v.red = null), v;
      }),
      (n.mont = function (c) {
        return new Y(c);
      });
    function Y(M) {
      H.call(this, M),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new n(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    s(Y, H),
      (Y.prototype.convertTo = function (c) {
        return this.imod(c.ushln(this.shift));
      }),
      (Y.prototype.convertFrom = function (c) {
        var v = this.imod(c.mul(this.rinv));
        return (v.red = null), v;
      }),
      (Y.prototype.imul = function (c, v) {
        if (c.isZero() || v.isZero())
          return (c.words[0] = 0), (c.length = 1), c;
        var d = c.imul(v),
          b = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          _ = d.isub(b).iushrn(this.shift),
          D = _;
        return (
          _.cmp(this.m) >= 0
            ? (D = _.isub(this.m))
            : _.cmpn(0) < 0 && (D = _.iadd(this.m)),
          D._forceRed(this)
        );
      }),
      (Y.prototype.mul = function (c, v) {
        if (c.isZero() || v.isZero()) return new n(0)._forceRed(this);
        var d = c.mul(v),
          b = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          _ = d.isub(b).iushrn(this.shift),
          D = _;
        return (
          _.cmp(this.m) >= 0
            ? (D = _.isub(this.m))
            : _.cmpn(0) < 0 && (D = _.iadd(this.m)),
          D._forceRed(this)
        );
      }),
      (Y.prototype.invm = function (c) {
        var v = this.imod(c._invmp(this.m).mul(this.r2));
        return v._forceRed(this);
      });
  })(r, Ht);
})(Ta);
var Sr = Ta.exports,
  Ra = {};
(function (r) {
  var e = r;
  function t(n, a) {
    if (Array.isArray(n)) return n.slice();
    if (!n) return [];
    var o = [];
    if (typeof n != "string") {
      for (var f = 0; f < n.length; f++) o[f] = n[f] | 0;
      return o;
    }
    if (a === "hex") {
      (n = n.replace(/[^a-z0-9]+/gi, "")), n.length % 2 !== 0 && (n = "0" + n);
      for (var f = 0; f < n.length; f += 2)
        o.push(parseInt(n[f] + n[f + 1], 16));
    } else
      for (var f = 0; f < n.length; f++) {
        var h = n.charCodeAt(f),
          g = h >> 8,
          y = h & 255;
        g ? o.push(g, y) : o.push(y);
      }
    return o;
  }
  e.toArray = t;
  function i(n) {
    return n.length === 1 ? "0" + n : n;
  }
  e.zero2 = i;
  function s(n) {
    for (var a = "", o = 0; o < n.length; o++) a += i(n[o].toString(16));
    return a;
  }
  (e.toHex = s),
    (e.encode = function (a, o) {
      return o === "hex" ? s(a) : a;
    });
})(Ra);
(function (r) {
  var e = r,
    t = Sr,
    i = _h,
    s = Ra;
  (e.assert = i),
    (e.toArray = s.toArray),
    (e.zero2 = s.zero2),
    (e.toHex = s.toHex),
    (e.encode = s.encode);
  function n(g, y, E) {
    var w = new Array(Math.max(g.bitLength(), E) + 1),
      S;
    for (S = 0; S < w.length; S += 1) w[S] = 0;
    var $ = 1 << (y + 1),
      q = g.clone();
    for (S = 0; S < w.length; S++) {
      var z,
        C = q.andln($ - 1);
      q.isOdd()
        ? (C > ($ >> 1) - 1 ? (z = ($ >> 1) - C) : (z = C), q.isubn(z))
        : (z = 0),
        (w[S] = z),
        q.iushrn(1);
    }
    return w;
  }
  e.getNAF = n;
  function a(g, y) {
    var E = [[], []];
    (g = g.clone()), (y = y.clone());
    for (var w = 0, S = 0, $; g.cmpn(-w) > 0 || y.cmpn(-S) > 0; ) {
      var q = (g.andln(3) + w) & 3,
        z = (y.andln(3) + S) & 3;
      q === 3 && (q = -1), z === 3 && (z = -1);
      var C;
      q & 1
        ? (($ = (g.andln(7) + w) & 7),
          ($ === 3 || $ === 5) && z === 2 ? (C = -q) : (C = q))
        : (C = 0),
        E[0].push(C);
      var L;
      z & 1
        ? (($ = (y.andln(7) + S) & 7),
          ($ === 3 || $ === 5) && q === 2 ? (L = -z) : (L = z))
        : (L = 0),
        E[1].push(L),
        2 * w === C + 1 && (w = 1 - w),
        2 * S === L + 1 && (S = 1 - S),
        g.iushrn(1),
        y.iushrn(1);
    }
    return E;
  }
  e.getJSF = a;
  function o(g, y, E) {
    var w = "_" + y;
    g.prototype[y] = function () {
      return this[w] !== void 0 ? this[w] : (this[w] = E.call(this));
    };
  }
  e.cachedProperty = o;
  function f(g) {
    return typeof g == "string" ? e.toArray(g, "hex") : g;
  }
  e.parseBytes = f;
  function h(g) {
    return new t(g, "hex", "le");
  }
  e.intFromLE = h;
})(qt);
var $a = { exports: {} },
  Rn;
$a.exports = function (e) {
  return Rn || (Rn = new Or(null)), Rn.generate(e);
};
function Or(r) {
  this.rand = r;
}
$a.exports.Rand = Or;
Or.prototype.generate = function (e) {
  return this._rand(e);
};
Or.prototype._rand = function (e) {
  if (this.rand.getBytes) return this.rand.getBytes(e);
  for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
    t[i] = this.rand.getByte();
  return t;
};
if (typeof self == "object")
  self.crypto && self.crypto.getRandomValues
    ? (Or.prototype._rand = function (e) {
        var t = new Uint8Array(e);
        return self.crypto.getRandomValues(t), t;
      })
    : self.msCrypto && self.msCrypto.getRandomValues
    ? (Or.prototype._rand = function (e) {
        var t = new Uint8Array(e);
        return self.msCrypto.getRandomValues(t), t;
      })
    : typeof window == "object" &&
      (Or.prototype._rand = function () {
        throw new Error("Not implemented yet");
      });
else
  try {
    var Ao = wh;
    if (typeof Ao.randomBytes != "function") throw new Error("Not supported");
    Or.prototype._rand = function (e) {
      return Ao.randomBytes(e);
    };
  } catch {}
var Kh = $a.exports,
  Na = {},
  zr = Sr,
  ds = qt,
  Hs = ds.getNAF,
  z0 = ds.getJSF,
  Ks = ds.assert;
function Fr(r, e) {
  (this.type = r),
    (this.p = new zr(e.p, 16)),
    (this.red = e.prime ? zr.red(e.prime) : zr.mont(this.p)),
    (this.zero = new zr(0).toRed(this.red)),
    (this.one = new zr(1).toRed(this.red)),
    (this.two = new zr(2).toRed(this.red)),
    (this.n = e.n && new zr(e.n, 16)),
    (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var fn = Fr;
Fr.prototype.point = function () {
  throw new Error("Not implemented");
};
Fr.prototype.validate = function () {
  throw new Error("Not implemented");
};
Fr.prototype._fixedNafMul = function (e, t) {
  Ks(e.precomputed);
  var i = e._getDoubles(),
    s = Hs(t, 1, this._bitLength),
    n = (1 << (i.step + 1)) - (i.step % 2 === 0 ? 2 : 1);
  n /= 3;
  var a = [],
    o,
    f;
  for (o = 0; o < s.length; o += i.step) {
    f = 0;
    for (var h = o + i.step - 1; h >= o; h--) f = (f << 1) + s[h];
    a.push(f);
  }
  for (
    var g = this.jpoint(null, null, null),
      y = this.jpoint(null, null, null),
      E = n;
    E > 0;
    E--
  ) {
    for (o = 0; o < a.length; o++)
      (f = a[o]),
        f === E
          ? (y = y.mixedAdd(i.points[o]))
          : f === -E && (y = y.mixedAdd(i.points[o].neg()));
    g = g.add(y);
  }
  return g.toP();
};
Fr.prototype._wnafMul = function (e, t) {
  var i = 4,
    s = e._getNAFPoints(i);
  i = s.wnd;
  for (
    var n = s.points,
      a = Hs(t, i, this._bitLength),
      o = this.jpoint(null, null, null),
      f = a.length - 1;
    f >= 0;
    f--
  ) {
    for (var h = 0; f >= 0 && a[f] === 0; f--) h++;
    if ((f >= 0 && h++, (o = o.dblp(h)), f < 0)) break;
    var g = a[f];
    Ks(g !== 0),
      e.type === "affine"
        ? g > 0
          ? (o = o.mixedAdd(n[(g - 1) >> 1]))
          : (o = o.mixedAdd(n[(-g - 1) >> 1].neg()))
        : g > 0
        ? (o = o.add(n[(g - 1) >> 1]))
        : (o = o.add(n[(-g - 1) >> 1].neg()));
  }
  return e.type === "affine" ? o.toP() : o;
};
Fr.prototype._wnafMulAdd = function (e, t, i, s, n) {
  var a = this._wnafT1,
    o = this._wnafT2,
    f = this._wnafT3,
    h = 0,
    g,
    y,
    E;
  for (g = 0; g < s; g++) {
    E = t[g];
    var w = E._getNAFPoints(e);
    (a[g] = w.wnd), (o[g] = w.points);
  }
  for (g = s - 1; g >= 1; g -= 2) {
    var S = g - 1,
      $ = g;
    if (a[S] !== 1 || a[$] !== 1) {
      (f[S] = Hs(i[S], a[S], this._bitLength)),
        (f[$] = Hs(i[$], a[$], this._bitLength)),
        (h = Math.max(f[S].length, h)),
        (h = Math.max(f[$].length, h));
      continue;
    }
    var q = [t[S], null, null, t[$]];
    t[S].y.cmp(t[$].y) === 0
      ? ((q[1] = t[S].add(t[$])), (q[2] = t[S].toJ().mixedAdd(t[$].neg())))
      : t[S].y.cmp(t[$].y.redNeg()) === 0
      ? ((q[1] = t[S].toJ().mixedAdd(t[$])), (q[2] = t[S].add(t[$].neg())))
      : ((q[1] = t[S].toJ().mixedAdd(t[$])),
        (q[2] = t[S].toJ().mixedAdd(t[$].neg())));
    var z = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
      C = z0(i[S], i[$]);
    for (
      h = Math.max(C[0].length, h),
        f[S] = new Array(h),
        f[$] = new Array(h),
        y = 0;
      y < h;
      y++
    ) {
      var L = C[0][y] | 0,
        A = C[1][y] | 0;
      (f[S][y] = z[(L + 1) * 3 + (A + 1)]), (f[$][y] = 0), (o[S] = q);
    }
  }
  var T = this.jpoint(null, null, null),
    R = this._wnafT4;
  for (g = h; g >= 0; g--) {
    for (var l = 0; g >= 0; ) {
      var P = !0;
      for (y = 0; y < s; y++) (R[y] = f[y][g] | 0), R[y] !== 0 && (P = !1);
      if (!P) break;
      l++, g--;
    }
    if ((g >= 0 && l++, (T = T.dblp(l)), g < 0)) break;
    for (y = 0; y < s; y++) {
      var H = R[y];
      H !== 0 &&
        (H > 0
          ? (E = o[y][(H - 1) >> 1])
          : H < 0 && (E = o[y][(-H - 1) >> 1].neg()),
        E.type === "affine" ? (T = T.mixedAdd(E)) : (T = T.add(E)));
    }
  }
  for (g = 0; g < s; g++) o[g] = null;
  return n ? T : T.toP();
};
function Wt(r, e) {
  (this.curve = r), (this.type = e), (this.precomputed = null);
}
Fr.BasePoint = Wt;
Wt.prototype.eq = function () {
  throw new Error("Not implemented");
};
Wt.prototype.validate = function () {
  return this.curve.validate(this);
};
Fr.prototype.decodePoint = function (e, t) {
  e = ds.toArray(e, t);
  var i = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * i) {
    e[0] === 6
      ? Ks(e[e.length - 1] % 2 === 0)
      : e[0] === 7 && Ks(e[e.length - 1] % 2 === 1);
    var s = this.point(e.slice(1, 1 + i), e.slice(1 + i, 1 + 2 * i));
    return s;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === i)
    return this.pointFromX(e.slice(1, 1 + i), e[0] === 3);
  throw new Error("Unknown point format");
};
Wt.prototype.encodeCompressed = function (e) {
  return this.encode(e, !0);
};
Wt.prototype._encode = function (e) {
  var t = this.curve.p.byteLength(),
    i = this.getX().toArray("be", t);
  return e
    ? [this.getY().isEven() ? 2 : 3].concat(i)
    : [4].concat(i, this.getY().toArray("be", t));
};
Wt.prototype.encode = function (e, t) {
  return ds.encode(this._encode(t), e);
};
Wt.prototype.precompute = function (e) {
  if (this.precomputed) return this;
  var t = { doubles: null, naf: null, beta: null };
  return (
    (t.naf = this._getNAFPoints(8)),
    (t.doubles = this._getDoubles(4, e)),
    (t.beta = this._getBeta()),
    (this.precomputed = t),
    this
  );
};
Wt.prototype._hasDoubles = function (e) {
  if (!this.precomputed) return !1;
  var t = this.precomputed.doubles;
  return t ? t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) : !1;
};
Wt.prototype._getDoubles = function (e, t) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var i = [this], s = this, n = 0; n < t; n += e) {
    for (var a = 0; a < e; a++) s = s.dbl();
    i.push(s);
  }
  return { step: e, points: i };
};
Wt.prototype._getNAFPoints = function (e) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (
    var t = [this], i = (1 << e) - 1, s = i === 1 ? null : this.dbl(), n = 1;
    n < i;
    n++
  )
    t[n] = t[n - 1].add(s);
  return { wnd: e, points: t };
};
Wt.prototype._getBeta = function () {
  return null;
};
Wt.prototype.dblp = function (e) {
  for (var t = this, i = 0; i < e; i++) t = t.dbl();
  return t;
};
var B0 = qt,
  nt = Sr,
  Fa = Sa,
  yi = fn,
  k0 = B0.assert;
function Jt(r) {
  yi.call(this, "short", r),
    (this.a = new nt(r.a, 16).toRed(this.red)),
    (this.b = new nt(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Fa(Jt, yi);
var H0 = Jt;
Jt.prototype._getEndomorphism = function (e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var t, i;
    if (e.beta) t = new nt(e.beta, 16).toRed(this.red);
    else {
      var s = this._getEndoRoots(this.p);
      (t = s[0].cmp(s[1]) < 0 ? s[0] : s[1]), (t = t.toRed(this.red));
    }
    if (e.lambda) i = new nt(e.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(t)) === 0
        ? (i = n[0])
        : ((i = n[1]), k0(this.g.mul(i).x.cmp(this.g.x.redMul(t)) === 0));
    }
    var a;
    return (
      e.basis
        ? (a = e.basis.map(function (o) {
            return { a: new nt(o.a, 16), b: new nt(o.b, 16) };
          }))
        : (a = this._getEndoBasis(i)),
      { beta: t, lambda: i, basis: a }
    );
  }
};
Jt.prototype._getEndoRoots = function (e) {
  var t = e === this.p ? this.red : nt.mont(e),
    i = new nt(2).toRed(t).redInvm(),
    s = i.redNeg(),
    n = new nt(3).toRed(t).redNeg().redSqrt().redMul(i),
    a = s.redAdd(n).fromRed(),
    o = s.redSub(n).fromRed();
  return [a, o];
};
Jt.prototype._getEndoBasis = function (e) {
  for (
    var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
      i = e,
      s = this.n.clone(),
      n = new nt(1),
      a = new nt(0),
      o = new nt(0),
      f = new nt(1),
      h,
      g,
      y,
      E,
      w,
      S,
      $,
      q = 0,
      z,
      C;
    i.cmpn(0) !== 0;

  ) {
    var L = s.div(i);
    (z = s.sub(L.mul(i))), (C = o.sub(L.mul(n)));
    var A = f.sub(L.mul(a));
    if (!y && z.cmp(t) < 0) (h = $.neg()), (g = n), (y = z.neg()), (E = C);
    else if (y && ++q === 2) break;
    ($ = z), (s = i), (i = z), (o = n), (n = C), (f = a), (a = A);
  }
  (w = z.neg()), (S = C);
  var T = y.sqr().add(E.sqr()),
    R = w.sqr().add(S.sqr());
  return (
    R.cmp(T) >= 0 && ((w = h), (S = g)),
    y.negative && ((y = y.neg()), (E = E.neg())),
    w.negative && ((w = w.neg()), (S = S.neg())),
    [
      { a: y, b: E },
      { a: w, b: S },
    ]
  );
};
Jt.prototype._endoSplit = function (e) {
  var t = this.endo.basis,
    i = t[0],
    s = t[1],
    n = s.b.mul(e).divRound(this.n),
    a = i.b.neg().mul(e).divRound(this.n),
    o = n.mul(i.a),
    f = a.mul(s.a),
    h = n.mul(i.b),
    g = a.mul(s.b),
    y = e.sub(o).sub(f),
    E = h.add(g).neg();
  return { k1: y, k2: E };
};
Jt.prototype.pointFromX = function (e, t) {
  (e = new nt(e, 16)), e.red || (e = e.toRed(this.red));
  var i = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
    s = i.redSqrt();
  if (s.redSqr().redSub(i).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var n = s.fromRed().isOdd();
  return ((t && !n) || (!t && n)) && (s = s.redNeg()), this.point(e, s);
};
Jt.prototype.validate = function (e) {
  if (e.inf) return !0;
  var t = e.x,
    i = e.y,
    s = this.a.redMul(t),
    n = t.redSqr().redMul(t).redIAdd(s).redIAdd(this.b);
  return i.redSqr().redISub(n).cmpn(0) === 0;
};
Jt.prototype._endoWnafMulAdd = function (e, t, i) {
  for (
    var s = this._endoWnafT1, n = this._endoWnafT2, a = 0;
    a < e.length;
    a++
  ) {
    var o = this._endoSplit(t[a]),
      f = e[a],
      h = f._getBeta();
    o.k1.negative && (o.k1.ineg(), (f = f.neg(!0))),
      o.k2.negative && (o.k2.ineg(), (h = h.neg(!0))),
      (s[a * 2] = f),
      (s[a * 2 + 1] = h),
      (n[a * 2] = o.k1),
      (n[a * 2 + 1] = o.k2);
  }
  for (var g = this._wnafMulAdd(1, s, n, a * 2, i), y = 0; y < a * 2; y++)
    (s[y] = null), (n[y] = null);
  return g;
};
function vt(r, e, t, i) {
  yi.BasePoint.call(this, r, "affine"),
    e === null && t === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new nt(e, 16)),
        (this.y = new nt(t, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Fa(vt, yi.BasePoint);
Jt.prototype.point = function (e, t, i) {
  return new vt(this, e, t, i);
};
Jt.prototype.pointFromJSON = function (e, t) {
  return vt.fromJSON(this, e, t);
};
vt.prototype._getBeta = function () {
  if (this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta) return e.beta;
    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var i = this.curve,
        s = function (n) {
          return i.point(n.x.redMul(i.endo.beta), n.y);
        };
      (e.beta = t),
        (t.precomputed = {
          beta: null,
          naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(s) },
          doubles: e.doubles && {
            step: e.doubles.step,
            points: e.doubles.points.map(s),
          },
        });
    }
    return t;
  }
};
vt.prototype.toJSON = function () {
  return this.precomputed
    ? [
        this.x,
        this.y,
        this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1),
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1),
          },
        },
      ]
    : [this.x, this.y];
};
vt.fromJSON = function (e, t, i) {
  typeof t == "string" && (t = JSON.parse(t));
  var s = e.point(t[0], t[1], i);
  if (!t[2]) return s;
  function n(o) {
    return e.point(o[0], o[1], i);
  }
  var a = t[2];
  return (
    (s.precomputed = {
      beta: null,
      doubles: a.doubles && {
        step: a.doubles.step,
        points: [s].concat(a.doubles.points.map(n)),
      },
      naf: a.naf && { wnd: a.naf.wnd, points: [s].concat(a.naf.points.map(n)) },
    }),
    s
  );
};
vt.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC Point Infinity>"
    : "<EC Point x: " +
        this.x.fromRed().toString(16, 2) +
        " y: " +
        this.y.fromRed().toString(16, 2) +
        ">";
};
vt.prototype.isInfinity = function () {
  return this.inf;
};
vt.prototype.add = function (e) {
  if (this.inf) return e;
  if (e.inf) return this;
  if (this.eq(e)) return this.dbl();
  if (this.neg().eq(e)) return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0) return this.curve.point(null, null);
  var t = this.y.redSub(e.y);
  t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(e.x).redInvm()));
  var i = t.redSqr().redISub(this.x).redISub(e.x),
    s = t.redMul(this.x.redSub(i)).redISub(this.y);
  return this.curve.point(i, s);
};
vt.prototype.dbl = function () {
  if (this.inf) return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0) return this.curve.point(null, null);
  var t = this.curve.a,
    i = this.x.redSqr(),
    s = e.redInvm(),
    n = i.redAdd(i).redIAdd(i).redIAdd(t).redMul(s),
    a = n.redSqr().redISub(this.x.redAdd(this.x)),
    o = n.redMul(this.x.redSub(a)).redISub(this.y);
  return this.curve.point(a, o);
};
vt.prototype.getX = function () {
  return this.x.fromRed();
};
vt.prototype.getY = function () {
  return this.y.fromRed();
};
vt.prototype.mul = function (e) {
  return (
    (e = new nt(e, 16)),
    this.isInfinity()
      ? this
      : this._hasDoubles(e)
      ? this.curve._fixedNafMul(this, e)
      : this.curve.endo
      ? this.curve._endoWnafMulAdd([this], [e])
      : this.curve._wnafMul(this, e)
  );
};
vt.prototype.mulAdd = function (e, t, i) {
  var s = [this, t],
    n = [e, i];
  return this.curve.endo
    ? this.curve._endoWnafMulAdd(s, n)
    : this.curve._wnafMulAdd(1, s, n, 2);
};
vt.prototype.jmulAdd = function (e, t, i) {
  var s = [this, t],
    n = [e, i];
  return this.curve.endo
    ? this.curve._endoWnafMulAdd(s, n, !0)
    : this.curve._wnafMulAdd(1, s, n, 2, !0);
};
vt.prototype.eq = function (e) {
  return (
    this === e ||
    (this.inf === e.inf &&
      (this.inf || (this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0)))
  );
};
vt.prototype.neg = function (e) {
  if (this.inf) return this;
  var t = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var i = this.precomputed,
      s = function (n) {
        return n.neg();
      };
    t.precomputed = {
      naf: i.naf && { wnd: i.naf.wnd, points: i.naf.points.map(s) },
      doubles: i.doubles && {
        step: i.doubles.step,
        points: i.doubles.points.map(s),
      },
    };
  }
  return t;
};
vt.prototype.toJ = function () {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function wt(r, e, t, i) {
  yi.BasePoint.call(this, r, "jacobian"),
    e === null && t === null && i === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new nt(0)))
      : ((this.x = new nt(e, 16)),
        (this.y = new nt(t, 16)),
        (this.z = new nt(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Fa(wt, yi.BasePoint);
Jt.prototype.jpoint = function (e, t, i) {
  return new wt(this, e, t, i);
};
wt.prototype.toP = function () {
  if (this.isInfinity()) return this.curve.point(null, null);
  var e = this.z.redInvm(),
    t = e.redSqr(),
    i = this.x.redMul(t),
    s = this.y.redMul(t).redMul(e);
  return this.curve.point(i, s);
};
wt.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
wt.prototype.add = function (e) {
  if (this.isInfinity()) return e;
  if (e.isInfinity()) return this;
  var t = e.z.redSqr(),
    i = this.z.redSqr(),
    s = this.x.redMul(t),
    n = e.x.redMul(i),
    a = this.y.redMul(t.redMul(e.z)),
    o = e.y.redMul(i.redMul(this.z)),
    f = s.redSub(n),
    h = a.redSub(o);
  if (f.cmpn(0) === 0)
    return h.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var g = f.redSqr(),
    y = g.redMul(f),
    E = s.redMul(g),
    w = h.redSqr().redIAdd(y).redISub(E).redISub(E),
    S = h.redMul(E.redISub(w)).redISub(a.redMul(y)),
    $ = this.z.redMul(e.z).redMul(f);
  return this.curve.jpoint(w, S, $);
};
wt.prototype.mixedAdd = function (e) {
  if (this.isInfinity()) return e.toJ();
  if (e.isInfinity()) return this;
  var t = this.z.redSqr(),
    i = this.x,
    s = e.x.redMul(t),
    n = this.y,
    a = e.y.redMul(t).redMul(this.z),
    o = i.redSub(s),
    f = n.redSub(a);
  if (o.cmpn(0) === 0)
    return f.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var h = o.redSqr(),
    g = h.redMul(o),
    y = i.redMul(h),
    E = f.redSqr().redIAdd(g).redISub(y).redISub(y),
    w = f.redMul(y.redISub(E)).redISub(n.redMul(g)),
    S = this.z.redMul(o);
  return this.curve.jpoint(E, w, S);
};
wt.prototype.dblp = function (e) {
  if (e === 0) return this;
  if (this.isInfinity()) return this;
  if (!e) return this.dbl();
  var t;
  if (this.curve.zeroA || this.curve.threeA) {
    var i = this;
    for (t = 0; t < e; t++) i = i.dbl();
    return i;
  }
  var s = this.curve.a,
    n = this.curve.tinv,
    a = this.x,
    o = this.y,
    f = this.z,
    h = f.redSqr().redSqr(),
    g = o.redAdd(o);
  for (t = 0; t < e; t++) {
    var y = a.redSqr(),
      E = g.redSqr(),
      w = E.redSqr(),
      S = y.redAdd(y).redIAdd(y).redIAdd(s.redMul(h)),
      $ = a.redMul(E),
      q = S.redSqr().redISub($.redAdd($)),
      z = $.redISub(q),
      C = S.redMul(z);
    C = C.redIAdd(C).redISub(w);
    var L = g.redMul(f);
    t + 1 < e && (h = h.redMul(w)), (a = q), (f = L), (g = C);
  }
  return this.curve.jpoint(a, g.redMul(n), f);
};
wt.prototype.dbl = function () {
  return this.isInfinity()
    ? this
    : this.curve.zeroA
    ? this._zeroDbl()
    : this.curve.threeA
    ? this._threeDbl()
    : this._dbl();
};
wt.prototype._zeroDbl = function () {
  var e, t, i;
  if (this.zOne) {
    var s = this.x.redSqr(),
      n = this.y.redSqr(),
      a = n.redSqr(),
      o = this.x.redAdd(n).redSqr().redISub(s).redISub(a);
    o = o.redIAdd(o);
    var f = s.redAdd(s).redIAdd(s),
      h = f.redSqr().redISub(o).redISub(o),
      g = a.redIAdd(a);
    (g = g.redIAdd(g)),
      (g = g.redIAdd(g)),
      (e = h),
      (t = f.redMul(o.redISub(h)).redISub(g)),
      (i = this.y.redAdd(this.y));
  } else {
    var y = this.x.redSqr(),
      E = this.y.redSqr(),
      w = E.redSqr(),
      S = this.x.redAdd(E).redSqr().redISub(y).redISub(w);
    S = S.redIAdd(S);
    var $ = y.redAdd(y).redIAdd(y),
      q = $.redSqr(),
      z = w.redIAdd(w);
    (z = z.redIAdd(z)),
      (z = z.redIAdd(z)),
      (e = q.redISub(S).redISub(S)),
      (t = $.redMul(S.redISub(e)).redISub(z)),
      (i = this.y.redMul(this.z)),
      (i = i.redIAdd(i));
  }
  return this.curve.jpoint(e, t, i);
};
wt.prototype._threeDbl = function () {
  var e, t, i;
  if (this.zOne) {
    var s = this.x.redSqr(),
      n = this.y.redSqr(),
      a = n.redSqr(),
      o = this.x.redAdd(n).redSqr().redISub(s).redISub(a);
    o = o.redIAdd(o);
    var f = s.redAdd(s).redIAdd(s).redIAdd(this.curve.a),
      h = f.redSqr().redISub(o).redISub(o);
    e = h;
    var g = a.redIAdd(a);
    (g = g.redIAdd(g)),
      (g = g.redIAdd(g)),
      (t = f.redMul(o.redISub(h)).redISub(g)),
      (i = this.y.redAdd(this.y));
  } else {
    var y = this.z.redSqr(),
      E = this.y.redSqr(),
      w = this.x.redMul(E),
      S = this.x.redSub(y).redMul(this.x.redAdd(y));
    S = S.redAdd(S).redIAdd(S);
    var $ = w.redIAdd(w);
    $ = $.redIAdd($);
    var q = $.redAdd($);
    (e = S.redSqr().redISub(q)),
      (i = this.y.redAdd(this.z).redSqr().redISub(E).redISub(y));
    var z = E.redSqr();
    (z = z.redIAdd(z)),
      (z = z.redIAdd(z)),
      (z = z.redIAdd(z)),
      (t = S.redMul($.redISub(e)).redISub(z));
  }
  return this.curve.jpoint(e, t, i);
};
wt.prototype._dbl = function () {
  var e = this.curve.a,
    t = this.x,
    i = this.y,
    s = this.z,
    n = s.redSqr().redSqr(),
    a = t.redSqr(),
    o = i.redSqr(),
    f = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)),
    h = t.redAdd(t);
  h = h.redIAdd(h);
  var g = h.redMul(o),
    y = f.redSqr().redISub(g.redAdd(g)),
    E = g.redISub(y),
    w = o.redSqr();
  (w = w.redIAdd(w)), (w = w.redIAdd(w)), (w = w.redIAdd(w));
  var S = f.redMul(E).redISub(w),
    $ = i.redAdd(i).redMul(s);
  return this.curve.jpoint(y, S, $);
};
wt.prototype.trpl = function () {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var e = this.x.redSqr(),
    t = this.y.redSqr(),
    i = this.z.redSqr(),
    s = t.redSqr(),
    n = e.redAdd(e).redIAdd(e),
    a = n.redSqr(),
    o = this.x.redAdd(t).redSqr().redISub(e).redISub(s);
  (o = o.redIAdd(o)), (o = o.redAdd(o).redIAdd(o)), (o = o.redISub(a));
  var f = o.redSqr(),
    h = s.redIAdd(s);
  (h = h.redIAdd(h)), (h = h.redIAdd(h)), (h = h.redIAdd(h));
  var g = n.redIAdd(o).redSqr().redISub(a).redISub(f).redISub(h),
    y = t.redMul(g);
  (y = y.redIAdd(y)), (y = y.redIAdd(y));
  var E = this.x.redMul(f).redISub(y);
  (E = E.redIAdd(E)), (E = E.redIAdd(E));
  var w = this.y.redMul(g.redMul(h.redISub(g)).redISub(o.redMul(f)));
  (w = w.redIAdd(w)), (w = w.redIAdd(w)), (w = w.redIAdd(w));
  var S = this.z.redAdd(o).redSqr().redISub(i).redISub(f);
  return this.curve.jpoint(E, w, S);
};
wt.prototype.mul = function (e, t) {
  return (e = new nt(e, t)), this.curve._wnafMul(this, e);
};
wt.prototype.eq = function (e) {
  if (e.type === "affine") return this.eq(e.toJ());
  if (this === e) return !0;
  var t = this.z.redSqr(),
    i = e.z.redSqr();
  if (this.x.redMul(i).redISub(e.x.redMul(t)).cmpn(0) !== 0) return !1;
  var s = t.redMul(this.z),
    n = i.redMul(e.z);
  return this.y.redMul(n).redISub(e.y.redMul(s)).cmpn(0) === 0;
};
wt.prototype.eqXToP = function (e) {
  var t = this.z.redSqr(),
    i = e.toRed(this.curve.red).redMul(t);
  if (this.x.cmp(i) === 0) return !0;
  for (var s = e.clone(), n = this.curve.redN.redMul(t); ; ) {
    if ((s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0)) return !1;
    if ((i.redIAdd(n), this.x.cmp(i) === 0)) return !0;
  }
};
wt.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC JPoint Infinity>"
    : "<EC JPoint x: " +
        this.x.toString(16, 2) +
        " y: " +
        this.y.toString(16, 2) +
        " z: " +
        this.z.toString(16, 2) +
        ">";
};
wt.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
var li = Sr,
  Vh = Sa,
  un = fn,
  K0 = qt;
function mi(r) {
  un.call(this, "mont", r),
    (this.a = new li(r.a, 16).toRed(this.red)),
    (this.b = new li(r.b, 16).toRed(this.red)),
    (this.i4 = new li(4).toRed(this.red).redInvm()),
    (this.two = new li(2).toRed(this.red)),
    (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
}
Vh(mi, un);
var V0 = mi;
mi.prototype.validate = function (e) {
  var t = e.normalize().x,
    i = t.redSqr(),
    s = i.redMul(t).redAdd(i.redMul(this.a)).redAdd(t),
    n = s.redSqrt();
  return n.redSqr().cmp(s) === 0;
};
function bt(r, e, t) {
  un.BasePoint.call(this, r, "projective"),
    e === null && t === null
      ? ((this.x = this.curve.one), (this.z = this.curve.zero))
      : ((this.x = new li(e, 16)),
        (this.z = new li(t, 16)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)));
}
Vh(bt, un.BasePoint);
mi.prototype.decodePoint = function (e, t) {
  return this.point(K0.toArray(e, t), 1);
};
mi.prototype.point = function (e, t) {
  return new bt(this, e, t);
};
mi.prototype.pointFromJSON = function (e) {
  return bt.fromJSON(this, e);
};
bt.prototype.precompute = function () {};
bt.prototype._encode = function () {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
bt.fromJSON = function (e, t) {
  return new bt(e, t[0], t[1] || e.one);
};
bt.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC Point Infinity>"
    : "<EC Point x: " +
        this.x.fromRed().toString(16, 2) +
        " z: " +
        this.z.fromRed().toString(16, 2) +
        ">";
};
bt.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
bt.prototype.dbl = function () {
  var e = this.x.redAdd(this.z),
    t = e.redSqr(),
    i = this.x.redSub(this.z),
    s = i.redSqr(),
    n = t.redSub(s),
    a = t.redMul(s),
    o = n.redMul(s.redAdd(this.curve.a24.redMul(n)));
  return this.curve.point(a, o);
};
bt.prototype.add = function () {
  throw new Error("Not supported on Montgomery curve");
};
bt.prototype.diffAdd = function (e, t) {
  var i = this.x.redAdd(this.z),
    s = this.x.redSub(this.z),
    n = e.x.redAdd(e.z),
    a = e.x.redSub(e.z),
    o = a.redMul(i),
    f = n.redMul(s),
    h = t.z.redMul(o.redAdd(f).redSqr()),
    g = t.x.redMul(o.redISub(f).redSqr());
  return this.curve.point(h, g);
};
bt.prototype.mul = function (e) {
  for (
    var t = e.clone(),
      i = this,
      s = this.curve.point(null, null),
      n = this,
      a = [];
    t.cmpn(0) !== 0;
    t.iushrn(1)
  )
    a.push(t.andln(1));
  for (var o = a.length - 1; o >= 0; o--)
    a[o] === 0
      ? ((i = i.diffAdd(s, n)), (s = s.dbl()))
      : ((s = i.diffAdd(s, n)), (i = i.dbl()));
  return s;
};
bt.prototype.mulAdd = function () {
  throw new Error("Not supported on Montgomery curve");
};
bt.prototype.jumlAdd = function () {
  throw new Error("Not supported on Montgomery curve");
};
bt.prototype.eq = function (e) {
  return this.getX().cmp(e.getX()) === 0;
};
bt.prototype.normalize = function () {
  return (
    (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this
  );
};
bt.prototype.getX = function () {
  return this.normalize(), this.x.fromRed();
};
var G0 = qt,
  _r = Sr,
  Gh = Sa,
  dn = fn,
  W0 = G0.assert;
function pr(r) {
  (this.twisted = (r.a | 0) !== 1),
    (this.mOneA = this.twisted && (r.a | 0) === -1),
    (this.extended = this.mOneA),
    dn.call(this, "edwards", r),
    (this.a = new _r(r.a, 16).umod(this.red.m)),
    (this.a = this.a.toRed(this.red)),
    (this.c = new _r(r.c, 16).toRed(this.red)),
    (this.c2 = this.c.redSqr()),
    (this.d = new _r(r.d, 16).toRed(this.red)),
    (this.dd = this.d.redAdd(this.d)),
    W0(!this.twisted || this.c.fromRed().cmpn(1) === 0),
    (this.oneC = (r.c | 0) === 1);
}
Gh(pr, dn);
var J0 = pr;
pr.prototype._mulA = function (e) {
  return this.mOneA ? e.redNeg() : this.a.redMul(e);
};
pr.prototype._mulC = function (e) {
  return this.oneC ? e : this.c.redMul(e);
};
pr.prototype.jpoint = function (e, t, i, s) {
  return this.point(e, t, i, s);
};
pr.prototype.pointFromX = function (e, t) {
  (e = new _r(e, 16)), e.red || (e = e.toRed(this.red));
  var i = e.redSqr(),
    s = this.c2.redSub(this.a.redMul(i)),
    n = this.one.redSub(this.c2.redMul(this.d).redMul(i)),
    a = s.redMul(n.redInvm()),
    o = a.redSqrt();
  if (o.redSqr().redSub(a).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var f = o.fromRed().isOdd();
  return ((t && !f) || (!t && f)) && (o = o.redNeg()), this.point(e, o);
};
pr.prototype.pointFromY = function (e, t) {
  (e = new _r(e, 16)), e.red || (e = e.toRed(this.red));
  var i = e.redSqr(),
    s = i.redSub(this.c2),
    n = i.redMul(this.d).redMul(this.c2).redSub(this.a),
    a = s.redMul(n.redInvm());
  if (a.cmp(this.zero) === 0) {
    if (t) throw new Error("invalid point");
    return this.point(this.zero, e);
  }
  var o = a.redSqrt();
  if (o.redSqr().redSub(a).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e);
};
pr.prototype.validate = function (e) {
  if (e.isInfinity()) return !0;
  e.normalize();
  var t = e.x.redSqr(),
    i = e.y.redSqr(),
    s = t.redMul(this.a).redAdd(i),
    n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(i)));
  return s.cmp(n) === 0;
};
function We(r, e, t, i, s) {
  dn.BasePoint.call(this, r, "projective"),
    e === null && t === null && i === null
      ? ((this.x = this.curve.zero),
        (this.y = this.curve.one),
        (this.z = this.curve.one),
        (this.t = this.curve.zero),
        (this.zOne = !0))
      : ((this.x = new _r(e, 16)),
        (this.y = new _r(t, 16)),
        (this.z = i ? new _r(i, 16) : this.curve.one),
        (this.t = s && new _r(s, 16)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
        (this.zOne = this.z === this.curve.one),
        this.curve.extended &&
          !this.t &&
          ((this.t = this.x.redMul(this.y)),
          this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
Gh(We, dn.BasePoint);
pr.prototype.pointFromJSON = function (e) {
  return We.fromJSON(this, e);
};
pr.prototype.point = function (e, t, i, s) {
  return new We(this, e, t, i, s);
};
We.fromJSON = function (e, t) {
  return new We(e, t[0], t[1], t[2]);
};
We.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC Point Infinity>"
    : "<EC Point x: " +
        this.x.fromRed().toString(16, 2) +
        " y: " +
        this.y.fromRed().toString(16, 2) +
        " z: " +
        this.z.fromRed().toString(16, 2) +
        ">";
};
We.prototype.isInfinity = function () {
  return (
    this.x.cmpn(0) === 0 &&
    (this.y.cmp(this.z) === 0 || (this.zOne && this.y.cmp(this.curve.c) === 0))
  );
};
We.prototype._extDbl = function () {
  var e = this.x.redSqr(),
    t = this.y.redSqr(),
    i = this.z.redSqr();
  i = i.redIAdd(i);
  var s = this.curve._mulA(e),
    n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
    a = s.redAdd(t),
    o = a.redSub(i),
    f = s.redSub(t),
    h = n.redMul(o),
    g = a.redMul(f),
    y = n.redMul(f),
    E = o.redMul(a);
  return this.curve.point(h, g, E, y);
};
We.prototype._projDbl = function () {
  var e = this.x.redAdd(this.y).redSqr(),
    t = this.x.redSqr(),
    i = this.y.redSqr(),
    s,
    n,
    a,
    o,
    f,
    h;
  if (this.curve.twisted) {
    o = this.curve._mulA(t);
    var g = o.redAdd(i);
    this.zOne
      ? ((s = e.redSub(t).redSub(i).redMul(g.redSub(this.curve.two))),
        (n = g.redMul(o.redSub(i))),
        (a = g.redSqr().redSub(g).redSub(g)))
      : ((f = this.z.redSqr()),
        (h = g.redSub(f).redISub(f)),
        (s = e.redSub(t).redISub(i).redMul(h)),
        (n = g.redMul(o.redSub(i))),
        (a = g.redMul(h)));
  } else
    (o = t.redAdd(i)),
      (f = this.curve._mulC(this.z).redSqr()),
      (h = o.redSub(f).redSub(f)),
      (s = this.curve._mulC(e.redISub(o)).redMul(h)),
      (n = this.curve._mulC(o).redMul(t.redISub(i))),
      (a = o.redMul(h));
  return this.curve.point(s, n, a);
};
We.prototype.dbl = function () {
  return this.isInfinity()
    ? this
    : this.curve.extended
    ? this._extDbl()
    : this._projDbl();
};
We.prototype._extAdd = function (e) {
  var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
    i = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
    s = this.t.redMul(this.curve.dd).redMul(e.t),
    n = this.z.redMul(e.z.redAdd(e.z)),
    a = i.redSub(t),
    o = n.redSub(s),
    f = n.redAdd(s),
    h = i.redAdd(t),
    g = a.redMul(o),
    y = f.redMul(h),
    E = a.redMul(h),
    w = o.redMul(f);
  return this.curve.point(g, y, w, E);
};
We.prototype._projAdd = function (e) {
  var t = this.z.redMul(e.z),
    i = t.redSqr(),
    s = this.x.redMul(e.x),
    n = this.y.redMul(e.y),
    a = this.curve.d.redMul(s).redMul(n),
    o = i.redSub(a),
    f = i.redAdd(a),
    h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(s).redISub(n),
    g = t.redMul(o).redMul(h),
    y,
    E;
  return (
    this.curve.twisted
      ? ((y = t.redMul(f).redMul(n.redSub(this.curve._mulA(s)))),
        (E = o.redMul(f)))
      : ((y = t.redMul(f).redMul(n.redSub(s))),
        (E = this.curve._mulC(o).redMul(f))),
    this.curve.point(g, y, E)
  );
};
We.prototype.add = function (e) {
  return this.isInfinity()
    ? e
    : e.isInfinity()
    ? this
    : this.curve.extended
    ? this._extAdd(e)
    : this._projAdd(e);
};
We.prototype.mul = function (e) {
  return this._hasDoubles(e)
    ? this.curve._fixedNafMul(this, e)
    : this.curve._wnafMul(this, e);
};
We.prototype.mulAdd = function (e, t, i) {
  return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !1);
};
We.prototype.jmulAdd = function (e, t, i) {
  return this.curve._wnafMulAdd(1, [this, t], [e, i], 2, !0);
};
We.prototype.normalize = function () {
  if (this.zOne) return this;
  var e = this.z.redInvm();
  return (
    (this.x = this.x.redMul(e)),
    (this.y = this.y.redMul(e)),
    this.t && (this.t = this.t.redMul(e)),
    (this.z = this.curve.one),
    (this.zOne = !0),
    this
  );
};
We.prototype.neg = function () {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg()
  );
};
We.prototype.getX = function () {
  return this.normalize(), this.x.fromRed();
};
We.prototype.getY = function () {
  return this.normalize(), this.y.fromRed();
};
We.prototype.eq = function (e) {
  return (
    this === e ||
    (this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0)
  );
};
We.prototype.eqXToP = function (e) {
  var t = e.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(t) === 0) return !0;
  for (var i = e.clone(), s = this.curve.redN.redMul(this.z); ; ) {
    if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
    if ((t.redIAdd(s), this.x.cmp(t) === 0)) return !0;
  }
};
We.prototype.toP = We.prototype.normalize;
We.prototype.mixedAdd = We.prototype.add;
(function (r) {
  var e = r;
  (e.base = fn), (e.short = H0), (e.mont = V0), (e.edwards = J0);
})(Na);
var ln = {},
  $n,
  Oo;
function Y0() {
  return (
    Oo ||
      ((Oo = 1),
      ($n = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      })),
    $n
  );
}
(function (r) {
  var e = r,
    t = Ia,
    i = Na,
    s = qt,
    n = s.assert;
  function a(h) {
    h.type === "short"
      ? (this.curve = new i.short(h))
      : h.type === "edwards"
      ? (this.curve = new i.edwards(h))
      : (this.curve = new i.mont(h)),
      (this.g = this.curve.g),
      (this.n = this.curve.n),
      (this.hash = h.hash),
      n(this.g.validate(), "Invalid curve"),
      n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  e.PresetCurve = a;
  function o(h, g) {
    Object.defineProperty(e, h, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var y = new a(g);
        return (
          Object.defineProperty(e, h, {
            configurable: !0,
            enumerable: !0,
            value: y,
          }),
          y
        );
      },
    });
  }
  o("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: t.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
    ],
  }),
    o("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: t.sha256,
      gRed: !1,
      g: [
        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
      ],
    }),
    o("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: t.sha256,
      gRed: !1,
      g: [
        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
      ],
    }),
    o("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: t.sha384,
      gRed: !1,
      g: [
        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
      ],
    }),
    o("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: t.sha512,
      gRed: !1,
      g: [
        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
      ],
    }),
    o("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: t.sha256,
      gRed: !1,
      g: ["9"],
    }),
    o("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: t.sha256,
      gRed: !1,
      g: [
        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
        "6666666666666666666666666666666666666666666666666666666666666658",
      ],
    });
  var f;
  try {
    f = Y0();
  } catch {
    f = void 0;
  }
  o("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: t.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3",
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15",
      },
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      f,
    ],
  });
})(ln);
var X0 = Ia,
  Wr = Ra,
  Wh = _h;
function Rr(r) {
  if (!(this instanceof Rr)) return new Rr(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var e = Wr.toArray(r.entropy, r.entropyEnc || "hex"),
    t = Wr.toArray(r.nonce, r.nonceEnc || "hex"),
    i = Wr.toArray(r.pers, r.persEnc || "hex");
  Wh(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(e, t, i);
}
var Q0 = Rr;
Rr.prototype._init = function (e, t, i) {
  var s = e.concat(t).concat(i);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var n = 0; n < this.V.length; n++) (this.K[n] = 0), (this.V[n] = 1);
  this._update(s), (this._reseed = 1), (this.reseedInterval = 281474976710656);
};
Rr.prototype._hmac = function () {
  return new X0.hmac(this.hash, this.K);
};
Rr.prototype._update = function (e) {
  var t = this._hmac().update(this.V).update([0]);
  e && (t = t.update(e)),
    (this.K = t.digest()),
    (this.V = this._hmac().update(this.V).digest()),
    e &&
      ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()),
      (this.V = this._hmac().update(this.V).digest()));
};
Rr.prototype.reseed = function (e, t, i, s) {
  typeof t != "string" && ((s = i), (i = t), (t = null)),
    (e = Wr.toArray(e, t)),
    (i = Wr.toArray(i, s)),
    Wh(
      e.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
    ),
    this._update(e.concat(i || [])),
    (this._reseed = 1);
};
Rr.prototype.generate = function (e, t, i, s) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof t != "string" && ((s = i), (i = t), (t = null)),
    i && ((i = Wr.toArray(i, s || "hex")), this._update(i));
  for (var n = []; n.length < e; )
    (this.V = this._hmac().update(this.V).digest()), (n = n.concat(this.V));
  var a = n.slice(0, e);
  return this._update(i), this._reseed++, Wr.encode(a, t);
};
var Z0 = Sr,
  ep = qt,
  oa = ep.assert;
function It(r, e) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    e.priv && this._importPrivate(e.priv, e.privEnc),
    e.pub && this._importPublic(e.pub, e.pubEnc);
}
var tp = It;
It.fromPublic = function (e, t, i) {
  return t instanceof It ? t : new It(e, { pub: t, pubEnc: i });
};
It.fromPrivate = function (e, t, i) {
  return t instanceof It ? t : new It(e, { priv: t, privEnc: i });
};
It.prototype.validate = function () {
  var e = this.getPublic();
  return e.isInfinity()
    ? { result: !1, reason: "Invalid public key" }
    : e.validate()
    ? e.mul(this.ec.curve.n).isInfinity()
      ? { result: !0, reason: null }
      : { result: !1, reason: "Public key * N != O" }
    : { result: !1, reason: "Public key is not a point" };
};
It.prototype.getPublic = function (e, t) {
  return (
    typeof e == "string" && ((t = e), (e = null)),
    this.pub || (this.pub = this.ec.g.mul(this.priv)),
    t ? this.pub.encode(t, e) : this.pub
  );
};
It.prototype.getPrivate = function (e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
It.prototype._importPrivate = function (e, t) {
  (this.priv = new Z0(e, t || 16)),
    (this.priv = this.priv.umod(this.ec.curve.n));
};
It.prototype._importPublic = function (e, t) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont"
      ? oa(e.x, "Need x coordinate")
      : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") &&
        oa(e.x && e.y, "Need both x and y coordinate"),
      (this.pub = this.ec.curve.point(e.x, e.y));
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, t);
};
It.prototype.derive = function (e) {
  return (
    e.validate() || oa(e.validate(), "public point not validated"),
    e.mul(this.priv).getX()
  );
};
It.prototype.sign = function (e, t, i) {
  return this.ec.sign(e, this, t, i);
};
It.prototype.verify = function (e, t) {
  return this.ec.verify(e, t, this);
};
It.prototype.inspect = function () {
  return (
    "<Key priv: " +
    (this.priv && this.priv.toString(16, 2)) +
    " pub: " +
    (this.pub && this.pub.inspect()) +
    " >"
  );
};
var Vs = Sr,
  qa = qt,
  rp = qa.assert;
function pn(r, e) {
  if (r instanceof pn) return r;
  this._importDER(r, e) ||
    (rp(r.r && r.s, "Signature without r or s"),
    (this.r = new Vs(r.r, 16)),
    (this.s = new Vs(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var ip = pn;
function sp() {
  this.place = 0;
}
function Nn(r, e) {
  var t = r[e.place++];
  if (!(t & 128)) return t;
  var i = t & 15;
  if (i === 0 || i > 4 || r[e.place] === 0) return !1;
  for (var s = 0, n = 0, a = e.place; n < i; n++, a++)
    (s <<= 8), (s |= r[a]), (s >>>= 0);
  return s <= 127 ? !1 : ((e.place = a), s);
}
function Co(r) {
  for (var e = 0, t = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < t; ) e++;
  return e === 0 ? r : r.slice(e);
}
pn.prototype._importDER = function (e, t) {
  e = qa.toArray(e, t);
  var i = new sp();
  if (e[i.place++] !== 48) return !1;
  var s = Nn(e, i);
  if (s === !1 || s + i.place !== e.length || e[i.place++] !== 2) return !1;
  var n = Nn(e, i);
  if (n === !1 || e[i.place] & 128) return !1;
  var a = e.slice(i.place, n + i.place);
  if (((i.place += n), e[i.place++] !== 2)) return !1;
  var o = Nn(e, i);
  if (o === !1 || e.length !== o + i.place || e[i.place] & 128) return !1;
  var f = e.slice(i.place, o + i.place);
  if (a[0] === 0)
    if (a[1] & 128) a = a.slice(1);
    else return !1;
  if (f[0] === 0)
    if (f[1] & 128) f = f.slice(1);
    else return !1;
  return (
    (this.r = new Vs(a)), (this.s = new Vs(f)), (this.recoveryParam = null), !0
  );
};
function Fn(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var t = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (r.push(t | 128); --t; ) r.push((e >>> (t << 3)) & 255);
  r.push(e);
}
pn.prototype.toDER = function (e) {
  var t = this.r.toArray(),
    i = this.s.toArray();
  for (
    t[0] & 128 && (t = [0].concat(t)),
      i[0] & 128 && (i = [0].concat(i)),
      t = Co(t),
      i = Co(i);
    !i[0] && !(i[1] & 128);

  )
    i = i.slice(1);
  var s = [2];
  Fn(s, t.length), (s = s.concat(t)), s.push(2), Fn(s, i.length);
  var n = s.concat(i),
    a = [48];
  return Fn(a, n.length), (a = a.concat(n)), qa.encode(a, e);
};
var Jr = Sr,
  Jh = Q0,
  np = qt,
  qn = ln,
  ap = Kh,
  Yh = np.assert,
  La = tp,
  gn = ip;
function Vt(r) {
  if (!(this instanceof Vt)) return new Vt(r);
  typeof r == "string" &&
    (Yh(Object.prototype.hasOwnProperty.call(qn, r), "Unknown curve " + r),
    (r = qn[r])),
    r instanceof qn.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var op = Vt;
Vt.prototype.keyPair = function (e) {
  return new La(this, e);
};
Vt.prototype.keyFromPrivate = function (e, t) {
  return La.fromPrivate(this, e, t);
};
Vt.prototype.keyFromPublic = function (e, t) {
  return La.fromPublic(this, e, t);
};
Vt.prototype.genKeyPair = function (e) {
  e || (e = {});
  for (
    var t = new Jh({
        hash: this.hash,
        pers: e.pers,
        persEnc: e.persEnc || "utf8",
        entropy: e.entropy || ap(this.hash.hmacStrength),
        entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
        nonce: this.n.toArray(),
      }),
      i = this.n.byteLength(),
      s = this.n.sub(new Jr(2));
    ;

  ) {
    var n = new Jr(t.generate(i));
    if (!(n.cmp(s) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
  }
};
Vt.prototype._truncateToN = function (e, t) {
  var i = e.byteLength() * 8 - this.n.bitLength();
  return (
    i > 0 && (e = e.ushrn(i)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
  );
};
Vt.prototype.sign = function (e, t, i, s) {
  typeof i == "object" && ((s = i), (i = null)),
    s || (s = {}),
    (t = this.keyFromPrivate(t, i)),
    (e = this._truncateToN(new Jr(e, 16)));
  for (
    var n = this.n.byteLength(),
      a = t.getPrivate().toArray("be", n),
      o = e.toArray("be", n),
      f = new Jh({
        hash: this.hash,
        entropy: a,
        nonce: o,
        pers: s.pers,
        persEnc: s.persEnc || "utf8",
      }),
      h = this.n.sub(new Jr(1)),
      g = 0;
    ;
    g++
  ) {
    var y = s.k ? s.k(g) : new Jr(f.generate(this.n.byteLength()));
    if (((y = this._truncateToN(y, !0)), !(y.cmpn(1) <= 0 || y.cmp(h) >= 0))) {
      var E = this.g.mul(y);
      if (!E.isInfinity()) {
        var w = E.getX(),
          S = w.umod(this.n);
        if (S.cmpn(0) !== 0) {
          var $ = y.invm(this.n).mul(S.mul(t.getPrivate()).iadd(e));
          if ((($ = $.umod(this.n)), $.cmpn(0) !== 0)) {
            var q = (E.getY().isOdd() ? 1 : 0) | (w.cmp(S) !== 0 ? 2 : 0);
            return (
              s.canonical &&
                $.cmp(this.nh) > 0 &&
                (($ = this.n.sub($)), (q ^= 1)),
              new gn({ r: S, s: $, recoveryParam: q })
            );
          }
        }
      }
    }
  }
};
Vt.prototype.verify = function (e, t, i, s) {
  (e = this._truncateToN(new Jr(e, 16))),
    (i = this.keyFromPublic(i, s)),
    (t = new gn(t, "hex"));
  var n = t.r,
    a = t.s;
  if (
    n.cmpn(1) < 0 ||
    n.cmp(this.n) >= 0 ||
    a.cmpn(1) < 0 ||
    a.cmp(this.n) >= 0
  )
    return !1;
  var o = a.invm(this.n),
    f = o.mul(e).umod(this.n),
    h = o.mul(n).umod(this.n),
    g;
  return this.curve._maxwellTrick
    ? ((g = this.g.jmulAdd(f, i.getPublic(), h)),
      g.isInfinity() ? !1 : g.eqXToP(n))
    : ((g = this.g.mulAdd(f, i.getPublic(), h)),
      g.isInfinity() ? !1 : g.getX().umod(this.n).cmp(n) === 0);
};
Vt.prototype.recoverPubKey = function (r, e, t, i) {
  Yh((3 & t) === t, "The recovery param is more than two bits"),
    (e = new gn(e, i));
  var s = this.n,
    n = new Jr(r),
    a = e.r,
    o = e.s,
    f = t & 1,
    h = t >> 1;
  if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
    throw new Error("Unable to find sencond key candinate");
  h
    ? (a = this.curve.pointFromX(a.add(this.curve.n), f))
    : (a = this.curve.pointFromX(a, f));
  var g = e.r.invm(s),
    y = s.sub(n).mul(g).umod(s),
    E = o.mul(g).umod(s);
  return this.g.mulAdd(y, a, E);
};
Vt.prototype.getKeyRecoveryParam = function (r, e, t, i) {
  if (((e = new gn(e, i)), e.recoveryParam !== null)) return e.recoveryParam;
  for (var s = 0; s < 4; s++) {
    var n;
    try {
      n = this.recoverPubKey(r, e, s);
    } catch {
      continue;
    }
    if (n.eq(t)) return s;
  }
  throw new Error("Unable to find valid recovery factor");
};
var ls = qt,
  Xh = ls.assert,
  To = ls.parseBytes,
  wi = ls.cachedProperty;
function gt(r, e) {
  (this.eddsa = r),
    (this._secret = To(e.secret)),
    r.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = To(e.pub));
}
gt.fromPublic = function (e, t) {
  return t instanceof gt ? t : new gt(e, { pub: t });
};
gt.fromSecret = function (e, t) {
  return t instanceof gt ? t : new gt(e, { secret: t });
};
gt.prototype.secret = function () {
  return this._secret;
};
wi(gt, "pubBytes", function () {
  return this.eddsa.encodePoint(this.pub());
});
wi(gt, "pub", function () {
  return this._pubBytes
    ? this.eddsa.decodePoint(this._pubBytes)
    : this.eddsa.g.mul(this.priv());
});
wi(gt, "privBytes", function () {
  var e = this.eddsa,
    t = this.hash(),
    i = e.encodingLength - 1,
    s = t.slice(0, e.encodingLength);
  return (s[0] &= 248), (s[i] &= 127), (s[i] |= 64), s;
});
wi(gt, "priv", function () {
  return this.eddsa.decodeInt(this.privBytes());
});
wi(gt, "hash", function () {
  return this.eddsa.hash().update(this.secret()).digest();
});
wi(gt, "messagePrefix", function () {
  return this.hash().slice(this.eddsa.encodingLength);
});
gt.prototype.sign = function (e) {
  return Xh(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this);
};
gt.prototype.verify = function (e, t) {
  return this.eddsa.verify(e, t, this);
};
gt.prototype.getSecret = function (e) {
  return (
    Xh(this._secret, "KeyPair is public only"), ls.encode(this.secret(), e)
  );
};
gt.prototype.getPublic = function (e) {
  return ls.encode(this.pubBytes(), e);
};
var cp = gt,
  hp = Sr,
  bn = qt,
  Ro = bn.assert,
  vn = bn.cachedProperty,
  fp = bn.parseBytes;
function Zr(r, e) {
  (this.eddsa = r),
    typeof e != "object" && (e = fp(e)),
    Array.isArray(e) &&
      (Ro(e.length === r.encodingLength * 2, "Signature has invalid size"),
      (e = { R: e.slice(0, r.encodingLength), S: e.slice(r.encodingLength) })),
    Ro(e.R && e.S, "Signature without R or S"),
    r.isPoint(e.R) && (this._R = e.R),
    e.S instanceof hp && (this._S = e.S),
    (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
    (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
}
vn(Zr, "S", function () {
  return this.eddsa.decodeInt(this.Sencoded());
});
vn(Zr, "R", function () {
  return this.eddsa.decodePoint(this.Rencoded());
});
vn(Zr, "Rencoded", function () {
  return this.eddsa.encodePoint(this.R());
});
vn(Zr, "Sencoded", function () {
  return this.eddsa.encodeInt(this.S());
});
Zr.prototype.toBytes = function () {
  return this.Rencoded().concat(this.Sencoded());
};
Zr.prototype.toHex = function () {
  return bn.encode(this.toBytes(), "hex").toUpperCase();
};
var up = Zr,
  dp = Ia,
  lp = ln,
  bi = qt,
  pp = bi.assert,
  Qh = bi.parseBytes,
  Zh = cp,
  $o = up;
function Ct(r) {
  if (
    (pp(r === "ed25519", "only tested with ed25519 so far"),
    !(this instanceof Ct))
  )
    return new Ct(r);
  (r = lp[r].curve),
    (this.curve = r),
    (this.g = r.g),
    this.g.precompute(r.n.bitLength() + 1),
    (this.pointClass = r.point().constructor),
    (this.encodingLength = Math.ceil(r.n.bitLength() / 8)),
    (this.hash = dp.sha512);
}
var gp = Ct;
Ct.prototype.sign = function (e, t) {
  e = Qh(e);
  var i = this.keyFromSecret(t),
    s = this.hashInt(i.messagePrefix(), e),
    n = this.g.mul(s),
    a = this.encodePoint(n),
    o = this.hashInt(a, i.pubBytes(), e).mul(i.priv()),
    f = s.add(o).umod(this.curve.n);
  return this.makeSignature({ R: n, S: f, Rencoded: a });
};
Ct.prototype.verify = function (e, t, i) {
  if (
    ((e = Qh(e)),
    (t = this.makeSignature(t)),
    t.S().gte(t.eddsa.curve.n) || t.S().isNeg())
  )
    return !1;
  var s = this.keyFromPublic(i),
    n = this.hashInt(t.Rencoded(), s.pubBytes(), e),
    a = this.g.mul(t.S()),
    o = t.R().add(s.pub().mul(n));
  return o.eq(a);
};
Ct.prototype.hashInt = function () {
  for (var e = this.hash(), t = 0; t < arguments.length; t++)
    e.update(arguments[t]);
  return bi.intFromLE(e.digest()).umod(this.curve.n);
};
Ct.prototype.keyFromPublic = function (e) {
  return Zh.fromPublic(this, e);
};
Ct.prototype.keyFromSecret = function (e) {
  return Zh.fromSecret(this, e);
};
Ct.prototype.makeSignature = function (e) {
  return e instanceof $o ? e : new $o(this, e);
};
Ct.prototype.encodePoint = function (e) {
  var t = e.getY().toArray("le", this.encodingLength);
  return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
};
Ct.prototype.decodePoint = function (e) {
  e = bi.parseBytes(e);
  var t = e.length - 1,
    i = e.slice(0, t).concat(e[t] & -129),
    s = (e[t] & 128) !== 0,
    n = bi.intFromLE(i);
  return this.curve.pointFromY(n, s);
};
Ct.prototype.encodeInt = function (e) {
  return e.toArray("le", this.encodingLength);
};
Ct.prototype.decodeInt = function (e) {
  return bi.intFromLE(e);
};
Ct.prototype.isPoint = function (e) {
  return e instanceof this.pointClass;
};
(function (r) {
  var e = r;
  (e.version = j0.version),
    (e.utils = qt),
    (e.rand = Kh),
    (e.curve = Na),
    (e.curves = ln),
    (e.ec = op),
    (e.eddsa = gp);
})(Hh);
var Ua = {},
  ef = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = ye,
    t = Ft;
  (r.DIGEST_LENGTH = 64), (r.BLOCK_SIZE = 128);
  var i = (function () {
    function o() {
      (this.digestLength = r.DIGEST_LENGTH),
        (this.blockSize = r.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (o.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (o.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (o.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (o.prototype.update = function (f, h) {
        if ((h === void 0 && (h = f.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var g = 0;
        if (((this._bytesHashed += h), this._bufferLength > 0)) {
          for (; this._bufferLength < r.BLOCK_SIZE && h > 0; )
            (this._buffer[this._bufferLength++] = f[g++]), h--;
          this._bufferLength === this.blockSize &&
            (n(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          h >= this.blockSize &&
          ((g = n(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            f,
            g,
            h
          )),
          (h %= this.blockSize));
          h > 0;

        )
          (this._buffer[this._bufferLength++] = f[g++]), h--;
        return this;
      }),
      (o.prototype.finish = function (f) {
        if (!this._finished) {
          var h = this._bytesHashed,
            g = this._bufferLength,
            y = (h / 536870912) | 0,
            E = h << 3,
            w = h % 128 < 112 ? 128 : 256;
          this._buffer[g] = 128;
          for (var S = g + 1; S < w - 8; S++) this._buffer[S] = 0;
          e.writeUint32BE(y, this._buffer, w - 8),
            e.writeUint32BE(E, this._buffer, w - 4),
            n(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              w
            ),
            (this._finished = !0);
        }
        for (var S = 0; S < this.digestLength / 8; S++)
          e.writeUint32BE(this._stateHi[S], f, S * 8),
            e.writeUint32BE(this._stateLo[S], f, S * 8 + 4);
        return this;
      }),
      (o.prototype.digest = function () {
        var f = new Uint8Array(this.digestLength);
        return this.finish(f), f;
      }),
      (o.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (o.prototype.restoreState = function (f) {
        return (
          this._stateHi.set(f.stateHi),
          this._stateLo.set(f.stateLo),
          (this._bufferLength = f.bufferLength),
          f.buffer && this._buffer.set(f.buffer),
          (this._bytesHashed = f.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (o.prototype.cleanSavedState = function (f) {
        t.wipe(f.stateHi),
          t.wipe(f.stateLo),
          f.buffer && t.wipe(f.buffer),
          (f.bufferLength = 0),
          (f.bytesHashed = 0);
      }),
      o
    );
  })();
  r.SHA512 = i;
  var s = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function n(o, f, h, g, y, E, w) {
    for (
      var S = h[0],
        $ = h[1],
        q = h[2],
        z = h[3],
        C = h[4],
        L = h[5],
        A = h[6],
        T = h[7],
        R = g[0],
        l = g[1],
        P = g[2],
        H = g[3],
        Y = g[4],
        M = g[5],
        c = g[6],
        v = g[7],
        d,
        b,
        _,
        D,
        x,
        m,
        u,
        I;
      w >= 128;

    ) {
      for (var K = 0; K < 16; K++) {
        var k = 8 * K + E;
        (o[K] = e.readUint32BE(y, k)), (f[K] = e.readUint32BE(y, k + 4));
      }
      for (var K = 0; K < 80; K++) {
        var W = S,
          V = $,
          ee = q,
          U = z,
          B = C,
          F = L,
          p = A,
          N = T,
          J = R,
          X = l,
          me = P,
          fe = H,
          ce = Y,
          qe = M,
          ve = c,
          pe = v;
        if (
          ((d = T),
          (b = v),
          (x = b & 65535),
          (m = b >>> 16),
          (u = d & 65535),
          (I = d >>> 16),
          (d =
            ((C >>> 14) | (Y << 18)) ^
            ((C >>> 18) | (Y << 14)) ^
            ((Y >>> 9) | (C << 23))),
          (b =
            ((Y >>> 14) | (C << 18)) ^
            ((Y >>> 18) | (C << 14)) ^
            ((C >>> 9) | (Y << 23))),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (d = (C & L) ^ (~C & A)),
          (b = (Y & M) ^ (~Y & c)),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (d = s[K * 2]),
          (b = s[K * 2 + 1]),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (d = o[K % 16]),
          (b = f[K % 16]),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (m += x >>> 16),
          (u += m >>> 16),
          (I += u >>> 16),
          (_ = (u & 65535) | (I << 16)),
          (D = (x & 65535) | (m << 16)),
          (d = _),
          (b = D),
          (x = b & 65535),
          (m = b >>> 16),
          (u = d & 65535),
          (I = d >>> 16),
          (d =
            ((S >>> 28) | (R << 4)) ^
            ((R >>> 2) | (S << 30)) ^
            ((R >>> 7) | (S << 25))),
          (b =
            ((R >>> 28) | (S << 4)) ^
            ((S >>> 2) | (R << 30)) ^
            ((S >>> 7) | (R << 25))),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (d = (S & $) ^ (S & q) ^ ($ & q)),
          (b = (R & l) ^ (R & P) ^ (l & P)),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (m += x >>> 16),
          (u += m >>> 16),
          (I += u >>> 16),
          (N = (u & 65535) | (I << 16)),
          (pe = (x & 65535) | (m << 16)),
          (d = U),
          (b = fe),
          (x = b & 65535),
          (m = b >>> 16),
          (u = d & 65535),
          (I = d >>> 16),
          (d = _),
          (b = D),
          (x += b & 65535),
          (m += b >>> 16),
          (u += d & 65535),
          (I += d >>> 16),
          (m += x >>> 16),
          (u += m >>> 16),
          (I += u >>> 16),
          (U = (u & 65535) | (I << 16)),
          (fe = (x & 65535) | (m << 16)),
          ($ = W),
          (q = V),
          (z = ee),
          (C = U),
          (L = B),
          (A = F),
          (T = p),
          (S = N),
          (l = J),
          (P = X),
          (H = me),
          (Y = fe),
          (M = ce),
          (c = qe),
          (v = ve),
          (R = pe),
          K % 16 === 15)
        )
          for (var k = 0; k < 16; k++)
            (d = o[k]),
              (b = f[k]),
              (x = b & 65535),
              (m = b >>> 16),
              (u = d & 65535),
              (I = d >>> 16),
              (d = o[(k + 9) % 16]),
              (b = f[(k + 9) % 16]),
              (x += b & 65535),
              (m += b >>> 16),
              (u += d & 65535),
              (I += d >>> 16),
              (_ = o[(k + 1) % 16]),
              (D = f[(k + 1) % 16]),
              (d =
                ((_ >>> 1) | (D << 31)) ^ ((_ >>> 8) | (D << 24)) ^ (_ >>> 7)),
              (b =
                ((D >>> 1) | (_ << 31)) ^
                ((D >>> 8) | (_ << 24)) ^
                ((D >>> 7) | (_ << 25))),
              (x += b & 65535),
              (m += b >>> 16),
              (u += d & 65535),
              (I += d >>> 16),
              (_ = o[(k + 14) % 16]),
              (D = f[(k + 14) % 16]),
              (d =
                ((_ >>> 19) | (D << 13)) ^ ((D >>> 29) | (_ << 3)) ^ (_ >>> 6)),
              (b =
                ((D >>> 19) | (_ << 13)) ^
                ((_ >>> 29) | (D << 3)) ^
                ((D >>> 6) | (_ << 26))),
              (x += b & 65535),
              (m += b >>> 16),
              (u += d & 65535),
              (I += d >>> 16),
              (m += x >>> 16),
              (u += m >>> 16),
              (I += u >>> 16),
              (o[k] = (u & 65535) | (I << 16)),
              (f[k] = (x & 65535) | (m << 16));
      }
      (d = S),
        (b = R),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[0]),
        (b = g[0]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[0] = S = (u & 65535) | (I << 16)),
        (g[0] = R = (x & 65535) | (m << 16)),
        (d = $),
        (b = l),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[1]),
        (b = g[1]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[1] = $ = (u & 65535) | (I << 16)),
        (g[1] = l = (x & 65535) | (m << 16)),
        (d = q),
        (b = P),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[2]),
        (b = g[2]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[2] = q = (u & 65535) | (I << 16)),
        (g[2] = P = (x & 65535) | (m << 16)),
        (d = z),
        (b = H),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[3]),
        (b = g[3]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[3] = z = (u & 65535) | (I << 16)),
        (g[3] = H = (x & 65535) | (m << 16)),
        (d = C),
        (b = Y),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[4]),
        (b = g[4]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[4] = C = (u & 65535) | (I << 16)),
        (g[4] = Y = (x & 65535) | (m << 16)),
        (d = L),
        (b = M),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[5]),
        (b = g[5]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[5] = L = (u & 65535) | (I << 16)),
        (g[5] = M = (x & 65535) | (m << 16)),
        (d = A),
        (b = c),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[6]),
        (b = g[6]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[6] = A = (u & 65535) | (I << 16)),
        (g[6] = c = (x & 65535) | (m << 16)),
        (d = T),
        (b = v),
        (x = b & 65535),
        (m = b >>> 16),
        (u = d & 65535),
        (I = d >>> 16),
        (d = h[7]),
        (b = g[7]),
        (x += b & 65535),
        (m += b >>> 16),
        (u += d & 65535),
        (I += d >>> 16),
        (m += x >>> 16),
        (u += m >>> 16),
        (I += u >>> 16),
        (h[7] = T = (u & 65535) | (I << 16)),
        (g[7] = v = (x & 65535) | (m << 16)),
        (E += 128),
        (w -= 128);
    }
    return E;
  }
  function a(o) {
    var f = new i();
    f.update(o);
    var h = f.digest();
    return f.clean(), h;
  }
  r.hash = a;
})(ef);
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.convertSecretKeyToX25519 =
      r.convertPublicKeyToX25519 =
      r.verify =
      r.sign =
      r.extractPublicKeyFromSecretKey =
      r.generateKeyPair =
      r.generateKeyPairFromSeed =
      r.SEED_LENGTH =
      r.SECRET_KEY_LENGTH =
      r.PUBLIC_KEY_LENGTH =
      r.SIGNATURE_LENGTH =
        void 0);
  const e = Nr,
    t = ef,
    i = Ft;
  (r.SIGNATURE_LENGTH = 64),
    (r.PUBLIC_KEY_LENGTH = 32),
    (r.SECRET_KEY_LENGTH = 64),
    (r.SEED_LENGTH = 32);
  function s(U) {
    const B = new Float64Array(16);
    if (U) for (let F = 0; F < U.length; F++) B[F] = U[F];
    return B;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const a = s(),
    o = s([1]),
    f = s([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    h = s([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    g = s([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    y = s([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    E = s([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function w(U, B) {
    for (let F = 0; F < 16; F++) U[F] = B[F] | 0;
  }
  function S(U) {
    let B = 1;
    for (let F = 0; F < 16; F++) {
      let p = U[F] + B + 65535;
      (B = Math.floor(p / 65536)), (U[F] = p - B * 65536);
    }
    U[0] += B - 1 + 37 * (B - 1);
  }
  function $(U, B, F) {
    const p = ~(F - 1);
    for (let N = 0; N < 16; N++) {
      const J = p & (U[N] ^ B[N]);
      (U[N] ^= J), (B[N] ^= J);
    }
  }
  function q(U, B) {
    const F = s(),
      p = s();
    for (let N = 0; N < 16; N++) p[N] = B[N];
    S(p), S(p), S(p);
    for (let N = 0; N < 2; N++) {
      F[0] = p[0] - 65517;
      for (let X = 1; X < 15; X++)
        (F[X] = p[X] - 65535 - ((F[X - 1] >> 16) & 1)), (F[X - 1] &= 65535);
      F[15] = p[15] - 32767 - ((F[14] >> 16) & 1);
      const J = (F[15] >> 16) & 1;
      (F[14] &= 65535), $(p, F, 1 - J);
    }
    for (let N = 0; N < 16; N++)
      (U[2 * N] = p[N] & 255), (U[2 * N + 1] = p[N] >> 8);
  }
  function z(U, B) {
    let F = 0;
    for (let p = 0; p < 32; p++) F |= U[p] ^ B[p];
    return (1 & ((F - 1) >>> 8)) - 1;
  }
  function C(U, B) {
    const F = new Uint8Array(32),
      p = new Uint8Array(32);
    return q(F, U), q(p, B), z(F, p);
  }
  function L(U) {
    const B = new Uint8Array(32);
    return q(B, U), B[0] & 1;
  }
  function A(U, B) {
    for (let F = 0; F < 16; F++) U[F] = B[2 * F] + (B[2 * F + 1] << 8);
    U[15] &= 32767;
  }
  function T(U, B, F) {
    for (let p = 0; p < 16; p++) U[p] = B[p] + F[p];
  }
  function R(U, B, F) {
    for (let p = 0; p < 16; p++) U[p] = B[p] - F[p];
  }
  function l(U, B, F) {
    let p,
      N,
      J = 0,
      X = 0,
      me = 0,
      fe = 0,
      ce = 0,
      qe = 0,
      ve = 0,
      pe = 0,
      $e = 0,
      he = 0,
      oe = 0,
      xe = 0,
      ne = 0,
      se = 0,
      ge = 0,
      re = 0,
      ae = 0,
      Te = 0,
      ie = 0,
      ue = 0,
      Fe = 0,
      de = 0,
      le = 0,
      Le = 0,
      je = 0,
      ze = 0,
      Yt = 0,
      Ue = 0,
      He = 0,
      Ir = 0,
      Je = 0,
      we = F[0],
      Ye = F[1],
      _e = F[2],
      Ee = F[3],
      Ze = F[4],
      be = F[5],
      Pe = F[6],
      at = F[7],
      Me = F[8],
      Ae = F[9],
      ot = F[10],
      De = F[11],
      Se = F[12],
      Ke = F[13],
      Oe = F[14],
      Ce = F[15];
    (p = B[0]),
      (J += p * we),
      (X += p * Ye),
      (me += p * _e),
      (fe += p * Ee),
      (ce += p * Ze),
      (qe += p * be),
      (ve += p * Pe),
      (pe += p * at),
      ($e += p * Me),
      (he += p * Ae),
      (oe += p * ot),
      (xe += p * De),
      (ne += p * Se),
      (se += p * Ke),
      (ge += p * Oe),
      (re += p * Ce),
      (p = B[1]),
      (X += p * we),
      (me += p * Ye),
      (fe += p * _e),
      (ce += p * Ee),
      (qe += p * Ze),
      (ve += p * be),
      (pe += p * Pe),
      ($e += p * at),
      (he += p * Me),
      (oe += p * Ae),
      (xe += p * ot),
      (ne += p * De),
      (se += p * Se),
      (ge += p * Ke),
      (re += p * Oe),
      (ae += p * Ce),
      (p = B[2]),
      (me += p * we),
      (fe += p * Ye),
      (ce += p * _e),
      (qe += p * Ee),
      (ve += p * Ze),
      (pe += p * be),
      ($e += p * Pe),
      (he += p * at),
      (oe += p * Me),
      (xe += p * Ae),
      (ne += p * ot),
      (se += p * De),
      (ge += p * Se),
      (re += p * Ke),
      (ae += p * Oe),
      (Te += p * Ce),
      (p = B[3]),
      (fe += p * we),
      (ce += p * Ye),
      (qe += p * _e),
      (ve += p * Ee),
      (pe += p * Ze),
      ($e += p * be),
      (he += p * Pe),
      (oe += p * at),
      (xe += p * Me),
      (ne += p * Ae),
      (se += p * ot),
      (ge += p * De),
      (re += p * Se),
      (ae += p * Ke),
      (Te += p * Oe),
      (ie += p * Ce),
      (p = B[4]),
      (ce += p * we),
      (qe += p * Ye),
      (ve += p * _e),
      (pe += p * Ee),
      ($e += p * Ze),
      (he += p * be),
      (oe += p * Pe),
      (xe += p * at),
      (ne += p * Me),
      (se += p * Ae),
      (ge += p * ot),
      (re += p * De),
      (ae += p * Se),
      (Te += p * Ke),
      (ie += p * Oe),
      (ue += p * Ce),
      (p = B[5]),
      (qe += p * we),
      (ve += p * Ye),
      (pe += p * _e),
      ($e += p * Ee),
      (he += p * Ze),
      (oe += p * be),
      (xe += p * Pe),
      (ne += p * at),
      (se += p * Me),
      (ge += p * Ae),
      (re += p * ot),
      (ae += p * De),
      (Te += p * Se),
      (ie += p * Ke),
      (ue += p * Oe),
      (Fe += p * Ce),
      (p = B[6]),
      (ve += p * we),
      (pe += p * Ye),
      ($e += p * _e),
      (he += p * Ee),
      (oe += p * Ze),
      (xe += p * be),
      (ne += p * Pe),
      (se += p * at),
      (ge += p * Me),
      (re += p * Ae),
      (ae += p * ot),
      (Te += p * De),
      (ie += p * Se),
      (ue += p * Ke),
      (Fe += p * Oe),
      (de += p * Ce),
      (p = B[7]),
      (pe += p * we),
      ($e += p * Ye),
      (he += p * _e),
      (oe += p * Ee),
      (xe += p * Ze),
      (ne += p * be),
      (se += p * Pe),
      (ge += p * at),
      (re += p * Me),
      (ae += p * Ae),
      (Te += p * ot),
      (ie += p * De),
      (ue += p * Se),
      (Fe += p * Ke),
      (de += p * Oe),
      (le += p * Ce),
      (p = B[8]),
      ($e += p * we),
      (he += p * Ye),
      (oe += p * _e),
      (xe += p * Ee),
      (ne += p * Ze),
      (se += p * be),
      (ge += p * Pe),
      (re += p * at),
      (ae += p * Me),
      (Te += p * Ae),
      (ie += p * ot),
      (ue += p * De),
      (Fe += p * Se),
      (de += p * Ke),
      (le += p * Oe),
      (Le += p * Ce),
      (p = B[9]),
      (he += p * we),
      (oe += p * Ye),
      (xe += p * _e),
      (ne += p * Ee),
      (se += p * Ze),
      (ge += p * be),
      (re += p * Pe),
      (ae += p * at),
      (Te += p * Me),
      (ie += p * Ae),
      (ue += p * ot),
      (Fe += p * De),
      (de += p * Se),
      (le += p * Ke),
      (Le += p * Oe),
      (je += p * Ce),
      (p = B[10]),
      (oe += p * we),
      (xe += p * Ye),
      (ne += p * _e),
      (se += p * Ee),
      (ge += p * Ze),
      (re += p * be),
      (ae += p * Pe),
      (Te += p * at),
      (ie += p * Me),
      (ue += p * Ae),
      (Fe += p * ot),
      (de += p * De),
      (le += p * Se),
      (Le += p * Ke),
      (je += p * Oe),
      (ze += p * Ce),
      (p = B[11]),
      (xe += p * we),
      (ne += p * Ye),
      (se += p * _e),
      (ge += p * Ee),
      (re += p * Ze),
      (ae += p * be),
      (Te += p * Pe),
      (ie += p * at),
      (ue += p * Me),
      (Fe += p * Ae),
      (de += p * ot),
      (le += p * De),
      (Le += p * Se),
      (je += p * Ke),
      (ze += p * Oe),
      (Yt += p * Ce),
      (p = B[12]),
      (ne += p * we),
      (se += p * Ye),
      (ge += p * _e),
      (re += p * Ee),
      (ae += p * Ze),
      (Te += p * be),
      (ie += p * Pe),
      (ue += p * at),
      (Fe += p * Me),
      (de += p * Ae),
      (le += p * ot),
      (Le += p * De),
      (je += p * Se),
      (ze += p * Ke),
      (Yt += p * Oe),
      (Ue += p * Ce),
      (p = B[13]),
      (se += p * we),
      (ge += p * Ye),
      (re += p * _e),
      (ae += p * Ee),
      (Te += p * Ze),
      (ie += p * be),
      (ue += p * Pe),
      (Fe += p * at),
      (de += p * Me),
      (le += p * Ae),
      (Le += p * ot),
      (je += p * De),
      (ze += p * Se),
      (Yt += p * Ke),
      (Ue += p * Oe),
      (He += p * Ce),
      (p = B[14]),
      (ge += p * we),
      (re += p * Ye),
      (ae += p * _e),
      (Te += p * Ee),
      (ie += p * Ze),
      (ue += p * be),
      (Fe += p * Pe),
      (de += p * at),
      (le += p * Me),
      (Le += p * Ae),
      (je += p * ot),
      (ze += p * De),
      (Yt += p * Se),
      (Ue += p * Ke),
      (He += p * Oe),
      (Ir += p * Ce),
      (p = B[15]),
      (re += p * we),
      (ae += p * Ye),
      (Te += p * _e),
      (ie += p * Ee),
      (ue += p * Ze),
      (Fe += p * be),
      (de += p * Pe),
      (le += p * at),
      (Le += p * Me),
      (je += p * Ae),
      (ze += p * ot),
      (Yt += p * De),
      (Ue += p * Se),
      (He += p * Ke),
      (Ir += p * Oe),
      (Je += p * Ce),
      (J += 38 * ae),
      (X += 38 * Te),
      (me += 38 * ie),
      (fe += 38 * ue),
      (ce += 38 * Fe),
      (qe += 38 * de),
      (ve += 38 * le),
      (pe += 38 * Le),
      ($e += 38 * je),
      (he += 38 * ze),
      (oe += 38 * Yt),
      (xe += 38 * Ue),
      (ne += 38 * He),
      (se += 38 * Ir),
      (ge += 38 * Je),
      (N = 1),
      (p = J + N + 65535),
      (N = Math.floor(p / 65536)),
      (J = p - N * 65536),
      (p = X + N + 65535),
      (N = Math.floor(p / 65536)),
      (X = p - N * 65536),
      (p = me + N + 65535),
      (N = Math.floor(p / 65536)),
      (me = p - N * 65536),
      (p = fe + N + 65535),
      (N = Math.floor(p / 65536)),
      (fe = p - N * 65536),
      (p = ce + N + 65535),
      (N = Math.floor(p / 65536)),
      (ce = p - N * 65536),
      (p = qe + N + 65535),
      (N = Math.floor(p / 65536)),
      (qe = p - N * 65536),
      (p = ve + N + 65535),
      (N = Math.floor(p / 65536)),
      (ve = p - N * 65536),
      (p = pe + N + 65535),
      (N = Math.floor(p / 65536)),
      (pe = p - N * 65536),
      (p = $e + N + 65535),
      (N = Math.floor(p / 65536)),
      ($e = p - N * 65536),
      (p = he + N + 65535),
      (N = Math.floor(p / 65536)),
      (he = p - N * 65536),
      (p = oe + N + 65535),
      (N = Math.floor(p / 65536)),
      (oe = p - N * 65536),
      (p = xe + N + 65535),
      (N = Math.floor(p / 65536)),
      (xe = p - N * 65536),
      (p = ne + N + 65535),
      (N = Math.floor(p / 65536)),
      (ne = p - N * 65536),
      (p = se + N + 65535),
      (N = Math.floor(p / 65536)),
      (se = p - N * 65536),
      (p = ge + N + 65535),
      (N = Math.floor(p / 65536)),
      (ge = p - N * 65536),
      (p = re + N + 65535),
      (N = Math.floor(p / 65536)),
      (re = p - N * 65536),
      (J += N - 1 + 37 * (N - 1)),
      (N = 1),
      (p = J + N + 65535),
      (N = Math.floor(p / 65536)),
      (J = p - N * 65536),
      (p = X + N + 65535),
      (N = Math.floor(p / 65536)),
      (X = p - N * 65536),
      (p = me + N + 65535),
      (N = Math.floor(p / 65536)),
      (me = p - N * 65536),
      (p = fe + N + 65535),
      (N = Math.floor(p / 65536)),
      (fe = p - N * 65536),
      (p = ce + N + 65535),
      (N = Math.floor(p / 65536)),
      (ce = p - N * 65536),
      (p = qe + N + 65535),
      (N = Math.floor(p / 65536)),
      (qe = p - N * 65536),
      (p = ve + N + 65535),
      (N = Math.floor(p / 65536)),
      (ve = p - N * 65536),
      (p = pe + N + 65535),
      (N = Math.floor(p / 65536)),
      (pe = p - N * 65536),
      (p = $e + N + 65535),
      (N = Math.floor(p / 65536)),
      ($e = p - N * 65536),
      (p = he + N + 65535),
      (N = Math.floor(p / 65536)),
      (he = p - N * 65536),
      (p = oe + N + 65535),
      (N = Math.floor(p / 65536)),
      (oe = p - N * 65536),
      (p = xe + N + 65535),
      (N = Math.floor(p / 65536)),
      (xe = p - N * 65536),
      (p = ne + N + 65535),
      (N = Math.floor(p / 65536)),
      (ne = p - N * 65536),
      (p = se + N + 65535),
      (N = Math.floor(p / 65536)),
      (se = p - N * 65536),
      (p = ge + N + 65535),
      (N = Math.floor(p / 65536)),
      (ge = p - N * 65536),
      (p = re + N + 65535),
      (N = Math.floor(p / 65536)),
      (re = p - N * 65536),
      (J += N - 1 + 37 * (N - 1)),
      (U[0] = J),
      (U[1] = X),
      (U[2] = me),
      (U[3] = fe),
      (U[4] = ce),
      (U[5] = qe),
      (U[6] = ve),
      (U[7] = pe),
      (U[8] = $e),
      (U[9] = he),
      (U[10] = oe),
      (U[11] = xe),
      (U[12] = ne),
      (U[13] = se),
      (U[14] = ge),
      (U[15] = re);
  }
  function P(U, B) {
    l(U, B, B);
  }
  function H(U, B) {
    const F = s();
    let p;
    for (p = 0; p < 16; p++) F[p] = B[p];
    for (p = 253; p >= 0; p--) P(F, F), p !== 2 && p !== 4 && l(F, F, B);
    for (p = 0; p < 16; p++) U[p] = F[p];
  }
  function Y(U, B) {
    const F = s();
    let p;
    for (p = 0; p < 16; p++) F[p] = B[p];
    for (p = 250; p >= 0; p--) P(F, F), p !== 1 && l(F, F, B);
    for (p = 0; p < 16; p++) U[p] = F[p];
  }
  function M(U, B) {
    const F = s(),
      p = s(),
      N = s(),
      J = s(),
      X = s(),
      me = s(),
      fe = s(),
      ce = s(),
      qe = s();
    R(F, U[1], U[0]),
      R(qe, B[1], B[0]),
      l(F, F, qe),
      T(p, U[0], U[1]),
      T(qe, B[0], B[1]),
      l(p, p, qe),
      l(N, U[3], B[3]),
      l(N, N, h),
      l(J, U[2], B[2]),
      T(J, J, J),
      R(X, p, F),
      R(me, J, N),
      T(fe, J, N),
      T(ce, p, F),
      l(U[0], X, me),
      l(U[1], ce, fe),
      l(U[2], fe, me),
      l(U[3], X, ce);
  }
  function c(U, B, F) {
    for (let p = 0; p < 4; p++) $(U[p], B[p], F);
  }
  function v(U, B) {
    const F = s(),
      p = s(),
      N = s();
    H(N, B[2]), l(F, B[0], N), l(p, B[1], N), q(U, p), (U[31] ^= L(F) << 7);
  }
  function d(U, B, F) {
    w(U[0], a), w(U[1], o), w(U[2], o), w(U[3], a);
    for (let p = 255; p >= 0; --p) {
      const N = (F[(p / 8) | 0] >> (p & 7)) & 1;
      c(U, B, N), M(B, U), M(U, U), c(U, B, N);
    }
  }
  function b(U, B) {
    const F = [s(), s(), s(), s()];
    w(F[0], g), w(F[1], y), w(F[2], o), l(F[3], g, y), d(U, F, B);
  }
  function _(U) {
    if (U.length !== r.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
    const B = (0, t.hash)(U);
    (B[0] &= 248), (B[31] &= 127), (B[31] |= 64);
    const F = new Uint8Array(32),
      p = [s(), s(), s(), s()];
    b(p, B), v(F, p);
    const N = new Uint8Array(64);
    return N.set(U), N.set(F, 32), { publicKey: F, secretKey: N };
  }
  r.generateKeyPairFromSeed = _;
  function D(U) {
    const B = (0, e.randomBytes)(32, U),
      F = _(B);
    return (0, i.wipe)(B), F;
  }
  r.generateKeyPair = D;
  function x(U) {
    if (U.length !== r.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(U.subarray(32));
  }
  r.extractPublicKeyFromSecretKey = x;
  const m = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function u(U, B) {
    let F, p, N, J;
    for (p = 63; p >= 32; --p) {
      for (F = 0, N = p - 32, J = p - 12; N < J; ++N)
        (B[N] += F - 16 * B[p] * m[N - (p - 32)]),
          (F = Math.floor((B[N] + 128) / 256)),
          (B[N] -= F * 256);
      (B[N] += F), (B[p] = 0);
    }
    for (F = 0, N = 0; N < 32; N++)
      (B[N] += F - (B[31] >> 4) * m[N]), (F = B[N] >> 8), (B[N] &= 255);
    for (N = 0; N < 32; N++) B[N] -= F * m[N];
    for (p = 0; p < 32; p++) (B[p + 1] += B[p] >> 8), (U[p] = B[p] & 255);
  }
  function I(U) {
    const B = new Float64Array(64);
    for (let F = 0; F < 64; F++) B[F] = U[F];
    for (let F = 0; F < 64; F++) U[F] = 0;
    u(U, B);
  }
  function K(U, B) {
    const F = new Float64Array(64),
      p = [s(), s(), s(), s()],
      N = (0, t.hash)(U.subarray(0, 32));
    (N[0] &= 248), (N[31] &= 127), (N[31] |= 64);
    const J = new Uint8Array(64);
    J.set(N.subarray(32), 32);
    const X = new t.SHA512();
    X.update(J.subarray(32)), X.update(B);
    const me = X.digest();
    X.clean(),
      I(me),
      b(p, me),
      v(J, p),
      X.reset(),
      X.update(J.subarray(0, 32)),
      X.update(U.subarray(32)),
      X.update(B);
    const fe = X.digest();
    I(fe);
    for (let ce = 0; ce < 32; ce++) F[ce] = me[ce];
    for (let ce = 0; ce < 32; ce++)
      for (let qe = 0; qe < 32; qe++) F[ce + qe] += fe[ce] * N[qe];
    return u(J.subarray(32), F), J;
  }
  r.sign = K;
  function k(U, B) {
    const F = s(),
      p = s(),
      N = s(),
      J = s(),
      X = s(),
      me = s(),
      fe = s();
    return (
      w(U[2], o),
      A(U[1], B),
      P(N, U[1]),
      l(J, N, f),
      R(N, N, U[2]),
      T(J, U[2], J),
      P(X, J),
      P(me, X),
      l(fe, me, X),
      l(F, fe, N),
      l(F, F, J),
      Y(F, F),
      l(F, F, N),
      l(F, F, J),
      l(F, F, J),
      l(U[0], F, J),
      P(p, U[0]),
      l(p, p, J),
      C(p, N) && l(U[0], U[0], E),
      P(p, U[0]),
      l(p, p, J),
      C(p, N)
        ? -1
        : (L(U[0]) === B[31] >> 7 && R(U[0], a, U[0]), l(U[3], U[0], U[1]), 0)
    );
  }
  function W(U, B, F) {
    const p = new Uint8Array(32),
      N = [s(), s(), s(), s()],
      J = [s(), s(), s(), s()];
    if (F.length !== r.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
    if (k(J, U)) return !1;
    const X = new t.SHA512();
    X.update(F.subarray(0, 32)), X.update(U), X.update(B);
    const me = X.digest();
    return I(me), d(N, J, me), b(J, F.subarray(32)), M(N, J), v(p, N), !z(F, p);
  }
  r.verify = W;
  function V(U) {
    let B = [s(), s(), s(), s()];
    if (k(B, U)) throw new Error("Ed25519: invalid public key");
    let F = s(),
      p = s(),
      N = B[1];
    T(F, o, N), R(p, o, N), H(p, p), l(F, F, p);
    let J = new Uint8Array(32);
    return q(J, F), J;
  }
  r.convertPublicKeyToX25519 = V;
  function ee(U) {
    const B = (0, t.hash)(U.subarray(0, 32));
    (B[0] &= 248), (B[31] &= 127), (B[31] |= 64);
    const F = new Uint8Array(B.subarray(0, 32));
    return (0, i.wipe)(B), F;
  }
  r.convertSecretKeyToX25519 = ee;
})(Ua);
const bp = "EdDSA",
  vp = "JWT",
  Gs = ".",
  yn = "base64url",
  tf = "utf8",
  rf = "utf8",
  yp = ":",
  mp = "did",
  wp = "key",
  No = "base58btc",
  _p = "z",
  Ep = "K36",
  Sp = 32,
  Ip = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  xp = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function Dp(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return xp(r);
  } catch {
    return r;
  }
}
function Pp(r) {
  return typeof r == "string" ? r : Ip(r) || "";
}
function Fo(r) {
  return Dp(pt(lt(r, yn), tf));
}
function Ws(r) {
  return pt(lt(Pp(r), tf), yn);
}
function sf(r) {
  const e = lt(Ep, No),
    t = _p + pt(Ns([e, r]), No);
  return [mp, wp, t].join(yp);
}
function Mp(r) {
  return pt(r, yn);
}
function Ap(r) {
  return lt(r, yn);
}
function Op(r) {
  return lt([Ws(r.header), Ws(r.payload)].join(Gs), rf);
}
function Cp(r) {
  return [Ws(r.header), Ws(r.payload), Mp(r.signature)].join(Gs);
}
function ca(r) {
  const e = r.split(Gs),
    t = Fo(e[0]),
    i = Fo(e[1]),
    s = Ap(e[2]),
    n = lt(e.slice(0, 2).join(Gs), rf);
  return { header: t, payload: i, signature: s, data: n };
}
function qo(r = Nr.randomBytes(Sp)) {
  return Ua.generateKeyPairFromSeed(r);
}
async function Tp(r, e, t, i, s = Z.fromMiliseconds(Date.now())) {
  const n = { alg: bp, typ: vp },
    a = sf(i.publicKey),
    o = s + t,
    f = { iss: a, sub: r, aud: e, iat: s, exp: o },
    h = Op({ header: n, payload: f }),
    g = Ua.sign(i.secretKey, h);
  return Cp({ header: n, payload: f, signature: g });
}
const Rp = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
    batchFetchMessages: "waku_batchFetchMessages",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
    batchFetchMessages: "irn_batchFetchMessages",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
    batchFetchMessages: "iridium_batchFetchMessages",
  },
};
var $p = {};
const Np = ":";
function pi(r) {
  const [e, t] = r.split(Np);
  return { namespace: e, reference: t };
}
function Lo(r, e = []) {
  const t = [];
  return (
    Object.keys(r).forEach((i) => {
      if (e.length && !e.includes(i)) return;
      const s = r[i];
      t.push(...s.accounts);
    }),
    t
  );
}
function nf(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
var Fp = Object.defineProperty,
  Uo = Object.getOwnPropertySymbols,
  qp = Object.prototype.hasOwnProperty,
  Lp = Object.prototype.propertyIsEnumerable,
  jo = (r, e, t) =>
    e in r
      ? Fp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  zo = (r, e) => {
    for (var t in e || (e = {})) qp.call(e, t) && jo(r, t, e[t]);
    if (Uo) for (var t of Uo(e)) Lp.call(e, t) && jo(r, t, e[t]);
    return r;
  };
const Up = "ReactNative",
  Nt = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  jp = "js";
function Js() {
  return (
    typeof rr < "u" && typeof rr.versions < "u" && typeof rr.versions.node < "u"
  );
}
function _i() {
  return !sn() && !!Pa() && navigator.product === Up;
}
function ps() {
  return !Js() && !!Pa() && !!sn();
}
function gs() {
  return _i()
    ? Nt.reactNative
    : Js()
    ? Nt.node
    : ps()
    ? Nt.browser
    : Nt.unknown;
}
function zp() {
  var r;
  try {
    return _i() &&
      typeof Re < "u" &&
      typeof (Re == null ? void 0 : Re.Application) < "u"
      ? (r = Re.Application) == null
        ? void 0
        : r.applicationId
      : void 0;
  } catch {
    return;
  }
}
function Bp(r, e) {
  let t = rs.parse(r);
  return (t = zo(zo({}, t), e)), (r = rs.stringify(t)), r;
}
function af() {
  return Dh() || { name: "", description: "", url: "", icons: [""] };
}
function kp() {
  if (
    gs() === Nt.reactNative &&
    typeof Re < "u" &&
    typeof (Re == null ? void 0 : Re.Platform) < "u"
  ) {
    const { OS: t, Version: i } = Re.Platform;
    return [t, i].join("-");
  }
  const r = Gu();
  if (r === null) return "unknown";
  const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser"
    ? [e, r.name, r.version].join("-")
    : [e, r.version].join("-");
}
function Hp() {
  var r;
  const e = gs();
  return e === Nt.browser
    ? [e, ((r = xh()) == null ? void 0 : r.host) || "unknown"].join(":")
    : e;
}
function of(r, e, t) {
  const i = kp(),
    s = Hp();
  return [[r, e].join("-"), [jp, t].join("-"), i, s].join("/");
}
function Kp({
  protocol: r,
  version: e,
  relayUrl: t,
  sdkVersion: i,
  auth: s,
  projectId: n,
  useOnCloseEvent: a,
  bundleId: o,
}) {
  const f = t.split("?"),
    h = of(r, e, i),
    g = {
      auth: s,
      ua: h,
      projectId: n,
      useOnCloseEvent: a || void 0,
      origin: o || void 0,
    },
    y = Bp(f[1] || "", g);
  return f[0] + "?" + y;
}
function Vr(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function cf(r) {
  return Object.fromEntries(r.entries());
}
function hf(r) {
  return new Map(Object.entries(r));
}
function Hr(r = Z.FIVE_MINUTES, e) {
  const t = Z.toMiliseconds(r || Z.FIVE_MINUTES);
  let i, s, n;
  return {
    resolve: (a) => {
      n && i && (clearTimeout(n), i(a));
    },
    reject: (a) => {
      n && s && (clearTimeout(n), s(a));
    },
    done: () =>
      new Promise((a, o) => {
        (n = setTimeout(() => {
          o(new Error(e));
        }, t)),
          (i = a),
          (s = o);
      }),
  };
}
function gi(r, e, t) {
  return new Promise(async (i, s) => {
    const n = setTimeout(() => s(new Error(t)), e);
    try {
      const a = await r;
      i(a);
    } catch (a) {
      s(a);
    }
    clearTimeout(n);
  });
}
function ff(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`)) return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function Vp(r) {
  return ff("topic", r);
}
function Gp(r) {
  return ff("id", r);
}
function uf(r) {
  const [e, t] = r.split(":"),
    i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) i.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return i;
}
function ht(r, e) {
  return Z.fromMiliseconds(Date.now() + Z.toMiliseconds(r));
}
function Mr(r) {
  return Date.now() >= Z.toMiliseconds(r);
}
function Ne(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function Fs(r = [], e = []) {
  return [...new Set([...r, ...e])];
}
async function Wp({ id: r, topic: e, wcDeepLink: t }) {
  var i;
  try {
    if (!t) return;
    const s = typeof t == "string" ? JSON.parse(t) : t,
      n = s == null ? void 0 : s.href;
    if (typeof n != "string") return;
    const a = Jp(n, r, e),
      o = gs();
    if (o === Nt.browser) {
      if (!((i = sn()) != null && i.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      a.startsWith("https://") || a.startsWith("http://")
        ? window.open(a, "_blank", "noreferrer noopener")
        : window.open(a, Xp() ? "_blank" : "_self", "noreferrer noopener");
    } else
      o === Nt.reactNative &&
        typeof (Re == null ? void 0 : Re.Linking) < "u" &&
        (await Re.Linking.openURL(a));
  } catch (s) {
    console.error(s);
  }
}
function Jp(r, e, t) {
  const i = `requestId=${e}&sessionTopic=${t}`;
  r.endsWith("/") && (r = r.slice(0, -1));
  let s = `${r}`;
  if (r.startsWith("https://t.me")) {
    const n = r.includes("?") ? "&startapp=" : "?startapp=";
    s = `${s}${n}${Qp(i, !0)}`;
  } else s = `${s}/wc?${i}`;
  return s;
}
async function Yp(r, e) {
  let t = "";
  try {
    if (ps() && ((t = localStorage.getItem(e)), t)) return t;
    t = await r.getItem(e);
  } catch (i) {
    console.error(i);
  }
  return t;
}
function Bo(r, e) {
  if (!r.includes(e)) return null;
  const t = r.split(/([&,?,=])/),
    i = t.indexOf(e);
  return t[i + 2];
}
function ko() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (r) => {
        const e = (Math.random() * 16) | 0;
        return (r === "x" ? e : (e & 3) | 8).toString(16);
      });
}
function ja() {
  return typeof rr < "u" && $p.IS_VITEST === "true";
}
function Xp() {
  return (
    typeof window < "u" &&
    (!!window.TelegramWebviewProxy ||
      !!window.Telegram ||
      !!window.TelegramWebviewProxyProto)
  );
}
function Qp(r, e = !1) {
  const t = Kt.from(r).toString("base64");
  return e ? t.replace(/[=]/g, "") : t;
}
function df(r) {
  return Kt.from(r, "base64").toString("utf-8");
}
const Zp = "https://rpc.walletconnect.org/v1";
async function e1(r, e, t, i, s, n) {
  switch (t.t) {
    case "eip191":
      return t1(r, e, t.s);
    case "eip1271":
      return await r1(r, e, t.s, i, s, n);
    default:
      throw new Error(
        `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`
      );
  }
}
function t1(r, e, t) {
  return $u(Eh(e), t).toLowerCase() === r.toLowerCase();
}
async function r1(r, e, t, i, s, n) {
  const a = pi(i);
  if (!a.namespace || !a.reference)
    throw new Error(
      `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
    );
  try {
    const o = "0x1626ba7e",
      f = "0000000000000000000000000000000000000000000000000000000000000040",
      h = "0000000000000000000000000000000000000000000000000000000000000041",
      g = t.substring(2),
      y = Eh(e).substring(2),
      E = o + y + f + h + g,
      w = await fetch(`${n || Zp}/?chainId=${i}&projectId=${s}`, {
        method: "POST",
        body: JSON.stringify({
          id: i1(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [{ to: r, data: E }, "latest"],
        }),
      }),
      { result: S } = await w.json();
    return S ? S.slice(0, o.length).toLowerCase() === o.toLowerCase() : !1;
  } catch (o) {
    return console.error("isValidEip1271Signature: ", o), !1;
  }
}
function i1() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var s1 = Object.defineProperty,
  n1 = Object.defineProperties,
  a1 = Object.getOwnPropertyDescriptors,
  Ho = Object.getOwnPropertySymbols,
  o1 = Object.prototype.hasOwnProperty,
  c1 = Object.prototype.propertyIsEnumerable,
  Ko = (r, e, t) =>
    e in r
      ? s1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  h1 = (r, e) => {
    for (var t in e || (e = {})) o1.call(e, t) && Ko(r, t, e[t]);
    if (Ho) for (var t of Ho(e)) c1.call(e, t) && Ko(r, t, e[t]);
    return r;
  },
  f1 = (r, e) => n1(r, a1(e));
const u1 = "did:pkh:",
  za = (r) => (r == null ? void 0 : r.split(":")),
  d1 = (r) => {
    const e = r && za(r);
    if (e) return r.includes(u1) ? e[3] : e[1];
  },
  ha = (r) => {
    const e = r && za(r);
    if (e) return e[2] + ":" + e[3];
  },
  Ys = (r) => {
    const e = r && za(r);
    if (e) return e.pop();
  };
async function Vo(r) {
  const { cacao: e, projectId: t } = r,
    { s: i, p: s } = e,
    n = lf(s, s.iss),
    a = Ys(s.iss);
  return await e1(a, n, i, ha(s.iss), t);
}
const lf = (r, e) => {
  const t = `${r.domain} wants you to sign in with your Ethereum account:`,
    i = Ys(e);
  if (!r.aud && !r.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let s = r.statement || void 0;
  const n = `URI: ${r.aud || r.uri}`,
    a = `Version: ${r.version}`,
    o = `Chain ID: ${d1(e)}`,
    f = `Nonce: ${r.nonce}`,
    h = `Issued At: ${r.iat}`,
    g = r.exp ? `Expiration Time: ${r.exp}` : void 0,
    y = r.nbf ? `Not Before: ${r.nbf}` : void 0,
    E = r.requestId ? `Request ID: ${r.requestId}` : void 0,
    w = r.resources
      ? `Resources:${r.resources
          .map(
            ($) => `
- ${$}`
          )
          .join("")}`
      : void 0,
    S = qs(r.resources);
  if (S) {
    const $ = is(S);
    s = _1(s, $);
  }
  return [t, i, "", s, "", n, a, o, f, h, g, y, E, w].filter(($) => $ != null)
    .join(`
`);
};
function l1(r) {
  return Kt.from(JSON.stringify(r)).toString("base64");
}
function p1(r) {
  return JSON.parse(Kt.from(r, "base64").toString("utf-8"));
}
function Yr(r) {
  if (!r) throw new Error("No recap provided, value is undefined");
  if (!r.att) throw new Error("No `att` property found");
  const e = Object.keys(r.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((t) => {
    const i = r.att[t];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${t}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${t}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${t}`);
    Object.keys(i).forEach((s) => {
      const n = i[s];
      if (!Array.isArray(n))
        throw new Error(
          `Ability limits ${s} must be an array of objects, found: ${n}`
        );
      if (!n.length)
        throw new Error(
          `Value of ${s} is empty array, must be an array with objects`
        );
      n.forEach((a) => {
        if (typeof a != "object")
          throw new Error(
            `Ability limits (${s}) must be an array of objects, found: ${a}`
          );
      });
    });
  });
}
function g1(r, e, t, i = {}) {
  return (
    t == null || t.sort((s, n) => s.localeCompare(n)),
    { att: { [r]: b1(e, t, i) } }
  );
}
function b1(r, e, t = {}) {
  e = e == null ? void 0 : e.sort((s, n) => s.localeCompare(n));
  const i = e.map((s) => ({ [`${r}/${s}`]: [t] }));
  return Object.assign({}, ...i);
}
function pf(r) {
  return Yr(r), `urn:recap:${l1(r).replace(/=/g, "")}`;
}
function is(r) {
  const e = p1(r.replace("urn:recap:", ""));
  return Yr(e), e;
}
function v1(r, e, t) {
  const i = g1(r, e, t);
  return pf(i);
}
function y1(r) {
  return r && r.includes("urn:recap:");
}
function m1(r, e) {
  const t = is(r),
    i = is(e),
    s = w1(t, i);
  return pf(s);
}
function w1(r, e) {
  Yr(r), Yr(e);
  const t = Object.keys(r.att)
      .concat(Object.keys(e.att))
      .sort((s, n) => s.localeCompare(n)),
    i = { att: {} };
  return (
    t.forEach((s) => {
      var n, a;
      Object.keys(((n = r.att) == null ? void 0 : n[s]) || {})
        .concat(Object.keys(((a = e.att) == null ? void 0 : a[s]) || {}))
        .sort((o, f) => o.localeCompare(f))
        .forEach((o) => {
          var f, h;
          i.att[s] = f1(h1({}, i.att[s]), {
            [o]:
              ((f = r.att[s]) == null ? void 0 : f[o]) ||
              ((h = e.att[s]) == null ? void 0 : h[o]),
          });
        });
    }),
    i
  );
}
function _1(r = "", e) {
  Yr(e);
  const t =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (r.includes(t)) return r;
  const i = [];
  let s = 0;
  Object.keys(e.att).forEach((o) => {
    const f = Object.keys(e.att[o]).map((y) => ({
      ability: y.split("/")[0],
      action: y.split("/")[1],
    }));
    f.sort((y, E) => y.action.localeCompare(E.action));
    const h = {};
    f.forEach((y) => {
      h[y.ability] || (h[y.ability] = []), h[y.ability].push(y.action);
    });
    const g = Object.keys(h).map(
      (y) => (s++, `(${s}) '${y}': '${h[y].join("', '")}' for '${o}'.`)
    );
    i.push(g.join(", ").replace(".,", "."));
  });
  const n = i.join(" "),
    a = `${t}${n}`;
  return `${r ? r + " " : ""}${a}`;
}
function Go(r) {
  var e;
  const t = is(r);
  Yr(t);
  const i = (e = t.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((s) => s.split("/")[1]) : [];
}
function Wo(r) {
  const e = is(r);
  Yr(e);
  const t = [];
  return (
    Object.values(e.att).forEach((i) => {
      Object.values(i).forEach((s) => {
        var n;
        (n = s == null ? void 0 : s[0]) != null &&
          n.chains &&
          t.push(s[0].chains);
      });
    }),
    [...new Set(t.flat())]
  );
}
function qs(r) {
  if (!r) return;
  const e = r == null ? void 0 : r[r.length - 1];
  return y1(e) ? e : void 0;
}
const gf = "base10",
  Dt = "base16",
  Cr = "base64pad",
  Hi = "base64url",
  bs = "utf8",
  bf = 0,
  Er = 1,
  vs = 2,
  E1 = 0,
  Jo = 1,
  Qi = 12,
  Ba = 32;
function S1() {
  const r = Ca.generateKeyPair();
  return { privateKey: pt(r.secretKey, Dt), publicKey: pt(r.publicKey, Dt) };
}
function fa() {
  const r = Nr.randomBytes(Ba);
  return pt(r, Dt);
}
function I1(r, e) {
  const t = Ca.sharedKey(lt(r, Dt), lt(e, Dt), !0),
    i = new Sl(fs.SHA256, t).expand(Ba);
  return pt(i, Dt);
}
function Ls(r) {
  const e = fs.hash(lt(r, Dt));
  return pt(e, Dt);
}
function wr(r) {
  const e = fs.hash(lt(r, bs));
  return pt(e, Dt);
}
function vf(r) {
  return lt(`${r}`, gf);
}
function Xr(r) {
  return Number(pt(r, gf));
}
function x1(r) {
  const e = vf(typeof r.type < "u" ? r.type : bf);
  if (Xr(e) === Er && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof r.senderPublicKey < "u" ? lt(r.senderPublicKey, Dt) : void 0,
    i = typeof r.iv < "u" ? lt(r.iv, Dt) : Nr.randomBytes(Qi),
    s = new Aa.ChaCha20Poly1305(lt(r.symKey, Dt)).seal(i, lt(r.message, bs));
  return yf({
    type: e,
    sealed: s,
    iv: i,
    senderPublicKey: t,
    encoding: r.encoding,
  });
}
function D1(r, e) {
  const t = vf(vs),
    i = Nr.randomBytes(Qi),
    s = lt(r, bs);
  return yf({ type: t, sealed: s, iv: i, encoding: e });
}
function P1(r) {
  const e = new Aa.ChaCha20Poly1305(lt(r.symKey, Dt)),
    { sealed: t, iv: i } = ss({
      encoded: r.encoded,
      encoding: r == null ? void 0 : r.encoding,
    }),
    s = e.open(i, t);
  if (s === null) throw new Error("Failed to decrypt");
  return pt(s, bs);
}
function M1(r, e) {
  const { sealed: t } = ss({ encoded: r, encoding: e });
  return pt(t, bs);
}
function yf(r) {
  const { encoding: e = Cr } = r;
  if (Xr(r.type) === vs) return pt(Ns([r.type, r.sealed]), e);
  if (Xr(r.type) === Er) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return pt(Ns([r.type, r.senderPublicKey, r.iv, r.sealed]), e);
  }
  return pt(Ns([r.type, r.iv, r.sealed]), e);
}
function ss(r) {
  const { encoded: e, encoding: t = Cr } = r,
    i = lt(e, t),
    s = i.slice(E1, Jo),
    n = Jo;
  if (Xr(s) === Er) {
    const h = n + Ba,
      g = h + Qi,
      y = i.slice(n, h),
      E = i.slice(h, g),
      w = i.slice(g);
    return { type: s, sealed: w, iv: E, senderPublicKey: y };
  }
  if (Xr(s) === vs) {
    const h = i.slice(n),
      g = Nr.randomBytes(Qi);
    return { type: s, sealed: h, iv: g };
  }
  const a = n + Qi,
    o = i.slice(n, a),
    f = i.slice(a);
  return { type: s, sealed: f, iv: o };
}
function A1(r, e) {
  const t = ss({ encoded: r, encoding: e == null ? void 0 : e.encoding });
  return mf({
    type: Xr(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? pt(t.senderPublicKey, Dt) : void 0,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  });
}
function mf(r) {
  const e = (r == null ? void 0 : r.type) || bf;
  if (e === Er) {
    if (typeof (r == null ? void 0 : r.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (r == null ? void 0 : r.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: r == null ? void 0 : r.senderPublicKey,
    receiverPublicKey: r == null ? void 0 : r.receiverPublicKey,
  };
}
function Yo(r) {
  return (
    r.type === Er &&
    typeof r.senderPublicKey == "string" &&
    typeof r.receiverPublicKey == "string"
  );
}
function Xo(r) {
  return r.type === vs;
}
function O1(r) {
  return new Hh.ec("p256").keyFromPublic(
    {
      x: Kt.from(r.x, "base64").toString("hex"),
      y: Kt.from(r.y, "base64").toString("hex"),
    },
    "hex"
  );
}
function C1(r) {
  let e = r.replace(/-/g, "+").replace(/_/g, "/");
  const t = e.length % 4;
  return t > 0 && (e += "=".repeat(4 - t)), e;
}
function T1(r) {
  return Kt.from(C1(r), "base64");
}
function R1(r, e) {
  const [t, i, s] = r.split("."),
    n = T1(s);
  if (n.length !== 64) throw new Error("Invalid signature length");
  const a = n.slice(0, 32).toString("hex"),
    o = n.slice(32, 64).toString("hex"),
    f = `${t}.${i}`,
    h = new fs.SHA256().update(Kt.from(f)).digest(),
    g = O1(e),
    y = Kt.from(h).toString("hex");
  if (!g.verify(y, { r: a, s: o })) throw new Error("Invalid signature");
  return ca(r).payload;
}
const $1 = "irn";
function ua(r) {
  return (r == null ? void 0 : r.relay) || { protocol: $1 };
}
function Yi(r) {
  const e = Rp[r];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var N1 = Object.defineProperty,
  F1 = Object.defineProperties,
  q1 = Object.getOwnPropertyDescriptors,
  Qo = Object.getOwnPropertySymbols,
  L1 = Object.prototype.hasOwnProperty,
  U1 = Object.prototype.propertyIsEnumerable,
  Zo = (r, e, t) =>
    e in r
      ? N1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  ec = (r, e) => {
    for (var t in e || (e = {})) L1.call(e, t) && Zo(r, t, e[t]);
    if (Qo) for (var t of Qo(e)) U1.call(e, t) && Zo(r, t, e[t]);
    return r;
  },
  j1 = (r, e) => F1(r, q1(e));
function z1(r, e = "-") {
  const t = {},
    i = "relay" + e;
  return (
    Object.keys(r).forEach((s) => {
      if (s.startsWith(i)) {
        const n = s.replace(i, ""),
          a = r[s];
        t[n] = a;
      }
    }),
    t
  );
}
function tc(r) {
  if (!r.includes("wc:")) {
    const f = df(r);
    f != null && f.includes("wc:") && (r = f);
  }
  (r = r.includes("wc://") ? r.replace("wc://", "") : r),
    (r = r.includes("wc:") ? r.replace("wc:", "") : r);
  const e = r.indexOf(":"),
    t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0,
    i = r.substring(0, e),
    s = r.substring(e + 1, t).split("@"),
    n = typeof t < "u" ? r.substring(t) : "",
    a = rs.parse(n),
    o = typeof a.methods == "string" ? a.methods.split(",") : void 0;
  return {
    protocol: i,
    topic: B1(s[0]),
    version: parseInt(s[1], 10),
    symKey: a.symKey,
    relay: z1(a),
    methods: o,
    expiryTimestamp: a.expiryTimestamp
      ? parseInt(a.expiryTimestamp, 10)
      : void 0,
  };
}
function B1(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function k1(r, e = "-") {
  const t = "relay",
    i = {};
  return (
    Object.keys(r).forEach((s) => {
      const n = t + e + s;
      r[s] && (i[n] = r[s]);
    }),
    i
  );
}
function rc(r) {
  return (
    `${r.protocol}:${r.topic}@${r.version}?` +
    rs.stringify(
      ec(
        j1(ec({ symKey: r.symKey }, k1(r.relay)), {
          expiryTimestamp: r.expiryTimestamp,
        }),
        r.methods ? { methods: r.methods.join(",") } : {}
      )
    )
  );
}
function Ms(r, e, t) {
  return `${r}?wc_ev=${t}&topic=${e}`;
}
function Ei(r) {
  const e = [];
  return (
    r.forEach((t) => {
      const [i, s] = t.split(":");
      e.push(`${i}:${s}`);
    }),
    e
  );
}
function H1(r) {
  const e = [];
  return (
    Object.values(r).forEach((t) => {
      e.push(...Ei(t.accounts));
    }),
    e
  );
}
function K1(r, e) {
  const t = [];
  return (
    Object.values(r).forEach((i) => {
      Ei(i.accounts).includes(e) && t.push(...i.methods);
    }),
    t
  );
}
function V1(r, e) {
  const t = [];
  return (
    Object.values(r).forEach((i) => {
      Ei(i.accounts).includes(e) && t.push(...i.events);
    }),
    t
  );
}
function ka(r) {
  return r.includes(":");
}
function Xi(r) {
  return ka(r) ? r.split(":")[0] : r;
}
function G1(r) {
  const e = {};
  return (
    r == null ||
      r.forEach((t) => {
        const [i, s] = t.split(":");
        e[i] || (e[i] = { accounts: [], chains: [], events: [] }),
          e[i].accounts.push(t),
          e[i].chains.push(`${i}:${s}`);
      }),
    e
  );
}
function ic(r, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const t = G1(e);
  for (const [i, s] of Object.entries(t))
    s.methods ? (s.methods = Fs(s.methods, r)) : (s.methods = r),
      (s.events = ["chainChanged", "accountsChanged"]);
  return t;
}
const W1 = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  J1 = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function Q(r, e) {
  const { message: t, code: i } = J1[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function ke(r, e) {
  const { message: t, code: i } = W1[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function dr(r, e) {
  return !!Array.isArray(r);
}
function ns(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function Ot(r) {
  return typeof r > "u";
}
function ct(r, e) {
  return e && Ot(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function Ha(r, e) {
  return typeof r == "number" && !isNaN(r);
}
function Y1(r, e) {
  const { requiredNamespaces: t } = e,
    i = Object.keys(r.namespaces),
    s = Object.keys(t);
  let n = !0;
  return Vr(s, i)
    ? (i.forEach((a) => {
        const { accounts: o, methods: f, events: h } = r.namespaces[a],
          g = Ei(o),
          y = t[a];
        (!Vr(nf(a, y), g) || !Vr(y.methods, f) || !Vr(y.events, h)) && (n = !1);
      }),
      n)
    : !1;
}
function Xs(r) {
  return ct(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function X1(r) {
  if (ct(r, !1) && r.includes(":")) {
    const e = r.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Xs(t);
    }
  }
  return !1;
}
function Q1(r) {
  function e(t) {
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  }
  try {
    if (ct(r, !1)) {
      if (e(r)) return !0;
      const t = df(r);
      return e(t);
    }
  } catch {}
  return !1;
}
function Z1(r) {
  var e;
  return (e = r == null ? void 0 : r.proposer) == null ? void 0 : e.publicKey;
}
function eg(r) {
  return r == null ? void 0 : r.topic;
}
function tg(r, e) {
  let t = null;
  return (
    ct(r == null ? void 0 : r.publicKey, !1) ||
      (t = Q(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function sc(r) {
  let e = !0;
  return dr(r) ? r.length && (e = r.every((t) => ct(t, !1))) : (e = !1), e;
}
function rg(r, e, t) {
  let i = null;
  return (
    dr(e) && e.length
      ? e.forEach((s) => {
          i ||
            Xs(s) ||
            (i = ke(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${s} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Xs(r) ||
        (i = ke(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    i
  );
}
function ig(r, e, t) {
  let i = null;
  return (
    Object.entries(r).forEach(([s, n]) => {
      if (i) return;
      const a = rg(s, nf(s, n), `${e} ${t}`);
      a && (i = a);
    }),
    i
  );
}
function sg(r, e) {
  let t = null;
  return (
    dr(r)
      ? r.forEach((i) => {
          t ||
            X1(i) ||
            (t = ke(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = ke(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function ng(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      const s = sg(i == null ? void 0 : i.accounts, `${e} namespace`);
      s && (t = s);
    }),
    t
  );
}
function ag(r, e) {
  let t = null;
  return (
    sc(r == null ? void 0 : r.methods)
      ? sc(r == null ? void 0 : r.events) ||
        (t = ke(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = ke(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function wf(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      const s = ag(i, `${e}, namespace`);
      s && (t = s);
    }),
    t
  );
}
function og(r, e, t) {
  let i = null;
  if (r && ns(r)) {
    const s = wf(r, e);
    s && (i = s);
    const n = ig(r, e, t);
    n && (i = n);
  } else
    i = Q("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function Ln(r, e) {
  let t = null;
  if (r && ns(r)) {
    const i = wf(r, e);
    i && (t = i);
    const s = ng(r, e);
    s && (t = s);
  } else
    t = Q(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function _f(r) {
  return ct(r.protocol, !0);
}
function cg(r, e) {
  let t = !1;
  return (
    r
      ? r &&
        dr(r) &&
        r.length &&
        r.forEach((i) => {
          t = _f(i);
        })
      : (t = !0),
    t
  );
}
function hg(r) {
  return typeof r == "number";
}
function At(r) {
  return typeof r < "u" && typeof r !== null;
}
function fg(r) {
  return !(
    !r ||
    typeof r != "object" ||
    !r.code ||
    !Ha(r.code) ||
    !r.message ||
    !ct(r.message, !1)
  );
}
function ug(r) {
  return !(Ot(r) || !ct(r.method, !1));
}
function dg(r) {
  return !(
    Ot(r) ||
    (Ot(r.result) && Ot(r.error)) ||
    !Ha(r.id) ||
    !ct(r.jsonrpc, !1)
  );
}
function lg(r) {
  return !(Ot(r) || !ct(r.name, !1));
}
function nc(r, e) {
  return !(!Xs(e) || !H1(r).includes(e));
}
function pg(r, e, t) {
  return ct(t, !1) ? K1(r, e).includes(t) : !1;
}
function gg(r, e, t) {
  return ct(t, !1) ? V1(r, e).includes(t) : !1;
}
function ac(r, e, t) {
  let i = null;
  const s = bg(r),
    n = vg(e),
    a = Object.keys(s),
    o = Object.keys(n),
    f = oc(Object.keys(r)),
    h = oc(Object.keys(e)),
    g = f.filter((y) => !h.includes(y));
  return (
    g.length &&
      (i = Q(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${g.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    Vr(a, o) ||
      (i = Q(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`
      )),
    Object.keys(e).forEach((y) => {
      if (!y.includes(":") || i) return;
      const E = Ei(e[y].accounts);
      E.includes(y) ||
        (i = Q(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${E.toString()}`
        ));
    }),
    a.forEach((y) => {
      i ||
        (Vr(s[y].methods, n[y].methods)
          ? Vr(s[y].events, n[y].events) ||
            (i = Q(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${y}`
            ))
          : (i = Q(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${y}`
            )));
    }),
    i
  );
}
function bg(r) {
  const e = {};
  return (
    Object.keys(r).forEach((t) => {
      var i;
      t.includes(":")
        ? (e[t] = r[t])
        : (i = r[t].chains) == null ||
          i.forEach((s) => {
            e[s] = { methods: r[t].methods, events: r[t].events };
          });
    }),
    e
  );
}
function oc(r) {
  return [...new Set(r.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function vg(r) {
  const e = {};
  return (
    Object.keys(r).forEach((t) => {
      if (t.includes(":")) e[t] = r[t];
      else {
        const i = Ei(r[t].accounts);
        i == null ||
          i.forEach((s) => {
            e[s] = {
              accounts: r[t].accounts.filter((n) => n.includes(`${s}:`)),
              methods: r[t].methods,
              events: r[t].events,
            };
          });
      }
    }),
    e
  );
}
function yg(r, e) {
  return Ha(r) && r <= e.max && r >= e.min;
}
function cc() {
  const r = gs();
  return new Promise((e) => {
    switch (r) {
      case Nt.browser:
        e(mg());
        break;
      case Nt.reactNative:
        e(wg());
        break;
      case Nt.node:
        e(_g());
        break;
      default:
        e(!0);
    }
  });
}
function mg() {
  return ps() && (navigator == null ? void 0 : navigator.onLine);
}
async function wg() {
  if (_i() && typeof Re < "u" && Re != null && Re.NetInfo) {
    const r = await (Re == null ? void 0 : Re.NetInfo.fetch());
    return r == null ? void 0 : r.isConnected;
  }
  return !0;
}
function _g() {
  return !0;
}
function Eg(r) {
  switch (gs()) {
    case Nt.browser:
      Sg(r);
      break;
    case Nt.reactNative:
      Ig(r);
      break;
  }
}
function Sg(r) {
  !_i() &&
    ps() &&
    (window.addEventListener("online", () => r(!0)),
    window.addEventListener("offline", () => r(!1)));
}
function Ig(r) {
  var e;
  _i() &&
    typeof Re < "u" &&
    Re != null &&
    Re.NetInfo &&
    ((e = Re) == null ||
      e.NetInfo.addEventListener((t) => r(t == null ? void 0 : t.isConnected)));
}
const Un = {};
class Ki {
  static get(e) {
    return Un[e];
  }
  static set(e, t) {
    Un[e] = t;
  }
  static delete(e) {
    delete Un[e];
  }
}
class ei {}
let xg = class extends ei {
  constructor(e) {
    super();
  }
};
const hc = Z.FIVE_SECONDS,
  Si = { pulse: "heartbeat_pulse" };
let Dg = class Ef extends xg {
  constructor(e) {
    super(e),
      (this.events = new Gt.EventEmitter()),
      (this.interval = hc),
      (this.interval = (e == null ? void 0 : e.interval) || hc);
  }
  static async init(e) {
    const t = new Ef(e);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async initialize() {
    this.intervalRef = setInterval(
      () => this.pulse(),
      Z.toMiliseconds(this.interval)
    );
  }
  pulse() {
    this.events.emit(Si.pulse);
  }
};
const Pg =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Mg =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  Ag = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Og(r, e) {
  if (
    r === "__proto__" ||
    (r === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    Cg(r);
    return;
  }
  return e;
}
function Cg(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function As(r, e = {}) {
  if (typeof r != "string") return r;
  const t = r.trim();
  if (r[0] === '"' && r.endsWith('"') && !r.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const i = t.toLowerCase();
    if (i === "true") return !0;
    if (i === "false") return !1;
    if (i === "undefined") return;
    if (i === "null") return null;
    if (i === "nan") return Number.NaN;
    if (i === "infinity") return Number.POSITIVE_INFINITY;
    if (i === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!Ag.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (Pg.test(r) || Mg.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, Og);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict) throw i;
    return r;
  }
}
function Tg(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function dt(r, ...e) {
  try {
    return Tg(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function Rg(r) {
  const e = typeof r;
  return r === null || (e !== "object" && e !== "function");
}
function $g(r) {
  const e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function Us(r) {
  if (Rg(r)) return String(r);
  if ($g(r) || Array.isArray(r)) return JSON.stringify(r);
  if (typeof r.toJSON == "function") return Us(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Sf() {
  if (typeof Kt > "u")
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const da = "base64:";
function Ng(r) {
  if (typeof r == "string") return r;
  Sf();
  const e = Kt.from(r).toString("base64");
  return da + e;
}
function Fg(r) {
  return typeof r != "string" || !r.startsWith(da)
    ? r
    : (Sf(), Kt.from(r.slice(da.length), "base64"));
}
function Mt(r) {
  return r
    ? r
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function qg(...r) {
  return Mt(r.join(":"));
}
function Os(r) {
  return (r = Mt(r)), r ? r + ":" : "";
}
const Lg = "memory",
  Ug = () => {
    const r = new Map();
    return {
      name: Lg,
      getInstance: () => r,
      hasItem(e) {
        return r.has(e);
      },
      getItem(e) {
        return r.get(e) ?? null;
      },
      getItemRaw(e) {
        return r.get(e) ?? null;
      },
      setItem(e, t) {
        r.set(e, t);
      },
      setItemRaw(e, t) {
        r.set(e, t);
      },
      removeItem(e) {
        r.delete(e);
      },
      getKeys() {
        return [...r.keys()];
      },
      clear() {
        r.clear();
      },
      dispose() {
        r.clear();
      },
    };
  };
function jg(r = {}) {
  const e = {
      mounts: { "": r.driver || Ug() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (h) => {
      for (const g of e.mountpoints)
        if (h.startsWith(g))
          return {
            base: g,
            relativeKey: h.slice(g.length),
            driver: e.mounts[g],
          };
      return { base: "", relativeKey: h, driver: e.mounts[""] };
    },
    i = (h, g) =>
      e.mountpoints
        .filter((y) => y.startsWith(h) || (g && h.startsWith(y)))
        .map((y) => ({
          relativeBase: h.length > y.length ? h.slice(y.length) : void 0,
          mountpoint: y,
          driver: e.mounts[y],
        })),
    s = (h, g) => {
      if (e.watching) {
        g = Mt(g);
        for (const y of e.watchListeners) y(h, g);
      }
    },
    n = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const h in e.mounts) e.unwatch[h] = await fc(e.mounts[h], s, h);
      }
    },
    a = async () => {
      if (e.watching) {
        for (const h in e.unwatch) await e.unwatch[h]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    o = (h, g, y) => {
      const E = new Map(),
        w = (S) => {
          let $ = E.get(S.base);
          return (
            $ ||
              (($ = { driver: S.driver, base: S.base, items: [] }),
              E.set(S.base, $)),
            $
          );
        };
      for (const S of h) {
        const $ = typeof S == "string",
          q = Mt($ ? S : S.key),
          z = $ ? void 0 : S.value,
          C = $ || !S.options ? g : { ...g, ...S.options },
          L = t(q);
        w(L).items.push({
          key: q,
          value: z,
          relativeKey: L.relativeKey,
          options: C,
        });
      }
      return Promise.all([...E.values()].map((S) => y(S))).then((S) =>
        S.flat()
      );
    },
    f = {
      hasItem(h, g = {}) {
        h = Mt(h);
        const { relativeKey: y, driver: E } = t(h);
        return dt(E.hasItem, y, g);
      },
      getItem(h, g = {}) {
        h = Mt(h);
        const { relativeKey: y, driver: E } = t(h);
        return dt(E.getItem, y, g).then((w) => As(w));
      },
      getItems(h, g) {
        return o(h, g, (y) =>
          y.driver.getItems
            ? dt(
                y.driver.getItems,
                y.items.map((E) => ({
                  key: E.relativeKey,
                  options: E.options,
                })),
                g
              ).then((E) =>
                E.map((w) => ({ key: qg(y.base, w.key), value: As(w.value) }))
              )
            : Promise.all(
                y.items.map((E) =>
                  dt(y.driver.getItem, E.relativeKey, E.options).then((w) => ({
                    key: E.key,
                    value: As(w),
                  }))
                )
              )
        );
      },
      getItemRaw(h, g = {}) {
        h = Mt(h);
        const { relativeKey: y, driver: E } = t(h);
        return E.getItemRaw
          ? dt(E.getItemRaw, y, g)
          : dt(E.getItem, y, g).then((w) => Fg(w));
      },
      async setItem(h, g, y = {}) {
        if (g === void 0) return f.removeItem(h);
        h = Mt(h);
        const { relativeKey: E, driver: w } = t(h);
        w.setItem &&
          (await dt(w.setItem, E, Us(g), y), w.watch || s("update", h));
      },
      async setItems(h, g) {
        await o(h, g, async (y) => {
          if (y.driver.setItems)
            return dt(
              y.driver.setItems,
              y.items.map((E) => ({
                key: E.relativeKey,
                value: Us(E.value),
                options: E.options,
              })),
              g
            );
          y.driver.setItem &&
            (await Promise.all(
              y.items.map((E) =>
                dt(y.driver.setItem, E.relativeKey, Us(E.value), E.options)
              )
            ));
        });
      },
      async setItemRaw(h, g, y = {}) {
        if (g === void 0) return f.removeItem(h, y);
        h = Mt(h);
        const { relativeKey: E, driver: w } = t(h);
        if (w.setItemRaw) await dt(w.setItemRaw, E, g, y);
        else if (w.setItem) await dt(w.setItem, E, Ng(g), y);
        else return;
        w.watch || s("update", h);
      },
      async removeItem(h, g = {}) {
        typeof g == "boolean" && (g = { removeMeta: g }), (h = Mt(h));
        const { relativeKey: y, driver: E } = t(h);
        E.removeItem &&
          (await dt(E.removeItem, y, g),
          (g.removeMeta || g.removeMata) &&
            (await dt(E.removeItem, y + "$", g)),
          E.watch || s("remove", h));
      },
      async getMeta(h, g = {}) {
        typeof g == "boolean" && (g = { nativeOnly: g }), (h = Mt(h));
        const { relativeKey: y, driver: E } = t(h),
          w = Object.create(null);
        if (
          (E.getMeta && Object.assign(w, await dt(E.getMeta, y, g)),
          !g.nativeOnly)
        ) {
          const S = await dt(E.getItem, y + "$", g).then(($) => As($));
          S &&
            typeof S == "object" &&
            (typeof S.atime == "string" && (S.atime = new Date(S.atime)),
            typeof S.mtime == "string" && (S.mtime = new Date(S.mtime)),
            Object.assign(w, S));
        }
        return w;
      },
      setMeta(h, g, y = {}) {
        return this.setItem(h + "$", g, y);
      },
      removeMeta(h, g = {}) {
        return this.removeItem(h + "$", g);
      },
      async getKeys(h, g = {}) {
        h = Os(h);
        const y = i(h, !0);
        let E = [];
        const w = [];
        for (const S of y) {
          const $ = await dt(S.driver.getKeys, S.relativeBase, g);
          for (const q of $) {
            const z = S.mountpoint + Mt(q);
            E.some((C) => z.startsWith(C)) || w.push(z);
          }
          E = [S.mountpoint, ...E.filter((q) => !q.startsWith(S.mountpoint))];
        }
        return h
          ? w.filter((S) => S.startsWith(h) && S[S.length - 1] !== "$")
          : w.filter((S) => S[S.length - 1] !== "$");
      },
      async clear(h, g = {}) {
        (h = Os(h)),
          await Promise.all(
            i(h, !1).map(async (y) => {
              if (y.driver.clear) return dt(y.driver.clear, y.relativeBase, g);
              if (y.driver.removeItem) {
                const E = await y.driver.getKeys(y.relativeBase || "", g);
                return Promise.all(E.map((w) => y.driver.removeItem(w, g)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((h) => uc(h)));
      },
      async watch(h) {
        return (
          await n(),
          e.watchListeners.push(h),
          async () => {
            (e.watchListeners = e.watchListeners.filter((g) => g !== h)),
              e.watchListeners.length === 0 && (await a());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await a();
      },
      mount(h, g) {
        if (((h = Os(h)), h && e.mounts[h]))
          throw new Error(`already mounted at ${h}`);
        return (
          h &&
            (e.mountpoints.push(h),
            e.mountpoints.sort((y, E) => E.length - y.length)),
          (e.mounts[h] = g),
          e.watching &&
            Promise.resolve(fc(g, s, h))
              .then((y) => {
                e.unwatch[h] = y;
              })
              .catch(console.error),
          f
        );
      },
      async unmount(h, g = !0) {
        (h = Os(h)),
          !(!h || !e.mounts[h]) &&
            (e.watching &&
              h in e.unwatch &&
              (e.unwatch[h](), delete e.unwatch[h]),
            g && (await uc(e.mounts[h])),
            (e.mountpoints = e.mountpoints.filter((y) => y !== h)),
            delete e.mounts[h]);
      },
      getMount(h = "") {
        h = Mt(h) + ":";
        const g = t(h);
        return { driver: g.driver, base: g.base };
      },
      getMounts(h = "", g = {}) {
        return (
          (h = Mt(h)),
          i(h, g.parents).map((E) => ({ driver: E.driver, base: E.mountpoint }))
        );
      },
      keys: (h, g = {}) => f.getKeys(h, g),
      get: (h, g = {}) => f.getItem(h, g),
      set: (h, g, y = {}) => f.setItem(h, g, y),
      has: (h, g = {}) => f.hasItem(h, g),
      del: (h, g = {}) => f.removeItem(h, g),
      remove: (h, g = {}) => f.removeItem(h, g),
    };
  return f;
}
function fc(r, e, t) {
  return r.watch ? r.watch((i, s) => e(i, t + s)) : () => {};
}
async function uc(r) {
  typeof r.dispose == "function" && (await dt(r.dispose));
}
function ti(r) {
  return new Promise((e, t) => {
    (r.oncomplete = r.onsuccess = () => e(r.result)),
      (r.onabort = r.onerror = () => t(r.error));
  });
}
function If(r, e) {
  const t = indexedDB.open(r);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const i = ti(t);
  return (s, n) => i.then((a) => n(a.transaction(e, s).objectStore(e)));
}
let jn;
function ys() {
  return jn || (jn = If("keyval-store", "keyval")), jn;
}
function dc(r, e = ys()) {
  return e("readonly", (t) => ti(t.get(r)));
}
function zg(r, e, t = ys()) {
  return t("readwrite", (i) => (i.put(e, r), ti(i.transaction)));
}
function Bg(r, e = ys()) {
  return e("readwrite", (t) => (t.delete(r), ti(t.transaction)));
}
function kg(r = ys()) {
  return r("readwrite", (e) => (e.clear(), ti(e.transaction)));
}
function Hg(r, e) {
  return (
    (r.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    ti(r.transaction)
  );
}
function Kg(r = ys()) {
  return r("readonly", (e) => {
    if (e.getAllKeys) return ti(e.getAllKeys());
    const t = [];
    return Hg(e, (i) => t.push(i.key)).then(() => t);
  });
}
const Vg = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  Gg = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function xf(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return Gg(r);
  } catch {
    return r;
  }
}
function Df(r) {
  return typeof r == "string" ? r : Vg(r) || "";
}
const Wg = "idb-keyval";
var Jg = (r = {}) => {
  const e = r.base && r.base.length > 0 ? `${r.base}:` : "",
    t = (s) => e + s;
  let i;
  return (
    r.dbName && r.storeName && (i = If(r.dbName, r.storeName)),
    {
      name: Wg,
      options: r,
      async hasItem(s) {
        return !(typeof (await dc(t(s), i)) > "u");
      },
      async getItem(s) {
        return (await dc(t(s), i)) ?? null;
      },
      setItem(s, n) {
        return zg(t(s), n, i);
      },
      removeItem(s) {
        return Bg(t(s), i);
      },
      getKeys() {
        return Kg(i);
      },
      clear() {
        return kg(i);
      },
    }
  );
};
const Yg = "WALLET_CONNECT_V2_INDEXED_DB",
  Xg = "keyvaluestorage";
let Qg = class {
  constructor() {
    this.indexedDb = jg({ driver: Jg({ dbName: Yg, storeName: Xg }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, Df(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var zn =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof Re < "u"
      ? Re
      : typeof self < "u"
      ? self
      : {},
  js = { exports: {} };
(function () {
  let r;
  function e() {}
  (r = e),
    (r.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (r.prototype.setItem = function (t, i) {
      this[t] = String(i);
    }),
    (r.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (r.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (i) {
        (t[i] = void 0), delete t[i];
      });
    }),
    (r.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    r.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof zn < "u" && zn.localStorage
      ? (js.exports = zn.localStorage)
      : typeof window < "u" && window.localStorage
      ? (js.exports = window.localStorage)
      : (js.exports = new e());
})();
function Zg(r) {
  var e;
  return [r[0], xf((e = r[1]) != null ? e : "")];
}
let eb = class {
  constructor() {
    this.localStorage = js.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Zg);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return xf(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, Df(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const tb = "wc_storage_version",
  lc = 1,
  rb = async (r, e, t) => {
    const i = tb,
      s = await e.getItem(i);
    if (s && s >= lc) {
      t(e);
      return;
    }
    const n = await r.getKeys();
    if (!n.length) {
      t(e);
      return;
    }
    const a = [];
    for (; n.length; ) {
      const o = n.shift();
      if (!o) continue;
      const f = o.toLowerCase();
      if (
        f.includes("wc@") ||
        f.includes("walletconnect") ||
        f.includes("wc_") ||
        f.includes("wallet_connect")
      ) {
        const h = await r.getItem(o);
        await e.setItem(o, h), a.push(o);
      }
    }
    await e.setItem(i, lc), t(e), ib(r, a);
  },
  ib = async (r, e) => {
    e.length &&
      e.forEach(async (t) => {
        await r.removeItem(t);
      });
  };
let sb = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (t) => {
        (this.storage = t), (this.initialized = !0);
      });
    const e = new eb();
    this.storage = e;
    try {
      const t = new Qg();
      rb(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.initialized && (clearInterval(t), e());
        }, 20);
      }));
  }
};
function nb(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return '"[Circular]"';
  }
}
var ab = ob;
function ob(r, e, t) {
  var i = (t && t.stringify) || nb,
    s = 1;
  if (typeof r == "object" && r !== null) {
    var n = e.length + s;
    if (n === 1) return r;
    var a = new Array(n);
    a[0] = i(r);
    for (var o = 1; o < n; o++) a[o] = i(e[o]);
    return a.join(" ");
  }
  if (typeof r != "string") return r;
  var f = e.length;
  if (f === 0) return r;
  for (
    var h = "", g = 1 - s, y = -1, E = (r && r.length) || 0, w = 0;
    w < E;

  ) {
    if (r.charCodeAt(w) === 37 && w + 1 < E) {
      switch (((y = y > -1 ? y : 0), r.charCodeAt(w + 1))) {
        case 100:
        case 102:
          if (g >= f || e[g] == null) break;
          y < w && (h += r.slice(y, w)), (h += Number(e[g])), (y = w + 2), w++;
          break;
        case 105:
          if (g >= f || e[g] == null) break;
          y < w && (h += r.slice(y, w)),
            (h += Math.floor(Number(e[g]))),
            (y = w + 2),
            w++;
          break;
        case 79:
        case 111:
        case 106:
          if (g >= f || e[g] === void 0) break;
          y < w && (h += r.slice(y, w));
          var S = typeof e[g];
          if (S === "string") {
            (h += "'" + e[g] + "'"), (y = w + 2), w++;
            break;
          }
          if (S === "function") {
            (h += e[g].name || "<anonymous>"), (y = w + 2), w++;
            break;
          }
          (h += i(e[g])), (y = w + 2), w++;
          break;
        case 115:
          if (g >= f) break;
          y < w && (h += r.slice(y, w)), (h += String(e[g])), (y = w + 2), w++;
          break;
        case 37:
          y < w && (h += r.slice(y, w)), (h += "%"), (y = w + 2), w++, g--;
          break;
      }
      ++g;
    }
    ++w;
  }
  return y === -1 ? r : (y < E && (h += r.slice(y)), h);
}
const pc = ab;
var fi = ur;
const as = vb().console || {},
  cb = {
    mapHttpRequest: Cs,
    mapHttpResponse: Cs,
    wrapRequestSerializer: Bn,
    wrapResponseSerializer: Bn,
    wrapErrorSerializer: Bn,
    req: Cs,
    res: Cs,
    err: lb,
  };
function hb(r, e) {
  return Array.isArray(r)
    ? r.filter(function (i) {
        return i !== "!stdSerializers.err";
      })
    : r === !0
    ? Object.keys(e)
    : !1;
}
function ur(r) {
  (r = r || {}), (r.browser = r.browser || {});
  const e = r.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const t = r.browser.write || as;
  r.browser.write && (r.browser.asObject = !0);
  const i = r.serializers || {},
    s = hb(r.browser.serialize, i);
  let n = r.browser.serialize;
  Array.isArray(r.browser.serialize) &&
    r.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (n = !1);
  const a = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof t == "function" &&
    (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
    r.enabled === !1 && (r.level = "silent");
  const o = r.level || "info",
    f = Object.create(t);
  f.log || (f.log = os),
    Object.defineProperty(f, "levelVal", { get: g }),
    Object.defineProperty(f, "level", { get: y, set: E });
  const h = {
    transmit: e,
    serialize: s,
    asObject: r.browser.asObject,
    levels: a,
    timestamp: pb(r),
  };
  (f.levels = ur.levels),
    (f.level = o),
    (f.setMaxListeners =
      f.getMaxListeners =
      f.emit =
      f.addListener =
      f.on =
      f.prependListener =
      f.once =
      f.prependOnceListener =
      f.removeListener =
      f.removeAllListeners =
      f.listeners =
      f.listenerCount =
      f.eventNames =
      f.write =
      f.flush =
        os),
    (f.serializers = i),
    (f._serialize = s),
    (f._stdErrSerialize = n),
    (f.child = w),
    e && (f._logEvent = la());
  function g() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function y() {
    return this._level;
  }
  function E(S) {
    if (S !== "silent" && !this.levels.values[S])
      throw Error("unknown level " + S);
    (this._level = S),
      oi(h, f, "error", "log"),
      oi(h, f, "fatal", "error"),
      oi(h, f, "warn", "error"),
      oi(h, f, "info", "log"),
      oi(h, f, "debug", "log"),
      oi(h, f, "trace", "log");
  }
  function w(S, $) {
    if (!S) throw new Error("missing bindings for child Pino");
    ($ = $ || {}), s && S.serializers && ($.serializers = S.serializers);
    const q = $.serializers;
    if (s && q) {
      var z = Object.assign({}, i, q),
        C = r.browser.serialize === !0 ? Object.keys(z) : s;
      delete S.serializers, mn([S], C, z, this._stdErrSerialize);
    }
    function L(A) {
      (this._childLevel = (A._childLevel | 0) + 1),
        (this.error = ci(A, S, "error")),
        (this.fatal = ci(A, S, "fatal")),
        (this.warn = ci(A, S, "warn")),
        (this.info = ci(A, S, "info")),
        (this.debug = ci(A, S, "debug")),
        (this.trace = ci(A, S, "trace")),
        z && ((this.serializers = z), (this._serialize = C)),
        e && (this._logEvent = la([].concat(A._logEvent.bindings, S)));
    }
    return (L.prototype = this), new L(this);
  }
  return f;
}
ur.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
ur.stdSerializers = cb;
ur.stdTimeFunctions = Object.assign(
  {},
  { nullTime: Pf, epochTime: Mf, unixTime: gb, isoTime: bb }
);
function oi(r, e, t, i) {
  const s = Object.getPrototypeOf(e);
  (e[t] =
    e.levelVal > e.levels.values[t] ? os : s[t] ? s[t] : as[t] || as[i] || os),
    fb(r, e, t);
}
function fb(r, e, t) {
  (!r.transmit && e[t] === os) ||
    (e[t] = (function (i) {
      return function () {
        const n = r.timestamp(),
          a = new Array(arguments.length),
          o =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === as
              ? as
              : this;
        for (var f = 0; f < a.length; f++) a[f] = arguments[f];
        if (
          (r.serialize &&
            !r.asObject &&
            mn(a, this._serialize, this.serializers, this._stdErrSerialize),
          r.asObject ? i.call(o, ub(this, t, a, n)) : i.apply(o, a),
          r.transmit)
        ) {
          const h = r.transmit.level || e.level,
            g = ur.levels.values[h],
            y = ur.levels.values[t];
          if (y < g) return;
          db(
            this,
            {
              ts: n,
              methodLevel: t,
              methodValue: y,
              transmitLevel: h,
              transmitValue: ur.levels.values[r.transmit.level || e.level],
              send: r.transmit.send,
              val: e.levelVal,
            },
            a
          );
        }
      };
    })(e[t]));
}
function ub(r, e, t, i) {
  r._serialize && mn(t, r._serialize, r.serializers, r._stdErrSerialize);
  const s = t.slice();
  let n = s[0];
  const a = {};
  i && (a.time = i), (a.level = ur.levels.values[e]);
  let o = (r._childLevel | 0) + 1;
  if ((o < 1 && (o = 1), n !== null && typeof n == "object")) {
    for (; o-- && typeof s[0] == "object"; ) Object.assign(a, s.shift());
    n = s.length ? pc(s.shift(), s) : void 0;
  } else typeof n == "string" && (n = pc(s.shift(), s));
  return n !== void 0 && (a.msg = n), a;
}
function mn(r, e, t, i) {
  for (const s in r)
    if (i && r[s] instanceof Error) r[s] = ur.stdSerializers.err(r[s]);
    else if (typeof r[s] == "object" && !Array.isArray(r[s]))
      for (const n in r[s])
        e && e.indexOf(n) > -1 && n in t && (r[s][n] = t[n](r[s][n]));
}
function ci(r, e, t) {
  return function () {
    const i = new Array(1 + arguments.length);
    i[0] = e;
    for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
    return r[t].apply(this, i);
  };
}
function db(r, e, t) {
  const i = e.send,
    s = e.ts,
    n = e.methodLevel,
    a = e.methodValue,
    o = e.val,
    f = r._logEvent.bindings;
  mn(
    t,
    r._serialize || Object.keys(r.serializers),
    r.serializers,
    r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize
  ),
    (r._logEvent.ts = s),
    (r._logEvent.messages = t.filter(function (h) {
      return f.indexOf(h) === -1;
    })),
    (r._logEvent.level.label = n),
    (r._logEvent.level.value = a),
    i(n, r._logEvent, o),
    (r._logEvent = la(f));
}
function la(r) {
  return {
    ts: 0,
    messages: [],
    bindings: r || [],
    level: { label: "", value: 0 },
  };
}
function lb(r) {
  const e = { type: r.constructor.name, msg: r.message, stack: r.stack };
  for (const t in r) e[t] === void 0 && (e[t] = r[t]);
  return e;
}
function pb(r) {
  return typeof r.timestamp == "function"
    ? r.timestamp
    : r.timestamp === !1
    ? Pf
    : Mf;
}
function Cs() {
  return {};
}
function Bn(r) {
  return r;
}
function os() {}
function Pf() {
  return !1;
}
function Mf() {
  return Date.now();
}
function gb() {
  return Math.round(Date.now() / 1e3);
}
function bb() {
  return new Date(Date.now()).toISOString();
}
function vb() {
  function r(e) {
    return typeof e < "u" && e;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return r(self) || r(window) || r(this) || {};
  }
}
const ms = xa(fi),
  yb = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    );
function gc(r) {
  return typeof r == "string" ? r : yb(r) || "";
}
const mb = { level: "info" },
  ws = "custom_context",
  Ka = 1e3 * 1024;
let wb = class {
    constructor(e) {
      (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  bc = class {
    constructor(e) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      const t = new wb(e);
      if (t.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
        );
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = t), (this.tail = t))
        : ((this.head = t), (this.tail = t)),
        this.lengthInNodes++,
        (this.sizeInBytes += t.size);
    }
    shift() {
      if (!this.head) return;
      const e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      const e = [];
      let t = this.head;
      for (; t !== null; ) e.push(t.value), (t = t.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          const t = e.value;
          return (e = e.next), { done: !1, value: t };
        },
      };
    }
  },
  Af = class {
    constructor(e, t = Ka) {
      (this.level = e ?? "error"),
        (this.levelValue = fi.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = t),
        (this.logs = new bc(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, t) {
      t === fi.levels.values.error
        ? console.error(e)
        : t === fi.levels.values.warn
        ? console.warn(e)
        : t === fi.levels.values.debug
        ? console.debug(e)
        : t === fi.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(gc({ timestamp: new Date().toISOString(), log: e }));
      const t = typeof e == "string" ? JSON.parse(e).level : e.level;
      t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new bc(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      const t = this.getLogArray();
      return (
        t.push(gc({ extraMetadata: e })),
        new Blob(t, { type: "application/json" })
      );
    }
  },
  _b = class {
    constructor(e, t = Ka) {
      this.baseChunkLogger = new Af(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      const t = URL.createObjectURL(this.logsToBlob(e)),
        i = document.createElement("a");
      (i.href = t),
        (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(t);
    }
  },
  Eb = class {
    constructor(e, t = Ka) {
      this.baseChunkLogger = new Af(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  };
var Sb = Object.defineProperty,
  Ib = Object.defineProperties,
  xb = Object.getOwnPropertyDescriptors,
  vc = Object.getOwnPropertySymbols,
  Db = Object.prototype.hasOwnProperty,
  Pb = Object.prototype.propertyIsEnumerable,
  yc = (r, e, t) =>
    e in r
      ? Sb(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Qs = (r, e) => {
    for (var t in e || (e = {})) Db.call(e, t) && yc(r, t, e[t]);
    if (vc) for (var t of vc(e)) Pb.call(e, t) && yc(r, t, e[t]);
    return r;
  },
  Zs = (r, e) => Ib(r, xb(e));
function wn(r) {
  return Zs(Qs({}, r), { level: (r == null ? void 0 : r.level) || mb.level });
}
function Mb(r, e = ws) {
  return r[e] || "";
}
function Ab(r, e, t = ws) {
  return (r[t] = e), r;
}
function Tt(r, e = ws) {
  let t = "";
  return (
    typeof r.bindings > "u" ? (t = Mb(r, e)) : (t = r.bindings().context || ""),
    t
  );
}
function Ob(r, e, t = ws) {
  const i = Tt(r, t);
  return i.trim() ? `${i}/${e}` : e;
}
function Pt(r, e, t = ws) {
  const i = Ob(r, e, t),
    s = r.child({ context: i });
  return Ab(s, i, t);
}
function Cb(r) {
  var e, t;
  const i = new _b((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: ms(
      Zs(Qs({}, r.opts), {
        level: "trace",
        browser: Zs(Qs({}, (t = r.opts) == null ? void 0 : t.browser), {
          write: (s) => i.write(s),
        }),
      })
    ),
    chunkLoggerController: i,
  };
}
function Tb(r) {
  var e;
  const t = new Eb((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: ms(Zs(Qs({}, r.opts), { level: "trace" }), t),
    chunkLoggerController: t,
  };
}
function Rb(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string"
    ? { logger: r.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? Cb(r)
    : Tb(r);
}
let $b = class extends ei {
    constructor(e) {
      super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  Nb = class extends ei {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  Fb = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  qb = class extends ei {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  Lb = class extends ei {
    constructor(e) {
      super();
    }
  },
  Ub = class {
    constructor(e, t, i, s) {
      (this.core = e), (this.logger = t), (this.name = i);
    }
  },
  jb = class extends ei {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  zb = class extends ei {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  Bb = class {
    constructor(e, t, i) {
      (this.core = e), (this.logger = t), (this.store = i);
    }
  },
  kb = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  Hb = class {
    constructor(e, t, i) {
      (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
    }
  };
const Kb = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  Vb = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function mc(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return Vb(r);
  } catch {
    return r;
  }
}
function Gb(r) {
  return typeof r == "string" ? r : Kb(r) || "";
}
const Wb = "PARSE_ERROR",
  Jb = "INVALID_REQUEST",
  Yb = "METHOD_NOT_FOUND",
  Xb = "INVALID_PARAMS",
  Of = "INTERNAL_ERROR",
  Va = "SERVER_ERROR",
  Qb = [-32700, -32600, -32601, -32602, -32603],
  Zi = {
    [Wb]: { code: -32700, message: "Parse error" },
    [Jb]: { code: -32600, message: "Invalid Request" },
    [Yb]: { code: -32601, message: "Method not found" },
    [Xb]: { code: -32602, message: "Invalid params" },
    [Of]: { code: -32603, message: "Internal error" },
    [Va]: { code: -32e3, message: "Server error" },
  },
  Cf = Va;
function Zb(r) {
  return Qb.includes(r);
}
function wc(r) {
  return Object.keys(Zi).includes(r) ? Zi[r] : Zi[Cf];
}
function ev(r) {
  const e = Object.values(Zi).find((t) => t.code === r);
  return e || Zi[Cf];
}
function Tf(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") ||
    r.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : r;
}
var Rf = {};
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
***************************************************************************** */ var pa =
  function (r, e) {
    return (
      (pa =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, i) {
            t.__proto__ = i;
          }) ||
        function (t, i) {
          for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
        }),
      pa(r, e)
    );
  };
function tv(r, e) {
  pa(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var ga = function () {
  return (
    (ga =
      Object.assign ||
      function (e) {
        for (var t, i = 1, s = arguments.length; i < s; i++) {
          t = arguments[i];
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }),
    ga.apply(this, arguments)
  );
};
function rv(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[s]) &&
        (t[i[s]] = r[i[s]]);
  return t;
}
function iv(r, e, t, i) {
  var s = arguments.length,
    n =
      s < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(r, e, t, i);
  else
    for (var o = r.length - 1; o >= 0; o--)
      (a = r[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, t, n) : a(e, t)) || n);
  return s > 3 && n && Object.defineProperty(e, t, n), n;
}
function sv(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function nv(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function av(r, e, t, i) {
  function s(n) {
    return n instanceof t
      ? n
      : new t(function (a) {
          a(n);
        });
  }
  return new (t || (t = Promise))(function (n, a) {
    function o(g) {
      try {
        h(i.next(g));
      } catch (y) {
        a(y);
      }
    }
    function f(g) {
      try {
        h(i.throw(g));
      } catch (y) {
        a(y);
      }
    }
    function h(g) {
      g.done ? n(g.value) : s(g.value).then(o, f);
    }
    h((i = i.apply(r, e || [])).next());
  });
}
function ov(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (n[0] & 1) throw n[1];
        return n[1];
      },
      trys: [],
      ops: [],
    },
    i,
    s,
    n,
    a;
  return (
    (a = { next: o(0), throw: o(1), return: o(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function o(h) {
    return function (g) {
      return f([h, g]);
    };
  }
  function f(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          s &&
            (n =
              h[0] & 2
                ? s.return
                : h[0]
                ? s.throw || ((n = s.return) && n.call(s), 0)
                : s.next) &&
            !(n = n.call(s, h[1])).done)
        )
          return n;
        switch (((s = 0), n && (h = [h[0] & 2, n.value]), h[0])) {
          case 0:
          case 1:
            n = h;
            break;
          case 4:
            return t.label++, { value: h[1], done: !1 };
          case 5:
            t.label++, (s = h[1]), (h = [0]);
            continue;
          case 7:
            (h = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((n = t.trys),
              !(n = n.length > 0 && n[n.length - 1]) &&
                (h[0] === 6 || h[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (h[0] === 3 && (!n || (h[1] > n[0] && h[1] < n[3]))) {
              t.label = h[1];
              break;
            }
            if (h[0] === 6 && t.label < n[1]) {
              (t.label = n[1]), (n = h);
              break;
            }
            if (n && t.label < n[2]) {
              (t.label = n[2]), t.ops.push(h);
              break;
            }
            n[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        h = e.call(r, t);
      } catch (g) {
        (h = [6, g]), (s = 0);
      } finally {
        i = n = 0;
      }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function cv(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function hv(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function ba(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function $f(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    s,
    n = [],
    a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) n.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (a) throw a.error;
    }
  }
  return n;
}
function fv() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat($f(arguments[e]));
  return r;
}
function uv() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var n = arguments[e], a = 0, o = n.length; a < o; a++, s++)
      i[s] = n[a];
  return i;
}
function cs(r) {
  return this instanceof cs ? ((this.v = r), this) : new cs(r);
}
function dv(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    s,
    n = [];
  return (
    (s = {}),
    a("next"),
    a("throw"),
    a("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function a(E) {
    i[E] &&
      (s[E] = function (w) {
        return new Promise(function (S, $) {
          n.push([E, w, S, $]) > 1 || o(E, w);
        });
      });
  }
  function o(E, w) {
    try {
      f(i[E](w));
    } catch (S) {
      y(n[0][3], S);
    }
  }
  function f(E) {
    E.value instanceof cs
      ? Promise.resolve(E.value.v).then(h, g)
      : y(n[0][2], E);
  }
  function h(E) {
    o("next", E);
  }
  function g(E) {
    o("throw", E);
  }
  function y(E, w) {
    E(w), n.shift(), n.length && o(n[0][0], n[0][1]);
  }
}
function lv(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (s) {
      throw s;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(s, n) {
    e[s] = r[s]
      ? function (a) {
          return (t = !t)
            ? { value: cs(r[s](a)), done: s === "return" }
            : n
            ? n(a)
            : a;
        }
      : n;
  }
}
function pv(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof ba == "function" ? ba(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(n) {
    t[n] =
      r[n] &&
      function (a) {
        return new Promise(function (o, f) {
          (a = r[n](a)), s(o, f, a.done, a.value);
        });
      };
  }
  function s(n, a, o, f) {
    Promise.resolve(f).then(function (h) {
      n({ value: h, done: o });
    }, a);
  }
}
function gv(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function bv(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function vv(r) {
  return r && r.__esModule ? r : { default: r };
}
function yv(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function mv(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const wv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return ga;
        },
        __asyncDelegator: lv,
        __asyncGenerator: dv,
        __asyncValues: pv,
        __await: cs,
        __awaiter: av,
        __classPrivateFieldGet: yv,
        __classPrivateFieldSet: mv,
        __createBinding: cv,
        __decorate: iv,
        __exportStar: hv,
        __extends: tv,
        __generator: ov,
        __importDefault: vv,
        __importStar: bv,
        __makeTemplateObject: gv,
        __metadata: nv,
        __param: sv,
        __read: $f,
        __rest: rv,
        __spread: fv,
        __spreadArrays: uv,
        __values: ba,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _v = mh(wv);
var vr = {},
  _c;
function Ev() {
  if (_c) return vr;
  (_c = 1),
    Object.defineProperty(vr, "__esModule", { value: !0 }),
    (vr.isBrowserCryptoAvailable =
      vr.getSubtleCrypto =
      vr.getBrowerCrypto =
        void 0);
  function r() {
    return (
      (Ht === null || Ht === void 0 ? void 0 : Ht.crypto) ||
      (Ht === null || Ht === void 0 ? void 0 : Ht.msCrypto) ||
      {}
    );
  }
  vr.getBrowerCrypto = r;
  function e() {
    const i = r();
    return i.subtle || i.webkitSubtle;
  }
  vr.getSubtleCrypto = e;
  function t() {
    return !!r() && !!e();
  }
  return (vr.isBrowserCryptoAvailable = t), vr;
}
var yr = {},
  Ec;
function Sv() {
  if (Ec) return yr;
  (Ec = 1),
    Object.defineProperty(yr, "__esModule", { value: !0 }),
    (yr.isBrowser = yr.isNode = yr.isReactNative = void 0);
  function r() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  yr.isReactNative = r;
  function e() {
    return (
      typeof rr < "u" &&
      typeof rr.versions < "u" &&
      typeof rr.versions.node < "u"
    );
  }
  yr.isNode = e;
  function t() {
    return !r() && !e();
  }
  return (yr.isBrowser = t), yr;
}
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = _v;
  e.__exportStar(Ev(), r), e.__exportStar(Sv(), r);
})(Rf);
function Ar(r = 3) {
  const e = Date.now() * Math.pow(10, r),
    t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function Gr(r = 6) {
  return BigInt(Ar(r));
}
function Tr(r, e, t) {
  return { id: t || Ar(), jsonrpc: "2.0", method: r, params: e };
}
function _n(r, e) {
  return { id: r, jsonrpc: "2.0", result: e };
}
function En(r, e, t) {
  return { id: r, jsonrpc: "2.0", error: Iv(e) };
}
function Iv(r, e) {
  return typeof r > "u"
    ? wc(Of)
    : (typeof r == "string" &&
        (r = Object.assign(Object.assign({}, wc(Va)), { message: r })),
      Zb(r.code) && (r = ev(r.code)),
      r);
}
class xv {}
class Dv extends xv {
  constructor() {
    super();
  }
}
class Pv extends Dv {
  constructor(e) {
    super();
  }
}
const Mv = "^https?:",
  Av = "^wss?:";
function Ov(r) {
  const e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function Nf(r, e) {
  const t = Ov(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function Sc(r) {
  return Nf(r, Mv);
}
function Ic(r) {
  return Nf(r, Av);
}
function Cv(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function Ff(r) {
  return (
    typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0"
  );
}
function Ga(r) {
  return Ff(r) && "method" in r;
}
function Sn(r) {
  return Ff(r) && (hr(r) || kt(r));
}
function hr(r) {
  return "result" in r;
}
function kt(r) {
  return "error" in r;
}
let sr = class extends Pv {
  constructor(e) {
    super(e),
      (this.events = new Gt.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      Tr(e.method, e.params || [], e.id || Gr().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n) {
          s(n);
        }
      this.events.on(`${e.id}`, (n) => {
        kt(n) ? s(n.error) : i(n.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (n) {
        s(n);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      Sn(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
const Tv = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  Rv = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function $v(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return Rv(r);
  } catch {
    return r;
  }
}
function Nv(r) {
  return typeof r == "string" ? r : Tv(r) || "";
}
const Fv = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof Re < "u" && typeof Re.WebSocket < "u"
      ? Re.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  qv = () =>
    typeof WebSocket < "u" ||
    (typeof Re < "u" && typeof Re.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  xc = (r) => r.split("?")[0],
  Dc = 10,
  Lv = Fv();
let Uv = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new Gt.EventEmitter()),
      (this.registering = !1),
      !Ic(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (i) => {
        this.onClose(i), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Nv(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!Ic(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((i, s) => {
          this.events.once("register_error", (n) => {
            this.resetMaxListeners(), s(n);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return s(
                  new Error("WebSocket connection is missing or invalid")
                );
              i(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, i) => {
        const s = new URLSearchParams(e).get("origin"),
          n = Rf.isReactNative()
            ? { headers: { origin: s } }
            : { rejectUnauthorized: !Cv(e) },
          a = new Lv(e, [], n);
        qv()
          ? (a.onerror = (o) => {
              const f = o;
              i(this.emitError(f.error));
            })
          : a.on("error", (o) => {
              i(this.emitError(o));
            }),
          (a.onopen = () => {
            this.onOpen(a), t(a);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? $v(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t),
      s = i.message || i.toString(),
      n = En(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, t = this.url) {
    return Tf(e, xc(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Dc && this.events.setMaxListeners(Dc);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        (e == null ? void 0 : e.message) ||
          `WebSocket connection failed for host: ${xc(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var en = { exports: {} };
en.exports;
(function (r, e) {
  var t = 200,
    i = "__lodash_hash_undefined__",
    s = 1,
    n = 2,
    a = 9007199254740991,
    o = "[object Arguments]",
    f = "[object Array]",
    h = "[object AsyncFunction]",
    g = "[object Boolean]",
    y = "[object Date]",
    E = "[object Error]",
    w = "[object Function]",
    S = "[object GeneratorFunction]",
    $ = "[object Map]",
    q = "[object Number]",
    z = "[object Null]",
    C = "[object Object]",
    L = "[object Promise]",
    A = "[object Proxy]",
    T = "[object RegExp]",
    R = "[object Set]",
    l = "[object String]",
    P = "[object Symbol]",
    H = "[object Undefined]",
    Y = "[object WeakMap]",
    M = "[object ArrayBuffer]",
    c = "[object DataView]",
    v = "[object Float32Array]",
    d = "[object Float64Array]",
    b = "[object Int8Array]",
    _ = "[object Int16Array]",
    D = "[object Int32Array]",
    x = "[object Uint8Array]",
    m = "[object Uint8ClampedArray]",
    u = "[object Uint16Array]",
    I = "[object Uint32Array]",
    K = /[\\^$.*+?()[\]{}|]/g,
    k = /^\[object .+?Constructor\]$/,
    W = /^(?:0|[1-9]\d*)$/,
    V = {};
  (V[v] = V[d] = V[b] = V[_] = V[D] = V[x] = V[m] = V[u] = V[I] = !0),
    (V[o] =
      V[f] =
      V[M] =
      V[g] =
      V[c] =
      V[y] =
      V[E] =
      V[w] =
      V[$] =
      V[q] =
      V[C] =
      V[T] =
      V[R] =
      V[l] =
      V[Y] =
        !1);
  var ee = typeof Ht == "object" && Ht && Ht.Object === Object && Ht,
    U = typeof self == "object" && self && self.Object === Object && self,
    B = ee || U || Function("return this")(),
    F = e && !e.nodeType && e,
    p = F && !0 && r && !r.nodeType && r,
    N = p && p.exports === F,
    J = N && ee.process,
    X = (function () {
      try {
        return J && J.binding && J.binding("util");
      } catch {}
    })(),
    me = X && X.isTypedArray;
  function fe(O, j) {
    for (
      var G = -1, te = O == null ? 0 : O.length, Xe = 0, Ie = [];
      ++G < te;

    ) {
      var it = O[G];
      j(it, G, O) && (Ie[Xe++] = it);
    }
    return Ie;
  }
  function ce(O, j) {
    for (var G = -1, te = j.length, Xe = O.length; ++G < te; ) O[Xe + G] = j[G];
    return O;
  }
  function qe(O, j) {
    for (var G = -1, te = O == null ? 0 : O.length; ++G < te; )
      if (j(O[G], G, O)) return !0;
    return !1;
  }
  function ve(O, j) {
    for (var G = -1, te = Array(O); ++G < O; ) te[G] = j(G);
    return te;
  }
  function pe(O) {
    return function (j) {
      return O(j);
    };
  }
  function $e(O, j) {
    return O.has(j);
  }
  function he(O, j) {
    return O == null ? void 0 : O[j];
  }
  function oe(O) {
    var j = -1,
      G = Array(O.size);
    return (
      O.forEach(function (te, Xe) {
        G[++j] = [Xe, te];
      }),
      G
    );
  }
  function xe(O, j) {
    return function (G) {
      return O(j(G));
    };
  }
  function ne(O) {
    var j = -1,
      G = Array(O.size);
    return (
      O.forEach(function (te) {
        G[++j] = te;
      }),
      G
    );
  }
  var se = Array.prototype,
    ge = Function.prototype,
    re = Object.prototype,
    ae = B["__core-js_shared__"],
    Te = ge.toString,
    ie = re.hasOwnProperty,
    ue = (function () {
      var O = /[^.]+$/.exec((ae && ae.keys && ae.keys.IE_PROTO) || "");
      return O ? "Symbol(src)_1." + O : "";
    })(),
    Fe = re.toString,
    de = RegExp(
      "^" +
        Te.call(ie)
          .replace(K, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    le = N ? B.Buffer : void 0,
    Le = B.Symbol,
    je = B.Uint8Array,
    ze = re.propertyIsEnumerable,
    Yt = se.splice,
    Ue = Le ? Le.toStringTag : void 0,
    He = Object.getOwnPropertySymbols,
    Ir = le ? le.isBuffer : void 0,
    Je = xe(Object.keys, Object),
    we = ni(B, "DataView"),
    Ye = ni(B, "Map"),
    _e = ni(B, "Promise"),
    Ee = ni(B, "Set"),
    Ze = ni(B, "WeakMap"),
    be = ni(Object, "create"),
    Pe = qr(we),
    at = qr(Ye),
    Me = qr(_e),
    Ae = qr(Ee),
    ot = qr(Ze),
    De = Le ? Le.prototype : void 0,
    Se = De ? De.valueOf : void 0;
  function Ke(O) {
    var j = -1,
      G = O == null ? 0 : O.length;
    for (this.clear(); ++j < G; ) {
      var te = O[j];
      this.set(te[0], te[1]);
    }
  }
  function Oe() {
    (this.__data__ = be ? be(null) : {}), (this.size = 0);
  }
  function Ce(O) {
    var j = this.has(O) && delete this.__data__[O];
    return (this.size -= j ? 1 : 0), j;
  }
  function Es(O) {
    var j = this.__data__;
    if (be) {
      var G = j[O];
      return G === i ? void 0 : G;
    }
    return ie.call(j, O) ? j[O] : void 0;
  }
  function tt(O) {
    var j = this.__data__;
    return be ? j[O] !== void 0 : ie.call(j, O);
  }
  function rt(O, j) {
    var G = this.__data__;
    return (
      (this.size += this.has(O) ? 0 : 1),
      (G[O] = be && j === void 0 ? i : j),
      this
    );
  }
  (Ke.prototype.clear = Oe),
    (Ke.prototype.delete = Ce),
    (Ke.prototype.get = Es),
    (Ke.prototype.has = tt),
    (Ke.prototype.set = rt);
  function Rt(O) {
    var j = -1,
      G = O == null ? 0 : O.length;
    for (this.clear(); ++j < G; ) {
      var te = O[j];
      this.set(te[0], te[1]);
    }
  }
  function xi() {
    (this.__data__ = []), (this.size = 0);
  }
  function Di(O) {
    var j = this.__data__,
      G = Ss(j, O);
    if (G < 0) return !1;
    var te = j.length - 1;
    return G == te ? j.pop() : Yt.call(j, G, 1), --this.size, !0;
  }
  function Pi(O) {
    var j = this.__data__,
      G = Ss(j, O);
    return G < 0 ? void 0 : j[G][1];
  }
  function Mi(O) {
    return Ss(this.__data__, O) > -1;
  }
  function Ai(O, j) {
    var G = this.__data__,
      te = Ss(G, O);
    return te < 0 ? (++this.size, G.push([O, j])) : (G[te][1] = j), this;
  }
  (Rt.prototype.clear = xi),
    (Rt.prototype.delete = Di),
    (Rt.prototype.get = Pi),
    (Rt.prototype.has = Mi),
    (Rt.prototype.set = Ai);
  function Xt(O) {
    var j = -1,
      G = O == null ? 0 : O.length;
    for (this.clear(); ++j < G; ) {
      var te = O[j];
      this.set(te[0], te[1]);
    }
  }
  function Oi() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Ke(),
        map: new (Ye || Rt)(),
        string: new Ke(),
      });
  }
  function Ci(O) {
    var j = Is(this, O).delete(O);
    return (this.size -= j ? 1 : 0), j;
  }
  function Ti(O) {
    return Is(this, O).get(O);
  }
  function Ri(O) {
    return Is(this, O).has(O);
  }
  function $i(O, j) {
    var G = Is(this, O),
      te = G.size;
    return G.set(O, j), (this.size += G.size == te ? 0 : 1), this;
  }
  (Xt.prototype.clear = Oi),
    (Xt.prototype.delete = Ci),
    (Xt.prototype.get = Ti),
    (Xt.prototype.has = Ri),
    (Xt.prototype.set = $i);
  function xr(O) {
    var j = -1,
      G = O == null ? 0 : O.length;
    for (this.__data__ = new Xt(); ++j < G; ) this.add(O[j]);
  }
  function Ni(O) {
    return this.__data__.set(O, i), this;
  }
  function Fi(O) {
    return this.__data__.has(O);
  }
  (xr.prototype.add = xr.prototype.push = Ni), (xr.prototype.has = Fi);
  function Lt(O) {
    var j = (this.__data__ = new Rt(O));
    this.size = j.size;
  }
  function qi() {
    (this.__data__ = new Rt()), (this.size = 0);
  }
  function Li(O) {
    var j = this.__data__,
      G = j.delete(O);
    return (this.size = j.size), G;
  }
  function Ui(O) {
    return this.__data__.get(O);
  }
  function cu(O) {
    return this.__data__.has(O);
  }
  function hu(O, j) {
    var G = this.__data__;
    if (G instanceof Rt) {
      var te = G.__data__;
      if (!Ye || te.length < t - 1)
        return te.push([O, j]), (this.size = ++G.size), this;
      G = this.__data__ = new Xt(te);
    }
    return G.set(O, j), (this.size = G.size), this;
  }
  (Lt.prototype.clear = qi),
    (Lt.prototype.delete = Li),
    (Lt.prototype.get = Ui),
    (Lt.prototype.has = cu),
    (Lt.prototype.set = hu);
  function fu(O, j) {
    var G = xs(O),
      te = !G && xu(O),
      Xe = !G && !te && Dn(O),
      Ie = !G && !te && !Xe && ao(O),
      it = G || te || Xe || Ie,
      ft = it ? ve(O.length, String) : [],
      yt = ft.length;
    for (var et in O)
      ie.call(O, et) &&
        !(
          it &&
          (et == "length" ||
            (Xe && (et == "offset" || et == "parent")) ||
            (Ie &&
              (et == "buffer" || et == "byteLength" || et == "byteOffset")) ||
            wu(et, yt))
        ) &&
        ft.push(et);
    return ft;
  }
  function Ss(O, j) {
    for (var G = O.length; G--; ) if (ro(O[G][0], j)) return G;
    return -1;
  }
  function uu(O, j, G) {
    var te = j(O);
    return xs(O) ? te : ce(te, G(O));
  }
  function ji(O) {
    return O == null
      ? O === void 0
        ? H
        : z
      : Ue && Ue in Object(O)
      ? yu(O)
      : Iu(O);
  }
  function Qa(O) {
    return zi(O) && ji(O) == o;
  }
  function Za(O, j, G, te, Xe) {
    return O === j
      ? !0
      : O == null || j == null || (!zi(O) && !zi(j))
      ? O !== O && j !== j
      : du(O, j, G, te, Za, Xe);
  }
  function du(O, j, G, te, Xe, Ie) {
    var it = xs(O),
      ft = xs(j),
      yt = it ? f : Dr(O),
      et = ft ? f : Dr(j);
    (yt = yt == o ? C : yt), (et = et == o ? C : et);
    var $t = yt == C,
      Qt = et == C,
      Et = yt == et;
    if (Et && Dn(O)) {
      if (!Dn(j)) return !1;
      (it = !0), ($t = !1);
    }
    if (Et && !$t)
      return (
        Ie || (Ie = new Lt()),
        it || ao(O) ? eo(O, j, G, te, Xe, Ie) : bu(O, j, yt, G, te, Xe, Ie)
      );
    if (!(G & s)) {
      var Ut = $t && ie.call(O, "__wrapped__"),
        jt = Qt && ie.call(j, "__wrapped__");
      if (Ut || jt) {
        var Pr = Ut ? O.value() : O,
          br = jt ? j.value() : j;
        return Ie || (Ie = new Lt()), Xe(Pr, br, G, te, Ie);
      }
    }
    return Et ? (Ie || (Ie = new Lt()), vu(O, j, G, te, Xe, Ie)) : !1;
  }
  function lu(O) {
    if (!no(O) || Eu(O)) return !1;
    var j = io(O) ? de : k;
    return j.test(qr(O));
  }
  function pu(O) {
    return zi(O) && so(O.length) && !!V[ji(O)];
  }
  function gu(O) {
    if (!Su(O)) return Je(O);
    var j = [];
    for (var G in Object(O)) ie.call(O, G) && G != "constructor" && j.push(G);
    return j;
  }
  function eo(O, j, G, te, Xe, Ie) {
    var it = G & s,
      ft = O.length,
      yt = j.length;
    if (ft != yt && !(it && yt > ft)) return !1;
    var et = Ie.get(O);
    if (et && Ie.get(j)) return et == j;
    var $t = -1,
      Qt = !0,
      Et = G & n ? new xr() : void 0;
    for (Ie.set(O, j), Ie.set(j, O); ++$t < ft; ) {
      var Ut = O[$t],
        jt = j[$t];
      if (te) var Pr = it ? te(jt, Ut, $t, j, O, Ie) : te(Ut, jt, $t, O, j, Ie);
      if (Pr !== void 0) {
        if (Pr) continue;
        Qt = !1;
        break;
      }
      if (Et) {
        if (
          !qe(j, function (br, Lr) {
            if (!$e(Et, Lr) && (Ut === br || Xe(Ut, br, G, te, Ie)))
              return Et.push(Lr);
          })
        ) {
          Qt = !1;
          break;
        }
      } else if (!(Ut === jt || Xe(Ut, jt, G, te, Ie))) {
        Qt = !1;
        break;
      }
    }
    return Ie.delete(O), Ie.delete(j), Qt;
  }
  function bu(O, j, G, te, Xe, Ie, it) {
    switch (G) {
      case c:
        if (O.byteLength != j.byteLength || O.byteOffset != j.byteOffset)
          return !1;
        (O = O.buffer), (j = j.buffer);
      case M:
        return !(O.byteLength != j.byteLength || !Ie(new je(O), new je(j)));
      case g:
      case y:
      case q:
        return ro(+O, +j);
      case E:
        return O.name == j.name && O.message == j.message;
      case T:
      case l:
        return O == j + "";
      case $:
        var ft = oe;
      case R:
        var yt = te & s;
        if ((ft || (ft = ne), O.size != j.size && !yt)) return !1;
        var et = it.get(O);
        if (et) return et == j;
        (te |= n), it.set(O, j);
        var $t = eo(ft(O), ft(j), te, Xe, Ie, it);
        return it.delete(O), $t;
      case P:
        if (Se) return Se.call(O) == Se.call(j);
    }
    return !1;
  }
  function vu(O, j, G, te, Xe, Ie) {
    var it = G & s,
      ft = to(O),
      yt = ft.length,
      et = to(j),
      $t = et.length;
    if (yt != $t && !it) return !1;
    for (var Qt = yt; Qt--; ) {
      var Et = ft[Qt];
      if (!(it ? Et in j : ie.call(j, Et))) return !1;
    }
    var Ut = Ie.get(O);
    if (Ut && Ie.get(j)) return Ut == j;
    var jt = !0;
    Ie.set(O, j), Ie.set(j, O);
    for (var Pr = it; ++Qt < yt; ) {
      Et = ft[Qt];
      var br = O[Et],
        Lr = j[Et];
      if (te) var oo = it ? te(Lr, br, Et, j, O, Ie) : te(br, Lr, Et, O, j, Ie);
      if (!(oo === void 0 ? br === Lr || Xe(br, Lr, G, te, Ie) : oo)) {
        jt = !1;
        break;
      }
      Pr || (Pr = Et == "constructor");
    }
    if (jt && !Pr) {
      var Ds = O.constructor,
        Ps = j.constructor;
      Ds != Ps &&
        "constructor" in O &&
        "constructor" in j &&
        !(
          typeof Ds == "function" &&
          Ds instanceof Ds &&
          typeof Ps == "function" &&
          Ps instanceof Ps
        ) &&
        (jt = !1);
    }
    return Ie.delete(O), Ie.delete(j), jt;
  }
  function to(O) {
    return uu(O, Mu, mu);
  }
  function Is(O, j) {
    var G = O.__data__;
    return _u(j) ? G[typeof j == "string" ? "string" : "hash"] : G.map;
  }
  function ni(O, j) {
    var G = he(O, j);
    return lu(G) ? G : void 0;
  }
  function yu(O) {
    var j = ie.call(O, Ue),
      G = O[Ue];
    try {
      O[Ue] = void 0;
      var te = !0;
    } catch {}
    var Xe = Fe.call(O);
    return te && (j ? (O[Ue] = G) : delete O[Ue]), Xe;
  }
  var mu = He
      ? function (O) {
          return O == null
            ? []
            : ((O = Object(O)),
              fe(He(O), function (j) {
                return ze.call(O, j);
              }));
        }
      : Au,
    Dr = ji;
  ((we && Dr(new we(new ArrayBuffer(1))) != c) ||
    (Ye && Dr(new Ye()) != $) ||
    (_e && Dr(_e.resolve()) != L) ||
    (Ee && Dr(new Ee()) != R) ||
    (Ze && Dr(new Ze()) != Y)) &&
    (Dr = function (O) {
      var j = ji(O),
        G = j == C ? O.constructor : void 0,
        te = G ? qr(G) : "";
      if (te)
        switch (te) {
          case Pe:
            return c;
          case at:
            return $;
          case Me:
            return L;
          case Ae:
            return R;
          case ot:
            return Y;
        }
      return j;
    });
  function wu(O, j) {
    return (
      (j = j ?? a),
      !!j &&
        (typeof O == "number" || W.test(O)) &&
        O > -1 &&
        O % 1 == 0 &&
        O < j
    );
  }
  function _u(O) {
    var j = typeof O;
    return j == "string" || j == "number" || j == "symbol" || j == "boolean"
      ? O !== "__proto__"
      : O === null;
  }
  function Eu(O) {
    return !!ue && ue in O;
  }
  function Su(O) {
    var j = O && O.constructor,
      G = (typeof j == "function" && j.prototype) || re;
    return O === G;
  }
  function Iu(O) {
    return Fe.call(O);
  }
  function qr(O) {
    if (O != null) {
      try {
        return Te.call(O);
      } catch {}
      try {
        return O + "";
      } catch {}
    }
    return "";
  }
  function ro(O, j) {
    return O === j || (O !== O && j !== j);
  }
  var xu = Qa(
      (function () {
        return arguments;
      })()
    )
      ? Qa
      : function (O) {
          return zi(O) && ie.call(O, "callee") && !ze.call(O, "callee");
        },
    xs = Array.isArray;
  function Du(O) {
    return O != null && so(O.length) && !io(O);
  }
  var Dn = Ir || Ou;
  function Pu(O, j) {
    return Za(O, j);
  }
  function io(O) {
    if (!no(O)) return !1;
    var j = ji(O);
    return j == w || j == S || j == h || j == A;
  }
  function so(O) {
    return typeof O == "number" && O > -1 && O % 1 == 0 && O <= a;
  }
  function no(O) {
    var j = typeof O;
    return O != null && (j == "object" || j == "function");
  }
  function zi(O) {
    return O != null && typeof O == "object";
  }
  var ao = me ? pe(me) : pu;
  function Mu(O) {
    return Du(O) ? fu(O) : gu(O);
  }
  function Au() {
    return [];
  }
  function Ou() {
    return !1;
  }
  r.exports = Pu;
})(en, en.exports);
var jv = en.exports;
const zv = xa(jv);
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.getLocalStorage =
  Qe.getLocalStorageOrThrow =
  Qe.getCrypto =
  Qe.getCryptoOrThrow =
  Qe.getLocation =
  Qe.getLocationOrThrow =
  Qe.getNavigator =
  Qe.getNavigatorOrThrow =
  qf =
  Qe.getDocument =
  Qe.getDocumentOrThrow =
  Qe.getFromWindowOrThrow =
  Qe.getFromWindow =
    void 0;
function ri(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
Qe.getFromWindow = ri;
function Ii(r) {
  const e = ri(r);
  if (!e) throw new Error(`${r} is not defined in Window`);
  return e;
}
Qe.getFromWindowOrThrow = Ii;
function Bv() {
  return Ii("document");
}
Qe.getDocumentOrThrow = Bv;
function kv() {
  return ri("document");
}
var qf = (Qe.getDocument = kv);
function Hv() {
  return Ii("navigator");
}
Qe.getNavigatorOrThrow = Hv;
function Kv() {
  return ri("navigator");
}
Qe.getNavigator = Kv;
function Vv() {
  return Ii("location");
}
Qe.getLocationOrThrow = Vv;
function Gv() {
  return ri("location");
}
Qe.getLocation = Gv;
function Wv() {
  return Ii("crypto");
}
Qe.getCryptoOrThrow = Wv;
function Jv() {
  return ri("crypto");
}
Qe.getCrypto = Jv;
function Yv() {
  return Ii("localStorage");
}
Qe.getLocalStorageOrThrow = Yv;
function Xv() {
  return ri("localStorage");
}
Qe.getLocalStorage = Xv;
const Lf = "wc",
  Uf = 2,
  Wa = "core",
  lr = `${Lf}@2:${Wa}:`,
  Qv = { name: Wa, logger: "error" },
  Zv = { database: ":memory:" },
  ey = "crypto",
  Pc = "client_ed25519_seed",
  ty = Z.ONE_DAY,
  ry = "keychain",
  iy = "0.3",
  sy = "messages",
  ny = "0.3",
  ay = Z.SIX_HOURS,
  oy = "publisher",
  jf = "irn",
  cy = "error",
  zf = "wss://relay.walletconnect.org",
  hy = "relayer",
  xt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  fy = "_subscription",
  zt = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  uy = 0.1,
  va = "2.17.1",
  Ve = { link_mode: "link_mode", relay: "relay" },
  dy = "0.3",
  ly = "WALLETCONNECT_CLIENT_ID",
  Mc = "WALLETCONNECT_LINK_MODE_APPS",
  fr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  py = "subscription",
  gy = "0.3",
  by = Z.FIVE_SECONDS * 1e3,
  vy = "pairing",
  yy = "0.3",
  Vi = {
    wc_pairingDelete: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Kr = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Zt = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  my = "history",
  wy = "0.3",
  _y = "expirer",
  Bt = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  Ey = "0.3",
  Sy = "verify-api",
  Iy = "https://verify.walletconnect.com",
  Bf = "https://verify.walletconnect.org",
  es = Bf,
  xy = `${es}/v3`,
  Dy = [Iy, Bf],
  Py = "echo",
  My = "https://echo.walletconnect.com",
  cr = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic",
  },
  mr = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found",
  },
  er = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success:
      "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success",
  },
  Br = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure:
      "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found",
  },
  kr = {
    authenticated_session_approve_started:
      "authenticated_session_approve_started",
    authenticated_session_not_expired: "authenticated_session_not_expired",
    chains_caip2_compliant: "chains_caip2_compliant",
    chains_evm_compliant: "chains_evm_compliant",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic:
      "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success:
      "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve:
      "publishing_authenticated_session_approve",
    authenticated_session_approve_publish_success:
      "authenticated_session_approve_publish_success",
  },
  Gi = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    missing_session_authenticate_request:
      "missing_session_authenticate_request",
    session_authenticate_request_expired:
      "session_authenticate_request_expired",
    chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
    chains_evm_compliant_failure: "chains_evm_compliant_failure",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure:
      "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure:
      "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found:
      "authenticated_session_pending_request_not_found",
  },
  Ay = 0.1,
  Oy = "event-client",
  Cy = 86400,
  Ty = "https://pulse.walletconnect.org/batch";
function Ry(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var n = r.charAt(s),
      a = n.charCodeAt(0);
    if (t[a] !== 255) throw new TypeError(n + " is ambiguous");
    t[a] = s;
  }
  var o = r.length,
    f = r.charAt(0),
    h = Math.log(o) / Math.log(256),
    g = Math.log(256) / Math.log(o);
  function y(S) {
    if (
      (S instanceof Uint8Array ||
        (ArrayBuffer.isView(S)
          ? (S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength))
          : Array.isArray(S) && (S = Uint8Array.from(S))),
      !(S instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (S.length === 0) return "";
    for (var $ = 0, q = 0, z = 0, C = S.length; z !== C && S[z] === 0; )
      z++, $++;
    for (var L = ((C - z) * g + 1) >>> 0, A = new Uint8Array(L); z !== C; ) {
      for (
        var T = S[z], R = 0, l = L - 1;
        (T !== 0 || R < q) && l !== -1;
        l--, R++
      )
        (T += (256 * A[l]) >>> 0), (A[l] = T % o >>> 0), (T = (T / o) >>> 0);
      if (T !== 0) throw new Error("Non-zero carry");
      (q = R), z++;
    }
    for (var P = L - q; P !== L && A[P] === 0; ) P++;
    for (var H = f.repeat($); P < L; ++P) H += r.charAt(A[P]);
    return H;
  }
  function E(S) {
    if (typeof S != "string") throw new TypeError("Expected String");
    if (S.length === 0) return new Uint8Array();
    var $ = 0;
    if (S[$] !== " ") {
      for (var q = 0, z = 0; S[$] === f; ) q++, $++;
      for (
        var C = ((S.length - $) * h + 1) >>> 0, L = new Uint8Array(C);
        S[$];

      ) {
        var A = t[S.charCodeAt($)];
        if (A === 255) return;
        for (var T = 0, R = C - 1; (A !== 0 || T < z) && R !== -1; R--, T++)
          (A += (o * L[R]) >>> 0),
            (L[R] = A % 256 >>> 0),
            (A = (A / 256) >>> 0);
        if (A !== 0) throw new Error("Non-zero carry");
        (z = T), $++;
      }
      if (S[$] !== " ") {
        for (var l = C - z; l !== C && L[l] === 0; ) l++;
        for (var P = new Uint8Array(q + (C - l)), H = q; l !== C; )
          P[H++] = L[l++];
        return P;
      }
    }
  }
  function w(S) {
    var $ = E(S);
    if ($) return $;
    throw new Error(`Non-${e} character`);
  }
  return { encode: y, decodeUnsafe: E, decode: w };
}
var $y = Ry,
  Ny = $y;
const kf = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Fy = (r) => new TextEncoder().encode(r),
  qy = (r) => new TextDecoder().decode(r);
class Ly {
  constructor(e, t, i) {
    (this.name = e), (this.prefix = t), (this.baseEncode = i);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Uy {
  constructor(e, t, i) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Hf(this, e);
  }
}
class jy {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Hf(this, e);
  }
  decode(e) {
    const t = e[0],
      i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Hf = (r, e) =>
  new jy({
    ...(r.decoders || { [r.prefix]: r }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class zy {
  constructor(e, t, i, s) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = i),
      (this.baseDecode = s),
      (this.encoder = new Ly(e, t, i)),
      (this.decoder = new Uy(e, t, s));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const In = ({ name: r, prefix: e, encode: t, decode: i }) => new zy(r, e, t, i),
  _s = ({ prefix: r, name: e, alphabet: t }) => {
    const { encode: i, decode: s } = Ny(t, e);
    return In({ prefix: r, name: e, encode: i, decode: (n) => kf(s(n)) });
  },
  By = (r, e, t, i) => {
    const s = {};
    for (let g = 0; g < e.length; ++g) s[e[g]] = g;
    let n = r.length;
    for (; r[n - 1] === "="; ) --n;
    const a = new Uint8Array(((n * t) / 8) | 0);
    let o = 0,
      f = 0,
      h = 0;
    for (let g = 0; g < n; ++g) {
      const y = s[r[g]];
      if (y === void 0) throw new SyntaxError(`Non-${i} character`);
      (f = (f << t) | y),
        (o += t),
        o >= 8 && ((o -= 8), (a[h++] = 255 & (f >> o)));
    }
    if (o >= t || 255 & (f << (8 - o)))
      throw new SyntaxError("Unexpected end of data");
    return a;
  },
  ky = (r, e, t) => {
    const i = e[e.length - 1] === "=",
      s = (1 << t) - 1;
    let n = "",
      a = 0,
      o = 0;
    for (let f = 0; f < r.length; ++f)
      for (o = (o << 8) | r[f], a += 8; a > t; )
        (a -= t), (n += e[s & (o >> a)]);
    if ((a && (n += e[s & (o << (t - a))]), i))
      for (; (n.length * t) & 7; ) n += "=";
    return n;
  },
  _t = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    In({
      prefix: e,
      name: r,
      encode(s) {
        return ky(s, i, t);
      },
      decode(s) {
        return By(s, i, t, r);
      },
    }),
  Hy = In({
    prefix: "\0",
    name: "identity",
    encode: (r) => qy(r),
    decode: (r) => Fy(r),
  });
var Ky = Object.freeze({ __proto__: null, identity: Hy });
const Vy = _t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Gy = Object.freeze({ __proto__: null, base2: Vy });
const Wy = _t({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var Jy = Object.freeze({ __proto__: null, base8: Wy });
const Yy = _s({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Xy = Object.freeze({ __proto__: null, base10: Yy });
const Qy = _t({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Zy = _t({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var em = Object.freeze({ __proto__: null, base16: Qy, base16upper: Zy });
const tm = _t({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  rm = _t({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  im = _t({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  sm = _t({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  nm = _t({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  am = _t({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  om = _t({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  cm = _t({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  hm = _t({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var fm = Object.freeze({
  __proto__: null,
  base32: tm,
  base32upper: rm,
  base32pad: im,
  base32padupper: sm,
  base32hex: nm,
  base32hexupper: am,
  base32hexpad: om,
  base32hexpadupper: cm,
  base32z: hm,
});
const um = _s({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  dm = _s({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var lm = Object.freeze({ __proto__: null, base36: um, base36upper: dm });
const pm = _s({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  gm = _s({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var bm = Object.freeze({ __proto__: null, base58btc: pm, base58flickr: gm });
const vm = _t({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  ym = _t({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  mm = _t({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  wm = _t({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var _m = Object.freeze({
  __proto__: null,
  base64: vm,
  base64pad: ym,
  base64url: mm,
  base64urlpad: wm,
});
const Kf = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Em = Kf.reduce((r, e, t) => ((r[t] = e), r), []),
  Sm = Kf.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function Im(r) {
  return r.reduce((e, t) => ((e += Em[t]), e), "");
}
function xm(r) {
  const e = [];
  for (const t of r) {
    const i = Sm[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Dm = In({ prefix: "🚀", name: "base256emoji", encode: Im, decode: xm });
var Pm = Object.freeze({ __proto__: null, base256emoji: Dm }),
  Mm = Vf,
  Ac = 128,
  Am = 127,
  Om = ~Am,
  Cm = Math.pow(2, 31);
function Vf(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= Cm; ) (e[t++] = (r & 255) | Ac), (r /= 128);
  for (; r & Om; ) (e[t++] = (r & 255) | Ac), (r >>>= 7);
  return (e[t] = r | 0), (Vf.bytes = t - i + 1), e;
}
var Tm = ya,
  Rm = 128,
  Oc = 127;
function ya(r, i) {
  var t = 0,
    i = i || 0,
    s = 0,
    n = i,
    a,
    o = r.length;
  do {
    if (n >= o)
      throw ((ya.bytes = 0), new RangeError("Could not decode varint"));
    (a = r[n++]),
      (t += s < 28 ? (a & Oc) << s : (a & Oc) * Math.pow(2, s)),
      (s += 7);
  } while (a >= Rm);
  return (ya.bytes = n - i), t;
}
var $m = Math.pow(2, 7),
  Nm = Math.pow(2, 14),
  Fm = Math.pow(2, 21),
  qm = Math.pow(2, 28),
  Lm = Math.pow(2, 35),
  Um = Math.pow(2, 42),
  jm = Math.pow(2, 49),
  zm = Math.pow(2, 56),
  Bm = Math.pow(2, 63),
  km = function (r) {
    return r < $m
      ? 1
      : r < Nm
      ? 2
      : r < Fm
      ? 3
      : r < qm
      ? 4
      : r < Lm
      ? 5
      : r < Um
      ? 6
      : r < jm
      ? 7
      : r < zm
      ? 8
      : r < Bm
      ? 9
      : 10;
  },
  Hm = { encode: Mm, decode: Tm, encodingLength: km },
  Gf = Hm;
const Cc = (r, e, t = 0) => (Gf.encode(r, e, t), e),
  Tc = (r) => Gf.encodingLength(r),
  ma = (r, e) => {
    const t = e.byteLength,
      i = Tc(r),
      s = i + Tc(t),
      n = new Uint8Array(s + t);
    return Cc(r, n, 0), Cc(t, n, i), n.set(e, s), new Km(r, t, e, n);
  };
class Km {
  constructor(e, t, i, s) {
    (this.code = e), (this.size = t), (this.digest = i), (this.bytes = s);
  }
}
const Wf = ({ name: r, code: e, encode: t }) => new Vm(r, e, t);
class Vm {
  constructor(e, t, i) {
    (this.name = e), (this.code = t), (this.encode = i);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? ma(this.code, t)
        : t.then((i) => ma(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Jf = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)),
  Gm = Wf({ name: "sha2-256", code: 18, encode: Jf("SHA-256") }),
  Wm = Wf({ name: "sha2-512", code: 19, encode: Jf("SHA-512") });
var Jm = Object.freeze({ __proto__: null, sha256: Gm, sha512: Wm });
const Yf = 0,
  Ym = "identity",
  Xf = kf,
  Xm = (r) => ma(Yf, Xf(r)),
  Qm = { code: Yf, name: Ym, encode: Xf, digest: Xm };
var Zm = Object.freeze({ __proto__: null, identity: Qm });
new TextEncoder(), new TextDecoder();
const Rc = {
  ...Ky,
  ...Gy,
  ...Jy,
  ...Xy,
  ...em,
  ...fm,
  ...lm,
  ...bm,
  ..._m,
  ...Pm,
};
({ ...Jm, ...Zm });
function e3(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function Qf(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
const $c = Qf(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  kn = Qf(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      const e = e3(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  t3 = {
    utf8: $c,
    "utf-8": $c,
    hex: Rc.base16,
    latin1: kn,
    ascii: kn,
    binary: kn,
    ...Rc,
  };
function r3(r, e = "utf8") {
  const t = t3[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
class i3 {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = ry),
      (this.version = iy),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.init = async () => {
        if (!this.initialized) {
          const i = await this.getKeyChain();
          typeof i < "u" && (this.keychain = i), (this.initialized = !0);
        }
      }),
      (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
      (this.set = async (i, s) => {
        this.isInitialized(), this.keychain.set(i, s), await this.persist();
      }),
      (this.get = (i) => {
        this.isInitialized();
        const s = this.keychain.get(i);
        if (typeof s > "u") {
          const { message: n } = Q("NO_MATCHING_KEY", `${this.name}: ${i}`);
          throw new Error(n);
        }
        return s;
      }),
      (this.del = async (i) => {
        this.isInitialized(), this.keychain.delete(i), await this.persist();
      }),
      (this.core = e),
      (this.logger = Pt(t, this.name));
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, cf(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? hf(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
let s3 = class {
  constructor(e, t, i) {
    (this.core = e),
      (this.logger = t),
      (this.name = ey),
      (this.randomSessionIdentifier = fa()),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.getClientId = async () => {
        this.isInitialized();
        const s = await this.getClientSeed(),
          n = qo(s);
        return sf(n.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const s = S1();
        return this.setPrivateKey(s.publicKey, s.privateKey);
      }),
      (this.signJWT = async (s) => {
        this.isInitialized();
        const n = await this.getClientSeed(),
          a = qo(n),
          o = this.randomSessionIdentifier;
        return await Tp(o, s, ty, a);
      }),
      (this.generateSharedKey = (s, n, a) => {
        this.isInitialized();
        const o = this.getPrivateKey(s),
          f = I1(o, n);
        return this.setSymKey(f, a);
      }),
      (this.setSymKey = async (s, n) => {
        this.isInitialized();
        const a = n || Ls(s);
        return await this.keychain.set(a, s), a;
      }),
      (this.deleteKeyPair = async (s) => {
        this.isInitialized(), await this.keychain.del(s);
      }),
      (this.deleteSymKey = async (s) => {
        this.isInitialized(), await this.keychain.del(s);
      }),
      (this.encode = async (s, n, a) => {
        this.isInitialized();
        const o = mf(a),
          f = Gb(n);
        if (Xo(o)) return D1(f, a == null ? void 0 : a.encoding);
        if (Yo(o)) {
          const E = o.senderPublicKey,
            w = o.receiverPublicKey;
          s = await this.generateSharedKey(E, w);
        }
        const h = this.getSymKey(s),
          { type: g, senderPublicKey: y } = o;
        return x1({
          type: g,
          symKey: h,
          message: f,
          senderPublicKey: y,
          encoding: a == null ? void 0 : a.encoding,
        });
      }),
      (this.decode = async (s, n, a) => {
        this.isInitialized();
        const o = A1(n, a);
        if (Xo(o)) {
          const f = M1(n, a == null ? void 0 : a.encoding);
          return mc(f);
        }
        if (Yo(o)) {
          const f = o.receiverPublicKey,
            h = o.senderPublicKey;
          s = await this.generateSharedKey(f, h);
        }
        try {
          const f = this.getSymKey(s),
            h = P1({
              symKey: f,
              encoded: n,
              encoding: a == null ? void 0 : a.encoding,
            });
          return mc(h);
        } catch (f) {
          this.logger.error(
            `Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(f);
        }
      }),
      (this.getPayloadType = (s, n = Cr) => {
        const a = ss({ encoded: s, encoding: n });
        return Xr(a.type);
      }),
      (this.getPayloadSenderPublicKey = (s, n = Cr) => {
        const a = ss({ encoded: s, encoding: n });
        return a.senderPublicKey ? pt(a.senderPublicKey, Dt) : void 0;
      }),
      (this.core = e),
      (this.logger = Pt(t, this.name)),
      (this.keychain = i || new i3(this.core, this.logger));
  }
  get context() {
    return Tt(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Pc);
    } catch {
      (e = fa()), await this.keychain.set(Pc, e);
    }
    return r3(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
class n3 extends Fb {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = sy),
      (this.version = ny),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const i = await this.getRelayerMessages();
            typeof i < "u" && (this.messages = i),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (i) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(i);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (i, s) => {
        this.isInitialized();
        const n = wr(s);
        let a = this.messages.get(i);
        return (
          typeof a > "u" && (a = {}),
          typeof a[n] < "u" ||
            ((a[n] = s), this.messages.set(i, a), await this.persist()),
          n
        );
      }),
      (this.get = (i) => {
        this.isInitialized();
        let s = this.messages.get(i);
        return typeof s > "u" && (s = {}), s;
      }),
      (this.has = (i, s) => {
        this.isInitialized();
        const n = this.get(i),
          a = wr(s);
        return typeof n[a] < "u";
      }),
      (this.del = async (i) => {
        this.isInitialized(), this.messages.delete(i), await this.persist();
      }),
      (this.logger = Pt(e, this.name)),
      (this.core = t);
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, cf(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? hf(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class a3 extends qb {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new Gt.EventEmitter()),
      (this.name = oy),
      (this.queue = new Map()),
      (this.publishTimeout = Z.toMiliseconds(Z.ONE_MINUTE)),
      (this.failedPublishTimeout = Z.toMiliseconds(Z.ONE_SECOND)),
      (this.needsTransportRestart = !1),
      (this.publish = async (i, s, n) => {
        var a;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: i, message: s, opts: n },
          });
        const o = (n == null ? void 0 : n.ttl) || ay,
          f = ua(n),
          h = (n == null ? void 0 : n.prompt) || !1,
          g = (n == null ? void 0 : n.tag) || 0,
          y = (n == null ? void 0 : n.id) || Gr().toString(),
          E = {
            topic: i,
            message: s,
            opts: {
              ttl: o,
              relay: f,
              prompt: h,
              tag: g,
              id: y,
              attestation: n == null ? void 0 : n.attestation,
            },
          },
          w = `Failed to publish payload, please try again. id:${y} tag:${g}`,
          S = Date.now();
        let $,
          q = 1;
        try {
          for (; $ === void 0; ) {
            if (Date.now() - S > this.publishTimeout) throw new Error(w);
            this.logger.trace(
              { id: y, attempts: q },
              `publisher.publish - attempt ${q}`
            ),
              ($ = await await gi(
                this.rpcPublish(
                  i,
                  s,
                  o,
                  f,
                  h,
                  g,
                  y,
                  n == null ? void 0 : n.attestation
                ).catch((z) => this.logger.warn(z)),
                this.publishTimeout,
                w
              )),
              q++,
              $ ||
                (await new Promise((z) =>
                  setTimeout(z, this.failedPublishTimeout)
                ));
          }
          this.relayer.events.emit(xt.publish, E),
            this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { id: y, topic: i, message: s, opts: n },
            });
        } catch (z) {
          if (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(z),
            (a = n == null ? void 0 : n.internal) != null &&
              a.throwOnFailedPublish)
          )
            throw z;
          this.queue.set(y, E);
        }
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.relayer = e),
      (this.logger = Pt(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Tt(this.logger);
  }
  rpcPublish(e, t, i, s, n, a, o, f) {
    var h, g, y, E;
    const w = {
      method: Yi(s.protocol).publish,
      params: {
        topic: e,
        message: t,
        ttl: i,
        prompt: n,
        tag: a,
        attestation: f,
      },
      id: o,
    };
    return (
      Ot((h = w.params) == null ? void 0 : h.prompt) &&
        ((g = w.params) == null || delete g.prompt),
      Ot((y = w.params) == null ? void 0 : y.tag) &&
        ((E = w.params) == null || delete E.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: w }),
      this.relayer.request(w)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Si.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(xt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(xt.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class o3 {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const i = this.get(e);
        this.exists(e, t) || this.map.set(e, [...i, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const i = this.get(e);
        if (!this.exists(e, t)) return;
        const s = i.filter((n) => n !== t);
        if (!s.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, s);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var c3 = Object.defineProperty,
  h3 = Object.defineProperties,
  f3 = Object.getOwnPropertyDescriptors,
  Nc = Object.getOwnPropertySymbols,
  u3 = Object.prototype.hasOwnProperty,
  d3 = Object.prototype.propertyIsEnumerable,
  Fc = (r, e, t) =>
    e in r
      ? c3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Wi = (r, e) => {
    for (var t in e || (e = {})) u3.call(e, t) && Fc(r, t, e[t]);
    if (Nc) for (var t of Nc(e)) d3.call(e, t) && Fc(r, t, e[t]);
    return r;
  },
  Hn = (r, e) => h3(r, f3(e));
class l3 extends jb {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new o3()),
      (this.events = new Gt.EventEmitter()),
      (this.name = py),
      (this.version = gy),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = lr),
      (this.subscribeTimeout = Z.toMiliseconds(Z.ONE_MINUTE)),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.pendingBatchMessages = []),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()),
          await this.restore()),
          (this.initialized = !0);
      }),
      (this.subscribe = async (i, s) => {
        this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: i, opts: s },
          });
        try {
          const n = ua(s),
            a = {
              topic: i,
              relay: n,
              transportType: s == null ? void 0 : s.transportType,
            };
          this.pending.set(i, a);
          const o = await this.rpcSubscribe(i, n, s);
          return (
            typeof o == "string" &&
              (this.onSubscribe(o, a),
              this.logger.debug("Successfully Subscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: { topic: i, opts: s },
              })),
            o
          );
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(n),
            n)
          );
        }
      }),
      (this.unsubscribe = async (i, s) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (s == null ? void 0 : s.id) < "u"
            ? await this.unsubscribeById(i, s.id, s)
            : await this.unsubscribeByTopic(i, s);
      }),
      (this.isSubscribed = async (i) => {
        if (this.topics.includes(i)) return !0;
        const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
        return await new Promise((n, a) => {
          const o = new Z.Watch();
          o.start(s);
          const f = setInterval(() => {
            !this.pending.has(i) &&
              this.topics.includes(i) &&
              (clearInterval(f), o.stop(s), n(!0)),
              o.elapsed(s) >= by &&
                (clearInterval(f),
                o.stop(s),
                a(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.start = async () => {
        await this.onConnect();
      }),
      (this.stop = async () => {
        await this.onDisconnect();
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = Pt(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {}
    return i;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: i },
      });
    try {
      const s = ua(i);
      await this.rpcUnsubscribe(e, t, s);
      const n = ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: i },
        });
    } catch (s) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(s),
        s)
      );
    }
  }
  async rpcSubscribe(e, t, i) {
    var s;
    (i == null ? void 0 : i.transportType) === Ve.relay &&
      (await this.restartToComplete());
    const n = { method: Yi(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    const a =
      (s = i == null ? void 0 : i.internal) == null
        ? void 0
        : s.throwOnFailedPublish;
    try {
      const o = wr(e + this.clientId);
      if ((i == null ? void 0 : i.transportType) === Ve.link_mode)
        return (
          setTimeout(() => {
            (this.relayer.connected || this.relayer.connecting) &&
              this.relayer.request(n).catch((h) => this.logger.warn(h));
          }, Z.toMiliseconds(Z.ONE_SECOND)),
          o
        );
      const f = await gi(
        this.relayer.request(n).catch((h) => this.logger.warn(h)),
        this.subscribeTimeout,
        `Subscribing to ${e} failed, please try again`
      );
      if (!f && a)
        throw new Error(`Subscribing to ${e} failed, please try again`);
      return f ? o : null;
    } catch (o) {
      if (
        (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(xt.connection_stalled),
        a)
      )
        throw o;
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      i = {
        method: Yi(t.protocol).batchSubscribe,
        params: { topics: e.map((s) => s.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await gi(
        this.relayer.request(i).catch((s) => this.logger.warn(s)),
        this.subscribeTimeout
      );
    } catch {
      this.relayer.events.emit(xt.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const t = e[0].relay,
      i = {
        method: Yi(t.protocol).batchFetchMessages,
        params: { topics: e.map((n) => n.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await gi(
        this.relayer.request(i).catch((n) => this.logger.warn(n)),
        this.subscribeTimeout
      );
    } catch {
      this.relayer.events.emit(xt.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i) {
    const s = {
      method: Yi(i.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s }),
      this.relayer.request(s)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, Hn(Wi({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, Wi({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, i),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, Wi({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(fr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(i.topic, e),
      this.events.emit(fr.deleted, Hn(Wi({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(fr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i), await this.batchSubscribe(i);
      }
    }
    this.events.emit(fr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = Q("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    dr(t) &&
      this.onBatchSubscribe(t.map((i, s) => Hn(Wi({}, e[s]), { id: i })));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t &&
      t.messages &&
      (this.pendingBatchMessages = this.pendingBatchMessages.concat(
        t.messages
      ));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e),
      this.pendingBatchMessages.length &&
        (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),
        (this.pendingBatchMessages = []));
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Si.pulse, async () => {
      await this.checkPending();
    }),
      this.events.on(fr.created, async (e) => {
        const t = fr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(fr.deleted, async (e) => {
        const t = fr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    !this.relayer.connected &&
      !this.relayer.connecting &&
      (await this.relayer.transportOpen()),
      this.restartInProgress &&
        (await new Promise((e) => {
          const t = setInterval(() => {
            this.restartInProgress || (clearInterval(t), e());
          }, this.pollingInterval);
        }));
  }
}
var p3 = Object.defineProperty,
  qc = Object.getOwnPropertySymbols,
  g3 = Object.prototype.hasOwnProperty,
  b3 = Object.prototype.propertyIsEnumerable,
  Lc = (r, e, t) =>
    e in r
      ? p3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Uc = (r, e) => {
    for (var t in e || (e = {})) g3.call(e, t) && Lc(r, t, e[t]);
    if (qc) for (var t of qc(e)) b3.call(e, t) && Lc(r, t, e[t]);
    return r;
  };
class v3 extends Lb {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Gt.EventEmitter()),
      (this.name = hy),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = [
        "socket hang up",
        "stalled",
        "interrupted",
      ]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.heartBeatTimeout = Z.toMiliseconds(
        Z.THIRTY_SECONDS + Z.ONE_SECOND
      )),
      (this.request = async (t) => {
        var i, s;
        this.logger.debug("Publishing Request Payload");
        const n = t.id || Gr().toString();
        await this.toEstablishConnection();
        try {
          const a = this.provider.request(t);
          this.requestsInFlight.set(n, { promise: a, request: t }),
            this.logger.trace(
              {
                id: n,
                method: t.method,
                topic: (i = t.params) == null ? void 0 : i.topic,
              },
              "relayer.request - attempt to publish..."
            );
          const o = await new Promise(async (f, h) => {
            const g = () => {
              h(new Error(`relayer.request - publish interrupted, id: ${n}`));
            };
            this.provider.on(zt.disconnect, g);
            const y = await a;
            this.provider.off(zt.disconnect, g), f(y);
          });
          return (
            this.logger.trace(
              {
                id: n,
                method: t.method,
                topic: (s = t.params) == null ? void 0 : s.topic,
              },
              "relayer.request - published"
            ),
            o
          );
        } catch (a) {
          throw (this.logger.debug(`Failed to Publish Request: ${n}`), a);
        } finally {
          this.requestsInFlight.delete(n);
        }
      }),
      (this.resetPingTimeout = () => {
        if (Js())
          try {
            clearTimeout(this.pingTimeout),
              (this.pingTimeout = setTimeout(() => {
                var t, i, s;
                (s =
                  (i = (t = this.provider) == null ? void 0 : t.connection) ==
                  null
                    ? void 0
                    : i.socket) == null || s.terminate();
              }, this.heartBeatTimeout));
          } catch (t) {
            this.logger.warn(t);
          }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t), this.resetPingTimeout();
      }),
      (this.onConnectHandler = () => {
        this.logger.trace("relayer connected"),
          this.startPingTimeout(),
          this.events.emit(xt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(xt.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(zt.payload, this.onPayloadHandler),
          this.provider.on(zt.connect, this.onConnectHandler),
          this.provider.on(zt.disconnect, this.onDisconnectHandler),
          this.provider.on(zt.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? Pt(e.logger, this.name)
          : ms(wn({ level: e.logger || cy }))),
      (this.messages = new n3(this.logger, e.core)),
      (this.subscriber = new l3(this, this.logger)),
      (this.publisher = new a3(this, this.logger)),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || zf),
      (this.projectId = e.projectId),
      (this.bundleId = zp()),
      (this.provider = {});
  }
  async init() {
    if (
      (this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await Promise.all([this.messages.init(), this.subscriber.init()]),
      (this.initialized = !0),
      this.subscriber.cached.length > 0)
    )
      try {
        await this.transportOpen();
      } catch (e) {
        this.logger.warn(e);
      }
  }
  get context() {
    return Tt(this.logger);
  }
  get connected() {
    var e, t, i;
    return (
      ((i =
        (t = (e = this.provider) == null ? void 0 : e.connection) == null
          ? void 0
          : t.socket) == null
        ? void 0
        : i.readyState) === 1
    );
  }
  get connecting() {
    var e, t, i;
    return (
      ((i =
        (t = (e = this.provider) == null ? void 0 : e.connection) == null
          ? void 0
          : t.socket) == null
        ? void 0
        : i.readyState) === 0
    );
  }
  async publish(e, t, i) {
    this.isInitialized(),
      await this.publisher.publish(e, t, i),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
        transportType: Ve.relay,
      });
  }
  async subscribe(e, t) {
    var i, s, n;
    this.isInitialized(),
      (t == null ? void 0 : t.transportType) === "relay" &&
        (await this.toEstablishConnection());
    const a =
      typeof ((i = t == null ? void 0 : t.internal) == null
        ? void 0
        : i.throwOnFailedPublish) > "u"
        ? !0
        : (s = t == null ? void 0 : t.internal) == null
        ? void 0
        : s.throwOnFailedPublish;
    let o =
        ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "",
      f;
    const h = (g) => {
      g.topic === e && (this.subscriber.off(fr.created, h), f());
    };
    return (
      await Promise.all([
        new Promise((g) => {
          (f = g), this.subscriber.on(fr.created, h);
        }),
        new Promise(async (g, y) => {
          (o =
            (await this.subscriber
              .subscribe(e, Uc({ internal: { throwOnFailedPublish: a } }, t))
              .catch((E) => {
                a && y(E);
              })) || o),
            g();
        }),
      ]),
      o
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    if (
      !this.hasExperiencedNetworkDisruption &&
      this.connected &&
      this.requestsInFlight.size > 0
    )
      try {
        await Promise.all(
          Array.from(this.requestsInFlight.values()).map((e) => e.promise)
        );
      } catch (e) {
        this.logger.warn(e);
      }
    this.hasExperiencedNetworkDisruption || this.connected
      ? await gi(
          this.provider.disconnect(),
          2e3,
          "provider.disconnect()"
        ).catch(() => this.onProviderDisconnect())
      : this.onProviderDisconnect();
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(),
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e), await this.transportDisconnect()),
      await this.createProvider(),
      (this.connectionAttemptInProgress = !0),
      (this.transportExplicitlyClosed = !1);
    try {
      await new Promise(async (t, i) => {
        const s = () => {
          this.provider.off(zt.disconnect, s),
            i(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(zt.disconnect, s),
          await gi(
            this.provider.connect(),
            Z.toMiliseconds(Z.ONE_MINUTE),
            `Socket stalled when trying to connect to ${this.relayUrl}`
          )
            .catch((n) => {
              i(n);
            })
            .finally(() => {
              clearTimeout(this.reconnectTimeout),
                (this.reconnectTimeout = void 0);
            }),
          this.subscriber.start().catch((n) => {
            this.logger.error(n), this.onDisconnectHandler();
          }),
          (this.hasExperiencedNetworkDisruption = !1),
          t();
      });
    } catch (t) {
      this.logger.error(t);
      const i = t;
      if (
        ((this.hasExperiencedNetworkDisruption = !0),
        !this.isConnectionStalled(i.message))
      )
        throw t;
    } finally {
      this.connectionAttemptInProgress = !1;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress ||
      ((this.relayUrl = e || this.relayUrl),
      await this.confirmOnlineStateOrThrow(),
      await this.transportClose(),
      await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await cc()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((i, s) => i.publishedAt - s.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const i of t)
      try {
        await this.onMessageEvent(i);
      } catch (s) {
        this.logger.warn(s);
      }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e, t) {
    const { topic: i } = e;
    if (!t.sessionExists) {
      const s = ht(Z.FIVE_MINUTES),
        n = { topic: i, expiry: s, relay: { protocol: "irn" }, active: !1 };
      await this.core.pairing.pairings.set(i, n);
    }
    this.events.emit(xt.message, e), await this.recordMessageEvent(e);
  }
  startPingTimeout() {
    var e, t, i, s, n;
    if (Js())
      try {
        (t = (e = this.provider) == null ? void 0 : e.connection) != null &&
          t.socket &&
          ((n =
            (s = (i = this.provider) == null ? void 0 : i.connection) == null
              ? void 0
              : s.socket) == null ||
            n.once("ping", () => {
              this.resetPingTimeout();
            })),
          this.resetPingTimeout();
      } catch (a) {
        this.logger.warn(a);
      }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new sr(
      new Uv(
        Kp({
          sdkVersion: va,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const s = this.messages.has(t, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      Ga(e))
    ) {
      if (!e.method.endsWith(fy)) return;
      const t = e.params,
        { topic: i, message: s, publishedAt: n, attestation: a } = t.data,
        o = {
          topic: i,
          message: s,
          publishedAt: n,
          transportType: Ve.relay,
          attestation: a,
        };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(Uc({ type: "event", event: t.id }, o)),
        this.events.emit(t.id, o),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(o);
    } else Sn(e) && this.events.emit(xt.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(xt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = _n(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(zt.payload, this.onPayloadHandler),
      this.provider.off(zt.connect, this.onConnectHandler),
      this.provider.off(zt.disconnect, this.onDisconnectHandler),
      this.provider.off(zt.error, this.onProviderErrorHandler),
      clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await cc();
    Eg(async (t) => {
      e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((i) => this.logger.error(i))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportDisconnect(),
            (this.transportExplicitlyClosed = !1)));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(),
      this.requestsInFlight.clear(),
      clearTimeout(this.pingTimeout),
      this.events.emit(xt.disconnect),
      (this.connectionAttemptInProgress = !1),
      !this.transportExplicitlyClosed &&
        (this.reconnectTimeout ||
          (this.reconnectTimeout = setTimeout(async () => {
            await this.transportOpen().catch((e) => this.logger.error(e));
          }, Z.toMiliseconds(uy))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(),
      !this.connected &&
        (this.connectionAttemptInProgress &&
          (await new Promise((e) => {
            const t = setInterval(() => {
              this.connected && (clearInterval(t), e());
            }, this.connectionStatusPollingInterval);
          })),
        await this.transportOpen());
  }
}
var y3 = Object.defineProperty,
  jc = Object.getOwnPropertySymbols,
  m3 = Object.prototype.hasOwnProperty,
  w3 = Object.prototype.propertyIsEnumerable,
  zc = (r, e, t) =>
    e in r
      ? y3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Bc = (r, e) => {
    for (var t in e || (e = {})) m3.call(e, t) && zc(r, t, e[t]);
    if (jc) for (var t of jc(e)) w3.call(e, t) && zc(r, t, e[t]);
    return r;
  };
class ii extends Ub {
  constructor(e, t, i, s = lr, n = void 0) {
    super(e, t, i, s),
      (this.core = e),
      (this.logger = t),
      (this.name = i),
      (this.map = new Map()),
      (this.version = dy),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.recentlyDeleted = []),
      (this.recentlyDeletedLimit = 200),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((a) => {
            this.getKey && a !== null && !Ot(a)
              ? this.map.set(this.getKey(a), a)
              : Z1(a)
              ? this.map.set(a.id, a)
              : eg(a) && this.map.set(a.topic, a);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (a, o) => {
        this.isInitialized(),
          this.map.has(a)
            ? await this.update(a, o)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: a,
                value: o,
              }),
              this.map.set(a, o),
              await this.persist());
      }),
      (this.get = (a) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: a }),
        this.getData(a)
      )),
      (this.getAll = (a) => (
        this.isInitialized(),
        a
          ? this.values.filter((o) =>
              Object.keys(a).every((f) => zv(o[f], a[f]))
            )
          : this.values
      )),
      (this.update = async (a, o) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: a,
            update: o,
          });
        const f = Bc(Bc({}, this.getData(a)), o);
        this.map.set(a, f), await this.persist();
      }),
      (this.delete = async (a, o) => {
        this.isInitialized(),
          this.map.has(a) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: a,
              reason: o,
            }),
            this.map.delete(a),
            this.addToRecentlyDeleted(a),
            await this.persist());
      }),
      (this.logger = Pt(t, this.name)),
      (this.storagePrefix = s),
      (this.getKey = n);
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e),
      this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
        this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = Q(
          "MISSING_OR_INVALID",
          `Record was recently deleted - ${this.name}: ${e}`
        );
        throw (this.logger.error(s), new Error(s));
      }
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(i), new Error(i));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = Q("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class _3 {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = vy),
      (this.version = yy),
      (this.events = new Da()),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.ignoredPayloadTypes = [Er]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: i }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...i]),
          ]);
      }),
      (this.create = async (i) => {
        this.isInitialized();
        const s = fa(),
          n = await this.core.crypto.setSymKey(s),
          a = ht(Z.FIVE_MINUTES),
          o = { protocol: jf },
          f = {
            topic: n,
            expiry: a,
            relay: o,
            active: !1,
            methods: i == null ? void 0 : i.methods,
          },
          h = rc({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: n,
            symKey: s,
            relay: o,
            expiryTimestamp: a,
            methods: i == null ? void 0 : i.methods,
          });
        return (
          this.events.emit(Kr.create, f),
          this.core.expirer.set(n, a),
          await this.pairings.set(n, f),
          await this.core.relayer.subscribe(n, {
            transportType: i == null ? void 0 : i.transportType,
          }),
          { topic: n, uri: h }
        );
      }),
      (this.pair = async (i) => {
        this.isInitialized();
        const s = this.core.eventClient.createEvent({
          properties: {
            topic: i == null ? void 0 : i.uri,
            trace: [cr.pairing_started],
          },
        });
        this.isValidPair(i, s);
        const {
          topic: n,
          symKey: a,
          relay: o,
          expiryTimestamp: f,
          methods: h,
        } = tc(i.uri);
        (s.props.properties.topic = n),
          s.addTrace(cr.pairing_uri_validation_success),
          s.addTrace(cr.pairing_uri_not_expired);
        let g;
        if (this.pairings.keys.includes(n)) {
          if (
            ((g = this.pairings.get(n)),
            s.addTrace(cr.existing_pairing),
            g.active)
          )
            throw (
              (s.setError(mr.active_pairing_already_exists),
              new Error(
                `Pairing already exists: ${n}. Please try again with a new connection URI.`
              ))
            );
          s.addTrace(cr.pairing_not_expired);
        }
        const y = f || ht(Z.FIVE_MINUTES),
          E = { topic: n, relay: o, expiry: y, active: !1, methods: h };
        this.core.expirer.set(n, y),
          await this.pairings.set(n, E),
          s.addTrace(cr.store_new_pairing),
          i.activatePairing && (await this.activate({ topic: n })),
          this.events.emit(Kr.create, E),
          s.addTrace(cr.emit_inactive_pairing),
          this.core.crypto.keychain.has(n) ||
            (await this.core.crypto.setSymKey(a, n)),
          s.addTrace(cr.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          s.setError(mr.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(n, { relay: o });
        } catch (w) {
          throw (s.setError(mr.subscribe_pairing_topic_failure), w);
        }
        return s.addTrace(cr.subscribe_pairing_topic_success), E;
      }),
      (this.activate = async ({ topic: i }) => {
        this.isInitialized();
        const s = ht(Z.THIRTY_DAYS);
        this.core.expirer.set(i, s),
          await this.pairings.update(i, { active: !0, expiry: s });
      }),
      (this.ping = async (i) => {
        this.isInitialized(), await this.isValidPing(i);
        const { topic: s } = i;
        if (this.pairings.keys.includes(s)) {
          const n = await this.sendRequest(s, "wc_pairingPing", {}),
            { done: a, resolve: o, reject: f } = Hr();
          this.events.once(Ne("pairing_ping", n), ({ error: h }) => {
            h ? f(h) : o();
          }),
            await a();
        }
      }),
      (this.updateExpiry = async ({ topic: i, expiry: s }) => {
        this.isInitialized(), await this.pairings.update(i, { expiry: s });
      }),
      (this.updateMetadata = async ({ topic: i, metadata: s }) => {
        this.isInitialized(),
          await this.pairings.update(i, { peerMetadata: s });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (i) => {
        this.isInitialized(), await this.isValidDisconnect(i);
        const { topic: s } = i;
        this.pairings.keys.includes(s) &&
          (await this.sendRequest(
            s,
            "wc_pairingDelete",
            ke("USER_DISCONNECTED")
          ),
          await this.deletePairing(s));
      }),
      (this.formatUriFromPairing = (i) => {
        this.isInitialized();
        const { topic: s, relay: n, expiry: a, methods: o } = i,
          f = this.core.crypto.keychain.get(s);
        return rc({
          protocol: this.core.protocol,
          version: this.core.version,
          topic: s,
          symKey: f,
          relay: n,
          expiryTimestamp: a,
          methods: o,
        });
      }),
      (this.sendRequest = async (i, s, n) => {
        const a = Tr(s, n),
          o = await this.core.crypto.encode(i, a),
          f = Vi[s].req;
        return (
          this.core.history.set(i, a), this.core.relayer.publish(i, o, f), a.id
        );
      }),
      (this.sendResult = async (i, s, n) => {
        const a = _n(i, n),
          o = await this.core.crypto.encode(s, a),
          f = await this.core.history.get(s, i),
          h = Vi[f.request.method].res;
        await this.core.relayer.publish(s, o, h),
          await this.core.history.resolve(a);
      }),
      (this.sendError = async (i, s, n) => {
        const a = En(i, n),
          o = await this.core.crypto.encode(s, a),
          f = await this.core.history.get(s, i),
          h = Vi[f.request.method]
            ? Vi[f.request.method].res
            : Vi.unregistered_method.res;
        await this.core.relayer.publish(s, o, h),
          await this.core.history.resolve(a);
      }),
      (this.deletePairing = async (i, s) => {
        await this.core.relayer.unsubscribe(i),
          await Promise.all([
            this.pairings.delete(i, ke("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(i),
            s ? Promise.resolve() : this.core.expirer.del(i),
          ]);
      }),
      (this.cleanup = async () => {
        const i = this.pairings.getAll().filter((s) => Mr(s.expiry));
        await Promise.all(i.map((s) => this.deletePairing(s.topic)));
      }),
      (this.onRelayEventRequest = (i) => {
        const { topic: s, payload: n } = i;
        switch (n.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(s, n);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(s, n);
          default:
            return this.onUnknownRpcMethodRequest(s, n);
        }
      }),
      (this.onRelayEventResponse = async (i) => {
        const { topic: s, payload: n } = i,
          a = (await this.core.history.get(s, n.id)).request.method;
        switch (a) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(s, n);
          default:
            return this.onUnknownRpcMethodResponse(a);
        }
      }),
      (this.onPairingPingRequest = async (i, s) => {
        const { id: n } = s;
        try {
          this.isValidPing({ topic: i }),
            await this.sendResult(n, i, !0),
            this.events.emit(Kr.ping, { id: n, topic: i });
        } catch (a) {
          await this.sendError(n, i, a), this.logger.error(a);
        }
      }),
      (this.onPairingPingResponse = (i, s) => {
        const { id: n } = s;
        setTimeout(() => {
          hr(s)
            ? this.events.emit(Ne("pairing_ping", n), {})
            : kt(s) &&
              this.events.emit(Ne("pairing_ping", n), { error: s.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (i, s) => {
        const { id: n } = s;
        try {
          this.isValidDisconnect({ topic: i }),
            await this.deletePairing(i),
            this.events.emit(Kr.delete, { id: n, topic: i });
        } catch (a) {
          await this.sendError(n, i, a), this.logger.error(a);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (i, s) => {
        const { id: n, method: a } = s;
        try {
          if (this.registeredMethods.includes(a)) return;
          const o = ke("WC_METHOD_UNSUPPORTED", a);
          await this.sendError(n, i, o), this.logger.error(o);
        } catch (o) {
          await this.sendError(n, i, o), this.logger.error(o);
        }
      }),
      (this.onUnknownRpcMethodResponse = (i) => {
        this.registeredMethods.includes(i) ||
          this.logger.error(ke("WC_METHOD_UNSUPPORTED", i));
      }),
      (this.isValidPair = (i, s) => {
        var n;
        if (!At(i)) {
          const { message: o } = Q("MISSING_OR_INVALID", `pair() params: ${i}`);
          throw (s.setError(mr.malformed_pairing_uri), new Error(o));
        }
        if (!Q1(i.uri)) {
          const { message: o } = Q(
            "MISSING_OR_INVALID",
            `pair() uri: ${i.uri}`
          );
          throw (s.setError(mr.malformed_pairing_uri), new Error(o));
        }
        const a = tc(i == null ? void 0 : i.uri);
        if (!((n = a == null ? void 0 : a.relay) != null && n.protocol)) {
          const { message: o } = Q(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw (s.setError(mr.malformed_pairing_uri), new Error(o));
        }
        if (!(a != null && a.symKey)) {
          const { message: o } = Q("MISSING_OR_INVALID", "pair() uri#symKey");
          throw (s.setError(mr.malformed_pairing_uri), new Error(o));
        }
        if (
          a != null &&
          a.expiryTimestamp &&
          Z.toMiliseconds(a == null ? void 0 : a.expiryTimestamp) < Date.now()
        ) {
          s.setError(mr.pairing_expired);
          const { message: o } = Q(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(o);
        }
      }),
      (this.isValidPing = async (i) => {
        if (!At(i)) {
          const { message: n } = Q("MISSING_OR_INVALID", `ping() params: ${i}`);
          throw new Error(n);
        }
        const { topic: s } = i;
        await this.isValidPairingTopic(s);
      }),
      (this.isValidDisconnect = async (i) => {
        if (!At(i)) {
          const { message: n } = Q(
            "MISSING_OR_INVALID",
            `disconnect() params: ${i}`
          );
          throw new Error(n);
        }
        const { topic: s } = i;
        await this.isValidPairingTopic(s);
      }),
      (this.isValidPairingTopic = async (i) => {
        if (!ct(i, !1)) {
          const { message: s } = Q(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${i}`
          );
          throw new Error(s);
        }
        if (!this.pairings.keys.includes(i)) {
          const { message: s } = Q(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${i}`
          );
          throw new Error(s);
        }
        if (Mr(this.pairings.get(i).expiry)) {
          await this.deletePairing(i);
          const { message: s } = Q("EXPIRED", `pairing topic: ${i}`);
          throw new Error(s);
        }
      }),
      (this.core = e),
      (this.logger = Pt(t, this.name)),
      (this.pairings = new ii(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Tt(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(xt.message, async (e) => {
      const { topic: t, message: i, transportType: s } = e;
      if (
        !this.pairings.keys.includes(t) ||
        s === Ve.link_mode ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
      )
        return;
      const n = await this.core.crypto.decode(t, i);
      try {
        Ga(n)
          ? (this.core.history.set(t, n),
            this.onRelayEventRequest({ topic: t, payload: n }))
          : Sn(n) &&
            (await this.core.history.resolve(n),
            await this.onRelayEventResponse({ topic: t, payload: n }),
            this.core.history.delete(t, n.id));
      } catch (a) {
        this.logger.error(a);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Bt.expired, async (e) => {
      const { topic: t } = uf(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(Kr.expire, { topic: t }));
    });
  }
}
class E3 extends Nb {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new Gt.EventEmitter()),
      (this.name = my),
      (this.version = wy),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((i) => this.records.set(i.id, i)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (i, s, n) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: i,
            request: s,
            chainId: n,
          }),
          this.records.has(s.id))
        )
          return;
        const a = {
          id: s.id,
          topic: i,
          request: { method: s.method, params: s.params || null },
          chainId: n,
          expiry: ht(Z.THIRTY_DAYS),
        };
        this.records.set(a.id, a),
          this.persist(),
          this.events.emit(Zt.created, a);
      }),
      (this.resolve = async (i) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: i }),
          !this.records.has(i.id))
        )
          return;
        const s = await this.getRecord(i.id);
        typeof s.response > "u" &&
          ((s.response = kt(i) ? { error: i.error } : { result: i.result }),
          this.records.set(s.id, s),
          this.persist(),
          this.events.emit(Zt.updated, s));
      }),
      (this.get = async (i, s) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: i, id: s }),
        await this.getRecord(s)
      )),
      (this.delete = (i, s) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: s }),
          this.values.forEach((n) => {
            if (n.topic === i) {
              if (typeof s < "u" && n.id !== s) return;
              this.records.delete(n.id), this.events.emit(Zt.deleted, n);
            }
          }),
          this.persist();
      }),
      (this.exists = async (i, s) => (
        this.isInitialized(),
        this.records.has(s) ? (await this.getRecord(s)).topic === i : !1
      )),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.logger = Pt(t, this.name));
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const i = {
          topic: t.topic,
          request: Tr(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(i);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Zt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = Q("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Zt.created, (e) => {
      const t = Zt.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e });
    }),
      this.events.on(Zt.updated, (e) => {
        const t = Zt.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
      this.events.on(Zt.deleted, (e) => {
        const t = Zt.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
      this.core.heartbeat.on(Si.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((t) => {
        Z.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.records.delete(t.id),
          this.events.emit(Zt.deleted, t, !1),
          (e = !0));
      }),
        e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class S3 extends zb {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new Gt.EventEmitter()),
      (this.name = _y),
      (this.version = Ey),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = lr),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((i) => this.expirations.set(i.target, i)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (i) => {
        try {
          const s = this.formatTarget(i);
          return typeof this.getExpiration(s) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (i, s) => {
        this.isInitialized();
        const n = this.formatTarget(i),
          a = { target: n, expiry: s };
        this.expirations.set(n, a),
          this.checkExpiry(n, a),
          this.events.emit(Bt.created, { target: n, expiration: a });
      }),
      (this.get = (i) => {
        this.isInitialized();
        const s = this.formatTarget(i);
        return this.getExpiration(s);
      }),
      (this.del = (i) => {
        if ((this.isInitialized(), this.has(i))) {
          const s = this.formatTarget(i),
            n = this.getExpiration(s);
          this.expirations.delete(s),
            this.events.emit(Bt.deleted, { target: s, expiration: n });
        }
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.logger = Pt(t, this.name));
  }
  get context() {
    return Tt(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return Vp(e);
    if (typeof e == "number") return Gp(e);
    const { message: t } = Q("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Bt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = Q("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.warn(i), new Error(i));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    Z.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(Bt.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Si.pulse, () => this.checkExpirations()),
      this.events.on(Bt.created, (e) => {
        const t = Bt.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Bt.expired, (e) => {
        const t = Bt.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Bt.deleted, (e) => {
        const t = Bt.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class I3 extends Bb {
  constructor(e, t, i) {
    super(e, t, i),
      (this.core = e),
      (this.logger = t),
      (this.store = i),
      (this.name = Sy),
      (this.verifyUrlV3 = xy),
      (this.storagePrefix = lr),
      (this.version = Uf),
      (this.init = async () => {
        var s;
        this.isDevEnv ||
          ((this.publicKey = await this.store.getItem(this.storeKey)),
          this.publicKey &&
            Z.toMiliseconds(
              (s = this.publicKey) == null ? void 0 : s.expiresAt
            ) < Date.now() &&
            (this.logger.debug("verify v2 public key expired"),
            await this.removePublicKey()));
      }),
      (this.register = async (s) => {
        if (!ps() || this.isDevEnv) return;
        const n = window.location.origin,
          { id: a, decryptedId: o } = s,
          f = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${a}&decryptedId=${o}`;
        try {
          const h = qf(),
            g = this.startAbortTimer(Z.ONE_SECOND * 5),
            y = await new Promise((E, w) => {
              const S = () => {
                window.removeEventListener("message", q),
                  h.body.removeChild($),
                  w("attestation aborted");
              };
              this.abortController.signal.addEventListener("abort", S);
              const $ = h.createElement("iframe");
              ($.src = f),
                ($.style.display = "none"),
                $.addEventListener("error", S, {
                  signal: this.abortController.signal,
                });
              const q = (z) => {
                if (z.data && typeof z.data == "string")
                  try {
                    const C = JSON.parse(z.data);
                    if (C.type === "verify_attestation") {
                      if (ca(C.attestation).payload.id !== a) return;
                      clearInterval(g),
                        h.body.removeChild($),
                        this.abortController.signal.removeEventListener(
                          "abort",
                          S
                        ),
                        window.removeEventListener("message", q),
                        E(C.attestation === null ? "" : C.attestation);
                    }
                  } catch (C) {
                    this.logger.warn(C);
                  }
              };
              h.body.appendChild($),
                window.addEventListener("message", q, {
                  signal: this.abortController.signal,
                });
            });
          return this.logger.debug("jwt attestation", y), y;
        } catch (h) {
          this.logger.warn(h);
        }
        return "";
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const { attestationId: n, hash: a, encryptedId: o } = s;
        if (n === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (n) {
          if (ca(n).payload.id !== o) return;
          const h = await this.isValidJwtAttestation(n);
          if (h) {
            if (!h.isVerified) {
              this.logger.warn(
                "resolve: jwt attestation: origin url not verified"
              );
              return;
            }
            return h;
          }
        }
        if (!a) return;
        const f = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        return this.fetchAttestation(a, f);
      }),
      (this.fetchAttestation = async (s, n) => {
        this.logger.debug(`resolving attestation: ${s} from url: ${n}`);
        const a = this.startAbortTimer(Z.ONE_SECOND * 5),
          o = await fetch(`${n}/attestation/${s}?v2Supported=true`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(a), o.status === 200 ? await o.json() : void 0;
      }),
      (this.getVerifyUrl = (s) => {
        let n = s || es;
        return (
          Dy.includes(n) ||
            (this.logger.info(
              `verify url: ${n}, not included in trusted list, assigning default: ${es}`
            ),
            (n = es)),
          n
        );
      }),
      (this.fetchPublicKey = async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const s = this.startAbortTimer(Z.FIVE_SECONDS),
            n = await fetch(`${this.verifyUrlV3}/public-key`, {
              signal: this.abortController.signal,
            });
          return clearTimeout(s), await n.json();
        } catch (s) {
          this.logger.warn(s);
        }
      }),
      (this.persistPublicKey = async (s) => {
        this.logger.debug("persisting public key to local storage", s),
          await this.store.setItem(this.storeKey, s),
          (this.publicKey = s);
      }),
      (this.removePublicKey = async () => {
        this.logger.debug("removing verify v2 public key from storage"),
          await this.store.removeItem(this.storeKey),
          (this.publicKey = void 0);
      }),
      (this.isValidJwtAttestation = async (s) => {
        const n = await this.getPublicKey();
        try {
          if (n) return this.validateAttestation(s, n);
        } catch (o) {
          this.logger.error(o),
            this.logger.warn("error validating attestation");
        }
        const a = await this.fetchAndPersistPublicKey();
        try {
          if (a) return this.validateAttestation(s, a);
        } catch (o) {
          this.logger.error(o),
            this.logger.warn("error validating attestation");
        }
      }),
      (this.getPublicKey = async () =>
        this.publicKey
          ? this.publicKey
          : await this.fetchAndPersistPublicKey()),
      (this.fetchAndPersistPublicKey = async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (n) => {
          const a = await this.fetchPublicKey();
          a && (await this.persistPublicKey(a), n(a));
        });
        const s = await this.fetchPromise;
        return (this.fetchPromise = void 0), s;
      }),
      (this.validateAttestation = (s, n) => {
        const a = R1(s, n.publicKey),
          o = { hasExpired: Z.toMiliseconds(a.exp) < Date.now(), payload: a };
        if (o.hasExpired)
          throw (
            (this.logger.warn("resolve: jwt attestation expired"),
            new Error("JWT attestation expired"))
          );
        return {
          origin: o.payload.origin,
          isScam: o.payload.isScam,
          isVerified: o.payload.isVerified,
        };
      }),
      (this.logger = Pt(t, this.name)),
      (this.abortController = new AbortController()),
      (this.isDevEnv = ja()),
      this.init();
  }
  get storeKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//verify:public:key"
    );
  }
  get context() {
    return Tt(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), Z.toMiliseconds(e))
    );
  }
}
class x3 extends kb {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = Py),
      (this.registerDeviceToken = async (i) => {
        const {
            clientId: s,
            token: n,
            notificationType: a,
            enableEncrypted: o = !1,
          } = i,
          f = `${My}/${this.projectId}/clients`;
        await fetch(f, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: s,
            type: a,
            token: n,
            always_raw: o,
          }),
        });
      }),
      (this.logger = Pt(t, this.context));
  }
}
var D3 = Object.defineProperty,
  kc = Object.getOwnPropertySymbols,
  P3 = Object.prototype.hasOwnProperty,
  M3 = Object.prototype.propertyIsEnumerable,
  Hc = (r, e, t) =>
    e in r
      ? D3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Ji = (r, e) => {
    for (var t in e || (e = {})) P3.call(e, t) && Hc(r, t, e[t]);
    if (kc) for (var t of kc(e)) M3.call(e, t) && Hc(r, t, e[t]);
    return r;
  };
class A3 extends Hb {
  constructor(e, t, i = !0) {
    super(e, t, i),
      (this.core = e),
      (this.logger = t),
      (this.context = Oy),
      (this.storagePrefix = lr),
      (this.storageVersion = Ay),
      (this.events = new Map()),
      (this.shouldPersist = !1),
      (this.init = async () => {
        if (!ja())
          try {
            const s = {
              eventId: ko(),
              timestamp: Date.now(),
              domain: this.getAppDomain(),
              props: {
                event: "INIT",
                type: "",
                properties: {
                  client_id: await this.core.crypto.getClientId(),
                  user_agent: of(
                    this.core.relayer.protocol,
                    this.core.relayer.version,
                    va
                  ),
                },
              },
            };
            await this.sendEvent([s]);
          } catch (s) {
            this.logger.warn(s);
          }
      }),
      (this.createEvent = (s) => {
        const {
            event: n = "ERROR",
            type: a = "",
            properties: { topic: o, trace: f },
          } = s,
          h = ko(),
          g = this.core.projectId || "",
          y = Date.now(),
          E = Ji(
            {
              eventId: h,
              timestamp: y,
              props: { event: n, type: a, properties: { topic: o, trace: f } },
              bundleId: g,
              domain: this.getAppDomain(),
            },
            this.setMethods(h)
          );
        return (
          this.telemetryEnabled &&
            (this.events.set(h, E), (this.shouldPersist = !0)),
          E
        );
      }),
      (this.getEvent = (s) => {
        const { eventId: n, topic: a } = s;
        if (n) return this.events.get(n);
        const o = Array.from(this.events.values()).find(
          (f) => f.props.properties.topic === a
        );
        if (o) return Ji(Ji({}, o), this.setMethods(o.eventId));
      }),
      (this.deleteEvent = (s) => {
        const { eventId: n } = s;
        this.events.delete(n), (this.shouldPersist = !0);
      }),
      (this.setEventListeners = () => {
        this.core.heartbeat.on(Si.pulse, async () => {
          this.shouldPersist && (await this.persist()),
            this.events.forEach((s) => {
              Z.fromMiliseconds(Date.now()) - Z.fromMiliseconds(s.timestamp) >
                Cy &&
                (this.events.delete(s.eventId), (this.shouldPersist = !0));
            });
        });
      }),
      (this.setMethods = (s) => ({
        addTrace: (n) => this.addTrace(s, n),
        setError: (n) => this.setError(s, n),
      })),
      (this.addTrace = (s, n) => {
        const a = this.events.get(s);
        a &&
          (a.props.properties.trace.push(n),
          this.events.set(s, a),
          (this.shouldPersist = !0));
      }),
      (this.setError = (s, n) => {
        const a = this.events.get(s);
        a &&
          ((a.props.type = n),
          (a.timestamp = Date.now()),
          this.events.set(s, a),
          (this.shouldPersist = !0));
      }),
      (this.persist = async () => {
        await this.core.storage.setItem(
          this.storageKey,
          Array.from(this.events.values())
        ),
          (this.shouldPersist = !1);
      }),
      (this.restore = async () => {
        try {
          const s = (await this.core.storage.getItem(this.storageKey)) || [];
          if (!s.length) return;
          s.forEach((n) => {
            this.events.set(
              n.eventId,
              Ji(Ji({}, n), this.setMethods(n.eventId))
            );
          });
        } catch (s) {
          this.logger.warn(s);
        }
      }),
      (this.submit = async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const s = [];
        for (const [n, a] of this.events) a.props.type && s.push(a);
        if (s.length !== 0)
          try {
            if ((await this.sendEvent(s)).ok)
              for (const n of s)
                this.events.delete(n.eventId), (this.shouldPersist = !0);
          } catch (n) {
            this.logger.warn(n);
          }
      }),
      (this.sendEvent = async (s) => {
        const n = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(
          `${Ty}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${va}${n}`,
          { method: "POST", body: JSON.stringify(s) }
        );
      }),
      (this.getAppDomain = () => af().url),
      (this.logger = Pt(t, this.context)),
      (this.telemetryEnabled = i),
      i
        ? this.restore().then(async () => {
            await this.submit(), this.setEventListeners();
          })
        : this.persist();
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.storageVersion +
      this.core.customStoragePrefix +
      "//" +
      this.context
    );
  }
}
var O3 = Object.defineProperty,
  Kc = Object.getOwnPropertySymbols,
  C3 = Object.prototype.hasOwnProperty,
  T3 = Object.prototype.propertyIsEnumerable,
  Vc = (r, e, t) =>
    e in r
      ? O3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Gc = (r, e) => {
    for (var t in e || (e = {})) C3.call(e, t) && Vc(r, t, e[t]);
    if (Kc) for (var t of Kc(e)) T3.call(e, t) && Vc(r, t, e[t]);
    return r;
  };
class Ja extends $b {
  constructor(e) {
    var t;
    super(e),
      (this.protocol = Lf),
      (this.version = Uf),
      (this.name = Wa),
      (this.events = new Gt.EventEmitter()),
      (this.initialized = !1),
      (this.on = (a, o) => this.events.on(a, o)),
      (this.once = (a, o) => this.events.once(a, o)),
      (this.off = (a, o) => this.events.off(a, o)),
      (this.removeListener = (a, o) => this.events.removeListener(a, o)),
      (this.dispatchEnvelope = ({ topic: a, message: o, sessionExists: f }) => {
        if (!a || !o) return;
        const h = {
          topic: a,
          message: o,
          publishedAt: Date.now(),
          transportType: Ve.link_mode,
        };
        this.relayer.onLinkMessageEvent(h, { sessionExists: f });
      }),
      (this.projectId = e == null ? void 0 : e.projectId),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || zf),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const i = wn({
        level:
          typeof (e == null ? void 0 : e.logger) == "string" && e.logger
            ? e.logger
            : Qv.logger,
      }),
      { logger: s, chunkLoggerController: n } = Rb({
        opts: i,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger,
      });
    (this.logChunkController = n),
      (t = this.logChunkController) != null &&
        t.downloadLogsBlobInBrowser &&
        (window.downloadLogsBlobInBrowser = async () => {
          var a, o;
          (a = this.logChunkController) != null &&
            a.downloadLogsBlobInBrowser &&
            ((o = this.logChunkController) == null ||
              o.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId(),
              }));
        }),
      (this.logger = Pt(s, this.name)),
      (this.heartbeat = new Dg()),
      (this.crypto = new s3(
        this,
        this.logger,
        e == null ? void 0 : e.keychain
      )),
      (this.history = new E3(this, this.logger)),
      (this.expirer = new S3(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new sb(Gc(Gc({}, Zv), e == null ? void 0 : e.storageOptions))),
      (this.relayer = new v3({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new _3(this, this.logger)),
      (this.verify = new I3(this, this.logger, this.storage)),
      (this.echoClient = new x3(this.projectId || "", this.logger)),
      (this.linkModeSupportedApps = []),
      (this.eventClient = new A3(
        this,
        this.logger,
        e == null ? void 0 : e.telemetryEnabled
      ));
  }
  static async init(e) {
    const t = new Ja(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(ly, i), t;
  }
  get context() {
    return Tt(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null
      ? void 0
      : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e) {
    this.linkModeSupportedApps.includes(e) ||
      (this.linkModeSupportedApps.push(e),
      await this.storage.setItem(Mc, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        this.eventClient.init(),
        (this.linkModeSupportedApps = (await this.storage.getItem(Mc)) || []),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const R3 = Ja;
let $3 = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  N3 = class {
    constructor(e) {
      this.client = e;
    }
  };
const Zf = "wc",
  eu = 2,
  tu = "client",
  Ya = `${Zf}@${eu}:${tu}:`,
  Kn = {
    name: tu,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.org",
  },
  Wc = "WALLETCONNECT_DEEPLINK_CHOICE",
  F3 = "proposal",
  ru = "Proposal expired",
  q3 = "session",
  hi = Z.SEVEN_DAYS,
  L3 = "engine",
  ut = {
    wc_sessionPropose: {
      req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: Z.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: Z.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  Vn = { min: Z.FIVE_MINUTES, max: Z.SEVEN_DAYS },
  or = { idle: "IDLE", active: "ACTIVE" },
  U3 = "request",
  j3 = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate",
  ],
  z3 = "wc",
  B3 = "auth",
  k3 = "authKeys",
  H3 = "pairingTopics",
  K3 = "requests",
  xn = `${z3}@${1.5}:${B3}:`,
  zs = `${xn}:PUB_KEY`;
var V3 = Object.defineProperty,
  G3 = Object.defineProperties,
  W3 = Object.getOwnPropertyDescriptors,
  Jc = Object.getOwnPropertySymbols,
  J3 = Object.prototype.hasOwnProperty,
  Y3 = Object.prototype.propertyIsEnumerable,
  Yc = (r, e, t) =>
    e in r
      ? V3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  st = (r, e) => {
    for (var t in e || (e = {})) J3.call(e, t) && Yc(r, t, e[t]);
    if (Jc) for (var t of Jc(e)) Y3.call(e, t) && Yc(r, t, e[t]);
    return r;
  },
  tr = (r, e) => G3(r, W3(e));
class X3 extends N3 {
  constructor(e) {
    super(e),
      (this.name = L3),
      (this.events = new Da()),
      (this.initialized = !1),
      (this.requestQueue = { state: or.idle, queue: [] }),
      (this.sessionRequestQueue = { state: or.idle, queue: [] }),
      (this.requestQueueDelay = Z.ONE_SECOND),
      (this.expectedPairingMethodMap = new Map()),
      (this.recentlyDeletedMap = new Map()),
      (this.recentlyDeletedLimit = 200),
      (this.relayMessageCache = []),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          await this.registerLinkModeListeners(),
          this.client.core.pairing.register({ methods: Object.keys(ut) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, Z.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const i = tr(st({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(i);
        const {
          pairingTopic: s,
          requiredNamespaces: n,
          optionalNamespaces: a,
          sessionProperties: o,
          relays: f,
        } = i;
        let h = s,
          g,
          y = !1;
        try {
          h && (y = this.client.core.pairing.pairings.get(h).active);
        } catch (A) {
          throw (
            (this.client.logger.error(`connect() -> pairing.get(${h}) failed`),
            A)
          );
        }
        if (!h || !y) {
          const { topic: A, uri: T } = await this.client.core.pairing.create();
          (h = A), (g = T);
        }
        if (!h) {
          const { message: A } = Q(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${h}`
          );
          throw new Error(A);
        }
        const E = await this.client.core.crypto.generateKeyPair(),
          w = ut.wc_sessionPropose.req.ttl || Z.FIVE_MINUTES,
          S = ht(w),
          $ = st(
            {
              requiredNamespaces: n,
              optionalNamespaces: a,
              relays: f ?? [{ protocol: jf }],
              proposer: { publicKey: E, metadata: this.client.metadata },
              expiryTimestamp: S,
              pairingTopic: h,
            },
            o && { sessionProperties: o }
          ),
          { reject: q, resolve: z, done: C } = Hr(w, ru);
        this.events.once(
          Ne("session_connect"),
          async ({ error: A, session: T }) => {
            if (A) q(A);
            else if (T) {
              T.self.publicKey = E;
              const R = tr(st({}, T), {
                pairingTopic: $.pairingTopic,
                requiredNamespaces: $.requiredNamespaces,
                optionalNamespaces: $.optionalNamespaces,
                transportType: Ve.relay,
              });
              await this.client.session.set(T.topic, R),
                await this.setExpiry(T.topic, T.expiry),
                h &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: h,
                    metadata: T.peer.metadata,
                  })),
                this.cleanupDuplicatePairings(R),
                z(R);
            }
          }
        );
        const L = await this.sendRequest({
          topic: h,
          method: "wc_sessionPropose",
          params: $,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(L, st({ id: L }, $)), { uri: g, approval: C }
        );
      }),
      (this.pair = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(t);
        } catch (i) {
          throw (this.client.logger.error("pair() failed"), i);
        }
      }),
      (this.approve = async (t) => {
        var i, s, n;
        const a = this.client.core.eventClient.createEvent({
          properties: {
            topic:
              (i = t == null ? void 0 : t.id) == null ? void 0 : i.toString(),
            trace: [er.session_approve_started],
          },
        });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (P) {
          throw (a.setError(Br.no_internet_connection), P);
        }
        try {
          await this.isValidProposalId(t == null ? void 0 : t.id);
        } catch (P) {
          throw (
            (this.client.logger.error(
              `approve() -> proposal.get(${t == null ? void 0 : t.id}) failed`
            ),
            a.setError(Br.proposal_not_found),
            P)
          );
        }
        try {
          await this.isValidApprove(t);
        } catch (P) {
          throw (
            (this.client.logger.error("approve() -> isValidApprove() failed"),
            a.setError(Br.session_approve_namespace_validation_failure),
            P)
          );
        }
        const {
            id: o,
            relayProtocol: f,
            namespaces: h,
            sessionProperties: g,
            sessionConfig: y,
          } = t,
          E = this.client.proposal.get(o);
        this.client.core.eventClient.deleteEvent({ eventId: a.eventId });
        const {
          pairingTopic: w,
          proposer: S,
          requiredNamespaces: $,
          optionalNamespaces: q,
        } = E;
        let z =
          (s = this.client.core.eventClient) == null
            ? void 0
            : s.getEvent({ topic: w });
        z ||
          (z =
            (n = this.client.core.eventClient) == null
              ? void 0
              : n.createEvent({
                  type: er.session_approve_started,
                  properties: {
                    topic: w,
                    trace: [
                      er.session_approve_started,
                      er.session_namespaces_validation_success,
                    ],
                  },
                }));
        const C = await this.client.core.crypto.generateKeyPair(),
          L = S.publicKey,
          A = await this.client.core.crypto.generateSharedKey(C, L),
          T = st(
            st(
              {
                relay: { protocol: f ?? "irn" },
                namespaces: h,
                controller: { publicKey: C, metadata: this.client.metadata },
                expiry: ht(hi),
              },
              g && { sessionProperties: g }
            ),
            y && { sessionConfig: y }
          ),
          R = Ve.relay;
        z.addTrace(er.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(A, { transportType: R });
        } catch (P) {
          throw (z.setError(Br.subscribe_session_topic_failure), P);
        }
        z.addTrace(er.subscribe_session_topic_success);
        const l = tr(st({}, T), {
          topic: A,
          requiredNamespaces: $,
          optionalNamespaces: q,
          pairingTopic: w,
          acknowledged: !1,
          self: T.controller,
          peer: { publicKey: S.publicKey, metadata: S.metadata },
          controller: C,
          transportType: Ve.relay,
        });
        await this.client.session.set(A, l), z.addTrace(er.store_session);
        try {
          z.addTrace(er.publishing_session_settle),
            await this.sendRequest({
              topic: A,
              method: "wc_sessionSettle",
              params: T,
              throwOnFailedPublish: !0,
            }).catch((P) => {
              throw (
                (z == null || z.setError(Br.session_settle_publish_failure), P)
              );
            }),
            z.addTrace(er.session_settle_publish_success),
            z.addTrace(er.publishing_session_approve),
            await this.sendResult({
              id: o,
              topic: w,
              result: {
                relay: { protocol: f ?? "irn" },
                responderPublicKey: C,
              },
              throwOnFailedPublish: !0,
            }).catch((P) => {
              throw (
                (z == null || z.setError(Br.session_approve_publish_failure), P)
              );
            }),
            z.addTrace(er.session_approve_publish_success);
        } catch (P) {
          throw (
            (this.client.logger.error(P),
            this.client.session.delete(A, ke("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(A),
            P)
          );
        }
        return (
          this.client.core.eventClient.deleteEvent({ eventId: z.eventId }),
          await this.client.core.pairing.updateMetadata({
            topic: w,
            metadata: S.metadata,
          }),
          await this.client.proposal.delete(o, ke("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: w }),
          await this.setExpiry(A, ht(hi)),
          {
            topic: A,
            acknowledged: () => Promise.resolve(this.client.session.get(A)),
          }
        );
      }),
      (this.reject = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidReject(t);
        } catch (a) {
          throw (
            (this.client.logger.error("reject() -> isValidReject() failed"), a)
          );
        }
        const { id: i, reason: s } = t;
        let n;
        try {
          n = this.client.proposal.get(i).pairingTopic;
        } catch (a) {
          throw (
            (this.client.logger.error(`reject() -> proposal.get(${i}) failed`),
            a)
          );
        }
        n &&
          (await this.sendError({
            id: i,
            topic: n,
            error: s,
            rpcOpts: ut.wc_sessionPropose.reject,
          }),
          await this.client.proposal.delete(i, ke("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(t);
        } catch (y) {
          throw (
            (this.client.logger.error("update() -> isValidUpdate() failed"), y)
          );
        }
        const { topic: i, namespaces: s } = t,
          { done: n, resolve: a, reject: o } = Hr(),
          f = Ar(),
          h = Gr().toString(),
          g = this.client.session.get(i).namespaces;
        return (
          this.events.once(Ne("session_update", f), ({ error: y }) => {
            y ? o(y) : a();
          }),
          await this.client.session.update(i, { namespaces: s }),
          await this.sendRequest({
            topic: i,
            method: "wc_sessionUpdate",
            params: { namespaces: s },
            throwOnFailedPublish: !0,
            clientRpcId: f,
            relayRpcId: h,
          }).catch((y) => {
            this.client.logger.error(y),
              this.client.session.update(i, { namespaces: g }),
              o(y);
          }),
          { acknowledged: n }
        );
      }),
      (this.extend = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(t);
        } catch (f) {
          throw (
            (this.client.logger.error("extend() -> isValidExtend() failed"), f)
          );
        }
        const { topic: i } = t,
          s = Ar(),
          { done: n, resolve: a, reject: o } = Hr();
        return (
          this.events.once(Ne("session_extend", s), ({ error: f }) => {
            f ? o(f) : a();
          }),
          await this.setExpiry(i, ht(hi)),
          this.sendRequest({
            topic: i,
            method: "wc_sessionExtend",
            params: {},
            clientRpcId: s,
            throwOnFailedPublish: !0,
          }).catch((f) => {
            o(f);
          }),
          { acknowledged: n }
        );
      }),
      (this.request = async (t) => {
        this.isInitialized();
        try {
          await this.isValidRequest(t);
        } catch (S) {
          throw (
            (this.client.logger.error("request() -> isValidRequest() failed"),
            S)
          );
        }
        const {
            chainId: i,
            request: s,
            topic: n,
            expiry: a = ut.wc_sessionRequest.req.ttl,
          } = t,
          o = this.client.session.get(n);
        (o == null ? void 0 : o.transportType) === Ve.relay &&
          (await this.confirmOnlineStateOrThrow());
        const f = Ar(),
          h = Gr().toString(),
          {
            done: g,
            resolve: y,
            reject: E,
          } = Hr(a, "Request expired. Please try again.");
        this.events.once(
          Ne("session_request", f),
          ({ error: S, result: $ }) => {
            S ? E(S) : y($);
          }
        );
        const w = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
        return w
          ? (await this.sendRequest({
              clientRpcId: f,
              relayRpcId: h,
              topic: n,
              method: "wc_sessionRequest",
              params: {
                request: tr(st({}, s), { expiryTimestamp: ht(a) }),
                chainId: i,
              },
              expiry: a,
              throwOnFailedPublish: !0,
              appLink: w,
            }).catch((S) => E(S)),
            this.client.events.emit("session_request_sent", {
              topic: n,
              request: s,
              chainId: i,
              id: f,
            }),
            await g())
          : await Promise.all([
              new Promise(async (S) => {
                await this.sendRequest({
                  clientRpcId: f,
                  relayRpcId: h,
                  topic: n,
                  method: "wc_sessionRequest",
                  params: {
                    request: tr(st({}, s), { expiryTimestamp: ht(a) }),
                    chainId: i,
                  },
                  expiry: a,
                  throwOnFailedPublish: !0,
                }).catch(($) => E($)),
                  this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: s,
                    chainId: i,
                    id: f,
                  }),
                  S();
              }),
              new Promise(async (S) => {
                var $;
                if (!(($ = o.sessionConfig) != null && $.disableDeepLink)) {
                  const q = await Yp(this.client.core.storage, Wc);
                  await Wp({ id: f, topic: n, wcDeepLink: q });
                }
                S();
              }),
              g(),
            ]).then((S) => S[2]);
      }),
      (this.respond = async (t) => {
        this.isInitialized(), await this.isValidRespond(t);
        const { topic: i, response: s } = t,
          { id: n } = s,
          a = this.client.session.get(i);
        a.transportType === Ve.relay &&
          (await this.confirmOnlineStateOrThrow());
        const o = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
        hr(s)
          ? await this.sendResult({
              id: n,
              topic: i,
              result: s.result,
              throwOnFailedPublish: !0,
              appLink: o,
            })
          : kt(s) &&
            (await this.sendError({
              id: n,
              topic: i,
              error: s.error,
              appLink: o,
            })),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(t);
        } catch (s) {
          throw (this.client.logger.error("ping() -> isValidPing() failed"), s);
        }
        const { topic: i } = t;
        if (this.client.session.keys.includes(i)) {
          const s = Ar(),
            n = Gr().toString(),
            { done: a, resolve: o, reject: f } = Hr();
          this.events.once(Ne("session_ping", s), ({ error: h }) => {
            h ? f(h) : o();
          }),
            await Promise.all([
              this.sendRequest({
                topic: i,
                method: "wc_sessionPing",
                params: {},
                throwOnFailedPublish: !0,
                clientRpcId: s,
                relayRpcId: n,
              }),
              a(),
            ]);
        } else
          this.client.core.pairing.pairings.keys.includes(i) &&
            (await this.client.core.pairing.ping({ topic: i }));
      }),
      (this.emit = async (t) => {
        this.isInitialized(),
          await this.confirmOnlineStateOrThrow(),
          await this.isValidEmit(t);
        const { topic: i, event: s, chainId: n } = t,
          a = Gr().toString();
        await this.sendRequest({
          topic: i,
          method: "wc_sessionEvent",
          params: { event: s, chainId: n },
          throwOnFailedPublish: !0,
          relayRpcId: a,
        });
      }),
      (this.disconnect = async (t) => {
        this.isInitialized(),
          await this.confirmOnlineStateOrThrow(),
          await this.isValidDisconnect(t);
        const { topic: i } = t;
        if (this.client.session.keys.includes(i))
          await this.sendRequest({
            topic: i,
            method: "wc_sessionDelete",
            params: ke("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: i, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(i))
          await this.client.core.pairing.disconnect({ topic: i });
        else {
          const { message: s } = Q(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${i}`
          );
          throw new Error(s);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((i) => Y1(i, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.authenticate = async (t, i) => {
        var s;
        this.isInitialized(), this.isValidAuthenticate(t);
        const n =
            i &&
            this.client.core.linkModeSupportedApps.includes(i) &&
            ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode),
          a = n ? Ve.link_mode : Ve.relay;
        a === Ve.relay && (await this.confirmOnlineStateOrThrow());
        const {
            chains: o,
            statement: f = "",
            uri: h,
            domain: g,
            nonce: y,
            type: E,
            exp: w,
            nbf: S,
            methods: $ = [],
            expiry: q,
          } = t,
          z = [...(t.resources || [])],
          { topic: C, uri: L } = await this.client.core.pairing.create({
            methods: ["wc_sessionAuthenticate"],
            transportType: a,
          });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: { topic: C, uri: L },
        });
        const A = await this.client.core.crypto.generateKeyPair(),
          T = Ls(A);
        if (
          (await Promise.all([
            this.client.auth.authKeys.set(zs, {
              responseTopic: T,
              publicKey: A,
            }),
            this.client.auth.pairingTopics.set(T, {
              topic: T,
              pairingTopic: C,
            }),
          ]),
          await this.client.core.relayer.subscribe(T, { transportType: a }),
          this.client.logger.info(`sending request to new pairing topic: ${C}`),
          $.length > 0)
        ) {
          const { namespace: x } = pi(o[0]);
          let m = v1(x, "request", $);
          qs(z) && (m = m1(m, z.pop())), z.push(m);
        }
        const R =
            q && q > ut.wc_sessionAuthenticate.req.ttl
              ? q
              : ut.wc_sessionAuthenticate.req.ttl,
          l = {
            authPayload: {
              type: E ?? "caip122",
              chains: o,
              statement: f,
              aud: h,
              domain: g,
              version: "1",
              nonce: y,
              iat: new Date().toISOString(),
              exp: w,
              nbf: S,
              resources: z,
            },
            requester: { publicKey: A, metadata: this.client.metadata },
            expiryTimestamp: ht(R),
          },
          P = {
            eip155: {
              chains: o,
              methods: [...new Set(["personal_sign", ...$])],
              events: ["chainChanged", "accountsChanged"],
            },
          },
          H = {
            requiredNamespaces: {},
            optionalNamespaces: P,
            relays: [{ protocol: "irn" }],
            pairingTopic: C,
            proposer: { publicKey: A, metadata: this.client.metadata },
            expiryTimestamp: ht(ut.wc_sessionPropose.req.ttl),
          },
          { done: Y, resolve: M, reject: c } = Hr(R, "Request expired"),
          v = async ({ error: x, session: m }) => {
            if ((this.events.off(Ne("session_request", b), d), x)) c(x);
            else if (m) {
              (m.self.publicKey = A),
                await this.client.session.set(m.topic, m),
                await this.setExpiry(m.topic, m.expiry),
                C &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: C,
                    metadata: m.peer.metadata,
                  }));
              const u = this.client.session.get(m.topic);
              await this.deleteProposal(_), M({ session: u });
            }
          },
          d = async (x) => {
            var m, u, I;
            if (
              (await this.deletePendingAuthRequest(b, {
                message: "fulfilled",
                code: 0,
              }),
              x.error)
            ) {
              const B = ke("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
              return x.error.code === B.code
                ? void 0
                : (this.events.off(Ne("session_connect"), v),
                  c(x.error.message));
            }
            await this.deleteProposal(_),
              this.events.off(Ne("session_connect"), v);
            const { cacaos: K, responder: k } = x.result,
              W = [],
              V = [];
            for (const B of K) {
              (await Vo({ cacao: B, projectId: this.client.core.projectId })) ||
                (this.client.logger.error(B, "Signature verification failed"),
                c(
                  ke(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  )
                ));
              const { p: F } = B,
                p = qs(F.resources),
                N = [ha(F.iss)],
                J = Ys(F.iss);
              if (p) {
                const X = Go(p),
                  me = Wo(p);
                W.push(...X), N.push(...me);
              }
              for (const X of N) V.push(`${X}:${J}`);
            }
            const ee = await this.client.core.crypto.generateSharedKey(
              A,
              k.publicKey
            );
            let U;
            W.length > 0 &&
              ((U = {
                topic: ee,
                acknowledged: !0,
                self: { publicKey: A, metadata: this.client.metadata },
                peer: k,
                controller: k.publicKey,
                expiry: ht(hi),
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: { protocol: "irn" },
                pairingTopic: C,
                namespaces: ic([...new Set(W)], [...new Set(V)]),
                transportType: a,
              }),
              await this.client.core.relayer.subscribe(ee, {
                transportType: a,
              }),
              await this.client.session.set(ee, U),
              C &&
                (await this.client.core.pairing.updateMetadata({
                  topic: C,
                  metadata: k.metadata,
                })),
              (U = this.client.session.get(ee))),
              (m = this.client.metadata.redirect) != null &&
                m.linkMode &&
                (u = k.metadata.redirect) != null &&
                u.linkMode &&
                (I = k.metadata.redirect) != null &&
                I.universal &&
                i &&
                (this.client.core.addLinkModeSupportedApp(
                  k.metadata.redirect.universal
                ),
                this.client.session.update(ee, {
                  transportType: Ve.link_mode,
                })),
              M({ auths: K, session: U });
          },
          b = Ar(),
          _ = Ar();
        this.events.once(Ne("session_connect"), v),
          this.events.once(Ne("session_request", b), d);
        let D;
        try {
          if (n) {
            const x = Tr("wc_sessionAuthenticate", l, b);
            this.client.core.history.set(C, x);
            const m = await this.client.core.crypto.encode("", x, {
              type: vs,
              encoding: Hi,
            });
            D = Ms(i, C, m);
          } else
            await Promise.all([
              this.sendRequest({
                topic: C,
                method: "wc_sessionAuthenticate",
                params: l,
                expiry: t.expiry,
                throwOnFailedPublish: !0,
                clientRpcId: b,
              }),
              this.sendRequest({
                topic: C,
                method: "wc_sessionPropose",
                params: H,
                expiry: ut.wc_sessionPropose.req.ttl,
                throwOnFailedPublish: !0,
                clientRpcId: _,
              }),
            ]);
        } catch (x) {
          throw (
            (this.events.off(Ne("session_connect"), v),
            this.events.off(Ne("session_request", b), d),
            x)
          );
        }
        return (
          await this.setProposal(_, st({ id: _ }, H)),
          await this.setAuthRequest(b, {
            request: tr(st({}, l), { verifyContext: {} }),
            pairingTopic: C,
            transportType: a,
          }),
          { uri: D ?? L, response: Y }
        );
      }),
      (this.approveSessionAuthenticate = async (t) => {
        const { id: i, auths: s } = t,
          n = this.client.core.eventClient.createEvent({
            properties: {
              topic: i.toString(),
              trace: [kr.authenticated_session_approve_started],
            },
          });
        try {
          this.isInitialized();
        } catch (q) {
          throw (n.setError(Gi.no_internet_connection), q);
        }
        const a = this.getPendingAuthRequest(i);
        if (!a)
          throw (
            (n.setError(Gi.authenticated_session_pending_request_not_found),
            new Error(`Could not find pending auth request with id ${i}`))
          );
        const o = a.transportType || Ve.relay;
        o === Ve.relay && (await this.confirmOnlineStateOrThrow());
        const f = a.requester.publicKey,
          h = await this.client.core.crypto.generateKeyPair(),
          g = Ls(f),
          y = { type: Er, receiverPublicKey: f, senderPublicKey: h },
          E = [],
          w = [];
        for (const q of s) {
          if (
            !(await Vo({ cacao: q, projectId: this.client.core.projectId }))
          ) {
            n.setError(Gi.invalid_cacao);
            const T = ke(
              "SESSION_SETTLEMENT_FAILED",
              "Signature verification failed"
            );
            throw (
              (await this.sendError({
                id: i,
                topic: g,
                error: T,
                encodeOpts: y,
              }),
              new Error(T.message))
            );
          }
          n.addTrace(kr.cacaos_verified);
          const { p: z } = q,
            C = qs(z.resources),
            L = [ha(z.iss)],
            A = Ys(z.iss);
          if (C) {
            const T = Go(C),
              R = Wo(C);
            E.push(...T), L.push(...R);
          }
          for (const T of L) w.push(`${T}:${A}`);
        }
        const S = await this.client.core.crypto.generateSharedKey(h, f);
        n.addTrace(kr.create_authenticated_session_topic);
        let $;
        if ((E == null ? void 0 : E.length) > 0) {
          ($ = {
            topic: S,
            acknowledged: !0,
            self: { publicKey: h, metadata: this.client.metadata },
            peer: { publicKey: f, metadata: a.requester.metadata },
            controller: f,
            expiry: ht(hi),
            authentication: s,
            requiredNamespaces: {},
            optionalNamespaces: {},
            relay: { protocol: "irn" },
            pairingTopic: a.pairingTopic,
            namespaces: ic([...new Set(E)], [...new Set(w)]),
            transportType: o,
          }),
            n.addTrace(kr.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(S, { transportType: o });
          } catch (q) {
            throw (
              (n.setError(Gi.subscribe_authenticated_session_topic_failure), q)
            );
          }
          n.addTrace(kr.subscribe_authenticated_session_topic_success),
            await this.client.session.set(S, $),
            n.addTrace(kr.store_authenticated_session),
            await this.client.core.pairing.updateMetadata({
              topic: a.pairingTopic,
              metadata: a.requester.metadata,
            });
        }
        n.addTrace(kr.publishing_authenticated_session_approve);
        try {
          await this.sendResult({
            topic: g,
            id: i,
            result: {
              cacaos: s,
              responder: { publicKey: h, metadata: this.client.metadata },
            },
            encodeOpts: y,
            throwOnFailedPublish: !0,
            appLink: this.getAppLinkIfEnabled(a.requester.metadata, o),
          });
        } catch (q) {
          throw (
            (n.setError(Gi.authenticated_session_approve_publish_failure), q)
          );
        }
        return (
          await this.client.auth.requests.delete(i, {
            message: "fulfilled",
            code: 0,
          }),
          await this.client.core.pairing.activate({ topic: a.pairingTopic }),
          this.client.core.eventClient.deleteEvent({ eventId: n.eventId }),
          { session: $ }
        );
      }),
      (this.rejectSessionAuthenticate = async (t) => {
        this.isInitialized();
        const { id: i, reason: s } = t,
          n = this.getPendingAuthRequest(i);
        if (!n)
          throw new Error(`Could not find pending auth request with id ${i}`);
        n.transportType === Ve.relay &&
          (await this.confirmOnlineStateOrThrow());
        const a = n.requester.publicKey,
          o = await this.client.core.crypto.generateKeyPair(),
          f = Ls(a),
          h = { type: Er, receiverPublicKey: a, senderPublicKey: o };
        await this.sendError({
          id: i,
          topic: f,
          error: s,
          encodeOpts: h,
          rpcOpts: ut.wc_sessionAuthenticate.reject,
          appLink: this.getAppLinkIfEnabled(
            n.requester.metadata,
            n.transportType
          ),
        }),
          await this.client.auth.requests.delete(i, {
            message: "rejected",
            code: 0,
          }),
          await this.client.proposal.delete(i, ke("USER_DISCONNECTED"));
      }),
      (this.formatAuthMessage = (t) => {
        this.isInitialized();
        const { request: i, iss: s } = t;
        return lf(i, s);
      }),
      (this.processRelayMessageCache = () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0)
            for (; this.relayMessageCache.length > 0; )
              try {
                const t = this.relayMessageCache.shift();
                t && (await this.onRelayMessage(t));
              } catch (t) {
                this.client.logger.error(t);
              }
        }, 50);
      }),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const i = this.client.core.pairing.pairings.get(t.pairingTopic),
              s = this.client.core.pairing.pairings.getAll().filter((n) => {
                var a, o;
                return (
                  ((a = n.peerMetadata) == null ? void 0 : a.url) &&
                  ((o = n.peerMetadata) == null ? void 0 : o.url) ===
                    t.peer.metadata.url &&
                  n.topic &&
                  n.topic !== i.topic
                );
              });
            if (s.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${s.length} duplicate pairing(s)`
            ),
              await Promise.all(
                s.map((n) =>
                  this.client.core.pairing.disconnect({ topic: n.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (i) {
            this.client.logger.error(i);
          }
      }),
      (this.deleteSession = async (t) => {
        var i;
        const {
            topic: s,
            expirerHasDeleted: n = !1,
            emitEvent: a = !0,
            id: o = 0,
          } = t,
          { self: f } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, ke("USER_DISCONNECTED")),
          this.addToRecentlyDeleted(s, "session"),
          this.client.core.crypto.keychain.has(f.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(f.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          n || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(Wc)
            .catch((h) => this.client.logger.warn(h)),
          this.getPendingSessionRequests().forEach((h) => {
            h.topic === s &&
              this.deletePendingSessionRequest(h.id, ke("USER_DISCONNECTED"));
          }),
          s ===
            ((i = this.sessionRequestQueue.queue[0]) == null
              ? void 0
              : i.topic) && (this.sessionRequestQueue.state = or.idle),
          a && this.client.events.emit("session_delete", { id: o, topic: s });
      }),
      (this.deleteProposal = async (t, i) => {
        if (i)
          try {
            const s = this.client.proposal.get(t),
              n = this.client.core.eventClient.getEvent({
                topic: s.pairingTopic,
              });
            n == null || n.setError(Br.proposal_expired);
          } catch {}
        await Promise.all([
          this.client.proposal.delete(t, ke("USER_DISCONNECTED")),
          i ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          this.addToRecentlyDeleted(t, "proposal");
      }),
      (this.deletePendingSessionRequest = async (t, i, s = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, i),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          this.addToRecentlyDeleted(t, "request"),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((n) => n.id !== t)),
          s &&
            ((this.sessionRequestQueue.state = or.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.deletePendingAuthRequest = async (t, i, s = !1) => {
        await Promise.all([
          this.client.auth.requests.delete(t, i),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.setExpiry = async (t, i) => {
        this.client.session.keys.includes(t) &&
          (this.client.core.expirer.set(t, i),
          await this.client.session.update(t, { expiry: i }));
      }),
      (this.setProposal = async (t, i) => {
        this.client.core.expirer.set(t, ht(ut.wc_sessionPropose.req.ttl)),
          await this.client.proposal.set(t, i);
      }),
      (this.setAuthRequest = async (t, i) => {
        const { request: s, pairingTopic: n, transportType: a = Ve.relay } = i;
        this.client.core.expirer.set(t, s.expiryTimestamp),
          await this.client.auth.requests.set(t, {
            authPayload: s.authPayload,
            requester: s.requester,
            expiryTimestamp: s.expiryTimestamp,
            id: t,
            pairingTopic: n,
            verifyContext: s.verifyContext,
            transportType: a,
          });
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: i, topic: s, params: n, verifyContext: a } = t,
          o = n.request.expiryTimestamp || ht(ut.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(i, o),
          await this.client.pendingRequest.set(i, {
            id: i,
            topic: s,
            params: n,
            verifyContext: a,
          });
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: i,
            method: s,
            params: n,
            expiry: a,
            relayRpcId: o,
            clientRpcId: f,
            throwOnFailedPublish: h,
            appLink: g,
          } = t,
          y = Tr(s, n, f);
        let E;
        const w = !!g;
        try {
          const q = w ? Hi : Cr;
          E = await this.client.core.crypto.encode(i, y, { encoding: q });
        } catch (q) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendRequest() -> core.crypto.encode() for topic ${i} failed`
            ),
            q)
          );
        }
        let S;
        if (j3.includes(s)) {
          const q = wr(JSON.stringify(y)),
            z = wr(E);
          S = await this.client.core.verify.register({ id: z, decryptedId: q });
        }
        const $ = ut[s].req;
        if (
          (($.attestation = S),
          a && ($.ttl = a),
          o && ($.id = o),
          this.client.core.history.set(i, y),
          w)
        ) {
          const q = Ms(g, i, E);
          await Re.Linking.openURL(q, this.client.name);
        } else {
          const q = ut[s].req;
          a && (q.ttl = a),
            o && (q.id = o),
            h
              ? ((q.internal = tr(st({}, q.internal), {
                  throwOnFailedPublish: !0,
                })),
                await this.client.core.relayer.publish(i, E, q))
              : this.client.core.relayer
                  .publish(i, E, q)
                  .catch((z) => this.client.logger.error(z));
        }
        return y.id;
      }),
      (this.sendResult = async (t) => {
        const {
            id: i,
            topic: s,
            result: n,
            throwOnFailedPublish: a,
            encodeOpts: o,
            appLink: f,
          } = t,
          h = _n(i, n);
        let g;
        const y = f && typeof (Re == null ? void 0 : Re.Linking) < "u";
        try {
          const w = y ? Hi : Cr;
          g = await this.client.core.crypto.encode(
            s,
            h,
            tr(st({}, o || {}), { encoding: w })
          );
        } catch (w) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendResult() -> core.crypto.encode() for topic ${s} failed`
            ),
            w)
          );
        }
        let E;
        try {
          E = await this.client.core.history.get(s, i);
        } catch (w) {
          throw (
            (this.client.logger.error(
              `sendResult() -> history.get(${s}, ${i}) failed`
            ),
            w)
          );
        }
        if (y) {
          const w = Ms(f, s, g);
          await Re.Linking.openURL(w, this.client.name);
        } else {
          const w = ut[E.request.method].res;
          a
            ? ((w.internal = tr(st({}, w.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, g, w))
            : this.client.core.relayer
                .publish(s, g, w)
                .catch((S) => this.client.logger.error(S));
        }
        await this.client.core.history.resolve(h);
      }),
      (this.sendError = async (t) => {
        const {
            id: i,
            topic: s,
            error: n,
            encodeOpts: a,
            rpcOpts: o,
            appLink: f,
          } = t,
          h = En(i, n);
        let g;
        const y = f && typeof (Re == null ? void 0 : Re.Linking) < "u";
        try {
          const w = y ? Hi : Cr;
          g = await this.client.core.crypto.encode(
            s,
            h,
            tr(st({}, a || {}), { encoding: w })
          );
        } catch (w) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendError() -> core.crypto.encode() for topic ${s} failed`
            ),
            w)
          );
        }
        let E;
        try {
          E = await this.client.core.history.get(s, i);
        } catch (w) {
          throw (
            (this.client.logger.error(
              `sendError() -> history.get(${s}, ${i}) failed`
            ),
            w)
          );
        }
        if (y) {
          const w = Ms(f, s, g);
          await Re.Linking.openURL(w, this.client.name);
        } else {
          const w = o || ut[E.request.method].res;
          this.client.core.relayer.publish(s, g, w);
        }
        await this.client.core.history.resolve(h);
      }),
      (this.cleanup = async () => {
        const t = [],
          i = [];
        this.client.session.getAll().forEach((s) => {
          let n = !1;
          Mr(s.expiry) && (n = !0),
            this.client.core.crypto.keychain.has(s.topic) || (n = !0),
            n && t.push(s.topic);
        }),
          this.client.proposal.getAll().forEach((s) => {
            Mr(s.expiryTimestamp) && i.push(s.id);
          }),
          await Promise.all([
            ...t.map((s) => this.deleteSession({ topic: s })),
            ...i.map((s) => this.deleteProposal(s)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === or.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = or.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              await this.processRequest(t);
            } catch (i) {
              this.client.logger.warn(i);
            }
        }
        this.requestQueue.state = or.idle;
      }),
      (this.processRequest = async (t) => {
        const {
            topic: i,
            payload: s,
            attestation: n,
            transportType: a,
            encryptedId: o,
          } = t,
          f = s.method;
        if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: f }))
          switch (f) {
            case "wc_sessionPropose":
              return await this.onSessionProposeRequest({
                topic: i,
                payload: s,
                attestation: n,
                encryptedId: o,
              });
            case "wc_sessionSettle":
              return await this.onSessionSettleRequest(i, s);
            case "wc_sessionUpdate":
              return await this.onSessionUpdateRequest(i, s);
            case "wc_sessionExtend":
              return await this.onSessionExtendRequest(i, s);
            case "wc_sessionPing":
              return await this.onSessionPingRequest(i, s);
            case "wc_sessionDelete":
              return await this.onSessionDeleteRequest(i, s);
            case "wc_sessionRequest":
              return await this.onSessionRequest({
                topic: i,
                payload: s,
                attestation: n,
                encryptedId: o,
                transportType: a,
              });
            case "wc_sessionEvent":
              return await this.onSessionEventRequest(i, s);
            case "wc_sessionAuthenticate":
              return await this.onSessionAuthenticateRequest({
                topic: i,
                payload: s,
                attestation: n,
                encryptedId: o,
                transportType: a,
              });
            default:
              return this.client.logger.info(`Unsupported request method ${f}`);
          }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: i, payload: s, transportType: n } = t,
          a = (await this.client.core.history.get(i, s.id)).request.method;
        switch (a) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(i, s, n);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(i, s);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(i, s);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(i, s);
          case "wc_sessionPing":
            return this.onSessionPingResponse(i, s);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(i, s);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(i, s);
          default:
            return this.client.logger.info(`Unsupported response method ${a}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: i } = t,
          { message: s } = Q(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(s);
      }),
      (this.shouldIgnorePairingRequest = (t) => {
        const { topic: i, requestMethod: s } = t,
          n = this.expectedPairingMethodMap.get(i);
        return !n || n.includes(s)
          ? !1
          : !!(
              n.includes("wc_sessionAuthenticate") &&
              this.client.events.listenerCount("session_authenticate") > 0
            );
      }),
      (this.onSessionProposeRequest = async (t) => {
        const { topic: i, payload: s, attestation: n, encryptedId: a } = t,
          { params: o, id: f } = s;
        try {
          const h = this.client.core.eventClient.getEvent({ topic: i });
          this.isValidConnect(st({}, s.params));
          const g = o.expiryTimestamp || ht(ut.wc_sessionPropose.req.ttl),
            y = st({ id: f, pairingTopic: i, expiryTimestamp: g }, o);
          await this.setProposal(f, y);
          const E = await this.getVerifyContext({
            attestationId: n,
            hash: wr(JSON.stringify(s)),
            encryptedId: a,
            metadata: y.proposer.metadata,
          });
          this.client.events.listenerCount("session_proposal") === 0 &&
            (console.warn("No listener for session_proposal event"),
            h == null || h.setError(mr.proposal_listener_not_found)),
            h == null || h.addTrace(cr.emit_session_proposal),
            this.client.events.emit("session_proposal", {
              id: f,
              params: y,
              verifyContext: E,
            });
        } catch (h) {
          await this.sendError({
            id: f,
            topic: i,
            error: h,
            rpcOpts: ut.wc_sessionPropose.autoReject,
          }),
            this.client.logger.error(h);
        }
      }),
      (this.onSessionProposeResponse = async (t, i, s) => {
        const { id: n } = i;
        if (hr(i)) {
          const { result: a } = i;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: a,
          });
          const o = this.client.proposal.get(n);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: o,
          });
          const f = o.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: f,
          });
          const h = a.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: h,
          });
          const g = await this.client.core.crypto.generateSharedKey(f, h);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: g,
          });
          const y = await this.client.core.relayer.subscribe(g, {
            transportType: s,
          });
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: y,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else if (kt(i)) {
          await this.client.proposal.delete(n, ke("USER_DISCONNECTED"));
          const a = Ne("session_connect");
          if (this.events.listenerCount(a) === 0)
            throw new Error(`emitting ${a} without any listeners, 954`);
          this.events.emit(Ne("session_connect"), { error: i.error });
        }
      }),
      (this.onSessionSettleRequest = async (t, i) => {
        const { id: s, params: n } = i;
        try {
          this.isValidSessionSettleRequest(n);
          const {
              relay: a,
              controller: o,
              expiry: f,
              namespaces: h,
              sessionProperties: g,
              sessionConfig: y,
            } = i.params,
            E = tr(
              st(
                st(
                  {
                    topic: t,
                    relay: a,
                    expiry: f,
                    namespaces: h,
                    acknowledged: !0,
                    pairingTopic: "",
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: o.publicKey,
                    self: { publicKey: "", metadata: this.client.metadata },
                    peer: { publicKey: o.publicKey, metadata: o.metadata },
                  },
                  g && { sessionProperties: g }
                ),
                y && { sessionConfig: y }
              ),
              { transportType: Ve.relay }
            ),
            w = Ne("session_connect");
          if (this.events.listenerCount(w) === 0)
            throw new Error(`emitting ${w} without any listeners 997`);
          this.events.emit(Ne("session_connect"), { session: E }),
            await this.sendResult({
              id: i.id,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            });
        } catch (a) {
          await this.sendError({ id: s, topic: t, error: a }),
            this.client.logger.error(a);
        }
      }),
      (this.onSessionSettleResponse = async (t, i) => {
        const { id: s } = i;
        hr(i)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit(Ne("session_approve", s), {}))
          : kt(i) &&
            (await this.client.session.delete(t, ke("USER_DISCONNECTED")),
            this.events.emit(Ne("session_approve", s), { error: i.error }));
      }),
      (this.onSessionUpdateRequest = async (t, i) => {
        const { params: s, id: n } = i;
        try {
          const a = `${t}_session_update`,
            o = Ki.get(a);
          if (o && this.isRequestOutOfSync(o, n)) {
            this.client.logger.info(`Discarding out of sync request - ${n}`),
              this.sendError({
                id: n,
                topic: t,
                error: ke("INVALID_UPDATE_REQUEST"),
              });
            return;
          }
          this.isValidUpdate(st({ topic: t }, s));
          try {
            Ki.set(a, n),
              await this.client.session.update(t, { namespaces: s.namespaces }),
              await this.sendResult({
                id: n,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              });
          } catch (f) {
            throw (Ki.delete(a), f);
          }
          this.client.events.emit("session_update", {
            id: n,
            topic: t,
            params: s,
          });
        } catch (a) {
          await this.sendError({ id: n, topic: t, error: a }),
            this.client.logger.error(a);
        }
      }),
      (this.isRequestOutOfSync = (t, i) =>
        parseInt(i.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, i) => {
        const { id: s } = i,
          n = Ne("session_update", s);
        if (this.events.listenerCount(n) === 0)
          throw new Error(`emitting ${n} without any listeners`);
        hr(i)
          ? this.events.emit(Ne("session_update", s), {})
          : kt(i) &&
            this.events.emit(Ne("session_update", s), { error: i.error });
      }),
      (this.onSessionExtendRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, ht(hi)),
            await this.sendResult({
              id: s,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            }),
            this.client.events.emit("session_extend", { id: s, topic: t });
        } catch (n) {
          await this.sendError({ id: s, topic: t, error: n }),
            this.client.logger.error(n);
        }
      }),
      (this.onSessionExtendResponse = (t, i) => {
        const { id: s } = i,
          n = Ne("session_extend", s);
        if (this.events.listenerCount(n) === 0)
          throw new Error(`emitting ${n} without any listeners`);
        hr(i)
          ? this.events.emit(Ne("session_extend", s), {})
          : kt(i) &&
            this.events.emit(Ne("session_extend", s), { error: i.error });
      }),
      (this.onSessionPingRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({
              id: s,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            }),
            this.client.events.emit("session_ping", { id: s, topic: t });
        } catch (n) {
          await this.sendError({ id: s, topic: t, error: n }),
            this.client.logger.error(n);
        }
      }),
      (this.onSessionPingResponse = (t, i) => {
        const { id: s } = i,
          n = Ne("session_ping", s);
        if (this.events.listenerCount(n) === 0)
          throw new Error(`emitting ${n} without any listeners`);
        setTimeout(() => {
          hr(i)
            ? this.events.emit(Ne("session_ping", s), {})
            : kt(i) &&
              this.events.emit(Ne("session_ping", s), { error: i.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidDisconnect({ topic: t, reason: i.params }),
            Promise.all([
              new Promise((n) => {
                this.client.core.relayer.once(xt.publish, async () => {
                  n(await this.deleteSession({ topic: t, id: s }));
                });
              }),
              this.sendResult({
                id: s,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: ke("USER_DISCONNECTED"),
              }),
            ]).catch((n) => this.client.logger.error(n));
        } catch (n) {
          this.client.logger.error(n);
        }
      }),
      (this.onSessionRequest = async (t) => {
        var i, s, n;
        const {
            topic: a,
            payload: o,
            attestation: f,
            encryptedId: h,
            transportType: g,
          } = t,
          { id: y, params: E } = o;
        try {
          await this.isValidRequest(st({ topic: a }, E));
          const w = this.client.session.get(a),
            S = await this.getVerifyContext({
              attestationId: f,
              hash: wr(JSON.stringify(Tr("wc_sessionRequest", E, y))),
              encryptedId: h,
              metadata: w.peer.metadata,
              transportType: g,
            }),
            $ = { id: y, topic: a, params: E, verifyContext: S };
          await this.setPendingSessionRequest($),
            g === Ve.link_mode &&
              (i = w.peer.metadata.redirect) != null &&
              i.universal &&
              this.client.core.addLinkModeSupportedApp(
                (s = w.peer.metadata.redirect) == null ? void 0 : s.universal
              ),
            (n = this.client.signConfig) != null && n.disableRequestQueue
              ? this.emitSessionRequest($)
              : (this.addSessionRequestToSessionRequestQueue($),
                this.processSessionRequestQueue());
        } catch (w) {
          await this.sendError({ id: y, topic: a, error: w }),
            this.client.logger.error(w);
        }
      }),
      (this.onSessionRequestResponse = (t, i) => {
        const { id: s } = i,
          n = Ne("session_request", s);
        if (this.events.listenerCount(n) === 0)
          throw new Error(`emitting ${n} without any listeners`);
        hr(i)
          ? this.events.emit(Ne("session_request", s), { result: i.result })
          : kt(i) &&
            this.events.emit(Ne("session_request", s), { error: i.error });
      }),
      (this.onSessionEventRequest = async (t, i) => {
        const { id: s, params: n } = i;
        try {
          const a = `${t}_session_event_${n.event.name}`,
            o = Ki.get(a);
          if (o && this.isRequestOutOfSync(o, s)) {
            this.client.logger.info(`Discarding out of sync request - ${s}`);
            return;
          }
          this.isValidEmit(st({ topic: t }, n)),
            this.client.events.emit("session_event", {
              id: s,
              topic: t,
              params: n,
            }),
            Ki.set(a, s);
        } catch (a) {
          await this.sendError({ id: s, topic: t, error: a }),
            this.client.logger.error(a);
        }
      }),
      (this.onSessionAuthenticateResponse = (t, i) => {
        const { id: s } = i;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: t,
          payload: i,
        }),
          hr(i)
            ? this.events.emit(Ne("session_request", s), { result: i.result })
            : kt(i) &&
              this.events.emit(Ne("session_request", s), { error: i.error });
      }),
      (this.onSessionAuthenticateRequest = async (t) => {
        var i;
        const {
          topic: s,
          payload: n,
          attestation: a,
          encryptedId: o,
          transportType: f,
        } = t;
        try {
          const { requester: h, authPayload: g, expiryTimestamp: y } = n.params,
            E = await this.getVerifyContext({
              attestationId: a,
              hash: wr(JSON.stringify(n)),
              encryptedId: o,
              metadata: h.metadata,
              transportType: f,
            }),
            w = {
              requester: h,
              pairingTopic: s,
              id: n.id,
              authPayload: g,
              verifyContext: E,
              expiryTimestamp: y,
            };
          await this.setAuthRequest(n.id, {
            request: w,
            pairingTopic: s,
            transportType: f,
          }),
            f === Ve.link_mode &&
              (i = h.metadata.redirect) != null &&
              i.universal &&
              this.client.core.addLinkModeSupportedApp(
                h.metadata.redirect.universal
              ),
            this.client.events.emit("session_authenticate", {
              topic: s,
              params: n.params,
              id: n.id,
              verifyContext: E,
            });
        } catch (h) {
          this.client.logger.error(h);
          const g = n.params.requester.publicKey,
            y = await this.client.core.crypto.generateKeyPair(),
            E = this.getAppLinkIfEnabled(n.params.requester.metadata, f),
            w = { type: Er, receiverPublicKey: g, senderPublicKey: y };
          await this.sendError({
            id: n.id,
            topic: s,
            error: h,
            encodeOpts: w,
            rpcOpts: ut.wc_sessionAuthenticate.autoReject,
            appLink: E,
          });
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = or.idle),
              this.processSessionRequestQueue();
          }, Z.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: i }) => {
        const s = this.client.core.history.pending;
        s.length > 0 &&
          s
            .filter(
              (n) => n.topic === t && n.request.method === "wc_sessionRequest"
            )
            .forEach((n) => {
              const a = n.request.id,
                o = Ne("session_request", a);
              if (this.events.listenerCount(o) === 0)
                throw new Error(`emitting ${o} without any listeners`);
              this.events.emit(Ne("session_request", n.request.id), {
                error: i,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === or.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = or.active),
            this.emitSessionRequest(t);
        } catch (i) {
          this.client.logger.error(i);
        }
      }),
      (this.emitSessionRequest = (t) => {
        this.client.events.emit("session_request", t);
      }),
      (this.onPairingCreated = (t) => {
        if (
          (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods),
          t.active)
        )
          return;
        const i = this.client.proposal
          .getAll()
          .find((s) => s.pairingTopic === t.topic);
        i &&
          this.onSessionProposeRequest({
            topic: t.topic,
            payload: Tr(
              "wc_sessionPropose",
              {
                requiredNamespaces: i.requiredNamespaces,
                optionalNamespaces: i.optionalNamespaces,
                relays: i.relays,
                proposer: i.proposer,
                sessionProperties: i.sessionProperties,
              },
              i.id
            ),
          });
      }),
      (this.isValidConnect = async (t) => {
        if (!At(t)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(f);
        }
        const {
          pairingTopic: i,
          requiredNamespaces: s,
          optionalNamespaces: n,
          sessionProperties: a,
          relays: o,
        } = t;
        if ((Ot(i) || (await this.isValidPairingTopic(i)), !cg(o))) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `connect() relays: ${o}`
          );
          throw new Error(f);
        }
        !Ot(s) &&
          ns(s) !== 0 &&
          this.validateNamespaces(s, "requiredNamespaces"),
          !Ot(n) &&
            ns(n) !== 0 &&
            this.validateNamespaces(n, "optionalNamespaces"),
          Ot(a) || this.validateSessionProps(a, "sessionProperties");
      }),
      (this.validateNamespaces = (t, i) => {
        const s = og(t, "connect()", i);
        if (s) throw new Error(s.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!At(t))
          throw new Error(
            Q("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: i,
          namespaces: s,
          relayProtocol: n,
          sessionProperties: a,
        } = t;
        this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
        const o = this.client.proposal.get(i),
          f = Ln(s, "approve()");
        if (f) throw new Error(f.message);
        const h = ac(o.requiredNamespaces, s, "approve()");
        if (h) throw new Error(h.message);
        if (!ct(n, !0)) {
          const { message: g } = Q(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${n}`
          );
          throw new Error(g);
        }
        Ot(a) || this.validateSessionProps(a, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!At(t)) {
          const { message: n } = Q(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(n);
        }
        const { id: i, reason: s } = t;
        if (
          (this.checkRecentlyDeleted(i),
          await this.isValidProposalId(i),
          !fg(s))
        ) {
          const { message: n } = Q(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(s)}`
          );
          throw new Error(n);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!At(t)) {
          const { message: h } = Q(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(h);
        }
        const { relay: i, controller: s, namespaces: n, expiry: a } = t;
        if (!_f(i)) {
          const { message: h } = Q(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(h);
        }
        const o = tg(s, "onSessionSettleRequest()");
        if (o) throw new Error(o.message);
        const f = Ln(n, "onSessionSettleRequest()");
        if (f) throw new Error(f.message);
        if (Mr(a)) {
          const { message: h } = Q("EXPIRED", "onSessionSettleRequest()");
          throw new Error(h);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!At(t)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: i, namespaces: s } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
        const n = this.client.session.get(i),
          a = Ln(s, "update()");
        if (a) throw new Error(a.message);
        const o = ac(n.requiredNamespaces, s, "update()");
        if (o) throw new Error(o.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!At(t)) {
          const { message: s } = Q(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(s);
        }
        const { topic: i } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      }),
      (this.isValidRequest = async (t) => {
        if (!At(t)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: i, request: s, chainId: n, expiry: a } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
        const { namespaces: o } = this.client.session.get(i);
        if (!nc(o, n)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `request() chainId: ${n}`
          );
          throw new Error(f);
        }
        if (!ug(s)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(s)}`
          );
          throw new Error(f);
        }
        if (!pg(o, n, s.method)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `request() method: ${s.method}`
          );
          throw new Error(f);
        }
        if (a && !yg(a, Vn)) {
          const { message: f } = Q(
            "MISSING_OR_INVALID",
            `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Vn.min} and ${Vn.max}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidRespond = async (t) => {
        var i;
        if (!At(t)) {
          const { message: a } = Q(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(a);
        }
        const { topic: s, response: n } = t;
        try {
          await this.isValidSessionTopic(s);
        } catch (a) {
          throw (
            ((i = t == null ? void 0 : t.response) != null &&
              i.id &&
              this.cleanupAfterResponse(t),
            a)
          );
        }
        if (!dg(n)) {
          const { message: a } = Q(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(n)}`
          );
          throw new Error(a);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!At(t)) {
          const { message: s } = Q("MISSING_OR_INVALID", `ping() params: ${t}`);
          throw new Error(s);
        }
        const { topic: i } = t;
        await this.isValidSessionOrPairingTopic(i);
      }),
      (this.isValidEmit = async (t) => {
        if (!At(t)) {
          const { message: o } = Q("MISSING_OR_INVALID", `emit() params: ${t}`);
          throw new Error(o);
        }
        const { topic: i, event: s, chainId: n } = t;
        await this.isValidSessionTopic(i);
        const { namespaces: a } = this.client.session.get(i);
        if (!nc(a, n)) {
          const { message: o } = Q(
            "MISSING_OR_INVALID",
            `emit() chainId: ${n}`
          );
          throw new Error(o);
        }
        if (!lg(s)) {
          const { message: o } = Q(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(s)}`
          );
          throw new Error(o);
        }
        if (!gg(a, n, s.name)) {
          const { message: o } = Q(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(s)}`
          );
          throw new Error(o);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!At(t)) {
          const { message: s } = Q(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(s);
        }
        const { topic: i } = t;
        await this.isValidSessionOrPairingTopic(i);
      }),
      (this.isValidAuthenticate = (t) => {
        const { chains: i, uri: s, domain: n, nonce: a } = t;
        if (!Array.isArray(i) || i.length === 0)
          throw new Error("chains is required and must be a non-empty array");
        if (!ct(s, !1)) throw new Error("uri is required parameter");
        if (!ct(n, !1)) throw new Error("domain is required parameter");
        if (!ct(a, !1)) throw new Error("nonce is required parameter");
        if ([...new Set(i.map((f) => pi(f).namespace))].length > 1)
          throw new Error(
            "Multi-namespace requests are not supported. Please request single namespace only."
          );
        const { namespace: o } = pi(i[0]);
        if (o !== "eip155")
          throw new Error(
            "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
          );
      }),
      (this.getVerifyContext = async (t) => {
        const {
            attestationId: i,
            hash: s,
            encryptedId: n,
            metadata: a,
            transportType: o,
          } = t,
          f = {
            verified: {
              verifyUrl: a.verifyUrl || es,
              validation: "UNKNOWN",
              origin: a.url || "",
            },
          };
        try {
          if (o === Ve.link_mode) {
            const g = this.getAppLinkIfEnabled(a, o);
            return (
              (f.verified.validation =
                g && new URL(g).origin === new URL(a.url).origin
                  ? "VALID"
                  : "INVALID"),
              f
            );
          }
          const h = await this.client.core.verify.resolve({
            attestationId: i,
            hash: s,
            encryptedId: n,
            verifyUrl: a.verifyUrl,
          });
          h &&
            ((f.verified.origin = h.origin),
            (f.verified.isScam = h.isScam),
            (f.verified.validation =
              h.origin === new URL(a.url).origin ? "VALID" : "INVALID"));
        } catch (h) {
          this.client.logger.warn(h);
        }
        return (
          this.client.logger.debug(`Verify context: ${JSON.stringify(f)}`), f
        );
      }),
      (this.validateSessionProps = (t, i) => {
        Object.values(t).forEach((s) => {
          if (!ct(s, !1)) {
            const { message: n } = Q(
              "MISSING_OR_INVALID",
              `${i} must be in Record<string, string> format. Received: ${JSON.stringify(
                s
              )}`
            );
            throw new Error(n);
          }
        });
      }),
      (this.getPendingAuthRequest = (t) => {
        const i = this.client.auth.requests.get(t);
        return typeof i == "object" ? i : void 0;
      }),
      (this.addToRecentlyDeleted = (t, i) => {
        if (
          (this.recentlyDeletedMap.set(t, i),
          this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
        ) {
          let s = 0;
          const n = this.recentlyDeletedLimit / 2;
          for (const a of this.recentlyDeletedMap.keys()) {
            if (s++ >= n) break;
            this.recentlyDeletedMap.delete(a);
          }
        }
      }),
      (this.checkRecentlyDeleted = (t) => {
        const i = this.recentlyDeletedMap.get(t);
        if (i) {
          const { message: s } = Q(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${i}: ${t}`
          );
          throw new Error(s);
        }
      }),
      (this.isLinkModeEnabled = (t, i) => {
        var s, n, a, o, f, h, g, y, E;
        return !t || i !== Ve.link_mode
          ? !1
          : ((n = (s = this.client.metadata) == null ? void 0 : s.redirect) ==
            null
              ? void 0
              : n.linkMode) === !0 &&
              ((o = (a = this.client.metadata) == null ? void 0 : a.redirect) ==
              null
                ? void 0
                : o.universal) !== void 0 &&
              ((h = (f = this.client.metadata) == null ? void 0 : f.redirect) ==
              null
                ? void 0
                : h.universal) !== "" &&
              ((g = t == null ? void 0 : t.redirect) == null
                ? void 0
                : g.universal) !== void 0 &&
              ((y = t == null ? void 0 : t.redirect) == null
                ? void 0
                : y.universal) !== "" &&
              ((E = t == null ? void 0 : t.redirect) == null
                ? void 0
                : E.linkMode) === !0 &&
              this.client.core.linkModeSupportedApps.includes(
                t.redirect.universal
              ) &&
              typeof (Re == null ? void 0 : Re.Linking) < "u";
      }),
      (this.getAppLinkIfEnabled = (t, i) => {
        var s;
        return this.isLinkModeEnabled(t, i)
          ? (s = t == null ? void 0 : t.redirect) == null
            ? void 0
            : s.universal
          : void 0;
      }),
      (this.handleLinkModeMessage = ({ url: t }) => {
        if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
        const i = Bo(t, "topic") || "",
          s = decodeURIComponent(Bo(t, "wc_ev") || ""),
          n = this.client.session.keys.includes(i);
        n && this.client.session.update(i, { transportType: Ve.link_mode }),
          this.client.core.dispatchEnvelope({
            topic: i,
            message: s,
            sessionExists: n,
          });
      }),
      (this.registerLinkModeListeners = async () => {
        var t;
        if (
          ja() ||
          (_i() && (t = this.client.metadata.redirect) != null && t.linkMode)
        ) {
          const i = Re == null ? void 0 : Re.Linking;
          if (typeof i < "u") {
            i.addEventListener(
              "url",
              this.handleLinkModeMessage,
              this.client.name
            );
            const s = await i.getInitialURL();
            s &&
              setTimeout(() => {
                this.handleLinkModeMessage({ url: s });
              }, 50);
          }
        }
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Q("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(xt.message, (e) => {
      !this.initialized || this.relayMessageCache.length > 0
        ? this.relayMessageCache.push(e)
        : this.onRelayMessage(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: t, message: i, attestation: s, transportType: n } = e,
      { publicKey: a } = this.client.auth.authKeys.keys.includes(zs)
        ? this.client.auth.authKeys.get(zs)
        : { responseTopic: void 0, publicKey: void 0 },
      o = await this.client.core.crypto.decode(t, i, {
        receiverPublicKey: a,
        encoding: n === Ve.link_mode ? Hi : Cr,
      });
    try {
      Ga(o)
        ? (this.client.core.history.set(t, o),
          this.onRelayEventRequest({
            topic: t,
            payload: o,
            attestation: s,
            transportType: n,
            encryptedId: wr(i),
          }))
        : Sn(o)
        ? (await this.client.core.history.resolve(o),
          await this.onRelayEventResponse({
            topic: t,
            payload: o,
            transportType: n,
          }),
          this.client.core.history.delete(t, o.id))
        : this.onRelayEventUnknownPayload({
            topic: t,
            payload: o,
            transportType: n,
          });
    } catch (f) {
      this.client.logger.error(f);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Bt.expired, async (e) => {
      const { topic: t, id: i } = uf(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, Q("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i))
        return await this.deletePendingAuthRequest(i, Q("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : i &&
          (await this.deleteProposal(i, !0),
          this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Kr.create, (e) =>
      this.onPairingCreated(e)
    ),
      this.client.core.pairing.events.on(Kr.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
  }
  isValidPairingTopic(e) {
    if (!ct(e, !1)) {
      const { message: t } = Q(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = Q(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Mr(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = Q("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!ct(e, !1)) {
      const { message: t } = Q(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
      const { message: t } = Q(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Mr(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = Q("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = Q(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (ct(e, !1)) {
      const { message: t } = Q(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = Q(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!hg(e)) {
      const { message: t } = Q(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = Q(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Mr(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = Q("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class Q3 extends ii {
  constructor(e, t) {
    super(e, t, F3, Ya), (this.core = e), (this.logger = t);
  }
}
let Z3 = class extends ii {
  constructor(e, t) {
    super(e, t, q3, Ya), (this.core = e), (this.logger = t);
  }
};
class e6 extends ii {
  constructor(e, t) {
    super(e, t, U3, Ya, (i) => i.id), (this.core = e), (this.logger = t);
  }
}
class t6 extends ii {
  constructor(e, t) {
    super(e, t, k3, xn, () => zs), (this.core = e), (this.logger = t);
  }
}
class r6 extends ii {
  constructor(e, t) {
    super(e, t, H3, xn), (this.core = e), (this.logger = t);
  }
}
class i6 extends ii {
  constructor(e, t) {
    super(e, t, K3, xn, (i) => i.id), (this.core = e), (this.logger = t);
  }
}
class s6 {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.authKeys = new t6(this.core, this.logger)),
      (this.pairingTopics = new r6(this.core, this.logger)),
      (this.requests = new i6(this.core, this.logger));
  }
  async init() {
    await this.authKeys.init(),
      await this.pairingTopics.init(),
      await this.requests.init();
  }
}
class Xa extends $3 {
  constructor(e) {
    super(e),
      (this.protocol = Zf),
      (this.version = eu),
      (this.name = Kn.name),
      (this.events = new Gt.EventEmitter()),
      (this.on = (i, s) => this.events.on(i, s)),
      (this.once = (i, s) => this.events.once(i, s)),
      (this.off = (i, s) => this.events.off(i, s)),
      (this.removeListener = (i, s) => this.events.removeListener(i, s)),
      (this.removeAllListeners = (i) => this.events.removeAllListeners(i)),
      (this.connect = async (i) => {
        try {
          return await this.engine.connect(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.pair = async (i) => {
        try {
          return await this.engine.pair(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.approve = async (i) => {
        try {
          return await this.engine.approve(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.reject = async (i) => {
        try {
          return await this.engine.reject(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.update = async (i) => {
        try {
          return await this.engine.update(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.extend = async (i) => {
        try {
          return await this.engine.extend(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.request = async (i) => {
        try {
          return await this.engine.request(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.respond = async (i) => {
        try {
          return await this.engine.respond(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.ping = async (i) => {
        try {
          return await this.engine.ping(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.emit = async (i) => {
        try {
          return await this.engine.emit(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.disconnect = async (i) => {
        try {
          return await this.engine.disconnect(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.find = (i) => {
        try {
          return this.engine.find(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (i) {
          throw (this.logger.error(i.message), i);
        }
      }),
      (this.authenticate = async (i, s) => {
        try {
          return await this.engine.authenticate(i, s);
        } catch (n) {
          throw (this.logger.error(n.message), n);
        }
      }),
      (this.formatAuthMessage = (i) => {
        try {
          return this.engine.formatAuthMessage(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.approveSessionAuthenticate = async (i) => {
        try {
          return await this.engine.approveSessionAuthenticate(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.rejectSessionAuthenticate = async (i) => {
        try {
          return await this.engine.rejectSessionAuthenticate(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (e == null ? void 0 : e.name) || Kn.name),
      (this.metadata = (e == null ? void 0 : e.metadata) || af()),
      (this.signConfig = e == null ? void 0 : e.signConfig);
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : ms(wn({ level: (e == null ? void 0 : e.logger) || Kn.logger }));
    (this.core = (e == null ? void 0 : e.core) || new R3(e)),
      (this.logger = Pt(t, this.name)),
      (this.session = new Z3(this.core, this.logger)),
      (this.proposal = new Q3(this.core, this.logger)),
      (this.pendingRequest = new e6(this.core, this.logger)),
      (this.engine = new X3(this)),
      (this.auth = new s6(this.core, this.logger));
  }
  static async init(e) {
    const t = new Xa(e);
    return await t.initialize(), t;
  }
  get context() {
    return Tt(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.auth.init(),
        await this.engine.init(),
        this.logger.info("SignClient Initialization Success"),
        this.engine.processRelayMessageCache();
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
var wa = { exports: {} };
(function (r, e) {
  var t = typeof self < "u" ? self : Ht,
    i = (function () {
      function n() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (n.prototype = t), new n();
    })();
  (function (n) {
    (function (a) {
      var o = {
        searchParams: "URLSearchParams" in n,
        iterable: "Symbol" in n && "iterator" in Symbol,
        blob:
          "FileReader" in n &&
          "Blob" in n &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in n,
        arrayBuffer: "ArrayBuffer" in n,
      };
      function f(d) {
        return d && DataView.prototype.isPrototypeOf(d);
      }
      if (o.arrayBuffer)
        var h = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          g =
            ArrayBuffer.isView ||
            function (d) {
              return d && h.indexOf(Object.prototype.toString.call(d)) > -1;
            };
      function y(d) {
        if (
          (typeof d != "string" && (d = String(d)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(d))
        )
          throw new TypeError("Invalid character in header field name");
        return d.toLowerCase();
      }
      function E(d) {
        return typeof d != "string" && (d = String(d)), d;
      }
      function w(d) {
        var b = {
          next: function () {
            var _ = d.shift();
            return { done: _ === void 0, value: _ };
          },
        };
        return (
          o.iterable &&
            (b[Symbol.iterator] = function () {
              return b;
            }),
          b
        );
      }
      function S(d) {
        (this.map = {}),
          d instanceof S
            ? d.forEach(function (b, _) {
                this.append(_, b);
              }, this)
            : Array.isArray(d)
            ? d.forEach(function (b) {
                this.append(b[0], b[1]);
              }, this)
            : d &&
              Object.getOwnPropertyNames(d).forEach(function (b) {
                this.append(b, d[b]);
              }, this);
      }
      (S.prototype.append = function (d, b) {
        (d = y(d)), (b = E(b));
        var _ = this.map[d];
        this.map[d] = _ ? _ + ", " + b : b;
      }),
        (S.prototype.delete = function (d) {
          delete this.map[y(d)];
        }),
        (S.prototype.get = function (d) {
          return (d = y(d)), this.has(d) ? this.map[d] : null;
        }),
        (S.prototype.has = function (d) {
          return this.map.hasOwnProperty(y(d));
        }),
        (S.prototype.set = function (d, b) {
          this.map[y(d)] = E(b);
        }),
        (S.prototype.forEach = function (d, b) {
          for (var _ in this.map)
            this.map.hasOwnProperty(_) && d.call(b, this.map[_], _, this);
        }),
        (S.prototype.keys = function () {
          var d = [];
          return (
            this.forEach(function (b, _) {
              d.push(_);
            }),
            w(d)
          );
        }),
        (S.prototype.values = function () {
          var d = [];
          return (
            this.forEach(function (b) {
              d.push(b);
            }),
            w(d)
          );
        }),
        (S.prototype.entries = function () {
          var d = [];
          return (
            this.forEach(function (b, _) {
              d.push([_, b]);
            }),
            w(d)
          );
        }),
        o.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);
      function $(d) {
        if (d.bodyUsed) return Promise.reject(new TypeError("Already read"));
        d.bodyUsed = !0;
      }
      function q(d) {
        return new Promise(function (b, _) {
          (d.onload = function () {
            b(d.result);
          }),
            (d.onerror = function () {
              _(d.error);
            });
        });
      }
      function z(d) {
        var b = new FileReader(),
          _ = q(b);
        return b.readAsArrayBuffer(d), _;
      }
      function C(d) {
        var b = new FileReader(),
          _ = q(b);
        return b.readAsText(d), _;
      }
      function L(d) {
        for (
          var b = new Uint8Array(d), _ = new Array(b.length), D = 0;
          D < b.length;
          D++
        )
          _[D] = String.fromCharCode(b[D]);
        return _.join("");
      }
      function A(d) {
        if (d.slice) return d.slice(0);
        var b = new Uint8Array(d.byteLength);
        return b.set(new Uint8Array(d)), b.buffer;
      }
      function T() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (d) {
            (this._bodyInit = d),
              d
                ? typeof d == "string"
                  ? (this._bodyText = d)
                  : o.blob && Blob.prototype.isPrototypeOf(d)
                  ? (this._bodyBlob = d)
                  : o.formData && FormData.prototype.isPrototypeOf(d)
                  ? (this._bodyFormData = d)
                  : o.searchParams && URLSearchParams.prototype.isPrototypeOf(d)
                  ? (this._bodyText = d.toString())
                  : o.arrayBuffer && o.blob && f(d)
                  ? ((this._bodyArrayBuffer = A(d.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : o.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(d) || g(d))
                  ? (this._bodyArrayBuffer = A(d))
                  : (this._bodyText = d = Object.prototype.toString.call(d))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof d == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : o.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(d) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          o.blob &&
            ((this.blob = function () {
              var d = $(this);
              if (d) return d;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? $(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(z);
            })),
          (this.text = function () {
            var d = $(this);
            if (d) return d;
            if (this._bodyBlob) return C(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(L(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          o.formData &&
            (this.formData = function () {
              return this.text().then(H);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var R = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function l(d) {
        var b = d.toUpperCase();
        return R.indexOf(b) > -1 ? b : d;
      }
      function P(d, b) {
        b = b || {};
        var _ = b.body;
        if (d instanceof P) {
          if (d.bodyUsed) throw new TypeError("Already read");
          (this.url = d.url),
            (this.credentials = d.credentials),
            b.headers || (this.headers = new S(d.headers)),
            (this.method = d.method),
            (this.mode = d.mode),
            (this.signal = d.signal),
            !_ && d._bodyInit != null && ((_ = d._bodyInit), (d.bodyUsed = !0));
        } else this.url = String(d);
        if (
          ((this.credentials =
            b.credentials || this.credentials || "same-origin"),
          (b.headers || !this.headers) && (this.headers = new S(b.headers)),
          (this.method = l(b.method || this.method || "GET")),
          (this.mode = b.mode || this.mode || null),
          (this.signal = b.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && _)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(_);
      }
      P.prototype.clone = function () {
        return new P(this, { body: this._bodyInit });
      };
      function H(d) {
        var b = new FormData();
        return (
          d
            .trim()
            .split("&")
            .forEach(function (_) {
              if (_) {
                var D = _.split("="),
                  x = D.shift().replace(/\+/g, " "),
                  m = D.join("=").replace(/\+/g, " ");
                b.append(decodeURIComponent(x), decodeURIComponent(m));
              }
            }),
          b
        );
      }
      function Y(d) {
        var b = new S(),
          _ = d.replace(/\r?\n[\t ]+/g, " ");
        return (
          _.split(/\r?\n/).forEach(function (D) {
            var x = D.split(":"),
              m = x.shift().trim();
            if (m) {
              var u = x.join(":").trim();
              b.append(m, u);
            }
          }),
          b
        );
      }
      T.call(P.prototype);
      function M(d, b) {
        b || (b = {}),
          (this.type = "default"),
          (this.status = b.status === void 0 ? 200 : b.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in b ? b.statusText : "OK"),
          (this.headers = new S(b.headers)),
          (this.url = b.url || ""),
          this._initBody(d);
      }
      T.call(M.prototype),
        (M.prototype.clone = function () {
          return new M(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new S(this.headers),
            url: this.url,
          });
        }),
        (M.error = function () {
          var d = new M(null, { status: 0, statusText: "" });
          return (d.type = "error"), d;
        });
      var c = [301, 302, 303, 307, 308];
      (M.redirect = function (d, b) {
        if (c.indexOf(b) === -1) throw new RangeError("Invalid status code");
        return new M(null, { status: b, headers: { location: d } });
      }),
        (a.DOMException = n.DOMException);
      try {
        new a.DOMException();
      } catch {
        (a.DOMException = function (b, _) {
          (this.message = b), (this.name = _);
          var D = Error(b);
          this.stack = D.stack;
        }),
          (a.DOMException.prototype = Object.create(Error.prototype)),
          (a.DOMException.prototype.constructor = a.DOMException);
      }
      function v(d, b) {
        return new Promise(function (_, D) {
          var x = new P(d, b);
          if (x.signal && x.signal.aborted)
            return D(new a.DOMException("Aborted", "AbortError"));
          var m = new XMLHttpRequest();
          function u() {
            m.abort();
          }
          (m.onload = function () {
            var I = {
              status: m.status,
              statusText: m.statusText,
              headers: Y(m.getAllResponseHeaders() || ""),
            };
            I.url =
              "responseURL" in m
                ? m.responseURL
                : I.headers.get("X-Request-URL");
            var K = "response" in m ? m.response : m.responseText;
            _(new M(K, I));
          }),
            (m.onerror = function () {
              D(new TypeError("Network request failed"));
            }),
            (m.ontimeout = function () {
              D(new TypeError("Network request failed"));
            }),
            (m.onabort = function () {
              D(new a.DOMException("Aborted", "AbortError"));
            }),
            m.open(x.method, x.url, !0),
            x.credentials === "include"
              ? (m.withCredentials = !0)
              : x.credentials === "omit" && (m.withCredentials = !1),
            "responseType" in m && o.blob && (m.responseType = "blob"),
            x.headers.forEach(function (I, K) {
              m.setRequestHeader(K, I);
            }),
            x.signal &&
              (x.signal.addEventListener("abort", u),
              (m.onreadystatechange = function () {
                m.readyState === 4 && x.signal.removeEventListener("abort", u);
              })),
            m.send(typeof x._bodyInit > "u" ? null : x._bodyInit);
        });
      }
      return (
        (v.polyfill = !0),
        n.fetch ||
          ((n.fetch = v), (n.Headers = S), (n.Request = P), (n.Response = M)),
        (a.Headers = S),
        (a.Request = P),
        (a.Response = M),
        (a.fetch = v),
        Object.defineProperty(a, "__esModule", { value: !0 }),
        a
      );
    })({});
  })(i),
    (i.fetch.ponyfill = !0),
    delete i.fetch.polyfill;
  var s = i;
  (e = s.fetch),
    (e.default = s.fetch),
    (e.fetch = s.fetch),
    (e.Headers = s.Headers),
    (e.Request = s.Request),
    (e.Response = s.Response),
    (r.exports = e);
})(wa, wa.exports);
var n6 = wa.exports;
const Xc = xa(n6),
  a6 = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  o6 = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function c6(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return o6(r);
  } catch {
    return r;
  }
}
function Qc(r) {
  return typeof r == "string" ? r : a6(r) || "";
}
var h6 = Object.defineProperty,
  f6 = Object.defineProperties,
  u6 = Object.getOwnPropertyDescriptors,
  Zc = Object.getOwnPropertySymbols,
  d6 = Object.prototype.hasOwnProperty,
  l6 = Object.prototype.propertyIsEnumerable,
  eh = (r, e, t) =>
    e in r
      ? h6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  th = (r, e) => {
    for (var t in e || (e = {})) d6.call(e, t) && eh(r, t, e[t]);
    if (Zc) for (var t of Zc(e)) l6.call(e, t) && eh(r, t, e[t]);
    return r;
  },
  rh = (r, e) => f6(r, u6(e));
const p6 = { Accept: "application/json", "Content-Type": "application/json" },
  g6 = "POST",
  ih = { headers: p6, method: g6 },
  sh = 10;
let gr = class {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new Gt.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !Sc(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e) {
    this.isAvailable || (await this.register());
    try {
      const t = Qc(e),
        i = await (await Xc(this.url, rh(th({}, ih), { body: t }))).json();
      this.onPayload({ data: i });
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  async register(e = this.url) {
    if (!Sc(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((i, s) => {
          this.events.once("register_error", (n) => {
            this.resetMaxListeners(), s(n);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return s(new Error("HTTP connection is missing or invalid"));
              i();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = Qc({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Xc(e, rh(th({}, ih), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const i = this.parseError(t);
      throw (this.events.emit("register_error", i), this.onClose(), i);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? c6(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t),
      s = i.message || i.toString(),
      n = En(e, s);
    this.events.emit("payload", n);
  }
  parseError(e, t = this.url) {
    return Tf(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > sh && this.events.setMaxListeners(sh);
  }
};
const nh = "error",
  b6 = "wss://relay.walletconnect.org",
  v6 = "wc",
  y6 = "universal_provider",
  ah = `${v6}@2:${y6}:`,
  iu = "https://rpc.walletconnect.org/v1/",
  ui = "generic",
  m6 = `${iu}bundler`,
  nr = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var w6 = Object.defineProperty,
  _6 = Object.defineProperties,
  E6 = Object.getOwnPropertyDescriptors,
  oh = Object.getOwnPropertySymbols,
  S6 = Object.prototype.hasOwnProperty,
  I6 = Object.prototype.propertyIsEnumerable,
  ch = (r, e, t) =>
    e in r
      ? w6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Ts = (r, e) => {
    for (var t in e || (e = {})) S6.call(e, t) && ch(r, t, e[t]);
    if (oh) for (var t of oh(e)) I6.call(e, t) && ch(r, t, e[t]);
    return r;
  },
  x6 = (r, e) => _6(r, E6(e));
function ir(r, e, t) {
  var i;
  const s = pi(r);
  return (
    ((i = e.rpcMap) == null ? void 0 : i[s.reference]) ||
    `${iu}?chainId=${s.namespace}:${s.reference}&projectId=${t}`
  );
}
function si(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function su(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function D6(r, e) {
  const t = Object.keys(e.namespaces).filter((s) => s.includes(r));
  if (!t.length) return [];
  const i = [];
  return (
    t.forEach((s) => {
      const n = e.namespaces[s].accounts;
      i.push(...n);
    }),
    i
  );
}
function Gn(r = {}, e = {}) {
  const t = hh(r),
    i = hh(e);
  return Nu.merge(t, i);
}
function hh(r) {
  var e, t, i, s;
  const n = {};
  if (!ns(r)) return n;
  for (const [a, o] of Object.entries(r)) {
    const f = ka(a) ? [a] : o.chains,
      h = o.methods || [],
      g = o.events || [],
      y = o.rpcMap || {},
      E = Xi(a);
    n[E] = x6(Ts(Ts({}, n[E]), o), {
      chains: Fs(f, (e = n[E]) == null ? void 0 : e.chains),
      methods: Fs(h, (t = n[E]) == null ? void 0 : t.methods),
      events: Fs(g, (i = n[E]) == null ? void 0 : i.events),
      rpcMap: Ts(Ts({}, y), (s = n[E]) == null ? void 0 : s.rpcMap),
    });
  }
  return n;
}
function P6(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function fh(r) {
  const e = {};
  for (const [t, i] of Object.entries(r)) {
    const s = i.methods || [],
      n = i.events || [],
      a = i.accounts || [],
      o = ka(t) ? [t] : i.chains ? i.chains : su(i.accounts);
    e[t] = { chains: o, methods: s, events: n, accounts: a };
  }
  return e;
}
function Wn(r) {
  return typeof r == "number"
    ? r
    : r.includes("0x")
    ? parseInt(r, 16)
    : ((r = r.includes(":") ? r.split(":")[1] : r),
      isNaN(Number(r)) ? r : Number(r));
}
const nu = {},
  Be = (r) => nu[r],
  Jn = (r, e) => {
    nu[r] = e;
  };
class M6 {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = si(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
var A6 = Object.defineProperty,
  O6 = Object.defineProperties,
  C6 = Object.getOwnPropertyDescriptors,
  uh = Object.getOwnPropertySymbols,
  T6 = Object.prototype.hasOwnProperty,
  R6 = Object.prototype.propertyIsEnumerable,
  dh = (r, e, t) =>
    e in r
      ? A6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  lh = (r, e) => {
    for (var t in e || (e = {})) T6.call(e, t) && dh(r, t, e[t]);
    if (uh) for (var t of uh(e)) R6.call(e, t) && dh(r, t, e[t]);
    return r;
  },
  ph = (r, e) => O6(r, C6(e));
class $6 {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e);
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const i =
      t || ir(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = parseInt(si(t));
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, i;
    let s = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const n = parseInt(s, 16);
    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: s }] },
        chainId: (i = this.namespace.chains) == null ? void 0 : i[0],
      }),
        this.setDefaultChain(`${n}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var t, i, s;
    const n =
      (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0];
    if (!n)
      throw new Error(
        "Missing address parameter in `wallet_getCapabilities` request"
      );
    const a = this.client.session.get(e.topic),
      o =
        ((s = a == null ? void 0 : a.sessionProperties) == null
          ? void 0
          : s.capabilities) || {};
    if (o != null && o[n]) return o == null ? void 0 : o[n];
    const f = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, {
        sessionProperties: ph(lh({}, a.sessionProperties || {}), {
          capabilities: ph(lh({}, o || {}), { [n]: f }),
        }),
      });
    } catch (h) {
      console.warn("Failed to update session with capabilities", h);
    }
    return f;
  }
  async getCallStatus(e) {
    var t, i;
    const s = this.client.session.get(e.topic),
      n = (t = s.sessionProperties) == null ? void 0 : t.bundler_name;
    if (n) {
      const o = this.getBundlerUrl(e.chainId, n);
      try {
        return await this.getUserOperationReceipt(o, e);
      } catch (f) {
        console.warn("Failed to fetch call status from bundler", f, o);
      }
    }
    const a = (i = s.sessionProperties) == null ? void 0 : i.bundler_url;
    if (a)
      try {
        return await this.getUserOperationReceipt(a, e);
      } catch (o) {
        console.warn("Failed to fetch call status from custom bundler", o, a);
      }
    if (this.namespace.methods.includes(e.request.method))
      return await this.client.request(e);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e, t) {
    var i;
    const s = new URL(e),
      n = await fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Tr("eth_getUserOperationReceipt", [
            (i = t.request.params) == null ? void 0 : i[0],
          ])
        ),
      });
    if (!n.ok)
      throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
    return await n.json();
  }
  getBundlerUrl(e, t) {
    return `${m6}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
  }
}
class N6 {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = si(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
class F6 {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        nr.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = si(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
class q6 {
  constructor(e) {
    (this.name = "algorand"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i =
        t ||
        ir(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    (this.chainId = e),
      this.events.emit(
        nr.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        e[t] = this.createHttpProvider(
          t,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    return typeof i > "u"
      ? void 0
      : new sr(new gr(i, Be("disableProviderPing")));
  }
}
class L6 {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        nr.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const i = this.getCardanoRPCUrl(t),
          s = si(t);
        e[s] = this.createHttpProvider(s, i);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || this.getCardanoRPCUrl(e);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
class U6 {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = si(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
class j6 {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = si(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
class z6 {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const i = t || ir(`${this.name}:${e}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        e[t] = this.createHttpProvider(
          t,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace);
    return typeof i > "u"
      ? void 0
      : new sr(new gr(i, Be("disableProviderPing")));
  }
}
class B6 {
  constructor(e) {
    (this.name = ui),
      (this.namespace = e.namespace),
      (this.events = Be("events")),
      (this.client = Be("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    (this.namespace.chains = [
      ...new Set((this.namespace.chains || []).concat(e.chains || [])),
    ]),
      (this.namespace.accounts = [
        ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
      ]),
      (this.namespace.methods = [
        ...new Set((this.namespace.methods || []).concat(e.methods || [])),
      ]),
      (this.namespace.events = [
        ...new Set((this.namespace.events || []).concat(e.events || [])),
      ]),
      (this.httpProviders = this.createHttpProviders());
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(nr.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    var e, t;
    const i = {};
    return (
      (t = (e = this.namespace) == null ? void 0 : e.accounts) == null ||
        t.forEach((s) => {
          const n = pi(s);
          i[`${n.namespace}:${n.reference}`] = this.createHttpProvider(s);
        }),
      i
    );
  }
  getHttpProvider(e) {
    const t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || ir(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new sr(new gr(i, Be("disableProviderPing")));
  }
}
var k6 = Object.defineProperty,
  H6 = Object.defineProperties,
  K6 = Object.getOwnPropertyDescriptors,
  gh = Object.getOwnPropertySymbols,
  V6 = Object.prototype.hasOwnProperty,
  G6 = Object.prototype.propertyIsEnumerable,
  bh = (r, e, t) =>
    e in r
      ? k6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Rs = (r, e) => {
    for (var t in e || (e = {})) V6.call(e, t) && bh(r, t, e[t]);
    if (gh) for (var t of gh(e)) G6.call(e, t) && bh(r, t, e[t]);
    return r;
  },
  Yn = (r, e) => H6(r, K6(e));
let W6 = class au {
  constructor(e) {
    (this.events = new Da()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof (e == null ? void 0 : e.logger) < "u" &&
        typeof (e == null ? void 0 : e.logger) != "string"
          ? e.logger
          : ms(wn({ level: (e == null ? void 0 : e.logger) || nh }))),
      (this.disableProviderPing =
        (e == null ? void 0 : e.disableProviderPing) || !1);
  }
  static async init(e) {
    const t = new au(e);
    return await t.initialize(), t;
  }
  async request(e, t, i) {
    const [s, n] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({
      request: Rs({}, e),
      chainId: `${s}:${n}`,
      topic: this.session.topic,
      expiry: i,
    });
  }
  sendAsync(e, t, i, s) {
    const n = new Date().getTime();
    this.request(e, i, s)
      .then((a) => t(null, _n(n, a)))
      .catch((a) => t(a, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: ke("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  async authenticate(e, t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: i, response: s } = await this.client.authenticate(e, t);
    i && ((this.uri = i), this.events.emit("display_uri", i));
    const n = await s();
    if (((this.session = n.session), this.session)) {
      const a = fh(this.session.namespaces);
      (this.namespaces = Gn(this.namespaces, a)),
        this.persist("namespaces", this.namespaces),
        this.onConnect();
    }
    return n;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: i, approval: s } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      i && ((this.uri = i), this.events.emit("display_uri", i)),
        await s()
          .then((n) => {
            this.session = n;
            const a = fh(n.namespaces);
            (this.namespaces = Gn(this.namespaces, a)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((n) => {
            if (n.message !== ru) throw n;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [i, s] = this.validateChain(e),
        n = this.getProvider(i);
      n.name === ui
        ? n.setDefaultChain(`${i}:${s}`, t)
        : n.setDefaultChain(s, t);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (dr(t)) {
      for (const i of t)
        e.deletePairings
          ? this.client.core.expirer.set(i.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await Xa.init({
        core: this.providerOpts.core,
        logger: this.providerOpts.logger || nh,
        relayUrl: this.providerOpts.relayUrl || b6,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
        customStoragePrefix: this.providerOpts.customStoragePrefix,
        telemetryEnabled: this.providerOpts.telemetryEnabled,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => Xi(t))),
    ];
    Jn("client", this.client),
      Jn("events", this.events),
      Jn("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const i = D6(t, this.session),
          s = su(i),
          n = Gn(this.namespaces, this.optionalNamespaces),
          a = Yn(Rs({}, n[t]), { accounts: i, chains: s });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new $6({ namespace: a });
            break;
          case "algorand":
            this.rpcProviders[t] = new q6({ namespace: a });
            break;
          case "solana":
            this.rpcProviders[t] = new N6({ namespace: a });
            break;
          case "cosmos":
            this.rpcProviders[t] = new F6({ namespace: a });
            break;
          case "polkadot":
            this.rpcProviders[t] = new M6({ namespace: a });
            break;
          case "cip34":
            this.rpcProviders[t] = new L6({ namespace: a });
            break;
          case "elrond":
            this.rpcProviders[t] = new U6({ namespace: a });
            break;
          case "multiversx":
            this.rpcProviders[t] = new j6({ namespace: a });
            break;
          case "near":
            this.rpcProviders[t] = new z6({ namespace: a });
            break;
          default:
            this.rpcProviders[ui]
              ? this.rpcProviders[ui].updateNamespace(a)
              : (this.rpcProviders[ui] = new B6({ namespace: a }));
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: i } = t;
        if (i.name === "accountsChanged") {
          const s = i.data;
          s && dr(s) && this.events.emit("accountsChanged", s.map(P6));
        } else if (i.name === "chainChanged") {
          const s = t.chainId,
            n = t.event.data,
            a = Xi(s),
            o = Wn(s) !== Wn(n) ? `${a}:${Wn(n)}` : s;
          this.onChainChanged(o);
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var i;
        const { namespaces: s } = t,
          n = (i = this.client) == null ? void 0 : i.session.get(e);
        (this.session = Yn(Rs({}, n), { namespaces: s })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Yn(Rs({}, ke("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on(nr.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[ui];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: i, sessionProperties: s } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      i && Object.keys(i).length && (this.optionalNamespaces = i),
      (this.sessionProperties = s),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", i);
  }
  validateChain(e) {
    const [t, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((a) => Xi(a))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && i) return [t, i];
    const s = Xi(Object.keys(this.namespaces)[0]),
      n = this.rpcProviders[s].getDefaultChain();
    return [s, n];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [i, s] = this.validateChain(e);
    s &&
      (t || this.getProvider(i).setDefaultChain(s),
      this.namespaces[i]
        ? (this.namespaces[i].defaultChain = s)
        : this.namespaces[`${i}:${s}`]
        ? (this.namespaces[`${i}:${s}`].defaultChain = s)
        : (this.namespaces[`${i}:${s}`] = { defaultChain: s }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", s));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${ah}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${ah}/${e}`);
  }
};
const J6 = W6,
  Y6 = "wc",
  X6 = "ethereum_provider",
  Q6 = `${Y6}@2:${X6}:`,
  Z6 = "https://rpc.walletconnect.org/v1/",
  _a = ["eth_sendTransaction", "personal_sign"],
  e2 = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
  ],
  Ea = ["chainChanged", "accountsChanged"],
  t2 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var r2 = Object.defineProperty,
  i2 = Object.defineProperties,
  s2 = Object.getOwnPropertyDescriptors,
  vh = Object.getOwnPropertySymbols,
  n2 = Object.prototype.hasOwnProperty,
  a2 = Object.prototype.propertyIsEnumerable,
  yh = (r, e, t) =>
    e in r
      ? r2(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  di = (r, e) => {
    for (var t in e || (e = {})) n2.call(e, t) && yh(r, t, e[t]);
    if (vh) for (var t of vh(e)) a2.call(e, t) && yh(r, t, e[t]);
    return r;
  },
  Xn = (r, e) => i2(r, s2(e));
function tn(r) {
  return Number(r[0].split(":")[1]);
}
function $s(r) {
  return `0x${r.toString(16)}`;
}
function o2(r) {
  const {
    chains: e,
    optionalChains: t,
    methods: i,
    optionalMethods: s,
    events: n,
    optionalEvents: a,
    rpcMap: o,
  } = r;
  if (!dr(e)) throw new Error("Invalid chains");
  const f = {
      chains: e,
      methods: i || _a,
      events: n || Ea,
      rpcMap: di({}, e.length ? { [tn(e)]: o[tn(e)] } : {}),
    },
    h = n == null ? void 0 : n.filter((w) => !Ea.includes(w)),
    g = i == null ? void 0 : i.filter((w) => !_a.includes(w));
  if (!t && !a && !s && !(h != null && h.length) && !(g != null && g.length))
    return { required: e.length ? f : void 0 };
  const y =
      ((h == null ? void 0 : h.length) && (g == null ? void 0 : g.length)) ||
      !t,
    E = {
      chains: [...new Set(y ? f.chains.concat(t || []) : t)],
      methods: [...new Set(f.methods.concat(s != null && s.length ? s : e2))],
      events: [...new Set(f.events.concat(a != null && a.length ? a : t2))],
      rpcMap: o,
    };
  return { required: e.length ? f : void 0, optional: t.length ? E : void 0 };
}
class ou {
  constructor() {
    (this.events = new Gt.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = Q6),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new ou();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, i) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: i } = o2(this.rpc);
    try {
      const s = await new Promise(async (a, o) => {
        var f;
        this.rpc.showQrModal &&
          ((f = this.modal) == null ||
            f.subscribeModal((h) => {
              !h.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                o(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Xn(
                di(
                  { namespaces: di({}, t && { [this.namespace]: t }) },
                  i && { optionalNamespaces: { [this.namespace]: i } }
                ),
                { pairingTopic: e == null ? void 0 : e.pairingTopic }
              )
            )
            .then((h) => {
              a(h);
            })
            .catch((h) => {
              o(new Error(h.message));
            });
      });
      if (!s) return;
      const n = Lo(s.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
        this.setAccounts(n),
        this.events.emit("connect", { chainId: $s(this.chainId) });
    } catch (s) {
      throw (this.signer.logger.error(s), s);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(e, t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const i = await new Promise(async (n, a) => {
          var o;
          this.rpc.showQrModal &&
            ((o = this.modal) == null ||
              o.subscribeModal((f) => {
                !f.open &&
                  !this.signer.session &&
                  (this.signer.abortPairingAttempt(),
                  a(new Error("Connection request reset. Please try again.")));
              })),
            await this.signer
              .authenticate(Xn(di({}, e), { chains: this.rpc.chains }), t)
              .then((f) => {
                n(f);
              })
              .catch((f) => {
                a(new Error(f.message));
              });
        }),
        s = i.session;
      if (s) {
        const n = Lo(s.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
          this.setAccounts(n),
          this.events.emit("connect", { chainId: $s(this.chainId) });
      }
      return i;
    } catch (i) {
      throw (this.signer.logger.error(i), i);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: i } = t;
      i.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(i.data)),
          this.events.emit("accountsChanged", this.accounts))
        : i.name === "chainChanged"
        ? this.setChainId(this.formatChainId(i.data))
        : this.events.emit(i.name, i.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", $s(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Xn(di({}, ke("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, i;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (i = this.modal) == null || i.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((i) => this.isCompatibleChainId(i))
      .map((i) => this.parseChainId(i));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", $s(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, i, s] = e.split(":");
    return { chainId: `${t}:${i}`, address: s };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, i;
    const s = (t = e == null ? void 0 : e.chains) != null ? t : [],
      n = (i = e == null ? void 0 : e.optionalChains) != null ? i : [],
      a = s.concat(n);
    if (!a.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const o = s.length ? (e == null ? void 0 : e.methods) || _a : [],
      f = s.length ? (e == null ? void 0 : e.events) || Ea : [],
      h = (e == null ? void 0 : e.optionalMethods) || [],
      g = (e == null ? void 0 : e.optionalEvents) || [],
      y = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(a, e.projectId),
      E = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return {
      chains: s == null ? void 0 : s.map((w) => this.formatChainId(w)),
      optionalChains: n.map((w) => this.formatChainId(w)),
      methods: o,
      events: f,
      optionalMethods: h,
      optionalEvents: g,
      rpcMap: y,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: E,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const i = {};
    return (
      e.forEach((s) => {
        i[s] = this.getRpcUrl(s, t);
      }),
      i
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? tn(this.rpc.chains)
        : tn(this.rpc.optionalChains)),
      (this.signer = await J6.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
        customStoragePrefix: e.customStoragePrefix,
        telemetryEnabled: e.telemetryEnabled,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: i } = await Fu(
          () => import("./index-BurEAbzY.js").then((s) => s.i),
          __vite__mapDeps([0, 1, 2])
        );
        t = i;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            di({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (i) {
          throw (
            (this.signer.logger.error(i),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: i, rpcMap: s } = e;
    t &&
      dr(t) &&
      ((this.rpc.chains = t.map((n) => this.formatChainId(n))),
      t.forEach((n) => {
        this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
      })),
      i &&
        dr(i) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          i == null ? void 0 : i.map((n) => this.formatChainId(n))),
        i.forEach((n) => {
          this.rpc.rpcMap[n] = (s == null ? void 0 : s[n]) || this.getRpcUrl(n);
        }));
  }
  getRpcUrl(e, t) {
    var i;
    return (
      ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) ||
      `${Z6}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (this.session)
      try {
        const e = await this.signer.client.core.storage.getItem(
            `${this.STORAGE_KEY}/chainId`
          ),
          t = this.session.namespaces[`${this.namespace}:${e}`]
            ? this.session.namespaces[`${this.namespace}:${e}`]
            : this.session.namespaces[this.namespace];
        this.setChainIds(
          e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts
        ),
          this.setAccounts(t == null ? void 0 : t.accounts);
      } catch (e) {
        this.signer.logger.error(
          "Failed to load persisted session, clearing state..."
        ),
          this.signer.logger.error(e),
          await this.disconnect().catch((t) => this.signer.logger.warn(t));
      }
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
export {
  t2 as OPTIONAL_EVENTS,
  e2 as OPTIONAL_METHODS,
  Ea as REQUIRED_EVENTS,
  _a as REQUIRED_METHODS,
  ou as default,
};
