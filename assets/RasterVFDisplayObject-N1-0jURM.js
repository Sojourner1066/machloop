import{dZ as $,bG as p,A as W,bn as w,bI as E,bH as D,d7 as mt,de as pt,db as ft,dc as _t,j7 as C,jx as tt,ba as yt,ab as et,aD as G,o2 as gt,jd as B,jb as F,je as at,dq as st,cg as vt,z as wt,c_ as xt,a0 as _,a1 as g,a2 as it,cQ as U,a8 as St,jw as N,j9 as bt,jc as O,lu as At,ja as Dt}from"./index-BCSVvjKE.js";import{E as M,o as L}from"./VertexArrayObject-CWSP7Dtc.js";import{t as x}from"./VertexElementDescriptor-BLyltQyJ.js";import{c as Z,d as Q,_ as J}from"./dataUtils-BSqcJ1ng.js";import{t as rt,n as Mt}from"./WGLContainer-B7ZgRvVt.js";import{e as nt}from"./Container-CNbOd1fT.js";import{$ as Rt}from"./Utils-D4O3KAMI.js";function zt(s){const t=ot(q(s)),e=t,a=!0,i=Math.max(t/2,5),r=Math.round($(s.maxPathLength)/i)+1,o=10,{density:n}=s;return{smoothing:$(s.smoothing),interpolate:!0,velocityScale:s.flowRepresentation==="flow-from"?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:a,lineCollisionWidth:e,lineSpacing:o,density:n}}function ot(s){return s.kind==="constant"?s.value[0]:s.values[s.values.length-1]}function K(s){const t=s.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function $t(s){return{kind:"constant",value:[.1,.1,.1,1]}}function q(s){if(!s.hasVisualVariables("size"))return{kind:"constant",value:[$(s.trailWidth)]};const t=s.getVisualVariablesForType("size")[0],e=[],a=[];let i;if(t.stops){for(const r of t.stops)e.push(r.value),a.push($(r.size));i=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),a.push($(t.minSize),$(t.maxSize)),i=2;return{kind:"ramp",stops:e,values:a,count:i}}function Pt(s){if(!s.hasVisualVariables("color"))return{kind:"constant",value:K(s.color)};const t=s.getVisualVariablesForType("color")[0],e=[],a=[];for(const i of t.stops)e.push(i.value),Array.prototype.push.apply(a,K(i.color));return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function Vt(s){if(!s.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=s.getVisualVariablesForType("opacity")[0],e=[],a=[];for(const i of t.stops)e.push(i.value),a.push(i.opacity);return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function j(s,t,e,a){switch(t){case"int":s.setUniform1iv(e,a);break;case"float":s.setUniform1fv(e,a);break;case"vec2":s.setUniform2fv(e,a);break;case"vec3":s.setUniform3fv(e,a);break;case"vec4":s.setUniform4fv(e,a)}}function b(s,t,e,a){a.kind==="constant"?j(s,e,`u_${t}`,a.value):(j(s,"float",`u_${t}_stops`,a.stops),j(s,e,`u_${t}_values`,a.values),s.setUniform1i(`u_${t}_count`,a.count))}function Tt(s,t){let e=!0;return e=e&&s.collisions===t.collisions,e=e&&s.density===t.density,e=e&&s.interpolate===t.interpolate,e=e&&s.lineCollisionWidth===t.lineCollisionWidth,e=e&&s.lineSpacing===t.lineSpacing,e=e&&s.maxTurnAngle===t.maxTurnAngle,e=e&&s.minSpeedThreshold===t.minSpeedThreshold,e=e&&s.segmentLength===t.segmentLength,e=e&&s.smoothing===t.smoothing,e=e&&s.velocityScale===t.velocityScale,e=e&&s.verticesPerLine===t.verticesPerLine,e}function lt(s,t){return s===t||s!=null&&t!=null&&s.equals(t)}function ct(s,t){if(!Tt(s.simulationSettings,t.simulationSettings)||!lt(s.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&s.loadImagery===t.loadImagery,e=e&&s.createFlowMesh===t.createFlowMesh,e=e&&s.color.kind===t.color.kind,e=e&&s.opacity.kind===t.opacity.kind,e=e&&s.size.kind===t.size.kind,e}let Et=class dt{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof dt)||!lt(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:i}=t;W(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e);return new It(r,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.bindTexture(a.texture,0),r.setUniform1i("u_texture",0),r.setUniform1f("u_Min",a.min),r.setUniform1f("u_Max",a.max),b(r,"color","vec4",this._params.color),b(r,"opacity","float",this._params.opacity),i.bindVAO(a.vertexArray),i.drawArrays(E.TRIANGLE_STRIP,0,4)}};const k=new Map;k.set("a_position",0),k.set("a_texcoord",1);const Ut=new Map([["geometry",[new x("a_position",2,p.UNSIGNED_SHORT,0,8),new x("a_texcoord",2,p.UNSIGNED_SHORT,4,8)]]]),Ot={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:k};class It{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:i}=this._flowData,r=M.createVertex(e,D.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,i,0,0,a,i,1,0])),o=new Map([["geometry",r]]),n=new L(e,k,Ut,o),l=[];this._values.color.kind==="ramp"&&l.push("vvColor"),this._values.opacity.kind==="ramp"&&l.push("vvOpacity");const u=t.getProgram(Ot,l);let m=1e6,c=-1e6;for(let d=0;d<i;d++)for(let h=0;h<a;h++)if(this._flowData.mask[d*a+h]!==0){const S=this._flowData.data[2*(d*a+h)],A=this._flowData.data[2*(d*a+h)+1],R=Math.sqrt(S*S+A*A);m=Math.min(m,R),c=Math.max(c,R)}const f=new Uint8Array(4*a*i);for(let d=0;d<i;d++)for(let h=0;h<a;h++)if(this._flowData.mask[d*a+h]!==0){const S=this._flowData.data[2*(d*a+h)],A=this._flowData.data[2*(d*a+h)+1],R=(Math.sqrt(S*S+A*A)-m)/(c-m);f[4*(d*a+h)]=255*R,f[4*(d*a+h)+1]=0,f[4*(d*a+h)+2]=0,f[4*(d*a+h)+3]=255}else f[4*(d*a+h)]=0,f[4*(d*a+h)+1]=0,f[4*(d*a+h)+2]=0,f[4*(d*a+h)+3]=0;const v=new mt;v.internalFormat=pt.RGBA,v.wrapMode=ft.CLAMP_TO_EDGE,v.flipped=!0,v.width=a,v.height=i;const T=new _t(e,v,f);this.vertexArray=n,this.program=u,this.texture=T,this.min=m,this.max=c,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}let Ft=class ht{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof ht&&ct(this._params,t._params)}async load(t,e){const{extent:a,size:i}=t;W(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,r,e);return new Lt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(r,"color","vec4",this._params.color),b(r,"opacity","float",this._params.opacity),b(r,"size","float",this._params.size),i.bindVAO(a.vertexArray),i.drawElements(E.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}};const P=new Map;P.set("a_xyts0",0),P.set("a_xyts1",1),P.set("a_typeIdDurationSeed",2),P.set("a_extrudeInfo",3);const Ct=new Map([["geometry",[new x("a_xyts0",4,p.FLOAT,0,64),new x("a_xyts1",4,p.FLOAT,16,64),new x("a_typeIdDurationSeed",4,p.FLOAT,32,64),new x("a_extrudeInfo",4,p.FLOAT,48,64)]]]),kt={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:P};let Lt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=M.createVertex(e,D.STATIC_DRAW,this._vertexData),i=M.createIndex(e,D.STATIC_DRAW,this._indexData),r=new Map([["geometry",a]]),o=new L(e,P,Ct,r,i),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const l=t.getProgram(kt,n);this.vertexArray=o,this.program=l,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}},Nt=class ut{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof ut)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map(i=>i.load(t,e)));return new jt(a)}render(t,e,a){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,e,a.resources[i])}},jt=class{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}};class H{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof H&&ct(this._params,t._params)}async load(t,e){const{extent:a,size:i}=t;W(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,r,e);return new Wt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),b(r,"color","vec4",this._params.color),b(r,"opacity","float",this._params.opacity),b(r,"size","float",this._params.size),i.bindVAO(a.vertexArray),i.drawElements(E.TRIANGLES,a.indexCount,p.UNSIGNED_INT,0)}}const V=new Map;V.set("a_positionAndSide",0),V.set("a_timeInfo",1),V.set("a_extrude",2),V.set("a_speed",3);const Gt=new Map([["geometry",[new x("a_positionAndSide",3,p.FLOAT,0,36),new x("a_timeInfo",3,p.FLOAT,12,36),new x("a_extrude",2,p.FLOAT,24,36),new x("a_speed",1,p.FLOAT,32,36)]]]),qt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:V};let Wt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=M.createVertex(e,D.STATIC_DRAW,this._vertexData),i=M.createIndex(e,D.STATIC_DRAW,this._indexData),r=new Map([["geometry",a]]),o=new L(e,V,Gt,r,i),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity"),this._values.size.kind==="ramp"&&n.push("vvSize");const l=t.getProgram(qt,n);this.vertexArray=o,this.program=l,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};const Ht=4,Bt=1,Zt=.5,Qt=!0,Jt=!0,Kt=2.3;function Xt(s,t){const{flowSpeed:e,trailLength:a}=s,i=zt(s);let r=null;const o={opacity:Vt(s),size:q(s)};let n=Pt(s);if(s.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});const m={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};r=new Et(m),o.color=$t()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:a,flowSpeed:e,featheringSize:Bt,featheringOffset:Zt,introFade:Qt,fadeToZero:Jt,decayRate:Kt,color:o.color,opacity:o.opacity,size:o.size},u=s.trailCap==="butt"||ot(q(s))<=Ht?new H(l):new Ft(l);return r!=null?new Nt([r,u]):u}class Yt extends rt{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:C(),displayViewMat3:C()}}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(tt.EQUAL,0,255)}draw(t,e){const{requestRender:a,allowDelayedRender:i}=t,{displayData:r}=e;if(r==null||(r.state.name==="loaded"&&r.attach({context:t.context,getProgram:(n,l)=>t.painter.materialManager.getProgram(n,l)}),r.state.name!=="attached"))return;const o=r.state.resources;!i||o.ready||a==null?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=t.state.displayViewMat3,r.flowStyle.render({context:t.context,getProgram:(n,l)=>t.painter.materialManager.getProgram(n,l)},this._visualState,o),r.flowStyle.animated&&a!=null&&a()):a()}}class te extends Mt{constructor(){super(...arguments),this.flowStyle=null}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[Yt],target:()=>this.children,drawPhase:yt.MAP});return[...super.prepareRenderPasses(t),e]}}class ee{constructor(t,e,a,i){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if(this.state.name!=="loaded")return void et.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class ae extends nt{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){this._displayData!=null&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(e==null)return;const a=e.extent.xmin,i=e.extent.ymax,r=[0,0];t.toScreen(r,[a,i]);const o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=G(t.rotation),{displayViewScreenMat3:l}=this.transforms;gt(l,[-1,1,0]),B(l,l,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),F(l,l,[r[0],r[1],0]),at(l,l,n),B(l,l,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{displayViewScreenMat3:C()}}}const se=1.15;let z=class extends st{constructor(t){super(t),this._flowDisplayObject=new ae,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(t){const{flowStyle:e}=this.flowContainer;if(e==null)return void this._clear();const{extent:a,rotation:i,resolution:r,pixelRatio:o}=t.state,n=re(a,i);n.expand(se);const l=[Math.round((n.xmax-n.xmin)/r),Math.round((n.ymax-n.ymin)/r)],u=new ee(e,n,l,o);if(this._loading!=null){if(this._loading.update(u))return;this._loading.detach(),this._loading=null}this._flowDisplayObject.displayData!=null&&this._flowDisplayObject.displayData.update(u)||(u.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},m=>{vt(m)||(et.getLogger(this).error("A resource failed to load.",m),this._loading=null)}),this._loading=u)}_clear(){this._flowDisplayObject.clear(),this._loading!=null&&(this._loading.detach(),this._loading=null)}};_([g()],z.prototype,"_loading",void 0),_([g()],z.prototype,"flowContainer",void 0),_([g()],z.prototype,"updating",null),z=_([it("esri.views.2d.engine.flow.FlowStrategy")],z);const ie=z;function re(s,t){const e=new wt({x:(s.xmax+s.xmin)/2,y:(s.ymax+s.ymin)/2,spatialReference:s.spatialReference}),a=s.xmax-s.xmin,i=s.ymax-s.ymin,r=Math.abs(Math.cos(G(t))),o=Math.abs(Math.sin(G(t))),n=r*a+o*i,l=o*a+r*i,u=new xt({xmin:e.x-n/2,ymin:e.y-l/2,xmax:e.x+n/2,ymax:e.y+l/2,spatialReference:s.spatialReference});return u.centerAt(e),u}let y=class extends st{constructor(){super(...arguments),this._loadImagery=(s,t,e,a,i)=>Z(this.layer,s,t,e,a,i),this._createFlowMesh=(s,t,e,a)=>this.layer.createFlowMesh({meshType:s,flowData:e,simulationSettings:t},{signal:a}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:s}=this,t=()=>{this._loadImagery=(e,a,i,r,o)=>Z(s,e,a,i,r,o),this._updateVisualization()};"multidimensionalDefinition"in s?this.addHandles(U(()=>s.multidimensionalDefinition,t)):this.addHandles([U(()=>s.mosaicRule,t),U(()=>s.rasterFunction,t),U(()=>s.definitionExpression,t)]),this.container=new te,this._strategy=new ie({flowContainer:this.container}),this._updateVisualization()}detach(){var s;this._strategy.destroy(),(s=this.container)==null||s.removeAllChildren(),this.container=null,this.removeHandles()}update(s){s.stationary?this._strategy.update(s):this.layerView.requestUpdate()}hitTest(s){return new St({attributes:{},geometry:s.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const s=this.layer.renderer;if(s==null||s.type!=="flow")return;const t=Xt(s,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};_([g()],y.prototype,"_strategy",void 0),_([g()],y.prototype,"attached",void 0),_([g()],y.prototype,"container",void 0),_([g()],y.prototype,"layer",void 0),_([g()],y.prototype,"layerView",void 0),_([g()],y.prototype,"type",void 0),_([g()],y.prototype,"updating",null),_([g()],y.prototype,"timeExtent",void 0),y=_([it("esri.views.2d.engine.flow.FlowView2D")],y);const ge=y,I=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),X=new Float32Array([0,92/255,230/255,1]),ne={beaufort_ft:I,beaufort_m:I,beaufort_km:I,beaufort_mi:I,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:X,single_arrow:X,wind_speed:new Float32Array([0,0,0,1])},Y=[0,20];class ve extends rt{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(w.ONE,w.ONE_MINUS_SRC_ALPHA,w.ONE,w.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(N.KEEP,N.KEEP,N.REPLACE)}draw(t,e){if(e.source==null||e.source.validPixelCount===0)return;const{context:a,timeline:i}=t;if(i.begin(this.name),a.setStencilFunction(tt.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),t.renderPass==="scalar"){const r=e.vaoData.scalar;r&&this._drawScalars(t,e,r.vao,r.elementCount)}else{const r=e.vaoData.magdir;r&&this._drawTriangles(t,e,r.vao,r.elementCount)}i.end(this.name)}_drawTriangles(t,e,a,i){const{context:r,painter:o,requestRender:n,allowDelayedRender:l}=t,{symbolizerParameters:u}=e,m=u.dataRange?["dataRange"]:[];u.rotationType==="geographic"&&m.push("rotationGeographic");const c=o.materialManager.getProgram(this._desc.magdir,m);if(l&&n!=null&&!c.compiled)return void n();r.useProgram(c);const{coordScale:f,opacity:v,transforms:T}=e;c.setUniform2fv("u_coordScale",f),c.setUniform1f("u_opacity",v),c.setUniformMatrix3fv("u_dvsMat3",T.displayViewScreenMat3);const{style:d,dataRange:h,rotation:S,symbolPercentRange:A}=u;c.setUniform4fv("u_colors",ne[d]),c.setUniform2fv("u_dataRange",h||Y),c.setUniform1f("u_rotation",S),c.setUniform2fv("u_symbolPercentRange",A);const R=this._getSymbolSize(t,e);c.setUniform2fv("u_symbolSize",R),r.bindVAO(a),r.drawElements(E.TRIANGLES,i,p.UNSIGNED_INT,0)}_drawScalars(t,e,a,i){const{context:r,painter:o,requestRender:n,allowDelayedRender:l}=t,{symbolizerParameters:u}=e,m=[];u.style==="wind_speed"?m.push("innerCircle"):u.dataRange&&m.push("dataRange"),u.rotationType==="geographic"&&m.push("rotationGeographic");const c=o.materialManager.getProgram(this._desc.scalar,m);if(l&&n!=null&&!c.compiled)return void n();r.useProgram(c);const{coordScale:f,opacity:v,transforms:T}=e;c.setUniform2fv("u_coordScale",f),c.setUniform1f("u_opacity",v),c.setUniformMatrix3fv("u_dvsMat3",T.displayViewScreenMat3);const{dataRange:d,symbolPercentRange:h}=u;c.setUniform2fv("u_dataRange",d||Y),c.setUniform2fv("u_symbolPercentRange",h);const S=this._getSymbolSize(t,e);c.setUniform2fv("u_symbolSize",S),r.bindVAO(a),r.drawElements(E.TRIANGLES,i,p.UNSIGNED_INT,0)}_getSymbolSize(t,e){const a=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:i}=e.symbolizerParameters;return[i/(Math.round((e.width-e.offset[0])/i)*i)/a,i/(Math.round((e.height-e.offset[1])/i)*i)/a]}}class we extends nt{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){var t,e;this.vaoData!=null&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){var t,e;this._vaoInvalidated||this.vaoData==null||((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,this.source!=null&&this.vaoData==null){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const a=Q(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a);this.vaoData={magdir:i}}break;case"simple_scalar":{const a=J(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a);this.vaoData={scalar:i}}break;case"wind_speed":{const a=Q(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a),r=J(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,r);this.vaoData={magdir:i,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{displayViewScreenMat3:C()}}setTransform(t){const e=bt(this.transforms.displayViewScreenMat3),[a,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,n=r*this.height,l=Math.PI*this.rotation/180;F(e,e,O(a,i)),F(e,e,O(o/2,n/2)),at(e,e,-l),F(e,e,O(-o/2,-n/2)),At(e,e,O(o,n)),Dt(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:i}=e,r=M.createVertex(t,D.STATIC_DRAW,new Float32Array(a)),o=M.createIndex(t,D.STATIC_DRAW,new Uint32Array(i)),n=Rt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:p.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:p.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:p.FLOAT,normalized:!1}]});return{vao:new L(t,n.attributes,n.bufferLayouts,new Map([["geometry",r]]),o),elementCount:i.length}}}export{ge as a,ve as d,we as f};
