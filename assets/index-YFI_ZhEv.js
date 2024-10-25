import {am as I, an as A, ao as _, al as U, c5 as Q, c6 as D, c7 as E, c8 as W, c9 as X} from "./index-CpP-AC1q.js";
function s(r) {
    return typeof r == "function"
}
function Z(r) {
    var t = function(n) {
        Error.call(n),
        n.stack = new Error().stack
    }
      , e = r(t);
    return e.prototype = Object.create(Error.prototype),
    e.prototype.constructor = e,
    e
}
var P = Z(function(r) {
    return function(e) {
        r(this),
        this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(n, o) {
            return o + 1 + ") " + n.toString()
        }).join(`
  `) : "",
        this.name = "UnsubscriptionError",
        this.errors = e
    }
});
function C(r, t) {
    if (r) {
        var e = r.indexOf(t);
        0 <= e && r.splice(e, 1)
    }
}
var R = function() {
    function r(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    return r.prototype.unsubscribe = function() {
        var t, e, n, o, i;
        if (!this.closed) {
            this.closed = !0;
            var u = this._parentage;
            if (u)
                if (this._parentage = null,
                Array.isArray(u))
                    try {
                        for (var c = I(u), a = c.next(); !a.done; a = c.next()) {
                            var l = a.value;
                            l.remove(this)
                        }
                    } catch (f) {
                        t = {
                            error: f
                        }
                    } finally {
                        try {
                            a && !a.done && (e = c.return) && e.call(c)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                else
                    u.remove(this);
            var h = this.initialTeardown;
            if (s(h))
                try {
                    h()
                } catch (f) {
                    i = f instanceof P ? f.errors : [f]
                }
            var y = this._finalizers;
            if (y) {
                this._finalizers = null;
                try {
                    for (var d = I(y), p = d.next(); !p.done; p = d.next()) {
                        var m = p.value;
                        try {
                            j(m)
                        } catch (f) {
                            i = i ?? [],
                            f instanceof P ? i = A(A([], _(i)), _(f.errors)) : i.push(f)
                        }
                    }
                } catch (f) {
                    n = {
                        error: f
                    }
                } finally {
                    try {
                        p && !p.done && (o = d.return) && o.call(d)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            if (i)
                throw new P(i)
        }
    }
    ,
    r.prototype.add = function(t) {
        var e;
        if (t && t !== this)
            if (this.closed)
                j(t);
            else {
                if (t instanceof r) {
                    if (t.closed || t._hasParent(this))
                        return;
                    t._addParent(this)
                }
                (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t)
            }
    }
    ,
    r.prototype._hasParent = function(t) {
        var e = this._parentage;
        return e === t || Array.isArray(e) && e.includes(t)
    }
    ,
    r.prototype._addParent = function(t) {
        var e = this._parentage;
        this._parentage = Array.isArray(e) ? (e.push(t),
        e) : e ? [e, t] : t
    }
    ,
    r.prototype._removeParent = function(t) {
        var e = this._parentage;
        e === t ? this._parentage = null : Array.isArray(e) && C(e, t)
    }
    ,
    r.prototype.remove = function(t) {
        var e = this._finalizers;
        e && C(e, t),
        t instanceof r && t._removeParent(this)
    }
    ,
    r.EMPTY = function() {
        var t = new r;
        return t.closed = !0,
        t
    }(),
    r
}()
  , kr = R.EMPTY;
function G(r) {
    return r instanceof R || r && "closed"in r && s(r.remove) && s(r.add) && s(r.unsubscribe)
}
function j(r) {
    s(r) ? r() : r.unsubscribe()
}
var V = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
}
  , H = {
    setTimeout: function(r, t) {
        for (var e = [], n = 2; n < arguments.length; n++)
            e[n - 2] = arguments[n];
        return setTimeout.apply(void 0, A([r, t], _(e)))
    },
    clearTimeout: function(r) {
        var t = H.delegate;
        return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(r)
    },
    delegate: void 0
};
function z(r) {
    H.setTimeout(function() {
        throw r
    })
}
function O() {}
function $(r) {
    r()
}
var F = function(r) {
    U(t, r);
    function t(e) {
        var n = r.call(this) || this;
        return n.isStopped = !1,
        e ? (n.destination = e,
        G(e) && e.add(n)) : n.destination = tr,
        n
    }
    return t.create = function(e, n, o) {
        return new k(e,n,o)
    }
    ,
    t.prototype.next = function(e) {
        this.isStopped || this._next(e)
    }
    ,
    t.prototype.error = function(e) {
        this.isStopped || (this.isStopped = !0,
        this._error(e))
    }
    ,
    t.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0,
        this._complete())
    }
    ,
    t.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0,
        r.prototype.unsubscribe.call(this),
        this.destination = null)
    }
    ,
    t.prototype._next = function(e) {
        this.destination.next(e)
    }
    ,
    t.prototype._error = function(e) {
        try {
            this.destination.error(e)
        } finally {
            this.unsubscribe()
        }
    }
    ,
    t.prototype._complete = function() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
    ,
    t
}(R)
  , N = Function.prototype.bind;
function T(r, t) {
    return N.call(r, t)
}
var rr = function() {
    function r(t) {
        this.partialObserver = t
    }
    return r.prototype.next = function(t) {
        var e = this.partialObserver;
        if (e.next)
            try {
                e.next(t)
            } catch (n) {
                S(n)
            }
    }
    ,
    r.prototype.error = function(t) {
        var e = this.partialObserver;
        if (e.error)
            try {
                e.error(t)
            } catch (n) {
                S(n)
            }
        else
            S(t)
    }
    ,
    r.prototype.complete = function() {
        var t = this.partialObserver;
        if (t.complete)
            try {
                t.complete()
            } catch (e) {
                S(e)
            }
    }
    ,
    r
}()
  , k = function(r) {
    U(t, r);
    function t(e, n, o) {
        var i = r.call(this) || this, u;
        if (s(e) || !e)
            u = {
                next: e ?? void 0,
                error: n ?? void 0,
                complete: o ?? void 0
            };
        else {
            var c;
            i && V.useDeprecatedNextContext ? (c = Object.create(e),
            c.unsubscribe = function() {
                return i.unsubscribe()
            }
            ,
            u = {
                next: e.next && T(e.next, c),
                error: e.error && T(e.error, c),
                complete: e.complete && T(e.complete, c)
            }) : u = e
        }
        return i.destination = new rr(u),
        i
    }
    return t
}(F);
function S(r) {
    z(r)
}
function er(r) {
    throw r
}
var tr = {
    closed: !0,
    next: O,
    error: er,
    complete: O
}
  , L = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}();
