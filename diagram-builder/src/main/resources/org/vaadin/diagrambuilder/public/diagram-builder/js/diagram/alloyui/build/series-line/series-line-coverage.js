if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-line/series-line.js']) {
    __coverage__['build/series-line/series-line.js'] =
        {
            "path": "build/series-line/series-line.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 23}, "end": {"line": 1, "column": 42}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 25,
                    "loc": {"start": {"line": 25, "column": 16}, "end": {"line": 26, "column": 4}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 39,
                    "loc": {"start": {"line": 39, "column": 16}, "end": {"line": 40, "column": 4}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 57,
                    "loc": {"start": {"line": 57, "column": 23}, "end": {"line": 58, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 113, "column": 72}},
                "2": {"start": {"line": 19, "column": 0}, "end": {"line": 104, "column": 3}},
                "3": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 25}},
                "4": {"start": {"line": 41, "column": 8}, "end": {"line": 44, "column": 9}},
                "5": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 29}},
                "6": {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 69}},
                "7": {"start": {"line": 59, "column": 8}, "end": {"line": 59, "column": 116}},
                "8": {"start": {"line": 60, "column": 8}, "end": {"line": 60, "column": 22}}
            },
            "branchMap": {
                "1": {
                    "line": 41,
                    "type": "if",
                    "locations": [{"start": {"line": 41, "column": 8}, "end": {"line": 41, "column": 8}},
                        {"start": {"line": 41, "column": 8}, "end": {"line": 41, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('series-line', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for creating a line series.", " *", " * @module charts",
                     " * @submodule series-line", " */", "/**",
                     " * The LineSeries class renders quantitative data on a graph by connecting relevant data points.",
                     " *", " * @class LineSeries", " * @extends CartesianSeries", " * @uses Lines", " * @constructor",
                     " * @param {Object} config (optional) Configuration parameters.", " * @submodule series-line",
                     " */", "Y.LineSeries = Y.Base.create(\"lineSeries\", Y.CartesianSeries, [Y.Lines], {", "    /**",
                     "     * @protected", "     *", "     * @method drawSeries", "     */",
                     "    drawSeries: function()", "    {", "        this.drawLines();", "    },", "", "    /**",
                     "     * @protected", "     *",
                     "     * Method used by `styles` setter. Overrides base implementation.", "     *",
                     "     * @method _setStyles", "     * @param {Object} newStyles Hash of properties to update.",
                     "     * @return Object", "     */", "    _setStyles: function(val)", "    {",
                     "        if(!val.line)", "        {", "            val = {line:val};", "        }",
                     "        return Y.LineSeries.superclass._setStyles.apply(this, [val]);", "    },", "", "    /**",
                     "     * @protected", "     *",
                     "     * Gets the default value for the `styles` attribute. Overrides",
                     "     * base implementation.", "     *", "     * @method _getDefaultStyles",
                     "     * @return Object", "     */", "    _getDefaultStyles: function()", "    {",
                     "        var styles = this._mergeStyles({line:this._getLineDefaults()}, Y.LineSeries.superclass._getDefaultStyles());",
                     "        return styles;", "    }", "},", "{", "    ATTRS: {", "        /**",
                     "         * Read-only attribute indicating the type of series.", "         *",
                     "         * @attribute type", "         * @type String", "         * @default line", "         */",
                     "        type: {", "            value:\"line\"", "        }", "", "        /**",
                     "         * Style properties used for drawing lines. This attribute is inherited from `Renderer`. Below are the",
                     "         * default values:", "         *  <dl>",
                     "         *      <dt>color</dt><dd>The color of the line. The default value is determined by the order of the series",
                     "         *      on the graph. The color will be retrieved from the following array:",
                     "         *      `[\"#426ab3\", \"#d09b2c\", \"#000000\", \"#b82837\", \"#b384b5\", \"#ff7200\", \"#779de3\", \"#cbc8ba\", \"#7ed7a6\", \"#007a6c\"]`",
                     "         *      <dt>weight</dt><dd>Number that indicates the width of the line. The default value is 6.</dd>",
                     "         *      <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the line. The default value is 1.</dd>",
                     "         *      <dt>lineType</dt><dd>Indicates whether the line is solid or dashed. The default value is solid.</dd>",
                     "         *      <dt>dashLength</dt><dd>When the `lineType` is dashed, indicates the length of the dash. The default",
                     "         *      value is 10.</dd>",
                     "         *      <dt>gapSpace</dt><dd>When the `lineType` is dashed, indicates the distance between dashes. The default",
                     "         *      value is 10.</dd>",
                     "         *      <dt>connectDiscontinuousPoints</dt><dd>Indicates whether or not to connect lines when there is a missing",
                     "         *      or null value between points. The default value is true.</dd>",
                     "         *      <dt>discontinuousType</dt><dd>Indicates whether the line between discontinuous points is solid or dashed.",
                     "         *      The default value is solid.</dd>",
                     "         *      <dt>discontinuousDashLength</dt><dd>When the `discontinuousType` is dashed, indicates the length of the",
                     "         *      dash. The default value is 10.</dd>",
                     "         *      <dt>discontinuousGapSpace</dt><dd>When the `discontinuousType` is dashed, indicates the distance between",
                     "         *      dashes. The default value is 10.</dd>", "         *  </dl>", "         *",
                     "         * @attribute styles", "         * @type Object", "         */", "    }", "});", "", "",
                     "", "", "", "", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"series-cartesian\", \"series-line-util\"]});", "",
                     "}());"]
        };
}
var __cov_kIalpKTsT4vDQ9Ipd73_oQ = __coverage__['build/series-line/series-line.js'];
__cov_kIalpKTsT4vDQ9Ipd73_oQ.s['1']++;
YUI.add('series-line', function (Y, NAME) {
    __cov_kIalpKTsT4vDQ9Ipd73_oQ.f['1']++;
    __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['2']++;
    Y.LineSeries = Y.Base.create('lineSeries', Y.CartesianSeries, [Y.Lines], {
        drawSeries: function () {
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.f['2']++;
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['3']++;
            this.drawLines();
        }, _setStyles: function (val) {
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.f['3']++;
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['4']++;
            if (!val.line) {
                __cov_kIalpKTsT4vDQ9Ipd73_oQ.b['1'][0]++;
                __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['5']++;
                val = {line: val};
            } else {
                __cov_kIalpKTsT4vDQ9Ipd73_oQ.b['1'][1]++;
            }
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['6']++;
            return Y.LineSeries.superclass._setStyles.apply(this, [val]);
        }, _getDefaultStyles: function () {
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.f['4']++;
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['7']++;
            var styles = this._mergeStyles({line: this._getLineDefaults()},
                                           Y.LineSeries.superclass._getDefaultStyles());
            __cov_kIalpKTsT4vDQ9Ipd73_oQ.s['8']++;
            return styles;
        }
    }, {ATTRS: {type: {value: 'line'}}});
}, 'patched-v3.18.1', {'requires': ['series-cartesian', 'series-line-util']});
