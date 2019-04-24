! function(a) {
    "use strict";

    function b(a, b, c, d, e, f, g) {
        var j, k, l, m, n, o, p, q, h = Math.pow,
            i = Math.sqrt;
        return j = i(h(c - a, 2) + h(d - b, 2)), k = i(h(e - c, 2) + h(f - d, 2)), l = g * j / (j + k), m = g - l, n = c + l * (a - e), o = d + l * (b - f), p = c - m * (a - e), q = d - m * (b - f), [n, o, p, q]
    }

    function d(b, c, d, e, f) {
        var g = a.color.parse(f);
        g.a = "number" == typeof e ? e : .3, g.normalize(), g = g.toString(), c.beginPath(), c.moveTo(b[0][0], b[0][1]);
        for (var h = b.length, i = 0; h > i; i++) c[b[i][3]].apply(c, b[i][2]);
        c.stroke(), c.lineWidth = 0, c.lineTo(b[h - 1][0], d), c.lineTo(b[0][0], d), c.closePath(), e !== !1 && (c.fillStyle = g, c.fill())
    }

    function e(a, b, d, e) {
        (void 0 === b || "bezier" !== b && "quadratic" !== b) && (b = "quadratic"), b += "CurveTo", 0 == c.length ? c.push([d[0], d[1], e.concat(d.slice(2)), b]) : "quadraticCurveTo" == b && 2 == d.length ? (e = e.slice(0, 2).concat(d), c.push([d[0], d[1], e, b])) : c.push([d[2], d[3], e.concat(d.slice(2)), b])
    }

    function f(f, g, h) {
        if (h.splines.show === !0) {
            var k, l, m, i = [],
                j = h.splines.tension || .5,
                n = h.datapoints.points,
                o = h.datapoints.pointsize,
                p = f.getPlotOffset(),
                q = n.length,
                r = [];
            if (c = [], 4 > q / o) return a.extend(h.lines, h.splines), void 0;
            for (k = 0; q > k; k += o) l = n[k], m = n[k + 1], null == l || l < h.xaxis.min || l > h.xaxis.max || m < h.yaxis.min || m > h.yaxis.max || r.push(h.xaxis.p2c(l) + p.left, h.yaxis.p2c(m) + p.top);
            for (q = r.length, k = 0; q - 2 > k; k += 2) i = i.concat(b.apply(this, r.slice(k, k + 6).concat([j])));
            for (g.save(), g.strokeStyle = h.color, g.lineWidth = h.splines.lineWidth, e(g, "quadratic", r.slice(0, 4), i.slice(0, 2)), k = 2; q - 3 > k; k += 2) e(g, "bezier", r.slice(k, k + 4), i.slice(2 * k - 2, 2 * k + 2));
            e(g, "quadratic", r.slice(q - 2, q), [i[2 * q - 10], i[2 * q - 9], r[q - 4], r[q - 3]]), d(c, g, f.height() + 10, h.splines.fill, h.color), g.restore()
        }
    }
    var c = [];
    a.plot.plugins.push({
        init: function(a) {
            a.hooks.drawSeries.push(f)
        },
        options: {
            series: {
                splines: {
                    show: !1,
                    lineWidth: 2,
                    tension: .5,
                    fill: !1
                }
            }
        },
        name: "spline",
        version: "0.8.2"
    })
}(jQuery);