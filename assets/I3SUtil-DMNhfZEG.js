import{P as N,eD as D,eE as C,bO as u}from"./index-BCSVvjKE.js";import"./mat4f64-Dk4dwAN8.js";import"./projectVectorToVector-DV5W_8-J.js";import"./sphere-DRB5B-QR.js";import{I as R}from"./I3SBinaryReader-G29obL-R.js";import{g as _}from"./edgeUtils-B-MZinji.js";import"./NormalAttribute.glsl-BIpMjOeO.js";import{I as g}from"./orientedBoundingBox-_rBUPh5x.js";u();var l;async function v(o,a,r,c,S,T,m,e){const f=[];for(const t of a)if(t&&S.includes(t.name)){const n=`${o}/nodes/${r}/attributes/${t.key}/0`;f.push({url:n,storageInfo:t})}const E=await Promise.allSettled(f.map(t=>N(t.url,{responseType:"array-buffer",query:{...m,token:T},signal:e==null?void 0:e.signal}).then(n=>R(t.storageInfo,n.data)))),i=[];for(const t of c){const n={};for(let s=0;s<E.length;s++){const I=E[s];if(I.status==="fulfilled"){const p=I.value;n[f[s].storageInfo.name]=O(p,t)}}i.push(n)}return i}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(l||(l={}));const y=-32768,d=-2147483648;function O(o,a){if(!o)return null;const r=o[a];return D(o)?r===y?null:r:C(o)?r===d?null:r:r!=r?null:r}_({color:[0,0,0,0],opacity:0});u();u();new g;new Array(72);export{v as V};
