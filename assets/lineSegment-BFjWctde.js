import{X as P,U as M,aB as d,ey as $,an as B,ez as X,eA as m,eB as z,bE as j,eC as y}from"./index-BCSVvjKE.js";import{s as q}from"./sphere-DRB5B-QR.js";import{c as a}from"./plane-gAgGBHhk.js";function k(t){return t?{origin:P(t.origin),vector:P(t.vector)}:{origin:M(),vector:M()}}function D(t,r){const n=H.get();return n.origin=t,n.vector=r,n}function L(t,r=k()){return F(t.origin,t.vector,r)}function F(t,r,n=k()){return d(n.origin,t),d(n.vector,r),n}function N(t,r,n=k()){return d(n.origin,t),$(n.vector,r,t),n}function O(t,r){const n=$(a.get(),r,t.origin),c=B(t.vector,n),g=B(t.vector,t.vector),o=j(c/g,0,1),f=$(a.get(),z(a.get(),t.vector,o),n);return B(f,f)}function Q(t,r,n){return G(t,r,0,1,n)}function R(t,r,n){return m(n,t.origin,z(n,t.vector,r))}function G(t,r,n,c,g){const{vector:o,origin:f}=t,s=$(a.get(),r,f),b=B(o,s)/X(o);return z(g,o,j(b,n,c)),m(g,g,t.origin)}function T(t,r){if(S(t,D(r.origin,r.direction),!1,x)){const{tA:n,pB:c,distance2:g}=x;if(n>=0&&n<=1)return g;if(n<0)return y(t.origin,c);if(n>1)return y(m(a.get(),t.origin,t.vector),c)}return null}function V(t,r,n){return!!S(t,r,!0,x)&&(d(n,x.pA),!0)}function S(t,r,n,c){const o=t.origin,f=m(a.get(),o,t.vector),s=r.origin,b=m(a.get(),s,r.vector),u=a.get(),i=a.get();if(u[0]=o[0]-s[0],u[1]=o[1]-s[1],u[2]=o[2]-s[2],i[0]=b[0]-s[0],i[1]=b[1]-s[1],i[2]=b[2]-s[2],Math.abs(i[0])<1e-6&&Math.abs(i[1])<1e-6&&Math.abs(i[2])<1e-6)return!1;const e=a.get();if(e[0]=f[0]-o[0],e[1]=f[1]-o[1],e[2]=f[2]-o[2],Math.abs(e[0])<1e-6&&Math.abs(e[1])<1e-6&&Math.abs(e[2])<1e-6)return!1;const C=u[0]*i[0]+u[1]*i[1]+u[2]*i[2],A=i[0]*e[0]+i[1]*e[1]+i[2]*e[2],U=u[0]*e[0]+u[1]*e[1]+u[2]*e[2],w=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],E=(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])*w-A*A;if(Math.abs(E)<1e-6)return!1;let v=(C*A-U*w)/E,p=(C+A*v)/w;n&&(v=j(v,0,1),p=j(p,0,1));const h=a.get(),l=a.get();return h[0]=o[0]+v*e[0],h[1]=o[1]+v*e[1],h[2]=o[2]+v*e[2],l[0]=s[0]+p*i[0],l[1]=s[1]+p*i[1],l[2]=s[2]+p*i[2],c.tA=v,c.tB=p,c.pA=h,c.pB=l,c.distance2=y(h,l),!0}const x={tA:0,tB:0,pA:M(),pB:M(),distance2:0},H=new q(()=>k());export{G as A,V as B,O as M,N as b,T as d,F as h,Q as j,R as l,L as p,k as v};
