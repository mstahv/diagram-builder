package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;

import java.io.IOException;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author mattitahvonenitmill
 */
class DiagramInitState implements Serializable {

    private List<NodeType> availableFields;
    private List<CustomNodeType> customNodeTypes;
    private List<Node> fields;
    private List<Transition> transitions;
    private JsonNode initJson;

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

    public List<CustomNodeType> getCustomNodeTypes() {
        return customNodeTypes;
    }

    public void setCustomNodeTypes(List<CustomNodeType> customNodeTypes) {
        this.customNodeTypes = customNodeTypes;
    }

    public JsonNode getInitJson() {
        return initJson;
    }

    public void setInitJsonString(JsonNode initJson) {
        this.initJson = initJson;
    }

    public DiagramInitState() {
    }

    public DiagramInitState(NodeType[] availableFields, CustomNodeType[] customNodeTypes, String initJsonString) {
        this.availableFields = Arrays.asList(availableFields);
        this.customNodeTypes = Arrays.asList(customNodeTypes);
        ObjectMapper mapper = new ObjectMapper();
        try {
            this.initJson = mapper.readTree(initJsonString);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public DiagramInitState(NodeType[] availableFields, CustomNodeType[] customNodeTypes, Node[] fields, Transition[] transitions) {
        this.availableFields = Arrays.asList(availableFields);
        this.customNodeTypes = Arrays.asList(customNodeTypes);
        this.fields = Arrays.asList(fields);
        this.transitions = Arrays.asList(transitions);
    }
}
