import{a0 as a,a1 as h,a2 as E,cW as S,s as f,A as F,cg as M,ab as C,cQ as R,c_ as q}from"./index-BCSVvjKE.js";import{r as $}from"./BitmapContainer-BAc12lbc.js";import{S as U,y as V}from"./LayerView-CLlz1xmb.js";import{_ as W}from"./ExportStrategy-g0sbgl-i.js";import{i as L}from"./RefreshableLayerView-Bd898Vj9.js";import{a as A}from"./ExportWMSImageParameters-D5c_Yxcm.js";import{i as _}from"./timeSupport-5XGO9pvP.js";import"./WGLContainer-B7ZgRvVt.js";import"./Utils-D4O3KAMI.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./ProgramTemplate-7-I-ic88.js";import"./VertexArrayObject-CWSP7Dtc.js";import"./memoryEstimations-B7_Jwj04.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CNbOd1fT.js";import"./StyleDefinition-BnwSCDGd.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-D8tC_IN5.js";import"./OptimizedFeature-CAs8C_6w.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BitmapTechnique-Ctzfck9e.js";import"./GraphShaderModule-CGrQHD0I.js";import"./FramebufferObject-CHpIv-62.js";import"./ShaderBuilder-4Epc3uLW.js";import"./BindType-BBwFZqyN.js";import"./TechniqueType-uMFRS8dR.js";import"./layerViewUtils-0c-tok9A.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new A({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return _(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:o}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:c}=o;if(!c)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:c});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:p,width:n,height:m,x:d,y:l}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const y=await o.fetchFeatureInfo(p,n,m,d,l);return F(s),y}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(L(U(V))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{M(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:s,y:o}=r,{spatialReference:c}=t;let i,p=0,n=0;if(e.children.some(y=>{const{width:w,height:v,resolution:b,x:g,y:x}=y,I=g+b*w,P=x-b*v;return s>=g&&s<=I&&o<=x&&o>=P&&(i=new q({xmin:g,ymin:P,xmax:I,ymax:x,spatialReference:c}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,d=Math.round((s-i.xmin)/m),l=Math.round((i.ymax-o)/m);return{extent:i,width:p,height:n,x:d,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,s){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...s})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const dt=u;export{dt as default};
