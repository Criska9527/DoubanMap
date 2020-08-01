// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/lang ../../core/screenUtils ../../core/accessorSupport/decorators ../support/materialUtils".split(" "),function(m,n,c,g,h,k,l,d,e){return function(f){function b(a){a=f.call(this,a)||this;a.color=new g([0,0,0,1]);a.extensionLength=0;a.size=l.px2pt(1);return a}c.__extends(b,f);b.prototype.normalizeCtorArgs=function(a){a&&a.type&&(a=c.__assign({},a),delete a.type);return a};b.prototype.clone=function(){};b.prototype.cloneProperties=
function(){return{color:k.clone(this.color),size:this.size,extensionLength:this.extensionLength}};c.__decorate([d.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);c.__decorate([d.property(e.colorAndTransparencyProperty)],b.prototype,"color",void 0);c.__decorate([d.property(c.__assign(c.__assign({},e.screenSizeProperty),{json:{write:{overridePolicy:function(a){return{enabled:!!a}}}}}))],b.prototype,"extensionLength",void 0);c.__decorate([d.property(e.screenSizeProperty)],
b.prototype,"size",void 0);return b=c.__decorate([d.subclass("esri.symbols.edges.Edges3D")],b)}(h.JSONSupport)});