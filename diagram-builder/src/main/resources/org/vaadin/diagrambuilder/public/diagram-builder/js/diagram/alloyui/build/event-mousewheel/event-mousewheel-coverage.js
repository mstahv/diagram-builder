if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/event-mousewheel/event-mousewheel.js']) {
    __coverage__['build/event-mousewheel/event-mousewheel.js'] =
        {
            "path": "build/event-mousewheel/event-mousewheel.js",
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
                "14": 0
            },
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 28}, "end": {"line": 1, "column": 47}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 9,
                    "loc": {"start": {"line": 9, "column": 14}, "end": {"line": 9, "column": 29}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 40,
                    "loc": {"start": {"line": 40, "column": 8}, "end": {"line": 40, "column": 19}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 44,
                    "loc": {"start": {"line": 44, "column": 12}, "end": {"line": 44, "column": 23}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 50, "column": 45}},
                "2": {"start": {"line": 8, "column": 0}, "end": {"line": 25, "column": 6}},
                "3": {"start": {"line": 10, "column": 8}, "end": {"line": 10, "column": 47}},
                "4": {"start": {"line": 11, "column": 8}, "end": {"line": 16, "column": 9}},
                "5": {"start": {"line": 12, "column": 12}, "end": {"line": 12, "column": 36}},
                "6": {"start": {"line": 13, "column": 12}, "end": {"line": 13, "column": 34}},
                "7": {"start": {"line": 15, "column": 12}, "end": {"line": 15, "column": 34}},
                "8": {"start": {"line": 18, "column": 8}, "end": {"line": 22, "column": 9}},
                "9": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 26}},
                "10": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 35}},
                "11": {"start": {"line": 24, "column": 8}, "end": {"line": 24, "column": 17}},
                "12": {"start": {"line": 39, "column": 0}, "end": {"line": 47, "column": 2}},
                "13": {"start": {"line": 41, "column": 8}, "end": {"line": 41, "column": 51}},
                "14": {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 65}}
            },
            "branchMap": {
                "1": {
                    "line": 11,
                    "type": "if",
                    "locations": [{"start": {"line": 11, "column": 8}, "end": {"line": 11, "column": 8}},
                        {"start": {"line": 11, "column": 8}, "end": {"line": 11, "column": 8}}]
                },
                "2": {
                    "line": 18,
                    "type": "if",
                    "locations": [{"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 8}},
                        {"start": {"line": 18, "column": 8}, "end": {"line": 18, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('event-mousewheel', function (Y, NAME) {", "", "/**",
                     " * Adds mousewheel event support", " * @module event", " * @submodule event-mousewheel", " */",
                     "var DOM_MOUSE_SCROLL = 'DOMMouseScroll',", "    fixArgs = function(args) {",
                     "        var a = Y.Array(args, 0, true), target;", "        if (Y.UA.gecko) {",
                     "            a[0] = DOM_MOUSE_SCROLL;", "            target = Y.config.win;", "        } else {",
                     "            target = Y.config.doc;", "        }", "", "        if (a.length < 3) {",
                     "            a[2] = target;", "        } else {", "            a.splice(2, 0, target);",
                     "        }", "", "        return a;", "    };", "", "/**",
                     " * Mousewheel event.  This listener is automatically attached to the",
                     " * correct target, so one should not be supplied.  Mouse wheel",
                     " * direction and velocity is stored in the 'wheelDelta' field.", " * @event mousewheel",
                     " * @param type {string} 'mousewheel'", " * @param fn {function} the callback to execute",
                     " * @param context optional context object",
                     " * @param args 0..n additional arguments to provide to the listener.",
                     " * @return {EventHandle} the detach handle", " * @for YUI", " */",
                     "Y.Env.evt.plugins.mousewheel = {", "    on: function() {",
                     "        return Y.Event._attach(fixArgs(arguments));", "    },", "", "    detach: function() {",
                     "        return Y.Event.detach.apply(Y.Event, fixArgs(arguments));", "    }", "};", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"node-base\"]});", "", "}());"]
        };
}
var __cov_Xo_bjaLCYmCUa2BefojaXw = __coverage__['build/event-mousewheel/event-mousewheel.js'];
__cov_Xo_bjaLCYmCUa2BefojaXw.s['1']++;
YUI.add('event-mousewheel', function (Y, NAME) {
    __cov_Xo_bjaLCYmCUa2BefojaXw.f['1']++;
    __cov_Xo_bjaLCYmCUa2BefojaXw.s['2']++;
    var DOM_MOUSE_SCROLL = 'DOMMouseScroll', fixArgs = function (args) {
        __cov_Xo_bjaLCYmCUa2BefojaXw.f['2']++;
        __cov_Xo_bjaLCYmCUa2BefojaXw.s['3']++;
        var a = Y.Array(args, 0, true), target;
        __cov_Xo_bjaLCYmCUa2BefojaXw.s['4']++;
        if (Y.UA.gecko) {
            __cov_Xo_bjaLCYmCUa2BefojaXw.b['1'][0]++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['5']++;
            a[0] = DOM_MOUSE_SCROLL;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['6']++;
            target = Y.config.win;
        } else {
            __cov_Xo_bjaLCYmCUa2BefojaXw.b['1'][1]++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['7']++;
            target = Y.config.doc;
        }
        __cov_Xo_bjaLCYmCUa2BefojaXw.s['8']++;
        if (a.length < 3) {
            __cov_Xo_bjaLCYmCUa2BefojaXw.b['2'][0]++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['9']++;
            a[2] = target;
        } else {
            __cov_Xo_bjaLCYmCUa2BefojaXw.b['2'][1]++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['10']++;
            a.splice(2, 0, target);
        }
        __cov_Xo_bjaLCYmCUa2BefojaXw.s['11']++;
        return a;
    };
    __cov_Xo_bjaLCYmCUa2BefojaXw.s['12']++;
    Y.Env.evt.plugins.mousewheel = {
        on: function () {
            __cov_Xo_bjaLCYmCUa2BefojaXw.f['3']++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['13']++;
            return Y.Event._attach(fixArgs(arguments));
        }, detach: function () {
            __cov_Xo_bjaLCYmCUa2BefojaXw.f['4']++;
            __cov_Xo_bjaLCYmCUa2BefojaXw.s['14']++;
            return Y.Event.detach.apply(Y.Event, fixArgs(arguments));
        }
    };
}, 'patched-v3.18.1', {'requires': ['node-base']});
