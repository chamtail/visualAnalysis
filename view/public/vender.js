/**
 * Created by Jeremy on 2018/11/9.
 */
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function (a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return m.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)for (b in a)return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g)return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)a[e++] = b[d++];
            if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return la(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b))return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b))return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
            }));
            for (b = 0; e > b; b++)m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        }, is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function (a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? m.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k))break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;

        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function () {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(m(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        })c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[m.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ca() && this.focus)try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = ba; else if (!d)return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)d[g] && Ba(e, d[g]);
            if (b)if (c)for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f); else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--)h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild)h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++])oa.test(f.type || "") && c.push(f)
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild)a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        }, html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++)d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function (a) {
        return a.currentStyle
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function La(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                }, boxSizingReliable: function () {
                    return null == f && i(), f
                }, pixelPosition: function () {
                    return null == e && i(), e
                }, reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa = {letterSpacing: "0", fontWeight: "400"}, Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a)return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
        while (e--)if (b = Ta[e] + c, b in a)return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Ja, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Va(this, !0)
        }, hide: function () {
            return Va(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }

    m.Tween = Za, Za.prototype = {
        constructor: Za, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function fb() {
        return setTimeout(function () {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])continue;
                q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0;
        if (m.isEmptyObject(o))"inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)m.style(a, b, o[b])
            });
            for (d in o)g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)if (d = db[f].call(j, a, k, j.opts))return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kb, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? db.unshift(a) : db.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_a), _a = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b)return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {}, f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)for (g in h)if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f))j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? f : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t)return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a))return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b))m.each(b, function (b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vb(a + "[" + e + "]", b[e], c, d)
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {name: b.name, value: a.replace(Sb, "\r\n")}
                }) : {name: b.name, value: c.replace(Sb, "\r\n")}
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xb)Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bc)return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
;/*!
 * Bootstrap.js by @fat & @mdo
 * Copyright 2013 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function (e) {
    "use strict";
    e(function () {
        e.support.transition = function () {
            var e = function () {
                var e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, n;
                for (n in t)if (e.style[n] !== undefined)return t[n]
            }();
            return e && {end: e}
        }()
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function (n) {
        e(n).on("click", t, this.close)
    };
    n.prototype.close = function (t) {
        function s() {
            i.trigger("closed").remove()
        }

        var n = e(this), r = n.attr("data-target"), i;
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
        if (t.isDefaultPrevented())return;
        i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
    };
    var r = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this), i = r.data("alert");
            i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
    }, e(document).on("click.alert.data-api", t, n.prototype.close)
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function (e) {
        var t = "disabled", n = this.$element, r = n.data(), i = n.is("input") ? "val" : "html";
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function () {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("button"), s = typeof n == "object" && n;
            i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.defaults = {loadingText: "loading..."}, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
        return e.fn.button = n, this
    }, e(document).on("click.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function (t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, getActiveIndex: function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, to: function (t) {
            var n = this.getActiveIndex(), r = this;
            if (t > this.$items.length - 1 || t < 0)return;
            return this.sliding ? this.$element.one("slid", function () {
                r.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
        }, pause: function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        }, next: function () {
            if (this.sliding)return;
            return this.slide("next")
        }, prev: function () {
            if (this.sliding)return;
            return this.slide("prev")
        }, slide: function (t, n) {
            var r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval, o = t == "next" ? "left" : "right", u = t == "next" ? "first" : "last", a = this, f;
            this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {
                relatedTarget: i[0],
                direction: o
            });
            if (i.hasClass("active"))return;
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var t = e(a.$indicators.children()[a.getActiveIndex()]);
                t && t.addClass("active")
            }));
            if (e.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(f);
                if (f.isDefaultPrevented())return;
                i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function () {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
                        a.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(f);
                if (f.isDefaultPrevented())return;
                r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("carousel"), s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n), o = typeof n == "string" ? n : s.slide;
            i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = n, this
    }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n = e(this), r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, i.data(), n.data()), o;
        i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), t.preventDefault()
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t, dimension: function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, show: function () {
            var t, n, r, i;
            if (this.transitioning || this.$element.hasClass("in"))return;
            t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (r && r.length) {
                i = r.data("collapse");
                if (i && i.transitioning)return;
                r.collapse("hide"), i || r.data("collapse", null)
            }
            this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
        }, hide: function () {
            var t;
            if (this.transitioning || !this.$element.hasClass("in"))return;
            t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
        }, reset: function (e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
        }, transition: function (t, n, r) {
            var i = this, s = function () {
                n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
            };
            this.$element.trigger(n);
            if (n.isDefaultPrevented())return;
            this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
        }, toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var n = e.fn.collapse;
    e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("collapse"), s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
            i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.collapse.defaults = {toggle: !0}, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = n, this
    }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
        var n = e(this), r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""), s = e(i).data("collapse") ? "toggle" : n.data();
        n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
    })
}(window.jQuery), !function (e) {
    "use strict";
    function r() {
        e(".dropdown-backdrop").remove(), e(t).each(function () {
            i(e(this)).removeClass("open")
        })
    }

    function i(t) {
        var n = t.attr("data-target"), r;
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
        if (!r || !r.length)r = t.parent();
        return r
    }

    var t = "[data-toggle=dropdown]", n = function (t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function () {
            n.parent().removeClass("open")
        })
    };
    n.prototype = {
        constructor: n, toggle: function (t) {
            var n = e(this), s, o;
            if (n.is(".disabled, :disabled"))return;
            return s = i(n), o = s.hasClass("open"), r(), o || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", r), s.toggleClass("open")), n.focus(), !1
        }, keydown: function (n) {
            var r, s, o, u, a, f;
            if (!/(38|40|27)/.test(n.keyCode))return;
            r = e(this), n.preventDefault(), n.stopPropagation();
            if (r.is(".disabled, :disabled"))return;
            u = i(r), a = u.hasClass("open");
            if (!a || a && n.keyCode == 27)return n.which == 27 && u.find(t).focus(), r.click();
            s = e("[role=menu] li:not(.divider):visible a", u);
            if (!s.length)return;
            f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var r = e(this), i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t, toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        }, show: function () {
            var t = this, n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented())return;
            this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            })
        }, hide: function (t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide"), this.$element.trigger(t);
            if (!this.isShown || t.isDefaultPrevented())return;
            this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        }, enforceFocus: function () {
            var t = this;
            e(document).on("focusin.modal", function (e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        }, escape: function () {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {
                t.which == 27 && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        }, hideWithTransition: function () {
            var t = this, n = setTimeout(function () {
                t.$element.off(e.support.transition.end), t.hideModal()
            }, 500);
            this.$element.one(e.support.transition.end, function () {
                clearTimeout(n), t.hideModal()
            })
        }, hideModal: function () {
            var e = this;
            this.$element.hide(), this.backdrop(function () {
                e.removeBackdrop(), e.$element.trigger("hidden")
            })
        }, removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, backdrop: function (t) {
            var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                if (!t)return;
                i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("modal"), s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
        return e.fn.modal = n, this
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), s = i.data("modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, i.data(), n.data());
        t.preventDefault(), i.modal(s).one("hide", function () {
            n.focus()
        })
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t, init: function (t, n, r) {
            var i, s, o, u, a;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
            for (a = o.length; a--;)u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, enter: function (t) {
            var n = e.fn[this.type].defaults, r = {}, i;
            this._options && e.each(this._options, function (e, t) {
                n[e] != t && (r[e] = t)
            }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
            if (!i.options.delay || !i.options.delay.show)return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        }, leave: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide)return n.hide();
            n.hoverState = "out", this.timeout = setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        }, show: function () {
            var t, n, r, i, s, o, u = e.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(u);
                if (u.isDefaultPrevented())return;
                t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                switch (s) {
                    case"bottom":
                        o = {top: n.top + n.height, left: n.left + n.width / 2 - r / 2};
                        break;
                    case"top":
                        o = {top: n.top - i, left: n.left + n.width / 2 - r / 2};
                        break;
                    case"left":
                        o = {top: n.top + n.height / 2 - i / 2, left: n.left - r};
                        break;
                    case"right":
                        o = {top: n.top + n.height / 2 - i / 2, left: n.left + n.width}
                }
                this.applyPlacement(o, s), this.$element.trigger("shown")
            }
        }, applyPlacement: function (e, t) {
            var n = this.tip(), r = n[0].offsetWidth, i = n[0].offsetHeight, s, o, u, a;
            n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
        }, replaceArrow: function (e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        }, setContent: function () {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, hide: function () {
            function i() {
                var t = setTimeout(function () {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function () {
                    clearTimeout(t), n.detach()
                })
            }

            var t = this, n = this.tip(), r = e.Event("hide");
            this.$element.trigger(r);
            if (r.isDefaultPrevented())return;
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
        }, fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, hasContent: function () {
            return this.getTitle()
        }, getPosition: function () {
            var t = this.$element[0];
            return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        }, getTitle: function () {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        }, tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        }, arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, enable: function () {
            this.enabled = !0
        }, disable: function () {
            this.enabled = !1
        }, toggleEnabled: function () {
            this.enabled = !this.enabled
        }, toggle: function (t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("tooltip"), s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t, setContent: function () {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        }, hasContent: function () {
            return this.getTitle() || this.getContent()
        }, getContent: function () {
            var e, t = this.$element, n = this.options;
            return e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content"), e
        }, tip: function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("popover"), s = typeof n == "object" && n;
            i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
    }
}(window.jQuery), !function (e) {
    "use strict";
    function t(t, n) {
        var r = e.proxy(this.process, this), i = e(t).is("body") ? e(window) : e(t), s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
    }

    t.prototype = {
        constructor: t, refresh: function () {
            var t = this, n;
            this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function () {
                var n = e(this), r = n.data("target") || n.attr("href"), i = /^#\w/.test(r) && e(r);
                return i && i.length && [[i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, process: function () {
            var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
            if (e >= n)return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--;)s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
        }, activate: function (t) {
            var n, r;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("scrollspy"), s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {offset: 10}, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t, show: function () {
            var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.attr("data-target"), i, s, o;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active"))return;
            i = n.find(".active:last a")[0], o = e.Event("show", {relatedTarget: i}), t.trigger(o);
            if (o.isDefaultPrevented())return;
            s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                t.trigger({type: "shown", relatedTarget: i})
            })
        }, activate: function (t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }

            var i = n.find("> .active"), s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
        return e.fn.tab = n, this
    }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t, select: function () {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        }, updater: function (e) {
            return e
        }, show: function () {
            var t = e.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(), this.shown = !0, this
        }, hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        }, lookup: function (t) {
            var n;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
        }, process: function (t) {
            var n = this;
            return t = e.grep(t, function (e) {
                return n.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        }, matcher: function (e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        }, sorter: function (e) {
            var t = [], n = [], r = [], i;
            while (i = e.shift())i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r)
        }, highlighter: function (e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function (e, t) {
                return "<strong>" + t + "</strong>"
            })
        }, render: function (t) {
            var n = this;
            return t = e(t).map(function (t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        }, next: function (t) {
            var n = this.$menu.find(".active").removeClass("active"), r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
        }, prev: function (e) {
            var t = this.$menu.find(".active").removeClass("active"), n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active")
        }, listen: function () {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
        }, eventSupported: function (e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = typeof this.$element[e] == "function"), t
        }, move: function (e) {
            if (!this.shown)return;
            switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.prev();
                    break;
                case 40:
                    e.preventDefault(), this.next()
            }
            e.stopPropagation()
        }, keydown: function (t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        }, keypress: function (e) {
            if (this.suppressKeyPressRepeat)return;
            this.move(e)
        }, keyup: function (e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown)return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown)return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        }, focus: function (e) {
            this.focused = !0
        }, blur: function (e) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        }, click: function (e) {
            e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
        }, mouseenter: function (t) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        }, mouseleave: function (e) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var n = e.fn.typeahead;
    e.fn.typeahead = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("typeahead"), s = typeof n == "object" && n;
            i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function () {
        return e.fn.typeahead = n, this
    }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (t) {
        var n = e(this);
        if (n.data("typeahead"))return;
        n.typeahead(n.data())
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function () {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = e(t), this.checkPosition()
    };
    t.prototype.checkPosition = function () {
        if (!this.$element.is(":visible"))return;
        var t = e(document).height(), n = this.$window.scrollTop(), r = this.$element.offset(), i = this.options.offset, s = i.bottom, o = i.top, u = "affix affix-top affix-bottom", a;
        typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
        if (this.affixed === a)return;
        this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
    };
    var n = e.fn.affix;
    e.fn.affix = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("affix"), s = typeof n == "object" && n;
            i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {offset: 0}, e.fn.affix.noConflict = function () {
        return e.fn.affix = n, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this), n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(window.jQuery);
;/*! jQuery UI - v1.10.3 - 2013-08-17
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
                return "hidden" === e.css(this, "visibility")
            }).length
    }

    var a = 0, n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function (i) {
            if (i !== t)return this.css("zIndex", i);
            if (this.length)for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a))return a;
                n = n.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var s = e.attr(t, "tabindex"), a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) {
        function a(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], r = s.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + s] = function (i) {
            return i === t ? o["inner" + s].call(this) : this.each(function () {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function (t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function () {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s)n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            }, call: function (e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (s = 0; a.length > s; s++)e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        }, hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow"))return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);
(function (e, t) {
    var i = 0, s = Array.prototype.slice, n = e.cleanData;
    e.cleanData = function (t) {
        for (var i, s = 0; null != (i = t[s]); s++)try {
            e(i).triggerHandler("remove")
        } catch (a) {
        }
        n(t)
    }, e.widget = function (i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function (i, n) {
            return e.isFunction(n) ? (l[i] = function () {
                var e = function () {
                    return s.prototype[i].apply(this, arguments)
                }, t = function (e) {
                    return s.prototype[i].apply(this, e)
                };
                return function () {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {widgetEventPrefix: r ? h.widgetEventPrefix : i}, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }), r ? (e.each(r._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function (i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)for (n in r[o])a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function (i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function (r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function () {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function () {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length)return e.widget.extend({}, this.options);
            if ("string" == typeof i)if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++)a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                if (i = n.pop(), s === t)return a[i] === t ? null : a[i];
                a[i] = s
            } else {
                if (s === t)return this.options[i] === t ? null : this.options[i];
                o[i] = s
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e)this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function (n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }

                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {top: 0, left: 0}
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {top: e.scrollTop(), left: e.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }

    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {
        scrollbarWidth: function () {
            if (a !== e)return a;
            var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
        }, getScrollInfo: function (e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), s = e.isWindow ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (e) {
            var i = t(e || window), s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function (e) {
        if (!e || !e.of)return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, m, g, v, b, _ = t(e.of), y = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(y), x = (e.collision || "flip").split(" "), k = {};
        return b = n(_), _[0].preventDefault && (e.at = "left top"), p = b.width, m = b.height, g = b.offset, v = t.extend({}, g), t.each(["my", "at"], function () {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function () {
            var n, l, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), b = s(this, "marginTop"), D = u + f + s(this, "marginRight") + w.width, T = d + b + s(this, "marginBottom") + w.height, C = t.extend({}, v), M = i(k.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
                marginLeft: f,
                marginTop: b
            }, t.each(["left", "top"], function (i, s) {
                t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
                    targetWidth: p,
                    targetHeight: m,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: n,
                    collisionWidth: D,
                    collisionHeight: T,
                    offset: [a[0] + M[0], a[1] + M[1]],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c
                })
            }), e.using && (l = function (t) {
                var i = g.left - C.left, s = i + p - u, n = g.top - C.top, a = n + m - d, h = {
                    target: {
                        element: _,
                        left: g.left,
                        top: g.top,
                        width: p,
                        height: m
                    },
                    element: {element: c, left: C.left, top: C.top, width: u, height: d},
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                };
                u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h)
            }), c.offset(t.extend(C, {using: l}))
        })
    }, t.ui.position = {
        fit: {
            left: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
            }, top: function (t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - o - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
            }, top: function (t, e) {
                var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - o - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
            }
        }, flipfit: {
            left: function () {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (a in s)e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1)return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (t) {
            var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function (t) {
            var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = t.pageX, l = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
            var s = e(this).data("ui-draggable"), n = s.options, a = e.extend({}, i, {item: s.element});
            s.sortables = [], e(n.connectToSortable).each(function () {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, a))
            })
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable"), n = e.extend({}, i, {item: s.element});
            e.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
            })
        }, drag: function (t, i) {
            var s = e(this).data("ui-draggable"), n = this;
            e.each(s.sortables, function () {
                var a = !1, o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function () {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"), i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        }, stop: function () {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        }, drag: function (t) {
            var i = e(this).data("ui-draggable"), s = i.options, n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("ui-draggable"), i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = e(this), s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        }, drag: function (t, i) {
            var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"), f = p.options, m = f.snapTolerance, g = i.offset.left, v = g + p.helperProportions.width, b = i.offset.top, y = b + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--)r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, r - m > v || g > h + m || l - m > y || b > u + m || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r - p.helperProportions.width
                }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                    top: u - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[c].item})), p.snapElements[c].snapping = s || n || a || o || d)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t, i = this.data("ui-draggable").options, s = e.makeArray(e(i.stack)).sort(function (t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function (i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
            var s = e(i.helper), n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function (e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }

    e.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t = this.options, i = t.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++)i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var s = i || e.ui.ddmanager.current, n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {offset: t.element.offset()}), t.options.tolerance) ? (n = !0, !1) : undefined
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function (e, i, s) {
        if (!i.offset)return !1;
        var n, a, o = (e.positionAbs || e.position.absolute).left, r = o + e.helperProportions.width, h = (e.positionAbs || e.position.absolute).top, l = h + e.helperProportions.height, u = i.offset.left, c = u + i.proportions.width, d = i.offset.top, p = d + i.proportions.height;
        switch (s) {
            case"fit":
                return o >= u && c >= r && h >= d && p >= l;
            case"intersect":
                return o + e.helperProportions.width / 2 > u && c > r - e.helperProportions.width / 2 && h + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
            case"pointer":
                return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(a, d, i.proportions.height) && t(n, u, i.proportions.width);
            case"touch":
                return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (o >= u && c >= o || r >= u && c >= r || u > o && r > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e:for (s = 0; a.length > s; s++)if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                for (n = 0; r.length > n; n++)if (r[n] === a[s].element[0]) {
                    a[s].proportions.height = 0;
                    continue e
                }
                a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
                    width: a[s].element[0].offsetWidth,
                    height: a[s].element[0].offsetHeight
                })
            }
        }, drop: function (t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        }, dragStart: function (t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        }, drag: function (t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                        return e.data(this, "ui-droppable").options.scope === n
                    }), a.length && (s = e.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        }, dragStop: function (t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
})(jQuery);
(function (e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }

    function i(e) {
        return !isNaN(parseInt(e, 10))
    }

    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++)s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function (t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles)this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i, s, n = !1;
            for (i in this.handles)s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (i) {
            var s, n, a, o = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {left: s, top: n}, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (t) {
            var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, u = this.size.height, c = t.pageX - a.left || 0, d = t.pageY - a.top || 0, p = this._change[o];
            return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                top: h,
                left: r
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position, s = this.size, n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries, s = this.axis, n = i(e.width) && t.maxWidth && t.maxWidth < e.width, a = i(e.height) && t.maxHeight && t.maxHeight < e.height, o = i(e.width) && t.minWidth && t.minWidth > e.width, r = i(e.height) && t.minHeight && t.minHeight > e.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, u = /sw|nw|w/.test(s), c = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e], !this.borderDif)for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++)this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function () {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {width: this.originalSize.width + t}
            }, w: function (e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + t, width: i.width - t}
            }, n: function (e, t, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i, height: s.height - i}
            }, s: function (e, t, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, sw: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }, ne: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, nw: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = e(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {
                width: i.size.width - r,
                height: i.size.height - o
            }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"), u = l.options, c = l.element, d = u.containment, p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
                s[e] = t(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        }, resize: function (t) {
            var i, s, n, a, o = e(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, c = {
                top: 0,
                left: 0
            }, d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
        }, stop: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.containerOffset, n = t.containerPosition, a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = function (t) {
                e(t).each(function () {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                s(e)
            })
        }, resize: function (t, i) {
            var s = e(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {
                height: s.size.height - a.height || 0,
                width: s.size.width - a.width || 0,
                top: s.position.top - o.top || 0,
                left: s.position.left - o.left || 0
            }, h = function (t, s) {
                e(t).each(function () {
                    var t = e(this), n = e(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function (e, t) {
                        var i = (n[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (a[t] = i || null)
                    }), t.css(a)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function (e, t) {
                h(e, t)
            })
        }, stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size, n = t.originalSize, a = t.originalPosition, o = t.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, u = Math.round((s.width - n.width) / h) * h, c = Math.round((s.height - n.height) / l) * l, d = n.width + u, p = n.height + c, f = i.maxWidth && d > i.maxWidth, m = i.maxHeight && p > i.maxHeight, g = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
            i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u)
        }
    })
})(jQuery);
(function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
                    var t = e(this), i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var i = this, s = this.options;
            this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {unselecting: s.element}))
            }), e(t.target).parents().addBack().each(function () {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {selecting: n.element}) : i._trigger("unselecting", t, {unselecting: n.element}), !1) : undefined
            }))
        },
        _mouseDrag: function (t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = t.pageX, h = t.pageY;
                return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: h - o
                }), this.selectees.each(function () {
                    var i = e.data(this, "selectable-item"), l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {selecting: i.element}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {unselecting: i.element}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {unselecting: i.element})))))
                }), !1
            }
        },
        _mouseStop: function (t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {unselected: s.element})
            }), e(".ui-selecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {selected: s.element})
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }

    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            var s = null, n = !1, a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : undefined
            }), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (e, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, s, n, a, o = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = t.left, o = a + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > a && o > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, a = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i, s, n, a, o = [], r = [], h = this._connectWith();
            if (h && e)for (i = h.length - 1; i >= 0; i--)for (n = t(h[i]), s = n.length - 1; s >= 0; s--)a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--)r[i][0].each(function () {
                o.push(this)
            });
            return t(o)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++)if (e[i] === t.item[0])return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)for (i = d.length - 1; i >= 0; i--)for (n = t(d[i]), s = n.length - 1; s >= 0; s--)a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {item: this.currentItem}) : t(a.options.items, a.element), a]), this.containers.push(a));
            for (i = u.length - 1; i >= 0; i--)for (o = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)h = t(r[s]), h.data(this.widgetName + "-item", o), c.push({
                item: h,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function () {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                }, update: function (t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (s) {
            var n, a, o, r, h, l, c, u, d, p, f = null, m = null;
            for (n = this.containers.length - 1; n >= 0; n--)if (!t.contains(this.currentItem[0], this.containers[n].element[0]))if (this._intersectsWith(this.containers[n].containerCache)) {
                if (f && t.contains(this.containers[n].element[0], f.element[0]))continue;
                f = this.containers[n], m = n
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)if (1 === this.containers.length)this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1); else {
                for (o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--)t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0, u += this.items[a][l]), o > Math.abs(u - c) && (o = Math.abs(u - c), r = this.items[a], this.direction = d ? "up" : "down"));
                if (!r && !this.options.dropOnEmpty)return;
                if (this.currentContainer === this.containers[m])return;
                r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i, s, n = this.options, a = e.pageX, o = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)e || s.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++)s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; s.length > i; i++)s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function (t) {
    var e = 0, i = {}, s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function () {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
        },
        _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), a = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[s - 1]
                }
                a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function () {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function () {
            var i, s = this.options, n = s.heightStyle, a = this.element.parent(), o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (e) {
                var i = t(this), s = i.attr("id"), n = i.next(), a = n.attr("id");
                s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.headers.each(function () {
                i -= t(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function () {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        },
        _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function (e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), a = n[0] === s[0], o = a && i.collapsible, r = o ? t() : n.next(), h = s.next(), l = {
                oldHeader: s,
                oldPanel: h,
                newHeader: o ? t() : n,
                newPanel: r
            };
            e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({"aria-selected": "true", tabIndex: 0})
        },
        _animate: function (t, e, n) {
            var a, o, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function () {
                h._toggleComplete(n)
            };
            return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
                duration: r,
                easing: o,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), t.hide().animate(s, {
                duration: r, easing: o, complete: p, step: function (t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
                }
            }), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
})(jQuery);
(function (t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly"))return e = !0, s = !0, i = !0, undefined;
                    e = !1, s = !1, i = !1;
                    var a = t.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                }, keypress: function (s) {
                    if (e)return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (t) {
                    return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined)
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                        var e = this;
                        this.document.one("mousedown", function (s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                }, menufocus: function (e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {item: s}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function () {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i, data: e, dataType: "json", success: function (t) {
                        n(t)
                    }, error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined
        },
        _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var t = this, i = ++e;
            return function (s) {
                i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var s = this;
            t.each(i, function (t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
})(jQuery);
(function (t) {
    var e, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all", o = "ui-state-hover ui-state-active ", r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", h = function () {
        var e = t(this);
        setTimeout(function () {
            e.find(":ui-button").button("refresh")
        }, 1)
    }, l = function (e) {
        var i = e.name, s = e.form, n = t([]);
        return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
            return !this.form
        })), n
    };
    t.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var o = this, r = this.options, c = "checkbox" === this.type || "radio" === this.type, u = c ? "" : "ui-state-active", d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function (t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                o.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function () {
                o.buttonElement.removeClass(d)
            }), c && (this.element.bind("change" + this.eventNamespace, function () {
                n || o.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
                r.disabled || (n = !1, i = t.pageX, s = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function (t) {
                r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return r.disabled || n ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled || n)return !1;
                t(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
                var e = o.element[0];
                l(e).not(e).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, o.document.one("mouseup", function () {
                    e = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function () {
                return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function (e) {
                return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (t, e) {
            return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
        },
        refresh: function () {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type)return this.options.label && this.element.val(this.options.label), undefined;
            var e = this.buttonElement.removeClass(r), i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(), s = this.options.icons, n = s.primary && s.secondary, a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function () {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function (t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function n(e, i) {
        t.extend(e, i);
        for (var s in i)null == i[s] && (e[s] = i[s]);
        return e
    }

    t.extend(t.ui, {datepicker: {version: "1.10.3"}});
    var a, r = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, i) {
            var s, n, a;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
        },
        _newInst: function (e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, i) {
            var s, n, a, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, a = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function (t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++)t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function (e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, i, s, a, o) {
            var h, l, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function (e) {
            var i, s = t(e), n = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t)return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)if (this._disabledInputs[e] === t)return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (i, s, a) {
            var r, o, h, l, c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var i, s, n, a = t.datepicker._getInst(e.target), r = !0, o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, t.datepicker._datepickerShowing)switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (i) {
            var s, n, a = t.datepicker._getInst(i.target);
            return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
        },
        _doKeyUp: function (e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
            } catch (n) {
            }
            return !0
        },
        _showDatepicker: function (e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, a, r, o, h, l;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
                    return r |= "fixed" === t(this).css("position"), !r
                }), o = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(e), n = s[1], r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, i, s) {
            var n = e.dpDiv.outerWidth(), a = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0, o = e.input ? e.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
        },
        _findPos: function (e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (e) {
            var i, s, n, a, o = this._curInst;
            !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
                t.datepicker._tidyDialog(o)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, i, s) {
            var n = t(e), a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function (e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function (e, i, s) {
            var n = t(e), a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function (e, i, s, n) {
            var a, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function (e, i) {
            var s, n = t(e), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var i, s, n, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function () {
                t(this).val(n)
            }))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, s, n) {
            if (null == i || null == s)throw"Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s)return null;
            var a, r, o, h, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, m = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, _ = -1, b = -1, y = !1, x = function (t) {
                var e = i.length > a + 1 && i.charAt(a + 1) === t;
                return e && a++, e
            }, k = function (t) {
                var e = x(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, n = RegExp("^\\d{1," + i + "}"), a = s.substring(l).match(n);
                if (!a)throw"Missing number at position " + l;
                return l += a[0].length, parseInt(a[0], 10)
            }, w = function (i, n, a) {
                var r = -1, o = t.map(x(i) ? a : n, function (t, e) {
                    return [[e, t]]
                }).sort(function (t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (t.each(o, function (t, i) {
                        var n = i[1];
                        return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
                    }), -1 !== r)return r + 1;
                throw"Unknown name at position " + l
            }, D = function () {
                if (s.charAt(l) !== i.charAt(a))throw"Unexpected literal at position " + l;
                l++
            };
            for (a = 0; i.length > a; a++)if (y)"'" !== i.charAt(a) || x("'") ? D() : y = !1; else switch (i.charAt(a)) {
                case"d":
                    _ = k("d");
                    break;
                case"D":
                    w("D", d, p);
                    break;
                case"o":
                    b = k("o");
                    break;
                case"m":
                    v = k("m");
                    break;
                case"M":
                    v = w("M", f, m);
                    break;
                case"y":
                    g = k("y");
                    break;
                case"@":
                    h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                    break;
                case"!":
                    h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                    break;
                case"'":
                    x("'") ? D() : y = !0;
                    break;
                default:
                    D()
            }
            if (s.length > l && (o = s.substr(l), !/^\s+/.test(o)))throw"Extra/unparsed characters found in date: " + o;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)for (v = 1, _ = b; ;) {
                if (r = this._getDaysInMonth(g, v - 1), r >= _)break;
                v++, _ -= r
            }
            if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _)throw"Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e)return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++, i
            }, l = function (t, e, i) {
                var s = "" + e;
                if (h(t))for (; i > s.length;)s = "0" + s;
                return s
            }, c = function (t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, u = "", d = !1;
            if (e)for (s = 0; t.length > s; s++)if (d)"'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
                case"d":
                    u += l("d", e.getDate(), 2);
                    break;
                case"D":
                    u += c("D", e.getDay(), n, a);
                    break;
                case"o":
                    u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    u += l("m", e.getMonth() + 1, 2);
                    break;
                case"M":
                    u += c("M", e.getMonth(), r, o);
                    break;
                case"y":
                    u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                    break;
                case"@":
                    u += e.getTime();
                    break;
                case"!":
                    u += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    h("'") ? u += "'" : d = !0;
                    break;
                default:
                    u += t.charAt(s)
            }
            return u
        },
        _possibleChars: function (t) {
            var e, i = "", s = !1, n = function (i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s
            };
            for (e = 0; t.length > e; e++)if (s)"'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += t.charAt(e)
            }
            return i
        },
        _get: function (t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), a = n, r = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, s, r) || n
                } catch (o) {
                    s = e ? "" : s
                }
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, i, s) {
            var n = function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }, a = function (i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {
                }
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                    switch (l[2] || "d") {
                        case"d":
                        case"D":
                            o += parseInt(l[1], 10);
                            break;
                        case"w":
                        case"W":
                            o += 7 * parseInt(l[1], 10);
                            break;
                        case"m":
                        case"M":
                            r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                            break;
                        case"y":
                        case"Y":
                            a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
                    }
                    l = h.exec(i)
                }
                return new Date(a, r, o)
            }, r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, n = t.selectedMonth, a = t.selectedYear, r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        t.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        t.datepicker._hideDatepicker()
                    }, today: function () {
                        t.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, x, k, w, D, T, C, M, S, N, I, P, A, z, H, E, F, O, W, j, R = new Date, L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), Y = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), J = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), Q = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), U = this._get(t, "stepMonths"), q = 1 !== Q[0] || 1 !== Q[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(t, "min"), $ = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (0 > Z && (Z += 12, te--), $)for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - Q[0] * Q[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;)Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = K ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; Q[0] > k; k++) {
                for (w = "", this.maxRows = 4, D = 0; Q[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", M = "", q) {
                        if (M += "<div class='ui-datepicker-group", Q[1] > 1)switch (D) {
                            case 0:
                                M += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case Q[1] - 1:
                                M += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", C = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++)N = (x + c) % 7, S += "<th" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
                    for (M += S + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
                        for (M += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++)O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        M += F + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), M += "</tbody></table>" + (q ? "</div>" + (Q[0] > 0 && D === Q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M
                }
                y += w
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function (t, e, i, s, n, a, r, o) {
            var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (a || !g)y += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)if (t.yearshtml = "", a || !v)b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e
                }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
            }
            return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0), n = t.drawMonth + ("M" === i ? e : 0), a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t), a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
        },
        _isInRange: function (t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), r = null, o = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length)return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
})(jQuery);
(function (t) {
    var e = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, i = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", e)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function () {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._trigger("open"), undefined)
        },
        _focusTabbable: function () {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function (e) {
            function i() {
                var e = this.document[0].activeElement, i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }

            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)return e.preventDefault(), this.close(e), undefined;
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
                    }
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
        },
        _title: function (t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function (i, s) {
                var n, a;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({type: "button"}, s), n = s.click, s.click = function () {
                    n.apply(e.element[0], arguments)
                }, a = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, t("<button></button>", s).button(a).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function () {
            function e(t) {
                return {position: t.position, offset: t.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, n) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                },
                drag: function (t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function (n, a) {
                    s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(a))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            var i = this, s = this.options, n = s.resizable, a = this.uiDialog.css("position"), o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (s, n) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                },
                resize: function (t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function (n, a) {
                    s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(a))
                }
            }).css("position", a)
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (s) {
            var n = this, a = !1, o = {};
            t.each(s, function (t, s) {
                n._setOption(t, s), t in e && (a = !0), t in i && (o[t] = s)
            }), a && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (t, e) {
            var i, s, n = this.uiDialog;
            "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({label: "" + e}), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = this, i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function () {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (s) {
                        e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function () {
            var e, i = this.options.position, s = [], n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function (t, e) {
                +s[t] === s[t] && (n[t] = s[t], s[t] = e)
            }), i = {
                my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
})(jQuery);
(function (t) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                }, "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item:has(a)": function (e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var s, n, a, o, r, h = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    h = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function (t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function (e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function (e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);
(function (t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {max: 100, value: 0, change: null, complete: null},
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },
        _constrainedValue: function (t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function () {
            var e = this.options, i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function () {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, a, o, r, h, l, u = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - a.width() / 2,
                top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[e], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function (e, i) {
            var s, n, a;
            if (arguments.length > 1)return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length)return this._values();
            if (!t.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length)return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t)return this._valueMin();
            if (t >= this._valueMax())return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, s, n, a, o = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({width: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({height: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax())return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin())return;
                        a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            }, click: function (t) {
                t.preventDefault()
            }, keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function (t) {
    function e(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }

    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = {}, i = this.element;
            return t.each(["min", "max", "step"], function (t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }

                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function (e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function (t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})(jQuery);
(function (t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }

    var n = 0, a = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var e = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function (s, a) {
                return t(a).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (i) {
            var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function (e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }

            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function (t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function (t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function (i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), u = l.attr("aria-controls");
                s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": h
                }), o.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function (e) {
            var i = {
                click: function (t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), u = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : a,
                newPanel: h
            };
            e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, u))
        },
        _toggle: function (e, i) {
            function s() {
                a.running = !1, a._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }

            var a = this, o = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function (i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e)s = !0; else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s))return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this, a = this.tabs.eq(e), o = a.find(".ui-tabs-anchor"), r = this._getPanelForTab(a), h = {
                tab: a,
                panel: r
            };
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href"), beforeSend: function (e, a) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: a}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);
(function (t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }

    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3", options: {
            content: function () {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        }, _setOption: function (e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                s._updateContent(e)
            }), void 0)
        }, _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        }, open: function (e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        }, _updateContent: function (t, e) {
            var i, s = this.options.content, n = this, a = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
                t.data("ui-tooltip-open") && n._delay(function () {
                    e && (e.type = a), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        }, _open: function (i, s, n) {
            function a(t) {
                l.of = t, o.is(":hidden") || o.position(l)
            }

            var o, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(s), o.length)return o.find(".ui-tooltip-content").html(n), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), o = this._tooltip(s), e(s, o.attr("id")), o.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: a}), a(i)) : o.position(t.extend({of: s}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                    o.is(":visible") && (a(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {tooltip: o}), r = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    }, remove: function () {
                        this._removeTooltip(o)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        }, close: function (e) {
            var s = this, n = t(e ? e.currentTarget : this.element), a = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), a.stop(!0), this._hide(a, this.options.hide, function () {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {tooltip: a}), this.closing = !1)
        }, _tooltip: function (e) {
            var i = "ui-tooltip-" + s++, n = t("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        }, _find: function (e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
(function (t, e) {
    var i = "ui-effects-";
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function (t, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        }, c = {
            rgba: {
                props: {
                    red: {idx: 0, type: "byte"},
                    green: {idx: 1, type: "byte"},
                    blue: {idx: 2, type: "byte"}
                }
            },
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, u = {
            "byte": {floor: !0, max: 255},
            percent: {max: 1},
            degrees: {mod: 360, floor: !0}
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), l.fn = t.extend(l.prototype, {
            parse: function (n, o, r, h) {
                if (n === e)return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function (e, s) {
                    var a = s.cache;
                    f(s.props, function (t, e) {
                        if (!u[a] && s.to) {
                            if ("alpha" === t || null == n[t])return;
                            u[a] = s.to(u._rgba)
                        }
                        u[a][e.idx] = i(n[t], e, !0)
                    }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                }), this) : e
            }, is: function (t) {
                var i = l(t), s = !0, n = this;
                return f(c, function (t, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return f(c, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var s = l(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? l("transparent") : this, r = o[a.cache] || a.to(o._rgba), h = r.slice();
                return s = s[a.cache], f(a.props, function (t, n) {
                    var a = n.idx, o = r[a], l = s[a], c = u[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n)))
                }), this[n](h)
            }, blend: function (e) {
                if (1 === this._rgba[3])return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba;
                return l(t.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }, f(c, function (s, n) {
            var a = n.props, o = n.cache, h = n.to, c = n.from;
            l.fn[s] = function (s) {
                if (h && !this[o] && (this[o] = h(this._rgba)), s === e)return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = l(c(d)), n[o] = d, n) : l(d)
            }, f(a, function (e, i) {
                l.fn[e] || (l.fn[e] = function (n) {
                    var a, o = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx];
                    return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                })
            })
        }), l.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                            if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style;)try {
                                    r = t.css(o, "backgroundColor"), o = o.parentNode
                                } catch (h) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, l.hook(o), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, a = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function s(e, i) {
            var s, n, o = {};
            for (s in i)n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }

        var n = ["add", "remove", "toggle"], a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (e, a, o, r) {
            var h = t.speed(a, o, r);
            return this.queue(function () {
                var a, o = t(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function () {
                    var e = t(this);
                    return {el: e, start: i(this)}
                }), a = function () {
                    t.each(n, function (t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }, a(), l = l.map(function () {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), o.attr("class", r), l = l.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, h, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, l.get()).done(function () {
                    a(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), h.complete.call(o[0])
                })
            })
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, a) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, a) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (i) {
                return function (s, n, a, o, r) {
                    return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, s, n, a) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, a)
            }
        })
    }(), function () {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function n(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        t.extend(t.effects, {
            version: "1.10.3", save: function (t, e) {
                for (var s = 0; e.length > s; s++)null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
            }, restore: function (t, s) {
                var n, a;
                for (a = 0; s.length > a; a++)null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper"))return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), n = {width: e.width(), height: e.height()}, a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }), n
            }
        }), t.fn.extend({
            effect: function () {
                function e(e) {
                    function s() {
                        t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                    }

                    var n = t(this), a = i.complete, r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                }

                var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
                return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
                    i.complete && i.complete.call(this)
                }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
            }, show: function (t) {
                return function (e) {
                    if (n(e))return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show), hide: function (t) {
                return function (e) {
                    if (n(e))return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (e) {
                    if (n(e) || "boolean" == typeof e)return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }
        })
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
})(jQuery);
(function (t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (s, n) {
        var a, o, r, h = t(this), l = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(h, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", m = i.test(u), g = {}, v = "show" === c;
        h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), a = t.effects.createWrapper(h).css({overflow: "hidden"}), o = a[p](), r = parseFloat(a.css(f)) || 0, g[p] = v ? o : 0, m || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), g[f] = v ? r : o + r), v && (a.css(p, 0), m || a.css(f, r + o)), a.animate(g, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function () {
                "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.bounce = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "effect"), l = "hide" === h, c = "show" === h, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || l ? 1 : 0), m = e.duration / f, g = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = o.queue(), y = b.length;
        for ((c || l) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)), l && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g).animate(a, m, g), d = l ? 2 * d : d / 2;
        l && (n = {opacity: 0}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g)), o.queue(function () {
            l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.clip = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "hide"), l = "show" === h, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), l && (n.css(d, 0), n.css(p, a / 2)), f[d] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                l || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.drop = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h ? "pos" : "neg", u = {opacity: r ? 1 : 0};
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.explode = function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({visibility: "visible"}), t(b).remove(), m || p.hide(), i()
        }

        var a, o, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)for (h = g.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)r = g.left + o * v, l = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * v,
            top: -a * _
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: _,
            left: r + (m ? l * v : 0),
            top: h + (m ? c * _ : 0),
            opacity: m ? 0 : 1
        }).animate({
            left: r + (m ? 0 : l * v),
            top: h + (m ? 0 : c * _),
            opacity: m ? 1 : 0
        }, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }
})(jQuery);
(function (t) {
    t.effects.effect.fold = function (e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), h = "show" === r, l = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = h !== d, f = p ? ["width", "height"] : ["height", "width"], m = e.duration / 2, g = {}, v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), g[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function () {
            l && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.highlight = function (e, i) {
        var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = t.effects.setMode(s, e.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                "hide" === a && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (e.times || 5) + (h ? 1 : 0), c = e.duration / l, u = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++)n.animate({opacity: u}, c, e.easing), u = 1 - u;
        n.animate({opacity: u}, c, e.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.puff = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), a = "hide" === n, o = parseInt(e.percent, 10) || 150, r = o / 100, h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function (e, i) {
        var s = t(this), n = t.extend(!0, {}, e), a = t.effects.setMode(s, e.mode || "effect"), o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = e.direction || "both", h = e.origin, l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }, c = {y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : l), n.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, m = e.scale || "both", g = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : h, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            }, to: {y: o.to.height / s.height, x: o.to.width / s.width}
        }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(c).concat(l), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = t.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), o.find("*[width]").each(function () {
            var i = t(this), s = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && t.effects.save(i, l), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, l)
            })
        })), o.animate(o.to, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function (t, e) {
                    o.css(e, function (e, i) {
                        var s = parseInt(i, 10), n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.shake = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", h = e.distance || 20, l = e.times || 3, c = 2 * l + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, m[d] = (p ? "+=" : "-=") + 2 * h, g[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++)n.animate(m, u, e.easing).animate(g, u, e.easing);
        n.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.slide = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.transfer = function (e, i) {
        var s = t(this), n = t(e.to), a = "fixed" === n.css("position"), o = t("body"), r = a ? o.scrollTop() : 0, h = a ? o.scrollLeft() : 0, l = n.offset(), c = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: u.top - r,
            left: u.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: a ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function () {
            d.remove(), i()
        })
    }
})(jQuery);
;/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }

    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy;
        b._touchStart = function (a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function () {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function () {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);
;/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function () {
    var block = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: noop,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: noop,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: noop,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    block.bullet = /(?:[*+-]|\d+\.)/;
    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
    block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
    block.list = replace(block.list)(/bull/g, block.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + block.def.source + ")")();
    block.blockquote = replace(block.blockquote)("def", block.def)();
    block._tag = "(?!(?:" + "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code" + "|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo" + "|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
    block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
    block.paragraph = replace(block.paragraph)("hr", block.hr)("heading", block.heading)("lheading", block.lheading)("blockquote", block.blockquote)("tag", "<" + block._tag)("def", block.def)();
    block.normal = merge({}, block);
    block.gfm = merge({}, block.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    });
    block.gfm.paragraph = replace(block.paragraph)("(?!", "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|")();
    block.tables = merge({}, block.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    });
    function Lexer(options) {
        this.tokens = [];
        this.tokens.links = {};
        this.options = options || marked.defaults;
        this.rules = block.normal;
        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = block.tables
            } else {
                this.rules = block.gfm
            }
        }
    }

    Lexer.rules = block;
    Lexer.lex = function (src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src)
    };
    Lexer.prototype.lex = function (src) {
        src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
        return this.token(src, true)
    };
    Lexer.prototype.token = function (src, top, bq) {
        var src = src.replace(/^ +$/gm, ""), next, loose, cap, bull, b, item, space, i, l;
        while (src) {
            if (cap = this.rules.newline.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[0].length > 1) {
                    this.tokens.push({type: "space"})
                }
            }
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                cap = cap[0].replace(/^ {4}/gm, "");
                this.tokens.push({type: "code", text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap});
                continue
            }
            if (cap = this.rules.fences.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "code", lang: cap[2], text: cap[3] || ""});
                continue
            }
            if (cap = this.rules.heading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "heading", depth: cap[1].length, text: cap[2]});
                continue
            }
            if (top && (cap = this.rules.nptable.exec(src))) {
                src = src.substring(cap[0].length);
                item = {
                    type: "table",
                    header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: cap[3].replace(/\n$/, "").split("\n")
                };
                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = "right"
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = "center"
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = "left"
                    } else {
                        item.align[i] = null
                    }
                }
                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].split(/ *\| */)
                }
                this.tokens.push(item);
                continue
            }
            if (cap = this.rules.lheading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "heading", depth: cap[2] === "=" ? 1 : 2, text: cap[1]});
                continue
            }
            if (cap = this.rules.hr.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "hr"});
                continue
            }
            if (cap = this.rules.blockquote.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "blockquote_start"});
                cap = cap[0].replace(/^ *> ?/gm, "");
                this.token(cap, top, true);
                this.tokens.push({type: "blockquote_end"});
                continue
            }
            if (cap = this.rules.list.exec(src)) {
                src = src.substring(cap[0].length);
                bull = cap[2];
                this.tokens.push({type: "list_start", ordered: bull.length > 1});
                cap = cap[0].match(this.rules.item);
                next = false;
                l = cap.length;
                i = 0;
                for (; i < l; i++) {
                    item = cap[i];
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, "");
                    if (~item.indexOf("\n ")) {
                        space -= item.length;
                        item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "")
                    }
                    if (this.options.smartLists && i !== l - 1) {
                        b = block.bullet.exec(cap[i + 1])[0];
                        if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                            src = cap.slice(i + 1).join("\n") + src;
                            i = l - 1
                        }
                    }
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== l - 1) {
                        next = item.charAt(item.length - 1) === "\n";
                        if (!loose)loose = next
                    }
                    this.tokens.push({type: loose ? "loose_item_start" : "list_item_start"});
                    this.token(item, false, bq);
                    this.tokens.push({type: "list_item_end"})
                }
                this.tokens.push({type: "list_end"});
                continue
            }
            if (cap = this.rules.html.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
                    text: cap[0]
                });
                continue
            }
            if (!bq && top && (cap = this.rules.def.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.links[cap[1].toLowerCase()] = {href: cap[2], title: cap[3]};
                continue
            }
            if (top && (cap = this.rules.table.exec(src))) {
                src = src.substring(cap[0].length);
                item = {
                    type: "table",
                    header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                };
                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = "right"
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = "center"
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = "left"
                    } else {
                        item.align[i] = null
                    }
                }
                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */)
                }
                this.tokens.push(item);
                continue
            }
            if (top && (cap = this.rules.paragraph.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: "paragraph",
                    text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
                });
                continue
            }
            if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({type: "text", text: cap[0]});
                continue
            }
            if (src) {
                throw new Error("Infinite loop on byte: " + src.charCodeAt(0))
            }
        }
        return this.tokens
    };
    var inline = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: noop,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: noop,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };
    inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
    inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
    inline.link = replace(inline.link)("inside", inline._inside)("href", inline._href)();
    inline.reflink = replace(inline.reflink)("inside", inline._inside)();
    inline.normal = merge({}, inline);
    inline.pedantic = merge({}, inline.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    });
    inline.gfm = merge({}, inline.normal, {
        escape: replace(inline.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
    });
    inline.breaks = merge({}, inline.gfm, {
        br: replace(inline.br)("{2,}", "*")(),
        text: replace(inline.gfm.text)("{2,}", "*")()
    });
    function InlineLexer(links, options) {
        this.options = options || marked.defaults;
        this.links = links;
        this.rules = inline.normal;
        this.renderer = this.options.renderer || new Renderer;
        this.renderer.options = this.options;
        if (!this.links) {
            throw new Error("Tokens array requires a `links` property.")
        }
        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = inline.breaks
            } else {
                this.rules = inline.gfm
            }
        } else if (this.options.pedantic) {
            this.rules = inline.pedantic
        }
    }

    InlineLexer.rules = inline;
    InlineLexer.output = function (src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.output(src)
    };
    InlineLexer.prototype.output = function (src) {
        var out = "", link, text, href, cap;
        while (src) {
            if (cap = this.rules.escape.exec(src)) {
                src = src.substring(cap[0].length);
                out += cap[1];
                continue
            }
            if (cap = this.rules.autolink.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[2] === "@") {
                    text = cap[1].charAt(6) === ":" ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
                    href = this.mangle("mailto:") + text
                } else {
                    text = escape(cap[1]);
                    href = text
                }
                out += this.renderer.link(href, null, text);
                continue
            }
            if (!this.inLink && (cap = this.rules.url.exec(src))) {
                src = src.substring(cap[0].length);
                text = escape(cap[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue
            }
            if (cap = this.rules.tag.exec(src)) {
                if (!this.inLink && /^<a /i.test(cap[0])) {
                    this.inLink = true
                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                    this.inLink = false
                }
                src = src.substring(cap[0].length);
                out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
                continue
            }
            if (cap = this.rules.link.exec(src)) {
                src = src.substring(cap[0].length);
                this.inLink = true;
                out += this.outputLink(cap, {href: cap[2], title: cap[3]});
                this.inLink = false;
                continue
            }
            if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
                src = src.substring(cap[0].length);
                link = (cap[2] || cap[1]).replace(/\s+/g, " ");
                link = this.links[link.toLowerCase()];
                if (!link || !link.href) {
                    out += cap[0].charAt(0);
                    src = cap[0].substring(1) + src;
                    continue
                }
                this.inLink = true;
                out += this.outputLink(cap, link);
                this.inLink = false;
                continue
            }
            if (cap = this.rules.strong.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.strong(this.output(cap[2] || cap[1]));
                continue
            }
            if (cap = this.rules.em.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.em(this.output(cap[2] || cap[1]));
                continue
            }
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.codespan(escape(cap[2], true));
                continue
            }
            if (cap = this.rules.br.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.br();
                continue
            }
            if (cap = this.rules.del.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.del(this.output(cap[1]));
                continue
            }
            if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.text(escape(this.smartypants(cap[0])));
                continue
            }
            if (src) {
                throw new Error("Infinite loop on byte: " + src.charCodeAt(0))
            }
        }
        return out
    };
    InlineLexer.prototype.outputLink = function (cap, link) {
        var href = escape(link.href), title = link.title ? escape(link.title) : null;
        return cap[0].charAt(0) !== "!" ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]))
    };
    InlineLexer.prototype.smartypants = function (text) {
        if (!this.options.smartypants)return text;
        return text.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
    };
    InlineLexer.prototype.mangle = function (text) {
        if (!this.options.mangle)return text;
        var out = "", l = text.length, i = 0, ch;
        for (; i < l; i++) {
            ch = text.charCodeAt(i);
            if (Math.random() > .5) {
                ch = "x" + ch.toString(16)
            }
            out += "&#" + ch + ";"
        }
        return out
    };
    function Renderer(options) {
        this.options = options || {}
    }

    Renderer.prototype.code = function (code, lang, escaped) {
        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out
            }
        }
        if (!lang) {
            return "<pre><code>" + (escaped ? code : escape(code, true)) + "\n</code></pre>"
        }
        return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "\n</code></pre>\n"
    };
    Renderer.prototype.blockquote = function (quote) {
        return "<blockquote>\n" + quote + "</blockquote>\n"
    };
    Renderer.prototype.html = function (html) {
        return html
    };
    Renderer.prototype.heading = function (text, level, raw) {
        return "<h" + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-") + '">' + text + "</h" + level + ">\n"
    };
    Renderer.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    };
    Renderer.prototype.list = function (body, ordered) {
        var type = ordered ? "ol" : "ul";
        return "<" + type + ">\n" + body + "</" + type + ">\n"
    };
    Renderer.prototype.listitem = function (text) {
        return "<li>" + text + "</li>\n"
    };
    Renderer.prototype.paragraph = function (text) {
        return "<p>" + text + "</p>\n"
    };
    Renderer.prototype.table = function (header, body) {
        return "<table>\n" + "<thead>\n" + header + "</thead>\n" + "<tbody>\n" + body + "</tbody>\n" + "</table>\n"
    };
    Renderer.prototype.tablerow = function (content) {
        return "<tr>\n" + content + "</tr>\n"
    };
    Renderer.prototype.tablecell = function (content, flags) {
        var type = flags.header ? "th" : "td";
        var tag = flags.align ? "<" + type + ' style="text-align:' + flags.align + '">' : "<" + type + ">";
        return tag + content + "</" + type + ">\n"
    };
    Renderer.prototype.strong = function (text) {
        return "<strong>" + text + "</strong>"
    };
    Renderer.prototype.em = function (text) {
        return "<em>" + text + "</em>"
    };
    Renderer.prototype.codespan = function (text) {
        return "<code>" + text + "</code>"
    };
    Renderer.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
    };
    Renderer.prototype.del = function (text) {
        return "<del>" + text + "</del>"
    };
    Renderer.prototype.link = function (href, title, text) {
        if (this.options.sanitize) {
            try {
                var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (e) {
                return ""
            }
            if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0) {
                return ""
            }
        }
        var out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"'
        }
        out += ">" + text + "</a>";
        return out
    };
    Renderer.prototype.image = function (href, title, text) {
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"'
        }
        out += this.options.xhtml ? "/>" : ">";
        return out
    };
    Renderer.prototype.text = function (text) {
        return text
    };
    function Parser(options) {
        this.tokens = [];
        this.token = null;
        this.options = options || marked.defaults;
        this.options.renderer = this.options.renderer || new Renderer;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options
    }

    Parser.parse = function (src, options, renderer) {
        var parser = new Parser(options, renderer);
        return parser.parse(src)
    };
    Parser.prototype.parse = function (src) {
        this.inline = new InlineLexer(src.links, this.options, this.renderer);
        this.tokens = src.reverse();
        var out = "";
        while (this.next()) {
            out += this.tok()
        }
        return out
    };
    Parser.prototype.next = function () {
        return this.token = this.tokens.pop()
    };
    Parser.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
    };
    Parser.prototype.parseText = function () {
        var body = this.token.text;
        while (this.peek().type === "text") {
            body += "\n" + this.next().text
        }
        return this.inline.output(body)
    };
    Parser.prototype.tok = function () {
        switch (this.token.type) {
            case"space": {
                return ""
            }
            case"hr": {
                return this.renderer.hr()
            }
            case"heading": {
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text)
            }
            case"code": {
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped)
            }
            case"table": {
                var header = "", body = "", i, row, cell, flags, j;
                cell = "";
                for (i = 0; i < this.token.header.length; i++) {
                    flags = {header: true, align: this.token.align[i]};
                    cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
                        header: true,
                        align: this.token.align[i]
                    })
                }
                header += this.renderer.tablerow(cell);
                for (i = 0; i < this.token.cells.length; i++) {
                    row = this.token.cells[i];
                    cell = "";
                    for (j = 0; j < row.length; j++) {
                        cell += this.renderer.tablecell(this.inline.output(row[j]), {
                            header: false,
                            align: this.token.align[j]
                        })
                    }
                    body += this.renderer.tablerow(cell)
                }
                return this.renderer.table(header, body)
            }
            case"blockquote_start": {
                var body = "";
                while (this.next().type !== "blockquote_end") {
                    body += this.tok()
                }
                return this.renderer.blockquote(body)
            }
            case"list_start": {
                var body = "", ordered = this.token.ordered;
                while (this.next().type !== "list_end") {
                    body += this.tok()
                }
                return this.renderer.list(body, ordered)
            }
            case"list_item_start": {
                var body = "";
                while (this.next().type !== "list_item_end") {
                    body += this.token.type === "text" ? this.parseText() : this.tok()
                }
                return this.renderer.listitem(body)
            }
            case"loose_item_start": {
                var body = "";
                while (this.next().type !== "list_item_end") {
                    body += this.tok()
                }
                return this.renderer.listitem(body)
            }
            case"html": {
                var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
                return this.renderer.html(html)
            }
            case"paragraph": {
                return this.renderer.paragraph(this.inline.output(this.token.text))
            }
            case"text": {
                return this.renderer.paragraph(this.parseText())
            }
        }
    };
    function escape(html, encode) {
        return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function unescape(html) {
        return html.replace(/&([#\w]+);/g, function (_, n) {
            n = n.toLowerCase();
            if (n === "colon")return ":";
            if (n.charAt(0) === "#") {
                return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1))
            }
            return ""
        })
    }

    function replace(regex, opt) {
        regex = regex.source;
        opt = opt || "";
        return function self(name, val) {
            if (!name)return new RegExp(regex, opt);
            val = val.source || val;
            val = val.replace(/(^|[^\[])\^/g, "$1");
            regex = regex.replace(name, val);
            return self
        }
    }

    function noop() {
    }

    noop.exec = noop;
    function merge(obj) {
        var i = 1, target, key;
        for (; i < arguments.length; i++) {
            target = arguments[i];
            for (key in target) {
                if (Object.prototype.hasOwnProperty.call(target, key)) {
                    obj[key] = target[key]
                }
            }
        }
        return obj
    }

    function marked(src, opt, callback) {
        if (callback || typeof opt === "function") {
            if (!callback) {
                callback = opt;
                opt = null
            }
            opt = merge({}, marked.defaults, opt || {});
            var highlight = opt.highlight, tokens, pending, i = 0;
            try {
                tokens = Lexer.lex(src, opt)
            } catch (e) {
                return callback(e)
            }
            pending = tokens.length;
            var done = function (err) {
                if (err) {
                    opt.highlight = highlight;
                    return callback(err)
                }
                var out;
                try {
                    out = Parser.parse(tokens, opt)
                } catch (e) {
                    err = e
                }
                opt.highlight = highlight;
                return err ? callback(err) : callback(null, out)
            };
            if (!highlight || highlight.length < 3) {
                return done()
            }
            delete opt.highlight;
            if (!pending)return done();
            for (; i < tokens.length; i++) {
                (function (token) {
                    if (token.type !== "code") {
                        return --pending || done()
                    }
                    return highlight(token.text, token.lang, function (err, code) {
                        if (err)return done(err);
                        if (code == null || code === token.text) {
                            return --pending || done()
                        }
                        token.text = code;
                        token.escaped = true;
                        --pending || done()
                    })
                })(tokens[i])
            }
            return
        }
        try {
            if (opt)opt = merge({}, marked.defaults, opt);
            return Parser.parse(Lexer.lex(src, opt), opt)
        } catch (e) {
            e.message += "\nPlease report this to https://github.com/chjj/marked.";
            if ((opt || marked.defaults).silent) {
                return "<p>An error occured:</p><pre>" + escape(e.message + "", true) + "</pre>"
            }
            throw e
        }
    }

    marked.options = marked.setOptions = function (opt) {
        merge(marked.defaults, opt);
        return marked
    };
    marked.defaults = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        sanitizer: null,
        mangle: true,
        smartLists: false,
        silent: false,
        highlight: null,
        langPrefix: "lang-",
        smartypants: false,
        headerPrefix: "",
        renderer: new Renderer,
        xhtml: false
    };
    marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;
    marked.parse = marked;
    if (typeof module !== "undefined" && typeof exports === "object") {
        module.exports = marked
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return marked
        })
    } else {
        this.marked = marked
    }
}).call(function () {
    return this || (typeof window !== "undefined" ? window : global)
}());
;(function () {
    function t(t) {
        return t.target
    }

    function n(t) {
        return t.source
    }

    function e(t, n) {
        try {
            for (var e in n)Object.defineProperty(t.prototype, e, {value: n[e], enumerable: !1})
        } catch (r) {
            t.prototype = n
        }
    }

    function r(t) {
        for (var n = -1, e = t.length, r = []; e > ++n;)r.push(t[n]);
        return r
    }

    function i(t) {
        return Array.prototype.slice.call(t)
    }

    function u() {
    }

    function a(t) {
        return t
    }

    function o() {
        return !0
    }

    function c(t) {
        return "function" == typeof t ? t : function () {
            return t
        }
    }

    function l(t, n, e) {
        return function () {
            var r = e.apply(n, arguments);
            return arguments.length ? t : r
        }
    }

    function s(t) {
        return null != t && !isNaN(t)
    }

    function f(t) {
        return t.length
    }

    function h(t) {
        return t.trim().replace(/\s+/g, " ")
    }

    function d(t) {
        for (var n = 1; t * n % 1;)n *= 10;
        return n
    }

    function g(t) {
        return 1 === t.length ? function (n, e) {
            t(null == n ? e : null)
        } : t
    }

    function p(t) {
        return t.responseText
    }

    function m(t) {
        return JSON.parse(t.responseText)
    }

    function v(t) {
        var n = document.createRange();
        return n.selectNode(document.body), n.createContextualFragment(t.responseText)
    }

    function y(t) {
        return t.responseXML
    }

    function M() {
    }

    function b(t) {
        function n() {
            for (var n, r = e, i = -1, u = r.length; u > ++i;)(n = r[i].on) && n.apply(this, arguments);
            return t
        }

        var e = [], r = new u;
        return n.on = function (n, i) {
            var u, a = r.get(n);
            return 2 > arguments.length ? a && a.on : (a && (a.on = null, e = e.slice(0, u = e.indexOf(a)).concat(e.slice(u + 1)), r.remove(n)), i && e.push(r.set(n, {on: i})), t)
        }, n
    }

    function x(t, n) {
        return n - (t ? 1 + Math.floor(Math.log(t + Math.pow(10, 1 + Math.floor(Math.log(t) / Math.LN10) - n)) / Math.LN10) : 1)
    }

    function _(t) {
        return t + ""
    }

    function w(t, n) {
        var e = Math.pow(10, 3 * Math.abs(8 - n));
        return {
            scale: n > 8 ? function (t) {
                return t / e
            } : function (t) {
                return t * e
            }, symbol: t
        }
    }

    function S(t) {
        return function (n) {
            return 0 >= n ? 0 : n >= 1 ? 1 : t(n)
        }
    }

    function k(t) {
        return function (n) {
            return 1 - t(1 - n)
        }
    }

    function E(t) {
        return function (n) {
            return .5 * (.5 > n ? t(2 * n) : 2 - t(2 - 2 * n))
        }
    }

    function A(t) {
        return t * t
    }

    function N(t) {
        return t * t * t
    }

    function T(t) {
        if (0 >= t)return 0;
        if (t >= 1)return 1;
        var n = t * t, e = n * t;
        return 4 * (.5 > t ? e : 3 * (t - n) + e - .75)
    }

    function q(t) {
        return function (n) {
            return Math.pow(n, t)
        }
    }

    function C(t) {
        return 1 - Math.cos(t * Ru / 2)
    }

    function z(t) {
        return Math.pow(2, 10 * (t - 1))
    }

    function D(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function L(t, n) {
        var e;
        return 2 > arguments.length && (n = .45), arguments.length ? e = n / (2 * Ru) * Math.asin(1 / t) : (t = 1, e = n / 4), function (r) {
            return 1 + t * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * Ru / n)
        }
    }

    function F(t) {
        return t || (t = 1.70158), function (n) {
            return n * n * ((t + 1) * n - t)
        }
    }

    function H(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }

    function R() {
        d3.event.stopPropagation(), d3.event.preventDefault()
    }

    function P() {
        for (var t, n = d3.event; t = n.sourceEvent;)n = t;
        return n
    }

    function j(t) {
        for (var n = new M, e = 0, r = arguments.length; r > ++e;)n[arguments[e]] = b(n);
        return n.of = function (e, r) {
            return function (i) {
                try {
                    var u = i.sourceEvent = d3.event;
                    i.target = t, d3.event = i, n[i.type].apply(e, r)
                } finally {
                    d3.event = u
                }
            }
        }, n
    }

    function O(t) {
        var n = [t.a, t.b], e = [t.c, t.d], r = U(n), i = Y(n, e), u = U(I(e, n, -i)) || 0;
        n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * Ou, this.translate = [t.e, t.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Ou : 0
    }

    function Y(t, n) {
        return t[0] * n[0] + t[1] * n[1]
    }

    function U(t) {
        var n = Math.sqrt(Y(t, t));
        return n && (t[0] /= n, t[1] /= n), n
    }

    function I(t, n, e) {
        return t[0] += e * n[0], t[1] += e * n[1], t
    }

    function V(t) {
        return "transform" == t ? d3.interpolateTransform : d3.interpolate
    }

    function X(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0, function (e) {
            return (e - t) * n
        }
    }

    function Z(t, n) {
        return n = n - (t = +t) ? 1 / (n - t) : 0, function (e) {
            return Math.max(0, Math.min(1, (e - t) * n))
        }
    }

    function B() {
    }

    function $(t, n, e) {
        return new J(t, n, e)
    }

    function J(t, n, e) {
        this.r = t, this.g = n, this.b = e
    }

    function G(t) {
        return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }

    function K(t, n, e) {
        var r, i, u, a = 0, o = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t))switch (i = r[2].split(","), r[1]) {
            case"hsl":
                return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case"rgb":
                return n(nn(i[0]), nn(i[1]), nn(i[2]))
        }
        return (u = aa.get(t)) ? n(u.r, u.g, u.b) : (null != t && "#" === t.charAt(0) && (4 === t.length ? (a = t.charAt(1), a += a, o = t.charAt(2), o += o, c = t.charAt(3), c += c) : 7 === t.length && (a = t.substring(1, 3), o = t.substring(3, 5), c = t.substring(5, 7)), a = parseInt(a, 16), o = parseInt(o, 16), c = parseInt(c, 16)), n(a, o, c))
    }

    function W(t, n, e) {
        var r, i, u = Math.min(t /= 255, n /= 255, e /= 255), a = Math.max(t, n, e), o = a - u, c = (a + u) / 2;
        return o ? (i = .5 > c ? o / (a + u) : o / (2 - a - u), r = t == a ? (n - e) / o + (e > n ? 6 : 0) : n == a ? (e - t) / o + 2 : (t - n) / o + 4, r *= 60) : i = r = 0, en(r, i, c)
    }

    function Q(t, n, e) {
        t = tn(t), n = tn(n), e = tn(e);
        var r = gn((.4124564 * t + .3575761 * n + .1804375 * e) / sa), i = gn((.2126729 * t + .7151522 * n + .072175 * e) / fa), u = gn((.0193339 * t + .119192 * n + .9503041 * e) / ha);
        return ln(116 * i - 16, 500 * (r - i), 200 * (i - u))
    }

    function tn(t) {
        return .04045 >= (t /= 255) ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function nn(t) {
        var n = parseFloat(t);
        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
    }

    function en(t, n, e) {
        return new rn(t, n, e)
    }

    function rn(t, n, e) {
        this.h = t, this.s = n, this.l = e
    }

    function un(t, n, e) {
        function r(t) {
            return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? u + (a - u) * t / 60 : 180 > t ? a : 240 > t ? u + (a - u) * (240 - t) / 60 : u
        }

        function i(t) {
            return Math.round(255 * r(t))
        }

        var u, a;
        return t %= 360, 0 > t && (t += 360), n = 0 > n ? 0 : n > 1 ? 1 : n, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + n) : e + n - e * n, u = 2 * e - a, $(i(t + 120), i(t), i(t - 120))
    }

    function an(t, n, e) {
        return new on(t, n, e)
    }

    function on(t, n, e) {
        this.h = t, this.c = n, this.l = e
    }

    function cn(t, n, e) {
        return ln(e, Math.cos(t *= ju) * n, Math.sin(t) * n)
    }

    function ln(t, n, e) {
        return new sn(t, n, e)
    }

    function sn(t, n, e) {
        this.l = t, this.a = n, this.b = e
    }

    function fn(t, n, e) {
        var r = (t + 16) / 116, i = r + n / 500, u = r - e / 200;
        return i = dn(i) * sa, r = dn(r) * fa, u = dn(u) * ha, $(pn(3.2404542 * i - 1.5371385 * r - .4985314 * u), pn(-.969266 * i + 1.8760108 * r + .041556 * u), pn(.0556434 * i - .2040259 * r + 1.0572252 * u))
    }

    function hn(t, n, e) {
        return an(180 * (Math.atan2(e, n) / Ru), Math.sqrt(n * n + e * e), t)
    }

    function dn(t) {
        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
    }

    function gn(t) {
        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }

    function pn(t) {
        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }

    function mn(t) {
        return Iu(t, Ma), t
    }

    function vn(t) {
        return function () {
            return ga(t, this)
        }
    }

    function yn(t) {
        return function () {
            return pa(t, this)
        }
    }

    function Mn(t, n) {
        function e() {
            this.removeAttribute(t)
        }

        function r() {
            this.removeAttributeNS(t.space, t.local)
        }

        function i() {
            this.setAttribute(t, n)
        }

        function u() {
            this.setAttributeNS(t.space, t.local, n)
        }

        function a() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        function o() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }

        return t = d3.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? o : a : t.local ? u : i
    }

    function bn(t) {
        return RegExp("(?:^|\\s+)" + d3.requote(t) + "(?:\\s+|$)", "g")
    }

    function xn(t, n) {
        function e() {
            for (var e = -1; i > ++e;)t[e](this, n)
        }

        function r() {
            for (var e = -1, r = n.apply(this, arguments); i > ++e;)t[e](this, r)
        }

        t = t.trim().split(/\s+/).map(_n);
        var i = t.length;
        return "function" == typeof n ? r : e
    }

    function _n(t) {
        var n = bn(t);
        return function (e, r) {
            if (i = e.classList)return r ? i.add(t) : i.remove(t);
            var i = e.className, u = null != i.baseVal, a = u ? i.baseVal : i;
            r ? (n.lastIndex = 0, n.test(a) || (a = h(a + " " + t), u ? i.baseVal = a : e.className = a)) : a && (a = h(a.replace(n, " ")), u ? i.baseVal = a : e.className = a)
        }
    }

    function wn(t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        function i() {
            this.style.setProperty(t, n, e)
        }

        function u() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }

        return null == n ? r : "function" == typeof n ? u : i
    }

    function Sn(t, n) {
        function e() {
            delete this[t]
        }

        function r() {
            this[t] = n
        }

        function i() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }

        return null == n ? e : "function" == typeof n ? i : r
    }

    function kn(t) {
        return {__data__: t}
    }

    function En(t) {
        return function () {
            return ya(this, t)
        }
    }

    function An(t) {
        return arguments.length || (t = d3.ascending), function (n, e) {
            return t(n && n.__data__, e && e.__data__)
        }
    }

    function Nn(t, n, e) {
        function r() {
            var n = this[u];
            n && (this.removeEventListener(t, n, n.$), delete this[u])
        }

        function i() {
            function i(t) {
                var e = d3.event;
                d3.event = t, o[0] = a.__data__;
                try {
                    n.apply(a, o)
                } finally {
                    d3.event = e
                }
            }

            var a = this, o = Yu(arguments);
            r.call(this), this.addEventListener(t, this[u] = i, i.$ = e), i._ = n
        }

        var u = "__on" + t, a = t.indexOf(".");
        return a > 0 && (t = t.substring(0, a)), n ? i : r
    }

    function Tn(t, n) {
        for (var e = 0, r = t.length; r > e; e++)for (var i, u = t[e], a = 0, o = u.length; o > a; a++)(i = u[a]) && n(i, a, e);
        return t
    }

    function qn(t) {
        return Iu(t, xa), t
    }

    function Cn(t, n) {
        return Iu(t, wa), t.id = n, t
    }

    function zn(t, n, e, r) {
        var i = t.__transition__ || (t.__transition__ = {active: 0, count: 0}), a = i[e];
        if (!a) {
            var o = r.time;
            return a = i[e] = {
                tween: new u,
                event: d3.dispatch("start", "end"),
                time: o,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++i.count, d3.timer(function (r) {
                function u(r) {
                    return i.active > e ? l() : (i.active = e, h.start.call(t, s, n), a.tween.forEach(function (e, r) {
                        (r = r.call(t, s, n)) && p.push(r)
                    }), c(r) || d3.timer(c, 0, o), 1)
                }

                function c(r) {
                    if (i.active !== e)return l();
                    for (var u = (r - d) / g, a = f(u), o = p.length; o > 0;)p[--o].call(t, a);
                    return u >= 1 ? (l(), h.end.call(t, s, n), 1) : void 0
                }

                function l() {
                    return --i.count ? delete i[e] : delete t.__transition__, 1
                }

                var s = t.__data__, f = a.ease, h = a.event, d = a.delay, g = a.duration, p = [];
                return r >= d ? u(r) : d3.timer(u, d, o), 1
            }, 0, o), a
        }
    }

    function Dn(t) {
        return null == t && (t = ""), function () {
            this.textContent = t
        }
    }

    function Ln(t, n, e, r) {
        var i = t.id;
        return Tn(t, "function" == typeof e ? function (t, u, a) {
            t.__transition__[i].tween.set(n, r(e.call(t, t.__data__, u, a)))
        } : (e = r(e), function (t) {
            t.__transition__[i].tween.set(n, e)
        }))
    }

    function Fn() {
        for (var t, n = Date.now(), e = qa; e;)t = n - e.then, t >= e.delay && (e.flush = e.callback(t)), e = e.next;
        var r = Hn() - n;
        r > 24 ? (isFinite(r) && (clearTimeout(Aa), Aa = setTimeout(Fn, r)), Ea = 0) : (Ea = 1, Ca(Fn))
    }

    function Hn() {
        for (var t = null, n = qa, e = 1 / 0; n;)n.flush ? (delete Ta[n.callback.id], n = t ? t.next = n.next : qa = n.next) : (e = Math.min(e, n.then + n.delay), n = (t = n).next);
        return e
    }

    function Rn(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > za && (window.scrollX || window.scrollY)) {
                e = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var i = e[0][0].getScreenCTM();
                za = !(i.f || i.e), e.remove()
            }
            return za ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = t.getBoundingClientRect();
        return [n.clientX - u.left - t.clientLeft, n.clientY - u.top - t.clientTop]
    }

    function Pn() {
    }

    function jn(t) {
        var n = t[0], e = t[t.length - 1];
        return e > n ? [n, e] : [e, n]
    }

    function On(t) {
        return t.rangeExtent ? t.rangeExtent() : jn(t.range())
    }

    function Yn(t, n) {
        var e, r = 0, i = t.length - 1, u = t[r], a = t[i];
        return u > a && (e = r, r = i, i = e, e = u, u = a, a = e), (n = n(a - u)) && (t[r] = n.floor(u), t[i] = n.ceil(a)), t
    }

    function Un() {
        return Math
    }

    function In(t, n, e, r) {
        function i() {
            var i = Math.min(t.length, n.length) > 2 ? Gn : Jn, c = r ? Z : X;
            return a = i(t, n, c, e), o = i(n, t, c, d3.interpolate), u
        }

        function u(t) {
            return a(t)
        }

        var a, o;
        return u.invert = function (t) {
            return o(t)
        }, u.domain = function (n) {
            return arguments.length ? (t = n.map(Number), i()) : t
        }, u.range = function (t) {
            return arguments.length ? (n = t, i()) : n
        }, u.rangeRound = function (t) {
            return u.range(t).interpolate(d3.interpolateRound)
        }, u.clamp = function (t) {
            return arguments.length ? (r = t, i()) : r
        }, u.interpolate = function (t) {
            return arguments.length ? (e = t, i()) : e
        }, u.ticks = function (n) {
            return Bn(t, n)
        }, u.tickFormat = function (n) {
            return $n(t, n)
        }, u.nice = function () {
            return Yn(t, Xn), i()
        }, u.copy = function () {
            return In(t, n, e, r)
        }, i()
    }

    function Vn(t, n) {
        return d3.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
    }

    function Xn(t) {
        return t = Math.pow(10, Math.round(Math.log(t) / Math.LN10) - 1), t && {
            floor: function (n) {
                return Math.floor(n / t) * t
            }, ceil: function (n) {
                return Math.ceil(n / t) * t
            }
        }
    }

    function Zn(t, n) {
        var e = jn(t), r = e[1] - e[0], i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)), u = n / r * i;
        return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e
    }

    function Bn(t, n) {
        return d3.range.apply(d3, Zn(t, n))
    }

    function $n(t, n) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(Zn(t, n)[2]) / Math.LN10 + .01)) + "f")
    }

    function Jn(t, n, e, r) {
        var i = e(t[0], t[1]), u = r(n[0], n[1]);
        return function (t) {
            return u(i(t))
        }
    }

    function Gn(t, n, e, r) {
        var i = [], u = [], a = 0, o = Math.min(t.length, n.length) - 1;
        for (t[o] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); o >= ++a;)i.push(e(t[a - 1], t[a])), u.push(r(n[a - 1], n[a]));
        return function (n) {
            var e = d3.bisect(t, n, 1, o) - 1;
            return u[e](i[e](n))
        }
    }

    function Kn(t, n) {
        function e(e) {
            return t(n(e))
        }

        var r = n.pow;
        return e.invert = function (n) {
            return r(t.invert(n))
        }, e.domain = function (i) {
            return arguments.length ? (n = 0 > i[0] ? Qn : Wn, r = n.pow, t.domain(i.map(n)), e) : t.domain().map(r)
        }, e.nice = function () {
            return t.domain(Yn(t.domain(), Un)), e
        }, e.ticks = function () {
            var e = jn(t.domain()), i = [];
            if (e.every(isFinite)) {
                var u = Math.floor(e[0]), a = Math.ceil(e[1]), o = r(e[0]), c = r(e[1]);
                if (n === Qn)for (i.push(r(u)); a > u++;)for (var l = 9; l > 0; l--)i.push(r(u) * l); else {
                    for (; a > u; u++)for (var l = 1; 10 > l; l++)i.push(r(u) * l);
                    i.push(r(u))
                }
                for (u = 0; o > i[u]; u++);
                for (a = i.length; i[a - 1] > c; a--);
                i = i.slice(u, a)
            }
            return i
        }, e.tickFormat = function (t, i) {
            if (2 > arguments.length && (i = Da), !arguments.length)return i;
            var u, a = Math.max(.1, t / e.ticks().length), o = n === Qn ? (u = -1e-12, Math.floor) : (u = 1e-12, Math.ceil);
            return function (t) {
                return a >= t / r(o(n(t) + u)) ? i(t) : ""
            }
        }, e.copy = function () {
            return Kn(t.copy(), n)
        }, Vn(e, t)
    }

    function Wn(t) {
        return Math.log(0 > t ? 0 : t) / Math.LN10
    }

    function Qn(t) {
        return -Math.log(t > 0 ? 0 : -t) / Math.LN10
    }

    function te(t, n) {
        function e(n) {
            return t(r(n))
        }

        var r = ne(n), i = ne(1 / n);
        return e.invert = function (n) {
            return i(t.invert(n))
        }, e.domain = function (n) {
            return arguments.length ? (t.domain(n.map(r)), e) : t.domain().map(i)
        }, e.ticks = function (t) {
            return Bn(e.domain(), t)
        }, e.tickFormat = function (t) {
            return $n(e.domain(), t)
        }, e.nice = function () {
            return e.domain(Yn(e.domain(), Xn))
        }, e.exponent = function (t) {
            if (!arguments.length)return n;
            var u = e.domain();
            return r = ne(n = t), i = ne(1 / n), e.domain(u)
        }, e.copy = function () {
            return te(t.copy(), n)
        }, Vn(e, t)
    }

    function ne(t) {
        return function (n) {
            return 0 > n ? -Math.pow(-n, t) : Math.pow(n, t)
        }
    }

    function ee(t, n) {
        function e(n) {
            return a[((i.get(n) || i.set(n, t.push(n))) - 1) % a.length]
        }

        function r(n, e) {
            return d3.range(t.length).map(function (t) {
                return n + e * t
            })
        }

        var i, a, o;
        return e.domain = function (r) {
            if (!arguments.length)return t;
            t = [], i = new u;
            for (var a, o = -1, c = r.length; c > ++o;)i.has(a = r[o]) || i.set(a, t.push(a));
            return e[n.t].apply(e, n.a)
        }, e.range = function (t) {
            return arguments.length ? (a = t, o = 0, n = {t: "range", a: arguments}, e) : a
        }, e.rangePoints = function (i, u) {
            2 > arguments.length && (u = 0);
            var c = i[0], l = i[1], s = (l - c) / (Math.max(1, t.length - 1) + u);
            return a = r(2 > t.length ? (c + l) / 2 : c + s * u / 2, s), o = 0, n = {t: "rangePoints", a: arguments}, e
        }, e.rangeBands = function (i, u, c) {
            2 > arguments.length && (u = 0), 3 > arguments.length && (c = u);
            var l = i[1] < i[0], s = i[l - 0], f = i[1 - l], h = (f - s) / (t.length - u + 2 * c);
            return a = r(s + h * c, h), l && a.reverse(), o = h * (1 - u), n = {t: "rangeBands", a: arguments}, e
        }, e.rangeRoundBands = function (i, u, c) {
            2 > arguments.length && (u = 0), 3 > arguments.length && (c = u);
            var l = i[1] < i[0], s = i[l - 0], f = i[1 - l], h = Math.floor((f - s) / (t.length - u + 2 * c)), d = f - s - (t.length - u) * h;
            return a = r(s + Math.round(d / 2), h), l && a.reverse(), o = Math.round(h * (1 - u)), n = {
                t: "rangeRoundBands",
                a: arguments
            }, e
        }, e.rangeBand = function () {
            return o
        }, e.rangeExtent = function () {
            return jn(n.a[0])
        }, e.copy = function () {
            return ee(t, n)
        }, e.domain(t)
    }

    function re(t, n) {
        function e() {
            var e = 0, u = n.length;
            for (i = []; u > ++e;)i[e - 1] = d3.quantile(t, e / u);
            return r
        }

        function r(t) {
            return isNaN(t = +t) ? 0 / 0 : n[d3.bisect(i, t)]
        }

        var i;
        return r.domain = function (n) {
            return arguments.length ? (t = n.filter(function (t) {
                return !isNaN(t)
            }).sort(d3.ascending), e()) : t
        }, r.range = function (t) {
            return arguments.length ? (n = t, e()) : n
        }, r.quantiles = function () {
            return i
        }, r.copy = function () {
            return re(t, n)
        }, e()
    }

    function ie(t, n, e) {
        function r(n) {
            return e[Math.max(0, Math.min(a, Math.floor(u * (n - t))))]
        }

        function i() {
            return u = e.length / (n - t), a = e.length - 1, r
        }

        var u, a;
        return r.domain = function (e) {
            return arguments.length ? (t = +e[0], n = +e[e.length - 1], i()) : [t, n]
        }, r.range = function (t) {
            return arguments.length ? (e = t, i()) : e
        }, r.copy = function () {
            return ie(t, n, e)
        }, i()
    }

    function ue(t, n) {
        function e(e) {
            return n[d3.bisect(t, e)]
        }

        return e.domain = function (n) {
            return arguments.length ? (t = n, e) : t
        }, e.range = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.copy = function () {
            return ue(t, n)
        }, e
    }

    function ae(t) {
        function n(t) {
            return +t
        }

        return n.invert = n, n.domain = n.range = function (e) {
            return arguments.length ? (t = e.map(n), n) : t
        }, n.ticks = function (n) {
            return Bn(t, n)
        }, n.tickFormat = function (n) {
            return $n(t, n)
        }, n.copy = function () {
            return ae(t)
        }, n
    }

    function oe(t) {
        return t.innerRadius
    }

    function ce(t) {
        return t.outerRadius
    }

    function le(t) {
        return t.startAngle
    }

    function se(t) {
        return t.endAngle
    }

    function fe(t) {
        function n(n) {
            function a() {
                s.push("M", u(t(f), l))
            }

            for (var o, s = [], f = [], h = -1, d = n.length, g = c(e), p = c(r); d > ++h;)i.call(this, o = n[h], h) ? f.push([+g.call(this, o, h), +p.call(this, o, h)]) : f.length && (a(), f = []);
            return f.length && a(), s.length ? s.join("") : null
        }

        var e = he, r = de, i = o, u = ge, a = u.key, l = .7;
        return n.x = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.y = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.defined = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.interpolate = function (t) {
            return arguments.length ? (a = "function" == typeof t ? u = t : (u = Oa.get(t) || ge).key, n) : a
        }, n.tension = function (t) {
            return arguments.length ? (l = t, n) : l
        }, n
    }

    function he(t) {
        return t[0]
    }

    function de(t) {
        return t[1]
    }

    function ge(t) {
        return t.join("L")
    }

    function pe(t) {
        return ge(t) + "Z"
    }

    function me(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; e > ++n;)i.push("V", (r = t[n])[1], "H", r[0]);
        return i.join("")
    }

    function ve(t) {
        for (var n = 0, e = t.length, r = t[0], i = [r[0], ",", r[1]]; e > ++n;)i.push("H", (r = t[n])[0], "V", r[1]);
        return i.join("")
    }

    function ye(t, n) {
        return 4 > t.length ? ge(t) : t[1] + xe(t.slice(1, t.length - 1), _e(t, n))
    }

    function Me(t, n) {
        return 3 > t.length ? ge(t) : t[0] + xe((t.push(t[0]), t), _e([t[t.length - 2]].concat(t, [t[1]]), n))
    }

    function be(t, n) {
        return 3 > t.length ? ge(t) : t[0] + xe(t, _e(t, n))
    }

    function xe(t, n) {
        if (1 > n.length || t.length != n.length && t.length != n.length + 2)return ge(t);
        var e = t.length != n.length, r = "", i = t[0], u = t[1], a = n[0], o = a, c = 1;
        if (e && (r += "Q" + (u[0] - 2 * a[0] / 3) + "," + (u[1] - 2 * a[1] / 3) + "," + u[0] + "," + u[1], i = t[1], c = 2), n.length > 1) {
            o = n[1], u = t[c], c++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1];
            for (var l = 2; n.length > l; l++, c++)u = t[c], o = n[l], r += "S" + (u[0] - o[0]) + "," + (u[1] - o[1]) + "," + u[0] + "," + u[1]
        }
        if (e) {
            var s = t[c];
            r += "Q" + (u[0] + 2 * o[0] / 3) + "," + (u[1] + 2 * o[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }

    function _e(t, n) {
        for (var e, r = [], i = (1 - n) / 2, u = t[0], a = t[1], o = 1, c = t.length; c > ++o;)e = u, u = a, a = t[o], r.push([i * (a[0] - e[0]), i * (a[1] - e[1])]);
        return r
    }

    function we(t) {
        if (3 > t.length)return ge(t);
        var n = 1, e = t.length, r = t[0], i = r[0], u = r[1], a = [i, i, i, (r = t[1])[0]], o = [u, u, u, r[1]], c = [i, ",", u];
        for (Ne(c, a, o); e > ++n;)r = t[n], a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), Ne(c, a, o);
        for (n = -1; 2 > ++n;)a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), Ne(c, a, o);
        return c.join("")
    }

    function Se(t) {
        if (4 > t.length)return ge(t);
        for (var n, e = [], r = -1, i = t.length, u = [0], a = [0]; 3 > ++r;)n = t[r], u.push(n[0]), a.push(n[1]);
        for (e.push(Ae(Ia, u) + "," + Ae(Ia, a)), --r; i > ++r;)n = t[r], u.shift(), u.push(n[0]), a.shift(), a.push(n[1]), Ne(e, u, a);
        return e.join("")
    }

    function ke(t) {
        for (var n, e, r = -1, i = t.length, u = i + 4, a = [], o = []; 4 > ++r;)e = t[r % i], a.push(e[0]), o.push(e[1]);
        for (n = [Ae(Ia, a), ",", Ae(Ia, o)], --r; u > ++r;)e = t[r % i], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), Ne(n, a, o);
        return n.join("")
    }

    function Ee(t, n) {
        var e = t.length - 1;
        if (e)for (var r, i, u = t[0][0], a = t[0][1], o = t[e][0] - u, c = t[e][1] - a, l = -1; e >= ++l;)r = t[l], i = l / e, r[0] = n * r[0] + (1 - n) * (u + i * o), r[1] = n * r[1] + (1 - n) * (a + i * c);
        return we(t)
    }

    function Ae(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
    }

    function Ne(t, n, e) {
        t.push("C", Ae(Ya, n), ",", Ae(Ya, e), ",", Ae(Ua, n), ",", Ae(Ua, e), ",", Ae(Ia, n), ",", Ae(Ia, e))
    }

    function Te(t, n) {
        return (n[1] - t[1]) / (n[0] - t[0])
    }

    function qe(t) {
        for (var n = 0, e = t.length - 1, r = [], i = t[0], u = t[1], a = r[0] = Te(i, u); e > ++n;)r[n] = (a + (a = Te(i = u, u = t[n + 1]))) / 2;
        return r[n] = a, r
    }

    function Ce(t) {
        for (var n, e, r, i, u = [], a = qe(t), o = -1, c = t.length - 1; c > ++o;)n = Te(t[o], t[o + 1]), 1e-6 > Math.abs(n) ? a[o] = a[o + 1] = 0 : (e = a[o] / n, r = a[o + 1] / n, i = e * e + r * r, i > 9 && (i = 3 * n / Math.sqrt(i), a[o] = i * e, a[o + 1] = i * r));
        for (o = -1; c >= ++o;)i = (t[Math.min(c, o + 1)][0] - t[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])), u.push([i || 0, a[o] * i || 0]);
        return u
    }

    function ze(t) {
        return 3 > t.length ? ge(t) : t[0] + xe(t, Ce(t))
    }

    function De(t) {
        for (var n, e, r, i = -1, u = t.length; u > ++i;)n = t[i], e = n[0], r = n[1] + Pa, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
        return t
    }

    function Le(t) {
        function n(n) {
            function o() {
                m.push("M", l(t(y), d), h, f(t(v.reverse()), d), "Z")
            }

            for (var s, g, p, m = [], v = [], y = [], M = -1, b = n.length, x = c(e), _ = c(i), w = e === r ? function () {
                return g
            } : c(r), S = i === u ? function () {
                return p
            } : c(u); b > ++M;)a.call(this, s = n[M], M) ? (v.push([g = +x.call(this, s, M), p = +_.call(this, s, M)]), y.push([+w.call(this, s, M), +S.call(this, s, M)])) : v.length && (o(), v = [], y = []);
            return v.length && o(), m.length ? m.join("") : null
        }

        var e = he, r = he, i = 0, u = de, a = o, l = ge, s = l.key, f = l, h = "L", d = .7;
        return n.x = function (t) {
            return arguments.length ? (e = r = t, n) : r
        }, n.x0 = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.x1 = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.y = function (t) {
            return arguments.length ? (i = u = t, n) : u
        }, n.y0 = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.y1 = function (t) {
            return arguments.length ? (u = t, n) : u
        }, n.defined = function (t) {
            return arguments.length ? (a = t, n) : a
        }, n.interpolate = function (t) {
            return arguments.length ? (s = "function" == typeof t ? l = t : (l = Oa.get(t) || ge).key, f = l.reverse || l, h = l.closed ? "M" : "L", n) : s
        }, n.tension = function (t) {
            return arguments.length ? (d = t, n) : d
        }, n
    }

    function Fe(t) {
        return t.radius
    }

    function He(t) {
        return [t.x, t.y]
    }

    function Re(t) {
        return function () {
            var n = t.apply(this, arguments), e = n[0], r = n[1] + Pa;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function Pe() {
        return 64
    }

    function je() {
        return "circle"
    }

    function Oe(t) {
        var n = Math.sqrt(t / Ru);
        return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
    }

    function Ye(t, n) {
        t.attr("transform", function (t) {
            return "translate(" + n(t) + ",0)"
        })
    }

    function Ue(t, n) {
        t.attr("transform", function (t) {
            return "translate(0," + n(t) + ")"
        })
    }

    function Ie(t, n, e) {
        if (r = [], e && n.length > 1) {
            for (var r, i, u, a = jn(t.domain()), o = -1, c = n.length, l = (n[1] - n[0]) / ++e; c > ++o;)for (i = e; --i > 0;)(u = +n[o] - i * l) >= a[0] && r.push(u);
            for (--o, i = 0; e > ++i && (u = +n[o] + i * l) < a[1];)r.push(u)
        }
        return r
    }

    function Ve() {
        Ja || (Ja = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var t, n = d3.event;
        try {
            Ja.scrollTop = 1e3, Ja.dispatchEvent(n), t = 1e3 - Ja.scrollTop
        } catch (e) {
            t = n.wheelDelta || 5 * -n.detail
        }
        return t
    }

    function Xe(t) {
        for (var n = t.source, e = t.target, r = Be(n, e), i = [n]; n !== r;)n = n.parent, i.push(n);
        for (var u = i.length; e !== r;)i.splice(u, 0, e), e = e.parent;
        return i
    }

    function Ze(t) {
        for (var n = [], e = t.parent; null != e;)n.push(t), t = e, e = e.parent;
        return n.push(t), n
    }

    function Be(t, n) {
        if (t === n)return t;
        for (var e = Ze(t), r = Ze(n), i = e.pop(), u = r.pop(), a = null; i === u;)a = i, i = e.pop(), u = r.pop();
        return a
    }

    function $e(t) {
        t.fixed |= 2
    }

    function Je(t) {
        t.fixed &= 1
    }

    function Ge(t) {
        t.fixed |= 4, t.px = t.x, t.py = t.y
    }

    function Ke(t) {
        t.fixed &= 3
    }

    function We(t, n, e) {
        var r = 0, i = 0;
        if (t.charge = 0, !t.leaf)for (var u, a = t.nodes, o = a.length, c = -1; o > ++c;)u = a[c], null != u && (We(u, n, e), t.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var l = n * e[t.point.index];
            t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
        }
        t.cx = r / t.charge, t.cy = i / t.charge
    }

    function Qe() {
        return 20
    }

    function tr() {
        return 1
    }

    function nr(t) {
        return t.x
    }

    function er(t) {
        return t.y
    }

    function rr(t, n, e) {
        t.y0 = n, t.y = e
    }

    function ir(t) {
        return d3.range(t.length)
    }

    function ur(t) {
        for (var n = -1, e = t[0].length, r = []; e > ++n;)r[n] = 0;
        return r
    }

    function ar(t) {
        for (var n, e = 1, r = 0, i = t[0][1], u = t.length; u > e; ++e)(n = t[e][1]) > i && (r = e, i = n);
        return r
    }

    function or(t) {
        return t.reduce(cr, 0)
    }

    function cr(t, n) {
        return t + n[1]
    }

    function lr(t, n) {
        return sr(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1))
    }

    function sr(t, n) {
        for (var e = -1, r = +t[0], i = (t[1] - r) / n, u = []; n >= ++e;)u[e] = i * e + r;
        return u
    }

    function fr(t) {
        return [d3.min(t), d3.max(t)]
    }

    function hr(t, n) {
        return d3.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = mr, t
    }

    function dr(t) {
        return t.children
    }

    function gr(t) {
        return t.value
    }

    function pr(t, n) {
        return n.value - t.value
    }

    function mr(t) {
        return d3.merge(t.map(function (t) {
            return (t.children || []).map(function (n) {
                return {source: t, target: n}
            })
        }))
    }

    function vr(t, n) {
        return t.value - n.value
    }

    function yr(t, n) {
        var e = t._pack_next;
        t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n
    }

    function Mr(t, n) {
        t._pack_next = n, n._pack_prev = t
    }

    function br(t, n) {
        var e = n.x - t.x, r = n.y - t.y, i = t.r + n.r;
        return i * i - e * e - r * r > .001
    }

    function xr(t) {
        function n(t) {
            s = Math.min(t.x - t.r, s), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), d = Math.max(t.y + t.r, d)
        }

        if ((e = t.children) && (l = e.length)) {
            var e, r, i, u, a, o, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, d = -1 / 0;
            if (e.forEach(_r), r = e[0], r.x = -r.r, r.y = 0, n(r), l > 1 && (i = e[1], i.x = i.r, i.y = 0, n(i), l > 2))for (u = e[2], kr(r, i, u), n(u), yr(r, u), r._pack_prev = u, yr(u, i), i = r._pack_next, a = 3; l > a; a++) {
                kr(r, i, u = e[a]);
                var g = 0, p = 1, m = 1;
                for (o = i._pack_next; o !== i; o = o._pack_next, p++)if (br(o, u)) {
                    g = 1;
                    break
                }
                if (1 == g)for (c = r._pack_prev; c !== o._pack_prev && !br(c, u); c = c._pack_prev, m++);
                g ? (m > p || p == m && i.r < r.r ? Mr(r, i = o) : Mr(r = c, i), a--) : (yr(r, u), i = u, n(u))
            }
            var v = (s + f) / 2, y = (h + d) / 2, M = 0;
            for (a = 0; l > a; a++)u = e[a], u.x -= v, u.y -= y, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
            t.r = M, e.forEach(wr)
        }
    }

    function _r(t) {
        t._pack_next = t._pack_prev = t
    }

    function wr(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function Sr(t, n, e, r) {
        var i = t.children;
        if (t.x = n += r * t.x, t.y = e += r * t.y, t.r *= r, i)for (var u = -1, a = i.length; a > ++u;)Sr(i[u], n, e, r)
    }

    function kr(t, n, e) {
        var r = t.r + e.r, i = n.x - t.x, u = n.y - t.y;
        if (r && (i || u)) {
            var a = n.r + e.r, o = i * i + u * u;
            a *= a, r *= r;
            var c = .5 + (r - a) / (2 * o), l = Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) / (2 * o);
            e.x = t.x + c * i + l * u, e.y = t.y + c * u - l * i
        } else e.x = t.x + r, e.y = t.y
    }

    function Er(t) {
        return 1 + d3.max(t, function (t) {
                return t.y
            })
    }

    function Ar(t) {
        return t.reduce(function (t, n) {
                return t + n.x
            }, 0) / t.length
    }

    function Nr(t) {
        var n = t.children;
        return n && n.length ? Nr(n[0]) : t
    }

    function Tr(t) {
        var n, e = t.children;
        return e && (n = e.length) ? Tr(e[n - 1]) : t
    }

    function qr(t, n) {
        return t.parent == n.parent ? 1 : 2
    }

    function Cr(t) {
        var n = t.children;
        return n && n.length ? n[0] : t._tree.thread
    }

    function zr(t) {
        var n, e = t.children;
        return e && (n = e.length) ? e[n - 1] : t._tree.thread
    }

    function Dr(t, n) {
        var e = t.children;
        if (e && (i = e.length))for (var r, i, u = -1; i > ++u;)n(r = Dr(e[u], n), t) > 0 && (t = r);
        return t
    }

    function Lr(t, n) {
        return t.x - n.x
    }

    function Fr(t, n) {
        return n.x - t.x
    }

    function Hr(t, n) {
        return t.depth - n.depth
    }

    function Rr(t, n) {
        function e(t, r) {
            var i = t.children;
            if (i && (a = i.length))for (var u, a, o = null, c = -1; a > ++c;)u = i[c], e(u, o), o = u;
            n(t, r)
        }

        e(t, null)
    }

    function Pr(t) {
        for (var n, e = 0, r = 0, i = t.children, u = i.length; --u >= 0;)n = i[u]._tree, n.prelim += e, n.mod += e, e += n.shift + (r += n.change)
    }

    function jr(t, n, e) {
        t = t._tree, n = n._tree;
        var r = e / (n.number - t.number);
        t.change += r, n.change -= r, n.shift += e, n.prelim += e, n.mod += e
    }

    function Or(t, n, e) {
        return t._tree.ancestor.parent == n.parent ? t._tree.ancestor : e
    }

    function Yr(t) {
        return {x: t.x, y: t.y, dx: t.dx, dy: t.dy}
    }

    function Ur(t, n) {
        var e = t.x + n[3], r = t.y + n[0], i = t.dx - n[1] - n[3], u = t.dy - n[0] - n[2];
        return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), {x: e, y: r, dx: i, dy: u}
    }

    function Ir(t, n) {
        function e(t, e) {
            return d3.xhr(t, n, e).response(r)
        }

        function r(t) {
            return e.parse(t.responseText)
        }

        function i(n) {
            return n.map(u).join(t)
        }

        function u(t) {
            return a.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }

        var a = RegExp('["' + t + "\n]"), o = t.charCodeAt(0);
        return e.parse = function (t) {
            var n;
            return e.parseRows(t, function (t) {
                return n ? n(t) : (n = Function("d", "return {" + t.map(function (t, n) {
                        return JSON.stringify(t) + ": d[" + n + "]"
                    }).join(",") + "}"), void 0)
            })
        }, e.parseRows = function (t, n) {
            function e() {
                if (s >= l)return a;
                if (i)return i = !1, u;
                var n = s;
                if (34 === t.charCodeAt(n)) {
                    for (var e = n; l > e++;)if (34 === t.charCodeAt(e)) {
                        if (34 !== t.charCodeAt(e + 1))break;
                        ++e
                    }
                    s = e + 2;
                    var r = t.charCodeAt(e + 1);
                    return 13 === r ? (i = !0, 10 === t.charCodeAt(e + 2) && ++s) : 10 === r && (i = !0), t.substring(n + 1, e).replace(/""/g, '"')
                }
                for (; l > s;) {
                    var r = t.charCodeAt(s++), c = 1;
                    if (10 === r)i = !0; else if (13 === r)i = !0, 10 === t.charCodeAt(s) && (++s, ++c); else if (r !== o)continue;
                    return t.substring(n, s - c)
                }
                return t.substring(n)
            }

            for (var r, i, u = {}, a = {}, c = [], l = t.length, s = 0, f = 0; (r = e()) !== a;) {
                for (var h = []; r !== u && r !== a;)h.push(r), r = e();
                (!n || (h = n(h, f++))) && c.push(h)
            }
            return c
        }, e.format = function (t) {
            return t.map(i).join("\n")
        }, e
    }

    function Vr(t, n) {
        no.hasOwnProperty(t.type) && no[t.type](t, n)
    }

    function Xr(t, n, e) {
        var r, i = -1, u = t.length - e;
        for (n.lineStart(); u > ++i;)r = t[i], n.point(r[0], r[1]);
        n.lineEnd()
    }

    function Zr(t, n) {
        var e = -1, r = t.length;
        for (n.polygonStart(); r > ++e;)Xr(t[e], n, 1);
        n.polygonEnd()
    }

    function Br(t) {
        return [Math.atan2(t[1], t[0]), Math.asin(Math.max(-1, Math.min(1, t[2])))]
    }

    function $r(t, n) {
        return Pu > Math.abs(t[0] - n[0]) && Pu > Math.abs(t[1] - n[1])
    }

    function Jr(t) {
        var n = t[0], e = t[1], r = Math.cos(e);
        return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)]
    }

    function Gr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function Kr(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Wr(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function Qr(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function ti(t) {
        var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function ni(t) {
        function n(n) {
            function r(e, r) {
                e = t(e, r), n.point(e[0], e[1])
            }

            function u() {
                s = 0 / 0, p.point = a, n.lineStart()
            }

            function a(r, u) {
                var a = Jr([r, u]), o = t(r, u);
                e(s, f, l, h, d, g, s = o[0], f = o[1], l = r, h = a[0], d = a[1], g = a[2], i, n), n.point(s, f)
            }

            function o() {
                p.point = r, n.lineEnd()
            }

            function c() {
                var t, r, c, m, v, y, M;
                u(), p.point = function (n, e) {
                    a(t = n, r = e), c = s, m = f, v = h, y = d, M = g, p.point = a
                }, p.lineEnd = function () {
                    e(s, f, l, h, d, g, c, m, t, v, y, M, i, n), p.lineEnd = o, o()
                }
            }

            var l, s, f, h, d, g, p = {
                point: r, lineStart: u, lineEnd: o, polygonStart: function () {
                    n.polygonStart(), p.lineStart = c
                }, polygonEnd: function () {
                    n.polygonEnd(), p.lineStart = u
                }
            };
            return p
        }

        function e(n, i, u, a, o, c, l, s, f, h, d, g, p, m) {
            var v = l - n, y = s - i, M = v * v + y * y;
            if (M > 4 * r && p--) {
                var b = a + h, x = o + d, _ = c + g, w = Math.sqrt(b * b + x * x + _ * _), S = Math.asin(_ /= w), k = Pu > Math.abs(Math.abs(_) - 1) ? (u + f) / 2 : Math.atan2(x, b), E = t(k, S), A = E[0], N = E[1], T = A - n, q = N - i, C = y * T - v * q;
                (C * C / M > r || Math.abs((v * T + y * q) / M - .5) > .3) && (e(n, i, u, a, o, c, A, N, k, b /= w, x /= w, _, p, m), m.point(A, N), e(A, N, k, b, x, _, l, s, f, h, d, g, p, m))
            }
        }

        var r = .5, i = 16;
        return n.precision = function (t) {
            return arguments.length ? (i = (r = t * t) > 0 && 16, n) : Math.sqrt(r)
        }, n
    }

    function ei(t, n) {
        function e(t, n) {
            var e = Math.sqrt(u - 2 * i * Math.sin(n)) / i;
            return [e * Math.sin(t *= i), a - e * Math.cos(t)]
        }

        var r = Math.sin(t), i = (r + Math.sin(n)) / 2, u = 1 + r * (2 * i - r), a = Math.sqrt(u) / i;
        return e.invert = function (t, n) {
            var e = a - n;
            return [Math.atan2(t, e) / i, Math.asin((u - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function ri(t) {
        function n(t, n) {
            r > t && (r = t), t > u && (u = t), i > n && (i = n), n > a && (a = n)
        }

        function e() {
            o.point = o.lineEnd = Pn
        }

        var r, i, u, a, o = {
            point: n, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
                o.lineEnd = e
            }, polygonEnd: function () {
                o.point = n
            }
        };
        return function (n) {
            return a = u = -(r = i = 1 / 0), d3.geo.stream(n, t(o)), [[r, i], [u, a]]
        }
    }

    function ii(t, n) {
        if (!io) {
            ++uo, t *= ju;
            var e = Math.cos(n *= ju);
            ao += (e * Math.cos(t) - ao) / uo, oo += (e * Math.sin(t) - oo) / uo, co += (Math.sin(n) - co) / uo
        }
    }

    function ui() {
        var t, n;
        io = 1, ai(), io = 2;
        var e = lo.point;
        lo.point = function (r, i) {
            e(t = r, n = i)
        }, lo.lineEnd = function () {
            lo.point(t, n), oi(), lo.lineEnd = oi
        }
    }

    function ai() {
        function t(t, i) {
            t *= ju;
            var u = Math.cos(i *= ju), a = u * Math.cos(t), o = u * Math.sin(t), c = Math.sin(i), l = Math.atan2(Math.sqrt((l = e * c - r * o) * l + (l = r * a - n * c) * l + (l = n * o - e * a) * l), n * a + e * o + r * c);
            uo += l, ao += l * (n + (n = a)), oo += l * (e + (e = o)), co += l * (r + (r = c))
        }

        var n, e, r;
        io > 1 || (1 > io && (io = 1, uo = ao = oo = co = 0), lo.point = function (i, u) {
            i *= ju;
            var a = Math.cos(u *= ju);
            n = a * Math.cos(i), e = a * Math.sin(i), r = Math.sin(u), lo.point = t
        })
    }

    function oi() {
        lo.point = ii
    }

    function ci(t, n) {
        var e = Math.cos(t), r = Math.sin(t);
        return function (i, u, a, o) {
            null != i ? (i = li(e, i), u = li(e, u), (a > 0 ? u > i : i > u) && (i += 2 * a * Ru)) : (i = t + 2 * a * Ru, u = t);
            for (var c, l = a * n, s = i; a > 0 ? s > u : u > s; s -= l)o.point((c = Br([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }

    function li(t, n) {
        var e = Jr(n);
        e[0] -= t, ti(e);
        var r = Math.acos(Math.max(-1, Math.min(1, -e[1])));
        return ((0 > -e[2] ? -r : r) + 2 * Math.PI - Pu) % (2 * Math.PI)
    }

    function si(t, n, e) {
        return function (r) {
            function i(n, e) {
                t(n, e) && r.point(n, e)
            }

            function u(t, n) {
                m.point(t, n)
            }

            function a() {
                v.point = u, m.lineStart()
            }

            function o() {
                v.point = i, m.lineEnd()
            }

            function c(t, n) {
                M.point(t, n), p.push([t, n])
            }

            function l() {
                M.lineStart(), p = []
            }

            function s() {
                c(p[0][0], p[0][1]), M.lineEnd();
                var t, n = M.clean(), e = y.buffer(), i = e.length;
                if (!i)return g = !0, d += mi(p, -1), p = null, void 0;
                if (p = null, 1 & n) {
                    t = e[0], h += mi(t, 1);
                    var u, i = t.length - 1, a = -1;
                    for (r.lineStart(); i > ++a;)r.point((u = t[a])[0], u[1]);
                    return r.lineEnd(), void 0
                }
                i > 1 && 2 & n && e.push(e.pop().concat(e.shift())), f.push(e.filter(gi))
            }

            var f, h, d, g, p, m = n(r), v = {
                point: i, lineStart: a, lineEnd: o, polygonStart: function () {
                    v.point = c, v.lineStart = l, v.lineEnd = s, g = !1, d = h = 0, f = [], r.polygonStart()
                }, polygonEnd: function () {
                    v.point = i, v.lineStart = a, v.lineEnd = o, f = d3.merge(f), f.length ? fi(f, e, r) : (-Pu > h || g && -Pu > d) && (r.lineStart(), e(null, null, 1, r), r.lineEnd()), r.polygonEnd(), f = null
                }, sphere: function () {
                    r.polygonStart(), r.lineStart(), e(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                }
            }, y = pi(), M = n(y);
            return v
        }
    }

    function fi(t, n, e) {
        var r = [], i = [];
        if (t.forEach(function (t) {
                var n = t.length;
                if (!(1 >= n)) {
                    var e = t[0], u = t[n - 1], a = {
                        point: e,
                        points: t,
                        other: null,
                        visited: !1,
                        entry: !0,
                        subject: !0
                    }, o = {point: e, points: [e], other: a, visited: !1, entry: !1, subject: !1};
                    a.other = o, r.push(a), i.push(o), a = {
                        point: u,
                        points: [u],
                        other: null,
                        visited: !1,
                        entry: !1,
                        subject: !0
                    }, o = {
                        point: u,
                        points: [u],
                        other: a,
                        visited: !1,
                        entry: !0,
                        subject: !1
                    }, a.other = o, r.push(a), i.push(o)
                }
            }), i.sort(di), hi(r), hi(i), r.length)for (var u, a, o, c = r[0]; ;) {
            for (u = c; u.visited;)if ((u = u.next) === c)return;
            a = u.points, e.lineStart();
            do {
                if (u.visited = u.other.visited = !0, u.entry) {
                    if (u.subject)for (var l = 0; a.length > l; l++)e.point((o = a[l])[0], o[1]); else n(u.point, u.next.point, 1, e);
                    u = u.next
                } else {
                    if (u.subject) {
                        a = u.prev.points;
                        for (var l = a.length; --l >= 0;)e.point((o = a[l])[0], o[1])
                    } else n(u.point, u.prev.point, -1, e);
                    u = u.prev
                }
                u = u.other, a = u.points
            } while (!u.visited);
            e.lineEnd()
        }
    }

    function hi(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; n > ++r;)i.next = e = t[r], e.prev = i, i = e;
            i.next = e = t[0], e.prev = i
        }
    }

    function di(t, n) {
        return (0 > (t = t.point)[0] ? t[1] - Ru / 2 - Pu : Ru / 2 - t[1]) - (0 > (n = n.point)[0] ? n[1] - Ru / 2 - Pu : Ru / 2 - n[1])
    }

    function gi(t) {
        return t.length > 1
    }

    function pi() {
        var t, n = [];
        return {
            lineStart: function () {
                n.push(t = [])
            }, point: function (n, e) {
                t.push([n, e])
            }, lineEnd: Pn, buffer: function () {
                var e = n;
                return n = [], t = null, e
            }
        }
    }

    function mi(t, n) {
        if (!(e = t.length))return 0;
        for (var e, r, i, u = 0, a = 0, o = t[0], c = o[0], l = o[1], s = Math.cos(l), f = Math.atan2(n * Math.sin(c) * s, Math.sin(l)), h = 1 - n * Math.cos(c) * s, d = f; e > ++u;)o = t[u], s = Math.cos(l = o[1]), r = Math.atan2(n * Math.sin(c = o[0]) * s, Math.sin(l)), i = 1 - n * Math.cos(c) * s, Pu > Math.abs(h - 2) && Pu > Math.abs(i - 2) || (Pu > Math.abs(i) || Pu > Math.abs(h) || (Pu > Math.abs(Math.abs(r - f) - Ru) ? i + h > 2 && (a += 4 * (r - f)) : a += Pu > Math.abs(h - 2) ? 4 * (r - d) : ((3 * Ru + r - f) % (2 * Ru) - Ru) * (h + i)), d = f, f = r, h = i);
        return a
    }

    function vi(t) {
        var n, e = 0 / 0, r = 0 / 0, i = 0 / 0;
        return {
            lineStart: function () {
                t.lineStart(), n = 1
            }, point: function (u, a) {
                var o = u > 0 ? Ru : -Ru, c = Math.abs(u - e);
                Pu > Math.abs(c - Ru) ? (t.point(e, r = (r + a) / 2 > 0 ? Ru / 2 : -Ru / 2), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), t.point(u, r), n = 0) : i !== o && c >= Ru && (Pu > Math.abs(e - i) && (e -= i * Pu), Pu > Math.abs(u - o) && (u -= o * Pu), r = yi(e, r, u, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(o, r), n = 0), t.point(e = u, r = a), i = o
            }, lineEnd: function () {
                t.lineEnd(), e = r = 0 / 0
            }, clean: function () {
                return 2 - n
            }
        }
    }

    function yi(t, n, e, r) {
        var i, u, a = Math.sin(t - e);
        return Math.abs(a) > Pu ? Math.atan((Math.sin(n) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * u * a)) : (n + r) / 2
    }

    function Mi(t, n, e, r) {
        var i;
        if (null == t)i = e * Ru / 2, r.point(-Ru, i), r.point(0, i), r.point(Ru, i), r.point(Ru, 0), r.point(Ru, -i), r.point(0, -i), r.point(-Ru, -i), r.point(-Ru, 0), r.point(-Ru, i); else if (Math.abs(t[0] - n[0]) > Pu) {
            var u = (t[0] < n[0] ? 1 : -1) * Ru;
            i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
        } else r.point(n[0], n[1])
    }

    function bi(t) {
        function n(t, n) {
            return Math.cos(t) * Math.cos(n) > u
        }

        function e(t) {
            var e, i, u, a;
            return {
                lineStart: function () {
                    u = i = !1, a = 1
                }, point: function (o, c) {
                    var l, s = [o, c], f = n(o, c);
                    !e && (u = i = f) && t.lineStart(), f !== i && (l = r(e, s), ($r(e, l) || $r(s, l)) && (s[0] += Pu, s[1] += Pu, f = n(s[0], s[1]))), f !== i && (a = 0, (i = f) ? (t.lineStart(), l = r(s, e), t.point(l[0], l[1])) : (l = r(e, s), t.point(l[0], l[1]), t.lineEnd()), e = l), !f || e && $r(e, s) || t.point(s[0], s[1]), e = s
                }, lineEnd: function () {
                    i && t.lineEnd(), e = null
                }, clean: function () {
                    return a | (u && i) << 1
                }
            }
        }

        function r(t, n) {
            var e = Jr(t, 0), r = Jr(n, 0), i = [1, 0, 0], a = Kr(e, r), o = Gr(a, a), c = a[0], l = o - c * c;
            if (!l)return t;
            var s = u * o / l, f = -u * c / l, h = Kr(i, a), d = Qr(i, s), g = Qr(a, f);
            Wr(d, g);
            var p = h, m = Gr(d, p), v = Gr(p, p), y = Math.sqrt(m * m - v * (Gr(d, d) - 1)), M = Qr(p, (-m - y) / v);
            return Wr(M, d), Br(M)
        }

        var i = t * ju, u = Math.cos(i), a = ci(i, 6 * ju);
        return si(n, e, a)
    }

    function xi(t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }

        return t.invert && n.invert && (e.invert = function (e, r) {
            return e = n.invert(e, r), e && t.invert(e[0], e[1])
        }), e
    }

    function _i(t, n) {
        return [t, n]
    }

    function wi(t, n, e) {
        var r = d3.range(t, n - Pu, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [t, n]
            })
        }
    }

    function Si(t, n, e) {
        var r = d3.range(t, n - Pu, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [n, t]
            })
        }
    }

    function ki(t, n, e, r) {
        function i(t) {
            var n = Math.sin(t *= d) * g, e = Math.sin(d - t) * g, r = e * l + n * f, i = e * s + n * h, u = e * a + n * c;
            return [Math.atan2(i, r) / ju, Math.atan2(u, Math.sqrt(r * r + i * i)) / ju]
        }

        var u = Math.cos(n), a = Math.sin(n), o = Math.cos(r), c = Math.sin(r), l = u * Math.cos(t), s = u * Math.sin(t), f = o * Math.cos(e), h = o * Math.sin(e), d = Math.acos(Math.max(-1, Math.min(1, a * c + u * o * Math.cos(e - t)))), g = 1 / Math.sin(d);
        return i.distance = d, i
    }

    function Ei(t, n) {
        return [t / (2 * Ru), Math.max(-.5, Math.min(.5, Math.log(Math.tan(Ru / 4 + n / 2)) / (2 * Ru)))]
    }

    function Ai(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Ni(t) {
        var n = ni(function (n, e) {
            return t([n * Ou, e * Ou])
        });
        return function (t) {
            return t = n(t), {
                point: function (n, e) {
                    t.point(n * ju, e * ju)
                }, sphere: function () {
                    t.sphere()
                }, lineStart: function () {
                    t.lineStart()
                }, lineEnd: function () {
                    t.lineEnd()
                }, polygonStart: function () {
                    t.polygonStart()
                }, polygonEnd: function () {
                    t.polygonEnd()
                }
            }
        }
    }

    function Ti() {
        function t(t, n) {
            a.push("M", t, ",", n, u)
        }

        function n(t, n) {
            a.push("M", t, ",", n), o.point = e
        }

        function e(t, n) {
            a.push("L", t, ",", n)
        }

        function r() {
            o.point = t
        }

        function i() {
            a.push("Z")
        }

        var u = Ai(4.5), a = [], o = {
            point: t, lineStart: function () {
                o.point = n
            }, lineEnd: r, polygonStart: function () {
                o.lineEnd = i
            }, polygonEnd: function () {
                o.lineEnd = r, o.point = t
            }, pointRadius: function (t) {
                return u = Ai(t), o
            }, result: function () {
                if (a.length) {
                    var t = a.join("");
                    return a = [], t
                }
            }
        };
        return o
    }

    function qi(t) {
        function n(n, e) {
            t.moveTo(n, e), t.arc(n, e, a, 0, 2 * Ru)
        }

        function e(n, e) {
            t.moveTo(n, e), o.point = r
        }

        function r(n, e) {
            t.lineTo(n, e)
        }

        function i() {
            o.point = n
        }

        function u() {
            t.closePath()
        }

        var a = 4.5, o = {
            point: n, lineStart: function () {
                o.point = e
            }, lineEnd: i, polygonStart: function () {
                o.lineEnd = u
            }, polygonEnd: function () {
                o.lineEnd = i, o.point = n
            }, pointRadius: function (t) {
                return a = t, o
            }, result: Pn
        };
        return o
    }

    function Ci() {
        function t(t, n) {
            po += i * t - r * n, r = t, i = n
        }

        var n, e, r, i;
        mo.point = function (u, a) {
            mo.point = t, n = r = u, e = i = a
        }, mo.lineEnd = function () {
            t(n, e)
        }
    }

    function zi(t, n) {
        io || (ao += t, oo += n, ++co)
    }

    function Di() {
        function t(t, r) {
            var i = t - n, u = r - e, a = Math.sqrt(i * i + u * u);
            ao += a * (n + t) / 2, oo += a * (e + r) / 2, co += a, n = t, e = r
        }

        var n, e;
        if (1 !== io) {
            if (!(1 > io))return;
            io = 1, ao = oo = co = 0
        }
        vo.point = function (r, i) {
            vo.point = t, n = r, e = i
        }
    }

    function Li() {
        vo.point = zi
    }

    function Fi() {
        function t(t, n) {
            var e = i * t - r * n;
            ao += e * (r + t), oo += e * (i + n), co += 3 * e, r = t, i = n
        }

        var n, e, r, i;
        2 > io && (io = 2, ao = oo = co = 0), vo.point = function (u, a) {
            vo.point = t, n = r = u, e = i = a
        }, vo.lineEnd = function () {
            t(n, e)
        }
    }

    function Hi() {
        function t(t, n) {
            if (t *= ju, n *= ju, !(Pu > Math.abs(Math.abs(u) - Ru / 2) && Pu > Math.abs(Math.abs(n) - Ru / 2))) {
                var e = Math.cos(n), c = Math.sin(n);
                if (Pu > Math.abs(u - Ru / 2))Mo += 2 * (t - r); else {
                    var l = t - i, s = Math.cos(l), f = Math.atan2(Math.sqrt((f = e * Math.sin(l)) * f + (f = a * c - o * e * s) * f), o * c + a * e * s), h = (f + Ru + u + n) / 4;
                    Mo += (0 > l && l > -Ru || l > Ru ? -4 : 4) * Math.atan(Math.sqrt(Math.abs(Math.tan(h) * Math.tan(h - f / 2) * Math.tan(h - Ru / 4 - u / 2) * Math.tan(h - Ru / 4 - n / 2))))
                }
                r = i, i = t, u = n, a = e, o = c
            }
        }

        var n, e, r, i, u, a, o;
        bo.point = function (c, l) {
            bo.point = t, r = i = (n = c) * ju, u = (e = l) * ju, a = Math.cos(u), o = Math.sin(u)
        }, bo.lineEnd = function () {
            t(n, e)
        }
    }

    function Ri(t) {
        return Pi(function () {
            return t
        })()
    }

    function Pi(t) {
        function n(t) {
            return t = a(t[0] * ju, t[1] * ju), [t[0] * s + o, c - t[1] * s]
        }

        function e(t) {
            return t = a.invert((t[0] - o) / s, (c - t[1]) / s), t && [t[0] * Ou, t[1] * Ou]
        }

        function r() {
            a = xi(u = Oi(p, m, v), i);
            var t = i(d, g);
            return o = f - t[0] * s, c = h + t[1] * s, n
        }

        var i, u, a, o, c, l = ni(function (t, n) {
            return t = i(t, n), [t[0] * s + o, c - t[1] * s]
        }), s = 150, f = 480, h = 250, d = 0, g = 0, p = 0, m = 0, v = 0, y = so, M = null;
        return n.stream = function (t) {
            return ji(u, y(l(t)))
        }, n.clipAngle = function (t) {
            return arguments.length ? (y = null == t ? (M = t, so) : bi(M = +t), n) : M
        }, n.scale = function (t) {
            return arguments.length ? (s = +t, r()) : s
        }, n.translate = function (t) {
            return arguments.length ? (f = +t[0], h = +t[1], r()) : [f, h]
        }, n.center = function (t) {
            return arguments.length ? (d = t[0] % 360 * ju, g = t[1] % 360 * ju, r()) : [d * Ou, g * Ou]
        }, n.rotate = function (t) {
            return arguments.length ? (p = t[0] % 360 * ju, m = t[1] % 360 * ju, v = t.length > 2 ? t[2] % 360 * ju : 0, r()) : [p * Ou, m * Ou, v * Ou]
        }, d3.rebind(n, l, "precision"), function () {
            return i = t.apply(this, arguments), n.invert = i.invert && e, r()
        }
    }

    function ji(t, n) {
        return {
            point: function (e, r) {
                r = t(e * ju, r * ju), e = r[0], n.point(e > Ru ? e - 2 * Ru : -Ru > e ? e + 2 * Ru : e, r[1])
            }, sphere: function () {
                n.sphere()
            }, lineStart: function () {
                n.lineStart()
            }, lineEnd: function () {
                n.lineEnd()
            }, polygonStart: function () {
                n.polygonStart()
            }, polygonEnd: function () {
                n.polygonEnd()
            }
        }
    }

    function Oi(t, n, e) {
        return t ? n || e ? xi(Ui(t), Ii(n, e)) : Ui(t) : n || e ? Ii(n, e) : _i
    }

    function Yi(t) {
        return function (n, e) {
            return n += t, [n > Ru ? n - 2 * Ru : -Ru > n ? n + 2 * Ru : n, e]
        }
    }

    function Ui(t) {
        var n = Yi(t);
        return n.invert = Yi(-t), n
    }

    function Ii(t, n) {
        function e(t, n) {
            var e = Math.cos(n), o = Math.cos(t) * e, c = Math.sin(t) * e, l = Math.sin(n), s = l * r + o * i;
            return [Math.atan2(c * u - s * a, o * r - l * i), Math.asin(Math.max(-1, Math.min(1, s * u + c * a)))]
        }

        var r = Math.cos(t), i = Math.sin(t), u = Math.cos(n), a = Math.sin(n);
        return e.invert = function (t, n) {
            var e = Math.cos(n), o = Math.cos(t) * e, c = Math.sin(t) * e, l = Math.sin(n), s = l * u - c * a;
            return [Math.atan2(c * u + l * a, o * r + s * i), Math.asin(Math.max(-1, Math.min(1, s * r - o * i)))]
        }, e
    }

    function Vi(t, n) {
        function e(n, e) {
            var r = Math.cos(n), i = Math.cos(e), u = t(r * i);
            return [u * i * Math.sin(n), u * Math.sin(e)]
        }

        return e.invert = function (t, e) {
            var r = Math.sqrt(t * t + e * e), i = n(r), u = Math.sin(i), a = Math.cos(i);
            return [Math.atan2(t * u, r * a), Math.asin(r && e * u / r)]
        }, e
    }

    function Xi(t, n, e, r) {
        var i, u, a, o, c, l, s;
        return i = r[t], u = i[0], a = i[1], i = r[n], o = i[0], c = i[1], i = r[e], l = i[0], s = i[1], (s - a) * (o - u) - (c - a) * (l - u) > 0
    }

    function Zi(t, n, e) {
        return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
    }

    function Bi(t, n, e, r) {
        var i = t[0], u = e[0], a = n[0] - i, o = r[0] - u, c = t[1], l = e[1], s = n[1] - c, f = r[1] - l, h = (o * (c - l) - f * (i - u)) / (f * a - o * s);
        return [i + h * a, c + h * s]
    }

    function $i(t, n) {
        var e = {
            list: t.map(function (t, n) {
                return {index: n, x: t[0], y: t[1]}
            }).sort(function (t, n) {
                return t.y < n.y ? -1 : t.y > n.y ? 1 : t.x < n.x ? -1 : t.x > n.x ? 1 : 0
            }), bottomSite: null
        }, r = {
            list: [], leftEnd: null, rightEnd: null, init: function () {
                r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
            }, createHalfEdge: function (t, n) {
                return {edge: t, side: n, vertex: null, l: null, r: null}
            }, insert: function (t, n) {
                n.l = t, n.r = t.r, t.r.l = n, t.r = n
            }, leftBound: function (t) {
                var n = r.leftEnd;
                do n = n.r; while (n != r.rightEnd && i.rightOf(n, t));
                return n = n.l
            }, del: function (t) {
                t.l.r = t.r, t.r.l = t.l, t.edge = null
            }, right: function (t) {
                return t.r
            }, left: function (t) {
                return t.l
            }, leftRegion: function (t) {
                return null == t.edge ? e.bottomSite : t.edge.region[t.side]
            }, rightRegion: function (t) {
                return null == t.edge ? e.bottomSite : t.edge.region[_o[t.side]]
            }
        }, i = {
            bisect: function (t, n) {
                var e = {
                    region: {l: t, r: n},
                    ep: {l: null, r: null}
                }, r = n.x - t.x, i = n.y - t.y, u = r > 0 ? r : -r, a = i > 0 ? i : -i;
                return e.c = t.x * r + t.y * i + .5 * (r * r + i * i), u > a ? (e.a = 1, e.b = i / r, e.c /= r) : (e.b = 1, e.a = r / i, e.c /= i), e
            }, intersect: function (t, n) {
                var e = t.edge, r = n.edge;
                if (!e || !r || e.region.r == r.region.r)return null;
                var i = e.a * r.b - e.b * r.a;
                if (1e-10 > Math.abs(i))return null;
                var u, a, o = (e.c * r.b - r.c * e.b) / i, c = (r.c * e.a - e.c * r.a) / i, l = e.region.r, s = r.region.r;
                l.y < s.y || l.y == s.y && l.x < s.x ? (u = t, a = e) : (u = n, a = r);
                var f = o >= a.region.r.x;
                return f && "l" === u.side || !f && "r" === u.side ? null : {x: o, y: c}
            }, rightOf: function (t, n) {
                var e = t.edge, r = e.region.r, i = n.x > r.x;
                if (i && "l" === t.side)return 1;
                if (!i && "r" === t.side)return 0;
                if (1 === e.a) {
                    var u = n.y - r.y, a = n.x - r.x, o = 0, c = 0;
                    if (!i && 0 > e.b || i && e.b >= 0 ? c = o = u >= e.b * a : (c = n.x + n.y * e.b > e.c, 0 > e.b && (c = !c), c || (o = 1)), !o) {
                        var l = r.x - e.region.l.x;
                        c = e.b * (a * a - u * u) < l * u * (1 + 2 * a / l + e.b * e.b), 0 > e.b && (c = !c)
                    }
                } else {
                    var s = e.c - e.a * n.x, f = n.y - s, h = n.x - r.x, d = s - r.y;
                    c = f * f > h * h + d * d
                }
                return "l" === t.side ? c : !c
            }, endPoint: function (t, e, r) {
                t.ep[e] = r, t.ep[_o[e]] && n(t)
            }, distance: function (t, n) {
                var e = t.x - n.x, r = t.y - n.y;
                return Math.sqrt(e * e + r * r)
            }
        }, u = {
            list: [], insert: function (t, n, e) {
                t.vertex = n, t.ystar = n.y + e;
                for (var r = 0, i = u.list, a = i.length; a > r; r++) {
                    var o = i[r];
                    if (!(t.ystar > o.ystar || t.ystar == o.ystar && n.x > o.vertex.x))break
                }
                i.splice(r, 0, t)
            }, del: function (t) {
                for (var n = 0, e = u.list, r = e.length; r > n && e[n] != t; ++n);
                e.splice(n, 1)
            }, empty: function () {
                return 0 === u.list.length
            }, nextEvent: function (t) {
                for (var n = 0, e = u.list, r = e.length; r > n; ++n)if (e[n] == t)return e[n + 1];
                return null
            }, min: function () {
                var t = u.list[0];
                return {x: t.vertex.x, y: t.ystar}
            }, extractMin: function () {
                return u.list.shift()
            }
        };
        r.init(), e.bottomSite = e.list.shift();
        for (var a, o, c, l, s, f, h, d, g, p, m, v, y, M = e.list.shift(); ;)if (u.empty() || (a = u.min()), M && (u.empty() || M.y < a.y || M.y == a.y && M.x < a.x))o = r.leftBound(M), c = r.right(o), h = r.rightRegion(o), v = i.bisect(h, M), f = r.createHalfEdge(v, "l"), r.insert(o, f), p = i.intersect(o, f), p && (u.del(o), u.insert(o, p, i.distance(p, M))), o = f, f = r.createHalfEdge(v, "r"), r.insert(o, f), p = i.intersect(f, c), p && u.insert(f, p, i.distance(p, M)), M = e.list.shift(); else {
            if (u.empty())break;
            o = u.extractMin(), l = r.left(o), c = r.right(o), s = r.right(c), h = r.leftRegion(o), d = r.rightRegion(c), m = o.vertex, i.endPoint(o.edge, o.side, m), i.endPoint(c.edge, c.side, m), r.del(o), u.del(c), r.del(c), y = "l", h.y > d.y && (g = h, h = d, d = g, y = "r"), v = i.bisect(h, d), f = r.createHalfEdge(v, y), r.insert(l, f), i.endPoint(v, _o[y], m), p = i.intersect(l, f), p && (u.del(l), u.insert(l, p, i.distance(p, h))), p = i.intersect(f, s), p && u.insert(f, p, i.distance(p, h))
        }
        for (o = r.right(r.leftEnd); o != r.rightEnd; o = r.right(o))n(o.edge)
    }

    function Ji() {
        return {leaf: !0, nodes: [], point: null}
    }

    function Gi(t, n, e, r, i, u) {
        if (!t(n, e, r, i, u)) {
            var a = .5 * (e + i), o = .5 * (r + u), c = n.nodes;
            c[0] && Gi(t, c[0], e, r, a, o), c[1] && Gi(t, c[1], a, r, i, o), c[2] && Gi(t, c[2], e, o, a, u), c[3] && Gi(t, c[3], a, o, i, u)
        }
    }

    function Ki() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Wi(t, n, e, r) {
        for (var i, u, a = 0, o = n.length, c = e.length; o > a;) {
            if (r >= c)return -1;
            if (i = n.charCodeAt(a++), 37 === i) {
                if (u = Yo[n.charAt(a++)], !u || 0 > (r = u(t, e, r)))return -1
            } else if (i != e.charCodeAt(r++))return -1
        }
        return r
    }

    function Qi(t) {
        return RegExp("^(?:" + t.map(d3.requote).join("|") + ")", "i")
    }

    function tu(t) {
        for (var n = new u, e = -1, r = t.length; r > ++e;)n.set(t[e].toLowerCase(), e);
        return n
    }

    function nu(t, n, e) {
        t += "";
        var r = t.length;
        return e > r ? Array(e - r + 1).join(n) + t : t
    }

    function eu(t, n, e) {
        Lo.lastIndex = 0;
        var r = Lo.exec(n.substring(e));
        return r ? e += r[0].length : -1
    }

    function ru(t, n, e) {
        Do.lastIndex = 0;
        var r = Do.exec(n.substring(e));
        return r ? e += r[0].length : -1
    }

    function iu(t, n, e) {
        Ro.lastIndex = 0;
        var r = Ro.exec(n.substring(e));
        return r ? (t.m = Po.get(r[0].toLowerCase()), e += r[0].length) : -1
    }

    function uu(t, n, e) {
        Fo.lastIndex = 0;
        var r = Fo.exec(n.substring(e));
        return r ? (t.m = Ho.get(r[0].toLowerCase()), e += r[0].length) : -1
    }

    function au(t, n, e) {
        return Wi(t, "" + Oo.c, n, e)
    }

    function ou(t, n, e) {
        return Wi(t, "" + Oo.x, n, e)
    }

    function cu(t, n, e) {
        return Wi(t, "" + Oo.X, n, e)
    }

    function lu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 4));
        return r ? (t.y = +r[0], e += r[0].length) : -1
    }

    function su(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.y = fu(+r[0]), e += r[0].length) : -1
    }

    function fu(t) {
        return t + (t > 68 ? 1900 : 2e3)
    }

    function hu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.m = r[0] - 1, e += r[0].length) : -1
    }

    function du(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.d = +r[0], e += r[0].length) : -1
    }

    function gu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.H = +r[0], e += r[0].length) : -1
    }

    function pu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.M = +r[0], e += r[0].length) : -1
    }

    function mu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 2));
        return r ? (t.S = +r[0], e += r[0].length) : -1
    }

    function vu(t, n, e) {
        Uo.lastIndex = 0;
        var r = Uo.exec(n.substring(e, e + 3));
        return r ? (t.L = +r[0], e += r[0].length) : -1
    }

    function yu(t, n, e) {
        var r = Io.get(n.substring(e, e += 2).toLowerCase());
        return null == r ? -1 : (t.p = r, e)
    }

    function Mu(t) {
        var n = t.getTimezoneOffset(), e = n > 0 ? "-" : "+", r = ~~(Math.abs(n) / 60), i = Math.abs(n) % 60;
        return e + nu(r, "0", 2) + nu(i, "0", 2)
    }

    function bu(t) {
        return t.toISOString()
    }

    function xu(t, n, e) {
        function r(n) {
            var e = t(n), r = u(e, 1);
            return r - n > n - e ? e : r
        }

        function i(e) {
            return n(e = t(new wo(e - 1)), 1), e
        }

        function u(t, e) {
            return n(t = new wo(+t), e), t
        }

        function a(t, r, u) {
            var a = i(t), o = [];
            if (u > 1)for (; r > a;)e(a) % u || o.push(new Date(+a)), n(a, 1); else for (; r > a;)o.push(new Date(+a)), n(a, 1);
            return o
        }

        function o(t, n, e) {
            try {
                wo = Ki;
                var r = new Ki;
                return r._ = t, a(r, n, e)
            } finally {
                wo = Date
            }
        }

        t.floor = t, t.round = r, t.ceil = i, t.offset = u, t.range = a;
        var c = t.utc = _u(t);
        return c.floor = c, c.round = _u(r), c.ceil = _u(i), c.offset = _u(u), c.range = o, t
    }

    function _u(t) {
        return function (n, e) {
            try {
                wo = Ki;
                var r = new Ki;
                return r._ = n, t(r, e)._
            } finally {
                wo = Date
            }
        }
    }

    function wu(t, n, e) {
        function r(n) {
            return t(n)
        }

        return r.invert = function (n) {
            return ku(t.invert(n))
        }, r.domain = function (n) {
            return arguments.length ? (t.domain(n), r) : t.domain().map(ku)
        }, r.nice = function (t) {
            return r.domain(Yn(r.domain(), function () {
                return t
            }))
        }, r.ticks = function (e, i) {
            var u = Su(r.domain());
            if ("function" != typeof e) {
                var a = u[1] - u[0], o = a / e, c = d3.bisect(Xo, o);
                if (c == Xo.length)return n.year(u, e);
                if (!c)return t.ticks(e).map(ku);
                Math.log(o / Xo[c - 1]) < Math.log(Xo[c] / o) && --c, e = n[c], i = e[1], e = e[0].range
            }
            return e(u[0], new Date(+u[1] + 1), i)
        }, r.tickFormat = function () {
            return e
        }, r.copy = function () {
            return wu(t.copy(), n, e)
        }, d3.rebind(r, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function Su(t) {
        var n = t[0], e = t[t.length - 1];
        return e > n ? [n, e] : [e, n]
    }

    function ku(t) {
        return new Date(t)
    }

    function Eu(t) {
        return function (n) {
            for (var e = t.length - 1, r = t[e]; !r[1](n);)r = t[--e];
            return r[0](n)
        }
    }

    function Au(t) {
        var n = new Date(t, 0, 1);
        return n.setFullYear(t), n
    }

    function Nu(t) {
        var n = t.getFullYear(), e = Au(n), r = Au(n + 1);
        return n + (t - e) / (r - e)
    }

    function Tu(t) {
        var n = new Date(Date.UTC(t, 0, 1));
        return n.setUTCFullYear(t), n
    }

    function qu(t) {
        var n = t.getUTCFullYear(), e = Tu(n), r = Tu(n + 1);
        return n + (t - e) / (r - e)
    }

    var Cu = ".", zu = ",", Du = [3, 3];
    Date.now || (Date.now = function () {
        return +new Date
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch (Lu) {
        var Fu = CSSStyleDeclaration.prototype, Hu = Fu.setProperty;
        Fu.setProperty = function (t, n, e) {
            Hu.call(this, t, n + "", e)
        }
    }
    d3 = {version: "3.0.3"};
    var Ru = Math.PI, Pu = 1e-6, ju = Ru / 180, Ou = 180 / Ru, Yu = i;
    try {
        Yu(document.documentElement.childNodes)[0].nodeType
    } catch (Uu) {
        Yu = r
    }
    var Iu = [].__proto__ ? function (t, n) {
        t.__proto__ = n
    } : function (t, n) {
        for (var e in n)t[e] = n[e]
    };
    d3.map = function (t) {
        var n = new u;
        for (var e in t)n.set(e, t[e]);
        return n
    }, e(u, {
        has: function (t) {
            return Vu + t in this
        }, get: function (t) {
            return this[Vu + t]
        }, set: function (t, n) {
            return this[Vu + t] = n
        }, remove: function (t) {
            return t = Vu + t, t in this && delete this[t]
        }, keys: function () {
            var t = [];
            return this.forEach(function (n) {
                t.push(n)
            }), t
        }, values: function () {
            var t = [];
            return this.forEach(function (n, e) {
                t.push(e)
            }), t
        }, entries: function () {
            var t = [];
            return this.forEach(function (n, e) {
                t.push({key: n, value: e})
            }), t
        }, forEach: function (t) {
            for (var n in this)n.charCodeAt(0) === Xu && t.call(this, n.substring(1), this[n])
        }
    });
    var Vu = "\0", Xu = Vu.charCodeAt(0);
    d3.functor = c, d3.rebind = function (t, n) {
        for (var e, r = 1, i = arguments.length; i > ++r;)t[e = arguments[r]] = l(t, n, n[e]);
        return t
    }, d3.ascending = function (t, n) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, d3.descending = function (t, n) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }, d3.mean = function (t, n) {
        var e, r = t.length, i = 0, u = -1, a = 0;
        if (1 === arguments.length)for (; r > ++u;)s(e = t[u]) && (i += (e - i) / ++a); else for (; r > ++u;)s(e = n.call(t, t[u], u)) && (i += (e - i) / ++a);
        return a ? i : void 0
    }, d3.median = function (t, n) {
        return arguments.length > 1 && (t = t.map(n)), t = t.filter(s), t.length ? d3.quantile(t.sort(d3.ascending), .5) : void 0
    }, d3.min = function (t, n) {
        var e, r, i = -1, u = t.length;
        if (1 === arguments.length) {
            for (; u > ++i && (null == (e = t[i]) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = t[i]) && e > r && (e = r)
        } else {
            for (; u > ++i && (null == (e = n.call(t, t[i], i)) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = n.call(t, t[i], i)) && e > r && (e = r)
        }
        return e
    }, d3.max = function (t, n) {
        var e, r, i = -1, u = t.length;
        if (1 === arguments.length) {
            for (; u > ++i && (null == (e = t[i]) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = t[i]) && r > e && (e = r)
        } else {
            for (; u > ++i && (null == (e = n.call(t, t[i], i)) || e != e);)e = void 0;
            for (; u > ++i;)null != (r = n.call(t, t[i], i)) && r > e && (e = r)
        }
        return e
    }, d3.extent = function (t, n) {
        var e, r, i, u = -1, a = t.length;
        if (1 === arguments.length) {
            for (; a > ++u && (null == (e = i = t[u]) || e != e);)e = i = void 0;
            for (; a > ++u;)null != (r = t[u]) && (e > r && (e = r), r > i && (i = r))
        } else {
            for (; a > ++u && (null == (e = i = n.call(t, t[u], u)) || e != e);)e = void 0;
            for (; a > ++u;)null != (r = n.call(t, t[u], u)) && (e > r && (e = r), r > i && (i = r))
        }
        return [e, i]
    }, d3.random = {
        normal: function (t, n) {
            var e = arguments.length;
            return 2 > e && (n = 1), 1 > e && (t = 0), function () {
                var e, r, i;
                do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r; while (!i || i > 1);
                return t + n * e * Math.sqrt(-2 * Math.log(i) / i)
            }
        }, logNormal: function (t, n) {
            var e = arguments.length;
            2 > e && (n = 1), 1 > e && (t = 0);
            var r = d3.random.normal();
            return function () {
                return Math.exp(t + n * r())
            }
        }, irwinHall: function (t) {
            return function () {
                for (var n = 0, e = 0; t > e; e++)n += Math.random();
                return n / t
            }
        }
    }, d3.sum = function (t, n) {
        var e, r = 0, i = t.length, u = -1;
        if (1 === arguments.length)for (; i > ++u;)isNaN(e = +t[u]) || (r += e); else for (; i > ++u;)isNaN(e = +n.call(t, t[u], u)) || (r += e);
        return r
    }, d3.quantile = function (t, n) {
        var e = (t.length - 1) * n + 1, r = Math.floor(e), i = +t[r - 1], u = e - r;
        return u ? i + u * (t[r] - i) : i
    }, d3.shuffle = function (t) {
        for (var n, e, r = t.length; r;)e = 0 | Math.random() * r--, n = t[r], t[r] = t[e], t[e] = n;
        return t
    }, d3.transpose = function (t) {
        return d3.zip.apply(d3, t)
    }, d3.zip = function () {
        if (!(r = arguments.length))return [];
        for (var t = -1, n = d3.min(arguments, f), e = Array(n); n > ++t;)for (var r, i = -1, u = e[t] = Array(r); r > ++i;)u[i] = arguments[i][t];
        return e
    }, d3.bisector = function (t) {
        return {
            left: function (n, e, r, i) {
                for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = n.length); i > r;) {
                    var u = r + i >>> 1;
                    e > t.call(n, n[u], u) ? r = u + 1 : i = u
                }
                return r
            }, right: function (n, e, r, i) {
                for (3 > arguments.length && (r = 0), 4 > arguments.length && (i = n.length); i > r;) {
                    var u = r + i >>> 1;
                    t.call(n, n[u], u) > e ? i = u : r = u + 1
                }
                return r
            }
        }
    };
    var Zu = d3.bisector(function (t) {
        return t
    });
    d3.bisectLeft = Zu.left, d3.bisect = d3.bisectRight = Zu.right, d3.nest = function () {
        function t(n, o) {
            if (o >= a.length)return r ? r.call(i, n) : e ? n.sort(e) : n;
            for (var c, l, s, f = -1, h = n.length, d = a[o++], g = new u, p = {}; h > ++f;)(s = g.get(c = d(l = n[f]))) ? s.push(l) : g.set(c, [l]);
            return g.forEach(function (n, e) {
                p[n] = t(e, o)
            }), p
        }

        function n(t, e) {
            if (e >= a.length)return t;
            var r, i = [], u = o[e++];
            for (r in t)i.push({key: r, values: n(t[r], e)});
            return u && i.sort(function (t, n) {
                return u(t.key, n.key)
            }), i
        }

        var e, r, i = {}, a = [], o = [];
        return i.map = function (n) {
            return t(n, 0)
        }, i.entries = function (e) {
            return n(t(e, 0), 0)
        }, i.key = function (t) {
            return a.push(t), i
        }, i.sortKeys = function (t) {
            return o[a.length - 1] = t, i
        }, i.sortValues = function (t) {
            return e = t, i
        }, i.rollup = function (t) {
            return r = t, i
        }, i
    }, d3.keys = function (t) {
        var n = [];
        for (var e in t)n.push(e);
        return n
    }, d3.values = function (t) {
        var n = [];
        for (var e in t)n.push(t[e]);
        return n
    }, d3.entries = function (t) {
        var n = [];
        for (var e in t)n.push({key: e, value: t[e]});
        return n
    }, d3.permute = function (t, n) {
        for (var e = [], r = -1, i = n.length; i > ++r;)e[r] = t[n[r]];
        return e
    }, d3.merge = function (t) {
        return Array.prototype.concat.apply([], t)
    }, d3.range = function (t, n, e) {
        if (3 > arguments.length && (e = 1, 2 > arguments.length && (n = t, t = 0)), 1 / 0 === (n - t) / e)throw Error("infinite range");
        var r, i = [], u = d(Math.abs(e)), a = -1;
        if (t *= u, n *= u, e *= u, 0 > e)for (; (r = t + e * ++a) > n;)i.push(r / u); else for (; n > (r = t + e * ++a);)i.push(r / u);
        return i
    }, d3.requote = function (t) {
        return t.replace(Bu, "\\$&")
    };
    var Bu = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function (t, n) {
        return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
    }, d3.xhr = function (t, n, e) {
        function r() {
            var t = l.status;
            !t && l.responseText || t >= 200 && 300 > t || 304 === t ? u.load.call(i, c.call(i, l)) : u.error.call(i, l)
        }

        var i = {}, u = d3.dispatch("progress", "load", "error"), o = {}, c = a, l = new (window.XDomainRequest && /^(http(s)?:)?\/\//.test(t) ? XDomainRequest : XMLHttpRequest);
        return "onload" in l ? l.onload = l.onerror = r : l.onreadystatechange = function () {
            l.readyState > 3 && r()
        }, l.onprogress = function (t) {
            var n = d3.event;
            d3.event = t;
            try {
                u.progress.call(i, l)
            } finally {
                d3.event = n
            }
        }, i.header = function (t, n) {
            return t = (t + "").toLowerCase(), 2 > arguments.length ? o[t] : (null == n ? delete o[t] : o[t] = n + "", i)
        }, i.mimeType = function (t) {
            return arguments.length ? (n = null == t ? null : t + "", i) : n
        }, i.response = function (t) {
            return c = t, i
        }, ["get", "post"].forEach(function (t) {
            i[t] = function () {
                return i.send.apply(i, [t].concat(Yu(arguments)))
            }
        }), i.send = function (e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), l.open(e, t, !0), null == n || "accept" in o || (o.accept = n + ",*/*"), l.setRequestHeader)for (var a in o)l.setRequestHeader(a, o[a]);
            return null != n && l.overrideMimeType && l.overrideMimeType(n), null != u && i.on("error", u).on("load", function (t) {
                u(null, t)
            }), l.send(null == r ? null : r), i
        }, i.abort = function () {
            return l.abort(), i
        }, d3.rebind(i, u, "on"), 2 === arguments.length && "function" == typeof n && (e = n, n = null), null == e ? i : i.get(g(e))
    }, d3.text = function () {
        return d3.xhr.apply(d3, arguments).response(p)
    }, d3.json = function (t, n) {
        return d3.xhr(t, "application/json", n).response(m)
    }, d3.html = function (t, n) {
        return d3.xhr(t, "text/html", n).response(v)
    }, d3.xml = function () {
        return d3.xhr.apply(d3, arguments).response(y)
    };
    var $u = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: $u, qualify: function (t) {
            var n = t.indexOf(":"), e = t;
            return n >= 0 && (e = t.substring(0, n), t = t.substring(n + 1)), $u.hasOwnProperty(e) ? {
                space: $u[e],
                local: t
            } : t
        }
    }, d3.dispatch = function () {
        for (var t = new M, n = -1, e = arguments.length; e > ++n;)t[arguments[n]] = b(t);
        return t
    }, M.prototype.on = function (t, n) {
        var e = t.indexOf("."), r = "";
        return e > 0 && (r = t.substring(e + 1), t = t.substring(0, e)), 2 > arguments.length ? this[t].on(r) : this[t].on(r, n)
    }, d3.format = function (t) {
        var n = Ju.exec(t), e = n[1] || " ", r = n[2] || ">", i = n[3] || "", u = n[4] || "", a = n[5], o = +n[6], c = n[7], l = n[8], s = n[9], f = 1, h = "", d = !1;
        switch (l && (l = +l.substring(1)), (a || "0" === e && "=" === r) && (a = e = "0", r = "=", c && (o -= Math.floor((o - 1) / 4))), s) {
            case"n":
                c = !0, s = "g";
                break;
            case"%":
                f = 100, h = "%", s = "f";
                break;
            case"p":
                f = 100, h = "%", s = "r";
                break;
            case"b":
            case"o":
            case"x":
            case"X":
                u && (u = "0" + s.toLowerCase());
            case"c":
            case"d":
                d = !0, l = 0;
                break;
            case"s":
                f = -1, s = "r"
        }
        "#" === u && (u = ""), "r" != s || l || (s = "g"), s = Gu.get(s) || _;
        var g = a && c;
        return function (t) {
            if (d && t % 1)return "";
            var n = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : i;
            if (0 > f) {
                var p = d3.formatPrefix(t, l);
                t = p.scale(t), h = p.symbol
            } else t *= f;
            t = s(t, l), !a && c && (t = Ku(t));
            var m = u.length + t.length + (g ? 0 : n.length), v = o > m ? Array(m = o - m + 1).join(e) : "";
            return g && (t = Ku(v + t)), Cu && t.replace(".", Cu), n += u, ("<" === r ? n + t + v : ">" === r ? v + n + t : "^" === r ? v.substring(0, m >>= 1) + n + t + v.substring(m) : n + (g ? t : v + t)) + h
        }
    };
    var Ju = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/, Gu = d3.map({
        b: function (t) {
            return t.toString(2)
        }, c: function (t) {
            return String.fromCharCode(t)
        }, o: function (t) {
            return t.toString(8)
        }, x: function (t) {
            return t.toString(16)
        }, X: function (t) {
            return t.toString(16).toUpperCase()
        }, g: function (t, n) {
            return t.toPrecision(n)
        }, e: function (t, n) {
            return t.toExponential(n)
        }, f: function (t, n) {
            return t.toFixed(n)
        }, r: function (t, n) {
            return d3.round(t, n = x(t, n)).toFixed(Math.max(0, Math.min(20, n)))
        }
    }), Ku = a;
    if (Du) {
        var Wu = Du.length;
        Ku = function (t) {
            for (var n = t.lastIndexOf("."), e = n >= 0 ? "." + t.substring(n + 1) : (n = t.length, ""), r = [], i = 0, u = Du[0]; n > 0 && u > 0;)r.push(t.substring(n -= u, n + u)), u = Du[i = (i + 1) % Wu];
            return r.reverse().join(zu || "") + e
        }
    }
    var Qu = ["y", "z", "a", "f", "p", "n", "μ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(w);
    d3.formatPrefix = function (t, n) {
        var e = 0;
        return t && (0 > t && (t *= -1), n && (t = d3.round(t, x(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= e ? e + 1 : e - 1) / 3)))), Qu[8 + e / 3]
    };
    var ta = function () {
        return a
    }, na = d3.map({
        linear: ta, poly: q, quad: function () {
            return A
        }, cubic: function () {
            return N
        }, sin: function () {
            return C
        }, exp: function () {
            return z
        }, circle: function () {
            return D
        }, elastic: L, back: F, bounce: function () {
            return H
        }
    }), ea = d3.map({
        "in": a, out: k, "in-out": E, "out-in": function (t) {
            return E(k(t))
        }
    });
    d3.ease = function (t) {
        var n = t.indexOf("-"), e = n >= 0 ? t.substring(0, n) : t, r = n >= 0 ? t.substring(n + 1) : "in";
        return e = na.get(e) || ta, r = ea.get(r) || a, S(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, d3.event = null, d3.transform = function (t) {
        var n = document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function (t) {
            n.setAttribute("transform", t);
            var e = n.transform.baseVal.consolidate();
            return new O(e ? e.matrix : ra)
        })(t)
    }, O.prototype.toString = function () {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var ra = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
    d3.interpolate = function (t, n) {
        for (var e, r = d3.interpolators.length; --r >= 0 && !(e = d3.interpolators[r](t, n)););
        return e
    }, d3.interpolateNumber = function (t, n) {
        return n -= t, function (e) {
            return t + n * e
        }
    }, d3.interpolateRound = function (t, n) {
        return n -= t, function (e) {
            return Math.round(t + n * e)
        }
    }, d3.interpolateString = function (t, n) {
        var e, r, i, u, a, o = 0, c = 0, l = [], s = [];
        for (ia.lastIndex = 0, r = 0; e = ia.exec(n); ++r)e.index && l.push(n.substring(o, c = e.index)), s.push({
            i: l.length,
            x: e[0]
        }), l.push(null), o = ia.lastIndex;
        for (n.length > o && l.push(n.substring(o)), r = 0, u = s.length; (e = ia.exec(t)) && u > r; ++r)if (a = s[r], a.x == e[0]) {
            if (a.i)if (null == l[a.i + 1])for (l[a.i - 1] += a.x, l.splice(a.i, 1), i = r + 1; u > i; ++i)s[i].i--; else for (l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), i = r + 1; u > i; ++i)s[i].i -= 2; else if (null == l[a.i + 1])l[a.i] = a.x; else for (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), i = r + 1; u > i; ++i)s[i].i--;
            s.splice(r, 1), u--, r--
        } else a.x = d3.interpolateNumber(parseFloat(e[0]), parseFloat(a.x));
        for (; u > r;)a = s.pop(), null == l[a.i + 1] ? l[a.i] = a.x : (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1)), u--;
        return 1 === l.length ? null == l[0] ? s[0].x : function () {
            return n
        } : function (t) {
            for (r = 0; u > r; ++r)l[(a = s[r]).i] = a.x(t);
            return l.join("")
        }
    }, d3.interpolateTransform = function (t, n) {
        var e, r = [], i = [], u = d3.transform(t), a = d3.transform(n), o = u.translate, c = a.translate, l = u.rotate, s = a.rotate, f = u.skew, h = a.skew, d = u.scale, g = a.scale;
        return o[0] != c[0] || o[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
            i: 1,
            x: d3.interpolateNumber(o[0], c[0])
        }, {
            i: 3,
            x: d3.interpolateNumber(o[1], c[1])
        })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), i.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: d3.interpolateNumber(l, s)
        })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? i.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: d3.interpolateNumber(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"), d[0] != g[0] || d[1] != g[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
            i: e - 4,
            x: d3.interpolateNumber(d[0], g[0])
        }, {
            i: e - 2,
            x: d3.interpolateNumber(d[1], g[1])
        })) : (1 != g[0] || 1 != g[1]) && r.push(r.pop() + "scale(" + g + ")"), e = i.length, function (t) {
            for (var n, u = -1; e > ++u;)r[(n = i[u]).i] = n.x(t);
            return r.join("")
        }
    }, d3.interpolateRgb = function (t, n) {
        t = d3.rgb(t), n = d3.rgb(n);
        var e = t.r, r = t.g, i = t.b, u = n.r - e, a = n.g - r, o = n.b - i;
        return function (t) {
            return "#" + G(Math.round(e + u * t)) + G(Math.round(r + a * t)) + G(Math.round(i + o * t))
        }
    }, d3.interpolateHsl = function (t, n) {
        t = d3.hsl(t), n = d3.hsl(n);
        var e = t.h, r = t.s, i = t.l, u = n.h - e, a = n.s - r, o = n.l - i;
        return u > 180 ? u -= 360 : -180 > u && (u += 360), function (t) {
            return un(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateLab = function (t, n) {
        t = d3.lab(t), n = d3.lab(n);
        var e = t.l, r = t.a, i = t.b, u = n.l - e, a = n.a - r, o = n.b - i;
        return function (t) {
            return fn(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateHcl = function (t, n) {
        t = d3.hcl(t), n = d3.hcl(n);
        var e = t.h, r = t.c, i = t.l, u = n.h - e, a = n.c - r, o = n.l - i;
        return u > 180 ? u -= 360 : -180 > u && (u += 360), function (t) {
            return cn(e + u * t, r + a * t, i + o * t) + ""
        }
    }, d3.interpolateArray = function (t, n) {
        var e, r = [], i = [], u = t.length, a = n.length, o = Math.min(t.length, n.length);
        for (e = 0; o > e; ++e)r.push(d3.interpolate(t[e], n[e]));
        for (; u > e; ++e)i[e] = t[e];
        for (; a > e; ++e)i[e] = n[e];
        return function (t) {
            for (e = 0; o > e; ++e)i[e] = r[e](t);
            return i
        }
    }, d3.interpolateObject = function (t, n) {
        var e, r = {}, i = {};
        for (e in t)e in n ? r[e] = V(e)(t[e], n[e]) : i[e] = t[e];
        for (e in n)e in t || (i[e] = n[e]);
        return function (t) {
            for (e in r)i[e] = r[e](t);
            return i
        }
    };
    var ia = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject, function (t, n) {
        return n instanceof Array && d3.interpolateArray(t, n)
    }, function (t, n) {
        return ("string" == typeof t || "string" == typeof n) && d3.interpolateString(t + "", n + "")
    }, function (t, n) {
        return ("string" == typeof n ? aa.has(n) || /^(#|rgb\(|hsl\()/.test(n) : n instanceof B) && d3.interpolateRgb(t, n)
    }, function (t, n) {
        return !isNaN(t = +t) && !isNaN(n = +n) && d3.interpolateNumber(t, n)
    }], B.prototype.toString = function () {
        return this.rgb() + ""
    }, d3.rgb = function (t, n, e) {
        return 1 === arguments.length ? t instanceof J ? $(t.r, t.g, t.b) : K("" + t, $, un) : $(~~t, ~~n, ~~e)
    };
    var ua = J.prototype = new B;
    ua.brighter = function (t) {
        t = Math.pow(.7, arguments.length ? t : 1);
        var n = this.r, e = this.g, r = this.b, i = 30;
        return n || e || r ? (n && i > n && (n = i), e && i > e && (e = i), r && i > r && (r = i), $(Math.min(255, Math.floor(n / t)), Math.min(255, Math.floor(e / t)), Math.min(255, Math.floor(r / t)))) : $(i, i, i)
    }, ua.darker = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), $(Math.floor(t * this.r), Math.floor(t * this.g), Math.floor(t * this.b))
    }, ua.hsl = function () {
        return W(this.r, this.g, this.b)
    }, ua.toString = function () {
        return "#" + G(this.r) + G(this.g) + G(this.b)
    };
    var aa = d3.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    aa.forEach(function (t, n) {
        aa.set(t, K(n, $, un))
    }), d3.hsl = function (t, n, e) {
        return 1 === arguments.length ? t instanceof rn ? en(t.h, t.s, t.l) : K("" + t, W, en) : en(+t, +n, +e)
    };
    var oa = rn.prototype = new B;
    oa.brighter = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), en(this.h, this.s, this.l / t)
    }, oa.darker = function (t) {
        return t = Math.pow(.7, arguments.length ? t : 1), en(this.h, this.s, t * this.l)
    }, oa.rgb = function () {
        return un(this.h, this.s, this.l)
    }, d3.hcl = function (t, n, e) {
        return 1 === arguments.length ? t instanceof on ? an(t.h, t.c, t.l) : t instanceof sn ? hn(t.l, t.a, t.b) : hn((t = Q((t = d3.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : an(+t, +n, +e)
    };
    var ca = on.prototype = new B;
    ca.brighter = function (t) {
        return an(this.h, this.c, Math.min(100, this.l + la * (arguments.length ? t : 1)))
    }, ca.darker = function (t) {
        return an(this.h, this.c, Math.max(0, this.l - la * (arguments.length ? t : 1)))
    }, ca.rgb = function () {
        return cn(this.h, this.c, this.l).rgb()
    }, d3.lab = function (t, n, e) {
        return 1 === arguments.length ? t instanceof sn ? ln(t.l, t.a, t.b) : t instanceof on ? cn(t.l, t.c, t.h) : Q((t = d3.rgb(t)).r, t.g, t.b) : ln(+t, +n, +e)
    };
    var la = 18, sa = .95047, fa = 1, ha = 1.08883, da = sn.prototype = new B;
    da.brighter = function (t) {
        return ln(Math.min(100, this.l + la * (arguments.length ? t : 1)), this.a, this.b)
    }, da.darker = function (t) {
        return ln(Math.max(0, this.l - la * (arguments.length ? t : 1)), this.a, this.b)
    }, da.rgb = function () {
        return fn(this.l, this.a, this.b)
    };
    var ga = function (t, n) {
        return n.querySelector(t)
    }, pa = function (t, n) {
        return n.querySelectorAll(t)
    }, ma = document.documentElement, va = ma.matchesSelector || ma.webkitMatchesSelector || ma.mozMatchesSelector || ma.msMatchesSelector || ma.oMatchesSelector, ya = function (t, n) {
        return va.call(t, n)
    };
    "function" == typeof Sizzle && (ga = function (t, n) {
        return Sizzle(t, n)[0] || null
    }, pa = function (t, n) {
        return Sizzle.uniqueSort(Sizzle(t, n))
    }, ya = Sizzle.matchesSelector);
    var Ma = [];
    d3.selection = function () {
        return ba
    }, d3.selection.prototype = Ma, Ma.select = function (t) {
        var n, e, r, i, u = [];
        "function" != typeof t && (t = vn(t));
        for (var a = -1, o = this.length; o > ++a;) {
            u.push(n = []), n.parentNode = (r = this[a]).parentNode;
            for (var c = -1, l = r.length; l > ++c;)(i = r[c]) ? (n.push(e = t.call(i, i.__data__, c)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null)
        }
        return mn(u)
    }, Ma.selectAll = function (t) {
        var n, e, r = [];
        "function" != typeof t && (t = yn(t));
        for (var i = -1, u = this.length; u > ++i;)for (var a = this[i], o = -1, c = a.length; c > ++o;)(e = a[o]) && (r.push(n = Yu(t.call(e, e.__data__, o))), n.parentNode = e);
        return mn(r)
    }, Ma.attr = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t) {
                var e = this.node();
                return t = d3.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
            }
            for (n in t)this.each(Mn(n, t[n]));
            return this
        }
        return this.each(Mn(t, n))
    }, Ma.classed = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t) {
                var e = this.node(), r = (t = t.trim().split(/^|\s+/g)).length, i = -1;
                if (n = e.classList) {
                    for (; r > ++i;)if (!n.contains(t[i]))return !1
                } else for (n = e.className, null != n.baseVal && (n = n.baseVal); r > ++i;)if (!bn(t[i]).test(n))return !1;
                return !0
            }
            for (n in t)this.each(xn(n, t[n]));
            return this
        }
        return this.each(xn(t, n))
    }, Ma.style = function (t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = "");
                for (e in t)this.each(wn(e, t[e], n));
                return this
            }
            if (2 > r)return getComputedStyle(this.node(), null).getPropertyValue(t);
            e = ""
        }
        return this.each(wn(t, n, e))
    }, Ma.property = function (t, n) {
        if (2 > arguments.length) {
            if ("string" == typeof t)return this.node()[t];
            for (n in t)this.each(Sn(n, t[n]));
            return this
        }
        return this.each(Sn(t, n))
    }, Ma.text = function (t) {
        return arguments.length ? this.each("function" == typeof t ? function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        } : null == t ? function () {
            this.textContent = ""
        } : function () {
            this.textContent = t
        }) : this.node().textContent
    }, Ma.html = function (t) {
        return arguments.length ? this.each("function" == typeof t ? function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        } : null == t ? function () {
            this.innerHTML = ""
        } : function () {
            this.innerHTML = t
        }) : this.node().innerHTML
    }, Ma.append = function (t) {
        function n() {
            return this.appendChild(document.createElementNS(this.namespaceURI, t))
        }

        function e() {
            return this.appendChild(document.createElementNS(t.space, t.local))
        }

        return t = d3.ns.qualify(t), this.select(t.local ? e : n)
    }, Ma.insert = function (t, n) {
        function e() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, t), ga(n, this))
        }

        function r() {
            return this.insertBefore(document.createElementNS(t.space, t.local), ga(n, this))
        }

        return t = d3.ns.qualify(t), this.select(t.local ? r : e)
    }, Ma.remove = function () {
        return this.each(function () {
            var t = this.parentNode;
            t && t.removeChild(this)
        })
    }, Ma.data = function (t, n) {
        function e(t, e) {
            var r, i, a, o = t.length, f = e.length, h = Math.min(o, f), d = Array(f), g = Array(f), p = Array(o);
            if (n) {
                var m, v = new u, y = new u, M = [];
                for (r = -1; o > ++r;)m = n.call(i = t[r], i.__data__, r), v.has(m) ? p[r] = i : v.set(m, i), M.push(m);
                for (r = -1; f > ++r;)m = n.call(e, a = e[r], r), (i = v.get(m)) ? (d[r] = i, i.__data__ = a) : y.has(m) || (g[r] = kn(a)), y.set(m, a), v.remove(m);
                for (r = -1; o > ++r;)v.has(M[r]) && (p[r] = t[r])
            } else {
                for (r = -1; h > ++r;)i = t[r], a = e[r], i ? (i.__data__ = a, d[r] = i) : g[r] = kn(a);
                for (; f > r; ++r)g[r] = kn(e[r]);
                for (; o > r; ++r)p[r] = t[r]
            }
            g.update = d, g.parentNode = d.parentNode = p.parentNode = t.parentNode, c.push(g), l.push(d), s.push(p)
        }

        var r, i, a = -1, o = this.length;
        if (!arguments.length) {
            for (t = Array(o = (r = this[0]).length); o > ++a;)(i = r[a]) && (t[a] = i.__data__);
            return t
        }
        var c = qn([]), l = mn([]), s = mn([]);
        if ("function" == typeof t)for (; o > ++a;)e(r = this[a], t.call(r, r.parentNode.__data__, a)); else for (; o > ++a;)e(r = this[a], t);
        return l.enter = function () {
            return c
        }, l.exit = function () {
            return s
        }, l
    }, Ma.datum = function (t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    }, Ma.filter = function (t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = En(t));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(n = []), n.parentNode = (e = this[u]).parentNode;
            for (var o = 0, c = e.length; c > o; o++)(r = e[o]) && t.call(r, r.__data__, o) && n.push(r)
        }
        return mn(i)
    }, Ma.order = function () {
        for (var t = -1, n = this.length; n > ++t;)for (var e, r = this[t], i = r.length - 1, u = r[i]; --i >= 0;)(e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
        return this
    }, Ma.sort = function (t) {
        t = An.apply(this, arguments);
        for (var n = -1, e = this.length; e > ++n;)this[n].sort(t);
        return this.order()
    }, Ma.on = function (t, n, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (n = !1);
                for (e in t)this.each(Nn(e, t[e], n));
                return this
            }
            if (2 > r)return (r = this.node()["__on" + t]) && r._;
            e = !1
        }
        return this.each(Nn(t, n, e))
    }, Ma.each = function (t) {
        return Tn(this, function (n, e, r) {
            t.call(n, n.__data__, e, r)
        })
    }, Ma.call = function (t) {
        var n = Yu(arguments);
        return t.apply(n[0] = this, n), this
    }, Ma.empty = function () {
        return !this.node()
    }, Ma.node = function () {
        for (var t = 0, n = this.length; n > t; t++)for (var e = this[t], r = 0, i = e.length; i > r; r++) {
            var u = e[r];
            if (u)return u
        }
        return null
    }, Ma.transition = function () {
        var t, n, e = _a || ++Sa, r = [], i = Object.create(ka);
        i.time = Date.now();
        for (var u = -1, a = this.length; a > ++u;) {
            r.push(t = []);
            for (var o = this[u], c = -1, l = o.length; l > ++c;)(n = o[c]) && zn(n, c, e, i), t.push(n)
        }
        return Cn(r, e)
    };
    var ba = mn([[document]]);
    ba[0].parentNode = ma, d3.select = function (t) {
        return "string" == typeof t ? ba.select(t) : mn([[t]])
    }, d3.selectAll = function (t) {
        return "string" == typeof t ? ba.selectAll(t) : mn([Yu(t)])
    };
    var xa = [];
    d3.selection.enter = qn, d3.selection.enter.prototype = xa, xa.append = Ma.append, xa.insert = Ma.insert, xa.empty = Ma.empty, xa.node = Ma.node, xa.select = function (t) {
        for (var n, e, r, i, u, a = [], o = -1, c = this.length; c > ++o;) {
            r = (i = this[o]).update, a.push(n = []), n.parentNode = i.parentNode;
            for (var l = -1, s = i.length; s > ++l;)(u = i[l]) ? (n.push(r[l] = e = t.call(i.parentNode, u.__data__, l)), e.__data__ = u.__data__) : n.push(null)
        }
        return mn(a)
    };
    var _a, wa = [], Sa = 0, ka = {ease: T, delay: 0, duration: 250};
    wa.call = Ma.call, wa.empty = Ma.empty, wa.node = Ma.node, d3.transition = function (t) {
        return arguments.length ? _a ? t.transition() : t : ba.transition()
    }, d3.transition.prototype = wa, wa.select = function (t) {
        var n, e, r, i = this.id, u = [];
        "function" != typeof t && (t = vn(t));
        for (var a = -1, o = this.length; o > ++a;) {
            u.push(n = []);
            for (var c = this[a], l = -1, s = c.length; s > ++l;)(r = c[l]) && (e = t.call(r, r.__data__, l)) ? ("__data__" in r && (e.__data__ = r.__data__), zn(e, l, i, r.__transition__[i]), n.push(e)) : n.push(null)
        }
        return Cn(u, i)
    }, wa.selectAll = function (t) {
        var n, e, r, i, u, a = this.id, o = [];
        "function" != typeof t && (t = yn(t));
        for (var c = -1, l = this.length; l > ++c;)for (var s = this[c], f = -1, h = s.length; h > ++f;)if (r = s[f]) {
            u = r.__transition__[a], e = t.call(r, r.__data__, f), o.push(n = []);
            for (var d = -1, g = e.length; g > ++d;)zn(i = e[d], d, a, u), n.push(i)
        }
        return Cn(o, a)
    }, wa.filter = function (t) {
        var n, e, r, i = [];
        "function" != typeof t && (t = En(t));
        for (var u = 0, a = this.length; a > u; u++) {
            i.push(n = []);
            for (var e = this[u], o = 0, c = e.length; c > o; o++)(r = e[o]) && t.call(r, r.__data__, o) && n.push(r)
        }
        return Cn(i, this.id, this.time).ease(this.ease())
    }, wa.attr = function (t, n) {
        function e() {
            this.removeAttribute(u)
        }

        function r() {
            this.removeAttributeNS(u.space, u.local)
        }

        if (2 > arguments.length) {
            for (n in t)this.attr(n, t[n]);
            return this
        }
        var i = V(t), u = d3.ns.qualify(t);
        return Ln(this, "attr." + t, n, function (t) {
            function n() {
                var n, e = this.getAttribute(u);
                return e !== t && (n = i(e, t), function (t) {
                        this.setAttribute(u, n(t))
                    })
            }

            function a() {
                var n, e = this.getAttributeNS(u.space, u.local);
                return e !== t && (n = i(e, t), function (t) {
                        this.setAttributeNS(u.space, u.local, n(t))
                    })
            }

            return null == t ? u.local ? r : e : (t += "", u.local ? a : n)
        })
    }, wa.attrTween = function (t, n) {
        function e(t, e) {
            var r = n.call(this, t, e, this.getAttribute(i));
            return r && function (t) {
                    this.setAttribute(i, r(t))
                }
        }

        function r(t, e) {
            var r = n.call(this, t, e, this.getAttributeNS(i.space, i.local));
            return r && function (t) {
                    this.setAttributeNS(i.space, i.local, r(t))
                }
        }

        var i = d3.ns.qualify(t);
        return this.tween("attr." + t, i.local ? r : e)
    }, wa.style = function (t, n, e) {
        function r() {
            this.style.removeProperty(t)
        }

        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof t) {
                2 > i && (n = "");
                for (e in t)this.style(e, t[e], n);
                return this
            }
            e = ""
        }
        var u = V(t);
        return Ln(this, "style." + t, n, function (n) {
            function i() {
                var r, i = getComputedStyle(this, null).getPropertyValue(t);
                return i !== n && (r = u(i, n), function (n) {
                        this.style.setProperty(t, r(n), e)
                    })
            }

            return null == n ? r : (n += "", i)
        })
    }, wa.styleTween = function (t, n, e) {
        return 3 > arguments.length && (e = ""), this.tween("style." + t, function (r, i) {
            var u = n.call(this, r, i, getComputedStyle(this, null).getPropertyValue(t));
            return u && function (n) {
                    this.style.setProperty(t, u(n), e)
                }
        })
    }, wa.text = function (t) {
        return Ln(this, "text", t, Dn)
    }, wa.remove = function () {
        return this.each("end.transition", function () {
            var t;
            !this.__transition__ && (t = this.parentNode) && t.removeChild(this)
        })
    }, wa.ease = function (t) {
        var n = this.id;
        return 1 > arguments.length ? this.node().__transition__[n].ease : ("function" != typeof t && (t = d3.ease.apply(d3, arguments)), Tn(this, function (e) {
            e.__transition__[n].ease = t
        }))
    }, wa.delay = function (t) {
        var n = this.id;
        return Tn(this, "function" == typeof t ? function (e, r, i) {
            e.__transition__[n].delay = 0 | t.call(e, e.__data__, r, i)
        } : (t |= 0, function (e) {
            e.__transition__[n].delay = t
        }))
    }, wa.duration = function (t) {
        var n = this.id;
        return Tn(this, "function" == typeof t ? function (e, r, i) {
            e.__transition__[n].duration = Math.max(1, 0 | t.call(e, e.__data__, r, i))
        } : (t = Math.max(1, 0 | t), function (e) {
            e.__transition__[n].duration = t
        }))
    }, wa.each = function (t, n) {
        var e = this.id;
        if (2 > arguments.length) {
            var r = ka, i = _a;
            _a = e, Tn(this, function (n, r, i) {
                ka = n.__transition__[e], t.call(n, n.__data__, r, i)
            }), ka = r, _a = i
        } else Tn(this, function (r) {
            r.__transition__[e].event.on(t, n)
        });
        return this
    }, wa.transition = function () {
        for (var t, n, e, r, i = this.id, u = ++Sa, a = [], o = 0, c = this.length; c > o; o++) {
            a.push(t = []);
            for (var n = this[o], l = 0, s = n.length; s > l; l++)(e = n[l]) && (r = Object.create(e.__transition__[i]), r.delay += r.duration, zn(e, l, u, r)), t.push(e)
        }
        return Cn(a, u)
    }, wa.tween = function (t, n) {
        var e = this.id;
        return 2 > arguments.length ? this.node().__transition__[e].tween.get(t) : Tn(this, null == n ? function (n) {
            n.__transition__[e].tween.remove(t)
        } : function (r) {
            r.__transition__[e].tween.set(t, n)
        })
    };
    var Ea, Aa, Na = 0, Ta = {}, qa = null;
    d3.timer = function (t, n, e) {
        if (3 > arguments.length) {
            if (2 > arguments.length)n = 0; else if (!isFinite(n))return;
            e = Date.now()
        }
        var r = Ta[t.id];
        r && r.callback === t ? (r.then = e, r.delay = n) : Ta[t.id = ++Na] = qa = {
            callback: t,
            then: e,
            delay: n,
            next: qa
        }, Ea || (Aa = clearTimeout(Aa), Ea = 1, Ca(Fn))
    }, d3.timer.flush = function () {
        for (var t, n = Date.now(), e = qa; e;)t = n - e.then, e.delay || (e.flush = e.callback(t)), e = e.next;
        Hn()
    };
    var Ca = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            setTimeout(t, 17)
        };
    d3.mouse = function (t) {
        return Rn(t, P())
    };
    var za = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.touches = function (t, n) {
        return 2 > arguments.length && (n = P().touches), n ? Yu(n).map(function (n) {
            var e = Rn(t, n);
            return e.identifier = n.identifier, e
        }) : []
    }, d3.scale = {}, d3.scale.linear = function () {
        return In([0, 1], [0, 1], d3.interpolate, !1)
    }, d3.scale.log = function () {
        return Kn(d3.scale.linear(), Wn)
    };
    var Da = d3.format(".0e");
    Wn.pow = function (t) {
        return Math.pow(10, t)
    }, Qn.pow = function (t) {
        return -Math.pow(10, -t)
    }, d3.scale.pow = function () {
        return te(d3.scale.linear(), 1)
    }, d3.scale.sqrt = function () {
        return d3.scale.pow().exponent(.5)
    }, d3.scale.ordinal = function () {
        return ee([], {t: "range", a: [[]]})
    }, d3.scale.category10 = function () {
        return d3.scale.ordinal().range(La)
    }, d3.scale.category20 = function () {
        return d3.scale.ordinal().range(Fa)
    }, d3.scale.category20b = function () {
        return d3.scale.ordinal().range(Ha)
    }, d3.scale.category20c = function () {
        return d3.scale.ordinal().range(Ra)
    };
    var La = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], Fa = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"], Ha = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"], Ra = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function () {
        return re([], [])
    }, d3.scale.quantize = function () {
        return ie(0, 1, [0, 1])
    }, d3.scale.threshold = function () {
        return ue([.5], [0, 1])
    }, d3.scale.identity = function () {
        return ae([0, 1])
    }, d3.svg = {}, d3.svg.arc = function () {
        function t() {
            var t = n.apply(this, arguments), u = e.apply(this, arguments), a = r.apply(this, arguments) + Pa, o = i.apply(this, arguments) + Pa, c = (a > o && (c = a, a = o, o = c), o - a), l = Ru > c ? "0" : "1", s = Math.cos(a), f = Math.sin(a), h = Math.cos(o), d = Math.sin(o);
            return c >= ja ? t ? "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "M0," + t + "A" + t + "," + t + " 0 1,0 0," + -t + "A" + t + "," + t + " 0 1,0 0," + t + "Z" : "M0," + u + "A" + u + "," + u + " 0 1,1 0," + -u + "A" + u + "," + u + " 0 1,1 0," + u + "Z" : t ? "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * d + "L" + t * h + "," + t * d + "A" + t + "," + t + " 0 " + l + ",0 " + t * s + "," + t * f + "Z" : "M" + u * s + "," + u * f + "A" + u + "," + u + " 0 " + l + ",1 " + u * h + "," + u * d + "L0,0" + "Z"
        }

        var n = oe, e = ce, r = le, i = se;
        return t.innerRadius = function (e) {
            return arguments.length ? (n = c(e), t) : n
        }, t.outerRadius = function (n) {
            return arguments.length ? (e = c(n), t) : e
        }, t.startAngle = function (n) {
            return arguments.length ? (r = c(n), t) : r
        }, t.endAngle = function (n) {
            return arguments.length ? (i = c(n), t) : i
        }, t.centroid = function () {
            var t = (n.apply(this, arguments) + e.apply(this, arguments)) / 2, u = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Pa;
            return [Math.cos(u) * t, Math.sin(u) * t]
        }, t
    };
    var Pa = -Ru / 2, ja = 2 * Ru - 1e-6;
    d3.svg.line = function () {
        return fe(a)
    };
    var Oa = d3.map({
        linear: ge,
        "linear-closed": pe,
        "step-before": me,
        "step-after": ve,
        basis: we,
        "basis-open": Se,
        "basis-closed": ke,
        bundle: Ee,
        cardinal: be,
        "cardinal-open": ye,
        "cardinal-closed": Me,
        monotone: ze
    });
    Oa.forEach(function (t, n) {
        n.key = t, n.closed = /-closed$/.test(t)
    });
    var Ya = [0, 2 / 3, 1 / 3, 0], Ua = [0, 1 / 3, 2 / 3, 0], Ia = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function () {
        var t = fe(De);
        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
    }, me.reverse = ve, ve.reverse = me, d3.svg.area = function () {
        return Le(a)
    }, d3.svg.area.radial = function () {
        var t = Le(De);
        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
    }, d3.svg.chord = function () {
        function e(t, n) {
            var e = r(this, o, t, n), c = r(this, l, t, n);
            return "M" + e.p0 + u(e.r, e.p1, e.a1 - e.a0) + (i(e, c) ? a(e.r, e.p1, e.r, e.p0) : a(e.r, e.p1, c.r, c.p0) + u(c.r, c.p1, c.a1 - c.a0) + a(c.r, c.p1, e.r, e.p0)) + "Z"
        }

        function r(t, n, e, r) {
            var i = n.call(t, e, r), u = s.call(t, i, r), a = f.call(t, i, r) + Pa, o = h.call(t, i, r) + Pa;
            return {r: u, a0: a, a1: o, p0: [u * Math.cos(a), u * Math.sin(a)], p1: [u * Math.cos(o), u * Math.sin(o)]}
        }

        function i(t, n) {
            return t.a0 == n.a0 && t.a1 == n.a1
        }

        function u(t, n, e) {
            return "A" + t + "," + t + " 0 " + +(e > Ru) + ",1 " + n
        }

        function a(t, n, e, r) {
            return "Q 0,0 " + r
        }

        var o = n, l = t, s = Fe, f = le, h = se;
        return e.radius = function (t) {
            return arguments.length ? (s = c(t), e) : s
        }, e.source = function (t) {
            return arguments.length ? (o = c(t), e) : o
        }, e.target = function (t) {
            return arguments.length ? (l = c(t), e) : l
        }, e.startAngle = function (t) {
            return arguments.length ? (f = c(t), e) : f
        }, e.endAngle = function (t) {
            return arguments.length ? (h = c(t), e) : h
        }, e
    }, d3.svg.diagonal = function () {
        function e(t, n) {
            var e = r.call(this, t, n), a = i.call(this, t, n), o = (e.y + a.y) / 2, c = [e, {x: e.x, y: o}, {
                x: a.x,
                y: o
            }, a];
            return c = c.map(u), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }

        var r = n, i = t, u = He;
        return e.source = function (t) {
            return arguments.length ? (r = c(t), e) : r
        }, e.target = function (t) {
            return arguments.length ? (i = c(t), e) : i
        }, e.projection = function (t) {
            return arguments.length ? (u = t, e) : u
        }, e
    }, d3.svg.diagonal.radial = function () {
        var t = d3.svg.diagonal(), n = He, e = t.projection;
        return t.projection = function (t) {
            return arguments.length ? e(Re(n = t)) : n
        }, t
    }, d3.svg.symbol = function () {
        function t(t, r) {
            return (Va.get(n.call(this, t, r)) || Oe)(e.call(this, t, r))
        }

        var n = je, e = Pe;
        return t.type = function (e) {
            return arguments.length ? (n = c(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = c(n), t) : e
        }, t
    };
    var Va = d3.map({
        circle: Oe, cross: function (t) {
            var n = Math.sqrt(t / 5) / 2;
            return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
        }, diamond: function (t) {
            var n = Math.sqrt(t / (2 * Za)), e = n * Za;
            return "M0," + -n + "L" + e + ",0" + " 0," + n + " " + -e + ",0" + "Z"
        }, square: function (t) {
            var n = Math.sqrt(t) / 2;
            return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
        }, "triangle-down": function (t) {
            var n = Math.sqrt(t / Xa), e = n * Xa / 2;
            return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
        }, "triangle-up": function (t) {
            var n = Math.sqrt(t / Xa), e = n * Xa / 2;
            return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
        }
    });
    d3.svg.symbolTypes = Va.keys();
    var Xa = Math.sqrt(3), Za = Math.tan(30 * ju);
    d3.svg.axis = function () {
        function t(t) {
            t.each(function () {
                var t, f = d3.select(this), h = null == l ? e.ticks ? e.ticks.apply(e, c) : e.domain() : l, d = null == n ? e.tickFormat ? e.tickFormat.apply(e, c) : String : n, g = Ie(e, h, s), p = f.selectAll(".minor").data(g, String), m = p.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6), v = d3.transition(p.exit()).style("opacity", 1e-6).remove(), y = d3.transition(p).style("opacity", 1), M = f.selectAll("g").data(h, String), b = M.enter().insert("g", "path").style("opacity", 1e-6), x = d3.transition(M.exit()).style("opacity", 1e-6).remove(), _ = d3.transition(M).style("opacity", 1), w = On(e), S = f.selectAll(".domain").data([0]), k = d3.transition(S), E = e.copy(), A = this.__chart__ || E;
                this.__chart__ = E, S.enter().append("path").attr("class", "domain"), b.append("line").attr("class", "tick"), b.append("text");
                var N = b.select("line"), T = _.select("line"), q = M.select("text").text(d), C = b.select("text"), z = _.select("text");
                switch (r) {
                    case"bottom":
                        t = Ye, m.attr("y2", u), y.attr("x2", 0).attr("y2", u), N.attr("y2", i), C.attr("y", Math.max(i, 0) + o), T.attr("x2", 0).attr("y2", i), z.attr("x", 0).attr("y", Math.max(i, 0) + o), q.attr("dy", ".71em").style("text-anchor", "middle"), k.attr("d", "M" + w[0] + "," + a + "V0H" + w[1] + "V" + a);
                        break;
                    case"top":
                        t = Ye, m.attr("y2", -u), y.attr("x2", 0).attr("y2", -u), N.attr("y2", -i), C.attr("y", -(Math.max(i, 0) + o)), T.attr("x2", 0).attr("y2", -i), z.attr("x", 0).attr("y", -(Math.max(i, 0) + o)), q.attr("dy", "0em").style("text-anchor", "middle"), k.attr("d", "M" + w[0] + "," + -a + "V0H" + w[1] + "V" + -a);
                        break;
                    case"left":
                        t = Ue, m.attr("x2", -u), y.attr("x2", -u).attr("y2", 0), N.attr("x2", -i), C.attr("x", -(Math.max(i, 0) + o)), T.attr("x2", -i).attr("y2", 0), z.attr("x", -(Math.max(i, 0) + o)).attr("y", 0), q.attr("dy", ".32em").style("text-anchor", "end"), k.attr("d", "M" + -a + "," + w[0] + "H0V" + w[1] + "H" + -a);
                        break;
                    case"right":
                        t = Ue, m.attr("x2", u), y.attr("x2", u).attr("y2", 0), N.attr("x2", i), C.attr("x", Math.max(i, 0) + o), T.attr("x2", i).attr("y2", 0), z.attr("x", Math.max(i, 0) + o).attr("y", 0), q.attr("dy", ".32em").style("text-anchor", "start"), k.attr("d", "M" + a + "," + w[0] + "H0V" + w[1] + "H" + a)
                }
                if (e.ticks)b.call(t, A), _.call(t, E), x.call(t, E), m.call(t, A), y.call(t, E), v.call(t, E); else {
                    var D = E.rangeBand() / 2, L = function (t) {
                        return E(t) + D
                    };
                    b.call(t, L), _.call(t, L)
                }
            })
        }

        var n, e = d3.scale.linear(), r = "bottom", i = 6, u = 6, a = 6, o = 3, c = [10], l = null, s = 0;
        return t.scale = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.orient = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.ticks = function () {
            return arguments.length ? (c = arguments, t) : c
        }, t.tickValues = function (n) {
            return arguments.length ? (l = n, t) : l
        }, t.tickFormat = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.tickSize = function (n, e) {
            if (!arguments.length)return i;
            var r = arguments.length - 1;
            return i = +n, u = r > 1 ? +e : i, a = r > 0 ? +arguments[r] : i, t
        }, t.tickPadding = function (n) {
            return arguments.length ? (o = +n, t) : o
        }, t.tickSubdivide = function (n) {
            return arguments.length ? (s = +n, t) : s
        }, t
    }, d3.svg.brush = function () {
        function t(u) {
            u.each(function () {
                var u, a = d3.select(this), s = a.selectAll(".background").data([0]), f = a.selectAll(".extent").data([0]), h = a.selectAll(".resize").data(l, String);
                a.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i), s.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), f.enter().append("rect").attr("class", "extent").style("cursor", "move"), h.enter().append("g").attr("class", function (t) {
                    return "resize " + t
                }).style("cursor", function (t) {
                    return Ba[t]
                }).append("rect").attr("x", function (t) {
                    return /[ew]$/.test(t) ? -3 : null
                }).attr("y", function (t) {
                    return /^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", t.empty() ? "none" : null), h.exit().remove(), o && (u = On(o), s.attr("x", u[0]).attr("width", u[1] - u[0]), e(a)), c && (u = On(c), s.attr("y", u[0]).attr("height", u[1] - u[0]), r(a)), n(a)
            })
        }

        function n(t) {
            t.selectAll(".resize").attr("transform", function (t) {
                return "translate(" + s[+/e$/.test(t)][0] + "," + s[+/^s/.test(t)][1] + ")"
            })
        }

        function e(t) {
            t.select(".extent").attr("x", s[0][0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1][0] - s[0][0])
        }

        function r(t) {
            t.select(".extent").attr("y", s[0][1]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", s[1][1] - s[0][1])
        }

        function i() {
            function i() {
                var t = d3.event.changedTouches;
                return t ? d3.touches(v, t)[0] : d3.mouse(v)
            }

            function l() {
                32 == d3.event.keyCode && (S || (p = null, k[0] -= s[1][0], k[1] -= s[1][1], S = 2), R())
            }

            function f() {
                32 == d3.event.keyCode && 2 == S && (k[0] += s[1][0], k[1] += s[1][1], S = 0, R())
            }

            function h() {
                var t = i(), u = !1;
                m && (t[0] += m[0], t[1] += m[1]), S || (d3.event.altKey ? (p || (p = [(s[0][0] + s[1][0]) / 2, (s[0][1] + s[1][1]) / 2]), k[0] = s[+(t[0] < p[0])][0], k[1] = s[+(t[1] < p[1])][1]) : p = null), _ && d(t, o, 0) && (e(b), u = !0), w && d(t, c, 1) && (r(b), u = !0), u && (n(b), M({
                    type: "brush",
                    mode: S ? "move" : "resize"
                }))
            }

            function d(t, n, e) {
                var r, i, a = On(n), o = a[0], c = a[1], l = k[e], f = s[1][e] - s[0][e];
                return S && (o -= l, c -= f + l), r = Math.max(o, Math.min(c, t[e])), S ? i = (r += l) + f : (p && (l = Math.max(o, Math.min(c, 2 * p[e] - r))), r > l ? (i = r, r = l) : i = l), s[0][e] !== r || s[1][e] !== i ? (u = null, s[0][e] = r, s[1][e] = i, !0) : void 0
            }

            function g() {
                h(), b.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), d3.select("body").style("cursor", null), E.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), M({type: "brushend"}), R()
            }

            var p, m, v = this, y = d3.select(d3.event.target), M = a.of(v, arguments), b = d3.select(v), x = y.datum(), _ = !/^(n|s)$/.test(x) && o, w = !/^(e|w)$/.test(x) && c, S = y.classed("extent"), k = i(), E = d3.select(window).on("mousemove.brush", h).on("mouseup.brush", g).on("touchmove.brush", h).on("touchend.brush", g).on("keydown.brush", l).on("keyup.brush", f);
            if (S)k[0] = s[0][0] - k[0], k[1] = s[0][1] - k[1]; else if (x) {
                var A = +/w$/.test(x), N = +/^n/.test(x);
                m = [s[1 - A][0] - k[0], s[1 - N][1] - k[1]], k[0] = s[A][0], k[1] = s[N][1]
            } else d3.event.altKey && (p = k.slice());
            b.style("pointer-events", "none").selectAll(".resize").style("display", null), d3.select("body").style("cursor", y.style("cursor")), M({type: "brushstart"}), h(), R()
        }

        var u, a = j(t, "brushstart", "brush", "brushend"), o = null, c = null, l = $a[0], s = [[0, 0], [0, 0]];
        return t.x = function (n) {
            return arguments.length ? (o = n, l = $a[!o << 1 | !c], t) : o
        }, t.y = function (n) {
            return arguments.length ? (c = n, l = $a[!o << 1 | !c], t) : c
        }, t.extent = function (n) {
            var e, r, i, a, l;
            return arguments.length ? (u = [[0, 0], [0, 0]], o && (e = n[0], r = n[1], c && (e = e[0], r = r[0]), u[0][0] = e, u[1][0] = r, o.invert && (e = o(e), r = o(r)), e > r && (l = e, e = r, r = l), s[0][0] = 0 | e, s[1][0] = 0 | r), c && (i = n[0], a = n[1], o && (i = i[1], a = a[1]), u[0][1] = i, u[1][1] = a, c.invert && (i = c(i), a = c(a)), i > a && (l = i, i = a, a = l), s[0][1] = 0 | i, s[1][1] = 0 | a), t) : (n = u || s, o && (e = n[0][0], r = n[1][0], u || (e = s[0][0], r = s[1][0], o.invert && (e = o.invert(e), r = o.invert(r)), e > r && (l = e, e = r, r = l))), c && (i = n[0][1], a = n[1][1], u || (i = s[0][1], a = s[1][1], c.invert && (i = c.invert(i), a = c.invert(a)), i > a && (l = i, i = a, a = l))), o && c ? [[e, i], [r, a]] : o ? [e, r] : c && [i, a])
        }, t.clear = function () {
            return u = null, s[0][0] = s[0][1] = s[1][0] = s[1][1] = 0, t
        }, t.empty = function () {
            return o && s[0][0] === s[1][0] || c && s[0][1] === s[1][1]
        }, d3.rebind(t, a, "on")
    };
    var Ba = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, $a = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    d3.behavior = {}, d3.behavior.drag = function () {
        function t() {
            this.on("mousedown.drag", n).on("touchstart.drag", n)
        }

        function n() {
            function t() {
                var t = o.parentNode;
                return null != s ? d3.touches(t).filter(function (t) {
                    return t.identifier === s
                })[0] : d3.mouse(t)
            }

            function n() {
                if (!o.parentNode)return i();
                var n = t(), e = n[0] - f[0], r = n[1] - f[1];
                h |= e | r, f = n, R(), c({type: "drag", x: n[0] + a[0], y: n[1] + a[1], dx: e, dy: r})
            }

            function i() {
                c({type: "dragend"}), h && (R(), d3.event.target === l && d.on("click.drag", u, !0)), d.on(null != s ? "touchmove.drag-" + s : "mousemove.drag", null).on(null != s ? "touchend.drag-" + s : "mouseup.drag", null)
            }

            function u() {
                R(), d.on("click.drag", null)
            }

            var a, o = this, c = e.of(o, arguments), l = d3.event.target, s = d3.event.touches ? d3.event.changedTouches[0].identifier : null, f = t(), h = 0, d = d3.select(window).on(null != s ? "touchmove.drag-" + s : "mousemove.drag", n).on(null != s ? "touchend.drag-" + s : "mouseup.drag", i, !0);
            r ? (a = r.apply(o, arguments), a = [a.x - f[0], a.y - f[1]]) : a = [0, 0], null == s && R(), c({type: "dragstart"})
        }

        var e = j(t, "drag", "dragstart", "dragend"), r = null;
        return t.origin = function (n) {
            return arguments.length ? (r = n, t) : r
        }, d3.rebind(t, e, "on")
    }, d3.behavior.zoom = function () {
        function t() {
            this.on("mousedown.zoom", o).on("mousewheel.zoom", c).on("mousemove.zoom", l).on("DOMMouseScroll.zoom", c).on("dblclick.zoom", s).on("touchstart.zoom", f).on("touchmove.zoom", h).on("touchend.zoom", f)
        }

        function n(t) {
            return [(t[0] - b[0]) / x, (t[1] - b[1]) / x]
        }

        function e(t) {
            return [t[0] * x + b[0], t[1] * x + b[1]]
        }

        function r(t) {
            x = Math.max(_[0], Math.min(_[1], t))
        }

        function i(t, n) {
            n = e(n), b[0] += t[0] - n[0], b[1] += t[1] - n[1]
        }

        function u() {
            m && m.domain(p.range().map(function (t) {
                return (t - b[0]) / x
            }).map(p.invert)), y && y.domain(v.range().map(function (t) {
                return (t - b[1]) / x
            }).map(v.invert))
        }

        function a(t) {
            u(), d3.event.preventDefault(), t({type: "zoom", scale: x, translate: b})
        }

        function o() {
            function t() {
                l = 1, i(d3.mouse(u), f), a(o)
            }

            function e() {
                l && R(), s.on("mousemove.zoom", null).on("mouseup.zoom", null), l && d3.event.target === c && s.on("click.zoom", r, !0)
            }

            function r() {
                R(), s.on("click.zoom", null)
            }

            var u = this, o = w.of(u, arguments), c = d3.event.target, l = 0, s = d3.select(window).on("mousemove.zoom", t).on("mouseup.zoom", e), f = n(d3.mouse(u));
            window.focus(), R()
        }

        function c() {
            d || (d = n(d3.mouse(this))), r(Math.pow(2, .002 * Ve()) * x), i(d3.mouse(this), d), a(w.of(this, arguments))
        }

        function l() {
            d = null
        }

        function s() {
            var t = d3.mouse(this), e = n(t), u = Math.log(x) / Math.LN2;
            r(Math.pow(2, d3.event.shiftKey ? Math.ceil(u) - 1 : Math.floor(u) + 1)), i(t, e), a(w.of(this, arguments))
        }

        function f() {
            var t = d3.touches(this), e = Date.now();
            if (g = x, d = {}, t.forEach(function (t) {
                    d[t.identifier] = n(t)
                }), R(), 1 === t.length) {
                if (500 > e - M) {
                    var u = t[0], o = n(t[0]);
                    r(2 * x), i(u, o), a(w.of(this, arguments))
                }
                M = e
            }
        }

        function h() {
            var t = d3.touches(this), n = t[0], e = d[n.identifier];
            if (u = t[1]) {
                var u, o = d[u.identifier];
                n = [(n[0] + u[0]) / 2, (n[1] + u[1]) / 2], e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2], r(d3.event.scale * g)
            }
            i(n, e), M = null, a(w.of(this, arguments))
        }

        var d, g, p, m, v, y, M, b = [0, 0], x = 1, _ = Ga, w = j(t, "zoom");
        return t.translate = function (n) {
            return arguments.length ? (b = n.map(Number), u(), t) : b
        }, t.scale = function (n) {
            return arguments.length ? (x = +n, u(), t) : x
        }, t.scaleExtent = function (n) {
            return arguments.length ? (_ = null == n ? Ga : n.map(Number), t) : _
        }, t.x = function (n) {
            return arguments.length ? (m = n, p = n.copy(), b = [0, 0], x = 1, t) : m
        }, t.y = function (n) {
            return arguments.length ? (y = n, v = n.copy(), b = [0, 0], x = 1, t) : y
        }, d3.rebind(t, w, "on")
    };
    var Ja, Ga = [0, 1 / 0];
    d3.layout = {}, d3.layout.bundle = function () {
        return function (t) {
            for (var n = [], e = -1, r = t.length; r > ++e;)n.push(Xe(t[e]));
            return n
        }
    }, d3.layout.chord = function () {
        function t() {
            var t, l, f, h, d, g = {}, p = [], m = d3.range(u), v = [];
            for (e = [], r = [], t = 0, h = -1; u > ++h;) {
                for (l = 0, d = -1; u > ++d;)l += i[h][d];
                p.push(l), v.push(d3.range(u)), t += l
            }
            for (a && m.sort(function (t, n) {
                return a(p[t], p[n])
            }), o && v.forEach(function (t, n) {
                t.sort(function (t, e) {
                    return o(i[n][t], i[n][e])
                })
            }), t = (2 * Ru - s * u) / t, l = 0, h = -1; u > ++h;) {
                for (f = l, d = -1; u > ++d;) {
                    var y = m[h], M = v[y][d], b = i[y][M], x = l, _ = l += b * t;
                    g[y + "-" + M] = {index: y, subindex: M, startAngle: x, endAngle: _, value: b}
                }
                r[y] = {index: y, startAngle: f, endAngle: l, value: (l - f) / t}, l += s
            }
            for (h = -1; u > ++h;)for (d = h - 1; u > ++d;) {
                var w = g[h + "-" + d], S = g[d + "-" + h];
                (w.value || S.value) && e.push(w.value < S.value ? {source: S, target: w} : {source: w, target: S})
            }
            c && n()
        }

        function n() {
            e.sort(function (t, n) {
                return c((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2)
            })
        }

        var e, r, i, u, a, o, c, l = {}, s = 0;
        return l.matrix = function (t) {
            return arguments.length ? (u = (i = t) && i.length, e = r = null, l) : i
        }, l.padding = function (t) {
            return arguments.length ? (s = t, e = r = null, l) : s
        }, l.sortGroups = function (t) {
            return arguments.length ? (a = t, e = r = null, l) : a
        }, l.sortSubgroups = function (t) {
            return arguments.length ? (o = t, e = null, l) : o
        }, l.sortChords = function (t) {
            return arguments.length ? (c = t, e && n(), l) : c
        }, l.chords = function () {
            return e || t(), e
        }, l.groups = function () {
            return r || t(), r
        }, l
    }, d3.layout.force = function () {
        function t(t) {
            return function (n, e, r, i) {
                if (n.point !== t) {
                    var u = n.cx - t.x, a = n.cy - t.y, o = 1 / Math.sqrt(u * u + a * a);
                    if (v > (i - e) * o) {
                        var c = n.charge * o * o;
                        return t.px -= u * c, t.py -= a * c, !0
                    }
                    if (n.point && isFinite(o)) {
                        var c = n.pointCharge * o * o;
                        t.px -= u * c, t.py -= a * c
                    }
                }
                return !n.charge
            }
        }

        function n(t) {
            t.px = d3.event.x, t.py = d3.event.y, l.resume()
        }

        var e, r, i, u, o, l = {}, s = d3.dispatch("start", "tick", "end"), f = [1, 1], h = .9, d = Qe, g = tr, p = -30, m = .1, v = .8, y = [], M = [];
        return l.tick = function () {
            if (.005 > (r *= .99))return s.end({type: "end", alpha: r = 0}), !0;
            var n, e, a, c, l, d, g, v, b, x = y.length, _ = M.length;
            for (e = 0; _ > e; ++e)a = M[e], c = a.source, l = a.target, v = l.x - c.x, b = l.y - c.y, (d = v * v + b * b) && (d = r * u[e] * ((d = Math.sqrt(d)) - i[e]) / d, v *= d, b *= d, l.x -= v * (g = c.weight / (l.weight + c.weight)), l.y -= b * g, c.x += v * (g = 1 - g), c.y += b * g);
            if ((g = r * m) && (v = f[0] / 2, b = f[1] / 2, e = -1, g))for (; x > ++e;)a = y[e], a.x += (v - a.x) * g, a.y += (b - a.y) * g;
            if (p)for (We(n = d3.geom.quadtree(y), r, o), e = -1; x > ++e;)(a = y[e]).fixed || n.visit(t(a));
            for (e = -1; x > ++e;)a = y[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * h, a.y -= (a.py - (a.py = a.y)) * h);
            s.tick({type: "tick", alpha: r})
        }, l.nodes = function (t) {
            return arguments.length ? (y = t, l) : y
        }, l.links = function (t) {
            return arguments.length ? (M = t, l) : M
        }, l.size = function (t) {
            return arguments.length ? (f = t, l) : f
        }, l.linkDistance = function (t) {
            return arguments.length ? (d = c(t), l) : d
        }, l.distance = l.linkDistance, l.linkStrength = function (t) {
            return arguments.length ? (g = c(t), l) : g
        }, l.friction = function (t) {
            return arguments.length ? (h = t, l) : h
        }, l.charge = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : +t, l) : p
        }, l.gravity = function (t) {
            return arguments.length ? (m = t, l) : m
        }, l.theta = function (t) {
            return arguments.length ? (v = t, l) : v
        }, l.alpha = function (t) {
            return arguments.length ? (r ? r = t > 0 ? t : 0 : t > 0 && (s.start({
                type: "start",
                alpha: r = t
            }), d3.timer(l.tick)), l) : r
        }, l.start = function () {
            function t(t, r) {
                for (var i, u = n(e), a = -1, o = u.length; o > ++a;)if (!isNaN(i = u[a][t]))return i;
                return Math.random() * r
            }

            function n() {
                if (!a) {
                    for (a = [], r = 0; s > r; ++r)a[r] = [];
                    for (r = 0; h > r; ++r) {
                        var t = M[r];
                        a[t.source.index].push(t.target), a[t.target.index].push(t.source)
                    }
                }
                return a[e]
            }

            var e, r, a, c, s = y.length, h = M.length, m = f[0], v = f[1];
            for (e = 0; s > e; ++e)(c = y[e]).index = e, c.weight = 0;
            for (i = [], u = [], e = 0; h > e; ++e)c = M[e], "number" == typeof c.source && (c.source = y[c.source]), "number" == typeof c.target && (c.target = y[c.target]), i[e] = d.call(this, c, e), u[e] = g.call(this, c, e), ++c.source.weight, ++c.target.weight;
            for (e = 0; s > e; ++e)c = y[e], isNaN(c.x) && (c.x = t("x", m)), isNaN(c.y) && (c.y = t("y", v)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
            if (o = [], "function" == typeof p)for (e = 0; s > e; ++e)o[e] = +p.call(this, y[e], e); else for (e = 0; s > e; ++e)o[e] = p;
            return l.resume()
        }, l.resume = function () {
            return l.alpha(.1)
        }, l.stop = function () {
            return l.alpha(0)
        }, l.drag = function () {
            e || (e = d3.behavior.drag().origin(a).on("dragstart", $e).on("drag", n).on("dragend", Je)), this.on("mouseover.force", Ge).on("mouseout.force", Ke).call(e)
        }, d3.rebind(l, s, "on")
    }, d3.layout.partition = function () {
        function t(n, e, r, i) {
            var u = n.children;
            if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, u && (a = u.length)) {
                var a, o, c, l = -1;
                for (r = n.value ? r / n.value : 0; a > ++l;)t(o = u[l], e, c = o.value * r, i), e += c
            }
        }

        function n(t) {
            var e = t.children, r = 0;
            if (e && (i = e.length))for (var i, u = -1; i > ++u;)r = Math.max(r, n(e[u]));
            return 1 + r
        }

        function e(e, u) {
            var a = r.call(this, e, u);
            return t(a[0], 0, i[0], i[1] / n(a[0])), a
        }

        var r = d3.layout.hierarchy(), i = [1, 1];
        return e.size = function (t) {
            return arguments.length ? (i = t, e) : i
        }, hr(e, r)
    }, d3.layout.pie = function () {
        function t(u) {
            var a = u.map(function (e, r) {
                return +n.call(t, e, r)
            }), o = +("function" == typeof r ? r.apply(this, arguments) : r), c = (("function" == typeof i ? i.apply(this, arguments) : i) - r) / d3.sum(a), l = d3.range(u.length);
            null != e && l.sort(e === Ka ? function (t, n) {
                return a[n] - a[t]
            } : function (t, n) {
                return e(u[t], u[n])
            });
            var s = [];
            return l.forEach(function (t) {
                var n;
                s[t] = {data: u[t], value: n = a[t], startAngle: o, endAngle: o += n * c}
            }), s
        }

        var n = Number, e = Ka, r = 0, i = 2 * Ru;
        return t.value = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.sort = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.startAngle = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.endAngle = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Ka = {};
    d3.layout.stack = function () {
        function t(a, c) {
            var l = a.map(function (e, r) {
                return n.call(t, e, r)
            }), s = l.map(function (n) {
                return n.map(function (n, e) {
                    return [u.call(t, n, e), o.call(t, n, e)]
                })
            }), f = e.call(t, s, c);
            l = d3.permute(l, f), s = d3.permute(s, f);
            var h, d, g, p = r.call(t, s, c), m = l.length, v = l[0].length;
            for (d = 0; v > d; ++d)for (i.call(t, l[0][d], g = p[d], s[0][d][1]), h = 1; m > h; ++h)i.call(t, l[h][d], g += s[h - 1][d][1], s[h][d][1]);
            return a
        }

        var n = a, e = ir, r = ur, i = rr, u = nr, o = er;
        return t.values = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.order = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Wa.get(n) || ir, t) : e
        }, t.offset = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Qa.get(n) || ur, t) : r
        }, t.x = function (n) {
            return arguments.length ? (u = n, t) : u
        }, t.y = function (n) {
            return arguments.length ? (o = n, t) : o
        }, t.out = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    var Wa = d3.map({
        "inside-out": function (t) {
            var n, e, r = t.length, i = t.map(ar), u = t.map(or), a = d3.range(r).sort(function (t, n) {
                return i[t] - i[n]
            }), o = 0, c = 0, l = [], s = [];
            for (n = 0; r > n; ++n)e = a[n], c > o ? (o += u[e], l.push(e)) : (c += u[e], s.push(e));
            return s.reverse().concat(l)
        }, reverse: function (t) {
            return d3.range(t.length).reverse()
        }, "default": ir
    }), Qa = d3.map({
        silhouette: function (t) {
            var n, e, r, i = t.length, u = t[0].length, a = [], o = 0, c = [];
            for (e = 0; u > e; ++e) {
                for (n = 0, r = 0; i > n; n++)r += t[n][e][1];
                r > o && (o = r), a.push(r)
            }
            for (e = 0; u > e; ++e)c[e] = (o - a[e]) / 2;
            return c
        }, wiggle: function (t) {
            var n, e, r, i, u, a, o, c, l, s = t.length, f = t[0], h = f.length, d = [];
            for (d[0] = c = l = 0, e = 1; h > e; ++e) {
                for (n = 0, i = 0; s > n; ++n)i += t[n][e][1];
                for (n = 0, u = 0, o = f[e][0] - f[e - 1][0]; s > n; ++n) {
                    for (r = 0, a = (t[n][e][1] - t[n][e - 1][1]) / (2 * o); n > r; ++r)a += (t[r][e][1] - t[r][e - 1][1]) / o;
                    u += a * t[n][e][1]
                }
                d[e] = c -= i ? u / i * o : 0, l > c && (l = c)
            }
            for (e = 0; h > e; ++e)d[e] -= l;
            return d
        }, expand: function (t) {
            var n, e, r, i = t.length, u = t[0].length, a = 1 / i, o = [];
            for (e = 0; u > e; ++e) {
                for (n = 0, r = 0; i > n; n++)r += t[n][e][1];
                if (r)for (n = 0; i > n; n++)t[n][e][1] /= r; else for (n = 0; i > n; n++)t[n][e][1] = a
            }
            for (e = 0; u > e; ++e)o[e] = 0;
            return o
        }, zero: ur
    });
    d3.layout.histogram = function () {
        function t(t, u) {
            for (var a, o, c = [], l = t.map(e, this), s = r.call(this, l, u), f = i.call(this, s, l, u), u = -1, h = l.length, d = f.length - 1, g = n ? 1 : 1 / h; d > ++u;)a = c[u] = [], a.dx = f[u + 1] - (a.x = f[u]), a.y = 0;
            if (d > 0)for (u = -1; h > ++u;)o = l[u], o >= s[0] && s[1] >= o && (a = c[d3.bisect(f, o, 1, d) - 1], a.y += g, a.push(t[u]));
            return c
        }

        var n = !0, e = Number, r = fr, i = lr;
        return t.value = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.range = function (n) {
            return arguments.length ? (r = c(n), t) : r
        }, t.bins = function (n) {
            return arguments.length ? (i = "number" == typeof n ? function (t) {
                return sr(t, n)
            } : c(n), t) : i
        }, t.frequency = function (e) {
            return arguments.length ? (n = !!e, t) : n
        }, t
    }, d3.layout.hierarchy = function () {
        function t(n, a, o) {
            var c = i.call(e, n, a);
            if (n.depth = a, o.push(n), c && (l = c.length)) {
                for (var l, s, f = -1, h = n.children = [], d = 0, g = a + 1; l > ++f;)s = t(c[f], g, o), s.parent = n, h.push(s), d += s.value;
                r && h.sort(r), u && (n.value = d)
            } else u && (n.value = +u.call(e, n, a) || 0);
            return n
        }

        function n(t, r) {
            var i = t.children, a = 0;
            if (i && (o = i.length))for (var o, c = -1, l = r + 1; o > ++c;)a += n(i[c], l); else u && (a = +u.call(e, t, r) || 0);
            return u && (t.value = a), a
        }

        function e(n) {
            var e = [];
            return t(n, 0, e), e
        }

        var r = pr, i = dr, u = gr;
        return e.sort = function (t) {
            return arguments.length ? (r = t, e) : r
        }, e.children = function (t) {
            return arguments.length ? (i = t, e) : i
        }, e.value = function (t) {
            return arguments.length ? (u = t, e) : u
        }, e.revalue = function (t) {
            return n(t, 0), t
        }, e
    }, d3.layout.pack = function () {
        function t(t, i) {
            var u = n.call(this, t, i), a = u[0];
            a.x = 0, a.y = 0, Rr(a, function (t) {
                t.r = Math.sqrt(t.value)
            }), Rr(a, xr);
            var o = r[0], c = r[1], l = Math.max(2 * a.r / o, 2 * a.r / c);
            if (e > 0) {
                var s = e * l / 2;
                Rr(a, function (t) {
                    t.r += s
                }), Rr(a, xr), Rr(a, function (t) {
                    t.r -= s
                }), l = Math.max(2 * a.r / o, 2 * a.r / c)
            }
            return Sr(a, o / 2, c / 2, 1 / l), u
        }

        var n = d3.layout.hierarchy().sort(vr), e = 0, r = [1, 1];
        return t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.padding = function (n) {
            return arguments.length ? (e = +n, t) : e
        }, hr(t, n)
    }, d3.layout.cluster = function () {
        function t(t, i) {
            var u, a = n.call(this, t, i), o = a[0], c = 0;
            Rr(o, function (t) {
                var n = t.children;
                n && n.length ? (t.x = Ar(n), t.y = Er(n)) : (t.x = u ? c += e(t, u) : 0, t.y = 0, u = t)
            });
            var l = Nr(o), s = Tr(o), f = l.x - e(l, s) / 2, h = s.x + e(s, l) / 2;
            return Rr(o, function (t) {
                t.x = (t.x - f) / (h - f) * r[0], t.y = (1 - (o.y ? t.y / o.y : 1)) * r[1]
            }), a
        }

        var n = d3.layout.hierarchy().sort(null).value(null), e = qr, r = [1, 1];
        return t.separation = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, hr(t, n)
    }, d3.layout.tree = function () {
        function t(t, i) {
            function u(t, n) {
                var r = t.children, i = t._tree;
                if (r && (a = r.length)) {
                    for (var a, c, l, s = r[0], f = s, h = -1; a > ++h;)l = r[h], u(l, c), f = o(l, c, f), c = l;
                    Pr(t);
                    var d = .5 * (s._tree.prelim + l._tree.prelim);
                    n ? (i.prelim = n._tree.prelim + e(t, n), i.mod = i.prelim - d) : i.prelim = d
                } else n && (i.prelim = n._tree.prelim + e(t, n))
            }

            function a(t, n) {
                t.x = t._tree.prelim + n;
                var e = t.children;
                if (e && (r = e.length)) {
                    var r, i = -1;
                    for (n += t._tree.mod; r > ++i;)a(e[i], n)
                }
            }

            function o(t, n, r) {
                if (n) {
                    for (var i, u = t, a = t, o = n, c = t.parent.children[0], l = u._tree.mod, s = a._tree.mod, f = o._tree.mod, h = c._tree.mod; o = zr(o), u = Cr(u), o && u;)c = Cr(c), a = zr(a), a._tree.ancestor = t, i = o._tree.prelim + f - u._tree.prelim - l + e(o, u), i > 0 && (jr(Or(o, t, r), t, i), l += i, s += i), f += o._tree.mod, l += u._tree.mod, h += c._tree.mod, s += a._tree.mod;
                    o && !zr(a) && (a._tree.thread = o, a._tree.mod += f - s), u && !Cr(c) && (c._tree.thread = u, c._tree.mod += l - h, r = t)
                }
                return r
            }

            var c = n.call(this, t, i), l = c[0];
            Rr(l, function (t, n) {
                t._tree = {ancestor: t, prelim: 0, mod: 0, change: 0, shift: 0, number: n ? n._tree.number + 1 : 0}
            }), u(l), a(l, -l._tree.prelim);
            var s = Dr(l, Fr), f = Dr(l, Lr), h = Dr(l, Hr), d = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2, p = h.depth || 1;
            return Rr(l, function (t) {
                t.x = (t.x - d) / (g - d) * r[0], t.y = t.depth / p * r[1], delete t._tree
            }), c
        }

        var n = d3.layout.hierarchy().sort(null).value(null), e = qr, r = [1, 1];
        return t.separation = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.size = function (n) {
            return arguments.length ? (r = n, t) : r
        }, hr(t, n)
    }, d3.layout.treemap = function () {
        function t(t, n) {
            for (var e, r, i = -1, u = t.length; u > ++i;)r = (e = t[i]).value * (0 > n ? 0 : n), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function n(e) {
            var u = e.children;
            if (u && u.length) {
                var a, o, c, l = f(e), s = [], h = u.slice(), g = 1 / 0, p = "slice" === d ? l.dx : "dice" === d ? l.dy : "slice-dice" === d ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (t(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0;)s.push(a = h[c - 1]), s.area += a.area, "squarify" !== d || g >= (o = r(s, p)) ? (h.pop(), g = o) : (s.area -= s.pop().area, i(s, p, l, !1), p = Math.min(l.dx, l.dy), s.length = s.area = 0, g = 1 / 0);
                s.length && (i(s, p, l, !0), s.length = s.area = 0), u.forEach(n)
            }
        }

        function e(n) {
            var r = n.children;
            if (r && r.length) {
                var u, a = f(n), o = r.slice(), c = [];
                for (t(o, a.dx * a.dy / n.value), c.area = 0; u = o.pop();)c.push(u), c.area += u.area, null != u.z && (i(c, u.z ? a.dx : a.dy, a, !o.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(t, n) {
            for (var e, r = t.area, i = 0, u = 1 / 0, a = -1, o = t.length; o > ++a;)(e = t[a].area) && (u > e && (u = e), e > i && (i = e));
            return r *= r, n *= n, r ? Math.max(n * i * g / r, r / (n * u * g)) : 1 / 0
        }

        function i(t, n, e, r) {
            var i, u = -1, a = t.length, o = e.x, l = e.y, s = n ? c(t.area / n) : 0;
            if (n == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); a > ++u;)i = t[u], i.x = o, i.y = l, i.dy = s, o += i.dx = Math.min(e.x + e.dx - o, s ? c(i.area / s) : 0);
                i.z = !0, i.dx += e.x + e.dx - o, e.y += s, e.dy -= s
            } else {
                for ((r || s > e.dx) && (s = e.dx); a > ++u;)i = t[u], i.x = o, i.y = l, i.dx = s, l += i.dy = Math.min(e.y + e.dy - l, s ? c(i.area / s) : 0);
                i.z = !1, i.dy += e.y + e.dy - l, e.x += s, e.dx -= s
            }
        }

        function u(r) {
            var i = a || o(r), u = i[0];
            return u.x = 0, u.y = 0, u.dx = l[0], u.dy = l[1], a && o.revalue(u), t([u], u.dx * u.dy / u.value), (a ? e : n)(u), h && (a = i), i
        }

        var a, o = d3.layout.hierarchy(), c = Math.round, l = [1, 1], s = null, f = Yr, h = !1, d = "squarify", g = .5 * (1 + Math.sqrt(5));
        return u.size = function (t) {
            return arguments.length ? (l = t, u) : l
        }, u.padding = function (t) {
            function n(n) {
                var e = t.call(u, n, n.depth);
                return null == e ? Yr(n) : Ur(n, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(n) {
                return Ur(n, t)
            }

            if (!arguments.length)return s;
            var r;
            return f = null == (s = t) ? Yr : "function" == (r = typeof t) ? n : "number" === r ? (t = [t, t, t, t], e) : e, u
        }, u.round = function (t) {
            return arguments.length ? (c = t ? Math.round : Number, u) : c != Number
        }, u.sticky = function (t) {
            return arguments.length ? (h = t, a = null, u) : h
        }, u.ratio = function (t) {
            return arguments.length ? (g = t, u) : g
        }, u.mode = function (t) {
            return arguments.length ? (d = t + "", u) : d
        }, hr(u, o)
    }, d3.csv = Ir(",", "text/csv"), d3.tsv = Ir("	", "text/tab-separated-values"), d3.geo = {}, d3.geo.stream = function (t, n) {
        to.hasOwnProperty(t.type) ? to[t.type](t, n) : Vr(t, n)
    };
    var to = {
        Feature: function (t, n) {
            Vr(t.geometry, n)
        }, FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; i > ++r;)Vr(e[r].geometry, n)
        }
    }, no = {
        Sphere: function (t, n) {
            n.sphere()
        }, Point: function (t, n) {
            var e = t.coordinates;
            n.point(e[0], e[1])
        }, MultiPoint: function (t, n) {
            for (var e, r = t.coordinates, i = -1, u = r.length; u > ++i;)e = r[i], n.point(e[0], e[1])
        }, LineString: function (t, n) {
            Xr(t.coordinates, n, 0)
        }, MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; i > ++r;)Xr(e[r], n, 0)
        }, Polygon: function (t, n) {
            Zr(t.coordinates, n)
        }, MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; i > ++r;)Zr(e[r], n)
        }, GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; i > ++r;)Vr(e[r], n)
        }
    };
    d3.geo.albersUsa = function () {
        function t(t) {
            return n(t)(t)
        }

        function n(t) {
            var n = t[0], a = t[1];
            return a > 50 ? r : -140 > n ? i : 21 > a ? u : e
        }

        var e = d3.geo.albers(), r = d3.geo.albers().rotate([160, 0]).center([0, 60]).parallels([55, 65]), i = d3.geo.albers().rotate([160, 0]).center([0, 20]).parallels([8, 18]), u = d3.geo.albers().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
        return t.scale = function (n) {
            return arguments.length ? (e.scale(n), r.scale(.6 * n), i.scale(n), u.scale(1.5 * n), t.translate(e.translate())) : e.scale()
        }, t.translate = function (n) {
            if (!arguments.length)return e.translate();
            var a = e.scale(), o = n[0], c = n[1];
            return e.translate(n), r.translate([o - .4 * a, c + .17 * a]), i.translate([o - .19 * a, c + .2 * a]), u.translate([o + .58 * a, c + .43 * a]), t
        }, t.scale(e.scale())
    }, (d3.geo.albers = function () {
        var t = 29.5 * ju, n = 45.5 * ju, e = Pi(ei), r = e(t, n);
        return r.parallels = function (r) {
            return arguments.length ? e(t = r[0] * ju, n = r[1] * ju) : [t * Ou, n * Ou]
        }, r.rotate([98, 0]).center([0, 38]).scale(1e3)
    }).raw = ei;
    var eo = Vi(function (t) {
        return Math.sqrt(2 / (1 + t))
    }, function (t) {
        return 2 * Math.asin(t / 2)
    });
    (d3.geo.azimuthalEqualArea = function () {
        return Ri(eo)
    }).raw = eo;
    var ro = Vi(function (t) {
        var n = Math.acos(t);
        return n && n / Math.sin(n)
    }, a);
    (d3.geo.azimuthalEquidistant = function () {
        return Ri(ro)
    }).raw = ro, d3.geo.bounds = ri(a), d3.geo.centroid = function (t) {
        io = uo = ao = oo = co = 0, d3.geo.stream(t, lo);
        var n;
        return uo && Math.abs(n = Math.sqrt(ao * ao + oo * oo + co * co)) > Pu ? [Math.atan2(oo, ao) * Ou, Math.asin(Math.max(-1, Math.min(1, co / n))) * Ou] : void 0
    };
    var io, uo, ao, oo, co, lo = {
        sphere: function () {
            2 > io && (io = 2, uo = ao = oo = co = 0)
        }, point: ii, lineStart: ai, lineEnd: oi, polygonStart: function () {
            2 > io && (io = 2, uo = ao = oo = co = 0), lo.lineStart = ui
        }, polygonEnd: function () {
            lo.lineStart = ai
        }
    };
    d3.geo.circle = function () {
        function t() {
            var t = "function" == typeof r ? r.apply(this, arguments) : r, n = Oi(-t[0] * ju, -t[1] * ju, 0).invert, i = [];
            return e(null, null, 1, {
                point: function (t, e) {
                    i.push(t = n(t, e)), t[0] *= Ou, t[1] *= Ou
                }
            }), {type: "Polygon", coordinates: [i]}
        }

        var n, e, r = [0, 0], i = 6;
        return t.origin = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.angle = function (r) {
            return arguments.length ? (e = ci((n = +r) * ju, i * ju), t) : n
        }, t.precision = function (r) {
            return arguments.length ? (e = ci(n * ju, (i = +r) * ju), t) : i
        }, t.angle(90)
    };
    var so = si(o, vi, Mi);
    (d3.geo.equirectangular = function () {
        return Ri(_i).scale(250 / Ru)
    }).raw = _i.invert = _i;
    var fo = Vi(function (t) {
        return 1 / t
    }, Math.atan);
    (d3.geo.gnomonic = function () {
        return Ri(fo)
    }).raw = fo, d3.geo.graticule = function () {
        function t() {
            return {type: "MultiLineString", coordinates: n()}
        }

        function n() {
            return d3.range(Math.ceil(r / c) * c, e, c).map(a).concat(d3.range(Math.ceil(u / l) * l, i, l).map(o))
        }

        var e, r, i, u, a, o, c = 22.5, l = c, s = 2.5;
        return t.lines = function () {
            return n().map(function (t) {
                return {type: "LineString", coordinates: t}
            })
        }, t.outline = function () {
            return {
                type: "Polygon",
                coordinates: [a(r).concat(o(i).slice(1), a(e).reverse().slice(1), o(u).reverse().slice(1))]
            }
        }, t.extent = function (n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], i = +n[1][1], r > e && (n = r, r = e, e = n), u > i && (n = u, u = i, i = n), t.precision(s)) : [[r, u], [e, i]]
        }, t.step = function (n) {
            return arguments.length ? (c = +n[0], l = +n[1], t) : [c, l]
        }, t.precision = function (n) {
            return arguments.length ? (s = +n, a = wi(u, i, s), o = Si(r, e, s), t) : s
        }, t.extent([[-180 + Pu, -90 + Pu], [180 - Pu, 90 - Pu]])
    }, d3.geo.interpolate = function (t, n) {
        return ki(t[0] * ju, t[1] * ju, n[0] * ju, n[1] * ju)
    }, d3.geo.greatArc = function () {
        function e() {
            for (var t = r || a.apply(this, arguments), n = i || o.apply(this, arguments), e = u || d3.geo.interpolate(t, n), i = 0, l = c / e.distance, s = [t]; 1 > (i += l);)s.push(e(i));
            return s.push(n), {type: "LineString", coordinates: s}
        }

        var r, i, u, a = n, o = t, c = 6 * ju;
        return e.distance = function () {
            return (u || d3.geo.interpolate(r || a.apply(this, arguments), i || o.apply(this, arguments))).distance
        }, e.source = function (t) {
            return arguments.length ? (a = t, r = "function" == typeof t ? null : t, u = r && i ? d3.geo.interpolate(r, i) : null, e) : a
        }, e.target = function (t) {
            return arguments.length ? (o = t, i = "function" == typeof t ? null : t, u = r && i ? d3.geo.interpolate(r, i) : null, e) : o
        }, e.precision = function (t) {
            return arguments.length ? (c = t * ju, e) : c / ju
        }, e
    }, Ei.invert = function (t, n) {
        return [2 * Ru * t, 2 * Math.atan(Math.exp(2 * Ru * n)) - Ru / 2]
    }, (d3.geo.mercator = function () {
        return Ri(Ei).scale(500)
    }).raw = Ei;
    var ho = Vi(function () {
        return 1
    }, Math.asin);
    (d3.geo.orthographic = function () {
        return Ri(ho)
    }).raw = ho, d3.geo.path = function () {
        function t(t) {
            return t && d3.geo.stream(t, r(i.pointRadius("function" == typeof u ? +u.apply(this, arguments) : u))), i.result()
        }

        var n, e, r, i, u = 4.5;
        return t.area = function (t) {
            return go = 0, d3.geo.stream(t, r(mo)), go
        }, t.centroid = function (t) {
            return io = ao = oo = co = 0, d3.geo.stream(t, r(vo)), co ? [ao / co, oo / co] : void 0
        }, t.bounds = function (t) {
            return ri(r)(t)
        }, t.projection = function (e) {
            return arguments.length ? (r = (n = e) ? e.stream || Ni(e) : a, t) : n
        }, t.context = function (n) {
            return arguments.length ? (i = null == (e = n) ? new Ti : new qi(n), t) : e
        }, t.pointRadius = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : +n, t) : u
        }, t.projection(d3.geo.albersUsa()).context(null)
    };
    var go, po, mo = {
        point: Pn, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
            po = 0, mo.lineStart = Ci
        }, polygonEnd: function () {
            mo.lineStart = mo.lineEnd = mo.point = Pn, go += Math.abs(po / 2)
        }
    }, vo = {
        point: zi, lineStart: Di, lineEnd: Li, polygonStart: function () {
            vo.lineStart = Fi
        }, polygonEnd: function () {
            vo.point = zi, vo.lineStart = Di, vo.lineEnd = Li
        }
    };
    d3.geo.area = function (t) {
        return yo = 0, d3.geo.stream(t, bo), yo
    };
    var yo, Mo, bo = {
        sphere: function () {
            yo += 4 * Ru
        }, point: Pn, lineStart: Pn, lineEnd: Pn, polygonStart: function () {
            Mo = 0, bo.lineStart = Hi
        }, polygonEnd: function () {
            yo += 0 > Mo ? 4 * Ru + Mo : Mo, bo.lineStart = bo.lineEnd = bo.point = Pn
        }
    };
    d3.geo.projection = Ri, d3.geo.projectionMutator = Pi;
    var xo = Vi(function (t) {
        return 1 / (1 + t)
    }, function (t) {
        return 2 * Math.atan(t)
    });
    (d3.geo.stereographic = function () {
        return Ri(xo)
    }).raw = xo, d3.geom = {}, d3.geom.hull = function (t) {
        if (3 > t.length)return [];
        var n, e, r, i, u, a, o, c, l, s, f = t.length, h = f - 1, d = [], g = [], p = 0;
        for (n = 1; f > n; ++n)t[n][1] < t[p][1] ? p = n : t[n][1] == t[p][1] && (p = t[n][0] < t[p][0] ? n : p);
        for (n = 0; f > n; ++n)n !== p && (i = t[n][1] - t[p][1], r = t[n][0] - t[p][0], d.push({
            angle: Math.atan2(i, r),
            index: n
        }));
        for (d.sort(function (t, n) {
            return t.angle - n.angle
        }), l = d[0].angle, c = d[0].index, o = 0, n = 1; h > n; ++n)e = d[n].index, l == d[n].angle ? (r = t[c][0] - t[p][0], i = t[c][1] - t[p][1], u = t[e][0] - t[p][0], a = t[e][1] - t[p][1], r * r + i * i >= u * u + a * a ? d[n].index = -1 : (d[o].index = -1, l = d[n].angle, o = n, c = e)) : (l = d[n].angle, o = n, c = e);
        for (g.push(p), n = 0, e = 0; 2 > n; ++e)-1 !== d[e].index && (g.push(d[e].index), n++);
        for (s = g.length; h > e; ++e)if (-1 !== d[e].index) {
            for (; !Xi(g[s - 2], g[s - 1], d[e].index, t);)--s;
            g[s++] = d[e].index
        }
        var m = [];
        for (n = 0; s > n; ++n)m.push(t[g[n]]);
        return m
    }, d3.geom.polygon = function (t) {
        return t.area = function () {
            for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; e > ++n;)r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
            return .5 * r
        }, t.centroid = function (n) {
            var e, r, i = -1, u = t.length, a = 0, o = 0, c = t[u - 1];
            for (arguments.length || (n = -1 / (6 * t.area())); u > ++i;)e = c, c = t[i], r = e[0] * c[1] - c[0] * e[1], a += (e[0] + c[0]) * r, o += (e[1] + c[1]) * r;
            return [a * n, o * n]
        }, t.clip = function (n) {
            for (var e, r, i, u, a, o, c = -1, l = t.length, s = t[l - 1]; l > ++c;) {
                for (e = n.slice(), n.length = 0, u = t[c], a = e[(i = e.length) - 1], r = -1; i > ++r;)o = e[r], Zi(o, s, u) ? (Zi(a, s, u) || n.push(Bi(a, o, s, u)), n.push(o)) : Zi(a, s, u) && n.push(Bi(a, o, s, u)), a = o;
                s = u
            }
            return n
        }, t
    }, d3.geom.voronoi = function (t) {
        var n = t.map(function () {
            return []
        }), e = 1e6;
        return $i(t, function (t) {
            var r, i, u, a, o, c;
            1 === t.a && t.b >= 0 ? (r = t.ep.r, i = t.ep.l) : (r = t.ep.l, i = t.ep.r), 1 === t.a ? (o = r ? r.y : -e, u = t.c - t.b * o, c = i ? i.y : e, a = t.c - t.b * c) : (u = r ? r.x : -e, o = t.c - t.a * u, a = i ? i.x : e, c = t.c - t.a * a);
            var l = [u, o], s = [a, c];
            n[t.region.l.index].push(l, s), n[t.region.r.index].push(l, s)
        }), n = n.map(function (n, e) {
            var r = t[e][0], i = t[e][1], u = n.map(function (t) {
                return Math.atan2(t[0] - r, t[1] - i)
            });
            return d3.range(n.length).sort(function (t, n) {
                return u[t] - u[n]
            }).filter(function (t, n, e) {
                return !n || u[t] - u[e[n - 1]] > Pu
            }).map(function (t) {
                return n[t]
            })
        }), n.forEach(function (n, r) {
            var i = n.length;
            if (!i)return n.push([-e, -e], [-e, e], [e, e], [e, -e]);
            if (!(i > 2)) {
                var u = t[r], a = n[0], o = n[1], c = u[0], l = u[1], s = a[0], f = a[1], h = o[0], d = o[1], g = Math.abs(h - s), p = d - f;
                if (Pu > Math.abs(p)) {
                    var m = f > l ? -e : e;
                    n.push([-e, m], [e, m])
                } else if (Pu > g) {
                    var v = s > c ? -e : e;
                    n.push([v, -e], [v, e])
                } else {
                    var m = (s - c) * (d - f) > (h - s) * (f - l) ? e : -e, y = Math.abs(p) - g;
                    Pu > Math.abs(y) ? n.push([0 > p ? m : -m, m]) : (y > 0 && (m *= -1), n.push([-e, m], [e, m]))
                }
            }
        }), n
    };
    var _o = {l: "r", r: "l"};
    d3.geom.delaunay = function (t) {
        var n = t.map(function () {
            return []
        }), e = [];
        return $i(t, function (e) {
            n[e.region.l.index].push(t[e.region.r.index])
        }), n.forEach(function (n, r) {
            var i = t[r], u = i[0], a = i[1];
            n.forEach(function (t) {
                t.angle = Math.atan2(t[0] - u, t[1] - a)
            }), n.sort(function (t, n) {
                return t.angle - n.angle
            });
            for (var o = 0, c = n.length - 1; c > o; o++)e.push([i, n[o], n[o + 1]])
        }), e
    }, d3.geom.quadtree = function (t, n, e, r, i) {
        function u(t, n, e, r, i, u) {
            if (!isNaN(n.x) && !isNaN(n.y))if (t.leaf) {
                var o = t.point;
                o ? .01 > Math.abs(o.x - n.x) + Math.abs(o.y - n.y) ? a(t, n, e, r, i, u) : (t.point = null, a(t, o, e, r, i, u), a(t, n, e, r, i, u)) : t.point = n
            } else a(t, n, e, r, i, u)
        }

        function a(t, n, e, r, i, a) {
            var o = .5 * (e + i), c = .5 * (r + a), l = n.x >= o, s = n.y >= c, f = (s << 1) + l;
            t.leaf = !1, t = t.nodes[f] || (t.nodes[f] = Ji()), l ? e = o : i = o, s ? r = c : a = c, u(t, n, e, r, i, a)
        }

        var o, c = -1, l = t.length;
        if (5 > arguments.length)if (3 === arguments.length)i = e, r = n, e = n = 0; else for (n = e = 1 / 0, r = i = -1 / 0; l > ++c;)o = t[c], n > o.x && (n = o.x), e > o.y && (e = o.y), o.x > r && (r = o.x), o.y > i && (i = o.y);
        var s = r - n, f = i - e;
        s > f ? i = e + s : r = n + f;
        var h = Ji();
        return h.add = function (t) {
            u(h, t, n, e, r, i)
        }, h.visit = function (t) {
            Gi(t, h, n, e, r, i)
        }, t.forEach(h.add), h
    }, d3.time = {};
    var wo = Date, So = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Ki.prototype = {
        getDate: function () {
            return this._.getUTCDate()
        }, getDay: function () {
            return this._.getUTCDay()
        }, getFullYear: function () {
            return this._.getUTCFullYear()
        }, getHours: function () {
            return this._.getUTCHours()
        }, getMilliseconds: function () {
            return this._.getUTCMilliseconds()
        }, getMinutes: function () {
            return this._.getUTCMinutes()
        }, getMonth: function () {
            return this._.getUTCMonth()
        }, getSeconds: function () {
            return this._.getUTCSeconds()
        }, getTime: function () {
            return this._.getTime()
        }, getTimezoneOffset: function () {
            return 0
        }, valueOf: function () {
            return this._.valueOf()
        }, setDate: function () {
            ko.setUTCDate.apply(this._, arguments)
        }, setDay: function () {
            ko.setUTCDay.apply(this._, arguments)
        }, setFullYear: function () {
            ko.setUTCFullYear.apply(this._, arguments)
        }, setHours: function () {
            ko.setUTCHours.apply(this._, arguments)
        }, setMilliseconds: function () {
            ko.setUTCMilliseconds.apply(this._, arguments)
        }, setMinutes: function () {
            ko.setUTCMinutes.apply(this._, arguments)
        }, setMonth: function () {
            ko.setUTCMonth.apply(this._, arguments)
        }, setSeconds: function () {
            ko.setUTCSeconds.apply(this._, arguments)
        }, setTime: function () {
            ko.setTime.apply(this._, arguments)
        }
    };
    var ko = Date.prototype, Eo = "%a %b %e %X %Y", Ao = "%m/%d/%Y", No = "%H:%M:%S", To = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], qo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Co = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], zo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    d3.time.format = function (t) {
        function n(n) {
            for (var r, i, u, a = [], o = -1, c = 0; e > ++o;)37 === t.charCodeAt(o) && (a.push(t.substring(c, o)), null != (i = jo[r = t.charAt(++o)]) && (r = t.charAt(++o)), (u = Oo[r]) && (r = u(n, null == i ? "e" === r ? " " : "0" : i)), a.push(r), c = o + 1);
            return a.push(t.substring(c, o)), a.join("")
        }

        var e = t.length;
        return n.parse = function (n) {
            var e = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}, r = Wi(e, t, n, 0);
            if (r != n.length)return null;
            "p" in e && (e.H = e.H % 12 + 12 * e.p);
            var i = new wo;
            return i.setFullYear(e.y, e.m, e.d), i.setHours(e.H, e.M, e.S, e.L), i
        }, n.toString = function () {
            return t
        }, n
    };
    var Do = Qi(To), Lo = Qi(qo), Fo = Qi(Co), Ho = tu(Co), Ro = Qi(zo), Po = tu(zo), jo = {
        "-": "",
        _: " ",
        0: "0"
    }, Oo = {
        a: function (t) {
            return qo[t.getDay()]
        }, A: function (t) {
            return To[t.getDay()]
        }, b: function (t) {
            return zo[t.getMonth()]
        }, B: function (t) {
            return Co[t.getMonth()]
        }, c: d3.time.format(Eo), d: function (t, n) {
            return nu(t.getDate(), n, 2)
        }, e: function (t, n) {
            return nu(t.getDate(), n, 2)
        }, H: function (t, n) {
            return nu(t.getHours(), n, 2)
        }, I: function (t, n) {
            return nu(t.getHours() % 12 || 12, n, 2)
        }, j: function (t, n) {
            return nu(1 + d3.time.dayOfYear(t), n, 3)
        }, L: function (t, n) {
            return nu(t.getMilliseconds(), n, 3)
        }, m: function (t, n) {
            return nu(t.getMonth() + 1, n, 2)
        }, M: function (t, n) {
            return nu(t.getMinutes(), n, 2)
        }, p: function (t) {
            return t.getHours() >= 12 ? "PM" : "AM"
        }, S: function (t, n) {
            return nu(t.getSeconds(), n, 2)
        }, U: function (t, n) {
            return nu(d3.time.sundayOfYear(t), n, 2)
        }, w: function (t) {
            return t.getDay()
        }, W: function (t, n) {
            return nu(d3.time.mondayOfYear(t), n, 2)
        }, x: d3.time.format(Ao), X: d3.time.format(No), y: function (t, n) {
            return nu(t.getFullYear() % 100, n, 2)
        }, Y: function (t, n) {
            return nu(t.getFullYear() % 1e4, n, 4)
        }, Z: Mu, "%": function () {
            return "%"
        }
    }, Yo = {
        a: eu,
        A: ru,
        b: iu,
        B: uu,
        c: au,
        d: du,
        e: du,
        H: gu,
        I: gu,
        L: vu,
        m: hu,
        M: pu,
        p: yu,
        S: mu,
        x: ou,
        X: cu,
        y: su,
        Y: lu
    }, Uo = /^\s*\d+/, Io = d3.map({am: 0, pm: 1});
    d3.time.format.utc = function (t) {
        function n(t) {
            try {
                wo = Ki;
                var n = new wo;
                return n._ = t, e(n)
            } finally {
                wo = Date
            }
        }

        var e = d3.time.format(t);
        return n.parse = function (t) {
            try {
                wo = Ki;
                var n = e.parse(t);
                return n && n._
            } finally {
                wo = Date
            }
        }, n.toString = e.toString, n
    };
    var Vo = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3.time.format.iso = Date.prototype.toISOString ? bu : Vo, bu.parse = function (t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }, bu.toString = Vo.toString, d3.time.second = xu(function (t) {
        return new wo(1e3 * Math.floor(t / 1e3))
    }, function (t, n) {
        t.setTime(t.getTime() + 1e3 * Math.floor(n))
    }, function (t) {
        return t.getSeconds()
    }), d3.time.seconds = d3.time.second.range, d3.time.seconds.utc = d3.time.second.utc.range, d3.time.minute = xu(function (t) {
        return new wo(6e4 * Math.floor(t / 6e4))
    }, function (t, n) {
        t.setTime(t.getTime() + 6e4 * Math.floor(n))
    }, function (t) {
        return t.getMinutes()
    }), d3.time.minutes = d3.time.minute.range, d3.time.minutes.utc = d3.time.minute.utc.range, d3.time.hour = xu(function (t) {
        var n = t.getTimezoneOffset() / 60;
        return new wo(36e5 * (Math.floor(t / 36e5 - n) + n))
    }, function (t, n) {
        t.setTime(t.getTime() + 36e5 * Math.floor(n))
    }, function (t) {
        return t.getHours()
    }), d3.time.hours = d3.time.hour.range, d3.time.hours.utc = d3.time.hour.utc.range, d3.time.day = xu(function (t) {
        var n = new wo(1970, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
    }, function (t, n) {
        t.setDate(t.getDate() + n)
    }, function (t) {
        return t.getDate() - 1
    }), d3.time.days = d3.time.day.range, d3.time.days.utc = d3.time.day.utc.range, d3.time.dayOfYear = function (t) {
        var n = d3.time.year(t);
        return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
    }, So.forEach(function (t, n) {
        t = t.toLowerCase(), n = 7 - n;
        var e = d3.time[t] = xu(function (t) {
            return (t = d3.time.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * Math.floor(n))
        }, function (t) {
            var e = d3.time.year(t).getDay();
            return Math.floor((d3.time.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
        });
        d3.time[t + "s"] = e.range, d3.time[t + "s"].utc = e.utc.range, d3.time[t + "OfYear"] = function (t) {
            var e = d3.time.year(t).getDay();
            return Math.floor((d3.time.dayOfYear(t) + (e + n) % 7) / 7)
        }
    }), d3.time.week = d3.time.sunday, d3.time.weeks = d3.time.sunday.range, d3.time.weeks.utc = d3.time.sunday.utc.range, d3.time.weekOfYear = d3.time.sundayOfYear, d3.time.month = xu(function (t) {
        return t = d3.time.day(t), t.setDate(1), t
    }, function (t, n) {
        t.setMonth(t.getMonth() + n)
    }, function (t) {
        return t.getMonth()
    }), d3.time.months = d3.time.month.range, d3.time.months.utc = d3.time.month.utc.range, d3.time.year = xu(function (t) {
        return t = d3.time.day(t), t.setMonth(0, 1), t
    }, function (t, n) {
        t.setFullYear(t.getFullYear() + n)
    }, function (t) {
        return t.getFullYear()
    }), d3.time.years = d3.time.year.range, d3.time.years.utc = d3.time.year.utc.range;
    var Xo = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Zo = [[d3.time.second, 1], [d3.time.second, 5], [d3.time.second, 15], [d3.time.second, 30], [d3.time.minute, 1], [d3.time.minute, 5], [d3.time.minute, 15], [d3.time.minute, 30], [d3.time.hour, 1], [d3.time.hour, 3], [d3.time.hour, 6], [d3.time.hour, 12], [d3.time.day, 1], [d3.time.day, 2], [d3.time.week, 1], [d3.time.month, 1], [d3.time.month, 3], [d3.time.year, 1]], Bo = [[d3.time.format("%Y"), o], [d3.time.format("%B"), function (t) {
        return t.getMonth()
    }], [d3.time.format("%b %d"), function (t) {
        return 1 != t.getDate()
    }], [d3.time.format("%a %d"), function (t) {
        return t.getDay() && 1 != t.getDate()
    }], [d3.time.format("%I %p"), function (t) {
        return t.getHours()
    }], [d3.time.format("%I:%M"), function (t) {
        return t.getMinutes()
    }], [d3.time.format(":%S"), function (t) {
        return t.getSeconds()
    }], [d3.time.format(".%L"), function (t) {
        return t.getMilliseconds()
    }]], $o = d3.scale.linear(), Jo = Eu(Bo);
    Zo.year = function (t, n) {
        return $o.domain(t.map(Nu)).ticks(n).map(Au)
    }, d3.time.scale = function () {
        return wu(d3.scale.linear(), Zo, Jo)
    };
    var Go = Zo.map(function (t) {
        return [t[0].utc, t[1]]
    }), Ko = [[d3.time.format.utc("%Y"), o], [d3.time.format.utc("%B"), function (t) {
        return t.getUTCMonth()
    }], [d3.time.format.utc("%b %d"), function (t) {
        return 1 != t.getUTCDate()
    }], [d3.time.format.utc("%a %d"), function (t) {
        return t.getUTCDay() && 1 != t.getUTCDate()
    }], [d3.time.format.utc("%I %p"), function (t) {
        return t.getUTCHours()
    }], [d3.time.format.utc("%I:%M"), function (t) {
        return t.getUTCMinutes()
    }], [d3.time.format.utc(":%S"), function (t) {
        return t.getUTCSeconds()
    }], [d3.time.format.utc(".%L"), function (t) {
        return t.getUTCMilliseconds()
    }]], Wo = Eu(Ko);
    Go.year = function (t, n) {
        return $o.domain(t.map(qu)).ticks(n).map(Tu)
    }, d3.time.scale.utc = function () {
        return wu(d3.scale.linear(), Go, Wo)
    }
})();
;// i18next, v1.8.1
// Copyright (c)2015 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
!function (a) {
    function b(a, b) {
        if (!b || "function" == typeof b)return a;
        for (var c in b)a[c] = b[c];
        return a
    }

    function c(a, b) {
        for (var d in b)d in a ? c(a[d], b[d]) : a[d] = b[d];
        return a
    }

    function d(a, b, c) {
        var d, e = 0, f = a.length, g = void 0 === f || "[object Array]" !== Object.prototype.toString.apply(a) || "function" == typeof a;
        if (c)if (g) {
            for (d in a)if (b.apply(a[d], c) === !1)break
        } else for (; f > e && b.apply(a[e++], c) !== !1;); else if (g) {
            for (d in a)if (b.call(a[d], d, a[d]) === !1)break
        } else for (; f > e && b.call(a[e], e, a[e++]) !== !1;);
        return a
    }

    function e(a) {
        return "string" == typeof a ? a.replace(/[&<>"'\/]/g, function (a) {
            return Q[a]
        }) : a
    }

    function f(a) {
        var b = function (a) {
            if (window.XMLHttpRequest)return a(null, new XMLHttpRequest);
            if (window.ActiveXObject)try {
                return a(null, new ActiveXObject("Msxml2.XMLHTTP"))
            } catch (b) {
                return a(null, new ActiveXObject("Microsoft.XMLHTTP"))
            }
            return a(new Error)
        }, c = function (a) {
            if ("string" == typeof a)return a;
            var b = [];
            for (var c in a)a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        }, d = function (a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
            }
            return b
        }, e = function (a) {
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            a = d(a);
            var c, e, f, g, h, i, j, k = "", l = 0;
            do c = a.charCodeAt(l++), e = a.charCodeAt(l++), f = a.charCodeAt(l++), g = c >> 2, h = (3 & c) << 4 | e >> 4, i = (15 & e) << 2 | f >> 6, j = 63 & f, isNaN(e) ? i = j = 64 : isNaN(f) && (j = 64), k += b.charAt(g) + b.charAt(h) + b.charAt(i) + b.charAt(j), c = e = f = "", g = h = i = j = ""; while (l < a.length);
            return k
        }, f = function () {
            for (var a = arguments[0], b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c)c.hasOwnProperty(d) && (a[d] = c[d])
            }
            return a
        }, g = function (a, d, e, h) {
            "function" == typeof e && (h = e, e = {}), e.cache = e.cache || !1, e.data = e.data || {}, e.headers = e.headers || {}, e.jsonp = e.jsonp || !1, e.async = void 0 === e.async ? !0 : e.async;
            var i, j = f({
                accept: "*/*",
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
            }, g.headers, e.headers);
            if (i = "application/json" === j["content-type"] ? JSON.stringify(e.data) : c(e.data), "GET" === a) {
                var k = [];
                if (i && (k.push(i), i = null), e.cache || k.push("_=" + (new Date).getTime()), e.jsonp && (k.push("callback=" + e.jsonp), k.push("jsonp=" + e.jsonp)), k = k.join("&"), k.length > 1 && (d += d.indexOf("?") > -1 ? "&" + k : "?" + k), e.jsonp) {
                    var l = document.getElementsByTagName("head")[0], m = document.createElement("script");
                    return m.type = "text/javascript", m.src = d, void l.appendChild(m)
                }
            }
            b(function (b, c) {
                if (b)return h(b);
                c.open(a, d, e.async);
                for (var f in j)j.hasOwnProperty(f) && c.setRequestHeader(f, j[f]);
                c.onreadystatechange = function () {
                    if (4 === c.readyState) {
                        var a = c.responseText || "";
                        if (!h)return;
                        h(c.status, {
                            text: function () {
                                return a
                            }, json: function () {
                                try {
                                    return JSON.parse(a)
                                } catch (b) {
                                    return T.error("Can not parse JSON. URL: " + d), {}
                                }
                            }
                        })
                    }
                }, c.send(i)
            })
        }, h = {
            authBasic: function (a, b) {
                g.headers.Authorization = "Basic " + e(a + ":" + b)
            }, connect: function (a, b, c) {
                return g("CONNECT", a, b, c)
            }, del: function (a, b, c) {
                return g("DELETE", a, b, c)
            }, get: function (a, b, c) {
                return g("GET", a, b, c)
            }, head: function (a, b, c) {
                return g("HEAD", a, b, c)
            }, headers: function (a) {
                g.headers = a || {}
            }, isAllowed: function (a, b, c) {
                this.options(a, function (a, d) {
                    c(-1 !== d.text().indexOf(b))
                })
            }, options: function (a, b, c) {
                return g("OPTIONS", a, b, c)
            }, patch: function (a, b, c) {
                return g("PATCH", a, b, c)
            }, post: function (a, b, c) {
                return g("POST", a, b, c)
            }, put: function (a, b, c) {
                return g("PUT", a, b, c)
            }, trace: function (a, b, c) {
                return g("TRACE", a, b, c)
            }
        }, i = a.type ? a.type.toLowerCase() : "get";
        h[i](a.url, a, function (b, c) {
            200 === b || 0 === b && c.text() ? a.success(c.json(), b, null) : a.error(c.text(), b, null)
        })
    }

    function g(a, b) {
        "function" == typeof a && (b = a, a = {}), a = a || {}, T.extend(P, a), delete P.fixLng, P.functions && (delete P.functions, T.extend(T, a.functions)), "string" == typeof P.ns && (P.ns = {
            namespaces: [P.ns],
            defaultNs: P.ns
        }), "string" == typeof P.fallbackNS && (P.fallbackNS = [P.fallbackNS]), ("string" == typeof P.fallbackLng || "boolean" == typeof P.fallbackLng) && (P.fallbackLng = [P.fallbackLng]), P.interpolationPrefixEscaped = T.regexEscape(P.interpolationPrefix), P.interpolationSuffixEscaped = T.regexEscape(P.interpolationSuffix), P.lng || (P.lng = T.detectLanguage()), M = T.toLanguages(P.lng), H = M[0], T.log("currentLng set to: " + H), P.useCookie && T.cookie.read(P.cookieName) !== H && T.cookie.create(P.cookieName, H, P.cookieExpirationTime, P.cookieDomain), P.detectLngFromLocalStorage && "undefined" != typeof document && window.localStorage && T.localStorage.setItem("i18next_lng", H);
        var c = B;
        a.fixLng && (c = function (a, b) {
            return b = b || {}, b.lng = b.lng || c.lng, B(a, b)
        }, c.lng = H), W.setCurrentLng(H), I && P.setJqueryExt && u();
        var d;
        if (I && I.Deferred && (d = I.Deferred()), !P.resStore) {
            var e = T.toLanguages(P.lng);
            "string" == typeof P.preload && (P.preload = [P.preload]);
            for (var f = 0, g = P.preload.length; g > f; f++)for (var h = T.toLanguages(P.preload[f]), i = 0, j = h.length; j > i; i++)e.indexOf(h[i]) < 0 && e.push(h[i]);
            return J.sync.load(e, P, function (a, e) {
                K = e, N = !0, b && b(c), d && d.resolve(c)
            }), d ? d.promise() : void 0
        }
        return K = P.resStore, N = !0, b && b(c), d && d.resolve(c), d ? d.promise() : void 0
    }

    function h(a, b) {
        "string" == typeof a && (a = [a]);
        for (var c = 0, d = a.length; d > c; c++)P.preload.indexOf(a[c]) < 0 && P.preload.push(a[c]);
        return g(b)
    }

    function i(a, b, c, d) {
        "string" != typeof b ? (c = b, b = P.ns.defaultNs) : P.ns.namespaces.indexOf(b) < 0 && P.ns.namespaces.push(b), K[a] = K[a] || {}, K[a][b] = K[a][b] || {}, d ? T.deepExtend(K[a][b], c) : T.extend(K[a][b], c), P.useLocalStorage && O._storeLocal(K)
    }

    function j(a, b) {
        "string" != typeof b && (b = P.ns.defaultNs), K[a] = K[a] || {};
        var c = K[a][b] || {}, d = !1;
        for (var e in c)c.hasOwnProperty(e) && (d = !0);
        return d
    }

    function k(a, b) {
        return "string" != typeof b && (b = P.ns.defaultNs), K[a] = K[a] || {}, T.extend({}, K[a][b])
    }

    function l(a, b) {
        "string" != typeof b && (b = P.ns.defaultNs), K[a] = K[a] || {}, K[a][b] = {}, P.useLocalStorage && O._storeLocal(K)
    }

    function m(a, b, c, d) {
        "string" != typeof b ? (resource = b, b = P.ns.defaultNs) : P.ns.namespaces.indexOf(b) < 0 && P.ns.namespaces.push(b), K[a] = K[a] || {}, K[a][b] = K[a][b] || {};
        for (var e = c.split(P.keyseparator), f = 0, g = K[a][b]; e[f];)f == e.length - 1 ? g[e[f]] = d : (null == g[e[f]] && (g[e[f]] = {}), g = g[e[f]]), f++;
        P.useLocalStorage && O._storeLocal(K)
    }

    function n(a, b, c) {
        "string" != typeof b ? (resource = b, b = P.ns.defaultNs) : P.ns.namespaces.indexOf(b) < 0 && P.ns.namespaces.push(b);
        for (var d in c)"string" == typeof c[d] && m(a, b, d, c[d])
    }

    function o(a) {
        P.ns.defaultNs = a
    }

    function p(a, b) {
        q([a], b)
    }

    function q(a, b) {
        var c = {
            dynamicLoad: P.dynamicLoad,
            resGetPath: P.resGetPath,
            getAsync: P.getAsync,
            customLoad: P.customLoad,
            ns: {namespaces: a, defaultNs: ""}
        }, d = T.toLanguages(P.lng);
        "string" == typeof P.preload && (P.preload = [P.preload]);
        for (var e = 0, f = P.preload.length; f > e; e++)for (var g = T.toLanguages(P.preload[e]), h = 0, i = g.length; i > h; h++)d.indexOf(g[h]) < 0 && d.push(g[h]);
        for (var j = [], k = 0, l = d.length; l > k; k++) {
            var m = !1, n = K[d[k]];
            if (n)for (var o = 0, p = a.length; p > o; o++)n[a[o]] || (m = !0); else m = !0;
            m && j.push(d[k])
        }
        j.length ? J.sync._fetch(j, c, function (c, d) {
            var e = a.length * j.length;
            T.each(a, function (a, c) {
                P.ns.namespaces.indexOf(c) < 0 && P.ns.namespaces.push(c), T.each(j, function (a, f) {
                    K[f] = K[f] || {}, K[f][c] = d[f][c], e--, 0 === e && b && (P.useLocalStorage && J.sync._storeLocal(K), b())
                })
            })
        }) : b && b()
    }

    function r(a, b, c) {
        return "function" == typeof b ? (c = b, b = {}) : b || (b = {}), b.lng = a, g(b, c)
    }

    function s() {
        return H
    }

    function t(a) {
        K = {}, r(H, a)
    }

    function u() {
        function a(a, b, c) {
            if (0 !== b.length) {
                var d = "text";
                if (0 === b.indexOf("[")) {
                    var e = b.split("]");
                    b = e[1], d = e[0].substr(1, e[0].length - 1)
                }
                b.indexOf(";") === b.length - 1 && (b = b.substr(0, b.length - 2));
                var f;
                if ("html" === d)f = P.defaultValueFromContent ? I.extend({defaultValue: a.html()}, c) : c, a.html(I.t(b, f)); else if ("text" === d)f = P.defaultValueFromContent ? I.extend({defaultValue: a.text()}, c) : c, a.text(I.t(b, f)); else if ("prepend" === d)f = P.defaultValueFromContent ? I.extend({defaultValue: a.html()}, c) : c, a.prepend(I.t(b, f)); else if ("append" === d)f = P.defaultValueFromContent ? I.extend({defaultValue: a.html()}, c) : c, a.append(I.t(b, f)); else if (0 === d.indexOf("data-")) {
                    var g = d.substr("data-".length);
                    f = P.defaultValueFromContent ? I.extend({defaultValue: a.data(g)}, c) : c;
                    var h = I.t(b, f);
                    a.data(g, h), a.attr(d, h)
                } else f = P.defaultValueFromContent ? I.extend({defaultValue: a.attr(d)}, c) : c, a.attr(d, I.t(b, f))
            }
        }

        function b(b, c) {
            var d = b.attr(P.selectorAttr);
            if (d || "undefined" == typeof d || d === !1 || (d = b.text() || b.val()), d) {
                var e = b, f = b.data("i18n-target");
                if (f && (e = b.find(f) || b), c || P.useDataAttrOptions !== !0 || (c = b.data("i18n-options")), c = c || {}, d.indexOf(";") >= 0) {
                    var g = d.split(";");
                    I.each(g, function (b, d) {
                        "" !== d && a(e, d, c)
                    })
                } else a(e, d, c);
                P.useDataAttrOptions === !0 && b.data("i18n-options", c)
            }
        }

        I.t = I.t || B, I.fn.i18n = function (a) {
            return this.each(function () {
                b(I(this), a);
                var c = I(this).find("[" + P.selectorAttr + "]");
                c.each(function () {
                    b(I(this), a)
                })
            })
        }
    }

    function v(a, b, c, d) {
        if (!a)return a;
        if (d = d || b, a.indexOf(d.interpolationPrefix || P.interpolationPrefix) < 0)return a;
        var e = d.interpolationPrefix ? T.regexEscape(d.interpolationPrefix) : P.interpolationPrefixEscaped, f = d.interpolationSuffix ? T.regexEscape(d.interpolationSuffix) : P.interpolationSuffixEscaped, g = "HTML" + f, h = b.replace && "object" == typeof b.replace ? b.replace : b;
        return T.each(h, function (b, h) {
            var i = c ? c + P.keyseparator + b : b;
            "object" == typeof h && null !== h ? a = v(a, h, i, d) : d.escapeInterpolation || P.escapeInterpolation ? (a = a.replace(new RegExp([e, i, g].join(""), "g"), T.regexReplacementEscape(h)), a = a.replace(new RegExp([e, i, f].join(""), "g"), T.regexReplacementEscape(T.escape(h)))) : a = a.replace(new RegExp([e, i, f].join(""), "g"), T.regexReplacementEscape(h))
        }), a
    }

    function w(a, b) {
        var c = ",", d = "{", e = "}", f = T.extend({}, b);
        for (delete f.postProcess; -1 != a.indexOf(P.reusePrefix) && (L++, !(L > P.maxRecursion));) {
            var g = a.lastIndexOf(P.reusePrefix), h = a.indexOf(P.reuseSuffix, g) + P.reuseSuffix.length, i = a.substring(g, h), j = i.replace(P.reusePrefix, "").replace(P.reuseSuffix, "");
            if (g >= h)return T.error("there is an missing closing in following translation value", a), "";
            if (-1 != j.indexOf(c)) {
                var k = j.indexOf(c);
                if (-1 != j.indexOf(d, k) && -1 != j.indexOf(e, k)) {
                    var l = j.indexOf(d, k), m = j.indexOf(e, l) + e.length;
                    try {
                        f = T.extend(f, JSON.parse(j.substring(l, m))), j = j.substring(0, k)
                    } catch (n) {
                    }
                }
            }
            var o = E(j, f);
            a = a.replace(i, T.regexReplacementEscape(o))
        }
        return a
    }

    function x(a) {
        return a.context && ("string" == typeof a.context || "number" == typeof a.context)
    }

    function y(a) {
        return void 0 !== a.count && "string" != typeof a.count
    }

    function z(a) {
        return void 0 !== a.indefinite_article && "string" != typeof a.indefinite_article && a.indefinite_article
    }

    function A(a, b) {
        b = b || {};
        var c = C(a, b), d = F(a, b);
        return void 0 !== d || d === c
    }

    function B(a, b) {
        return b = b || {}, N ? (L = 0, E.apply(null, arguments)) : (T.log("i18next not finished initialization. you might have called t function before loading resources finished."), b.defaultValue || "")
    }

    function C(a, b) {
        return void 0 !== b.defaultValue ? b.defaultValue : a
    }

    function D() {
        for (var a = [], b = 1; b < arguments.length; b++)a.push(arguments[b]);
        return {postProcess: "sprintf", sprintf: a}
    }

    function E(a, b) {
        if (b && "object" != typeof b ? "sprintf" === P.shortcutFunction ? b = D.apply(null, arguments) : "defaultValue" === P.shortcutFunction && (b = {defaultValue: b}) : b = b || {}, "object" == typeof P.defaultVariables && (b = T.extend({}, P.defaultVariables, b)), void 0 === a || null === a || "" === a)return "";
        "number" == typeof a && (a = String(a)), "string" == typeof a && (a = [a]);
        var c = a[0];
        if (a.length > 1)for (var d = 0; d < a.length && (c = a[d], !A(c, b)); d++);
        var e, f = C(c, b), g = F(c, b), h = b.lng ? T.toLanguages(b.lng, b.fallbackLng) : M, i = b.ns || P.ns.defaultNs;
        c.indexOf(P.nsseparator) > -1 && (e = c.split(P.nsseparator), i = e[0], c = e[1]), void 0 === g && P.sendMissing && "function" == typeof P.missingKeyHandler && (b.lng ? P.missingKeyHandler(h[0], i, c, f, h) : P.missingKeyHandler(P.lng, i, c, f, h));
        var j;
        j = "string" == typeof P.postProcess && "" !== P.postProcess ? [P.postProcess] : "array" == typeof P.postProcess || "object" == typeof P.postProcess ? P.postProcess : [], "string" == typeof b.postProcess && "" !== b.postProcess ? j = j.concat([b.postProcess]) : ("array" == typeof b.postProcess || "object" == typeof b.postProcess) && (j = j.concat(b.postProcess)), void 0 !== g && j.length && j.forEach(function (a) {
            X[a] && (g = X[a](g, c, b))
        });
        var k = f;
        if (f.indexOf(P.nsseparator) > -1 && (e = f.split(P.nsseparator), k = e[1]), k === c && P.parseMissingKey && (f = P.parseMissingKey(f)), void 0 === g && (f = v(f, b), f = w(f, b), j.length)) {
            var l = C(c, b);
            j.forEach(function (a) {
                X[a] && (g = X[a](l, c, b))
            })
        }
        return void 0 !== g ? g : f
    }

    function F(a, b) {
        b = b || {};
        var c, d, e = C(a, b), f = M;
        if (!K)return e;
        if ("cimode" === f[0].toLowerCase())return e;
        if (b.lngs && (f = b.lngs), b.lng && (f = T.toLanguages(b.lng, b.fallbackLng), !K[f[0]])) {
            var g = P.getAsync;
            P.getAsync = !1, J.sync.load(f, P, function (a, b) {
                T.extend(K, b), P.getAsync = g
            })
        }
        var h = b.ns || P.ns.defaultNs;
        if (a.indexOf(P.nsseparator) > -1) {
            var i = a.split(P.nsseparator);
            h = i[0], a = i[1]
        }
        if (x(b)) {
            c = T.extend({}, b), delete c.context, c.defaultValue = P.contextNotFound;
            var j = h + P.nsseparator + a + "_" + b.context;
            if (d = B(j, c), d != P.contextNotFound)return v(d, {context: b.context})
        }
        if (y(b, f[0])) {
            c = T.extend({lngs: [f[0]]}, b), delete c.count, c._origLng = c._origLng || c.lng || f[0], delete c.lng, c.defaultValue = P.pluralNotFound;
            var k;
            if (W.needsPlural(f[0], b.count)) {
                k = h + P.nsseparator + a + P.pluralSuffix;
                var l = W.get(f[0], b.count);
                l >= 0 ? k = k + "_" + l : 1 === l && (k = h + P.nsseparator + a)
            } else k = h + P.nsseparator + a;
            if (d = B(k, c), d != P.pluralNotFound)return v(d, {
                count: b.count,
                interpolationPrefix: b.interpolationPrefix,
                interpolationSuffix: b.interpolationSuffix
            });
            if (!(f.length > 1))return c.lng = c._origLng, delete c._origLng, d = B(h + P.nsseparator + a, c), v(d, {
                count: b.count,
                interpolationPrefix: b.interpolationPrefix,
                interpolationSuffix: b.interpolationSuffix
            });
            var m = f.slice();
            if (m.shift(), b = T.extend(b, {lngs: m}), b._origLng = c._origLng, delete b.lng, d = B(h + P.nsseparator + a, b), d != P.pluralNotFound)return d
        }
        if (z(b)) {
            var n = T.extend({}, b);
            delete n.indefinite_article, n.defaultValue = P.indefiniteNotFound;
            var o = h + P.nsseparator + a + (b.count && !y(b, f[0]) || !b.count ? P.indefiniteSuffix : "");
            if (d = B(o, n), d != P.indefiniteNotFound)return d
        }
        for (var p, q = a.split(P.keyseparator), r = 0, s = f.length; s > r && void 0 === p; r++) {
            for (var t = f[r], u = 0, A = K[t] && K[t][h]; q[u];)A = A && A[q[u]], u++;
            if (void 0 !== A) {
                var D = Object.prototype.toString.apply(A);
                if ("string" == typeof A)A = v(A, b), A = w(A, b); else if ("[object Array]" !== D || P.returnObjectTrees || b.returnObjectTrees) {
                    if (null === A && P.fallbackOnNull === !0)A = void 0; else if (null !== A)if (P.returnObjectTrees || b.returnObjectTrees) {
                        if ("[object Number]" !== D && "[object Function]" !== D && "[object RegExp]" !== D) {
                            var G = "[object Array]" === D ? [] : {};
                            T.each(A, function (c) {
                                G[c] = E(h + P.nsseparator + a + P.keyseparator + c, b)
                            }), A = G
                        }
                    } else P.objectTreeKeyHandler && "function" == typeof P.objectTreeKeyHandler ? A = P.objectTreeKeyHandler(a, A, t, h, b) : (A = "key '" + h + ":" + a + " (" + t + ")' returned an object instead of string.", T.log(A))
                } else A = A.join("\n"), A = v(A, b), A = w(A, b);
                "string" == typeof A && "" === A.trim() && P.fallbackOnEmpty === !0 && (A = void 0), p = A
            }
        }
        if (void 0 === p && !b.isFallbackLookup && (P.fallbackToDefaultNS === !0 || P.fallbackNS && P.fallbackNS.length > 0)) {
            if (b.isFallbackLookup = !0, P.fallbackNS.length) {
                for (var H = 0, I = P.fallbackNS.length; I > H; H++)if (p = F(P.fallbackNS[H] + P.nsseparator + a, b), p || "" === p && P.fallbackOnEmpty === !1) {
                    var L = p.indexOf(P.nsseparator) > -1 ? p.split(P.nsseparator)[1] : p, N = e.indexOf(P.nsseparator) > -1 ? e.split(P.nsseparator)[1] : e;
                    if (L !== N)break
                }
            } else p = F(a, b);
            b.isFallbackLookup = !1
        }
        return p
    }

    function G() {
        var a, b = P.lngWhitelist || [], c = [];
        if ("undefined" != typeof window && !function () {
                for (var a = window.location.search.substring(1), b = a.split("&"), d = 0; d < b.length; d++) {
                    var e = b[d].indexOf("=");
                    if (e > 0) {
                        var f = b[d].substring(0, e);
                        f == P.detectLngQS && c.push(b[d].substring(e + 1))
                    }
                }
            }(), P.useCookie && "undefined" != typeof document) {
            var d = T.cookie.read(P.cookieName);
            d && c.push(d)
        }
        if (P.detectLngFromLocalStorage && "undefined" != typeof window && window.localStorage && c.push(T.localStorage.getItem("i18next_lng")), "undefined" != typeof navigator) {
            if (navigator.languages)for (var e = 0; e < navigator.languages.length; e++)c.push(navigator.languages[e]);
            navigator.userLanguage && c.push(navigator.userLanguage), navigator.language && c.push(navigator.language)
        }
        return function () {
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e.indexOf("-") > -1) {
                    var f = e.split("-");
                    e = P.lowerCaseLng ? f[0].toLowerCase() + "-" + f[1].toLowerCase() : f[0].toLowerCase() + "-" + f[1].toUpperCase()
                }
                if (0 === b.length || b.indexOf(e) > -1) {
                    a = e;
                    break
                }
            }
        }(), a || (a = P.fallbackLng[0]), a
    }

    Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
        "use strict";
        if (null == this)throw new TypeError;
        var b = Object(this), c = b.length >>> 0;
        if (0 === c)return -1;
        var d = 0;
        if (arguments.length > 0 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c)return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)if (e in b && b[e] === a)return e;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (a) {
        "use strict";
        if (null == this)throw new TypeError;
        var b = Object(this), c = b.length >>> 0;
        if (0 === c)return -1;
        var d = c;
        arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 != d && d != 1 / 0 && d != -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d))));
        for (var e = d >= 0 ? Math.min(d, c - 1) : c - Math.abs(d); e >= 0; e--)if (e in b && b[e] === a)return e;
        return -1
    }), "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    });
    var H, I = a.jQuery || a.Zepto, J = {}, K = {}, L = 0, M = [], N = !1, O = {};
    "undefined" != typeof module && module.exports ? module.exports = J : (I && (I.i18n = I.i18n || J), a.i18n = a.i18n || J), O = {
        load: function (a, b, c) {
            b.useLocalStorage ? O._loadLocal(a, b, function (d, e) {
                for (var f = [], g = 0, h = a.length; h > g; g++)e[a[g]] || f.push(a[g]);
                f.length > 0 ? O._fetch(f, b, function (a, b) {
                    T.extend(e, b), O._storeLocal(b), c(null, e)
                }) : c(null, e)
            }) : O._fetch(a, b, function (a, b) {
                c(null, b)
            })
        }, _loadLocal: function (a, b, c) {
            var d = {}, e = (new Date).getTime();
            if (window.localStorage) {
                var f = a.length;
                T.each(a, function (a, g) {
                    var h = T.localStorage.getItem("res_" + g);
                    h && (h = JSON.parse(h), h.i18nStamp && h.i18nStamp + b.localStorageExpirationTime > e && (d[g] = h)), f--, 0 === f && c(null, d)
                })
            }
        }, _storeLocal: function (a) {
            if (window.localStorage)for (var b in a)a[b].i18nStamp = (new Date).getTime(), T.localStorage.setItem("res_" + b, JSON.stringify(a[b]))
        }, _fetch: function (a, b, c) {
            var d = b.ns, e = {};
            if (b.dynamicLoad) {
                var f = function (a, b) {
                    c(null, b)
                };
                if ("function" == typeof b.customLoad)b.customLoad(a, d.namespaces, b, f); else {
                    var g = v(b.resGetPath, {lng: a.join("+"), ns: d.namespaces.join("+")});
                    T.ajax({
                        url: g, success: function (a) {
                            T.log("loaded: " + g), f(null, a)
                        }, error: function (a, b, c) {
                            T.log("failed loading: " + g), f("failed loading resource.json error: " + c)
                        }, dataType: "json", async: b.getAsync
                    })
                }
            } else {
                var h, i = d.namespaces.length * a.length;
                T.each(d.namespaces, function (d, f) {
                    T.each(a, function (a, d) {
                        var g = function (a, b) {
                            a && (h = h || [], h.push(a)), e[d] = e[d] || {}, e[d][f] = b, i--, 0 === i && c(h, e)
                        };
                        "function" == typeof b.customLoad ? b.customLoad(d, f, b, g) : O._fetchOne(d, f, b, g)
                    })
                })
            }
        }, _fetchOne: function (a, b, c, d) {
            var e = v(c.resGetPath, {lng: a, ns: b});
            T.ajax({
                url: e, success: function (a) {
                    T.log("loaded: " + e), d(null, a)
                }, error: function (a, b, c) {
                    if (b && 200 == b || a && a.status && 200 == a.status)T.error("There is a typo in: " + e); else if (b && 404 == b || a && a.status && 404 == a.status)T.log("Does not exist: " + e); else {
                        var f = b ? b : a && a.status ? a.status : null;
                        T.log(f + " when loading " + e)
                    }
                    d(c, {})
                }, dataType: "json", async: c.getAsync
            })
        }, postMissing: function (a, b, c, d, e) {
            var f = {};
            f[c] = d;
            var g = [];
            if ("fallback" === P.sendMissingTo && P.fallbackLng[0] !== !1)for (var h = 0; h < P.fallbackLng.length; h++)g.push({
                lng: P.fallbackLng[h],
                url: v(P.resPostPath, {lng: P.fallbackLng[h], ns: b})
            }); else if ("current" === P.sendMissingTo || "fallback" === P.sendMissingTo && P.fallbackLng[0] === !1)g.push({
                lng: a,
                url: v(P.resPostPath, {lng: a, ns: b})
            }); else if ("all" === P.sendMissingTo)for (var h = 0, i = e.length; i > h; h++)g.push({
                lng: e[h],
                url: v(P.resPostPath, {lng: e[h], ns: b})
            });
            for (var j = 0, k = g.length; k > j; j++) {
                var l = g[j];
                T.ajax({
                    url: l.url, type: P.sendType, data: f, success: function () {
                        T.log("posted missing key '" + c + "' to: " + l.url);
                        for (var a = c.split("."), e = 0, f = K[l.lng][b]; a[e];)f = f[a[e]] = e === a.length - 1 ? d : f[a[e]] || {}, e++
                    }, error: function () {
                        T.log("failed posting missing key '" + c + "' to: " + l.url)
                    }, dataType: "json", async: P.postAsync
                })
            }
        }, reload: t
    };
    var P = {
        lng: void 0,
        load: "all",
        preload: [],
        lowerCaseLng: !1,
        returnObjectTrees: !1,
        fallbackLng: ["dev"],
        fallbackNS: [],
        detectLngQS: "setLng",
        detectLngFromLocalStorage: !1,
        ns: "translation",
        fallbackOnNull: !0,
        fallbackOnEmpty: !1,
        fallbackToDefaultNS: !1,
        nsseparator: ":",
        keyseparator: ".",
        selectorAttr: "data-i18n",
        debug: !1,
        resGetPath: "locales/__lng__/__ns__.json",
        resPostPath: "locales/add/__lng__/__ns__",
        getAsync: !0,
        postAsync: !0,
        resStore: void 0,
        useLocalStorage: !1,
        localStorageExpirationTime: 6048e5,
        dynamicLoad: !1,
        sendMissing: !1,
        sendMissingTo: "fallback",
        sendType: "POST",
        interpolationPrefix: "__",
        interpolationSuffix: "__",
        defaultVariables: !1,
        reusePrefix: "$t(",
        reuseSuffix: ")",
        pluralSuffix: "_plural",
        pluralNotFound: ["plural_not_found", Math.random()].join(""),
        contextNotFound: ["context_not_found", Math.random()].join(""),
        escapeInterpolation: !1,
        indefiniteSuffix: "_indefinite",
        indefiniteNotFound: ["indefinite_not_found", Math.random()].join(""),
        setJqueryExt: !0,
        defaultValueFromContent: !0,
        useDataAttrOptions: !1,
        cookieExpirationTime: void 0,
        useCookie: !0,
        cookieName: "i18next",
        cookieDomain: void 0,
        objectTreeKeyHandler: void 0,
        postProcess: void 0,
        parseMissingKey: void 0,
        missingKeyHandler: O.postMissing,
        shortcutFunction: "sprintf"
    }, Q = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    }, R = {
        create: function (a, b, c, d) {
            var e;
            if (c) {
                var f = new Date;
                f.setTime(f.getTime() + 60 * c * 1e3), e = "; expires=" + f.toGMTString()
            } else e = "";
            d = d ? "domain=" + d + ";" : "", document.cookie = a + "=" + b + e + ";" + d + "path=/"
        }, read: function (a) {
            for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                for (var e = c[d]; " " == e.charAt(0);)e = e.substring(1, e.length);
                if (0 === e.indexOf(b))return e.substring(b.length, e.length)
            }
            return null
        }, remove: function (a) {
            this.create(a, "", -1)
        }
    }, S = {
        create: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }, T = {
        extend: I ? I.extend : b,
        deepExtend: c,
        each: I ? I.each : d,
        ajax: I ? I.ajax : "undefined" != typeof document ? f : function () {
        },
        cookie: "undefined" != typeof document ? R : S,
        detectLanguage: G,
        escape: e,
        log: function (a) {
            P.debug && "undefined" != typeof console && console.log(a)
        },
        error: function (a) {
            "undefined" != typeof console && console.error(a)
        },
        getCountyIndexOfLng: function (a) {
            var b = 0;
            return ("nb-NO" === a || "nn-NO" === a || "nb-no" === a || "nn-no" === a) && (b = 1), b
        },
        toLanguages: function (a) {
            function b(a) {
                var b = a;
                if ("string" == typeof a && a.indexOf("-") > -1) {
                    var c = a.split("-");
                    b = P.lowerCaseLng ? c[0].toLowerCase() + "-" + c[1].toLowerCase() : c[0].toLowerCase() + "-" + c[1].toUpperCase()
                } else b = P.lowerCaseLng ? a.toLowerCase() : a;
                return b
            }

            var c = this.log, d = [], e = P.lngWhitelist || !1, f = function (a) {
                !e || e.indexOf(a) > -1 ? d.push(a) : c("rejecting non-whitelisted language: " + a)
            };
            if ("string" == typeof a && a.indexOf("-") > -1) {
                var g = a.split("-");
                "unspecific" !== P.load && f(b(a)), "current" !== P.load && f(b(g[this.getCountyIndexOfLng(a)]))
            } else f(b(a));
            for (var h = 0; h < P.fallbackLng.length; h++)-1 === d.indexOf(P.fallbackLng[h]) && P.fallbackLng[h] && d.push(b(P.fallbackLng[h]));
            return d
        },
        regexEscape: function (a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        regexReplacementEscape: function (a) {
            return "string" == typeof a ? a.replace(/\$/g, "$$$$") : a
        },
        localStorage: {
            setItem: function (a, b) {
                if (window.localStorage)try {
                    window.localStorage.setItem(a, b)
                } catch (c) {
                    T.log('failed to set value for key "' + a + '" to localStorage.')
                }
            }, getItem: function (a, b) {
                if (window.localStorage)try {
                    return window.localStorage.getItem(a, b)
                } catch (c) {
                    return void T.log('failed to get value for key "' + a + '" from localStorage.')
                }
            }
        }
    };
    T.applyReplacement = v;
    var U = [["ach", "Acholi", [1, 2], 1], ["af", "Afrikaans", [1, 2], 2], ["ak", "Akan", [1, 2], 1], ["am", "Amharic", [1, 2], 1], ["an", "Aragonese", [1, 2], 2], ["ar", "Arabic", [0, 1, 2, 3, 11, 100], 5], ["arn", "Mapudungun", [1, 2], 1], ["ast", "Asturian", [1, 2], 2], ["ay", "Aymará", [1], 3], ["az", "Azerbaijani", [1, 2], 2], ["be", "Belarusian", [1, 2, 5], 4], ["bg", "Bulgarian", [1, 2], 2], ["bn", "Bengali", [1, 2], 2], ["bo", "Tibetan", [1], 3], ["br", "Breton", [1, 2], 1], ["bs", "Bosnian", [1, 2, 5], 4], ["ca", "Catalan", [1, 2], 2], ["cgg", "Chiga", [1], 3], ["cs", "Czech", [1, 2, 5], 6], ["csb", "Kashubian", [1, 2, 5], 7], ["cy", "Welsh", [1, 2, 3, 8], 8], ["da", "Danish", [1, 2], 2], ["de", "German", [1, 2], 2], ["dev", "Development Fallback", [1, 2], 2], ["dz", "Dzongkha", [1], 3], ["el", "Greek", [1, 2], 2], ["en", "English", [1, 2], 2], ["eo", "Esperanto", [1, 2], 2], ["es", "Spanish", [1, 2], 2], ["es_ar", "Argentinean Spanish", [1, 2], 2], ["et", "Estonian", [1, 2], 2], ["eu", "Basque", [1, 2], 2], ["fa", "Persian", [1], 3], ["fi", "Finnish", [1, 2], 2], ["fil", "Filipino", [1, 2], 1], ["fo", "Faroese", [1, 2], 2], ["fr", "French", [1, 2], 9], ["fur", "Friulian", [1, 2], 2], ["fy", "Frisian", [1, 2], 2], ["ga", "Irish", [1, 2, 3, 7, 11], 10], ["gd", "Scottish Gaelic", [1, 2, 3, 20], 11], ["gl", "Galician", [1, 2], 2], ["gu", "Gujarati", [1, 2], 2], ["gun", "Gun", [1, 2], 1], ["ha", "Hausa", [1, 2], 2], ["he", "Hebrew", [1, 2], 2], ["hi", "Hindi", [1, 2], 2], ["hr", "Croatian", [1, 2, 5], 4], ["hu", "Hungarian", [1, 2], 2], ["hy", "Armenian", [1, 2], 2], ["ia", "Interlingua", [1, 2], 2], ["id", "Indonesian", [1], 3], ["is", "Icelandic", [1, 2], 12], ["it", "Italian", [1, 2], 2], ["ja", "Japanese", [1], 3], ["jbo", "Lojban", [1], 3], ["jv", "Javanese", [0, 1], 13], ["ka", "Georgian", [1], 3], ["kk", "Kazakh", [1], 3], ["km", "Khmer", [1], 3], ["kn", "Kannada", [1, 2], 2], ["ko", "Korean", [1], 3], ["ku", "Kurdish", [1, 2], 2], ["kw", "Cornish", [1, 2, 3, 4], 14], ["ky", "Kyrgyz", [1], 3], ["lb", "Letzeburgesch", [1, 2], 2], ["ln", "Lingala", [1, 2], 1], ["lo", "Lao", [1], 3], ["lt", "Lithuanian", [1, 2, 10], 15], ["lv", "Latvian", [1, 2, 0], 16], ["mai", "Maithili", [1, 2], 2], ["mfe", "Mauritian Creole", [1, 2], 1], ["mg", "Malagasy", [1, 2], 1], ["mi", "Maori", [1, 2], 1], ["mk", "Macedonian", [1, 2], 17], ["ml", "Malayalam", [1, 2], 2], ["mn", "Mongolian", [1, 2], 2], ["mnk", "Mandinka", [0, 1, 2], 18], ["mr", "Marathi", [1, 2], 2], ["ms", "Malay", [1], 3], ["mt", "Maltese", [1, 2, 11, 20], 19], ["nah", "Nahuatl", [1, 2], 2], ["nap", "Neapolitan", [1, 2], 2], ["nb", "Norwegian Bokmal", [1, 2], 2], ["ne", "Nepali", [1, 2], 2], ["nl", "Dutch", [1, 2], 2], ["nn", "Norwegian Nynorsk", [1, 2], 2], ["no", "Norwegian", [1, 2], 2], ["nso", "Northern Sotho", [1, 2], 2], ["oc", "Occitan", [1, 2], 1], ["or", "Oriya", [2, 1], 2], ["pa", "Punjabi", [1, 2], 2], ["pap", "Papiamento", [1, 2], 2], ["pl", "Polish", [1, 2, 5], 7], ["pms", "Piemontese", [1, 2], 2], ["ps", "Pashto", [1, 2], 2], ["pt", "Portuguese", [1, 2], 2], ["pt_br", "Brazilian Portuguese", [1, 2], 2], ["rm", "Romansh", [1, 2], 2], ["ro", "Romanian", [1, 2, 20], 20], ["ru", "Russian", [1, 2, 5], 4], ["sah", "Yakut", [1], 3], ["sco", "Scots", [1, 2], 2], ["se", "Northern Sami", [1, 2], 2], ["si", "Sinhala", [1, 2], 2], ["sk", "Slovak", [1, 2, 5], 6], ["sl", "Slovenian", [5, 1, 2, 3], 21], ["so", "Somali", [1, 2], 2], ["son", "Songhay", [1, 2], 2], ["sq", "Albanian", [1, 2], 2], ["sr", "Serbian", [1, 2, 5], 4], ["su", "Sundanese", [1], 3], ["sv", "Swedish", [1, 2], 2], ["sw", "Swahili", [1, 2], 2], ["ta", "Tamil", [1, 2], 2], ["te", "Telugu", [1, 2], 2], ["tg", "Tajik", [1, 2], 1], ["th", "Thai", [1], 3], ["ti", "Tigrinya", [1, 2], 1], ["tk", "Turkmen", [1, 2], 2], ["tr", "Turkish", [1, 2], 1], ["tt", "Tatar", [1], 3], ["ug", "Uyghur", [1], 3], ["uk", "Ukrainian", [1, 2, 5], 4], ["ur", "Urdu", [1, 2], 2], ["uz", "Uzbek", [1, 2], 1], ["vi", "Vietnamese", [1], 3], ["wa", "Walloon", [1, 2], 1], ["wo", "Wolof", [1], 3], ["yo", "Yoruba", [1, 2], 2], ["zh", "Chinese", [1], 3]], V = {
        1: function (a) {
            return Number(a > 1)
        }, 2: function (a) {
            return Number(1 != a)
        }, 3: function () {
            return 0
        }, 4: function (a) {
            return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a % 10 >= 2 && 4 >= a % 10 && (10 > a % 100 || a % 100 >= 20) ? 1 : 2)
        }, 5: function (a) {
            return Number(0 === a ? 0 : 1 == a ? 1 : 2 == a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5)
        }, 6: function (a) {
            return Number(1 == a ? 0 : a >= 2 && 4 >= a ? 1 : 2)
        }, 7: function (a) {
            return Number(1 == a ? 0 : a % 10 >= 2 && 4 >= a % 10 && (10 > a % 100 || a % 100 >= 20) ? 1 : 2)
        }, 8: function (a) {
            return Number(1 == a ? 0 : 2 == a ? 1 : 8 != a && 11 != a ? 2 : 3)
        }, 9: function (a) {
            return Number(a >= 2)
        }, 10: function (a) {
            return Number(1 == a ? 0 : 2 == a ? 1 : 7 > a ? 2 : 11 > a ? 3 : 4)
        }, 11: function (a) {
            return Number(1 == a || 11 == a ? 0 : 2 == a || 12 == a ? 1 : a > 2 && 20 > a ? 2 : 3)
        }, 12: function (a) {
            return Number(a % 10 != 1 || a % 100 == 11)
        }, 13: function (a) {
            return Number(0 !== a)
        }, 14: function (a) {
            return Number(1 == a ? 0 : 2 == a ? 1 : 3 == a ? 2 : 3)
        }, 15: function (a) {
            return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a % 10 >= 2 && (10 > a % 100 || a % 100 >= 20) ? 1 : 2)
        }, 16: function (a) {
            return Number(a % 10 == 1 && a % 100 != 11 ? 0 : 0 !== a ? 1 : 2)
        }, 17: function (a) {
            return Number(1 == a || a % 10 == 1 ? 0 : 1)
        }, 18: function (a) {
            return Number(1 == a ? 1 : 2)
        }, 19: function (a) {
            return Number(1 == a ? 0 : 0 === a || a % 100 > 1 && 11 > a % 100 ? 1 : a % 100 > 10 && 20 > a % 100 ? 2 : 3)
        }, 20: function (a) {
            return Number(1 == a ? 0 : 0 === a || a % 100 > 0 && 20 > a % 100 ? 1 : 2)
        }, 21: function (a) {
            return Number(a % 100 == 1 ? 1 : a % 100 == 2 ? 2 : a % 100 == 3 || a % 100 == 4 ? 3 : 0)
        }
    }, W = {
        rules: function () {
            var a, b = {};
            for (a = U.length; a--;)b[U[a][0]] = {name: U[a][1], numbers: U[a][2], plurals: V[U[a][3]]};
            return b
        }(), addRule: function (a, b) {
            W.rules[a] = b
        }, setCurrentLng: function (a) {
            if (!W.currentRule || W.currentRule.lng !== a) {
                var b = a.split("-");
                W.currentRule = {lng: a, rule: W.rules[b[0]]}
            }
        }, needsPlural: function (a, b) {
            var c, d = a.split("-");
            return c = W.currentRule && W.currentRule.lng === a ? W.currentRule.rule : W.rules[d[T.getCountyIndexOfLng(a)]], c && c.numbers.length <= 1 ? !1 : 1 !== this.get(a, b)
        }, get: function (a, b) {
            function c(b, c) {
                var d;
                if (d = W.currentRule && W.currentRule.lng === a ? W.currentRule.rule : W.rules[b]) {
                    var e;
                    e = d.plurals(d.noAbs ? c : Math.abs(c));
                    var f = d.numbers[e];
                    return 2 === d.numbers.length && 1 === d.numbers[0] && (2 === f ? f = -1 : 1 === f && (f = 1)), f
                }
                return 1 === c ? "1" : "-1"
            }

            var d = a.split("-");
            return c(d[T.getCountyIndexOfLng(a)], b)
        }
    }, X = {}, Y = function (a, b) {
        X[a] = b
    }, Z = function () {
        function a(a) {
            return Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
        }

        function b(a, b) {
            for (var c = []; b > 0; c[--b] = a);
            return c.join("")
        }

        var c = function () {
            return c.cache.hasOwnProperty(arguments[0]) || (c.cache[arguments[0]] = c.parse(arguments[0])), c.format.call(null, c.cache[arguments[0]], arguments)
        };
        return c.format = function (c, d) {
            var e, f, g, h, i, j, k, l = 1, m = c.length, n = "", o = [];
            for (f = 0; m > f; f++)if (n = a(c[f]), "string" === n)o.push(c[f]); else if ("array" === n) {
                if (h = c[f], h[2])for (e = d[l], g = 0; g < h[2].length; g++) {
                    if (!e.hasOwnProperty(h[2][g]))throw Z('[sprintf] property "%s" does not exist', h[2][g]);
                    e = e[h[2][g]]
                } else e = h[1] ? d[h[1]] : d[l++];
                if (/[^s]/.test(h[8]) && "number" != a(e))throw Z("[sprintf] expecting number but found %s", a(e));
                switch (h[8]) {
                    case"b":
                        e = e.toString(2);
                        break;
                    case"c":
                        e = String.fromCharCode(e);
                        break;
                    case"d":
                        e = parseInt(e, 10);
                        break;
                    case"e":
                        e = h[7] ? e.toExponential(h[7]) : e.toExponential();
                        break;
                    case"f":
                        e = h[7] ? parseFloat(e).toFixed(h[7]) : parseFloat(e);
                        break;
                    case"o":
                        e = e.toString(8);
                        break;
                    case"s":
                        e = (e = String(e)) && h[7] ? e.substring(0, h[7]) : e;
                        break;
                    case"u":
                        e = Math.abs(e);
                        break;
                    case"x":
                        e = e.toString(16);
                        break;
                    case"X":
                        e = e.toString(16).toUpperCase()
                }
                e = /[def]/.test(h[8]) && h[3] && e >= 0 ? "+" + e : e, j = h[4] ? "0" == h[4] ? "0" : h[4].charAt(1) : " ", k = h[6] - String(e).length, i = h[6] ? b(j, k) : "", o.push(h[5] ? e + i : i + e)
            }
            return o.join("")
        }, c.cache = {}, c.parse = function (a) {
            for (var b = a, c = [], d = [], e = 0; b;) {
                if (null !== (c = /^[^\x25]+/.exec(b)))d.push(c[0]); else if (null !== (c = /^\x25{2}/.exec(b)))d.push("%"); else {
                    if (null === (c = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";
                    if (c[2]) {
                        e |= 1;
                        var f = [], g = c[2], h = [];
                        if (null === (h = /^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";
                        for (f.push(h[1]); "" !== (g = g.substring(h[0].length));)if (null !== (h = /^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]); else {
                            if (null === (h = /^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";
                            f.push(h[1])
                        }
                        c[2] = f
                    } else e |= 2;
                    if (3 === e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";
                    d.push(c)
                }
                b = b.substring(c[0].length)
            }
            return d
        }, c
    }(), $ = function (a, b) {
        return b.unshift(a), Z.apply(null, b)
    };
    Y("sprintf", function (a, b, c) {
        return c.sprintf ? "[object Array]" === Object.prototype.toString.apply(c.sprintf) ? $(a, c.sprintf) : "object" == typeof c.sprintf ? Z(a, c.sprintf) : a : a
    }), J.init = g, J.setLng = r, J.preload = h, J.addResourceBundle = i, J.hasResourceBundle = j, J.getResourceBundle = k, J.addResource = m, J.addResources = n, J.removeResourceBundle = l, J.loadNamespace = p, J.loadNamespaces = q, J.setDefaultNamespace = o, J.t = B, J.translate = B, J.exists = A, J.detectLanguage = T.detectLanguage, J.pluralExtensions = W, J.sync = O, J.functions = T, J.lng = s, J.addPostProcessor = Y, J.applyReplacement = T.applyReplacement, J.options = P
}("undefined" == typeof exports ? window : exports);