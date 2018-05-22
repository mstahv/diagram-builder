/*
 * Copyright (c) 2012-2018 Continuum Security SLNE.  All rights reserved
 */
package org.vaadin.diagrambuilder.util;

import com.fasterxml.jackson.databind.ObjectMapper;

import elemental.json.JsonArray;

public class JsonUtil {

    public static String getStringValue(JsonArray jsonArray, String name) {
        if (hasJsonName(jsonArray, name)) {
            return jsonArray.getObject(0).getString(name);
        }
        return null;
    }

    public static boolean hasJsonName(JsonArray jsonArray, String name) {
        return jsonArray.length() > 0 && jsonArray.getObject(0).hasKey(name);
    }

    public static <T> T jsonToObject(String jsonInString, Class<T> clazz) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(jsonInString, clazz);
    }

}
