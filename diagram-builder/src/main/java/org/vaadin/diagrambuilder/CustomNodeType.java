package org.vaadin.diagrambuilder;

import java.util.Arrays;
import java.util.List;

/**
 * Created by bsasschetti on 03/05/18.
 */
public class CustomNodeType {

	private String type;
	private List<CustomNodeAttribute> customAttributes;

	public CustomNodeType(String type) {
		this.type = type;
	}

	public CustomNodeType(String type, CustomNodeAttribute... customAttributes) {
		this.type = type;
		this.customAttributes = Arrays.asList(customAttributes);
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<CustomNodeAttribute> getCustomAttributes() {
		return customAttributes;
	}

	public void setCustomAttributes(List<CustomNodeAttribute> customAttributes) {
		this.customAttributes = customAttributes;
	}

}
