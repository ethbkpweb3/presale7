import {c as E, e as v, E as y, S, a as w, O as p, m as O, i as j, b as x, d as A, f as a} from "./index-YFI_ZhEv.js";
import {j as Q, g as D, U as G, k as K, h as V, n as W, o as X, t as Z, l as $} from "./index-YFI_ZhEv.js";
import {al as m, am as C, an as I, ao as _} from "./index-CpP-AC1q.js";
var L = E(function(n) {
    return function() {
        n(this),
        this.name = "ObjectUnsubscribedError",
        this.message = "object unsubscribed"
    }
})
  , M = function(n) {
    m(t, n);
    function t() {
        var r = n.call(this) || this;
        return r.closed = !1,
        r.currentObservers = null,
        r.observers = [],
        r.isStopped = !1,
        r.hasError = !1,
        r.thrownError = null,
        r
    }
    return t.prototype.lift = function(r) {
        var e = new d(this,this);
        return e.operator = r,
        e
    }
    ,
    t.prototype._throwIfClosed = function() {
        if (this.closed)
            throw new L
    }
    ,
    t.prototype.next = function(r) {
        var e = this;
        v(function() {
            var o, s;
            if (e._throwIfClosed(),
            !e.isStopped) {
                e.currentObservers || (e.currentObservers = Array.from(e.observers));
                try {
                    for (var u = C(e.currentObservers), i = u.next(); !i.done; i = u.next()) {
                        var c = i.value;
                        c.next(r)
                    }
                } catch (l) {
                    o = {
                        error: l
                    }
                } finally {
                    try {
                        i && !i.done && (s = u.return) && s.call(u)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
            }
        })
    }
    ,
    t.prototype.error = function(r) {
        var e = this;
        v(function() {
            if (e._throwIfClosed(),
            !e.isStopped) {
                e.hasError = e.isStopped = !0,
                e.thrownError = r;
                for (var o = e.observers; o.length; )
                    o.shift().error(r)
            }
        })
    }
    ,
    t.prototype.complete = function() {
        var r = this;
        v(function() {
            if (r._throwIfClosed(),
            !r.isStopped) {
                r.isStopped = !0;
                for (var e = r.observers; e.length; )
                    e.shift().complete()
            }
        })
    }
    ,
    t.prototype.unsubscribe = function() {
        this.isStopped = this.closed = !0,
        this.observers = this.currentObservers = null
    }
    ,
    Object.defineProperty(t.prototype, "observed", {
        get: function() {
            var r;
            return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype._trySubscribe = function(r) {
        return this._throwIfClosed(),
        n.prototype._trySubscribe.call(this, r)
    }
    ,
    t.prototype._subscribe = function(r) {
        return this._throwIfClosed(),
        this._checkFinalizedStatuses(r),
        this._innerSubscribe(r)
    }
    ,
    t.prototype._innerSubscribe = function(r) {
        var e = this
          , o = this
          , s = o.hasError
          , u = o.isStopped
          , i = o.observers;
        return s || u ? y : (this.currentObservers = null,
        i.push(r),
        new S(function() {
            e.currentObservers = null,
            w(i, r)
        }
        ))
    }
    ,
    t.prototype._checkFinalizedStatuses = function(r) {
        var e = this
          , o = e.hasError
          , s = e.thrownError
          , u = e.isStopped;
        o ? r.error(s) : u && r.complete()
    }
    ,
    t.prototype.asObservable = function() {
        var r = new p;
        return r.source = this,
        r
    }
    ,
    t.create = function(r, e) {
        return new d(r,e)
    }
    ,
    t
}(p)
  , d = function(n) {
    m(t, n);
    function t(r, e) {
        var o = n.call(this) || this;
        return o.destination = r,
        o.source = e,
        o
    }
    return t.prototype.next = function(r) {
        var e, o;
        (o = (e = this.destination) === null || e === void 0 ? void 0 : e.next) === null || o === void 0 || o.call(e, r)
    }
    ,
    t.prototype.error = function(r) {
        var e, o;
        (o = (e = this.destination) === null || e === void 0 ? void 0 : e.error) === null || o === void 0 || o.call(e, r)
    }
    ,
    t.prototype.complete = function() {
        var r, e;
        (e = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || e === void 0 || e.call(r)
    }
    ,
    t.prototype._subscribe = function(r) {
        var e, o;
        return (o = (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(r)) !== null && o !== void 0 ? o : y
    }
    ,
    t
}(M)
  , U = Array.isArray;
function g(n, t) {
    return U(t) ? n.apply(void 0, I([], _(t))) : n(t)
}
function k(n) {
    return O(function(t) {
        return g(n, t)
    })
}
var T = ["addListener", "removeListener"]
  , F = ["addEventListener", "removeEventListener"]
  , P = ["on", "off"];
function h(n, t, r, e) {
    if (a(r) && (e = r,
    r = void 0),
    e)
        return h(n, t, r).pipe(k(e));
    var o = _(Y(n) ? F.map(function(i) {
        return function(c) {
            return n[i](t, c, r)
        }
    }) : R(n) ? T.map(b(n, t)) : z(n) ? P.map(b(n, t)) : [], 2)
      , s = o[0]
      , u = o[1];
    if (!s && j(n))
        return x(function(i) {
            return h(i, t, r)
        })(A(n));
    if (!s)
        throw new TypeError("Invalid event target");
    return new p(function(i) {
        var c = function() {
            for (var l = [], f = 0; f < arguments.length; f++)
                l[f] = arguments[f];
            return i.next(1 < l.length ? l : l[0])
        };
        return s(c),
        function() {
            return u(c)
        }
    }
    )
}
function b(n, t) {
    return function(r) {
        return function(e) {
            return n[r](t, e)
        }
    }
}
function R(n) {
    return a(n.addListener) && a(n.removeListener)
}
function z(n) {
    return a(n.on) && a(n.off)
}
function Y(n) {
    return a(n.addEventListener) && a(n.removeEventListener)
}
export {Q as EMPTY, L as ObjectUnsubscribedError, p as Observable, M as Subject, D as Subscriber, S as Subscription, G as UnsubscriptionError, K as config, h as fromEvent, V as identity, O as map, x as mergeMap, W as noop, X as observable, Z as take, $ as takeUntil};
