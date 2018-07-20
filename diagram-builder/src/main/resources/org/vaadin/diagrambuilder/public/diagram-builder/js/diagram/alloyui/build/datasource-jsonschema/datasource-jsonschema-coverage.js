if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datasource-jsonschema/datasource-jsonschema.js']) {
    __coverage__['build/datasource-jsonschema/datasource-jsonschema.js'] =
        {
            "path": "build/datasource-jsonschema/datasource-jsonschema.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0},
            "b": {"1": [0, 0, 0], "2": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 33}, "end": {"line": 1, "column": 52}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 15,
                    "loc": {"start": {"line": 15, "column": 27}, "end": {"line": 15, "column": 38}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 64,
                    "loc": {"start": {"line": 64, "column": 17}, "end": {"line": 64, "column": 34}}
                },
                "4": {
                    "name": "(anonymous_4)",
                    "line": 84,
                    "loc": {"start": {"line": 84, "column": 22}, "end": {"line": 84, "column": 34}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 103, "column": 81}},
                "2": {"start": {"line": 15, "column": 0}, "end": {"line": 17, "column": 2}},
                "3": {"start": {"line": 16, "column": 4}, "end": {"line": 16, "column": 71}},
                "4": {"start": {"line": 19, "column": 0}, "end": {"line": 54, "column": 3}},
                "5": {"start": {"line": 56, "column": 0}, "end": {"line": 98, "column": 3}},
                "6": {"start": {"line": 65, "column": 8}, "end": {"line": 65, "column": 59}},
                "7": {"start": {"line": 85, "column": 8}, "end": {"line": 87, "column": 35}},
                "8": {"start": {"line": 89, "column": 8}, "end": {"line": 92, "column": 10}},
                "9": {"start": {"line": 94, "column": 8}, "end": {"line": 94, "column": 51}},
                "10": {"start": {"line": 96, "column": 8}, "end": {"line": 96, "column": 78}},
                "11": {"start": {"line": 100, "column": 0}, "end": {"line": 100, "column": 66}}
            },
            "branchMap": {
                "1": {
                    "line": 85,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 85, "column": 19}, "end": {"line": 85, "column": 25}},
                        {"start": {"line": 85, "column": 30}, "end": {"line": 85, "column": 49}},
                        {"start": {"line": 85, "column": 53}, "end": {"line": 85, "column": 59}}]
                },
                "2": {
                    "line": 89,
                    "type": "binary-expr",
                    "locations": [{"start": {"line": 89, "column": 27}, "end": {"line": 89, "column": 75}},
                        {"start": {"line": 89, "column": 79}, "end": {"line": 92, "column": 9}}]
                }
            },
            "code": ["(function () { YUI.add('datasource-jsonschema', function (Y, NAME) {", "", "/**",
                     " * Extends DataSource with schema-parsing on JSON data.", " *", " * @module datasource",
                     " * @submodule datasource-jsonschema", " */", "", "/**",
                     " * Adds schema-parsing to the DataSource Utility.", " * @class DataSourceJSONSchema",
                     " * @extends Plugin.Base", " */", "var DataSourceJSONSchema = function() {",
                     "    DataSourceJSONSchema.superclass.constructor.apply(this, arguments);", "};", "",
                     "Y.mix(DataSourceJSONSchema, {", "    /**",
                     "     * The namespace for the plugin. This will be the property on the host which",
                     "     * references the plugin instance.", "     *", "     * @property NS", "     * @type String",
                     "     * @static", "     * @final", "     * @value \"schema\"", "     */", "    NS: \"schema\",",
                     "", "    /**", "     * Class name.", "     *", "     * @property NAME", "     * @type String",
                     "     * @static", "     * @final", "     * @value \"dataSourceJSONSchema\"", "     */",
                     "    NAME: \"dataSourceJSONSchema\",", "",
                     "    /////////////////////////////////////////////////////////////////////////////", "    //",
                     "    // DataSourceJSONSchema Attributes", "    //",
                     "    /////////////////////////////////////////////////////////////////////////////", "",
                     "    ATTRS: {", "        schema: {", "            //value: {}", "        }", "    }", "});", "",
                     "Y.extend(DataSourceJSONSchema, Y.Plugin.Base, {", "    /**", "    * Internal init() handler.",
                     "    *", "    * @method initializer", "    * @param config {Object} Config object.",
                     "    * @private", "    */", "    initializer: function(config) {",
                     "        this.doBefore(\"_defDataFn\", this._beforeDefDataFn);", "    },", "", "    /**",
                     "     * Parses raw data into a normalized response. To accommodate XHR responses,",
                     "     * will first look for data in data.responseText. Otherwise will just work",
                     "     * with data.", "     *", "     * @method _beforeDefDataFn",
                     "     * @param tId {Number} Unique transaction ID.", "     * @param request {Object} The request.",
                     "     * @param callback {Object} The callback object with the following properties:",
                     "     *     <dl>", "     *         <dt>success (Function)</dt> <dd>Success handler.</dd>",
                     "     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>", "     *     </dl>",
                     "     * @param data {Object} Raw data.", "     * @protected", "     */",
                     "    _beforeDefDataFn: function(e) {",
                     "        var data = e.data && (e.data.responseText || e.data),",
                     "            schema = this.get('schema'),", "            payload = e.details[0];", "",
                     "        payload.response = Y.DataSchema.JSON.apply.call(this, schema, data) || {",
                     "            meta: {},", "            results: data", "        };", "",
                     "        this.get(\"host\").fire(\"response\", payload);", "",
                     "        return new Y.Do.Halt(\"DataSourceJSONSchema plugin halted _defDataFn\");", "    }", "});",
                     "", "Y.namespace('Plugin').DataSourceJSONSchema = DataSourceJSONSchema;", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"datasource-local\", \"plugin\", \"dataschema-json\"]});",
                     "", "}());"]
        };
}
var __cov_6OJ$RpmxOZV_WHbnHH90kw = __coverage__['build/datasource-jsonschema/datasource-jsonschema.js'];
__cov_6OJ$RpmxOZV_WHbnHH90kw.s['1']++;
YUI.add('datasource-jsonschema', function (Y, NAME) {
    __cov_6OJ$RpmxOZV_WHbnHH90kw.f['1']++;
    __cov_6OJ$RpmxOZV_WHbnHH90kw.s['2']++;
    var DataSourceJSONSchema = function () {
        __cov_6OJ$RpmxOZV_WHbnHH90kw.f['2']++;
        __cov_6OJ$RpmxOZV_WHbnHH90kw.s['3']++;
        DataSourceJSONSchema.superclass.constructor.apply(this, arguments);
    };
    __cov_6OJ$RpmxOZV_WHbnHH90kw.s['4']++;
    Y.mix(DataSourceJSONSchema, {NS: 'schema', NAME: 'dataSourceJSONSchema', ATTRS: {schema: {}}});
    __cov_6OJ$RpmxOZV_WHbnHH90kw.s['5']++;
    Y.extend(DataSourceJSONSchema, Y.Plugin.Base, {
        initializer: function (config) {
            __cov_6OJ$RpmxOZV_WHbnHH90kw.f['3']++;
            __cov_6OJ$RpmxOZV_WHbnHH90kw.s['6']++;
            this.doBefore('_defDataFn', this._beforeDefDataFn);
        }, _beforeDefDataFn: function (e) {
            __cov_6OJ$RpmxOZV_WHbnHH90kw.f['4']++;
            __cov_6OJ$RpmxOZV_WHbnHH90kw.s['7']++;
            var data = (__cov_6OJ$RpmxOZV_WHbnHH90kw.b['1'][0]++, e.data)
                       && ((__cov_6OJ$RpmxOZV_WHbnHH90kw.b['1'][1]++, e.data.responseText)
                           || (__cov_6OJ$RpmxOZV_WHbnHH90kw.b['1'][2]++, e.data)), schema = this.get('schema'),
                payload = e.details[0];
            __cov_6OJ$RpmxOZV_WHbnHH90kw.s['8']++;
            payload.response =
                (__cov_6OJ$RpmxOZV_WHbnHH90kw.b['2'][0]++, Y.DataSchema.JSON.apply.call(this, schema, data))
                || (__cov_6OJ$RpmxOZV_WHbnHH90kw.b['2'][1]++, {meta: {}, results: data});
            __cov_6OJ$RpmxOZV_WHbnHH90kw.s['9']++;
            this.get('host').fire('response', payload);
            __cov_6OJ$RpmxOZV_WHbnHH90kw.s['10']++;
            return new Y.Do.Halt('DataSourceJSONSchema plugin halted _defDataFn');
        }
    });
    __cov_6OJ$RpmxOZV_WHbnHH90kw.s['11']++;
    Y.namespace('Plugin').DataSourceJSONSchema = DataSourceJSONSchema;
}, 'patched-v3.18.1', {'requires': ['datasource-local', 'plugin', 'dataschema-json']});
