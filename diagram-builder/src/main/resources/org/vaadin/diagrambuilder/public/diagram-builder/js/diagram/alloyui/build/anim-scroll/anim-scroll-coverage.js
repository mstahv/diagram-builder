if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/anim-scroll/anim-scroll.js']) {
    __coverage__['build/anim-scroll/anim-scroll.js'] =
        {
            "path": "build/anim-scroll/anim-scroll.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0},
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 23}, "end": {"line": 1, "column": 42}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 14,
                    "loc": {"start": {"line": 14, "column": 9}, "end": {"line": 14, "column": 62}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 30,
                    "loc": {"start": {"line": 30, "column": 9}, "end": {"line": 30, "column": 24}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 38, "column": 45}},
                "2": {"start": {"line": 10, "column": 0}, "end": {"line": 10, "column": 17}},
                "3": {"start": {"line": 13, "column": 0}, "end": {"line": 34, "column": 2}},
                "4": {"start": {"line": 15, "column": 8}, "end": {"line": 20, "column": 11}},
                "5": {"start": {"line": 22, "column": 8}, "end": {"line": 24, "column": 9}},
                "6": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 43}},
                "7": {"start": {"line": 26, "column": 8}, "end": {"line": 28, "column": 9}},
                "8": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 42}},
                "9": {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 30}},
                "10": {"start": {"line": 32, "column": 8}, "end": {"line": 32, "column": 63}}
            },
            "branchMap": {
                "1": {
                    "line": 22,
                    "type": "if",
                    "locations": [{"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 8}},
                        {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 8}}]
                },
                "2": {
                    "line": 26,
                    "type": "if",
                    "locations": [{"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 8}},
                        {"start": {"line": 26, "column": 8}, "end": {"line": 26, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('anim-scroll', function (Y, NAME) {", "", "/**",
                     " * Adds support for the <code>scroll</code> property in <code>to</code>",
                     " * and <code>from</code> attributes.", " * @module anim", " * @submodule anim-scroll", " */", "",
                     "var NUM = Number;", "", "//TODO: deprecate for scrollTop/Left properties?",
                     "Y.Anim.behaviors.scroll = {", "    set: function(anim, att, from, to, elapsed, duration, fn) {",
                     "        var", "            node = anim._node,", "            val = ([",
                     "            fn(elapsed, NUM(from[0]), NUM(to[0]) - NUM(from[0]), duration),",
                     "            fn(elapsed, NUM(from[1]), NUM(to[1]) - NUM(from[1]), duration)", "        ]);", "",
                     "        if (val[0]) {", "            node.set('scrollLeft', val[0]);", "        }", "",
                     "        if (val[1]) {", "            node.set('scrollTop', val[1]);", "        }", "    },",
                     "    get: function(anim) {", "        var node = anim._node;",
                     "        return [node.get('scrollLeft'), node.get('scrollTop')];", "    }", "};", "", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"anim-base\"]});", "", "}());"]
        };
}
var __cov_Y$ghTwscbGchAvCVB9DMFQ = __coverage__['build/anim-scroll/anim-scroll.js'];
__cov_Y$ghTwscbGchAvCVB9DMFQ.s['1']++;
YUI.add('anim-scroll', function (Y, NAME) {
    __cov_Y$ghTwscbGchAvCVB9DMFQ.f['1']++;
    __cov_Y$ghTwscbGchAvCVB9DMFQ.s['2']++;
    var NUM = Number;
    __cov_Y$ghTwscbGchAvCVB9DMFQ.s['3']++;
    Y.Anim.behaviors.scroll = {
        set: function (anim, att, from, to, elapsed, duration, fn) {
            __cov_Y$ghTwscbGchAvCVB9DMFQ.f['2']++;
            __cov_Y$ghTwscbGchAvCVB9DMFQ.s['4']++;
            var node = anim._node, val = [fn(elapsed, NUM(from[0]), NUM(to[0]) - NUM(from[0]), duration),
                                          fn(elapsed, NUM(from[1]), NUM(to[1]) - NUM(from[1]), duration)];
            __cov_Y$ghTwscbGchAvCVB9DMFQ.s['5']++;
            if (val[0]) {
                __cov_Y$ghTwscbGchAvCVB9DMFQ.b['1'][0]++;
                __cov_Y$ghTwscbGchAvCVB9DMFQ.s['6']++;
                node.set('scrollLeft', val[0]);
            } else {
                __cov_Y$ghTwscbGchAvCVB9DMFQ.b['1'][1]++;
            }
            __cov_Y$ghTwscbGchAvCVB9DMFQ.s['7']++;
            if (val[1]) {
                __cov_Y$ghTwscbGchAvCVB9DMFQ.b['2'][0]++;
                __cov_Y$ghTwscbGchAvCVB9DMFQ.s['8']++;
                node.set('scrollTop', val[1]);
            } else {
                __cov_Y$ghTwscbGchAvCVB9DMFQ.b['2'][1]++;
            }
        }, get: function (anim) {
            __cov_Y$ghTwscbGchAvCVB9DMFQ.f['3']++;
            __cov_Y$ghTwscbGchAvCVB9DMFQ.s['9']++;
            var node = anim._node;
            __cov_Y$ghTwscbGchAvCVB9DMFQ.s['10']++;
            return [node.get('scrollLeft'), node.get('scrollTop')];
        }
    };
}, 'patched-v3.18.1', {'requires': ['anim-base']});