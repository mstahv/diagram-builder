if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datatype-date-parse/datatype-date-parse.js']) {
    __coverage__['build/datatype-date-parse/datatype-date-parse.js'] =
        {
            "path": "build/datatype-date-parse/datatype-date-parse.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0},
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 31}, "end": {"line": 1, "column": 50}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 18,
                    "loc": {"start": {"line": 18, "column": 11}, "end": {"line": 18, "column": 26}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 35, "column": 16}},
                "2": {"start": {"line": 10, "column": 0}, "end": {"line": 26, "column": 3}},
                "3": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 42}},
                "4": {"start": {"line": 20, "column": 8}, "end": {"line": 24, "column": 9}},
                "5": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 23}},
                "6": {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 24}},
                "7": {"start": {"line": 29, "column": 0}, "end": {"line": 29, "column": 43}},
                "8": {"start": {"line": 31, "column": 0}, "end": {"line": 31, "column": 24}},
                "9": {"start": {"line": 32, "column": 0}, "end": {"line": 32, "column": 25}}
            },
            "branchMap": {
                "1": {
                    "line": 19,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 19, "column": 27}, "end": {"line": 19, "column": 32}},
                        {"start": {"line": 19, "column": 36}, "end": {"line": 19, "column": 40}}]
                },
                "2": {
                    "line": 20,
                    "type": "if",
                    "locations": [{"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 8}},
                        {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('datatype-date-parse', function (Y, NAME) {", "", "/**",
                     " * Parse number submodule.", " *", " * @module datatype-date",
                     " * @submodule datatype-date-parse", " * @for Date", " */", "Y.mix(Y.namespace(\"Date\"), {",
                     "    /**", "     * Converts data to type Date.", "     *", "     * @method parse",
                     "     * @param data {Date|Number|String} date object, timestamp (string or number), or string parsable by Date.parse",
                     "     * @return {Date} a Date object or null if unable to parse", "     */",
                     "    parse: function(data) {", "        var val = new Date(+data || data);",
                     "        if (Y.Lang.isDate(val)) {", "            return val;", "        } else {",
                     "            return null;", "        }", "    }", "});", "", "// Add Parsers shortcut",
                     "Y.namespace(\"Parsers\").date = Y.Date.parse;", "", "Y.namespace(\"DataType\");",
                     "Y.DataType.Date = Y.Date;", "", "", "}, 'patched-v3.18.1');", "", "}());"]
        };
}
var __cov_aGPMKf1ehajkwXQ9npW2$A = __coverage__['build/datatype-date-parse/datatype-date-parse.js'];
__cov_aGPMKf1ehajkwXQ9npW2$A.s['1']++;
YUI.add('datatype-date-parse', function (Y, NAME) {
    __cov_aGPMKf1ehajkwXQ9npW2$A.f['1']++;
    __cov_aGPMKf1ehajkwXQ9npW2$A.s['2']++;
    Y.mix(Y.namespace('Date'), {
        parse: function (data) {
            __cov_aGPMKf1ehajkwXQ9npW2$A.f['2']++;
            __cov_aGPMKf1ehajkwXQ9npW2$A.s['3']++;
            var val = new Date((__cov_aGPMKf1ehajkwXQ9npW2$A.b['1'][0]++, +data)
                               || (__cov_aGPMKf1ehajkwXQ9npW2$A.b['1'][1]++, data));
            __cov_aGPMKf1ehajkwXQ9npW2$A.s['4']++;
            if (Y.Lang.isDate(val)) {
                __cov_aGPMKf1ehajkwXQ9npW2$A.b['2'][0]++;
                __cov_aGPMKf1ehajkwXQ9npW2$A.s['5']++;
                return val;
            } else {
                __cov_aGPMKf1ehajkwXQ9npW2$A.b['2'][1]++;
                __cov_aGPMKf1ehajkwXQ9npW2$A.s['6']++;
                return null;
            }
        }
    });
    __cov_aGPMKf1ehajkwXQ9npW2$A.s['7']++;
    Y.namespace('Parsers').date = Y.Date.parse;
    __cov_aGPMKf1ehajkwXQ9npW2$A.s['8']++;
    Y.namespace('DataType');
    __cov_aGPMKf1ehajkwXQ9npW2$A.s['9']++;
    Y.DataType.Date = Y.Date;
}, 'patched-v3.18.1');
