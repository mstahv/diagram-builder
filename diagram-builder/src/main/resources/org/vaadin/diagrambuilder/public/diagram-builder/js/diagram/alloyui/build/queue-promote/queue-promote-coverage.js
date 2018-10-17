if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/queue-promote/queue-promote.js']) {
    __coverage__['build/queue-promote/queue-promote.js'] =
        {
            "path": "build/queue-promote/queue-promote.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0},
            "b": {"1": [0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 25}, "end": {"line": 1, "column": 44}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 18,
                    "loc": {"start": {"line": 18, "column": 14}, "end": {"line": 18, "column": 34}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 28,
                    "loc": {"start": {"line": 28, "column": 14}, "end": {"line": 28, "column": 34}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 42,
                    "loc": {"start": {"line": 42, "column": 13}, "end": {"line": 42, "column": 33}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 53, "column": 44}},
                "2": {"start": {"line": 10, "column": 0}, "end": {"line": 50, "column": 3}},
                "3": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 50}},
                "4": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 43}},
                "5": {"start": {"line": 31, "column": 8}, "end": {"line": 33, "column": 9}},
                "6": {"start": {"line": 32, "column": 12}, "end": {"line": 32, "column": 56}},
                "7": {"start": {"line": 43, "column": 8}, "end": {"line": 43, "column": 43}},
                "8": {"start": {"line": 45, "column": 8}, "end": {"line": 47, "column": 9}},
                "9": {"start": {"line": 46, "column": 12}, "end": {"line": 46, "column": 36}}
            },
            "branchMap": {
                "1": {
                    "line": 31,
                    "type": "if",
                    "locations": [{"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 8}},
                        {"start": {"line": 31, "column": 8}, "end": {"line": 31, "column": 8}}]
                },
                "2": {
                    "line": 45,
                    "type": "if",
                    "locations": [{"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 8}},
                        {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 8}}]
                }
            },
            "code": ["(function () { YUI.add('queue-promote', function (Y, NAME) {", "", "/**",
                     " * Adds methods promote, remove, and indexOf to Queue instances.", " *",
                     " * @module queue-promote", " * @for Queue", " */", "", "Y.mix(Y.Queue.prototype, {", "    /**",
                     "     * Returns the current index in the queue of the specified item", "     *",
                     "     * @method indexOf", "     * @param needle {MIXED} the item to search for",
                     "     * @return {Number} the index of the item or -1 if not found", "     */",
                     "    indexOf : function (callback) {", "        return Y.Array.indexOf(this._q, callback);",
                     "    },", "", "    /**", "     * Moves the referenced item to the head of the queue", "     *",
                     "     * @method promote", "     * @param item {MIXED} an item in the queue", "     */",
                     "    promote : function (callback) {", "        var index = this.indexOf(callback);", "",
                     "        if (index > -1) {", "            this._q.unshift(this._q.splice(index,1)[0]);",
                     "        }", "    },", "", "    /**", "     * Removes the referenced item from the queue",
                     "     *", "     * @method remove", "     * @param item {MIXED} an item in the queue", "     */",
                     "    remove : function (callback) {", "        var index = this.indexOf(callback);", "",
                     "        if (index > -1) {", "            this._q.splice(index,1);", "        }", "    }", "",
                     "});", "", "", "}, 'patched-v3.18.1', {\"requires\": [\"yui-base\"]});", "", "}());"]
        };
}
var __cov_Cfxe1bVT2zSQ_GnxtAsS3Q = __coverage__['build/queue-promote/queue-promote.js'];
__cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['1']++;
YUI.add('queue-promote', function (Y, NAME) {
    __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.f['1']++;
    __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['2']++;
    Y.mix(Y.Queue.prototype, {
        indexOf: function (callback) {
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.f['2']++;
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['3']++;
            return Y.Array.indexOf(this._q, callback);
        }, promote: function (callback) {
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.f['3']++;
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['4']++;
            var index = this.indexOf(callback);
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['5']++;
            if (index > -1) {
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.b['1'][0]++;
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['6']++;
                this._q.unshift(this._q.splice(index, 1)[0]);
            } else {
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.b['1'][1]++;
            }
        }, remove: function (callback) {
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.f['4']++;
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['7']++;
            var index = this.indexOf(callback);
            __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['8']++;
            if (index > -1) {
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.b['2'][0]++;
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.s['9']++;
                this._q.splice(index, 1);
            } else {
                __cov_Cfxe1bVT2zSQ_GnxtAsS3Q.b['2'][1]++;
            }
        }
    });
}, 'patched-v3.18.1', {'requires': ['yui-base']});