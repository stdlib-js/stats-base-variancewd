// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t){var a,i,f,u,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(u=t<0?(1-r)*t:0,f=0,i=0,s=0;s<r;s++)f+=(a=(o=n[u])-i)*(o-(i+=a/(s+1))),u+=t;return f/d};r(e,"ndarray",(function(r,e,n,t,a){var i,f,u,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(o=a,u=0,f=0,l=0;l<r;l++)u+=(i=(d=n[o])-f)*(d-(f+=i/(l+1))),o+=t;return u/s}));var n=e;export{n as default};
//# sourceMappingURL=index.mjs.map
