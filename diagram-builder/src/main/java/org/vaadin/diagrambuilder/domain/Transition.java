package org.vaadin.diagrambuilder.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

/**
 * Transition from a Node to another.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Transition implements Serializable {

    private String source;
    private String target;
    private org.vaadin.diagrambuilder.domain.Connector connector;

    public Transition() {
    }

    public Transition(String source, String target, org.vaadin.diagrambuilder.domain.Connector connector) {
        this.source = source;
        this.target = target;
        this.connector = connector;
    }

    public Transition(String source, String target, String connectorName) {
        this.source = source;
        this.target = target;
        this.connector = new org.vaadin.diagrambuilder.domain.Connector(connectorName);
    }

    public Transition(String source, String target, String connectorName, Boolean showName) {
        this.source = source;
        this.target = target;
        this.connector = new org.vaadin.diagrambuilder.domain.Connector(connectorName, showName);
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

    public org.vaadin.diagrambuilder.domain.Connector getConnector() {
        return connector;
    }

    public void setConnector(Connector connector) {
        this.connector = connector;
    }

}
