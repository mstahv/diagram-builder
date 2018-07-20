if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/editor-tab/editor-tab.js']) {
    __coverage__['build/editor-tab/editor-tab.js'] =
        {
            "path": "build/editor-tab/editor-tab.js",
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
                "15": 0
            },
            "b": {"1": [0, 0], "2": [0, 0], "3": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 22}, "end": {"line": 1, "column": 41}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 13,
                    "loc": {"start": {"line": 13, "column": 20}, "end": {"line": 13, "column": 31}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 24,
                    "loc": {"start": {"line": 24, "column": 23}, "end": {"line": 24, "column": 35}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 39,
                    "loc": {"start": {"line": 39, "column": 21}, "end": {"line": 39, "column": 32}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 68, "column": 47}},
                "2": {"start": {"line": 13, "column": 4}, "end": {"line": 15, "column": 21}},
                "3": {"start": {"line": 14, "column": 8}, "end": {"line": 14, "column": 64}},
                "4": {"start": {"line": 17, "column": 4}, "end": {"line": 60, "column": 7}},
                "5": {"start": {"line": 25, "column": 12}, "end": {"line": 25, "column": 34}},
                "6": {"start": {"line": 27, "column": 12}, "end": {"line": 37, "column": 13}},
                "7": {"start": {"line": 28, "column": 16}, "end": {"line": 36, "column": 17}},
                "8": {"start": {"line": 29, "column": 20}, "end": {"line": 29, "column": 42}},
                "9": {"start": {"line": 30, "column": 20}, "end": {"line": 30, "column": 39}},
                "10": {"start": {"line": 31, "column": 20}, "end": {"line": 33, "column": 21}},
                "11": {"start": {"line": 32, "column": 24}, "end": {"line": 32, "column": 43}},
                "12": {"start": {"line": 35, "column": 20}, "end": {"line": 35, "column": 59}},
                "13": {"start": {"line": 40, "column": 12}, "end": {"line": 40, "column": 78}},
                "14": {"start": {"line": 63, "column": 4}, "end": {"line": 63, "column": 26}},
                "15": {"start": {"line": 65, "column": 4}, "end": {"line": 65, "column": 35}}
            },
            "branchMap": {
                "1": {
                    "line": 27,
                    "type": "if",
                    "locations": [{"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 12}},
                        {"start": {"line": 27, "column": 12}, "end": {"line": 27, "column": 12}}]
                },
                "2": {
                    "line": 28,
                    "type": "if",
                    "locations": [{"start": {"line": 28, "column": 16}, "end": {"line": 28, "column": 16}},
                        {"start": {"line": 28, "column": 16}, "end": {"line": 28, "column": 16}}]
                },
                "3": {
                    "line": 31,
                    "type": "if",
                    "locations": [{"start": {"line": 31, "column": 20}, "end": {"line": 31, "column": 20}},
                        {"start": {"line": 31, "column": 20}, "end": {"line": 31, "column": 20}}]
                }
            },
            "code": ["(function () { YUI.add('editor-tab', function (Y, NAME) {", "", "", "    /**",
                     "     * Handles tab and shift-tab indent/outdent support.", "     * @class Plugin.EditorTab",
                     "     * @constructor", "     * @extends Base", "     * @module editor",
                     "     * @submodule editor-tab", "     */", "", "    var EditorTab = function() {",
                     "        EditorTab.superclass.constructor.apply(this, arguments);", "    }, HOST = 'host';", "",
                     "    Y.extend(EditorTab, Y.Base, {", "        /**",
                     "        * Listener for host's nodeChange event and captures the tabkey interaction.",
                     "        * @private", "        * @method _onNodeChange",
                     "        * @param {Event} e The Event facade passed from the host.", "        */",
                     "        _onNodeChange: function(e) {", "            var action = 'indent';", "",
                     "            if (e.changedType === 'tab') {",
                     "                if (!e.changedNode.test('li, li *')) {",
                     "                    e.changedEvent.halt();", "                    e.preventDefault();",
                     "                    if (e.changedEvent.shiftKey) {",
                     "                        action = 'outdent';", "                    }", "",
                     "                    this.get(HOST).execCommand(action, '');", "                }",
                     "            }", "        },", "        initializer: function() {",
                     "            this.get(HOST).on('nodeChange', Y.bind(this._onNodeChange, this));", "        }",
                     "    }, {", "        /**", "        * editorTab", "        * @property NAME", "        * @static",
                     "        */", "        NAME: 'editorTab',", "        /**", "        * tab",
                     "        * @property NS", "        * @static", "        */", "        NS: 'tab',",
                     "        ATTRS: {", "            host: {", "                value: false", "            }",
                     "        }", "    });", "", "", "    Y.namespace('Plugin');", "",
                     "    Y.Plugin.EditorTab = EditorTab;", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"editor-base\"]});", "", "}());"]
        };
}
var __cov_kvQhY1OPWAEEai_Bu7T_aA = __coverage__['build/editor-tab/editor-tab.js'];
__cov_kvQhY1OPWAEEai_Bu7T_aA.s['1']++;
YUI.add('editor-tab', function (Y, NAME) {
    __cov_kvQhY1OPWAEEai_Bu7T_aA.f['1']++;
    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['2']++;
    var EditorTab = function () {
        __cov_kvQhY1OPWAEEai_Bu7T_aA.f['2']++;
        __cov_kvQhY1OPWAEEai_Bu7T_aA.s['3']++;
        EditorTab.superclass.constructor.apply(this, arguments);
    }, HOST = 'host';
    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['4']++;
    Y.extend(EditorTab, Y.Base, {
        _onNodeChange: function (e) {
            __cov_kvQhY1OPWAEEai_Bu7T_aA.f['3']++;
            __cov_kvQhY1OPWAEEai_Bu7T_aA.s['5']++;
            var action = 'indent';
            __cov_kvQhY1OPWAEEai_Bu7T_aA.s['6']++;
            if (e.changedType === 'tab') {
                __cov_kvQhY1OPWAEEai_Bu7T_aA.b['1'][0]++;
                __cov_kvQhY1OPWAEEai_Bu7T_aA.s['7']++;
                if (!e.changedNode.test('li, li *')) {
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.b['2'][0]++;
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['8']++;
                    e.changedEvent.halt();
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['9']++;
                    e.preventDefault();
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['10']++;
                    if (e.changedEvent.shiftKey) {
                        __cov_kvQhY1OPWAEEai_Bu7T_aA.b['3'][0]++;
                        __cov_kvQhY1OPWAEEai_Bu7T_aA.s['11']++;
                        action = 'outdent';
                    } else {
                        __cov_kvQhY1OPWAEEai_Bu7T_aA.b['3'][1]++;
                    }
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['12']++;
                    this.get(HOST).execCommand(action, '');
                } else {
                    __cov_kvQhY1OPWAEEai_Bu7T_aA.b['2'][1]++;
                }
            } else {
                __cov_kvQhY1OPWAEEai_Bu7T_aA.b['1'][1]++;
            }
        }, initializer: function () {
            __cov_kvQhY1OPWAEEai_Bu7T_aA.f['4']++;
            __cov_kvQhY1OPWAEEai_Bu7T_aA.s['13']++;
            this.get(HOST).on('nodeChange', Y.bind(this._onNodeChange, this));
        }
    }, {NAME: 'editorTab', NS: 'tab', ATTRS: {host: {value: false}}});
    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['14']++;
    Y.namespace('Plugin');
    __cov_kvQhY1OPWAEEai_Bu7T_aA.s['15']++;
    Y.Plugin.EditorTab = EditorTab;
}, 'patched-v3.18.1', {'requires': ['editor-base']});
