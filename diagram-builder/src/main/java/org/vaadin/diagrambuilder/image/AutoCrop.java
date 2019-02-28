package org.vaadin.diagrambuilder.image;

/*
 *  Copyright 2012 Eric F. Savage, code@efsavage.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.logging.Logger;

import javax.imageio.ImageIO;

/**
 * Automatically crops extraneous space from an image.
 *
 * @author <a href="http://efsavage.com">Eric F. Savage</a>, <a href="mailto:code@efsavage.com">code@efsavage.com</a>.
 */
public class AutoCrop {

    private static Logger log = Logger.getLogger(AutoCrop.class.getName());

    /**
     * Crops an image based on the value of the top left pixel.
     *
     * @param image     The image to crop.
     * @param fuzziness The fuzziness allowed for minor deviations (~5 is
     *                  recommended).
     * @return The new image data, cropped.
     * @throws IOException If the image could not be read.
     */
    public static BufferedImage autoCrop(final BufferedImage image, final int fuzziness) throws IOException {
        final Color color = new Color(0, 0, 0, 255);
        boolean stop = false;
        int cropTop = 0;
        for (int y = 0; y < image.getHeight(); y++) {
            for (int x = 0; x < image.getWidth(); x++) {
                if (!ColorUtils.match(color, image.getRGB(x, y), fuzziness)) {
                    stop = true;
                    break;
                }
            }
            if (stop) {
                if (y > 0) {
                    cropTop = y - 1;
                }
                break;
            }
        }

        log.finest("Cropping top " + cropTop + " rows");

        stop = false;
        int cropBot = image.getHeight();
        for (int y = (image.getHeight() - 1); y >= 0; y--) {
            for (int x = 0; x < image.getWidth(); x++) {
                if (!ColorUtils.match(color, image.getRGB(x, y), fuzziness)) {
                    stop = true;
                    break;
                }
            }
            if (stop) {
                if (y < image.getHeight()) {
                    cropBot = y + 1;
                }
                break;
            }
        }

        log.finest("Cropping bottom " + (image.getHeight() - cropBot) + " rows");

        stop = false;
        int cropLeft = 0;
        for (int x = 0; x < image.getWidth(); x++) {
            for (int y = 0; y < image.getHeight(); y++) {
                if (!ColorUtils.match(color, image.getRGB(x, y), fuzziness)) {
                    stop = true;
                    break;
                }
            }
            if (stop) {
                if (x > 0) {
                    cropLeft = x - 1;
                }
                break;
            }
        }

        log.finest("Cropping left " + cropLeft + " rows");

        stop = false;
        int cropRight = 0;
        for (int x = (image.getWidth() - 1); x >= 0; x--) {
            for (int y = 0; y < image.getHeight(); y++) {
                if (!ColorUtils.match(color, image.getRGB(x, y), fuzziness)) {
                    stop = true;
                    break;
                }
            }
            if (stop) {
                if (x < image.getWidth()) {
                    cropRight = x + 1;
                }
                break;
            }
        }

        log.finest("Cropping right " + (image.getWidth() - cropRight) + " rows");

        final BufferedImage cropped = image.getSubimage(cropLeft, cropTop, cropRight - cropLeft, cropBot - cropTop);
        return cropped;
    }

    /**
     * Crops an image based on the value of the top left pixel.
     *
     * @param data The image data.
     * @return The new image data, cropped.
     * @throws IOException If the image could not be read.
     */
    public static byte[] autoCrop(final byte[] data) throws IOException {
        final BufferedImage image = ImageIO.read(new ByteArrayInputStream(data));
        final BufferedImage cropped = autoCrop(image, 5);
        final ByteArrayOutputStream out = new ByteArrayOutputStream();
        ImageIO.write(cropped, "png", out);
        return out.toByteArray();
    }

}
