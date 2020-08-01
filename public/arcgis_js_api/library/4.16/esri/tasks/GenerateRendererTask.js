// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/promiseUtils ../core/accessorSupport/decorators ../layers/support/layerSourceUtils ../renderers/support/jsonUtils ./QueryTask ./Task ./support/Query ./support/StatisticDefinition".split(" "),function(u,v,c,l,m,e,n,p,q,r,t,h){return function(k){function d(a){a=k.call(this,a)||this;a._field=null;a.checkValueRange=null;a.gdbVersion=null;a.source=null;return a}c.__extends(d,k);Object.defineProperty(d.prototype,"parsedUrl",{get:function(){var a=this._parseUrl(this.url);
a.path+="/generateRenderer";return a},enumerable:!0,configurable:!0});d.prototype.execute=function(a,d){var f=this,b=a.classificationDefinition;a=c.__assign(c.__assign({},a.toJSON()),{f:"json"});this._field="esri.tasks.support.ClassBreaksDefinition"===b.declaredClass?b.classificationField:b.attributeField;this.source&&(b={source:n.sourceToJSON(this.source)},a.layer=JSON.stringify(b));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);a.classificationDef&&(a.classificationDef=JSON.stringify(a.classificationDef));
b={query:a};if(this.requestOptions||d)b=c.__assign(c.__assign(c.__assign({},this.requestOptions),d),b);return l(this.parsedUrl.path,b).then(function(a){return f._handleExecuteResponse(a)})};d.prototype._handleExecuteResponse=function(a){var d=this,f=a&&a.data;if(f){if(!this.checkValueRange)return a=this._processRendererJSON(f),m.resolve(a);a=new q(this.url);var b=new h({statisticType:"min",onStatisticField:this._field}),g=new h({statisticType:"max",onStatisticField:this._field}),b=new t({outStatistics:[b,
g]});return a.execute(b).then(function(a){a=a.features[0].attributes;var b=null,g=null,c;for(c in a)0===c.toLowerCase().indexOf("min")?b=a[c]:g=a[c];return d._processRendererJSON(f,b,g)})}};d.prototype._processRendererJSON=function(a,c,d){if("classBreaks"===a.type){var b=p.fromJSON(a);return{classBreaks:b.classBreakInfos.map(function(a,e){0===e&&void 0!==c&&null!==c&&(a.minValue=c);e===b.classBreakInfos.length-1&&void 0!==d&&null!==d&&(a.maxValue=d);return{minValue:a.minValue,maxValue:a.maxValue,
label:a.label}}),normalizationTotal:b.normalizationTotal}}return{uniqueValues:a.uniqueValueInfos.map(function(b,e){0===e&&void 0!==c&&null!==c&&(b.value=c);e===a.uniqueValueInfos.length-1&&void 0!==d&&null!==d&&(b.value=d);return{count:b.count,value:b.value,label:b.label}})}};c.__decorate([e.property()],d.prototype,"checkValueRange",void 0);c.__decorate([e.property()],d.prototype,"gdbVersion",void 0);c.__decorate([e.property()],d.prototype,"source",void 0);c.__decorate([e.property({readOnly:!0,dependsOn:["url"]})],
d.prototype,"parsedUrl",null);return d=c.__decorate([e.subclass("esri.tasks.GenerateRendererTask")],d)}(r)});