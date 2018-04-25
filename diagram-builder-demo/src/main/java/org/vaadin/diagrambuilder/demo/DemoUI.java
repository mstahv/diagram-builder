package org.vaadin.diagrambuilder.demo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.vaadin.annotations.JavaScript;
import com.vaadin.annotations.StyleSheet;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Notification;
import com.vaadin.ui.UI;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.vaadin.diagrambuilder.DiagramBuilder;
import org.vaadin.diagrambuilder.DiagramStateEvent;
import org.vaadin.diagrambuilder.Node;
import org.vaadin.diagrambuilder.NodeType;
import org.vaadin.diagrambuilder.Transition;
import org.vaadin.viritin.label.RichText;
import org.vaadin.viritin.layouts.MVerticalLayout;

@Title("DiagramBuilder Add-on Demo")
@SuppressWarnings("serial")
@JavaScript("http://cdn.alloyui.com/3.0.1/aui/aui-min.js")
@StyleSheet("http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css")
@Theme("valo")
public class DemoUI extends UI {

    private DiagramBuilder diagramBuilder;

    @WebServlet(value = "/*", asyncSupported = true)
    @VaadinServletConfiguration(productionMode = false, ui = DemoUI.class, widgetset = "org.vaadin.diagrambuilder.demo.DemoWidgetSet")
    public static class Servlet extends VaadinServlet {

        @Override
        protected void writeStaticResourceResponse(HttpServletRequest request,
                HttpServletResponse response, URL resourceUrl) throws IOException {

            /* Optimized widgetset serving, irrelevant for the actual diagram usage */
            if (resourceUrl.getFile().contains("/widgetsets/")
                    && (resourceUrl.getFile().endsWith(".js") || resourceUrl.
                    getFile().endsWith(".css"))) {
                URL gzipurl = new URL(resourceUrl.toString() + ".gz");
                response.setHeader("Content-Encoding", "gzip");
                super.writeStaticResourceResponse(request, response, gzipurl);
                return;
            }
            super.writeStaticResourceResponse(request, response, resourceUrl);
        }

    }

    Button button = new Button("Get state to server and report as JSON",
            new Button.ClickListener() {

                @Override
                public void buttonClick(Button.ClickEvent event) {
                    /*
                     * Using asynchronous API to lazily fetch the current state
                     * of the diagram.
                     */
                    diagramBuilder.getDiagramState(new DiagramBuilder.StateCallback() {

                        @Override
                        public void onStateReceived(DiagramStateEvent event) {
                            reportStateBack(event);
                        }

                    });
                }
            });

    @Override
    protected void init(VaadinRequest request) {

        // Initialize our new UI component
        diagramBuilder = new DiagramBuilder();
        diagramBuilder.setAvailableFields(
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
        diagramBuilder.setFields(
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

        diagramBuilder.setTransitions(
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

        diagramBuilder.setSizeFull();
        

        setContent(
                new MVerticalLayout(
                        new RichText().withMarkDownResource("/intro.md"),
                        button,
                        diagramBuilder
                )
        );
//        setContent(diagramBuilder);

    }

    public void reportStateBack(DiagramStateEvent event) {
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
