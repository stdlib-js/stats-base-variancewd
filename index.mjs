// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n,t){var i,f,u,a,o,d,s;if(d=r-e,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(a=t<0?(1-r)*t:0,u=0,f=0,s=0;s<r;s++)u+=(i=(o=n[a])-f)*(o-(f+=i/(s+1))),a+=t;return u/d}r(e,"ndarray",(function(r,e,n,t,i){var f,u,a,o,d,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(o=i,a=0,u=0,l=0;l<r;l++)a+=(f=(d=n[o])-u)*(d-(u+=f/(l+1))),o+=t;return a/s}));export{e as default};
//# sourceMappingURL=index.mjs.map
