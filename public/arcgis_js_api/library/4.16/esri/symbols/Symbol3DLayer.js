// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(a,k,d,g,h,e){var f=g.strict()({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text",Water:"water"});a=function(a){function b(c){c=a.call(this,c)||this;c.enabled=!0;c.type=null;return c}d.__extends(b,a);b.prototype.writeEnabled=function(c,a,b){c||(a[b]=c)};d.__decorate([e.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],
b.prototype,"enabled",void 0);d.__decorate([e.writer("enabled")],b.prototype,"writeEnabled",null);d.__decorate([e.property({type:f.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:f.write}}})],b.prototype,"type",void 0);return b=d.__decorate([e.subclass("esri.symbols.Symbol3DLayer")],b)}(h.JSONSupport);(a||(a={})).typeJSONDictionary=f;return a});