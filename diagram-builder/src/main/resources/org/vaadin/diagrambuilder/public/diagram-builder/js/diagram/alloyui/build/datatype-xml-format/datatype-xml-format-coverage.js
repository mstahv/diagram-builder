if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datatype-xml-format/datatype-xml-format.js']) {
    __coverage__['build/datatype-xml-format/datatype-xml-format.js'] =
        {
            "path": "build/datatype-xml-format/datatype-xml-format.js",
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
                "13": 0
            },
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0]},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 31}, "end": {"line": 1, "column": 50}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 27,
                    "loc": {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 27}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 52, "column": 16}},
                "2": {"start": {"line": 17, "column": 0}, "end": {"line": 17, "column": 18}},
                "3": {"start": {"line": 19, "column": 0}, "end": {"line": 46, "column": 3}},
                "4": {"start": {"line": 28, "column": 8}, "end": {"line": 44, "column": 9}},
                "5": {"start": {"line": 29, "column": 12}, "end": {"line": 31, "column": 13}},
                "6": {"start": {"line": 30, "column": 16}, "end": {"line": 30, "column": 37}},
                "7": {"start": {"line": 33, "column": 12}, "end": {"line": 35, "column": 13}},
                "8": {"start": {"line": 34, "column": 16}, "end": {"line": 34, "column": 69}},
                "9": {"start": {"line": 38, "column": 12}, "end": {"line": 43, "column": 13}},
                "10": {"start": {"line": 39, "column": 16}, "end": {"line": 39, "column": 32}},
                "11": {"start": {"line": 42, "column": 16}, "end": {"line": 42, "column": 84}},
                "12": {"start": {"line": 48, "column": 0}, "end": {"line": 48, "column": 24}},
                "13": {"start": {"line": 49, "column": 0}, "end": {"line": 49, "column": 23}}
            },
            "branchMap": {
                "1": {
                    "line": 29,
                    "type": "if",
                    "locations": [{"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 12}},
                        {"start": {"line": 29, "column": 12}, "end": {"line": 29, "column": 12}}]
                },
                "2": {
                    "line": 33,
                    "type": "if",
                    "locations": [{"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 12}},
                        {"start": {"line": 33, "column": 12}, "end": {"line": 33, "column": 12}}]
                },
                "3": {
                    "line": 38,
                    "type": "if",
                    "locations": [{"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 12}},
                        {"start": {"line": 38, "column": 12}, "end": {"line": 38, "column": 12}}]
                },
                "4": {
                    "line": 38,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 38, "column": 15}, "end": {"line": 38, "column": 19}},
                        {"start": {"line": 38, "column": 23}, "end": {"line": 38, "column": 31}}]
                },
                "5": {
                    "line": 42,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 42, "column": 63}, "end": {"line": 42, "column": 78}},
                        {"start": {"line": 42, "column": 81}, "end": {"line": 42, "column": 83}}]
                },
                "6": {
                    "line": 42,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 42, "column": 24}, "end": {"line": 42, "column": 42}},
                        {"start": {"line": 42, "column": 46}, "end": {"line": 42, "column": 59}}]
                }
            },
            "code": ["(function () { YUI.add('datatype-xml-format', function (Y, NAME) {", "", "/**",
                     " * The Number Utility provides type-conversion and string-formatting",
                     " * convenience methods for Numbers.", " *", " * @module datatype-xml",
                     " * @submodule datatype-xml-format", " */", "", "/**",
                     " * XML provides a set of utility functions to operate against XML documents.", " *",
                     " * @class XML", " * @static", " */", "var LANG = Y.Lang;", "", "Y.mix(Y.namespace(\"XML\"), {",
                     "    /**", "     * Converts data to type XMLDocument.", "     *", "     * @method format",
                     "     * @param data {XMLDocument} Data to convert.", "     * @return {String} String.", "     */",
                     "    format: function(data) {", "        try {",
                     "            if(!LANG.isUndefined(data.getXml)) {", "                return data.getXml();",
                     "            }", "", "            if(!LANG.isUndefined(XMLSerializer)) {",
                     "                return (new XMLSerializer()).serializeToString(data);", "            }",
                     "        }", "        catch(e) {", "            if(data && data.xml) {",
                     "                return data.xml;", "            }", "            else {",
                     "                return (LANG.isValue(data) && data.toString) ? data.toString() : \"\";",
                     "            }", "        }", "    }", "});", "", "Y.namespace(\"DataType\");",
                     "Y.DataType.XML = Y.XML;", "", "", "}, 'patched-v3.18.1');", "", "}());"]
        };
}
var __cov_ZDfQP3YCi1IlHK3w5m00iA = __coverage__['build/datatype-xml-format/datatype-xml-format.js'];
__cov_ZDfQP3YCi1IlHK3w5m00iA.s['1']++;
YUI.add('datatype-xml-format', function (Y, NAME) {
    __cov_ZDfQP3YCi1IlHK3w5m00iA.f['1']++;
    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['2']++;
    var LANG = Y.Lang;
    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['3']++;
    Y.mix(Y.namespace('XML'), {
        format: function (data) {
            __cov_ZDfQP3YCi1IlHK3w5m00iA.f['2']++;
            __cov_ZDfQP3YCi1IlHK3w5m00iA.s['4']++;
            try {
                __cov_ZDfQP3YCi1IlHK3w5m00iA.s['5']++;
                if (!LANG.isUndefined(data.getXml)) {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['1'][0]++;
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['6']++;
                    return data.getXml();
                } else {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['1'][1]++;
                }
                __cov_ZDfQP3YCi1IlHK3w5m00iA.s['7']++;
                if (!LANG.isUndefined(XMLSerializer)) {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['2'][0]++;
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['8']++;
                    return new XMLSerializer().serializeToString(data);
                } else {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['2'][1]++;
                }
            } catch (e) {
                __cov_ZDfQP3YCi1IlHK3w5m00iA.s['9']++;
                if ((__cov_ZDfQP3YCi1IlHK3w5m00iA.b['4'][0]++, data)
                    && (__cov_ZDfQP3YCi1IlHK3w5m00iA.b['4'][1]++, data.xml)) {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['3'][0]++;
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['10']++;
                    return data.xml;
                } else {
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.b['3'][1]++;
                    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['11']++;
                    return (__cov_ZDfQP3YCi1IlHK3w5m00iA.b['6'][0]++, LANG.isValue(data))
                           && (__cov_ZDfQP3YCi1IlHK3w5m00iA.b['6'][1]++, data.toString)
                           ? (__cov_ZDfQP3YCi1IlHK3w5m00iA.b['5'][0]++, data.toString())
                           : (__cov_ZDfQP3YCi1IlHK3w5m00iA.b['5'][1]++, '');
                }
            }
        }
    });
    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['12']++;
    Y.namespace('DataType');
    __cov_ZDfQP3YCi1IlHK3w5m00iA.s['13']++;
    Y.DataType.XML = Y.XML;
}, 'patched-v3.18.1');
