
package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

/**
 * Connector details.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Connector implements Serializable {

    public Connector() {
    }

    public Connector(String name) {
        this.name = name;
    }
    
    private String name;

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

}
