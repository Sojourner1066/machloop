import{z as u,bC as o,bB as l,aX as s,gn as g,go as h,gp as d,U as M,a8 as C,bT as P,gq as c,gr as y,gs as f,gt as v,fk as b,fi as I}from"./index-BCSVvjKE.js";import{s as a,p}from"./hitTestSelectUtils-DyJDK4Vo.js";import{r as x}from"./SnappingContext-CEDoynAN.js";class k extends x{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new u({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new u({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new o({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:l(s,t.spatialReference)}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new o({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:l(s,t.spatialReference)}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=h(),i=h(),m=M();g(r,a(e.centerVertex),a(e.previousVertex)),g(i,a(e.nextVertex),a(e.previousVertex)),d(m,r,i);const S=`rightAngleQuad${m[2]<0?45:225}`;return this._visualizeSnappingIndicator(new o({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:l(s,t.spatialReference)}),this._getOrCreateSymbol(S,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const r=new C({geometry:e,symbol:t});return this._graphicsLayer.add(r),P(()=>{this._graphicsLayer.remove(r)})}_getOrCreateSymbol(e,t){var i;const r=this._symbolPairingsByType;return((i=r.get(e))==null?void 0:i.color)!==t&&r.set(e,{color:t,symbol:w(e,t)}),r.get(e).symbol}}function w(n,e){const t=[...e.toRgb(),255*e.a];switch(n){case"point":return new b({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new b({outline:new I({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:v.Butt,joinStyle:f.Round,miterLimit:10,width:y(p.lineHintWidthTarget),color:t}]}}});case"parallelSign":return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r=n==="rightAngleQuad45"?45:225;return new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:y(p.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:y(p.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{k as d};
