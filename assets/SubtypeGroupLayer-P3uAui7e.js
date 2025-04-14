const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/featureLayerUtils-DDlyLYY9.js","assets/index-BCSVvjKE.js","assets/index-CrYBktwj.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/utils-BpvWoXSL.js","assets/jsonContext-DmUbEMC0.js","assets/saveUtils-ByDzxqZy.js","assets/fetchService-DOpyS1v1.js","assets/FeatureLayerSource-CumDccsK.js","assets/MeshLocalVertexSpace-DVq20P2P.js","assets/meshVertexSpaceUtils-C3eC4eMG.js","assets/External-Sf5H1ZLY.js","assets/MeshTransform-CIgZqfid.js","assets/mat4f64-Dk4dwAN8.js","assets/quat-BvDT_bxV.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/axisAngleDegrees-B8RLYrIK.js","assets/editingSupport-lEbp6S8t.js","assets/clientSideDefaults-DexQn4Fj.js","assets/QueryEngineCapabilities-B_pTbIiR.js","assets/QueryTask-H9CF1UnN.js","assets/executeForIds-Cmw0KFmp.js","assets/query-DA927wtq.js","assets/pbfQueryUtils-BzIyC_vF.js","assets/pbf-C8WmPobi.js","assets/memoryEstimations-B7_Jwj04.js","assets/OptimizedFeature-CAs8C_6w.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/executeQueryJSON-sBZ6A4nC.js","assets/featureConversionUtils-D8tC_IN5.js"])))=>i.map(i=>d[i]);
import{kb as re,kc as se,kd as ie,cU as L,ke as ae,ff as Q,aT as H,fb as ne,gJ as oe,id as R,kf as le,cW as ue,N as I,fX as pe,ab as G,s as g,aX as de,ig as ye,kg as B,dr as D,kh as J,is as K,R as W,ki as ce,kj as he,kk as fe,a0 as i,a1 as n,kl as be,fK as me,ii as Z,jT as ge,ij as ve,km as x,ik as we,il as Fe,fh as Ie,iK as Se,iJ as Te,io as $e,cS as je,cd as j,a2 as z,jU as Oe,i9 as Ce,jV as Ee,dB as _e,fL as xe,dC as Le,fc as ke,fo as Ae,fd as qe,fe as Pe,fp as De,fq as Re,dD as Ge,a6 as _,g5 as Ve,cQ as Ne,fI as Me,b8 as Ue,gK as Qe,kn as He,I as Be,cj as Je,i3 as Ke,ko as We,kp as Ze,jW as ze,gA as Xe,_ as V,kq as Ye,kr as et,ks as tt,fN as rt,kt as st,ku as it,eF as at,kv as nt,kw as ot,kx as lt,ky as ut,ix as E,fO as pt,ie as dt,jY as yt,fg as ct,kz as ht}from"./index-BCSVvjKE.js";import{T as ft}from"./colorUtils-DSamnXnQ.js";import{I as bt}from"./cimSymbolUtils-BoGkCqP0.js";import{h as mt,g as gt}from"./utils-BkLQB36d.js";const X={key:"type",base:ae,errorContext:"renderer",typeMap:{simple:L,"unique-value":ie,"class-breaks":se}},P=re({types:X});function vt(e,t){var a;const r=(a=e.drawingInfo)==null?void 0:a.renderer,s=r?P(r,e,t):null;if((s==null?void 0:s.type)==="simple")return mt(s.symbol,null)?s.symbol.clone():null}const wt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function Ft(e,t){return ft(wt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const s=t.clone();return s.type==="cim"?bt(s,r):gt(s,r),new L({symbol:s})})}const N=Z();let It=0;function $(e,t){let r=e.json.write;return typeof r!="object"&&(r=e.json.write={}),r.ignoreOrigin=!0,t!=null&&t.spatialOnly&&(r.layerContainerTypes=x),e}function f(e){const t={write:{ignoreOrigin:!0}};return e!=null&&e.name&&(t.name=e.name),typeof t.write=="object"&&(e!=null&&e.spatialOnly&&(t.write.layerContainerTypes=x),e!=null&&e.target&&(t.write.target=e.target)),t}function St(e){return new L({symbol:Tt(e)})}function Tt(e){switch(e){case"point":case"multipoint":return fe.clone();case"polyline":return he.clone();case"polygon":case"multipatch":return ce.clone();default:return null}}function $t(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Y(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function jt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},a=Y(e,t);if(a!=null){const{defaultValues:l}=a;for(const u in l)s[u]=l[u]}return s[t.subtypeField]=e,new K({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let o=class extends Q(H.ClonableMixin(ne.IdentifiableMixin(oe))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${It++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return R(this.renderer,this.fieldsIndex),Promise.resolve(this)}get _titleCreator(){var t;const e=this._get("_titleCreator");return ue(e),new le({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,displayField:((t=this.parent)==null?void 0:t.displayField)??"",fields:this.fields,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}get featureTitleFields(){return[...this._titleCreator.requiredFields]}writeFieldOverrides(e,t,r){const{fields:s,parent:a}=this;let l;if(s){l=[];let u=0;s.forEach(({name:d,alias:c,editable:v,visible:w})=>{var O;if(!w)return;const y=(O=a==null?void 0:a.fields)==null?void 0:O.find(T=>T.name===d);if(!y)return;const m={name:d};let F=!1;c!==y.alias&&(m.alias=c,F=!0),v!==y.editable&&(m.editable=v,F=!0),l.push(m),F&&u++}),u===0&&l.length===s.length&&(l=null)}else l=I(e);l!=null&&l.length&&pe(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:a,subtypeField:l}=e,u=a==null?void 0:a.find(w=>w.code===r),d=u==null?void 0:u.defaultValues,c=u==null?void 0:u.domains,v=[];for(const w of s){const y=w.clone(),{name:m}=y,F=t==null?void 0:t.find(C=>C.name===m);if(y.visible=!(t!=null&&t.length)||!!F,F){const{alias:C,editable:te}=F;C&&(y.alias=C),te===!1&&(y.editable=!1)}const O=(d==null?void 0:d[m])??null;y.defaultValue=m===l?r:O;const T=(c==null?void 0:c[m])??null;y.domain=m===l?null:T?T.type==="inherited"?y.domain:T.clone():null,v.push(y)}return v}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get isTable(){var e;return!!((e=this.parent)!=null&&e.isTable)}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get globalIdField(){return this.parent?this.parent.globalIdField:(G.getLogger(this).error(h("globalIdField")),null)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||G.getLogger(this).error(h("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){var e;return(e=this.parent)==null?void 0:e.relationships}set renderer(e){R(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?St(e.geometryType):null}readRendererFromService(e,t,r){var d,c,v;if(t.type==="Table")return null;const s=(d=t.drawingInfo)==null?void 0:d.renderer,a=P(s,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&$t(a,t.subtypeField)){const w=(c=a.uniqueValueInfos)==null?void 0:c.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(u));w&&(l=new L({symbol:w.symbol}))}else(a==null?void 0:a.type)!=="simple"||(v=a.visualVariables)!=null&&v.length||(l=a);return l}readRenderer(e,t,r){var l,u,d;const s=(u=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:u.renderer;return s?((d=s.visualVariables)==null?void 0:d.some(c=>c.type!=="rotationInfo"))?void 0:P(s,t,r)||void 0:void 0}get spatialReference(){var e;return((e=this.parent)==null?void 0:e.spatialReference)??de.WGS84}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[jt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Y(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw h("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:a}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:d}=r;t={displayField:l,editFieldsInfo:u,fields:s,objectIdField:d,title:a}}return ye(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=B(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=D(t,this.parent.definitionExpression),e}getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){return this._titleCreator.getTitle(this,e,t)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!(t!=null&&t.excludeImpliedDomains)&&this.parent){const r=J(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const s=e.clone();return s.where=ee(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(k(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(k(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(k(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({clonable:!1,readOnly:!0})],o.prototype,"_titleCreator",null),i([n({type:be,json:f({name:"attributeTableInfo"})})],o.prototype,"attributeTableTemplate",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([n({json:f()})],o.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:f({name:"enableEditing"})})],o.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"elevationInfo",null),i([n({clonable:!1,readOnly:!0})],o.prototype,"featureTitleFields",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],o.prototype,"fieldOverrides",void 0),i([me("fieldOverrides")],o.prototype,"writeFieldOverrides",null),i([n({...N.fields,readOnly:!0,json:{read:!1}})],o.prototype,"fields",null),i([n(N.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"floorInfo",null),i([n({type:ge,json:f({name:"formInfo"})})],o.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"isTable",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"globalIdField",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),i([n($(I(ve)))],o.prototype,"labelsVisible",void 0),i([n({type:[Fe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:we},write:{ignoreOrigin:!0,layerContainerTypes:x}}})],o.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,layerContainerTypes:x}}})],o.prototype,"layerType",void 0),i([n($(I(Ie)))],o.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],o.prototype,"listMode",void 0),i([n((()=>{const e=I(Se);return e.json.origins.service.read=!1,$(e,{spatialOnly:!0})})())],o.prototype,"minScale",void 0),i([n((()=>{const e=I(Te);return e.json.origins.service.read=!1,$(e,{spatialOnly:!0})})())],o.prototype,"maxScale",void 0),i([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:f({spatialOnly:!0})})],o.prototype,"opacity",void 0),i([n({clonable:!1})],o.prototype,"parent",void 0),i([n($(I($e)))],o.prototype,"popupEnabled",void 0),i([n({type:je,json:f({name:"popupInfo"})})],o.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"relationships",null),i([n({types:X,json:f({target:"layerDefinition.drawingInfo.renderer",spatialOnly:!0})})],o.prototype,"renderer",null),i([j("service","renderer",["drawingInfo.renderer","subtypeField","type"])],o.prototype,"readRendererFromService",null),i([j("renderer",["layerDefinition.drawingInfo.renderer"])],o.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"subtypeCode",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"subtypeField",null),i([n({type:[K],json:f({name:"layerDefinition.templates"})})],o.prototype,"templates",void 0),i([j("service","templates",["geometryType","subtypeField","subtypes","type"])],o.prototype,"readTemplatesFromService",null),i([n({type:String,json:f()})],o.prototype,"title",void 0),i([j("service","title",["subtypes"])],o.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"url",null),i([n({readOnly:!0})],o.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:f({name:"visibility",spatialOnly:!0})})],o.prototype,"visible",void 0),o=i([z("esri.layers.support.SubtypeSublayer")],o);const k=(e,t,r)=>{if(!r)return t.createQuery();const s=W.from(r);return s.where=ee(s.where,e.subtypeField,t.subtypeCode),s},ee=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,l=e??"";return s.test(l)?l.replace(s,a):D(a,l)},h=e=>new g(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),S=o,b="SubtypeGroupLayer",Ot="esri.layers.SubtypeGroupLayer";function M(e,t){return new g("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function U(e,t){const r=[];for(const s of e){const a=new S;a.read(s,t),r.push(a)}return r}const A=Z();function q(){return{name:"layerType",read:{enabled:!0},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0}}}let p=class extends Oe(Ce(Ee(_e(xe(Le(ke(Ae(qe(Pe(Q(De(Re(H.ClonableMixin(Ge)))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(_.ofType(S)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer","Table"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Ve(async(t,r,s)=>{const{save:a,saveAs:l}=await V(()=>import("./featureLayerUtils-DDlyLYY9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));switch(t){case E.SAVE:return a(this,r);case E.SAVE_AS:return l(this,s,r)}}),this.addHandles(Ne(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),Me))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Ue).then(async()=>{if(!this.url)throw new g("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new g("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Qe(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return He(this)}get operationalLayerType(){return this.isTable?"SubtypeGroupTable":"SubtypeGroupLayer"}get parsedUrl(){const e=Be(this.url);return e!=null&&this.layerId!=null&&(e.path=Je(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ke(this.url,t):t}async addAttachment(e,t){const r=await We(this,e,t,b);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const s=await Ze(this,e,t,r,b);return this.lastEditsEventDate=new Date,s}async applyEdits(e,t){return ze(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Xe(V(()=>import("./FeatureLayerSource-CumDccsK.js"),__vite__mapDeps([9,1,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=B(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=D(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Ye(this,e,t,b);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return et(this,e,b)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){var s;if(!(t!=null&&t.excludeImpliedDomains)){const a=J(this,e);if(a)return a}const r=tt(this,t==null?void 0:t.feature);if(r){const a=(s=r.domains)==null?void 0:s[e];return(a==null?void 0:a.type)==="inherited"?this._getLayerDomain(e):a}return this._getLayerDomain(e)}loadAll(){return rt(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return st(this,e,t,b)}async queryFeatures(e,t){const r=await this.load(),s=W.from(e)??r.createQuery(),a=s.outFields??[];a.includes(this.subtypeField)||(a.push(this.subtypeField),s.outFields=a);const l=await r.source.queryFeatures(s,t);if(l!=null&&l.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return(await it(this,e,t,b)).filter(at)}async queryFeatureCount(e,t){return nt(this,e,t,b)}async queryExtent(e,t){return ot(this,e,t,b)}async queryRelatedFeatures(e,t){return lt(this,e,t,b)}async queryRelatedFeaturesCount(e,t){return ut(this,e,t,b)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}write(e,t){var l;const{origin:r,layerContainerType:s,messages:a}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return a==null||a.push(M(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return a==null||a.push(M(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(a==null||a.push(new g("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&pt(this,e)}async getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){const r=this.findSublayerForFeature(e);return r?await r.getFeatureTitle(e,t):this.displayField&&this.fieldsIndex.has(this.displayField)?e.attributes[this.fieldsIndex.get(this.displayField).name]??"":this.objectIdField&&this.fieldsIndex.has(this.objectIdField)?e.attributes[this.fieldsIndex.get(this.objectIdField).name]??"":""}get featureTitleFields(){const e=new Set;for(const t of this.sublayers){const r=t.featureTitleFields;for(const s of r)e.add(s)}return[...e]}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!((r=this.subtypes)!=null&&r.length))throw new g("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),dt(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return yt(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([n({readOnly:!0})],p.prototype,"createQueryVersion",null),i([n({readOnly:!0})],p.prototype,"editingEnabled",null),i([n({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([n({...A.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([n(A.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([n(ct)],p.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([n({type:["SubtypeGroupLayer","SubtypeGroupTable"],json:{...q(),origins:{"web-document":q(),"portal-item":q()}}})],p.prototype,"operationalLayerType",null),i([n(A.outFields)],p.prototype,"outFields",void 0),i([n({readOnly:!0})],p.prototype,"parsedUrl",null),i([n({clonable:!1})],p.prototype,"source",null),i([n({type:_.ofType(S),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let s=null;if(this.useUniqueColorsForSublayers){const l=vt(t,r);s=l?Ft(e.length,l):null}const a=e.map(({code:l},u)=>{const d=new S({subtypeCode:l});d.read(t,r);const c=s==null?void 0:s[u];return c&&d.read({drawingInfo:{renderer:c.toJSON()}},r),d});return new(_.ofType(S))(a)}}}},read:{source:["layers","tables"],reader(e,t,r){var a,l;let s;return t.layerType==="SubtypeGroupLayer"&&((a=t.layers)!=null&&a.length)?s=U(t.layers,r):t.layerType==="SubtypeGroupTable"&&((l=t.tables)!=null&&l.length)&&(s=U(t.tables,r)),new(_.ofType(S))(s)}},write:{ignoreOrigin:!0,writer(e,t,r,s){const a=[];for(const l of e){const u=l.write({},s);a.push(u)}this.isTable?t.tables=a:t.layers=a}}}})],p.prototype,"sublayers",void 0),i([n()],p.prototype,"useUniqueColorsForSublayers",void 0),i([n({type:ht})],p.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([j("service","title",["name"])],p.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],p.prototype,"type",void 0),i([n({clonable:!1,readOnly:!0})],p.prototype,"featureTitleFields",null),p=i([z(Ot)],p);const Lt=p;export{Lt as default};
