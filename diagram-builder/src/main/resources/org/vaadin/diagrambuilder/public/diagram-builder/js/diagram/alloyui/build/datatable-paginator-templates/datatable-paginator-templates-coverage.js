if (typeof __coverage__ === 'undefined') {
    __coverage__ = {};
}
if (!__coverage__['build/datatable-paginator-templates/datatable-paginator-templates.js']) {
    __coverage__['build/datatable-paginator-templates/datatable-paginator-templates.js'] =
        {
            "path": "build/datatable-paginator-templates/datatable-paginator-templates.js",
            "s": {"1": 0, "2": 0, "3": 0},
            "b": {},
            "f": {"1": 0},
            "fnMap": {
                "1": {
                    "name": "(anonymous_1)",
                    "line": 1,
                    "loc": {"start": {"line": 1, "column": 41}, "end": {"line": 1, "column": 60}}
                }
            },
            "statementMap": {
                "1": {"start": {"line": 1, "column": 0}, "end": {"line": 87, "column": 44}},
                "2": {"start": {"line": 3, "column": 0}, "end": {"line": 72, "column": 38}},
                "3": {"start": {"line": 77, "column": 0}, "end": {"line": 84, "column": 2}}
            },
            "branchMap": {},
            "code": ["(function () { YUI.add('datatable-paginator-templates', function (Y, NAME) {", "",
                     "var engine = new Y.Template(),", "", "/*", "{", "    wrapperClass,", "    numOfCols", "}", "*/",
                     "rowWrapper = '<tr><td class=\"<%= this.wrapperClass %>\" colspan=\"' +",
                     "             '<%= this.numOfCols %>\"/></tr>',", "", "/*", "{", "    classNames: {}", "}", "*/",
                     "content = '<%= buttons %><%= this.classNames.gotoPage %>' +",
                     "          '<%= this.classNames.perPage %>',", "", "/*", "{", "    classNames: {},", "    type,",
                     "    label", "}", "*/", "button = '<button class=\"<%= this.classNames.control %> ' +",
                     "         '<%= this.classNames.control %>-<%= this.type %>\" ' +",
                     "         'data-type=\"<%= this.type %>\"><%= this.label %></button>',", "", "/*", "{",
                     "    classNames,", "    buttons: [", "        { type, label }", "    ]", "}", "*/",
                     "buttons = '<div class=\"<%= this.classNames.controls %> <%= this.classNames.group %>\">' +",
                     "            '<%== this.buttons %>' +", "        '</div>',", "", "/*", "{", "    classNames,",
                     "    strings,", "    page", "}", "*/",
                     "gotoPage = '<form action=\"#\" class=\"<%= this.classNames.group %>\">' +",
                     "                '<label><%= this.strings.goToLabel %>' +",
                     "                '<input type=\"text\" value=\"<%= this.page %>\">' +",
                     "                '<button><%= this.strings.goToAction %></button>' +",
                     "                '</label>' +", "            '</form>',", "", "/*", "{", "    classNames,",
                     "    strings,", "    options", "}", "*/",
                     "perPage = '<div class=\"<%= this.classNames.group %> <%= this.classNames.perPage %>\">' +",
                     "                '<label><%= this.strings.perPage %> <select>' +",
                     "                '<% Y.Array.each(this.options, function (option, i) { %>' +",
                     "                    '<option value=\"<%= option.value %>\" <%= option.selected %>>' +",
                     "                    '<%= option.label %></option>'+", "                '<% }); %>' +",
                     "            '</select></label></div>';", "", "", "", "",
                     "Y.namespace('DataTable.Templates').Paginator = {", "    rowWrapper: engine.compile(rowWrapper),",
                     "    button: engine.compile(button),", "    content: engine.compile(content),",
                     "    buttons: engine.compile(buttons),", "    gotoPage: engine.compile(gotoPage),",
                     "    perPage: engine.compile(perPage)", "};", "", "",
                     "}, 'patched-v3.18.1', {\"requires\": [\"template\"]});", "", "}());"]
        };
}
var __cov_ht3Sk4P_xSHSVayUw4oJ7Q = __coverage__['build/datatable-paginator-templates/datatable-paginator-templates.js'];
__cov_ht3Sk4P_xSHSVayUw4oJ7Q.s['1']++;
YUI.add('datatable-paginator-templates', function (Y, NAME) {
    __cov_ht3Sk4P_xSHSVayUw4oJ7Q.f['1']++;
    __cov_ht3Sk4P_xSHSVayUw4oJ7Q.s['2']++;
    var engine = new Y.Template(),
        rowWrapper = '<tr><td class="<%= this.wrapperClass %>" colspan="' + '<%= this.numOfCols %>"/></tr>',
        content = '<%= buttons %><%= this.classNames.gotoPage %>' + '<%= this.classNames.perPage %>',
        button = '<button class="<%= this.classNames.control %> ' + '<%= this.classNames.control %>-<%= this.type %>" '
                 + 'data-type="<%= this.type %>"><%= this.label %></button>',
        buttons = '<div class="<%= this.classNames.controls %> <%= this.classNames.group %>">' + '<%== this.buttons %>'
                  + '</div>',
        gotoPage = '<form action="#" class="<%= this.classNames.group %>">' + '<label><%= this.strings.goToLabel %>'
                   + '<input type="text" value="<%= this.page %>">' + '<button><%= this.strings.goToAction %></button>'
                   + '</label>' + '</form>',
        perPage = '<div class="<%= this.classNames.group %> <%= this.classNames.perPage %>">'
                  + '<label><%= this.strings.perPage %> <select>'
                  + '<% Y.Array.each(this.options, function (option, i) { %>'
                  + '<option value="<%= option.value %>" <%= option.selected %>>' + '<%= option.label %></option>'
                  + '<% }); %>' + '</select></label></div>';
    __cov_ht3Sk4P_xSHSVayUw4oJ7Q.s['3']++;
    Y.namespace('DataTable.Templates').Paginator =
        {
            rowWrapper: engine.compile(rowWrapper),
            button: engine.compile(button),
            content: engine.compile(content),
            buttons: engine.compile(buttons),
            gotoPage: engine.compile(gotoPage),
            perPage: engine.compile(perPage)
        };
}, 'patched-v3.18.1', {'requires': ['template']});
