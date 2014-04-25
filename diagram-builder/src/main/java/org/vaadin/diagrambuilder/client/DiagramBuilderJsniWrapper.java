
package org.vaadin.diagrambuilder.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 *
 * @author mattitahvonenitmill
 */
public class DiagramBuilderJsniWrapper extends JavaScriptObject {
    
    protected DiagramBuilderJsniWrapper(){};

    public static native void create(JavaScriptObject conf, int id, DiagramBuilderWidget widget) 
    /*-{
      $wnd.YUI().use(
        'aui-diagram-builder',
        function(Y) {
            
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
