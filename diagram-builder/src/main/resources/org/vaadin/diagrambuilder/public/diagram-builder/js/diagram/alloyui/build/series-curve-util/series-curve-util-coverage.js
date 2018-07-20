if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/series-curve-util/series-curve-util.js']) {
    __coverage__['build/series-curve-util/series-curve-util.js'] =
        {
            "path": "build/series-curve-util/series-curve-util.js",
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
                "19": 0,
                "20": 0,
                "21": 0,
                "22": 0,
                "23": 0,
                "24": 0,
                "25": 0,
                "26": 0,
                "27": 0,
                "28": 0,
                "29": 0,
                "30": 0,
                "31": 0,
                "32": 0,
                "33": 0,
                "34": 0,
                "35": 0,
                "36": 0,
                "37": 0,
                "38": 0,
                "39": 0,
                "40": 0,
                "41": 0,
                "42": 0
            },
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 29}, "end": {"line": 1, "column": 48}}
                },
                "2": {
                    "name": "CurveUtil",
                    "line": 16,
                    "loc": {"start": {"line": 16, "column": 0}, "end": {"line": 17, "column": 0}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 30,
                    "loc": {"start": {"line": 30, "column": 27}, "end": {"line": 31, "column": 4}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 109,
                    "loc": {"start": {"line": 109, "column": 19}, "end": {"line": 110, "column": 4}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 135, "column": 16}},
                "2": {"start": {"line": 16, "column": 0}, "end": {"line": 18, "column": 1}},
                "3": {"start": {"line": 20, "column": 0}, "end": {"line": 131, "column": 2}},
                "4": {"start": {"line": 32, "column": 2}, "end": {"line": 36, "column": 23}},
                "5": {"start": {"line": 40, "column": 2}, "end": {"line": 43, "column": 3}},
                "6": {"start": {"line": 42, "column": 3}, "end": {"line": 42, "column": 15}},
                "7": {"start": {"line": 45, "column": 8}, "end": {"line": 50, "column": 10}},
                "8": {"start": {"line": 53, "column": 8}, "end": {"line": 60, "column": 3}},
                "9": {"start": {"line": 55, "column": 3}, "end": {"line": 55, "column": 59}},
                "10": {"start": {"line": 56, "column": 3}, "end": {"line": 56, "column": 59}},
                "11": {"start": {"line": 57, "column": 3}, "end": {"line": 57, "column": 62}},
                "12": {"start": {"line": 58, "column": 12}, "end": {"line": 58, "column": 71}},
                "13": {"start": {"line": 59, "column": 12}, "end": {"line": 59, "column": 29}},
                "14": {"start": {"line": 62, "column": 2}, "end": {"line": 72, "column": 3}},
                "15": {"start": {"line": 64, "column": 3}, "end": {"line": 69, "column": 15}},
                "16": {"start": {"line": 70, "column": 3}, "end": {"line": 70, "column": 48}},
                "17": {"start": {"line": 71, "column": 3}, "end": {"line": 71, "column": 46}},
                "18": {"start": {"line": 74, "column": 2}, "end": {"line": 74, "column": 45}},
                "19": {"start": {"line": 75, "column": 2}, "end": {"line": 75, "column": 55}},
                "20": {"start": {"line": 76, "column": 2}, "end": {"line": 76, "column": 48}},
                "21": {"start": {"line": 77, "column": 8}, "end": {"line": 77, "column": 51}},
                "22": {"start": {"line": 78, "column": 2}, "end": {"line": 78, "column": 55}},
                "23": {"start": {"line": 79, "column": 2}, "end": {"line": 79, "column": 48}},
                "24": {"start": {"line": 81, "column": 8}, "end": {"line": 96, "column": 3}},
                "25": {"start": {"line": 83, "column": 3}, "end": {"line": 83, "column": 46}},
                "26": {"start": {"line": 84, "column": 12}, "end": {"line": 84, "column": 55}},
                "27": {"start": {"line": 86, "column": 3}, "end": {"line": 95, "column": 4}},
                "28": {"start": {"line": 88, "column": 4}, "end": {"line": 88, "column": 66}},
                "29": {"start": {"line": 89, "column": 16}, "end": {"line": 89, "column": 78}},
                "30": {"start": {"line": 93, "column": 4}, "end": {"line": 93, "column": 66}},
                "31": {"start": {"line": 94, "column": 16}, "end": {"line": 94, "column": 78}},
                "32": {"start": {"line": 98, "column": 2}, "end": {"line": 98, "column": 19}},
                "33": {"start": {"line": 111, "column": 2}, "end": {"line": 115, "column": 18}},
                "34": {"start": {"line": 116, "column": 2}, "end": {"line": 116, "column": 21}},
                "35": {"start": {"line": 117, "column": 2}, "end": {"line": 122, "column": 3}},
                "36": {"start": {"line": 119, "column": 3}, "end": {"line": 119, "column": 16}},
                "37": {"start": {"line": 120, "column": 3}, "end": {"line": 120, "column": 38}},
                "38": {"start": {"line": 121, "column": 3}, "end": {"line": 121, "column": 33}},
                "39": {"start": {"line": 124, "column": 2}, "end": {"line": 127, "column": 3}},
                "40": {"start": {"line": 126, "column": 3}, "end": {"line": 126, "column": 33}},
                "41": {"start": {"line": 129, "column": 2}, "end": {"line": 129, "column": 11}},
                "42": {"start": {"line": 132, "column": 0}, "end": {"line": 132, "column": 24}}
            },
            "branchMap": {
                "1": {
                    "line": 40,
                    "type": "if",
                    "locations": [{"start": {"line": 40, "column": 2}, "end": {"line": 40, "column": 2}},
                        {"start": {"line": 40, "column": 2}, "end": {"line": 40, "column": 2}}]
                },
                "2": {
                    "line": 53,
                    "type": "if",
                    "locations": [{"start": {"line": 53, "column": 8}, "end": {"line": 53, "column": 8}},
                        {"start": {"line": 53, "column": 8}, "end": {"line": 53, "column": 8}}]
                },
                "3": {
                    "line": 86,
                    "type": "if",
                    "locations": [{"start": {"line": 86, "column": 3}, "end": {"line": 86, "column": 3}},
                        {"start": {"line": 86, "column": 3}, "end": {"line": 86, "column": 3}}]
                },
                "4": {
                    "line": 120,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 120, "column": 18}, "end": {"line": 120, "column": 21}},
                        {"start": {"line": 120, "column": 24}, "end": {"line": 120, "column": 27}}]
                }
            },
            "code": ["(function () { YUI.add('series-curve-util', function (Y, NAME) {", "", "/**",
                     " * Provides functionality for drawing curves in a series.", " *", " * @module charts",
                     " * @submodule series-curve-util", " */", "/**",
                     " * Utility class used for calculating curve points.", " *", " * @class CurveUtil",
                     " * @constructor", " * @submodule series-curve-util", " */", "function CurveUtil()", "{", "}", "",
                     "CurveUtil.prototype = {", "    /**",
                     "     * Creates an array of start, end and control points for splines.", "     *",
                     "     * @method getCurveControlPoints",
                     "     * @param {Array} xcoords Collection of x-coordinates used for calculate the curves",
                     "     * @param {Array} ycoords Collection of y-coordinates used for calculate the curves",
                     "     * @return Object", "     * @protected", "     */",
                     "    getCurveControlPoints: function(xcoords, ycoords)", "    {", "\t\tvar outpoints = [],",
                     "            i = 1,", "            l = xcoords.length - 1,", "            xvals = [],",
                     "            yvals = [];", "", "", "\t\t// Too few points, need at least two", "\t\tif (l < 1)",
                     "        {", "\t\t\treturn null;", "\t\t}", "", "        outpoints[0] = {",
                     "            startx: xcoords[0],", "            starty: ycoords[0],",
                     "            endx: xcoords[1],", "            endy: ycoords[1]", "        };", "",
                     "\t\t// Special case, the Bezier should be a straight line", "        if (l === 1)", "        {",
                     "\t\t\toutpoints[0].ctrlx1 = (2.0*xcoords[0] + xcoords[1])/3.0;",
                     "\t\t\toutpoints[0].ctrly2 = (2.0*ycoords[0] + ycoords[1])/3.0;",
                     "\t\t\toutpoints[0].ctrlx2 = 2.0*outpoints[0].ctrlx1 - xcoords[0];",
                     "            outpoints[0].ctrly2 = 2.0*outpoints[0].ctrly1 - ycoords[0];",
                     "            return outpoints;", "\t\t}", "", "\t\tfor (; i < l; ++i)", "        {",
                     "\t\t\toutpoints.push({", "                startx: Math.round(xcoords[i]),",
                     "                starty: Math.round(ycoords[i]),",
                     "                endx: Math.round(xcoords[i+1]),",
                     "                endy: Math.round(ycoords[i+1])", "            });",
                     "\t\t\txvals[i] = 4.0 * xcoords[i] + 2*xcoords[i+1];",
                     "\t\t\tyvals[i] = 4.0*ycoords[i] + 2*ycoords[i+1];", "\t\t}", "",
                     "\t\txvals[0] = xcoords[0] + (2.0 * xcoords[1]);",
                     "\t\txvals[l-1] = (8.0 * xcoords[l-1] + xcoords[l]) / 2.0;",
                     "\t\txvals = this.getControlPoints(xvals.concat());",
                     "        yvals[0] = ycoords[0] + (2.0 * ycoords[1]);",
                     "\t\tyvals[l-1] = (8.0 * ycoords[l-1] + ycoords[l]) / 2.0;",
                     "\t\tyvals = this.getControlPoints(yvals.concat());", "", "        for (i = 0; i < l; ++i)",
                     "        {", "\t\t\toutpoints[i].ctrlx1 = Math.round(xvals[i]);",
                     "            outpoints[i].ctrly1 = Math.round(yvals[i]);", "", "\t\t\tif (i < l-1)",
                     "            {", "\t\t\t\toutpoints[i].ctrlx2 = Math.round(2*xcoords[i+1] - xvals[i+1]);",
                     "                outpoints[i].ctrly2 = Math.round(2*ycoords[i+1] - yvals[i+1]);", "\t\t\t}",
                     "\t\t\telse", "            {",
                     "\t\t\t\toutpoints[i].ctrlx2 = Math.round((xcoords[l] + xvals[l-1])/2);",
                     "                outpoints[i].ctrly2 = Math.round((ycoords[l] + yvals[l-1])/2);", "\t\t\t}",
                     "\t\t}", "", "\t\treturn outpoints;", "\t},", "", "    /**",
                     "     * Gets the control points for the curve.", "     *", "     * @method getControlPoints",
                     "     * @param {Array} vals Collection of values coords used to generate control points.",
                     "     * @return Array", "     * @private", "     */", "\tgetControlPoints: function(vals)",
                     "    {", "\t\tvar l = vals.length,", "            x = [],", "            tmp = [],",
                     "            b = 2.0,", "            i = 1;", "\t\tx[0] = vals[0] / b;", "\t\tfor (; i < l; ++i)",
                     "        {", "\t\t\ttmp[i] = 1/b;", "\t\t\tb = (i < l-1 ? 4.0 : 3.5) - tmp[i];",
                     "\t\t\tx[i] = (vals[i] - x[i-1]) / b;", "\t\t}", "", "\t\tfor (i = 1; i < l; ++i)", "        {",
                     "\t\t\tx[l-i-1] -= tmp[l-i] * x[l-i];", "\t\t}", "", "\t\treturn x;", "\t}", "};",
                     "Y.CurveUtil = CurveUtil;", "", "", "}, 'patched-v3.18.1');", "", "}());"]
        };
}
var __cov_mWnDM_l744c4RzzfJBCyLw = __coverage__['build/series-curve-util/series-curve-util.js'];
__cov_mWnDM_l744c4RzzfJBCyLw.s['1']++;
YUI.add('series-curve-util', function (Y, NAME) {
    __cov_mWnDM_l744c4RzzfJBCyLw.f['1']++;
    __cov_mWnDM_l744c4RzzfJBCyLw.s['2']++;

    function CurveUtil() {
        __cov_mWnDM_l744c4RzzfJBCyLw.f['2']++;
    }

    __cov_mWnDM_l744c4RzzfJBCyLw.s['3']++;
    CurveUtil.prototype = {
        getCurveControlPoints: function (xcoords, ycoords) {
            __cov_mWnDM_l744c4RzzfJBCyLw.f['3']++;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['4']++;
            var outpoints = [], i = 1, l = xcoords.length - 1, xvals = [], yvals = [];
            __cov_mWnDM_l744c4RzzfJBCyLw.s['5']++;
            if (l < 1) {
                __cov_mWnDM_l744c4RzzfJBCyLw.b['1'][0]++;
                __cov_mWnDM_l744c4RzzfJBCyLw.s['6']++;
                return null;
            } else {
                __cov_mWnDM_l744c4RzzfJBCyLw.b['1'][1]++;
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['7']++;
            outpoints[0] = {startx: xcoords[0], starty: ycoords[0], endx: xcoords[1], endy: ycoords[1]};
            __cov_mWnDM_l744c4RzzfJBCyLw.s['8']++;
            if (l === 1) {
                __cov_mWnDM_l744c4RzzfJBCyLw.b['2'][0]++;
                __cov_mWnDM_l744c4RzzfJBCyLw.s['9']++;
                outpoints[0].ctrlx1 = (2 * xcoords[0] + xcoords[1]) / 3;
                __cov_mWnDM_l744c4RzzfJBCyLw.s['10']++;
                outpoints[0].ctrly2 = (2 * ycoords[0] + ycoords[1]) / 3;
                __cov_mWnDM_l744c4RzzfJBCyLw.s['11']++;
                outpoints[0].ctrlx2 = 2 * outpoints[0].ctrlx1 - xcoords[0];
                __cov_mWnDM_l744c4RzzfJBCyLw.s['12']++;
                outpoints[0].ctrly2 = 2 * outpoints[0].ctrly1 - ycoords[0];
                __cov_mWnDM_l744c4RzzfJBCyLw.s['13']++;
                return outpoints;
            } else {
                __cov_mWnDM_l744c4RzzfJBCyLw.b['2'][1]++;
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['14']++;
            for (; i < l; ++i) {
                __cov_mWnDM_l744c4RzzfJBCyLw.s['15']++;
                outpoints.push({
                                   startx: Math.round(xcoords[i]),
                                   starty: Math.round(ycoords[i]),
                                   endx: Math.round(xcoords[i + 1]),
                                   endy: Math.round(ycoords[i + 1])
                               });
                __cov_mWnDM_l744c4RzzfJBCyLw.s['16']++;
                xvals[i] = 4 * xcoords[i] + 2 * xcoords[i + 1];
                __cov_mWnDM_l744c4RzzfJBCyLw.s['17']++;
                yvals[i] = 4 * ycoords[i] + 2 * ycoords[i + 1];
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['18']++;
            xvals[0] = xcoords[0] + 2 * xcoords[1];
            __cov_mWnDM_l744c4RzzfJBCyLw.s['19']++;
            xvals[l - 1] = (8 * xcoords[l - 1] + xcoords[l]) / 2;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['20']++;
            xvals = this.getControlPoints(xvals.concat());
            __cov_mWnDM_l744c4RzzfJBCyLw.s['21']++;
            yvals[0] = ycoords[0] + 2 * ycoords[1];
            __cov_mWnDM_l744c4RzzfJBCyLw.s['22']++;
            yvals[l - 1] = (8 * ycoords[l - 1] + ycoords[l]) / 2;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['23']++;
            yvals = this.getControlPoints(yvals.concat());
            __cov_mWnDM_l744c4RzzfJBCyLw.s['24']++;
            for (i = 0; i < l; ++i) {
                __cov_mWnDM_l744c4RzzfJBCyLw.s['25']++;
                outpoints[i].ctrlx1 = Math.round(xvals[i]);
                __cov_mWnDM_l744c4RzzfJBCyLw.s['26']++;
                outpoints[i].ctrly1 = Math.round(yvals[i]);
                __cov_mWnDM_l744c4RzzfJBCyLw.s['27']++;
                if (i < l - 1) {
                    __cov_mWnDM_l744c4RzzfJBCyLw.b['3'][0]++;
                    __cov_mWnDM_l744c4RzzfJBCyLw.s['28']++;
                    outpoints[i].ctrlx2 = Math.round(2 * xcoords[i + 1] - xvals[i + 1]);
                    __cov_mWnDM_l744c4RzzfJBCyLw.s['29']++;
                    outpoints[i].ctrly2 = Math.round(2 * ycoords[i + 1] - yvals[i + 1]);
                } else {
                    __cov_mWnDM_l744c4RzzfJBCyLw.b['3'][1]++;
                    __cov_mWnDM_l744c4RzzfJBCyLw.s['30']++;
                    outpoints[i].ctrlx2 = Math.round((xcoords[l] + xvals[l - 1]) / 2);
                    __cov_mWnDM_l744c4RzzfJBCyLw.s['31']++;
                    outpoints[i].ctrly2 = Math.round((ycoords[l] + yvals[l - 1]) / 2);
                }
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['32']++;
            return outpoints;
        }, getControlPoints: function (vals) {
            __cov_mWnDM_l744c4RzzfJBCyLw.f['4']++;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['33']++;
            var l = vals.length, x = [], tmp = [], b = 2, i = 1;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['34']++;
            x[0] = vals[0] / b;
            __cov_mWnDM_l744c4RzzfJBCyLw.s['35']++;
            for (; i < l; ++i) {
                __cov_mWnDM_l744c4RzzfJBCyLw.s['36']++;
                tmp[i] = 1 / b;
                __cov_mWnDM_l744c4RzzfJBCyLw.s['37']++;
                b =
                    (i < l - 1 ? (__cov_mWnDM_l744c4RzzfJBCyLw.b['4'][0]++, 4)
                               : (__cov_mWnDM_l744c4RzzfJBCyLw.b['4'][1]++, 3.5)) - tmp[i];
                __cov_mWnDM_l744c4RzzfJBCyLw.s['38']++;
                x[i] = (vals[i] - x[i - 1]) / b;
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['39']++;
            for (i = 1; i < l; ++i) {
                __cov_mWnDM_l744c4RzzfJBCyLw.s['40']++;
                x[l - i - 1] -= tmp[l - i] * x[l - i];
            }
            __cov_mWnDM_l744c4RzzfJBCyLw.s['41']++;
            return x;
        }
    };
    __cov_mWnDM_l744c4RzzfJBCyLw.s['42']++;
    Y.CurveUtil = CurveUtil;
}, 'patched-v3.18.1');
