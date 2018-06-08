package org.vaadin.diagrambuilder;

import java.util.List;

/**
 * Created by bsasschetti on 03/05/18.
 */
public class CustomNodeAttribute {
	private String name;
	private String defaultValue;

	// TODO later we can add different types
	private boolean isComboBox = false;
	private List<String> options;

	public CustomNodeAttribute(String name) {
		this(name, "");
	}

	public CustomNodeAttribute(String name, String defaultValue) {
		this.name = name;
		this.defaultValue = defaultValue;
	}

	public CustomNodeAttribute(String name, String defaultValue, boolean isComboBox, List<String> options) {
		this.name = name;
		this.defaultValue = defaultValue;
		this.isComboBox = isComboBox;
		this.options = options;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDefaultValue() {
		return defaultValue;
	}

	public void setDefaultValue(String defaultValue) {
		this.defaultValue = defaultValue;
	}

	public boolean isComboBox() {
		return isComboBox;
	}

	public void setComboBox(boolean comboBox) {
		isComboBox = comboBox;
	}

	public List<String> getOptions() {
		return options;
	}

	public void setOptions(List<String> options) {
		this.options = options;
	}
}