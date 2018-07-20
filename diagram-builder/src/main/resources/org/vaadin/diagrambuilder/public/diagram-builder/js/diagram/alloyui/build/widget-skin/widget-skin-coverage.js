if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/widget-skin/widget-skin.js']) {
    __coverage__['build/widget-skin/widget-skin.js'] =
        {
            "path": "build/widget-skin/widget-skin.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0},
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 23}, "end": {"line": 1, "column": 42}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 38,
                    "loc": {"start": {"line": 38, "column": 33}, "end": {"line": 38, "column": 55}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 49,
                    "loc": {"start": {"line": 49, "column": 23}, "end": {"line": 49, "column": 41}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 59, "column": 47}},
                "2": {"start": {"line": 9, "column": 0}, "end": {"line": 12, "column": 52}},
                "3": {"start": {"line": 38, "column": 0}, "end": {"line": 56, "column": 2}},
                "4": {"start": {"line": 40, "column": 4}, "end": {"line": 42, "column": 15}},
                "5": {"start": {"line": 44, "column": 4}, "end": {"line": 44, "column": 55}},
                "6": {"start": {"line": 46, "column": 4}, "end": {"line": 46, "column": 57}},
                "7": {"start": {"line": 48, "column": 4}, "end": {"line": 53, "column": 5}},
                "8": {"start": {"line": 49, "column": 8}, "end": {"line": 52, "column": 12}},
                "9": {"start": {"line": 50, "column": 12}, "end": {"line": 50, "column": 60}},
                "10": {"start": {"line": 51, "column": 12}, "end": {"line": 51, "column": 25}},
                "11": {"start": {"line": 55, "column": 4}, "end": {"line": 55, "column": 39}}
            },
            "branchMap": {
                "1": {
                    "line": 40,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 40, "column": 15}, "end": {"line": 40, "column": 38}},
                        {"start": {"line": 40, "column": 42}, "end": {"line": 40, "column": 66}}]
                },
                "2": {
                    "line": 44,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 44, "column": 17}, "end": {"line": 44, "column": 27}},
                        {"start": {"line": 44, "column": 31}, "end": {"line": 44, "column": 54}}]
                },
                "3": {
                    "line": 48,
                    "type": "if",
                    "locations": [{"start": {"line": 48, "column": 4}, "end": {"line": 48, "column": 4}},
                        {"start": {"line": 48, "column": 4}, "end": {"line": 48, "column": 4}}]
                },
                "4": {
                    "line": 55,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 55, "column": 23}, "end": {"line": 55, "column": 31}},
                        {"start": {"line": 55, "column": 34}, "end": {"line": 55, "column": 38}}]
                }
            },
            "code": ["(function () { YUI.add('widget-skin', function (Y, NAME) {", "", "/**",
                     " * Provides skin related utlility methods.", " *", " * @module widget",
                     " * @submodule widget-skin", " */", "var BOUNDING_BOX = \"boundingBox\",",
                     "    CONTENT_BOX = \"contentBox\",", "    SKIN = \"skin\",",
                     "    _getClassName = Y.ClassNameManager.getClassName;", "", "/**",
                     " * Returns the name of the skin that's currently applied to the widget.", " *",
                     " * Searches up the Widget's ancestor axis for, by default, a class",
                     " * yui3-skin-(name), and returns the (name) portion. Otherwise, returns null.", " *",
                     " * This is only really useful after the widget's DOM structure is in the",
                     " * document, either by render or by progressive enhancement.", " *", " * @method getSkinName",
                     " * @for Widget",
                     " * @param {String} [skinPrefix] The prefix which the implementation uses for the skin",
                     " * (\"yui3-skin-\" is the default).", " *",
                     " * NOTE: skinPrefix will be used as part of a regular expression:", " *",
                     " *     new RegExp('\\\\b' + skinPrefix + '(\\\\S+)')", " *",
                     " * Although an unlikely use case, literal characters which may result in an invalid",
                     " * regular expression should be escaped.", " *",
                     " * @return {String} The name of the skin, or null, if a matching skin class is not found.", " */",
                     "", "Y.Widget.prototype.getSkinName = function (skinPrefix) {", "",
                     "    var root = this.get( CONTENT_BOX ) || this.get( BOUNDING_BOX ),", "        match,",
                     "        search;", "", "    skinPrefix = skinPrefix || _getClassName(SKIN, \"\");", "",
                     "    search = new RegExp( '\\\\b' + skinPrefix + '(\\\\S+)' );", "", "    if ( root ) {",
                     "        root.ancestor( function ( node ) {",
                     "            match = node.get( 'className' ).match( search );", "            return match;",
                     "        } );", "    }", "", "    return ( match ) ? match[1] : null;", "};", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"widget-base\"]});", "", "}());"]
        };
}
var __cov_$BY6DPuG15cm7t9XDoEhcA = __coverage__['build/widget-skin/widget-skin.js'];
__cov_$BY6DPuG15cm7t9XDoEhcA.s['1']++;
YUI.add('widget-skin', function (Y, NAME) {
    __cov_$BY6DPuG15cm7t9XDoEhcA.f['1']++;
    __cov_$BY6DPuG15cm7t9XDoEhcA.s['2']++;
    var BOUNDING_BOX = 'boundingBox', CONTENT_BOX = 'contentBox', SKIN = 'skin',
        _getClassName = Y.ClassNameManager.getClassName;
    __cov_$BY6DPuG15cm7t9XDoEhcA.s['3']++;
    Y.Widget.prototype.getSkinName = function (skinPrefix) {
        __cov_$BY6DPuG15cm7t9XDoEhcA.f['2']++;
        __cov_$BY6DPuG15cm7t9XDoEhcA.s['4']++;
        var root = (__cov_$BY6DPuG15cm7t9XDoEhcA.b['1'][0]++, this.get(CONTENT_BOX))
                   || (__cov_$BY6DPuG15cm7t9XDoEhcA.b['1'][1]++, this.get(BOUNDING_BOX)), match, search;
        __cov_$BY6DPuG15cm7t9XDoEhcA.s['5']++;
        skinPrefix =
            (__cov_$BY6DPuG15cm7t9XDoEhcA.b['2'][0]++, skinPrefix)
            || (__cov_$BY6DPuG15cm7t9XDoEhcA.b['2'][1]++, _getClassName(SKIN, ''));
        __cov_$BY6DPuG15cm7t9XDoEhcA.s['6']++;
        search = new RegExp('\\b' + skinPrefix + '(\\S+)');
        __cov_$BY6DPuG15cm7t9XDoEhcA.s['7']++;
        if (root) {
            __cov_$BY6DPuG15cm7t9XDoEhcA.b['3'][0]++;
            __cov_$BY6DPuG15cm7t9XDoEhcA.s['8']++;
            root.ancestor(function (node) {
                __cov_$BY6DPuG15cm7t9XDoEhcA.f['3']++;
                __cov_$BY6DPuG15cm7t9XDoEhcA.s['9']++;
                match = node.get('className').match(search);
                __cov_$BY6DPuG15cm7t9XDoEhcA.s['10']++;
                return match;
            });
        } else {
            __cov_$BY6DPuG15cm7t9XDoEhcA.b['3'][1]++;
        }
        __cov_$BY6DPuG15cm7t9XDoEhcA.s['11']++;
        return match ? (__cov_$BY6DPuG15cm7t9XDoEhcA.b['4'][0]++, match[1])
                     : (__cov_$BY6DPuG15cm7t9XDoEhcA.b['4'][1]++, null);
    };
}, 'patched-v3.18.1', {'requires': ['widget-base']});
