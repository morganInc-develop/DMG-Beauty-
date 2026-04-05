var Lr = Object.defineProperty;
var Ar = (s, t, e) =>
  t in s
    ? Lr(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var Rn = (s, t, e) => Ar(s, typeof t != "symbol" ? t + "" : t, e);
function us(s) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (us = function (t) {
          return typeof t;
        })
      : (us = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    us(s)
  );
}
function hi(s, t) {
  if (!(s instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kr(s, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(s, n.key, n));
  }
}
function di(s, t, e) {
  return (t && kr(s.prototype, t), s);
}
function Dn(s, t, e) {
  return (
    t in s
      ? Object.defineProperty(s, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[t] = e),
    s
  );
}
function is(s, t) {
  return Or(s) || Rr(s, t) || fi(s, t) || Fr();
}
function Mr(s) {
  return Pr(s) || $r(s) || fi(s) || Dr();
}
function Pr(s) {
  if (Array.isArray(s)) return qs(s);
}
function Or(s) {
  if (Array.isArray(s)) return s;
}
function $r(s) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
}
function Rr(s, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
    var e = [],
      n = !0,
      i = !1,
      r = void 0;
    try {
      for (
        var o = s[Symbol.iterator](), l;
        !(n = (l = o.next()).done) && (e.push(l.value), !(t && e.length === t));
        n = !0
      );
    } catch (a) {
      ((i = !0), (r = a));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw r;
      }
    }
    return e;
  }
}
function fi(s, t) {
  if (s) {
    if (typeof s == "string") return qs(s, t);
    var e = Object.prototype.toString.call(s).slice(8, -1);
    if (
      (e === "Object" && s.constructor && (e = s.constructor.name),
      e === "Map" || e === "Set")
    )
      return Array.from(s);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return qs(s, t);
  }
}
function qs(s, t) {
  (t == null || t > s.length) && (t = s.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = s[e];
  return n;
}
function Dr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var nt = (function () {
    function s(t) {
      (hi(this, s),
        (this.mAttr = "data-" + t.dataName),
        (this.mCaptureEvents = ["mouseenter", "mouseleave"]),
        (this.el = t.el));
    }
    return (
      di(s, [
        {
          key: "mInit",
          value: function (e) {
            var n = this;
            ((this.modules = e),
              (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
              this.events &&
                Object.keys(this.events).forEach(function (i) {
                  return n.mAddEvent(i);
                }));
          },
        },
        {
          key: "mUpdate",
          value: function (e) {
            this.modules = e;
          },
        },
        {
          key: "mDestroy",
          value: function () {
            var e = this;
            this.events &&
              Object.keys(this.events).forEach(function (n) {
                return e.mRemoveEvent(n);
              });
          },
        },
        {
          key: "mAddEvent",
          value: function (e) {
            var n = !!this.mCaptureEvents.includes(e);
            this.el.addEventListener(e, this.mCheckEventTarget, n);
          },
        },
        {
          key: "mRemoveEvent",
          value: function (e) {
            var n = !!this.mCaptureEvents.includes(e);
            this.el.removeEventListener(e, this.mCheckEventTarget, n);
          },
        },
        {
          key: "mCheckEventTarget",
          value: function (e) {
            var n = this.events[e.type];
            if (typeof n == "string") this[n](e);
            else {
              var i = "[" + this.mAttr + "]",
                r = e.target;
              if (this.mCaptureEvents.includes(e.type))
                r.matches(i) && this.mCallEventMethod(e, n, r);
              else
                for (
                  ;
                  r &&
                  r !== document &&
                  !(
                    r.matches(i) &&
                    this.mCallEventMethod(e, n, r) != "undefined"
                  );
                )
                  r = r.parentNode;
            }
          },
        },
        {
          key: "mCallEventMethod",
          value: function (e, n, i) {
            var r = i.getAttribute(this.mAttr);
            if (n.hasOwnProperty(r)) {
              var o = n[r];
              (e.hasOwnProperty("currentTarget") ||
                Object.defineProperty(e, "currentTarget", { value: i }),
                e.hasOwnProperty("curTarget") ||
                  Object.defineProperty(e, "curTarget", { value: i }),
                this[o](e));
            }
          },
        },
        {
          key: "$",
          value: function (e, n) {
            var i = e.indexOf("."),
              r = e.indexOf("#"),
              o = e.indexOf("["),
              l = [i, r, o].filter(function (d) {
                return d != -1;
              }),
              a = !1,
              c = e,
              u = "",
              h = this.el;
            return (
              l.length &&
                ((a = Math.min.apply(Math, Mr(l))),
                (c = e.slice(0, a)),
                (u = e.slice(a))),
              us(n) == "object" && (h = n),
              h.querySelectorAll("[" + this.mAttr + "=" + c + "]" + u)
            );
          },
        },
        {
          key: "parent",
          value: function (e, n) {
            for (
              var i = "[" + this.mAttr + "=" + e + "]", r = n.parentNode;
              r && r !== document;
            ) {
              if (r.matches(i)) return r;
              r = r.parentNode;
            }
          },
        },
        {
          key: "getData",
          value: function (e, n) {
            var i = n || this.el;
            return i.getAttribute(this.mAttr + "-" + e);
          },
        },
        {
          key: "setData",
          value: function (e, n, i) {
            var r = i || this.el;
            return r.setAttribute(this.mAttr + "-" + e, n);
          },
        },
        {
          key: "call",
          value: function (e, n, i, r) {
            var o = this;
            (n && !i && ((i = n), (n = !1)),
              this.modules[i] &&
                (r
                  ? this.modules[i][r] && this.modules[i][r][e](n)
                  : Object.keys(this.modules[i]).forEach(function (l) {
                      o.modules[i][l][e](n);
                    })));
          },
        },
        {
          key: "on",
          value: function (e, n, i, r) {
            var o = this;
            this.modules[n] &&
              (r
                ? this.modules[n][r].el.addEventListener(e, function (l) {
                    return i(l);
                  })
                : Object.keys(this.modules[n]).forEach(function (l) {
                    o.modules[n][l].el.addEventListener(e, function (a) {
                      return i(a);
                    });
                  }));
          },
        },
        { key: "init", value: function () {} },
        { key: "destroy", value: function () {} },
      ]),
      s
    );
  })(),
  Nr = (function () {
    function s(t) {
      (hi(this, s),
        this.app,
        (this.modules = t.modules),
        (this.currentModules = {}),
        (this.activeModules = {}),
        (this.newModules = {}),
        (this.moduleId = 0));
    }
    return (
      di(s, [
        {
          key: "init",
          value: function (e, n) {
            var i = this,
              r = n || document,
              o = r.querySelectorAll("*");
            (e && !this.app && (this.app = e),
              (this.activeModules.app = { app: this.app }),
              o.forEach(function (l) {
                Array.from(l.attributes).forEach(function (a) {
                  if (a.name.startsWith("data-module")) {
                    var c = !1,
                      u = a.name.split("-").splice(2),
                      h = i.toCamel(u);
                    if (
                      (i.modules[h]
                        ? (c = !0)
                        : i.modules[i.toUpper(h)] &&
                          ((h = i.toUpper(h)), (c = !0)),
                      c)
                    ) {
                      var d = { el: l, name: h, dataName: u.join("-") },
                        p = new i.modules[h](d),
                        f = a.value;
                      (f ||
                        (i.moduleId++,
                        (f = "m" + i.moduleId),
                        l.setAttribute(a.name, f)),
                        i.addActiveModule(h, f, p));
                      var m = h + "-" + f;
                      n ? (i.newModules[m] = p) : (i.currentModules[m] = p);
                    }
                  }
                });
              }),
              Object.entries(this.currentModules).forEach(function (l) {
                var a = is(l, 2),
                  c = a[0],
                  u = a[1];
                if (n) {
                  var h = c.split("-"),
                    d = h.shift(),
                    p = h.pop();
                  i.addActiveModule(d, p, u);
                } else i.initModule(u);
              }));
          },
        },
        {
          key: "initModule",
          value: function (e) {
            (e.mInit(this.activeModules), e.init());
          },
        },
        {
          key: "addActiveModule",
          value: function (e, n, i) {
            this.activeModules[e]
              ? Object.assign(this.activeModules[e], Dn({}, n, i))
              : (this.activeModules[e] = Dn({}, n, i));
          },
        },
        {
          key: "update",
          value: function (e) {
            var n = this;
            (this.init(this.app, e),
              Object.entries(this.currentModules).forEach(function (i) {
                var r = is(i, 2);
                r[0];
                var o = r[1];
                o.mUpdate(n.activeModules);
              }),
              Object.entries(this.newModules).forEach(function (i) {
                var r = is(i, 2);
                r[0];
                var o = r[1];
                n.initModule(o);
              }),
              Object.assign(this.currentModules, this.newModules));
          },
        },
        {
          key: "destroy",
          value: function (e) {
            e ? this.destroyScope(e) : this.destroyModules();
          },
        },
        {
          key: "destroyScope",
          value: function (e) {
            var n = this,
              i = e.querySelectorAll("*");
            (i.forEach(function (r) {
              Array.from(r.attributes).forEach(function (o) {
                if (o.name.startsWith("data-module")) {
                  var l = o.value,
                    a = o.name.split("-").splice(2),
                    c = n.toCamel(a) + "-" + l,
                    u = !1;
                  (n.currentModules[c]
                    ? (u = !0)
                    : n.currentModules[n.toUpper(c)] &&
                      ((c = n.toUpper(c)), (u = !0)),
                    u &&
                      (n.destroyModule(n.currentModules[c]),
                      delete n.currentModules[c]));
                }
              });
            }),
              (this.activeModules = {}),
              (this.newModules = {}));
          },
        },
        {
          key: "destroyModules",
          value: function () {
            var e = this;
            (Object.entries(this.currentModules).forEach(function (n) {
              var i = is(n, 2);
              i[0];
              var r = i[1];
              e.destroyModule(r);
            }),
              (this.currentModules = []));
          },
        },
        {
          key: "destroyModule",
          value: function (e) {
            (e.mDestroy(), e.destroy());
          },
        },
        {
          key: "toCamel",
          value: function (e) {
            var n = this;
            return e.reduce(function (i, r) {
              return i + n.toUpper(r);
            });
          },
        },
        {
          key: "toUpper",
          value: function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          },
        },
      ]),
      s
    );
  })();
function qr(s, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(
        s,
        typeof (i = (function (r, o) {
          if (typeof r != "object" || r === null) return r;
          var l = r[Symbol.toPrimitive];
          if (l !== void 0) {
            var a = l.call(r, "string");
            if (typeof a != "object") return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(r);
        })(n.key)) == "symbol"
          ? i
          : String(i),
        n,
      ));
  }
  var i;
}
function nn(s, t, e) {
  return (
    t && qr(s.prototype, t),
    Object.defineProperty(s, "prototype", { writable: !1 }),
    s
  );
}
function zt() {
  return (
    (zt = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (s[n] = e[n]);
          }
          return s;
        }),
    zt.apply(this, arguments)
  );
}
function Es(s, t) {
  ((s.prototype = Object.create(t.prototype)),
    (s.prototype.constructor = s),
    Ve(s, t));
}
function zs(s) {
  return (
    (zs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    zs(s)
  );
}
function Ve(s, t) {
  return (
    (Ve = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, n) {
          return ((e.__proto__ = n), e);
        }),
    Ve(s, t)
  );
}
function zr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Bs(s, t, e) {
  return (
    (Bs = zr()
      ? Reflect.construct.bind()
      : function (n, i, r) {
          var o = [null];
          o.push.apply(o, i);
          var l = new (Function.bind.apply(n, o))();
          return (r && Ve(l, r.prototype), l);
        }),
    Bs.apply(null, arguments)
  );
}
function Us(s) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Us = function (e) {
      if (
        e === null ||
        Function.toString.call(e).indexOf("[native code]") === -1
      )
        return e;
      if (typeof e != "function")
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (t !== void 0) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return Bs(e, arguments, zs(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ve(n, e)
      );
    }),
    Us(s)
  );
}
function Br(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return s;
}
var Qt,
  Ur = function () {
    ((this.before = void 0),
      (this.beforeLeave = void 0),
      (this.leave = void 0),
      (this.afterLeave = void 0),
      (this.beforeEnter = void 0),
      (this.enter = void 0),
      (this.afterEnter = void 0),
      (this.after = void 0));
  };
(function (s) {
  ((s[(s.off = 0)] = "off"),
    (s[(s.error = 1)] = "error"),
    (s[(s.warning = 2)] = "warning"),
    (s[(s.info = 3)] = "info"),
    (s[(s.debug = 4)] = "debug"));
})(Qt || (Qt = {}));
var Fn = Qt.off,
  ue = (function () {
    function s(e) {
      ((this.t = void 0), (this.t = e));
    }
    ((s.getLevel = function () {
      return Fn;
    }),
      (s.setLevel = function (e) {
        return (Fn = Qt[e]);
      }));
    var t = s.prototype;
    return (
      (t.error = function () {
        this.i(console.error, Qt.error, [].slice.call(arguments));
      }),
      (t.warn = function () {
        this.i(console.warn, Qt.warning, [].slice.call(arguments));
      }),
      (t.info = function () {
        this.i(console.info, Qt.info, [].slice.call(arguments));
      }),
      (t.debug = function () {
        this.i(console.log, Qt.debug, [].slice.call(arguments));
      }),
      (t.i = function (e, n, i) {
        n <= s.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(i));
      }),
      s
    );
  })();
