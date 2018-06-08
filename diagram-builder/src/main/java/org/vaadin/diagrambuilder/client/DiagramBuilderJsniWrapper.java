
package org.vaadin.diagrambuilder.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 *
 */
public class DiagramBuilderJsniWrapper extends JavaScriptObject {

    protected DiagramBuilderJsniWrapper(){};

    public static native void create(JavaScriptObject conf, int id, DiagramBuilderWidget widget) 
    /*-{
        $wnd.YUI({filter: 'raw'}).use(
            'aui-diagram-builder',
            function(Y) {

                var customNodeTypes = conf.customNodeTypes;

                if (typeof customNodeTypes != 'undefined') {
                    for (var i = 0; i < customNodeTypes.length; i++) {
                        var customNodeType = customNodeTypes[i];
                        var attrs = {
                            type: {
                                value: customNodeType.type
                            }
                        };

                        var customAttributes = customNodeType.customAttributes;

                        if (typeof customAttributes != 'undefined') {
                            for (var j = 0; j < customAttributes.length; j++) {
                                var customAttr = customAttributes[j];
                                attrs[customAttr.name.toLowerCase()] = {
                                    validator: Y.Lang.isString,
                                    value: customAttr.defaultValue
                                };
                            }
                            Y["DiagramNodeCustom" + customNodeType.type + "_custom_attrs"] = customAttributes;
                        }

                        Y["DiagramNodeCustom" + customNodeType.type] = Y.Component.create({
                            NAME: 'diagram-node',

                            ATTRS: attrs,

                            EXTENDS: Y.DiagramNodeTask,

                            prototype: {

                                customNodeTypeName: customNodeType.type,
                                customNodeTypeUsesDefaultAttributes: customNodeType.usesDefaultAttributes,

                                initializer: function() {
                                    var instance = this;

                                    if(!instance.customNodeTypeUsesDefaultAttributes) {
                                        this.SERIALIZABLE_ATTRS = this.SERIALIZABLE_ATTRS.filter(function (attributeName) {
                                            if(["name", "description"].indexOf(attributeName) == -1){
                                                return attributeName;
                                            }
                                        });
                                    }


                                    customAttributes = Y["DiagramNodeCustom" + instance.customNodeTypeName + "_custom_attrs"];

                                    if (typeof customAttributes != 'undefined') {
                                        for (var j = 0; j < customAttributes.length; j++) {
                                            var customAttr = customAttributes[j];
                                            this.SERIALIZABLE_ATTRS.push(customAttr.name.toLowerCase());
                                        }
                                    }
                                },

                                getPropertyModel: function () {
                                    var instance = this;

                                    customAttributes = Y["DiagramNodeCustom" + instance.customNodeTypeName + "_custom_attrs"];

                                    var model = Y.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);
                                    if(!instance.customNodeTypeUsesDefaultAttributes) {
                                        model = model.filter(function (attrObject) {
                                            if(["name", "description"].indexOf(attrObject.attributeName) == -1){
                                                return attrObject;
                                            }
                                        });
                                    }
                                    if (typeof customAttributes != 'undefined') {
                                        for (var j = 0; j < customAttributes.length; j++) {
                                            var customAttr = customAttributes[j];
                                            var attrObject;
                                            if (customAttr.comboBox) {
                                                attrObject = {
                                                    attributeName: customAttr.name.toLowerCase(),
                                                    name: customAttr.name,
                                                    value: customAttr.defaultValue,
                                                    editor: new Y.DropDownCellEditor({
                                                        options: customAttr.options
                                                    })
                                                };
                                            } else {
                                                attrObject = {
                                                    attributeName: customAttr.name.toLowerCase(),
                                                    name: customAttr.name
                                                }
                                            }
                                            model.push(attrObject);
                                        }
                                    }
                                    return model;
                                }
                            }
                        });

                        Y.DiagramBuilder.types[customNodeType.type] = Y["DiagramNodeCustom" + customNodeType.type];
                    }
                }

                // Code starting here is to build diagram initialization JSON from initJson coming from server
                if(typeof conf.fields == 'undefined') {
                    conf.fields = new Array();
                }
                if(typeof conf.transitions == 'undefined') {
                    conf.transitions = new Array();
                }
                if(typeof conf.initJson != 'undefined' && typeof conf.initJson.nodes != 'undefined') {
                    for (var i = 0; i < conf.initJson.nodes.length; i++) {
                        var field = conf.initJson.nodes[i];
                        // All this deletes are for sorting some bugs by making this JSON have the same
                        // structure as the one generated when the diagram is initialized by creating
                        // the Java Node objects. I'm deleting properties instead of creating a new JSON
                        // with the properties I need because I don't want to lose custom attributes.
                        delete field['required'];
                        delete field['width'];
                        delete field['height'];
                        delete field['zIndex'];
                        field.x = field.xy[0];
                        field.y = field.xy[1];

                        for (var j = 0; j < field.transitions.length; j++) {
                            // For this, I will create a new JSON because I know what properties I want,
                            // and because the transition JSON that I have to 'purge' is way more complex
                            // than the field JSON
                            var transition = field.transitions[j];
                            conf.transitions.push({
                                source: transition.source,
                                target: transition.target,
                                connector: {
                                    name: transition.connector.name
                                }
                            });
                        }
                        delete field['transitions'];
                        conf.fields.push(field);
                    }

                }

                delete conf['initJson'];
                // Here ends the code to initialize from initJson

                conf.boundingBox =  '#diagram-builder-bb' + id;
                conf.srcNode = '#diagram-builder-sn' + id;

                var trs = conf.transitions;

                var diagramBuilder = new Y.DiagramBuilder(conf).render();

                diagramBuilder.connectAll(trs);

                widget.@org.vaadin.diagrambuilder.client.DiagramBuilderWidget::wrapper = diagramBuilder;
            }
        );
    }-*/;

    public final native JavaScriptObject toJSON() /*-{
        return this.toJSON();
    }-*/;

    public final native String toJSONStr() /*-{
        return JSON.stringify(this.toJSON());
    }-*/;

}
