// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/jsonMap","../../geometry/support/jsonUtils"],function(k,e,g,f){Object.defineProperty(e,"__esModule",{value:!0});var h=new g.default({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",
esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});e.relationToRESTParameters=function(c){var b=c.toJSON(),a=b.geometries1;c=b.geometries2;var e=b.relation,b=b.relationParameter,d={};a&&a.length&&(d.geometries1=JSON.stringify({geometryType:f.getJsonType(a[0]),geometries:a}),a=a[0].spatialReference,d.sr=a.wkid?a.wkid:JSON.stringify(a));c&&0<c.length&&(d.geometries2=JSON.stringify({geometryType:f.getJsonType(c[0]),
geometries:c}));e&&(d.relation=h.toJSON(e));b&&(d.relationParam=b);return d}});