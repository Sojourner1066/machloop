import{j7 as m,bO as R,ba as v,a0 as V,a2 as _}from"./index-BCSVvjKE.js";import{S as y,p as I}from"./BitmapTechnique-Ctzfck9e.js";import{r as M}from"./WGLContainer-B7ZgRvVt.js";import{i as A}from"./TileContainer-DRvhRlwz.js";let C=class extends M{constructor(e,i,r,s,n,o,a=null){super(e,i,r,s,n,o),this.bitmap=new y(a),this.bitmap.coordScale=[n,o],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:m(),tileMat3:m()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}},q=class extends A{constructor(){super(...arguments),this._bitmapTechnique=null}get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const i=this.tileInfoView.getTileBounds(R(),e),r=this.tileInfoView.getTileResolution(e.level),[s,n]=this.tileInfoView.tileInfo.size;return new C(e,r,i[0],i[3],s,n)}onAttach(){super.onAttach(),this._bitmapTechnique=new I}onDetach(){var e;super.onDetach(),(e=this._bitmapTechnique)==null||e.shutdown(),this._bitmapTechnique=null}renderChildren(e){if(super.renderChildren(e),!this.visible||e.drawPhase!==v.MAP||this._bitmapTechnique==null)return;const i=this.children.map(r=>r.bitmap);this._bitmapTechnique.render(e,{bitmaps:i})}};const H=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new q(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren(),this._bitmapView=null}};return e=V([_("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function D(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function F(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function z(t,e,i,r){if(i.level===r.level)return e;const s=t.tileInfo.size,n=t.getTileResolution(i.level),o=t.getTileResolution(r.level);let a=t.getLODInfoAt(r.level);const d=a.getXForColumn(r.col),u=a.getYForRow(r.row);a=t.getLODInfoAt(i.level);const p=a.getXForColumn(i.col),f=a.getYForRow(i.row),l=D(e)/s[0],h=F(e)/s[1],b=Math.round(l*((d-p)/n)),w=Math.round(h*(-(u-f)/n)),g=Math.round(l*s[0]*(o/n)),T=Math.round(h*s[1]*(o/n)),c=L(s);return c.getContext("2d").drawImage(e,b,w,g,T,0,0,s[0],s[1]),c}function L(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{z as n,L as o,H as r};
