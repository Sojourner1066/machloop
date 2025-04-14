import{a0 as e,a1 as t,a2 as D,dq as X,ep as q,aT as $,T as z,aV as Y,fS as B,ix as G,s as Q,N as Z,mL as ee,b0 as te,fX as ie}from"./index-BCSVvjKE.js";let N=class extends X{set horizontalWKID(r){r?q({wkid:+r})?this._set("horizontalWKID",+r):this._set("horizontalWKID",r):this._set("horizontalWKID",null)}set verticalWKID(r){r?this._set("verticalWKID",isFinite(r)&&q({wkid:+r})?+r:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:r,focalLength:o,principalOffsetPoint:n,radialDistortionCoefficients:u,tangentialDistortionCoefficients:s}=this;return(r==null?void 0:r.length)>1&&!Number.isNaN(o)&&(n==null?void 0:n.length)>1&&(u==null?void 0:u.length)>1&&(s==null?void 0:s.length)>1}};e([t({json:{write:!0}})],N.prototype,"affineTransformations",void 0),e([t({json:{write:!0}})],N.prototype,"focalLength",void 0),e([t({json:{write:!0}})],N.prototype,"principalOffsetPoint",void 0),e([t({json:{write:!0}})],N.prototype,"radialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"tangentialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"horizontalWKID",null),e([t({json:{write:!0}})],N.prototype,"verticalWKID",null),e([t({json:{write:!0}})],N.prototype,"x",void 0),e([t({json:{write:!0}})],N.prototype,"y",void 0),e([t({json:{write:!0}})],N.prototype,"z",void 0),e([t({json:{write:!0}})],N.prototype,"type",void 0),N=e([D("esri.layers.orientedImagery.core.CameraOrientation")],N);const H=N;let w=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=1}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:d,heading:l,pitch:m,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[r,o,n,u,s,d,l,m,b];return this.isAdvanced&&(h==null||h.forEach(a=>y.push(a)),y.push(x),f==null||f.forEach(a=>y.push(a)),g==null||g.forEach(a=>y.push(a)),v==null||v.forEach(a=>y.push(a))),y.map(a=>Number.isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],w.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"heading",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"z",void 0),w=e([D("esri.layers.orientedImagery.core.CameraOrientationHPR")],w);const re=w;let I=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=4}toString(){const{type:r,latitude:o,longitude:n,ellipsoidRadius:u,squaredEccentricity:s,properties:d}=this,l=`${d}`.split("|");return l.splice(1,1),`${r}|${o}|${n}|${u}|${s}|${l.join("|")}`}};e([t({json:{write:!0}})],I.prototype,"type",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),e([t({json:{write:!0}})],I.prototype,"properties",void 0),I=e([D("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const oe=I;let j=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=2}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:d,omega:l,phi:m,kappa:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[r,o,n,u,s,d,l,m,b];return this.isAdvanced&&(h==null||h.forEach(a=>y.push(a)),y.push(x),f==null||f.forEach(a=>y.push(a)),g==null||g.forEach(a=>y.push(a)),v==null||v.forEach(a=>y.push(a))),y.map(a=>isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],j.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"omega",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"phi",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"kappa",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"z",void 0),j=e([D("esri.layers.orientedImagery.core.CameraOrientationOPK")],j);const ne=j;let P=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:r,focalLength:o,principalOffsetPoint:n,radialDistortionCoefficients:u,tangentialDistortionCoefficients:s}=this;return(r==null?void 0:r.length)>1||!Number.isNaN(o)||(n==null?void 0:n.length)>1||(u==null?void 0:u.length)>1||(s==null?void 0:s.length)>1}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:d,yaw:l,pitch:m,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:f,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,y=[r,o,n,u,s,d,l,m,b];return this.isAdvanced&&(h==null||h.forEach(a=>y.push(a)),y.push(x),f==null||f.forEach(a=>y.push(a)),f==null||f.forEach(a=>y.push(a)),g==null||g.forEach(a=>y.push(a)),v==null||v.forEach(a=>y.push(a))),y.map(a=>Number.isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],P.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"yaw",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"z",void 0),P=e([D("esri.layers.orientedImagery.core.CameraOrientationYPR")],P);const ae=P;var S;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(S||(S={}));const M=new Map;M.set(`${S.OPK}`,{desc:"Using Omega Phi Kappa",constructor:ne}),M.set(`${S.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:re}),M.set(`${S.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:ae}),M.set(`${S.LTP}`,{desc:"Using Local Tangent Plane",constructor:oe});let O=class extends $.ClonableMixin(z){constructor(){super(...arguments),this.url=null}};e([t({type:Number,json:{write:!0}})],O.prototype,"lod",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"rasterFunction",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"url",void 0),O=e([D("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],O);let U=class extends $.ClonableMixin(z){constructor(){super(...arguments),this.constantElevation=null}};e([t({type:Number,json:{write:!0}})],U.prototype,"constantElevation",void 0),U=e([D("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],U);const se=i=>i!=null&&typeof i.constantElevation=="number";function pe(i,r,o){return r&&(i=`${r}${i}`),o&&(i+=`${o}`),i}function ue(i,r,o){let{url:n}=i;return n?(n=pe(n,r,o),new O({...i,url:n})):null}function le(i,r,o){return i&&(se(i)?new U(i):ue(i,r,o))}const F=new Y({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),V=new Y({Feet:"feet",Meter:"meter"}),_=new Y({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),W=new Map;function ye(i){const[r,o,n,u,s,d,l,m,b,h,x,f,g,v,y,a,T,C,E,K,L,R]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,omega:d,phi:l,kappa:m,...k([b,h,x,f,g,v],[a,T],[C,E,K],[L,R],y)}}W.set(`${S.HPR}`,ce),W.set(`${S.YPR}`,de),W.set(`${S.OPK}`,ye),W.set(`${S.LTP}`,fe);const A=i=>{const r=i.map(o=>parseFloat(o)).filter(o=>!isNaN(o));if(r.length===i.length)return r};function k(i,r,o,n,u){const s=A(i),d=A(r),l=A(o),m=A(n);return{affineTransformations:(s==null?void 0:s.length)===6?s:void 0,focalLength:(s==null?void 0:s.length)===6?parseFloat(u):void 0,principalOffsetPoint:(d==null?void 0:d.length)!==2?[0,0]:d,radialDistortionCoefficients:(l==null?void 0:l.length)!==3?[0,0,0]:l,tangentialDistortionCoefficients:(m==null?void 0:m.length)!==2?[0,0]:m}}function ce(i){const[r,o,n,u,s,d,l,m,b,h,x,f,g,v,y,a,T,C,E,K,L,R]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,heading:d,pitch:l,roll:m,...k([b,h,x,f,g,v],[a,T],[C,E,K],[L,R],y)}}function de(i){const[r,o,n,u,s,d,l,m,b,h,x,f,g,v,y,a,T,C,E,K,L,R]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,yaw:d,pitch:l,roll:m,...k([b,h,x,f,g,v],[a,T],[C,E,K],[L,R],y)}}function fe(i){var b;const[r,o,n,u,s,...d]=i.slice(1),l=W.get(s),m=(b=M.get(s))==null?void 0:b.constructor;return!l||!m?null:{latitude:r,longitude:o,ellipsoidRadius:n,squaredEccentricity:u,properties:new m(l([s,"",...d]))}}function me(i){return Array.isArray(i)&&(i==null?void 0:i.length)===9&&!i.some(isNaN)}const he=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","imageGeometryField","imageReferenceField","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),J=(i,r)=>!he.has(r)&&i,ge=(i,r,o)=>{const n=`orientedImageryProperties.${i}`;return{name:n,write:r?{ignoreOrigin:!0,target:n,writer:r}:{ignoreOrigin:!0},read:o?{ignoreOrigin:!0,source:n,reader:o}:{ignoreOrigin:!0}}};function ve(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function c(i,r,o,n){const{name:u,write:s,read:d}=ge(i,r,o),l={name:u,write:s,read:d,origins:{service:{name:`orientedImageryInfo.${u}`,write:r,read:o},"web-scene":{name:u,write:J(s,i),read:J(d,i)},"web-map":{name:u,write:s,read:d}}};return n&&l.origins&&(l.type=n,l.origins["web-map"].type=n,l.origins["web-scene"].type=n),l}let p=class extends B{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imageGeometryField="ImageGeometry",this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageReferenceField="OIObjectID",this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:r,demPathSuffix:o}=this;return le(i,r,o)}async save(i){return this._debouncedSaveOperations(G.SAVE,i)}async saveAs(i,r){return this._debouncedSaveOperations(G.SAVE_AS,r,i)}findFirstValidLayerId(i){var r,o;return(o=(r=i.layers)==null?void 0:r.find(n=>this.supportedSourceTypes.has(n.type)))==null?void 0:o.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Q("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([t({type:Number,json:c("cameraHeading")})],p.prototype,"cameraHeading",void 0),e([t({type:Number,json:c("cameraHeight")})],p.prototype,"cameraHeight",void 0),e([t({type:Number,json:c("cameraPitch")})],p.prototype,"cameraPitch",void 0),e([t({type:Number,json:c("cameraRoll")})],p.prototype,"cameraRoll",void 0),e([t({type:Number,json:c("coveragePercent")})],p.prototype,"coveragePercent",void 0),e([t({type:String,json:c("demPathPrefix")})],p.prototype,"demPathPrefix",void 0),e([t({type:String,json:c("demPathSuffix")})],p.prototype,"demPathSuffix",void 0),e([t({type:String,json:c("depthImagePathPrefix")})],p.prototype,"depthImagePathPrefix",void 0),e([t({type:String,json:c("depthImagePathSuffix")})],p.prototype,"depthImagePathSuffix",void 0),e([t({type:Object,json:c("elevationSource")})],p.prototype,"elevationSource",void 0),e([t({readOnly:!0})],p.prototype,"effectiveElevationSource",null),e([t({type:Number,json:c("farDistance")})],p.prototype,"farDistance",void 0),e([t()],p.prototype,"geometryType",void 0),e([t({type:Number,json:c("horizontalFieldOfView")})],p.prototype,"horizontalFieldOfView",void 0),e([t({type:String,json:c("horizontalMeasurementUnit")})],p.prototype,"horizontalMeasurementUnit",void 0),e([t({type:String,json:{...c("imageGeometryField"),default:"ImageGeometry"}})],p.prototype,"imageGeometryField",void 0),e([t({type:String,json:c("imagePathPrefix")})],p.prototype,"imagePathPrefix",void 0),e([t({type:String,json:c("imagePathSuffix")})],p.prototype,"imagePathSuffix",void 0),e([t({type:String,json:{...c("imageReferenceField"),default:"OIObjectID"}})],p.prototype,"imageReferenceField",void 0),e([t({type:Number,json:c("imageRotation")})],p.prototype,"imageRotation",void 0),e([t({type:Number,json:c("maximumDistance")})],p.prototype,"maximumDistance",void 0),e([t({type:Number,json:c("nearDistance")})],p.prototype,"nearDistance",void 0),e([t({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),e([t({json:{...c("orientationAccuracy",(i,r,o)=>{ie(o,i.join(";"),r)},i=>{var o;const r=(o=i==null?void 0:i.split(";"))==null?void 0:o.map(Number);return me(r)?r:[0,0,0,0,0,0,0,0,0]},String)}})],p.prototype,"orientationAccuracy",void 0),e([t({json:{...c("orientedImageryType",_.write,_.read,_.jsonValues.slice(1))}})],p.prototype,"orientedImageryType",void 0),e([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),e([t({type:F.apiValues,json:{...c("timeIntervalUnit",F.write,F.read,F.jsonValues)}})],p.prototype,"timeIntervalUnit",void 0),e([t(ve(Z(ee)))],p.prototype,"useViewTime",void 0),e([t({type:Number,json:c("verticalFieldOfView")})],p.prototype,"verticalFieldOfView",void 0),e([t({type:V.apiValues,json:{...c("verticalMeasurementUnit",V.write,V.read,V.jsonValues)}})],p.prototype,"verticalMeasurementUnit",void 0),e([t({type:String,json:c("videoPathPrefix")})],p.prototype,"videoPathPrefix",void 0),e([t({type:String,json:c("videoPathSuffix")})],p.prototype,"videoPathSuffix",void 0),e([t({type:te,json:{origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"visibilityTimeExtent",void 0),p=e([D("esri.layers.OrientedImageryLayer")],p);const Se=p;export{Se as default};
