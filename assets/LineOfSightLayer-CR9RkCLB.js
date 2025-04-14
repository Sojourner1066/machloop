import{T as w,aT as O,dq as M,kB as y,a0 as t,a1 as i,z as R,dE as S,a2 as d,cQ as $,du as L,a6 as v,dn as j,lg as N,fU as P,lh as C,li as F,dp as H,fd as J,ff as k,dD as B}from"./index-BCSVvjKE.js";import{c as D}from"./Analysis-D9w16jDF.js";import{c as E,b as q}from"./featureReferenceUtils-BBGTRJSa.js";import{v as f}from"./persistable-CXf_-tC7.js";import{i as Q}from"./elevationInfoUtils-Do3IlhTH.js";import"./sphere-DRB5B-QR.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-gAgGBHhk.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-CmNINbyF.js";import"./boundedPlane-D5TJwWtA.js";import"./lineSegment-BFjWctde.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BzN4tnHv.js";let a=class extends w.JSONSupportMixin(O.ClonableMixin(M)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};t([i({type:R,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([i({type:S}),f()],a.prototype,"elevationInfo",void 0),t([i(q)],a.prototype,"feature",void 0),a=t([d("esri.analysis.LineOfSightAnalysisObserver")],a);const I=a;let l=class extends w.JSONSupportMixin(O){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&E(this.feature,s.feature)}};t([i({type:R,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),f()],l.prototype,"position",void 0),t([i({type:S}),f()],l.prototype,"elevationInfo",void 0),t([i(q)],l.prototype,"feature",void 0),l=t([d("esri.analysis.LineOfSightAnalysisTarget")],l);const z=l,g=v.ofType(z);let n=class extends D{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",j(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var b;const e=this.spatialReference;if(((b=this.observer)==null?void 0:b.position)==null||e==null)return null;const m=p=>Q(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,x=N(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=P(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:T,y:A,z:_}=u.geometry;C(x,[T,A,_])}}const h=F(x,e);return m(this.observer)&&this.targets.every(m)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};t([i({type:["line-of-sight"]})],n.prototype,"type",void 0),t([i({type:I,json:{read:!0,write:!0}})],n.prototype,"observer",void 0),t([i({cast:H,type:g,nonNullable:!0,json:{read:!0,write:!0}})],n.prototype,"targets",null),t([i({value:null,readOnly:!0})],n.prototype,"extent",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"requiredPropertiesForEditing",null),n=t([d("esri.analysis.LineOfSightAnalysis")],n);const c=n,U=v.ofType(z);let r=class extends J(k(B)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new c,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(s){var e;j(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new c)}};t([i({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([i({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({type:I,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),t([i({type:U,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],r.prototype,"targets",null),t([i({type:c,nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([i({readOnly:!0})],r.prototype,"fullExtent",null),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([d("esri.layers.LineOfSightLayer")],r);const ue=r;export{ue as default};
