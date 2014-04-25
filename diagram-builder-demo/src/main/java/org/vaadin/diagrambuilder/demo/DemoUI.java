package org.vaadin.diagrambuilder.demo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.vaadin.annotations.JavaScript;
import com.vaadin.annotations.StyleSheet;
import com.vaadin.annotations.Title;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Notification;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import org.vaadin.diagrambuilder.DiagramBuilder;
import org.vaadin.diagrambuilder.DiagramStateEvent;
import org.vaadin.diagrambuilder.Node;
import org.vaadin.diagrambuilder.NodeType;
import org.vaadin.diagrambuilder.Transition;
import org.vaadin.maddon.label.RichText;
import org.vaadin.maddon.layouts.MVerticalLayout;

@Title("DiagramBuilder Add-on Demo")
@SuppressWarnings("serial")
@JavaScript("http://cdn.alloyui.com/2.5.0/aui/aui-min.js")
@StyleSheet("http://cdn.alloyui.com/2.5.0/aui-css/css/bootstrap.min.css")
public class DemoUI extends UI implements DiagramBuilder.StateCallback {

    @WebServlet(value = "/*", asyncSupported = true)
    @VaadinServletConfiguration(productionMode = false, ui = DemoUI.class, widgetset = "org.vaadin.diagrambuilder.demo.DemoWidgetSet")
    public static class Servlet extends VaadinServlet {
    }

    @Override
    protected void init(VaadinRequest request) {

        // Initialize our new UI component
        final DiagramBuilder component = new DiagramBuilder();

        component.setAvailableFields(
                new NodeType(
                        "diagram-node-start-icon",
                        "Start",
                        "start"
                ),
                new NodeType(
                        "diagram-node-task-icon",
                        "Task",
                        "task"
                ),
                new NodeType(
                        "diagram-node-state-icon",
                        "State",
                        "state"
                ),
                new NodeType(
                        "diagram-node-join-icon",
                        "Join",
                        "join"
                ),
                new NodeType(
                        "diagram-node-fork-icon",
                        "Fork",
                        "fork"
                ),
                new NodeType(
                        "diagram-node-condition-icon",
                        "Condition",
                        "condition"
                ),
                new NodeType(
                        "diagram-node-end-icon",
                        "End",
                        "end"
                ));
        component.setFields(
                new Node(
                        "StartNode",
                        "start",
                        10, 10
                ),
                new Node(
                        "Condition",
                        "condition",
                        260, 16
                ),
                new Node(
                        "Fork",
                        "fork",
                        183, 99
                ),
                new Node(
                        "Task1",
                        "task",
                        38, 158
                ),
                new Node(
                        "Task2",
                        "task",
                        262, 221
                ),
                new Node(
                        "Join",
                        "join",
                        99, 300
                ),
                new Node(
                        "State",
                        "state",
                        287, 377
                ),
                new Node(
                        "Task3",
                        "task",
                        100, 444
                ),
                new Node(
                        "EndNode",
                        "end",
                        326, 500
                ));

        component.setTransitions(
                new Transition("StartNode", "Condition", "TaskConnector1"),
                new Transition("Condition", "Fork", "TaskConnector2"),
                new Transition("Fork", "Task1", "TaskConnector3"),
                new Transition("Fork", "Task2", "TaskConnector4"),
                new Transition("Task1", "Join", "TaskConnector5"),
                new Transition("Task2", "Join", "TaskConnector6"),
                new Transition("Join", "State", "TaskConnector7"),
                new Transition("State", "Task3", "TaskConnector8"),
                new Transition("Task3", "EndNode", "TaskConnector9")
        );

        component.setSizeFull();;

        Button button = new Button("Get state to server and report as JSON",
                new Button.ClickListener() {

                    @Override
                    public void buttonClick(Button.ClickEvent event) {
                        component.getDiagramState(DemoUI.this);
                    }
                });

        setContent(
                new MVerticalLayout(
                        new RichText().withMarkDownResource("/intro.md"),
                        button,
                        component
                )
        );

    }

    @Override
    public void onStateReceived(DiagramStateEvent event) {
        List<Node> nodes = event.getNodes();

        // Normally you'd do something with the nodes, in this 
        // demo, just report it back to browser
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        mapper.enable(SerializationFeature.INDENT_OUTPUT);
        try {
            String writeValueAsString = mapper.writeValueAsString(event.
                    getNodes());
            Notification.show(
                    "State reported: ",
                    writeValueAsString,
                    Notification.Type.WARNING_MESSAGE);
        } catch (JsonProcessingException ex) {
            Logger.getLogger(
                    DemoUI.class.
                    getName()).
                    log(Level.SEVERE, null, ex);
        }

    }

}
