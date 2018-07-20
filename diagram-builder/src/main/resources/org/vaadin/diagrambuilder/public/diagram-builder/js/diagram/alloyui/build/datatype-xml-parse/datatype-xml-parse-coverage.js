if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datatype-xml-parse/datatype-xml-parse.js']) {
    __coverage__['build/datatype-xml-parse/datatype-xml-parse.js'] =
        {
            "path": "build/datatype-xml-parse/datatype-xml-parse.js",
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
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0, 0]},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 30}, "end": {"line": 1, "column": 49}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 19,
                    "loc": {"start": {"line": 19, "column": 11}, "end": {"line": 19, "column": 26}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 49, "column": 16}},
                "2": {"start": {"line": 11, "column": 0}, "end": {"line": 40, "column": 3}},
                "3": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 31}},
                "4": {"start": {"line": 21, "column": 8}, "end": {"line": 33, "column": 9}},
                "5": {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 31}},
                "6": {"start": {"line": 23, "column": 12}, "end": {"line": 32, "column": 13}},
                "7": {"start": {"line": 24, "column": 16}, "end": {"line": 24, "column": 63}},
                "8": {"start": {"line": 25, "column": 16}, "end": {"line": 25, "column": 37}},
                "9": {"start": {"line": 26, "column": 16}, "end": {"line": 26, "column": 37}},
                "10": {"start": {"line": 27, "column": 19}, "end": {"line": 32, "column": 13}},
                "11": {"start": {"line": 28, "column": 16}, "end": {"line": 28, "column": 75}},
                "12": {"start": {"line": 29, "column": 19}, "end": {"line": 32, "column": 13}},
                "13": {"start": {"line": 30, "column": 16}, "end": {"line": 30, "column": 64}},
                "14": {"start": {"line": 31, "column": 16}, "end": {"line": 31, "column": 37}},
                "15": {"start": {"line": 35, "column": 8}, "end": {"line": 36, "column": 9}},
                "16": {"start": {"line": 38, "column": 8}, "end": {"line": 38, "column": 22}},
                "17": {"start": {"line": 43, "column": 0}, "end": {"line": 43, "column": 41}},
                "18": {"start": {"line": 45, "column": 0}, "end": {"line": 45, "column": 24}},
                "19": {"start": {"line": 46, "column": 0}, "end": {"line": 46, "column": 23}}
            },
            "branchMap": {
                "1": {
                    "line": 21,
                    "type": "if",
                    "locations": [{"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 8}},
                        {"start": {"line": 21, "column": 8}, "end": {"line": 21, "column": 8}}]
                },
                "2": {
                    "line": 23,
                    "type": "if",
                    "locations": [{"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 12}},
                        {"start": {"line": 23, "column": 12}, "end": {"line": 23, "column": 12}}]
                },
                "3": {
                    "line": 27,
                    "type": "if",
                    "locations": [{"start": {"line": 27, "column": 19}, "end": {"line": 27, "column": 19}},
                        {"start": {"line": 27, "column": 19}, "end": {"line": 27, "column": 19}}]
                },
                "4": {
                    "line": 29,
                    "type": "if",
                    "locations": [{"start": {"line": 29, "column": 19}, "end": {"line": 29, "column": 19}},
                        {"start": {"line": 29, "column": 19}, "end": {"line": 29, "column": 19}}]
                },
                "5": {
                    "line": 35,
                    "type": "if",
                    "locations": [{"start": {"line": 35, "column": 8}, "end": {"line": 35, "column": 8}},
                        {"start": {"line": 35, "column": 8}, "end": {"line": 35, "column": 8}}]
                },
                "6": {
                    "line": 35,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 35, "column": 12}, "end": {"line": 35, "column": 27}},
                        {"start": {"line": 35, "column": 31}, "end": {"line": 35, "column": 62}},
                        {"start": {"line": 35, "column": 66}, "end": {"line": 35, "column": 115}}]
                }
            },
            "code": ["(function () { YUI.add('datatype-xml-parse', function (Y, NAME) {", "", "/**",
                     " * Parse XML submodule.", " *", " * @module datatype-xml", " * @submodule datatype-xml-parse",
                     " * @for XML", " */", "", "Y.mix(Y.namespace(\"XML\"), {", "    /**",
                     "     * Converts data to type XMLDocument.", "     *", "     * @method parse",
                     "     * @param data {String} Data to convert.", "     * @return {XMLDocument} XML Document.",
                     "     */", "    parse: function(data) {", "        var xmlDoc = null, win;",
                     "        if (typeof data === \"string\") {", "            win = Y.config.win;",
                     "            if (win.ActiveXObject !== undefined) {",
                     "                xmlDoc = new ActiveXObject(\"Microsoft.XMLDOM\");",
                     "                xmlDoc.async = false;", "                xmlDoc.loadXML(data);",
                     "            } else if (win.DOMParser !== undefined) {",
                     "                xmlDoc = new DOMParser().parseFromString(data, \"text/xml\");",
                     "            } else if (win.Windows !== undefined) {",
                     "                xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();",
                     "                xmlDoc.loadXml(data);", "            }", "        }", "",
                     "        if (xmlDoc === null || xmlDoc.documentElement === null || xmlDoc.documentElement.nodeName === \"parsererror\") {",
                     "        }", "", "        return xmlDoc;", "    }", "});", "", "// Add Parsers shortcut",
                     "Y.namespace(\"Parsers\").xml = Y.XML.parse;", "", "Y.namespace(\"DataType\");",
                     "Y.DataType.XML = Y.XML;", "", "", "}, 'patched-v3.18.1');", "", "}());"]
        };
}
var __cov_aDcHjqsnP3l5XnJlFVoVOw = __coverage__['build/datatype-xml-parse/datatype-xml-parse.js'];
__cov_aDcHjqsnP3l5XnJlFVoVOw.s['1']++;
YUI.add('datatype-xml-parse', function (Y, NAME) {
    __cov_aDcHjqsnP3l5XnJlFVoVOw.f['1']++;
    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['2']++;
    Y.mix(Y.namespace('XML'), {
        parse: function (data) {
            __cov_aDcHjqsnP3l5XnJlFVoVOw.f['2']++;
            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['3']++;
            var xmlDoc = null, win;
            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['4']++;
            if (typeof data === 'string') {
                __cov_aDcHjqsnP3l5XnJlFVoVOw.b['1'][0]++;
                __cov_aDcHjqsnP3l5XnJlFVoVOw.s['5']++;
                win = Y.config.win;
                __cov_aDcHjqsnP3l5XnJlFVoVOw.s['6']++;
                if (win.ActiveXObject !== undefined) {
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.b['2'][0]++;
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['7']++;
                    xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['8']++;
                    xmlDoc.async = false;
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['9']++;
                    xmlDoc.loadXML(data);
                } else {
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.b['2'][1]++;
                    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['10']++;
                    if (win.DOMParser !== undefined) {
                        __cov_aDcHjqsnP3l5XnJlFVoVOw.b['3'][0]++;
                        __cov_aDcHjqsnP3l5XnJlFVoVOw.s['11']++;
                        xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                    } else {
                        __cov_aDcHjqsnP3l5XnJlFVoVOw.b['3'][1]++;
                        __cov_aDcHjqsnP3l5XnJlFVoVOw.s['12']++;
                        if (win.Windows !== undefined) {
                            __cov_aDcHjqsnP3l5XnJlFVoVOw.b['4'][0]++;
                            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['13']++;
                            xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
                            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['14']++;
                            xmlDoc.loadXml(data);
                        } else {
                            __cov_aDcHjqsnP3l5XnJlFVoVOw.b['4'][1]++;
                        }
                    }
                }
            } else {
                __cov_aDcHjqsnP3l5XnJlFVoVOw.b['1'][1]++;
            }
            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['15']++;
            if ((__cov_aDcHjqsnP3l5XnJlFVoVOw.b['6'][0]++, xmlDoc === null)
                || (__cov_aDcHjqsnP3l5XnJlFVoVOw.b['6'][1]++, xmlDoc.documentElement === null)
                || (__cov_aDcHjqsnP3l5XnJlFVoVOw.b['6'][2]++, xmlDoc.documentElement.nodeName === 'parsererror')) {
                __cov_aDcHjqsnP3l5XnJlFVoVOw.b['5'][0]++;
            } else {
                __cov_aDcHjqsnP3l5XnJlFVoVOw.b['5'][1]++;
            }
            __cov_aDcHjqsnP3l5XnJlFVoVOw.s['16']++;
            return xmlDoc;
        }
    });
    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['17']++;
    Y.namespace('Parsers').xml = Y.XML.parse;
    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['18']++;
    Y.namespace('DataType');
    __cov_aDcHjqsnP3l5XnJlFVoVOw.s['19']++;
    Y.DataType.XML = Y.XML;
}, 'patched-v3.18.1');
