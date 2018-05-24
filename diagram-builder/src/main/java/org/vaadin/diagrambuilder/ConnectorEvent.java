package org.vaadin.diagrambuilder;/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */

import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.domain.Connector;
import org.vaadin.diagrambuilder.dto.ConnectorDto;
import org.vaadin.diagrambuilder.listener.ConnectorLeftClickListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOutListener;
import org.vaadin.diagrambuilder.listener.ConnectorMouseOverListener;
import org.vaadin.diagrambuilder.listener.ConnectorRightClickListener;
import org.vaadin.diagrambuilder.util.JsonUtil;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import elemental.json.JsonArray;

public class ConnectorEvent {

    private ArrayList<ConnectorMouseOutListener> connectorMouseOutListeners = new ArrayList<>();
    private ArrayList<ConnectorMouseOverListener> connectorMouseOverListeners = new ArrayList<>();
    private ArrayList<ConnectorLeftClickListener> connectorLeftClickListeners = new ArrayList<>();
    private ArrayList<ConnectorRightClickListener> connectorRightClickListeners = new ArrayList<>();

    private String eventId;

    public ConnectorEvent() {
        this.eventId = "";
    }

    public ConnectorEvent(String eventId) {
        this.eventId = eventId;
    }

    public void createMouseMoveEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Connector.ON_MOUSE_MOVE_JAVASCRIPT + this.eventId, new JavaScriptFunction() {
            @Override
            public void call(JsonArray jsonArray) {
                ConnectorDto connectorDto = null;

                try {
                    connectorDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), ConnectorDto.class);
                } catch (Exception exception) {
                    String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
                    Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
                }


                String event = JsonUtil.getStringValue(jsonArray, "event");

                if ("mouseEnter".equals(event)) {
                    fireMouseOverListener(connectorDto);
                } else {
                    fireMouseOutListener(connectorDto);
                }
            }

        });
    }

    public void createLeftClickEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Connector.ON_LEFT_CLICK_JAVASCRIPT + this.eventId, new JavaScriptFunction() {
            @Override
            public void call(JsonArray jsonArray) {
                ConnectorDto connectorDto = null;

                try {
                    connectorDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), ConnectorDto.class);
                } catch (Exception exception) {
                    String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
                    Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
                }

                fireLeftClickListener(connectorDto);
            }
        });
    }

    public void createRightClickEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(Connector.ON_RIGHT_CLICK_JAVASCRIPT + this.eventId, new JavaScriptFunction() {
            @Override
            public void call(JsonArray jsonArray) {
                ConnectorDto connectorDto = null;

                try {
                    connectorDto = JsonUtil.jsonToObject(jsonArray.getObject(0).toString(), ConnectorDto.class);
                } catch (Exception exception) {
                    String message = "Json could'nt serialize in object: " + jsonArray.getObject(0);
                    Logger.getLogger(DiagramBuilder.class.getName()).log(Level.SEVERE, message, exception);
                }


                fireRightClickListener(connectorDto);
            }

        });
    }

    public void addMouseOutListener(ConnectorMouseOutListener listener) {
        connectorMouseOutListeners.add(listener);
    }

    public void addMouseOverListener(ConnectorMouseOverListener listener) {
        connectorMouseOverListeners.add(listener);
    }

    public void addLeftClickListener(ConnectorLeftClickListener listener) {
        connectorLeftClickListeners.add(listener);
    }


    public void addRightClickListener(ConnectorRightClickListener listener) {
        connectorRightClickListeners.add(listener);
    }

    public void fireMouseOutListener(ConnectorDto connectorDto) {
        for (ConnectorMouseOutListener listener : connectorMouseOutListeners) {
            listener.onConnectorMouseOut(connectorDto);
        }
    }

    public void fireMouseOverListener(ConnectorDto connectorDto) {
        for (ConnectorMouseOverListener listener : connectorMouseOverListeners) {
            listener.onConnectorMouseOver(connectorDto);
        }
    }

    public void fireRightClickListener(ConnectorDto connectorDto) {
        for (ConnectorRightClickListener listener : connectorRightClickListeners) {
            listener.onConnectorRightClick(connectorDto);
        }
    }

    public void fireLeftClickListener(ConnectorDto connectorDto) {
        for (ConnectorLeftClickListener listener : connectorLeftClickListeners) {
            listener.onConnectorLeftClick(connectorDto);
        }
    }


}
