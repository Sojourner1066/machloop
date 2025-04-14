import{bG as d,eS as O,U as M,ey as j,ap as ne,ar as ae,s as J,A as v,kL as oe,ad as ce,H as K,jA as he,X as k,hp as ee,ab as fe,aD as ue,f1 as le,db as b,ed as de,ci as me}from"./index-BCSVvjKE.js";import{N as pe,T as _e}from"./quat-BvDT_bxV.js";import{t as ge,r as we,e as Ae}from"./quatf64-aQ5IuZRd.js";import{m as Te}from"./MeshComponent-BsmxY7jX.js";import{B as be}from"./vertexSpaceConversion-XqQ-Gxkg.js";import{n as P}from"./resourceUtils-E0BzO_vJ.js";import"./mat3f64-q3fE-ZOt.js";import"./meshProperties-C4iW0Ukm.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-Dt3i00wg.js";import"./computeTranslationToOriginAndRotation-BKUgOs_N.js";import"./projectPointToVector-D4QINAum.js";import"./meshVertexSpaceUtils-C3eC4eMG.js";import"./MeshLocalVertexSpace-DVq20P2P.js";import"./vec3-tRjQ2E2L.js";import"./BufferView-BnloAaDm.js";import"./vec4-CMOwvsJ_.js";import"./basicInterfaces-CZwQPxTp.js";var C;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(C||(C={}));let S=class I{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=I.HEADER_SIZE,this._length+=I.CHUNK_HEADER_SIZE;const s=Ee(e);if(this._length+=W(s.byteLength,4),t&&(this._length+=I.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,C.JSON,32);t&&this._writeChunk(t,r,C.BIN)}_writeHeader(){this._outView.setUint32(0,I.MAGIC,!0),this._outView.setUint32(4,I.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const n=W(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),ye(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}};function ye(i,e,t,s,r){new Uint8Array(i,t,r).set(new Uint8Array(e,s,r),0)}function Ee(i){return new TextEncoder().encode(i).buffer}function W(i,e){return e*Math.ceil(i/e)}S.HEADER_SIZE=12,S.CHUNK_HEADER_SIZE=8,S.MAGIC=1179937895,S.VERSION=2;var R,y,E,g,X,B,Z;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(R||(R={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(y||(y={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(g||(g={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(X||(X={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(B||(B={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(Z||(Z={}));let Re=class{constructor(e,t,s,r,n){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==E.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?e:Math.min(r,e);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case d.BYTE:return new Int8Array(e,t);case d.FLOAT:return new Float32Array(e,t);case d.SHORT:return new Int16Array(e,t);case d.UNSIGNED_BYTE:return new Uint8Array(e,t);case d.UNSIGNED_INT:return new Uint32Array(e,t);case d.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case d.UNSIGNED_BYTE:case d.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.UNSIGNED_INT:case d.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case g.SCALAR:return 1;case g.VEC2:return 2;case g.VEC3:return 3;case g.VEC4:case g.MAT2:return 4;case g.MAT3:return 9;case g.MAT4:return 16}}},Q=class{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new Re(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(t,s),s+=r.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}};function xe(i,e){if(i.components)for(const t of i.components)t.faces&&t.shading==="smooth"&&Ne(t.faces,e)}function Ne(i,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const{position:t,normal:s}=e,r=i.length/3;for(let n=0;n<r;++n){const o=3*i[3*n],a=3*i[3*n+1],h=3*i[3*n+2],l=O(Ie,t[o],t[o+1],t[o+2]),f=O(Se,t[a],t[a+1],t[a+2]),T=O(Me,t[h],t[h+1],t[h+2]),_=j(f,f,l),m=j(T,T,l),c=ne(_,_,m);s[o]+=c[0],s[o+1]+=c[1],s[o+2]+=c[2],s[a]+=c[0],s[a+1]+=c[1],s[a+2]+=c[2],s[h]+=c[0],s[h+1]+=c[1],s[h+2]+=c[2]}for(let n=0;n<s.length;n+=3)O(x,s[n],s[n+1],s[n+2]),ae(x,x),s[n]=x[0],s[n+1]=x[1],s[n+2]=x[2]}const Ie=M(),Se=M(),Me=M(),x=M();function Le(i){const e=te(i);return e!=null?e.toDataURL():""}async function q(i,e){const t=te(i);if(t==null)throw new J("imageToArrayBuffer","Unsupported image type");const s=Oe(i),r=await new Promise(o=>t.toBlob(o,s));if(v(e),!r)throw new J("imageToArrayBuffer","Failed to encode image");const n=await r.arrayBuffer();return v(e),{data:n,type:s}}function Oe(i){if(!(i instanceof HTMLImageElement))return"image/png";const e=i.src;if(oe(e)){const t=ce(e);return(t==null?void 0:t.mediaType)==="image/jpeg"?t.mediaType:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function te(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const t=e.getContext("2d");return i instanceof HTMLImageElement?t.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&t.putImageData(i,0,0),e}function Ce(i){const e=[],t=new Uint8Array(i);for(let s=0;s<t.length;s++)e.push(String.fromCharCode(t[s]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function Be(i){if(i.byteLength<8)return!1;const e=new Uint8Array(i);return e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71&&e[4]===13&&e[5]===10&&e[6]===26&&e[7]===10}const $=()=>fe.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Fe{constructor(e,t){this.options=t,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:t.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.output.buffer===R.GLB||t.output.image===y.GLB;s&&(t.binChunkBuffer=new Q(this.gltf)),e.forEachScene(r=>{this._addScene(r)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;K(s,he)||(t.translation=k(s));const r=e.rotation;pe(r,we)||(t.rotation=ge(r));const n=e.scale;K(n,ee)||(t.scale=k(n));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const a=this._createMeshes(e.mesh),h=[o];if(a.length===1)this._addMesh(t,a[0]);else for(const l of a){const f={};this._addMesh(f,l),h.push(this.gltf.nodes.length),this.gltf.nodes.push(f)}return h}return e.forEachNode(a=>{t.children||(t.children=[]),t.children.push(...this._addNodes(a))}),[o]}_addMesh(e,t){var r;(r=this.gltf).meshes??(r.meshes=[]);const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){var Y;const t=this.gltf.extras,s=t.output.buffer===R.GLB;let r;r=s?t.binChunkBuffer:new Q(this.gltf);const n=this.options.origin,o=e.vertexSpace.clone();o.origin=[n.x,n.y,n.z??0];const a=be({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:(Y=this.options)!=null&&Y.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!a)return[];xe(e,a),Ve(a);const{position:h,normal:l,tangent:f}=a,{uv:T,color:_}=e.vertexAttributes,m=r.addBufferView(d.FLOAT,g.VEC3,E.ARRAY_BUFFER);let c,w,p,A;l&&(c=r.addBufferView(d.FLOAT,g.VEC3,E.ARRAY_BUFFER)),T&&(w=r.addBufferView(d.FLOAT,g.VEC2,E.ARRAY_BUFFER)),f&&(p=r.addBufferView(d.FLOAT,g.VEC4,E.ARRAY_BUFFER)),_&&(A=r.addBufferView(d.FLOAT,g.VEC4,E.ARRAY_BUFFER)),m.startAccessor("POSITION"),c&&c.startAccessor("NORMAL"),w&&w.startAccessor("TEXCOORD_0"),p&&p.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");const ie=a.position.length/3;for(let u=0;u<ie;++u)m.push(h[3*u]),m.push(h[3*u+1]),m.push(h[3*u+2]),c&&l!=null&&(c.push(l[3*u]),c.push(l[3*u+1]),c.push(l[3*u+2])),w&&T!=null&&(w.push(T[2*u]),w.push(T[2*u+1])),p&&f!=null&&(p.push(f[4*u]),p.push(f[4*u+1]),p.push(f[4*u+2]),p.push(f[4*u+3])),A&&_!=null&&(A.push(N(_[4*u]/255)),A.push(N(_[4*u+1]/255)),A.push(N(_[4*u+2]/255)),A.push(_[4*u+3]/255));const re=m.endAccessor(),H=this._addAccessor(m.index,re);let F,V,z,D,L;if(c){const u=c.endAccessor();F=this._addAccessor(c.index,u)}if(w){const u=w.endAccessor();V=this._addAccessor(w.index,u)}if(p){const u=p.endAccessor();z=this._addAccessor(p.index,u)}if(A){const u=A.endAccessor();D=this._addAccessor(A.index,u)}const U=[];return e.components&&e.components.length>0&&e.components[0].faces?(L=r.addBufferView(d.UNSIGNED_INT,g.SCALAR,E.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(L,e.components,U,H,F,V,z,D)):this._addMeshVertexNonIndexed(e.components,U,H,F,V,z,D),m.finalize(),c&&c.finalize(),w&&w.finalize(),p&&p.finalize(),L&&L.finalize(),A&&A.finalize(),s||r.finalize(),U}_addMaterial(e){if(e==null)return;const t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=B.MASK;break;case"auto":case"blend":s.alphaMode=B.BLEND}s.alphaCutoff=e.alphaCutoff,e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=o=>{const a=o.toRgba();return a[0]=N(a[0]/255),a[1]=N(a[1]/255),a[2]=N(a[2]/255),a};if(e.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),e.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof Te){if(e.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){const o=r(e.emissiveColor);s.emissiveFactor=[o[0],o[1],o[2]]}e.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,$().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const n=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),n}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:ue(t.rotation)}),s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,le(this._textureMap,e,()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r})}_addImage(e){const t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const n=e.data;s.extras=n;for(let a=0;a<this.gltf.images.length;++a)if(n===this.gltf.images[a].extras)return a;const o=this.gltf.extras;switch(o.output.image){case y.GLB:{const a=o.binChunkBuffer.addBufferView(d.UNSIGNED_BYTE,g.SCALAR);if(P(n))n.data!=null&&a.writeOutToBuffer(n.data,0);else{const h=q(n,this.options.signal).then(({data:l,type:f})=>(s.mimeType=f,l));o.promises.push(a.writeAsync(h).then(()=>{a.finalize()}))}s.bufferView=a.index;break}case y.DataURI:if(P(n)){$().warnOnce("Image export for basis compressed textures not available.");break}s.uri=Le(n);break;default:if(P(n)){$().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(q(n,this.options.signal).then(({data:a,type:h})=>{s.uri=a,s.mimeType=h}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=b.REPEAT,s=b.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=b.CLAMP_TO_EDGE,s=b.CLAMP_TO_EDGE;break;case"mirror":t=b.MIRRORED_REPEAT,s=b.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=b.CLAMP_TO_EDGE;break;case"mirror":s=b.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=b.CLAMP_TO_EDGE;break;case"mirror":t=b.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,n,o,a,h){const l=new Map;for(const f of t){if(e.startAccessor("INDICES"),f.faces)for(let c=0;c<f.faces.length;++c)e.push(f.faces[c]);const T=e.endAccessor(),_={attributes:{POSITION:r},indices:this._addAccessor(e.index,T),material:this._addMaterial(f.material)};n&&f.shading!=="flat"&&(_.attributes.NORMAL=n),o&&(_.attributes.TEXCOORD_0=o),a&&f.shading!=="flat"&&(_.attributes.TANGENT=a),h&&(_.attributes.COLOR_0=h);const m=l.get(f.name);if(m)m.primitives.push(_);else{const c={name:f.name,primitives:[_]};l.set(f.name,c),s.push(c)}}}_addMeshVertexNonIndexed(e,t,s,r,n,o,a){const h={primitives:[]};t.push(h);const l={attributes:{POSITION:s}};r&&(l.attributes.NORMAL=r),n&&(l.attributes.TEXCOORD_0=n),o&&(l.attributes.TANGENT=o),a&&(l.attributes.COLOR_0=a),e&&(l.material=this._addMaterial(e[0].material)),h.primitives.push(l)}}function Ve({position:i,normal:e,tangent:t}){G(i,3),G(e,3),G(t,4)}function G(i,e){if(i!=null)for(let t=1,s=2;t<i.length;t+=e,s+=e){const r=i[t],n=i[s];i[t]=n,i[s]=-r}}function N(i){return i**de}class ze{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){me(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class De{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Ue{constructor(e){this.mesh=e,this.name="",this.translation=M(),this.rotation=Ae(),this.scale=k(ee),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){_e(this.rotation,e[0],e[1],e[2])}}const Pe="model.gltf",se="model.glb";async function $e(i,e){var f,T;const t=new Fe(i,e).gltf,s=t.extras.promises;let r=1,n=1,o=null;await Promise.allSettled(s),v(e.signal);const a=e.jsonSpacing??4,h=new Map,l=JSON.stringify(t,(_,m)=>{var c,w;if(_!=="extras"){if(m instanceof ArrayBuffer){if(Be(m))switch((c=e.output)==null?void 0:c.image){case y.DataURI:case y.GLB:break;case y.External:default:{const p=`img${n}.png`;return n++,h.set(p,m),p}}switch((w=e.output)==null?void 0:w.buffer){case R.DataURI:return Ce(m);case R.GLB:if(o)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(o=m);case R.External:default:{const p=`data${r}.bin`;return r++,h.set(p,m),p}}}return m}},a);return((f=e.output)==null?void 0:f.buffer)===R.GLB||((T=e.output)==null?void 0:T.image)===y.GLB?h.set(se,new S(l,o).buffer):h.set(Pe,l),h}async function Ge(i,e){const t=(await $e(i,{output:{buffer:R.GLB,image:y.GLB},jsonSpacing:0,...e})).get(se);if(!(t&&t instanceof ArrayBuffer))throw new Error("failed to export to glb");return t}async function ct(i,e){const t=new ze,s=new De;return t.addScene(s),s.addNode(new Ue(i)),await Ge(t,{origin:i.origin,...e})}export{ct as toBinaryGLTF};
