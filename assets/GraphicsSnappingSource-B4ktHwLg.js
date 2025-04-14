import{dq as v,gA as S,A as c,g4 as w,cR as y,cQ as b,cL as k,gB as E,ej as C,ec as $,gC as A,bD as F,c$ as G,cX as P,eN as R,cG as H,ef as I,a0 as a,a1 as l,a2 as O}from"./index-BCSVvjKE.js";import{t as L}from"./memoize-DmxaQ-k8.js";import{a as Z}from"./normalizeUtilsSync-B1HzKDFh.js";import{s as x}from"./featureConversionUtils-D8tC_IN5.js";import{s as z}from"./OptimizedFeature-CAs8C_6w.js";import{u as M}from"./executeQueryForSnapping-CayfJp8a.js";import{f as N}from"./FeatureStore-BC5__XGr.js";import{L as W}from"./QueryEngine-BQSL2sKi.js";import{y as j}from"./elevationInfoUtils-Do3IlhTH.js";import{N as m}from"./utils-BkLQB36d.js";import{E as q,y as T}from"./hitTestSelectUtils-DyJDK4Vo.js";import{o as B,i as D}from"./queryEngineUtils-B_aagXg9.js";import{i as g,r as J,n as f}from"./symbologySnappingCandidates-BOBWfizq.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./memoryEstimations-B7_Jwj04.js";import"./queryUtils-BoaFe4en.js";import"./json-Wa8cmqdu.js";import"./timeSupport-B-rYk-YC.js";import"./BoundsStore-cklG7tdy.js";import"./PooledRBush-SeVDtihQ.js";import"./optimizedFeatureQueryEngineAdapter-gTEK_f5j.js";import"./WhereClauseCache-CfQztPdi.js";import"./WhereClause-CKXQ1p-G.js";import"./TimeOnly-CVgLqrpK.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./quantizationUtils-CrQL7F8F.js";import"./utils-CPs0OUil.js";import"./utils-BOcVauar.js";import"./utils-ClwJ7PVs.js";import"./ClassBreaksDefinition-DxtXpx_T.js";import"./SnappingCandidate-DGkpYqI6.js";import"./FixedIntervalBinParameters-DKHQSzaq.js";import"./cimSymbolUtils-BoGkCqP0.js";import"./quantityUtils-CqnQm8eu.js";import"./projectVectorToVector-DV5W_8-J.js";import"./projectPointToVector-D4QINAum.js";import"./geodesicUtils-43dYgYaw.js";import"./plane-gAgGBHhk.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-DRB5B-QR.js";import"./RouteLayerInteraction-DKqg1-83.js";import"./GraphicsLayer-Dd_06yaf.js";import"./Stop-ydy3kZfa.js";import"./networkEnums-B_Ikcs9K.js";import"./VertexSnappingCandidate-BVFIKBIz.js";import"./PointSnappingHint-DXlpXKb2.js";const _="graphics-collections";let n=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return g();const o=async(r,s)=>(await S(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(r,s);return g(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:o})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return J(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",o=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&o?f(o,async(r,s)=>{const p=await e.whenLayerView(t);return c(s),p.queryForSymbologySnapping({candidates:r,spatialReference:e.spatialReference},s)}):f()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new w,this._memoizedMakeGetGroundElevation=L(D)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(_);for(const o of i)this._addMany(o.graphics.toArray()),this.addHandles([o.on("graphic-update",r=>this._onGraphicUpdate(r)),this._updatingHandles.addOnCollectionChange(()=>o.graphics,r=>this._onGraphicsChanged(r))],_)},y);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{j(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),b(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),y),k(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:o}}=e,r=await E(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const s=this._memoizedMakeGetGroundElevation(this.view,o),p=r.flat().map(d=>B(d,s));return q(i,p),p}async _fetchCandidatesForSource(e,t,i){var u;const o=T(t,((u=this.view)==null?void 0:u.type)??"2d"),r=await M(e.queryEngine,o,i);c(i);const s=await this._snappingElevationAligner.alignCandidates(r.candidates,t.coordinateHelper.spatialReference,i);c(i);const p=await this._symbologySnappingFetcher.fetch(s,i);c(i);const d=p.length===0?s:[...s,...p];return this._snappingElevationFilter.filter(o,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const o of e)o.geometry!=null&&(this._needsInitializeProjection(o.geometry.spatialReference)?(t.push(o.geometry.spatialReference),i.set(o.uid,o)):this._add(o));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=C(async s=>{await $(e.map(p=>({source:p,dest:this.spatialReference})),{signal:s}),this._markLoadedSpatialReferences(e);for(const p of t.values())this._add(p)});this._updatingHandles.addPromise(i.promise);const o={task:i,graphics:t},r=()=>A(this._pendingAdds,o);i.promise.then(r,r),this._pendingAdds.push(o)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=F.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const o=this._createOptimizedFeature(e.uid,t);o!=null&&(i.featureStore.add(o),m(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!G(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=P(Z(t),this.spatialReference);if(!i)return null;const o=this._ensureGeometryHasZ(i),r=x(o,this._hasZ,!1);return new z(r,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=o=>{for(;o.length<3;)o.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(o=>o.forEach(t));break;case"polygon":i.rings.forEach(o=>o.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=R.toJSON(e),i=this._hasZ,o=new N({geometryType:t,hasZ:i,hasM:!1});return{featureStore:o,queryEngine:new W({featureStore:o,fieldsIndex:I.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:H.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),m(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:o,multipoint:r}=this._sources,s=[];return t!=null&&s.push(e(t)),i!=null&&s.push(e(i)),o!=null&&s.push(e(o)),r!=null&&s.push(e(r)),s}};a([l()],n.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],n.prototype,"layerSource",void 0),a([l({constructOnly:!0})],n.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],n.prototype,"view",void 0),a([l({readOnly:!0})],n.prototype,"updating",null),a([l({readOnly:!0})],n.prototype,"availability",void 0),a([l()],n.prototype,"_hasZ",null),a([l()],n.prototype,"_snappingElevationAligner",null),a([l()],n.prototype,"_snappingElevationFilter",null),a([l()],n.prototype,"_symbologySnappingFetcher",null),a([l()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),n=a([O("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const h="OBJECTID";export{n as GraphicsSnappingSource};
