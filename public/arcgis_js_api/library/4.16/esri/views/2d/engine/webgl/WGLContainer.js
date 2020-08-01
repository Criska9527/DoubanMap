// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../../engine ../Container ./ClippingInfo ./enums".split(" "),function(h,k,g,f,m,n,p,e){Object.defineProperty(k,"__esModule",{value:!0});h=function(d){function a(){var c=null!==d&&d.apply(this,arguments)||this;c._lastTime=null;c.name=c.constructor.name;return c}g.__extends(a,d);Object.defineProperty(a.prototype,"clips",{set:function(c){this._clips=c;this.children.forEach(function(b){return b.clips=c});this._updateClippingInfo()},enumerable:!0,configurable:!0});
a.prototype.doRender=function(c){var b=this.createRenderParams(c),l=b.painter,a=b.globalOpacity,d=b.profiler,a=b.drawPhase===e.WGLDrawPhase.LABEL?1:a*this.opacity;d.recordContainerStart(this.name);l.beforeRenderLayer(b,this._clippingInfos?255:0,a);this.updateTransforms(c.state);this.renderChildren(b);l.compositeLayer(b,a);d.recordContainerEnd()};a.prototype.renderChildren=function(c){f.isNone(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(this.stage.painter));for(var b=0,a=this._renderPasses;b<
a.length;b++)a[b].render(c)};a.prototype.createRenderParams=function(c){var b=Date.now(),a=(f.isSome(this._lastTime)?b-this._lastTime:0)/1E3;this._lastTime=b;return g.__assign(g.__assign({},c),{context:this.stage.context,painter:this.stage.painter,profiler:this.stage.profiler,renderingOptions:this.stage.renderingOptions,driverTestResult:this.stage.driverTestResult,timeDelta:a,timeline:this.stage.timeline})};a.prototype.prepareRenderPasses=function(a){var b=this;return[a.registerRenderPass({name:"clip",
brushes:[m.brushes.Clip],target:function(){return b._clippingInfos},drawPhase:e.WGLDrawPhase.MAP|e.WGLDrawPhase.LABEL|e.WGLDrawPhase.LABEL_ALPHA|e.WGLDrawPhase.DEBUG})]};a.prototype.updateTransforms=function(a){for(var b=0,c=this.children;b<c.length;b++)c[b].setTransform(a)};a.prototype.onAttach=function(){d.prototype.onAttach.call(this);this._updateClippingInfo()};a.prototype.onDetach=function(){d.prototype.onDetach.call(this);this._updateClippingInfo()};a.prototype._updateClippingInfo=function(){var a=
this;f.isSome(this._clippingInfos)&&(this._clippingInfos.forEach(function(a){return a.destroy()}),this._clippingInfos=null);if(this.stage){var b=this._clips;f.isSome(b)&&b.length&&(this._clippingInfos=b.items.map(function(b){return p.default.fromClipArea(a.stage,b)}));this.requestRender()}};return a}(n.Container);k.default=h});