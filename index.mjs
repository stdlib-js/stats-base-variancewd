// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,t){var a,i,f,o,u,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(o=t<0?(1-r)*t:0,f=0,i=0,s=0;s<r;s++)f+=(a=(u=e[o])-i)*(u-(i+=a/(s+1))),o+=t;return f/d}r(n,"ndarray",(function(r,n,e,t,a){var i,f,o,u,d,s,l;if(s=r-n,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(u=a,o=0,f=0,l=0;l<r;l++)o+=(i=(d=e[u])-f)*(d-(f+=i/(l+1))),u+=t;return o/s}));const{ndarray:e}=n;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
