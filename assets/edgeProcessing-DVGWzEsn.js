import{e as me}from"./deduplicate-D6IQYJhP.js";import{H as F}from"./InterleavedLayout-hEsKBZ7L.js";import{e as c}from"./VertexAttribute-Cq4MnHjR.js";import{t as Y}from"./glUtil-DW_knhTH.js";import{U as w,dw as ee,eT as Ie,eS as k,aB as oe,an as H,ey as re,ap as fe,ar as pe,eV as Oe,eU as Se,aD as de,eA as Ae,lZ as Ee}from"./index-BCSVvjKE.js";import{s as j}from"./Normals-DVRNubqz.js";const we=F().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),Te=F().vec2u8(c.SIDENESS).freeze();Y(Te);const Z=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;class ve{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const W=-1;function ye(e,n,s){const r=e.vertices.position,i=e.vertices.componentIndex,f=m.position0,g=m.position1,h=m.faceNormal0,S=m.faceNormal1,{edges:a,normals:p}=Ve(e),I=a.length/4,A=n.allocate(I);let V=0;const B=I,T=s==null?void 0:s.allocate(B);let b=0,t=0,o=0;z.length=0;for(let d=0;d<I;++d){const y=4*d;r.getVec(a.data[y],f),r.getVec(a.data[y+1],g);const x=z.pushNew();x.index=4*d,x.length=Ie(f,g)}z.sort((d,y)=>y.length-d.length);const u=new Array,l=new Array;z.forAll(({length:d,index:y})=>{const x=a.data[y],Ne=a.data[y+1],te=a.data[y+2],ne=a.data[y+3],se=ne===W;if(r.getVec(x,f),r.getVec(Ne,g),se){const E=3*te;k(h,p.data[E],p.data[E+1],p.data[E+2]),oe(S,h),m.componentIndex=i.get(x),m.cosAngle=H(h,S)}else{let E=3*te;if(k(h,p.data[E],p.data[E+1],p.data[E+2]),E=3*ne,k(S,p.data[E],p.data[E+1],p.data[E+2]),m.componentIndex=i.get(x),m.cosAngle=H(h,S),Pe(m,De))return;m.cosAngle<-.9999&&oe(S,h)}t+=d,o++,se||Me(m,Le)?(n.write(A,V++,m),u.push(d)):Re(m,ge)&&(T&&s&&s.write(T,b++,m),l.push(d))});const O=new Float32Array(u.reverse()),v=new Float32Array(l.reverse()),M=T&&s?{instancesData:T.slice(0,b),lodInfo:{lengths:v}}:void 0;return{regular:{instancesData:A.slice(0,V),lodInfo:{lengths:O}},silhouette:M,averageEdgeLength:t/o}}function Me(e,n){return e.cosAngle<n}function Pe(e,n){return e.cosAngle>n}function Re(e,n){const s=Oe(e.cosAngle);return Se(ae,e.position1,e.position0),s*(H(fe(xe,e.faceNormal0,e.faceNormal1),ae)>0?-1:1)>n}function Ve(e){const n=e.faces.length/3,s=e.faces,r=e.neighbors,i=e.vertices.position;N.length=K.length=0;for(let f=0;f<n;f++){const g=3*f,h=r[g],S=r[g+1],a=r[g+2],p=s[g],I=s[g+1],A=s[g+2];i.getVec(p,$),i.getVec(I,U),i.getVec(A,_),re(U,U,$),re(_,_,$),fe($,U,_),pe($,$),K.pushArray($),(h===W||p<I)&&(N.push(p),N.push(I),N.push(f),N.push(h)),(S===W||I<A)&&(N.push(I),N.push(A),N.push(f),N.push(S)),(a===W||A<p)&&(N.push(A),N.push(p),N.push(f),N.push(a))}return{edges:N,normals:K}}class $e{constructor(){this.index=0,this.length=0}}const z=new ee({allocator:e=>e||new $e,deallocator:null}),N=new ee({deallocator:null}),K=new ee({deallocator:null}),m=new ve,xe=w(),ae=w(),$=w(),U=w(),_=w(),ge=de(4),De=Math.cos(ge),Ce=de(35),Le=Math.cos(Ce);function ie(e,n,s){const r=n/3,i=new Uint32Array(s+1),f=new Uint32Array(s+1),g=(t,o)=>{t<o?i[t+1]++:f[o+1]++};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];g(o,u),g(u,l),g(l,o)}let h=0,S=0;for(let t=0;t<s;t++){const o=i[t+1],u=f[t+1];i[t+1]=h,f[t+1]=S,h+=o,S+=u}const a=new Uint32Array(6*r),p=i[s],I=(t,o,u)=>{if(t<o){const l=i[t+1]++;a[2*l]=o,a[2*l+1]=u}else{const l=f[o+1]++;a[2*p+2*l]=t,a[2*p+2*l+1]=u}};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];I(o,u,t),I(u,l,t),I(l,o,t)}const A=(t,o)=>{const u=2*t,l=o-t;for(let O=1;O<l;O++){const v=a[u+2*O],M=a[u+2*O+1];let d=O-1;for(;d>=0&&a[u+2*d]>v;d--)a[u+2*d+2]=a[u+2*d],a[u+2*d+3]=a[u+2*d+1];a[u+2*d+2]=v,a[u+2*d+3]=M}};for(let t=0;t<s;t++)A(i[t],i[t+1]),A(p+f[t],p+f[t+1]);const V=new Int32Array(3*r),B=(t,o)=>t===e[3*o]?0:t===e[3*o+1]?1:t===e[3*o+2]?2:-1,T=(t,o)=>{const u=B(t,o);V[3*o+u]=-1},b=(t,o,u,l)=>{const O=B(t,o);V[3*o+O]=l;const v=B(u,l);V[3*l+v]=o};for(let t=0;t<s;t++){let o=i[t];const u=i[t+1];let l=f[t];const O=f[t+1];for(;o<u&&l<O;){const v=a[2*o],M=a[2*p+2*l];v===M?(b(t,a[2*o+1],M,a[2*p+2*l+1]),o++,l++):v<M?(T(t,a[2*o+1]),o++):(T(M,a[2*p+2*l+1]),l++)}for(;o<u;)T(t,a[2*o+1]),o++;for(;l<O;)T(a[2*p+2*l],a[2*p+2*l+1]),l++}return V}const q=.7;let he=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?Be:Fe}write(n,s,r){X.seed=this._edgeHashFunction(r);const i=X.getIntRange(0,255),f=X.getIntRange(0,this.settings.variants-1),g=X.getFloat(),h=255*(.5*be(-(1-Math.min(g/q,1))+Math.max(0,g-q)/(1-q),1.2)+.5);n.position0.setVec(s,r.position0),n.position1.setVec(s,r.position1),n.componentIndex.set(s,r.componentIndex),n.variantOffset.set(s,i),n.variantStroke.set(s,f),n.variantExtension.set(s,h)}};const P=new Float32Array(6),R=new Uint32Array(P.buffer),L=new Uint32Array(1);function Fe(e){return P[0]=e.position0[0],P[1]=e.position0[1],P[2]=e.position0[2],P[3]=e.position1[0],P[4]=e.position1[1],P[5]=e.position1[2],L[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],L[0]}function Be(e){const n=P;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),L[0]=5381;for(let s=0;s<R.length;s++)L[0]=31*L[0]+R[s];return L[0]}const ce=1e4;function D(e){return Math.round(e*ce)/ce}function be(e,n){return Math.abs(e)**n*Math.sign(e)}class J{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Z.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r),Ae(C,r.faceNormal0,r.faceNormal1),pe(C,C);const{typedBuffer:i,typedBufferStride:f}=n.normalCompressed;j(i,s,C[0],C[1],C[2],f)}}J.Layout=Z,J.glLayout=Y(Z,1);class Q{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r);{const{typedBuffer:i,typedBufferStride:f}=n.normalCompressed;j(i,s,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],f)}{const{typedBuffer:i,typedBufferStride:f}=n.normal2Compressed;j(i,s,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],f)}}}Q.Layout=G,Q.glLayout=Y(G,1);const C=w(),X=new Ee;function je(e){const n=ze(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return le.updateSettings(e.writerSettings),ue.updateSettings(e.writerSettings),ye(n,le,ue)}function ze(e,n,s,r){if(n){const g=ie(s,r,e.count);return new Ue(s,r,g,e)}const i=me(e.buffer,e.stride/4,{originalIndices:s}),f=ie(i.indices,r,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:f,vertices:we.createView(i.buffer)}}class Ue{constructor(n,s,r,i){this.faces=n,this.facesLength=s,this.neighbors=r,this.vertices=i}}const le=new J,ue=new Q,Ze=F().vec3f(c.POSITION0).vec3f(c.POSITION1),Ge=F().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{we as E,Ze as d,je as f,Ge as m,ye as p,ze as u};
