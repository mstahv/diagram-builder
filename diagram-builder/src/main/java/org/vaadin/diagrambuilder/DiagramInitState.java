package org.vaadin.diagrambuilder;

import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author mattitahvonenitmill
 */
public class DiagramInitState implements Serializable {

    private List<org.vaadin.diagrambuilder.domain.NodeType> availableFields;
    private List<org.vaadin.diagrambuilder.domain.Node> fields;
    private List<org.vaadin.diagrambuilder.domain.Transition> transitions;
    private Boolean showDeleteNodeIcon = true;
    private Boolean enableDeleteByKeyStroke = true;
    private Boolean moveNodeOutSideGroup = false;

    public DiagramInitState() {
    }

    public DiagramInitState(org.vaadin.diagrambuilder.domain.NodeType[] availableFields, org.vaadin.diagrambuilder.domain.Node[] fields, org.vaadin.diagrambuilder.domain.Transition[] transitions) {
        this.availableFields = Arrays.asList(availableFields);
        this.fields = Arrays.asList(fields);
        this.transitions = Arrays.asList(transitions);
    }

    public List<org.vaadin.diagrambuilder.domain.Transition> getTransitions() {
        return transitions;
    }

    public void setTransitions(List<Transition> transitions) {
        this.transitions = transitions;
    }

    public List<org.vaadin.diagrambuilder.domain.NodeType> getAvailableFields() {
        return availableFields;
    }

    public void setAvailableFields(NodeType... availableFields) {
        this.availableFields = Arrays.asList(availableFields);
    }

    public List<org.vaadin.diagrambuilder.domain.Node> getFields() {
        return fields;
    }

    public void setFields(Node... fields) {
        this.fields = Arrays.asList(fields);
    }

    public Boolean getShowDeleteNodeIcon() {
        return showDeleteNodeIcon;
    }

    public void setShowDeleteNodeIcon(Boolean showDeleteNodeIcon) {
        this.showDeleteNodeIcon = showDeleteNodeIcon;
    }

    public Boolean getEnableDeleteByKeyStroke() {
        return enableDeleteByKeyStroke;
    }

    public void setEnableDeleteByKeyStroke(Boolean enableDeleteByKeyStroke) {
        this.enableDeleteByKeyStroke = enableDeleteByKeyStroke;
    }

    public Boolean getMoveNodeOutSideGroup() {
        return moveNodeOutSideGroup;
    }

    public void setMoveNodeOutSideGroup(Boolean moveNodeOutSideGroup) {
        this.moveNodeOutSideGroup = moveNodeOutSideGroup;
    }
}
