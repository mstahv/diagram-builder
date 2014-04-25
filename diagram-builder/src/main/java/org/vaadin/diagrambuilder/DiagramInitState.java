package org.vaadin.diagrambuilder;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author mattitahvonenitmill
 */
class DiagramInitState implements Serializable {

    private List<NodeType> availableFields;
    private List<Node> fields;
    private List<Transition> transitions;

    public List<Transition> getTransitions() {
        return transitions;
    }

    public void setTransitions(List<Transition> transitions) {
        this.transitions = transitions;
    }
    
    public List<NodeType> getAvailableFields() {
        return availableFields;
    }

    public void setAvailableFields(NodeType... availableFields) {
        this.availableFields = Arrays.asList(availableFields);
    }

    public List<Node> getFields() {
        return fields;
    }

    public void setFields(Node... fields) {
        this.fields = Arrays.asList(fields);
    }

    public DiagramInitState() {
    }

    public DiagramInitState(NodeType[] availableFields, Node[] fields, Transition[] transitions) {
        this.availableFields = Arrays.asList(availableFields);
        this.fields = Arrays.asList(fields);
        this.transitions = Arrays.asList(transitions);
    }

}
