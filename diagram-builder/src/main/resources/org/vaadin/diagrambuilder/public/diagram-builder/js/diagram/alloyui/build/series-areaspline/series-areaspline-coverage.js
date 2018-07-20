if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-areaspline/series-areaspline.js']) {
    __coverage__['build/series-areaspline/series-areaspline.js'] =
        {
            "path": "build/series-areaspline/series-areaspline.js",
            "s": {"1": 0, "2": 0, "3": 0},
            "b": {},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 29}, "end": {"line": 1, "column": 48}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 27,
                    "loc": {"start": {"line": 27, "column": 16}, "end": {"line": 28, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 63, "column": 68}},
                "2": {"start": {"line": 19, "column": 0}, "end": {"line": 59, "column": 3}},
                "3": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 30}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('series-areaspline', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for creating an areaspline series.", " *", " * @module charts",
                     " * @submodule series-areaspline", " */", "/**",
                     " * AreaSplineSeries renders an area graph with data points connected by a curve.", " *",
                     " * @class AreaSplineSeries", " * @extends AreaSeries", " * @uses CurveUtil", " * @constructor",
                     " * @param {Object} config (optional) Configuration parameters.",
                     " * @submodule series-areaspline", " */",
                     "Y.AreaSplineSeries = Y.Base.create(\"areaSplineSeries\", Y.AreaSeries, [Y.CurveUtil], {",
                     "    /**", "     * @protected", "     *", "     * Draws the series.", "     *",
                     "     * @method drawSeries", "     */", "    drawSeries: function()", "    {",
                     "        this.drawAreaSpline();", "    }", "}, {", "\tATTRS : {", "        /**",
                     "         * Read-only attribute indicating the type of series.", "         *",
                     "         * @attribute type", "         * @type String", "         * @default areaSpline",
                     "         */", "        type: {", "            value:\"areaSpline\"", "        }", "",
                     "        /**",
                     "         * Style properties used for drawing area fills. This attribute is inherited from `Renderer`. Below are the default values:",
                     "         *", "         *  <dl>",
                     "         *      <dt>color</dt><dd>The color of the fill. The default value is determined by the order of the series on the graph. The color will be",
                     "         *      retrieved from the following array:",
                     "         *      `[\"#66007f\", \"#a86f41\", \"#295454\", \"#996ab2\", \"#e8cdb7\", \"#90bdbd\",\"#000000\",\"#c3b8ca\", \"#968373\", \"#678585\"]`",
                     "         *      </dd>",
                     "         *      <dt>alpha</dt><dd>Number between 0 and 1 that indicates the opacity of the fill. The default value is 1</dd>",
                     "         *  </dl>", "         *", "         * @attribute styles", "         * @type Object",
                     "         */", "    }", "});", "", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"series-area\", \"series-curve-util\"]});", "", "}());"]
        };
}
var __cov_zBKwvg$7thgKD1FuXc74fw = __coverage__['build/series-areaspline/series-areaspline.js'];
__cov_zBKwvg$7thgKD1FuXc74fw.s['1']++;
YUI.add('series-areaspline', function (Y, NAME) {
    __cov_zBKwvg$7thgKD1FuXc74fw.f['1']++;
    __cov_zBKwvg$7thgKD1FuXc74fw.s['2']++;
    Y.AreaSplineSeries = Y.Base.create('areaSplineSeries', Y.AreaSeries, [Y.CurveUtil], {
        drawSeries: function () {
            __cov_zBKwvg$7thgKD1FuXc74fw.f['2']++;
            __cov_zBKwvg$7thgKD1FuXc74fw.s['3']++;
            this.drawAreaSpline();
        }
    }, {ATTRS: {type: {value: 'areaSpline'}}});
}, 'patched-v3.18.1', {'requires': ['series-area', 'series-curve-util']});
