if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/dd-gestures/dd-gestures.js']) {
    __coverage__['build/dd-gestures/dd-gestures.js'] =
        {
            "path": "build/dd-gestures/dd-gestures.js",
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
            "b": {},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 23}, "end": {"line": 1, "column": 42}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 18,
                    "loc": {"start": {"line": 18, "column": 32}, "end": {"line": 18, "column": 43}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 36,
                    "loc": {"start": {"line": 36, "column": 34}, "end": {"line": 36, "column": 45}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 42,
                    "loc": {"start": {"line": 42, "column": 31}, "end": {"line": 42, "column": 42}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 54, "column": 80}},
                "2": {"start": {"line": 16, "column": 4}, "end": {"line": 16, "column": 47}},
                "3": {"start": {"line": 18, "column": 4}, "end": {"line": 32, "column": 6}},
                "4": {"start": {"line": 19, "column": 8}, "end": {"line": 19, "column": 36}},
                "5": {"start": {"line": 20, "column": 8}, "end": {"line": 20, "column": 52}},
                "6": {"start": {"line": 22, "column": 8}, "end": {"line": 22, "column": 53}},
                "7": {"start": {"line": 24, "column": 8}, "end": {"line": 27, "column": 11}},
                "8": {"start": {"line": 29, "column": 8}, "end": {"line": 29, "column": 91}},
                "9": {"start": {"line": 30, "column": 8}, "end": {"line": 30, "column": 63}},
                "10": {"start": {"line": 34, "column": 4}, "end": {"line": 34, "column": 46}},
                "11": {"start": {"line": 36, "column": 4}, "end": {"line": 40, "column": 6}},
                "12": {"start": {"line": 37, "column": 8}, "end": {"line": 37, "column": 36}},
                "13": {"start": {"line": 38, "column": 8}, "end": {"line": 38, "column": 27}},
                "14": {"start": {"line": 39, "column": 8}, "end": {"line": 39, "column": 41}},
                "15": {"start": {"line": 42, "column": 4}, "end": {"line": 50, "column": 6}},
                "16": {"start": {"line": 43, "column": 8}, "end": {"line": 43, "column": 27}},
                "17": {"start": {"line": 45, "column": 8}, "end": {"line": 45, "column": 25}},
                "18": {"start": {"line": 46, "column": 8}, "end": {"line": 46, "column": 28}},
                "19": {"start": {"line": 47, "column": 8}, "end": {"line": 49, "column": 11}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('dd-gestures', function (Y, NAME) {", "", "", "    /**",
                     "    * This module is the conditional loaded `dd` module to support gesture events",
                     "    * in the event that `dd` is loaded onto a device that support touch based events.", "    *",
                     "    * This module is loaded and over rides 2 key methods on `DD.Drag` and `DD.DDM` to",
                     "    * attach the gesture events. Overrides `DD.Drag._prep` and `DD.DDM._setupListeners`",
                     "    * methods as well as set's the property `DD.Drag.START_EVENT` to `gesturemovestart`",
                     "    * to enable gesture movement instead of mouse based movement.", "    * @module dd",
                     "    * @submodule dd-gestures", "    */", "", "    Y.DD.Drag.START_EVENT = 'gesturemovestart';",
                     "", "    Y.DD.Drag.prototype._prep = function() {", "        this._dragThreshMet = false;",
                     "        var node = this.get('node'), DDM = Y.DD.DDM;", "",
                     "        node.addClass(DDM.CSS_PREFIX + '-draggable');", "",
                     "        node.on(Y.DD.Drag.START_EVENT, Y.bind(this._handleMouseDownEvent, this), {",
                     "            minDistance: this.get('clickPixelThresh'),",
                     "            minTime: this.get('clickTimeThresh')", "        });", "",
                     "        node.on('gesturemoveend', Y.bind(this._handleMouseUp, this), { standAlone: true });",
                     "        node.on('dragstart', Y.bind(this._fixDragStart, this));", "", "    };", "",
                     "    var _unprep = Y.DD.Drag.prototype._unprep;", "",
                     "    Y.DD.Drag.prototype._unprep = function() {", "        var node = this.get('node');",
                     "        _unprep.call(this);", "        node.detachAll('gesturemoveend');", "    };", "",
                     "    Y.DD.DDM._setupListeners = function() {", "        var DDM = Y.DD.DDM;", "",
                     "        this._createPG();", "        this._active = true;",
                     "        Y.one(Y.config.doc).on('gesturemove', Y.throttle(Y.bind(DDM._move, DDM), DDM.get('throttleTime')), {",
                     "            standAlone: true", "        });", "    };", "", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"dd-drag\", \"event-synthetic\", \"event-gestures\"]});",
                     "", "}());"]
        };
}
var __cov_VZD$6A5JRP4xUQ9RaC7uEA = __coverage__['build/dd-gestures/dd-gestures.js'];
__cov_VZD$6A5JRP4xUQ9RaC7uEA.s['1']++;
YUI.add('dd-gestures', function (Y, NAME) {
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.f['1']++;
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['2']++;
    Y.DD.Drag.START_EVENT = 'gesturemovestart';
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['3']++;
    Y.DD.Drag.prototype._prep = function () {
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.f['2']++;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['4']++;
        this._dragThreshMet = false;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['5']++;
        var node = this.get('node'), DDM = Y.DD.DDM;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['6']++;
        node.addClass(DDM.CSS_PREFIX + '-draggable');
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['7']++;
        node.on(Y.DD.Drag.START_EVENT, Y.bind(this._handleMouseDownEvent, this),
                {minDistance: this.get('clickPixelThresh'), minTime: this.get('clickTimeThresh')});
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['8']++;
        node.on('gesturemoveend', Y.bind(this._handleMouseUp, this), {standAlone: true});
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['9']++;
        node.on('dragstart', Y.bind(this._fixDragStart, this));
    };
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['10']++;
    var _unprep = Y.DD.Drag.prototype._unprep;
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['11']++;
    Y.DD.Drag.prototype._unprep = function () {
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.f['3']++;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['12']++;
        var node = this.get('node');
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['13']++;
        _unprep.call(this);
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['14']++;
        node.detachAll('gesturemoveend');
    };
    __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['15']++;
    Y.DD.DDM._setupListeners = function () {
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.f['4']++;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['16']++;
        var DDM = Y.DD.DDM;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['17']++;
        this._createPG();
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['18']++;
        this._active = true;
        __cov_VZD$6A5JRP4xUQ9RaC7uEA.s['19']++;
        Y.one(Y.config.doc)
            .on('gesturemove', Y.throttle(Y.bind(DDM._move, DDM), DDM.get('throttleTime')), {standAlone: true});
    };
}, 'patched-v3.18.1', {'requires': ['dd-drag', 'event-synthetic', 'event-gestures']});
