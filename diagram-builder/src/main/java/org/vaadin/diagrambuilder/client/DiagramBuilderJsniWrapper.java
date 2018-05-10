
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

                var customNodes = conf.customNodeTypes;

                if (typeof customNodes != 'undefined') {
                    for (var i = 0; i < customNodes.length; i++) {
                        var customNode = customNodes[i];
                        var attrs = {
                            type: {
                                value: customNode.type
                            }
                        };

                        var customAttributes = customNode.customAttributes;

                        var attributesForModel = new Array();

                        if (typeof customAttributes != 'undefined') {
                            for (var j = 0; j < customAttributes.length; j++) {
                                var customAttr = customAttributes[j];
                                attrs[customAttr.name] = {
                                    validator: Y.Lang.isString,
                                    value: customAttr.defaultValue
                                };
                                attributesForModel.push({
                                    attributeName: customAttr.name,
                                    name: customAttr.name
                                });
                            }
                        }

                        Y["DiagramNodeCustom" + customNode.type] = Y.Component.create({
                            NAME: 'diagram-node',

                            ATTRS: attrs,

                            EXTENDS: Y.DiagramNodeTask,

                            prototype: {
                                initializer: function() {
                                    var instance = this;

                                    this.SERIALIZABLE_ATTRS = this.SERIALIZABLE_ATTRS.concat(
                                        attributesForModel.map(
                                            function(x) {
                                                return x.attributeName;
                                            }));
                                },

                                getPropertyModel: function () {
                                    var instance = this;

                                    var model = Y.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);

                                    model = model.concat(attributesForModel);

                                    return model;
                                }
                            }
                        });

                        Y.DiagramBuilder.types[customNode.type] = Y["DiagramNodeCustom" + customNode.type];
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
