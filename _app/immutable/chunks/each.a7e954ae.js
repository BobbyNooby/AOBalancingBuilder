import{d as z,t as B}from"./index.e36801f4.js";import{r as C}from"./scheduler.5c8751cd.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,f){n.d(1),f.delete(n.key)}function H(n,f){B(n,1,1,()=>{f.delete(n.key)})}function I(n,f,k,x,A,g,h,_,p,j,w,q){let i=n.length,c=g.length,d=i;const u={};for(;d--;)u[n[d].key]=d;const l=[],a=new Map,m=new Map,M=[];for(d=c;d--;){const e=q(A,g,d),s=k(e);let t=h.get(s);t?x&&M.push(()=>t.p(e,f)):(t=j(s,e),t.c()),a.set(s,l[d]=t),s in u&&m.set(s,Math.abs(d-u[s]))}const v=new Set,S=new Set;function y(e){z(e,1),e.m(_,w),h.set(e.key,e),w=e.first,c--}for(;i&&c;){const e=l[c-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,c--):a.has(o)?!h.has(t)||v.has(t)?y(e):S.has(o)?i--:m.get(t)>m.get(o)?(S.add(t),y(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,h)}for(;c;)y(l[c-1]);return C(M),l}export{G as d,F as e,H as o,I as u};
