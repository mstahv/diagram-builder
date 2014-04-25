package org.vaadin.diagrambuilder.client;

import com.vaadin.shared.communication.ClientRpc;

// ClientRpc is used to pass events from server to client
// For sending information about the changes to component state, use State instead
public interface DiagramBuilderClientRpc extends ClientRpc {

	public void get();

}