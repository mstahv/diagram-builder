/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */
package org.vaadin.diagrambuilder.util;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {

    public static <T> T jsonToObject(String jsonInString, Class<T> clazz) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(jsonInString, clazz);
    }

}
