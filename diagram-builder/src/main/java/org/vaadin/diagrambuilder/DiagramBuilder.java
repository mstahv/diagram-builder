package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Objects;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.vaadin.diagrambuilder.client.DiagramBuilderClientRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderServerRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderState;

public class DiagramBuilder extends com.vaadin.ui.AbstractComponent {

    public interface StateCallback {

        public void onStateReceived(DiagramStateEvent event);
    }

    private StateCallback cb;

    private DiagramBuilderServerRpc rpc = new DiagramBuilderServerRpc() {

        public void reportState(String stateJson) {
            try {
                DiagramStateEvent value = mapper.readValue(stateJson,
                        DiagramStateEvent.class);
                value.setRawJsonString(stateJson);
                cb.onStateReceived(value);
                cb = null;
            } catch (IOException ex) {
                Logger.getLogger(DiagramBuilder.class.getName()).
                        log(Level.SEVERE, null, ex);
            }
        }
    };

    public DiagramBuilder() {
        registerRpc(rpc);
    }

    @Override
    public DiagramBuilderState getState() {
        return (DiagramBuilderState) super.getState();
    }

    private NodeType[] availableFields;
    private CustomNodeType[] customNodeTypes;
    private Node[] fields;
    private Transition[] transitions;
    private String initJsonString;

    public Transition[] getTransitions() {
        return transitions;
    }

    public void setTransitions(Transition... transitions) {
        this.transitions = transitions;
        markAsDirty();
    }

    public Node[] getFields() {
        return fields;
    }

    public void setFields(Node... fields) {
        this.fields = fields;
        markAsDirty();
    }

    public NodeType[] getAvailableFields() {
        return availableFields;
    }

    public void setAvailableFields(NodeType... availableFields) {
        this.availableFields = availableFields;
        markAsDirty();
    }

    public CustomNodeType[] getCustomNodeTypes() {
        return customNodeTypes;
    }

    public void setCustomNodeTypes(CustomNodeType... customNodeTypes) {
        this.customNodeTypes = customNodeTypes;
        markAsDirty();
    }

    public String getInitJsonString() {
        return initJsonString;
    }

    public void setInitJsonString(String initJsonString) {
        this.initJsonString = initJsonString;
    }

    private static final ObjectMapper mapper = new ObjectMapper();
    static {
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }

    @Override
    public void beforeClientResponse(boolean initial) {
        super.beforeClientResponse(initial); //To change body of generated methods, choose Tools | Templates.
        try {
            if(initJsonString != null && !initJsonString.isEmpty()) {
                getState().diagramJson = mapper.writeValueAsString(
                        new DiagramInitState(availableFields, customNodeTypes, initJsonString));
            } else {
                getState().diagramJson = mapper.writeValueAsString(
                        new DiagramInitState(availableFields, customNodeTypes, fields, transitions));
            }
        } catch (JsonProcessingException ex) {
            Logger.getLogger(DiagramBuilder.class.getName()).
                    log(Level.SEVERE, null, ex);
        }
    }

    /**
     *
     * @param callback the callback to be notified when client side has reported
     *                 the current state.
     */
    public void getDiagramState(StateCallback callback) {
        cb = callback;
        getRpcProxy(DiagramBuilderClientRpc.class).get();
    }
}
