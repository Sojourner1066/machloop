import{aT as i,a8 as l,N as p,a0 as e,a1 as u,a2 as o,O as d,cd as b}from"./index-BCSVvjKE.js";var a;let s=a=class extends i.ClonableMixin(l){constructor(r){super(r),this.stackedAttributes=null}cloneShallow(){return new a({...super.cloneShallow(),stackedAttributes:this.stackedAttributes})}toJSON(){return{...super.toJSON(),stackedAttributes:p(this.stackedAttributes)}}};e([u()],s.prototype,"stackedAttributes",void 0),s=a=e([o("esri.AttributeBinsGraphic")],s);const n=s;let t=class extends i.ClonableMixin(d){constructor(){super(...arguments),this.features=[]}readFeatures(r,c){return this.readFeaturesWithClass(r,c,n)}};e([u({type:[n],json:{write:!0}})],t.prototype,"features",void 0),e([b("features")],t.prototype,"readFeatures",null),t=e([o("esri.rest.support.AttributeBinsFeatureSet")],t);const A=t;export{A as c};
