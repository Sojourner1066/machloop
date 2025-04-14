import{s as h,t as G}from"./SimpleGeometryCursor-B92kdZ15.js";import{N as m,j as a,a as i,f as g,P as f}from"./Transformation2D-B_tst7So.js";import{Y as p,a as d,e as s,N as y,n as M,b as X,s as Y,I as _,q}from"./ProjectionTransformation-Dsl-YPnA.js";class v{getOperatorType(){return 10102}supportsCurves(){return!1}accelerateGeometry(r,u,n){return!1}canAccelerateGeometry(r){return!1}executeMany(r,u,n){return new w(u,r,n)}execute(r,u){return C(r)}isConvex(r,u){if(m(r),a(r),r.isEmpty())return!0;const n=r.getGeometryType();if(n===i.enumPoint)return!0;if(n===i.enumEnvelope){const o=r;return o.getXMin()!==o.getXMax()&&o.getYMin()!==o.getYMax()}if(g(n)){const o=r;return!o.getStartXY().equals(o.getEndXY())}if(n===i.enumMultiPoint)return r.getPointCount()===1;if(n===i.enumPolyline){const o=r;return o.getPathCount()===1&&o.getPointCount()===2&&!o.getXY(0).equals(o.getXY(1))}if(n===i.enumGeometryCollection){const o=r;return o.getGeometryCount()===1&&this.isConvex(o.getGeometry(0),u)}const t=r;return!(t.getPathCount()!==1||t.getPointCount()<3)&&p(t,0)}constructOrientedMinimumBoundingBox(r,u,n,t,o){d(r,u,n,t,o)}}class w extends G{constructor(r,u,n){super(),u||f(""),this.m_progressTracker=n,this.m_index=-1,this.m_bMerge=r,this.m_bDone=!1,this.m_inputGeometryCursor=u}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}next(){if(this.m_bMerge){if(!this.m_bDone){const r=x(this.m_inputGeometryCursor);return this.m_bDone=!0,r}return null}if(!this.m_bDone){const r=this.m_inputGeometryCursor.next();if(r!==null)return m(r),a(r),this.m_index=this.m_inputGeometryCursor.getGeometryID(),C(r);this.m_bDone=!0}return null}}function x(e,r){const u=new q;let n;for(;n=e.next();)m(n),a(n),u.addGeometry(n);return u.getBoundingGeometry()}function C(e,r){if(e||f(""),m(e),a(e),e.isEmpty())return e.createInstance();const u=e.getGeometryType();if(g(u)){const n=e;if(n.getStartXY().equals(n.getEndXY())){const t=new s;return n.queryStart(t),t}{const t=new s,o=new y({vd:e.getDescription()});return n.queryStart(t),o.startPathPoint(t),n.queryEnd(t),o.lineToPoint(t),o}}if(u===i.enumEnvelope){const n=e,t=new M;if(n.queryEnvelope(t),t.xmin===t.xmax&&t.ymin===t.ymax){const o=new s;return n.queryCornerByVal(0,o),o}if(t.xmin===t.xmax||t.ymin===t.ymax){const o=new s,l=new y({vd:e.getDescription()});return n.queryCornerByVal(0,o),l.startPathPoint(o),n.queryCornerByVal(1,o),l.lineToPoint(o),l}{const o=new X({vd:e.getDescription()});return o.addEnvelope(n,!1),o}}if(u===i.enumGeometryCollection)return x(Y(e,-1));if(P(e)){if(u===i.enumMultiPoint){const n=e,t=new s;return n.getPointByVal(0,t),t}return e}return _(e)}function P(e,r){if(m(e),a(e),e.isEmpty())return!0;const u=e.getGeometryType();if(u===i.enumPoint)return!0;if(u===i.enumEnvelope){const t=e;return t.getXMin()!==t.getXMax()&&t.getYMin()!==t.getYMax()}if(g(u)){const t=e;return!t.getStartXY().equals(t.getEndXY())}if(u===i.enumMultiPoint)return e.getPointCount()===1;if(u===i.enumPolyline){const t=e;return t.getPathCount()===1&&t.getPointCount()===2&&!t.getXY(0).equals(t.getXY(1))}if(u===i.enumGeometryCollection){const t=e;return t.getGeometryCount()===1&&P(t.getGeometry(0))}const n=e;return!(n.getPathCount()!==1||n.getPointCount()<3)&&p(n,0)}const c=new v;function B(e){return c.execute(e,null)}function T(e,r){const u=c.executeMany(new h(e),r,null);return Array.from(u)}function I(e){return c.isConvex(e,null)}function S(){return c.supportsCurves()}export{B as M,S as X,I as _,T as v};
