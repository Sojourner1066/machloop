import{aJ as tn,aK as sn,aL as ln,aM as un,ab as cn,s as j,aN as an,aO as fn,aP as hn,aQ as dn}from"./index-BCSVvjKE.js";import{e as I,s as v}from"./OptimizedFeature-CAs8C_6w.js";import{e as mn}from"./OptimizedFeatureSet-Blu9Ckm7.js";function b(n,r){return n?r?4:3:r?3:2}const z=()=>cn.getLogger("esri.layers.graphics.featureConversionUtils"),Y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},gn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t},J=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+2]},yn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+3]},pn=(n,r,o,e,s,t)=>{n[o]=s,n[o+1]=t,n[o+2]=r[e+2],n[o+3]=r[e+3]};function _(n,r,o,e){if(n){if(o)return r&&e?pn:J;if(r&&e)return yn}else if(r&&e)return J;return gn}function L({scale:n,translate:r},o){return Math.round((o-r[0])/n[0])}function q({scale:n,translate:r},o){return Math.round((r[1]-o)/n[1])}function U({scale:n,translate:r},o){return Math.round((o-r[0])/n[0])}function R({scale:n,translate:r},o){return Math.round((o-r[1])/n[1])}function S({scale:n,translate:r},o,e){return o*n[e]+r[e]}function Yn(n,r,o){return n?r?o?C(n):O(n):o?A(n):E(n):null}function E(n){const r=n.coords;return{x:r[0],y:r[1]}}function B(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n}function O(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2]}}function bn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n}function A(n){const r=n.coords;return{x:r[0],y:r[1],m:r[2]}}function wn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.m,n}function C(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function Mn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n.coords[3]=r.m,n}function Gn(n,r,o,e){let s=E;o&&e?s=C:o?s=O:e&&(s=A);for(const t of r){const{geometry:l,attributes:u}=t,i=l!=null?s(l):null;n.push({attributes:u,geometry:i})}return n}function D(n,r){return n&&r?Mn:n?bn:r?wn:B}function In(n,r,o,e,s){const t=D(o,e);for(const{geometry:l,attributes:u}of r){const i=l!=null?t(new I,l):null;n.push(new v(i,u,null,s?u[s]:void 0))}return n}function Nn(n,r,o=D(r.z!=null,r.m!=null)){return o(n,r)}function Pn(n,r,o,e){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?H(s,o,e):null});return n}function H(n,r,o){if(n==null)return null;const e=b(r,o),s=[];for(let t=0;t<n.coords.length;t+=e){const l=[];for(let u=0;u<e;u++)l.push(n.coords[t+u]);s.push(l)}return r?o?{points:s,hasZ:r,hasM:o}:{points:s,hasZ:r}:o?{points:s,hasM:o}:{points:s}}function Tn(n,r,o,e,s){const t=b(o,e);for(const{geometry:l,attributes:u}of r){const i=l!=null?W(new I,l,t):null;n.push(new v(i,u,null,s?u[s]:void 0))}return n}function W(n,r,o=b(r.hasZ,r.hasM)){n.lengths[0]=r.points.length;const e=n.coords;let s=0;for(const t of r.points)for(let l=0;l<o;l++)e[s++]=t[l];return n}function Fn(n,r,o,e){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?X(s,o,e):null});return n}function X(n,r,o){if(!n)return null;const e=b(r,o),{coords:s,lengths:t}=n,l=[];let u=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[u++]);c.push(f)}l.push(c)}return r?o?{paths:l,hasZ:r,hasM:o}:{paths:l,hasZ:r}:o?{paths:l,hasM:o}:{paths:l}}function Zn(n,r,o,e,s){const t=b(o,e);for(const{geometry:l,attributes:u,centroid:i}of r){const c=l!=null?$(new I,l,t):null,a=i!=null?Nn(new I,i):null;n.push(new v(c,u,a,s?u[s]:void 0))}return n}function $(n,r,o=b(r.hasZ,r.hasM)){const{lengths:e,coords:s}=n;let t=0;for(const l of r.paths){for(const u of l)for(let i=0;i<o;i++)s[t++]=u[i];e.push(l.length)}return n}function xn(n,r,o,e){for(const{geometry:s,attributes:t,centroid:l}of r){const u=s!=null?nn(s,o,e):null;if(l!=null){const i=E(l);n.push({attributes:t,centroid:i,geometry:u})}else n.push({attributes:t,geometry:u})}return n}function nn(n,r,o){if(!n)return null;const e=b(r,o),{coords:s,lengths:t}=n,l=[];let u=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[u++]);c.push(f)}l.push(c)}return r?o?{rings:l,hasZ:r,hasM:o}:{rings:l,hasZ:r}:o?{rings:l,hasM:o}:{rings:l}}function vn(n,r,o,e,s){for(const{geometry:t,centroid:l,attributes:u}of r){const i=t!=null?rn(new I,t,o,e):null,c=s?u[s]:void 0;l!=null?n.push(new v(i,u,B(new I,l),c)):n.push(new v(i,u,null,c))}return n}function rn(n,r,o=r.hasZ,e=r.hasM){return kn(n,r.rings,o,e)}function kn(n,r,o,e){const s=b(o,e),{lengths:t,coords:l}=n;let u=0;T(n);for(const i of r){for(const c of i)for(let a=0;a<s;a++)l[u++]=c[a];t.push(i.length)}return n}const x=[],k=[];function _n(n,r,o,e,s){x[0]=n;const[t]=on(k,x,r,o,e,s);return N(x),N(k),t}function on(n,r,o,e,s,t){if(N(n),!o){for(const l of r){const u=t?l.attributes[t]:void 0;n.push(new v(null,l.attributes,null,u))}return n}switch(o){case"esriGeometryPoint":return In(n,r,e,s,t);case"esriGeometryMultipoint":return Tn(n,r,e,s,t);case"esriGeometryPolyline":return Zn(n,r,e,s,t);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return vn(n,r,e,s,t);default:z().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${o}'`)),N(n)}return n}function On(n,r,o,e){k[0]=n,en(x,k,r,o,e);const s=x[0];return N(x),N(k),s}function An(n,r,o){if(n==null)return null;const e=new I;return"hasZ"in n&&r==null&&(r=n.hasZ),"hasM"in n&&o==null&&(o=n.hasM),tn(n)?D(r??n.z!=null,o??n.m!=null)(e,n):sn(n)?rn(e,n,r,o):ln(n)?$(e,n,b(r,o)):un(n)?W(e,n,b(r,o)):void z().error("convertFromGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${n}'`))}function jn(n,r,o,e){const s=n&&("coords"in n?n:n.geometry);if(s==null)return null;switch(r){case"esriGeometryPoint":{let t=E;return o&&e?t=C:o?t=O:e&&(t=A),t(s)}case"esriGeometryMultipoint":return H(s,o,e);case"esriGeometryPolyline":return X(s,o,e);case"esriGeometryPolygon":return nn(s,o,e);default:return z().error("convertToGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${r}'`)),null}}function zn(n,r){for(const o of r)n.push({attributes:o.attributes});return n}function en(n,r,o,e,s){if(N(n),o==null)return zn(n,r);switch(o){case"esriGeometryPoint":return Gn(n,r,e,s);case"esriGeometryMultipoint":return Pn(n,r,e,s);case"esriGeometryPolyline":return Fn(n,r,e,s);case"esriGeometryPolygon":return xn(n,r,e,s);default:z().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${o}'`))}return n}function Cn(n){const{objectIdFieldName:r,spatialReference:o,transform:e,fields:s,hasM:t,hasZ:l,features:u,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=n,d={features:en([],u,i,l,t),fields:s,geometryType:i,objectIdFieldName:r,spatialReference:o,uniqueIdField:a,queryGeometry:jn(f,h,!1,!1)};return e&&(d.transform=e),c&&(d.exceededTransferLimit=c),t&&(d.hasM=t),l&&(d.hasZ=l),d}function Dn(n,r){const o=new mn,{hasM:e,hasZ:s,features:t,objectIdFieldName:l,spatialReference:u,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=n;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=l??r??null,o.spatialReference=u??null,o.objectIdFieldName?(t&&on(o.features,t,i,s,e,o.objectIdFieldName),c&&(o.exceededTransferLimit=c),e&&(o.hasM=e),s&&(o.hasZ=s),a&&(o.transform=a),o):(z().error(new j("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Jn(n){const{transform:r,features:o,hasM:e,hasZ:s}=n;if(!r)return n;for(const t of o)t.geometry!=null&&Q(t.geometry,t.geometry,e,s,r),t.centroid!=null&&Q(t.centroid,t.centroid,e,s,r);return n.transform=null,n}function Kn(n,r){const{geometryType:o,features:e,hasM:s,hasZ:t}=r;if(!n)return r;for(let l=0;l<e.length;l++){const u=e[l],i=u.weakClone();i.geometry=new I,K(i.geometry,u.geometry,s,t,o,n),u.centroid&&(i.centroid=new I,K(i.centroid,u.centroid,s,t,"esriGeometryPoint",n)),e[l]=i}return r.transform=n,r}function K(n,r,o,e,s,t,l=o,u=e){if(T(n),!(r!=null&&r.coords.length))return null;const i=Y[s],{coords:c,lengths:a}=r,f=b(o,e),h=b(o&&l,e&&u),d=_(o,e,l,u);if(!a.length)return d(n.coords,c,0,0,L(t,c[0]),q(t,c[1])),T(n,f,0),n;let m,y,w,G,p=0,g=0,M=g;for(const F of a){if(F<i)continue;let P=0;g=M,w=m=L(t,c[p]),G=y=q(t,c[p+1]),d(n.coords,c,g,p,w,G),P++,p+=f,g+=h;for(let Z=1;Z<F;Z++,p+=f)w=L(t,c[p]),G=q(t,c[p+1]),w===m&&G===y||(d(n.coords,c,g,p,w-m,G-y),g+=h,P++,m=w,y=G);P>=i&&(n.lengths.push(P),M=g)}return N(n.coords,M),n.coords.length?n:null}function Qn(n,r,o,e,s,t,l=o,u=e){if(T(n),!(r!=null&&r.coords.length))return null;const i=Y[s],{coords:c,lengths:a}=r,f=b(o,e),h=b(o&&l,e&&u),d=_(o,e,l,u);if(!a.length)return d(n.coords,c,0,0,c[0],c[1]),T(n,f,0),n;let m=0;const y=t*t;for(const w of a){if(w<i){m+=w*f;continue}const G=n.coords.length/h,p=m,g=m+(w-1)*f;d(n.coords,c,n.coords.length,p,c[p],c[p+1]),V(n.coords,c,f,y,d,p,g),d(n.coords,c,n.coords.length,g,c[g],c[g+1]);const M=n.coords.length/h-G;M>=i?n.lengths.push(M):N(n.coords,G*h),m+=w*f}return n.coords.length?n:null}function En(n,r,o,e){const s=n[r],t=n[r+1],l=n[o],u=n[o+1],i=n[e],c=n[e+1];let a=l,f=u,h=i-a,d=c-f;if(h!==0||d!==0){const m=((s-a)*h+(t-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=t-f,h*h+d*d}function V(n,r,o,e,s,t,l){let u,i=e,c=0;for(let a=t+o;a<l;a+=o)u=En(r,a,t,l),u>i&&(c=a,i=u);i>e&&(c-t>o&&V(n,r,o,e,s,t,c),s(n,r,n.length,c,r[c],r[c+1]),l-c>o&&V(n,r,o,e,s,c,l))}function Bn(n,r,o,e){var c;if(!((c=r==null?void 0:r.coords)!=null&&c.length))return null;const s=b(o,e);let t=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(r&&r.coords){const a=r.coords;for(let f=0;f<a.length;f+=s){const h=a[f],d=a[f+1];t=Math.min(t,h),u=Math.max(u,h),l=Math.min(l,d),i=Math.max(i,d)}}return an(n)?fn(n,t,l,u,i):hn(t,l,u,i,n),n}function Q(n,r,o,e,s){const{coords:t,lengths:l}=r,u=b(o,e);if(!t.length)return n!==r&&T(n),n;dn(s);const{originPosition:i,scale:c,translate:a}=s,f=Un;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!l.length){for(let y=0;y<u;++y)n.coords[y]=S(f,t[y],y);return n!==r&&T(n,u,0),n}let m=0;for(let y=0;y<l.length;y++){const w=l[y];n.lengths[y]=w;for(let g=0;g<u;++g)n.coords[m+g]=S(f,t[m+g],g);let G=n.coords[m],p=n.coords[m+1];m+=u;for(let g=1;g<w;g++,m+=u){G+=t[m]*h[0],p+=t[m+1]*h[1],n.coords[m]=G,n.coords[m+1]=p;for(let M=2;M<u;++M)n.coords[m+M]=S(f,t[m+M],M)}}return n!==r&&T(n,t.length,l.length),n}function Hn(n,r,o,e,s,t){if(T(n),n.lengths.push(...r.lengths),o===s&&e===t)for(let l=0;l<r.coords.length;l++)n.coords.push(r.coords[l]);else{const l=b(o,e),u=_(o,e,s,t),i=r.coords;for(let c=0;c<i.length;c+=l)u(n.coords,i,n.coords.length,c,i[c],i[c+1])}return n}function Ln(n,r,o,e){let s=0,t=n[e*r],l=n[e*(r+1)];for(let u=1;u<o;u++){const i=t+n[e*(r+u)],c=l+n[e*(r+u)+1],a=(i-t)*(c+l);t=i,l=c,s+=a}return .5*s}function Wn(n,r){const{coords:o,lengths:e}=n;let s=0,t=0;for(let l=0;l<e.length;l++){const u=e[l];t+=Ln(o,s,u,r),s+=u}return Math.abs(t)}function qn(n,r,o,e){return n*e-o*r===0&&n*o+r*e>0}function Xn(n,r,o,e,s){const t=b(e,s);if(!n.lengths.length){if(n.coords.length<2)return null;const[f,h]=n.coords,d=U(r,f),m=R(r,h);return new I([],[d,m])}const l=new I([],[0,0]),u=Y[o],i=o==="esriGeometryPolygon"||o==="esriGeometryPolyline";let c=0,a=0;for(let f=0;f<n.lengths.length;f++){const h=n.lengths[f],d=a;let m=U(r,n.coords[t*c]),y=R(r,n.coords[t*c+1]);l.coords[a++]=m,l.coords[a++]=y;let w=0,G=0,p=1;for(let g=1;g<h;g++){const M=U(r,n.coords[t*(g+c)]),F=R(r,n.coords[t*(g+c)+1]);if(M!==m||F!==y){const P=M-m,Z=F-y;i&&qn(w,G,P,Z)?(l.coords[a-2]+=P,l.coords[a-1]+=Z,m+=P,y+=Z):(l.coords[a++]=M,l.coords[a++]=F,m=M,y=F,w=P,G=Z,p+=1)}}p<u?a=d:l.lengths.push(p),c+=h}return l.lengths.length===0?null:l}function T(n,r=0,o=0){N(n.lengths,o),N(n.coords,r)}function N(n,r=0){n.length!==r&&(n.length=r)}const Un={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{X as C,Xn as F,Wn as G,nn as K,Q as M,q as N,H as R,Nn as U,rn as W,kn as X,Jn as a,Hn as b,K as d,Dn as f,Kn as h,Cn as i,Yn as j,Qn as m,on as n,_n as o,Bn as p,On as r,An as s,jn as u,L as w};
