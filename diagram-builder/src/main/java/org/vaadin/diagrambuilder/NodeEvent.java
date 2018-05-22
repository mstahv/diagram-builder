package org.vaadin.diagrambuilder;/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */

import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.dto.NodeDto;
import org.vaadin.diagrambuilder.listener.TaskRightClickListener;
import org.vaadin.diagrambuilder.util.JsonUtil;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import elemental.json.JsonArray;

public class NodeEvent {

    private ArrayList<TaskRightClickListener> taskRightClickListeners = new ArrayList<>();

    public void createRightclickEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Node.ON_RIGHT_CLICK_JAVASCRIPT, new JavaScriptFunction() {
            @Override
            public void call(JsonArray jsonArray) {
                NodeDto nodeDto = null;

                try {
                    nodeDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), NodeDto.class);
                } catch (Exception exception) {
                    String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
                    Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
                }

                String type = jsonArray.getObject(0).getString("type");

                if (type.equals("task")) {
                    fireTaskRightClickListener(nodeDto);
                }
            }

        });
    }

    public void addRightClickListener(TaskRightClickListener listener) {
        taskRightClickListeners.add(listener);
    }


    public void fireTaskRightClickListener(NodeDto nodeDto) {
        for (TaskRightClickListener listener : taskRightClickListeners) {
            listener.onTaskRightClick(nodeDto);
        }
    }

}
