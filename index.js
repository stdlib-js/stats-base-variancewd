// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;function c(e,r,t,n){var o,a,i,l,u,f,c;if(f=e-r,e<=0||f<=0)return NaN;if(1===e||0===n)return 0;for(l=n<0?(1-e)*n:0,i=0,a=0,c=0;c<e;c++)i+=(o=(u=t[l])-a)*(u-(a+=o/(c+1))),l+=n;return i/f}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),d&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o){var a,i,l,u,f,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(u=o,l=0,i=0,_=0;_<e;_++)l+=(a=(f=t[u])-i)*(f-(i+=a/(_+1))),u+=n;return l/c}});const{ndarray:_}=variancewd;e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).variancewd={});
//# sourceMappingURL=index.js.map
