package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

/**
 * Transition from a Node to another.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Transition implements Serializable {

    private String source;
    private String target;
    private Connector connector;

    public Transition() {
    }

    public Transition(String source, String target, Connector connector) {
        this.source = source;
        this.target = target;
        this.connector = connector;
    }

    public Transition(String source, String target, String connectorName) {
        this.source = source;
        this.target = target;
        this.connector = new Connector(connectorName);
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public Connector getConnector() {
        return connector;
    }

    public void setConnector(Connector connector) {
        this.connector = connector;
    }

}
