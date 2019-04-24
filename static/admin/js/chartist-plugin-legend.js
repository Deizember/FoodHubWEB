! function(t, s) {
    "function" == typeof define && define.amd ? define(["chartist"], function(e) {
        return t.returnExportsGlobal = s(e)
    }) : "object" == typeof exports ? module.exports = s(require("chartist")) : t["Chartist.plugins.legend"] = s(t.Chartist)
}(this, function(n) {
    "use strict";
    var t = {
        className: "",
        classNames: !1,
        removeAll: !1,
        legendNames: !1,
        clickable: !0,
        onClick: null,
        position: "top"
    };
    return n.plugins = n.plugins || {}, n.plugins.legend = function(u) {
        function f(e, t) {
            return e - t
        }
        if (u && u.position) {
            if (!("top" === u.position || "bottom" === u.position || u.position instanceof HTMLElement)) throw Error("The position you entered is not a valid position");
            if (u.position instanceof HTMLElement) {
                var e = u.position;
                delete u.position
            }
        }
        return u = n.extend({}, t, u), e && (u.position = e),
            function(l) {
                var e = l.container.querySelector(".ct-legend");
                if (e && e.parentNode.removeChild(e), u.clickable) {
                    var t = l.data.series.map(function(e, t) {
                        return "object" != typeof e && (e = {
                            value: e
                        }), e.className = e.className || l.options.classNames.series + "-" + n.alphaNumerate(t), e
                    });
                    l.data.series = t
                }
                var o = document.createElement("ul"),
                    s = l instanceof n.Pie;
                o.className = "ct-legend", l instanceof n.Pie && o.classList.add("ct-legend-inside"), "string" == typeof u.className && 0 < u.className.length && o.classList.add(u.className), l.options.width && (o.style.cssText = "width: " + l.options.width + "px;margin: 0 auto;");
                var r = [],
                    c = l.data.series.slice(0),
                    i = l.data.series,
                    d = s && l.data.labels && l.data.labels.length;
                if (d) {
                    var p = l.data.labels.slice(0);
                    i = l.data.labels
                }
                i = u.legendNames || i;
                var a = Array.isArray(u.classNames) && u.classNames.length === i.length;
                i.forEach(function(e, t) {
                    var s = document.createElement("li");
                    s.className = "ct-series-" + t, a && (s.className += " " + u.classNames[t]), s.setAttribute("data-legend", t), s.textContent = e.name || e, o.appendChild(s)
                }), l.on("created", function(e) {
                    if (u.position instanceof HTMLElement) u.position.insertBefore(o, null);
                    else switch (u.position) {
                        case "top":
                            l.container.insertBefore(o, l.container.childNodes[0]);
                            break;
                        case "bottom":
                            l.container.insertBefore(o, null)
                    }
                }), u.clickable && o.addEventListener("click", function(e) {
                    var t = e.target;
                    if (t.parentNode === o && t.hasAttribute("data-legend")) {
                        e.preventDefault();
                        var s = parseInt(t.getAttribute("data-legend")),
                            i = r.indexOf(s);
                        if (-1 < i) r.splice(i, 1), t.classList.remove("inactive");
                        else if (u.removeAll) r.push(s), t.classList.add("inactive");
                        else if (1 < l.data.series.length) r.push(s), t.classList.add("inactive");
                        else r = [], Array.prototype.slice.call(o.childNodes).forEach(function(e) {
                            e.classList.remove("inactive")
                        });
                        var a = c.slice(0);
                        if (d) var n = p.slice(0);
                        r.sort(f).reverse(), r.forEach(function(e) {
                            a.splice(e, 1), d && n.splice(e, 1)
                        }), u.onClick && u.onClick(l, e), l.data.series = a, d && (l.data.labels = n), l.update()
                    }
                })
            }
    }, n.plugins.legend
});
