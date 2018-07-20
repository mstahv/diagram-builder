if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/tree-labelable/tree-labelable.js']) {
    __coverage__['build/tree-labelable/tree-labelable.js'] =
        {
            "path": "build/tree-labelable/tree-labelable.js",
            "s": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0},
            "b": {"1": [0, 0]},
            "f": {"1": 0, "2": 0, "3": 0, "4": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 26}, "end": {"line": 1, "column": 45}}
                },
                "2": {
                    "name": "Labelable",
                    "line": 23,
                    "loc": {"start": {"line": 23, "column": 0}, "end": {"line": 23, "column": 21}}
                },
                "3": {
                    "name": "(anonymous_3)",
                    "line": 26,
                    "loc": {"start": {"line": 26, "column": 17}, "end": {"line": 26, "column": 29}}
                },
                "4": {
                    "name": "NodeLabelable",
                    "line": 53,
                    "loc": {"start": {"line": 53, "column": 0}, "end": {"line": 53, "column": 37}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 79, "column": 40}},
                "2": {"start": {"line": 23, "column": 0}, "end": {"line": 23, "column": 23}},
                "3": {"start": {"line": 25, "column": 0}, "end": {"line": 29, "column": 2}},
                "4": {"start": {"line": 27, "column": 8}, "end": {"line": 27, "column": 80}},
                "5": {"start": {"line": 31, "column": 0}, "end": {"line": 31, "column": 29}},
                "6": {"start": {"line": 53, "column": 0}, "end": {"line": 59, "column": 1}},
                "7": {"start": {"line": 54, "column": 4}, "end": {"line": 54, "column": 60}},
                "8": {"start": {"line": 56, "column": 4}, "end": {"line": 58, "column": 5}},
                "9": {"start": {"line": 57, "column": 8}, "end": {"line": 57, "column": 34}},
                "10": {"start": {"line": 61, "column": 0}, "end": {"line": 74, "column": 2}},
                "11": {"start": {"line": 76, "column": 0}, "end": {"line": 76, "column": 38}}
            },
            "branchMap": {
                "1": {
                    "line": 56,
                    "type": "if",
                    "locations": [{"start": {"line": 56, "column": 4}, "end": {"line": 56, "column": 4}},
                        {"start": {"line": 56, "column": 4}, "end": {"line": 56, "column": 4}}]
                }
            },
            "code": ["(function () { YUI.add('tree-labelable', function (Y, NAME) {", "",
                     "/*jshint expr:true, onevar:false */", "", "/**",
                     "Extension for `Tree` that adds baked-in support for node labels like you might",
                     "see in a treeview or menu.", "", "@module tree", "@submodule tree-labelable",
                     "@main tree-labelable", "**/", "", "/**",
                     "Extension for `Tree` that adds baked-in support for node labels like you might",
                     "see in a treeview or menu.", "", "@class Tree.Labelable", "@constructor", "@extensionfor Tree",
                     "**/", "", "function Labelable() {}", "", "Labelable.prototype = {",
                     "    initializer: function () {",
                     "        this.nodeExtensions = this.nodeExtensions.concat(Y.Tree.Node.Labelable);", "    }", "};",
                     "", "Y.Tree.Labelable = Labelable;", "/**", "@module tree", "@submodule tree-labelable", "**/", "",
                     "/**", "`Tree.Node` extension that adds baked in support for labels like you might see",
                     "in a treeview or menu.", "",
                     "**Security note:** The label is stored in raw, unescaped form. If you choose to",
                     "render the label as HTML, be sure to escape it first with `Y.Escape.html()`",
                     "unless you actually intend to render raw HTML contained in the label.", "",
                     "@class Tree.Node.Labelable", "@constructor",
                     "@param {Tree} tree `Tree` instance with which this node should be associated.",
                     "@param {Object} [config] Configuration hash.",
                     "    @param {String} [config.label=''] Label for this node.", "@extensionfor Tree.Node", "**/", "",
                     "function NodeLabelable(tree, config) {",
                     "    this._serializable = this._serializable.concat('label');", "", "    if ('label' in config) {",
                     "        this.label = config.label;", "    }", "}", "", "NodeLabelable.prototype = {", "    /**",
                     "    Label for this node.", "",
                     "    **Security note:** The label is stored in raw, unescaped form. If you choose",
                     "    to render the label as HTML, be sure to escape it first with",
                     "    `Y.Escape.html()` unless you actually intend to render raw HTML contained in",
                     "    the label.", "", "    @property {String} label", "    @default ''", "    **/",
                     "    label: ''", "};", "", "Y.Tree.Node.Labelable = NodeLabelable;", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"tree\"]});", "", "}());"]
        };
}
var __cov_CEm4n2IT9vt$MIFHcb5PbA = __coverage__['build/tree-labelable/tree-labelable.js'];
__cov_CEm4n2IT9vt$MIFHcb5PbA.s['1']++;
YUI.add('tree-labelable', function (Y, NAME) {
    __cov_CEm4n2IT9vt$MIFHcb5PbA.f['1']++;
    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['2']++;

    function Labelable() {
        __cov_CEm4n2IT9vt$MIFHcb5PbA.f['2']++;
    }

    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['3']++;
    Labelable.prototype = {
        initializer: function () {
            __cov_CEm4n2IT9vt$MIFHcb5PbA.f['3']++;
            __cov_CEm4n2IT9vt$MIFHcb5PbA.s['4']++;
            this.nodeExtensions = this.nodeExtensions.concat(Y.Tree.Node.Labelable);
        }
    };
    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['5']++;
    Y.Tree.Labelable = Labelable;
    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['6']++;

    function NodeLabelable(tree, config) {
        __cov_CEm4n2IT9vt$MIFHcb5PbA.f['4']++;
        __cov_CEm4n2IT9vt$MIFHcb5PbA.s['7']++;
        this._serializable = this._serializable.concat('label');
        __cov_CEm4n2IT9vt$MIFHcb5PbA.s['8']++;
        if ('label' in config) {
            __cov_CEm4n2IT9vt$MIFHcb5PbA.b['1'][0]++;
            __cov_CEm4n2IT9vt$MIFHcb5PbA.s['9']++;
            this.label = config.label;
        } else {
            __cov_CEm4n2IT9vt$MIFHcb5PbA.b['1'][1]++;
        }
    }

    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['10']++;
    NodeLabelable.prototype = {label: ''};
    __cov_CEm4n2IT9vt$MIFHcb5PbA.s['11']++;
    Y.Tree.Node.Labelable = NodeLabelable;
}, 'patched-v3.18.1', {'requires': ['tree']});
