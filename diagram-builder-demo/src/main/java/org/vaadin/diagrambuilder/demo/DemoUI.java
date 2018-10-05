package org.vaadin.diagrambuilder.demo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Notification;
import com.vaadin.ui.UI;

import org.vaadin.diagrambuilder.DiagramBuilder;
import org.vaadin.diagrambuilder.DiagramStateEvent;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;
import org.vaadin.maddon.label.RichText;
import org.vaadin.maddon.layouts.MVerticalLayout;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.annotation.WebServlet;

@Title("DiagramBuilder Add-on Demo")
@SuppressWarnings("serial")
@Theme("valo")
public class DemoUI extends UI {

    private DiagramBuilder diagramBuilder;

    @WebServlet(value = "/*", asyncSupported = true)
    @VaadinServletConfiguration(productionMode = false, ui = DemoUI.class, widgetset = "app.widgetset")
    public static class Servlet extends VaadinServlet {
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
        diagramBuilder = createDiagramBuilder();

        initDiagramBuilder(diagramBuilder);

        diagramBuilder.addTaskRightClickListener(nodeDto -> Notification.show("Task Right click " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addGroupRightClickListener(nodeDto -> Notification.show("Group Right click " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addGroupDragEndListener(nodeDto -> Notification.show("Group Drag ends " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addGroupDragStartListener(nodeDto -> Notification.show("Group Drag starts " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));

        setContent(
                new MVerticalLayout(
                        new RichText().withMarkDownResource("/intro.md"),
                        button,
                        diagramBuilder
                )
        );
    }

    private void initDiagramBuilder(DiagramBuilder diagramBuilder) {
        Node task1 = new Node("Task1", "task", 38, 158);
        Node task2 = new Node("Task2", "task", 262, 221);

        List<Node> tasks = new ArrayList<>();
        tasks.add(task1);
        tasks.add(task2);

        Node group = new Node("Group", "group", 30, 140, 400, 200);
        group.setChildren(tasks);

        Node[] nodes = {task1, task2, group};

        diagramBuilder.setFields(nodes);

        diagramBuilder.setTransitions(
                new Transition("Task1", "Task2", "TaskConnector")
        );
    }

    private DiagramBuilder createDiagramBuilder() {
        DiagramBuilder diagramBuilder = new DiagramBuilder();
        diagramBuilder.setSizeFull();
        diagramBuilder.setAvailableFields(
                new NodeType(
                        "diagram-node-task-icon",
                        "Task",
                        "task"
                ),
                new NodeType(
                        "diagram-node-group-icon",
                        "Group",
                        "group"
                )
        );

        return diagramBuilder;
    }

    public void reportStateBack(DiagramStateEvent event) {
        // Normally you'd do something with the nodes, in this
        // demo, just report it back to browser
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);

        try {
            String writeValueAsString = mapper.writeValueAsString(event.getNodes());
            Notification.show(
                    "State reported: ",
                    writeValueAsString,
                    Notification.Type.WARNING_MESSAGE);
        } catch (JsonProcessingException ex) {
            Logger.getLogger(DemoUI.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
