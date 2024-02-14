"use strict";var x=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var l=x(function(j,d){
function M(r,a,o,t){var c,e,v,i,u,s,n;if(s=r-a,r<=0||s<=0)return NaN;if(r===1||t===0)return 0;for(t<0?i=(1-r)*t:i=0,v=0,e=0,n=0;n<r;n++)u=o[i],c=u-e,e+=c/(n+1),v+=c*(u-e),i+=t;return v/s}d.exports=M
});var q=x(function(k,p){
function O(r,a,o,t,c){var e,v,i,u,s,n,f;if(n=r-a,r<=0||n<=0)return NaN;if(r===1||t===0)return 0;for(u=c,i=0,v=0,f=0;f<r;f++)s=o[u],e=s-v,v+=e/(f+1),i+=e*(s-v),u+=t;return i/n}p.exports=O
});var y=x(function(z,w){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=l(),b=q();R(m,"ndarray",b);w.exports=m
});var g=y();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
