import{T as B,c_ as j,a0 as c,a1 as g,a2 as N,cX as k,z as A,d7 as U,db as E,de as O,d9 as F,j1 as $,dc as W,P as H,cD as P,a6 as K,cQ as Q,jn as X,cW as I,cZ as J,aX as L,jo as q,Q as Y,f_ as Z,jp as tt}from"./index-BCSVvjKE.js";import{b as M,g as et,d as it}from"./kmlUtils-BAHszfvD.js";import{g as at,f as st,S as rt}from"./BitmapTechnique-Ctzfck9e.js";import{r as ot}from"./BitmapContainer-BAc12lbc.js";import{S as nt,y as lt}from"./LayerView-CLlz1xmb.js";import{t as R}from"./GraphicContainer-BLgif4L4.js";import{A as T}from"./GraphicsView2D-BCpuNJlL.js";import{z as pt,a as ht}from"./rasterProjectionHelper-BBf77JYc.js";import{n as mt}from"./VertexStream-CoujGsoS.js";import{y as ct,o as dt}from"./RenderingContext-CfXHrYzi.js";import{x as ut}from"./FramebufferObject-CHpIv-62.js";import{m as gt}from"./rasterUtils-Brgd3IQ_.js";import"./Container-CNbOd1fT.js";import"./GraphShaderModule-CGrQHD0I.js";import"./ProgramTemplate-7-I-ic88.js";import"./ShaderBuilder-4Epc3uLW.js";import"./BindType-BBwFZqyN.js";import"./TechniqueType-uMFRS8dR.js";import"./WGLContainer-B7ZgRvVt.js";import"./Utils-D4O3KAMI.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./VertexArrayObject-CWSP7Dtc.js";import"./memoryEstimations-B7_Jwj04.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BnwSCDGd.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-D8tC_IN5.js";import"./OptimizedFeature-CAs8C_6w.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-0c-tok9A.js";import"./AGraphicContainer-C5AAy4ti.js";import"./TechniqueInstance-CIvSNEhV.js";import"./UpdateTracking2D-BabZ4s23.js";import"./BidiEngine-QXap_35O.js";import"./GeometryUtils-UTnbVDfc.js";import"./rasterizingUtils-DiZURDwE.js";import"./floatRGBA-CFy-2SA-.js";import"./Rect-CUzevAry.js";import"./TileContainer-DRvhRlwz.js";import"./FeatureCommandQueue-DsslgJpE.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-DF79sej7.js";import"./OverrideHelper-DHz01mPW.js";import"./colorUtils-DSamnXnQ.js";import"./quantizationUtils-CrQL7F8F.js";import"./AttributeStore-rRtoSbdP.js";import"./queryUtils-BoaFe4en.js";import"./json-Wa8cmqdu.js";import"./timeSupport-B-rYk-YC.js";import"./TimeOnly-CVgLqrpK.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-B1HzKDFh.js";import"./dehydratedFeatures-ILc6Rtrm.js";import"./utils-BxKWZfoY.js";import"./webglDeps-CO71pC9T.js";import"./NestedMap-GuqgquCN.js";import"./renderState-DUM9wQon.js";import"./basicInterfaces-CZwQPxTp.js";import"./glsl-BH37Aalp.js";import"./testSVGPremultipliedAlpha-7n8bGtKf.js";import"./doublePrecisionUtils-B0owpBza.js";let _=class extends B{constructor(){super(...arguments),this.id=0,this.rotation=0,this.href="",this.extent=new j}};c([g({nonNullable:!0,json:{write:!0}})],_.prototype,"id",void 0),c([g({nonNullable:!0,json:{write:!0}})],_.prototype,"rotation",void 0),c([g({nonNullable:!0,json:{write:!0}})],_.prototype,"href",void 0),c([g({type:j,nonNullable:!0,json:{write:!0}})],_.prototype,"extent",void 0),_=c([N("esri.layers.support.KMLMapImage")],_);class h{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1,h._instance=this,this._ownsRctx=!0;const a=document.createElement("canvas").getContext("webgl2");a.getExtension("OES_texture_float"),this._rctx=new ct(a,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=dt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new mt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const a=k(t.extent,s),i=new A({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:n,y:p}=pt(i,s,t.extent);let l=(n+p)/2;const u=Math.round((a.xmax-a.xmin)/l),o=Math.round((a.ymax-a.ymin)/l);l=(a.width/u+a.height/o)/2;const D=new A({x:l,y:l,spatialReference:a.spatialReference}),x=ht({projectedExtent:a,srcBufferExtent:t.extent,pixelSize:D,hasWrapAround:!0,spacing:[16,16]}),f=gt(this._rctx,x),b=new U(u,o);b.wrapMode=E.CLAMP_TO_EDGE;const m=new ut(this._rctx,b);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,u,o),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(f,1),this._quad.bind();const{width:V=0,height:v=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",V,v),this._program.setUniform2fv("u_transformSpacing",x.spacing),this._program.setUniform2fv("u_transformGridSize",x.size),this._program.setUniform2f("u_targetImageSize",u,o),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),f.dispose(),r){const{width:d,height:C}=m,y=new ImageData(d??0,C??0);m.readPixels(0,0,d??0,C??0,O.RGBA,F.UNSIGNED_BYTE,y.data);const G=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:a,imageData:y}}const S=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:S,extent:a}}reprojectBitmapData(t,s){const r=at(t.bitmapData)?st(t.bitmapData):t.bitmapData,a=new U;a.wrapMode=E.CLAMP_TO_EDGE,a.width=t.bitmapData.width,a.height=t.bitmapData.height;const i=new W(this._rctx,a,r),n=this.reprojectTexture({texture:i,extent:t.extent},s,!0);n.texture.dispose();const p=document.createElement("canvas"),l=n.imageData;return p.width=l.width,p.height=l.height,p.getContext("2d").putImageData(l,0,0),{bitmapData:p,extent:n.extent}}async loadAndReprojectBitmapData(t,s,r){const a=(await H(t,{responseType:"image"})).data,i=document.createElement("canvas");i.width=a.width,i.height=a.height;const n=i.getContext("2d");n.drawImage(a,0,0);const p=n.getImageData(0,0,i.width,i.height);if(s.spatialReference.equals(r))return{bitmapData:p,extent:s};const l=this.reprojectBitmapData({bitmapData:p,extent:s},r);return{bitmapData:l.bitmapData,extent:l.extent}}destroy(){this._ownsRctx?(h._instanceRefCount--,h._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())}}h._instanceRefCount=0;class z{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let w=class extends nt(lt){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new ot,this._kmlVisualData=new z,this._fetchController=null,this.allVisiblePoints=new P,this.allVisiblePolylines=new P,this.allVisiblePolygons=new P,this.allVisibleMapImages=new K}async hitTest(e,t){var r,a,i;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(a=this._polylinesView)==null?void 0:a.hitTest(e),(i=this._polygonsView)==null?void 0:i.hitTest(e)].flat().filter(Boolean).map(n=>(n.layer=s,n.sourceLayer=s,{type:"graphic",graphic:n,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new T({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new T({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new T({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),Q(()=>this.layer.visibleSublayers,e=>{for(const t of this._kmlVisualData.allSublayers.values())t.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new h}detach(){this._fetchController=X(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=I(this._polygonsView),this._polylinesView=I(this._polylinesView),this._pointsView=I(this._pointsView),this._imageReprojector=I(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,e.extent,this.view.spatialReference).then(r=>{const a=new rt(r.bitmapData);a.x=r.extent.xmin,a.y=r.extent.ymax,a.resolution=r.extent.width/r.bitmapData.width,a.rotation=e.rotation,this._mapImageContainer.addChild(a),this._bitmapIndex.set(e,a)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:a}=e;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let i;if(await J(),r!=null&&r!==1){const d=new j(t.extent);d.expand(r),i=d}else i=t.extent;i=k(i,L.WGS84);const n=k(i,L.WebMercator),p=i.xmin,l=i.xmax,u=i.ymin,o=i.ymax,D=t.size[0]*t.pixelRatio,x=t.size[1]*t.pixelRatio,f=Math.max(n.width,n.height),b={"[bboxWest]":p.toString(),"[bboxEast]":l.toString(),"[bboxSouth]":u.toString(),"[bboxNorth]":o.toString(),"[lookatLon]":i.center.x.toString(),"[lookatLat]":i.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":i.center.x.toString(),"[lookatTerrainLat]":i.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":i.center.x.toString(),"[cameraLat]":i.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":D.toString(),"[vertPixels]":x.toString(),"[terrainEnabled]":"0","[clientVersion]":tt,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=d=>{for(const C in d){let y;for(y in b)d[C]=d[C].replace(y,b[y])}},V=q(s);m(V);let v={};a!=null&&(v=q(a),m(v));const S=Y(e.href);return S.query={...S.query,...V,...v},`${S.path}?${Z(V)}`}return e.href}async _fetchService(e){const t=new z;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{var a;for(const i of r.sublayers){t.allSublayers.set(i.id,i);const n=i.points?await M(i.points):[],p=i.polylines?await M(i.polylines):[],l=i.polygons?await M(i.polygons):[],u=((a=i.mapImages)==null?void 0:a.map(o=>_.fromJSON(o)))??[];if(t.allPoints.push(...n.map(o=>({item:o,sublayerId:i.id}))),t.allPolylines.push(...p.map(o=>({item:o,sublayerId:i.id}))),t.allPolygons.push(...l.map(o=>({item:o,sublayerId:i.id}))),t.allMapImages.push(...u.map(o=>({item:o,sublayerId:i.id}))),i.networkLink){const o=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(o,t,s)}}})}_fetchParsedKML(e,t){return et(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>it(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};c([g()],w.prototype,"_pointsView",void 0),c([g()],w.prototype,"_polylinesView",void 0),c([g()],w.prototype,"_polygonsView",void 0),c([g()],w.prototype,"updating",void 0),w=c([N("esri.views.2d.layers.KMLLayerView2D")],w);const Se=w;export{Se as default};
