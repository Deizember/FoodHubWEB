/**
 * Minified by jsDelivr using UglifyJS v3.3.22.
 * Original file: /npm/jquery.flot@0.8.3/jquery.flot.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(a) {
    a.color = {}, a.color.make = function(t, i, e, o) {
        var n = {};
        return n.r = t || 0, n.g = i || 0, n.b = e || 0, n.a = null != o ? o : 1, n.add = function(t, i) {
            for (var e = 0; e < t.length; ++e) n[t.charAt(e)] += i;
            return n.normalize()
        }, n.scale = function(t, i) {
            for (var e = 0; e < t.length; ++e) n[t.charAt(e)] *= i;
            return n.normalize()
        }, n.toString = function() {
            return 1 <= n.a ? "rgb(" + [n.r, n.g, n.b].join(",") + ")" : "rgba(" + [n.r, n.g, n.b, n.a].join(",") + ")"
        }, n.normalize = function() {
            function t(t, i, e) {
                return i < t ? t : e < i ? e : i
            }
            return n.r = t(0, parseInt(n.r), 255), n.g = t(0, parseInt(n.g), 255), n.b = t(0, parseInt(n.b), 255), n.a = t(0, n.a, 1), n
        }, n.clone = function() {
            return a.color.make(n.r, n.b, n.g, n.a)
        }, n.normalize()
    }, a.color.extract = function(t, i) {
        var e;
        do {
            if ("" != (e = t.css(i).toLowerCase()) && "transparent" != e) break;
            t = t.parent()
        } while (t.length && !a.nodeName(t.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == e && (e = "transparent"), a.color.parse(e)
    }, a.color.parse = function(t) {
        var i, e = a.color.make;
        if (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) return e(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
        if (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t)) return e(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4]));
        if (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) return e(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]));
        if (i = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t)) return e(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]), parseFloat(i[4]));
        if (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) return e(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16));
        if (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) return e(parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16));
        var o = a.trim(t).toLowerCase();
        return "transparent" == o ? e(255, 255, 255, 0) : e((i = n[o] || [0, 0, 0])[0], i[1], i[2])
    };
    var n = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function(q) {
    var d = Object.prototype.hasOwnProperty;

    function Q(t, i) {
        var e = i.children("." + t)[0];
        if (null == e && ((e = document.createElement("canvas")).className = t, q(e).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(i), !e.getContext)) {
            if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            e = window.G_vmlCanvasManager.initElement(e)
        }
        this.element = e;
        var o = this.context = e.getContext("2d"),
            n = window.devicePixelRatio || 1,
            a = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
        this.pixelRatio = n / a, this.resize(i.width(), i.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function o(x, t, i, o) {
        var C = [],
            S = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {
                    redrawOverlayInterval: 1e3 / 60
                },
                hooks: {}
            },
            d = null,
            e = null,
            h = null,
            y = null,
            c = null,
            p = [],
            m = [],
            w = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            M = 0,
            T = 0,
            W = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            z = this;

        function I(t, i) {
            i = [z].concat(i);
            for (var e = 0; e < t.length; ++e) t[e].apply(this, i)
        }

        function n(t) {
            C = function(t) {
                    for (var i = [], e = 0; e < t.length; ++e) {
                        var o = q.extend(!0, {}, S.series);
                        null != t[e].data ? (o.data = t[e].data, delete t[e].data, q.extend(!0, o, t[e]), t[e].data = o.data) : o.data = t[e], i.push(o)
                    }
                    return i
                }(t),
                function() {
                    var t, i = C.length,
                        e = -1;
                    for (t = 0; t < C.length; ++t) {
                        var o = C[t].color;
                        null != o && (i--, "number" == typeof o && e < o && (e = o))
                    }
                    i <= e && (i = e + 1);
                    var n, a = [],
                        r = S.colors,
                        l = r.length,
                        s = 0;
                    for (t = 0; t < i; t++) n = q.color.parse(r[t % l] || "#666"), t % l == 0 && t && (s = 0 <= s ? s < .5 ? -s - .2 : 0 : -s), a[t] = n.scale("rgb", 1 + s);
                    var c, h = 0;
                    for (t = 0; t < C.length; ++t) {
                        if (null == (c = C[t]).color ? (c.color = a[h].toString(), ++h) : "number" == typeof c.color && (c.color = a[c.color].toString()), null == c.lines.show) {
                            var f, u = !0;
                            for (f in c)
                                if (c[f] && c[f].show) {
                                    u = !1;
                                    break
                                } u && (c.lines.show = !0)
                        }
                        null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = b(p, g(c, "x")), c.yaxis = b(m, g(c, "y"))
                    }
                }(),
                function() {
                    var t, i, e, o, n, a, r, l, s, c, h, f, u = Number.POSITIVE_INFINITY,
                        d = Number.NEGATIVE_INFINITY,
                        p = Number.MAX_VALUE;

                    function m(t, i, e) {
                        i < t.datamin && i != -p && (t.datamin = i), e > t.datamax && e != p && (t.datamax = e)
                    }
                    for (q.each(A(), function(t, i) {
                            i.datamin = u, i.datamax = d, i.used = !1
                        }), t = 0; t < C.length; ++t)(n = C[t]).datapoints = {
                        points: []
                    }, I(W.processRawData, [n, n.data, n.datapoints]);
                    for (t = 0; t < C.length; ++t) {
                        if (n = C[t], h = n.data, !(f = n.datapoints.format)) {
                            if ((f = []).push({
                                    x: !0,
                                    number: !0,
                                    required: !0
                                }), f.push({
                                    y: !0,
                                    number: !0,
                                    required: !0
                                }), n.bars.show || n.lines.show && n.lines.fill) {
                                var x = !!(n.bars.show && n.bars.zero || n.lines.show && n.lines.zero);
                                f.push({
                                    y: !0,
                                    number: !0,
                                    required: !1,
                                    defaultValue: 0,
                                    autoscale: x
                                }), n.bars.horizontal && (delete f[f.length - 1].y, f[f.length - 1].x = !0)
                            }
                            n.datapoints.format = f
                        }
                        if (null == n.datapoints.pointsize) {
                            n.datapoints.pointsize = f.length, r = n.datapoints.pointsize, a = n.datapoints.points;
                            var g = n.lines.show && n.lines.steps;
                            for (n.xaxis.used = n.yaxis.used = !0, i = e = 0; i < h.length; ++i, e += r) {
                                var b = null == (c = h[i]);
                                if (!b)
                                    for (o = 0; o < r; ++o) l = c[o], (s = f[o]) && (s.number && null != l && (l = +l, isNaN(l) ? l = null : l == 1 / 0 ? l = p : l == -1 / 0 && (l = -p)), null == l && (s.required && (b = !0), null != s.defaultValue && (l = s.defaultValue))), a[e + o] = l;
                                if (b)
                                    for (o = 0; o < r; ++o) null != (l = a[e + o]) && !1 !== (s = f[o]).autoscale && (s.x && m(n.xaxis, l, l), s.y && m(n.yaxis, l, l)), a[e + o] = null;
                                else if (g && 0 < e && null != a[e - r] && a[e - r] != a[e] && a[e - r + 1] != a[e + 1]) {
                                    for (o = 0; o < r; ++o) a[e + r + o] = a[e + o];
                                    a[e + 1] = a[e - r + 1], e += r
                                }
                            }
                        }
                    }
                    for (t = 0; t < C.length; ++t) n = C[t], I(W.processDatapoints, [n, n.datapoints]);
                    for (t = 0; t < C.length; ++t) {
                        n = C[t], a = n.datapoints.points, r = n.datapoints.pointsize, f = n.datapoints.format;
                        var v = u,
                            k = u,
                            y = d,
                            w = d;
                        for (i = 0; i < a.length; i += r)
                            if (null != a[i])
                                for (o = 0; o < r; ++o) l = a[i + o], (s = f[o]) && !1 !== s.autoscale && l != p && l != -p && (s.x && (l < v && (v = l), y < l && (y = l)), s.y && (l < k && (k = l), w < l && (w = l)));
                        if (n.bars.show) {
                            var M;
                            switch (n.bars.align) {
                                case "left":
                                    M = 0;
                                    break;
                                case "right":
                                    M = -n.bars.barWidth;
                                    break;
                                default:
                                    M = -n.bars.barWidth / 2
                            }
                            n.bars.horizontal ? (k += M, w += M + n.bars.barWidth) : (v += M, y += M + n.bars.barWidth)
                        }
                        m(n.xaxis, v, y), m(n.yaxis, k, w)
                    }
                    q.each(A(), function(t, i) {
                        i.datamin == u && (i.datamin = null), i.datamax == d && (i.datamax = null)
                    })
                }()
        }

        function g(t, i) {
            var e = t[i + "axis"];
            return "object" == typeof e && (e = e.n), "number" != typeof e && (e = 1), e
        }

        function A() {
            return q.grep(p.concat(m), function(t) {
                return t
            })
        }

        function f(t) {
            var i, e, o = {};
            for (i = 0; i < p.length; ++i)(e = p[i]) && e.used && (o["x" + e.n] = e.c2p(t.left));
            for (i = 0; i < m.length; ++i)(e = m[i]) && e.used && (o["y" + e.n] = e.c2p(t.top));
            return void 0 !== o.x1 && (o.x = o.x1), void 0 !== o.y1 && (o.y = o.y1), o
        }

        function b(t, i) {
            return t[i - 1] || (t[i - 1] = {
                n: i,
                direction: t == p ? "x" : "y",
                options: q.extend(!0, {}, t == p ? S.xaxis : S.yaxis)
            }), t[i - 1]
        }

        function a() {
            D && clearTimeout(D), h.unbind("mousemove", L), h.unbind("mouseleave", O), h.unbind("click", R), I(W.shutdown, [h])
        }

        function r(e) {
            var t = e.labelWidth,
                i = e.labelHeight,
                o = e.options.position,
                n = "x" === e.direction,
                a = e.options.tickLength,
                r = S.grid.axisMargin,
                l = S.grid.labelMargin,
                s = !0,
                c = !0,
                h = !0,
                f = !1;
            q.each(n ? p : m, function(t, i) {
                i && (i.show || i.reserveSpace) && (i === e ? f = !0 : i.options.position === o && (f ? c = !1 : s = !1), f || (h = !1))
            }), c && (r = 0), null == a && (a = h ? "full" : 5), isNaN(+a) || (l += +a), n ? (i += l, "bottom" == o ? (w.bottom += i + r, e.box = {
                top: d.height - w.bottom,
                height: i
            }) : (e.box = {
                top: w.top + r,
                height: i
            }, w.top += i + r)) : (t += l, "left" == o ? (e.box = {
                left: w.left + r,
                width: t
            }, w.left += t + r) : (w.right += t + r, e.box = {
                left: d.width - w.right,
                width: t
            })), e.position = o, e.tickLength = a, e.box.padding = l, e.innermost = s
        }

        function l() {
            var t, i = A(),
                e = S.grid.show;
            for (var o in w) {
                var n = S.grid.margin || 0;
                w[o] = "number" == typeof n ? n : n[o] || 0
            }
            for (var o in I(W.processOffset, [w]), w) "object" == typeof S.grid.borderWidth ? w[o] += e ? S.grid.borderWidth[o] : 0 : w[o] += e ? S.grid.borderWidth : 0;
            if (q.each(i, function(t, i) {
                    var e = i.options;
                    i.show = null == e.show ? i.used : e.show, i.reserveSpace = null == e.reserveSpace ? i.show : e.reserveSpace,
                        function(t) {
                            var i = t.options,
                                e = +(null != i.min ? i.min : t.datamin),
                                o = +(null != i.max ? i.max : t.datamax),
                                n = o - e;
                            if (0 == n) {
                                var a = 0 == o ? 1 : .01;
                                null == i.min && (e -= a), null != i.max && null == i.min || (o += a)
                            } else {
                                var r = i.autoscaleMargin;
                                null != r && (null == i.min && (e -= n * r) < 0 && null != t.datamin && 0 <= t.datamin && (e = 0), null == i.max && 0 < (o += n * r) && null != t.datamax && t.datamax <= 0 && (o = 0))
                            }
                            t.min = e, t.max = o
                        }(i)
                }), e) {
                var a = q.grep(i, function(t) {
                    return t.show || t.reserveSpace
                });
                for (q.each(a, function(t, i) {
                        var e, o;
                        ! function(t) {
                            var i, e = t.options;
                            i = "number" == typeof e.ticks && 0 < e.ticks ? e.ticks : .3 * Math.sqrt("x" == t.direction ? d.width : d.height);
                            var o = (t.max - t.min) / i,
                                n = -Math.floor(Math.log(o) / Math.LN10),
                                a = e.tickDecimals;
                            null != a && a < n && (n = a);
                            var r, l = Math.pow(10, -n),
                                s = o / l;
                            s < 1.5 ? r = 1 : s < 3 ? (r = 2, 2.25 < s && (null == a || n + 1 <= a) && (r = 2.5, ++n)) : r = s < 7.5 ? 5 : 10;
                            r *= l, null != e.minTickSize && r < e.minTickSize && (r = e.minTickSize);
                            if (t.delta = o, t.tickDecimals = Math.max(0, null != a ? a : n), t.tickSize = e.tickSize || r, "time" == e.mode && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                            t.tickGenerator || (t.tickGenerator = function(t) {
                                for (var i, e, o, n = [], a = (e = t.min, (o = t.tickSize) * Math.floor(e / o)), r = 0, l = Number.NaN; i = l, l = a + r * t.tickSize, n.push(l), ++r, l < t.max && l != i;);
                                return n
                            }, t.tickFormatter = function(t, i) {
                                var e = i.tickDecimals ? Math.pow(10, i.tickDecimals) : 1,
                                    o = "" + Math.round(t * e) / e;
                                if (null != i.tickDecimals) {
                                    var n = o.indexOf("."),
                                        a = -1 == n ? 0 : o.length - n - 1;
                                    if (a < i.tickDecimals) return (a ? o : o + ".") + ("" + e).substr(1, i.tickDecimals - a)
                                }
                                return o
                            });
                            q.isFunction(e.tickFormatter) && (t.tickFormatter = function(t, i) {
                                return "" + e.tickFormatter(t, i)
                            });
                            if (null != e.alignTicksWithAxis) {
                                var c = ("x" == t.direction ? p : m)[e.alignTicksWithAxis - 1];
                                if (c && c.used && c != t) {
                                    var h = t.tickGenerator(t);
                                    if (0 < h.length && (null == e.min && (t.min = Math.min(t.min, h[0])), null == e.max && 1 < h.length && (t.max = Math.max(t.max, h[h.length - 1]))), t.tickGenerator = function(t) {
                                            var i, e, o = [];
                                            for (e = 0; e < c.ticks.length; ++e) i = (c.ticks[e].v - c.min) / (c.max - c.min), i = t.min + i * (t.max - t.min), o.push(i);
                                            return o
                                        }, !t.mode && null == e.tickDecimals) {
                                        var f = Math.max(0, 1 - Math.floor(Math.log(t.delta) / Math.LN10)),
                                            u = t.tickGenerator(t);
                                        1 < u.length && /\..*0$/.test((u[1] - u[0]).toFixed(f)) || (t.tickDecimals = f)
                                    }
                                }
                            }
                        }(i),
                        function(t) {
                            var i, e, o = t.options.ticks,
                                n = [];
                            null == o || "number" == typeof o && 0 < o ? n = t.tickGenerator(t) : o && (n = q.isFunction(o) ? o(t) : o);
                            for (t.ticks = [], i = 0; i < n.length; ++i) {
                                var a = null,
                                    r = n[i];
                                "object" == typeof r ? (e = +r[0], 1 < r.length && (a = r[1])) : e = +r, null == a && (a = t.tickFormatter(e, t)), isNaN(e) || t.ticks.push({
                                    v: e,
                                    label: a
                                })
                            }
                        }(i), o = (e = i).ticks, e.options.autoscaleMargin && 0 < o.length && (null == e.options.min && (e.min = Math.min(e.min, o[0].v)), null == e.options.max && 1 < o.length && (e.max = Math.max(e.max, o[o.length - 1].v))),
                            function(t) {
                                for (var i = t.options, e = t.ticks || [], o = i.labelWidth || 0, n = i.labelHeight || 0, a = o || ("x" == t.direction ? Math.floor(d.width / (e.length || 1)) : null), r = t.direction + "Axis " + t.direction + t.n + "Axis", l = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + r, s = i.font || "flot-tick-label tickLabel", c = 0; c < e.length; ++c) {
                                    var h = e[c];
                                    if (h.label) {
                                        var f = d.getTextInfo(l, h.label, s, null, a);
                                        o = Math.max(o, f.width), n = Math.max(n, f.height)
                                    }
                                }
                                t.labelWidth = i.labelWidth || o, t.labelHeight = i.labelHeight || n
                            }(i)
                    }), t = a.length - 1; 0 <= t; --t) r(a[t]);
                ! function() {
                    var t, i = S.grid.minBorderMargin;
                    if (null == i)
                        for (t = i = 0; t < C.length; ++t) i = Math.max(i, 2 * (C[t].points.radius + C[t].points.lineWidth / 2));
                    var e = {
                        left: i,
                        right: i,
                        top: i,
                        bottom: i
                    };
                    q.each(A(), function(t, i) {
                        i.reserveSpace && i.ticks && i.ticks.length && ("x" === i.direction ? (e.left = Math.max(e.left, i.labelWidth / 2), e.right = Math.max(e.right, i.labelWidth / 2)) : (e.bottom = Math.max(e.bottom, i.labelHeight / 2), e.top = Math.max(e.top, i.labelHeight / 2)))
                    }), w.left = Math.ceil(Math.max(e.left, w.left)), w.right = Math.ceil(Math.max(e.right, w.right)), w.top = Math.ceil(Math.max(e.top, w.top)), w.bottom = Math.ceil(Math.max(e.bottom, w.bottom))
                }(), q.each(a, function(t, i) {
                    var e;
                    "x" == (e = i).direction ? (e.box.left = w.left - e.labelWidth / 2, e.box.width = d.width - w.left - w.right + e.labelWidth) : (e.box.top = w.top - e.labelHeight / 2, e.box.height = d.height - w.bottom - w.top + e.labelHeight)
                })
            }
            M = d.width - w.left - w.right, T = d.height - w.bottom - w.top, q.each(i, function(t, i) {
                    ! function(t) {
                        function i(t) {
                            return t
                        }
                        var e, o, n = t.options.transform || i,
                            a = t.options.inverseTransform;
                        "x" == t.direction ? (e = t.scale = M / Math.abs(n(t.max) - n(t.min)), o = Math.min(n(t.max), n(t.min))) : (e = -(e = t.scale = T / Math.abs(n(t.max) - n(t.min))), o = Math.max(n(t.max), n(t.min))), t.p2c = n == i ? function(t) {
                            return (t - o) * e
                        } : function(t) {
                            return (n(t) - o) * e
                        }, t.c2p = a ? function(t) {
                            return a(o + t / e)
                        } : function(t) {
                            return o + t / e
                        }
                    }(i)
                }), e && q.each(A(), function(t, i) {
                    var e, o, n, a, r, l = i.box,
                        s = i.direction + "Axis " + i.direction + i.n + "Axis",
                        c = "flot-" + i.direction + "-axis flot-" + i.direction + i.n + "-axis " + s,
                        h = i.options.font || "flot-tick-label tickLabel";
                    if (d.removeText(c), i.show && 0 != i.ticks.length)
                        for (var f = 0; f < i.ticks.length; ++f) !(e = i.ticks[f]).label || e.v < i.min || e.v > i.max || ("x" == i.direction ? (a = "center", o = w.left + i.p2c(e.v), "bottom" == i.position ? n = l.top + l.padding : (n = l.top + l.height - l.padding, r = "bottom")) : (r = "middle", n = w.top + i.p2c(e.v), "left" == i.position ? (o = l.left + l.width - l.padding, a = "right") : o = l.left + l.padding), d.addText(c, o, n, e.label, h, null, null, a, r))
                }),
                function() {
                    null != S.legend.container ? q(S.legend.container).html("") : x.find(".legend").remove();
                    if (!S.legend.show) return;
                    for (var t, i, e = [], o = [], n = !1, a = S.legend.labelFormatter, r = 0; r < C.length; ++r)(t = C[r]).label && (i = a ? a(t.label, t) : t.label) && o.push({
                        label: i,
                        color: t.color
                    });
                    if (S.legend.sorted)
                        if (q.isFunction(S.legend.sorted)) o.sort(S.legend.sorted);
                        else if ("reverse" == S.legend.sorted) o.reverse();
                    else {
                        var l = "descending" != S.legend.sorted;
                        o.sort(function(t, i) {
                            return t.label == i.label ? 0 : t.label < i.label != l ? 1 : -1
                        })
                    }
                    for (var r = 0; r < o.length; ++r) {
                        var s = o[r];
                        r % S.legend.noColumns == 0 && (n && e.push("</tr>"), e.push("<tr>"), n = !0), e.push('<td class="legendColorBox"><div style="border:1px solid ' + S.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + s.label + "</td>")
                    }
                    n && e.push("</tr>");
                    if (0 == e.length) return;
                    var c = '<table style="font-size:smaller;color:' + S.grid.color + '">' + e.join("") + "</table>";
                    if (null != S.legend.container) q(S.legend.container).html(c);
                    else {
                        var h = "",
                            f = S.legend.position,
                            u = S.legend.margin;
                        null == u[0] && (u = [u, u]), "n" == f.charAt(0) ? h += "top:" + (u[1] + w.top) + "px;" : "s" == f.charAt(0) && (h += "bottom:" + (u[1] + w.bottom) + "px;"), "e" == f.charAt(1) ? h += "right:" + (u[0] + w.right) + "px;" : "w" == f.charAt(1) && (h += "left:" + (u[0] + w.left) + "px;");
                        var d = q('<div class="legend">' + c.replace('style="', 'style="position:absolute;' + h + ";") + "</div>").appendTo(x);
                        if (0 != S.legend.backgroundOpacity) {
                            var p = S.legend.backgroundColor;
                            null == p && ((p = (p = S.grid.backgroundColor) && "string" == typeof p ? q.color.parse(p) : q.color.extract(d, "background-color")).a = 1, p = p.toString());
                            var m = d.children();
                            q('<div style="position:absolute;width:' + m.width() + "px;height:" + m.height() + "px;" + h + "background-color:" + p + ';"> </div>').prependTo(d).css("opacity", S.legend.backgroundOpacity)
                        }
                    }
                }()
        }

        function s() {
            d.clear(), I(W.drawBackground, [y]);
            var t = S.grid;
            t.show && t.backgroundColor && (y.save(), y.translate(w.left, w.top), y.fillStyle = Y(S.grid.backgroundColor, T, 0, "rgba(255, 255, 255, 0)"), y.fillRect(0, 0, M, T), y.restore()), t.show && !t.aboveData && u();
            for (var i = 0; i < C.length; ++i) I(W.drawSeries, [y, C[i]]), v(C[i]);
            I(W.draw, [y]), t.show && t.aboveData && u(), d.render(), j()
        }

        function F(t, i) {
            for (var e, o, n, a, r = A(), l = 0; l < r.length; ++l)
                if ((e = r[l]).direction == i && (t[a = i + e.n + "axis"] || 1 != e.n || (a = i + "axis"), t[a])) {
                    o = t[a].from, n = t[a].to;
                    break
                } if (t[a] || (e = "x" == i ? p[0] : m[0], o = t[i + "1"], n = t[i + "2"]), null != o && null != n && n < o) {
                var s = o;
                o = n, n = s
            }
            return {
                from: o,
                to: n,
                axis: e
            }
        }

        function u() {
            var t, i, e, o;
            y.save(), y.translate(w.left, w.top);
            var n = S.grid.markings;
            if (n)
                for (q.isFunction(n) && ((i = z.getAxes()).xmin = i.xaxis.min, i.xmax = i.xaxis.max, i.ymin = i.yaxis.min, i.ymax = i.yaxis.max, n = n(i)), t = 0; t < n.length; ++t) {
                    var a = n[t],
                        r = F(a, "x"),
                        l = F(a, "y");
                    if (null == r.from && (r.from = r.axis.min), null == r.to && (r.to = r.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), !(r.to < r.axis.min || r.from > r.axis.max || l.to < l.axis.min || l.from > l.axis.max)) {
                        r.from = Math.max(r.from, r.axis.min), r.to = Math.min(r.to, r.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max);
                        var s = r.from === r.to,
                            c = l.from === l.to;
                        if (!s || !c)
                            if (r.from = Math.floor(r.axis.p2c(r.from)), r.to = Math.floor(r.axis.p2c(r.to)), l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), s || c) {
                                var h = a.lineWidth || S.grid.markingsLineWidth,
                                    f = h % 2 ? .5 : 0;
                                y.beginPath(), y.strokeStyle = a.color || S.grid.markingsColor, y.lineWidth = h, s ? (y.moveTo(r.to + f, l.from), y.lineTo(r.to + f, l.to)) : (y.moveTo(r.from, l.to + f), y.lineTo(r.to, l.to + f)), y.stroke()
                            } else y.fillStyle = a.color || S.grid.markingsColor, y.fillRect(r.from, l.to, r.to - r.from, l.from - l.to)
                    }
                }
            i = A(), e = S.grid.borderWidth;
            for (var u = 0; u < i.length; ++u) {
                var d, p, m, x, g = i[u],
                    b = g.box,
                    v = g.tickLength;
                if (g.show && 0 != g.ticks.length) {
                    for (y.lineWidth = 1, "x" == g.direction ? (d = 0, p = "full" == v ? "top" == g.position ? 0 : T : b.top - w.top + ("top" == g.position ? b.height : 0)) : (p = 0, d = "full" == v ? "left" == g.position ? 0 : M : b.left - w.left + ("left" == g.position ? b.width : 0)), g.innermost || (y.strokeStyle = g.options.color, y.beginPath(), m = x = 0, "x" == g.direction ? m = M + 1 : x = T + 1, 1 == y.lineWidth && ("x" == g.direction ? p = Math.floor(p) + .5 : d = Math.floor(d) + .5), y.moveTo(d, p), y.lineTo(d + m, p + x), y.stroke()), y.strokeStyle = g.options.tickColor, y.beginPath(), t = 0; t < g.ticks.length; ++t) {
                        var k = g.ticks[t].v;
                        m = x = 0, isNaN(k) || k < g.min || k > g.max || "full" == v && ("object" == typeof e && 0 < e[g.position] || 0 < e) && (k == g.min || k == g.max) || ("x" == g.direction ? (d = g.p2c(k), x = "full" == v ? -T : v, "top" == g.position && (x = -x)) : (p = g.p2c(k), m = "full" == v ? -M : v, "left" == g.position && (m = -m)), 1 == y.lineWidth && ("x" == g.direction ? d = Math.floor(d) + .5 : p = Math.floor(p) + .5), y.moveTo(d, p), y.lineTo(d + m, p + x))
                    }
                    y.stroke()
                }
            }
            e && (o = S.grid.borderColor, "object" == typeof e || "object" == typeof o ? ("object" != typeof e && (e = {
                top: e,
                right: e,
                bottom: e,
                left: e
            }), "object" != typeof o && (o = {
                top: o,
                right: o,
                bottom: o,
                left: o
            }), 0 < e.top && (y.strokeStyle = o.top, y.lineWidth = e.top, y.beginPath(), y.moveTo(0 - e.left, 0 - e.top / 2), y.lineTo(M, 0 - e.top / 2), y.stroke()), 0 < e.right && (y.strokeStyle = o.right, y.lineWidth = e.right, y.beginPath(), y.moveTo(M + e.right / 2, 0 - e.top), y.lineTo(M + e.right / 2, T), y.stroke()), 0 < e.bottom && (y.strokeStyle = o.bottom, y.lineWidth = e.bottom, y.beginPath(), y.moveTo(M + e.right, T + e.bottom / 2), y.lineTo(0, T + e.bottom / 2), y.stroke()), 0 < e.left && (y.strokeStyle = o.left, y.lineWidth = e.left, y.beginPath(), y.moveTo(0 - e.left / 2, T + e.bottom), y.lineTo(0 - e.left / 2, 0), y.stroke())) : (y.lineWidth = e, y.strokeStyle = S.grid.borderColor, y.strokeRect(-e / 2, -e / 2, M + e, T + e))), y.restore()
        }

        function v(t) {
            t.lines.show && function(t) {
                function i(t, i, e, o, n) {
                    var a = t.points,
                        r = t.pointsize,
                        l = null,
                        s = null;
                    y.beginPath();
                    for (var c = r; c < a.length; c += r) {
                        var h = a[c - r],
                            f = a[c - r + 1],
                            u = a[c],
                            d = a[c + 1];
                        if (null != h && null != u) {
                            if (f <= d && f < n.min) {
                                if (d < n.min) continue;
                                h = (n.min - f) / (d - f) * (u - h) + h, f = n.min
                            } else if (d <= f && d < n.min) {
                                if (f < n.min) continue;
                                u = (n.min - f) / (d - f) * (u - h) + h, d = n.min
                            }
                            if (d <= f && f > n.max) {
                                if (d > n.max) continue;
                                h = (n.max - f) / (d - f) * (u - h) + h, f = n.max
                            } else if (f <= d && d > n.max) {
                                if (f > n.max) continue;
                                u = (n.max - f) / (d - f) * (u - h) + h, d = n.max
                            }
                            if (h <= u && h < o.min) {
                                if (u < o.min) continue;
                                f = (o.min - h) / (u - h) * (d - f) + f, h = o.min
                            } else if (u <= h && u < o.min) {
                                if (h < o.min) continue;
                                d = (o.min - h) / (u - h) * (d - f) + f, u = o.min
                            }
                            if (u <= h && h > o.max) {
                                if (u > o.max) continue;
                                f = (o.max - h) / (u - h) * (d - f) + f, h = o.max
                            } else if (h <= u && u > o.max) {
                                if (h > o.max) continue;
                                d = (o.max - h) / (u - h) * (d - f) + f, u = o.max
                            }
                            h == l && f == s || y.moveTo(o.p2c(h) + i, n.p2c(f) + e), l = u, s = d, y.lineTo(o.p2c(u) + i, n.p2c(d) + e)
                        }
                    }
                    y.stroke()
                }
                y.save(), y.translate(w.left, w.top), y.lineJoin = "round";
                var e = t.lines.lineWidth,
                    o = t.shadowSize;
                if (0 < e && 0 < o) {
                    y.lineWidth = o, y.strokeStyle = "rgba(0,0,0,0.1)";
                    var n = Math.PI / 18;
                    i(t.datapoints, Math.sin(n) * (e / 2 + o / 2), Math.cos(n) * (e / 2 + o / 2), t.xaxis, t.yaxis), y.lineWidth = o / 2, i(t.datapoints, Math.sin(n) * (e / 2 + o / 4), Math.cos(n) * (e / 2 + o / 4), t.xaxis, t.yaxis)
                }
                y.lineWidth = e, y.strokeStyle = t.color;
                var a = P(t.lines, t.color, 0, T);
                a && (y.fillStyle = a, function(t, i, e) {
                    var o = t.points,
                        n = t.pointsize,
                        a = Math.min(Math.max(0, e.min), e.max),
                        r = 0,
                        l = !1,
                        s = 1,
                        c = 0,
                        h = 0;
                    for (; !(0 < n && r > o.length + n);) {
                        var f = o[(r += n) - n],
                            u = o[r - n + s],
                            d = o[r],
                            p = o[r + s];
                        if (l) {
                            if (0 < n && null != f && null == d) {
                                h = r, n = -n, s = 2;
                                continue
                            }
                            if (n < 0 && r == c + n) {
                                y.fill(), l = !1, s = 1, r = c = h + (n = -n);
                                continue
                            }
                        }
                        if (null != f && null != d) {
                            if (f <= d && f < i.min) {
                                if (d < i.min) continue;
                                u = (i.min - f) / (d - f) * (p - u) + u, f = i.min
                            } else if (d <= f && d < i.min) {
                                if (f < i.min) continue;
                                p = (i.min - f) / (d - f) * (p - u) + u, d = i.min
                            }
                            if (d <= f && f > i.max) {
                                if (d > i.max) continue;
                                u = (i.max - f) / (d - f) * (p - u) + u, f = i.max
                            } else if (f <= d && d > i.max) {
                                if (f > i.max) continue;
                                p = (i.max - f) / (d - f) * (p - u) + u, d = i.max
                            }
                            if (l || (y.beginPath(), y.moveTo(i.p2c(f), e.p2c(a)), l = !0), u >= e.max && p >= e.max) y.lineTo(i.p2c(f), e.p2c(e.max)), y.lineTo(i.p2c(d), e.p2c(e.max));
                            else if (u <= e.min && p <= e.min) y.lineTo(i.p2c(f), e.p2c(e.min)), y.lineTo(i.p2c(d), e.p2c(e.min));
                            else {
                                var m = f,
                                    x = d;
                                u <= p && u < e.min && p >= e.min ? (f = (e.min - u) / (p - u) * (d - f) + f, u = e.min) : p <= u && p < e.min && u >= e.min && (d = (e.min - u) / (p - u) * (d - f) + f, p = e.min), p <= u && u > e.max && p <= e.max ? (f = (e.max - u) / (p - u) * (d - f) + f, u = e.max) : u <= p && p > e.max && u <= e.max && (d = (e.max - u) / (p - u) * (d - f) + f, p = e.max), f != m && y.lineTo(i.p2c(m), e.p2c(u)), y.lineTo(i.p2c(f), e.p2c(u)), y.lineTo(i.p2c(d), e.p2c(p)), d != x && (y.lineTo(i.p2c(d), e.p2c(p)), y.lineTo(i.p2c(x), e.p2c(p)))
                            }
                        }
                    }
                }(t.datapoints, t.xaxis, t.yaxis));
                0 < e && i(t.datapoints, 0, 0, t.xaxis, t.yaxis);
                y.restore()
            }(t), t.bars.show && function(c) {
                var t;
                switch (y.save(), y.translate(w.left, w.top), y.lineWidth = c.bars.lineWidth, y.strokeStyle = c.color, c.bars.align) {
                    case "left":
                        t = 0;
                        break;
                    case "right":
                        t = -c.bars.barWidth;
                        break;
                    default:
                        t = -c.bars.barWidth / 2
                }
                var i = c.bars.fill ? function(t, i) {
                    return P(c.bars, c.color, t, i)
                } : null;
                (function(t, i, e, o, n, a) {
                    for (var r = t.points, l = t.pointsize, s = 0; s < r.length; s += l) null != r[s] && k(r[s], r[s + 1], r[s + 2], i, e, o, n, a, y, c.bars.horizontal, c.bars.lineWidth)
                })(c.datapoints, t, t + c.bars.barWidth, i, c.xaxis, c.yaxis), y.restore()
            }(t), t.points.show && function(t) {
                function i(t, i, e, o, n, a, r, l) {
                    for (var s = t.points, c = t.pointsize, h = 0; h < s.length; h += c) {
                        var f = s[h],
                            u = s[h + 1];
                        null == f || f < a.min || f > a.max || u < r.min || u > r.max || (y.beginPath(), f = a.p2c(f), u = r.p2c(u) + o, "circle" == l ? y.arc(f, u, i, 0, n ? Math.PI : 2 * Math.PI, !1) : l(y, f, u, i, n), y.closePath(), e && (y.fillStyle = e, y.fill()), y.stroke())
                    }
                }
                y.save(), y.translate(w.left, w.top);
                var e = t.points.lineWidth,
                    o = t.shadowSize,
                    n = t.points.radius,
                    a = t.points.symbol;
                0 == e && (e = 1e-4);
                if (0 < e && 0 < o) {
                    var r = o / 2;
                    y.lineWidth = r, y.strokeStyle = "rgba(0,0,0,0.1)", i(t.datapoints, n, null, r + r / 2, !0, t.xaxis, t.yaxis, a), y.strokeStyle = "rgba(0,0,0,0.2)", i(t.datapoints, n, null, r / 2, !0, t.xaxis, t.yaxis, a)
                }
                y.lineWidth = e, y.strokeStyle = t.color, i(t.datapoints, n, P(t.points, t.color), 0, !1, t.xaxis, t.yaxis, a), y.restore()
            }(t)
        }

        function k(t, i, e, o, n, a, r, l, s, c, h) {
            var f, u, d, p, m, x, g, b, v;
            c ? (b = x = g = !0, m = !1, p = i + o, d = i + n, (u = t) < (f = e) && (v = u, u = f, f = v, x = !(m = !0))) : (m = x = g = !0, b = !1, f = t + o, u = t + n, (p = i) < (d = e) && (v = p, p = d, d = v, g = !(b = !0))), u < r.min || f > r.max || p < l.min || d > l.max || (f < r.min && (f = r.min, m = !1), u > r.max && (u = r.max, x = !1), d < l.min && (d = l.min, b = !1), p > l.max && (p = l.max, g = !1), f = r.p2c(f), d = l.p2c(d), u = r.p2c(u), p = l.p2c(p), a && (s.fillStyle = a(d, p), s.fillRect(f, p, u - f, d - p)), 0 < h && (m || x || g || b) && (s.beginPath(), s.moveTo(f, d), m ? s.lineTo(f, p) : s.moveTo(f, p), g ? s.lineTo(u, p) : s.moveTo(u, p), x ? s.lineTo(u, d) : s.moveTo(u, d), b ? s.lineTo(f, d) : s.moveTo(f, d), s.stroke()))
        }

        function P(t, i, e, o) {
            var n = t.fill;
            if (!n) return null;
            if (t.fillColor) return Y(t.fillColor, e, o, i);
            var a = q.color.parse(i);
            return a.a = "number" == typeof n ? n : .4, a.normalize(), a.toString()
        }
        z.setData = n, z.setupGrid = l, z.draw = s, z.getPlaceholder = function() {
                return x
            }, z.getCanvas = function() {
                return d.element
            }, z.getPlotOffset = function() {
                return w
            }, z.width = function() {
                return M
            }, z.height = function() {
                return T
            }, z.offset = function() {
                var t = h.offset();
                return t.left += w.left, t.top += w.top, t
            }, z.getData = function() {
                return C
            }, z.getAxes = function() {
                var e = {};
                return q.each(p.concat(m), function(t, i) {
                    i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i)
                }), e
            }, z.getXAxes = function() {
                return p
            }, z.getYAxes = function() {
                return m
            }, z.c2p = f, z.p2c = function(t) {
                var i, e, o, n = {};
                for (i = 0; i < p.length; ++i)
                    if ((e = p[i]) && e.used && (o = "x" + e.n, null == t[o] && 1 == e.n && (o = "x"), null != t[o])) {
                        n.left = e.p2c(t[o]);
                        break
                    } for (i = 0; i < m.length; ++i)
                    if ((e = m[i]) && e.used && (o = "y" + e.n, null == t[o] && 1 == e.n && (o = "y"), null != t[o])) {
                        n.top = e.p2c(t[o]);
                        break
                    } return n
            }, z.getOptions = function() {
                return S
            }, z.highlight = B, z.unhighlight = G, z.triggerRedrawOverlay = j, z.pointOffset = function(t) {
                return {
                    left: parseInt(p[g(t, "x") - 1].p2c(+t.x) + w.left, 10),
                    top: parseInt(m[g(t, "y") - 1].p2c(+t.y) + w.top, 10)
                }
            }, z.shutdown = a, z.destroy = function() {
                a(), x.removeData("plot").empty(), C = [], p = [], m = [], N = [], z = W = c = y = h = e = d = S = null
            }, z.resize = function() {
                var t = x.width(),
                    i = x.height();
                d.resize(t, i), e.resize(t, i)
            }, z.hooks = W,
            function() {
                for (var t = {
                        Canvas: Q
                    }, i = 0; i < o.length; ++i) {
                    var e = o[i];
                    e.init(z, t), e.options && q.extend(!0, S, e.options)
                }
            }(),
            function(t) {
                q.extend(!0, S, t), t && t.colors && (S.colors = t.colors);
                null == S.xaxis.color && (S.xaxis.color = q.color.parse(S.grid.color).scale("a", .22).toString());
                null == S.yaxis.color && (S.yaxis.color = q.color.parse(S.grid.color).scale("a", .22).toString());
                null == S.xaxis.tickColor && (S.xaxis.tickColor = S.grid.tickColor || S.xaxis.color);
                null == S.yaxis.tickColor && (S.yaxis.tickColor = S.grid.tickColor || S.yaxis.color);
                null == S.grid.borderColor && (S.grid.borderColor = S.grid.color);
                null == S.grid.tickColor && (S.grid.tickColor = q.color.parse(S.grid.color).scale("a", .22).toString());
                var i, e, o, n = x.css("font-size"),
                    a = n ? +n.replace("px", "") : 13,
                    r = {
                        style: x.css("font-style"),
                        size: Math.round(.8 * a),
                        variant: x.css("font-variant"),
                        weight: x.css("font-weight"),
                        family: x.css("font-family")
                    };
                for (o = S.xaxes.length || 1, i = 0; i < o; ++i)(e = S.xaxes[i]) && !e.tickColor && (e.tickColor = e.color), e = q.extend(!0, {}, S.xaxis, e), (S.xaxes[i] = e).font && (e.font = q.extend({}, r, e.font), e.font.color || (e.font.color = e.color), e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
                for (o = S.yaxes.length || 1, i = 0; i < o; ++i)(e = S.yaxes[i]) && !e.tickColor && (e.tickColor = e.color), e = q.extend(!0, {}, S.yaxis, e), (S.yaxes[i] = e).font && (e.font = q.extend({}, r, e.font), e.font.color || (e.font.color = e.color), e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
                S.xaxis.noTicks && null == S.xaxis.ticks && (S.xaxis.ticks = S.xaxis.noTicks);
                S.yaxis.noTicks && null == S.yaxis.ticks && (S.yaxis.ticks = S.yaxis.noTicks);
                S.x2axis && (S.xaxes[1] = q.extend(!0, {}, S.xaxis, S.x2axis), S.xaxes[1].position = "top", null == S.x2axis.min && (S.xaxes[1].min = null), null == S.x2axis.max && (S.xaxes[1].max = null));
                S.y2axis && (S.yaxes[1] = q.extend(!0, {}, S.yaxis, S.y2axis), S.yaxes[1].position = "right", null == S.y2axis.min && (S.yaxes[1].min = null), null == S.y2axis.max && (S.yaxes[1].max = null));
                S.grid.coloredAreas && (S.grid.markings = S.grid.coloredAreas);
                S.grid.coloredAreasColor && (S.grid.markingsColor = S.grid.coloredAreasColor);
                S.lines && q.extend(!0, S.series.lines, S.lines);
                S.points && q.extend(!0, S.series.points, S.points);
                S.bars && q.extend(!0, S.series.bars, S.bars);
                null != S.shadowSize && (S.series.shadowSize = S.shadowSize);
                null != S.highlightColor && (S.series.highlightColor = S.highlightColor);
                for (i = 0; i < S.xaxes.length; ++i) b(p, i + 1).options = S.xaxes[i];
                for (i = 0; i < S.yaxes.length; ++i) b(m, i + 1).options = S.yaxes[i];
                for (var l in W) S.hooks[l] && S.hooks[l].length && (W[l] = W[l].concat(S.hooks[l]));
                I(W.processOptions, [S])
            }(i),
            function() {
                x.css("padding", 0).children().filter(function() {
                    return !q(this).hasClass("flot-overlay") && !q(this).hasClass("flot-base")
                }).remove(), "static" == x.css("position") && x.css("position", "relative");
                d = new Q("flot-base", x), e = new Q("flot-overlay", x), y = d.context, c = e.context, h = q(e.element).unbind();
                var t = x.data("plot");
                t && (t.shutdown(), e.clear());
                x.data("plot", z)
            }(), n(t), l(), s(),
            function() {
                S.grid.hoverable && (h.mousemove(L), h.bind("mouseleave", O));
                S.grid.clickable && h.click(R);
                I(W.bindEvents, [h])
            }();
        var N = [],
            D = null;

        function L(t) {
            S.grid.hoverable && H("plothover", t, function(t) {
                return 0 != t.hoverable
            })
        }

        function O(t) {
            S.grid.hoverable && H("plothover", t, function(t) {
                return !1
            })
        }

        function R(t) {
            H("plotclick", t, function(t) {
                return 0 != t.clickable
            })
        }

        function H(t, i, e) {
            var o = h.offset(),
                n = i.pageX - o.left - w.left,
                a = i.pageY - o.top - w.top,
                r = f({
                    left: n,
                    top: a
                });
            r.pageX = i.pageX, r.pageY = i.pageY;
            var l = function(t, i, e) {
                var o, n, a, r = S.grid.mouseActiveRadius,
                    l = r * r + 1,
                    s = null;
                for (o = C.length - 1; 0 <= o; --o)
                    if (e(C[o])) {
                        var c = C[o],
                            h = c.xaxis,
                            f = c.yaxis,
                            u = c.datapoints.points,
                            d = h.c2p(t),
                            p = f.c2p(i),
                            m = r / h.scale,
                            x = r / f.scale;
                        if (a = c.datapoints.pointsize, h.options.inverseTransform && (m = Number.MAX_VALUE), f.options.inverseTransform && (x = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (n = 0; n < u.length; n += a) {
                                var g = u[n],
                                    b = u[n + 1];
                                if (null != g && !(m < g - d || g - d < -m || x < b - p || b - p < -x)) {
                                    var v = Math.abs(h.p2c(g) - t),
                                        k = Math.abs(f.p2c(b) - i),
                                        y = v * v + k * k;
                                    y < l && (l = y, s = [o, n / a])
                                }
                            }
                        if (c.bars.show && !s) {
                            var w, M;
                            switch (c.bars.align) {
                                case "left":
                                    w = 0;
                                    break;
                                case "right":
                                    w = -c.bars.barWidth;
                                    break;
                                default:
                                    w = -c.bars.barWidth / 2
                            }
                            for (M = w + c.bars.barWidth, n = 0; n < u.length; n += a) {
                                g = u[n], b = u[n + 1];
                                var T = u[n + 2];
                                null != g && (C[o].bars.horizontal ? d <= Math.max(T, g) && d >= Math.min(T, g) && b + w <= p && p <= b + M : g + w <= d && d <= g + M && p >= Math.min(T, b) && p <= Math.max(T, b)) && (s = [o, n / a])
                            }
                        }
                    } return s ? (o = s[0], n = s[1], a = C[o].datapoints.pointsize, {
                    datapoint: C[o].datapoints.points.slice(n * a, (n + 1) * a),
                    dataIndex: n,
                    series: C[o],
                    seriesIndex: o
                }) : null
            }(n, a, e);
            if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + o.left + w.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + o.top + w.top, 10)), S.grid.autoHighlight) {
                for (var s = 0; s < N.length; ++s) {
                    var c = N[s];
                    c.auto != t || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || G(c.series, c.point)
                }
                l && B(l.series, l.datapoint, t)
            }
            x.trigger(t, [r, l])
        }

        function j() {
            var t = S.interaction.redrawOverlayInterval; - 1 != t ? D || (D = setTimeout(E, t)) : E()
        }

        function E() {
            var t, i;
            for (D = null, c.save(), e.clear(), c.translate(w.left, w.top), t = 0; t < N.length; ++t)(i = N[t]).series.bars.show ? X(i.series, i.point) : V(i.series, i.point);
            c.restore(), I(W.drawOverlay, [c])
        }

        function B(t, i, e) {
            if ("number" == typeof t && (t = C[t]), "number" == typeof i) {
                var o = t.datapoints.pointsize;
                i = t.datapoints.points.slice(o * i, o * (i + 1))
            }
            var n = _(t, i); - 1 == n ? (N.push({
                series: t,
                point: i,
                auto: e
            }), j()) : e || (N[n].auto = !1)
        }

        function G(t, i) {
            if (null == t && null == i) return N = [], void j();
            if ("number" == typeof t && (t = C[t]), "number" == typeof i) {
                var e = t.datapoints.pointsize;
                i = t.datapoints.points.slice(e * i, e * (i + 1))
            }
            var o = _(t, i); - 1 != o && (N.splice(o, 1), j())
        }

        function _(t, i) {
            for (var e = 0; e < N.length; ++e) {
                var o = N[e];
                if (o.series == t && o.point[0] == i[0] && o.point[1] == i[1]) return e
            }
            return -1
        }

        function V(t, i) {
            var e = i[0],
                o = i[1],
                n = t.xaxis,
                a = t.yaxis,
                r = "string" == typeof t.highlightColor ? t.highlightColor : q.color.parse(t.color).scale("a", .5).toString();
            if (!(e < n.min || e > n.max || o < a.min || o > a.max)) {
                var l = t.points.radius + t.points.lineWidth / 2;
                c.lineWidth = l, c.strokeStyle = r;
                var s = 1.5 * l;
                e = n.p2c(e), o = a.p2c(o), c.beginPath(), "circle" == t.points.symbol ? c.arc(e, o, s, 0, 2 * Math.PI, !1) : t.points.symbol(c, e, o, s, !1), c.closePath(), c.stroke()
            }
        }

        function X(t, i) {
            var e, o = "string" == typeof t.highlightColor ? t.highlightColor : q.color.parse(t.color).scale("a", .5).toString(),
                n = o;
            switch (t.bars.align) {
                case "left":
                    e = 0;
                    break;
                case "right":
                    e = -t.bars.barWidth;
                    break;
                default:
                    e = -t.bars.barWidth / 2
            }
            c.lineWidth = t.bars.lineWidth, c.strokeStyle = o, k(i[0], i[1], i[2] || 0, e, e + t.bars.barWidth, function() {
                return n
            }, t.xaxis, t.yaxis, c, t.bars.horizontal, t.bars.lineWidth)
        }

        function Y(t, i, e, o) {
            if ("string" == typeof t) return t;
            for (var n = y.createLinearGradient(0, e, 0, i), a = 0, r = t.colors.length; a < r; ++a) {
                var l = t.colors[a];
                if ("string" != typeof l) {
                    var s = q.color.parse(o);
                    null != l.brightness && (s = s.scale("rgb", l.brightness)), null != l.opacity && (s.a *= l.opacity), l = s.toString()
                }
                n.addColorStop(a / (r - 1), l)
            }
            return n
        }
    }
    q.fn.detach || (q.fn.detach = function() {
        return this.each(function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }), Q.prototype.resize = function(t, i) {
        if (t <= 0 || i <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + i);
        var e = this.element,
            o = this.context,
            n = this.pixelRatio;
        this.width != t && (e.width = t * n, e.style.width = t + "px", this.width = t), this.height != i && (e.height = i * n, e.style.height = i + "px", this.height = i), o.restore(), o.save(), o.scale(n, n)
    }, Q.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height)
    }, Q.prototype.render = function() {
        var t = this._textCache;
        for (var i in t)
            if (d.call(t, i)) {
                var e = this.getTextLayer(i),
                    o = t[i];
                for (var n in e.hide(), o)
                    if (d.call(o, n)) {
                        var a = o[n];
                        for (var r in a)
                            if (d.call(a, r)) {
                                for (var l, s = a[r].positions, c = 0; l = s[c]; c++) l.active ? l.rendered || (e.append(l.element), l.rendered = !0) : (s.splice(c--, 1), l.rendered && l.element.detach());
                                0 == s.length && delete a[r]
                            }
                    } e.show()
            }
    }, Q.prototype.getTextLayer = function(t) {
        var i = this.text[t];
        return null == i && (null == this.textContainer && (this.textContainer = q("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), i = this.text[t] = q("<div></div>").addClass(t).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), i
    }, Q.prototype.getTextInfo = function(t, i, e, o, n) {
        var a, r, l, s;
        if (i = "" + i, a = "object" == typeof e ? e.style + " " + e.variant + " " + e.weight + " " + e.size + "px/" + e.lineHeight + "px " + e.family : e, null == (r = this._textCache[t]) && (r = this._textCache[t] = {}), null == (l = r[a]) && (l = r[a] = {}), null == (s = l[i])) {
            var c = q("<div></div>").html(i).css({
                position: "absolute",
                "max-width": n,
                top: -9999
            }).appendTo(this.getTextLayer(t));
            "object" == typeof e ? c.css({
                font: a,
                color: e.color
            }) : "string" == typeof e && c.addClass(e), s = l[i] = {
                width: c.outerWidth(!0),
                height: c.outerHeight(!0),
                element: c,
                positions: []
            }, c.detach()
        }
        return s
    }, Q.prototype.addText = function(t, i, e, o, n, a, r, l, s) {
        var c = this.getTextInfo(t, o, n, a, r),
            h = c.positions;
        "center" == l ? i -= c.width / 2 : "right" == l && (i -= c.width), "middle" == s ? e -= c.height / 2 : "bottom" == s && (e -= c.height);
        for (var f, u = 0; f = h[u]; u++)
            if (f.x == i && f.y == e) return void(f.active = !0);
        f = {
            active: !0,
            rendered: !1,
            element: h.length ? c.element.clone() : c.element,
            x: i,
            y: e
        }, h.push(f), f.element.css({
            top: Math.round(e),
            left: Math.round(i),
            "text-align": l
        })
    }, Q.prototype.removeText = function(t, i, e, o, n, a) {
        if (null == o) {
            var r = this._textCache[t];
            if (null != r)
                for (var l in r)
                    if (d.call(r, l)) {
                        var s = r[l];
                        for (var c in s)
                            if (d.call(s, c))
                                for (var h = s[c].positions, f = 0; u = h[f]; f++) u.active = !1
                    }
        } else {
            var u;
            for (h = this.getTextInfo(t, o, n, a).positions, f = 0; u = h[f]; f++) u.x == i && u.y == e && (u.active = !1)
        }
    }, q.plot = function(t, i, e) {
        return new o(q(t), i, e, q.plot.plugins)
    }, q.plot.version = "0.8.3", q.plot.plugins = [], q.fn.plot = function(t, i) {
        return this.each(function() {
            q.plot(this, t, i)
        })
    }
}(jQuery);
