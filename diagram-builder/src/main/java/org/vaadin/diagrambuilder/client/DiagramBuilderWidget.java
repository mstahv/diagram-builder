package org.vaadin.diagrambuilder.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Document;
import com.google.gwt.user.client.ui.Widget;

public class DiagramBuilderWidget extends Widget {

    static int count;
    private final int id;
    
    // gets assigned lazily, byt the JSNIWrapper as the diagrambuilder js 
    // component may be instantiated asynchronously.
    DiagramBuilderJsniWrapper wrapper;

    public DiagramBuilderWidget() {
        id = count++;
        // CSS class-name should not be v- prefixed
        setElement(Document.get().createDivElement());
        setStyleName("diagram-builder");
        
        getElement().setInnerHTML(
                "<div id=\"diagram-builder-bb" + id + "\" style='height:100%'>"
                        + "<div id=\"diagram-builder-sn" + id + "\" style='height:100%'></div>"
                        + "</div>");
    }

    public static void connectorClick(Object connector) {
        System.out.println("yeah and yeah");
    }
    
    void setConf(JavaScriptObject conf) {
        DiagramBuilderJsniWrapper.create(conf, id, this);
    }

    String getState() {
        return wrapper.toJSONStr();
    }

}
