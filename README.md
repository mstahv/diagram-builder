# DiagramBuilder Add-on for Vaadin 8 - Continuum Security Fork

> This repository uses the a forked Alloy-ui library generated from this repository: [Alloy-ui forked reporisoty](https://github.com/continuumsecurity/alloy-ui)

### Group Node can have children
Group Node can have children. These children will be moved alongside the group node
````java
Node node1 = new Node(name, "task1", 0, 0, width, height);
Node node2 = new Node(name, "task2", 0, 0, width, height);
Node node = new Node(name, "task", 0, 0, width, height);
node.setChildren(new ArrayList(){"task1", "task2"});
````

### Enables/Disables delete by key stroke and hides/shows delete button
Enables/Disables the key stroke for delete and hides/shows the button to delete when
the user clicks in a node.
```Java
DiagramBuilder diagramBuilder = new DiagramBuilder();
diagramBuilder.setShowDeleteNodeIcon(false);
diagramBuilder.setEnableDeleteByKeyStroke(false);
```

### Upgrade Vaadin version from 7.6.1 to 8.5.2
Continuum security use Vaadin 8.5.2 and some errors were spotted using an older version, so we decided to update from
vaadin 7 to 8 since release [1.4.1](https://github.com/continuumsecurity/diagram-builder/releases/tag/1.4.1)
To use the previous version with vaadin 7 support pick the release [1.4.0](https://github.com/continuumsecurity/diagram-builder/releases/tag/1.4.0)

### Upgrade Vaadin version from 7.2.0.beta1 to 7.6.1
Continuum security use Vaadin 7.6.1 and some errors were spotted when using an older version

### Adds MouseOver custom function call over Transition
Integrate MouseOver custom function call with Alloy-UI diagram-builder component when
user mouse move over transition

```Java
diagramBuilder.addTransitionMouseMoveListener(new DiagramBuilder.TransitionMouseMoveListener() {
    @Override
    void move(String connectorName, DiagramBuilder.EventType eventType, Double top, Double left) {

    }
});
```

### Show/Hide Transition node Name
Option to show/hide the Transition Name
```Java
Transition transition = new Transition(source, target, name);
transition.connector.setShowName(false);
```

### Custom Height/Width for Task and Group
Option to set the height/width of tasks and groups
```Java
int height = 400;
int width = 200
Node node = new Node(name, "task", 0, 0, width, height);
```

### Enable/Disable User Interface Tasks linking
Option to enable/disable the tasks from the User Interface
```Java
Node node = new Node(name, "task", 0, 0, 100, 100);
node.setAllowsLinking(false);
```

# DiagramBuilder Add-on for Vaadin 7 - Official Repository

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

## Usage

 * Add ALLOYUI stuff to your host page, not added automatically as in e.g. Liferay they most likely already exist. Example of that using [@JavaScript/@Stylesheet annotations](https://github.com/mstahv/diagram-builder/blob/master/diagram-builder-demo/src/main/java/org/vaadin/diagrambuilder/demo/DemoUI.java#L34-L35)
 * Otherwise, use like any other Vaadin Add-on component

 
## Release notes

### Version 1.4.1
* Upgrade Vaadin version from 7.6.1 to 8.5.2

### Version 1.21
* Upgrade Vaadin version from 7.2.0.beta1 to 7.6.1
* Adds MouseOver custom function call over Transition
* Show/Hide Transition node Name
* Custom Height/Width for Task and Group
* Enable/Disable User Interface Tasks linking

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

