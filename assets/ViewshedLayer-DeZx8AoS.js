import{T as k,aT as C,kB as J,a0 as i,a1 as r,z as H,e$ as B,cv as x,kC as G,a2 as F,cQ as M,du as S,a6 as T,dn as K,kD as Q,c_ as U,aD as _,dp as Y,bE as q,fd as I,ff as W,dD as X,fK as Z}from"./index-BCSVvjKE.js";import{c as ee,b as te}from"./featureReferenceUtils-BBGTRJSa.js";import{c as ie}from"./Analysis-D9w16jDF.js";import"./sphere-DRB5B-QR.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-gAgGBHhk.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-CmNINbyF.js";import"./boundedPlane-D5TJwWtA.js";import"./lineSegment-BFjWctde.js";let o=class extends k.JSONSupportMixin(C){constructor(t){super(t),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(t){return J(this.observer,t.observer)&&this.farDistance===t.farDistance&&this.heading===t.heading&&this.tilt===t.tilt&&this.horizontalFieldOfView===t.horizontalFieldOfView&&this.verticalFieldOfView===t.verticalFieldOfView&&ee(this.feature,t.feature)}};i([r({type:H,json:{write:{isRequired:!0}}})],o.prototype,"observer",void 0),i([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),i([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),B(e=>x.normalize(G(e),void 0,!0))],o.prototype,"heading",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),i([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),i([r(te)],o.prototype,"feature",void 0),i([r({json:{read:!1}})],o.prototype,"isValid",null),o=i([F("esri.analysis.Viewshed")],o);const A=o,R=T.ofType(A);let u=class extends ie{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(M(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},S))}get viewsheds(){return this._get("viewsheds")||new R}set viewsheds(e){this._set("viewsheds",K(e,this.viewsheds,R))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const t=this.viewsheds.filter(s=>s.observer!=null),y=t.map(s=>s.observer).toArray(),l=Q(y,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,p)=>{const b=t.at(p);return s!=null&&b!=null?this._computeViewshedExtent(this.viewsheds.at(p),s):null}).filter(s=>s!=null).reduce((s,p)=>re(s,p),null)}}_computeViewshedExtent(e,t){const{farDistance:y,heading:l,tilt:s,horizontalFieldOfView:p,verticalFieldOfView:b}=e,{spatialReference:m}=t,V=p/2,O=b/2,$=y/m.metersPerUnit,L=[x.normalize(l-V),l,x.normalize(l+V)],d=U.fromPoint(t),v=w=>{const h=L.map(a=>x.normalize(a-w));if(h[0]>h[2]||p===360)return $;const c=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,g)=>a>g?g:a);return c>90?0:$*Math.cos(_(c))};d.xmax+=v(90),d.xmin-=v(-90),d.ymax+=v(0),d.ymin-=v(180);const f=t.z;if(f!=null){let w=f,h=f;const c=s-90,a=q(c+O,-90,90),g=q(c-O,-90,90),z=m!=null&&m.isGeographic?y:$;w+=z*N(a),h+=z*N(g);const P=D(O)*z,j=N(c)*P*(1-D(V));s<90&&(w-=j),s>90&&(h-=j),d.zmax=Math.max(w,f),d.zmin=Math.min(h,f)}return d}clear(){this.viewsheds.removeAll()}};function re(e,t){return e==null?t:t==null?e:e.union(t)}function D(e){return Math.cos(_(e))}function N(e){return Math.sin(_(e))}i([r({type:["viewshed"]})],u.prototype,"type",void 0),i([r({cast:Y,type:R,nonNullable:!0})],u.prototype,"viewsheds",null),i([r({readOnly:!0})],u.prototype,"spatialReference",null),i([r()],u.prototype,"_extent",void 0),i([r({readOnly:!0})],u.prototype,"extent",null),i([r({readOnly:!0})],u.prototype,"requiredPropertiesForEditing",null),u=i([F("esri.analysis.ViewshedAnalysis")],u);const E=u;let n=class extends I(W(X)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new E,this.opacity=1}initialize(){this.addHandles(M(()=>this.source,(e,t)=>{t!=null&&t.parent===this&&(t.parent=null),e!=null&&(e.parent=this)},S))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new E)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,t,y,l){t.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};i([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([r({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),i([r({type:E,nonNullable:!0})],n.prototype,"source",void 0),i([r({readOnly:!0})],n.prototype,"spatialReference",null),i([r({readOnly:!0})],n.prototype,"fullExtent",null),i([r({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([r({type:["show","hide"]})],n.prototype,"listMode",void 0),i([r({type:T.ofType(A),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),i([Z("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=i([F("esri.layers.ViewshedLayer")],n);const we=n;export{we as default};
