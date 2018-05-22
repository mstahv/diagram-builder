package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.vaadin.diagrambuilder.client.DiagramBuilderClientRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderServerRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderState;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;
import org.vaadin.diagrambuilder.listener.ConnectorLeftClickListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOutListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOverListener;
import org.vaadin.diagrambuilder.listener.ConnectorRightClickListener;
import org.vaadin.diagrambuilder.listener.TaskRightClickListener;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DiagramBuilder extends com.vaadin.ui.AbstractComponent {

    private org.vaadin.diagrambuilder.domain.NodeType[] availableFields;
    private org.vaadin.diagrambuilder.domain.Node[] fields;
    private org.vaadin.diagrambuilder.domain.Transition[] transitions;

    private ConnectorEvent connectorEvent;
    private NodeEvent nodeEvent;

    private boolean showDeleteNodeIcon = true;
    private boolean enableDeleteByKeyStroke = true;

    public interface StateCallback {
        public void onStateReceived(DiagramStateEvent event);
    }

    private StateCallback cb;

    private DiagramBuilderServerRpc rpc = new DiagramBuilderServerRpc() {

        public void reportState(String stateJson) {
            try {
                DiagramStateEvent value = mapper.readValue(stateJson, DiagramStateEvent.class);
                value.setRawJsonString(stateJson);
                cb.onStateReceived(value);
                cb = null;
            } catch (IOException ex) {
                Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    };

    public DiagramBuilder() {
        registerRpc(rpc);

        connectorEvent = new ConnectorEvent();
        connectorEvent.createMouseMoveEvent();
        connectorEvent.createLeftClickEvent();
        connectorEvent.createRightClickEvent();

        nodeEvent = new NodeEvent();
        nodeEvent.createRightclickEvent();
    }

    public void addConnectorMouseOutListener(ConnectorMouseOutListener listener) {
        connectorEvent.addMouseOutListener(listener);
    }

    public void addConnectorMouseOverListener(ConnectorMouseOverListener listener) {
        connectorEvent.addMouseOverListener(listener);
    }

    public void addConnectorLeftClickListener(ConnectorLeftClickListener listener) {
        connectorEvent.addLeftClickListener(listener);
    }

    public void addConnectorRightClickListener(ConnectorRightClickListener listener) {
        connectorEvent.addRightClickListener(listener);
    }

    public void addTaskRightClickListener(TaskRightClickListener listener) {
        nodeEvent.addRightClickListener(listener);
    }


    public org.vaadin.diagrambuilder.domain.Transition[] getTransitions() {
        return transitions;
    }

    public void setTransitions(Transition... transitions) {
        this.transitions = transitions;
        markAsDirty();
    }


    public org.vaadin.diagrambuilder.domain.Node[] getFields() {
        return fields;
    }

    public void setFields(Node... fields) {
        this.fields = fields;
        markAsDirty();
    }

    public org.vaadin.diagrambuilder.domain.NodeType[] getAvailableFields() {
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
    public DiagramBuilderState getState() {
        return (DiagramBuilderState) super.getState();
    }

    @Override
    public void beforeClientResponse(boolean initial) {
        super.beforeClientResponse(initial); //To change body of generated methods, choose Tools | Templates.
        try {
            DiagramInitState diagramInitState = new DiagramInitState(availableFields, fields, transitions);
            diagramInitState.setShowDeleteNodeIcon(showDeleteNodeIcon);
            diagramInitState.setEnableDeleteByKeyStroke(enableDeleteByKeyStroke);

            getState().diagramJson = mapper.writeValueAsString(diagramInitState);
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

    public boolean isShowDeleteNodeIcon() {
        return showDeleteNodeIcon;
    }

    public void setShowDeleteNodeIcon(boolean showDeleteNodeIcon) {
        this.showDeleteNodeIcon = showDeleteNodeIcon;
    }

    public boolean isEnableDeleteByKeyStroke() {
        return enableDeleteByKeyStroke;
    }

    public void setEnableDeleteByKeyStroke(boolean enableDeleteByKeyStroke) {
        this.enableDeleteByKeyStroke = enableDeleteByKeyStroke;
    }
}
