if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/file/file.js']) {
    __coverage__['build/file/file.js'] =
        {
            "path": "build/file/file.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0},
            "b": {"1": [0, 0], "2": [0, 0, 0, 0]},
            "f": {"1": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 16}, "end": {"line": 1, "column": 35}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 31, "column": 60}},
                "2": {"start": {"line": 20, "column": 1}, "end": {"line": 20, "column": 24}},
                "3": {"start": {"line": 22, "column": 1}, "end": {"line": 28, "column": 2}},
                "4": {"start": {"line": 23, "column": 4}, "end": {"line": 23, "column": 25}},
                "5": {"start": {"line": 27, "column": 4}, "end": {"line": 27, "column": 25}}
            },
            "branchMap": {
                "1": {
                    "line": 22,
                    "type": "if",
                    "locations": [{"start": {"line": 22, "column": 1}, "end": {"line": 22, "column": 1}},
                        {"start": {"line": 22, "column": 1}, "end": {"line": 22, "column": 1}}]
                },
                "2": {
                    "line": 22,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 22, "column": 5}, "end": {"line": 22, "column": 8}},
                        {"start": {"line": 22, "column": 12}, "end": {"line": 22, "column": 20}},
                        {"start": {"line": 22, "column": 24}, "end": {"line": 22, "column": 36}},
                        {"start": {"line": 22, "column": 40}, "end": {"line": 22, "column": 58}}]
                }
            },
            "code": ["(function () { YUI.add('file', function (Y, NAME) {", "", "    /**",
                     "     * The File class provides a wrapper for a file pointer, either through an HTML5",
                     "     * implementation or as a reference to a file pointer stored in Flash. The File wrapper",
                     "     * also implements the mechanics for uploading a file and tracking its progress.",
                     "     * @module file", "     * @main file", "     * @since 3.5.0", "     */", "", "    /**",
                     "     * `Y.File` serves as an alias for either <a href=\"FileFlash.html\">`Y.FileFlash`</a>",
                     "     * or <a href=\"FileHTML5.html\">`Y.FileHTML5`</a>, depending on the feature set available",
                     "     * in a specific browser.", "     *", "     * @class File", "     */", "",
                     " var Win = Y.config.win;", "", " if (Win && Win.File && Win.FormData && Win.XMLHttpRequest) {",
                     "    Y.File = Y.FileHTML5;", " }", "", " else {", "    Y.File = Y.FileFlash;", " }", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"file-flash\", \"file-html5\"]});", "", "}());"]
        };
}
var __cov_ZciwkfoSL0jSnwOwAJi22w = __coverage__['build/file/file.js'];
__cov_ZciwkfoSL0jSnwOwAJi22w.s['1']++;
YUI.add('file', function (Y, NAME) {
    __cov_ZciwkfoSL0jSnwOwAJi22w.f['1']++;
    __cov_ZciwkfoSL0jSnwOwAJi22w.s['2']++;
    var Win = Y.config.win;
    __cov_ZciwkfoSL0jSnwOwAJi22w.s['3']++;
    if ((__cov_ZciwkfoSL0jSnwOwAJi22w.b['2'][0]++, Win) && (__cov_ZciwkfoSL0jSnwOwAJi22w.b['2'][1]++, Win.File)
        && (__cov_ZciwkfoSL0jSnwOwAJi22w.b['2'][2]++, Win.FormData)
        && (__cov_ZciwkfoSL0jSnwOwAJi22w.b['2'][3]++, Win.XMLHttpRequest)) {
        __cov_ZciwkfoSL0jSnwOwAJi22w.b['1'][0]++;
        __cov_ZciwkfoSL0jSnwOwAJi22w.s['4']++;
        Y.File = Y.FileHTML5;
    } else {
        __cov_ZciwkfoSL0jSnwOwAJi22w.b['1'][1]++;
        __cov_ZciwkfoSL0jSnwOwAJi22w.s['5']++;
        Y.File = Y.FileFlash;
    }
}, 'patched-v3.18.1', {'requires': ['file-flash', 'file-html5']});
