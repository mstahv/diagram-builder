YUI.add("aui-diagram-node-group",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:300},type:{value:"group"},width:{value:300},children:{value:[]}},EXTENDS:e.DiagramNodeState,prototype:{hotPoints:e.DiagramNode.SQUARE_POINTS,renderShapeBoundary:function(){var e=this;return e.boundary=e.get("graphic").addShape(e.get("shapeBoundary")),e.boundary},_valueShapeBoundary:function(){var e=this._getAttr("height"),t=this._getAttr("width");return this.hotPoints=this._calculateRectangleHotPoints(t,e),{height:e,width:t,type:"rect",pointerEvents:this._getAttr("allowsLinking")===!1?"none":"visiblePainted",stroke:{weight:3,opacity:.5,color:"black",dashstyle:"5,10,5"},fill:{color:"#DBEAF7",opacity:.35}}}}});e.DiagramNodeGroup=n},"3.4.0",{requires:["aui-diagram-node-state"]});