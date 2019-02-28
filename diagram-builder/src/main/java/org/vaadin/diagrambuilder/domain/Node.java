package org.vaadin.diagrambuilder.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.List;

/**
 * A Node in the diagram.
 *
 * Names in diagram should be unique as they work as identifiers as well.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Node implements Serializable {

    public static final String ON_RIGHT_CLICK_JAVASCRIPT = Node.class.getCanonicalName() + ".onRightClickNode";
    public static final String ON_DRAG_START_JAVASCRIPT = Node.class.getCanonicalName() + ".onDragStartNode";
    public static final String ON_DRAG_END_JAVASCRIPT = Node.class.getCanonicalName() + ".onDragEndNode";
    public static final String ON_MOUSE_MOVE_JAVASCRIPT = Node.class.getCanonicalName() + ".onMouseMove";
    private static final int DEFAULT_WIDTH = 60;
    private static final int DEFAULT_HEIGHT = 60;

    private int[] xy = new int[]{0, 0};
    private int width = DEFAULT_WIDTH;
    private int height = DEFAULT_HEIGHT;
    private boolean allowsLinking;
    private String name;
    private Long id;
    private String type;
    private String description;
    private List<Transition> transitions;
    private List<Node> children;
    private String onRightClick;
    private String onDragStart;
    private String onDragEnd;
    private String onMouseMove;


    public Node() {
    }

    public Node(String name, NodeType type, int x, int y) {
        this.name = name;
        this.type = type.getType();
        xy = new int[]{x, y};
    }

    public Node(Long id, String name, String typeId, int x, int y) {
        this.id = id;
        this.name = name;
        this.type = typeId;
        xy = new int[]{x, y};
    }

    public Node(String name, String typeId, int x, int y) {
        this.name = name;
        this.type = typeId;
        xy = new int[]{x, y};
    }

    public Node(String name, String typeId, int x, int y, int width, int height) {
        this(name, typeId, x, y);
        this.width = width;
        this.height = height;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Transition> getTransitions() {
        return transitions;
    }

    public void setTransitions(List<Transition> transitions) {
        this.transitions = transitions;
    }


    /**
     * Get the value of name
     *
     * @return the value of name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the value of name
     *
     * @param name new value of name
     */
    public void setName(String name) {
        this.name = name;
    }


    /**
     * Get the value of type
     *
     * @return the value of type
     */
    public String getType() {
        return type;
    }

    public void setType(String nodeTypeId) {
        this.type = nodeTypeId;
    }

    /**
     * Set the value of type
     *
     * @param type new value of type
     */
    public void setNodeType(NodeType type) {
        this.type = type.getType();
    }

    /**
     * Get the value of xy
     *
     * @return the value of xy
     */
    public int[] getXy() {
        return xy;
    }

    /**
     * Set the value of xy
     *
     * @param xy new value of xy
     */
    public void setXy(int[] xy) {
        this.xy = xy;
    }

    public void setX(int x) {
        xy[0] = x;
    }

    public void setY(int y) {
        xy[1] = y;
    }

    public int getX() {
        return xy[0];
    }

    public int getY() {
        return xy[1];
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public boolean isAllowsLinking() {
        return allowsLinking;
    }

    public void setAllowsLinking(boolean allowsLinking) {
        this.allowsLinking = allowsLinking;
    }

    public List<Node> getChildren() {
        return children;
    }

    public void setChildren(List<Node> children) {
        this.children = children;
    }

    public String getOnRightClick() {
        return onRightClick;
    }

    public void setOnRightClick(String onRightClick) {
        this.onRightClick = onRightClick;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOnDragStart(String onDragStart) {
        this.onDragStart = onDragStart;
    }

    public void setOnDragEnd(String onDragEnd) {
        this.onDragEnd = onDragEnd;
    }

    public String getOnDragStart() {
        return onDragStart;
    }

    public String getOnDragEnd() {
        return onDragEnd;
    }

    public String getOnMouseMove() {
        return onMouseMove;
    }

    public void setOnMouseMove(String onMouseMove) {
        this.onMouseMove = onMouseMove;
    }
}
