"use strict";var l=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var p=l(function(C,y){
function g(r,a,t,e,d){var i,u,f,v,n,s,c,o,q;for(u=t.data,f=t.accessors[0],o=r-a,s=d,n=0,v=0,q=0;q<r;q++)c=f(u,s),i=c-v,v+=i/(q+1),n+=i*(c-v),s+=e;return n/o}y.exports=g
});var x=l(function(D,m){
var j=require('@stdlib/array-base-arraylike2object/dist'),k=p();function O(r,a,t,e,d){var i,u,f,v,n,s,c,o;if(c=r-a,r<=0||c<=0)return NaN;if(r===1||e===0)return 0;if(n=j(t),n.accessorProtocol)return k(r,a,n,e,d);for(v=d,f=0,u=0,o=0;o<r;o++)s=t[v],i=s-u,u+=i/(o+1),f+=i*(s-u),v+=e;return f/c}m.exports=O
});var b=l(function(E,w){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=x();function h(r,a,t,e){return R(r,a,t,e,P(r,e))}w.exports=h
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=b(),A=x();z(M,"ndarray",A);module.exports=M;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