function nr(r) {
    return r
}
function or(r) {
    return r.length === 0 ? nr : r.length === 1 ? r[0] : function(e) {
        return r.reduce(function(n, o) {
            return o(n)
        }, e)
    }
}
var v = function() {
    function r(t) {
        t && (this._subscribe = t)
    }
    return r.prototype.lift = function(t) {
        var e = new r;
        return e.source = this,
        e.operator = t,
        e
    }
    ,
    r.prototype.subscribe = function(t, e, n) {
        var o = this
          , i = ur(t) ? t : new k(t,e,n);
        return $(function() {
            var u = o
              , c = u.operator
              , a = u.source;
            i.add(c ? c.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i))
        }),
        i
    }
    ,
    r.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch (e) {
            t.error(e)
        }
    }
    ,
    r.prototype.forEach = function(t, e) {
        var n = this;
        return e = B(e),
        new e(function(o, i) {
            var u = new k({
                next: function(c) {
                    try {
                        t(c)
                    } catch (a) {
                        i(a),
                        u.unsubscribe()
                    }
                },
                error: i,
                complete: o
            });
            n.subscribe(u)
        }
        )
    }
    ,
    r.prototype._subscribe = function(t) {
        var e;
        return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t)
    }
    ,
    r.prototype[L] = function() {
        return this
    }
    ,
    r.prototype.pipe = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return or(t)(this)
    }
    ,
    r.prototype.toPromise = function(t) {
        var e = this;
        return t = B(t),
        new t(function(n, o) {
            var i;
            e.subscribe(function(u) {
                return i = u
            }, function(u) {
                return o(u)
            }, function() {
                return n(i)
            })
        }
        )
    }
    ,
    r.create = function(t) {
        return new r(t)
    }
    ,
    r
}();
function B(r) {
    var t;
    return (t = r ?? V.Promise) !== null && t !== void 0 ? t : Promise
}
function ir(r) {
    return r && s(r.next) && s(r.error) && s(r.complete)
}
function ur(r) {
    return r && r instanceof F || ir(r) && G(r)
}
function ar(r) {
    return s(r == null ? void 0 : r.lift)
}
function g(r) {
    return function(t) {
        if (ar(t))
            return t.lift(function(e) {
                try {
                    return r(e, this)
                } catch (n) {
                    this.error(n)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function b(r, t, e, n, o) {
    return new cr(r,t,e,n,o)
}
var cr = function(r) {
    U(t, r);
    function t(e, n, o, i, u, c) {
        var a = r.call(this, e) || this;
        return a.onFinalize = u,
        a.shouldUnsubscribe = c,
        a._next = n ? function(l) {
            try {
                n(l)
            } catch (h) {
                e.error(h)
            }
        }
        : r.prototype._next,
        a._error = i ? function(l) {
            try {
                i(l)
            } catch (h) {
                e.error(h)
            } finally {
                this.unsubscribe()
            }
        }
        : r.prototype._error,
        a._complete = o ? function() {
            try {
                o()
            } catch (l) {
                e.error(l)
            } finally {
                this.unsubscribe()
            }
        }
        : r.prototype._complete,
        a
    }
    return t.prototype.unsubscribe = function() {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var n = this.closed;
            r.prototype.unsubscribe.call(this),
            !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this))
        }
    }
    ,
    t
}(F)
  , sr = new v(function(r) {
    return r.complete()
}
)
  , fr = function(r) {
    return r && typeof r.length == "number" && typeof r != "function"
};
function lr(r) {
    return s(r == null ? void 0 : r.then)
}
function hr(r) {
    return s(r[L])
}
function dr(r) {
    return Symbol.asyncIterator && s(r == null ? void 0 : r[Symbol.asyncIterator])
}
function pr(r) {
    return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
function vr() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var yr = vr();
function br(r) {
    return s(r == null ? void 0 : r[yr])
}
function mr(r) {
    return Q(this, arguments, function() {
        var e, n, o, i;
        return D(this, function(u) {
            switch (u.label) {
            case 0:
                e = r.getReader(),
                u.label = 1;
            case 1:
                u.trys.push([1, , 9, 10]),
                u.label = 2;
            case 2:
                return [4, E(e.read())];
            case 3:
                return n = u.sent(),
                o = n.value,
                i = n.done,
                i ? [4, E(void 0)] : [3, 5];
            case 4:
                return [2, u.sent()];
            case 5:
                return [4, E(o)];
            case 6:
                return [4, u.sent()];
            case 7:
                return u.sent(),
                [3, 2];
            case 8:
                return [3, 10];
            case 9:
                return e.releaseLock(),
                [7];
            case 10:
                return [2]
            }
        })
    })
}
function Sr(r) {
    return s(r == null ? void 0 : r.getReader)
}
function M(r) {
    if (r instanceof v)
        return r;
    if (r != null) {
        if (hr(r))
            return gr(r);
        if (fr(r))
            return wr(r);
        if (lr(r))
            return xr(r);
        if (dr(r))
            return q(r);
        if (br(r))
            return Er(r);
        if (Sr(r))
            return Pr(r)
    }
    throw pr(r)
}
function gr(r) {
    return new v(function(t) {
        var e = r[L]();
        if (s(e.subscribe))
            return e.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function wr(r) {
    return new v(function(t) {
        for (var e = 0; e < r.length && !t.closed; e++)
            t.next(r[e]);
        t.complete()
    }
    )
}
function xr(r) {
    return new v(function(t) {
        r.then(function(e) {
            t.closed || (t.next(e),
            t.complete())
        }, function(e) {
            return t.error(e)
        }).then(null, z)
    }
    )
}
function Er(r) {
    return new v(function(t) {
        var e, n;
        try {
            for (var o = I(r), i = o.next(); !i.done; i = o.next()) {
                var u = i.value;
                if (t.next(u),
                t.closed)
                    return
            }
        } catch (c) {
            e = {
                error: c
            }
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (e)
                    throw e.error
            }
        }
        t.complete()
    }
    )
}
function q(r) {
    return new v(function(t) {
        Tr(r, t).catch(function(e) {
            return t.error(e)
        })
    }
    )
}
function Pr(r) {
    return q(mr(r))
}
function Tr(r, t) {
    var e, n, o, i;
    return W(this, void 0, void 0, function() {
        var u, c;
        return D(this, function(a) {
            switch (a.label) {
            case 0:
                a.trys.push([0, 5, 6, 11]),
                e = X(r),
                a.label = 1;
            case 1:
                return [4, e.next()];
            case 2:
                if (n = a.sent(),
                !!n.done)
                    return [3, 4];
                if (u = n.value,
                t.next(u),
                t.closed)
                    return [2];
                a.label = 3;
            case 3:
                return [3, 1];
            case 4:
                return [3, 11];
            case 5:
                return c = a.sent(),
                o = {
                    error: c
                },
                [3, 11];
            case 6:
                return a.trys.push([6, , 9, 10]),
                n && !n.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
            case 7:
                a.sent(),
                a.label = 8;
            case 8:
                return [3, 10];
            case 9:
                if (o)
                    throw o.error;
                return [7];
            case 10:
                return [7];
            case 11:
                return t.complete(),
                [2]
            }
        })
    })
}
function J(r, t) {
    return g(function(e, n) {
        var o = 0;
        e.subscribe(b(n, function(i) {
            n.next(r.call(t, i, o++))
        }))
    })
}
function Ir(r, t, e, n, o, i, u, c) {
    var a = []
      , l = 0
      , h = 0
      , y = !1
      , d = function() {
        y && !a.length && !l && t.complete()
    }
      , p = function(f) {
        return l < n ? m(f) : a.push(f)
    }
      , m = function(f) {
        l++;
        var Y = !1;
        M(e(f, h++)).subscribe(b(t, function(w) {
            t.next(w)
        }, function() {
            Y = !0
        }, void 0, function() {
            if (Y)
                try {
                    l--;
                    for (var w = function() {
                        var x = a.shift();
                        u || m(x)
                    }; a.length && l < n; )
                        w();
                    d()
                } catch (x) {
                    t.error(x)
                }
        }))
    };
    return r.subscribe(b(t, p, function() {
        y = !0,
        d()
    })),
    function() {}
}
function K(r, t, e) {
    return e === void 0 && (e = 1 / 0),
    s(t) ? K(function(n, o) {
        return J(function(i, u) {
            return t(n, i, o, u)
        })(M(r(n, o)))
    }, e) : (typeof t == "number" && (e = t),
    g(function(n, o) {
        return Ir(n, o, r, e)
    }))
}
function Ar(r) {
    return r <= 0 ? function() {
        return sr
    }
    : g(function(t, e) {
        var n = 0;
        t.subscribe(b(e, function(o) {
            ++n <= r && (e.next(o),
            r <= n && e.complete())
        }))
    })
}
function _r(r) {
    return g(function(t, e) {
        M(r).subscribe(b(e, function() {
            return e.complete()
        }, O)),
        !e.closed && t.subscribe(e)
    })
}
const Ur = Object.freeze(Object.defineProperty({
    __proto__: null,
    map: J,
    mergeMap: K,
    take: Ar,
    takeUntil: _r
}, Symbol.toStringTag, {
    value: "Module"
}));
export {kr as E, v as O, R as S, P as U, C as a, K as b, Z as c, M as d, $ as e, s as f, F as g, nr as h, fr as i, sr as j, V as k, _r as l, J as m, O as n, L as o, Ur as p, Ar as t};
