YUI.add("aui-diagram-builder-connector",function(A,NAME){var Lang=A.Lang,isArray=Lang.isArray,isBoolean=Lang.isBoolean,isNumber=Lang.isNumber,isObject=Lang.isObject,isString=Lang.isString,AArray=A.Array,B1=function(e){return e*e*e},B2=function(e){return 3*e*e*(1-e)},B3=function(e){return 3*e*(1-e)*(1-e)},B4=function(e){return(1-e)*(1-e)*(1-e)},getCubicBezier=function(e,t,n,r,i){var s=t[0]*B1(e)+r[0]*B2(e)+i[0]*B3(e)+n[0]*B4(e),o=t[1]*B1(e)+r[1]*B2(e)+i[1]*B3(e)+n[1]*B4(e);return[s,o]},isGraphic=function(e){return A.instanceOf(e,A.Graphic)},toDegrees=function(e){return e*180/Math.PI},sign=function(e){return e===0?0:e<0?-1:1},getCN=A.getClassName,CSS_DIAGRAM_BUILDER_CONNECTOR_NAME=getCN("diagram","builder","connector","name"),CSS_HIDE=getCN("hide");A.PolygonUtil={ARROW_POINTS:[[-12,-6],[-8,0],[-12,6],[6,0]],drawArrow:function(e,t,n,r,i,s){var o=this,u=Math.atan2(i-n,r-t);e.moveTo(r,i),r-=5*Math.cos(u),i-=5*Math.sin(u),o.drawPolygon(e,o.translatePoints(o.rotatePoints(s||o.ARROW_POINTS,u),r,i))},drawPolygon:function(e,t){e.moveTo(t[0][0],t[0][1]),AArray.each(t,function(n,r){r>0&&e.lineTo(t[r][0],t[r][1])}),e.lineTo(t[0][0],t[0][1])},translatePoints:function(e,t,n){var r=[];return AArray.each(e,function(i,s){r.push([e[s][0]+t,e[s][1]+n])}),r},rotatePoints:function(e,t){var n=this,r=[];return AArray.each(e,function(i,s){r.push(n.rotatePoint(t,e[s][0],e[s][1]))}),r},rotatePoint:function(e,t,n){return[t*Math.cos(e)-n*Math.sin(e),t*Math.sin(e)+n*Math.cos(e)]}},A.Connector=A.Base.create("line",A.Base,[],{SERIALIZABLE_ATTRS:["color","lazyDraw","name","shapeSelected","shapeHover","p1","p2"],shape:null,shapeArrow:null,initializer:function(){var e=this,t=e.get("lazyDraw");e.after({nameChange:e._afterNameChange,p1Change:e.draw,p2Change:e.draw,selectedChange:e._afterSelectedChange,showNameChange:e._afterShowNameChange,visibleChange:e._afterVisibleChange}),e._initShapes(),t||e.draw(),e._uiSetVisible(e.get("visible")),e._uiSetName(e.get("name")),e._uiSetSelected(e.get("selected"),!t),e._uiSetShowName(e.get("showName"))},destructor:function(){var e=this;e.shape.destroy(),e.shapeArrow.destroy(),e.get("nodeName").remove()},draw:function(){var e=this,t=e.shape,n=e.shapeArrow,r=e.get("p1"),i=e.get("p2"),s=e.toCoordinate(r),o=e.toCoordinate(i),u=s[0],a=s[1],f=o[0],l=o[1],c=Math.max(Math.abs(u-f)/2,10),h=Math.max(Math.abs(a-l)/2,10),p=null,d=8,v=toDegrees(Math.atan2(l-a,f-u)),m=Math.round(Math.abs(v)/(360/d)),g=e.hasConnectorsInterconnected()?e.get("offsetConnectors"):0;sign(v)<0?p=[[u+c,a+g,f-c,l+g,f,l],[u+c,a,f,a-h-g,f,l],[u,a-h,f-g,a-h-g,f,l],[u-c,a,f,a-h-g,f,l],[u-c,a-g,f+c,l-g,f,l]]:p=[[u+c,a+g,f-c,l+g,f,l],[u+c,a,f,a+h+g,f,l],[u,a+h,f+g,a+h+g,f,l],[u-c,a,f,a+h+g,f,l],[u-c,a-g,f+c,l-g,f,l]];var y=p[m];t.clear(),t.moveTo(u,a),t.curveTo.apply(t,y),t.end();var b=getCubicBezier(0,[u,a],[f,l],[y[0],y[1]],[y[2],y[3]]),w=getCubicBezier(.075,[u,a],[f,l],[y[0],y[1]],[y[2],y[3]]),E=getCubicBezier(.5,[u,a],[f,l],[y[0],y[1]],[y[2],y[3]]);return n.clear(),A.PolygonUtil.drawArrow(n,w[0],w[1],b[0],b[1],e.get("arrowPoints")),n.end(),e.get("showName")&&e.get("nodeName").center(e.toXY(E)),e},getProperties:function(){var e=this,t=e.getPropertyModel();return AArray.each(t,function(t){t.value=e.get(t.attributeName)}),t},getPropertyModel:function(){var e=this,t=e.getStrings();return[{attributeName:"name",editor:new A.TextCellEditor({validator:{rules:{value:{required:!0}}}}),name:t.name}]},getStrings:function(){return A.Connector.STRINGS},hasConnectorsInterconnected:function(){var e=this,t=e.get("builder"),n=!1,r=e.get("p1"),i=e.get("p2");return t.eachConnector(function(t){if(t){var s=t.get("p1"),o=t.get("p2");(s[0]===i[0]&&s[1]===i[1]||o[0]===r[0]&&o[1]===r[1])&&t!==e&&(n=!0)}}),n},hide:function(){var e=this;return e.set("visible",!1),e},show:function(){var e=this;return e.set("visible",!0),e},toCoordinate:function(e){var t=this;return t._offsetXY(e,-1)},toJSON:function(){var e=this,t={};return AArray.each(e.SERIALIZABLE_ATTRS,function(n){t[n]=e.get(n)}),t},toXY:function(e){var t=this;return t._offsetXY(e,1)},_afterNameChange:function(e){var t=this;t._uiSetName(e.newVal),t.draw()},_afterSelectedChange:function(e){var t=this;t._uiSetSelected(e.newVal)},_afterShowNameChange:function(e){var t=this;t._uiSetShowName(e.newVal)},_afterVisibleChange:function(e){var t=this;t._uiSetVisible(e.newVal)},_initShapes:function(){var e=this,t=e.shape=e.get("graphic").addShape(e.get("shape")),n=e.shapeArrow=e.get("graphic").addShape(e.get("shapeArrow"));t.on("click",A.bind(e._onShapeClick,e)),t.on("mouseenter",A.bind(e._onShapeMouseEnter,e)),t.on("mouseleave",A.bind(e._onShapeMouseLeave,e)),t.on("contextmenu",A.bind(e._onShapeRightClick,e)),n.on("click",A.bind(e._onShapeClick,e)),e.get("nodeName").on("click",A.bind(e._onShapeClick,e))},_offsetXY:function(e,t){var n=this,r=n.get("graphic").getXY();return[e[0]+r[0]*t,e[1]+r[1]*t]},_onShapeClick:function(event){var instance=this,builder=instance.get("builder"),selected=instance.get("selected");builder&&(event.hasModifier()?builder.closeEditProperties():(builder.unselectConnectors(),selected?builder.closeEditProperties():builder.editConnector(instance))),instance.set("selected",!selected);var attrs=builder.correctPosition({id:instance.getAttrs().id,clientX:event.clientX,clientY:event.clientY,name:instance.getAttrs().name});eval(instance.get("onLeftClick"))(attrs),event.halt()},_onShapeMouseEnter:function(e){var t=this;if(!t.get("selected")){var n=t.get("shapeHover"),r=t.get("shapeArrowHover");n&&t._updateShape(t.shape,n,!1),r&&t._updateShape(t.shapeArrow,r,!1)}t._onShapeMouseMove("mouseEnter",e)},_onShapeMouseLeave:function(e){var t=this;t.get("selected")||(t._updateShape(t.shape,t.get("shape"),!1),t._updateShape(t.shapeArrow,t.get("shapeArrow"),!1)),t._onShapeMouseMove("mouseLeave",e)},_onShapeMouseMove:function(eventName,event){var instance=this,builder=instance.get("builder"),attrs=builder.correctPosition({event:eventName,id:instance.getAttrs().id,clientX:event.clientX,clientY:event.clientY,name:instance
.getAttrs().name});eval(instance.get("onMouseMove"))(attrs)},_onShapeRightClick:function(event){event.preventDefault();var instance=this,builder=instance.get("builder"),attrs=builder.correctPosition({id:instance.getAttrs().id,clientX:event.clientX,clientY:event.clientY,name:instance.getAttrs().name});eval(instance.get("onRightClick"))(attrs),event.stopPropagation()},_setNodeName:function(e){var t=this;return A.instanceOf(e,A.Node)||(e=new A.Node.create(e),t.get("builder").dropContainer.append(e.unselectable())),e},_setShape:function(e){var t=this;return A.merge({type:"path",stroke:{color:t.get("color"),weight:2,opacity:1}},e)},_setShapeArrow:function(e){var t=this;return A.merge({type:"path",fill:{color:t.get("color"),opacity:1},stroke:{color:t.get("color"),weight:2,opacity:1}},e)},_uiSetName:function(e){var t=this;t.get("nodeName").html(A.Escape.html(e))},_uiSetSelected:function(e,t){var n=this;n._updateShape(n.shape,e?n.get("shapeSelected"):n.get("shape"),t),n._updateShape(n.shapeArrow,e?n.get("shapeArrowSelected"):n.get("shapeArrow"),t)},_uiSetShowName:function(e){var t=this;t.get("nodeName").toggleClass(CSS_HIDE,!e)},_uiSetVisible:function(e){var t=this;t.shape.set("visible",e),t.shapeArrow.set("visible",e),t._uiSetShowName(e&&t.get("showName"))},_updateShape:function(e,t,n){var r=this;t.hasOwnProperty("fill")&&e.set("fill",t.fill),t.hasOwnProperty("stroke")&&e.set("stroke",t.stroke),n!==!1&&r.draw()}},{ATTRS:{onMouseMove:{value:"(function() {})",validator:isString},onRightClick:{value:"(function() {})",validator:isString},onLeftClick:{value:"(function() {})",validator:isString},id:{value:0,validator:isNumber},arrowPoints:{value:A.PolygonUtil.ARROW_POINTS},builder:{},color:{value:"#27aae1",validator:isString},graphic:{validator:isGraphic},lazyDraw:{value:!1,validator:isBoolean},name:{valueFn:function(){return"connector"+ ++A.Env._uidx},validator:isString},nodeName:{setter:"_setNodeName",value:'<span class="'+CSS_DIAGRAM_BUILDER_CONNECTOR_NAME+'"></span>',writeOnce:!0},offsetConnectors:{value:60,validator:isNumber},p1:{value:[0,0],validator:isArray},p2:{value:[0,0],validator:isArray},selected:{value:!1,validator:isBoolean},shape:{value:null,setter:"_setShape"},shapeArrow:{value:null,setter:"_setShapeArrow"},shapeArrowHover:{value:{fill:{color:"#ffd700"},stroke:{color:"#ffd700",weight:5,opacity:.8}}},shapeArrowSelected:{value:{fill:{color:"#ff6600"},stroke:{color:"#ff6600",weight:5,opacity:.8}}},shapeHover:{value:{stroke:{color:"#ffd700",weight:5,opacity:.8}}},shapeSelected:{value:{stroke:{color:"#ff6600",weight:5,opacity:.8}}},showName:{validator:isBoolean,value:!0},transition:{value:{},validator:isObject},visible:{validator:isBoolean,value:!0}},STRINGS:{name:"Name"}})},"3.4.0",{requires:["arraylist-add","arraylist-filter","escape","json","graphics","dd"],skinnable:!0});