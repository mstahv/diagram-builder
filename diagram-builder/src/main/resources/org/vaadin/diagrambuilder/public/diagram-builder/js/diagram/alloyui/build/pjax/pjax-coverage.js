if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/pjax/pjax.js']) {
    __coverage__['build/pjax/pjax.js'] =
        {
            "path": "build/pjax/pjax.js",
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
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 16}, "end": {"line": 1, "column": 35}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 76,
                    "loc": {"start": {"line": 76, "column": 17}, "end": {"line": 76, "column": 29}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 98,
                    "loc": {"start": {"line": 98, "column": 19}, "end": {"line": 98, "column": 45}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 125,
                    "loc": {"start": {"line": 125, "column": 20}, "end": {"line": 125, "column": 33}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 170, "column": 61}},
                "2": {"start": {"line": 22, "column": 0}, "end": {"line": 58, "column": 18}},
                "3": {"start": {"line": 74, "column": 0}, "end": {"line": 167, "column": 3}},
                "4": {"start": {"line": 77, "column": 8}, "end": {"line": 77, "column": 66}},
                "5": {"start": {"line": 78, "column": 8}, "end": {"line": 78, "column": 66}},
                "6": {"start": {"line": 99, "column": 8}, "end": {"line": 101, "column": 78}},
                "7": {"start": {"line": 103, "column": 8}, "end": {"line": 108, "column": 11}},
                "8": {"start": {"line": 110, "column": 8}, "end": {"line": 110, "column": 15}},
                "9": {"start": {"line": 126, "column": 8}, "end": {"line": 127, "column": 34}},
                "10": {"start": {"line": 129, "column": 8}, "end": {"line": 131, "column": 9}},
                "11": {"start": {"line": 130, "column": 12}, "end": {"line": 130, "column": 44}},
                "12": {"start": {"line": 133, "column": 8}, "end": {"line": 135, "column": 9}},
                "13": {"start": {"line": 134, "column": 12}, "end": {"line": 134, "column": 47}}
            },
            "branchMap": {
                "1": {
                    "line": 101,
                    "type": "cond-expr",
                    "locations": [{"start": {"line": 101, "column": 57}, "end": {"line": 101, "column": 65}},
                        {"start": {"line": 101, "column": 68}, "end": {"line": 101, "column": 77}}]
                },
                "2": {
                    "line": 101,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 101, "column": 25}, "end": {"line": 101, "column": 38}},
                        {"start": {"line": 101, "column": 42}, "end": {"line": 101, "column": 54}}]
                },
                "3": {
                    "line": 129,
                    "type": "if",
                    "locations": [{"start": {"line": 129, "column": 8}, "end": {"line": 129, "column": 8}},
                        {"start": {"line": 129, "column": 8}, "end": {"line": 129, "column": 8}}]
                },
                "4": {
                    "line": 129,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 129, "column": 12}, "end": {"line": 129, "column": 21}},
                        {"start": {"line": 129, "column": 25}, "end": {"line": 129, "column": 37}}]
                },
                "5": {
                    "line": 133,
                    "type": "if",
                    "locations": [{"start": {"line": 133, "column": 8}, "end": {"line": 133, "column": 8}},
                        {"start": {"line": 133, "column": 8}, "end": {"line": 133, "column": 8}}]
                },
                "6": {
                    "line": 133,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 133, "column": 12}, "end": {"line": 133, "column": 25}},
                        {"start": {"line": 133, "column": 29}, "end": {"line": 133, "column": 41}}]
                }
            },
            "code": ["(function () { YUI.add('pjax', function (Y, NAME) {", "", "/**",
                     "Provides seamless, gracefully degrading Pjax (pushState + Ajax) functionality,",
                     "which makes it easy to progressively enhance standard links on the page so that",
                     "they can be loaded normally in old browsers, or via Ajax (with HTML5 history",
                     "support) in newer browsers.", "", "@module pjax", "@main", "@since 3.5.0", "**/", "", "/**",
                     "A stack of middleware which forms the default Pjax route.", "", "@property defaultRoute",
                     "@type Array", "@static", "@since 3.7.0", "**/",
                     "var defaultRoute = ['loadContent', '_defaultRoute'],", "", "/**",
                     "Fired when an error occurs while attempting to load a URL via Ajax.", "", "@event error",
                     "@param {Object} content Content extracted from the response, if any.",
                     "    @param {Node} content.node A `Y.Node` instance for a document fragment",
                     "        containing the extracted HTML content.",
                     "    @param {String} [content.title] The title of the HTML page, if any,",
                     "        extracted using the `titleSelector` attribute. If `titleSelector` is",
                     "        not set or if a title could not be found, this property will be", "        `undefined`.",
                     "@param {String} responseText Raw Ajax response text.",
                     "@param {Number} status HTTP status code for the Ajax response.",
                     "@param {String} url The absolute URL that failed to load.", "@since 3.5.0", "**/",
                     "EVT_ERROR = 'error',", "", "/**", "Fired when a URL is successfully loaded via Ajax.", "",
                     "@event load", "@param {Object} content Content extracted from the response, if any.",
                     "    @param {Node} content.node A `Y.Node` instance for a document fragment",
                     "        containing the extracted HTML content.",
                     "    @param {String} [content.title] The title of the HTML page, if any,",
                     "        extracted using the `titleSelector` attribute. If `titleSelector` is",
                     "        not set or if a title could not be found, this property will be", "        `undefined`.",
                     "@param {String} responseText Raw Ajax response text.",
                     "@param {Number} status HTTP status code for the Ajax response.",
                     "@param {String} url The absolute URL that was loaded.", "@since 3.5.0", "**/",
                     "EVT_LOAD = 'load';", "", "/**",
                     "Provides seamless, gracefully degrading Pjax (pushState + Ajax) functionality,",
                     "which makes it easy to progressively enhance standard links on the page so that",
                     "they can be loaded normally in old browsers, or via Ajax (with HTML5 history",
                     "support) in newer browsers.", "", "@class Pjax", "@extends Router", "@uses PjaxBase",
                     "@uses PjaxContent", "@constructor", "@param {Object} [config] Config attributes.", "@since 3.5.0",
                     "**/", "Y.Pjax = Y.Base.create('pjax', Y.Router, [Y.PjaxBase, Y.PjaxContent], {",
                     "    // -- Lifecycle Methods ----------------------------------------------------",
                     "    initializer: function () {",
                     "        this.publish(EVT_ERROR, {defaultFn: this._defCompleteFn});",
                     "        this.publish(EVT_LOAD,  {defaultFn: this._defCompleteFn});", "    },", "",
                     "    // -- Protected Methods ----------------------------------------------------", "", "    /**",
                     "    Default Pjax route callback. Fires either the `load` or `error` event based",
                     "    on the status of the `Y.io` request made by the `loadContent()` middleware.", "",
                     "    **Note:** This route callback assumes that it's called after the",
                     "    `loadContent()` middleware.", "", "    @method _defaultRoute",
                     "    @param {Object} req Request object.", "    @param {Object} res Response Object.",
                     "    @param {Function} next Function to pass control to the next route callback.",
                     "    @protected", "    @since 3.5.0", "    @see Y.Pjax.defaultRoute", "    **/",
                     "    _defaultRoute: function (req, res, next) {", "        var ioResponse = res.ioResponse,",
                     "            status     = ioResponse.status,",
                     "            event      = status >= 200 && status < 300 ? EVT_LOAD : EVT_ERROR;", "",
                     "        this.fire(event, {", "            content     : res.content,",
                     "            responseText: ioResponse.responseText,", "            status      : status,",
                     "            url         : req.ioURL", "        });", "", "        next();", "    },", "",
                     "    // -- Event Handlers -------------------------------------------------------", "", "    /**",
                     "    Default event handler for both the `error` and `load` events. Attempts to",
                     "    insert the loaded content into the `container` node and update the page's", "    title.", "",
                     "    @method _defCompleteFn", "    @param {EventFacade} e", "    @protected", "    @since 3.5.0",
                     "    **/", "    _defCompleteFn: function (e) {", "        var container = this.get('container'),",
                     "            content   = e.content;", "", "        if (container && content.node) {",
                     "            container.setHTML(content.node);", "        }", "",
                     "        if (content.title && Y.config.doc) {", "            Y.config.doc.title = content.title;",
                     "        }", "    }", "}, {", "    ATTRS: {", "        /**",
                     "        Node into which content should be inserted when a page is loaded via",
                     "        Pjax. This node's existing contents will be removed to make way for the",
                     "        new content.", "",
                     "        If not set, loaded content will not be automatically inserted into the", "        page.",
                     "", "        @attribute container", "        @type Node", "        @default null",
                     "        @since 3.5.0", "        **/", "        container: {", "            value : null,",
                     "            setter: Y.one", "        },", "",
                     "        // Inherited from Router and already documented there.", "        routes: {",
                     "            value: [", "                {path: '*', callbacks: defaultRoute}", "            ]",
                     "        }", "    },", "", "    // Documented towards the top of this file.",
                     "    defaultRoute: defaultRoute", "});", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"pjax-base\", \"pjax-content\"]});", "", "}());"]
        };
}
var __cov_vtRU9D1LBnby7fE_sz$xDA = __coverage__['build/pjax/pjax.js'];
__cov_vtRU9D1LBnby7fE_sz$xDA.s['1']++;
YUI.add('pjax', function (Y, NAME) {
    __cov_vtRU9D1LBnby7fE_sz$xDA.f['1']++;
    __cov_vtRU9D1LBnby7fE_sz$xDA.s['2']++;
    var defaultRoute = ['loadContent', '_defaultRoute'], EVT_ERROR = 'error', EVT_LOAD = 'load';
    __cov_vtRU9D1LBnby7fE_sz$xDA.s['3']++;
    Y.Pjax = Y.Base.create('pjax', Y.Router, [Y.PjaxBase, Y.PjaxContent], {
        initializer: function () {
            __cov_vtRU9D1LBnby7fE_sz$xDA.f['2']++;
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['4']++;
            this.publish(EVT_ERROR, {defaultFn: this._defCompleteFn});
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['5']++;
            this.publish(EVT_LOAD, {defaultFn: this._defCompleteFn});
        }, _defaultRoute: function (req, res, next) {
            __cov_vtRU9D1LBnby7fE_sz$xDA.f['3']++;
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['6']++;
            var ioResponse = res.ioResponse, status = ioResponse.status,
                event = (__cov_vtRU9D1LBnby7fE_sz$xDA.b['2'][0]++, status >= 200)
                        && (__cov_vtRU9D1LBnby7fE_sz$xDA.b['2'][1]++, status < 300)
                        ? (__cov_vtRU9D1LBnby7fE_sz$xDA.b['1'][0]++, EVT_LOAD)
                        : (__cov_vtRU9D1LBnby7fE_sz$xDA.b['1'][1]++, EVT_ERROR);
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['7']++;
            this.fire(event,
                      {content: res.content, responseText: ioResponse.responseText, status: status, url: req.ioURL});
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['8']++;
            next();
        }, _defCompleteFn: function (e) {
            __cov_vtRU9D1LBnby7fE_sz$xDA.f['4']++;
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['9']++;
            var container = this.get('container'), content = e.content;
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['10']++;
            if ((__cov_vtRU9D1LBnby7fE_sz$xDA.b['4'][0]++, container)
                && (__cov_vtRU9D1LBnby7fE_sz$xDA.b['4'][1]++, content.node)) {
                __cov_vtRU9D1LBnby7fE_sz$xDA.b['3'][0]++;
                __cov_vtRU9D1LBnby7fE_sz$xDA.s['11']++;
                container.setHTML(content.node);
            } else {
                __cov_vtRU9D1LBnby7fE_sz$xDA.b['3'][1]++;
            }
            __cov_vtRU9D1LBnby7fE_sz$xDA.s['12']++;
            if ((__cov_vtRU9D1LBnby7fE_sz$xDA.b['6'][0]++, content.title)
                && (__cov_vtRU9D1LBnby7fE_sz$xDA.b['6'][1]++, Y.config.doc)) {
                __cov_vtRU9D1LBnby7fE_sz$xDA.b['5'][0]++;
                __cov_vtRU9D1LBnby7fE_sz$xDA.s['13']++;
                Y.config.doc.title = content.title;
            } else {
                __cov_vtRU9D1LBnby7fE_sz$xDA.b['5'][1]++;
            }
        }
    }, {
                               ATTRS: {
                                   container: {value: null, setter: Y.one},
                                   routes: {value: [{path: '*', callbacks: defaultRoute}]}
                               }, defaultRoute: defaultRoute
                           });
}, 'patched-v3.18.1', {'requires': ['pjax-base', 'pjax-content']});
