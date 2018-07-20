if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-range/series-range.js']) {
    __coverage__['build/series-range/series-range.js'] =
        {
            "path": "build/series-range/series-range.js",
            "s": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0,
                "7": 0,
                "8": 0,
                "9": 0,
                "10": 0,
                "11": 0,
                "12": 0,
                "13": 0,
                "14": 0,
                "15": 0,
                "16": 0,
                "17": 0,
                "18": 0,
                "19": 0
            },
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 24}, "end": {"line": 1, "column": 43}}
                },
                "2": {
                    "name": "RangeSeries",
                    "line": 24,
                    "loc": {"start": {"line": 24, "column": 0}, "end": {"line": 25, "column": 0}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 50,
                    "loc": {"start": {"line": 50, "column": 17}, "end": {"line": 50, "column": 28}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 72,
                    "loc": {"start": {"line": 72, "column": 27}, "end": {"line": 73, "column": 4}}
                },
                "5": {
                    "name": "(anonymous_5)",
                    "line": 92,
                    "loc": {"start": {"line": 92, "column": 16}, "end": {"line": 93, "column": 4}}
                },
                "6": {
                    "name": "(anonymous_6)",
                    "line": 118,
                    "loc": {"start": {"line": 118, "column": 23}, "end": {"line": 119, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 132, "column": 52}},
                "2": {"start": {"line": 24, "column": 0}, "end": {"line": 27, "column": 1}},
                "3": {"start": {"line": 26, "column": 4}, "end": {"line": 26, "column": 62}},
                "4": {"start": {"line": 29, "column": 0}, "end": {"line": 29, "column": 33}},
                "5": {"start": {"line": 31, "column": 0}, "end": {"line": 59, "column": 2}},
                "6": {"start": {"line": 51, "column": 12}, "end": {"line": 56, "column": 14}},
                "7": {"start": {"line": 61, "column": 0}, "end": {"line": 125, "column": 3}},
                "8": {"start": {"line": 74, "column": 8}, "end": {"line": 74, "column": 20}},
                "9": {"start": {"line": 75, "column": 8}, "end": {"line": 82, "column": 9}},
                "10": {"start": {"line": 77, "column": 12}, "end": {"line": 77, "column": 34}},
                "11": {"start": {"line": 78, "column": 12}, "end": {"line": 78, "column": 52}},
                "12": {"start": {"line": 79, "column": 12}, "end": {"line": 81, "column": 13}},
                "13": {"start": {"line": 80, "column": 16}, "end": {"line": 80, "column": 30}},
                "14": {"start": {"line": 83, "column": 8}, "end": {"line": 83, "column": 32}},
                "15": {"start": {"line": 94, "column": 8}, "end": {"line": 106, "column": 32}},
                "16": {"start": {"line": 107, "column": 8}, "end": {"line": 107, "column": 114}},
                "17": {"start": {"line": 120, "column": 8}, "end": {"line": 122, "column": 10}},
                "18": {"start": {"line": 123, "column": 8}, "end": {"line": 123, "column": 85}},
                "19": {"start": {"line": 127, "column": 0}, "end": {"line": 127, "column": 28}}
            },
            "branchMap": {
                "1": {
                    "line": 75,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 75, "column": 14}, "end": {"line": 75, "column": 21}},
                        {"start": {"line": 75, "column": 25}, "end": {"line": 75, "column": 37}}]
                },
                "2": {
                    "line": 79,
                    "type": "if",
                    "locations": [{"start": {"line": 79, "column": 12}, "end": {"line": 79, "column": 12}},
                        {"start": {"line": 79, "column": 12}, "end": {"line": 79, "column": 12}}]
                }
            },
            "code": ["(function () { YUI.add('series-range', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for creating a range series.", " *", " * @module charts",
                     " * @submodule series-range", " */", "", "/**",
                     " * An abstract class for creating range series instances.",
                     " * RangeSeries is used by the following classes:", " * <ul>",
                     " *      <li>{{#crossLink \"CandlestickSeries\"}}{{/crossLink}}</li>",
                     " *      <li>{{#crossLink \"OHLCSeries\"}}{{/crossLink}}</li>", " *  </ul>", " *",
                     " * @class RangeSeries", " * @extends CartesianSeries", " * @constructor",
                     " * @param {Object} config (optional) Configuration parameters.", " * @submodule series-range",
                     " */", "function RangeSeries()", "{",
                     "    RangeSeries.superclass.constructor.apply(this, arguments);", "}", "",
                     "RangeSeries.NAME = \"rangeSeries\";", "", "RangeSeries.ATTRS = {", "    /**",
                     "     * Read-only attribute indicating the type of series.", "     *", "     * @attribute type",
                     "     * @type String", "     * @default range", "     */", "    type: {",
                     "        value: \"range\"", "    },", "", "    /**",
                     "     * Values to be used for open, high, low and close keys.", "     *", "     * @attribute ohlc",
                     "     * @type Object", "     */", "    ohlckeys: {", "        valueFn: function() {",
                     "            return {", "                open: \"open\",", "                high: \"high\",",
                     "                low: \"low\",", "                close: \"close\"", "            };", "        }",
                     "    }", "};", "", "Y.extend(RangeSeries, Y.CartesianSeries, {", "    /**",
                     "     * Returns the width for each marker base on the width of the series",
                     "     * and the length of the dataProvider.", "     *", "     * @method calculateMarkerWidth",
                     "     * @param {Number} width The width, in pixels of the series.",
                     "     * @param {Number} count The length of the datProvider.", "     * @return Number",
                     "     * @private", "     */", "    _calculateMarkerWidth: function(width, count, spacing)",
                     "    {", "        var val = 0;", "        while(val < 3 && spacing > -1)", "        {",
                     "            spacing = spacing - 1;", "            val = Math.round(width/count - spacing);",
                     "            if(val % 2 === 0) {", "                val = val - 1;", "            }", "        }",
                     "        return Math.max(1, val);", "    },", "", "    /**", "     * Draws the series.", "     *",
                     "     * @method drawSeries", "     * @protected", "     */", "    drawSeries: function()", "    {",
                     "        var xcoords = this.get(\"xcoords\"),", "            ycoords = this.get(\"ycoords\"),",
                     "            styles = this.get(\"styles\"),", "            padding = styles.padding,",
                     "            len = xcoords.length,",
                     "            dataWidth = this.get(\"width\") - (padding.left + padding.right),",
                     "            keys = this.get(\"ohlckeys\"),", "            opencoords = ycoords[keys.open],",
                     "            highcoords = ycoords[keys.high],", "            lowcoords = ycoords[keys.low],",
                     "            closecoords = ycoords[keys.close],",
                     "            width = this._calculateMarkerWidth(dataWidth, len, styles.spacing),",
                     "            halfwidth = width/2;",
                     "        this._drawMarkers(xcoords, opencoords, highcoords, lowcoords, closecoords, len, width, halfwidth, styles);",
                     "    },", "", "    /**", "     * Gets the default value for the `styles` attribute. Overrides",
                     "     * base implementation.", "     *", "     * @method _getDefaultStyles",
                     "     * @return Object", "     * @private", "     */", "    _getDefaultStyles: function()",
                     "    {", "        var styles = {", "            spacing: 3", "        };",
                     "        return this._mergeStyles(styles, RangeSeries.superclass._getDefaultStyles());", "    }",
                     "});", "", "Y.RangeSeries = RangeSeries;", "", "", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"series-cartesian\"]});", "", "}());"]
        };
}
var __cov_Bd76QhhgiiA4IDaxCRsUaQ = __coverage__['build/series-range/series-range.js'];
__cov_Bd76QhhgiiA4IDaxCRsUaQ.s['1']++;
YUI.add('series-range', function (Y, NAME) {
    __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['1']++;
    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['2']++;

    function RangeSeries() {
        __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['2']++;
        __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['3']++;
        RangeSeries.superclass.constructor.apply(this, arguments);
    }

    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['4']++;
    RangeSeries.NAME = 'rangeSeries';
    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['5']++;
    RangeSeries.ATTRS = {
        type: {value: 'range'}, ohlckeys: {
            valueFn: function () {
                __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['3']++;
                __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['6']++;
                return {open: 'open', high: 'high', low: 'low', close: 'close'};
            }
        }
    };
    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['7']++;
    Y.extend(RangeSeries, Y.CartesianSeries, {
        _calculateMarkerWidth: function (width, count, spacing) {
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['4']++;
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['8']++;
            var val = 0;
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['9']++;
            while ((__cov_Bd76QhhgiiA4IDaxCRsUaQ.b['1'][0]++, val < 3)
                   && (__cov_Bd76QhhgiiA4IDaxCRsUaQ.b['1'][1]++, spacing > -1)) {
                __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['10']++;
                spacing = spacing - 1;
                __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['11']++;
                val = Math.round(width / count - spacing);
                __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['12']++;
                if (val % 2 === 0) {
                    __cov_Bd76QhhgiiA4IDaxCRsUaQ.b['2'][0]++;
                    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['13']++;
                    val = val - 1;
                } else {
                    __cov_Bd76QhhgiiA4IDaxCRsUaQ.b['2'][1]++;
                }
            }
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['14']++;
            return Math.max(1, val);
        }, drawSeries: function () {
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['5']++;
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['15']++;
            var xcoords = this.get('xcoords'), ycoords = this.get('ycoords'), styles = this.get('styles'),
                padding = styles.padding, len = xcoords.length,
                dataWidth = this.get('width') - (padding.left + padding.right), keys = this.get('ohlckeys'),
                opencoords = ycoords[keys.open], highcoords = ycoords[keys.high], lowcoords = ycoords[keys.low],
                closecoords = ycoords[keys.close], width = this._calculateMarkerWidth(dataWidth, len, styles.spacing),
                halfwidth = width / 2;
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['16']++;
            this._drawMarkers(xcoords, opencoords, highcoords, lowcoords, closecoords, len, width, halfwidth, styles);
        }, _getDefaultStyles: function () {
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.f['6']++;
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['17']++;
            var styles = {spacing: 3};
            __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['18']++;
            return this._mergeStyles(styles, RangeSeries.superclass._getDefaultStyles());
        }
    });
    __cov_Bd76QhhgiiA4IDaxCRsUaQ.s['19']++;
    Y.RangeSeries = RangeSeries;
}, 'patched-v3.18.1', {'requires': ['series-cartesian']});
