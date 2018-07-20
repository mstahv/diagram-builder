if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/arraylist-filter/arraylist-filter.js']) {
    __coverage__['build/arraylist-filter/arraylist-filter.js'] =
        {
            "path": "build/arraylist-filter/arraylist-filter.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 28}, "end": {"line": 1, "column": 47}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 28,
                    "loc": {"start": {"line": 28, "column": 12}, "end": {"line": 28, "column": 32}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 31,
                    "loc": {"start": {"line": 31, "column": 34}, "end": {"line": 31, "column": 52}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 45, "column": 45}},
                "2": {"start": {"line": 13, "column": 0}, "end": {"line": 42, "column": 3}},
                "3": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 23}},
                "4": {"start": {"line": 31, "column": 8}, "end": {"line": 37, "column": 17}},
                "5": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 32}},
                "6": {"start": {"line": 34, "column": 12}, "end": {"line": 36, "column": 13}},
                "7": {"start": {"line": 35, "column": 16}, "end": {"line": 35, "column": 33}},
                "8": {"start": {"line": 39, "column": 8}, "end": {"line": 39, "column": 43}}
            },
            "branchMap": {
                "1": {
                    "line": 34,
                    "type": "if",
                    "locations": [{"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 12}},
                        {"start": {"line": 34, "column": 12}, "end": {"line": 34, "column": 12}}]
                }
            },
            "code": ["(function () { YUI.add('arraylist-filter', function (Y, NAME) {", "", "/**",
                     " * Collection utilities beyond what is provided in the YUI core", " * @module collection",
                     " * @submodule arraylist-filter",
                     " * @deprecated Use ModelList or a custom subclass implementation", " */", "", "/*",
                     " * Adds filter method to ArrayList prototype", " */", "Y.mix(Y.ArrayList.prototype, {", "",
                     "    /**", "     * <p>Create a new ArrayList (or augmenting class instance) from a subset",
                     "     * of items as determined by the boolean function passed as the",
                     "     * argument.  The original ArrayList is unchanged.</p>", "     *",
                     "     * <p>The validator signature is <code>validator( item )</code>.</p>", "     *",
                     "     * @method filter",
                     "     * @param { Function } validator Boolean function to determine in or out.",
                     "     * @return { ArrayList } New instance based on who passed the validator.",
                     "     * @for ArrayList", "     * @deprecated Use ModelList or a custom subclass implementation",
                     "     */", "    filter: function(validator) {", "        var items = [];", "",
                     "        Y.Array.each(this._items, function(item, i) {", "            item = this.item(i);", "",
                     "            if (validator(item)) {", "                items.push(item);", "            }",
                     "        }, this);", "", "        return new this.constructor(items);", "    }", "", "});", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"arraylist\"]});", "", "}());"]
        };
}
var __cov_zltZY$orFy6OiZP2nVgZeQ = __coverage__['build/arraylist-filter/arraylist-filter.js'];
__cov_zltZY$orFy6OiZP2nVgZeQ.s['1']++;
YUI.add('arraylist-filter', function (Y, NAME) {
    __cov_zltZY$orFy6OiZP2nVgZeQ.f['1']++;
    __cov_zltZY$orFy6OiZP2nVgZeQ.s['2']++;
    Y.mix(Y.ArrayList.prototype, {
        filter: function (validator) {
            __cov_zltZY$orFy6OiZP2nVgZeQ.f['2']++;
            __cov_zltZY$orFy6OiZP2nVgZeQ.s['3']++;
            var items = [];
            __cov_zltZY$orFy6OiZP2nVgZeQ.s['4']++;
            Y.Array.each(this._items, function (item, i) {
                __cov_zltZY$orFy6OiZP2nVgZeQ.f['3']++;
                __cov_zltZY$orFy6OiZP2nVgZeQ.s['5']++;
                item = this.item(i);
                __cov_zltZY$orFy6OiZP2nVgZeQ.s['6']++;
                if (validator(item)) {
                    __cov_zltZY$orFy6OiZP2nVgZeQ.b['1'][0]++;
                    __cov_zltZY$orFy6OiZP2nVgZeQ.s['7']++;
                    items.push(item);
                } else {
                    __cov_zltZY$orFy6OiZP2nVgZeQ.b['1'][1]++;
                }
            }, this);
            __cov_zltZY$orFy6OiZP2nVgZeQ.s['8']++;
            return new this.constructor(items);
        }
    });
}, 'patched-v3.18.1', {'requires': ['arraylist']});
