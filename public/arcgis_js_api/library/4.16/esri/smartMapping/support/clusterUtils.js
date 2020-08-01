// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/arrayUtils ../../core/maybe ../../core/MD5 ../../renderers/visualVariables/support/sizeVariableUtils ../popup/support/utils ./utils".split(" "),function(x,e,q,h,r,t,u,v){function k(b,a){var c;if(b){var f=b.field,d=b.valueExpression,e=b.normalizationField,g=b.normalizationType,l=b.normalizationTotal;c=null;d?c=d:f&&(d=v.getNormalizationType({normalizationType:g,normalizationField:e,normalizationTotal:l}))&&(d=d.toLowerCase(),c=f.toLowerCase()+",norm:"+d,e?c+=","+
e.toLowerCase():"percent-of-total"===d&&(f=l,t.isValidNumber(f)&&0!==f||(f=null),c+=","+f))}else c=null;b=h.isSome(c)?r.createMD5Hash(c):b.field;return a+"_"+b}function m(b,a){return(b=a.getField(b))&&b.type}function n(b,a){var c="field"in a&&a.field;b=c?m(c,b):null;return{field:c,fieldType:h.isSome(b)?b:null,valueExpression:"valueExpression"in a?a.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in a?a.valueExpressionTitle:null,normalizationField:"normalizationField"in a?a.normalizationField:
null,normalizationType:"normalizationType"in a?a.normalizationType:null,normalizationTotal:"normalizationTotal"in a?a.normalizationTotal:null}}function p(b,a){var c="rotation"===a.type?a.rotationType:null,f=a.legendOptions&&a.legendOptions.title,d=a.field;b=d?m(d,b):null;return{field:d,fieldType:h.isSome(b)?b:null,rotationType:c,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle||a.valueExpression&&f,normalizationField:"normalizationField"in a?a.normalizationField:null,
vvType:a.type}}function w(b){return b.map(function(a){var b='{\n        "value": "'+String(a.value)+'",\n        "label": "';a=(a=String(a.label))?a.replace(/"/g,'\\"'):"";return b+a+'"\n      }'})}function g(b,a){var c=[k(b,a)];"date"===b.fieldType&&c.push(b.fieldType.toLowerCase());b.rotationType&&c.push(b.rotationType.toLowerCase());return{statisticHash:c.join("_"),attributeInfo:b,statisticType:a}}Object.defineProperty(e,"__esModule",{value:!0});e.clusterCountField="cluster_count";e.getClusterFieldHash=
function(b,a){return b.split("cluster_"+a+"_").pop()};e.getStatisticId=k;e.getClusterField=function(b,a){return"cluster_"+k(b,a)};e.getRendererAttributeInfo=n;e.getVariableAttributeInfo=p;e.getPredominantTypeExpression=function(b,a,c){return"\n  var uvInfos \x3d ["+w(b).join(", ")+'];\n  var predominantType \x3d Text($feature["'+a+'"]);\n  var label \x3d "'+(c?c.replace(/"/g,'\\"'):"")+'";\n\n  for (var i \x3d 0; i \x3c Count(uvInfos); i++) {\n    if (uvInfos[i].value \x3d\x3d predominantType) {\n      label \x3d uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  '};
e.getStatisticInfo=g;e.getStatisticInfos=function(b,a,c){void 0===c&&(c=!0);var f=[],d=n(b,a);"class-breaks"===a.type?f.push(g(d,"avg")):"unique-value"===a.type&&f.push(g(d,"type"));d=0;for(a=u.getPrimaryVisualVariables(a);d<a.length;d++){var e=p(b,a[d]);f.push(g(e,"avg"))}return c?q.unique(f,function(a,b){return a.statisticHash===b.statisticHash}):f}});