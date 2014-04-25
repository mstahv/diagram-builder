package org.vaadin.diagrambuilder;

/**
 *
 */
public class NodeType {

    private String iconClass;

    /**
     * Get the value of iconClass
     *
     * @return the value of iconClass
     */
    public String getIconClass() {
        return iconClass;
    }

    /**
     * Set the value of iconClass
     *
     * @param iconClass new value of iconClass
     */
    public void setIconClass(String iconClass) {
        this.iconClass = iconClass;
    }

    private String label;

    /**
     * Get the value of label
     *
     * @return the value of label
     */
    public String getLabel() {
        return label;
    }

    /**
     * Set the value of label
     *
     * @param label new value of label
     */
    public void setLabel(String label) {
        this.label = label;
    }

    private String type;

    /**
     * Get the value of type
     *
     * @return the value of type
     */
    public String getType() {
        return type;
    }

    /**
     * Set the value of type
     *
     * @param type new value of type
     */
    public void setType(String type) {
        this.type = type;
    }

    public NodeType(String iconClass, String label, String type) {
        this.iconClass = iconClass;
        this.label = label;
        this.type = type;
    }

}
