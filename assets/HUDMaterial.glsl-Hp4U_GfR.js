import{bE as Oe,nC as A,o7 as Me,dd as De,jr as ee,bH as ye,tj as we,tk as Ie,tl as Fe,dq as He,d$ as Ne,hK as $e,eS as ze,U as C,hB as Ue,nB as Be,js as Pe,a0 as I,a1 as R,a2 as Se,eQ as q,G as Re,jl as Te,A as be,hj as Ve,lh as te,s_ as Ge,tm as We,cG as je,cJ as G,jS as ke,m2 as qe,ey as W,cW as Je,jG as Ye,an as ie,s as se,f1 as Xe,be as D,h4 as Ke,tn as Qe}from"./index-BCSVvjKE.js";import{P as $,aV as J,O as j,af as Ze}from"./Geometry-CHQYtKrq.js";import{e as P}from"./mat4f64-Dk4dwAN8.js";import{t as ve}from"./glUtil-DW_knhTH.js";import{s as p,H as Ae}from"./InterleavedLayout-hEsKBZ7L.js";import{r as et,o as tt,i as it,E as st,U as nt}from"./HUDMaterial-CJ1wk24_.js";import{n as L}from"./ShaderOutput-DnYY5J1_.js";import{i as at}from"./IntersectorInterfaces-CmNINbyF.js";import{b as Y}from"./Octree-BPpZKQ9G.js";import{e as _}from"./VertexAttribute-Cq4MnHjR.js";import{e as rt}from"./mat3f64-q3fE-ZOt.js";import{i as ne,l as z,c as xe,x as U,b as ae,T as ot,u as ht,h as lt,d as re}from"./BufferView-BnloAaDm.js";import{g as ct,m as dt}from"./plane-gAgGBHhk.js";import{E as Ee}from"./VertexArrayObject-CWSP7Dtc.js";import{T as _t,E as ut,U as gt}from"./sphere-DRB5B-QR.js";import{O as ft}from"./basicInterfaces-CZwQPxTp.js";import{j as mt}from"./dehydratedFeatureUtils-CRr7ZGGS.js";import{N as pt,i as yt,m as It,v as St,J as Rt,_ as Tt}from"./DefaultMaterial-CoM1pcjY.js";import{n as bt}from"./projectVectorToVector-DV5W_8-J.js";import"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import"./ShaderBuilder-4Epc3uLW.js";import"./NormalAttribute.glsl-BIpMjOeO.js";import"./boundedPlane-D5TJwWtA.js";function X(t,e,i){return t.canvas||(t.canvas=document.createElement("canvas")),t.canvas.width=e,t.canvas.height=i,t.canvas}function vt(t){const{size:e}=t.definition,i=t.fontString(e);let s=oe.get(i);if(!s){const n=X(xt,0,0).getContext("2d");t.setFontProperties(n,e);const a=n.measureText(Et);s=new At(a.actualBoundingBoxAscent,a.actualBoundingBoxDescent),oe.set(i,s)}return s}const oe=new Map;let At=class{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(e,i){this.maxAscent=e,this.maxDescent=i}};const xt={canvas:null},Et=(()=>{let t="";for(let e=32;e<127;e++)t+=String.fromCharCode(e);return t})(),Le=1;let gi=class{constructor(e,i,s,n){this.text=e,this._alignment=i,this._parameters=s,this._maxSize=n,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${e}--${this._parameters.key}-${this._alignment}`,this._lines=e.replaceAll(" "," ").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let e=this._metrics.firstLineAscent;for(let i=0;i<this._lines.length-1;i++)e+=this._lineSpacing;return e+=this._metrics.lastLineDescent,Math.ceil(e+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(this._metricsCached==null){const e=X(he,H,H).getContext("2d"),i=this._parameters.definition.pixelRatio,s=this._fontSize*i;this._parameters.setFontProperties(e,s);let n=2*this._haloSize;const a=this._parameters.definition.font;a.style!=="italic"&&a.style!=="oblique"&&a.weight!=="bold"&&a.weight!=="bolder"||(n+=.3*e.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let r=0,l=0,o=0,h=0,d=0;this._lines.forEach((F,M)=>{const E=e.measureText(F),Q=E.width/i,Z=Q+n;this._textWidths.push(Q),this._lineWidths.push(Z),r=Math.max(r,Z),h=Math.max(h,E.actualBoundingBoxAscent/i),d=Math.max(d,E.actualBoundingBoxDescent/i),M===0&&(l=E.actualBoundingBoxAscent/i),M===this._lines.length-1&&(o=E.actualBoundingBoxDescent/i)});const c=vt(this._parameters),m=Math.max(h,c.maxAscent),g=Math.max(d,c.maxDescent),f=l,S=this._parameters.definition.font.decoration==="underline"?g:o,V=r;this._metricsCached=new Ct(f,S,m,g,V)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*Lt}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,Le)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(this._renderPixelRatio==null){const e=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(e,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(e){switch(this._alignment){case x.Left:return this._horizontalPadding;case x.Center:return(this.displayWidth-this._lineWidths[e])/2;case x.Right:return this.displayWidth-this._horizontalPadding-this._lineWidths[e]}}render(e,i,s){e.save();const n=i/=this.renderPixelRatio,a=s/=this.renderPixelRatio,r=this._haloSize,l=this._firstLineYOffset+this._metrics.firstLineAscent;i+=r,s+=l;const o=this._haloSize>0;o&&this._renderHalo(e,n,a,r,l),this._parameters.setFontProperties(e,this._renderedFontSize);for(let h=0;h<this._lines.length;++h){const d=this._lines[h],c=this._getLineXOffset(h);o&&(e.globalCompositeOperation="destination-out",e.fillStyle="rgb(0, 0, 0)",this._fillText(e,d,i+c,s),this._renderLineDecoration(e,i+c,s,this._textWidths[h])),e.globalCompositeOperation="source-over",e.fillStyle=this._parameters.textStyle,this._fillText(e,d,i+this._getLineXOffset(h),s),this._renderLineDecoration(e,i+c,s,this._textWidths[h]),s+=this._lineSpacing}if($.TEXT_SHOW_BASELINE){e.strokeStyle=le,e.setLineDash([2,2]),e.lineWidth=1;let h=a+l;for(let d=0;d<this._lines.length;++d)this._drawLine(e,[n,h],[n+this.displayWidth,h]),h+=this._lineSpacing}if($.TEXT_SHOW_BORDER&&(e.strokeStyle=le,e.setLineDash([]),e.lineWidth=1,this._drawBox(e,[n,a],[this.displayWidth,this.displayHeight])),this._hasBackground){const h=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(e,n,a,h),e.globalCompositeOperation="destination-over",e.fillStyle=this._parameters.backgroundStyle,e.fill()}e.restore()}_renderLineDecoration(e,i,s,n,a=!1){if(this._parameters.definition.font.decoration==="none"||n===0)return;const r=1,l=Math.max(this._parameters.definition.size/16,r);switch(this._parameters.definition.font.decoration){case"underline":s+=2*l;break;case"line-through":s-=.33*this._midLineAscent}const o=a?this._haloSize:0;e.strokeStyle=a?this._parameters.haloStyle:this._parameters.textStyle,e.lineWidth=this._toRenderUnit(l+2*o),e.beginPath(),e.moveTo(this._toRenderUnit(i-o),this._toRenderUnit(s)),e.lineTo(this._toRenderUnit(i+n+o),this._toRenderUnit(s)),e.stroke()}_roundedRect(e,i,s,n){i=this._toRenderUnit(i),s=this._toRenderUnit(s);const a=this.renderedWidth,r=this.renderedHeight;n!==0?(n=Oe(n,0,Math.floor(r/2)),e.beginPath(),e.moveTo(i,s+n),e.arcTo(i,s,i+n,s,n),e.lineTo(i+a-n,s),e.arcTo(i+a,s,i+a,s+n,n),e.lineTo(i+a,s+r-n),e.arcTo(i+a,s+r,i+a-n,s+r,n),e.lineTo(i+n,s+r),e.arcTo(i,s+r,i,s+r-n,n),e.closePath()):e.rect(i,s,a,r)}_renderHalo(e,i,s,n,a){const r=this.renderedWidth,l=this.renderedHeight,o=X(he,Math.max(r,H),Math.max(l,H)),h=o.getContext("2d");h.clearRect(0,0,r,l),this._parameters.setFontProperties(h,this._renderedFontSize),h.fillStyle=this._parameters.haloStyle,h.strokeStyle=this._parameters.haloStyle;const d=this._renderedHaloSize<3;h.lineJoin=d?"miter":"round",d?this._renderHaloEmulated(h,n,a):this._renderHaloNative(h,n,a);let c=a;for(let m=0;m<this._lines.length;++m){const g=this._getLineXOffset(m);this._renderLineDecoration(h,n+g,c,this._textWidths[m],!0),c+=this._lineSpacing}e.globalAlpha=this._parameters.definition.halo.color[3],e.drawImage(o,0,0,r,l,this._toRenderUnit(i),this._toRenderUnit(s),r,l),e.globalAlpha=1}_renderHaloEmulated(e,i,s){for(let n=0;n<this._lines.length;++n){const a=this._lines[n],r=this._getLineXOffset(n);for(const[l,o]of Ce)this._fillText(e,a,i+r+this._haloSize*l,s+this._haloSize*o);s+=this._lineSpacing}}_renderHaloNative(e,i,s){const n=2*this._haloSize;for(let a=0;a<this._lines.length;++a){const r=this._lines[a],l=this._getLineXOffset(a),o=5,h=.1;for(let d=0;d<o;d++){const c=1-(o-1)*h+d*h;e.lineWidth=this._toRenderUnit(c*n),this._strokeText(e,r,i+l,s)}s+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(e){return e*this.renderPixelRatio}_toRoundedRenderUnit(e){return Math.round(e*this.renderPixelRatio)}_fillText(e,i,s,n){e.fillText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_strokeText(e,i,s,n){e.strokeText(i,this._toRenderUnit(s),this._toRenderUnit(n))}_drawLine(e,i,s){e.beginPath(),e.moveTo(this._toRoundedRenderUnit(i[0])+.5,this._toRoundedRenderUnit(i[1])+.5),e.lineTo(this._toRoundedRenderUnit(s[0])+.5,this._toRoundedRenderUnit(s[1])+.5),e.stroke()}_drawBox(e,i,s){const n=this._toRenderUnit(i[0]),a=this._toRenderUnit(i[1]),r=this._toRenderUnit(s[0]),l=this._toRenderUnit(s[1]),o=Math.floor(n)+.5,h=Math.ceil(n+r)-.5,d=Math.floor(a)+.5,c=Math.ceil(a+l)-.5;e.beginPath(),e.moveTo(o,d),e.lineTo(h,d),e.lineTo(h,c),e.lineTo(o,c),e.lineTo(o,d),e.stroke()}};const Ce=[];for(let e=0;e<360;e+=360/16)Ce.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);var x;(function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"})(x||(x={}));const he={canvas:null},Lt=.2,H=512,le="rgb(255, 0, 255, 0.5)";let Ct=class{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(e,i,s,n,a){this.firstLineAscent=e,this.lastLineDescent=i,this.maxLineAscent=s,this.maxLineDescent=n,this.displayWidth=a}};const pi=Object.freeze({left:0,center:.5,right:1}),yi=Object.freeze({"bottom-left":A(0,0),bottom:A(.5,0),"bottom-right":A(1,0),left:A(0,.5),center:A(.5,.5),right:A(1,.5),"top-left":A(0,1),top:A(.5,1),"top-right":A(1,1)});function Ii(t){switch(t){case"left":return x.Left;case"right":return x.Right;default:return x.Center}}function Si(t,e){switch(e){case"bottom":return t==="left"?"bottom-left":t==="right"?"bottom-right":"bottom";case"center":return t;case"top":return t==="left"?"top-left":t==="right"?"top-right":"top"}}function Ri(t){return t==="middle"?"center":t}function Ti(t,e){switch(t){case"top":return ee(e,0,Le);case"bottom":return ee(e,0,-1);default:return Me(e,De)}}let Ot=class{constructor(e,i){this._material=e,this._repository=i,this._map=new Map}dispose(){this._map.forEach((e,i)=>{e!=null&&this._repository.release(this._material,i)})}load(e,i,s){const n=this._material.produces.get(i);if(!(n!=null&&n(s)))return null;this._map.has(s)||this._map.set(s,this._repository.acquire(this._material,i,s));const a=this._map.get(s);if(a!=null){if(a.ensureResources(e)===ft.LOADED)return a;this._repository.requestRender()}return null}},w=class{constructor(e=1/0,i=-1/0){this.near=e,this.far=i}set(e,i){this.near=e,this.far=i}union(e){e!=null&&(this.near=Math.min(this.near,e.near),this.far=Math.max(this.far,e.far))}within(e){return this.near<=e&&e<=this.far}};w.zero=new w(0,0);class Mt{constructor(e,i,s){this._elementSize=i,this._buffer=Ee.createVertex(e,ye.STATIC_DRAW),this.resize(s)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,i,s,n=0){const a=new Uint8Array(this.array,e*this.elementSize,(i-e)*this.elementSize);new Uint8Array(s.array,n*this.elementSize).set(a)}transferAll(){this._buffer.setData(this._array)}transferRange(e,i){const s=e*this._elementSize,n=i*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),s,s,n)}resize(e){const i=e*this._elementSize,s=new ArrayBuffer(i);this._array&&(e>=this._capacity?new Uint8Array(s).set(new Uint8Array(this._array)):new Uint8Array(s).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=s,this._buffer.setSize(i),this._capacity=e}}class Dt{constructor(e){this.modelOriginHi=e.getField(_.INSTANCEMODELORIGINHI,ne),this.modelOriginLo=e.getField(_.INSTANCEMODELORIGINLO,ne),this.model=e.getField(_.INSTANCEMODEL,z),this.modelNormal=e.getField(_.INSTANCEMODELNORMAL,z),this.featureAttribute=e.getField(_.INSTANCEFEATUREATTRIBUTE,xe),this.color=e.getField(_.INSTANCECOLOR,U),this.objectAndLayerIdColor=e.getField(_.INSTANCEOBJECTANDLAYERIDCOLOR,U)}}class wt{constructor(e,i){this._rctx=e,this._instanceBufferLayout=i,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,i=this._tailIndex;return e>=i?e-i:e+this._capacity-i}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){var e;return((e=this._buffer)==null?void 0:e.usedMemory)??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){p(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){p(this._updating,"not updating"),this.size<we*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){p(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),p(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){p(this._updating,"not updating"),p(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(B,Math.floor(this._capacity*Ie));this._resize(e)}_shrink(){const e=Math.max(B,Math.floor(this._capacity*Fe));this._resize(e)}_resize(e){if(p(this._updating,"not updating"),e===this._capacity)return;const i=new Mt(this._rctx,this._instanceBufferLayout.stride,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const s=this.size,n=this._compactInstances(i);p(n===s,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=n,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=i,this._view=new Dt(this._instanceBufferLayout.createView(this._buffer.array))}_compactInstances(e){const i=this._headIndex,s=this._tailIndex;return s<i?(this._buffer.copyRange(s,i,e),i-s):s>i?(this._buffer.copyRange(s,this._capacity,e),i>0&&this._buffer.copyRange(0,i,e,this._capacity-s),i+(this._capacity-s)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,i){e<i?this._buffer.transferRange(e,i):e>i&&(i>0&&this._buffer.transferRange(0,i),this._buffer.transferRange(e,this._capacity))}}const B=64;var u;function Ft(t){let e=Ae().mat4f64(_.LOCALTRANSFORM).mat4f64(_.GLOBALTRANSFORM).vec4f64(_.BOUNDINGSPHERE).vec3f64(_.MODELORIGIN).mat3f(_.INSTANCEMODEL).mat3f(_.INSTANCEMODELNORMAL).vec2f(_.MODELSCALEFACTORS);return t.includes(_.FEATUREATTRIBUTE)&&(e=e.vec4f(_.FEATUREATTRIBUTE)),t.includes(_.COLOR)&&(e=e.vec4u8(_.COLOR)),t.includes(_.OBJECTANDLAYERIDCOLOR)&&(e=e.vec4u8(_.OBJECTANDLAYERIDCOLOR)),e=e.u8(_.STATE).u8(_.LODLEVEL),e}(function(t){t[t.ALLOCATED=1]="ALLOCATED",t[t.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",t[t.VISIBLE=4]="VISIBLE",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",t[t.REMOVE=32]="REMOVE",t[t.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",t[t.ACTIVE=18]="ACTIVE"})(u||(u={}));class ce{constructor(e){this.localTransform=e.getField(_.LOCALTRANSFORM,ae),this.globalTransform=e.getField(_.GLOBALTRANSFORM,ae),this.modelOrigin=e.getField(_.MODELORIGIN,ot),this.model=e.getField(_.INSTANCEMODEL,z),this.modelNormal=e.getField(_.INSTANCEMODELNORMAL,z),this.modelScaleFactors=e.getField(_.MODELSCALEFACTORS,ht),this.boundingSphere=e.getField(_.BOUNDINGSPHERE,lt),this.featureAttribute=e.getField(_.FEATUREATTRIBUTE,xe),this.color=e.getField(_.COLOR,U),this.objectAndLayerIdColor=e.getField(_.OBJECTANDLAYERIDCOLOR,U),this.state=e.getField(_.STATE,re),this.lodLevel=e.getField(_.LODLEVEL,re)}}let O=class extends He{constructor(t,e){super(t),this.events=new Ne,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=Ft(e),this._capacity=B,this._buffer=this._layout.createBuffer(this._capacity),this._view=new ce(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const t=this._findSlot();return this._view.state.set(t,u.ALLOCATED),this._size++,this.events.emit("instances-changed"),t}removeInstance(t){const e=this._view.state;p(t>=0&&t<this._capacity&&!!(e.get(t)&u.ALLOCATED),"invalid instance handle"),this._getStateFlag(t,u.ACTIVE)?this._setStateFlags(t,u.REMOVE):this.freeInstance(t),this.events.emit("instances-changed")}freeInstance(t){const e=this._view.state;p(t>=0&&t<this._capacity&&!!(e.get(t)&u.ALLOCATED),"invalid instance handle"),e.set(t,0),this._size--}setLocalTransform(t,e,i=!0){this._view.localTransform.setMat(t,e),i&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e,i=!0){this._view.globalTransform.setMat(t,e),i&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){const e=this._view,i=y,s=T;e.localTransform.getMat(t,de),e.globalTransform.getMat(t,k);const n=$e(k,k,de);ze(i,n[12],n[13],n[14]),e.modelOrigin.setVec(t,i),Ue(s,n),e.model.setMat(t,s);const a=ct(y,n);a.sort(),e.modelScaleFactors.set(t,0,a[1]),e.modelScaleFactors.set(t,1,a[2]),Be(s,s),Pe(s,s),e.modelNormal.setMat(t,s),this._setStateFlags(t,u.TRANSFORM_CHANGED),this.events.emit("instance-transform-changed",{index:t})}getModelTransform(t,e){const i=this._view;i.model.getMat(t,T),i.modelOrigin.getVec(t,y),e[0]=T[0],e[1]=T[1],e[2]=T[2],e[3]=0,e[4]=T[3],e[5]=T[4],e[6]=T[5],e[7]=0,e[8]=T[6],e[9]=T[7],e[10]=T[8],e[11]=0,e[12]=y[0],e[13]=y[1],e[14]=y[2],e[15]=1}applyShaderTransformation(t,e){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(y,this,t),e*=Math.max(y[0],y[1],y[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(y,this,t),e*=Ht(y[0],y[1],y[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute.getVec(t,e)}setColor(t,e){this._view.color.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.objectAndLayerIdColor.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,u.VISIBLE,e),this.events.emit("instance-visibility-changed",{index:t}))}getVisible(t){return this._getStateFlag(t,u.VISIBLE)}setHighlight(t,e){const{_highlightOptionsMap:i}=this,s=i.get(t);e?e!==s&&(i.set(t,e),this._setStateFlag(t,u.HIGHLIGHT,!0),this.events.emit("instance-highlight-changed")):s&&(i.delete(t),this._setStateFlag(t,u.HIGHLIGHT,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(t){return this._getStateFlag(t,u.HIGHLIGHT)}geHighlightOptionsPrev(t){const e=this._highlightOptionsMapPrev.get(t)??null;return this._highlightOptionsMapPrev.delete(t),e}getHighlightName(t){const e=this.highlightOptionsMap.get(t)??null;return e?this._highlightOptionsMapPrev.set(t,e):this._highlightOptionsMapPrev.delete(t),e}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let i=0;i<this._capacity;++i)this.getState(i)&t&&++e;return e}_setStateFlags(t,e){const i=this._view.state;e=i.get(t)|e,i.set(t,e)}_clearStateFlags(t,e){const i=this._view.state;e=i.get(t)&~e,i.set(t,e)}_setStateFlag(t,e,i){i?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(B,Math.floor(this._capacity*Ie)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new ce(this._buffer)}_findSlot(){const t=this._view.state;let e=this._next;for(;t.get(e)&u.ALLOCATED;)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};function Ht(t,e,i){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),i))}I([R({constructOnly:!0})],O.prototype,"shaderTransformation",void 0),I([R()],O.prototype,"_size",void 0),I([R({readOnly:!0})],O.prototype,"size",null),O=I([Se("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],O);const y=C(),T=rt(),de=P(),k=P();class Nt extends Y{constructor(e,i){super(s=>_t(this._instanceData.view.boundingSphere.getVec(s,this._tmpSphere)),{maximumDepth:25}),this._instanceData=e,this._boundingSphere=i,this._tmpSphere=ut(),this._tmpMat4=P()}addInstance(e){const i=this._instanceData.view.boundingSphere,s=this._instanceData.getCombinedModelTransform(e,this._tmpMat4);q(gt(this._tmpSphere),this._boundingSphere.center,s),this._tmpSphere[3]=this._boundingSphere.radius*dt(s),i.setVec(e,this._tmpSphere),this.add([e])}removeInstance(e){this.remove([e])}}class $t{constructor(e,i){this._worldSpaceRadius=e,this._minScreenSpaceRadii=i}selectLevel(e,i,s){const n=s.computeScreenPixelSizeAt(e),a=this._worldSpaceRadius*i/n;let r=0;for(let l=1;l<this._minScreenSpaceRadii.length;++l)a>=this._minScreenSpaceRadii[l]&&(r=l);return r}}let zt=class{constructor(e,i){const s=e.renderContext.rctx,n=i.geometry,a=i.geometry.getRenderGeometry(),r=a.material;this._materials=e.materials,r.setParameters({instancedDoublePrecision:!0}),this.geometry=n,this.material=r,this.glMaterials=new Ot(r,this._materials),this.vertexBufferLayout=a.vertexBufferLayout,this.vbo=Ee.createVertex(s,ye.STATIC_DRAW,a.buffer),this.vao=new et(s,J,new Map([["geometry",ve(a.vertexBufferLayout)]]),new Map([["geometry",this.vbo]])),this.vertexCount=a.elementCount}destroy(){this.glMaterials.dispose(),this.vbo.dispose(),this.vao.dispose()}get boundingInfo(){return this.geometry.boundingInfo}get triangleCount(){return this.vertexCount/3}get usedMemory(){return 128+this.vbo.usedMemory+this.vao.usedMemory}intersect(e,i,s,n,a,r,l,o){return this.geometry.intersect(e,i,s,n,a,r,l,o)}};class K{static async create(e,i,s){const n=await Promise.allSettled(i.components.map(r=>e.controller.schedule(()=>new zt(e,r),s))),a=n.map(r=>r.status==="fulfilled"?r.value:null).filter(Re);if(Te(s)||a.length!==n.length){a.forEach(r=>r.destroy()),be(s);for(const r of n)if(r.status==="rejected")throw r.reason}return new K(i.minScreenSpaceRadius,a)}constructor(e,i){this.minScreenSpaceRadius=e,this.components=i}destroy(){this.components.forEach(e=>e.destroy())}intersect(e,i,s,n,a,r,l){this.components.forEach(o=>o.intersect(e,i,s,n,a,r,this.boundingSphere,l))}get boundingBox(){if(this._boundingBox==null){const e=Ve();this.components.forEach(i=>{i.boundingInfo!=null&&(te(e,i.boundingInfo.bbMin),te(e,i.boundingInfo.bbMax))}),this._boundingBox=e}return this._boundingBox}get boundingSphere(){if(this._boundingSphere==null){const e=this.boundingBox,i=C();Ge(e,i),this._boundingSphere={center:i,radius:.5*We(e)}}return this._boundingSphere}get triangleCount(){return this.components.reduce((e,i)=>e+i.triangleCount,0)}}const Ut=t=>{const e=t.baseBoundingSphere.radius,i=t.levels.map(s=>s.minScreenSpaceRadius);return new $t(e,i)};let b=class extends tt{constructor(t,e){super(t),this.type=at.LOD,this.isGround=!1,this._levels=[],this._defaultRenderInstanceData=new Array,this._highlightRenderInstanceDataMap=new Map,this._instanceIndex=0,this._cycleStartIndex=0,this._slicePlane=!1,this._camera=new it,this._updateCyclesWithStaticCamera=-1,this._needFullCycle=!1,this.produces=new Map([[j.OPAQUE_MATERIAL,i=>this._produces(i)],[j.TRANSPARENT_MATERIAL,i=>!!this._hasTransparentLevels()&&this._produces(i)]]),this._instanceData=new O({shaderTransformation:t.shaderTransformation},t.optionalFields),this.addHandles(e.registerTask(je.LOD_RENDERER,this))}initialize(){this._instanceBufferLayout=Pt(this.optionalFields),this._glInstanceBufferLayout=ve(this._instanceBufferLayout,1),this.addHandles([this._instanceData.events.on("instances-changed",()=>this._requestUpdateCycle()),this._instanceData.events.on("instance-transform-changed",({index:t})=>{this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(t)}),this._instanceData.events.on("instance-visibility-changed",({index:t})=>{this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(t)}),this._instanceData.events.on("instance-highlight-changed",()=>this._requestUpdateCycle(!0))])}get _allRenderInstanceData(){const t=[this._defaultRenderInstanceData];for(const e of this._highlightRenderInstanceDataMap)t.push(e[1]);return t}get _allRenderInstanceDataExceptHighlightShadow(){const t=[this._defaultRenderInstanceData];for(const e of this._highlightRenderInstanceDataMap)e[0]!==G&&t.push(e[1]);return t}hasHighlightOptions(t){return this._highlightRenderInstanceDataMap.has(t)}get _enableLevelSelection(){return this.symbol.levels.length>1}get levels(){return this._levels}get baseBoundingBox(){return this._levels[this._levels.length-1].boundingBox}get baseBoundingSphere(){return this._levels[this._levels.length-1].boundingSphere}get baseMaterial(){return this._levels[this._levels.length-1].components[0].material}get slicePlaneEnabled(){return this._slicePlane}set slicePlaneEnabled(t){this._slicePlane=t}get layerUid(){return this.metadata.layerUid}get instanceData(){return this._instanceData}get hasEmissions(){return this._levels.some(t=>t.components.some(e=>e.material.hasEmissions))}get usedMemory(){return this._allRenderInstanceData.reduce((t,e)=>e.reduce((i,s)=>i+s.usedMemory,t),this._levels.reduce((t,e)=>t+e.components.reduce((i,s)=>i+s.usedMemory,0),0))}get renderStats(){const t=this._instanceData.size,e=[];return this._levels.forEach((i,s)=>{const n=this._allRenderInstanceData[0][s].size+this._allRenderInstanceData[1][s].size,a=i.triangleCount;e.push({renderedInstances:n,renderedTriangles:n*a,trianglesPerInstance:a})}),{totalInstances:t,renderedInstances:e.reduce((i,s)=>i+s.renderedInstances,0),renderedTriangles:e.reduce((i,s)=>i+s.renderedTriangles,0),levels:e}}_createRenderInstanceDataArray(t=[]){const{rctx:e}=this._context.renderContext;return this.symbol.levels.map(i=>{t.push(new wt(e,this._instanceBufferLayout))}),t}async initializeRenderContext(t,e){this._context=t,this._createRenderInstanceDataArray(this._defaultRenderInstanceData);const i=await Promise.allSettled(this.symbol.levels.map(n=>K.create(t,n,e))),s=i.map(n=>n.status==="fulfilled"?n.value:null).filter(Re);if(Te(e)||s.length!==i.length){s.forEach(n=>n.destroy()),be(e);for(const n of i)if(n.status==="rejected")throw n.reason}this._levels=s,this._levelSelector=Ut(this)}uninitializeRenderContext(){this._invalidateOctree(),this._levels.forEach(t=>t.destroy()),this._defaultRenderInstanceData.forEach(t=>t.destroy()),this._highlightRenderInstanceDataMap.forEach(t=>t.forEach(e=>e.destroy()))}_hasTransparentLevels(){return this._levels.some(t=>t.components.some(e=>{const i=e.material.produces.get(j.TRANSPARENT_MATERIAL);return i==null?void 0:i(L.Color)}))}hasHighlights(){return ke(this._highlightRenderInstanceDataMap,t=>t.some(e=>e.size>0))}_produces(t){return(t!==L.Highlight||this.hasHighlights())&&(t!==L.ShadowHighlight||this.hasHighlightOptions(G))}prepareRender(t){if(!$.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const e=t.bind.contentCamera.equals(this._camera);this._camera.copyFrom(t.bind.contentCamera),e||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(qe),this._needFullCycle=!1)}}acquireTechniques(t){if(!this.baseMaterial.visible||!this.baseMaterial.isVisibleForOutput(t.output))return null;const e=this._getInstanceDatas(t);if(!e)return null;const i=new Array,s=this.levels;return e.forEach(n=>s.forEach(({components:a},r)=>a.forEach(l=>i.push(this._beginComponent(t,n[r],l))))),i}render(t,e){const i=this._getInstanceDatas(t);if(!i||e==null)return;let s=0;t.rctx.bindVAO();const n=this.levels;i.forEach(a=>n.forEach(({components:r},l)=>r.forEach(o=>this._renderComponent(t,e[s++],a[l],o,l))))}_getInstanceDatas(t){var l;const{output:e,bind:i}=t,s=e===L.Highlight,n=e===L.ShadowHighlight,a=!s&&!n,r=e!==L.ShadowExcludeHighlight;if(a)return r?this._allRenderInstanceData:this._allRenderInstanceDataExceptHighlightShadow;if(r){if(s){const h=(l=i.highlight)==null?void 0:l.name;if(!h)return null;const d=this._highlightRenderInstanceDataMap.get(h);return d?[d]:null}const o=this._highlightRenderInstanceDataMap.get(G);return n?o?[o]:null:Array.from(this._highlightRenderInstanceDataMap.values())}return null}intersect(t,e,i,s){if(!this.baseMaterial.visible||this._octree==null)return;const n=C();W(n,s,i);const a=r=>{this._instanceData.getCombinedModelTransform(r,ge),t.transform.set(ge),q(fe,i,t.transform.inverse),q(me,s,t.transform.inverse);const l=this._instanceData.getState(r),o=this._instanceData.getLodLevel(r),h=this._levels.length;p(!!(l&u.ACTIVE),"invalid instance state"),p(o>=0&&o<h,"invaid lod level"),this._levels[o].intersect(t,e,fe,me,r,this.metadata,h)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(a):this._octree.forEachAlongRay(i,n,a)}notifyShaderTransformationChanged(){this._invalidateOctree(),this._requestUpdateCycle()}get _octree(){var t;if(this._octreeCached==null){const e=this._instanceData,i=(t=e.view)==null?void 0:t.state;if(!i)return null;this._octreeCached=new Nt(e,this.baseBoundingSphere);for(let s=0;s<e.capacity;++s)i.get(s)&u.ACTIVE&&this._octreeCached.addInstance(s)}return this._octreeCached}_invalidateOctree(){this._octreeCached=Je(this._octreeCached)}queryDepthRange(t){if(this._octree==null)return new w;const e=t.viewForward,i=this._octree.findClosest(e,Y.DepthOrder.FRONT_TO_BACK,t.frustum),s=this._octree.findClosest(e,Y.DepthOrder.BACK_TO_FRONT,t.frustum);if(i==null||s==null)return new w;const n=t.eye,a=this._instanceData.view;a.boundingSphere.getVec(i,v),W(v,v,n);const r=ie(v,e)-v[3];a.boundingSphere.getVec(s,v),W(v,v,n);const l=ie(v,e)+v[3];return new w(r,l)}_requestUpdateCycle(t=!1){this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,t&&(this._needFullCycle=!0,this._context.requestRender())}_startUpdateCycle(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach(t=>t.forEach(e=>e.startUpdateCycle()))}get running(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}runTask(t){const{_enableLevelSelection:e,_camera:i,_levelSelector:s}=this;this._allRenderInstanceData.forEach(d=>d.forEach(c=>c.beginUpdate()));const n=this._instanceData,a=n.view;let r=n.size;const l=n.capacity;let o=this._instanceIndex;const h=Math.ceil(l/500);for(let d=0;d<r&&!t.done;++d){o===this._cycleStartIndex&&this._startUpdateCycle();const c=a.state.get(o);let m=0;if(!(c&u.ALLOCATED)){o=o+1===l?0:o+1,r++;continue}const g=a.lodLevel.get(o);if(c&u.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[g].freeTail(),c&u.HIGHLIGHT_ACTIVE){const f=n.geHighlightOptionsPrev(o);if(f){const S=this._highlightRenderInstanceDataMap.get(f);if(!S)throw new se("Internal error in lodRenderer");S[g].freeTail()}}if(c&u.REMOVE)n.freeInstance(o);else if(c&u.VISIBLE){let f=0;if(e&&(a.modelOrigin.getVec(o,ue),f=s.selectLevel(ue,n.getCombinedMedianScaleFactor(o),i)),m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),f>=0)if(c&u.HIGHLIGHT){const S=n.getHighlightName(o);if(S){const V=()=>{const M=this._createRenderInstanceDataArray();return M.forEach(E=>E.beginUpdate()),M},F=Xe(this._highlightRenderInstanceDataMap,S,V);if(f>=F.length)throw new se(`LodRenderer internal error - missing lodLevel ${f}`);_e(F[f],a,o)}m|=u.HIGHLIGHT_ACTIVE}else _e(this._defaultRenderInstanceData[f],a,o),m|=u.DEFAULT_ACTIVE;a.state.set(o,m),a.lodLevel.set(o,f)}else m=c&~(u.ACTIVE|u.TRANSFORM_CHANGED),a.state.set(o,m);if(this._octreeCached!=null){const f=!!(c&u.ACTIVE),S=!!(m&u.ACTIVE);!f&&S?this._octreeCached.addInstance(o):f&&!S?this._octreeCached.removeInstance(o):f&&S&&c&u.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(o),this._octreeCached.addInstance(o))}o=o+1===l?0:o+1,o%h==0&&t.madeProgress()}this._instanceIndex=o,this._allRenderInstanceData.forEach(d=>d.forEach(c=>c.endUpdate())),this._context.requestRender()}_beginComponent(t,e,i){if(e.size===0)return null;const s=i.glMaterials.load(t.rctx,t.bind.slot,t.output);return s==null?void 0:s.beginSlot(t.bind)}_renderComponent(t,e,i,s,n){if(!e)return;const{bind:a,rctx:r}=t;r.runAppleAmdDriverHelper();const l=r.bindTechnique(e,a,s.material.parameters,Vt);r.bindVAO(s.vao),e.ensureAttributeLocations(s.vao),$.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&t.output===L.Color&&(l.setUniform4fv("externalColor",pe[Math.min(n,pe.length-1)]),l.setUniform1i("colorMixMode",Ze.replace));const o=i.capacity,h=i.headIndex,d=i.tailIndex,c=i.firstIndex,m=this._glInstanceBufferLayout,g=(f,S)=>{Ke(r,J,i.buffer,m,f),r.drawArraysInstanced(e.primitiveType,0,s.vertexCount,S-f),Qe(r,J,i.buffer,m)};s.material.parameters.transparent&&c!=null?h>d?(p(c>=d&&c<=h,"invalid firstIndex"),g(c,h),g(d,c)):h<d&&(c<=h?(p(c>=0&&c<=h,"invalid firstIndex"),g(c,h),g(d,o),g(0,c)):(p(c>=d&&c<=o,"invalid firstIndex"),g(c,o),g(0,h),g(d,c))):h>d?g(d,h):h<d&&(g(0,h),g(d,o)),r.bindVAO(null)}};function _e(t,e,i){const s=t.allocateHead();Bt(e,i,t.view,s)}function Bt(t,e,i,s){mt(t.modelOrigin,e,i.modelOriginHi,i.modelOriginLo,s),i.model.copyFrom(s,t.model,e),i.modelNormal.copyFrom(s,t.modelNormal,e),t.color&&i.color&&i.color.copyFrom(s,t.color,e),t.objectAndLayerIdColor&&i.objectAndLayerIdColor&&i.objectAndLayerIdColor.copyFrom(s,t.objectAndLayerIdColor,e),t.featureAttribute&&i.featureAttribute&&i.featureAttribute.copyFrom(s,t.featureAttribute,e)}function Pt(t){let e=Ae().vec3f(_.INSTANCEMODELORIGINHI).vec3f(_.INSTANCEMODELORIGINLO).mat3f(_.INSTANCEMODEL).mat3f(_.INSTANCEMODELNORMAL);return t!=null&&t.includes("featureAttribute")&&(e=e.vec4f(_.INSTANCEFEATUREATTRIBUTE)),t!=null&&t.includes("color")&&(e=e.vec4u8(_.INSTANCECOLOR)),t!=null&&t.includes("objectAndLayerIdColor")&&(e=e.vec4u8(_.INSTANCEOBJECTANDLAYERIDCOLOR)),e}I([R({constructOnly:!0})],b.prototype,"symbol",void 0),I([R({constructOnly:!0})],b.prototype,"optionalFields",void 0),I([R({constructOnly:!0})],b.prototype,"metadata",void 0),I([R({constructOnly:!0})],b.prototype,"shaderTransformation",void 0),I([R()],b.prototype,"_instanceData",void 0),I([R()],b.prototype,"_cycleStartIndex",void 0),I([R({readOnly:!0})],b.prototype,"_enableLevelSelection",null),I([R()],b.prototype,"_updateCyclesWithStaticCamera",void 0),I([R({readOnly:!0})],b.prototype,"running",null),b=I([Se("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],b);const ue=C(),v=Ye(),ge=P(),fe=C(),me=C(),pe=[D(1,0,1,1),D(0,0,1,1),D(0,1,0,1),D(1,1,0,1),D(1,0,0,1)],Vt=new pt;function xi(t,e,i){return!!bt(t,e,N,i.spatialReference)&&(i.x=N[0],i.y=N[1],i.z=N[2],!0)}const N=C(),Ei=Object.freeze(Object.defineProperty({__proto__:null,build:yt},Symbol.toStringTag,{value:"Module"})),Li=Object.freeze(Object.defineProperty({__proto__:null,build:It,getRadius:St},Symbol.toStringTag,{value:"Module"})),Ci=Object.freeze(Object.defineProperty({__proto__:null,build:Rt},Symbol.toStringTag,{value:"Module"})),Oi=Object.freeze(Object.defineProperty({__proto__:null,build:Tt},Symbol.toStringTag,{value:"Module"})),Mi=Object.freeze(Object.defineProperty({__proto__:null,build:st,calculateAnchorPosition:nt},Symbol.toStringTag,{value:"Module"}));export{Ci as D,Mi as H,Oi as R,Ei as S,xi as a,X as b,Li as c,vt as e,Ii as f,Ti as h,pi as i,b as k,Si as m,gi as r,yi as s,Ot as t,Ri as u};
