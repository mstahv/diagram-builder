if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/json-stringify/json-stringify.js']) {
    __coverage__['build/json-stringify/json-stringify.js'] =
        {
            "path": "build/json-stringify/json-stringify.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 26}, "end": {"line": 1, "column": 45}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 26,
                    "loc": {"start": {"line": 26, "column": 18}, "end": {"line": 26, "column": 31}}
                },
                "3": {
                    "name": "_zeroPad",
                    "line": 27,
                    "loc": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 29}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 66,
                    "loc": {"start": {"line": 66, "column": 15}, "end": {"line": 66, "column": 27}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 99, "column": 44}},
                "2": {"start": {"line": 11, "column": 0}, "end": {"line": 12, "column": 37}},
                "3": {"start": {"line": 14, "column": 0}, "end": {"line": 96, "column": 3}},
                "4": {"start": {"line": 27, "column": 8}, "end": {"line": 29, "column": 9}},
                "5": {"start": {"line": 28, "column": 12}, "end": {"line": 28, "column": 40}},
                "6": {"start": {"line": 31, "column": 8}, "end": {"line": 36, "column": 50}},
                "7": {"start": {"line": 67, "column": 8}, "end": {"line": 67, "column": 55}}
            },
            "branchMap": {
                "1": {
                    "line": 28,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 28, "column": 28}, "end": {"line": 28, "column": 35}},
                        {"start": {"line": 28, "column": 38}, "end": {"line": 28, "column": 39}}]
                }
            },
            "code": ["(function () { YUI.add('json-stringify', function (Y, NAME) {", "", "/**",
                     " * Provides Y.JSON.stringify method for converting objects to JSON strings.", " *",
                     " * @module json", " * @submodule json-stringify", " * @for JSON", " * @static", " */",
                     "var COLON     = ':',", "    _JSON     = Y.config.global.JSON;", "",
                     "Y.mix(Y.namespace('JSON'), {", "    /**",
                     "     * Serializes a Date instance as a UTC date string.  Used internally by",
                     "     * stringify.  Override this method if you need Dates serialized in a",
                     "     * different format.", "     *", "     * @method dateToString",
                     "     * @param d {Date} The Date to serialize",
                     "     * @return {String} stringified Date in UTC format YYYY-MM-DDTHH:mm:SSZ",
                     "     * @deprecated Use a replacer function", "     * @static", "     */",
                     "    dateToString: function (d) {", "        function _zeroPad(v) {",
                     "            return v < 10 ? '0' + v : v;", "        }", "",
                     "        return d.getUTCFullYear()           + '-' +",
                     "              _zeroPad(d.getUTCMonth() + 1) + '-' +",
                     "              _zeroPad(d.getUTCDate())      + 'T' +",
                     "              _zeroPad(d.getUTCHours())     + COLON +",
                     "              _zeroPad(d.getUTCMinutes())   + COLON +",
                     "              _zeroPad(d.getUTCSeconds())   + 'Z';", "    },", "", "    /**",
                     "     * <p>Converts an arbitrary value to a JSON string representation.</p>", "     *",
                     "     * <p>Objects with cyclical references will trigger an exception.</p>", "     *",
                     "     * <p>If a whitelist is provided, only matching object keys will be",
                     "     * included.  Alternately, a replacer function may be passed as the",
                     "     * second parameter.  This function is executed on every value in the",
                     "     * input, and its return value will be used in place of the original value.",
                     "     * This is useful to serialize specialized objects or class instances.</p>", "     *",
                     "     * <p>If a positive integer or non-empty string is passed as the third",
                     "     * parameter, the output will be formatted with carriage returns and",
                     "     * indentation for readability.  If a String is passed (such as \"\\t\") it",
                     "     * will be used once for each indentation level.  If a number is passed,",
                     "     * that number of spaces will be used.</p>", "     *", "     * @method stringify",
                     "     * @param o {MIXED} any arbitrary value to convert to JSON string",
                     "     * @param w {Array|Function} (optional) whitelist of acceptable object",
                     "     *                  keys to include, or a replacer function to modify the",
                     "     *                  raw value before serialization",
                     "     * @param ind {Number|String} (optional) indentation character or depth of",
                     "     *                  spaces to format the output.",
                     "     * @return {string} JSON string representation of the input", "     * @static", "     */",
                     "    stringify: function () {", "        return _JSON.stringify.apply(_JSON, arguments);",
                     "    },", "", "    /**",
                     "     * <p>Number of occurrences of a special character within a single call to",
                     "     * stringify that should trigger promotion of that character to a dedicated",
                     "     * preprocess step for future calls.  This is only used in environments",
                     "     * that don't support native JSON, or when useNativeJSONStringify is set to",
                     "     * false.</p>", "     *",
                     "     * <p>So, if set to 50 and an object is passed to stringify that includes",
                     "     * strings containing the special character \\x07 more than 50 times,",
                     "     * subsequent calls to stringify will process object strings through a",
                     "     * faster serialization path for \\x07 before using the generic, slower,",
                     "     * replacement process for all special characters.</p>", "     *",
                     "     * <p>To prime the preprocessor cache, set this value to 1, then call",
                     "     * <code>Y.JSON.stringify(\"<em>(all special characters to",
                     "     * cache)</em>\");</code>, then return this setting to a more conservative",
                     "     * value.</p>", "     *",
                     "     * <p>Special characters \\ \" \\b \\t \\n \\f \\r are already cached.</p>", "     *",
                     "     * @property charCacheThreshold", "     * @static", "     * @default 100",
                     "     * @type {Number}", "     */", "    charCacheThreshold: 100", "});", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"yui-base\"]});", "", "}());"]
        };
}
var __cov_sVNg4Z4WLk99zPCD9nqL4w = __coverage__['build/json-stringify/json-stringify.js'];
__cov_sVNg4Z4WLk99zPCD9nqL4w.s['1']++;
YUI.add('json-stringify', function (Y, NAME) {
    __cov_sVNg4Z4WLk99zPCD9nqL4w.f['1']++;
    __cov_sVNg4Z4WLk99zPCD9nqL4w.s['2']++;
    var COLON = ':', _JSON = Y.config.global.JSON;
    __cov_sVNg4Z4WLk99zPCD9nqL4w.s['3']++;
    Y.mix(Y.namespace('JSON'), {
        dateToString: function (d) {
            __cov_sVNg4Z4WLk99zPCD9nqL4w.f['2']++;
            __cov_sVNg4Z4WLk99zPCD9nqL4w.s['4']++;

            function _zeroPad(v) {
                __cov_sVNg4Z4WLk99zPCD9nqL4w.f['3']++;
                __cov_sVNg4Z4WLk99zPCD9nqL4w.s['5']++;
                return v < 10 ? (__cov_sVNg4Z4WLk99zPCD9nqL4w.b['1'][0]++, '0' + v)
                              : (__cov_sVNg4Z4WLk99zPCD9nqL4w.b['1'][1]++, v);
            }

            __cov_sVNg4Z4WLk99zPCD9nqL4w.s['6']++;
            return d.getUTCFullYear() + '-' + _zeroPad(d.getUTCMonth() + 1) + '-' + _zeroPad(d.getUTCDate()) + 'T'
                   + _zeroPad(d.getUTCHours()) + COLON + _zeroPad(d.getUTCMinutes()) + COLON + _zeroPad(
                    d.getUTCSeconds()) + 'Z';
        }, stringify: function () {
            __cov_sVNg4Z4WLk99zPCD9nqL4w.f['4']++;
            __cov_sVNg4Z4WLk99zPCD9nqL4w.s['7']++;
            return _JSON.stringify.apply(_JSON, arguments);
        }, charCacheThreshold: 100
    });
}, 'patched-v3.18.1', {'requires': ['yui-base']});
