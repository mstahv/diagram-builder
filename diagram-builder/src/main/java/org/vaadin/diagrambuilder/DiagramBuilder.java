package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.client.DiagramBuilderClientRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderServerRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderState;

import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import elemental.json.JsonArray;

public class DiagramBuilder extends com.vaadin.ui.AbstractComponent {

    public static final String JAVASCRIPT_ON_MOUSE_MOVE_CONNECTOR = DiagramBuilder.class.getCanonicalName() + ".onMouseMoveConnector";

    private ArrayList<TransitionMouseMoveListener> transitionMouseMoveListeners = new ArrayList<>();

    public interface TransitionMouseMoveListener extends Serializable {
        public void move(String connectorName, String event, Double top, Double left);
    }

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

        com.vaadin.ui.JavaScript.getCurrent().addFunction(JAVASCRIPT_ON_MOUSE_MOVE_CONNECTOR, new JavaScriptFunction() {
            @Override
            public void call(JsonArray jsonArray) {
                String connectorName = jsonArray.getObject(0).getString("name");
                String event = jsonArray.getObject(0).getString("event");
                Double top = jsonArray.getObject(0).getNumber("clientY");
                Double left = jsonArray.getObject(0).getNumber("clientX");

                fireTransitionMouseMoveListener(connectorName, event, top, left);
            }

        });
    }

    public void fireTransitionMouseMoveListener(String connectorName, String event, Double top, Double left) {
        for (TransitionMouseMoveListener listener: transitionMouseMoveListeners)
            listener.move(connectorName, event, top, left);
    }

    public void addTransitionMouseMoveListener(TransitionMouseMoveListener listener) {
        transitionMouseMoveListeners.add(listener);
    }

    @Override
    public DiagramBuilderState getState() {
        return (DiagramBuilderState) super.getState();
    }

    private NodeType[] availableFields;
    private Node[] fields;
    private Transition[] transitions;

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

    private static final ObjectMapper mapper = new ObjectMapper();

    static {
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
    }

    @Override
    public void beforeClientResponse(boolean initial) {
        super.beforeClientResponse(initial); //To change body of generated methods, choose Tools | Templates.
        try {
            getState().diagramJson = mapper.writeValueAsString(
                    new DiagramInitState(availableFields, fields, transitions));
        } catch (JsonProcessingException ex) {
            Logger.getLogger(DiagramBuilder.class.getName()).
                    log(Level.SEVERE, null, ex);
        }
    }

    /**
     * @param callback the callback to be notified when client side has reported
     *                 the current state.
     */
    public void getDiagramState(StateCallback callback) {
        cb = callback;
        getRpcProxy(DiagramBuilderClientRpc.class).get();
    }
}
