package org.vaadin.diagrambuilder;/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */

import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.dto.NodeDto;
import org.vaadin.diagrambuilder.listener.TaskDragEndListener;
import org.vaadin.diagrambuilder.listener.TaskDragStartListener;
import org.vaadin.diagrambuilder.listener.TaskRightClickListener;
import org.vaadin.diagrambuilder.util.JsonUtil;

import java.util.ArrayList;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

import elemental.json.JsonArray;

public class NodeEvent {

    private ArrayList<TaskRightClickListener> taskRightClickListeners = new ArrayList<>();
    private ArrayList<TaskDragStartListener> taskDragStartListeners = new ArrayList<>();
    private ArrayList<TaskDragEndListener> taskDragEndListeners = new ArrayList<>();

    private String eventId;

    public NodeEvent() {
        this.eventId = "";
    }

    public NodeEvent(String eventId) {
        this.eventId = eventId;
    }

    public void createRightClickEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_RIGHT_CLICK_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            fireEvent(jsonArray, NodeEvent.this::fireTaskRightClickListener);
        });
    }

    public void createDragStartEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_DRAG_START_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            fireEvent(jsonArray, NodeEvent.this::fireDragStartClickListener);
        });
    }

    public void createDragEndEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_DRAG_END_JAVASCRIPT + this.eventId, (JavaScriptFunction) jsonArray -> {
            fireEvent(jsonArray, NodeEvent.this::fireDragEndClickListener);
        });
    }


    private void fireEvent(JsonArray jsonArray, Consumer<NodeDto> fireMethod) {
        NodeDto nodeDto = null;

        try {
            nodeDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), NodeDto.class);
        } catch (Exception exception) {
            String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
            Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
        }

        String type = jsonArray.getObject(0).getString("type");

        if (type.equals("task")) {
            fireMethod.accept(nodeDto);
        }
    }

    public void addRightClickListener(TaskRightClickListener listener) {
        taskRightClickListeners.add(listener);
    }

    public void addTaskDragStartListener(TaskDragStartListener listener) {
        taskDragStartListeners.add(listener);
    }

    public void addTaskDragEndListener(TaskDragEndListener listener) {
        taskDragEndListeners.add(listener);
    }


    public void fireTaskRightClickListener(NodeDto nodeDto) {
        for (TaskRightClickListener listener : taskRightClickListeners) {
            listener.onTaskRightClick(nodeDto);
        }
    }

    public void fireDragStartClickListener(NodeDto nodeDto) {
        for (TaskDragStartListener listener : taskDragStartListeners) {
            listener.onDragStart(nodeDto);
        }
    }

    public void fireDragEndClickListener(NodeDto nodeDto) {
        for (TaskDragEndListener listener : taskDragEndListeners) {
            listener.onDragEnd(nodeDto);
        }
    }

}
