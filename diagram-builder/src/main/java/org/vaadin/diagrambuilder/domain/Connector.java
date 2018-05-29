
package org.vaadin.diagrambuilder.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

/**
 * Connector details.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Connector implements Serializable {

    public static final String ON_MOUSE_MOVE_JAVASCRIPT = Connector.class.getCanonicalName() + ".onMouseMoveConnector";
    public static final String ON_RIGHT_CLICK_JAVASCRIPT = Connector.class.getCanonicalName() + ".onRightClickConnector";
    public static final String ON_LEFT_CLICK_JAVASCRIPT = Connector.class.getCanonicalName() + ".onLeftClickConnector";

    private Long id;
    private String name;
    private String onMouseMove;
    private String onRightClick;
    private String onLeftClick;
    private Boolean showName = true;

    public Connector() {
    }

    public Connector(String name) {
        this.name = name;
    }

    public Connector(String name, Boolean showName) {
        this.name = name;
        this.showName = showName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOnMouseMove() {
        return onMouseMove;
    }

    public void setOnMouseMove(String onMouseMove) {
        this.onMouseMove = onMouseMove;
    }

    public String getOnRightClick() {
        return onRightClick;
    }

    public void setOnRightClick(String onRightClick) {
        this.onRightClick = onRightClick;
    }

    public String getOnLeftClick() {
        return onLeftClick;
    }

    public void setOnLeftClick(String onLeftClick) {
        this.onLeftClick = onLeftClick;
    }

    public Boolean getShowName() {
        return showName;
    }

    public void setShowName(Boolean showName) {
        this.showName = showName;
    }
}
