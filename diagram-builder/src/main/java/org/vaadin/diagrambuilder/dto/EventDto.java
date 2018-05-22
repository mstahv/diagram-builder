package org.vaadin.diagrambuilder.dto;/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */

public class EventDto {

    Long id;
    String name;
    Double top;
    Double left;

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

    public Double getTop() {
        return top;
    }

    public void setTop(Double top) {
        this.top = top;
    }

    public Double getLeft() {
        return left;
    }

    public void setLeft(Double left) {
        this.left = left;
    }

}
