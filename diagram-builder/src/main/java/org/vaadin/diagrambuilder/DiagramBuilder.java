package org.vaadin.diagrambuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.annotations.JavaScript;
import com.vaadin.annotations.StyleSheet;
import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.client.DiagramBuilderClientRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderServerRpc;
import org.vaadin.diagrambuilder.client.DiagramBuilderState;
import org.vaadin.diagrambuilder.domain.Connector;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;
import org.vaadin.diagrambuilder.image.AutoCrop;
import org.vaadin.diagrambuilder.listener.ConnectorLeftClickListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOutListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOverListener;
import org.vaadin.diagrambuilder.listener.ConnectorRightClickListener;
import org.vaadin.diagrambuilder.listener.GroupDragEndListener;
import org.vaadin.diagrambuilder.listener.GroupDragStartListener;
import org.vaadin.diagrambuilder.listener.GroupMouseOutListener;
import org.vaadin.diagrambuilder.listener.GroupMouseOverListener;
import org.vaadin.diagrambuilder.listener.GroupRightClickListener;
import org.vaadin.diagrambuilder.listener.TaskDragEndListener;
import org.vaadin.diagrambuilder.listener.TaskDragStartListener;
import org.vaadin.diagrambuilder.listener.TaskMouseOutListener;
import org.vaadin.diagrambuilder.listener.TaskMouseOverListener;
import org.vaadin.diagrambuilder.listener.TaskRightClickListener;

import sun.misc.BASE64Decoder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

@JavaScript({"vaadin://widgetsets/app.widgetset/diagram-builder/js/diagram/alloyui/build/aui/aui-min.js",
        "vaadin://widgetsets/app.widgetset/diagram-builder/js/dom-to-image/dom-to-image.min.js"})
@StyleSheet("vaadin://widgetsets/app.widgetset/diagram-builder/alloyui-bootstrap.css")
public class DiagramBuilder extends com.vaadin.ui.AbstractComponent {

    private static final String EXPORT_TO_PNG_JAVASCRIPT_FUNCTION = "com.najor.printToPngBase64EventId";

    private final String eventId = Integer.toString(this.hashCode());

    private NodeType[] availableFields;
    private Node[] fields;
    private Transition[] transitions;

    private ConnectorEvent connectorEvent;
    private NodeEvent nodeEvent;

    private boolean showDeleteNodeIcon = true;
    private boolean enableDeleteByKeyStroke = true;
    private boolean moveNodeOutSideGroup = false;

    private ArrayList<Consumer<byte[]>> stringBase64Listeners = new ArrayList<>();


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

        com.vaadin.ui.JavaScript.getCurrent().addFunction(EXPORT_TO_PNG_JAVASCRIPT_FUNCTION + this.eventId, (JavaScriptFunction) jsonArray -> {
            try {
                String base64 = jsonArray.getString(0).replace("data:image/png;base64,", "");

                byte[] imageByte = AutoCrop.autoCrop(new BASE64Decoder().decodeBuffer(base64));

                stringBase64Listeners.forEach(diagramStringBase64Listener -> diagramStringBase64Listener.accept(imageByte));
            } catch (IOException e) {
                throw new RuntimeException("Error exporting diagram to png", e);
            } finally {
                stringBase64Listeners.clear();
            }
        });

        connectorEvent = new ConnectorEvent(eventId);
        connectorEvent.createMouseMoveEvent();
        connectorEvent.createLeftClickEvent();
        connectorEvent.createRightClickEvent();

        nodeEvent = new NodeEvent(eventId);
        nodeEvent.createRightClickEvent();
        nodeEvent.createDragStartEvent();
        nodeEvent.createDragEndEvent();
        nodeEvent.createMouseMoveEvent();
    }

    public void getImagePng(Consumer<byte[]> getBase64Consumer) {
        stringBase64Listeners.clear();
        stringBase64Listeners.add(getBase64Consumer);

        String builder = "var yuiEl = document.querySelector('.property-builder-drop-container.yui3-dd-drop');\n" +
                "yuiEl.style.height = yuiEl.scrollHeight + 'px';\n" +
                "yuiEl.style.width = yuiEl.scrollWidth + 'px';\n" +
                "domtoimage.toPng(yuiEl)\n" +
                "        .then(dataURL => {\n" +
                "   yuiEl.style.height = '';\n" +
                "   yuiEl.style.width = '';\n" +
                "   " + EXPORT_TO_PNG_JAVASCRIPT_FUNCTION + this.eventId + "(dataURL);\n" +
                "}).catch(error => {" +
                "   yuiEl.style.height = '';\n" +
                "   yuiEl.style.width = '';\n" +
                "   console.error('Something went wrong!',error);" +
                "});";

        com.vaadin.ui.JavaScript.getCurrent().execute(builder);
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

    public void addTaskMouseOverListener(TaskMouseOverListener listener) {
        nodeEvent.addTaskMouseOverListener(listener);
    }

    public void addTaskMouseOutListener(TaskMouseOutListener listener) {
        nodeEvent.addTaskMouseOutListener(listener);
    }

    public void addTaskRightClickListener(TaskRightClickListener listener) {
        nodeEvent.addRightClickListener(listener);
    }

    public void addTaskDragStartListener(TaskDragStartListener listener) {
        nodeEvent.addTaskDragStartListener(listener);
    }

    public void addTaskDragEndListener(TaskDragEndListener listener) {
        nodeEvent.addTaskDragEndListener(listener);
    }

    public void addGroupRightClickListener(GroupRightClickListener listener) {
        nodeEvent.addRightClickListener(listener);
    }

    public void addGroupDragStartListener(GroupDragStartListener listener) {
        nodeEvent.addGroupDragStartListener(listener);
    }

    public void addGroupDragEndListener(GroupDragEndListener listener) {
        nodeEvent.addGroupDragEndListener(listener);
    }

    public void addGroupMouseOverListener(GroupMouseOverListener listener) {
        nodeEvent.addGroupMouseOverListener(listener);
    }

    public void addGroupMouseOutListener(GroupMouseOutListener listener) {
        nodeEvent.addGroupMouseOutListener(listener);
    }

    public Transition[] getTransitions() {
        return transitions;
    }

    public void setTransitions(Transition... transitions) {
        this.transitions = transitions;
        for (Transition transition : this.transitions) {
            transition.getConnector().setOnMouseMove(Connector.ON_MOUSE_MOVE_JAVASCRIPT + eventId);
            transition.getConnector().setOnLeftClick(Connector.ON_LEFT_CLICK_JAVASCRIPT + eventId);
            transition.getConnector().setOnRightClick(Connector.ON_RIGHT_CLICK_JAVASCRIPT + eventId);
        }
        markAsDirty();
    }


    public Node[] getFields() {
        return fields;
    }

    public void setFields(Node... fields) {
        this.fields = fields;
        for (Node node : this.fields) {
            node.setOnRightClick(Node.ON_RIGHT_CLICK_JAVASCRIPT + eventId);
            node.setOnDragStart(Node.ON_DRAG_START_JAVASCRIPT + eventId);
            node.setOnDragEnd(Node.ON_DRAG_END_JAVASCRIPT + eventId);
            node.setOnMouseMove(Node.ON_MOUSE_MOVE_JAVASCRIPT + eventId);
        }

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
            diagramInitState.setMoveNodeOutSideGroup(moveNodeOutSideGroup);

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

    public boolean isMoveNodeOutSideGroup() {
        return moveNodeOutSideGroup;
    }

    public void setMoveNodeOutSideGroup(boolean moveNodeOutSideGroup) {
        this.moveNodeOutSideGroup = moveNodeOutSideGroup;
    }
}
