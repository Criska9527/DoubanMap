// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/jsonMap ../../core/Logger ../../core/Warning ../../core/accessorSupport/decorators ./ColorVariable ./OpacityVariable ./RotationVariable ./SizeVariable".split(" "),function(y,z,f,k,l,m,n,h,p,q,r,t){var u=m.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),v={color:p,size:t,opacity:q,rotation:r},w=new l.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),x=/^\[([^\]]+)\]$/i;return function(g){function d(){var a=
null!==g&&g.apply(this,arguments)||this;a.colorVariables=null;a.opacityVariables=null;a.rotationVariables=null;a.sizeVariables=null;return a}f.__extends(d,g);Object.defineProperty(d.prototype,"visualVariables",{set:function(a){this._resetVariables();if((a=a&&a.filter(function(a){return!!a}))&&a.length){for(var c=0,e=a;c<e.length;c++){var b=e[c];switch(b.type){case "color":this.colorVariables.push(b);break;case "opacity":this.opacityVariables.push(b);break;case "rotation":this.rotationVariables.push(b);
break;case "size":this.sizeVariables.push(b)}}this.sizeVariables.length&&this.sizeVariables.some(function(a){return!!a.target})&&a.sort(function(a,b){var c=null;return c=a.target===b.target?0:a.target?1:-1});for(c=0;c<a.length;c++)b=a[c],b.index=c}this._set("visualVariables",a)},enumerable:!0,configurable:!0});d.prototype.readVariables=function(a,c,e){var b=c.rotationExpression;c=c.rotationType;if(b=(b=b&&b.match(x))&&b[1])a||(a=[]),a.push({type:"rotationInfo",rotationType:c,field:b});if(a)return a.map(function(a){var b=
w.read(a.type),c=v[b];c||(u.warn("Unknown variable type: "+b),e&&e.messages&&e.messages.push(new n("visual-variable:unsupported","visualVariable of type '"+b+"' is not supported",{definition:a,context:e})));b=new c;b.read(a,e);return b})};d.prototype.writeVariables=function(a,c){for(var e=[],b=0;b<a.length;b++){var d=a[b].toJSON(c);d&&e.push(d)}return e};d.prototype._resetVariables=function(){this.colorVariables=[];this.opacityVariables=[];this.rotationVariables=[];this.sizeVariables=[]};f.__decorate([h.property()],
d.prototype,"visualVariables",null);return d=f.__decorate([h.subclass("esri.renderers.visualVariables.VisualVariableFactory")],d)}(k)});