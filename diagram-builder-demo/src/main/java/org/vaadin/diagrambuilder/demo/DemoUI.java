package org.vaadin.diagrambuilder.demo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.Title;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.FileDownloader;
import com.vaadin.server.StreamResource;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Notification;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

import org.vaadin.diagrambuilder.DiagramBuilder;
import org.vaadin.diagrambuilder.DiagramStateEvent;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.IntStream;

import javax.servlet.annotation.WebServlet;

@Title("DiagramBuilder Add-on Demo")
@SuppressWarnings("serial")
@Theme("valo")
public class DemoUI extends UI {

    private DiagramBuilder diagramBuilder;
    private HorizontalLayout buttonBarLayout;

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
                    diagramBuilder.getDiagramState(event1 -> reportStateBack(event1));
                }
            });

    @Override
    protected void init(VaadinRequest request) {
        diagramBuilder = createDiagramBuilder();

        initDiagramBuilder(diagramBuilder);

        diagramBuilder.addGroupRightClickListener(nodeDto -> Notification.show("Group Right click " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addGroupDragEndListener(nodeDto -> Notification.show("Group Drag ends " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addGroupDragStartListener(nodeDto -> Notification.show("Group Drag starts " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));

        diagramBuilder.addTaskRightClickListener(nodeDto -> Notification.show("Task Right click " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addTaskMouseOverListener(nodeDto -> Notification.show("Task Mouse OVER " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addTaskMouseOutListener(nodeDto -> Notification.show("Task Mouse OUT " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addTaskDragStartListener(nodeDto -> Notification.show("Task Drag Start " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));
        diagramBuilder.addTaskDragEndListener(nodeDto -> Notification.show("Task Drag END " + nodeDto.getName(), Notification.Type.WARNING_MESSAGE));

        buttonBarLayout = new HorizontalLayout(button, createExportToPngButton());
        buttonBarLayout.setSpacing(true);

        setContent(new VerticalLayout(buttonBarLayout, diagramBuilder));
    }

    private Button createExportToPngButton() {
        Button exportToPngButton = new Button("Generate Diagram PNG");


        exportToPngButton.addClickListener((Button.ClickListener) event -> diagramBuilder.getImagePng(imageAsByteArray -> {
            ByteArrayInputStream in = new ByteArrayInputStream(imageAsByteArray);

            Button downloadButton = new Button("Download");

            FileDownloader fileDownloader = new FileDownloader(new StreamResource((StreamResource.StreamSource) () -> in, "image.png"));
            fileDownloader.extend(downloadButton);

            buttonBarLayout.addComponent(downloadButton);
        }));

        return exportToPngButton;
    }

    private void initDiagramBuilder(DiagramBuilder diagramBuilder) {
        List<Node> tasks = new ArrayList<>();

        tasks.add(new Node(200L, "Task1", "task", 38, 158));
        tasks.add(new Node(201L, "Task2", "task", 262, 221));

        IntStream.rangeClosed(1, 5).forEach(value -> tasks.add(new Node(300L + value, "Task Custom " + value, "task", 150, 400 + (100 * value))));
        IntStream.rangeClosed(6, 10).forEach(value -> tasks.add(new Node(300L + value, "Task Custom " + value, "task", 550, (100 * value))));

        Node group = new Node("Group", "group", 30, 140, 400, 200);
        group.setId(100L);
        group.setChildren(tasks.subList(0, 2));

        Node group2 = new Node("Group 2", "group", 130, 390, 600, 1000);
        group2.setId(101L);
        group2.setChildren(tasks.subList(2, 10));

        ArrayList<Node> allNodes = new ArrayList<>(tasks);
        allNodes.add(group);
        allNodes.add(group2);

        diagramBuilder.setFields(allNodes.toArray(new Node[]{}));

        diagramBuilder.setTransitions(
                new Transition(tasks.get(0).getId().toString(), tasks.get(1).getId().toString(), "TaskConnector"),
                new Transition("302", "306", "TaskConnector3"),
                new Transition("305", "310", "TaskConnector4"),
                new Transition("303", "307", "TaskConnector5")
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
