
package org.vaadin.diagrambuilder;

import java.util.List;

/**
 * This class represents the current state of the DiagramBuilder
 */
public class DiagramStateEvent {

    private List<Node> nodes;
    
    private String rawJsonString;

    public List<Node> getNodes() {
        return nodes;
    }

    public void setNodes(List<Node> nodes) {
        this.nodes = nodes;
    }

    public String getRawJsonString() {
        return rawJsonString;
    }

    public void setRawJsonString(String rawJsonString) {
        this.rawJsonString = rawJsonString;
    }

    public DiagramStateEvent() {
    }

}
