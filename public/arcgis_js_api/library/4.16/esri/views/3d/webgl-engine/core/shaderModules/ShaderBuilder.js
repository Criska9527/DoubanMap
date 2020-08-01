// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Logger","../../../../../core/MapUtils","../../../../../core/SetUtils"],function(e,f,l,m,n){Object.defineProperty(f,"__esModule",{value:!0});var p=l.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");e=function(){function a(){this.vertex=new g;this.fragment=new g;this.attributes=new q;this.varyings=new r;this.extensions=new t;this.defines=new h;this._includedModules=new Map}a.prototype.include=function(b,c){this._includedModules.has(b)?
this._includedModules.get(b)!==c&&p.error("Trying to include shader module multiple times with different sets of options."):(this._includedModules.set(b,c),"shaderModule"in b?b.shaderModule(this,c):b(this,c))};a.prototype.generateSource=function(b){var c=this.extensions.generateSource(b),a=this.attributes.generateSource(b),u=this.varyings.generateSource(),d="vertex"===b?this.vertex:this.fragment,e=d.uniforms.generateSource(),f=d.code.generateSource();b="vertex"===b?v:w;d=this.defines.generateSource().concat(d.defines.generateSource());
return"\n"+c.join("\n")+"\n\n"+d.join("\n")+"\n\n"+b+"\n\n"+e.join("\n")+"\n\n"+a.join("\n")+"\n\n"+u.join("\n")+"\n\n"+f.join("\n")};return a}();f.ShaderBuilder=e;var x=function(){function a(){this._entries=[];this._set=new Set}a.prototype.add=function(b,a,k){var c=b+"_"+a+"_"+k;this._set.has(c)||(this._entries.push([b,a,k]),this._set.add(c));return this};a.prototype.generateSource=function(){return this._entries.map(function(b){var a=b[2];return"uniform "+b[1]+" "+b[0]+(a?"["+a+"]":"")+";"})};return a}(),
y=function(){function a(){this._entries=[]}a.prototype.add=function(b){this._entries.push(b)};a.prototype.generateSource=function(){return this._entries};return a}(),g=function(){return function(){this.uniforms=new x;this.code=new y;this.defines=new h}}(),q=function(){function a(){this._entries=[]}a.prototype.add=function(b,a){this._entries.push([b,a])};a.prototype.generateSource=function(a){return"fragment"===a?[]:this._entries.map(function(a){return"attribute "+a[1]+" "+a[0]+";"})};return a}(),
r=function(){function a(){this._entries=[]}a.prototype.add=function(a,c){this._entries.push([a,c])};a.prototype.generateSource=function(){return this._entries.map(function(a){return"varying "+a[1]+" "+a[0]+";"})};return a}(),t=function(){function a(){this._entries=new Set}a.prototype.add=function(a){this._entries.add(a)};a.prototype.generateSource=function(b){var c="vertex"===b?a.WHITELIST_VERTEX:a.WHITELIST_FRAGMENT;return n.valuesOfSet(this._entries).filter(function(a){return 0<=c.indexOf(a)}).map(function(a){return"#extension "+
a+" : enable"})};a.WHITELIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"];a.WHITELIST_VERTEX=[];return a}(),h=function(){function a(){this._entries=new Map}a.prototype.addInt=function(a,c){c=0===c%1?c.toFixed(0):c.toString();this._entries.set(a,c)};a.prototype.addFloat=function(a,c){c=0===c%1?c.toFixed(1):c.toString();this._entries.set(a,c)};a.prototype.generateSource=function(){return m.pairsOfMap(this._entries).map(function(a){return"#define "+a[0]+" "+a[1]})};return a}(),
w="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",v="precision highp float;\nprecision highp sampler2D;"});