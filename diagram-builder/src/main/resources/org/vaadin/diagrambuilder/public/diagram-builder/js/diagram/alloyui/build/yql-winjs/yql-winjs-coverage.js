if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/yql-winjs/yql-winjs.js']) {
    __coverage__['build/yql-winjs/yql-winjs.js'] =
        {
            "path": "build/yql-winjs/yql-winjs.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0},
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 21}, "end": {"line": 1, "column": 40}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 11,
                    "loc": {"start": {"line": 11, "column": 31}, "end": {"line": 11, "column": 49}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 16,
                    "loc": {"start": {"line": 16, "column": 29}, "end": {"line": 16, "column": 41}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 27,
                    "loc": {"start": {"line": 27, "column": 23}, "end": {"line": 27, "column": 34}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 34, "column": 39}},
                "2": {"start": {"line": 11, "column": 0}, "end": {"line": 31, "column": 2}},
                "3": {"start": {"line": 12, "column": 4}, "end": {"line": 13, "column": 14}},
                "4": {"start": {"line": 15, "column": 4}, "end": {"line": 15, "column": 31}},
                "5": {"start": {"line": 16, "column": 4}, "end": {"line": 23, "column": 6}},
                "6": {"start": {"line": 17, "column": 8}, "end": {"line": 22, "column": 9}},
                "7": {"start": {"line": 19, "column": 12}, "end": {"line": 19, "column": 32}},
                "8": {"start": {"line": 21, "column": 12}, "end": {"line": 21, "column": 55}},
                "9": {"start": {"line": 24, "column": 4}, "end": {"line": 24, "column": 15}},
                "10": {"start": {"line": 27, "column": 4}, "end": {"line": 30, "column": 27}},
                "11": {"start": {"line": 28, "column": 8}, "end": {"line": 28, "column": 20}},
                "12": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 39}}
            },
            "branchMap": {
                "1": {
                    "line": 17,
                    "type": "if",
                    "locations": [{"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 8}},
                        {"start": {"line": 17, "column": 8}, "end": {"line": 17, "column": 8}}]
                },
                "2": {
                    "line": 30,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 30, "column": 7}, "end": {"line": 30, "column": 16}},
                        {"start": {"line": 30, "column": 20}, "end": {"line": 30, "column": 25}}]
                }
            },
            "code": ["(function () { YUI.add('yql-winjs', function (Y, NAME) {", "", "/**",
                     "* WinJS plugin for YQL to use native XHR to make requests instead of JSONP.",
                     "* Not required by the user, it's conditionally loaded and should \"just work\".", "* @module yql",
                     "* @submodule yql-winjs", "*/", "", "//Over writes Y.YQLRequest._send to use IO instead of JSONP",
                     "Y.YQLRequest.prototype._send = function (url, o) {", "    var req = new XMLHttpRequest(),",
                     "        timer;", "", "    req.open('GET', url, true);",
                     "    req.onreadystatechange = function () {", "        if (req.readyState === 4) { //Complete",
                     "            //No status code check here, since the YQL service will return JSON",
                     "            clearTimeout(timer);",
                     "            //No need to \"call\" this, YQL handles the context",
                     "            o.on.success(JSON.parse(req.responseText));", "        }", "    };",
                     "    req.send();", "", "    //Simple timer to catch no connections",
                     "    timer = setTimeout(function() {", "        req.abort();",
                     "        o.on.timeout('script timeout');", "    }, o.timeout || 30000);", "};", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"yql\"]});", "", "}());"]
        };
}
var __cov_O1a$A7VqrNQcpOmwaSWXmQ = __coverage__['build/yql-winjs/yql-winjs.js'];
__cov_O1a$A7VqrNQcpOmwaSWXmQ.s['1']++;
YUI.add('yql-winjs', function (Y, NAME) {
    __cov_O1a$A7VqrNQcpOmwaSWXmQ.f['1']++;
    __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['2']++;
    Y.YQLRequest.prototype._send = function (url, o) {
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.f['2']++;
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['3']++;
        var req = new XMLHttpRequest(), timer;
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['4']++;
        req.open('GET', url, true);
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['5']++;
        req.onreadystatechange = function () {
            __cov_O1a$A7VqrNQcpOmwaSWXmQ.f['3']++;
            __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['6']++;
            if (req.readyState === 4) {
                __cov_O1a$A7VqrNQcpOmwaSWXmQ.b['1'][0]++;
                __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['7']++;
                clearTimeout(timer);
                __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['8']++;
                o.on.success(JSON.parse(req.responseText));
            } else {
                __cov_O1a$A7VqrNQcpOmwaSWXmQ.b['1'][1]++;
            }
        };
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['9']++;
        req.send();
        __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['10']++;
        timer = setTimeout(function () {
            __cov_O1a$A7VqrNQcpOmwaSWXmQ.f['4']++;
            __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['11']++;
            req.abort();
            __cov_O1a$A7VqrNQcpOmwaSWXmQ.s['12']++;
            o.on.timeout('script timeout');
        }, (__cov_O1a$A7VqrNQcpOmwaSWXmQ.b['2'][0]++, o.timeout) || (__cov_O1a$A7VqrNQcpOmwaSWXmQ.b['2'][1]++, 30000));
    };
}, 'patched-v3.18.1', {'requires': ['yql']});
