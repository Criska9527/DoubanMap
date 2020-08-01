// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Evented ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/scheduling ./TextureTechnique ./Util ../../../webgl/Texture".split(" "),function(h,f,q,r,e,l,t,k,u,m){Object.defineProperty(f,"__esModule",{value:!0});var n=r.getLogger("esri.views.3d.webgl-engine.lib.TextureRepository");h=function(){function b(a,b,c){this._textures=a;this.rctx=c;this._idToRefCountedTexture=new Map;this._textureTechniqueConfig=new k.TextureTechniqueConfiguration;
this._loadingCount=0;this._frameUpdates=new Map;this._fallbackTextureData=new Uint8Array(256);this._fallbackTextureTransparentData=new Uint8Array(256);this._texturesToUnload=[];this.events=new q;this._textureTechnique=b.acquireAndReleaseExisting(k.TextureTechnique,this._textureTechniqueConfig,this._textureTechnique);for(a=0;a<this._fallbackTextureData.length;++a)this._fallbackTextureData[a]=255,this._fallbackTextureTransparentData[a]=0!==(a+1)%4?255:0;this._fallbackTextureDesc={target:3553,pixelFormat:6408,
dataType:5121,samplingMode:9728,width:8,height:8,maxAnisotropy:this.rctx.parameters.maxMaxAnisotropy}}b.prototype.dispose=function(){e.isSome(this._unloadDeferredHandle)&&(this._unloadDeferredHandle.remove(),this._unloadDeferredHandle=null,this._unloadDeferred());e.isSome(this._fallbackTexture)&&(this._fallbackTexture.dispose(),this._fallbackTexture=null);e.isSome(this._fallbackTextureTransparent)&&(this._fallbackTextureTransparent.dispose(),this._fallbackTextureTransparent=null);this._textures.forEach(function(a){return a.unload()})};
b.prototype.acquire=function(a,b,c){a=this._getOrCreateRef(a,b,c);a.ref();return a};b.prototype.update=function(){var a=this,b=!1;this._frameUpdates.forEach(function(c){var d=c.texture.frameUpdate(a.rctx,a._textureTechnique,c.previousToken);0<=d&&d!==c.previousToken&&(c.previousToken=d,b=!0)});b&&this.events.emit("changed",{requestType:0})};b.prototype._getOrCreateRef=function(a,b,c){var d=this._idToRefCountedTexture.get(a);return d?d:this._createNewRef(a,b,c)};b.prototype._createNewRef=function(a,
b,c){var d=this,e=this._textures.get(a);u.assert(void 0!==e);var v=e.events.on("unloaded",function(){v.remove();d._onTextureUnloaded(a)});b=!0===b;var g=new p;this._idToRefCountedTexture.set(a,g);var f=e.load(this.rctx,this._textureTechnique);this._loadingCount++;var h=function(b){d._loadingCount--;d._updateGLTexture(g,b);c&&c(g);e.requiresFrameUpdates&&d._frameUpdates.set(a,{texture:e,previousToken:-1});return g},k=function(a){d._loadingCount--;l.isAbortError(a)||n.error(a)};l.isThenable(f)?(this._updateGLTexture(g,
b?this.fallbackTextureTransparent:this.fallbackTexture),f.then(h,k)):h(f);return g};b.prototype._updateGLTexture=function(a,b){a.glTexture=b;this.events.emit("changed",{requestType:1})};b.prototype.release=function(a){var b=this,c=this._idToRefCountedTexture.get(a);c&&(c.unref(),c.isUnreferenced&&(this._texturesToUnload.push(a),e.isNone(this._unloadDeferredHandle)&&(this._unloadDeferredHandle=t.schedule(function(){return b._unloadDeferred()}))))};b.prototype._unloadDeferred=function(){for(var a=0,
b=this._texturesToUnload;a<b.length;a++){var c=b[a],d=this._textures.get(c),c=this._idToRefCountedTexture.get(c);d&&c&&c.isUnreferenced&&d.unload()}this._texturesToUnload.length=0;this._unloadDeferredHandle=null};b.prototype.getTexture=function(a){return this._textures.get(a)};Object.defineProperty(b.prototype,"loadingCount",{get:function(){return this._loadingCount},enumerable:!0,configurable:!0});b.prototype._onTextureUnloaded=function(a){this._idToRefCountedTexture.delete(a);this._frameUpdates.delete(a)};
Object.defineProperty(b.prototype,"fallbackTexture",{get:function(){e.isNone(this._fallbackTexture)&&(this._fallbackTexture=new m(this.rctx,this._fallbackTextureDesc,this._fallbackTextureData));return this._fallbackTexture},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fallbackTextureTransparent",{get:function(){e.isNone(this._fallbackTextureTransparent)&&(this._fallbackTextureTransparent=new m(this.rctx,this._fallbackTextureDesc,this._fallbackTextureTransparentData));return this._fallbackTextureTransparent},
enumerable:!0,configurable:!0});return b}();f.TextureRepository=h;var p=function(){function b(){this._refCount=0;this.glTexture=null}Object.defineProperty(b.prototype,"isUnreferenced",{get:function(){return 0===this._refCount},enumerable:!0,configurable:!0});b.prototype.ref=function(){++this._refCount};b.prototype.unref=function(){0===this._refCount?n.error("Cannot dereference texture that has no references!"):--this._refCount};return b}();f.RefCountedTexture=p});