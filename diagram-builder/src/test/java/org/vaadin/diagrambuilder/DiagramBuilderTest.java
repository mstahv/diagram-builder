package org.vaadin.diagrambuilder;

import com.vaadin.server.Page;
import com.vaadin.ui.JavaScript;
import com.vaadin.ui.UI;

import junit.framework.Assert;

import org.junit.Test;
import org.vaadin.diagrambuilder.domain.Connector;
import org.vaadin.diagrambuilder.domain.Node;
import org.vaadin.diagrambuilder.domain.NodeType;
import org.vaadin.diagrambuilder.domain.Transition;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

public class DiagramBuilderTest {


    @Test
    public void givenMultipleDiagramsWhenSetElementsThenDifferentEventsAreCreated() {

        // Given - Multiple Diagrams

        UI ui = mock(UI.class);
        UI.setCurrent(ui);

        Page page = mock(Page.class);
        doReturn(page).when(ui).getPage();

        JavaScript javaScript = mock(JavaScript.class);
        doReturn(javaScript).when(page).getJavaScript();

        DiagramBuilder diagramBuilderOne = new DiagramBuilder();
        DiagramBuilder diagramBuilderTwo = new DiagramBuilder();

        // When - set the same elements to both diagramBuilders

        Node nodeOne = new Node("one", new NodeType("", "", ""), 0, 0);
        Node nodeTwo = new Node("two", new NodeType("", "", ""), 0, 0);

        Connector connector = new Connector();
        connector.setId(0L);
        connector.setName("zero");

        Transition transition = new Transition();
        transition.setSource(nodeOne.getName());
        transition.setSource(nodeTwo.getName());
        transition.setConnector(connector);

        diagramBuilderOne.setFields(nodeOne, nodeTwo);
        diagramBuilderOne.setTransitions(transition);

        String dbOneNodeOneRightEvent = nodeOne.getOnRightClick();
        String dbOneNodeTwoRightEvent = nodeTwo.getOnRightClick();
        String dbTwoNodeOneDragEndEvent = nodeOne.getOnDragEnd();
        String dbTwoNodeOneDragStartEvent = nodeOne.getOnDragStart();

        String dbOneConnectorRightEvent = connector.getOnRightClick();
        String dbOneConnectorLeftEvent = connector.getOnLeftClick();
        String dbOneConnectorMoveEvent = connector.getOnMouseMove();

        diagramBuilderTwo.setFields(nodeOne, nodeTwo);
        diagramBuilderTwo.setTransitions(transition);

        String dbTwoNodeOneRightEvent = nodeOne.getOnRightClick();
        String dbTwoNodeTwoRightEvent = nodeTwo.getOnRightClick();
        String dbTwoNodeTwoDragEndEvent = nodeTwo.getOnDragEnd();
        String dbTwoNodeTwoDragStartEvent = nodeTwo.getOnDragStart();

        String dbTwoConnectorRightEvent = connector.getOnRightClick();
        String dbTwoConnectorLeftEvent = connector.getOnLeftClick();
        String dbTwoConnectorMoveEvent = connector.getOnMouseMove();

        //Then - Different events are created

        Assert.assertEquals(dbOneNodeOneRightEvent, dbOneNodeTwoRightEvent);
        Assert.assertEquals(dbTwoNodeOneRightEvent, dbTwoNodeTwoRightEvent);
        Assert.assertNotSame(dbTwoNodeOneDragStartEvent, dbTwoNodeTwoDragStartEvent);
        Assert.assertNotSame(dbTwoNodeOneDragEndEvent, dbTwoNodeOneRightEvent);
        Assert.assertNotSame(dbOneNodeOneRightEvent, dbTwoNodeTwoDragEndEvent);

        Assert.assertNotSame(dbOneConnectorRightEvent, dbTwoConnectorRightEvent);
        Assert.assertNotSame(dbOneConnectorLeftEvent, dbTwoConnectorLeftEvent);
        Assert.assertNotSame(dbOneConnectorMoveEvent, dbTwoConnectorMoveEvent);

        Assert.assertTrue(dbOneNodeOneRightEvent.startsWith(Node.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbOneNodeTwoRightEvent.startsWith(Node.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbOneConnectorRightEvent.startsWith(Connector.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbOneConnectorLeftEvent.startsWith(Connector.ON_LEFT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbOneConnectorMoveEvent.startsWith(Connector.ON_MOUSE_MOVE_JAVASCRIPT));

        Assert.assertTrue(dbTwoNodeTwoDragStartEvent.startsWith(Node.ON_DRAG_START_JAVASCRIPT));
        Assert.assertTrue(dbTwoNodeTwoDragEndEvent.startsWith(Node.ON_DRAG_END_JAVASCRIPT));
        Assert.assertTrue(dbTwoNodeOneRightEvent.startsWith(Node.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbTwoNodeTwoRightEvent.startsWith(Node.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbTwoConnectorRightEvent.startsWith(Connector.ON_RIGHT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbTwoConnectorLeftEvent.startsWith(Connector.ON_LEFT_CLICK_JAVASCRIPT));
        Assert.assertTrue(dbTwoConnectorMoveEvent.startsWith(Connector.ON_MOUSE_MOVE_JAVASCRIPT));

    }
}