function _e(s) {
  return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Nn(s) {
  return s && s.sensitive ? "" : "i";
}
var Bt = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper",
  },
  he = new ((function () {
    function s() {
      ((this.o = Bt),
        (this.u = void 0),
        (this.h = { after: null, before: null, parent: null }));
    }
    var t = s.prototype;
    return (
      (t.toString = function (e) {
        return e.outerHTML;
      }),
      (t.toDocument = function (e) {
        return (
          this.u || (this.u = new DOMParser()),
          this.u.parseFromString(e, "text/html")
        );
      }),
      (t.toElement = function (e) {
        var n = document.createElement("div");
        return ((n.innerHTML = e), n);
      }),
      (t.getHtml = function (e) {
        return (
          e === void 0 && (e = document),
          this.toString(e.documentElement)
        );
      }),
      (t.getWrapper = function (e) {
        return (
          e === void 0 && (e = document),
          e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        );
      }),
      (t.getContainer = function (e) {
        return (
          e === void 0 && (e = document),
          e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        );
      }),
      (t.removeContainer = function (e) {
        document.body.contains(e) && (this.v(e), e.parentNode.removeChild(e));
      }),
      (t.addContainer = function (e, n) {
        var i = this.getContainer() || this.h.before;
        i
          ? this.l(e, i)
          : this.h.after
            ? this.h.after.parentNode.insertBefore(e, this.h.after)
            : this.h.parent
              ? this.h.parent.appendChild(e)
              : n.appendChild(e);
      }),
      (t.getSibling = function () {
        return this.h;
      }),
      (t.getNamespace = function (e) {
        e === void 0 && (e = document);
        var n = e.querySelector(
          "[" + this.o.prefix + "-" + this.o.namespace + "]",
        );
        return n
          ? n.getAttribute(this.o.prefix + "-" + this.o.namespace)
          : null;
      }),
      (t.getHref = function (e) {
        if (e.tagName && e.tagName.toLowerCase() === "a") {
          if (typeof e.href == "string") return e.href;
          var n = e.getAttribute("href") || e.getAttribute("xlink:href");
          if (n) return this.resolveUrl(n.baseVal || n);
        }
        return null;
      }),
      (t.resolveUrl = function () {
        var e = [].slice.call(arguments).length;
        if (e === 0)
          throw new Error(
            "resolveUrl requires at least one argument; got none.",
          );
        var n = document.createElement("base");
        if (((n.href = arguments[0]), e === 1)) return n.href;
        var i = document.getElementsByTagName("head")[0];
        i.insertBefore(n, i.firstChild);
        for (var r, o = document.createElement("a"), l = 1; l < e; l++)
          ((o.href = arguments[l]), (n.href = r = o.href));
        return (i.removeChild(n), r);
      }),
      (t.l = function (e, n) {
        n.parentNode.insertBefore(e, n.nextSibling);
      }),
      (t.v = function (e) {
        return (
          (this.h = {
            after: e.nextElementSibling,
            before: e.previousElementSibling,
            parent: e.parentElement,
          }),
          this.h
        );
      }),
      s
    );
  })())(),
  Hr = (function () {
    function s() {
      ((this.p = void 0), (this.m = []), (this.P = -1));
    }
    var t = s.prototype;
    return (
      (t.init = function (e, n) {
        this.p = "barba";
        var i = {
          data: {},
          ns: n,
          scroll: { x: window.scrollX, y: window.scrollY },
          url: e,
        };
        ((this.P = 0), this.m.push(i));
        var r = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history && window.history.replaceState(r, "", e);
      }),
      (t.change = function (e, n, i) {
        if (i && i.state) {
          var r = i.state,
            o = r.index;
          ((n = this.g(this.P - o)), this.replace(r.states), (this.P = o));
        } else this.add(e, n);
        return n;
      }),
      (t.add = function (e, n, i, r) {
        var o = i ?? this.R(n),
          l = {
            data: r ?? {},
            ns: "tmp",
            scroll: { x: window.scrollX, y: window.scrollY },
            url: e,
          };
        switch (o) {
          case "push":
            ((this.P = this.size), this.m.push(l));
            break;
          case "replace":
            this.set(this.P, l);
        }
        var a = { from: this.p, index: this.P, states: [].concat(this.m) };
        switch (o) {
          case "push":
            window.history && window.history.pushState(a, "", e);
            break;
          case "replace":
            window.history && window.history.replaceState(a, "", e);
        }
      }),
      (t.store = function (e, n) {
        var i = n || this.P,
          r = this.get(i);
        ((r.data = zt({}, r.data, e)), this.set(i, r));
        var o = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history.replaceState(o, "");
      }),
      (t.update = function (e, n) {
        var i = n || this.P,
          r = zt({}, this.get(i), e);
        this.set(i, r);
      }),
      (t.remove = function (e) {
        (e ? this.m.splice(e, 1) : this.m.pop(), this.P--);
      }),
      (t.clear = function () {
        ((this.m = []), (this.P = -1));
      }),
      (t.replace = function (e) {
        this.m = e;
      }),
      (t.get = function (e) {
        return this.m[e];
      }),
      (t.set = function (e, n) {
        return (this.m[e] = n);
      }),
      (t.R = function (e) {
        var n = "push",
          i = e,
          r = Bt.prefix + "-" + Bt.history;
        return (
          i.hasAttribute && i.hasAttribute(r) && (n = i.getAttribute(r)),
          n
        );
      }),
      (t.g = function (e) {
        return Math.abs(e) > 1
          ? e > 0
            ? "forward"
            : "back"
          : e === 0
            ? "popstate"
            : e > 0
              ? "back"
              : "forward";
      }),
      nn(s, [
        {
          key: "current",
          get: function () {
            return this.m[this.P];
          },
        },
        {
          key: "previous",
          get: function () {
            return this.P < 1 ? null : this.m[this.P - 1];
          },
        },
        {
          key: "size",
          get: function () {
            return this.m.length;
          },
        },
      ]),
      s
    );
  })(),
  pi = new Hr(),
  bs = function (s, t) {
    try {
      var e = (function () {
        if (!t.next.html)
          return Promise.resolve(s).then(function (n) {
            var i = t.next;
            if (n) {
              var r = he.toElement(n.html);
              ((i.namespace = he.getNamespace(r)),
                (i.container = he.getContainer(r)),
                (i.url = n.url),
                (i.html = n.html),
                pi.update({ ns: i.namespace }));
              var o = he.toDocument(n.html);
              document.title = o.title;
            }
          });
      })();
      return Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
    } catch (n) {
      return Promise.reject(n);
    }
  },
  mi = function s(t, e, n) {
    return t instanceof RegExp
      ? (function (i, r) {
          if (!r) return i;
          for (
            var o = /\((?:\?<(.*?)>)?(?!\?)/g, l = 0, a = o.exec(i.source);
            a;
          )
            (r.push({
              name: a[1] || l++,
              prefix: "",
              suffix: "",
              modifier: "",
              pattern: "",
            }),
              (a = o.exec(i.source)));
          return i;
        })(t, e)
      : Array.isArray(t)
        ? (function (i, r, o) {
            var l = i.map(function (a) {
              return s(a, r, o).source;
            });
            return new RegExp("(?:".concat(l.join("|"), ")"), Nn(o));
          })(t, e, n)
        : (function (i, r, o) {
            return (function (l, a, c) {
              c === void 0 && (c = {});
              for (
                var u = c.strict,
                  h = u !== void 0 && u,
                  d = c.start,
                  p = d === void 0 || d,
                  f = c.end,
                  m = f === void 0 || f,
                  v = c.encode,
                  g =
                    v === void 0
                      ? function (U) {
                          return U;
                        }
                      : v,
                  y = c.delimiter,
                  b = y === void 0 ? "/#?" : y,
                  x = c.endsWith,
                  E = "[".concat(_e(x === void 0 ? "" : x), "]|$"),
                  C = "[".concat(_e(b), "]"),
                  S = p ? "^" : "",
                  T = 0,
                  M = l;
                T < M.length;
                T++
              ) {
                var I = M[T];
                if (typeof I == "string") S += _e(g(I));
                else {
                  var k = _e(g(I.prefix)),
                    L = _e(g(I.suffix));
                  if (I.pattern)
                    if ((a && a.push(I), k || L))
                      if (I.modifier === "+" || I.modifier === "*") {
                        var $ = I.modifier === "*" ? "?" : "";
                        S += "(?:"
                          .concat(k, "((?:")
                          .concat(I.pattern, ")(?:")
                          .concat(L)
                          .concat(k, "(?:")
                          .concat(I.pattern, "))*)")
                          .concat(L, ")")
                          .concat($);
                      } else
                        S += "(?:"
                          .concat(k, "(")
                          .concat(I.pattern, ")")
                          .concat(L, ")")
                          .concat(I.modifier);
                    else
                      S +=
                        I.modifier === "+" || I.modifier === "*"
                          ? "((?:"
                              .concat(I.pattern, ")")
                              .concat(I.modifier, ")")
                          : "(".concat(I.pattern, ")").concat(I.modifier);
                  else S += "(?:".concat(k).concat(L, ")").concat(I.modifier);
                }
              }
              if (m)
                (h || (S += "".concat(C, "?")),
                  (S += c.endsWith ? "(?=".concat(E, ")") : "$"));
              else {
                var _ = l[l.length - 1],
                  P =
                    typeof _ == "string"
                      ? C.indexOf(_[_.length - 1]) > -1
                      : _ === void 0;
                (h || (S += "(?:".concat(C, "(?=").concat(E, "))?")),
                  P || (S += "(?=".concat(C, "|").concat(E, ")")));
              }
              return new RegExp(S, Nn(c));
            })(
              (function (l, a) {
                a === void 0 && (a = {});
                for (
                  var c = (function (L) {
                      for (var $ = [], _ = 0; _ < L.length; ) {
                        var P = L[_];
                        if (P !== "*" && P !== "+" && P !== "?")
                          if (P !== "\\")
                            if (P !== "{")
                              if (P !== "}")
                                if (P !== ":")
                                  if (P !== "(")
                                    $.push({
                                      type: "CHAR",
                                      index: _,
                                      value: L[_++],
                                    });
                                  else {
                                    var U = 1,
                                      W = "";
                                    if (L[(w = _ + 1)] === "?")
                                      throw new TypeError(
                                        'Pattern cannot start with "?" at '.concat(
                                          w,
                                        ),
                                      );
                                    for (; w < L.length; )
                                      if (L[w] !== "\\") {
                                        if (L[w] === ")") {
                                          if (--U == 0) {
                                            w++;
                                            break;
                                          }
                                        } else if (
                                          L[w] === "(" &&
                                          (U++, L[w + 1] !== "?")
                                        )
                                          throw new TypeError(
                                            "Capturing groups are not allowed at ".concat(
                                              w,
                                            ),
                                          );
                                        W += L[w++];
                                      } else W += L[w++] + L[w++];
                                    if (U)
                                      throw new TypeError(
                                        "Unbalanced pattern at ".concat(_),
                                      );
                                    if (!W)
                                      throw new TypeError(
                                        "Missing pattern at ".concat(_),
                                      );
                                    ($.push({
                                      type: "PATTERN",
                                      index: _,
                                      value: W,
                                    }),
                                      (_ = w));
                                  }
                                else {
                                  for (var O = "", w = _ + 1; w < L.length; ) {
                                    var N = L.charCodeAt(w);
                                    if (
                                      !(
                                        (N >= 48 && N <= 57) ||
                                        (N >= 65 && N <= 90) ||
                                        (N >= 97 && N <= 122) ||
                                        N === 95
                                      )
                                    )
                                      break;
                                    O += L[w++];
                                  }
                                  if (!O)
                                    throw new TypeError(
                                      "Missing parameter name at ".concat(_),
                                    );
                                  ($.push({ type: "NAME", index: _, value: O }),
                                    (_ = w));
                                }
                              else
                                $.push({
                                  type: "CLOSE",
                                  index: _,
                                  value: L[_++],
                                });
                            else
                              $.push({ type: "OPEN", index: _, value: L[_++] });
                          else
                            $.push({
                              type: "ESCAPED_CHAR",
                              index: _++,
                              value: L[_++],
                            });
                        else
                          $.push({ type: "MODIFIER", index: _, value: L[_++] });
                      }
                      return ($.push({ type: "END", index: _, value: "" }), $);
                    })(l),
                    u = a.prefixes,
                    h = u === void 0 ? "./" : u,
                    d = "[^".concat(_e(a.delimiter || "/#?"), "]+?"),
                    p = [],
                    f = 0,
                    m = 0,
                    v = "",
                    g = function (L) {
                      if (m < c.length && c[m].type === L) return c[m++].value;
                    },
                    y = function (L) {
                      var $ = g(L);
                      if ($ !== void 0) return $;
                      var _ = c[m],
                        P = _.index;
                      throw new TypeError(
                        "Unexpected "
                          .concat(_.type, " at ")
                          .concat(P, ", expected ")
                          .concat(L),
                      );
                    },
                    b = function () {
                      for (
                        var L, $ = "";
                        (L = g("CHAR") || g("ESCAPED_CHAR"));
                      )
                        $ += L;
                      return $;
                    };
                  m < c.length;
                ) {
                  var x = g("CHAR"),
                    E = g("NAME"),
                    C = g("PATTERN");
                  if (E || C)
                    (h.indexOf((T = x || "")) === -1 && ((v += T), (T = "")),
                      v && (p.push(v), (v = "")),
                      p.push({
                        name: E || f++,
                        prefix: T,
                        suffix: "",
                        pattern: C || d,
                        modifier: g("MODIFIER") || "",
                      }));
                  else {
                    var S = x || g("ESCAPED_CHAR");
                    if (S) v += S;
                    else if ((v && (p.push(v), (v = "")), g("OPEN"))) {
                      var T = b(),
                        M = g("NAME") || "",
                        I = g("PATTERN") || "",
                        k = b();
                      (y("CLOSE"),
                        p.push({
                          name: M || (I ? f++ : ""),
                          pattern: M && !I ? d : I,
                          prefix: T,
                          suffix: k,
                          modifier: g("MODIFIER") || "",
                        }));
                    } else y("END");
                  }
                }
                return p;
              })(i, o),
              r,
              o,
            );
          })(t, e, n);
  },
  Vr = {
    __proto__: null,
    update: bs,
    nextTick: function () {
      return new Promise(function (s) {
        window.requestAnimationFrame(s);
      });
    },
    pathToRegexp: mi,
  },
  gi = function () {
    return window.location.origin;
  },
  je = function (s) {
    return (s === void 0 && (s = window.location.href), Zt(s).port);
  },
  Zt = function (s) {
    var t,
      e = s.match(/:\d+/);
    if (e === null)
      (/^http/.test(s) && (t = 80), /^https/.test(s) && (t = 443));
    else {
      var n = e[0].substring(1);
      t = parseInt(n, 10);
    }
    var i,
      r = s.replace(gi(), ""),
      o = {},
      l = r.indexOf("#");
    l >= 0 && ((i = r.slice(l + 1)), (r = r.slice(0, l)));
    var a = r.indexOf("?");
    return (
      a >= 0 && ((o = vi(r.slice(a + 1))), (r = r.slice(0, a))),
      { hash: i, path: r, port: t, query: o }
    );
  },
  vi = function (s) {
    return s.split("&").reduce(function (t, e) {
      var n = e.split("=");
      return ((t[n[0]] = n[1]), t);
    }, {});
  },
  Hs = function (s) {
    return (
      s === void 0 && (s = window.location.href),
      s.replace(/(\/#.*|\/|#.*)$/, "")
    );
  },
  jr = {
    __proto__: null,
    getHref: function () {
      return window.location.href;
    },
    getAbsoluteHref: function (s, t) {
      return (t === void 0 && (t = document.baseURI), new URL(s, t).href);
    },
    getOrigin: gi,
    getPort: je,
    getPath: function (s) {
      return (s === void 0 && (s = window.location.href), Zt(s).path);
    },
    getQuery: function (s, t) {
      return (
        t === void 0 && (t = !1),
        t ? JSON.stringify(Zt(s).query) : Zt(s).query
      );
    },
    getHash: function (s) {
      return Zt(s).hash;
    },
    parse: Zt,
    parseQuery: vi,
    clean: Hs,
  };
function Wr(s, t, e, n, i) {
  return (
    t === void 0 && (t = 2e3),
    new Promise(function (r, o) {
      var l = new XMLHttpRequest();
      ((l.onreadystatechange = function () {
        if (l.readyState === XMLHttpRequest.DONE) {
          if (l.status === 200) {
            var a =
              l.responseURL !== "" && l.responseURL !== s ? l.responseURL : s;
            (r({ html: l.responseText, url: zt({ href: a }, Zt(a)) }),
              n.update(s, { status: "fulfilled", target: a }));
          } else if (l.status) {
            var c = { status: l.status, statusText: l.statusText };
            (e(s, c), o(c), n.update(s, { status: "rejected" }));
          }
        }
      }),
        (l.ontimeout = function () {
          var a = new Error("Timeout error [" + t + "]");
          (e(s, a), o(a), n.update(s, { status: "rejected" }));
        }),
        (l.onerror = function () {
          var a = new Error("Fetch error");
          (e(s, a), o(a), n.update(s, { status: "rejected" }));
        }),
        l.open("GET", s),
        (l.timeout = t),
        l.setRequestHeader(
          "Accept",
          "text/html,application/xhtml+xml,application/xml",
        ),
        l.setRequestHeader("x-barba", "yes"),
        i.all().forEach(function (a, c) {
          l.setRequestHeader(c, a);
        }),
        l.send());
    })
  );
}
function Xr(s) {
  return (
    !!s &&
    (typeof s == "object" || typeof s == "function") &&
    typeof s.then == "function"
  );
}
function Te(s, t) {
  return (
    t === void 0 && (t = {}),
    function () {
      var e = arguments,
        n = !1,
        i = new Promise(function (r, o) {
          t.async = function () {
            return (
              (n = !0),
              function (a, c) {
                a ? o(a) : r(c);
              }
            );
          };
          var l = s.apply(t, [].slice.call(e));
          n || (Xr(l) ? l.then(r, o) : r(l));
        });
      return i;
    }
  );
}
var Jt = new ((function (s) {
    function t() {
      var n;
      return (
        ((n = s.call(this) || this).logger = new ue("@barba/core")),
        (n.all = [
          "ready",
          "page",
          "reset",
          "currentAdded",
          "currentRemoved",
          "nextAdded",
          "nextRemoved",
          "beforeOnce",
          "once",
          "afterOnce",
          "before",
          "beforeLeave",
          "leave",
          "afterLeave",
          "beforeEnter",
          "enter",
          "afterEnter",
          "after",
        ]),
        (n.registered = new Map()),
        n.init(),
        n
      );
    }
    Es(t, s);
    var e = t.prototype;
    return (
      (e.init = function () {
        var n = this;
        (this.registered.clear(),
          this.all.forEach(function (i) {
            n[i] ||
              (n[i] = function (r, o) {
                (n.registered.has(i) || n.registered.set(i, new Set()),
                  n.registered.get(i).add({ ctx: o || {}, fn: r }));
              });
          }));
      }),
      (e.do = function (n) {
        var i = arguments,
          r = this;
        if (this.registered.has(n)) {
          var o = Promise.resolve();
          return (
            this.registered.get(n).forEach(function (l) {
              o = o.then(function () {
                return Te(l.fn, l.ctx).apply(void 0, [].slice.call(i, 1));
              });
            }),
            o.catch(function (l) {
              (r.logger.debug("Hook error [" + n + "]"), r.logger.error(l));
            })
          );
        }
        return Promise.resolve();
      }),
      (e.clear = function () {
        var n = this;
        (this.all.forEach(function (i) {
          delete n[i];
        }),
          this.init());
      }),
      (e.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var n = [];
        (this.registered.forEach(function (i, r) {
          return n.push(r);
        }),
          this.logger.info("Registered hooks: " + n.join(",")));
      }),
      t
    );
  })(Ur))(),
  bi = (function () {
    function s(t) {
      if (((this.k = void 0), (this.O = []), typeof t == "boolean")) this.k = t;
      else {
        var e = Array.isArray(t) ? t : [t];
        this.O = e.map(function (n) {
          return mi(n);
        });
      }
    }
    return (
      (s.prototype.checkHref = function (t) {
        if (typeof this.k == "boolean") return this.k;
        var e = Zt(t).path;
        return this.O.some(function (n) {
          return n.exec(e) !== null;
        });
      }),
      s
    );
  })(),
  Gr = (function (s) {
    function t(n) {
      var i;
      return (((i = s.call(this, n) || this).T = new Map()), i);
    }
    Es(t, s);
    var e = t.prototype;
    return (
      (e.set = function (n, i, r, o, l) {
        return (
          this.T.set(n, { action: r, request: i, status: o, target: l ?? n }),
          { action: r, request: i, status: o, target: l }
        );
      }),
      (e.get = function (n) {
        return this.T.get(n);
      }),
      (e.getRequest = function (n) {
        return this.T.get(n).request;
      }),
      (e.getAction = function (n) {
        return this.T.get(n).action;
      }),
      (e.getStatus = function (n) {
        return this.T.get(n).status;
      }),
      (e.getTarget = function (n) {
        return this.T.get(n).target;
      }),
      (e.has = function (n) {
        return !this.checkHref(n) && this.T.has(n);
      }),
      (e.delete = function (n) {
        return this.T.delete(n);
      }),
      (e.update = function (n, i) {
        var r = zt({}, this.T.get(n), i);
        return (this.T.set(n, r), r);
      }),
      t
    );
  })(bi),
  Yr = (function () {
    function s() {
      this.A = new Map();
    }
    var t = s.prototype;
    return (
      (t.set = function (e, n) {
        return (this.A.set(e, n), { name: n });
      }),
      (t.get = function (e) {
        return this.A.get(e);
      }),
      (t.all = function () {
        return this.A;
      }),
      (t.has = function (e) {
        return this.A.has(e);
      }),
      (t.delete = function (e) {
        return this.A.delete(e);
      }),
      (t.clear = function () {
        return this.A.clear();
      }),
      s
    );
  })(),
  Kr = function () {
    return !window.history.pushState;
  },
  Jr = function (s) {
    return !s.el || !s.href;
  },
  Qr = function (s) {
    var t = s.event;
    return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
  },
  Zr = function (s) {
    var t = s.el;
    return t.hasAttribute("target") && t.target === "_blank";
  },
  to = function (s) {
    var t = s.el;
    return (
      (t.protocol !== void 0 && window.location.protocol !== t.protocol) ||
      (t.hostname !== void 0 && window.location.hostname !== t.hostname)
    );
  },
  eo = function (s) {
    var t = s.el;
    return t.port !== void 0 && je() !== je(t.href);
  },
  so = function (s) {
    var t = s.el;
    return t.getAttribute && typeof t.getAttribute("download") == "string";
  },
  no = function (s) {
    return s.el.hasAttribute(Bt.prefix + "-" + Bt.prevent);
  },
  io = function (s) {
    return !!s.el.closest("[" + Bt.prefix + "-" + Bt.prevent + '="all"]');
  },
  ro = function (s) {
    var t = s.href;
    return Hs(t) === Hs() && je(t) === je();
  },
  oo = (function (s) {
    function t(n) {
      var i;
      return (
        ((i = s.call(this, n) || this).suite = []),
        (i.tests = new Map()),
        i.init(),
        i
      );
    }
    Es(t, s);
    var e = t.prototype;
    return (
      (e.init = function () {
        (this.add("pushState", Kr),
          this.add("exists", Jr),
          this.add("newTab", Qr),
          this.add("blank", Zr),
          this.add("corsDomain", to),
          this.add("corsPort", eo),
          this.add("download", so),
          this.add("preventSelf", no),
          this.add("preventAll", io),
          this.add("sameUrl", ro, !1));
      }),
      (e.add = function (n, i, r) {
        (r === void 0 && (r = !0),
          this.tests.set(n, i),
          r && this.suite.push(n));
      }),
      (e.run = function (n, i, r, o) {
        return this.tests.get(n)({ el: i, event: r, href: o });
      }),
      (e.checkLink = function (n, i, r) {
        var o = this;
        return this.suite.some(function (l) {
          return o.run(l, n, i, r);
        });
      }),
      t
    );
  })(bi),
  $s = (function (s) {
    function t(e, n) {
      var i;
      return (
        n === void 0 && (n = "Barba error"),
        ((i =
          s.call.apply(s, [this].concat([].slice.call(arguments, 2))) ||
          this).error = void 0),
        (i.label = void 0),
        (i.error = e),
        (i.label = n),
        Error.captureStackTrace && Error.captureStackTrace(Br(i), t),
        (i.name = "BarbaError"),
        i
      );
    }
    return (Es(t, s), t);
  })(Us(Error)),
  ao = (function () {
    function s(e) {
      (e === void 0 && (e = []),
        (this.logger = new ue("@barba/core")),
        (this.all = []),
        (this.page = []),
        (this.once = []),
        (this.j = [
          { name: "namespace", type: "strings" },
          { name: "custom", type: "function" },
        ]),
        e && (this.all = this.all.concat(e)),
        this.update());
    }
    var t = s.prototype;
    return (
      (t.add = function (e, n) {
        (e === "rule"
          ? this.j.splice(n.position || 0, 0, n.value)
          : this.all.push(n),
          this.update());
      }),
      (t.resolve = function (e, n) {
        var i = this;
        n === void 0 && (n = {});
        var r = n.once ? this.once : this.page;
        r = r.filter(
          n.self
            ? function (d) {
                return d.name && d.name === "self";
              }
            : function (d) {
                return !d.name || d.name !== "self";
              },
        );
        var o = new Map(),
          l = r.find(function (d) {
            var p = !0,
              f = {};
            return n.self && d.name === "self"
              ? (o.set(d, f), !0)
              : (i.j.reverse().forEach(function (m) {
                  p &&
                    ((p = i.M(d, m, e, f)),
                    d.from &&
                      d.to &&
                      (p = i.M(d, m, e, f, "from") && i.M(d, m, e, f, "to")),
                    d.from && !d.to && (p = i.M(d, m, e, f, "from")),
                    !d.from && d.to && (p = i.M(d, m, e, f, "to")));
                }),
                o.set(d, f),
                p);
          }),
          a = o.get(l),
          c = [];
        if ((c.push(n.once ? "once" : "page"), n.self && c.push("self"), a)) {
          var u,
            h = [l];
          (Object.keys(a).length > 0 && h.push(a),
            (u = this.logger).info.apply(
              u,
              ["Transition found [" + c.join(",") + "]"].concat(h),
            ));
        } else this.logger.info("No transition found [" + c.join(",") + "]");
        return l;
      }),
      (t.update = function () {
        var e = this;
        ((this.all = this.all
          .map(function (n) {
            return e.N(n);
          })
          .sort(function (n, i) {
            return n.priority - i.priority;
          })
          .reverse()
          .map(function (n) {
            return (delete n.priority, n);
          })),
          (this.page = this.all.filter(function (n) {
            return n.leave !== void 0 || n.enter !== void 0;
          })),
          (this.once = this.all.filter(function (n) {
            return n.once !== void 0;
          })));
      }),
      (t.M = function (e, n, i, r, o) {
        var l = !0,
          a = !1,
          c = e,
          u = n.name,
          h = u,
          d = u,
          p = u,
          f = o ? c[o] : c,
          m = o === "to" ? i.next : i.current;
        if (o ? f && f[u] : f[u]) {
          switch (n.type) {
            case "strings":
            default:
              var v = Array.isArray(f[h]) ? f[h] : [f[h]];
              (m[h] && v.indexOf(m[h]) !== -1 && (a = !0),
                v.indexOf(m[h]) === -1 && (l = !1));
              break;
            case "object":
              var g = Array.isArray(f[d]) ? f[d] : [f[d]];
              m[d]
                ? (m[d].name && g.indexOf(m[d].name) !== -1 && (a = !0),
                  g.indexOf(m[d].name) === -1 && (l = !1))
                : (l = !1);
              break;
            case "function":
              f[p](i) ? (a = !0) : (l = !1);
          }
          a && (o ? ((r[o] = r[o] || {}), (r[o][u] = c[o][u])) : (r[u] = c[u]));
        }
        return l;
      }),
      (t.S = function (e, n, i) {
        var r = 0;
        return (
          (e[n] || (e.from && e.from[n]) || (e.to && e.to[n])) &&
            ((r += Math.pow(10, i)),
            e.from && e.from[n] && (r += 1),
            e.to && e.to[n] && (r += 2)),
          r
        );
      }),
      (t.N = function (e) {
        var n = this;
        e.priority = 0;
        var i = 0;
        return (
          this.j.forEach(function (r, o) {
            i += n.S(e, r.name, o + 1);
          }),
          (e.priority = i),
          e
        );
      }),
      s
    );
  })();
function Fe(s, t) {
  try {
    var e = s();
  } catch (n) {
    return t(n);
  }
  return e && e.then ? e.then(void 0, t) : e;
}
var lo = (function () {
    function s(e) {
      (e === void 0 && (e = []),
        (this.logger = new ue("@barba/core")),
        (this.store = void 0),
        (this.C = !1),
        (this.store = new ao(e)));
    }
    var t = s.prototype;
    return (
      (t.get = function (e, n) {
        return this.store.resolve(e, n);
      }),
      (t.doOnce = function (e) {
        var n = e.data,
          i = e.transition;
        try {
          var r = function () {
              o.C = !1;
            },
            o = this,
            l = i || {};
          o.C = !0;
          var a = Fe(
            function () {
              return Promise.resolve(o.L("beforeOnce", n, l)).then(function () {
                return Promise.resolve(o.once(n, l)).then(function () {
                  return Promise.resolve(o.L("afterOnce", n, l)).then(
                    function () {},
                  );
                });
              });
            },
            function (c) {
              ((o.C = !1),
                o.logger.debug("Transition error [before/after/once]"),
                o.logger.error(c));
            },
          );
          return Promise.resolve(a && a.then ? a.then(r) : r());
        } catch (c) {
          return Promise.reject(c);
        }
      }),
      (t.doPage = function (e) {
        var n = e.data,
          i = e.transition,
          r = e.page,
          o = e.wrapper;
        try {
          var l = function (d) {
              a.C = !1;
            },
            a = this,
            c = i || {},
            u = c.sync === !0 || !1;
          a.C = !0;
          var h = Fe(
            function () {
              function d() {
                return Promise.resolve(a.L("before", n, c)).then(function () {
                  function f(v) {
                    return Promise.resolve(a.remove(n)).then(function () {
                      return Promise.resolve(a.L("after", n, c)).then(
                        function () {},
                      );
                    });
                  }
                  var m = (function () {
                    if (u)
                      return Fe(
                        function () {
                          return Promise.resolve(a.add(n, o)).then(function () {
                            return Promise.resolve(
                              a.L("beforeLeave", n, c),
                            ).then(function () {
                              return Promise.resolve(
                                a.L("beforeEnter", n, c),
                              ).then(function () {
                                return Promise.resolve(
                                  Promise.all([a.leave(n, c), a.enter(n, c)]),
                                ).then(function () {
                                  return Promise.resolve(
                                    a.L("afterLeave", n, c),
                                  ).then(function () {
                                    return Promise.resolve(
                                      a.L("afterEnter", n, c),
                                    ).then(function () {});
                                  });
                                });
                              });
                            });
                          });
                        },
                        function (b) {
                          if (a.H(b))
                            throw new $s(b, "Transition error [sync]");
                        },
                      );
                    var v = function (b) {
                        return Fe(
                          function () {
                            var x = (function () {
                              if (g !== !1)
                                return Promise.resolve(a.add(n, o)).then(
                                  function () {
                                    return Promise.resolve(
                                      a.L("beforeEnter", n, c),
                                    ).then(function () {
                                      return Promise.resolve(
                                        a.enter(n, c, g),
                                      ).then(function () {
                                        return Promise.resolve(
                                          a.L("afterEnter", n, c),
                                        ).then(function () {});
                                      });
                                    });
                                  },
                                );
                            })();
                            if (x && x.then) return x.then(function () {});
                          },
                          function (x) {
                            if (a.H(x))
                              throw new $s(
                                x,
                                "Transition error [before/after/enter]",
                              );
                          },
                        );
                      },
                      g = !1,
                      y = Fe(
                        function () {
                          return Promise.resolve(a.L("beforeLeave", n, c)).then(
                            function () {
                              return Promise.resolve(
                                Promise.all([a.leave(n, c), bs(r, n)]).then(
                                  function (b) {
                                    return b[0];
                                  },
                                ),
                              ).then(function (b) {
                                return (
                                  (g = b),
                                  Promise.resolve(a.L("afterLeave", n, c)).then(
                                    function () {},
                                  )
                                );
                              });
                            },
                          );
                        },
                        function (b) {
                          if (a.H(b))
                            throw new $s(
                              b,
                              "Transition error [before/after/leave]",
                            );
                        },
                      );
                    return y && y.then ? y.then(v) : v();
                  })();
                  return m && m.then ? m.then(f) : f();
                });
              }
              var p = (function () {
                if (u) return Promise.resolve(bs(r, n)).then(function () {});
              })();
              return p && p.then ? p.then(d) : d();
            },
            function (d) {
              throw (
                (a.C = !1),
                d.name && d.name === "BarbaError"
                  ? (a.logger.debug(d.label), a.logger.error(d.error), d)
                  : (a.logger.debug("Transition error [page]"),
                    a.logger.error(d),
                    d)
              );
            },
          );
          return Promise.resolve(h && h.then ? h.then(l) : l());
        } catch (d) {
          return Promise.reject(d);
        }
      }),
      (t.once = function (e, n) {
        try {
          return Promise.resolve(Jt.do("once", e, n)).then(function () {
            return n.once ? Te(n.once, n)(e) : Promise.resolve();
          });
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (t.leave = function (e, n) {
        try {
          return Promise.resolve(Jt.do("leave", e, n)).then(function () {
            return n.leave ? Te(n.leave, n)(e) : Promise.resolve();
          });
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (t.enter = function (e, n, i) {
        try {
          return Promise.resolve(Jt.do("enter", e, n)).then(function () {
            return n.enter ? Te(n.enter, n)(e, i) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (t.add = function (e, n) {
        try {
          return (
            he.addContainer(e.next.container, n),
            Jt.do("nextAdded", e),
            Promise.resolve()
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (t.remove = function (e) {
        try {
          return (
            he.removeContainer(e.current.container),
            Jt.do("currentRemoved", e),
            Promise.resolve()
          );
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (t.H = function (e) {
        return e.message
          ? !/Timeout error|Fetch error/.test(e.message)
          : !e.status;
      }),
      (t.L = function (e, n, i) {
        try {
          return Promise.resolve(Jt.do(e, n, i)).then(function () {
            return i[e] ? Te(i[e], i)(n) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      nn(s, [
        {
          key: "isRunning",
          get: function () {
            return this.C;
          },
          set: function (e) {
            this.C = e;
          },
        },
        {
          key: "hasOnce",
          get: function () {
            return this.store.once.length > 0;
          },
        },
        {
          key: "hasSelf",
          get: function () {
            return this.store.all.some(function (e) {
              return e.name === "self";
            });
          },
        },
        {
          key: "shouldWait",
          get: function () {
            return this.store.all.some(function (e) {
              return (e.to && !e.to.route) || e.sync;
            });
          },
        },
      ]),
      s
    );
  })(),
  co = (function () {
    function s(t) {
      var e = this;
      ((this.names = [
        "beforeLeave",
        "afterLeave",
        "beforeEnter",
        "afterEnter",
      ]),
        (this.byNamespace = new Map()),
        t.length !== 0 &&
          (t.forEach(function (n) {
            e.byNamespace.set(n.namespace, n);
          }),
          this.names.forEach(function (n) {
            Jt[n](e._(n));
          })));
    }
    return (
      (s.prototype._ = function (t) {
        var e = this;
        return function (n) {
          var i = t.match(/enter/i) ? n.next : n.current,
            r = e.byNamespace.get(i.namespace);
          return r && r[t] ? Te(r[t], r)(n) : Promise.resolve();
        };
      }),
      s
    );
  })();
(Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (s) {
      var t = this;
      do {
        if (t.matches(s)) return t;
        t = t.parentElement || t.parentNode;
      } while (t !== null && t.nodeType === 1);
      return null;
    }));
var uo = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  },
  Ot = new ((function () {
    function s() {
      ((this.version = "2.10.3"),
        (this.schemaPage = uo),
        (this.Logger = ue),
        (this.logger = new ue("@barba/core")),
        (this.plugins = []),
        (this.timeout = void 0),
        (this.cacheIgnore = void 0),
        (this.cacheFirstPage = void 0),
        (this.prefetchIgnore = void 0),
        (this.preventRunning = void 0),
        (this.hooks = Jt),
        (this.cache = void 0),
        (this.headers = void 0),
        (this.prevent = void 0),
        (this.transitions = void 0),
        (this.views = void 0),
        (this.dom = he),
        (this.helpers = Vr),
        (this.history = pi),
        (this.request = Wr),
        (this.url = jr),
        (this.D = void 0),
        (this.B = void 0),
        (this.q = void 0),
        (this.F = void 0));
    }
    var t = s.prototype;
    return (
      (t.use = function (e, n) {
        var i = this.plugins;
        i.indexOf(e) > -1
          ? this.logger.warn("Plugin [" + e.name + "] already installed.")
          : typeof e.install == "function"
            ? (e.install(this, n), i.push(e))
            : this.logger.warn(
                "Plugin [" + e.name + '] has no "install" method.',
              );
      }),
      (t.init = function (e) {
        var n = e === void 0 ? {} : e,
          i = n.transitions,
          r = i === void 0 ? [] : i,
          o = n.views,
          l = o === void 0 ? [] : o,
          a = n.schema,
          c = a === void 0 ? Bt : a,
          u = n.requestError,
          h = n.timeout,
          d = h === void 0 ? 2e3 : h,
          p = n.cacheIgnore,
          f = p !== void 0 && p,
          m = n.cacheFirstPage,
          v = m !== void 0 && m,
          g = n.prefetchIgnore,
          y = g !== void 0 && g,
          b = n.preventRunning,
          x = b !== void 0 && b,
          E = n.prevent,
          C = E === void 0 ? null : E,
          S = n.debug,
          T = n.logLevel;
        if (
          (ue.setLevel(
            (S !== void 0 && S) === !0 ? "debug" : T === void 0 ? "off" : T,
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function (k) {
            Bt[k] && (Bt[k] = c[k]);
          }),
          (this.B = u),
          (this.timeout = d),
          (this.cacheIgnore = f),
          (this.cacheFirstPage = v),
          (this.prefetchIgnore = y),
          (this.preventRunning = x),
          (this.q = this.dom.getWrapper()),
          !this.q)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var M = this.data.current;
        if (!M.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new Gr(f)),
          (this.headers = new Yr()),
          (this.prevent = new oo(y)),
          (this.transitions = new lo(r)),
          (this.views = new co(l)),
          C !== null)
        ) {
          if (typeof C != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", C);
        }
        (this.history.init(M.url.href, M.namespace),
          v &&
            this.cache.set(
              M.url.href,
              Promise.resolve({ html: M.html, url: M.url }),
              "init",
              "fulfilled",
            ),
          (this.U = this.U.bind(this)),
          (this.$ = this.$.bind(this)),
          (this.X = this.X.bind(this)),
          this.G(),
          this.plugins.forEach(function (k) {
            return k.init();
          }));
        var I = this.data;
        ((I.trigger = "barba"),
          (I.next = I.current),
          (I.current = zt({}, this.schemaPage)),
          this.hooks.do("ready", I),
          this.once(I),
          this.I());
      }),
      (t.destroy = function () {
        (this.I(),
          this.J(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []));
      }),
      (t.force = function (e) {
        window.location.assign(e);
      }),
      (t.go = function (e, n, i) {
        var r;
        if (
          (n === void 0 && (n = "barba"),
          (this.F = null),
          this.transitions.isRunning)
        )
          this.force(e);
        else if (
          !(r =
            n === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(e) &&
                this.url.getQuery(this.history.current.url, !0) ===
                  this.url.getQuery(e, !0)
              : this.prevent.run("sameUrl", null, null, e)) ||
          this.transitions.hasSelf
        )
          return (
            (n = this.history.change(
              this.cache.has(e) ? this.cache.get(e).target : e,
              n,
              i,
            )),
            i && (i.stopPropagation(), i.preventDefault()),
            this.page(e, n, i ?? void 0, r)
          );
      }),
      (t.once = function (e) {
        try {
          var n = this;
          return Promise.resolve(n.hooks.do("beforeEnter", e)).then(
            function () {
              function i() {
                return Promise.resolve(n.hooks.do("afterEnter", e)).then(
                  function () {},
                );
              }
              var r = (function () {
                if (n.transitions.hasOnce) {
                  var o = n.transitions.get(e, { once: !0 });
                  return Promise.resolve(
                    n.transitions.doOnce({ transition: o, data: e }),
                  ).then(function () {});
                }
              })();
              return r && r.then ? r.then(i) : i();
            },
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (t.page = function (e, n, i, r) {
        try {
          var o,
            l = function () {
              var h = a.data;
              return Promise.resolve(a.hooks.do("page", h)).then(function () {
                var d = (function (p, f) {
                  try {
                    var m =
                      ((v = a.transitions.get(h, { once: !1, self: r })),
                      Promise.resolve(
                        a.transitions.doPage({
                          data: h,
                          page: o,
                          transition: v,
                          wrapper: a.q,
                        }),
                      ).then(function () {
                        a.I();
                      }));
                  } catch {
                    return f();
                  }
                  var v;
                  return m && m.then ? m.then(void 0, f) : m;
                })(0, function () {
                  ue.getLevel() === 0 && a.force(h.next.url.href);
                });
                if (d && d.then) return d.then(function () {});
              });
            },
            a = this;
          if (
            ((a.data.next.url = zt({ href: e }, a.url.parse(e))),
            (a.data.trigger = n),
            (a.data.event = i),
            a.cache.has(e))
          )
            o = a.cache.update(e, { action: "click" }).request;
          else {
            var c = a.request(
              e,
              a.timeout,
              a.onRequestError.bind(a, n),
              a.cache,
              a.headers,
            );
            (c.then(function (h) {
              h.url.href !== e && a.history.add(h.url.href, n, "replace");
            }),
              (o = a.cache.set(e, c, "click", "pending").request));
          }
          var u = (function () {
            if (a.transitions.shouldWait)
              return Promise.resolve(bs(o, a.data)).then(function () {});
          })();
          return Promise.resolve(u && u.then ? u.then(l) : l());
        } catch (h) {
          return Promise.reject(h);
        }
      }),
      (t.onRequestError = function (e) {
        this.transitions.isRunning = !1;
        var n = [].slice.call(arguments, 1),
          i = n[0],
          r = n[1],
          o = this.cache.getAction(i);
        return (
          this.cache.delete(i),
          (this.B && this.B(e, o, i, r) === !1) ||
            (o === "click" && this.force(i)),
          !1
        );
      }),
      (t.prefetch = function (e) {
        var n = this;
        ((e = this.url.getAbsoluteHref(e)),
          this.cache.has(e) ||
            this.cache.set(
              e,
              this.request(
                e,
                this.timeout,
                this.onRequestError.bind(this, "barba"),
                this.cache,
                this.headers,
              ).catch(function (i) {
                n.logger.error(i);
              }),
              "prefetch",
              "pending",
            ));
      }),
      (t.G = function () {
        (this.prefetchIgnore !== !0 &&
          (document.addEventListener("mouseover", this.U),
          document.addEventListener("touchstart", this.U)),
          document.addEventListener("click", this.$),
          window.addEventListener("popstate", this.X));
      }),
      (t.J = function () {
        (this.prefetchIgnore !== !0 &&
          (document.removeEventListener("mouseover", this.U),
          document.removeEventListener("touchstart", this.U)),
          document.removeEventListener("click", this.$),
          window.removeEventListener("popstate", this.X));
      }),
      (t.U = function (e) {
        var n = this,
          i = this.W(e);
        if (i) {
          var r = this.url.getAbsoluteHref(this.dom.getHref(i));
          this.prevent.checkHref(r) ||
            this.cache.has(r) ||
            this.cache.set(
              r,
              this.request(
                r,
                this.timeout,
                this.onRequestError.bind(this, i),
                this.cache,
                this.headers,
              ).catch(function (o) {
                n.logger.error(o);
              }),
              "enter",
              "pending",
            );
        }
      }),
      (t.$ = function (e) {
        var n = this.W(e);
        if (n) {
          if (this.transitions.isRunning && this.preventRunning)
            return (e.preventDefault(), void e.stopPropagation());
          ((this.F = e), this.go(this.dom.getHref(n), n, e));
        }
      }),
      (t.X = function (e) {
        this.go(this.url.getHref(), "popstate", e);
      }),
      (t.W = function (e) {
        for (var n = e.target; n && !this.dom.getHref(n); ) n = n.parentNode;
        if (n && !this.prevent.checkLink(n, e, this.dom.getHref(n))) return n;
      }),
      (t.I = function () {
        var e = this.url.getHref(),
          n = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: zt({ href: e }, this.url.parse(e)),
          };
        ((this.D = {
          current: n,
          event: void 0,
          next: zt({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data));
      }),
      nn(s, [
        {
          key: "data",
          get: function () {
            return this.D;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this.q;
          },
        },
      ]),
      s
    );
  })())(),
  yi =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
function wi(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var Si = { exports: {} };
(function (s, t) {
  (function (e, n) {
    s.exports = n();
  })(yi, function () {
    var e = function () {
      function n(p) {
        return (o.appendChild(p.dom), p);
      }
      function i(p) {
        for (var f = 0; f < o.children.length; f++)
          o.children[f].style.display = f === p ? "block" : "none";
        r = p;
      }
      var r = 0,
        o = document.createElement("div");
      ((o.style.cssText =
        "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
        o.addEventListener(
          "click",
          function (p) {
            (p.preventDefault(), i(++r % o.children.length));
          },
          !1,
        ));
      var l = (performance || Date).now(),
        a = l,
        c = 0,
        u = n(new e.Panel("FPS", "#0ff", "#002")),
        h = n(new e.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var d = n(new e.Panel("MB", "#f08", "#201"));
      return (
        i(0),
        {
          REVISION: 16,
          dom: o,
          addPanel: n,
          showPanel: i,
          begin: function () {
            l = (performance || Date).now();
          },
          end: function () {
            c++;
            var p = (performance || Date).now();
            if (
              (h.update(p - l, 200),
              p > a + 1e3 &&
                (u.update((1e3 * c) / (p - a), 100), (a = p), (c = 0), d))
            ) {
              var f = performance.memory;
              d.update(f.usedJSHeapSize / 1048576, f.jsHeapSizeLimit / 1048576);
            }
            return p;
          },
          update: function () {
            l = this.end();
          },
          domElement: o,
          setMode: i,
        }
      );
    };
    return (
      (e.Panel = function (n, i, r) {
        var o = 1 / 0,
          l = 0,
          a = Math.round,
          c = a(window.devicePixelRatio || 1),
          u = 80 * c,
          h = 48 * c,
          d = 3 * c,
          p = 2 * c,
          f = 3 * c,
          m = 15 * c,
          v = 74 * c,
          g = 30 * c,
          y = document.createElement("canvas");
        ((y.width = u),
          (y.height = h),
          (y.style.cssText = "width:80px;height:48px"));
        var b = y.getContext("2d");
        return (
          (b.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif"),
          (b.textBaseline = "top"),
          (b.fillStyle = r),
          b.fillRect(0, 0, u, h),
          (b.fillStyle = i),
          b.fillText(n, d, p),
          b.fillRect(f, m, v, g),
          (b.fillStyle = r),
          (b.globalAlpha = 0.9),
          b.fillRect(f, m, v, g),
          {
            dom: y,
            update: function (x, E) {
              ((o = Math.min(o, x)),
                (l = Math.max(l, x)),
                (b.fillStyle = r),
                (b.globalAlpha = 1),
                b.fillRect(0, 0, u, m),
                (b.fillStyle = i),
                b.fillText(
                  a(x) + " " + n + " (" + a(o) + "-" + a(l) + ")",
                  d,
                  p,
                ),
                b.drawImage(y, f + c, m, v - c, g, f, m, v - c, g),
                b.fillRect(f + v - c, m, c, g),
                (b.fillStyle = r),
                (b.globalAlpha = 0.9),
                b.fillRect(f + v - c, m, c, a((1 - x / E) * g)));
            },
          }
        );
      }),
      e
    );
  });
})(Si);
var ho = Si.exports;
const fo = wi(ho),
  ie = typeof window < "u",
  _i =
    (ie && !("onscroll" in window)) ||
    (typeof navigator < "u" &&
      /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
  Ei = ie && window.devicePixelRatio > 1,
  po = {
    elements_selector: ".lazy",
    container: _i || ie ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_bg_set: "bg-set",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1,
    restore_on_error: !1,
  },
  xi = (s) => Object.assign({}, po, s),
  qn = function (s, t) {
    let e;
    const n = "LazyLoad::Initialized",
      i = new s(t);
    try {
      e = new CustomEvent(n, { detail: { instance: i } });
    } catch {
      ((e = document.createEvent("CustomEvent")),
        e.initCustomEvent(n, !1, !1, { instance: i }));
    }
    window.dispatchEvent(e);
  },
  mo = (s, t) => {
    if (t)
      if (t.length) for (let e, n = 0; (e = t[n]); n += 1) qn(s, e);
      else qn(s, t);
  },
  Vt = "src",
  rn = "srcset",
  on = "sizes",
  Ti = "poster",
  Ze = "llOriginalAttrs",
  Ci = "data",
  an = "loading",
  Ii = "loaded",
  Li = "applied",
  go = "entered",
  ln = "error",
  Ai = "native",
  ki = "data-",
  Mi = "ll-status",
  It = (s, t) => s.getAttribute(ki + t),
  vo = (s, t, e) => {
    const n = ki + t;
    e !== null ? s.setAttribute(n, e) : s.removeAttribute(n);
  },
  ts = (s) => It(s, Mi),
  ye = (s, t) => vo(s, Mi, t),
  xs = (s) => ye(s, null),
  cn = (s) => ts(s) === null,
  bo = (s) => ts(s) === an,
  yo = (s) => ts(s) === ln,
  un = (s) => ts(s) === Ai,
  wo = [an, Ii, Li, ln],
  So = (s) => wo.indexOf(ts(s)) >= 0,
  re = (s, t, e, n) => {
    s &&
      typeof s == "function" &&
      (n === void 0 ? (e === void 0 ? s(t) : s(t, e)) : s(t, e, n));
  },
  Oe = (s, t) => {
    ie && t !== "" && s.classList.add(t);
  },
  qt = (s, t) => {
    ie && t !== "" && s.classList.remove(t);
  },
  _o = (s) => {
    s.llTempImage = document.createElement("IMG");
  },
  Eo = (s) => {
    delete s.llTempImage;
  },
  Pi = (s) => s.llTempImage,
  Ts = (s, t) => {
    if (!t) return;
    const e = t._observer;
    e && e.unobserve(s);
  },
  xo = (s) => {
    s.disconnect();
  },
  To = (s, t, e) => {
    t.unobserve_entered && Ts(s, e);
  },
  hn = (s, t) => {
    s && (s.loadingCount += t);
  },
  Co = (s) => {
    s && (s.toLoadCount -= 1);
  },
  Oi = (s, t) => {
    s && (s.toLoadCount = t);
  },
  Io = (s) => s.loadingCount > 0,
  Lo = (s) => s.toLoadCount > 0,
  $i = (s) => {
    let t = [];
    for (let e, n = 0; (e = s.children[n]); n += 1)
      e.tagName === "SOURCE" && t.push(e);
    return t;
  },
  dn = (s, t) => {
    const e = s.parentNode;
    e && e.tagName === "PICTURE" && $i(e).forEach(t);
  },
  Ri = (s, t) => {
    $i(s).forEach(t);
  },
  Cs = [Vt],
  Di = [Vt, Ti],
  We = [Vt, rn, on],
  Fi = [Ci],
  Is = (s) => !!s[Ze],
  Ni = (s) => s[Ze],
  qi = (s) => delete s[Ze],
  ke = (s, t) => {
    if (Is(s)) return;
    const e = {};
    (t.forEach((n) => {
      e[n] = s.getAttribute(n);
    }),
      (s[Ze] = e));
  },
  Ao = (s) => {
    Is(s) || (s[Ze] = { backgroundImage: s.style.backgroundImage });
  },
  me = (s, t) => {
    if (!Is(s)) return;
    const e = Ni(s);
    t.forEach((n) => {
      ((i, r, o) => {
        o ? i.setAttribute(r, o) : i.removeAttribute(r);
      })(s, n, e[n]);
    });
  },
  ko = (s) => {
    if (!Is(s)) return;
    const t = Ni(s);
    s.style.backgroundImage = t.backgroundImage;
  },
  zi = (s, t, e) => {
    (Oe(s, t.class_applied),
      ye(s, Li),
      e && (t.unobserve_completed && Ts(s, t), re(t.callback_applied, s, e)));
  },
  Bi = (s, t, e) => {
    (Oe(s, t.class_loading),
      ye(s, an),
      e && (hn(e, 1), re(t.callback_loading, s, e)));
  },
  se = (s, t, e) => {
    e && s.setAttribute(t, e);
  },
  zn = (s, t) => {
    (se(s, on, It(s, t.data_sizes)),
      se(s, rn, It(s, t.data_srcset)),
      se(s, Vt, It(s, t.data_src)));
  },
  Mo = (s, t) => {
    (dn(s, (e) => {
      (ke(e, We), zn(e, t));
    }),
      ke(s, We),
      zn(s, t));
  },
  Po = (s, t) => {
    (ke(s, Cs), se(s, Vt, It(s, t.data_src)));
  },
  Oo = (s, t) => {
    (Ri(s, (e) => {
      (ke(e, Cs), se(e, Vt, It(e, t.data_src)));
    }),
      ke(s, Di),
      se(s, Ti, It(s, t.data_poster)),
      se(s, Vt, It(s, t.data_src)),
      s.load());
  },
  $o = (s, t) => {
    (ke(s, Fi), se(s, Ci, It(s, t.data_src)));
  },
  Ro = (s, t, e) => {
    const n = It(s, t.data_bg),
      i = It(s, t.data_bg_hidpi),
      r = Ei && i ? i : n;
    r &&
      ((s.style.backgroundImage = `url("${r}")`),
      Pi(s).setAttribute(Vt, r),
      Bi(s, t, e));
  },
  Do = (s, t, e) => {
    const n = It(s, t.data_bg_multi),
      i = It(s, t.data_bg_multi_hidpi),
      r = Ei && i ? i : n;
    r && ((s.style.backgroundImage = r), zi(s, t, e));
  },
  Fo = (s, t, e) => {
    const n = It(s, t.data_bg_set);
    if (!n) return;
    let i = n.split("|").map((r) => `image-set(${r})`);
    ((s.style.backgroundImage = i.join()), zi(s, t, e));
  },
  Ui = { IMG: Mo, IFRAME: Po, VIDEO: Oo, OBJECT: $o },
  No = (s, t) => {
    const e = Ui[s.tagName];
    e && e(s, t);
  },
  qo = (s, t, e) => {
    const n = Ui[s.tagName];
    n && (n(s, t), Bi(s, t, e));
  },
  zo = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
  Bo = (s) => zo.indexOf(s.tagName) > -1,
  Hi = (s, t) => {
    !t || Io(t) || Lo(t) || re(s.callback_finish, t);
  },
  Bn = (s, t, e) => {
    (s.addEventListener(t, e), (s.llEvLisnrs[t] = e));
  },
  Uo = (s, t, e) => {
    s.removeEventListener(t, e);
  },
  fn = (s) => !!s.llEvLisnrs,
  Ho = (s, t, e) => {
    fn(s) || (s.llEvLisnrs = {});
    const n = s.tagName === "VIDEO" ? "loadeddata" : "load";
    (Bn(s, n, t), Bn(s, "error", e));
  },
  Vs = (s) => {
    if (!fn(s)) return;
    const t = s.llEvLisnrs;
    for (let e in t) {
      const n = t[e];
      Uo(s, e, n);
    }
    delete s.llEvLisnrs;
  },
  Vi = (s, t, e) => {
    (Eo(s),
      hn(e, -1),
      Co(e),
      qt(s, t.class_loading),
      t.unobserve_completed && Ts(s, e));
  },
  Vo = (s, t, e, n) => {
    const i = un(t);
    (Vi(t, e, n),
      Oe(t, e.class_loaded),
      ye(t, Ii),
      re(e.callback_loaded, t, n),
      i || Hi(e, n));
  },
  jo = (s, t, e, n) => {
    const i = un(t);
    (Vi(t, e, n),
      Oe(t, e.class_error),
      ye(t, ln),
      re(e.callback_error, t, n),
      e.restore_on_error && me(t, We),
      i || Hi(e, n));
  },
  js = (s, t, e) => {
    const n = Pi(s) || s;
    fn(n) ||
      Ho(
        n,
        (i) => {
          (Vo(0, s, t, e), Vs(n));
        },
        (i) => {
          (jo(0, s, t, e), Vs(n));
        },
      );
  },
  Ws = (s, t, e) => {
    Bo(s)
      ? ((n, i, r) => {
          (js(n, i, r), qo(n, i, r));
        })(s, t, e)
      : ((n, i, r) => {
          (_o(n), js(n, i, r), Ao(n), Ro(n, i, r), Do(n, i, r), Fo(n, i, r));
        })(s, t, e);
  },
  Wo = (s, t, e) => {
    (s.setAttribute("loading", "lazy"), js(s, t, e), No(s, t), ye(s, Ai));
  },
  Un = (s) => {
    (s.removeAttribute(Vt), s.removeAttribute(rn), s.removeAttribute(on));
  },
  Xo = (s) => {
    (dn(s, (t) => {
      Un(t);
    }),
      Un(s));
  },
  ji = (s) => {
    (dn(s, (t) => {
      me(t, We);
    }),
      me(s, We));
  },
  Go = (s) => {
    (Ri(s, (t) => {
      me(t, Cs);
    }),
      me(s, Di),
      s.load());
  },
  Yo = (s) => {
    me(s, Cs);
  },
  Ko = (s) => {
    me(s, Fi);
  },
  Jo = { IMG: ji, IFRAME: Yo, VIDEO: Go, OBJECT: Ko },
  Qo = (s, t) => {
    (((e) => {
      const n = Jo[e.tagName];
      n ? n(e) : ko(e);
    })(s),
      ((e, n) => {
        cn(e) ||
          un(e) ||
          (qt(e, n.class_entered),
          qt(e, n.class_exited),
          qt(e, n.class_applied),
          qt(e, n.class_loading),
          qt(e, n.class_loaded),
          qt(e, n.class_error));
      })(s, t),
      xs(s),
      qi(s));
  },
  Zo = (s, t, e, n) => {
    e.cancel_on_exit &&
      bo(s) &&
      s.tagName === "IMG" &&
      (Vs(s),
      Xo(s),
      ji(s),
      qt(s, e.class_loading),
      hn(n, -1),
      xs(s),
      re(e.callback_cancel, s, t, n));
  },
  ta = (s, t, e, n) => {
    const i = So(s);
    (ye(s, go),
      Oe(s, e.class_entered),
      qt(s, e.class_exited),
      To(s, e, n),
      re(e.callback_enter, s, t, n),
      i || Ws(s, e, n));
  },
  ea = (s, t, e, n) => {
    cn(s) ||
      (Oe(s, e.class_exited), Zo(s, t, e, n), re(e.callback_exit, s, t, n));
  },
  sa = ["IMG", "IFRAME", "VIDEO"],
  Wi = (s) => s.use_native && "loading" in HTMLImageElement.prototype,
  na = (s, t, e) => {
    (s.forEach((n) => {
      sa.indexOf(n.tagName) !== -1 && Wo(n, t, e);
    }),
      Oi(e, 0));
  },
  ia = (s) => s.isIntersecting || s.intersectionRatio > 0,
  ra = (s, t) => {
    t.forEach((e) => {
      s.observe(e);
    });
  },
  oa = (s, t) => {
    (xo(s), ra(s, t));
  },
  aa = (s, t) => {
    Wi(s) ||
      (t._observer = new IntersectionObserver(
        (e) => {
          ((n, i, r) => {
            n.forEach((o) =>
              ia(o) ? ta(o.target, o, i, r) : ea(o.target, o, i, r),
            );
          })(e, s, t);
        },
        ((e) => ({
          root: e.container === document ? null : e.container,
          rootMargin: e.thresholds || e.threshold + "px",
        }))(s),
      ));
  },
  Xi = (s) => Array.prototype.slice.call(s),
  ys = (s) => s.container.querySelectorAll(s.elements_selector),
  la = (s) => Xi(s).filter(cn),
  ca = (s) => yo(s),
  ua = (s) => Xi(s).filter(ca),
  Hn = (s, t) => la(s || ys(t)),
  ha = (s, t) => {
    (ua(ys(s)).forEach((e) => {
      (qt(e, s.class_error), xs(e));
    }),
      t.update());
  },
  da = (s, t) => {
    ie &&
      ((t._onlineHandler = () => {
        ha(s, t);
      }),
      window.addEventListener("online", t._onlineHandler));
  },
  fa = (s) => {
    ie && window.removeEventListener("online", s._onlineHandler);
  },
  Ce = function (s, t) {
    const e = xi(s);
    ((this._settings = e),
      (this.loadingCount = 0),
      aa(e, this),
      da(e, this),
      this.update(t));
  };
((Ce.prototype = {
  update: function (s) {
    const t = this._settings,
      e = Hn(s, t);
    (Oi(this, e.length),
      _i ? this.loadAll(e) : Wi(t) ? na(e, t, this) : oa(this._observer, e));
  },
  destroy: function () {
    (this._observer && this._observer.disconnect(),
      fa(this),
      ys(this._settings).forEach((s) => {
        qi(s);
      }),
      delete this._observer,
      delete this._settings,
      delete this._onlineHandler,
      delete this.loadingCount,
      delete this.toLoadCount);
  },
  loadAll: function (s) {
    const t = this._settings;
    Hn(s, t).forEach((e) => {
      (Ts(e, this), Ws(e, t, this));
    });
  },
  restoreAll: function () {
    const s = this._settings;
    ys(s).forEach((t) => {
      Qo(t, s);
    });
  },
}),
  (Ce.load = (s, t) => {
    const e = xi(t);
    Ws(s, e);
  }),
  (Ce.resetStatus = (s) => {
    xs(s);
  }),
  ie && mo(Ce, window.lazyLoadOptions));
const Xs = document.documentElement,
  { body: tt } = document,
  rs = Xs.hasAttribute("data-debug");
function pa() {
  let s = !1;
  (document.addEventListener("keydown", (t) => {
    t.key === "Control"
      ? (s = !0)
      : s && t.key === "g" && tt.classList.toggle("-isGridVisible");
  }),
    document.addEventListener("keyup", (t) => {
      t.key === "Control" && (s = !1);
    }));
}
function ma() {
  let s = !1;
  (document.addEventListener("keydown", (t) => {
    t.key === "Control"
      ? (s = !0)
      : s && t.key === "o" && tt.classList.toggle("-isOulineVisible");
  }),
    document.addEventListener("keyup", (t) => {
      t.key === "Control" && (s = !1);
    }));
}
const ga = (s, t) => {
    let e;
    return (...n) => {
      (clearTimeout(e),
        (e = setTimeout(() => {
          s.apply(void 0, n);
        }, t)));
    };
  },
  Vn = (s, t) => {
    let e, n;
    return (...i) => {
      const o = +new Date();
      e && o < e + t
        ? (clearTimeout(n),
          (n = setTimeout(() => {
            ((e = o), s.apply(void 0, i));
          }, t)))
        : ((e = o), s.apply(void 0, i));
    };
  },
  va = (s, t) => {
    const n = Object.assign({ async: !0, id: "" }, t),
      i = document.querySelector(`#${n.id}`);
    if (i) return i;
    const r = document.querySelector("script"),
      o = document.createElement("script"),
      l = Object.keys(n);
    for (let a = l.length - 1; a >= 0; a -= 1) {
      const c = l[a],
        u = n[c];
      u && (o[c] = u);
    }
    return ((o.src = s), r.parentNode.insertBefore(o, r), o);
  };
/**
 * anime.js - ESM
 * @version v4.1.2
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */ const jt = typeof window < "u",
  Rs = jt ? window : null,
  Me = jt ? document : null,
  ot = { OBJECT: 0, ATTRIBUTE: 1, CSS: 2, TRANSFORM: 3, CSS_VAR: 4 },
  B = { NUMBER: 0, UNIT: 1, COLOR: 2, COMPLEX: 3 },
  kt = { NONE: 0, AUTO: 1, FORCE: 2 },
  St = { replace: 0, none: 1, blend: 2 },
  jn = Symbol(),
  pn = Symbol(),
  Gi = Symbol(),
  Ls = Symbol(),
  ba = Symbol(),
  j = 1e-11,
  Yi = 1e12,
  ge = 1e3,
  Gs = 120,
  te = "",
  Ki = (() => {
    const s = new Map();
    return (
      s.set("x", "translateX"),
      s.set("y", "translateY"),
      s.set("z", "translateZ"),
      s
    );
  })(),
  Ji = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  Qi = Ji.reduce((s, t) => ({ ...s, [t]: t + "(" }), {}),
  xt = () => {},
  ya = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,
  wa = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,
  Sa = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
  _a =
    /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,
  Ea =
    /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
  Wn = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,
  Zi = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,
  xa = /([a-z])([A-Z])/g,
  Ta = /(\w+)(\([^)]+\)+)/g,
  Ca = /(\*=|\+=|-=)/,
  tr = {
    id: null,
    keyframes: null,
    playbackEase: null,
    playbackRate: 1,
    frameRate: Gs,
    loop: 0,
    reversed: !1,
    alternate: !1,
    autoplay: !0,
    duration: ge,
    delay: 0,
    loopDelay: 0,
    ease: "out(2)",
    composition: St.replace,
    modifier: (s) => s,
    onBegin: xt,
    onBeforeUpdate: xt,
    onUpdate: xt,
    onLoop: xt,
    onPause: xt,
    onComplete: xt,
    onRender: xt,
  },
  Ia = { root: Me },
  pt = { defaults: tr, precision: 4, timeScale: 1, tickThreshold: 200 },
  er = { version: "4.1.2", engine: null };
jt && (Rs.AnimeJS || (Rs.AnimeJS = []), Rs.AnimeJS.push(er));
const La = (s) => s.replace(xa, "$1-$2").toLowerCase(),
  pe = (s, t) => s.indexOf(t) === 0,
  Xe = Date.now,
  ve = Array.isArray,
  Ue = (s) => s && s.constructor === Object,
  Ie = (s) => typeof s == "number" && !isNaN(s),
  $e = (s) => typeof s == "string",
  ne = (s) => typeof s == "function",
  D = (s) => typeof s > "u",
  hs = (s) => D(s) || s === null,
  sr = (s) => jt && s instanceof SVGElement,
  nr = (s) => ya.test(s),
  ir = (s) => pe(s, "rgb"),
  rr = (s) => pe(s, "hsl"),
  Aa = (s) => nr(s) || ir(s) || rr(s),
  ds = (s) => !pt.defaults.hasOwnProperty(s),
  de = (s) => ($e(s) ? parseFloat(s) : s),
  xe = Math.pow,
  or = Math.sqrt,
  ka = Math.sin,
  Ma = Math.cos,
  Ge = Math.abs,
  Pa = Math.ceil,
  Ye = Math.floor,
  Oa = Math.asin,
  $a = Math.max,
  es = Math.PI,
  Ys = Math.round,
  yt = (s, t, e) => (s < t ? t : s > e ? e : s),
  Xn = {},
  at = (s, t) => {
    if (t < 0) return s;
    if (!t) return Ys(s);
    let e = Xn[t];
    return (e || (e = Xn[t] = 10 ** t), Ys(s * e) / e);
  },
  Ra = (s, t) =>
    ve(t)
      ? t.reduce((e, n) => (Ge(n - s) < Ge(e - s) ? n : e))
      : t
        ? Ys(s / t) * t
        : s,
  Kt = (s, t, e) => s + (t - s) * e,
  mn = (s, t, e) => {
    const n = 10 ** (e || 0);
    return Ye((Math.random() * (t - s + 1 / n) + s) * n) / n;
  },
  ar = (s) => {
    let t = s.length,
      e,
      n;
    for (; t; ) ((n = mn(0, --t)), (e = s[t]), (s[t] = s[n]), (s[n] = e));
    return s;
  },
  As = (s) => (s === 1 / 0 ? Yi : s === -1 / 0 ? -1e12 : s),
  Le = (s) => (s <= j ? j : As(at(s, 11))),
  Et = (s) => (ve(s) ? [...s] : s),
  lr = (s, t) => {
    const e = { ...s };
    for (let n in t) {
      const i = s[n];
      e[n] = D(i) ? t[n] : i;
    }
    return e;
  },
  Z = (s, t, e, n = "_prev", i = "_next") => {
    let r = s._head,
      o = i;
    for (e && ((r = s._tail), (o = n)); r; ) {
      const l = r[o];
      (t(r), (r = l));
    }
  },
  ee = (s, t, e = "_prev", n = "_next") => {
    const i = t[e],
      r = t[n];
    (i ? (i[n] = r) : (s._head = r),
      r ? (r[e] = i) : (s._tail = i),
      (t[e] = null),
      (t[n] = null));
  },
  fe = (s, t, e, n = "_prev", i = "_next") => {
    let r = s._tail;
    for (; r && e && e(r, t); ) r = r[n];
    const o = r ? r[i] : s._head;
    (r ? (r[i] = t) : (s._head = t),
      o ? (o[n] = t) : (s._tail = t),
      (t[n] = r),
      (t[i] = o));
  },
  Da = (s) => {
    let t;
    return (...e) => {
      let n, i, r, o;
      t &&
        ((n = t.currentIteration),
        (i = t.iterationProgress),
        (r = t.reversed),
        (o = t._alternate),
        t.revert());
      const l = s(...e);
      return (
        l && !ne(l) && l.revert && (t = l),
        D(i) ||
          ((t.currentIteration = n),
          (t.iterationProgress = (o && n % 2 ? !r : r) ? 1 - i : i)),
        l || xt
      );
    };
  };
class cr {
  constructor(t = 0) {
    ((this.deltaTime = 0),
      (this._currentTime = t),
      (this._elapsedTime = t),
      (this._startTime = t),
      (this._lastTime = t),
      (this._scheduledTime = 0),
      (this._frameDuration = at(ge / Gs, 0)),
      (this._fps = Gs),
      (this._speed = 1),
      (this._hasChildren = !1),
      (this._head = null),
      (this._tail = null));
  }
  get fps() {
    return this._fps;
  }
  set fps(t) {
    const e = this._frameDuration,
      n = +t,
      i = n < j ? j : n,
      r = at(ge / i, 0);
    ((this._fps = i),
      (this._frameDuration = r),
      (this._scheduledTime += r - e));
  }
  get speed() {
    return this._speed;
  }
  set speed(t) {
    const e = +t;
    this._speed = e < j ? j : e;
  }
  requestTick(t) {
    const e = this._scheduledTime,
      n = this._elapsedTime;
    if (((this._elapsedTime += t - n), n < e)) return kt.NONE;
    const i = this._frameDuration,
      r = n - e;
    return ((this._scheduledTime += r < i ? i : r), kt.AUTO);
  }
  computeDeltaTime(t) {
    const e = t - this._lastTime;
    return ((this.deltaTime = e), (this._lastTime = t), e);
  }
}
const fs = (s, t, e, n, i) => {
    const r = s.parent,
      o = s.duration,
      l = s.completed,
      a = s.iterationDuration,
      c = s.iterationCount,
      u = s._currentIteration,
      h = s._loopDelay,
      d = s._reversed,
      p = s._alternate,
      f = s._hasChildren,
      m = s._delay,
      v = s._currentTime,
      g = m + a,
      y = t - m,
      b = yt(v, -m, o),
      x = yt(y, -m, o),
      E = y - v,
      C = x > 0,
      S = x >= o,
      T = o <= j,
      M = i === kt.FORCE;
    let I = 0,
      k = y,
      L = 0;
    if (c > 1) {
      const W = ~~(x / (a + (S ? 0 : h)));
      ((s._currentIteration = yt(W, 0, c)),
        S && s._currentIteration--,
        (I = s._currentIteration % 2),
        (k = x % (a + h) || 0));
    }
    const $ = d ^ (p && I),
      _ = s._ease;
    let P = S ? ($ ? 0 : o) : $ ? a - k : k;
    _ && (P = a * _(P / a) || 0);
    const U = (r ? r.backwards : y < v) ? !$ : !!$;
    if (
      ((s._currentTime = y),
      (s._iterationTime = P),
      (s.backwards = U),
      C && !s.began
        ? ((s.began = !0), !e && !(r && (U || !r.began)) && s.onBegin(s))
        : y <= 0 && (s.began = !1),
      !e && !f && C && s._currentIteration !== u && s.onLoop(s),
      M ||
        (i === kt.AUTO &&
          ((t >= m && t <= g) || (t <= m && b > m) || (t >= g && b !== o))) ||
        (P >= g && b !== o) ||
        (P <= m && b > 0) ||
        (t <= b && b === o && l) ||
        (S && !l && T))
    ) {
      if ((C && (s.computeDeltaTime(b), e || s.onBeforeUpdate(s)), !f)) {
        const W = M || (U ? E * -1 : E) >= pt.tickThreshold,
          O = s._offset + (r ? r._offset : 0) + m + P;
        let w = s._head,
          N,
          V,
          ct,
          it,
          K = 0;
        for (; w; ) {
          const et = w._composition,
            ut = w._currentTime,
            G = w._changeDuration,
            dt = w._absoluteStartTime + w._changeDuration,
            ft = w._nextRep,
            Q = w._prevRep,
            H = et !== St.none;
          if (
            (W ||
              ((ut !== G || O <= dt + (ft ? ft._delay : 0)) &&
                (ut !== 0 || O >= w._absoluteStartTime))) &&
            (!H ||
              (!w._isOverridden &&
                (!w._isOverlapped || O <= dt) &&
                (!ft || ft._isOverridden || O <= ft._absoluteStartTime) &&
                (!Q ||
                  Q._isOverridden ||
                  O >= Q._absoluteStartTime + Q._changeDuration + w._delay)))
          ) {
            const A = (w._currentTime = yt(P - w._startTime, 0, G)),
              R = w._ease(A / w._updateDuration),
              z = w._modifier,
              Y = w._valueType,
              J = w._tweenType,
              st = J === ot.OBJECT,
              Tt = Y === B.NUMBER,
              mt = (Tt && st) || R === 0 || R === 1 ? -1 : pt.precision;
            let ht, Mt;
            if (Tt) ht = Mt = z(at(Kt(w._fromNumber, w._toNumber, R), mt));
            else if (Y === B.UNIT)
              ((Mt = z(at(Kt(w._fromNumber, w._toNumber, R), mt))),
                (ht = `${Mt}${w._unit}`));
            else if (Y === B.COLOR) {
              const rt = w._fromNumbers,
                Ct = w._toNumbers,
                Lt = at(yt(z(Kt(rt[0], Ct[0], R)), 0, 255), 0),
                Pt = at(yt(z(Kt(rt[1], Ct[1], R)), 0, 255), 0),
                we = at(yt(z(Kt(rt[2], Ct[2], R)), 0, 255), 0),
                Ut = yt(z(at(Kt(rt[3], Ct[3], R), mt)), 0, 1);
              if (((ht = `rgba(${Lt},${Pt},${we},${Ut})`), H)) {
                const Ht = w._numbers;
                ((Ht[0] = Lt), (Ht[1] = Pt), (Ht[2] = we), (Ht[3] = Ut));
              }
            } else if (Y === B.COMPLEX) {
              ht = w._strings[0];
              for (let rt = 0, Ct = w._toNumbers.length; rt < Ct; rt++) {
                const Lt = z(
                    at(Kt(w._fromNumbers[rt], w._toNumbers[rt], R), mt),
                  ),
                  Pt = w._strings[rt + 1];
                ((ht += `${Pt ? Lt + Pt : Lt}`), H && (w._numbers[rt] = Lt));
              }
            }
            if ((H && (w._number = Mt), !n && et !== St.blend)) {
              const rt = w.property;
              ((N = w.target),
                st
                  ? (N[rt] = ht)
                  : J === ot.ATTRIBUTE
                    ? N.setAttribute(rt, ht)
                    : ((V = N.style),
                      J === ot.TRANSFORM
                        ? (N !== ct && ((ct = N), (it = N[Ls])),
                          (it[rt] = ht),
                          (K = 1))
                        : J === ot.CSS
                          ? (V[rt] = ht)
                          : J === ot.CSS_VAR && V.setProperty(rt, ht)),
                C && (L = 1));
            } else w._value = ht;
          }
          if (K && w._renderTransforms) {
            let A = te;
            for (let R in it) A += `${Qi[R]}${it[R]}) `;
            ((V.transform = A), (K = 0));
          }
          w = w._next;
        }
        !e && L && s.onRender(s);
      }
      !e && C && s.onUpdate(s);
    }
    return (
      r && T
        ? !e &&
          ((r.began && !U && y >= o && !l) || (U && y <= j && l)) &&
          (s.onComplete(s), (s.completed = !U))
        : C && S
          ? c === 1 / 0
            ? (s._startTime += s.duration)
            : s._currentIteration >= c - 1 &&
              ((s.paused = !0),
              !l &&
                !f &&
                ((s.completed = !0),
                !e &&
                  !(r && (U || !r.began)) &&
                  (s.onComplete(s), s._resolve(s))))
          : (s.completed = !1),
      L
    );
  },
  le = (s, t, e, n, i) => {
    const r = s._currentIteration;
    if ((fs(s, t, e, n, i), s._hasChildren)) {
      const o = s,
        l = o.backwards,
        a = n ? t : o._iterationTime,
        c = Xe();
      let u = 0,
        h = !0;
      if (!n && o._currentIteration !== r) {
        const d = o.iterationDuration;
        (Z(o, (p) => {
          if (!l)
            (!p.completed &&
              !p.backwards &&
              p._currentTime < p.iterationDuration &&
              fs(p, d, e, 1, kt.FORCE),
              (p.began = !1),
              (p.completed = !1));
          else {
            const f = p.duration,
              m = p._offset + p._delay,
              v = m + f;
            !e && f <= j && (!m || v === d) && p.onComplete(p);
          }
        }),
          e || o.onLoop(o));
      }
      (Z(
        o,
        (d) => {
          const p = at((a - d._offset) * d._speed, 12),
            f = d._fps < o._fps ? d.requestTick(c) : i;
          ((u += fs(d, p, e, n, f)), !d.completed && h && (h = !1));
        },
        l,
      ),
        !e && u && o.onRender(o),
        (h || l) &&
          o._currentTime >= o.duration &&
          ((o.paused = !0),
          o.completed ||
            ((o.completed = !0), e || (o.onComplete(o), o._resolve(o)))));
    }
  },
  Ae = { animation: null, update: xt },
  Fa = (s) => {
    let t = Ae.animation;
    return (
      t ||
        ((t = {
          duration: j,
          computeDeltaTime: xt,
          _offset: 0,
          _delay: 0,
          _head: null,
          _tail: null,
        }),
        (Ae.animation = t),
        (Ae.update = () => {
          (s.forEach((e) => {
            for (let n in e) {
              const i = e[n],
                r = i._head;
              if (r) {
                const o = r._valueType,
                  l =
                    o === B.COMPLEX || o === B.COLOR
                      ? Et(r._fromNumbers)
                      : null;
                let a = r._fromNumber,
                  c = i._tail;
                for (; c && c !== r; ) {
                  if (l)
                    for (let u = 0, h = c._numbers.length; u < h; u++)
                      l[u] += c._numbers[u];
                  else a += c._number;
                  c = c._prevAdd;
                }
                ((r._toNumber = a), (r._toNumbers = l));
              }
            }
          }),
            fs(t, 1, 1, 0, kt.FORCE));
        })),
      t
    );
  },
  ur = jt ? requestAnimationFrame : setImmediate,
  Na = jt ? cancelAnimationFrame : clearImmediate;
let qa = class extends cr {
  constructor(t) {
    (super(t),
      (this.useDefaultMainLoop = !0),
      (this.pauseOnDocumentHidden = !0),
      (this.defaults = tr),
      (this.paused = !!(jt && Me.hidden)),
      (this.reqId = null));
  }
  update() {
    const t = (this._currentTime = Xe());
    if (this.requestTick(t)) {
      this.computeDeltaTime(t);
      const e = this._speed,
        n = this._fps;
      let i = this._head;
      for (; i; ) {
        const r = i._next;
        (i.paused
          ? (ee(this, i),
            (this._hasChildren = !!this._tail),
            (i._running = !1),
            i.completed && !i._cancelled && i.cancel())
          : le(
              i,
              (t - i._startTime) * i._speed * e,
              0,
              0,
              i._fps < n ? i.requestTick(t) : kt.AUTO,
            ),
          (i = r));
      }
      Ae.update();
    }
  }
  wake() {
    return (
      this.useDefaultMainLoop &&
        !this.reqId &&
        !this.paused &&
        (this.reqId = ur(hr)),
      this
    );
  }
  pause() {
    return ((this.paused = !0), za());
  }
  resume() {
    if (this.paused)
      return ((this.paused = !1), Z(this, (t) => t.resetTime()), this.wake());
  }
  get speed() {
    return this._speed * (pt.timeScale === 1 ? 1 : ge);
  }
  set speed(t) {
    ((this._speed = t * pt.timeScale), Z(this, (e) => (e.speed = e._speed)));
  }
  get timeUnit() {
    return pt.timeScale === 1 ? "ms" : "s";
  }
  set timeUnit(t) {
    const n = t === "s",
      i = n ? 0.001 : 1;
    if (pt.timeScale !== i) {
      ((pt.timeScale = i), (pt.tickThreshold = 200 * i));
      const r = n ? 0.001 : ge;
      ((this.defaults.duration *= r), (this._speed *= r));
    }
  }
  get precision() {
    return pt.precision;
  }
  set precision(t) {
    pt.precision = t;
  }
};
const gt = (() => {
    const s = new qa(Xe());
    return (
      jt &&
        ((er.engine = s),
        Me.addEventListener("visibilitychange", () => {
          s.pauseOnDocumentHidden && (Me.hidden ? s.pause() : s.resume());
        })),
      s
    );
  })(),
  hr = () => {
    gt._head ? ((gt.reqId = ur(hr)), gt.update()) : (gt.reqId = 0);
  },
  za = () => (Na(gt.reqId), (gt.reqId = 0), gt),
  Ba = (s, t, e) => {
    const n = s.style.transform;
    let i;
    if (n) {
      const r = s[Ls];
      let o;
      for (; (o = Ta.exec(n)); ) {
        const l = o[1],
          a = o[2].slice(1, -1);
        ((r[l] = a), l === t && ((i = a), e && (e[t] = a)));
      }
    }
    return n && !D(i)
      ? i
      : pe(t, "scale")
        ? "1"
        : pe(t, "rotate") || pe(t, "skew")
          ? "0deg"
          : "0px";
  };
function Gn(s) {
  const t = $e(s) ? Ia.root.querySelectorAll(s) : s;
  if (t instanceof NodeList || t instanceof HTMLCollection) return t;
}
function gn(s) {
  if (hs(s)) return [];
  if (ve(s)) {
    const e = s.flat(1 / 0),
      n = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      if (!hs(o)) {
        const l = Gn(o);
        if (l)
          for (let a = 0, c = l.length; a < c; a++) {
            const u = l[a];
            if (!hs(u)) {
              let h = !1;
              for (let d = 0, p = n.length; d < p; d++)
                if (n[d] === u) {
                  h = !0;
                  break;
                }
              h || n.push(u);
            }
          }
        else {
          let a = !1;
          for (let c = 0, u = n.length; c < u; c++)
            if (n[c] === o) {
              a = !0;
              break;
            }
          a || n.push(o);
        }
      }
    }
    return n;
  }
  if (!jt) return [s];
  const t = Gn(s);
  return t ? Array.from(t) : [s];
}
function ks(s) {
  const t = gn(s),
    e = t.length;
  if (e)
    for (let n = 0; n < e; n++) {
      const i = t[n];
      if (!i[jn]) {
        i[jn] = !0;
        const r = sr(i);
        (i.nodeType || r) && ((i[pn] = !0), (i[Gi] = r), (i[Ls] = {}));
      }
    }
  return t;
}
const Ua = ["opacity", "rotate", "overflow", "color"],
  Ha = (s, t) => {
    if (Ua.includes(t)) return !1;
    if (s.getAttribute(t) || t in s) {
      if (t === "scale") {
        const e = s.parentNode;
        return e && e.tagName === "filter";
      }
      return !0;
    }
  },
  Va = (s) => {
    const t = wa.exec(s) || Sa.exec(s),
      e = D(t[4]) ? 1 : +t[4];
    return [+t[1], +t[2], +t[3], e];
  },
  ja = (s) => {
    const t = s.length,
      e = t === 4 || t === 5;
    return [
      +("0x" + s[1] + s[e ? 1 : 2]),
      +("0x" + s[e ? 2 : 3] + s[e ? 2 : 4]),
      +("0x" + s[e ? 3 : 5] + s[e ? 3 : 6]),
      t === 5 || t === 9
        ? +(+("0x" + s[e ? 4 : 7] + s[e ? 4 : 8]) / 255).toFixed(3)
        : 1,
    ];
  },
  Ds = (s, t, e) => (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? s + (t - s) * 6 * e
      : e < 1 / 2
        ? t
        : e < 2 / 3
          ? s + (t - s) * (2 / 3 - e) * 6
          : s
  ),
  Wa = (s) => {
    const t = _a.exec(s) || Ea.exec(s),
      e = +t[1] / 360,
      n = +t[2] / 100,
      i = +t[3] / 100,
      r = D(t[4]) ? 1 : +t[4];
    let o, l, a;
    if (n === 0) o = l = a = i;
    else {
      const c = i < 0.5 ? i * (1 + n) : i + n - i * n,
        u = 2 * i - c;
      ((o = at(Ds(u, c, e + 1 / 3) * 255, 0)),
        (l = at(Ds(u, c, e) * 255, 0)),
        (a = at(Ds(u, c, e - 1 / 3) * 255, 0)));
    }
    return [o, l, a, r];
  },
  Xa = (s) => (ir(s) ? Va(s) : nr(s) ? ja(s) : rr(s) ? Wa(s) : [0, 0, 0, 1]),
  wt = (s, t) => (D(s) ? t : s),
  Gt = (s, t, e, n, i) => {
    if (ne(s)) {
      const r = () => {
        const o = s(t, e, n);
        return isNaN(+o) ? o || 0 : +o;
      };
      return (i && (i.func = r), r());
    } else return s;
  },
  vn = (s, t) =>
    s[pn]
      ? s[Gi] && Ha(s, t)
        ? ot.ATTRIBUTE
        : Ji.includes(t) || Ki.get(t)
          ? ot.TRANSFORM
          : pe(t, "--")
            ? ot.CSS_VAR
            : t in s.style
              ? ot.CSS
              : t in s
                ? ot.OBJECT
                : ot.ATTRIBUTE
      : ot.OBJECT,
  Yn = (s, t, e) => {
    const n = s.style[t];
    n && e && (e[t] = n);
    const i = n || getComputedStyle(s[ba] || s).getPropertyValue(t);
    return i === "auto" ? "0" : i;
  },
  ce = (s, t, e, n) => {
    const i = D(e) ? vn(s, t) : e;
    return i === ot.OBJECT
      ? s[t] || 0
      : i === ot.ATTRIBUTE
        ? s.getAttribute(t)
        : i === ot.TRANSFORM
          ? Ba(s, t, n)
          : i === ot.CSS_VAR
            ? Yn(s, t, n).trimStart()
            : Yn(s, t, n);
  },
  ps = (s, t, e) => (e === "-" ? s - t : e === "+" ? s + t : s * t),
  bn = () => ({ t: B.NUMBER, n: 0, u: null, o: null, d: null, s: null }),
  Rt = (s, t) => {
    if (
      ((t.t = B.NUMBER),
      (t.n = 0),
      (t.u = null),
      (t.o = null),
      (t.d = null),
      (t.s = null),
      !s)
    )
      return t;
    const e = +s;
    if (isNaN(e)) {
      let n = s;
      n[1] === "=" && ((t.o = n[0]), (n = n.slice(2)));
      const i = n.includes(" ") ? !1 : Zi.exec(n);
      if (i) return ((t.t = B.UNIT), (t.n = +i[1]), (t.u = i[2]), t);
      if (t.o) return ((t.n = +n), t);
      if (Aa(n)) return ((t.t = B.COLOR), (t.d = Xa(n)), t);
      {
        const r = n.match(Wn);
        return (
          (t.t = B.COMPLEX),
          (t.d = r ? r.map(Number) : []),
          (t.s = n.split(Wn) || []),
          t
        );
      }
    } else return ((t.n = e), t);
  },
  Kn = (s, t) => (
    (t.t = s._valueType),
    (t.n = s._toNumber),
    (t.u = s._unit),
    (t.o = null),
    (t.d = Et(s._toNumbers)),
    (t.s = Et(s._strings)),
    t
  ),
  At = bn(),
  ws = { _rep: new WeakMap(), _add: new Map() },
  yn = (s, t, e = "_rep") => {
    const n = ws[e];
    let i = n.get(s);
    return (
      i || ((i = {}), n.set(s, i)),
      i[t] ? i[t] : (i[t] = { _head: null, _tail: null })
    );
  },
  Ga = (s, t) => s._isOverridden || s._absoluteStartTime > t._absoluteStartTime,
  ms = (s) => {
    ((s._isOverlapped = 1),
      (s._isOverridden = 1),
      (s._changeDuration = j),
      (s._currentTime = j));
  },
  dr = (s, t) => {
    const e = s._composition;
    if (e === St.replace) {
      const n = s._absoluteStartTime;
      fe(t, s, Ga, "_prevRep", "_nextRep");
      const i = s._prevRep;
      if (i) {
        const r = i.parent,
          o = i._absoluteStartTime + i._changeDuration;
        if (
          s.parent.id !== r.id &&
          r.iterationCount > 1 &&
          o + (r.duration - r.iterationDuration) > n
        ) {
          ms(i);
          let c = i._prevRep;
          for (; c && c.parent.id === r.id; ) (ms(c), (c = c._prevRep));
        }
        const l = n - s._delay;
        if (o > l) {
          const c = i._startTime,
            u = o - (c + i._updateDuration);
          ((i._changeDuration = l - u - c),
            (i._currentTime = i._changeDuration),
            (i._isOverlapped = 1),
            i._changeDuration < j && ms(i));
        }
        let a = !0;
        if (
          (Z(r, (c) => {
            c._isOverlapped || (a = !1);
          }),
          a)
        ) {
          const c = r.parent;
          if (c) {
            let u = !0;
            (Z(c, (h) => {
              h !== r &&
                Z(h, (d) => {
                  d._isOverlapped || (u = !1);
                });
            }),
              u && c.cancel());
          } else r.cancel();
        }
      }
    } else if (e === St.blend) {
      const n = yn(s.target, s.property, "_add"),
        i = Fa(ws._add);
      let r = n._head;
      r ||
        ((r = { ...s }),
        (r._composition = St.replace),
        (r._updateDuration = j),
        (r._startTime = 0),
        (r._numbers = Et(s._fromNumbers)),
        (r._number = 0),
        (r._next = null),
        (r._prev = null),
        fe(n, r),
        fe(i, r));
      const o = s._toNumber;
      if (
        ((s._fromNumber = r._fromNumber - o),
        (s._toNumber = 0),
        (s._numbers = Et(s._fromNumbers)),
        (s._number = 0),
        (r._fromNumber = o),
        s._toNumbers)
      ) {
        const l = Et(s._toNumbers);
        (l &&
          l.forEach((a, c) => {
            ((s._fromNumbers[c] = r._fromNumbers[c] - a),
              (s._toNumbers[c] = 0));
          }),
          (r._fromNumbers = l));
      }
      fe(n, s, null, "_prevAdd", "_nextAdd");
    }
    return s;
  },
  fr = (s) => {
    const t = s._composition;
    if (t !== St.none) {
      const e = s.target,
        n = s.property,
        o = ws._rep.get(e)[n];
      if ((ee(o, s, "_prevRep", "_nextRep"), t === St.blend)) {
        const l = ws._add,
          a = l.get(e);
        if (!a) return;
        const c = a[n],
          u = Ae.animation;
        ee(c, s, "_prevAdd", "_nextAdd");
        const h = c._head;
        if (h && h === c._tail) {
          (ee(c, h, "_prevAdd", "_nextAdd"), ee(u, h));
          let d = !0;
          for (let p in a)
            if (a[p]._head) {
              d = !1;
              break;
            }
          d && l.delete(e);
        }
      }
    }
    return s;
  },
  Jn = (s) => ((s.paused = !0), (s.began = !1), (s.completed = !1), s),
  Ks = (s) => (
    s._cancelled &&
      (s._hasChildren
        ? Z(s, Ks)
        : Z(s, (t) => {
            t._composition !== St.none && dr(t, yn(t.target, t.property));
          }),
      (s._cancelled = 0)),
    s
  );
let Ya = 0;
class Ms extends cr {
  constructor(t = {}, e = null, n = 0) {
    super(0);
    const {
        id: i,
        delay: r,
        duration: o,
        reversed: l,
        alternate: a,
        loop: c,
        loopDelay: u,
        autoplay: h,
        frameRate: d,
        playbackRate: p,
        onComplete: f,
        onLoop: m,
        onPause: v,
        onBegin: g,
        onBeforeUpdate: y,
        onUpdate: b,
      } = t,
      x = e ? 0 : gt._elapsedTime,
      E = e ? e.defaults : pt.defaults,
      C = ne(r) || D(r) ? E.delay : +r,
      S = ne(o) || D(o) ? 1 / 0 : +o,
      T = wt(c, E.loop),
      M = wt(u, E.loopDelay),
      I = T === !0 || T === 1 / 0 || T < 0 ? 1 / 0 : T + 1;
    let k = 0;
    if (e) k = n;
    else {
      let L = Xe();
      (gt.paused && (gt.requestTick(L), (L = gt._elapsedTime)),
        (k = L - gt._startTime));
    }
    ((this.id = D(i) ? ++Ya : i),
      (this.parent = e),
      (this.duration = As((S + M) * I - M) || j),
      (this.backwards = !1),
      (this.paused = !0),
      (this.began = !1),
      (this.completed = !1),
      (this.onBegin = g || E.onBegin),
      (this.onBeforeUpdate = y || E.onBeforeUpdate),
      (this.onUpdate = b || E.onUpdate),
      (this.onLoop = m || E.onLoop),
      (this.onPause = v || E.onPause),
      (this.onComplete = f || E.onComplete),
      (this.iterationDuration = S),
      (this.iterationCount = I),
      (this._autoplay = e ? !1 : wt(h, E.autoplay)),
      (this._offset = k),
      (this._delay = C),
      (this._loopDelay = M),
      (this._iterationTime = 0),
      (this._currentIteration = 0),
      (this._resolve = xt),
      (this._running = !1),
      (this._reversed = +wt(l, E.reversed)),
      (this._reverse = this._reversed),
      (this._cancelled = 0),
      (this._alternate = wt(a, E.alternate)),
      (this._prev = null),
      (this._next = null),
      (this._elapsedTime = x),
      (this._startTime = x),
      (this._lastTime = x),
      (this._fps = wt(d, E.frameRate)),
      (this._speed = wt(p, E.playbackRate)));
  }
  get cancelled() {
    return !!this._cancelled;
  }
  set cancelled(t) {
    t ? this.cancel() : this.reset(1).play();
  }
  get currentTime() {
    return yt(at(this._currentTime, pt.precision), -this._delay, this.duration);
  }
  set currentTime(t) {
    const e = this.paused;
    (this.pause().seek(+t), e || this.resume());
  }
  get iterationCurrentTime() {
    return at(this._iterationTime, pt.precision);
  }
  set iterationCurrentTime(t) {
    this.currentTime = this.iterationDuration * this._currentIteration + t;
  }
  get progress() {
    return yt(at(this._currentTime / this.duration, 10), 0, 1);
  }
  set progress(t) {
    this.currentTime = this.duration * t;
  }
  get iterationProgress() {
    return yt(at(this._iterationTime / this.iterationDuration, 10), 0, 1);
  }
  set iterationProgress(t) {
    const e = this.iterationDuration;
    this.currentTime = e * this._currentIteration + e * t;
  }
  get currentIteration() {
    return this._currentIteration;
  }
  set currentIteration(t) {
    this.currentTime =
      this.iterationDuration * yt(+t, 0, this.iterationCount - 1);
  }
  get reversed() {
    return !!this._reversed;
  }
  set reversed(t) {
    t ? this.reverse() : this.play();
  }
  get speed() {
    return super.speed;
  }
  set speed(t) {
    ((super.speed = t), this.resetTime());
  }
  reset(t = 0) {
    return (
      Ks(this),
      this._reversed && !this._reverse && (this.reversed = !1),
      (this._iterationTime = this.iterationDuration),
      le(this, 0, 1, t, kt.FORCE),
      Jn(this),
      this._hasChildren && Z(this, Jn),
      this
    );
  }
  init(t = 0) {
    ((this.fps = this._fps),
      (this.speed = this._speed),
      !t && this._hasChildren && le(this, this.duration, 1, t, kt.FORCE),
      this.reset(t));
    const e = this._autoplay;
    return (e === !0 ? this.resume() : e && !D(e.linked) && e.link(this), this);
  }
  resetTime() {
    const t = 1 / (this._speed * gt._speed);
    return (
      (this._startTime = Xe() - (this._currentTime + this._delay) * t),
      this
    );
  }
  pause() {
    return this.paused ? this : ((this.paused = !0), this.onPause(this), this);
  }
  resume() {
    return this.paused
      ? ((this.paused = !1),
        this.duration <= j && !this._hasChildren
          ? le(this, j, 0, 0, kt.FORCE)
          : (this._running ||
              (fe(gt, this), (gt._hasChildren = !0), (this._running = !0)),
            this.resetTime(),
            (this._startTime -= 12),
            gt.wake()),
        this)
      : this;
  }
  restart() {
    return this.reset(0).resume();
  }
  seek(t, e = 0, n = 0) {
    (Ks(this), (this.completed = !1));
    const i = this.paused;
    return (
      (this.paused = !0),
      le(this, t + this._delay, ~~e, ~~n, kt.AUTO),
      i ? this : this.resume()
    );
  }
  alternate() {
    const t = this._reversed,
      e = this.iterationCount,
      n = this.iterationDuration,
      i = e === 1 / 0 ? Ye(Yi / n) : e;
    return (
      (this._reversed = +(this._alternate && !(i % 2) ? t : !t)),
      e === 1 / 0
        ? (this.iterationProgress = this._reversed
            ? 1 - this.iterationProgress
            : this.iterationProgress)
        : this.seek(n * i - this._currentTime),
      this.resetTime(),
      this
    );
  }
  play() {
    return (this._reversed && this.alternate(), this.resume());
  }
  reverse() {
    return (this._reversed || this.alternate(), this.resume());
  }
  cancel() {
    return (
      this._hasChildren ? Z(this, (t) => t.cancel(), !0) : Z(this, fr),
      (this._cancelled = 1),
      this.pause()
    );
  }
  stretch(t) {
    const e = this.duration,
      n = Le(t);
    if (e === n) return this;
    const i = t / e,
      r = t <= j;
    return (
      (this.duration = r ? j : n),
      (this.iterationDuration = r ? j : Le(this.iterationDuration * i)),
      (this._offset *= i),
      (this._delay *= i),
      (this._loopDelay *= i),
      this
    );
  }
  revert() {
    le(this, 0, 1, 0, kt.AUTO);
    const t = this._autoplay;
    return (t && t.linked && t.linked === this && t.revert(), this.cancel());
  }
  complete() {
    return this.seek(this.duration).cancel();
  }
  then(t = xt) {
    const e = this.then,
      n = () => {
        ((this.then = null), t(this), (this.then = e), (this._resolve = xt));
      };
    return new Promise(
      (i) => (
        (this._resolve = () => i(n())),
        this.completed && this._resolve(),
        this
      ),
    );
  }
}
const Pe = (s) => s,
  pr = (s, t, e) =>
    (((1 - 3 * e + 3 * t) * s + (3 * e - 6 * t)) * s + 3 * t) * s,
  Ka = (s, t, e) => {
    let n = 0,
      i = 1,
      r,
      o,
      l = 0;
    do
      ((o = n + (i - n) / 2), (r = pr(o, t, e) - s), r > 0 ? (i = o) : (n = o));
    while (Ge(r) > 1e-7 && ++l < 100);
    return o;
  },
  Ja = (s = 0.5, t = 0, e = 0.5, n = 1) =>
    s === t && e === n
      ? Pe
      : (i) => (i === 0 || i === 1 ? i : pr(Ka(i, s, e), t, n)),
  Qa = (s = 10, t) => {
    const e = t ? Pa : Ye;
    return (n) => e(yt(n, 0, 1) * s) * (1 / s);
  },
  mr = (...s) => {
    const t = s.length;
    if (!t) return Pe;
    const e = t - 1,
      n = s[0],
      i = s[e],
      r = [0],
      o = [de(n)];
    for (let l = 1; l < e; l++) {
      const a = s[l],
        c = $e(a) ? a.trim().split(" ") : [a],
        u = c[0],
        h = c[1];
      (r.push(D(h) ? l / e : de(h) / 100), o.push(de(u)));
    }
    return (
      o.push(de(i)),
      r.push(1),
      function (a) {
        for (let c = 1, u = r.length; c < u; c++) {
          const h = r[c];
          if (a <= h) {
            const d = r[c - 1],
              p = o[c - 1];
            return p + ((o[c] - p) * (a - d)) / (h - d);
          }
        }
        return o[o.length - 1];
      }
    );
  },
  Za = (s = 10, t = 1) => {
    const e = [0],
      n = s - 1;
    for (let i = 1; i < n; i++) {
      const r = e[i - 1],
        o = i / n,
        l = (i + 1) / n,
        a = o + (l - o) * Math.random(),
        c = o * (1 - t) + a * t;
      e.push(yt(c, r, 1));
    }
    return (e.push(1), mr(...e));
  },
  tl = es / 2,
  Qn = es * 2,
  Ne =
    (s = 1.68) =>
    (t) =>
      xe(t, +s),
  Zn = {
    [te]: Ne,
    Quad: Ne(2),
    Cubic: Ne(3),
    Quart: Ne(4),
    Quint: Ne(5),
    Sine: (s) => 1 - Ma(s * tl),
    Circ: (s) => 1 - or(1 - s * s),
    Expo: (s) => (s ? xe(2, 10 * s - 10) : 0),
    Bounce: (s) => {
      let t,
        e = 4;
      for (; s < ((t = xe(2, --e)) - 1) / 11; );
      return 1 / xe(4, 3 - e) - 7.5625 * xe((t * 3 - 2) / 22 - s, 2);
    },
    Back:
      (s = 1.70158) =>
      (t) =>
        (+s + 1) * t * t * t - +s * t * t,
    Elastic: (s = 1, t = 0.3) => {
      const e = yt(+s, 1, 10),
        n = yt(+t, j, 2),
        i = (n / Qn) * Oa(1 / e),
        r = Qn / n;
      return (o) =>
        o === 0 || o === 1
          ? o
          : -e * xe(2, -10 * (1 - o)) * ka((1 - o - i) * r);
    },
  },
  Js = {
    in: (s) => (t) => s(t),
    out: (s) => (t) => 1 - s(1 - t),
    inOut: (s) => (t) => (t < 0.5 ? s(t * 2) / 2 : 1 - s(t * -2 + 2) / 2),
    outIn: (s) => (t) =>
      t < 0.5 ? (1 - s(1 - t * 2)) / 2 : (s(t * 2 - 1) + 1) / 2,
  },
  el = (s, t, e) => {
    if (e[s]) return e[s];
    if (s.indexOf("(") <= -1) {
      const i =
        Js[s] || s.includes("Back") || s.includes("Elastic") ? t[s]() : t[s];
      return i ? (e[s] = i) : Pe;
    } else {
      const n = s.slice(0, -1).split("("),
        i = t[n[0]];
      return i ? (e[s] = i(...n[1].split(","))) : Pe;
    }
  },
  sl = (() => {
    const s = { linear: mr, irregular: Za, steps: Qa, cubicBezier: Ja };
    for (let t in Js)
      for (let e in Zn) {
        const n = Zn[e],
          i = Js[t];
        s[t + e] =
          e === te || e === "Back" || e === "Elastic"
            ? (r, o) => i(n(r, o))
            : i(n);
      }
    return s;
  })(),
  nl = { linear: Pe },
  Ss = (s) => (ne(s) ? s : $e(s) ? el(s, sl, nl) : Pe),
  ti = {},
  wn = (s, t, e) => {
    if (e === ot.TRANSFORM) {
      const n = Ki.get(s);
      return n || s;
    } else if (e === ot.CSS || (e === ot.ATTRIBUTE && sr(t) && s in t.style)) {
      const n = ti[s];
      if (n) return n;
      {
        const i = s && La(s);
        return ((ti[s] = i), i);
      }
    } else return s;
  },
  Fs = { deg: 1, rad: 180 / es, turn: 360 },
  ei = {},
  gr = (s, t, e, n = !1) => {
    const i = t.u,
      r = t.n;
    if (t.t === B.UNIT && i === e) return t;
    const o = r + i + e,
      l = ei[o];
    if (!D(l) && !n) t.n = l;
    else {
      let a;
      if (i in Fs) a = (r * Fs[i]) / Fs[e];
      else {
        const u = s.cloneNode(),
          h = s.parentNode,
          d = h && h !== Me ? h : Me.body;
        d.appendChild(u);
        const p = u.style;
        p.width = 100 + i;
        const f = u.offsetWidth || 100;
        p.width = 100 + e;
        const m = u.offsetWidth || 100,
          v = f / m;
        (d.removeChild(u), (a = v * r));
      }
      ((t.n = a), (ei[o] = a));
    }
    return (t.t, B.UNIT, (t.u = e), t);
  },
  Ps = (s) => {
    if (s._hasChildren) Z(s, Ps, !0);
    else {
      const t = s;
      (t.pause(),
        Z(t, (e) => {
          const n = e.property,
            i = e.target;
          if (i[pn]) {
            const r = i.style,
              o = t._inlineStyles[n];
            if (e._tweenType === ot.TRANSFORM) {
              const l = i[Ls];
              if (
                (D(o) || o === te ? delete l[n] : (l[n] = o),
                e._renderTransforms)
              )
                if (!Object.keys(l).length) r.removeProperty("transform");
                else {
                  let a = te;
                  for (let c in l) a += Qi[c] + l[c] + ") ";
                  r.transform = a;
                }
            } else D(o) || o === te ? r.removeProperty(n) : (r[n] = o);
            t._tail === e &&
              t.targets.forEach((l) => {
                l.getAttribute &&
                  l.getAttribute("style") === te &&
                  l.removeAttribute("style");
              });
          }
        }));
    }
    return s;
  },
  F = bn(),
  q = bn(),
  os = { func: null },
  as = [null],
  Ee = [null, null],
  ls = { to: null };
let il = 0,
  Yt,
  Nt;
const rl = (s, t) => {
  const e = {};
  if (ve(s)) {
    const n = [].concat(...s.map((i) => Object.keys(i))).filter(ds);
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i],
        l = s.map((a) => {
          const c = {};
          for (let u in a) {
            const h = a[u];
            ds(u) ? u === o && (c.to = h) : (c[u] = h);
          }
          return c;
        });
      e[o] = l;
    }
  } else {
    const n = wt(t.duration, pt.defaults.duration);
    Object.keys(s)
      .map((r) => ({ o: parseFloat(r) / 100, p: s[r] }))
      .sort((r, o) => r.o - o.o)
      .forEach((r) => {
        const o = r.o,
          l = r.p;
        for (let a in l)
          if (ds(a)) {
            let c = e[a];
            c || (c = e[a] = []);
            const u = o * n;
            let h = c.length,
              d = c[h - 1];
            const p = { to: l[a] };
            let f = 0;
            for (let m = 0; m < h; m++) f += c[m].duration;
            (h === 1 && (p.from = d.to),
              l.ease && (p.ease = l.ease),
              (p.duration = u - (h ? f : 0)),
              c.push(p));
          }
        return r;
      });
    for (let r in e) {
      const o = e[r];
      let l;
      for (let a = 0, c = o.length; a < c; a++) {
        const u = o[a],
          h = u.ease;
        ((u.ease = l || void 0), (l = h));
      }
      o[0].duration || o.shift();
    }
  }
  return e;
};
class Sn extends Ms {
  constructor(t, e, n, i, r = !1, o = 0, l = 0) {
    super(e, n, i);
    const a = ks(t),
      c = a.length,
      u = e.keyframes,
      h = u ? lr(rl(u, e), e) : e,
      {
        delay: d,
        duration: p,
        ease: f,
        playbackEase: m,
        modifier: v,
        composition: g,
        onRender: y,
      } = h,
      b = n ? n.defaults : pt.defaults,
      x = wt(m, b.playbackEase),
      E = x ? Ss(x) : null,
      C = !D(f) && !D(f.ease),
      S = C ? f.ease : wt(f, E ? "linear" : b.ease),
      T = C ? f.duration : wt(p, b.duration),
      M = wt(d, b.delay),
      I = v || b.modifier,
      k = D(g) && c >= ge ? St.none : D(g) ? b.composition : g,
      L = {},
      $ = this._offset + (n ? n._offset : 0);
    let _ = NaN,
      P = NaN,
      U = 0,
      W = 0;
    for (let O = 0; O < c; O++) {
      const w = a[O],
        N = o || O,
        V = l || c;
      let ct = NaN,
        it = NaN;
      for (let K in h)
        if (ds(K)) {
          const et = vn(w, K),
            ut = wn(K, w, et);
          let G = h[K];
          const dt = ve(G);
          if ((r && !dt && ((Ee[0] = G), (Ee[1] = G), (G = Ee)), dt)) {
            const z = G.length,
              Y = !Ue(G[0]);
            z === 2 && Y
              ? ((ls.to = G), (as[0] = ls), (Yt = as))
              : z > 2 && Y
                ? ((Yt = []),
                  G.forEach((J, st) => {
                    st
                      ? st === 1
                        ? ((Ee[1] = J), Yt.push(Ee))
                        : Yt.push(J)
                      : (Ee[0] = J);
                  }))
                : (Yt = G);
          } else ((as[0] = G), (Yt = as));
          let ft = null,
            Q = null,
            H = NaN,
            A = 0,
            R = 0;
          for (let z = Yt.length; R < z; R++) {
            const Y = Yt[R];
            (Ue(Y) ? (Nt = Y) : ((ls.to = Y), (Nt = ls)), (os.func = null));
            const J = Gt(Nt.to, w, N, V, os);
            let st;
            Ue(J) && !D(J.to) ? ((Nt = J), (st = J.to)) : (st = J);
            const Tt = Gt(Nt.from, w, N, V),
              mt = Nt.ease,
              ht = !D(mt) && !D(mt.ease),
              Mt = ht ? mt.ease : mt || S,
              rt = ht
                ? mt.duration
                : Gt(wt(Nt.duration, z > 1 ? Gt(T, w, N, V) / z : T), w, N, V),
              Ct = Gt(wt(Nt.delay, R ? 0 : M), w, N, V),
              Lt = Gt(wt(Nt.composition, k), w, N, V),
              Pt = Ie(Lt) ? Lt : St[Lt],
              we = Nt.modifier || I,
              Ut = !D(Tt),
              Ht = !D(st),
              Wt = ve(st),
              Xt = Wt || (Ut && Ht),
              oe = Q ? A + Ct : Ct,
              ae = $ + oe;
            !W && (Ut || Wt) && (W = 1);
            let bt = Q;
            if (Pt !== St.none) {
              ft || (ft = yn(w, ut));
              let X = ft._head;
              for (; X && !X._isOverridden && X._absoluteStartTime <= ae; )
                if (
                  ((bt = X), (X = X._nextRep), X && X._absoluteStartTime >= ae)
                )
                  for (; X; ) (ms(X), (X = X._nextRep));
            }
            if (
              (Xt
                ? (Rt(Wt ? Gt(st[0], w, N, V) : Tt, F),
                  Rt(Wt ? Gt(st[1], w, N, V, os) : st, q),
                  F.t === B.NUMBER &&
                    (bt
                      ? bt._valueType === B.UNIT &&
                        ((F.t = B.UNIT), (F.u = bt._unit))
                      : (Rt(ce(w, ut, et, L), At),
                        At.t === B.UNIT && ((F.t = B.UNIT), (F.u = At.u)))))
                : (Ht
                    ? Rt(st, q)
                    : Q
                      ? Kn(Q, q)
                      : Rt(
                          n && bt && bt.parent.parent === n
                            ? bt._value
                            : ce(w, ut, et, L),
                          q,
                        ),
                  Ut
                    ? Rt(Tt, F)
                    : Q
                      ? Kn(Q, F)
                      : Rt(
                          n && bt && bt.parent.parent === n
                            ? bt._value
                            : ce(w, ut, et, L),
                          F,
                        )),
              F.o &&
                (F.n = ps(
                  bt ? bt._toNumber : Rt(ce(w, ut, et, L), At).n,
                  F.n,
                  F.o,
                )),
              q.o && (q.n = ps(F.n, q.n, q.o)),
              F.t !== q.t)
            ) {
              if (F.t === B.COMPLEX || q.t === B.COMPLEX) {
                const X = F.t === B.COMPLEX ? F : q,
                  vt = F.t === B.COMPLEX ? q : F;
                ((vt.t = B.COMPLEX),
                  (vt.s = Et(X.s)),
                  (vt.d = X.d.map(() => vt.n)));
              } else if (F.t === B.UNIT || q.t === B.UNIT) {
                const X = F.t === B.UNIT ? F : q,
                  vt = F.t === B.UNIT ? q : F;
                ((vt.t = B.UNIT), (vt.u = X.u));
              } else if (F.t === B.COLOR || q.t === B.COLOR) {
                const X = F.t === B.COLOR ? F : q,
                  vt = F.t === B.COLOR ? q : F;
                ((vt.t = B.COLOR), (vt.s = X.s), (vt.d = [0, 0, 0, 1]));
              }
            }
            if (F.u !== q.u) {
              let X = q.u ? F : q;
              X = gr(w, X, q.u ? q.u : F.u, !1);
            }
            if (q.d && F.d && q.d.length !== F.d.length) {
              const X = F.d.length > q.d.length ? F : q,
                vt = X === F ? q : F;
              ((vt.d = X.d.map((An, De) => (D(vt.d[De]) ? 0 : vt.d[De]))),
                (vt.s = Et(X.s)));
            }
            const Re = at(+rt || j, 12),
              Se = {
                parent: this,
                id: il++,
                property: ut,
                target: w,
                _value: null,
                _func: os.func,
                _ease: Ss(Mt),
                _fromNumbers: Et(F.d),
                _toNumbers: Et(q.d),
                _strings: Et(q.s),
                _fromNumber: F.n,
                _toNumber: q.n,
                _numbers: Et(F.d),
                _number: F.n,
                _unit: q.u,
                _modifier: we,
                _currentTime: 0,
                _startTime: oe,
                _delay: +Ct,
                _updateDuration: Re,
                _changeDuration: Re,
                _absoluteStartTime: ae,
                _tweenType: et,
                _valueType: q.t,
                _composition: Pt,
                _isOverlapped: 0,
                _isOverridden: 0,
                _renderTransforms: 0,
                _prevRep: null,
                _nextRep: null,
                _prevAdd: null,
                _nextAdd: null,
                _prev: null,
                _next: null,
              };
            (Pt !== St.none && dr(Se, ft),
              isNaN(H) && (H = Se._startTime),
              (A = at(oe + Re, 12)),
              (Q = Se),
              U++,
              fe(this, Se));
          }
          ((isNaN(P) || H < P) && (P = H),
            (isNaN(_) || A > _) && (_ = A),
            et === ot.TRANSFORM && ((ct = U - R), (it = U)));
        }
      if (!isNaN(ct)) {
        let K = 0;
        Z(this, (et) => {
          (K >= ct &&
            K < it &&
            ((et._renderTransforms = 1),
            et._composition === St.blend &&
              Z(Ae.animation, (ut) => {
                ut.id === et.id && (ut._renderTransforms = 1);
              })),
            K++);
        });
      }
    }
    (c ||
      console.warn(
        "No target found. Make sure the element you're trying to animate is accessible before creating your animation.",
      ),
      P
        ? (Z(this, (O) => {
            (O._startTime - O._delay || (O._delay -= P), (O._startTime -= P));
          }),
          (_ -= P))
        : (P = 0),
      _ || ((_ = j), (this.iterationCount = 0)),
      (this.targets = a),
      (this.duration =
        _ === j
          ? j
          : As((_ + this._loopDelay) * this.iterationCount - this._loopDelay) ||
            j),
      (this.onRender = y || b.onRender),
      (this._ease = E),
      (this._delay = P),
      (this.iterationDuration = _),
      (this._inlineStyles = L),
      !this._autoplay && W && this.onRender(this));
  }
  stretch(t) {
    const e = this.duration;
    if (e === Le(t)) return this;
    const n = t / e;
    return (
      Z(this, (i) => {
        ((i._updateDuration = Le(i._updateDuration * n)),
          (i._changeDuration = Le(i._changeDuration * n)),
          (i._currentTime *= n),
          (i._startTime *= n),
          (i._absoluteStartTime *= n));
      }),
      super.stretch(t)
    );
  }
  refresh() {
    return (
      Z(this, (t) => {
        const e = t._func;
        if (e) {
          const n = ce(t.target, t.property, t._tweenType);
          (Rt(n, At),
            Rt(e(), q),
            (t._fromNumbers = Et(At.d)),
            (t._fromNumber = At.n),
            (t._toNumbers = Et(q.d)),
            (t._strings = Et(q.s)),
            (t._toNumber = q.o ? ps(At.n, q.n, q.o) : q.n));
        }
      }),
      this
    );
  }
  revert() {
    return (super.revert(), Ps(this));
  }
  then(t) {
    return super.then(t);
  }
}
const Dt = (s, t) => new Sn(s, t, null, 0, !1).init(),
  si = { _head: null, _tail: null },
  ol = (s, t, e) => {
    let n = si._head;
    for (; n; ) {
      const i = n._next,
        r = n.$el === s,
        o = !t || n.property === t,
        l = !e || n.parent === e;
      if (r && o && l) {
        const a = n.animation;
        try {
          a.commitStyles();
        } catch {}
        (a.cancel(), ee(si, n));
        const c = n.parent;
        c &&
          (c._completed++,
          c.animations.length === c._completed &&
            ((c.completed = !0),
            c.muteCallbacks ||
              ((c.paused = !0), c.onComplete(c), c._resolve(c))));
      }
      n = i;
    }
  },
  al = (s = xt) =>
    new Ms({ duration: 1 * pt.timeScale, onComplete: s }, null, 0).resume();
function ll(s, t, e) {
  const n = ks(s);
  if (!n.length) return;
  const [i] = n,
    r = vn(i, t),
    o = wn(t, i, r);
  let l = ce(i, o);
  if (D(e)) return l;
  if ((Rt(l, At), At.t === B.NUMBER || At.t === B.UNIT)) {
    if (e === !1) return At.n;
    {
      const a = gr(i, At, e, !1);
      return `${at(a.n, pt.precision)}${a.u}`;
    }
  }
}
const cl = (s, t) => {
    if (!D(t))
      return (
        (t.duration = j),
        (t.composition = wt(t.composition, St.none)),
        new Sn(s, t, null, 0, !0).resume()
      );
  },
  ni = (s, t, e) => {
    let n = !1;
    return (
      Z(
        t,
        (i) => {
          const r = i.target;
          if (s.includes(r)) {
            const o = i.property,
              l = i._tweenType,
              a = wn(e, r, l);
            (!a || (a && a === o)) &&
              (i.parent._tail === i &&
                i._tweenType === ot.TRANSFORM &&
                i._prev &&
                i._prev._tweenType === ot.TRANSFORM &&
                (i._prev._renderTransforms = 1),
              ee(t, i),
              fr(i),
              (n = !0));
          }
        },
        !0,
      ),
      n
    );
  },
  _n = (s, t, e) => {
    const n = gn(s),
      i = t || gt,
      r = t && t.controlAnimation && t;
    for (let l = 0, a = n.length; l < a; l++) {
      const c = n[l];
      ol(c, e, r);
    }
    let o;
    if (i._hasChildren) {
      let l = 0;
      (Z(
        i,
        (a) => {
          if (!a._hasChildren)
            if (((o = ni(n, a, e)), o && !a._head)) (a.cancel(), ee(i, a));
            else {
              const u = a._offset + a._delay + a.duration;
              u > l && (l = u);
            }
          a._head ? _n(s, a, e) : (a._hasChildren = !1);
        },
        !0,
      ),
        D(i.iterationDuration) || (i.iterationDuration = l));
    } else o = ni(n, i, e);
    return (
      o && !i._head && ((i._hasChildren = !1), i.cancel && i.cancel()),
      n
    );
  },
  ul = Da,
  hl = (s) => s[mn(0, s.length - 1)],
  dl = (s, t) => (+s).toFixed(t),
  fl = (s, t, e) => `${s}`.padStart(t, e),
  pl = (s, t, e) => `${s}`.padEnd(t, e),
  ml = (s, t, e) => ((((s - t) % (e - t)) + (e - t)) % (e - t)) + t,
  gl = (s, t, e, n, i) => n + ((s - t) / (e - t)) * (i - n),
  vl = (s) => (s * es) / 180,
  bl = (s) => (s * 180) / es,
  yl = (s, t, e, n) => {
    let i = ge / pt.defaults.frameRate;
    if (n !== !1) {
      const o = n || (gt._hasChildren && gt);
      o && o.deltaTime && (i = o.deltaTime);
    }
    const r = 1 - Math.exp(-e * i * 0.1);
    return e ? (e === 1 ? t : (1 - r) * s + r * t) : s;
  },
  wl =
    (s, t = 0) =>
    (...e) =>
      t ? (n) => s(...e, n) : (n) => s(n, ...e),
  vr =
    (s) =>
    (...t) => {
      const e = s(...t);
      return new Proxy(xt, {
        apply: (n, i, [r]) => e(r),
        get: (n, i) =>
          vr((...r) => {
            const o = _t[i](...r);
            return (l) => o(e(l));
          }),
      });
    },
  $t =
    (s, t = 0) =>
    (...e) =>
      (e.length < s.length ? vr(wl(s, t)) : s)(...e),
  _t = {
    $: ks,
    get: ll,
    set: cl,
    remove: _n,
    cleanInlineStyles: Ps,
    random: mn,
    randomPick: hl,
    shuffle: ar,
    lerp: yl,
    sync: al,
    keepTime: ul,
    clamp: $t(yt),
    round: $t(at),
    snap: $t(Ra),
    wrap: $t(ml),
    interpolate: $t(Kt, 1),
    mapRange: $t(gl),
    roundPad: $t(dl),
    padStart: $t(fl),
    padEnd: $t(pl),
    degToRad: $t(vl),
    radToDeg: $t(bl),
  },
  Sl = (s, t) => {
    if (pe(t, "<")) {
      const e = t[1] === "<",
        n = s._tail,
        i = n ? n._offset + n._delay : 0;
      return e ? i : i + n.duration;
    }
  },
  gs = (s, t) => {
    let e = s.iterationDuration;
    if ((e === j && (e = 0), D(t))) return e;
    if (Ie(+t)) return +t;
    const n = t,
      i = s ? s.labels : null,
      r = !hs(i),
      o = Sl(s, n),
      l = !D(o),
      a = Ca.exec(n);
    if (a) {
      const c = a[0],
        u = n.split(c),
        h = r && u[0] ? i[u[0]] : e,
        d = l ? o : r ? h : e,
        p = +u[1];
      return ps(d, p, c[0]);
    } else return l ? o : r ? (D(i[n]) ? e : i[n]) : e;
  };
function _l(s) {
  return (
    As(
      (s.iterationDuration + s._loopDelay) * s.iterationCount - s._loopDelay,
    ) || j
  );
}
function Ns(s, t, e, n, i, r) {
  const l = Ie(s.duration) && s.duration <= j ? e - j : e;
  le(t, l, 1, 1, kt.AUTO);
  const a = n ? new Sn(n, s, t, l, !1, i, r) : new Ms(s, t, l);
  return (
    a.init(1),
    fe(t, a),
    Z(t, (c) => {
      const h = c._offset + c._delay + c.duration;
      h > t.iterationDuration && (t.iterationDuration = h);
    }),
    (t.duration = _l(t)),
    t
  );
}
class El extends Ms {
  constructor(t = {}) {
    (super(t, null, 0), (this.duration = 0), (this.labels = {}));
    const e = t.defaults,
      n = pt.defaults;
    ((this.defaults = e ? lr(e, n) : n),
      (this.onRender = t.onRender || n.onRender));
    const i = wt(t.playbackEase, n.playbackEase);
    ((this._ease = i ? Ss(i) : null), (this.iterationDuration = 0));
  }
  add(t, e, n) {
    const i = Ue(e),
      r = Ue(t);
    if (i || r) {
      if (((this._hasChildren = !0), i)) {
        const o = e;
        if (ne(n)) {
          const l = n,
            a = gn(t),
            c = this.duration,
            u = this.iterationDuration,
            h = o.id;
          let d = 0;
          const p = a.length;
          a.forEach((f) => {
            const m = { ...o };
            ((this.duration = c),
              (this.iterationDuration = u),
              D(h) || (m.id = h + "-" + d),
              Ns(m, this, l(f, d, p, this), f, d, p),
              d++);
          });
        } else Ns(o, this, gs(this, n), t);
      } else Ns(t, this, gs(this, e));
      return this.init(1);
    }
  }
  sync(t, e) {
    if (D(t) || (t && D(t.pause))) return this;
    t.pause();
    const n = +(t.effect ? t.effect.getTiming().duration : t.duration);
    return this.add(t, { currentTime: [0, n], duration: n, ease: "linear" }, e);
  }
  set(t, e, n) {
    return D(e)
      ? this
      : ((e.duration = j), (e.composition = St.replace), this.add(t, e, n));
  }
  call(t, e) {
    return D(t) || (t && !ne(t))
      ? this
      : this.add({ duration: 0, onComplete: () => t(this) }, e);
  }
  label(t, e) {
    return D(t) || (t && !$e(t))
      ? this
      : ((this.labels[t] = gs(this, e)), this);
  }
  remove(t, e) {
    return (_n(t, this, e), this);
  }
  stretch(t) {
    const e = this.duration;
    if (e === Le(t)) return this;
    const n = t / e,
      i = this.labels;
    Z(this, (r) => r.stretch(r.duration * n));
    for (let r in i) i[r] *= n;
    return super.stretch(t);
  }
  refresh() {
    return (
      Z(this, (t) => {
        t.refresh && t.refresh();
      }),
      this
    );
  }
  revert() {
    return (super.revert(), Z(this, (t) => t.revert, !0), Ps(this));
  }
  then(t) {
    return super.then(t);
  }
}
const vs = (s) => new El(s).init(),
  Qs = (s, t = {}) => {
    let e = [],
      n = 0;
    const i = t.from,
      r = t.reversed,
      o = t.ease,
      l = !D(o),
      c = l && !D(o.ease) ? o.ease : l ? Ss(o) : null,
      u = t.grid,
      h = t.axis,
      d = t.total,
      p = D(i) || i === 0 || i === "first",
      f = i === "center",
      m = i === "last",
      v = i === "random",
      g = ve(s),
      y = t.use,
      b = de(g ? s[0] : s),
      x = g ? de(s[1]) : 0,
      E = Zi.exec((g ? s[1] : s) + te),
      C = t.start || 0 + (g ? b : 0);
    let S = p ? 0 : Ie(i) ? i : 0;
    return (T, M, I, k) => {
      const [L] = ks(T),
        $ = D(d) ? I : d,
        _ = D(y) ? !1 : ne(y) ? y(L, M, $) : ce(L, y),
        P = Ie(_) || ($e(_) && Ie(+_)) ? +_ : M;
      if ((f && (S = ($ - 1) / 2), m && (S = $ - 1), !e.length)) {
        for (let w = 0; w < $; w++) {
          if (!u) e.push(Ge(S - w));
          else {
            const N = f ? (u[0] - 1) / 2 : S % u[0],
              V = f ? (u[1] - 1) / 2 : Ye(S / u[0]),
              ct = w % u[0],
              it = Ye(w / u[0]),
              K = N - ct,
              et = V - it;
            let ut = or(K * K + et * et);
            (h === "x" && (ut = -K), h === "y" && (ut = -et), e.push(ut));
          }
          n = $a(...e);
        }
        (c && (e = e.map((w) => c(w / n) * n)),
          r && (e = e.map((w) => (h ? (w < 0 ? w * -1 : -w) : Ge(n - w)))),
          v && (e = ar(e)));
      }
      const U = g ? (x - b) / n : b;
      let O =
        (k ? gs(k, D(t.start) ? k.iterationDuration : C) : C) +
        (U * at(e[P], 2) || 0);
      return (t.modifier && (O = t.modifier(O)), E && (O = `${O}${E[2]}`), O);
    };
  },
  xl = {
    after() {},
    afterEnter({ next: s }) {
      const t = vs({ easing: "easeInOutCubic", duration: 1200 });
      return (
        t.add(s.container, { opacity: 1 }),
        this.call("enterPage", s.container, "Scroll", "scroll"),
        window.innerWidth >= 1024 &&
          this.call("show", null, "FeaturedProject", "featured"),
        t.then()
      );
    },
    afterLeave() {},
    before() {},
    beforeEnter({ current: s, next: t }) {
      (this.call(
        "scrollTo",
        { target: 0, options: { immediate: !0 } },
        "Scroll",
        "scroll",
      ),
        (t.container.style.opacity = 0),
        this.call("destroy", s.container, "app"),
        (t == null ? void 0 : t.namespace) === "home"
          ? this.call("setBackgroundColor", "white", "Website", "website")
          : tt.classList.remove("-hideLogo"),
        s.container.remove(),
        this.call("update", t.container, "app"),
        this.call("update", null, "Scroll", "scroll"));
    },
    beforeLeave() {},
    enter() {},
    init(s, t) {
      ((this.loader = document.querySelector("#js-loader")),
        (this.container = document.querySelector("#js-container")),
        (this.call = s),
        (this.config = t));
    },
    invoke() {
      return {
        after: this.after.bind(this),
        afterEnter: this.afterEnter.bind(this),
        afterLeave: this.afterLeave.bind(this),
        before: this.before.bind(this),
        beforeEnter: this.beforeEnter.bind(this),
        beforeLeave: this.beforeLeave.bind(this),
        enter: this.enter.bind(this),
        init: this.init.bind(this),
        leave: this.leave.bind(this),
        name: "basic",
        once: this.once.bind(this),
      };
    },
    leave({ current: s }) {
      const t = vs({ easing: "easeInOutCubic", duration: 1200 });
      return (t.add(s.container, { opacity: [1, 0] }), t.then());
    },
    once(s) {
      const t = this.loader.querySelectorAll(".o-loader_shape"),
        e = this.loader.querySelector(".o-loader_text"),
        n = this.loader.querySelectorAll(".o-loader_word"),
        i = this.loader.querySelector("#js-img"),
        r = document.querySelector(".js-hero"),
        o = document.getElementById("js-shape");
      r && r.classList.add("-once");
      const l = vs({
        easing: "easeOutCubic",
        duration: 1200,
        delay: 3e3,
        autoplay: !1,
      });
      (l.add(n, {
        translateY: ["0%", "-120%"],
        delay: Qs(20),
        duration: 400,
        ease: "inOutCirc",
        onComplete: () => {
          e.style.display = "none";
        },
      }),
        l.add(
          t[0],
          {
            translateX: ["10%", "0%"],
            translateY: ["5%", "0%"],
            ease: "inOutCirc",
            duration: 1200,
            onBegin: () => {
              this.loader.classList.add("-in");
            },
          },
          "<<",
        ),
        l.add(
          t[1],
          {
            translateX: ["-10%", "0%"],
            translateY: ["-5%", "0%"],
            ease: "inOutCirc",
            duration: 1200,
          },
          "<<",
        ),
        l.set(i, {
          opacity: 1,
          onComplete: () => {
            o.style.display = "none";
          },
        }),
        l.add(this.loader, {
          rotate: 120,
          scale: [{ to: 20, duration: 2e3 }],
          ease: "inOutExpo",
          duration: 2e3,
          delay: 400,
        }),
        l.add(
          this.loader,
          {
            duration: 400,
            opacity: 0,
            onComplete: () => {
              (tt.classList.add("-once"),
                this.loader.remove(),
                this.afterEnter(s).then(() => {
                  (this.after(),
                    this.call("after", null, "Website", "website"),
                    window.innerWidth >= 1024 &&
                      this.call("show", null, "FeaturedProject", "featured"));
                }));
            },
          },
          "-=400",
        ));
      const a = i.getAttribute("src"),
        c = new Image();
      ((c.src = a),
        (c.onload = () => {
          l.play();
        }));
    },
  }.invoke(),
  Tl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, basicTransition: xl },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Cl = {
    init(s, t) {
      ((this.call = s), (this.config = t));
    },
    invoke() {
      return {
        namespace: "home",
        init: this.init.bind(this),
        afterEnter: this.afterEnter.bind(this),
        beforeEnter: this.beforeEnter.bind(this),
      };
    },
    afterEnter() {},
    beforeEnter() {},
  }.invoke(),
  Il = Object.freeze(
    Object.defineProperty(
      { __proto__: null, homeView: Cl },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ii = {
    resize: [
      "Scroll",
      "HomeProjects",
      "ProjectCard",
      "HomeExpertises",
      "ProjectsItem",
      "StickyTitle",
      "FeaturedProject",
    ],
    animate: [],
    aAnimate: ["Scroll"],
    scroll: [],
  };
var br = { exports: {} };
(function (s) {
  (function (t, e) {
    var n = t.KonamiCode,
      i = (t.KonamiCode = e);
    ((i.noConflict = function () {
      return ((t.KonamiCode = n), i);
    }),
      s.exports && (s.exports = e));
  })(yi || globalThis, function t(e) {
    var n = this,
      i = {},
      r = t;
    ((r.getNumberOfInstance = function () {
      return r._numberOfInstance;
    }),
      (n.enable = function () {
        return (
          i.listenCodeCharSequence(),
          i.listenCodeGestureSequence(),
          i.debug && i.debug("Listener enabled for all."),
          n
        );
      }),
      (n.enableKeyboardKeys = function () {
        return (
          i.listenCodeCharSequence(),
          i.debug && i.debug("Listener enabled for Keyboard Keys."),
          n
        );
      }),
      (n.enableTouchGesture = function () {
        return (
          i.listenCodeGestureSequence(),
          i.debug && i.debug("Listener enabled for Touch Gesture."),
          n
        );
      }),
      (n.disable = function () {
        return (
          i.stopCodeCharSequence(),
          i.stopCodeGestureSequence(),
          i.debug && i.debug("Listener disabled for all."),
          n
        );
      }),
      (n.disableKeyboardKeys = function () {
        return (
          i.stopCodeCharSequence(),
          i.debug && i.debug("Listener disabled for Keyboard Keys."),
          n
        );
      }),
      (n.disableTouchGesture = function () {
        return (
          i.stopCodeGestureSequence(),
          i.debug && i.debug("Listener disabled for Touch Gesture."),
          n
        );
      }),
      (n.setListener = function (o) {
        return (
          i.stopCodeCharSequence(),
          i.stopCodeGestureSequence(),
          (i.listener = o || document),
          i.listenCodeCharSequence(),
          i.listenCodeGestureSequence(),
          i.debug && i.debug("Listener changed.", o),
          n
        );
      }),
      (n.setCallback = function (o) {
        return (
          (i.afterCodeSequenceCallback =
            (typeof o == "function" && o) || i.defaultCallback),
          i.debug && i.debug("Callback changed.", o),
          n
        );
      }),
      (n.setOptions = function (o) {
        return (i.initOptions(o), n);
      }),
      (i.keptLastCodeChar = function () {
        i.input.length > i.konamiCodeChar.length &&
          (i.input = i.input.substr(i.input.length - i.konamiCodeChar.length));
      }),
      (i.defaultCallback = function () {
        i.debug &&
          i.debug("Konami Code Sequence Entered. There is no action defined.");
      }),
      (i.checkIfCodeCharIsValid = function () {
        i.input === i.konamiCodeChar && i.afterCodeSequenceCallback(n);
      }),
      (i.codeSequenceEventKeyDown = function (o) {
        ((i.input += o.keyCode),
          i.keptLastCodeChar(),
          i.checkIfCodeCharIsValid());
      }),
      (i.codeSequenceEventTouchMove = function (o) {
        var l;
        o.touches.length === 1 &&
          i.capture === !0 &&
          ((l = o.touches[0]),
          (i.stopX = l.pageX),
          (i.stopY = l.pageY),
          (i.tap = !1),
          (i.capture = !1),
          i.checkIfCodeGestureIsValid());
      }),
      (i.codeSequenceEventTouchEnd = function () {
        i.tap === !0 && i.checkIfCodeGestureIsValid();
      }),
      (i.codeSequenceEventTouchStart = function (o) {
        ((i.startX = o.changedTouches[0].pageX),
          (i.startY = o.changedTouches[0].pageY),
          (i.tap = !0),
          (i.capture = !0));
      }),
      (i.stopCodeCharSequence = function () {
        i.listener.removeEventListener("keydown", i.codeSequenceEventKeyDown);
      }),
      (i.stopCodeGestureSequence = function () {
        (i.listener.removeEventListener(
          "touchstart",
          i.codeSequenceEventTouchStart,
        ),
          i.listener.removeEventListener(
            "touchmove",
            i.codeSequenceEventTouchMove,
          ),
          i.listener.removeEventListener(
            "touchend",
            i.codeSequenceEventTouchEnd,
          ));
      }),
      (i.listenCodeCharSequence = function () {
        (i.stopCodeCharSequence(),
          i.listener.addEventListener("keydown", i.codeSequenceEventKeyDown));
      }),
      (i.listenCodeGestureSequence = function () {
        ((i.originalCodeGesture = i.konamiCodeGesture),
          i.stopCodeGestureSequence(),
          i.listener.addEventListener(
            "touchstart",
            i.codeSequenceEventTouchStart,
          ),
          i.listener.addEventListener(
            "touchmove",
            i.codeSequenceEventTouchMove,
          ),
          i.listener.addEventListener(
            "touchend",
            i.codeSequenceEventTouchEnd,
            !1,
          ));
      }),
      (i.checkIfCodeGestureIsValid = function () {
        var o = Math.abs(i.startX - i.stopX),
          l = Math.abs(i.startY - i.stopY),
          a = i.startX - i.stopX < 0 ? "rt" : "lt",
          c = i.startY - i.stopY < 0 ? "dn" : "up",
          u = o > l ? a : c;
        ((u = i.tap === !0 ? "tp" : u),
          u === i.konamiCodeGesture.substr(0, 2)
            ? (i.konamiCodeGesture = i.konamiCodeGesture.substr(
                2,
                i.konamiCodeGesture.length - 2,
              ))
            : (i.konamiCodeGesture = i.originalCodeGesture),
          i.konamiCodeGesture.length === 0 &&
            ((i.konamiCodeGesture = i.originalCodeGesture),
            i.afterCodeSequenceCallback(n)));
      }),
      (i.checkDebugMode = function (o) {
        o && o.debug === !0
          ? ((i.debug = function (l, a) {
              a !== void 0 ? console.log(l, a) : console.log(l);
            }),
            i.debug && i.debug("Debug Mode On."))
          : (i.debug = !1);
      }),
      (i.initOptions = function (o) {
        (i.checkDebugMode(o),
          (i.listener = (o && o.listener) || document),
          (i.afterCodeSequenceCallback =
            (typeof o == "function" && o) ||
            (o && typeof o.callback == "function" && o.callback) ||
            i.defaultCallback));
      }),
      (i.init = function () {
        ((i.input = ""),
          (i.konamiCodeChar = "38384040373937396665"),
          (i.konamiCodeGesture = "upupdndnltrtltrttptp"),
          (i.startX = 0),
          (i.startY = 0),
          (i.stopX = 0),
          (i.stopY = 0),
          (i.tap = !1),
          (i.capture = !1),
          (r._numberOfInstance = r._numberOfInstance
            ? r._numberOfInstance + 1
            : 1),
          i.initOptions(e),
          i.listenCodeCharSequence(),
          i.listenCodeGestureSequence());
      }),
      i.init());
  });
})(br);
var Ll = br.exports;
const Al = wi(Ll),
  kl = {
    green: "#00522D",
    "pink-1": "#DB3C8A",
    "pink-2": "#F29EBD",
    "pink-3": "#FCE5DF",
    purple: "#E0B4F1",
    error: "#f00",
    success: "#03b000",
    gray: "#D1CFE4",
    "gray-300": "#ECECEC",
    black: "#131313",
    white: "#FFF8F6",
  };
class Ml extends nt {
  constructor(t) {
    (super(t),
      (this.updateModules = !1),
      (this.toAnimate = this.el.dataset.animate !== void 0),
      (this.isAnimating = !1),
      (this.interval = null),
      (this.size = { width: 0, height: 0 }),
      (this.animate = this.animate.bind(this)),
      (this.debounceResize = ga(this.resize.bind(this, !1), 600)),
      Ot.hooks.afterLeave(this.afterLeave.bind(this)),
      Ot.hooks.afterEnter(this.afterEnter.bind(this)),
      Ot.hooks.enter(this.enter.bind(this)),
      Ot.hooks.once(this.once.bind(this)),
      Ot.hooks.afterOnce(this.afterOnce.bind(this)),
      Ot.hooks.after(this.after.bind(this)),
      Ot.hooks.beforeLeave(this.beforeLeave.bind(this)),
      (this.onClick = this.onClick.bind(this)),
      (this.events = { click: "onClick" }));
  }
  init() {
    const t = {
      debug: rs,
      transitions: this.initConfigArray(Tl),
      views: this.initConfigArray(Il),
    };
    (rs
      ? ((t.logLevel = "info"), (t.timeout = 1e4), pa(), ma())
      : (t.timeout = 1e4),
      this.setKonamiCode(),
      Ot.init(t));
  }
  setStats() {
    ((this.stats = new fo()),
      this.stats.showPanel(0),
      (this.stats.dom.style.left = "auto"),
      (this.stats.dom.style.right = "0"),
      rs || (this.stats.dom.style.display = "none"),
      tt.appendChild(this.stats.dom));
  }
  once() {
    this.lazy = new Ce({
      elements_selector: "[data-lazy]",
      class_loaded: "-loaded",
      class_loading: "-loading",
      class_error: "-error",
      class_entered: "-entered",
      class_exited: "-exited",
    });
  }
  clearCache() {
    for (const [t] of Ot.cache.k) (console.log(t), Ot.cache.k.delete(t));
    console.log(Ot.cache);
  }
  afterOnce() {
    (window.addEventListener("resize", this.debounceResize),
      this.setStats(),
      (rs || this.toAnimate) &&
        (this.requestId = window.requestAnimationFrame(this.animate)));
    const t = { rootMargin: "0px", threshold: 0 };
    this.observer = new window.IntersectionObserver(
      this.onDetectModule.bind(this),
      t,
    );
  }
  resize(t = !1) {
    (window.innerWidth < 768 &&
      window.innerWidth === this.size.width &&
      t === !1) ||
      ((this.size = { width: window.innerWidth, height: window.innerHeight }),
      this.updateModules && this.parseModulesFunctions("resize"));
  }
  animate() {
    (this.stats.begin(),
      this.updateModules &&
        this.isAnimating &&
        (this.parseModulesFunctions("animate"),
        this.parseModulesFunctions("aAnimate")),
      this.stats.end(),
      (this.requestId = window.requestAnimationFrame(this.animate)));
  }
  after() {
    this.toggleLoad(!1);
  }
  beforeLeave() {
    this.toggleLoad(!0);
  }
  afterLeave() {
    this.updateModules = !1;
  }
  enter() {
    this.updateLazy();
  }
  updateLazy() {
    this.lazy.update();
  }
  loadImage({ item: t, config: e = {} }) {
    t.dataset.llStatus !== "loaded" && Ce.load(t, e);
  }
  afterEnter() {
    ((this.updateModules = !0), this.resize(!0));
  }
  toggleLoad(t) {
    ((this.isAnimating = !t),
      window.requestAnimationFrame(() => {
        (Xs.classList[t ? "remove" : "add"]("is-loaded"),
          Xs.classList[t ? "add" : "remove"]("is-loading"));
      }));
  }
  parseModulesFunctions(t) {
    const e = ii[t],
      { length: n } = e;
    if (n !== 0)
      for (let i = n - 1; i >= 0; i -= 1) {
        const r = e[i];
        this.call(t, null, r);
      }
  }
  initConfigArray(t) {
    const e = [],
      n = Object.keys(t),
      { length: i } = n,
      r = this.call.bind(this),
      o = this.$.bind(this);
    for (let l = i - 1; l >= 0; l -= 1) {
      const a = t[n[l]];
      (a.init(r, o, {}), e.push(a));
    }
    return e;
  }
  setScrollDetection() {
    const t = ii.scroll,
      { currentModules: e } = this.modules.app.app,
      n = Object.keys(e),
      i = {};
    (n.forEach((r) => {
      const o = e[r];
      if (t.includes(o.constructor.name)) {
        const l = r.replace(`${o.constructor.name}-`, "");
        ((o.el.dataset.moduleId = l),
          (o.id = l),
          (i[l] = o),
          this.observer.observe(o.el));
      }
    }),
      (this.modulesObserve = i));
  }
  unsetScrollDetection() {
    Object.keys(this.modulesObserve).forEach((e) => {
      this.observer.unobserve(this.modulesObserve[e].el);
    });
  }
  onDetectModule(t) {
    t.forEach((e) => {
      if (e.isIntersecting) {
        const n = this.modulesObserve[e.target.dataset.moduleId];
        (n &&
          (this.call("enter", null, n.constructor.name, n.id),
          this.call("update", null, "Scroll", "scroll")),
          e.target.dataset.repeat === void 0 &&
            this.observer.unobserve(e.target));
      } else {
        const n = this.modulesObserve[e.target.dataset.moduleId];
        n && this.call("leave", null, n.constructor.name, n.id);
      }
    });
  }
  onSectionIntersect({ from: t, way: e, target: n }) {
    const i = e === "enter";
    if (
      (t === "start" &&
        window.requestAnimationFrame(() => {
          n.classList.toggle("-animateIn", i);
        }),
      i)
    ) {
      const o = n.getAttribute("id");
      o && this.call("setActiveMenuItem", o, "Menu", "menu");
      const l = n.dataset.label;
      l && this.updateLabel(l, t);
      const a = n.dataset.hideFeatured !== void 0;
      tt.classList.toggle("-hideFeatured", a);
      const c = !!n.dataset.invert;
      tt.classList.toggle("-white", c);
      const u = n.dataset.color;
      u && this.setBackgroundColor(u);
    }
  }
  setBackgroundColor(t) {
    const [e] = this.$("background");
    if (!e) return;
    const n = t.startsWith("#") ? t : kl[t];
    Dt(e, {
      backgroundColor: n,
      duration: 400,
      opacity: [0, 1],
      onComplete: () => {
        ((tt.style.backgroundColor = n), (e.opacity = "0"));
      },
    });
  }
  updateLabel(t, e = "start") {
    const [n] = this.$("homeLabel");
    if (n) {
      if (n.dataset.step === t) return;
      n.dataset.step = t;
      const i = t.split("");
      let r = "";
      i.forEach((a) => {
        (a === " " && (a = "&nbsp;"), (r += `<span>${a}</span>`));
      });
      const o = n.querySelector("span.-current"),
        l = n.querySelector("span.-next");
      if (o && l) {
        ((l.innerHTML = r),
          n.style.setProperty(
            "--scale",
            l.offsetWidth <= 5 ? 0 : l.offsetWidth,
          ));
        const a = e === "start" ? "100%" : "-100%",
          c = e === "start" ? "-200%" : "0%";
        (Dt(o, { y: [0, a], duration: 800, ease: "outCirc" }),
          Dt(l, {
            y: [c, "-100%"],
            duration: 800,
            ease: "outCirc",
            onComplete: () => {
              ((o.innerHTML = r), _t.cleanInlineStyles);
            },
          }));
      }
    }
  }
  onClick(t) {
    if (
      t.target.dataset.anchor !== void 0 &&
      t.target.dataset.website === "nav"
    ) {
      const e = t.target.href.split("#");
      if (e[0] !== window.location.href) return;
      const n = e[e.length - 1],
        i = document.getElementById(n);
      (t.preventDefault(),
        t.stopPropagation(),
        window.requestAnimationFrame(() => {
          this.call(
            "scrollTo",
            { target: i, options: { lerp: 0.1, lock: !0 } },
            "Scroll",
            "scroll",
          );
        }));
    }
  }
  setKonamiCode() {
    const t = [
      9889,
      129309,
      128064,
      128293,
      [9728, 65039],
      129505,
      128075,
      129762,
      128187,
      9749,
      127939,
      128248,
      127942,
      128526,
      128076,
      128561,
      128170,
      128525,
      128276,
      128140,
      129292,
      128105,
      129760,
      129335,
      127828,
      127916,
      129421,
      128116,
      129316,
      129293,
      128169,
      127947,
      129351,
      127909,
      [127467, 127479],
      128176,
    ];
    new Al(() => {
      const e = Math.floor(Math.random() * 300) + 300,
        n = window.devicePixelRatio || 1,
        i = Math.floor(
          ((window.innerWidth * window.innerHeight) / (100 * 100)) * n,
        ),
        r = e * (i * 0.01);
      for (let o = 0; o < r; o++) {
        const l = t[Math.floor(Math.random() * t.length)],
          a = Math.random() * 1e3 + 2e3,
          c = document.createElement("div");
        (Array.isArray(l)
          ? (c.textContent = String.fromCodePoint(...l))
          : (c.textContent = String.fromCodePoint(l)),
          (c.style.position = "fixed"),
          (c.style.top = `${Math.random() * 100}%`),
          (c.style.left = `${Math.random() * 100}%`),
          (c.style.fontSize = "15rem"),
          (c.style.transform = "translate(-50%, -50%)"),
          (c.style.pointerEvents = "none"),
          (c.style.zIndex = "10000"),
          setTimeout(() => {
            (document.body.appendChild(c),
              setTimeout(() => {
                document.body.removeChild(c);
              }, a));
          }, o * 2));
      }
    });
  }
}
function yr(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
class Pl {
  constructor() {
    ((this.isRunning = !1),
      (this.value = 0),
      (this.from = 0),
      (this.to = 0),
      (this.duration = 0),
      (this.currentTime = 0));
  }
  advance(t) {
    var e;
    if (!this.isRunning) return;
    let n = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const i = yr(0, this.currentTime / this.duration, 1);
      n = i >= 1;
      const r = n ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * r;
    } else
      this.lerp
        ? ((this.value = (function (r, o, l, a) {
            return (function (u, h, d) {
              return (1 - d) * u + d * h;
            })(r, o, 1 - Math.exp(-l * a));
          })(this.value, this.to, 60 * this.lerp, t)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (n = !0)))
        : ((this.value = this.to), (n = !0));
    (n && this.stop(),
      (e = this.onUpdate) === null ||
        e === void 0 ||
        e.call(this, this.value, n));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(t, e, { lerp: n, duration: i, easing: r, onStart: o, onUpdate: l }) {
    ((this.from = this.value = t),
      (this.to = e),
      (this.lerp = n),
      (this.duration = i),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      o == null || o(),
      (this.onUpdate = l));
  }
}
class Ol {
  constructor({
    wrapper: t,
    content: e,
    autoResize: n = !0,
    debounce: i = 250,
  } = {}) {
    ((this.width = 0),
      (this.height = 0),
      (this.scrollWidth = 0),
      (this.scrollHeight = 0),
      (this.resize = () => {
        (this.onWrapperResize(), this.onContentResize());
      }),
      (this.onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : this.wrapper instanceof HTMLElement &&
            ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      }),
      (this.onContentResize = () => {
        this.wrapper === window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : this.wrapper instanceof HTMLElement &&
            ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      }),
      (this.wrapper = t),
      (this.content = e),
      n &&
        ((this.debouncedResize = (function (o, l) {
          let a;
          return function () {
            let c = arguments,
              u = this;
            (clearTimeout(a),
              (a = setTimeout(function () {
                o.apply(u, c);
              }, l)));
          };
        })(this.resize, i)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize());
  }
  destroy() {
    var t, e;
    ((t = this.wrapperResizeObserver) === null ||
      t === void 0 ||
      t.disconnect(),
      (e = this.contentResizeObserver) === null ||
        e === void 0 ||
        e.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1));
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class wr {
  constructor() {
    this.events = {};
  }
  emit(t, ...e) {
    let n = this.events[t] || [];
    for (let i = 0, r = n.length; i < r; i++) n[i](...e);
  }
  on(t, e) {
    var n;
    return (
      (!((n = this.events[t]) === null || n === void 0) && n.push(e)) ||
        (this.events[t] = [e]),
      () => {
        var i;
        this.events[t] =
          (i = this.events[t]) === null || i === void 0
            ? void 0
            : i.filter((r) => e !== r);
      }
    );
  }
  off(t, e) {
    var n;
    this.events[t] =
      (n = this.events[t]) === null || n === void 0
        ? void 0
        : n.filter((i) => e !== i);
  }
  destroy() {
    this.events = {};
  }
}
const ri = 100 / 6;
class $l {
  constructor(t, { wheelMultiplier: e = 1, touchMultiplier: n = 1 }) {
    ((this.lastDelta = { x: 0, y: 0 }),
      (this.windowWidth = 0),
      (this.windowHeight = 0),
      (this.onTouchStart = (i) => {
        const { clientX: r, clientY: o } = i.targetTouches
          ? i.targetTouches[0]
          : i;
        ((this.touchStart.x = r),
          (this.touchStart.y = o),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: i }));
      }),
      (this.onTouchMove = (i) => {
        var r, o, l, a;
        const { clientX: c, clientY: u } = i.targetTouches
            ? i.targetTouches[0]
            : i,
          h =
            -(
              c -
              ((o =
                (r = this.touchStart) === null || r === void 0
                  ? void 0
                  : r.x) !== null && o !== void 0
                ? o
                : 0)
            ) * this.touchMultiplier,
          d =
            -(
              u -
              ((a =
                (l = this.touchStart) === null || l === void 0
                  ? void 0
                  : l.y) !== null && a !== void 0
                ? a
                : 0)
            ) * this.touchMultiplier;
        ((this.touchStart.x = c),
          (this.touchStart.y = u),
          (this.lastDelta = { x: h, y: d }),
          this.emitter.emit("scroll", { deltaX: h, deltaY: d, event: i }));
      }),
      (this.onTouchEnd = (i) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: i,
        });
      }),
      (this.onWheel = (i) => {
        let { deltaX: r, deltaY: o, deltaMode: l } = i;
        ((r *= l === 1 ? ri : l === 2 ? this.windowWidth : 1),
          (o *= l === 1 ? ri : l === 2 ? this.windowHeight : 1),
          (r *= this.wheelMultiplier),
          (o *= this.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: r, deltaY: o, event: i }));
      }),
      (this.onWindowResize = () => {
        ((this.windowWidth = window.innerWidth),
          (this.windowHeight = window.innerHeight));
      }),
      (this.element = t),
      (this.wheelMultiplier = e),
      (this.touchMultiplier = n),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new wr()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel),
      this.element.removeEventListener("touchstart", this.onTouchStart),
      this.element.removeEventListener("touchmove", this.onTouchMove),
      this.element.removeEventListener("touchend", this.onTouchEnd));
  }
}
class Rl {
  constructor({
    wrapper: t = window,
    content: e = document.documentElement,
    wheelEventsTarget: n = t,
    eventsTarget: i = n,
    smoothWheel: r = !0,
    syncTouch: o = !1,
    syncTouchLerp: l = 0.075,
    touchInertiaMultiplier: a = 35,
    duration: c,
    easing: u = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
    lerp: h = 0.1,
    infinite: d = !1,
    orientation: p = "vertical",
    gestureOrientation: f = "vertical",
    touchMultiplier: m = 1,
    wheelMultiplier: v = 1,
    autoResize: g = !0,
    prevent: y,
    virtualScroll: b,
    __experimental__naiveDimensions: x = !1,
  } = {}) {
    ((this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.userData = {}),
      (this.lastVelocity = 0),
      (this.velocity = 0),
      (this.direction = 0),
      (this.onPointerDown = (E) => {
        E.button === 1 && this.reset();
      }),
      (this.onVirtualScroll = (E) => {
        if (
          typeof this.options.virtualScroll == "function" &&
          this.options.virtualScroll(E) === !1
        )
          return;
        const { deltaX: C, deltaY: S, event: T } = E;
        if (
          (this.emitter.emit("virtual-scroll", {
            deltaX: C,
            deltaY: S,
            event: T,
          }),
          T.ctrlKey)
        )
          return;
        const M = T.type.includes("touch"),
          I = T.type.includes("wheel");
        if (
          ((this.isTouching =
            T.type === "touchstart" || T.type === "touchmove"),
          this.options.syncTouch &&
            M &&
            T.type === "touchstart" &&
            !this.isStopped &&
            !this.isLocked)
        )
          return void this.reset();
        const k = C === 0 && S === 0,
          L =
            (this.options.gestureOrientation === "vertical" && S === 0) ||
            (this.options.gestureOrientation === "horizontal" && C === 0);
        if (k || L) return;
        let $ = T.composedPath();
        $ = $.slice(0, $.indexOf(this.rootElement));
        const _ = this.options.prevent;
        if (
          $.find((O) => {
            var w, N, V, ct, it;
            return (
              O instanceof Element &&
              ((typeof _ == "function" && (_ == null ? void 0 : _(O))) ||
                ((w = O.hasAttribute) === null || w === void 0
                  ? void 0
                  : w.call(O, "data-lenis-prevent")) ||
                (M &&
                  ((N = O.hasAttribute) === null || N === void 0
                    ? void 0
                    : N.call(O, "data-lenis-prevent-touch"))) ||
                (I &&
                  ((V = O.hasAttribute) === null || V === void 0
                    ? void 0
                    : V.call(O, "data-lenis-prevent-wheel"))) ||
                (((ct = O.classList) === null || ct === void 0
                  ? void 0
                  : ct.contains("lenis")) &&
                  !(
                    !((it = O.classList) === null || it === void 0) &&
                    it.contains("lenis-stopped")
                  )))
            );
          })
        )
          return;
        if (this.isStopped || this.isLocked) return void T.preventDefault();
        if (!((this.options.syncTouch && M) || (this.options.smoothWheel && I)))
          return ((this.isScrolling = "native"), void this.animate.stop());
        T.preventDefault();
        let P = S;
        this.options.gestureOrientation === "both"
          ? (P = Math.abs(S) > Math.abs(C) ? S : C)
          : this.options.gestureOrientation === "horizontal" && (P = C);
        const U = M && this.options.syncTouch,
          W = M && T.type === "touchend" && Math.abs(P) > 5;
        (W && (P = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + P,
            Object.assign(
              { programmatic: !1 },
              U
                ? { lerp: W ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  },
            ),
          ));
      }),
      (this.onNativeScroll = () => {
        if (
          (clearTimeout(this.__resetVelocityTimeout),
          delete this.__resetVelocityTimeout,
          this.__preventNextNativeScrollEvent)
        )
          delete this.__preventNextNativeScrollEvent;
        else if (this.isScrolling === !1 || this.isScrolling === "native") {
          const E = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - E),
            (this.direction = Math.sign(this.animatedScroll - E)),
            (this.isScrolling = "native"),
            this.emit(),
            this.velocity !== 0 &&
              (this.__resetVelocityTimeout = setTimeout(() => {
                ((this.lastVelocity = this.velocity),
                  (this.velocity = 0),
                  (this.isScrolling = !1),
                  this.emit());
              }, 400)));
        }
      }),
      (window.lenisVersion = "1.1.9"),
      (t && t !== document.documentElement && t !== document.body) ||
        (t = window),
      (this.options = {
        wrapper: t,
        content: e,
        wheelEventsTarget: n,
        eventsTarget: i,
        smoothWheel: r,
        syncTouch: o,
        syncTouchLerp: l,
        touchInertiaMultiplier: a,
        duration: c,
        easing: u,
        lerp: h,
        infinite: d,
        gestureOrientation: f,
        orientation: p,
        touchMultiplier: m,
        wheelMultiplier: v,
        autoResize: g,
        prevent: y,
        virtualScroll: b,
        __experimental__naiveDimensions: x,
      }),
      (this.animate = new Pl()),
      (this.emitter = new wr()),
      (this.dimensions = new Ol({ wrapper: t, content: e, autoResize: g })),
      this.updateClassName(),
      (this.userData = {}),
      (this.time = 0),
      (this.velocity = this.lastVelocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        !1,
      ),
      (this.virtualScroll = new $l(i, {
        touchMultiplier: m,
        wheelMultiplier: v,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1,
      ),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        !1,
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName());
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  off(t, e) {
    return this.emitter.off(t, e);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop());
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const e = t - (this.time || t);
    ((this.time = t), this.animate.advance(0.001 * e));
  }
  scrollTo(
    t,
    {
      offset: e = 0,
      immediate: n = !1,
      lock: i = !1,
      duration: r = this.options.duration,
      easing: o = this.options.easing,
      lerp: l = this.options.lerp,
      onStart: a,
      onComplete: c,
      force: u = !1,
      programmatic: h = !0,
      userData: d = {},
    } = {},
  ) {
    if ((!this.isStopped && !this.isLocked) || u) {
      if (typeof t == "string" && ["top", "left", "start"].includes(t)) t = 0;
      else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
        t = this.limit;
      else {
        let p;
        if (
          (typeof t == "string"
            ? (p = document.querySelector(t))
            : t instanceof HTMLElement && t != null && t.nodeType && (p = t),
          p)
        ) {
          if (this.options.wrapper !== window) {
            const m = this.rootElement.getBoundingClientRect();
            e -= this.isHorizontal ? m.left : m.top;
          }
          const f = p.getBoundingClientRect();
          t = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
        }
      }
      if (
        typeof t == "number" &&
        ((t += e),
        (t = Math.round(t)),
        this.options.infinite
          ? h && (this.targetScroll = this.animatedScroll = this.scroll)
          : (t = yr(0, t, this.limit)),
        t !== this.targetScroll)
      ) {
        if (((this.userData = d), n))
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            c == null || c(this),
            void (this.userData = {})
          );
        (h || (this.targetScroll = t),
          this.animate.fromTo(this.animatedScroll, t, {
            duration: r,
            easing: o,
            lerp: l,
            onStart: () => {
              (i && (this.isLocked = !0),
                (this.isScrolling = "smooth"),
                a == null || a(this));
            },
            onUpdate: (p, f) => {
              ((this.isScrolling = "smooth"),
                (this.lastVelocity = this.velocity),
                (this.velocity = p - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = p),
                this.setScroll(this.scroll),
                h && (this.targetScroll = p),
                f || this.emit(),
                f &&
                  (this.reset(),
                  this.emit(),
                  c == null || c(this),
                  (this.userData = {}),
                  this.preventNextNativeScrollEvent()));
            },
          }));
      }
    }
  }
  preventNextNativeScrollEvent() {
    ((this.__preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        delete this.__preventNextNativeScrollEvent;
      }));
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? (function (e, n) {
          return ((e % n) + n) % n;
        })(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.updateClassName());
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t && ((this.__isStopped = t), this.updateClassName());
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t && ((this.__isLocked = t), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isScrolling === "smooth" && (t += " lenis-smooth"),
      t
    );
  }
  updateClassName() {
    (this.cleanUpClassName(),
      (this.rootElement.className =
        `${this.rootElement.className} ${this.className}`.trim()));
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className
      .replace(/lenis(-\w+)?/g, "")
      .trim();
  }
}
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var n in e) ({}).hasOwnProperty.call(e, n) && (s[n] = e[n]);
          }
          return s;
        }),
    Zs.apply(null, arguments)
  );
}
class oi {
  constructor({
    scrollElements: t,
    rootMargin: e = "-1px -1px -1px -1px",
    IORaf: n,
  }) {
    ((this.scrollElements = void 0),
      (this.rootMargin = void 0),
      (this.IORaf = void 0),
      (this.observer = void 0),
      (this.scrollElements = t),
      (this.rootMargin = e),
      (this.IORaf = n),
      this._init());
  }
  _init() {
    this.observer = new IntersectionObserver(
      (t) => {
        t.forEach((e) => {
          const n = this.scrollElements.find((i) => i.$el === e.target);
          e.isIntersecting
            ? (n && (n.isAlreadyIntersected = !0), this._setInview(e))
            : n && n.isAlreadyIntersected && this._setOutOfView(e);
        });
      },
      { rootMargin: this.rootMargin },
    );
    for (const t of this.scrollElements) this.observe(t.$el);
  }
  destroy() {
    this.observer.disconnect();
  }
  observe(t) {
    t && this.observer.observe(t);
  }
  unobserve(t) {
    t && this.observer.unobserve(t);
  }
  _setInview(t) {
    const e = this.scrollElements.find((n) => n.$el === t.target);
    (this.IORaf && (e == null || e.setInteractivityOn()),
      !this.IORaf && (e == null || e.setInview()));
  }
  _setOutOfView(t) {
    const e = this.scrollElements.find((n) => n.$el === t.target);
    (this.IORaf && (e == null || e.setInteractivityOff()),
      !this.IORaf && (e == null || e.setOutOfView()),
      (e != null && e.attributes.scrollRepeat) ||
        this.IORaf ||
        this.unobserve(t.target));
  }
}
function ai(s, t, e, n, i) {
  return e + (((i - s) / (t - s)) * (n - e) || 0);
}
function li(s, t) {
  return s.reduce((e, n) => (Math.abs(n - t) < Math.abs(e - t) ? n : e));
}
class Dl {
  constructor({
    $el: t,
    id: e,
    modularInstance: n,
    subscribeElementUpdateFn: i,
    unsubscribeElementUpdateFn: r,
    needRaf: o,
    scrollOrientation: l,
  }) {
    var a, c, u, h, d;
    ((this.$el = void 0),
      (this.id = void 0),
      (this.needRaf = void 0),
      (this.attributes = void 0),
      (this.scrollOrientation = void 0),
      (this.isAlreadyIntersected = void 0),
      (this.intersection = void 0),
      (this.metrics = void 0),
      (this.currentScroll = void 0),
      (this.translateValue = void 0),
      (this.progress = void 0),
      (this.lastProgress = void 0),
      (this.modularInstance = void 0),
      (this.progressModularModules = void 0),
      (this.isInview = void 0),
      (this.isInteractive = void 0),
      (this.isInFold = void 0),
      (this.isFirstResize = void 0),
      (this.subscribeElementUpdateFn = void 0),
      (this.unsubscribeElementUpdateFn = void 0),
      (this.$el = t),
      (this.id = e),
      (this.needRaf = o),
      (this.scrollOrientation = l),
      (this.modularInstance = n),
      (this.subscribeElementUpdateFn = i),
      (this.unsubscribeElementUpdateFn = r),
      (this.attributes = {
        scrollClass:
          (a = this.$el.dataset.scrollClass) != null ? a : "is-inview",
        scrollOffset: (c = this.$el.dataset.scrollOffset) != null ? c : "0,0",
        scrollPosition:
          (u = this.$el.dataset.scrollPosition) != null ? u : "start,end",
        scrollModuleProgress: this.$el.dataset.scrollModuleProgress != null,
        scrollCssProgress: this.$el.dataset.scrollCssProgress != null,
        scrollEventProgress:
          (h = this.$el.dataset.scrollEventProgress) != null ? h : null,
        scrollSpeed:
          this.$el.dataset.scrollSpeed != null
            ? parseFloat(this.$el.dataset.scrollSpeed)
            : null,
        scrollRepeat: this.$el.dataset.scrollRepeat != null,
        scrollCall: (d = this.$el.dataset.scrollCall) != null ? d : null,
        scrollCallSelf: this.$el.dataset.scrollCallSelf != null,
        scrollIgnoreFold: this.$el.dataset.scrollIgnoreFold != null,
        scrollEnableTouchSpeed: this.$el.dataset.scrollEnableTouchSpeed != null,
      }),
      (this.intersection = { start: 0, end: 0 }),
      (this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }),
      (this.currentScroll =
        this.scrollOrientation === "vertical"
          ? window.scrollY
          : window.scrollX),
      (this.translateValue = 0),
      (this.progress = 0),
      (this.lastProgress = null),
      (this.progressModularModules = []),
      (this.isInview = !1),
      (this.isInteractive = !1),
      (this.isAlreadyIntersected = !1),
      (this.isInFold = !1),
      (this.isFirstResize = !0),
      this._init());
  }
  _init() {
    this.needRaf &&
      (this.modularInstance &&
        this.attributes.scrollModuleProgress &&
        this._getProgressModularModules(),
      this._resize());
  }
  onResize({ currentScroll: t }) {
    ((this.currentScroll = t), this._resize());
  }
  onRender({ currentScroll: t, smooth: e }) {
    const n =
      this.scrollOrientation === "vertical"
        ? window.innerHeight
        : window.innerWidth;
    if (
      ((this.currentScroll = t),
      this._computeProgress(),
      this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
    )
      if (this.attributes.scrollEnableTouchSpeed || e) {
        if (this.isInFold) {
          const i = Math.max(0, this.progress);
          this.translateValue = i * n * this.attributes.scrollSpeed * -1;
        } else {
          const i = ai(0, 1, -1, 1, this.progress);
          this.translateValue = i * n * this.attributes.scrollSpeed * -1;
        }
        this.$el.style.transform =
          this.scrollOrientation === "vertical"
            ? `translate3d(0, ${this.translateValue}px, 0)`
            : `translate3d(${this.translateValue}px, 0, 0)`;
      } else
        (this.translateValue &&
          (this.$el.style.transform = "translate3d(0, 0, 0)"),
          (this.translateValue = 0));
  }
  setInview() {
    if (this.isInview) return;
    ((this.isInview = !0), this.$el.classList.add(this.attributes.scrollClass));
    const t = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall("enter", t);
  }
  setOutOfView() {
    if (!this.isInview || !this.attributes.scrollRepeat) return;
    ((this.isInview = !1),
      this.$el.classList.remove(this.attributes.scrollClass));
    const t = this._getScrollCallFrom();
    this.attributes.scrollCall && this._dispatchCall("leave", t);
  }
  setInteractivityOn() {
    this.isInteractive ||
      ((this.isInteractive = !0), this.subscribeElementUpdateFn(this));
  }
  setInteractivityOff() {
    this.isInteractive &&
      ((this.isInteractive = !1),
      this.unsubscribeElementUpdateFn(this),
      this.lastProgress != null &&
        this._computeProgress(li([0, 1], this.lastProgress)));
  }
  _resize() {
    ((this.metrics.bcr = this.$el.getBoundingClientRect()),
      this._computeMetrics(),
      this._computeIntersection(),
      this.isFirstResize &&
        ((this.isFirstResize = !1), this.isInFold && this.setInview()));
  }
  _computeMetrics() {
    const { top: t, left: e, height: n, width: i } = this.metrics.bcr,
      r =
        this.scrollOrientation === "vertical"
          ? window.innerHeight
          : window.innerWidth,
      o = this.scrollOrientation === "vertical" ? n : i;
    ((this.metrics.offsetStart =
      this.currentScroll +
      (this.scrollOrientation === "vertical" ? t : e) -
      this.translateValue),
      (this.metrics.offsetEnd = this.metrics.offsetStart + o),
      (this.isInFold =
        this.metrics.offsetStart < r && !this.attributes.scrollIgnoreFold));
  }
  _computeIntersection() {
    const t =
        this.scrollOrientation === "vertical"
          ? window.innerHeight
          : window.innerWidth,
      e =
        this.scrollOrientation === "vertical"
          ? this.metrics.bcr.height
          : this.metrics.bcr.width,
      n = this.attributes.scrollOffset.split(","),
      i = n[0] != null ? n[0].trim() : "0",
      r = n[1] != null ? n[1].trim() : "0",
      o = this.attributes.scrollPosition.split(",");
    let l = o[0] != null ? o[0].trim() : "start";
    const a = o[1] != null ? o[1].trim() : "end",
      c = i.includes("%")
        ? t * parseInt(i.replace("%", "").trim()) * 0.01
        : parseInt(i),
      u = r.includes("%")
        ? t * parseInt(r.replace("%", "").trim()) * 0.01
        : parseInt(r);
    switch ((this.isInFold && (l = "fold"), l)) {
      case "start":
      default:
        this.intersection.start = this.metrics.offsetStart - t + c;
        break;
      case "middle":
        this.intersection.start = this.metrics.offsetStart - t + c + 0.5 * e;
        break;
      case "end":
        this.intersection.start = this.metrics.offsetStart - t + c + e;
        break;
      case "fold":
        this.intersection.start = 0;
    }
    switch (a) {
      case "start":
        this.intersection.end = this.metrics.offsetStart - u;
        break;
      case "middle":
        this.intersection.end = this.metrics.offsetStart - u + 0.5 * e;
        break;
      default:
        this.intersection.end = this.metrics.offsetStart - u + e;
    }
    if (this.intersection.end <= this.intersection.start)
      switch (a) {
        case "start":
        default:
          this.intersection.end = this.intersection.start + 1;
          break;
        case "middle":
          this.intersection.end = this.intersection.start + 0.5 * e;
          break;
        case "end":
          this.intersection.end = this.intersection.start + e;
      }
  }
  _computeProgress(t) {
    const e =
      t ??
      ((n = ai(
        this.intersection.start,
        this.intersection.end,
        0,
        1,
        this.currentScroll,
      )) < 0
        ? 0
        : n > 1
          ? 1
          : n);
    var n;
    if (((this.progress = e), e != this.lastProgress)) {
      if (
        ((this.lastProgress = e),
        this.attributes.scrollCssProgress && this._setCssProgress(e),
        this.attributes.scrollEventProgress && this._setCustomEventProgress(e),
        this.attributes.scrollModuleProgress)
      )
        for (const i of this.progressModularModules)
          this.modularInstance &&
            this.modularInstance.call(
              "onScrollProgress",
              e,
              i.moduleName,
              i.moduleId,
            );
      (e > 0 && e < 1 && this.setInview(),
        e === 0 && this.setOutOfView(),
        e === 1 && this.setOutOfView());
    }
  }
  _setCssProgress(t = 0) {
    this.$el.style.setProperty("--progress", t.toString());
  }
  _setCustomEventProgress(t = 0) {
    const e = this.attributes.scrollEventProgress;
    if (!e) return;
    const n = new CustomEvent(e, { detail: { target: this.$el, progress: t } });
    window.dispatchEvent(n);
  }
  _getProgressModularModules() {
    if (!this.modularInstance) return;
    const t = Object.keys(this.$el.dataset).filter((n) => n.includes("module")),
      e = Object.entries(this.modularInstance.modules);
    if (t.length)
      for (const n of t) {
        const i = this.$el.dataset[n];
        if (!i) return;
        for (const r of e) {
          const [o, l] = r;
          i in l &&
            this.progressModularModules.push({ moduleName: o, moduleId: i });
        }
      }
  }
  _getScrollCallFrom() {
    const t = li(
      [this.intersection.start, this.intersection.end],
      this.currentScroll,
    );
    return this.intersection.start === t ? "start" : "end";
  }
  _dispatchCall(t, e) {
    var n, i;
    const r = (n = this.attributes.scrollCall) == null ? void 0 : n.split(","),
      o = (i = this.attributes) == null ? void 0 : i.scrollCallSelf;
    if (r && r.length > 1) {
      var l;
      const [a, c, u] = r;
      let h;
      ((h = o ? this.$el.dataset[`module${c.trim()}`] : u),
        this.modularInstance &&
          this.modularInstance.call(
            a.trim(),
            { target: this.$el, way: t, from: e },
            c.trim(),
            (l = h) == null ? void 0 : l.trim(),
          ));
    } else if (r) {
      const [a] = r,
        c = new CustomEvent(a, {
          detail: { target: this.$el, way: t, from: e },
        });
      window.dispatchEvent(c);
    }
  }
}
const Fl = [
  "scrollOffset",
  "scrollPosition",
  "scrollModuleProgress",
  "scrollCssProgress",
  "scrollEventProgress",
  "scrollSpeed",
];
class Nl {
  constructor({
    $el: t,
    modularInstance: e,
    triggerRootMargin: n,
    rafRootMargin: i,
    scrollOrientation: r,
  }) {
    ((this.$scrollContainer = void 0),
      (this.modularInstance = void 0),
      (this.triggerRootMargin = void 0),
      (this.rafRootMargin = void 0),
      (this.scrollElements = void 0),
      (this.triggeredScrollElements = void 0),
      (this.RAFScrollElements = void 0),
      (this.scrollElementsToUpdate = void 0),
      (this.IOTriggerInstance = void 0),
      (this.IORafInstance = void 0),
      (this.scrollOrientation = void 0),
      t
        ? ((this.$scrollContainer = t),
          (this.modularInstance = e),
          (this.scrollOrientation = r),
          (this.triggerRootMargin = n ?? "-1px -1px -1px -1px"),
          (this.rafRootMargin = i ?? "100% 100% 100% 100%"),
          (this.scrollElements = []),
          (this.triggeredScrollElements = []),
          (this.RAFScrollElements = []),
          (this.scrollElementsToUpdate = []),
          this._init())
        : console.error("Please provide a DOM Element as scrollContainer"));
  }
  _init() {
    const t = this.$scrollContainer.querySelectorAll("[data-scroll]"),
      e = Array.from(t);
    (this._subscribeScrollElements(e),
      (this.IOTriggerInstance = new oi({
        scrollElements: [...this.triggeredScrollElements],
        rootMargin: this.triggerRootMargin,
        IORaf: !1,
      })),
      (this.IORafInstance = new oi({
        scrollElements: [...this.RAFScrollElements],
        rootMargin: this.rafRootMargin,
        IORaf: !0,
      })));
  }
  destroy() {
    (this.IOTriggerInstance.destroy(),
      this.IORafInstance.destroy(),
      this._unsubscribeAllScrollElements());
  }
  onResize({ currentScroll: t }) {
    for (const e of this.RAFScrollElements) e.onResize({ currentScroll: t });
  }
  onRender({ currentScroll: t, smooth: e }) {
    for (const n of this.scrollElementsToUpdate)
      n.onRender({ currentScroll: t, smooth: e });
  }
  removeScrollElements(t) {
    const e = t.querySelectorAll("[data-scroll]");
    if (e.length) {
      for (let n = 0; n < this.triggeredScrollElements.length; n++) {
        const i = this.triggeredScrollElements[n];
        Array.from(e).indexOf(i.$el) > -1 &&
          (this.IOTriggerInstance.unobserve(i.$el),
          this.triggeredScrollElements.splice(n, 1));
      }
      for (let n = 0; n < this.RAFScrollElements.length; n++) {
        const i = this.RAFScrollElements[n];
        Array.from(e).indexOf(i.$el) > -1 &&
          (this.IORafInstance.unobserve(i.$el),
          this.RAFScrollElements.splice(n, 1));
      }
      e.forEach((n) => {
        const i = this.scrollElementsToUpdate.find((o) => o.$el === n),
          r = this.scrollElements.find((o) => o.$el === n);
        (i && this._unsubscribeElementUpdate(i),
          r &&
            (this.scrollElements = this.scrollElements.filter(
              (o) => o.id != r.id,
            )));
      });
    }
  }
  addScrollElements(t) {
    const e = t.querySelectorAll("[data-scroll]"),
      n = [];
    this.scrollElements.forEach((o) => {
      n.push(o.id);
    });
    const i = Math.max(...n, 0) + 1,
      r = Array.from(e);
    this._subscribeScrollElements(r, i, !0);
  }
  _subscribeScrollElements(t, e = 0, n = !1) {
    for (let i = 0; i < t.length; i++) {
      const r = t[i],
        o = this._checkRafNeeded(r),
        l = new Dl({
          $el: r,
          id: e + i,
          scrollOrientation: this.scrollOrientation,
          modularInstance: this.modularInstance,
          subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
          unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
          needRaf: o,
        });
      (this.scrollElements.push(l),
        o
          ? (this.RAFScrollElements.push(l),
            n &&
              (this.IORafInstance.scrollElements.push(l),
              this.IORafInstance.observe(l.$el)))
          : (this.triggeredScrollElements.push(l),
            n &&
              (this.IOTriggerInstance.scrollElements.push(l),
              this.IOTriggerInstance.observe(l.$el))));
    }
  }
  _unsubscribeAllScrollElements() {
    ((this.scrollElements = []),
      (this.RAFScrollElements = []),
      (this.triggeredScrollElements = []),
      (this.scrollElementsToUpdate = []));
  }
  _subscribeElementUpdate(t) {
    this.scrollElementsToUpdate.push(t);
  }
  _unsubscribeElementUpdate(t) {
    this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(
      (e) => e.id != t.id,
    );
  }
  _checkRafNeeded(t) {
    let e = [...Fl];
    const n = (i) => {
      e = e.filter((r) => r != i);
    };
    if (t.dataset.scrollOffset) {
      if (
        t.dataset.scrollOffset
          .split(",")
          .map((i) => i.replace("%", "").trim())
          .join(",") != "0,0"
      )
        return !0;
      n("scrollOffset");
    } else n("scrollOffset");
    if (t.dataset.scrollPosition) {
      if (t.dataset.scrollPosition.trim() != "top,bottom") return !0;
      n("scrollPosition");
    } else n("scrollPosition");
    if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed)))
      return !0;
    n("scrollSpeed");
    for (const i of e) if (i in t.dataset) return !0;
    return !1;
  }
}
class ql {
  constructor({ resizeElements: t, resizeCallback: e = () => {} }) {
    ((this.$resizeElements = void 0),
      (this.isFirstObserve = void 0),
      (this.observer = void 0),
      (this.resizeCallback = void 0),
      (this.$resizeElements = t),
      (this.resizeCallback = e),
      (this.isFirstObserve = !0),
      this._init());
  }
  _init() {
    this.observer = new ResizeObserver((t) => {
      var e;
      (!this.isFirstObserve &&
        ((e = this.resizeCallback) == null || e.call(this)),
        (this.isFirstObserve = !1));
    });
    for (const t of this.$resizeElements) this.observer.observe(t);
  }
  destroy() {
    this.observer.disconnect();
  }
}
class zl {
  constructor({
    lenisOptions: t = {},
    modularInstance: e,
    triggerRootMargin: n,
    rafRootMargin: i,
    autoResize: r = !0,
    autoStart: o = !0,
    scrollCallback: l = () => {},
    initCustomTicker: a,
    destroyCustomTicker: c,
  } = {}) {
    ((this.rafPlaying = void 0),
      (this.lenisInstance = void 0),
      (this.coreInstance = void 0),
      (this.lenisOptions = void 0),
      (this.modularInstance = void 0),
      (this.triggerRootMargin = void 0),
      (this.rafRootMargin = void 0),
      (this.rafInstance = void 0),
      (this.autoResize = void 0),
      (this.autoStart = void 0),
      (this.ROInstance = void 0),
      (this.initCustomTicker = void 0),
      (this.destroyCustomTicker = void 0),
      (this._onRenderBind = void 0),
      (this._onResizeBind = void 0),
      (this._onScrollToBind = void 0));
    for (const [u] of Object.entries(t))
      ["wrapper", "content", "infinite"].includes(u) &&
        console.warn(
          `Warning: Key "${u}" is not possible to edit in Locomotive Scroll.`,
        );
    (Object.assign(this, {
      lenisOptions: t,
      modularInstance: e,
      triggerRootMargin: n,
      rafRootMargin: i,
      autoResize: r,
      autoStart: o,
      scrollCallback: l,
      initCustomTicker: a,
      destroyCustomTicker: c,
    }),
      (this._onRenderBind = this._onRender.bind(this)),
      (this._onScrollToBind = this._onScrollTo.bind(this)),
      (this._onResizeBind = this._onResize.bind(this)),
      (this.rafPlaying = !1),
      this._init());
  }
  _init() {
    var t;
    ((this.lenisInstance = new Rl(
      Zs({}, this.lenisOptions, {
        wrapper: window,
        content: document.documentElement,
        infinite: !1,
      }),
    )),
      (t = this.lenisInstance) == null || t.on("scroll", this.scrollCallback),
      document.documentElement.setAttribute(
        "data-scroll-orientation",
        this.lenisInstance.options.orientation,
      ),
      requestAnimationFrame(() => {
        ((this.coreInstance = new Nl({
          $el: this.lenisInstance.rootElement,
          modularInstance: this.modularInstance,
          triggerRootMargin: this.triggerRootMargin,
          rafRootMargin: this.rafRootMargin,
          scrollOrientation: this.lenisInstance.options.orientation,
        })),
          this._bindEvents(),
          this.initCustomTicker && !this.destroyCustomTicker
            ? console.warn(
                "initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.",
              )
            : !this.initCustomTicker &&
              this.destroyCustomTicker &&
              console.warn(
                "destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble.",
              ),
          this.autoStart && this.start());
      }));
  }
  destroy() {
    var t;
    (this.stop(),
      this._unbindEvents(),
      this.lenisInstance.destroy(),
      (t = this.coreInstance) == null || t.destroy(),
      requestAnimationFrame(() => {
        var e;
        (e = this.coreInstance) == null || e.destroy();
      }));
  }
  _bindEvents() {
    (this._bindScrollToEvents(),
      this.autoResize &&
        ("ResizeObserver" in window
          ? (this.ROInstance = new ql({
              resizeElements: [document.body],
              resizeCallback: this._onResizeBind,
            }))
          : window.addEventListener("resize", this._onResizeBind)));
  }
  _unbindEvents() {
    (this._unbindScrollToEvents(),
      this.autoResize &&
        ("ResizeObserver" in window
          ? this.ROInstance && this.ROInstance.destroy()
          : window.removeEventListener("resize", this._onResizeBind)));
  }
  _bindScrollToEvents(t) {
    const e = t || this.lenisInstance.rootElement,
      n = e == null ? void 0 : e.querySelectorAll("[data-scroll-to]");
    n != null &&
      n.length &&
      n.forEach((i) => {
        i.addEventListener("click", this._onScrollToBind, !1);
      });
  }
  _unbindScrollToEvents(t) {
    const e = t || this.lenisInstance.rootElement,
      n = e == null ? void 0 : e.querySelectorAll("[data-scroll-to]");
    n != null &&
      n.length &&
      n.forEach((i) => {
        i.removeEventListener("click", this._onScrollToBind, !1);
      });
  }
  _onResize() {
    requestAnimationFrame(() => {
      var t;
      (t = this.coreInstance) == null ||
        t.onResize({ currentScroll: this.lenisInstance.scroll });
    });
  }
  _onRender() {
    var t, e;
    ((t = this.lenisInstance) == null || t.raf(Date.now()),
      (e = this.coreInstance) == null ||
        e.onRender({
          currentScroll: this.lenisInstance.scroll,
          smooth: this.lenisInstance.options.smoothWheel,
        }));
  }
  _onScrollTo(t) {
    var e;
    t.preventDefault();
    const n = (e = t.currentTarget) != null ? e : null;
    if (!n) return;
    const i = n.getAttribute("data-scroll-to-href") || n.getAttribute("href"),
      r = n.getAttribute("data-scroll-to-offset") || 0,
      o =
        n.getAttribute("data-scroll-to-duration") ||
        this.lenisInstance.options.duration;
    i &&
      this.scrollTo(i, {
        offset: typeof r == "string" ? parseInt(r) : r,
        duration: typeof o == "string" ? parseInt(o) : o,
      });
  }
  start() {
    var t;
    this.rafPlaying ||
      ((t = this.lenisInstance) == null || t.start(),
      (this.rafPlaying = !0),
      this.initCustomTicker
        ? this.initCustomTicker(this._onRenderBind)
        : this._raf());
  }
  stop() {
    var t;
    this.rafPlaying &&
      ((t = this.lenisInstance) == null || t.stop(),
      (this.rafPlaying = !1),
      this.destroyCustomTicker
        ? this.destroyCustomTicker(this._onRenderBind)
        : this.rafInstance && cancelAnimationFrame(this.rafInstance));
  }
  removeScrollElements(t) {
    var e;
    t
      ? (this._unbindScrollToEvents(t),
        (e = this.coreInstance) == null || e.removeScrollElements(t))
      : console.error("Please provide a DOM Element as $oldContainer");
  }
  addScrollElements(t) {
    var e;
    t
      ? ((e = this.coreInstance) == null || e.addScrollElements(t),
        requestAnimationFrame(() => {
          this._bindScrollToEvents(t);
        }))
      : console.error("Please provide a DOM Element as $newContainer");
  }
  resize() {
    this._onResizeBind();
  }
  scrollTo(t, e) {
    var n;
    (n = this.lenisInstance) == null ||
      n.scrollTo(t, {
        offset: e == null ? void 0 : e.offset,
        lerp: e == null ? void 0 : e.lerp,
        duration: e == null ? void 0 : e.duration,
        immediate: e == null ? void 0 : e.immediate,
        lock: e == null ? void 0 : e.lock,
        force: e == null ? void 0 : e.force,
        easing: e == null ? void 0 : e.easing,
        onComplete: e == null ? void 0 : e.onComplete,
      });
  }
  _raf() {
    (this._onRenderBind(),
      (this.rafInstance = requestAnimationFrame(() => this._raf())));
  }
}
class Bl extends nt {
  constructor(t) {
    (super(t), (this.state = !0), (this.rafRender = null));
  }
  init() {
    this.el.dataset.preventReset === void 0 &&
      ((history.scrollRestoration = "manual"), window.scrollTo(0, 0));
    const t = this.el.dataset.horizontal !== void 0 ? "horizontal" : "vertical";
    ((this.scroll = new zl({
      lenisOptions: { orientation: t },
      modularInstance: this,
      autoResize: !1,
      initCustomTicker: (n) => {
        this.rafRender = n;
      },
      destroyCustomTicker: () => {
        this.rafRender = null;
      },
      autoStart: !0,
      scrollCallback: this.onScroll.bind(this),
    })),
      (this.scrollOrientation = 1),
      (this.lastProgress = 0),
      (this.resize = this.scroll.resize.bind(this.scroll)),
      window.location.hash !== "" &&
        this.scrollAnchor(window.location.hash.replace("#", "")));
  }
  scrollAnchor(t) {
    const e = document.getElementById(t);
    this.scroll.scrollTo(e, { offset: -185, duration: 1, lock: !0 });
  }
  aAnimate() {
    this.rafRender && this.rafRender();
  }
  onScroll(t) {
    t.progress === this.lastProgress ||
      t.progress < 0 ||
      (t.progress > this.lastProgress
        ? this.scrollOrientation !== 1 &&
          ((this.scrollOrientation = 1), tt.classList.add("-hideLogoScroll"))
        : this.scrollOrientation !== -1 &&
          ((this.scrollOrientation = -1),
          tt.classList.remove("-hideLogoScroll")),
      t.progress <= 0.001 &&
        ((this.scrollOrientation = -1), tt.classList.remove("-hideLogoScroll")),
      (this.lastProgress = t.progress));
  }
  leavePage(t) {
    this.scroll.removeScrollElements(t);
  }
  enterPage(t) {
    this.scroll.addScrollElements(t);
  }
  toggle(t) {
    if (t === this.state) return;
    this.state = t;
    const e = t ? "start" : "stop";
    this.scroll[e]();
  }
  update() {
    this.scroll.resize();
  }
  destroy() {
    this.scroll.destroy();
  }
  scrollTo({ target: t = 0, options: e = {} }) {
    this.scroll.scrollTo(t, e);
  }
}
class ss extends nt {
  constructor(t) {
    (super(t),
      (this.visible = !1),
      (this.config = { disableScroll: !0 }),
      (this.activeElement = null),
      (this.open = this.change.bind(this, !0)),
      (this.close = this.change.bind(this, !1)),
      (this.onClick = this.onClick.bind(this)),
      (this.onKeyDown = this.onKeyDown.bind(this)));
  }
  scrollBehaviour(t) {
    this.config.disableScroll &&
      Object.assign(tt.style, { overflow: t ? "hidden" : "" });
  }
  toggleEvents(t) {
    const e = t ? "add" : "remove";
    (this.el[`${e}EventListener`]("touchstart", this.onClick),
      this.el[`${e}EventListener`]("click", this.onClick),
      document[`${e}EventListener`]("keydown", this.onKeyDown));
  }
  onClick(t) {
    const { target: e } = t,
      { action: n } = e.dataset;
    e.getAttribute("aria-disabled") ||
      (this[n] &&
        (this[n](), e.blur(), t.preventDefault(), t.stopPropagation()));
  }
  onKeyDown(t) {
    if (t.keyCode === 27) {
      this.close();
      return;
    }
    t.keyCode === 9 && this.retainFocus(t);
  }
  getFocusableNodes() {
    const t = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        'button:not([disabled]):not([aria-hidden]):not([aria-disabled="true"])',
        "iframe",
        "object",
        "embed",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"])',
      ],
      e = this.el.querySelectorAll(t);
    return Array(...e);
  }
  retainFocus(t) {
    let e = this.getFocusableNodes();
    if (e.length !== 0)
      if (
        ((e = e.filter((n) => n.offsetParent !== null)),
        !this.el.contains(document.activeElement))
      )
        e[0].focus();
      else {
        const n = e.indexOf(document.activeElement);
        (t.shiftKey && n === 0 && (e[e.length - 1].focus(), t.preventDefault()),
          !t.shiftKey &&
            e.length > 0 &&
            n === e.length - 1 &&
            (e[0].focus(), t.preventDefault()));
      }
  }
  setFocusToFirstNode() {
    const t = this.getFocusableNodes();
    if (t.length === 0) return;
    const e = t.filter((n) => n.dataset.action !== "close");
    if (e.length > 0) {
      e[0].focus();
      return;
    }
    t[0].focus();
  }
  destroy() {
    this.el.remove();
  }
  toggle() {
    this.change(!this.visible);
  }
  change(t) {
    if (this.visible === t) return;
    ((this.visible = t),
      this.scrollBehaviour(t),
      this.toggleEvents(t),
      this.el.setAttribute("aria-hidden", !t));
    let e = () => {};
    (this.call("toggle", !t, "Scroll", "scroll"),
      t
        ? (this.el.classList.add("-isOpen"),
          (this.activeElement = document.activeElement),
          (e = () => {
            (this.el.removeEventListener("animationend", e, !1),
              this.setFocusToFirstNode(),
              this.afterChange(!0));
          }))
        : (this.el.classList.remove("-isOpen"),
          (e = () => {
            (this.el.removeEventListener("animationend", e, !1),
              this.activeElement &&
                this.activeElement.focus &&
                this.activeElement.focus(),
              this.afterChange(!1));
          })),
      this.el.addEventListener("animationend", e, !1));
  }
  afterChange() {}
}
class Ul extends ss {
  constructor(t) {
    (super(t),
      (this.events = { click: { item: "onClickItem" } }),
      (this.activeSection = 0),
      (this.isAnimating = !1));
  }
  onClickItem({ target: t }) {
    this.toggle();
    const e = parseInt(t.getAttribute("data-index"), 10);
    if (this.activeSection === e) return;
    (this.$("item")[this.activeSection].classList.remove("-hover"),
      t.classList.add("-hover"),
      (this.activeSection = e));
  }
  setActiveMenuItem(t) {
    const e = this.$("item");
    e.forEach((n, i) => {
      n.dataset.anchor === t &&
        (e[this.activeSection].classList.remove("-hover"),
        n.classList.add("-hover"),
        (this.activeSection = i));
    });
  }
  change(t) {
    if (this.visible === t || this.isAnimating) return;
    ((this.isAnimating = !0),
      (this.visible = t),
      this.scrollBehaviour(t),
      this.toggleEvents(t),
      this.el.setAttribute("aria-hidden", !t));
    const [e] = this.$("overlay");
    let n = () => {};
    (this.call("toggle", !t, "Scroll", "scroll"),
      t
        ? ((this.el.style.display = "flex"),
          (n = () => {
            (e.removeEventListener("transitionend", n, !1),
              this.setFocusToFirstNode(),
              (this.isAnimating = !1));
          }),
          window.requestAnimationFrame(() => {
            ((this.activeElement = document.activeElement),
              tt.classList.add("-isMenuOpen"));
          }))
        : (tt.classList.remove("-isMenuOpen"),
          (n = () => {
            (e.removeEventListener("transitionend", n, !1),
              this.el.style.removeProperty("display"),
              this.activeElement &&
                this.activeElement.focus &&
                this.activeElement.focus(),
              (this.isAnimating = !1));
          })),
      e.addEventListener("transitionend", n, !1));
  }
}
function En(s) {
  return typeof s == "number";
}
function tn(s) {
  return typeof s == "string";
}
function Os(s) {
  return typeof s == "boolean";
}
function ci(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function lt(s) {
  return Math.abs(s);
}
function xn(s) {
  return Math.sign(s);
}
function He(s, t) {
  return lt(s - t);
}
function Hl(s, t) {
  if (s === 0 || t === 0 || lt(s) <= lt(t)) return 0;
  const e = He(lt(s), lt(t));
  return lt(e / s);
}
function Vl(s) {
  return Math.round(s * 100) / 100;
}
function Ke(s) {
  return Je(s).map(Number);
}
function Ft(s) {
  return s[ns(s)];
}
function ns(s) {
  return Math.max(0, s.length - 1);
}
function Tn(s, t) {
  return t === ns(s);
}
function ui(s, t = 0) {
  return Array.from(Array(s), (e, n) => t + n);
}
function Je(s) {
  return Object.keys(s);
}
function Sr(s, t) {
  return [s, t].reduce(
    (e, n) => (
      Je(n).forEach((i) => {
        const r = e[i],
          o = n[i],
          l = ci(r) && ci(o);
        e[i] = l ? Sr(r, o) : o;
      }),
      e
    ),
    {},
  );
}
function en(s, t) {
  return typeof t.MouseEvent < "u" && s instanceof t.MouseEvent;
}
function jl(s, t) {
  const e = { start: n, center: i, end: r };
  function n() {
    return 0;
  }
  function i(a) {
    return r(a) / 2;
  }
  function r(a) {
    return t - a;
  }
  function o(a, c) {
    return tn(s) ? e[s](a) : s(t, a, c);
  }
  return { measure: o };
}
function Qe() {
  let s = [];
  function t(i, r, o, l = { passive: !0 }) {
    let a;
    if ("addEventListener" in i)
      (i.addEventListener(r, o, l), (a = () => i.removeEventListener(r, o, l)));
    else {
      const c = i;
      (c.addListener(o), (a = () => c.removeListener(o)));
    }
    return (s.push(a), n);
  }
  function e() {
    s = s.filter((i) => i());
  }
  const n = { add: t, clear: e };
  return n;
}
function Wl(s, t, e, n) {
  const i = Qe(),
    r = 1e3 / 60;
  let o = null,
    l = 0,
    a = 0;
  function c() {
    i.add(s, "visibilitychange", () => {
      s.hidden && f();
    });
  }
  function u() {
    (p(), i.clear());
  }
  function h(v) {
    if (!a) return;
    o || ((o = v), e(), e());
    const g = v - o;
    for (o = v, l += g; l >= r; ) (e(), (l -= r));
    const y = l / r;
    (n(y), a && (a = t.requestAnimationFrame(h)));
  }
  function d() {
    a || (a = t.requestAnimationFrame(h));
  }
  function p() {
    (t.cancelAnimationFrame(a), (o = null), (l = 0), (a = 0));
  }
  function f() {
    ((o = null), (l = 0));
  }
  return { init: c, destroy: u, start: d, stop: p, update: e, render: n };
}
function Xl(s, t) {
  const e = t === "rtl",
    n = s === "y",
    i = n ? "y" : "x",
    r = n ? "x" : "y",
    o = !n && e ? -1 : 1,
    l = u(),
    a = h();
  function c(f) {
    const { height: m, width: v } = f;
    return n ? m : v;
  }
  function u() {
    return n ? "top" : e ? "right" : "left";
  }
  function h() {
    return n ? "bottom" : e ? "left" : "right";
  }
  function d(f) {
    return f * o;
  }
  return {
    scroll: i,
    cross: r,
    startEdge: l,
    endEdge: a,
    measureSize: c,
    direction: d,
  };
}
function be(s = 0, t = 0) {
  const e = lt(s - t);
  function n(c) {
    return c < s;
  }
  function i(c) {
    return c > t;
  }
  function r(c) {
    return n(c) || i(c);
  }
  function o(c) {
    return r(c) ? (n(c) ? s : t) : c;
  }
  function l(c) {
    return e ? c - e * Math.ceil((c - t) / e) : c;
  }
  return {
    length: e,
    max: t,
    min: s,
    constrain: o,
    reachedAny: r,
    reachedMax: i,
    reachedMin: n,
    removeOffset: l,
  };
}
function _r(s, t, e) {
  const { constrain: n } = be(0, s),
    i = s + 1;
  let r = o(t);
  function o(d) {
    return e ? lt((i + d) % i) : n(d);
  }
  function l() {
    return r;
  }
  function a(d) {
    return ((r = o(d)), h);
  }
  function c(d) {
    return u().set(l() + d);
  }
  function u() {
    return _r(s, l(), e);
  }
  const h = { get: l, set: a, add: c, clone: u };
  return h;
}
function Gl(s, t, e, n, i, r, o, l, a, c, u, h, d, p, f, m, v, g, y) {
  const { cross: b, direction: x } = s,
    E = ["INPUT", "SELECT", "TEXTAREA"],
    C = { passive: !1 },
    S = Qe(),
    T = Qe(),
    M = be(50, 225).constrain(p.measure(20)),
    I = { mouse: 300, touch: 400 },
    k = { mouse: 500, touch: 600 },
    L = f ? 43 : 25;
  let $ = !1,
    _ = 0,
    P = 0,
    U = !1,
    W = !1,
    O = !1,
    w = !1;
  function N(A) {
    if (!y) return;
    function R(Y) {
      (Os(y) || y(A, Y)) && ut(Y);
    }
    const z = t;
    S.add(z, "dragstart", (Y) => Y.preventDefault(), C)
      .add(z, "touchmove", () => {}, C)
      .add(z, "touchend", () => {})
      .add(z, "touchstart", R)
      .add(z, "mousedown", R)
      .add(z, "touchcancel", dt)
      .add(z, "contextmenu", dt)
      .add(z, "click", ft, !0);
  }
  function V() {
    (S.clear(), T.clear());
  }
  function ct() {
    const A = w ? e : t;
    T.add(A, "touchmove", G, C)
      .add(A, "touchend", dt)
      .add(A, "mousemove", G, C)
      .add(A, "mouseup", dt);
  }
  function it(A) {
    const R = A.nodeName || "";
    return E.includes(R);
  }
  function K() {
    return (f ? k : I)[w ? "mouse" : "touch"];
  }
  function et(A, R) {
    const z = h.add(xn(A) * -1),
      Y = u.byDistance(A, !f).distance;
    return f || lt(A) < M
      ? Y
      : v && R
        ? Y * 0.5
        : u.byIndex(z.get(), 0).distance;
  }
  function ut(A) {
    const R = en(A, n);
    ((w = R),
      (O = f && R && !A.buttons && $),
      ($ = He(i.get(), o.get()) >= 2),
      !(R && A.button !== 0) &&
        (it(A.target) ||
          ((U = !0),
          r.pointerDown(A),
          c.useFriction(0).useDuration(0),
          i.set(o),
          ct(),
          (_ = r.readPoint(A)),
          (P = r.readPoint(A, b)),
          d.emit("pointerDown"))));
  }
  function G(A) {
    if (!en(A, n) && A.touches.length >= 2) return dt(A);
    const z = r.readPoint(A),
      Y = r.readPoint(A, b),
      J = He(z, _),
      st = He(Y, P);
    if (!W && !w && (!A.cancelable || ((W = J > st), !W))) return dt(A);
    const Tt = r.pointerMove(A);
    (J > m && (O = !0),
      c.useFriction(0.3).useDuration(0.75),
      l.start(),
      i.add(x(Tt)),
      A.preventDefault());
  }
  function dt(A) {
    const z = u.byDistance(0, !1).index !== h.get(),
      Y = r.pointerUp(A) * K(),
      J = et(x(Y), z),
      st = Hl(Y, J),
      Tt = L - 10 * st,
      mt = g + st / 50;
    ((W = !1),
      (U = !1),
      T.clear(),
      c.useDuration(Tt).useFriction(mt),
      a.distance(J, !f),
      (w = !1),
      d.emit("pointerUp"));
  }
  function ft(A) {
    O && (A.stopPropagation(), A.preventDefault(), (O = !1));
  }
  function Q() {
    return U;
  }
  return { init: N, destroy: V, pointerDown: Q };
}
function Yl(s, t) {
  let n, i;
  function r(h) {
    return h.timeStamp;
  }
  function o(h, d) {
    const f = `client${(d || s.scroll) === "x" ? "X" : "Y"}`;
    return (en(h, t) ? h : h.touches[0])[f];
  }
  function l(h) {
    return ((n = h), (i = h), o(h));
  }
  function a(h) {
    const d = o(h) - o(i),
      p = r(h) - r(n) > 170;
    return ((i = h), p && (n = h), d);
  }
  function c(h) {
    if (!n || !i) return 0;
    const d = o(i) - o(n),
      p = r(h) - r(n),
      f = r(h) - r(i) > 170,
      m = d / p;
    return p && !f && lt(m) > 0.1 ? m : 0;
  }
  return { pointerDown: l, pointerMove: a, pointerUp: c, readPoint: o };
}
function Kl() {
  function s(e) {
    const { offsetTop: n, offsetLeft: i, offsetWidth: r, offsetHeight: o } = e;
    return {
      top: n,
      right: i + r,
      bottom: n + o,
      left: i,
      width: r,
      height: o,
    };
  }
  return { measure: s };
}
function Jl(s) {
  function t(n) {
    return s * (n / 100);
  }
  return { measure: t };
}
function Ql(s, t, e, n, i, r, o) {
  const l = [s].concat(n);
  let a,
    c,
    u = [],
    h = !1;
  function d(v) {
    return i.measureSize(o.measure(v));
  }
  function p(v) {
    if (!r) return;
    ((c = d(s)), (u = n.map(d)));
    function g(y) {
      for (const b of y) {
        if (h) return;
        const x = b.target === s,
          E = n.indexOf(b.target),
          C = x ? c : u[E],
          S = d(x ? s : n[E]);
        if (lt(S - C) >= 0.5) {
          (v.reInit(), t.emit("resize"));
          break;
        }
      }
    }
    ((a = new ResizeObserver((y) => {
      (Os(r) || r(v, y)) && g(y);
    })),
      e.requestAnimationFrame(() => {
        l.forEach((y) => a.observe(y));
      }));
  }
  function f() {
    ((h = !0), a && a.disconnect());
  }
  return { init: p, destroy: f };
}
function Zl(s, t, e, n, i, r) {
  let o = 0,
    l = 0,
    a = i,
    c = r,
    u = s.get(),
    h = 0;
  function d() {
    const C = n.get() - s.get(),
      S = !a;
    let T = 0;
    return (
      S
        ? ((o = 0), e.set(n), s.set(n), (T = C))
        : (e.set(s), (o += C / a), (o *= c), (u += o), s.add(o), (T = u - h)),
      (l = xn(T)),
      (h = u),
      E
    );
  }
  function p() {
    const C = n.get() - t.get();
    return lt(C) < 0.001;
  }
  function f() {
    return a;
  }
  function m() {
    return l;
  }
  function v() {
    return o;
  }
  function g() {
    return b(i);
  }
  function y() {
    return x(r);
  }
  function b(C) {
    return ((a = C), E);
  }
  function x(C) {
    return ((c = C), E);
  }
  const E = {
    direction: m,
    duration: f,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: y,
    useBaseDuration: g,
    useFriction: x,
    useDuration: b,
  };
  return E;
}
function tc(s, t, e, n, i) {
  const r = i.measure(10),
    o = i.measure(50),
    l = be(0.1, 0.99);
  let a = !1;
  function c() {
    return !(a || !s.reachedAny(e.get()) || !s.reachedAny(t.get()));
  }
  function u(p) {
    if (!c()) return;
    const f = s.reachedMin(t.get()) ? "min" : "max",
      m = lt(s[f] - t.get()),
      v = e.get() - t.get(),
      g = l.constrain(m / o);
    (e.subtract(v * g),
      !p &&
        lt(v) < r &&
        (e.set(s.constrain(e.get())), n.useDuration(25).useBaseFriction()));
  }
  function h(p) {
    a = !p;
  }
  return { shouldConstrain: c, constrain: u, toggleActive: h };
}
function ec(s, t, e, n, i) {
  const r = be(-t + s, 0),
    o = h(),
    l = u(),
    a = d();
  function c(f, m) {
    return He(f, m) <= 1;
  }
  function u() {
    const f = o[0],
      m = Ft(o),
      v = o.lastIndexOf(f),
      g = o.indexOf(m) + 1;
    return be(v, g);
  }
  function h() {
    return e
      .map((f, m) => {
        const { min: v, max: g } = r,
          y = r.constrain(f),
          b = !m,
          x = Tn(e, m);
        return b ? g : x || c(v, y) ? v : c(g, y) ? g : y;
      })
      .map((f) => parseFloat(f.toFixed(3)));
  }
  function d() {
    if (t <= s + i) return [r.max];
    if (n === "keepSnaps") return o;
    const { min: f, max: m } = l;
    return o.slice(f, m);
  }
  return { snapsContained: a, scrollContainLimit: l };
}
function sc(s, t, e) {
  const n = t[0],
    i = e ? n - s : Ft(t);
  return { limit: be(i, n) };
}
function nc(s, t, e, n) {
  const r = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: l, reachedMax: a } = be(r, o);
  function c(d) {
    return d === 1 ? a(e.get()) : d === -1 ? l(e.get()) : !1;
  }
  function u(d) {
    if (!c(d)) return;
    const p = s * (d * -1);
    n.forEach((f) => f.add(p));
  }
  return { loop: u };
}
function ic(s) {
  const { max: t, length: e } = s;
  function n(r) {
    const o = r - t;
    return e ? o / -e : 0;
  }
  return { get: n };
}
function rc(s, t, e, n, i) {
  const { startEdge: r, endEdge: o } = s,
    { groupSlides: l } = i,
    a = h().map(t.measure),
    c = d(),
    u = p();
  function h() {
    return l(n)
      .map((m) => Ft(m)[o] - m[0][r])
      .map(lt);
  }
  function d() {
    return n.map((m) => e[r] - m[r]).map((m) => -lt(m));
  }
  function p() {
    return l(c)
      .map((m) => m[0])
      .map((m, v) => m + a[v]);
  }
  return { snaps: c, snapsAligned: u };
}
function oc(s, t, e, n, i, r) {
  const { groupSlides: o } = i,
    { min: l, max: a } = n,
    c = u();
  function u() {
    const d = o(r),
      p = !s || t === "keepSnaps";
    return e.length === 1
      ? [r]
      : p
        ? d
        : d.slice(l, a).map((f, m, v) => {
            const g = !m,
              y = Tn(v, m);
            if (g) {
              const b = Ft(v[0]) + 1;
              return ui(b);
            }
            if (y) {
              const b = ns(r) - Ft(v)[0] + 1;
              return ui(b, Ft(v)[0]);
            }
            return f;
          });
  }
  return { slideRegistry: c };
}
function ac(s, t, e, n, i) {
  const { reachedAny: r, removeOffset: o, constrain: l } = n;
  function a(f) {
    return f.concat().sort((m, v) => lt(m) - lt(v))[0];
  }
  function c(f) {
    const m = s ? o(f) : l(f),
      v = t
        .map((y, b) => ({ diff: u(y - m, 0), index: b }))
        .sort((y, b) => lt(y.diff) - lt(b.diff)),
      { index: g } = v[0];
    return { index: g, distance: m };
  }
  function u(f, m) {
    const v = [f, f + e, f - e];
    if (!s) return f;
    if (!m) return a(v);
    const g = v.filter((y) => xn(y) === m);
    return g.length ? a(g) : Ft(v) - e;
  }
  function h(f, m) {
    const v = t[f] - i.get(),
      g = u(v, m);
    return { index: f, distance: g };
  }
  function d(f, m) {
    const v = i.get() + f,
      { index: g, distance: y } = c(v),
      b = !s && r(v);
    if (!m || b) return { index: g, distance: f };
    const x = t[g] - y,
      E = f + u(x, 0);
    return { index: g, distance: E };
  }
  return { byDistance: d, byIndex: h, shortcut: u };
}
function lc(s, t, e, n, i, r, o) {
  function l(h) {
    const d = h.distance,
      p = h.index !== t.get();
    (r.add(d),
      d && (n.duration() ? s.start() : (s.update(), s.render(1), s.update())),
      p && (e.set(t.get()), t.set(h.index), o.emit("select")));
  }
  function a(h, d) {
    const p = i.byDistance(h, d);
    l(p);
  }
  function c(h, d) {
    const p = t.clone().set(h),
      f = i.byIndex(p.get(), d);
    l(f);
  }
  return { distance: a, index: c };
}
function cc(s, t, e, n, i, r, o, l) {
  const a = { passive: !0, capture: !0 };
  let c = 0;
  function u(p) {
    if (!l) return;
    function f(m) {
      if (new Date().getTime() - c > 10) return;
      (o.emit("slideFocusStart"), (s.scrollLeft = 0));
      const y = e.findIndex((b) => b.includes(m));
      En(y) && (i.useDuration(0), n.index(y, 0), o.emit("slideFocus"));
    }
    (r.add(document, "keydown", h, !1),
      t.forEach((m, v) => {
        r.add(
          m,
          "focus",
          (g) => {
            (Os(l) || l(p, g)) && f(v);
          },
          a,
        );
      }));
  }
  function h(p) {
    p.code === "Tab" && (c = new Date().getTime());
  }
  return { init: u };
}
function Be(s) {
  let t = s;
  function e() {
    return t;
  }
  function n(a) {
    t = o(a);
  }
  function i(a) {
    t += o(a);
  }
  function r(a) {
    t -= o(a);
  }
  function o(a) {
    return En(a) ? a : a.get();
  }
  return { get: e, set: n, add: i, subtract: r };
}
function Er(s, t) {
  const e = s.scroll === "x" ? o : l,
    n = t.style;
  let i = null,
    r = !1;
  function o(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function l(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function a(d) {
    if (r) return;
    const p = Vl(s.direction(d));
    p !== i && ((n.transform = e(p)), (i = p));
  }
  function c(d) {
    r = !d;
  }
  function u() {
    r ||
      ((n.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: a, toggleActive: c };
}
function uc(s, t, e, n, i, r, o, l, a) {
  const u = Ke(i),
    h = Ke(i).reverse(),
    d = g().concat(y());
  function p(S, T) {
    return S.reduce((M, I) => M - i[I], T);
  }
  function f(S, T) {
    return S.reduce((M, I) => (p(M, T) > 0 ? M.concat([I]) : M), []);
  }
  function m(S) {
    return r.map((T, M) => ({
      start: T - n[M] + 0.5 + S,
      end: T + t - 0.5 + S,
    }));
  }
  function v(S, T, M) {
    const I = m(T);
    return S.map((k) => {
      const L = M ? 0 : -e,
        $ = M ? e : 0,
        _ = M ? "end" : "start",
        P = I[k][_];
      return {
        index: k,
        loopPoint: P,
        slideLocation: Be(-1),
        translate: Er(s, a[k]),
        target: () => (l.get() > P ? L : $),
      };
    });
  }
  function g() {
    const S = o[0],
      T = f(h, S);
    return v(T, e, !1);
  }
  function y() {
    const S = t - o[0] - 1,
      T = f(u, S);
    return v(T, -e, !0);
  }
  function b() {
    return d.every(({ index: S }) => {
      const T = u.filter((M) => M !== S);
      return p(T, t) <= 0.1;
    });
  }
  function x() {
    d.forEach((S) => {
      const { target: T, translate: M, slideLocation: I } = S,
        k = T();
      k !== I.get() && (M.to(k), I.set(k));
    });
  }
  function E() {
    d.forEach((S) => S.translate.clear());
  }
  return { canLoop: b, clear: E, loop: x, loopPoints: d };
}
function hc(s, t, e) {
  let n,
    i = !1;
  function r(a) {
    if (!e) return;
    function c(u) {
      for (const h of u)
        if (h.type === "childList") {
          (a.reInit(), t.emit("slidesChanged"));
          break;
        }
    }
    ((n = new MutationObserver((u) => {
      i || ((Os(e) || e(a, u)) && c(u));
    })),
      n.observe(s, { childList: !0 }));
  }
  function o() {
    (n && n.disconnect(), (i = !0));
  }
  return { init: r, destroy: o };
}
function dc(s, t, e, n) {
  const i = {};
  let r = null,
    o = null,
    l,
    a = !1;
  function c() {
    ((l = new IntersectionObserver(
      (f) => {
        a ||
          (f.forEach((m) => {
            const v = t.indexOf(m.target);
            i[v] = m;
          }),
          (r = null),
          (o = null),
          e.emit("slidesInView"));
      },
      { root: s.parentElement, threshold: n },
    )),
      t.forEach((f) => l.observe(f)));
  }
  function u() {
    (l && l.disconnect(), (a = !0));
  }
  function h(f) {
    return Je(i).reduce((m, v) => {
      const g = parseInt(v),
        { isIntersecting: y } = i[g];
      return (((f && y) || (!f && !y)) && m.push(g), m);
    }, []);
  }
  function d(f = !0) {
    if (f && r) return r;
    if (!f && o) return o;
    const m = h(f);
    return (f && (r = m), f || (o = m), m);
  }
  return { init: c, destroy: u, get: d };
}
function fc(s, t, e, n, i, r) {
  const { measureSize: o, startEdge: l, endEdge: a } = s,
    c = e[0] && i,
    u = f(),
    h = m(),
    d = e.map(o),
    p = v();
  function f() {
    if (!c) return 0;
    const y = e[0];
    return lt(t[l] - y[l]);
  }
  function m() {
    if (!c) return 0;
    const y = r.getComputedStyle(Ft(n));
    return parseFloat(y.getPropertyValue(`margin-${a}`));
  }
  function v() {
    return e
      .map((y, b, x) => {
        const E = !b,
          C = Tn(x, b);
        return E ? d[b] + u : C ? d[b] + h : x[b + 1][l] - y[l];
      })
      .map(lt);
  }
  return { slideSizes: d, slideSizesWithGaps: p, startGap: u, endGap: h };
}
function pc(s, t, e, n, i, r, o, l, a) {
  const { startEdge: c, endEdge: u, direction: h } = s,
    d = En(e);
  function p(g, y) {
    return Ke(g)
      .filter((b) => b % y === 0)
      .map((b) => g.slice(b, b + y));
  }
  function f(g) {
    return g.length
      ? Ke(g)
          .reduce((y, b, x) => {
            const E = Ft(y) || 0,
              C = E === 0,
              S = b === ns(g),
              T = i[c] - r[E][c],
              M = i[c] - r[b][u],
              I = !n && C ? h(o) : 0,
              k = !n && S ? h(l) : 0,
              L = lt(M - k - (T + I));
            return (x && L > t + a && y.push(b), S && y.push(g.length), y);
          }, [])
          .map((y, b, x) => {
            const E = Math.max(x[b - 1] || 0);
            return g.slice(E, y);
          })
      : [];
  }
  function m(g) {
    return d ? p(g, e) : f(g);
  }
  return { groupSlides: m };
}
function mc(s, t, e, n, i, r, o) {
  const {
      align: l,
      axis: a,
      direction: c,
      startIndex: u,
      loop: h,
      duration: d,
      dragFree: p,
      dragThreshold: f,
      inViewThreshold: m,
      slidesToScroll: v,
      skipSnaps: g,
      containScroll: y,
      watchResize: b,
      watchSlides: x,
      watchDrag: E,
      watchFocus: C,
    } = r,
    S = 2,
    T = Kl(),
    M = T.measure(t),
    I = e.map(T.measure),
    k = Xl(a, c),
    L = k.measureSize(M),
    $ = Jl(L),
    _ = jl(l, L),
    P = !h && !!y,
    U = h || !!y,
    {
      slideSizes: W,
      slideSizesWithGaps: O,
      startGap: w,
      endGap: N,
    } = fc(k, M, I, e, U, i),
    V = pc(k, L, v, h, M, I, w, N, S),
    { snaps: ct, snapsAligned: it } = rc(k, _, M, I, V),
    K = -Ft(ct) + Ft(O),
    { snapsContained: et, scrollContainLimit: ut } = ec(L, K, it, y, S),
    G = P ? et : it,
    { limit: dt } = sc(K, G, h),
    ft = _r(ns(G), u, h),
    Q = ft.clone(),
    H = Ke(e),
    A = ({
      dragHandler: Xt,
      scrollBody: oe,
      scrollBounds: ae,
      options: { loop: bt },
    }) => {
      (bt || ae.constrain(Xt.pointerDown()), oe.seek());
    },
    R = (
      {
        scrollBody: Xt,
        translate: oe,
        location: ae,
        offsetLocation: bt,
        previousLocation: Re,
        scrollLooper: Se,
        slideLooper: X,
        dragHandler: vt,
        animation: An,
        eventHandler: De,
        scrollBounds: Tr,
        options: { loop: kn },
      },
      Mn,
    ) => {
      const Pn = Xt.settled(),
        Cr = !Tr.shouldConstrain(),
        On = kn ? Pn : Pn && Cr,
        $n = On && !vt.pointerDown();
      $n && An.stop();
      const Ir = ae.get() * Mn + Re.get() * (1 - Mn);
      (bt.set(Ir),
        kn && (Se.loop(Xt.direction()), X.loop()),
        oe.to(bt.get()),
        $n && De.emit("settle"),
        On || De.emit("scroll"));
    },
    z = Wl(
      n,
      i,
      () => A(Wt),
      (Xt) => R(Wt, Xt),
    ),
    Y = 0.68,
    J = G[ft.get()],
    st = Be(J),
    Tt = Be(J),
    mt = Be(J),
    ht = Be(J),
    Mt = Zl(st, mt, Tt, ht, d, Y),
    rt = ac(h, G, K, dt, ht),
    Ct = lc(z, ft, Q, Mt, rt, ht, o),
    Lt = ic(dt),
    Pt = Qe(),
    we = dc(t, e, o, m),
    { slideRegistry: Ut } = oc(P, y, G, ut, V, H),
    Ht = cc(s, e, Ut, Ct, Mt, Pt, o, C),
    Wt = {
      ownerDocument: n,
      ownerWindow: i,
      eventHandler: o,
      containerRect: M,
      slideRects: I,
      animation: z,
      axis: k,
      dragHandler: Gl(
        k,
        s,
        n,
        i,
        ht,
        Yl(k, i),
        st,
        z,
        Ct,
        Mt,
        rt,
        ft,
        o,
        $,
        p,
        f,
        g,
        Y,
        E,
      ),
      eventStore: Pt,
      percentOfView: $,
      index: ft,
      indexPrevious: Q,
      limit: dt,
      location: st,
      offsetLocation: mt,
      previousLocation: Tt,
      options: r,
      resizeHandler: Ql(t, o, i, e, k, b, T),
      scrollBody: Mt,
      scrollBounds: tc(dt, mt, ht, Mt, $),
      scrollLooper: nc(K, dt, mt, [st, mt, Tt, ht]),
      scrollProgress: Lt,
      scrollSnapList: G.map(Lt.get),
      scrollSnaps: G,
      scrollTarget: rt,
      scrollTo: Ct,
      slideLooper: uc(k, L, K, W, O, ct, G, mt, e),
      slideFocus: Ht,
      slidesHandler: hc(t, o, x),
      slidesInView: we,
      slideIndexes: H,
      slideRegistry: Ut,
      slidesToScroll: V,
      target: ht,
      translate: Er(k, t),
    };
  return Wt;
}
function gc() {
  let s = {},
    t;
  function e(c) {
    t = c;
  }
  function n(c) {
    return s[c] || [];
  }
  function i(c) {
    return (n(c).forEach((u) => u(t, c)), a);
  }
  function r(c, u) {
    return ((s[c] = n(c).concat([u])), a);
  }
  function o(c, u) {
    return ((s[c] = n(c).filter((h) => h !== u)), a);
  }
  function l() {
    s = {};
  }
  const a = { init: e, emit: i, off: o, on: r, clear: l };
  return a;
}
const vc = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function bc(s) {
  function t(r, o) {
    return Sr(r, o || {});
  }
  function e(r) {
    const o = r.breakpoints || {},
      l = Je(o)
        .filter((a) => s.matchMedia(a).matches)
        .map((a) => o[a])
        .reduce((a, c) => t(a, c), {});
    return t(r, l);
  }
  function n(r) {
    return r
      .map((o) => Je(o.breakpoints || {}))
      .reduce((o, l) => o.concat(l), [])
      .map(s.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: e, optionsMediaQueries: n };
}
function yc(s) {
  let t = [];
  function e(r, o) {
    return (
      (t = o.filter(({ options: l }) => s.optionsAtMedia(l).active !== !1)),
      t.forEach((l) => l.init(r, s)),
      o.reduce((l, a) => Object.assign(l, { [a.name]: a }), {})
    );
  }
  function n() {
    t = t.filter((r) => r.destroy());
  }
  return { init: e, destroy: n };
}
function Cn(s, t, e) {
  const n = s.ownerDocument,
    i = n.defaultView,
    r = bc(i),
    o = yc(r),
    l = Qe(),
    a = gc(),
    { mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: h } = r,
    { on: d, off: p, emit: f } = a,
    m = k;
  let v = !1,
    g,
    y = c(vc, Cn.globalOptions),
    b = c(y),
    x = [],
    E,
    C,
    S;
  function T() {
    const { container: H, slides: A } = b;
    C = (tn(H) ? s.querySelector(H) : H) || s.children[0];
    const z = tn(A) ? C.querySelectorAll(A) : A;
    S = [].slice.call(z || C.children);
  }
  function M(H) {
    const A = mc(s, C, S, n, i, H, a);
    if (H.loop && !A.slideLooper.canLoop()) {
      const R = Object.assign({}, H, { loop: !1 });
      return M(R);
    }
    return A;
  }
  function I(H, A) {
    v ||
      ((y = c(y, H)),
      (b = u(y)),
      (x = A || x),
      T(),
      (g = M(b)),
      h([y, ...x.map(({ options: R }) => R)]).forEach((R) =>
        l.add(R, "change", k),
      ),
      b.active &&
        (g.translate.to(g.location.get()),
        g.animation.init(),
        g.slidesInView.init(),
        g.slideFocus.init(Q),
        g.eventHandler.init(Q),
        g.resizeHandler.init(Q),
        g.slidesHandler.init(Q),
        g.options.loop && g.slideLooper.loop(),
        C.offsetParent && S.length && g.dragHandler.init(Q),
        (E = o.init(Q, x))));
  }
  function k(H, A) {
    const R = V();
    (L(), I(c({ startIndex: R }, H), A), a.emit("reInit"));
  }
  function L() {
    (g.dragHandler.destroy(),
      g.eventStore.clear(),
      g.translate.clear(),
      g.slideLooper.clear(),
      g.resizeHandler.destroy(),
      g.slidesHandler.destroy(),
      g.slidesInView.destroy(),
      g.animation.destroy(),
      o.destroy(),
      l.clear());
  }
  function $() {
    v || ((v = !0), l.clear(), L(), a.emit("destroy"), a.clear());
  }
  function _(H, A, R) {
    !b.active ||
      v ||
      (g.scrollBody.useBaseFriction().useDuration(A === !0 ? 0 : b.duration),
      g.scrollTo.index(H, R || 0));
  }
  function P(H) {
    const A = g.index.add(1).get();
    _(A, H, -1);
  }
  function U(H) {
    const A = g.index.add(-1).get();
    _(A, H, 1);
  }
  function W() {
    return g.index.add(1).get() !== V();
  }
  function O() {
    return g.index.add(-1).get() !== V();
  }
  function w() {
    return g.scrollSnapList;
  }
  function N() {
    return g.scrollProgress.get(g.offsetLocation.get());
  }
  function V() {
    return g.index.get();
  }
  function ct() {
    return g.indexPrevious.get();
  }
  function it() {
    return g.slidesInView.get();
  }
  function K() {
    return g.slidesInView.get(!1);
  }
  function et() {
    return E;
  }
  function ut() {
    return g;
  }
  function G() {
    return s;
  }
  function dt() {
    return C;
  }
  function ft() {
    return S;
  }
  const Q = {
    canScrollNext: W,
    canScrollPrev: O,
    containerNode: dt,
    internalEngine: ut,
    destroy: $,
    off: p,
    on: d,
    emit: f,
    plugins: et,
    previousScrollSnap: ct,
    reInit: m,
    rootNode: G,
    scrollNext: P,
    scrollPrev: U,
    scrollProgress: N,
    scrollSnapList: w,
    scrollTo: _,
    selectedScrollSnap: V,
    slideNodes: ft,
    slidesInView: it,
    slidesNotInView: K,
  };
  return (I(t, e), setTimeout(() => a.emit("init"), 0), Q);
}
Cn.globalOptions = void 0;
const wc = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function Sc(s, t) {
  const e = s.scrollSnapList();
  return typeof t == "number" ? e.map(() => t) : t(e, s);
}
function _c(s, t) {
  const e = s.rootNode();
  return (t && t(e)) || e;
}
function In(s = {}) {
  let t,
    e,
    n,
    i,
    r = null,
    o = 0,
    l = !1,
    a = !1,
    c = !1,
    u = !1;
  function h(_, P) {
    e = _;
    const { mergeOptions: U, optionsAtMedia: W } = P,
      O = U(wc, In.globalOptions),
      w = U(O, s);
    if (((t = W(w)), e.scrollSnapList().length <= 1)) return;
    ((u = t.jump), (n = !1), (i = Sc(e, t.delay)));
    const { eventStore: N, ownerDocument: V } = e.internalEngine(),
      ct = !!e.internalEngine().options.watchDrag,
      it = _c(e, t.rootNode);
    (N.add(V, "visibilitychange", g),
      ct && e.on("pointerDown", b),
      ct && !t.stopOnInteraction && e.on("pointerUp", x),
      t.stopOnMouseEnter && N.add(it, "mouseenter", E),
      t.stopOnMouseEnter && !t.stopOnInteraction && N.add(it, "mouseleave", C),
      t.stopOnFocusIn && e.on("slideFocusStart", v),
      t.stopOnFocusIn &&
        !t.stopOnInteraction &&
        N.add(e.containerNode(), "focusout", m),
      t.playOnInit && m());
  }
  function d() {
    (e.off("pointerDown", b).off("pointerUp", x).off("slideFocusStart", v),
      v(),
      (n = !0),
      (l = !1));
  }
  function p() {
    const { ownerWindow: _ } = e.internalEngine();
    (_.clearTimeout(o),
      (o = _.setTimeout(k, i[e.selectedScrollSnap()])),
      (r = new Date().getTime()),
      e.emit("autoplay:timerset"));
  }
  function f() {
    const { ownerWindow: _ } = e.internalEngine();
    (_.clearTimeout(o), (o = 0), (r = null), e.emit("autoplay:timerstopped"));
  }
  function m() {
    if (!n) {
      if (y()) {
        c = !0;
        return;
      }
      (l || e.emit("autoplay:play"), p(), (l = !0));
    }
  }
  function v() {
    n || (l && e.emit("autoplay:stop"), f(), (l = !1));
  }
  function g() {
    if (y()) return ((c = l), v());
    c && m();
  }
  function y() {
    const { ownerDocument: _ } = e.internalEngine();
    return _.visibilityState === "hidden";
  }
  function b() {
    a || v();
  }
  function x() {
    a || m();
  }
  function E() {
    ((a = !0), v());
  }
  function C() {
    ((a = !1), m());
  }
  function S(_) {
    (typeof _ < "u" && (u = _), m());
  }
  function T() {
    l && v();
  }
  function M() {
    l && m();
  }
  function I() {
    return l;
  }
  function k() {
    const { index: _ } = e.internalEngine(),
      P = _.clone().add(1).get(),
      U = e.scrollSnapList().length - 1,
      W = t.stopOnLastSnap && P === U;
    if (
      (e.canScrollNext() ? e.scrollNext(u) : e.scrollTo(0, u),
      e.emit("autoplay:select"),
      W)
    )
      return v();
    m();
  }
  function L() {
    if (!r) return null;
    const _ = i[e.selectedScrollSnap()],
      P = new Date().getTime() - r;
    return _ - P;
  }
  return {
    name: "autoplay",
    options: s,
    init: h,
    destroy: d,
    play: S,
    stop: T,
    reset: M,
    isPlaying: I,
    timeUntilNext: L,
  };
}
In.globalOptions = void 0;
const Ec = {
  active: !0,
  breakpoints: {},
  snapped: "is-snapped",
  inView: "is-in-view",
  draggable: "is-draggable",
  dragging: "is-dragging",
  loop: "is-loop",
};
function qe(s) {
  return (Array.isArray(s) ? s : [s]).filter(Boolean);
}
function ze(s, t) {
  !s || !t.length || s.classList.remove(...t);
}
function cs(s, t) {
  !s || !t.length || s.classList.add(...t);
}
function Ln(s = {}) {
  let t,
    e,
    n,
    i,
    r = [],
    o = [];
  const l = ["select"],
    a = ["pointerDown", "pointerUp"],
    c = ["slidesInView"],
    u = { snapped: [], inView: [], draggable: [], dragging: [], loop: [] };
  function h(y, b) {
    e = y;
    const { mergeOptions: x, optionsAtMedia: E } = b,
      C = x(Ec, Ln.globalOptions),
      S = x(C, s);
    ((t = E(S)), (n = e.rootNode()), (i = e.slideNodes()));
    const { watchDrag: T, loop: M } = e.internalEngine().options,
      I = !!T;
    (t.loop && M && ((u.loop = qe(t.loop)), cs(n, u.loop)),
      t.draggable && I && ((u.draggable = qe(t.draggable)), cs(n, u.draggable)),
      t.dragging &&
        ((u.dragging = qe(t.dragging)), a.forEach((k) => e.on(k, p))),
      t.snapped &&
        ((u.snapped = qe(t.snapped)), l.forEach((k) => e.on(k, m)), m()),
      t.inView &&
        ((u.inView = qe(t.inView)), c.forEach((k) => e.on(k, v)), v()));
  }
  function d() {
    (a.forEach((y) => e.off(y, p)),
      l.forEach((y) => e.off(y, m)),
      c.forEach((y) => e.off(y, v)),
      ze(n, u.loop),
      ze(n, u.draggable),
      ze(n, u.dragging),
      f([], r, u.snapped),
      f([], o, u.inView),
      Object.keys(u).forEach((y) => {
        const b = y;
        u[b] = [];
      }));
  }
  function p(y, b) {
    (b === "pointerDown" ? cs : ze)(n, u.dragging);
  }
  function f(y = [], b = [], x) {
    const E = b.map((S) => i[S]),
      C = y.map((S) => i[S]);
    return (E.forEach((S) => ze(S, x)), C.forEach((S) => cs(S, x)), y);
  }
  function m() {
    const { slideRegistry: y } = e.internalEngine(),
      b = y[e.selectedScrollSnap()];
    r = f(b, r, u.snapped);
  }
  function v() {
    const y = e.slidesInView();
    o = f(y, o, u.inView);
  }
  return { name: "classNames", options: s, init: h, destroy: d };
}
Ln.globalOptions = void 0;
class xc extends nt {
  constructor(t) {
    (super(t), (this.events = { click: {} }));
    const [e] = this.$("viewport"),
      n = e || this.el;
    this.options = this.setOptions();
    const i = this.setPlugins();
    ((this.slider = Cn(n, this.options, i)),
      this.slider.on("resize", this.onSliderResize.bind(this)),
      this.setControls(),
      this.setDots(),
      this.setOnScroll(),
      this.setOnSelect(),
      this.setProgress(),
      this.setWatchDrag(),
      this.onSliderResize());
  }
  reInit(t = {}) {
    this.slider.reInit(t);
  }
  setOptions() {
    const t = {
      loop: !1,
      controls: !1,
      dots: !1,
      align: "start",
      autoplay: !1,
      direction: "ltr",
      startIndex: 0,
      skipSnaps: !1,
      watchSlides: !1,
      watchDrag: !1,
      onScroll: null,
      containScroll: "trimSnaps",
      inViewThreshold: 0.5,
      classes: !0,
      breakpoints: {},
    };
    try {
      const e = JSON.parse(this.el.dataset.config);
      return (this.el.removeAttribute("data-config"), Object.assign(t, e));
    } catch {
      return t;
    }
  }
  setPlugins() {
    const t = [];
    return (
      this.options.autoplay &&
        t.push(
          In({
            delay: Number(this.options.autoplay) * 1e3,
            stopOnInteraction: !0,
          }),
        ),
      this.options.classes &&
        t.push(
          Ln({
            selected: "-inView",
            draggabble: "-draggable",
            dragging: "-dragging",
          }),
        ),
      t
    );
  }
  onSliderResize() {
    const t = this.slider.internalEngine().scrollSnaps.length > 1;
    (this.el.classList[t ? "remove" : "add"]("-fixed"),
      this.slider.reInit({
        active: t,
        align: t ? this.options.align : "center",
        controls: t ? this.options.controls : !1,
        progress: t ? this.options.progress : !1,
      }));
  }
  setWatchDrag() {
    if (!this.options.watchDrag) return;
    const t = this.onDrag.bind(this);
    this.slider.on("select", t);
  }
  onDrag() {}
  setOnScroll() {
    if (!this.options.onScroll) return;
    const t = Vn(this[this.options.onScroll].bind(this), 50);
    (this.slider.on("scroll", t).on("select", t), t());
  }
  setOnSelect() {
    if (!this.options.onSelect) return;
    const t = Vn(this[this.options.onSelect].bind(this), 50);
    this.slider.on("select", t);
  }
  setControls() {
    if (!this.options.controls) return;
    const t = this.disablePrevAndNextBtns.bind(this);
    (this.slider.on("select", t).on("init", t),
      (this.events.click.nextBtn = "scrollNext"),
      (this.events.click.prevBtn = "scrollPrev"),
      (this.scrollNext = this.slider.scrollNext),
      (this.scrollPrev = this.slider.scrollPrev));
  }
  setDots() {
    if (!this.options.dots) return;
    const t = this.setSelectedDotBtn.bind(this);
    (this.slider.on("select", t).on("init", t),
      (this.events.click.dot = "selectDotBtn"),
      this.generateDotBtns());
  }
  generateDotBtns() {
    const t = document.querySelector("#dotTemplate").innerHTML,
      [e] = this.$("dotsContainer"),
      n = this.slider.scrollSnapList().reduce((i, r, o) => {
        const l = t.replace("{index}", `data-index="${o}"`);
        return i + l;
      }, "");
    e.innerHTML = n;
  }
  selectDotBtn(t) {
    const e = Number(t.currentTarget.dataset.index);
    this.slider.scrollTo(e);
  }
  setSelectedDotBtn() {
    const t = this.slider.previousScrollSnap(),
      e = this.slider.selectedScrollSnap(),
      n = this.$("dot");
    (n[t].classList.remove("-active"), n[e].classList.add("-active"));
  }
  disablePrevAndNextBtns() {
    const t = this.$("prevBtn"),
      e = this.$("nextBtn");
    (this.slider.canScrollPrev()
      ? t[0].removeAttribute("disabled")
      : t[0].setAttribute("disabled", "disabled"),
      this.slider.canScrollNext()
        ? e[0].removeAttribute("disabled")
        : e[0].setAttribute("disabled", "disabled"));
  }
  setProgress() {
    if (!this.options.progress) return;
    const [t] = this.$("bar");
    this.progress = t;
    const e = this.applyProgress.bind(this),
      n = this.slider.scrollSnapList();
    ((this.deltaProgress = 1 / n.length),
      this.slider.on("init", e).on("reInit", e).on("scroll", e));
  }
  applyProgress() {
    const { deltaProgress: t } = this,
      e = Math.max(0, Math.min(1, this.slider.scrollProgress() * (1 - t) + t));
    this.progress.style.transform = `translate3d(${e * 100}%,0px,0px)`;
  }
  onScroll() {}
  updateCarouselImage() {
    const t = this.slider.selectedScrollSnap(),
      n = this.$("image")[t];
    n && this.call("loadImage", { item: n, config: {} }, "Website", "website");
  }
}
class Tc extends nt {
  constructor(t) {
    (super(t),
      (this.events = { click: { summary: "onClick" } }),
      (this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1));
  }
  onClick(t) {
    (t.preventDefault(),
      (this.el.style.overflow = "hidden"),
      this.isClosing || !this.el.open
        ? this.open()
        : (this.isExpanding || this.el.open) && this.shrink(),
      this.call("update", null, "Scroll", "scroll"));
  }
  shrink() {
    const [t] = this.$("summary");
    this.isClosing = !0;
    const e = `${this.el.offsetHeight}px`,
      n = `${t.offsetHeight}px`;
    (this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [e, n] },
        {
          duration: 400,
          easing:
            "linear(0, 0.067, 0.1294, 0.1877, 0.2421, 0.2929, 0.3402, 0.3844, 0.4257, 0.4641, 0.5, 0.5335, 0.5647, 0.5939, 0.6211, 0.6464, 0.6701, 0.6922, 0.7128, 0.7321, 0.75, 0.7667, 0.7824, 0.7969, 0.8105, 0.8232, 0.8351, 0.8461, 0.8564, 0.866, 0.875, 0.8834, 0.8912, 0.8985, 0.9053, 0.9116, 0.9175, 0.9231, 0.9282, 0.933, 0.9375, 0.9417, 0.9456, 0.9492, 0.9526, 0.9558, 0.9588, 0.9615, 0.9641, 0.9665, 0.9688, 0.9708, 0.9728, 0.9746, 0.9763, 0.9779, 0.9794, 0.9808, 0.9821, 0.9833, 0.9844, 0.9854, 0.9864, 0.9873, 0.9882, 0.989, 0.9897, 0.9904, 0.991, 0.9916, 0.9922, 0.9927, 0.9932, 0.9937, 0.9941, 0.9945, 0.9948, 0.9952, 0.9955, 0.9958, 0.9961, 0.9964, 0.9966, 0.9968, 0.997, 0.9972, 0.9974, 0.9976, 0.9978, 0.9979, 0.998, 0.9982, 0.9983, 0.9984, 0.9985, 0.9986, 0.9987, 0.9988, 0.9989, 0.999, 1)",
        },
      )),
      (this.el.open = !1),
      (this.animation.onfinish = () => this.onAnimationFinish(!1)),
      (this.animation.oncancel = () => (this.isClosing = !1)));
  }
  open() {
    ((this.el.style.height = `${this.el.offsetHeight}px`),
      (this.el.open = !0),
      window.requestAnimationFrame(() => this.expand()));
  }
  expand() {
    const [t] = this.$("summary"),
      [e] = this.$("content");
    this.isExpanding = !0;
    const n = `${this.el.offsetHeight}px`,
      i = `${t.offsetHeight + e.offsetHeight}px`;
    (this.animation && this.animation.cancel(),
      (this.animation = this.el.animate(
        { height: [n, i] },
        {
          duration: 1200,
          easing:
            "linear(0, 0.0765, 0.1647, 0.2611, 0.3624, 0.4656, 0.568, 0.6672, 0.7614, 0.849, 0.9288, 1, 1.0619, 1.1144, 1.1574, 1.1911, 1.216, 1.2326, 1.2416, 1.2437, 1.2399, 1.2309, 1.2176, 1.201, 1.1818, 1.1608, 1.1388, 1.1163, 1.094, 1.0724, 1.0519, 1.0329, 1.0155, 1, 0.9865, 0.9751, 0.9657, 0.9584, 0.953, 0.9494, 0.9474, 0.947, 0.9478, 0.9498, 0.9526, 0.9563, 0.9604, 0.965, 0.9698, 0.9747, 0.9795, 0.9842, 0.9887, 0.9928, 0.9966, 1, 1.0029, 1.0054, 1.0075, 1.0091, 1.0102, 1.011, 1.0114, 1.0115, 1.0114, 1.0109, 1.0103, 1.0095, 1.0086, 1.0076, 1.0066, 1.0055, 1.0045, 1.0034, 1.0025, 1.0016, 1.0007, 1, 0.9994, 0.9988, 0.9984, 0.998, 0.9978, 0.9976, 0.9975, 0.9975, 0.9975, 0.9976, 0.9978, 0.9979, 0.9981, 0.9983, 0.9986, 0.9988, 0.999, 0.9993, 0.9995, 0.9997, 0.9998, 1, 1)",
        },
      )),
      (this.animation.onfinish = () => this.onAnimationFinish(!0)),
      (this.animation.oncancel = () => (this.isExpanding = !1)));
  }
  onAnimationFinish() {
    ((this.animation = null),
      (this.isClosing = !1),
      (this.isExpanding = !1),
      (this.el.style.height = this.el.style.overflow = ""));
  }
}
class xr extends nt {
  constructor(t) {
    (super(t),
      (this.errors = {}),
      (this.state = !1),
      (this.containerScroll = window),
      (this.loading = !1),
      (this.timeouts = []),
      (this.events = { click: { submit: "onSearch" } }));
  }
  init() {
    setTimeout(() => {
      this.createRecaptchaScript();
    }, 2e3);
  }
  destroy() {
    clearInterval(this.interval);
  }
  createRecaptchaScript() {
    const [t] = this.$("recaptcha");
    if (
      ((this.recaptchaKey = t.dataset.key),
      t.removeAttribute("data-key"),
      !this.recaptchaKey)
    )
      return;
    const e = va(
      `https://www.google.com/recaptcha/api.js?render=${this.recaptchaKey}`,
      { id: "recaptcha-id" },
    );
    e.onload = () => {
      grecaptcha.ready(() => {
        this.initRecaptcha();
      });
    };
  }
  initRecaptcha() {
    ((this.interval = setInterval(this.setRecaptcha.bind(this), 119 * 1e3)),
      this.setRecaptcha());
  }
  setRecaptcha() {
    const [t] = this.$("recaptcha");
    grecaptcha.execute(this.recaptchaKey, { action: "homepage" }).then((e) => {
      t.value = e;
    });
  }
  onSearch(t) {
    if (this.disabledSubmit) {
      t.preventDefault();
      return;
    }
    ((this.disabledSubmit = !0),
      window.requestAnimationFrame(() => {
        (this.clearCallbacks(),
          t.currentTarget.setAttribute("aria-disabled", "true"));
      }),
      t.currentTarget.blur(),
      this.el.checkValidity() && (t.preventDefault(), this.sendForm(this.el)));
  }
  sendForm(t) {
    (this.cleanErrors(),
      window.requestAnimationFrame(() => {
        this.el.classList.add("-loading");
      }),
      (this.loading = !0),
      (this.state = null),
      fetch(t.action, {
        method: "POST",
        responseType: "json",
        headers: { "Cache-Control": "no-cache", "X-Requested-With": "post" },
        body: new FormData(this.el),
      })
        .then(async (e) => {
          const n = await e.json();
          this.formSent(n);
        })
        .catch((e) => {
          this.errorForm(e);
        }));
  }
  setCallback(t, e) {
    const n = document.createElement("div");
    (n.setAttribute("class", "m-formCallback"),
      (n.innerHTML = `<p class="tx-pxsmall">${t}</p><div class="a-cross"></div>`),
      e
        ? (this.resetInput(), n.classList.add("-success"))
        : n.classList.add("-error"),
      window.requestAnimationFrame(() => {
        (this.el.appendChild(n), this.el.classList.remove("-loading"));
      }),
      n.addEventListener("click", this.clearCallback.bind(this, n)),
      this.timeouts.push({
        el: n,
        timeout: setTimeout(this.clearCallback.bind(this, n), 15e3),
      }));
  }
  clearCallback(t) {
    const e = this.timeouts.findIndex((i) => i.el === t);
    if (e === -1) return;
    const n = this.timeouts[e];
    (clearTimeout(n.timeout),
      window.requestAnimationFrame(() => {
        n.el.classList.add("-leave");
      }),
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          n.el.remove();
        });
      }, 700),
      this.timeouts.splice(e, 1));
  }
  clearCallbacks() {
    (this.timeouts.forEach((t) => {
      (clearTimeout(t.timeout),
        window.requestAnimationFrame(() => {
          t.el.remove();
        }));
    }),
      (this.timeouts = []));
  }
  cleanErrors() {
    this.$("invalid").forEach((e) => {
      window.requestAnimationFrame(() => {
        (e.parentNode.classList.remove("-error"), e.remove());
      });
    });
  }
  formSent(t) {
    if (t.invalid) {
      this.errorForm(t);
      return;
    }
    ((this.state = !0),
      this.setCallback(t.message, t.sent),
      this.enableForm(),
      this.setRecaptcha());
  }
  errorForm(t) {
    (this.setCallback(t.message, t.success),
      (this.state = !1),
      this.setRecaptcha(),
      this.enableForm(),
      t.invalid && this.setErrors(t.invalid));
  }
  setErrors(t) {
    ((this.errors = t),
      Array.from(Object.entries(t)).forEach(([n, i]) => {
        const r = this.$(n)[0];
        if (r) {
          const o = document.createElement("p");
          ((o.innerHTML = i),
            r.classList.add("-error"),
            o.setAttribute("class", "a-pxsmall a-inputField__error"),
            o.setAttribute(this.mAttr, "invalid"),
            window.requestAnimationFrame(() => {
              r.append(o);
            }));
        }
      }));
  }
  enableForm() {
    (window.requestAnimationFrame(() => {
      this.$("submit")[0].removeAttribute("aria-disabled", "false");
    }),
      (this.disabledSubmit = !1));
  }
  resetInput() {
    this.el.querySelectorAll("input, textarea, select").forEach((e) => {
      if (e.type !== "hidden") {
        if (e.type === "radio" || e.type === "checkbox") {
          e.checked = !1;
          return;
        }
        e.value = "";
      }
    });
  }
}
class Cc extends nt {
  constructor(t) {
    (super(t), (this.events = { click: "onClick" }));
  }
  onClick() {
    const t = this.el.dataset.action.split(","),
      e = { el: this.el };
    this.call(t[0], e, t[1], t[2]);
  }
}
class Ic extends nt {
  constructor(t) {
    (super(t),
      (this.updating = !1),
      (this.events = { click: { submit: "onSubmit" } }));
  }
  getAction(t) {
    return t;
  }
  validateForm() {
    return !0;
  }
  onSubmit(t) {
    (t.preventDefault(), this.update());
  }
  update() {
    if (this.updating) return;
    this.updating = !0;
    const [t] = this.$("form"),
      e = new FormData(t);
    if (!this.validateForm(e)) {
      this.updating = !1;
      return;
    }
    (this.onUpdate(),
      fetch(this.getAction(t.action, e), {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "fetch",
        },
      })
        .then(this.afterUpdate.bind(this))
        .catch(this.onError.bind(this)));
  }
  async afterUpdate(t) {
    const e = await t.json();
    (console.log(e), (this.updating = !1));
  }
  onError(t) {
    console.log(t);
  }
  onUpdate() {}
}
class Lc extends nt {
  constructor(t) {
    (super(t),
      (this.state = !1),
      (this.open = this.change.bind(this, !0)),
      (this.close = this.change.bind(this, !1)),
      (this.toast = null),
      (this.events = { click: "onClick" }));
  }
  onClick(t) {
    const { target: e } = t,
      { action: n } = e.dataset;
    n && this[n] && this[n](e);
  }
  toggle() {
    this.change(!this.state);
  }
  change(t) {
    if (this.state === t) return;
    this.state = t;
    const [e] = this.$("aside"),
      [n] = this.$("overlay"),
      [i] = this.$("button");
    ((e.style.transform = `translateX(${t ? 100 : 0}%)`),
      (n.style.display = t ? "block" : "none"),
      (i.innerText = t ? "Close" : "Menu"));
  }
  async copy(t) {
    const e = t.dataset.copy;
    if (window.navigator.clipboard && window.isSecureContext)
      await window.navigator.clipboard.writeText(e);
    else {
      const n = document.createElement("textarea");
      ((n.value = e),
        (n.style.position = "absolute"),
        (n.style.left = "-99999999px"),
        document.body.prepend(n),
        n.select());
      try {
        (document.execCommand("copy"), this.addCopyToast(e));
      } catch (i) {
        console.log(i);
      } finally {
        n.remove();
      }
    }
  }
  addCopyToast(t) {
    if ((clearTimeout(this.toastTimeout), this.toast)) {
      const e = this.toast.querySelector("p");
      e.innerText = t;
    } else {
      const e = document.createElement("div");
      (e.setAttribute("class", "t-styleguide__toast"),
        e.setAttribute("data-action", "removeCopyToast"));
      const n = document.createElement("h3");
      n.innerText = "Texte copié";
      const i = document.createElement("p");
      ((i.innerText = t),
        e.append(n),
        e.append(i),
        this.el.append(e),
        (this.toast = e));
    }
    this.toastTimeout = setTimeout(this.removeCopyToast.bind(this), 5e3);
  }
  removeCopyToast() {
    (clearTimeout(this.toastTimeout), this.toast.remove(), (this.toast = null));
  }
}
function Ac(s, t, e) {
  return Math.min(Math.max(s, t), e);
}
class kc extends nt {
  constructor(t) {
    (super(t),
      (this.events = { mousedown: "onMouseDown", touchstart: "onMouseDown" }),
      (this.positions = {
        start: 0,
        previousDelta: 0,
        current: 0,
        target: 0,
        delta: 0,
      }),
      (this.limits = [0, 0]),
      (this.y = 0),
      (this.isMobile = window.innerWidth < 1024),
      (this.isGrabbing = !1),
      (this.isVisible = !0));
  }
  init() {
    (this.addEvents(),
      (this.el.style.transform = this.isMobile
        ? "translateY(120%) translateX(50%)"
        : "translateY(120%)"),
      (this.height = this.el.getBoundingClientRect().height),
      (this.limits[1] = this.isMobile ? this.height - 20 : this.height - 30));
  }
  show() {
    Dt(this.el, {
      duration: 1200,
      delay: this.isMobile ? 0 : 2e3,
      ease: "outExpo",
      translateY: ["120%", "0%"],
      translateX: this.isMobile ? ["50%", "50%"] : ["0%", "0%"],
    });
  }
  onMouseDown(t) {
    var e;
    (this.call("toggle", !1, "Scroll", "scroll"),
      (this.isGrabbing = !0),
      (this.positions.start =
        t.pageY || ((e = t.touches) == null ? void 0 : e[0].pageY)),
      this.el.classList.add("-isGrabbing"));
  }
  onMouseMove(t) {
    var e;
    this.isGrabbing &&
      ((this.positions.previousDelta = this.positions.delta),
      (this.positions.delta =
        (this.positions.start -
          (t.pageY || ((e = t.touches) == null ? void 0 : e[0].pageY))) *
        -1),
      this.updatePosition());
  }
  onMouseUp() {
    if ((this.call("toggle", !0, "Scroll", "scroll"), !this.isGrabbing)) return;
    ((this.isGrabbing = !1), this.el.classList.remove("-isGrabbing"));
    const e =
      this.positions.delta > this.positions.previousDelta ? this.limits[1] : 0;
    window.requestAnimationFrame(() => {
      Dt(this.el, {
        duration: 800,
        ease: "outElastic(1,0.6)",
        translateY: `${e}px`,
        translateX: this.isMobile ? "50%" : "0",
        onComplete: () => {
          this.positions.current = e;
        },
      });
    });
  }
  addEvents() {
    (document.addEventListener("mouseup", this.onMouseUp.bind(this)),
      document.addEventListener("mousemove", this.onMouseMove.bind(this)),
      document.addEventListener("touchend", this.onMouseUp.bind(this)),
      document.addEventListener("touchmove", this.onMouseMove.bind(this)));
  }
  removeEvents() {
    (document.removeEventListener("mouseup", this.onMouseUp.bind(this)),
      document.removeEventListener("mousemove", this.onMouseMove.bind(this)),
      document.removeEventListener("touchend", this.onMouseUp.bind(this)),
      document.removeEventListener("touchmove", this.onMouseMove.bind(this)));
  }
  updatePosition() {
    const t = Ac(
      this.positions.current + this.positions.delta,
      this.limits[0],
      this.limits[1],
    );
    this.el.style.transform = `translateY(${t}px)${this.isMobile ? " translateX(50%)" : ""}`;
  }
  destroy() {
    this.removeEvents();
  }
  resize() {
    ((this.isMobile = window.innerWidth < 1024),
      (this.height = this.el.getBoundingClientRect().height),
      (this.limits[1] = this.isMobile ? this.height - 20 : this.height - 30));
  }
}
class Mc extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        mousemove: "onMouseMove",
        mouseenter: { card: "onMouseEnter" },
      }),
      (this.isEnabled = !0),
      (this.maxPower = 15),
      (this.mousePosition = [0, 0]),
      (this.isFeaturedShown = !1),
      (this.inAnimated = [!1, !1, !1]));
  }
  init() {
    (tt.classList.add("-hideLogo"), (this.isEnabled = !0));
  }
  onMouseMove(t) {
    this.isEnabled &&
      ((this.mousePosition[0] = t.clientX),
      (this.mousePosition[1] = t.clientY));
  }
  onMouseEnter({ target: t, clientX: e, clientY: n }) {
    if (!this.isEnabled) return;
    const i = new window.DOMMatrix(window.getComputedStyle(t).transform).a,
      [r, o] = this.mousePosition,
      l = e - r,
      a = n - o,
      c = l / window.innerWidth,
      u = a / window.innerHeight,
      h = 200,
      d = 200,
      p = { x: 0, y: 0 },
      f = { x: c * h, y: u * h },
      m = 0.01,
      v = 0.9,
      g = () => {
        ((f.x += -p.x * m),
          (f.y += -p.y * m),
          (f.x *= v),
          (f.y *= v),
          (p.x += f.x),
          (p.y += f.y),
          (p.x = Math.max(-d, Math.min(d, p.x))),
          (p.y = Math.max(-d, Math.min(d, p.y))),
          (t.style.transform = `translate(${p.x}px, ${p.y}px) scale(${i})`),
          Math.hypot(f.x, f.y) > 0.05 || Math.hypot(p.x, p.y) > 0.5
            ? window.requestAnimationFrame(g)
            : (t.style.transform = `translate(0px, 0px) scale(${i})`));
      };
    window.requestAnimationFrame(g);
  }
  onSectionIntersect(t) {
    t.from !== "start" &&
      (t.way === "enter"
        ? ((this.isEnabled = !0),
          tt.classList.add("-hideLogo"),
          this.el.classList.add("-active"))
        : ((this.isEnabled = !1),
          tt.classList.remove("-hideLogo"),
          this.el.classList.remove("-active"),
          !this.isFeaturedShown &&
            window.innerWidth < 1024 &&
            ((this.isFeaturedShown = !0),
            this.call("show", null, "FeaturedProject", "featured"))),
      this.call("onSectionIntersect", t, "Website", "website"));
  }
}
class Pc extends ss {
  constructor(t) {
    (super(t),
      (this.events = {
        click: {
          dot: "onClickDot",
          prev: "goPrev",
          next: "goNext",
          close: "closeModale",
        },
      }),
      (this.close = this.closeModale),
      (this.currentIndex = null),
      (this.length = this.$("dot").length),
      (this.isMobile = window.innerWidth <= 1024));
  }
  onClickPin({ el: t }) {
    this.toggle();
    const e = parseInt(t.dataset.index, 10);
    (this.currentIndex !== null && this.hideCard(this.currentIndex),
      this.showCard(e),
      this.updateButtonsBackground(e),
      this.updateDots(null, e),
      (this.currentIndex = e));
  }
  updateButtonsBackground(t) {
    const [e] = this.$("prev"),
      [n] = this.$("next"),
      i = this.$("card"),
      r = (t - 1 + this.length) % this.length,
      o = (t + 1) % this.length,
      l = i[r].querySelector("img"),
      a = i[o].querySelector("img");
    if (!this.isMobile) {
      const c = l.getAttribute("data-src") ?? l.src,
        u = a.getAttribute("data-src") ?? a.src;
      ((e.style.backgroundImage = `url(${c})`),
        (n.style.backgroundImage = `url(${u})`));
    }
  }
  onClickDot({ target: t }) {
    const e = parseInt(t.dataset.index, 10);
    e !== this.currentIndex &&
      (this.currentIndex != null &&
        this.hideCard(
          this.currentIndex,
          e > this.currentIndex ? "next" : "prev",
        ),
      this.showCard(e, e > this.currentIndex ? "next" : "prev"),
      this.updateDots(this.currentIndex, e),
      (this.currentIndex = e));
  }
  showCard(t, e = "next") {
    const i = this.$("card")[t];
    if (!i) return;
    const r = i.querySelector(".m-teamPopin_leftCard"),
      o = i.querySelector(".m-teamPopin_rightCard");
    Dt([r, o], {
      rotateZ: [
        () => `${_t.random(-45, 45)}deg`,
        () => `${_t.random(-7.5, 7.5)}deg`,
      ],
      translateX: [
        `${e === "next" ? "-400%" : "400%"}`,
        () => `${_t.random(-1, 1)}%`,
      ],
      translateY: [`${_t.random(-50, 50)}%`, "-50%"],
      rotateY: ["75deg", "0deg"],
      duration: 1200,
    });
  }
  hideCard(t, e = "next") {
    const i = this.$("card")[t];
    if (!i) return;
    const r = i.querySelector(".m-teamPopin_leftCard"),
      o = i.querySelector(".m-teamPopin_rightCard");
    Dt([r, o], {
      translateX: `${e === "next" ? "500%" : "-500%"}`,
      translateY: "-50%",
      duration: 1200,
    });
  }
  closeModale() {
    (this.change(!1),
      this.hideCard(this.currentIndex),
      this.updateDots(this.currentIndex, null),
      (this.currentIndex = null),
      this.call("pausePlayer", "AudioPlayer"));
  }
  goPrev() {
    const t = (this.currentIndex - 1 + this.length) % this.length;
    (this.currentIndex != null && this.hideCard(this.currentIndex, "prev"),
      this.showCard(t, "prev"),
      this.updateDots(this.currentIndex, t),
      this.updateButtonsBackground(t),
      (this.currentIndex = t),
      this.call("pausePlayer", "AudioPlayer"));
  }
  goNext() {
    const t = (this.currentIndex + 1) % this.length;
    (this.showCard(t),
      this.currentIndex != null && this.hideCard(this.currentIndex),
      this.updateDots(this.currentIndex, t),
      this.updateButtonsBackground(t),
      (this.currentIndex = t),
      this.call("pausePlayer", "AudioPlayer"));
  }
  updateDots(t, e) {
    var i, r;
    const n = this.$("dot");
    ((i = n[t]) == null || i.classList.remove("-active"),
      (r = n[e]) == null || r.classList.add("-active"));
  }
  change(t) {
    if (this.visible === t) return;
    ((this.visible = t),
      this.scrollBehaviour(t),
      this.toggleEvents(t),
      this.el.setAttribute("aria-hidden", !t));
    let e = () => {};
    const [n] = this.$("overlay");
    (this.call("toggle", !t, "Scroll", "scroll"),
      t
        ? ((this.el.style.display = "flex"),
          window.requestAnimationFrame(() => {
            (this.el.classList.add("-isOpen"),
              (this.activeElement = document.activeElement),
              (e = () => {
                (n.removeEventListener("transitionend", e, !1),
                  this.setFocusToFirstNode(),
                  this.afterChange(!0));
              }));
          }))
        : (this.el.classList.remove("-isOpen"),
          (e = () => {
            (n.removeEventListener("transitionend", e, !1),
              this.el.style.removeProperty("display"),
              this.afterChange(!1));
          })),
      n.addEventListener("transitionend", e, !1));
  }
}
class Oc extends nt {
  constructor(t) {
    (super(t), (this.events = {}));
  }
  init() {
    this.setTimeline();
  }
  setTimeline() {
    const [t] = this.$("background"),
      [e] = this.$("shape"),
      [n] = this.$("poly"),
      [i] = this.$("text1"),
      [r] = this.$("image"),
      o = i.querySelectorAll(".o-homeManifest_word"),
      [l] = this.$("text2"),
      a = l.querySelectorAll(".o-homeManifest_word");
    ((this.tl = vs({
      autoplay: !1,
      onUpdate: (c) => {
        (c.progress > 0.25
          ? tt.classList.add("-postManifest")
          : tt.classList.remove("-postManifest"),
          c.progress > 0.6
            ? (e.style.display = "none")
            : (e.style.display = "block"));
      },
    })),
      this.tl.add(t, { scale: [0, 1], borderRadius: [40, 0], duration: 400 }),
      this.tl.set(e, { opacity: [0, 1] }),
      this.tl.add(
        o,
        { translateY: ["120%", 0], delay: Qs(40), duration: 300 },
        "125",
      ),
      this.tl.add(o, { translateY: [0, "-120%"], duration: 350 }),
      this.tl.add(
        n,
        {
          strokeDashoffset: [2e3, 0],
          strokeWidth: [140, 225],
          duration: 350,
          easing: "easeInOutCubic",
        },
        "<<",
      ),
      this.tl.set(r, { opacity: [0, 1] }, "-=125"),
      this.tl.set(e, {
        opacity: 0,
        onBegin: () => {
          this.call("setBackgroundColor", "gray", "Website", "website");
        },
      }),
      this.tl.add(r, {
        scale: 20,
        rotate: [0, 120],
        duration: 600,
        easing: "easeOutCubic",
      }),
      this.tl.add(
        a,
        { translateY: ["120%", 0], delay: Qs(40), duration: 400 },
        "-=625",
      ),
      this.tl.set(t, { opacity: [1, 0] }, "-=200"));
  }
  onScrollProgress(t) {
    this.tl && this.tl.seek(this.tl.duration * t);
  }
  onSectionIntersect(t) {
    (t.way === "leave" && t.from === "end"
      ? tt.classList.add("-postManifest")
      : tt.classList.remove("-postManifest"),
      this.call("onSectionIntersect", t, "Website", "website"));
  }
}
class $c extends nt {
  constructor(t) {
    (super(t),
      (this.events = { click: { thumbnail: "onClickThumbnailItem" } }),
      (this.isMobile = window.innerWidth < 1024),
      (this.currentIndex = 0),
      (this.cardsLength = this.$("projectCard").length),
      (this.cardWidth = 0),
      (this.centeredCardXPosition = []),
      (this.sizes = { height: 0, startAt: 0 }));
  }
  init() {
    if (this.isMobile) {
      const [t] = this.$("slider");
      t.addEventListener("scroll", this.onScrollSlider.bind(this), !1);
    }
  }
  destroy() {
    if (this.isMobile) {
      const [t] = this.$("slider");
      t.removeEventListener("scroll", this.onScrollSlider.bind(this), !1);
    }
  }
  onScrollProgress(t) {
    this.isMobile || this.onProgress(t);
  }
  onScrollSlider() {
    if (!this.isMobile) return;
    const [t] = this.$("slider"),
      { scrollLeft: e } = t,
      n = t.scrollWidth - t.clientWidth,
      i = e / n;
    this.onProgress(i);
  }
  onSectionIntersect(t) {
    const e = this.$("projectCard");
    (t.way === "enter"
      ? (e[this.currentIndex].classList.add("-active"),
        this.call(
          "startAuto",
          null,
          "ProjectCard",
          `project-card-${this.currentIndex}`,
        ))
      : (e[this.currentIndex].classList.remove("-active"),
        this.call(
          "stopAuto",
          null,
          "ProjectCard",
          `project-card-${this.currentIndex}`,
        )),
      this.call("onSectionIntersect", t, "Website", "website"));
  }
  onProgress(t) {
    var l, a, c, u;
    const e = Math.min(1, Math.max(0, t)),
      n = this.$("projectCard");
    this.isMobile ||
      n.forEach((h, d) => {
        const p = h.firstChild;
        this.updateCardPosition(p, d, e);
      });
    const i = Math.min(
      this.isMobile ? this.cardsLength : this.cardsLength - 1,
      Math.floor(e * this.cardsLength),
    );
    if (i === this.currentIndex) return;
    const r = this.$("thumbnail");
    (n[this.currentIndex].classList.remove("-active"),
      this.call(
        "stopAuto",
        null,
        "ProjectCard",
        `project-card-${this.currentIndex}`,
      ),
      (l = n[i]) == null || l.classList.add("-active"),
      (a = r[this.currentIndex]) == null || a.classList.remove("-active"),
      (c = r[i]) == null || c.classList.add("-active"),
      this.call("startAuto", null, "ProjectCard", `project-card-${i}`));
    const o = (u = n[i]) == null ? void 0 : u.getAttribute("data-color");
    ((this.el.dataset.color = o),
      this.call("setBackgroundColor", o, "Website", "website"),
      (this.currentIndex = i));
  }
  updateCardPosition(t, e, n) {
    const i = this.cardsLength - 1,
      r = -1 * this.cardWidth * n * (i + 1) - 15 * (i + 1) * n,
      o = Math.max(r, this.centeredCardXPosition[e]);
    t.style.transform = `translateX(${o}px)`;
  }
  onClickThumbnailItem(t) {
    const e = parseInt(t.currentTarget.dataset.index, 10);
    if (e !== this.currentIndex)
      if (this.isMobile) {
        const [n] = this.$("slider"),
          i = n.scrollWidth / this.cardsLength;
        n.scrollTo({ left: i * e - 15 * e, behavior: "smooth" });
      } else {
        const n =
          this.sizes.startAt +
          (this.sizes.height / this.cardsLength + 1) * (e + 0.1);
        this.call("scrollTo", { target: n }, "Scroll", "scroll");
      }
  }
  resize() {
    var e;
    ((this.sizes.height = this.el.offsetHeight),
      (this.sizes.startAt = this.el.offsetTop));
    const t = this.$("projectCard");
    (t.forEach((n, i) => {
      const r = n.parentNode.offsetWidth;
      this.centeredCardXPosition[i] = -1 * r * (i + 1) - 15 * (i + 1);
    }),
      (this.cardWidth = ((e = t[0]) == null ? void 0 : e.offsetWidth) || 0));
  }
}
class Rc extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        click: { button: "togglePlay" },
        loadedmetadata: { player: "onLoadedMetadata" },
        input: { slider: "onSliderInput" },
        change: { slider: "onSliderChange" },
        progress: { player: "displayBufferedAmount" },
      }),
      (this.raf = null),
      (this.state = 0));
  }
  init() {
    const [t] = this.$("player");
    (t.readyState > 0 &&
      (this.setSliderMax(),
      this.displayBufferedAmount(),
      this.displayAudioDuration()),
      t.addEventListener("ended", () => {
        this.pausePlayer();
      }));
  }
  destroy() {
    const [t] = this.$("player");
    t.removeEventListener("ended", this.togglePlay.bind(this));
  }
  setSliderMax() {
    const [t] = this.$("slider"),
      [e] = this.$("player");
    t.max = Math.floor(e.duration);
  }
  onSliderInput() {
    const [t] = this.$("timer"),
      [e] = this.$("slider"),
      [n] = this.$("player");
    ((t.textContent = this.calculateRemainingTime(e.value)),
      n.paused || window.cancelAnimationFrame(this.raf));
  }
  onSliderChange() {
    const [t] = this.$("player"),
      [e] = this.$("slider");
    ((t.currentTime = e.value),
      t.paused || window.requestAnimationFrame(this.whilePlaying.bind(this)));
  }
  pausePlayer() {
    this.state = 0;
    const [t] = this.$("player");
    (t == null || t.pause(),
      window.cancelAnimationFrame(this.raf),
      this.el.classList.remove("-isPlaying"));
  }
  togglePlay() {
    const [t] = this.$("player");
    (t &&
      (t.paused
        ? (t.play(),
          (this.state = 1),
          window.requestAnimationFrame(this.whilePlaying.bind(this)))
        : (t.pause(), window.cancelAnimationFrame(this.raf), (this.state = 0))),
      this.el.classList.toggle("-isPlaying", this.state === 1));
  }
  displayAudioDuration() {
    const [t] = this.$("timer");
    t.textContent = this.calculateRemainingTime();
  }
  calculateRemainingTime() {
    const [t] = this.$("player"),
      e = t.duration - t.currentTime,
      n = Math.floor(e / 60),
      i = Math.floor(e % 60),
      r = i < 10 ? `0${i}` : `${i}`;
    return `-${n}:${r}`;
  }
  displayBufferedAmount() {
    const [t] = this.$("player"),
      [e] = this.$("slider"),
      n = t.buffered;
    let i = 0;
    if (n && n.length > 0) {
      const r = n.length - 1,
        o = n.end(r);
      Number.isNaN(o) || (i = Math.floor(o));
    }
    this.el.style.setProperty("--buffered-width", `${(i / e.max) * 100}%`);
  }
  whilePlaying() {
    const [t] = this.$("timer"),
      [e] = this.$("player"),
      [n] = this.$("slider");
    ((n.value = Math.floor(e.currentTime)),
      (t.textContent = this.calculateRemainingTime(n.value)),
      this.el.style.setProperty(
        "--seek-before-width",
        `${(n.value / n.max) * 100}%`,
      ),
      (this.raf = window.requestAnimationFrame(this.whilePlaying.bind(this))));
  }
}
class Dc extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        click: { playButton: "togglePlay", soundButton: "toggleSound" },
      }),
      (this.state = { playing: 0, muted: 1 }));
  }
  init() {
    const [t] = this.$("video");
    t &&
      (this.el.addEventListener("mouseenter", this.onMouseEnter.bind(this)),
      this.el.addEventListener("mouseleave", this.onMouseLeave.bind(this)),
      t.addEventListener("ended", () => {
        ((this.state.playing = 0), this.el.classList.remove("-isPlaying"));
      }),
      t.addEventListener("loadedmetadata", () => {
        this.updateRemainingTime();
      }),
      t.addEventListener("timeupdate", () => {
        this.state.playing && this.updateRemainingTime();
      }));
  }
  destroy() {
    const [t] = this.$("video");
    t &&
      (this.el.removeEventListener("mouseenter", this.onMouseEnter.bind(this)),
      this.el.removeEventListener("mouseleave", this.onMouseLeave.bind(this)),
      t.removeEventListener("ended", () => {
        ((this.state.playing = 0), this.el.classList.remove("-isPlaying"));
      }),
      t.removeEventListener("loadedmetadata", () => {
        this.updateRemainingTime();
      }),
      t.removeEventListener("timeupdate", () => {
        this.state.playing && this.updateRemainingTime();
      }));
  }
  togglePlay() {
    const [t] = this.$("video");
    (t &&
      (t.paused
        ? (t.play(), (this.state.playing = 1))
        : (t.pause(), (this.state.playing = 0))),
      this.el.classList.toggle("-isPlaying", this.state.playing === 1));
  }
  updateRemainingTime() {
    const [t] = this.$("video"),
      [e] = this.$("timer");
    if (t && e) {
      const n = Math.floor(t.duration - t.currentTime),
        i = Math.floor(n / 60),
        r = n % 60;
      e.textContent = `-${i}:${r < 10 ? "0" : ""}${r}`;
    }
  }
  toggleSound() {
    const [t] = this.$("video");
    (t && ((t.muted = !t.muted), (this.state.muted = t.muted ? 1 : 0)),
      this.el.classList.toggle("-isMuted", this.state.muted === 1));
  }
  onMouseEnter() {
    const [t] = this.$("video");
    (t && this.state.playing === 0 && (t.play(), (this.state.playing = 1)),
      this.el.classList.toggle("-isPlaying", this.state.playing === 1));
  }
  onMouseLeave() {
    const [t] = this.$("video");
    (t && this.state.playing === 1 && (t.pause(), (this.state.playing = 0)),
      this.el.classList.toggle("-isPlaying", this.state.playing === 1));
  }
}
const _s = class _s extends nt {
  constructor(t) {
    (super(t),
      (this._id = ++_s._id),
      (this.events = {
        click: {
          prevButton: "onClickPrev",
          nextButton: "onClickNext",
          dot: "onClickDot",
        },
        mouseup: { loveButton: "onClickLove" },
        touchend: { loveButton: "onClickLove" },
      }),
      (this.currentIndex = 0),
      (this.duration = 5e3),
      (this.raf = null),
      (this.timeStart = 0),
      (this.paused = !1),
      (this.observer = null),
      (this.visible = !0));
  }
  init() {
    this.preloadCover(this.currentIndex);
  }
  setTitleCenter() {
    const [t] = this.$("title"),
      e = t.getBoundingClientRect();
    t.style.setProperty(
      "--center-y",
      `${this.el.clientHeight / 2 - e.height}px`,
    );
  }
  onClickPrev() {
    const t = this.$("cover"),
      e =
        this.currentIndex === null
          ? t.length - 1
          : (this.currentIndex - 1 + t.length) % t.length;
    this.updateCover(e);
  }
  onClickNext() {
    const t = this.$("cover"),
      e = this.currentIndex === null ? 0 : (this.currentIndex + 1) % t.length;
    this.updateCover(e);
  }
  onClickDot({ currentTarget: t }) {
    const e = parseInt(t.dataset.index, 10);
    Number.isNaN(e) || this.updateCover(e);
  }
  updateCover(t) {
    const e = this.$("cover"),
      n = e.length;
    if (!n || t === this.currentIndex) return;
    const i = this.currentIndex,
      r = ((t % n) + n) % n,
      o = i === n - 1 && r === 0,
      l = e[i],
      a = e[r];
    (l == null || l.classList.remove("-visible"),
      a == null || a.classList.add("-visible"),
      (this.currentIndex = r),
      this.preloadCover(),
      this.updateDots(0, o),
      this.restartAuto());
  }
  updateDots(t = 0, e = !1) {
    const n = this.$("dot");
    if (!n.length) return;
    const i = this.currentIndex;
    n.forEach((r, o) => {
      const l = o === i;
      (r.classList.toggle("-active", l),
        r.setAttribute("aria-current", l ? "true" : "false"));
      let a = 0;
      (e ? (a = l ? t : 0) : o < i ? (a = 1) : l ? (a = t) : (a = 0),
        r.style.setProperty("--story-progress", a));
    });
  }
  preloadCover(t = this.currentIndex + 1) {
    const n = this.$("cover")[t];
    if (!n) return;
    const i = n.querySelector("img[data-src]");
    i &&
      !i.classList.contains("loaded") &&
      this.call("loadImage", { item: i }, "Website", "website");
  }
  onVisibility() {
    document.hidden ? this.pauseAuto() : this.resumeAuto();
  }
  startAuto() {
    if (this.raf) return;
    ((this.paused = !1),
      (this.timeStart = performance.now()),
      this.preloadCover());
    const t = (e) => {
      if (this.paused || !this.visible) {
        this.raf = window.requestAnimationFrame(t);
        return;
      }
      const n = e - this.timeStart;
      let i = Math.min(1, n / this.duration);
      (this.updateDots(i),
        i >= 1 &&
          (this.onClickNext(),
          (this.timeStart = e),
          (i = 0),
          this.updateDots(i)),
        (this.raf = window.requestAnimationFrame(t)));
    };
    this.raf = window.requestAnimationFrame(t);
  }
  stopAuto() {
    (this.raf && window.cancelAnimationFrame(this.raf), (this.raf = null));
  }
  pauseAuto() {
    this.paused = !0;
  }
  resumeAuto() {
    (this.raf || this.startAuto(),
      (this.paused = !1),
      (this.timeStart = performance.now()),
      this.updateDots(0));
  }
  restartAuto() {
    ((this.timeStart = performance.now()), this.updateDots(0));
  }
  onClickLove({ target: t }) {
    const e = t.querySelector(".-love-fill"),
      n = Math.floor(Math.random() * 15) + 10;
    for (let i = 0; i < n; i += 1) {
      const r = e.cloneNode(!0),
        o = _t.random(-100, 100),
        l = _t.random(0, 100),
        a = _t.random(800, 1200);
      (Dt(r, {
        translateY: { from: -6, to: _t.random(-75, -225) },
        translateX: { from: -6, to: o, ease: "outCirc" },
        rotate: { from: o / 2, to: 0 },
        scale: _t.random(1, 1.05),
        opacity: [{ from: 1, to: 0, duration: 200, delay: a - 200 }],
        duration: a,
        delay: l,
        ease: "easeOutExpo",
        onComplete: () => {
          t.removeChild(r);
        },
      }),
        t.appendChild(r));
    }
  }
  destroy() {
    (this.stopAuto(),
      document.removeEventListener("visibilitychange", this.onVisibility),
      this.observer && this.observer.disconnect(),
      (this.observer = null));
  }
  resize() {
    this.setTitleCenter();
  }
};
Rn(_s, "_id", 0);
let sn = _s;
class Fc extends xr {
  constructor(t) {
    (super(t),
      (this.step = 0),
      (this.events = {
        click: {
          submit: "onSearch",
          next: "onNext",
          prev: "onPrev",
          choice: "onChoice",
          close: "onClose",
        },
        change: {
          input: "onChangeInput",
          checkbox: "onChangeCheckbox",
          rgpd: "onChangeRgpd",
        },
      }),
      (this.states = { currentStep: 0, checkboxValidated: !1 }));
  }
  init() {
    (this.resetInput(),
      setTimeout(() => {
        this.createRecaptchaScript();
      }, 2e3));
  }
  onChangeCheckbox() {
    const t = Array.from(this.$("checkbox")),
      e = this.$("next")[0],
      [n] = this.$("warn-choice"),
      i = t.some((r) => r.checked);
    (i
      ? (e.removeAttribute("aria-disabled"), e.removeAttribute("tabindex"))
      : (e.setAttribute("aria-disabled", "true"),
        e.setAttribute("tabindex", "-1")),
      n.classList.toggle("-hidden", i),
      (this.states.checkboxValidated = i));
  }
  onChangeInput() {
    let t = !0;
    (this.$("input").forEach((r) => {
      r.value.trim() === "" && r.hasAttribute("required") && (t = !1);
    }),
      this.states.userDontKnow && (this.$("rgpd")[0].checked || (t = !1)));
    const n = this.$("next")[1],
      i = this.$("submit")[0];
    t
      ? (n.removeAttribute("aria-disabled"),
        i.removeAttribute("aria-disabled"),
        n.removeAttribute("tabindex"),
        i.removeAttribute("tabindex"))
      : (n.setAttribute("aria-disabled", "true"),
        i.setAttribute("aria-disabled", "true"),
        n.setAttribute("tabindex", "-1"),
        i.setAttribute("tabindex", "-1"));
  }
  onChangeRgpd() {
    console.log("change rgpd");
    const t = this.$("fakeCheckbox"),
      [e] = this.$("rgpd");
    (t.forEach((n) => {
      n.classList.toggle("-checked", e.checked);
    }),
      this.states.currentStep > 0 && this.onChangeInput());
  }
  onPrev(t) {
    t.preventDefault();
    const e = Number(t.target.dataset.index),
      n = this.$("step");
    n[e].classList.remove("-active");
    const r = n[e - 1];
    r && (r.classList.add("-active"), (this.states.currentStep = e - 1));
  }
  onNext(t) {
    const e = Number(t.target.dataset.index);
    if (
      (t.preventDefault(),
      e === 0 && !this.states.checkboxValidated && this.onChangeCheckbox(),
      t.target.getAttribute("aria-disabled"))
    )
      return;
    const n = this.$("step"),
      i = n[e],
      r = e + 1;
    this.states.currentStep = r;
    const o = this.validateStep(i);
    if (o.length > 0) {
      this.setStepErrors(i, o);
      return;
    }
    this.updateStepContent(r);
    const l = n[r];
    (l && (i.classList.remove("-active"), l.classList.add("-active")),
      this.cleanStepErrors(i));
  }
  updateStepContent(t) {
    if (
      ((this.states.userDontKnow = !1), (this.states.userHiring = !1), t === 1)
    ) {
      (this.$("checkbox").forEach((a) => {
        (a.checked &&
          a.value === "idontknow" &&
          (this.states.userDontKnow = !0),
          a.checked && a.value === "hiring" && (this.states.userHiring = !0));
      }),
        this.$("conditional-field").forEach((a, c) => {
          const u = a.querySelector("input");
          c === 0 && this.states.userHiring
            ? ((u.required = !1), a.classList.add("-hidden"))
            : this.states.userDontKnow
              ? ((u.required = !1),
                a.classList.toggle("-hidden", this.states.userDontKnow))
              : ((u.required = !0), a.classList.toggle("-hidden", !1));
        }));
      const i = this.$("next")[1],
        r = this.$("submit")[0],
        o = this.$("legend"),
        l = this.$("fakeCheckbox")[0];
      (o[0].classList.toggle("-hidden", this.states.userDontKnow),
        o[1].classList.toggle("-hidden", !this.states.userDontKnow),
        l.classList.toggle("-hidden", !this.states.userDontKnow),
        i.classList.toggle("-hidden", this.states.userDontKnow),
        r.classList.toggle("-hidden", !this.states.userDontKnow));
    }
  }
  validateCheckboxes() {
    const t = Array.from(this.$("checkbox")),
      e = [];
    return (
      (this.states.checkboxValidated = t.some((n) => n.checked)),
      this.states.checkboxValidated || e.push("services"),
      e
    );
  }
  validateStep(t) {
    if (t === 1) return this.validateCheckboxes();
    const e = document.createElement("form");
    e.appendChild(t.cloneNode(!0));
    const n = new FormData(e),
      i = t.dataset.inputs ? t.dataset.inputs.split(",") : [],
      r = [];
    for (let o = i.length - 1; o >= 0; o -= 1) {
      const l = i[o];
      n.getAll(l) || r.push(l);
    }
    return r;
  }
  getUniqueInputs(t) {
    const e = Array.from(t),
      n = [],
      i = [];
    return (
      e.forEach((r) => {
        n.includes(r.name) || (i.push(r), n.push(r.name));
      }),
      i
    );
  }
  setStepErrors(t = null, e = []) {
    const n = t.querySelectorAll(
      'input:not([type="hidden"]), textarea, select',
    );
    if (
      (this.getUniqueInputs(n).forEach((r) => {
        r.closest(".a-inputField").classList.toggle(
          "-error",
          e.includes(r.name),
        );
      }),
      t === 1)
    ) {
      const [r] = this.$("warn-choice");
      r.classList.toggle("-hidden", !1);
    }
  }
  cleanStepErrors(t = null) {
    const e = t.querySelectorAll(
      'input:not([type="hidden"]), textarea, select',
    );
    this.getUniqueInputs(e).forEach((r) => {
      var o;
      (o = r.closest(".a-inputField")) == null || o.classList.remove("-error");
    });
    const i = t.querySelector("[data-module-multiselect]");
    if (i) {
      let r = !1;
      for (const o of i.querySelectorAll("input"))
        if (o.checked) {
          r = !0;
          break;
        }
      r && i.classList.remove("-error");
    }
  }
  cleanErrors() {
    this.cleanStepErrors(this.el);
  }
  setErrors(t) {
    this.setStepErrors(this.el, Object.keys(t));
  }
  errorForm(t) {
    (this.setCallback(t.message, t.success),
      this.setRecaptcha(),
      this.enableForm(),
      t.invalid && this.setErrors(t.invalid));
  }
  enableForm() {
    (window.requestAnimationFrame(() => {
      this.$("submit").forEach((e) => {
        e.removeAttribute("aria-disabled");
      });
    }),
      (this.disabledSubmit = !1));
  }
  setCallback(t, e) {
    (e
      ? (this.resetInput(), this.resetForm(), this.el.classList.add("-success"))
      : this.el.classList.add("-error"),
      window.requestAnimationFrame(() => {
        this.el.classList.remove("-loading");
      }));
  }
  resetForm() {
    (this.el.reset(),
      (this.states.currentStep = 0),
      (this.states.checkboxValidated = 0),
      this.$("step").forEach((i, r) => {
        r === 0 ? i.classList.add("-active") : i.classList.remove("-active");
      }));
    const e = this.$("fakeCheckbox"),
      [n] = this.$("rgpd");
    ((n.checked = !1),
      e.forEach((i) => {
        i.classList.toggle("-checked", n.checked);
      }));
  }
  onSearch(t) {
    const e = t.currentTarget;
    if (this.disabledSubmit || e.getAttribute("aria-disabled")) {
      t.preventDefault();
      return;
    }
    ((this.disabledSubmit = !0),
      t.preventDefault(),
      window.requestAnimationFrame(() => {
        (this.clearCallbacks(),
          t.currentTarget.setAttribute("aria-disabled", "true"));
      }),
      t.currentTarget.blur(),
      this.sendForm(this.el));
  }
}
class Nc extends ss {
  constructor(t) {
    (super(t),
      (this.events = { scroll: "onScroll" }),
      (this.close = this.onClose.bind(this)));
  }
  onClose() {
    const [t] = this.$("form");
    (t.classList.remove("-success"), this.change(!1));
  }
  change(t) {
    if (this.visible === t) return;
    ((this.visible = t),
      this.scrollBehaviour(t),
      this.toggleEvents(t),
      this.el.setAttribute("aria-hidden", !t));
    const [e] = this.$("form");
    let n = () => {};
    (this.call("toggle", !t, "Scroll", "scroll"),
      t
        ? ((this.el.style.display = "block"),
          window.requestAnimationFrame(() => {
            (this.el.classList.add("-isOpen"),
              (this.activeElement = document.activeElement),
              (n = () => {
                (e.removeEventListener("transitionend", n, !1),
                  this.setFocusToFirstNode(),
                  this.afterChange(!0));
              }));
          }))
        : (this.el.classList.remove("-isOpen"),
          (n = () => {
            (e.removeEventListener("transitionend", n, !1),
              this.el.style.removeProperty("display"),
              this.afterChange(!1));
          })),
      e.addEventListener("transitionend", n, !1));
  }
  onScroll() {
    (console.log("scrol"),
      this.el.querySelector("input[type='text']:focus").length > 0 &&
        this.el.focus());
  }
}
class qc extends ss {
  constructor(t) {
    (super(t), (this.events = {}), (this.close = this.onClose.bind(this)));
  }
  toggle({ el: t }) {
    (t.nextElementSibling && this.copyContent(t.nextElementSibling),
      this.change(!this.visible));
  }
  copyContent(t) {
    const [e] = this.$("content");
    e.innerHTML = t.innerHTML;
  }
  onClose() {
    this.change(!1);
  }
}
class zc extends nt {
  constructor(t) {
    (super(t), (this.events = {}), (this.once = !1));
  }
  onSectionIntersect(t) {
    (t.way === "enter"
      ? (tt.classList.add("-hideLogo"),
        (this.once = !0),
        this.once && this.el.classList.add("-once"))
      : tt.classList.remove("-hideLogo"),
      this.call("onSectionIntersect", t, "Website", "website"));
  }
}
class Bc extends ss {
  constructor(t) {
    (super(t), (this.events = {}));
  }
  change(t) {
    if (this.visible === t) return;
    ((this.visible = t),
      this.scrollBehaviour(t),
      this.toggleEvents(t),
      this.el.setAttribute("aria-hidden", !t));
    const [e] = this.$("overlay");
    (this.call("toggle", !t, "Scroll", "scroll"),
      t
        ? ((this.el.style.display = "flex"),
          this.setFocusToFirstNode(),
          this.afterChange(!0),
          window.requestAnimationFrame(() => {
            (tt.classList.add("-isWhatsAppPopinOpened"),
              Dt(e, { opacity: [0, 1], duration: 400, easing: "easeOutQuad" }));
          }))
        : (tt.classList.remove("-isWhatsAppPopinOpened"),
          Dt(e, {
            opacity: 0,
            duration: 400,
            easing: "easeOutQuad",
            onComplete: () => {
              (this.el.style.removeProperty("display"),
                this.activeElement &&
                  this.activeElement.focus &&
                  this.activeElement.focus(),
                this.afterChange(!1));
            },
          })));
  }
}
class Uc extends nt {
  constructor(t) {
    (super(t), (this.isMobile = window.innerWidth < 1024));
    const e = this.isMobile
      ? {}
      : { click: { anchor: "onClickExpertiseItem" } };
    ((this.events = e),
      (this.sizes = { height: 0, startAt: 0 }),
      (this.currentIndex = 0),
      (this.length = this.$("expertise-item").length));
  }
  init() {
    if (this.isMobile) {
      const [t] = this.$("slider");
      t.addEventListener("scroll", this.onScrollSlider.bind(this), !1);
    }
  }
  destroy() {
    if (this.isMobile) {
      const [t] = this.$("slider");
      t.removeEventListener("scroll", this.onScrollSlider.bind(this), !1);
    }
  }
  onClickExpertiseItem(t) {
    const e = parseInt(t.currentTarget.dataset.index, 10);
    if (e === this.currentIndex) return;
    const n = this.sizes.startAt + (this.sizes.height / this.length) * e;
    this.call("scrollTo", { target: n }, "Scroll", "scroll");
  }
  getListHeight(t) {
    const e = t.querySelector("div");
    e && e.style.setProperty("--height", `${e.scrollHeight}px`);
  }
  onScrollSlider() {
    if (!this.isMobile) return;
    const [t] = this.$("slider"),
      { scrollLeft: e } = t,
      n = t.scrollWidth - t.clientWidth,
      i = e / n;
    this.onProgress(i);
  }
  onScrollProgress(t) {
    this.isMobile || this.onProgress(t);
  }
  onProgress(t) {
    var r, o;
    const e = this.isMobile ? this.length : this.length + 1,
      n = Math.max(0, Math.min(e - 1, Math.floor((t - 0.1) * e)));
    if (n === this.currentIndex) return;
    const i = this.$("expertise-item");
    (this.el.classList.remove(`-i${this.currentIndex}`),
      this.el.classList.add(`-i${n}`),
      (r = i[this.currentIndex]) == null || r.classList.remove("-active"),
      (o = i[n]) == null || o.classList.add("-active"),
      (this.currentIndex = n));
  }
  resize() {
    (Array.from(this.$("expertise-item")).forEach((e) => {
      this.getListHeight(e);
    }),
      (this.sizes.height = this.el.offsetHeight),
      (this.sizes.startAt = this.el.offsetTop));
  }
}
class Hc extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        keyup: "onClickLove",
        mouseup: "onClickLove",
        touchend: "onClickLove",
      }));
  }
  onClickLove({ target: t }) {
    const e = t.querySelector(".-love-fill"),
      n = Math.floor(Math.random() * 15) + 10;
    for (let i = 0; i < n; i += 1) {
      const r = e.cloneNode(!0),
        o = _t.random(-100, 100),
        l = _t.random(0, 100),
        a = _t.random(800, 1200);
      (Dt(r, {
        translateY: { from: -6, to: _t.random(-75, -225) },
        translateX: { from: -6, to: o, ease: "outCirc" },
        rotate: { from: o / 2, to: 0 },
        scale: _t.random(1, 1.05),
        opacity: [{ from: 1, to: 0, duration: 200, delay: a - 200 }],
        duration: a,
        delay: l,
        ease: "easeOutExpo",
        onComplete: () => {
          t.removeChild(r);
        },
      }),
        t.appendChild(r));
    }
  }
}
class Vc extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        click: {
          prevButton: "onClickPrev",
          nextButton: "onClickNext",
          dot: "onClickDot",
        },
      }),
      (this.currentIndex = 0),
      (this.duration = 5e3),
      (this.raf = null),
      (this.timeStart = 0),
      (this.paused = !1),
      (this.observer = null),
      (this.visible = !0));
  }
  onClickPrev() {
    const t = this.$("cover"),
      e =
        this.currentIndex === null
          ? t.length - 1
          : (this.currentIndex - 1 + t.length) % t.length;
    this.updateCover(e);
  }
  onClickNext() {
    const t = this.$("cover"),
      e = this.currentIndex === null ? 0 : (this.currentIndex + 1) % t.length;
    this.updateCover(e);
  }
  onClickDot({ currentTarget: t }) {
    const e = parseInt(t.dataset.index, 10);
    Number.isNaN(e) || this.updateCover(e);
  }
  updateCover(t) {
    const e = this.$("cover"),
      n = e.length;
    if (!n || t === this.currentIndex) return;
    const i = this.currentIndex,
      r = ((t % n) + n) % n,
      o = i === n - 1 && r === 0,
      l = e[i],
      a = e[r];
    (l == null || l.classList.remove("-visible"),
      a == null || a.classList.add("-visible"),
      (this.currentIndex = r),
      this.preloadCover(),
      this.updateDots(0, o),
      this.restartAuto());
  }
  preloadCover(t = this.currentIndex + 1) {
    const n = this.$("cover")[t];
    if (!n) return;
    const i = n.querySelector("img[data-src]");
    i &&
      !i.classList.contains("loaded") &&
      this.call("loadImage", { item: i }, "Website", "website");
  }
  updateDots(t = 0, e = !1) {
    const n = this.$("dot");
    if (!n.length) return;
    const i = this.currentIndex;
    n.forEach((r, o) => {
      const l = o === i;
      (r.classList.toggle("-active", l),
        r.setAttribute("aria-current", l ? "true" : "false"));
      let a = 0;
      (e ? (a = l ? t : 0) : o < i ? (a = 1) : l ? (a = t) : (a = 0),
        r.style.setProperty("--story-progress", a));
    });
  }
  onVisibility() {
    document.hidden ? this.pauseAuto() : this.resumeAuto();
  }
  startAuto() {
    if (this.raf) return;
    ((this.paused = !1),
      (this.timeStart = performance.now()),
      this.preloadCover());
    const t = (e) => {
      if (this.paused || !this.visible) {
        this.raf = window.requestAnimationFrame(t);
        return;
      }
      const n = e - this.timeStart;
      let i = Math.min(1, n / this.duration);
      (this.updateDots(i),
        i >= 1 &&
          (this.onClickNext(),
          (this.timeStart = e),
          (i = 0),
          this.updateDots(i)),
        (this.raf = window.requestAnimationFrame(t)));
    };
    this.raf = window.requestAnimationFrame(t);
  }
  stopAuto() {
    (this.raf && window.cancelAnimationFrame(this.raf), (this.raf = null));
  }
  pauseAuto() {
    this.paused = !0;
  }
  resumeAuto() {
    (this.raf || this.startAuto(),
      (this.paused = !1),
      (this.timeStart = performance.now()),
      this.updateDots(0));
  }
  restartAuto() {
    ((this.timeStart = performance.now()), this.updateDots(0));
  }
  destroy() {
    (this.stopAuto(),
      document.removeEventListener("visibilitychange", this.onVisibility),
      this.observer && this.observer.disconnect(),
      (this.observer = null));
  }
  onBlockIntersect({ way: t }) {
    ((this.visible = t === "enter"),
      this.visible
        ? (this.preloadCover(this.currentIndex), this.resumeAuto())
        : this.pauseAuto());
  }
  resize() {}
}
class jc extends nt {
  constructor(t) {
    (super(t), (this.events = {}), (this.isMobile = window.innerWidth < 768));
  }
  init() {
    this.isMobile || this.moveOddBlocks();
  }
  setLeftPanelHeight() {
    const [t] = this.$("left"),
      e = t.offsetHeight;
    t.style.setProperty("--half-height", `${e / 2}px`);
  }
  moveOddBlocks() {
    const [t] = this.$("right");
    this.$("right-block").forEach((n) => {
      t.appendChild(n);
    });
  }
  resize() {
    this.setLeftPanelHeight();
  }
}
class Wc extends nt {
  constructor(t) {
    (super(t), (this.events = {}));
  }
  resize() {
    const t = this.el.offsetHeight;
    this.el.style.setProperty("--half-height", `${t / 2}px`);
  }
}
let Xc = class extends nt {
  constructor(t) {
    (super(t),
      (this.events = {
        mouseenter: { room: "onMouseEnter" },
        mouseleave: { room: "onMouseLeave" },
      }));
  }
  onMouseEnter() {
    this.timeout = setTimeout(() => {
      this.el.classList.add("-visible");
    }, 2e3);
  }
  onMouseLeave() {
    (this.el.classList.remove("-visible"),
      this.timeout && clearTimeout(this.timeout));
  }
};
class Gc extends nt {
  constructor(t) {
    (super(t), (this.events = {}));
  }
  init() {
    ((this.observer = new window.IntersectionObserver(
      (e) => {
        e.forEach((n) => {
          n.isIntersecting &&
            this.call(
              "onSectionIntersect",
              { target: n.target, way: "enter" },
              "Website",
              "website",
            );
        });
      },
      { threshold: 0.4 },
    )),
      this.$("section").forEach((e) => {
        this.observer.observe(e);
      }));
  }
  destroy() {
    this.observer.disconnect();
  }
}
const Yc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Accordeon: Tc,
      Ajax: Ic,
      AudioPlayer: Rc,
      Button: Cc,
      ContactForm: Fc,
      ContactPopin: Nc,
      Error: Xc,
      FeaturedProject: kc,
      Footer: zc,
      Form: xr,
      HomeExpertises: Uc,
      HomeHero: Mc,
      HomeManifest: Oc,
      HomeProjects: $c,
      HomeTeam: Pc,
      KeyPopin: qc,
      LikeButton: Hc,
      Menu: Ul,
      ProjectCard: sn,
      ProjectsIndex: Gc,
      ProjectsItem: jc,
      Scroll: Bl,
      Slider: xc,
      StickyTitle: Wc,
      StoriesSlider: Vc,
      Styleguide: Lc,
      VideoPlayer: Dc,
      Website: Ml,
      WhatsappPopin: Bc,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
window.addEventListener("load", () => {
  const s = () => {
      console.log(
        "%cFait avec ❤️❤️❤️ par TROA",
        "font-size:10px;color:#AACBF4; background-color:#263069; padding:5px;",
      );
      const e = new Nr({ modules: Yc });
      e.init(e);
    },
    t = document.getElementById("main-css");
  if (!t) {
    console.warn('The "main-css" stylesheet not found');
    return;
  }
  t.isLoaded ? s() : t.addEventListener("load", s);
});
