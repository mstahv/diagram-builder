package org.vaadin.diagrambuilder.event;

import com.vaadin.ui.JavaScriptFunction;

import org.vaadin.diagrambuilder.image.AutoCrop;

import sun.misc.BASE64Decoder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.function.Consumer;

public class DiagramBuilderEvent {

    private static final String EXPORT_TO_PNG_JAVASCRIPT_FUNCTION = "org.vaadin.diagrambuilder.printToPngBase64EventId";
    private final String eventId;

    private ArrayList<Consumer<byte[]>> stringBase64Listeners = new ArrayList<>();

    public DiagramBuilderEvent() {
        this.eventId = "";
    }

    public DiagramBuilderEvent(String eventId) {
        this.eventId = eventId;
    }

    public void createExportImageEvent() {
        com.vaadin.ui.JavaScript.getCurrent().addFunction(EXPORT_TO_PNG_JAVASCRIPT_FUNCTION + this.eventId, (JavaScriptFunction) jsonArray -> {
            try {
                String base64 = jsonArray.getString(0).replace("data:image/png;base64,", "");

                byte[] imageByte = AutoCrop.autoCrop(new BASE64Decoder().decodeBuffer(base64));

                stringBase64Listeners.forEach(diagramStringBase64Listener -> diagramStringBase64Listener.accept(imageByte));
            } catch (IOException e) {
                throw new RuntimeException("Error exporting diagram to png", e);
            } finally {
                stringBase64Listeners.clear();
            }
        });
    }

    public void getImagePng(Consumer<byte[]> imageBytesConsumer) {
        stringBase64Listeners.clear();
        stringBase64Listeners.add(imageBytesConsumer);

        String builder = "var yuiEl = document.querySelector('.property-builder-drop-container.yui3-dd-drop');\n" +
                "domtoimage.toPng(yuiEl, { height: yuiEl.scrollHeight, width: yuiEl.scrollWidth })\n" +
                "        .then(dataURL => {\n" +
                "   " + EXPORT_TO_PNG_JAVASCRIPT_FUNCTION + this.eventId + "(dataURL);\n" +
                "}).catch(error => {" +
                "   console.error('Something went wrong!',error);" +
                "});";

        com.vaadin.ui.JavaScript.getCurrent().execute(builder);
    }

}
