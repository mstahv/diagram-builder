# DiagramBuilder Add-on for Vaadin 7

DiagramBuilder is an UI component add-on for Vaadin 7 that wraps [ALLOYUI's 
Diagram Builder](http://alloyui.com/examples/diagram-builder/) as a server side Java component.

## Online demo

Try the add-on demo at [matti.app.fi/diagram-builder-demo/](http://matti.app.fi/diagram-builder-demo/)

## Download release

Official releases of this add-on are available at Vaadin Directory. For Maven instructions, download and reviews, go to http://vaadin.com/addon/diagram-builder

## Building and running demo

git clone <url of the DiagramBuilder repository>
mvn clean install
cd demo
mvn jetty:run

To see the demo, navigate to http://localhost:8080/

 
## Release notes

### Version 1.0-SNAPSHOT

 * Initial POC

## Roadmap

 * Smarter JSON state deserialization, could use references in Transition class instead of names

## Issue tracking

The issues for this add-on are tracked on its github.com page. All bug reports and feature requests are appreciated. 

## Contributions

Contributions are welcome, but there are no guarantees that they are accepted as such. Process for contributing is the following:
- Fork this project
- Create an issue to this project about the contribution (bug or feature) if there is no such issue about it already. Try to keep the scope minimal.
- Develop and test the fix or functionality carefully. Only include minimum amount of code needed to fix the issue.
- Refer to the fixed issue in commit
- Send a pull request for the original project
- Comment on the original issue that you have implemented a fix for it

## License & Author

Add-on is distributed under Apache License 2.0. For license terms, see LICENSE.txt.

DiagramBuilder is written by Matti Tahvonen

