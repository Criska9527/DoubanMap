// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../extensions","../metadata"],function(t,g,q,m,h){function r(e,a){return null==a.get?function(){return this.__accessor__?this.__accessor__.getterStatic(e,a):a.value}:function(){return this.__accessor__?this.__accessor__.getterComputed(e,a):a.value}}function n(e){var a=e.prototype,d=a.declaredClass,f=h.getOwnClassMetadata(a).properties;m.processClassMetadatas(f,d);for(var b={},a=function(a){var d=f[a];b[a]={enumerable:!0,configurable:!0,get:r(a,d),set:function(b){var c=
this.__accessor__;if(!c)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b});else if(!Object.isFrozen(this)){if(c.initialized&&d.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+a+"' of "+this.declaredClass);if(2===c.lifecycle&&d.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+a+"' of "+this.declaredClass);c.set(a,b)}}}},d=0,p=Object.getOwnPropertyNames(f);d<p.length;d++)a(p[d]);Object.defineProperties(e.prototype,
b)}Object.defineProperty(g,"__esModule",{value:!0});var k=new Set,l=new Set;g.subclass=function(e){return function(a){a.prototype.declaredClass=e;m.processPrototypeMetadatas(h.getOwnClassMetadata(a.prototype).properties,e);n(a);for(var d=[],f=[],b=a.prototype;b;)b.hasOwnProperty("initialize")&&!k.has(b.initialize)&&(k.add(b.initialize),d.push(b.initialize)),b.hasOwnProperty("destroy")&&!l.has(b.destroy)&&(l.add(b.destroy),f.push(b.destroy)),b=Object.getPrototypeOf(b);k.clear();l.clear();b=function(a){function b(){for(var e=
[],c=0;c<arguments.length;c++)e[c]=arguments[c];c=a.apply(this,e)||this;c.constructor===b&&"function"===typeof c.postscript&&(d.length&&Object.defineProperty(c,"initialize",{enumerable:!1,configurable:!0,value:function(){for(var a=d.length-1;0<=a;a--)d[a].call(this)}}),f.length&&Object.defineProperty(c,"destroy",{enumerable:!1,configurable:!0,value:function(){for(var a=0;a<f.length;a++)f[a].call(this)}}),c.postscript.apply(c,e));return c}q.__extends(b,a);return b}(a);b.__accessorMetadata__=h.getOwnClassMetadata(a.prototype);
b.prototype.declaredClass=e;return b}};g.processClass=n});