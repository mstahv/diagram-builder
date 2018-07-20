if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/aui-datatable-radio-cell-editor/aui-datatable-radio-cell-editor.js']) {
    __coverage__['build/aui-datatable-radio-cell-editor/aui-datatable-radio-cell-editor.js'] =
        {
            "path": "build/aui-datatable-radio-cell-editor/aui-datatable-radio-cell-editor.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0},
            "b": {},
            "f": {"1": 0, "2": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 43}, "end": {"line": 1, "column": 62}}
                },
                "2": {
                    "name": "(anonymous_2)",
                    "line": 42,
                    "loc": {"start": {"line": 42, "column": 26}, "end": {"line": 42, "column": 37}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 53, "column": 70}},
                "2": {"start": {"line": 12, "column": 0}, "end": {"line": 48, "column": 3}},
                "3": {"start": {"line": 43, "column": 12}, "end": {"line": 43, "column": 32}},
                "4": {"start": {"line": 45, "column": 12}, "end": {"line": 45, "column": 66}},
                "5": {"start": {"line": 50, "column": 0}, "end": {"line": 50, "column": 36}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('aui-datatable-radio-cell-editor', function (A, NAME) {", "", "/**",
                     " * RadioCellEditor class.", " *", " * @class A.RadioCellEditor",
                     " * @extends A.CheckboxCellEditor",
                     " * @param {Object} config Object literal specifying widget configuration", " * properties.",
                     " * @constructor", " */", "var RadioCellEditor = A.Component.create({", "", "    /**",
                     "     * Static property provides a string to identify the class.", "     *",
                     "     * @property NAME", "     * @type String", "     * @static", "     */",
                     "    NAME: 'radioCellEditor',", "", "    /**",
                     "     * Static property used to define which component it extends.", "     *",
                     "     * @property EXTENDS", "     * @type Object", "     * @static", "     */",
                     "    EXTENDS: A.CheckboxCellEditor,", "", "    prototype: {",
                     "        OPTION_TEMPLATE: '<input class=\"field-input-choice\" id=\"{id}\" name=\"{name}\" type=\"radio\" value=\"{value}\"/>',",
                     "        OPTION_WRAPPER: '<label class=\"radio\" for=\"{id}\"> {label}</label>',", "",
                     "        /**", "         * Gets the `A.RadioCellEditor` input value.", "         *",
                     "         * @method getElementsValue", "         * @return {String} Input value.", "         */",
                     "        getElementsValue: function() {", "            var instance = this;", "",
                     "            return instance._getSelectedOptions().get('value')[0];", "        }", "    }", "});",
                     "", "A.RadioCellEditor = RadioCellEditor;", "", "",
                     "}, '3.1.0', {\"requires\": [\"aui-datatable-base-options-cell-editor\"]});", "", "}());"]
        };
}
var __cov_Zp2d_TXk2hWhr0RjzksNWg = __coverage__['build/aui-datatable-radio-cell-editor/aui-datatable-radio-cell-editor.js'];
__cov_Zp2d_TXk2hWhr0RjzksNWg.s['1']++;
YUI.add('aui-datatable-radio-cell-editor', function (A, NAME) {
    __cov_Zp2d_TXk2hWhr0RjzksNWg.f['1']++;
    __cov_Zp2d_TXk2hWhr0RjzksNWg.s['2']++;
    var RadioCellEditor = A.Component.create({
                                                 NAME: 'radioCellEditor',
                                                 EXTENDS: A.CheckboxCellEditor,
                                                 prototype: {
                                                     OPTION_TEMPLATE: '<input class="field-input-choice" id="{id}" name="{name}" type="radio" value="{value}"/>',
                                                     OPTION_WRAPPER: '<label class="radio" for="{id}"> {label}</label>',
                                                     getElementsValue: function () {
                                                         __cov_Zp2d_TXk2hWhr0RjzksNWg.f['2']++;
                                                         __cov_Zp2d_TXk2hWhr0RjzksNWg.s['3']++;
                                                         var instance = this;
                                                         __cov_Zp2d_TXk2hWhr0RjzksNWg.s['4']++;
                                                         return instance._getSelectedOptions().get('value')[0];
                                                     }
                                                 }
                                             });
    __cov_Zp2d_TXk2hWhr0RjzksNWg.s['5']++;
    A.RadioCellEditor = RadioCellEditor;
}, '3.1.0', {'requires': ['aui-datatable-base-options-cell-editor']});
