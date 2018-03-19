
package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

/**
 * Connector details.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Connector implements Serializable {

    private String name;
    private String onMouseMove = DiagramBuilder.JAVASCRIPT_ON_MOUSE_MOVE_CONNECTOR;
    private Boolean showName = true;

    public Connector() {
    }

    public Connector(String name) {
        this.name = name;
    }
    public Connector(String name, Boolean showName) {
        this.name = name;
        this.showName = showName;
    }

    /**
     * Get the value of name
     *
     * @return the value of name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the value of name
     *
     * @param name new value of name
     */
    public void setName(String name) {
        this.name = name;
    }

    public String getOnMouseMove() {
        return onMouseMove;
    }

    public Boolean getShowName() {
        return showName;
    }

    public void setShowName(Boolean showName) {
        this.showName = showName;
    }
}
