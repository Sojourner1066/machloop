const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WhereClause-CKXQ1p-G.js","assets/index-BCSVvjKE.js","assets/index-CrYBktwj.css","assets/TimeOnly-CVgLqrpK.js"])))=>i.map(i=>d[i]);
import{eS as K,U as B,dq as k,i1 as V,cQ as _,fI as Z,a0 as r,a1 as o,a2 as I,cR as b,b as X,fm as Y,a8 as j,bd as x,mP as A,mQ as ee,a6 as te,mR as ie,mS as se,mT as ne,mU as re,fR as ae,bT as oe,bD as le,fV as de,g4 as Q,g5 as ue,jn as he,G as L,eN as pe,aP as ce,ce as ye,fZ as ge,z as fe,iV as we,dr as _e,A as U,cL as ve,hs as f,g6 as D,du as J,mV as me,ej as Se,_ as be}from"./index-BCSVvjKE.js";import{t as Ie}from"./memoize-DmxaQ-k8.js";import{y as Oe}from"./elevationInfoUtils-Do3IlhTH.js";import{g as He,t as ke,W as $e}from"./boundedPlane-D5TJwWtA.js";import{i as Te}from"./layerViewUtils-0c-tok9A.js";import{h as Fe}from"./hitTestSelectUtils-DyJDK4Vo.js";import{o as Pe,i as Me}from"./queryEngineUtils-B_aagXg9.js";import{h as Ce}from"./WorkerHandle-DgHvdDhd.js";import{e as Ee}from"./projectVectorToVector-DV5W_8-J.js";import"./sphere-DRB5B-QR.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-gAgGBHhk.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-BFjWctde.js";import"./quantityUtils-CqnQm8eu.js";import"./geodesicUtils-43dYgYaw.js";import"./RouteLayerInteraction-DKqg1-83.js";import"./GraphicsLayer-Dd_06yaf.js";import"./Stop-ydy3kZfa.js";import"./networkEnums-B_Ikcs9K.js";import"./VertexSnappingCandidate-BVFIKBIz.js";import"./PointSnappingHint-DXlpXKb2.js";import"./projectPointToVector-D4QINAum.js";function z(e,t){return ke(t.extent,W),He(W,K(ze,e.x,e.y,0))}const W=$e(),ze=B();let w=class extends k{get tiles(){const e=this.tilesCoveringView,t=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return e.sort((i,a)=>z(t,i)-z(t,a)),e}_scaleEnabled(){return Te(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,a=[];for(const{row:s,colFrom:n,colTo:l}of e)for(let d=n;d<=l;d++){const c=t.normalizeCol(d),p=new V(null,i,s,c);this.tileInfo.updateTileInfo(p),a.push(p)}return a}get tileInfo(){var e;return((e=this.view.featuresTilingScheme)==null?void 0:e.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.state)==null?void 0:t.viewpoint},()=>this.notifyChange("tilesCoveringView"),Z))}};r([o({readOnly:!0})],w.prototype,"tiles",null),r([o({readOnly:!0})],w.prototype,"_scaleEnabled",null),r([o({readOnly:!0})],w.prototype,"tilesCoveringView",null),r([o({readOnly:!0})],w.prototype,"tileInfo",null),r([o({readOnly:!0})],w.prototype,"tileSize",null),r([o({constructOnly:!0})],w.prototype,"view",void 0),r([o({constructOnly:!0})],w.prototype,"layer",void 0),r([o()],w.prototype,"pointOfInterest",void 0),w=r([I("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],w);let v=class extends k{get _sortedTilesCoveringView(){var a,s;const t=(((s=(a=this.view.featureTiles)==null?void 0:a.tiles)==null?void 0:s.toArray())??[]).map(xe),i=this._effectivePointOfInterest;return i!=null&&t.sort((n,l)=>z(i,n)-z(i,l)),t}get tileInfo(){var t,i;return((i=(t=this.view.featureTiles)==null?void 0:t.tilingScheme)==null?void 0:i.toTileInfo())??null}get tileSize(){var t;return((t=this.view.featureTiles)==null?void 0:t.tileSize)??256}get _effectivePointOfInterest(){var i;const t=this.pointOfInterest;return t??((i=this.view.pointsOfInterest)==null?void 0:i.focus.location)}constructor(t){super(t),this.tiles=[],this.pointOfInterest=null}initialize(){this.addHandles([_(()=>this.view.featureTiles,t=>{this.removeHandles(q),t&&this.addHandles(t.addClient(),q)},b),_(()=>this._sortedTilesCoveringView,t=>this._set("tiles",t),{initial:!0,equals:(t,i)=>X(t,i,(a,s)=>a.id===s.id)})])}};function xe({lij:[e,t,i],extent:a}){return new V(`${e}/${t}/${i}`,e,t,i,a)}r([o({readOnly:!0})],v.prototype,"tiles",void 0),r([o({readOnly:!0})],v.prototype,"_sortedTilesCoveringView",null),r([o({readOnly:!0})],v.prototype,"tileInfo",null),r([o({readOnly:!0})],v.prototype,"tileSize",null),r([o({constructOnly:!0})],v.prototype,"view",void 0),r([o()],v.prototype,"pointOfInterest",void 0),r([o()],v.prototype,"_effectivePointOfInterest",null),v=r([I("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],v);const q="feature-tiles",Ve=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let H=class extends k{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=Ve.map(e=>new Y({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=n=>{if(n.label!=null)return n.label;let l=n.lij.toString();return n.loadPriority!=null&&(l+=` (${n.loadPriority})`),n.measures&&(l+=`[${n.measures.lodLevel}]`),l},t=this.getTiles(),i=new Array,a=new Set((this._labels.size,this._labels.keys()));t.forEach((n,l)=>{var $;const d=n.lij.toString();a.delete(d);const c=(($=n.measures)==null?void 0:$.lodLevel)??n.level,p=n.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const m=new j({geometry:p,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(d,m),i.push(m)}if(this.enableLabels){const m=e(n),T=l/(t.length-1),O=A(0,200,T),F=A(20,6,T)/.75,P=n.loadPriority!=null&&n.loadPriority>=t.length,M=new x([O,P?0:O,P?0:O]),C=this.view.type==="3d"?()=>new ee({verticalOffset:new se({screenLength:40/.75}),callout:new ie({color:new x("white"),border:new re({color:new x("black")})}),symbolLayers:new te([new ne({text:m,halo:{color:"white",size:1/.75},material:{color:M},size:F})])}):()=>new ae({text:m,haloColor:"white",haloSize:1/.75,color:M,size:F}),u=this._labels.get(d);if(u){const g=C();u.symbol!=null&&JSON.stringify(g)===JSON.stringify(u.symbol)||(u.symbol=g)}else{const g=new j({geometry:p.extent.center,symbol:C()});this._labels.set(d,g),i.push(g)}}});const s=new Array;a.forEach(n=>{const l=this._polygons.get(n);l!=null&&(s.push(l),this._polygons.delete(n));const d=this._labels.get(n);d!=null&&(s.push(d),this._labels.delete(n))}),this.view.graphics.removeMany(s),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};r([o({constructOnly:!0})],H.prototype,"view",void 0),r([o({readOnly:!0})],H.prototype,"updating",void 0),r([o()],H.prototype,"enabled",null),H=r([I("esri.views.support.TileTreeDebugger")],H);let E=class extends H{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(oe(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(s=>{e.set(s.data.id,s.featureCount)}),this._debugInfo.pendingTiles.forEach(s=>{e.set(s.data.id,s.featureCount),t.set(s.data.id,s.state)});const i=s=>{const n=t.get(s),l=e.get(s)??"?";return n?`${n}:${l}
${s}`:`store:${l}
${s}`},a=new Map;return this._debugInfo.storedTiles.forEach(s=>{a.set(s.data.id,s.data)}),this._debugInfo.pendingTiles.forEach(s=>{a.set(s.data.id,s.data)}),Array.from(a.values()).map(s=>({lij:[s.level,s.row,s.col],level:s.level,geometry:le.fromExtent(de(s.extent,this.view.spatialReference)),label:i(s.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};r([o({constructOnly:!0})],E.prototype,"handle",void 0),E=r([I("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],E);let y=class extends k{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new Q,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const i=[];for(const{points:a}of t.pointsInFeatures)for(const{z:s}of a)i.push(s);return{elevations:i,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this.updateOutFields=ue(async(t,i)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],i)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},i))})}destroy(){this._suspendController=he(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new Re(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var s;const i=Ne(e.layer);if(i==null)return;const a={configuration:G(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(s=e.layer.elevationInfo)==null?void 0:s.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",a,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=G(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:a,coordinateHelper:s}=e,n={...e,point:Ee(i[0],i[1],i[2],s.spatialReference.toJSON()),filter:a==null?void 0:a.toJSON()};return this._workerHandle.invoke(n,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async handleEdits({historicMoment:e,addedFeatures:t,deletedFeatures:i,updatedFeatures:a},s){const n={historicMoment:e,addedFeatures:(t==null?void 0:t.map(({objectId:l})=>l).filter(L))??[],deletedFeatures:(i==null?void 0:i.map(({objectId:l,globalId:d})=>({objectId:l,globalId:d})))??[],updatedFeatures:(a==null?void 0:a.map(({objectId:l})=>l).filter(L))??[]};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("handleEdits",n,s)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},s))}async setHistoricMoment(e,t){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setHistoricMoment",{moment:e},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;(t=this._suspendController)==null||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function G(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function Ne(e){var t,i;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:pe.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(i=e.timeInfo)==null?void 0:i.toJSON()}}r([o({constructOnly:!0})],y.prototype,"schedule",void 0),r([o({constructOnly:!0})],y.prototype,"hasZ",void 0),r([o({constructOnly:!0})],y.prototype,"elevationAlignPointsInFeatures",void 0),r([o({constructOnly:!0})],y.prototype,"queryForSymbologySnapping",void 0),r([o({readOnly:!0})],y.prototype,"updating",null),r([o({readOnly:!0})],y.prototype,"availability",void 0),r([o()],y.prototype,"_workerHandleUpdating",void 0),y=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],y);class Re extends Ce{constructor(t,i){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:i})}}let S=class extends k{get tiles(){return[new V("0/0/0",0,0,0,ce(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new ye({origin:new fe({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new ge({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};r([o({readOnly:!0})],S.prototype,"tiles",null),r([o({readOnly:!0})],S.prototype,"tileInfo",null),r([o({readOnly:!0})],S.prototype,"tileSize",null),r([o({constructOnly:!0})],S.prototype,"layer",void 0),r([o()],S.prototype,"pointOfInterest",void 0),S=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],S);let h=class extends k{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return(e=this.view)==null?void 0:e.allLayerViews.find(t=>t.layer===this._layer)}get _isSuspended(){var e;return we(this._layer)&&!this.layerSource.sublayerSources.some(t=>t.enabled&&t.layer.visible)?!0:!!this.view&&(((e=this._layerView)==null?void 0:e.suspended)!==!1||!this.layerSource.enabled)}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var $,m,T,O,F,P,M,C;const{view:e,_layerView:t,layerSource:i}=this,{layer:a}=i,{fieldsIndex:s,timeInfo:n,floorInfo:l,subtypeField:d}=a,c=t&&"filter"in t?t.filter:null,p=c!=null&&c.where&&c.where!=="1=1"?this._getOrLoadWhereFields(c.where,s):[];if(c!=null&&c.timeExtent&&n){const{startField:u,endField:g}=n,N=(($=s.get(u))==null?void 0:$.name)??u,R=((m=s.get(g))==null?void 0:m.name)??g;N&&p.push(N),R&&p.push(R)}if(e!=null&&e.map&&Fe(e.map)&&((T=e.map.utilityNetworks)!=null&&T.find(u=>u.isUtilityLayer(a)))){const u=(O=a.fieldsIndex.get("assetGroup"))==null?void 0:O.name,g=(F=a.fieldsIndex.get("assetType"))==null?void 0:F.name;u&&g&&(p.push(u),p.push(g))}if(a&&(l!=null&&l.floorField)&&((P=e==null?void 0:e.floors)!=null&&P.length)){const u=((M=s.get(l.floorField))==null?void 0:M.name)??l.floorField;u&&p.push(u)}if(d){const u=((C=s.get(d))==null?void 0:C.name)??d;u&&p.push(u)}return new Set(p)}get configuration(){var n;const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,a=e!=null?e.type:"2d",s=this._layer.createQuery();return this._layerView&&"effectiveDisplayFilter"in this._layerView&&(s.where=_e(s.where,(n=this._layerView.effectiveDisplayFilter)==null?void 0:n.where)),{filter:s,customParameters:t?{...i,token:t}:i,viewType:a}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new Q,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=Ie(Me)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new S({layer:this._layer}),e=this._workerHandle=new y;else switch(t.type){case"2d":this._tilesOfInterest=new w({view:t,layer:this._layer}),e=this._workerHandle=new y;break;case"3d":{const{resourceController:i}=t,a=this._layer;this._tilesOfInterest=new v({view:t}),e=this._workerHandle=new y({schedule:s=>i.immediate.schedule(s),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(s,n)=>{const l=await t.whenLayerView(a);return U(n),l.elevationAlignPointsInFeatures(s,n)},queryForSymbologySnapping:async(s,n)=>{const l=await t.whenLayerView(a);return U(n),l.queryForSymbologySnapping(s,n)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:s})=>{const{elevationInfo:n}=a;Oe(s,n)&&f(e.notifyElevationSourceChange())}),_(()=>a.elevationInfo,()=>f(e.notifyElevationSourceChange()),b),_(()=>{var s,n;return(n=(s=this._layerView)==null?void 0:s.layer)==null?void 0:n.renderer},()=>f(e.notifySymbologyChange()),b),_(()=>{var s;return((s=this._layerView)==null?void 0:s.symbologySnappingSupported)??!1},s=>f(e.setSymbologySnappingSupported(s)),b),ve(()=>{var s;return(s=this._layerView)==null?void 0:s.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([D(e)]),f(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>f(e.updateTiles(this._updateTilesParameters,null)),b),this.addHandles([_(()=>this.configuration,i=>f(e.configure(i,null)),Z),_(()=>this._layer.historicMoment,i=>f(e.setHistoricMoment(i)),J),_(()=>this._outFields,i=>f(e.updateOutFields(i)),b),_(()=>this._isSuspended,i=>f(e.setSuspended(i)),J)]),t!=null&&this.addHandles(_(()=>me.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,i=>{i&&!this._debug?(this._debug=new E({view:t,handle:e}),this.addHandles(D(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")},b)),this.addHandles([this.layerSource.layer.on("edits",i=>f(e.handleEdits(i,null))),this.layerSource.layer.on("apply-edits",i=>this._updatingHandles.addPromise(i.result))])}destroy(){this._updatingHandles.destroy(),this._tilesOfInterest.destroy()}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:a}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(a);const s=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(n=>Pe(n,s))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const a=Se(async()=>{const s=await be(()=>import("./WhereClause-CKXQ1p-G.js").then(n=>n.W),__vite__mapDeps([0,1,2,3]));return this._whereModule=s.default,this._whereModule});return this._loadWhereModuleTask=a,this._updatingHandles.addPromise(a.promise),[]}if(!i)return[];try{return i.create(e,{fieldsIndex:t}).fieldNames}catch{return[]}}};r([o({constructOnly:!0})],h.prototype,"spatialReference",void 0),r([o({constructOnly:!0})],h.prototype,"layerSource",void 0),r([o({constructOnly:!0})],h.prototype,"view",void 0),r([o()],h.prototype,"_tilesOfInterest",void 0),r([o({readOnly:!0})],h.prototype,"_updateTilesParameters",null),r([o()],h.prototype,"_layerView",null),r([o()],h.prototype,"_isSuspended",null),r([o({readOnly:!0})],h.prototype,"updating",null),r([o()],h.prototype,"_outFields",null),r([o({readOnly:!0})],h.prototype,"configuration",null),r([o({readOnly:!0})],h.prototype,"availability",null),r([o()],h.prototype,"_loadWhereModuleTask",void 0),r([o()],h.prototype,"_whereModule",void 0),h=r([I("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],h);export{h as FeatureServiceSnappingSource};
