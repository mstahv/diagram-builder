YUI.add("charts-base", function (e, t) {
    function f() {
    }

    function l(t) {
        return t.type !== "pie" ? new e.CartesianChart(t) : new e.PieChart(t)
    }

    var n = e.config, r = n.win, i = n.doc, s = e.Lang, o = s.isString, u = e.ClassNameManager.getClassName,
        a = u("seriesmarker");
    e.Gridlines = e.Base.create("gridlines", e.Base, [e.Renderer], {
        _path: null, remove: function () {
            var e = this._path;
            e && e.destroy()
        }, draw: function () {
            this.get("axis") && this.get("graph") && this._drawGridlines()
        }, _drawGridlines: function () {
            var t, n = this.get("axis"), r = n.get("position"), i, s = 0, o, u = this.get("direction"),
                a = this.get("graph"), f = a.get("width"), l = a.get("height"), c = this.get("styles").line,
                h = c.color, p = c.weight, d = c.alpha, v = this.get("count"), m, g;
            if (isFinite(f) && isFinite(l) && f > 0 && l > 0) {
                v && e.Lang.isNumber(v) ? i = this._getPoints(v, f, l) : r !== "none" && n && n.get("tickPoints") ? i =
                    n.get("tickPoints") : i = this._getPoints(n.get("styles").majorUnit.count, f, l), o = i.length, t =
                    a.get("gridlines"), t.set("width", f), t.set("height", l), t.set("stroke", {
                    weight: p,
                    color: h,
                    opacity: d
                }), u === "vertical" ? (g = this._verticalLine, m = l) : (g = this._horizontalLine, m = f);
                for (s = 0; s < o; s += 1) {
                    g(t, i[s], m);
                }
                t.end()
            }
        }, _getPoints: function (e, t, n) {
            var r, i = [], s, o = e - 1;
            for (r = 0; r < e; r += 1) {
                s = r / o, i[r] = {x: t * s, y: n * s};
            }
            return i
        }, _horizontalLine: function (e, t, n) {
            e.moveTo(0, t.y), e.lineTo(n, t.y)
        }, _verticalLine: function (e, t, n) {
            e.moveTo(t.x, 0), e.lineTo(t.x, n)
        }, _getDefaultStyles: function () {
            var e = {line: {color: "#f0efe9", weight: 1, alpha: 1}};
            return e
        }
    }, {ATTRS: {direction: {}, axis: {}, graph: {}, count: {}}}), e.Graph =
        e.Base.create("graph", e.Widget, [e.Renderer], {
            bindUI: function () {
                var e = this.get("boundingBox");
                e.setStyle("position", "absolute"), this.after("widthChange", this._sizeChangeHandler), this.after(
                    "heightChange", this._sizeChangeHandler), this.after("stylesChange",
                                                                         this._updateStyles), this.after(
                    "groupMarkersChange", this._drawSeries)
            },
            syncUI: function () {
                var t, n, r, i = this.get("seriesCollection"), s, o = 0, u = i ? i.length : 0,
                    a = this.get("horizontalGridlines"), f = this.get("verticalGridlines");
                this.get("showBackground") && (t = this.get("background"), n = this.get("contentBox"), r =
                    this.get("styles").background, r.stroke = r.border, r.stroke.opacity =
                    r.stroke.alpha, r.fill.opacity = r.fill.alpha, r.width = this.get("width"), r.height =
                    this.get("height"), r.type = r.shape, t.set(r));
                for (; o < u; ++o) {
                    s = i[o], s instanceof e.SeriesBase && s.render();
                }
                a && a instanceof e.Gridlines && a.draw(), f && f instanceof e.Gridlines && f.draw()
            },
            seriesTypes: null,
            getSeriesByIndex: function (e) {
                var t = this.get("seriesCollection"), n;
                return t && t.length > e && (n = t[e]), n
            },
            getSeriesByKey: function (e) {
                var t = this._seriesDictionary, n;
                return t && t.hasOwnProperty(e) && (n = t[e]), n
            },
            addDispatcher: function (e) {
                this._dispatchers || (this._dispatchers = []), this._dispatchers.push(e)
            },
            _seriesCollection: null,
            _seriesDictionary: null,
            _parseSeriesCollection: function (t) {
                if (!t) {
                    return;
                }
                var n = t.length, r = 0, i, s;
                this._seriesCollection = [], this._seriesDictionary = {}, this.seriesTypes = [];
                for (; r < n; ++r) {
                    i = t[r];
                    if (!(i instanceof e.CartesianSeries || i instanceof e.PieSeries)) {
                        this._createSeries(i);
                        continue
                    }
                    this._addSeries(i)
                }
                n = this._seriesCollection.length;
                for (r = 0; r < n; ++r) {
                    i = this.get("seriesCollection")[r], s =
                        i.get("direction") === "horizontal" ? "yKey" : "xKey", this._seriesDictionary[i.get(s)] = i
                }
            },
            _addSeries: function (t) {
                var n = t.get("type"), r = this.get("seriesCollection"), i = r.length, s = this.seriesTypes, o;
                t.get("graph") || t.set("graph", this), r.push(t), s.hasOwnProperty(n) || (this.seriesTypes[n] =
                    []), o = this.seriesTypes[n], t.set("graphOrder", i), t.set("order", o.length), o.push(t), t.set(
                    "seriesTypeCollection", o), this.addDispatcher(t), t.after("drawingComplete",
                                                                               e.bind(this._drawingCompleteHandler,
                                                                                      this)), this.fire("seriesAdded",
                                                                                                        t)
            },
            _createSeries: function (t) {
                var n = t.type, r = this.get("seriesCollection"), i = this.seriesTypes, s, o, u;
                t.graph = this, i.hasOwnProperty(n) || (i[n] = []), s = i[n], t.graph = this, t.order =
                    s.length, t.graphOrder = r.length, o = this._getSeries(t.type), u = new o(t), this.addDispatcher(
                    u), u.after("drawingComplete", e.bind(this._drawingCompleteHandler, this)), s.push(u), r.push(
                    u), u.set("seriesTypeCollection", s), this.get("rendered") && u.render()
            },
            _seriesMap: {
                line: e.LineSeries,
                column: e.ColumnSeries,
                bar: e.BarSeries,
                area: e.AreaSeries,
                candlestick: e.CandlestickSeries,
                ohlc: e.OHLCSeries,
                stackedarea: e.StackedAreaSeries,
                stackedline: e.StackedLineSeries,
                stackedcolumn: e.StackedColumnSeries,
                stackedbar: e.StackedBarSeries,
                markerseries: e.MarkerSeries,
                spline: e.SplineSeries,
                areaspline: e.AreaSplineSeries,
                stackedspline: e.StackedSplineSeries,
                stackedareaspline: e.StackedAreaSplineSeries,
                stackedmarkerseries: e.StackedMarkerSeries,
                pie: e.PieSeries,
                combo: e.ComboSeries,
                stackedcombo: e.StackedComboSeries,
                combospline: e.ComboSplineSeries,
                stackedcombospline: e.StackedComboSplineSeries
            },
            _getSeries: function (e) {
                var t;
                return s.isString(e) ? t = this._seriesMap[e] : t = e, t
            },
            _markerEventHandler: function (e) {
                var t = e.type, n = e.currentTarget, r = n.getAttribute("id").split("_"),
                    i = this.getSeriesByIndex(r[1]), s = r[2];
                i.updateMarkerState(t, s)
            },
            _dispatchers: null,
            _updateStyles: function () {
                var e = this.get("styles").background, t = e.border;
                t.opacity = t.alpha, e.stroke = t, e.fill.opacity = e.fill.alpha, this.get("background")
                    .set(e), this._sizeChangeHandler()
            },
            _sizeChangeHandler: function () {
                var t = this.get("horizontalGridlines"), n = this.get("verticalGridlines"), r = this.get("width"),
                    i = this.get("height"), s = this.get("styles").background, o, u;
                s && s.border && (o = s.border.weight || 0), this.get("showBackground") && (u =
                    this.get("background"), r && i && (u.set("width", r), u.set("height", i))), this._gridlines
                                                                                                && this._gridlines.clear(), t
                                                                                                                            && t
                                                                                                                               instanceof e.Gridlines
                                                                                                                            && t.draw(), n
                                                                                                                                         && n
                                                                                                                                            instanceof e.Gridlines
                                                                                                                                         && n.draw(), this._drawSeries()
            },
            _drawSeries: function () {
                if (this._drawing) {
                    this._callLater = !0;
                    return
                }
                var t, n, r, i = this.get("graphic");
                i.set("autoDraw", !1), i.set("width", this.get("width")), i.set("height",
                                                                                this.get("height")), this._callLater =
                    !1, this._drawing = !0, t = this.get("seriesCollection"), n = 0, r = t ? t.length : 0;
                for (; n < r; ++n) {
                    t[n].draw();
                    if ((!t[n].get("xcoords") || !t[n].get("ycoords")) && !t[n] instanceof e.PieSeries) {
                        this._callLater = !0;
                        break
                    }
                }
                this._drawing = !1, this._callLater && this._drawSeries()
            },
            _drawingCompleteHandler: function (t) {
                var n = t.currentTarget
                    , r, i = e.Array.indexOf(this._dispatchers, n);
                i > -1 && this._dispatchers.splice(i, 1), this._dispatchers.length < 1 && (r =
                    this.get("graphic"), r.get("autoDraw") || r._redraw(), this.fire("chartRendered"))
            },
            _getDefaultStyles: function () {
                var e = {background: {shape: "rect", fill: {color: "#faf9f2"}, border: {color: "#dad8c9", weight: 1}}};
                return e
            },
            destructor: function () {
                this._graphic && (this._graphic.destroy(), this._graphic = null), this._background
                                                                                  && (this._background.get("graphic")
                    .destroy(), this._background = null), this._gridlines && (this._gridlines.get("graphic")
                    .destroy(), this._gridlines = null)
            }
        }, {
                          ATTRS: {
                              x: {
                                  setter: function (e) {
                                      return this.get("boundingBox").setStyle("left", e + "px"), e
                                  }
                              }, y: {
                                  setter: function (e) {
                                      return this.get("boundingBox").setStyle("top", e + "px"), e
                                  }
                              }, chart: {
                                  getter: function () {
                                      var e = this._state.chart || this;
                                      return e
                                  }
                              }, seriesCollection: {
                                  getter: function () {
                                      return this._seriesCollection
                                  }, setter: function (e) {
                                      return this._parseSeriesCollection(e), this._seriesCollection
                                  }
                              }, showBackground: {value: !0}, seriesDictionary: {
                                  readOnly: !0, getter: function () {
                                      return this._seriesDictionary
                                  }
                              }, horizontalGridlines: {
                                  value: null, setter: function (t) {
                                      var n, r, i = this.get("horizontalGridlines");
                                      i && i instanceof e.Gridlines && i.remove();
                                      if (t instanceof e.Gridlines) {
                                          return i = t, t.set("graph", this), t;
                                      }
                                      if (t) {
                                          n = {direction: "horizonal", graph: this};
                                          for (r in t) {
                                              t.hasOwnProperty(r) && (n[r] = t[r]);
                                          }
                                          return i = new e.Gridlines(n), i
                                      }
                                  }
                              }, verticalGridlines: {
                                  value: null, setter: function (t) {
                                      var n, r, i = this.get("verticalGridlines");
                                      i && i instanceof e.Gridlines && i.remove();
                                      if (t instanceof e.Gridlines) {
                                          return i = t, t.set("graph", this), t;
                                      }
                                      if (t) {
                                          n = {direction: "vertical", graph: this};
                                          for (r in t) {
                                              t.hasOwnProperty(r) && (n[r] = t[r]);
                                          }
                                          return i = new e.Gridlines(n), i
                                      }
                                  }
                              }, background: {
                                  getter: function () {
                                      return this._background || (this._backgroundGraphic =
                                          new e.Graphic({render: this.get("contentBox")}), this._backgroundGraphic.get(
                                          "node").style.zIndex = 0, this._background =
                                          this._backgroundGraphic.addShape({type: "rect"})), this._background
                                  }
                              }, gridlines: {
                                  readOnly: !0, getter: function () {
                                      return this._gridlines || (this._gridlinesGraphic =
                                          new e.Graphic({render: this.get("contentBox")}), this._gridlinesGraphic.get(
                                          "node").style.zIndex = 1, this._gridlines =
                                          this._gridlinesGraphic.addShape({type: "path"})), this._gridlines
                                  }
                              }, graphic: {
                                  readOnly: !0, getter: function () {
                                      return this._graphic || (this._graphic =
                                          new e.Graphic({render: this.get("contentBox")}), this._graphic.get(
                                          "node").style.zIndex =
                                          2, this._graphic.set("autoDraw", !1)), this._graphic
                                  }
                              }, groupMarkers: {value: !1}
                          }
                      }), f.ATTRS = {
        dataProvider: {
            lazyAdd: !1, valueFn: function () {
                var e = [];
                return this._wereSeriesKeysExplicitlySet() || this.set("seriesKeys", this._buildSeriesKeys(e),
                                                                       {src: "internal"}), e
            }, setter: function (e) {
                var t = this._setDataValues(e);
                return this._wereSeriesKeysExplicitlySet() || this.set("seriesKeys", this._buildSeriesKeys(t),
                                                                       {src: "internal"}), t
            }
        },
        seriesKeys: {
            lazyAdd: !1, setter: function (e) {
                var t = arguments[2];
                return !e || t && t.src && t.src === "internal" ? this._seriesKeysExplicitlySet = !1
                                                                : this._seriesKeysExplicitlySet = !0, e
            }
        },
        ariaLabel: {
            value: "Chart Application", setter: function (e) {
                var t = this.get("contentBox");
                return t && t.setAttribute("aria-label", e), e
            }
        },
        ariaDescription: {
            value: "Use the up and down keys to navigate between series. Use the left and right keys to navigate through items in a series.",
            setter: function (e) {
                return this._description && this._description.set("text", e), e
            }
        },
        tooltip: {
            valueFn: "_getTooltip", setter: function (e) {
                return this._updateTooltip(e)
            }
        },
        categoryKey: {value: "category"},
        categoryType: {value: "category"},
        interactionType: {value: "marker"},
        axesCollection: {},
        graph: {valueFn: "_getGraph"},
        groupMarkers: {value: !1}
    }, f.prototype = {
        _wereSeriesKeysExplicitlySet: function () {
            var e = this.get("seriesKeys");
            return e && this._seriesKeysExplicitlySet
        },
        _groupMarkersChangeHandler: function (e) {
            var t = this.get("graph"), n = e.newVal;
            t && t.set("groupMarkers", n)
        },
        _itemRendered: function (t) {
            this._itemRenderQueue =
                this._itemRenderQueue.splice(1 + e.Array.indexOf(this._itemRenderQueue, t.currentTarget),
                    1), this._itemRenderQueue.length < 1 && this._redraw()
        },
        _getGraph: function () {
            var t = new e.Graph({chart: this, groupMarkers: this.get("groupMarkers")});
            return t.after("chartRendered", e.bind(function () {
                this.fire("chartRendered")
            }, this)), t
        },
        getSeries: function (e) {
            var t = null, n = this.get("graph");
            return n && (s.isNumber(e) ? t = n.getSeriesByIndex(e) : t = n.getSeriesByKey(e)), t
        },
        getAxisByKey: function (e) {
            var t, n = this.get("axes");
            return n && n.hasOwnProperty(e) && (t = n[e]), t
        },
        getCategoryAxis: function () {
            var e, t = this.get("categoryKey"), n = this.get("axes");
            return n.hasOwnProperty(t) && (e = n[t]), e
        },
        _direction: "horizontal",
        _dataProvider: null,
        _setDataValues: function (e) {
            if (s.isArray(e[0])) {
                var t, n = [], r = e[0], i = 0, o = r.length, u, a = e.length;
                for (; i < o; ++i) {
                    t = {category: r[i]};
                    for (u = 1; u < a; ++u) {
                        t["series" + u] = e[u][i];
                    }
                    n[i] = t
                }
                return n
            }
            return e
        },
        _seriesCollection: null,
        _setSeriesCollection: function (e) {
            this._seriesCollection = e
        },
        _getAxisClass: function (e) {
            return this._axisClass[e]
        },
        _axisClass: {stacked: e.StackedAxis, numeric: e.NumericAxis, category: e.CategoryAxis, time: e.TimeAxis},
        _axes: null,
        initializer: function () {
            this._itemRenderQueue = [], this._seriesIndex = -1, this._itemIndex = -1, this.after("dataProviderChange",
                                                                                                 this._dataProviderChangeHandler)
        },
        renderUI: function () {
            var e = this.get("tooltip"), t = this.get("boundingBox"), n = this.get("contentBox");
            t.setStyle("position", "absolute"), n.setStyle("position",
                                                           "absolute"), this._addAxes(), this._addSeries(), e && e.show
                                                                                                            && this._addTooltip(), this._setAriaElements(
                t, n)
        },
        _setAriaElements: function (e, t) {
            var n = this._getAriaOffscreenNode(), r = this.get("id") + "_description", i = this._getAriaOffscreenNode();
            t.set("tabIndex", 0), t.set("role", "img"), t.setAttribute("aria-label",
                                                                       this.get("ariaLabel")), t.setAttribute(
                "aria-describedby", r), n.set("id", r), n.set("tabIndex", -1), n.set("text", this.get(
                "ariaDescription")), i.set("id", "live-region"), i.set("aria-live", "polite"), i.set("aria-atomic",
                                                                                                     "true"), i.set(
                "role", "status"), e.setAttribute("role", "application"), e.appendChild(n), e.appendChild(
                i), this._description = n, this._liveRegion = i
        },
        _getAriaOffscreenNode: function () {
            var t = e.Node.create("<div></div>"), n = e.UA.ie,
                r = n && n < 8 ? "rect(1px 1px 1px 1px)" : "rect(1px, 1px, 1px, 1px)";
            return t.setStyle("position", "absolute"), t.setStyle("height", "1px"), t.setStyle("width",
                                                                                               "1px"), t.setStyle(
                "overflow", "hidden"), t.setStyle("clip", r), t
        },
        syncUI: function () {
            this._redraw()
        },
        bindUI: function () {
            this.after("tooltipChange", e.bind(this._tooltipChangeHandler, this)), this.after("widthChange",
                                                                                              this._sizeChanged), this.after(
                "heightChange", this._sizeChanged), this.after("groupMarkersChange", this._groupMarkersChangeHandler);
            var t = this.get("tooltip"), n = "mouseout", i = "mouseover", o = this.get("contentBox"),
                u = this.get("interactionType"), f = 0, l, c = "." + a,
                h = r && "ontouchstart" in r && !(e.UA.chrome && e.UA.chrome < 6);
            e.on("keydown", e.bind(function (e) {
                var t = e.keyCode, n = parseFloat(t), r;
                n > 36 && n < 41 && (e.halt(), r = this._getAriaMessage(n), this._liveRegion.set("text", r))
            }, this), this.get("contentBox")), u === "marker" ? (n = t.hideEvent, i = t.showEvent, h ? (e.delegate(
                "touchend", e.bind(this._markerEventDispatcher, this), o, c), e.on("touchend", e.bind(function (e) {
                o.contains(e.target) && e.halt(!0), this._activeMarker && (this._activeMarker = null, this.hideTooltip(
                    e))
            }, this))) : (e.delegate("mouseenter", e.bind(this._markerEventDispatcher, this), o, c), e.delegate(
                "mousedown", e.bind(this._markerEventDispatcher, this), o, c), e.delegate("mouseup", e.bind(
                this._markerEventDispatcher, this), o, c), e.delegate("mouseleave",
                                                                      e.bind(this._markerEventDispatcher, this), o,
                                                                      c), e.delegate("click",
                                                                                     e.bind(this._markerEventDispatcher,
                                                                                            this), o, c), e.delegate(
                "mousemove", e.bind(this._positionTooltip, this), o, c))) : u === "planar" && (h ? this._overlay.on(
                "touchend", e.bind(this._planarEventDispatcher, this)) : (this._overlay.on("mousemove", e.bind(
                this._planarEventDispatcher, this)), this.on("mouseout", this.hideTooltip)));
            if (t) {
                this.on("markerEvent:touchend", e.bind(function (e) {
                    var n = e.series.get("markers")[e.index];
                    this._activeMarker && n === this._activeMarker ? (this._activeMarker = null, this.hideTooltip(e))
                                                                   : (this._activeMarker =
                                                                       n, t.markerEventHandler.apply(this, [e]))
                }, this));
                if (n && i && n === i) {
                    this.on(u + "Event:" + n, this.toggleTooltip);
                } else {
                    i && this.on(u + "Event:" + i, t[u + "EventHandler"]);
                    if (n) {
                        if (s.isArray(n)) {
                            l = n.length;
                            for (; f < l; ++f) {
                                this.on(u + "Event:" + n[f], this.hideTooltip)
                            }
                        }
                        this.on(u + "Event:" + n, this.hideTooltip)
                    }
                }
            }
        },
        _markerEventDispatcher: function (e) {
            var t = e.type, n = this.get("contentBox"), r = e.currentTarget, i = r.getAttribute("id").split("_"),
                s = i.pop(), o = i.pop(), u = this.getSeries(parseInt(o, 10)), a = this.getSeriesItems(u, s),
                f = e && e.hasOwnProperty("changedTouches"), l = f ? e.changedTouches[0].pageX : e.pageX,
                c = f ? e.changedTouches[0].pageY : e.pageY, h = l - n.getX(), p = c - n.getY();
            t === "mouseenter" ? t = "mouseover" : t === "mouseleave" && (t = "mouseout"), u.updateMarkerState(t,
                                                                                                               s), e.halt(), this.fire("markerEvent:"
                                                                                                                                       + t,
                {
                    originEvent: e,
                    pageX: l,
                    pageY: c,
                    categoryItem: a.category,
                    valueItem: a.value,
                    node: r,
                    x: h,
                    y: p,
                    series: u,
                    index: s,
                    seriesIndex: o
                })
        },
        _dataProviderChangeHandler: function (t) {
            var n = t.newVal, r, i, s;
            this._seriesIndex = -1, this._itemIndex = -1, this instanceof e.CartesianChart && (this.set("axes",
                                                                                                        this.get(
                                                                                                            "axes")), this.set(
                "seriesCollection", this.get("seriesCollection"))), r = this.get("axes");
            if (r) {
                for (i in r) {
                    r.hasOwnProperty(i) && (s = r[i], s instanceof e.Axis && (s.get("position") !== "none"
                    && this._addToAxesRenderQueue(s), s.set("dataProvider", n)))
                }
            }
        },
        toggleTooltip: function (e) {
            var t = this.get("tooltip");
            t.visible ? this.hideTooltip() : t.markerEventHandler.apply(this, [e])
        },
        _showTooltip: function (e, t, n) {
            var r = this.get("tooltip"), i = r.node;
            e && (r.visible = !0, r.setTextFunction(i, e), i.setStyle("top", n + "px"), i.setStyle("left", t
                                                                                                           + "px"), i.setStyle(
                "visibility", "visible"))
        },
        _positionTooltip: function (e) {
            var t = this.get("tooltip"), n = t.node, r = this.get("contentBox"), i = e.pageX + 10 - r.getX(),
                s = e.pageY + 10 - r.getY();
            n && (n.setStyle("left", i + "px"), n.setStyle("top", s + "px"))
        },
        hideTooltip: function () {
            var e = this.get("tooltip"), t = e.node;
            e.visible = !1, t.set("innerHTML", ""), t.setStyle("left", -1e4), t.setStyle("top", -1e4), t.setStyle(
                "visibility", "hidden")
        },
        _addTooltip: function () {
            var e = this.get("tooltip"), t = this.get("id") + "_tooltip", n = this.get("contentBox"),
                r = i.getElementById(t);
            r && n.removeChild(r), e.node.set("id", t), e.node.setStyle("visibility", "hidden"), n.appendChild(e.node)
        },
        _updateTooltip: function (t) {
            var n = this.get("tooltip") || this._getTooltip(), r, i, o, u = {
                markerLabelFunction: "markerLabelFunction",
                planarLabelFunction: "planarLabelFunction",
                setTextFunction: "setTextFunction",
                showEvent: "showEvent",
                hideEvent: "hideEvent",
                markerEventHandler: "markerEventHandler",
                planarEventHandler: "planarEventHandler",
                show: "show"
            };
            if (s.isObject(t)) {
                i = t.styles, t.node && n.node ? (n.node.destroy(!0), o = e.one(t.node)) : o = n.node;
                if (i) {
                    for (r in i) {
                        i.hasOwnProperty(r) && o.setStyle(r, i[r]);
                    }
                }
                for (r in u) {
                    t.hasOwnProperty(r) && (n[r] = t[r]);
                }
                n.node = o
            }
            return n
        },
        _getTooltip: function () {
            var t = i.createElement("div"), n = u("chart-tooltip"), r = {
                setTextFunction: this._setText,
                markerLabelFunction: this._tooltipLabelFunction,
                planarLabelFunction: this._planarLabelFunction,
                show: !0,
                hideEvent: "mouseout",
                showEvent: "mouseover",
                markerEventHandler: function (e) {
                    var t = this.get("tooltip"), n = t.markerLabelFunction.apply(this,
                                                                                 [e.categoryItem, e.valueItem, e.index,
                                                                                  e.series, e.seriesIndex]);
                    this._showTooltip(n, e.x + 10, e.y + 10)
                },
                planarEventHandler: function (e) {
                    var t = this.get("tooltip"), n, r = this.get("categoryAxis");
                    n =
                        t.planarLabelFunction.apply(this, [r, e.valueItem, e.index, e.items,
                                                           e.seriesIndex]), this._showTooltip(n, e.x + 10, e.y + 10)
                }
            };
            return t = e.one(t), t.set("id", this.get("id") + "_tooltip"), t.setStyle("fontSize", "85%"), t.setStyle(
                "opacity", "0.83"), t.setStyle("position", "absolute"), t.setStyle("paddingTop", "2px"), t.setStyle(
                "paddingRight", "5px"), t.setStyle("paddingBottom", "4px"), t.setStyle("paddingLeft",
                                                                                       "2px"), t.setStyle(
                "backgroundColor", "#fff"), t.setStyle("border", "1px solid #dbdccc"), t.setStyle("pointerEvents",
                                                                                                  "none"), t.setStyle(
                "zIndex", 3), t.setStyle("whiteSpace", "noWrap"), t.setStyle("visibility", "hidden"), t.addClass(
                n), r.node = e.one(t), r
        },
        _planarLabelFunction: function (e, t, n, r) {
            var o = i.createElement("div"), u, a = 0, f = r.length, l, c, h, p;
            e && (c =
                e.get("labelFunction")
                    .apply(this, [e.getKeyValueAt(this.get("categoryKey"), n), e.get("labelFormat")]), s.isObject
            (c) || (c = i.createTextNode(c)), o.appendChild(c));
            for (; a < f; ++a) {
                p = r[a], p.get("visible") && (u = t[a], l = u.axis, h =
                    l.get("labelFunction")
                        .apply(this, [l.getKeyValueAt(u.key, n), l.get("labelFormat")]), o.appendChild(
                    i.createElement("br")), o.appendChild(i.createTextNode(u.displayName)), o.appendChild(
                    i.createTextNode(": ")), s.isObject(h) || (h = i.createTextNode(h)), o.appendChild(h));
            }
            return o
        },
        _tooltipLabelFunction: function (e, t) {
            var n = i.createElement("div"),
                r = e.axis.get("labelFunction").apply(this, [e.value, e.axis.get("labelFormat")]),
                o = t.axis.get("labelFunction").apply(this, [t.value, t.axis.get("labelFormat")]);
            return n.appendChild(i.createTextNode(e.displayName)), n.appendChild(i.createTextNode(": ")), s.isObject(r)
                                                                                                          || (r =
                i.createTextNode(r)), n.appendChild(r), n.appendChild(i.createElement("br")), n.appendChild(
                i.createTextNode(t.displayName)), n.appendChild(i.createTextNode(": ")), s.isObject(o) || (o =
                i.createTextNode(o)), n.appendChild(o), n
        },
        _tooltipChangeHandler: function () {
            if (this.get("tooltip")) {
                var e = this.get("tooltip"), t = e.node, n = e.show, r = this.get("contentBox");
                t && n && (r.contains(t) || this._addTooltip())
            }
        },
        _setText: function (e, t) {
            e.empty(), s.isNumber(t) ? t += "" : t || (t = ""), o(t) && (t = i.createTextNode(t)), e.appendChild(t)
        },
        _getAllKeys: function (e) {
            var t = 0, n = e.length, r, i, s = {};
            for (; t < n; ++t) {
                r = e[t];
                for (i in r) {
                    r.hasOwnProperty(i) && (s[i] = !0)
                }
            }
            return s
        },
        _buildSeriesKeys: function (e) {
            var t, n = this.get("categoryKey"), r = [], i;
            if (this._seriesKeysExplicitlySet) {
                return this._seriesKeys;
            }
            t = this._getAllKeys(e);
            for (i in t) {
                t.hasOwnProperty(i) && i !== n && r.push(i);
            }
            return r
        }
    }, e.ChartBase = f, e.CartesianChart = e.Base.create("cartesianChart", e.Widget, [e.ChartBase, e.Renderer], {
        renderUI: function () {
            var t = this.get("boundingBox"), n = this.get("contentBox"), r = this.get("tooltip"), i = u("overlay");
            t.setStyle("position", "absolute"), n.setStyle("position",
                                                           "absolute"), this._addAxes(), this._addGridlines(), this._addSeries(), r
                                                                                                                                  && r.show
                                                                                                                                  && this._addTooltip(), this.get(
                "interactionType") === "planar" && (this._overlay = e.Node.create("<div></div>"), this._overlay.set(
                "id", this.get("id") + "_overlay"), this._overlay.setStyle("position",
                                                                           "absolute"), this._overlay.setStyle(
                "background", "#fff"), this._overlay.setStyle("opacity", 0), this._overlay.addClass(
                i), this._overlay.setStyle("zIndex", 4), n.append(this._overlay)), this._setAriaElements(t,
                                                                                                         n), this._redraw()
        }, _planarEventDispatcher: function (e) {
            var t = this.get("graph"), n = this.get("boundingBox"), r = t.get("contentBox"),
                i = e && e.hasOwnProperty("changedTouches"), s = i ? e.changedTouches[0].pageX : e.pageX,
                o = i ? e.changedTouches[0].pageY : e.pageY, u = s - n.getX(), a = o - n.getY(),
                f = {x: s - r.getX(), y: o - r.getY()}, l = t.get("seriesCollection"), c, h = 0, p,
                d = this._selectedIndex, v, m = [], g = [], y = [], b = this.get("direction"), w, E, S, x, T, N, C;
            e.halt(!0), b === "horizontal" ? (E = "x", S = "y") : (S = "x", E = "y"), x = f[E];
            if (l) {
                N = l.length;
                while (h < N && !T) {
                    l[h] && (T = l[h].get(E + "MarkerPlane")), h++
                }
            }
            if (T) {
                N = T.length;
                for (h = 0; h < N; ++h) {
                    if (x <= T[h].end && x >= T[h].start) {
                        p = h;
                        break
                    }
                }
                N = l.length;
                for (h = 0; h < N; ++h) {
                    c = l[h], C = c.get(S + "coords"), w = c.get("markers"), w && !isNaN(d) && d
                                                                                               > -1
                                                                             && c.updateMarkerState(
                        "mouseout", d), C && C[p] > -1 && (w && !isNaN(p) && p > -1 && c.updateMarkerState("mouseover",
                                                                                                           p), v =
                        this.getSeriesItems(c, p), g.push(v.category), y.push(v.value), m.push(c));
                }
                this._selectedIndex = p, p > -1 ? this.fire("planarEvent:mouseover", {
                    categoryItem: g,
                    valueItem: y,
                    x: u,
                    y: a,
                    pageX: s,
                    pageY: o,
                    items: m,
                    index: p,
                    originEvent: e
                }) : this.fire("planarEvent:mouseout")
            }
        }, _type: "combo", _itemRenderQueue: null, _addToAxesRenderQueue: function (t) {
            this._itemRenderQueue || (this._itemRenderQueue = []), e.Array.indexOf(this._itemRenderQueue, t) < 0
                                                                   && this._itemRenderQueue.push(t)
        }, _addToAxesCollection: function (e, t) {
            var n = this.get(e + "AxesCollection");
            n || (n = [], this.set(e + "AxesCollection", n)), n.push(t)
        }, _getDefaultSeriesCollection: function () {
            var e, t = this.get("dataProvider");
            return t && (e = this._parseSeriesCollection()), e
        }, _parseSeriesCollection: function (t) {
            var n = this.get("direction"), r = this.get("styles").series, i = r && s.isArray(r), o, u, a, f = [], l, c,
                h = [], p, d = this.get("seriesKeys").concat(), v, m, g, y = this.get("type"), b, w, E, S, x = [],
                T = this.get("categoryKey"), N = this.get("showMarkers"), C = this.get("showAreaFill"),
                k = this.get("showLines");
            t = t ? t.concat() : [], n === "vertical" ? (l = "yAxis", w = "yKey", c = "xAxis", E = "xKey") : (l =
                "xAxis", w = "xKey", c = "yAxis", E = "yKey"), g = t.length;
            while (t && t.length > 0) {
                p = t.shift(), b = this._getBaseAttribute(p, E), b ? (m = e.Array.indexOf(d, b), m
                                                                                                 > -1
                                                                                                 ? (d.splice(
                        m, 1), h.push(b), f.push(p)) : x.push(p)) : x.push(p);
            }
            while (x.length > 0) {
                p = x.shift(), d.length > 0 ? (b = d.shift(), this._setBaseAttribute(p, E, b), h.push(
                    b), f.push(p)) : p instanceof e.CartesianSeries && p.destroy(!0);
            }
            d.length > 0 && (h = h.concat(d)), g = h.length;
            for (v = 0; v < g; ++v) {
                p = f[v] || {type: y};
                if (p instanceof e.CartesianSeries) {
                    this._parseSeriesAxes(p);
                } else {
                    p[w] = p[w] || T, p[E] = p[E] || d.shift(), p[l] = this._getCategoryAxis(), p[c] =
                        this._getSeriesAxis(p[E]), p.type = p.type || y, p.direction = p.direction || n;
                    if (p.type === "combo" || p.type === "stackedcombo" || p.type === "combospline" || p.type
                        === "stackedcombospline") {
                        C !== null && (p.showAreaFill =
                        p.showAreaFill !== null && p.showAreaFill !== undefined
                        ? p.showAreaFill : C), N !== null && (p.showMarkers =
                                               p.showMarkers !== null && p.showMarkers
                                                                         !== undefined
                                               ? p.showMarkers : N), k !== null
                                                                     && (p.showLines =
                                                                     p.showLines !== null
                                                                     && p.showLines
                                                                        !== undefined
                                                                     ? p.showLines : k);
                    }
                    r && (o = i ? v : p[E], a = r[o], a && (u = p.styles, u ? p.styles = this._mergeStyles(u, a)
                                                                            : p.styles = a)), f[v] = p
                }
            }
            return f && (S = this.get("graph"), S.set("seriesCollection", f), f = S.get("seriesCollection")), f
        }, _parseSeriesAxes: function (t) {
            var n = this.get("axes"), r = t.get("xAxis"), i = t.get("yAxis"), o = e.Axis, u;
            r && !(r instanceof o) && s.isString(r) && n.hasOwnProperty(r) && (u = n[r], u instanceof o && t.set(
                "xAxis", u)), i && !(i instanceof o) && s.isString(i) && n.hasOwnProperty(i) && (u = n[i], u
                                                                                                           instanceof o
                              && t.set("yAxis", u))
        }, _getCategoryAxis: function () {
            var e, t = this.get("axes"), n = this.get("categoryAxisName") || this.get("categoryKey");
            return e = t[n], e
        }, _getSeriesAxis: function (e, t) {
            var n = this.get("axes"), r, i, s;
            if (n) {
                if (t && n.hasOwnProperty(t)) {
                    s = n[t];
                } else {
                    for (r in n) {
                        if (n.hasOwnProperty(r)) {
                            i = n[r].get("keys");
                            if (i && i.hasOwnProperty(e)) {
                                s = n[r];
                                break
                            }
                        }
                    }
                }
            }
            return s
        }, _getBaseAttribute: function (t, n) {
            return t instanceof
                   e.Base ? t.get(n) : t.hasOwnProperty(n) ? t[n] : null
        }, _setBaseAttribute: function (t, n, r) {
            t instanceof e.Base ? t.set(n, r) : t[n] = r
        }, _setAxes: function (t) {
            var n = this._parseAxes(t), r = {}, i = {
                edgeOffset: "edgeOffset",
                calculateEdgeOffset: "calculateEdgeOffset",
                position: "position",
                overlapGraph: "overlapGraph",
                labelValues: "labelValues",
                hideFirstMajorUnit: "hideFirstMajorUnit",
                hideLastMajorUnit: "hideLastMajorUnit",
                labelFunction: "labelFunction",
                labelFunctionScope: "labelFunctionScope",
                labelFormat: "labelFormat",
                appendLabelFunction: "appendLabelFunction",
                appendTitleFunction: "appendTitleFunction",
                maximum: "maximum",
                minimum: "minimum",
                roundingMethod: "roundingMethod",
                alwaysShowZero: "alwaysShowZero",
                scaleType: "scaleType",
                title: "title",
                width: "width",
                height: "height"
            }, s = this.get("dataProvider"), o, u, a, f, l, c, h, p, d;
            for (u in n) {
                if (n.hasOwnProperty(u)) {
                    c = n[u];
                    if (c instanceof e.Axis) {
                        f = c;
                    } else {
                        f = null, p = {}, p.dataProvider = c.dataProvider || s, p.keys = c.keys, c.hasOwnProperty(
                            "roundingUnit") && (p.roundingUnit = c.roundingUnit), a = c.position, c.styles
                                                                                                  && (p.styles =
                            c.styles), p.position = c.position;
                        for (o in i) {
                            i.hasOwnProperty(o) && c.hasOwnProperty(o) && (p[o] = c[o]);
                        }
                        t && (f = this.getAxisByKey(u)), f && f instanceof e.Axis ? (l = f.get("position"), a !== l
                                                                                                            && (l
                                                                                                                !== "none"
                                                                                                            && (d =
                            this.get(l + "AxesCollection"), d.splice(e.Array.indexOf(d, f), 1)), a !== "none"
                                                                                                            && this._addToAxesCollection(
                            a, f)), f.setAttrs(p)) : (h = this._getAxisClass(c.type), f = new h(p), f.after(
                            "axisRendered",
                            e.bind(
                                this._itemRendered,
                                this)))
                    }
                    f && (d = this.get(a + "AxesCollection"), d && e.Array.indexOf(d, f) > 0 && f.set("overlapGraph",
                                                                                                      !1), r[u] = f)
                }
            }
            return r
        }, _addAxes: function () {
            var t = this.get("axes"), n, r, i, s = this.get("width"), o = this.get("height"),
                u = e.Node.one(this._parentNode);
            this._axesCollection || (this._axesCollection = []);
            for (n in t) {
                t.hasOwnProperty(n) && (r = t[n], r instanceof e.Axis && (s || (this.set("width", u.get(
                    "offsetWidth")), s = this.get("width")), o || (this.set("height", u.get("offsetHeight")), o =
                    this.get("height")), this._addToAxesRenderQueue(r), i = r.get("position"), this.get(i
                                                                                                        + "AxesCollection")
                                                                                               ? this.get(i
                                                                                                          + "AxesCollection")
                                                                                                   .push(r) : this.set(i
                                                                                                                       + "AxesCollection",
                        [r]), this._axesCollection.push(r), r.get("keys").hasOwnProperty(this.get("categoryKey"))
                && this.set("categoryAxis", r), r.render(this.get("contentBox"))))
            }
        }, _addSeries: function () {
            var e = this.get("graph");
            e.render(this.get("contentBox"))
        }, _addGridlines: function () {
            var t = this.get("graph"), n = this.get("horizontalGridlines"), r = this.get("verticalGridlines"),
                i = this.get("direction"), s = this.get("leftAxesCollection"), o = this.get("rightAxesCollection"),
                u = this.get("bottomAxesCollection"), a = this.get("topAxesCollection"), f,
                l = this.get("categoryAxis"), c, h;
            this._axesCollection && (f = this._axesCollection.concat(), f.splice(e.Array.indexOf(f, l), 1)), n && (s
                                                                                                             && s[0]
                                                                                                                   ? c =
                                                                                                                       s[0]
                                                                                                                   : o
                                                                                                             && o[0]
                                                                                                                     ? c =
                                                                                                                         o[0]
                                                                                                                     : c =
                                                                                                                         i
                                                                                                                         === "horizontal"
                                                                                                                         ? l
                                                                                                                         : f[0], !this._getBaseAttribute(
                n, "axis") && c && this._setBaseAttribute(n, "axis", c), this._getBaseAttribute(n, "axis") && t.set(
                "horizontalGridlines", n)), r && (u && u[0] ? h = u[0] : a && a[0] ? h = a[0] : h =
                i === "vertical" ? l : f[0], !this._getBaseAttribute(r, "axis") && h && this._setBaseAttribute(r,
                                                                                                               "axis",
                                                                                                               h), this._getBaseAttribute(
                r, "axis") && t.set("verticalGridlines", r))
        }, _getDefaultAxes: function () {
            var e;
            return this.get("dataProvider") && (e = this._parseAxes()), e
        }, _parseAxes: function (t) {
            var n = this.get("categoryKey"), r, i, o, u = {}, a = [], f = [],
                l = this.get("categoryAxisName") || this.get("categoryKey"), c = this.get("valueAxisName"),
                h = this.get("seriesKeys").concat(), p, d, v, m, g, y = this.get("direction"), b, w, E = [],
                S = this.get("stacked") ? "stacked" : "numeric";
            y === "vertical" ? (b = "bottom", w = "left") : (b = "left", w = "bottom");
            if (t) {
                for (p in t) {
                    if (t.hasOwnProperty(p)) {
                        r = t[p], o = this._getBaseAttribute(r, "keys"), i = this._getBaseAttribute(r, "type");
                        if (i === "time" || i === "category") {
                            l = p, this.set("categoryAxisName", p), s.isArray(o) && o.length
                                                                                    > 0
                                                                    && (n = o[0], this.set(
                                "categoryKey", n)), u[p] = r;
                        } else if (p === l) {
                            u[p] = r;
                        } else {
                            u[p] = r;
                            if (p !== c && o && s.isArray(o)) {
                                m = o.length;
                                for (v = 0; v < m; ++v) {
                                    a.push(o[v]);
                                }
                                E.push(u[p])
                            }
                            this._getBaseAttribute(u[p], "type") || this._setBaseAttribute(u[p], "type",
                                                                                           S), this._getBaseAttribute(
                                u[p],
                                "position")
                                                                                               || this._setBaseAttribute(
                                u[p],
                                "position",
                                this._getDefaultAxisPosition(
                                    u[p],
                                    E,
                                    b))
                        }
                    }
                }
            }
            g = e.Array.indexOf(h, n), g > -1 && h.splice(g, 1), d = h.length;
            for (p = 0; p < d; ++p) {
                g = e.Array.indexOf(a, h[p]), g > -1 && (f = f.concat(a.splice(g, 1)));
            }
            a = f.concat(a), d = a.length;
            for (p = 0; p < d; p += 1) {
                g = e.Array.indexOf(h, a[p]), g > -1 && h.splice(g, 1);
            }
            return u.hasOwnProperty(l) || (u[l] = {}), this._getBaseAttribute(u[l], "keys") || this._setBaseAttribute(
                u[l], "keys", [n]), this._getBaseAttribute(u[l], "position") || this._setBaseAttribute(u[l], "position",
                                                                                                       w), this._getBaseAttribute(
                u[l], "type") || this._setBaseAttribute(u[l], "type", this.get("categoryType")), !u.hasOwnProperty(c)
                                                                                                 && h && h.length > 0
                                                                                                 && (u[c] =
                {keys: h}, E.push(u[c])), a.length > 0 && (h.length > 0 ? h = a.concat(h) : h = a), u.hasOwnProperty(c)
                                                                                                    && (this._getBaseAttribute(
                u[c], "position") || this._setBaseAttribute(u[c], "position", this._getDefaultAxisPosition(u[c], E,
                                                                                                           b)), this._setBaseAttribute(
                u[c], "type", S), this._setBaseAttribute(u[c], "keys", h)), this._wereSeriesKeysExplicitlySet()
                                                                            || this.set("seriesKeys", h,
                                                                                        {src: "internal"}), u
        }, _getDefaultAxisPosition: function (t, n, r) {
            var i = this.get("direction"), s = e.Array.indexOf(n, t);
            return n[s - 1] && n[s - 1].position && (i === "horizontal" ? n[s - 1].position === "left" ? r = "right"
                                                                                                       : n[s
                                                                                                           - 1].position
                   === "right" && (r = "left") : n[s - 1].position === "bottom" ? r = "top" : r = "bottom"), r
        }, getSeriesItems: function (e, t) {
            var n = e.get("xAxis"), r = e.get("yAxis"), i = e.get("xKey"), s = e.get("yKey"), o, u;
            return this.get("direction") === "vertical" ? (o = {axis: r, key: s, value: r.getKeyValueAt(s, t)}, u =
                {axis: n, key: i, value: n.getKeyValueAt(i, t)}) : (u =
                {axis: r, key: s, value: r.getKeyValueAt(s, t)}, o =
                {axis: n, key: i, value: n.getKeyValueAt(i, t)}), o.displayName =
                e.get("categoryDisplayName"), u.displayName = e.get("valueDisplayName"), o.value =
                o.axis.getKeyValueAt(o.key, t), u.value = u.axis.getKeyValueAt(u.key, t), {category: o, value: u}
        }, _sizeChanged: function () {
            if (this._axesCollection) {
                var e = this._axesCollection, t = 0, n = e.length;
                for (; t < n; ++t) {
                    this._addToAxesRenderQueue(e[t]);
                }
                this._redraw()
            }
        }, _getTopOverflow: function (e, t, n) {
            var r = 0, i, s = 0, o;
            if (e) {
                i = e.length;
                for (; r < i; ++r) {
                    o = e[r], s = Math.max(s, Math.abs
                    (o.getMaxLabelBounds().top) - o.getEdgeOffset(o.get("styles").majorTicks.count, n))
                }
            }
            if (t) {
                r = 0, i = t.length;
                for (; r < i; ++r) {
                    o = t[r], s =
                        Math.max(s, Math.abs(o.getMaxLabelBounds().top) - o.getEdgeOffset(
                            o.get("styles").majorTicks.count,
                            n))
                }
            }
            return s
        }, _getRightOverflow: function (e, t, n) {
            var r = 0, i, s = 0, o;
            if (e) {
                i = e.length;
                for (; r < i; ++r) {
                    o = e[r], s =
                        Math.max(s, o.getMaxLabelBounds().right - o.getEdgeOffset(o.get("styles").majorTicks.count, n))
                }
            }
            if (t) {
                r = 0, i = t.length;
                for (; r < i; ++r) {
                    o = t[r], s =
                        Math.max(s, o.getMaxLabelBounds().right - o.getEdgeOffset(o.get("styles").majorTicks.count, n))
                }
            }
            return s
        }, _getLeftOverflow: function (e, t, n) {
            var r = 0, i, s = 0, o;
            if (e) {
                i = e.length;
                for (; r < i; ++r) {
                    o = e[r], s =
                        Math.max(s, Math.abs(o.getMinLabelBounds().left) - o.getEdgeOffset(
                            o.get("styles").majorTicks.count,
                            n))
                }
            }
            if (t) {
                r = 0, i = t.length;
                for (; r < i; ++r) {
                    o = t[r], s =
                        Math.max(s, Math.abs(o.getMinLabelBounds().left) - o.getEdgeOffset(
                            o.get("styles").majorTicks.count,
                            n))
                }
            }
            return s
        }, _getBottomOverflow: function (e, t, n) {
            var r = 0, i, s = 0, o;
            if (e) {
                i = e.length;
                for (; r < i; ++r) {
                    o = e[r], s =
                        Math.max(s, o.getMinLabelBounds().bottom - o.getEdgeOffset(o.get("styles").majorTicks.count, n))
                }
            }
            if (t) {
                r = 0, i = t.length;
                for (; r < i; ++r) {
                    o = t[r], s =
                        Math.max(s, o.getMinLabelBounds().bottom - o.getEdgeOffset(o.get("styles").majorTicks.count, n))
                }
            }
            return s
        }, _redraw: function () {
            if (this._drawing) {
                this._callLater = !0;
                return
            }
            this._drawing = !0, this._callLater = !1;
            var e = this.get("width"), t = this.get("height"), n = 0, r = 0, i = 0, s = 0,
                o = this.get("leftAxesCollection"), u = this.get("rightAxesCollection"),
                a = this.get("topAxesCollection"), f = this.get("bottomAxesCollection"), l = 0, c, h, p = "visible",
                d = this.get("graph"), v, m, g, y, b, w, E, S, x = this.get("allowContentOverflow"), T, N, C, k, L,
                A = {};
            if (o) {
                C = [], c = o.length;
                for (l = c - 1; l > -1; --l) {
                    C.unshift(n), n += o[l].get("width")
                }
            }
            if (u) {
                N = [], c = u.length, l = 0;
                for (l = c - 1; l > -1; --l) {
                    r += u[l].get("width"), N.unshift(e - r)
                }
            }
            if (a) {
                k = [], c = a.length;
                for (l = c - 1; l > -1; --l) {
                    k.unshift(i), i += a[l].get("height")
                }
            }
            if (f) {
                L = [], c = f.length;
                for (l = c - 1; l > -1; --l) {
                    s += f[l].get("height"), L.unshift(t - s)
                }
            }
            b = e - (n + r), w = t - (s + i), A.left = n, A.top = i, A.bottom = t - s, A.right = e - r;
            if (!x) {
                v = this._getTopOverflow(o, u), m = this._getBottomOverflow(o, u), g = this._getLeftOverflow(f, a), y =
                    this._getRightOverflow(f, a), T = v - i;
                if (T > 0) {
                    A.top = v;
                    if (k) {
                        l = 0, c = k.length;
                        for (; l < c; ++l) {
                            k[l] += T
                        }
                    }
                }
                T = m - s;
                if (T > 0) {
                    A.bottom = t - m;
                    if (L) {
                        l = 0, c = L.length;
                        for (; l < c; ++l) {
                            L[l] -= T
                        }
                    }
                }
                T = g - n;
                if (T > 0) {
                    A.left = g;
                    if (C) {
                        l = 0, c = C.length;
                        for (; l < c; ++l) {
                            C[l] += T
                        }
                    }
                }
                T = y - r;
                if (T > 0) {
                    A.right = e - y;
                    if (N) {
                        l = 0, c = N.length;
                        for (; l < c; ++l) {
                            N[l] -= T
                        }
                    }
                }
            }
            b = A.right - A.left, w = A.bottom - A.top, E = A.left, S = A.top;
            if (a) {
                c = a.length, l = 0;
                for (; l < c; l++) {
                    h = a[l], h.get("width") !== b && h.set("width", b), h.get("boundingBox")
                        .setStyle("left", E + "px"), h.get("boundingBox").setStyle("top", k[l] + "px");
                }
                h._hasDataOverflow() && (p = "hidden")
            }
            if (f) {
                c = f.length, l = 0;
                for (; l < c; l++) {
                    h = f[l], h.get("width") !== b && h.set("width", b), h.get("boundingBox")
                        .setStyle("left", E + "px"), h.get("boundingBox").setStyle("top", L[l] + "px");
                }
                h._hasDataOverflow() && (p = "hidden")
            }
            if (o) {
                c = o.length, l = 0;
                for (; l < c; ++l) {
                    h = o[l], h.get("boundingBox").setStyle("top", S + "px"), h.get("boundingBox")
                        .setStyle("left", C[l] + "px"), h.get("height") !== w && h.set("height", w);
                }
                h._hasDataOverflow() && (p = "hidden")
            }
            if (u) {
                c = u.length, l = 0;
                for (; l < c; ++l) {
                    h = u[l], h.get("boundingBox").setStyle("top", S + "px"), h.get("boundingBox")
                        .setStyle("left", N[l] + "px"), h.get("height") !== w && h.set("height", w);
                }
                h._hasDataOverflow() && (p = "hidden")
            }
            this._drawing = !1;
            if (this._callLater) {
                this._redraw();
                return
            }
            d && (d.get("boundingBox").setStyle("left", E + "px"), d.get("boundingBox")
                .setStyle("top", S + "px"), d.set("width", b), d.set("height", w), d.get("boundingBox")
                .setStyle("overflow", p)), this._overlay && (this._overlay.setStyle("left", E
                                                                                            + "px"), this._overlay.setStyle(
                "top", S + "px"), this._overlay.setStyle("width", b + "px"), this._overlay.setStyle("height", w + "px"))
        }, destructor: function () {
            var t = this.get("graph"), n = 0, r, i = this.get("seriesCollection"), s = this._axesCollection,
                o = this.get("tooltip").node;
            this._description && (this._description.empty(), this._description.remove(!0)), this._liveRegion
                                                                                            && (this._liveRegion.empty(), this._liveRegion.remove(
                !0)), r = i ? i.length : 0;
            for (; n < r; ++n) {
                i[n] instanceof e.CartesianSeries && i[n].destroy(!0);
            }
            r = s ? s.length : 0;
            for (n = 0; n < r; ++n) {
                s[n] instanceof e.Axis && s[n].destroy(!0);
            }
            t && t.destroy(!0), o && (o.empty(), o.remove(!0)), this._overlay
                                                                && (this._overlay.empty(), this._overlay.remove(!0))
        }, _getAriaMessage: function (e) {
            var t = "", n, r, i, s, o = this._seriesIndex, u = this._itemIndex, a = this.get("seriesCollection"),
                f = a.length, l;
            return e % 2 === 0 ? (f > 1 ? (e === 38 ? o = o < 1 ? f - 1 : o - 1 : e === 40 && (o =
                o >= f - 1 ? 0 : o + 1), this._itemIndex = -1) : o = 0, this._seriesIndex = o, n =
                this.getSeries(parseInt(o, 10)), t = n.get("valueDisplayName") + " series.") : (o > -1 ? (t = "", n =
                this.getSeries(parseInt(o, 10))) : (o = 0, this._seriesIndex = o, n =
                this.getSeries(parseInt(o, 10)), t = n.get("valueDisplayName") + " series."), l =
                n._dataLength ? n._dataLength : 0, e === 37 ? u = u > 0 ? u - 1 : l - 1 : e === 39 && (u =
                u >= l - 1 ? 0 : u + 1), this._itemIndex = u, r = this.getSeriesItems(n, u), i = r.category, s =
                r.value, i && s && i.value && s.value ? (t +=
                i.displayName + ": " + i.axis.formatLabel.apply(this, [i.value, i.axis.get("labelFormat")]) + ", ", t +=
                s.displayName + ": " + s.axis.formatLabel.apply(this, [s.value, s.axis.get("labelFormat")]) + ", ")
                                                      : t += "No data available.", t += u + 1 + " of " + l + ". "), t
        }
    }, {
                                                             ATTRS: {
                                                                 allowContentOverflow: {value: !1},
                                                                 axesStyles: {
                                                                     lazyAdd: !1, getter: function () {
                                                                         var t = this.get("axes"), n,
                                                                             r = this._axesStyles;
                                                                         if (t) {
                                                                             for (n in t) {
                                                                                 t.hasOwnProperty(n) && t[n]
                                                                                                        instanceof e.Axis
                                                                                 && (r || (r = {}), r[n] =
                                                                                     t[n].get("styles"));
                                                                             }
                                                                         }
                                                                         return r
                                                                     }, setter: function (e) {
                                                                         var t = this.get("axes"), n;
                                                                         for (n in e) {
                                                                             e.hasOwnProperty(n)
                                                                             && t.hasOwnProperty(n)
                                                                             && this._setBaseAttribute(t[n],
                                                                                                       "styles",
                                                                                                       e[n]);
                                                                         }
                                                                         return e
                                                                     }
                                                                 },
                                                                 seriesStyles: {
                                                                     lazyAdd: !1, getter: function () {
                                                                         var e = this._seriesStyles,
                                                                             t = this.get("graph"), n, r;
                                                                         if (t) {
                                                                             n = t.get("seriesDictionary");
                                                                             if (n) {
                                                                                 e = {};
                                                                                 for (r in n) {
                                                                                     n.hasOwnProperty(r)
                                                                                     && (e[r] =
                                                                                         n[r].get("styles"))
                                                                                 }
                                                                             }
                                                                         }
                                                                         return e
                                                                     }, setter: function (e) {
                                                                         var t, n, r;
                                                                         if (s.isArray(e)) {
                                                                             r = this.get("seriesCollection"), t =
                                                                                 0, n = e.length;
                                                                             for (; t < n; ++t) {
                                                                                 this._setBaseAttribute(
                                                                                     r[t], "styles", e[t])
                                                                             }
                                                                         } else {
                                                                             for (t in e) {
                                                                                 e.hasOwnProperty(t) && (r =
                                                                                     this.getSeries(
                                                                                         t), this._setBaseAttribute(
                                                                                     r, "styles", e[t]));
                                                                             }
                                                                         }
                                                                         return e
                                                                     }
                                                                 },
                                                                 graphStyles: {
                                                                     lazyAdd: !1, getter: function () {
                                                                         var e = this.get("graph");
                                                                         return e ?
                                                                                e.get("styles") : this._graphStyles
                                                                     }, setter: function (e) {
                                                                         var t = this.get("graph");
                                                                         return this._setBaseAttribute(t, "styles",
                                                                                                       e), e
                                                                     }
                                                                 },
                                                                 styles: {
                                                                     lazyAdd: !1, getter: function () {
                                                                         var e = {
                                                                             axes: this.get("axesStyles"),
                                                                             series: this.get("seriesStyles"),
                                                                             graph: this.get("graphStyles")
                                                                         };
                                                                         return e
                                                                     }, setter: function (e) {
                                                                         e.hasOwnProperty("axes") && (this.get(
                                                                             "axesStyles") ? this.set("axesStyles",
                                                                                                      e.axes)
                                                                                           : this._axesStyles =
                                                                                                          e.axes), e.hasOwnProperty(
                                                                             "series") && (this.get("seriesStyles")
                                                                                           ? this.set("seriesStyles",
                                                                                                      e.series)
                                                                                           : this._seriesStyles =
                                                                                               e.series), e.hasOwnProperty(
                                                                             "graph") && this.set("graphStyles",
                                                                                                  e.graph)
                                                                     }
                                                                 },
                                                                 axes: {
                                                                     lazyAdd: !1,
                                                                     valueFn: "_getDefaultAxes",
                                                                     setter: function (e) {
                                                                         return this.get("dataProvider") && (e =
                                                                             this._setAxes(e)), e
                                                                     }
                                                                 },
                                                                 seriesCollection: {
                                                                     lazyAdd: !1,
                                                                     valueFn: "_getDefaultSeriesCollection",
                                                                     setter: function (e) {
                                                                         return this.get("dataProvider")
                                                                                ? this._parseSeriesCollection(e) : e
                                                                     }
                                                                 },
                                                                 leftAxesCollection: {},
                                                                 bottomAxesCollection: {},
                                                                 rightAxesCollection: {},
                                                                 topAxesCollection: {},
                                                                 stacked: {value: !1},
                                                                 direction: {
                                                                     getter: function () {
                                                                         var e = this.get("type");
                                                                         return e === "bar" ? "vertical" : e
                                                                                                           === "column"
                                                                                                           ? "horizontal"
                                                                                                           : this._direction
                                                                     }, setter: function (e) {
                                                                         return this._direction = e, this._direction
                                                                     }
                                                                 },
                                                                 showAreaFill: {},
                                                                 showMarkers: {},
                                                                 showLines: {},
                                                                 categoryAxisName: {},
                                                                 valueAxisName: {value: "values"},
                                                                 horizontalGridlines: {
                                                                     getter: function () {
                                                                         var e = this.get("graph");
                                                                         return e ? e.get("horizontalGridlines")
                                                                                  : this._horizontalGridlines
                                                                     }, setter: function (e) {
                                                                         var t = this.get("graph");
                                                                         e && !s.isObject(e) && (e = {}), t ? t.set(
                                                                             "horizontalGridlines", e)
                                                                                                            : this._horizontalGridlines =
                                                                                                              e
                                                                     }
                                                                 },
                                                                 verticalGridlines: {
                                                                     getter: function () {
                                                                         var e = this.get("graph");
                                                                         return e ? e.get("verticalGridlines")
                                                                                  : this._verticalGridlines
                                                                     }, setter: function (e) {
                                                                         var t = this.get("graph");
                                                                         e && !s.isObject(e) && (e = {}), t ? t.set(
                                                                             "verticalGridlines", e)
                                                                                                            : this._verticalGridlines =
                                                                                                              e
                                                                     }
                                                                 },
                                                                 type: {
                                                                     getter: function () {
                                                                         return this.get("stacked") ? "stacked"
                                                                                                      + this._type
                                                                                                    : this._type
                                                                     }, setter: function (e) {
                                                                         return this._type === "bar" ? e !== "bar"
                                                                                                       && this.set(
                                                                                 "direction", "horizontal") : e
                                                                                                              === "bar"
                                                                                                              && this.set(
                                                                                 "direction", "vertical"), this._type =
                                                                             e, this._type
                                                                     }
                                                                 },
                                                                 categoryAxis: {}
                                                             }
                                                         }), e.PieChart =
        e.Base.create("pieChart", e.Widget, [e.ChartBase], {
            _getSeriesCollection: function () {
                if (this._seriesCollection) {
                    return this._seriesCollection;
                }
                var e = this.get("axes"), t = [], n, r = 0, i, s = this.get("type"), o, u = "categoryAxis",
                    a = "categoryKey", f = "valueAxis", l = "valueKey";
                if (e) {
                    n = e.values.get("keyCollection"), o = e.category.get("keyCollection")[0], i = n.length;
                    for (; r < i; ++r) {
                        t[r] = {type: s}, t[r][u] = "category", t[r][f] = "values", t[r][a] =
                            o, t[r][l] = n[r]
                    }
                }
                return this._seriesCollection = t, t
            }, _parseAxes: function (t) {
                this._axes || (this._axes = {});
                var n, r, i, s, o, u, a = this.get("type"), f = this.get("width"), l = this.get("height"),
                    c = e.Node.one(this._parentNode);
                f || (this.set("width", c.get("offsetWidth")), f = this.get("width")), l || (this.set("height", c.get(
                    "offsetHeight")), l = this.get("height"));
                for (n in t) {
                    t.hasOwnProperty(n) && (s = t[n], r = a === "pie" ? "none" : s.position, u =
                        this._getAxisClass(s.type), o = {dataProvider: this.get("dataProvider")}, s.hasOwnProperty(
                        "roundingUnit") && (o.roundingUnit = s.roundingUnit), o.keys = s.keys, o.width = f, o.height =
                        l, o.position = r, o.styles = s.styles, i = new u(o), i.on("axisRendered",
                                                                                   e.bind(this._itemRendered,
                                                                                          this)), this._axes[n] = i)
                }
            }, _addAxes: function () {
                var e = this.get("axes"), t, n, r;
                e || (this.set("axes", this._getDefaultAxes()), e = this.get("axes")), this._axesCollection
                                                                                       || (this._axesCollection = []);
                for (t in e) {
                    e.hasOwnProperty(t) && (n = e[t], r = n.get("position"), this.get(r + "AxesCollection")
                                                                             ? this.get(r + "AxesCollection")
                                                                                 .push(n) : this.set(r
                                                                                                     + "AxesCollection",
                            [n]), this._axesCollection.push(n))
                }
            }, _addSeries: function () {
                var e = this.get("graph"), t = this.get("seriesCollection");
                this._parseSeriesAxes(t), e.set("showBackground", !1), e.set("width", this.get("width")), e.set(
                    "height", this.get("height")), e.set("seriesCollection", t), this._seriesCollection =
                    e.get("seriesCollection"), e.render(this.get("contentBox"))
            }, _parseSeriesAxes: function (t) {
                var n = 0, r = t.length, i, s = this.get("axes"), o;
                for (; n < r; ++n) {
                    i = t[n];
                    if (i) {
                        if (i instanceof e.PieSeries) {
                            o = i.get("categoryAxis"), o && !(o instanceof e.Axis) && i.set("categoryAxis", s[o]), o =
                                i.get("valueAxis"), o && !(o instanceof e.Axis) && i.set("valueAxis", s[o]);
                            continue
                        }
                        i.categoryAxis = s.category, i.valueAxis = s.values, i.type || (i.type = this.get("type"))
                    }
                }
            }, _getDefaultAxes: function () {
                var e = this.get("categoryKey"), t = this.get("seriesKeys").concat(), n = "numeric";
                return {values: {keys: t, type: n}, category: {keys: [e], type: this.get("categoryType")}}
            }, getSeriesItems: function (e, t) {
                var n = {
                    axis: e.get("categoryAxis"),
                    key: e.get("categoryKey"),
                    displayName: e.get("categoryDisplayName")
                }, r = {axis: e.get("valueAxis"), key: e.get("valueKey"), displayName: e.get("valueDisplayName")};
                return n.value = n.axis.getKeyValueAt(n.key, t), r.value = r.axis.getKeyValueAt(r.key, t), {
                    category: n,
                    value: r
                }
            }, _sizeChanged: function () {
                this._redraw()
            }, _redraw: function () {
                var e = this.get("graph"), t = this.get("width"), n = this.get("height"), r;
                e && (r = Math.min(t, n), e.set("width", r), e.set("height", r))
            }, _tooltipLabelFunction: function (e, t, n, r) {
                var s = i.createElement("div"), o = r.getTotalValues(), u = Math.round(t.value / o * 1e4) / 100;
                return s.appendChild(i.createTextNode(e.displayName + ": " + e.axis.get("labelFunction")
                    .apply(this, [e.value, e.axis.get("labelFormat")]))), s.appendChild(
                    i.createElement("br")), s.appendChild(
                    i.createTextNode(t.displayName + ": " + t.axis.get("labelFunction")
                        .apply(this, [t.value, t.axis.get("labelFormat")]))), s.appendChild(
                    i.createElement("br")), s.appendChild(i.createTextNode(u + "%")), s
            }, _getAriaMessage: function (e) {
                var t = "", n, r, i, s, o = 0, u = this._itemIndex, a, f, l, c;
                return i = this.getSeries(parseInt(o, 10)), c = i.get("markers"), a = c && c.length ? c.length : 0, e
                                                                                                                    === 37
                                                                                                                    ? u =
                                                                                                                        u
                                                                                                                        > 0
                                                                                                                        ? u
                                                                                                                          - 1
                                                                                                                        : a
                                                                                                                          - 1
                                                                                                                    : e
                                                                                                                      === 39
                                                                                                                      && (u =
                        u >= a - 1 ? 0 : u + 1), this._itemIndex = u, r = this.getSeriesItems(i, u), n = r.category, s =
                    r.value, f = i.getTotalValues(), l = Math.round(s.value / f * 1e4) / 100, n && s ? (t +=
                    n.displayName + ": " + n.axis.formatLabel.apply(this, [n.value, n.axis.get("labelFormat")])
                    + ", ", t +=
                    s.displayName + ": " + s.axis.formatLabel.apply(this, [s.value, s.axis.get("labelFormat")])
                    + ", ", t += "Percent of total " + s.displayName + ": " + l + "%,") : t +=
                                                                                                  "No data available,", t +=
                    u + 1 + " of " + a + ". ", t
            }, destructor: function () {
                var t, n, r = this.get("tooltip"), i = r.node, s = this.get("graph"), o = this._axesCollection,
                    u = this.get("seriesCollection");
                while (u.length > 0) {
                    t = u.shift(), t.destroy(!0);
                }
                while (o.length > 0) {
                    n = o.shift(), n instanceof e.Axis && n.destroy(!0);
                }
                this._description && (this._description.empty(), this._description.remove(!0)), this._liveRegion
                                                                                                && (this._liveRegion.empty(), this._liveRegion.remove(
                    !0)), s && s.destroy(!0), i && (i.empty(), i.remove(!0))
            }
        }, {
                          ATTRS: {
                              ariaDescription: {
                                  value: "Use the left and right keys to navigate through items.",
                                  setter: function (e) {
                                      return this._description && this._description.set("text", e), e
                                  }
                              }, axes: {
                                  getter: function () {
                                      return this._axes
                                  }, setter: function (e) {
                                      this._parseAxes(e)
                                  }
                              }, seriesCollection: {
                                  lazyAdd: !1, getter: function () {
                                      return this._getSeriesCollection()
                                  }, setter: function (e) {
                                      return this._setSeriesCollection(e)
                                  }
                              }, type: {value: "pie"}
                          }
                      }), e.Chart = l
}, "patched-v3.18.1", {
            requires: ["dom", "event-mouseenter", "event-touch", "graphics-group", "axes", "series-pie", "series-line",
                       "series-marker", "series-area", "series-spline", "series-column", "series-bar",
                       "series-areaspline", "series-combo", "series-combospline", "series-line-stacked",
                       "series-marker-stacked", "series-area-stacked", "series-spline-stacked", "series-column-stacked",
                       "series-bar-stacked", "series-areaspline-stacked", "series-combo-stacked",
                       "series-combospline-stacked"]
        });
