package org.vaadin.diagrambuilder.client;

import com.vaadin.shared.communication.ServerRpc;

public interface DiagramBuilderServerRpc extends ServerRpc {

	public void reportState(String stateJson);

}
