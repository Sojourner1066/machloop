const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/groupLayerUtils-B_vc-cne.js","assets/utils-BpvWoXSL.js","assets/index-BCSVvjKE.js","assets/index-CrYBktwj.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-DmUbEMC0.js","assets/saveUtils-ByDzxqZy.js","assets/resourceUtils-DuqZMrCD.js","assets/resourceUtils-DlH8wwgx.js"])))=>i.map(i=>d[i]);
import{dB as b,dC as v,fd as c,fe as f,it as m,iu as _,ff as w,dt as g,iv as L,g5 as I,cQ as y,du as O,cL as S,fI as h,cO as $,iw as A,w as V,b8 as E,fN as P,ix as p,iy as M,dD as C,_ as x,ab as T,a0 as r,a1 as l,fK as u,cd as G,a2 as R}from"./index-BCSVvjKE.js";import{populateGroupLayer as j}from"./layersCreator-DfVSmhd4.js";import{a as H}from"./lazyLayerLoader-fFwk2IYF.js";import{r as F}from"./saveUtils-ByDzxqZy.js";import"./loadUtils-cDTjsAMp.js";import"./fetchService-DOpyS1v1.js";import"./associatedFeatureServiceUtils-ogvVNufE.js";import"./portalLayers-DoTkasCl.js";const k=Symbol("WebScene");let s=class extends b(v(c(f(m(_(w(C))))))){constructor(e){super(e),this.allLayers=new g({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=L(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=I(async(i,t,a)=>{const{save:o,saveAs:n}=await x(()=>import("./groupLayerUtils-B_vc-cne.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(i){case p.SAVE:return o(this,t);case p.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([y(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&k in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(S(()=>this.tables,"before-add",t=>{t.preventDefault(),T.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},O),y(()=>this.visible,this._onVisibilityChange.bind(this),h)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===$.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const d=A(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);d!=null&&d.layerType&&o.push(d)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new V({id:a,portal:t==null?void 0:t.portal})}writePortalItem(e,i){e!=null&&e.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return F(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:H,populateGroupLayer:j},e).catch(t=>{if(E(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return P(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(p.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(y(()=>e.visible,i=>this._onChildVisibilityChange(e,i),h),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!M(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([u("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:(e==null?void 0:e.type)==="Group Layer"&&(t==null?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([G("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([u("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([R("esri.layers.GroupLayer")],s);const W=s;export{W as default};
