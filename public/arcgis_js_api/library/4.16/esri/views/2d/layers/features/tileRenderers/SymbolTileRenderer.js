// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/features/tileRenderers/BaseTileRenderer":function(){define(["require","exports","tslib","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators"],function(p,e,a,q,g){Object.defineProperty(e,"__esModule",{value:!0});p=function(e){function c(a){a=e.call(this,a)||this;a.tiles=new Map;return a}a.__extends(c,e);c.prototype.destroy=function(){this.tiles.clear();this.layer=this.layerView=this.tileInfoView=this.tiles=null};Object.defineProperty(c.prototype,
"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0});c.prototype.acquireTile=function(a){var c=this,b=this.createTile(a);b.once("isReady",function(){return c.notifyChange("updating")});this.tiles.set(a.id,b);return b};c.prototype.lockAttributeTextureUpload=function(){};c.prototype.unlockAttributeTextureUpload=function(){};c.prototype.forceAttributeTextureUpload=function(){};c.prototype.forEachTile=function(a){this.tiles.forEach(a)};c.prototype.releaseTile=function(a){this.tiles.delete(a.key.id);
this.disposeTile(a)};c.prototype.isUpdating=function(){var a=!0;this.tiles.forEach(function(c){a=a&&c.isReady});return!a};c.prototype.setHighlight=function(){};c.prototype.invalidateLabels=function(){};c.prototype.requestUpdate=function(){this.layerView.requestUpdate()};a.__decorate([g.property()],c.prototype,"layer",void 0);a.__decorate([g.property()],c.prototype,"layerView",void 0);a.__decorate([g.property()],c.prototype,"tileInfoView",void 0);a.__decorate([g.property()],c.prototype,"updating",
null);return c=a.__decorate([g.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],c)}(q.HandleOwner);e.default=p})},"esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":function(){define("require exports tslib ../../../../../../core/screenUtils ../../../../engine ../../../../engine/webgl/definitions ../../../../../3d/layers/support/FastSymbolUpdates".split(" "),function(p,e,a,q,g,u,c){function h(a){return{value:a.value,size:q.toPt(a.size)}}function k(a){return a.map(function(a){return h(a)})}
function b(a){return"string"===typeof a||"number"===typeof a?q.toPt(a):{type:"size",expression:a.expression,stops:k(a.stops)}}function v(a){var b={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(g.Utils.isString(a.field))if(a.stops){if(8<a.stops.length)return null;var c=a.stops;for(a=0;8>a;++a){var m=c[Math.min(a,c.length-1)];b.values[a]=m.value;b.opacities[a]=m.opacity}}else return null;else if(a.stops&&0<=a.stops.length)for(c=a.stops&&0<=a.stops.length&&a.stops[0].opacity,a=0;8>a;a++)b.values[a]=
Infinity,b.opacities[a]=c;else return null;return b}Object.defineProperty(e,"__esModule",{value:!0});var w=g.enums.WGLVVFlag;e.getVisualVariableSizeValueRepresentationRatio=function(a,b){if(!a||!b)return a;switch(b){case "radius":case "distance":return 2*a;case "area":return Math.sqrt(a)}return a};e.stopToSizeStop=h;e.normalizeSizeStops=k;e.normalizeSizeElement=b;e.getVisualVariablesFields=function(a){var b=a&&0<a.length?{}:null;b&&a.forEach(function(a){var c=a.type;a.field&&(b[c]=a.field)});return b};
var m=function(a){var b=[],c=[];a=k(a);for(var m=a.length,g=0;6>g;g++){var h=a[Math.min(g,m-1)];b.push(h.value);c.push(null==h.size?u.NAN_MAGIC_NUMBER:q.pt2px(h.size))}return{values:new Float32Array(b),sizes:new Float32Array(c)}};e.convertVisualVariables=function(h){var e=h&&0<h.length?{}:null,l=e?{}:null;if(!e)return{vvFields:e,vvRanges:l};for(var q=0;q<h.length;q++){var n=h[q],r=n.type;n.field&&(e[r]=n.field);if("size"===r)switch(l.size||(l.size={}),g.getTypeOfSizeVisualVariable(n)){case w.SIZE_MINMAX_VALUE:l.size.minMaxValue=
{minDataValue:n.minDataValue,maxDataValue:n.maxDataValue,minSize:b(n.minSize),maxSize:b(n.maxSize)};break;case w.SIZE_SCALE_STOPS:l.size.scaleStops={stops:k(n.stops)};break;case w.SIZE_FIELD_STOPS:if(n.levels){var r={},p;for(p in n.levels)r[p]=m(n.levels[p]);l.size.fieldStops={type:"level-dependent",levels:r}}else l.size.fieldStops=a.__assign({type:"static"},m(n.stops));break;case w.SIZE_UNIT_VALUE:l.size.unitValue={unit:n.valueUnit,valueRepresentation:n.valueRepresentation}}else if("color"===r){if(n=
c.convertVisualVariables([n],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null}))for(l.color=n.color,n=0;32>n;n+=4)g.color.premultiplyAlpha(l.color.colors,n,!0)}else"opacity"===r?l.opacity=v(n):"rotation"===r&&(l.rotation={type:n.rotationType})}return{vvFields:e,vvRanges:l}}})},"esri/views/3d/layers/support/FastSymbolUpdates":function(){define("require exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../renderers/support/utils ../../support/debugFlags".split(" "),
function(p,e,a,q,g,u,c,h,k,b,v,w){function m(f){return null!==f&&void 0!==f}function r(f){return"number"===typeof f}function x(f){return"string"===typeof f}function l(f,d){f&&f.push(d)}function t(f,d,a,b,c){var y=f.minSize,G=f.maxSize;if(f.expression)return l(c,"Could not convert size info: expression not supported"),!1;if(f.useSymbolValue)return f=b.symbolSize[a],d.minSize[a]=f,d.maxSize[a]=f,d.offset[a]=d.minSize[a],d.factor[a]=0,d.type[a]=1,!0;if(m(f.field)){if(m(f.stops)){if(2===f.stops.length&&
r(f.stops[0].size)&&r(f.stops[1].size))return n(f.stops[0].size,f.stops[1].size,f.stops[0].value,f.stops[1].value,d,a),d.type[a]=1,!0;l(c,"Could not convert size info: stops only supported with 2 elements");return!1}if(r(y)&&r(G)&&m(f.minDataValue)&&m(f.maxDataValue))return n(y,G,f.minDataValue,f.maxDataValue,d,a),d.type[a]=1,!0;if(null!=v.meterIn[f.valueUnit])return d.minSize[a]=-Infinity,d.maxSize[a]=Infinity,d.offset[a]=0,d.factor[a]=1/v.meterIn[f.valueUnit],d.type[a]=1,!0;if("unknown"===f.valueUnit)return l(c,
"Could not convert size info: proportional size not supported"),!1;l(c,"Could not convert size info: scale-dependent size not supported");return!1}if(!m(f.field)){if(f.stops&&f.stops[0]&&r(f.stops[0].size))return d.minSize[a]=f.stops[0].size,d.maxSize[a]=f.stops[0].size,d.offset[a]=d.minSize[a],d.factor[a]=0,d.type[a]=1,!0;if(r(y))return d.minSize[a]=y,d.maxSize[a]=y,d.offset[a]=y,d.factor[a]=0,d.type[a]=1,!0}l(c,"Could not convert size info: unsupported variant of sizeInfo");return!1}function n(f,
a,b,c,h,g){c=0<Math.abs(c-b)?(a-f)/(c-b):0;h.minSize[g]=0<c?f:a;h.maxSize[g]=0<c?a:f;h.offset[g]=f-b*c;h.factor[g]=c}function C(f,a,b,c){if(f.normalizationField||f.valueRepresentation)return l(c,"Could not convert size info: unsupported property"),null;var d=f.field;if(null!=d&&!x(d))return l(c,"Could not convert size info: field is not a string"),null;if(!a.size)a.size={field:f.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(f.field)if(!a.size.field)a.size.field=
f.field;else if(f.field!==a.size.field)return l(c,"Could not convert size info: multiple fields in use"),null;switch(f.axis){case "width":return(d=t(f,a.size,0,b,c))?a:null;case "height":return(d=t(f,a.size,2,b,c))?a:null;case "depth":return(d=t(f,a.size,1,b,c))?a:null;case "width-and-depth":return(d=t(f,a.size,0,b,c))&&t(f,a.size,1,b,c),d?a:null;case null:case void 0:case "all":return(d=(d=(d=t(f,a.size,0,b,c))&&t(f,a.size,1,b,c))&&t(f,a.size,2,b,c))?a:null;default:return l(c,'Could not convert size info: unknown axis "'+
f.axis+'""'),null}}function I(f,a,b){for(var d=0;3>d;++d){var c=a.unitInMeters;1===f.type[d]&&(c*=a.modelSize[d],f.type[d]=2);f.minSize[d]/=c;f.maxSize[d]/=c;f.offset[d]/=c;f.factor[d]/=c}if(0!==f.type[0])a=0;else if(0!==f.type[1])a=1;else if(0!==f.type[2])a=2;else return l(b,"No size axis contains a valid size or scale"),!1;for(d=0;3>d;++d)0===f.type[d]&&(f.minSize[d]=f.minSize[a],f.maxSize[d]=f.maxSize[a],f.offset[d]=f.offset[a],f.factor[d]=f.factor[a],f.type[d]=f.type[a]);return!0}function H(a,
d,b){a[4*d+0]=b.r/255;a[4*d+1]=b.g/255;a[4*d+2]=b.b/255;a[4*d+3]=b.a}function J(a,d,b){if(a.normalizationField)return l(b,"Could not convert color info: unsupported property"),null;if(x(a.field))if(a.stops){if(8<a.stops.length)return l(b,"Could not convert color info: too many color stops"),null;d.color={field:a.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};b=a.stops;for(a=0;8>a;++a){var f=b[Math.min(a,b.length-1)];d.color.values[a]=f.value;
H(d.color.colors,a,f.color)}}else return l(b,"Could not convert color info: missing stops or colors"),null;else if(a.stops&&0<=a.stops.length)for(b=a.stops&&0<=a.stops.length&&a.stops[0].color,d.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},a=0;8>a;a++)d.color.values[a]=Infinity,H(d.color.colors,a,b);else return l(b,"Could not convert color info: no field and no colors/stops"),null;return d}function K(a,d,b){if(a.normalizationField)return l(b,
"Could not convert opacity info: unsupported property"),null;if(x(a.field))if(a.stops){if(8<a.stops.length)return l(b,"Could not convert opacity info: too many opacity stops"),null;d.opacity={field:a.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};b=a.stops;for(a=0;8>a;++a){var f=b[Math.min(a,b.length-1)];d.opacity.values[a]=f.value;d.opacity.opacityValues[a]=f.opacity}}else return l(b,"Could not convert opacity info: missing stops or opacities"),null;else if(a.stops&&0<=a.stops.length)for(b=
a.stops&&0<=a.stops.length&&a.stops[0].opacity,d.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},a=0;8>a;a++)d.opacity.values[a]=Infinity,d.opacity.opacityValues[a]=b;else return l(b,"Could not convert opacity info: no field and no opacities/stops"),null;return d}function D(a,d,b){a=2===b&&"arithmetic"===a.rotationType;d.offset[b]=a?90:0;d.factor[b]=a?-1:1;d.type[b]=1}function L(a,d,b){if(!x(a.field))return l(b,"Could not convert rotation info: field is not a string"),
null;if(!d.rotation)d.rotation={field:a.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(a.field)if(!d.rotation.field)d.rotation.field=a.field;else if(a.field!==d.rotation.field)return l(b,"Could not convert rotation info: multiple fields in use"),null;switch(a.axis){case "tilt":return D(a,d.rotation,0),d;case "roll":return D(a,d.rotation,1),d;case null:case void 0:case "heading":return D(a,d.rotation,2),d;default:return l(b,'Could not convert rotation info: unknown axis "'+a.axis+'""'),
null}}function E(b,d,c){if(!b)return null;var f=!d.supportedTypes||!!d.supportedTypes.size,h=!d.supportedTypes||!!d.supportedTypes.color,g=!d.supportedTypes||!!d.supportedTypes.rotation,m=!!d.supportedTypes&&!!d.supportedTypes.opacity,e=b.reduce(function(b,e){if(!b)return b;if(e.valueExpression)return l(c,"Could not convert visual variables: arcade expressions not supported"),null;switch(e.type){case "size":return f?C(e,b,d,c):b;case "color":return h?J(e,b,c):b;case "opacity":return m?K(e,b,c):null;
case "rotation":return g?L(e,b,c):b;default:return a.neverReached(e),null}},{size:null,color:null,opacity:null,rotation:null});return 0<b.length&&e&&!e.size&&!e.color&&!e.opacity&&!e.rotation||e&&e.size&&!I(e.size,d,c)?null:e}function A(a,b,c){if(!!a!==!!b||a&&a.field!==b.field)return!1;if(a&&"rotation"===c)for(c=0;3>c;c++)if(a.type[c]!==b.type[c]||a.offset[c]!==b.offset[c]||a.factor[c]!==b.factor[c])return!1;return!0}function F(a,b){var d={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,
vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},f=a&&null!=a.size;a&&a.size?(d.vvSizeEnabled=!0,d.vvSizeMinSize=a.size.minSize,d.vvSizeMaxSize=a.size.maxSize,d.vvSizeOffset=a.size.offset,d.vvSizeFactor=a.size.factor):a&&f&&(d.vvSizeValue=b.transformation.scale);if(a&&f){d.vvSymbolAnchor=b.transformation.anchor;d.vvSymbolRotationMatrix=u.mat3f64.create();
c.mat4.identity(z);var e=b.transformation.rotation[2],f=b.transformation.rotation[0],m=b.transformation.rotation[1];b=z;void 0===b&&(b=h.mat4f64.create());e=e||0;f=f||0;m=m||0;0!==e&&c.mat4.rotateZ(b,b,-e/180*Math.PI);0!==f&&c.mat4.rotateX(b,b,f/180*Math.PI);0!==m&&c.mat4.rotateY(b,b,m/180*Math.PI);g.mat3.fromMat4(d.vvSymbolRotationMatrix,z)}a&&a.color&&(d.vvColorEnabled=!0,d.vvColorValues=a.color.values,d.vvColorColors=a.color.colors);a&&a.opacity&&(d.vvOpacityEnabled=!0,d.vvOpacityValues=a.opacity.values,
d.vvOpacityOpacities=a.opacity.opacityValues);return d}Object.defineProperty(e,"__esModule",{value:!0});e.convertVisualVariables=E;e.initFastSymbolUpdatesState=function(a,b){return!a||w.DISABLE_FAST_UPDATES?{enabled:!1}:(a=E(a.visualVariables,b))?{enabled:!0,visualVariables:a,materialParameters:F(a,b),requiresShaderTransformation:a&&null!=a.size}:{enabled:!1}};e.updateFastSymbolUpdatesState=function(a,b,c){if(!b||!a.enabled)return!1;var d=a.visualVariables;b=E(b.visualVariables,c);if(!(b&&A(d.size,
b.size,"size")&&A(d.color,b.color,"color")&&A(d.rotation,b.rotation,"rotation")&&A(d.opacity,b.opacity,"opacity")))return!1;a.visualVariables=b;a.materialParameters=F(b,c);a.requiresShaderTransformation=b&&null!=b.size;return!0};e.getMaterialParams=F;var B;(function(a){var d=h.mat4f64.create(),f=b.vec3f64.create();a.evaluateModelTransform=function(a,b,e){if(!a.vvSizeEnabled)return e;c.mat4.copy(d,e);e=a.vvSymbolRotationMatrix;c.mat4.set(z,e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1);
c.mat4.multiply(d,d,z);for(e=0;3>e;++e)f[e]=q.clamp(a.vvSizeOffset[e]+b[0]*a.vvSizeFactor[e],a.vvSizeMinSize[e],a.vvSizeMaxSize[e]);c.mat4.scale(d,d,f);c.mat4.translate(d,d,a.vvSymbolAnchor);return d};a.evaluateModelTransformScale=function(a,b,c){if(!b.vvSizeEnabled)return k.vec3.set(a,1,1,1);for(var d=0;3>d;++d)a[d]=q.clamp(b.vvSizeOffset[d]+c[0]*b.vvSizeFactor[d],b.vvSizeMinSize[d],b.vvSizeMaxSize[d]);return a}})(B||(B={}));var z=h.mat4f64.create();e.evaluateModelTransform=B.evaluateModelTransform;
e.evaluateModelTransformScale=B.evaluateModelTransformScale})},"esri/core/libs/gl-matrix-2/mat3f64":function(){define(["require","exports","./factories/mat3f64"],function(p,e,a){Object.defineProperty(e,"__esModule",{value:!0});e.mat3f64=a})},"esri/core/libs/gl-matrix-2/factories/mat3f64":function(){define(["require","exports"],function(p,e){Object.defineProperty(e,"__esModule",{value:!0});e.create=function(){return[1,0,0,0,1,0,0,0,1]};e.clone=function(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],
a[7],a[8]]};e.fromValues=function(a,e,g,p,c,h,k,b,v){return[a,e,g,p,c,h,k,b,v]};e.createView=function(a,e){return new Float64Array(a,e,9)}})},"esri/core/libs/gl-matrix-2/mat4f64":function(){define(["require","exports","./factories/mat4f64"],function(p,e,a){Object.defineProperty(e,"__esModule",{value:!0});e.mat4f64=a})},"esri/core/libs/gl-matrix-2/factories/mat4f64":function(){define(["require","exports"],function(p,e){function a(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}Object.defineProperty(e,"__esModule",
{value:!0});e.create=a;e.clone=function(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]};e.fromValues=function(a,e,p,c,h,k,b,v,w,m,r,x,l,t,n,C){return[a,e,p,c,h,k,b,v,w,m,r,x,l,t,n,C]};e.createView=function(a,e){return new Float64Array(a,e,16)};e.IDENTITY=a()})},"esri/views/3d/support/debugFlags":function(){define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(p,e,a,q,g){return new (function(e){function c(){var a=
null!==e&&e.apply(this,arguments)||this;a.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1;a.SCENEVIEW_LOCKING_LOG=!1;a.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1;a.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1;a.DECONFLICTOR_SHOW_VISIBLE=!1;a.DECONFLICTOR_SHOW_INVISIBLE=!1;a.DECONFLICTOR_SHOW_GRID=!1;a.LABELS_SHOW_BORDER=!1;a.OVERLAY_DRAW_DEBUG_TEXTURE=!1;a.OVERLAY_SHOW_CENTER=!1;a.TERRAIN_DEBUG_POPUP=!1;a.TESTS_DISABLE_UPDATE_THRESHOLDS=!1;a.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1;a.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=
!1;a.DRAW_MESH_GEOMETRY_NORMALS=!1;a.FEATURE_TILE_FETCH_SHOW_TILES=!1;a.FEATURE_TILE_TREE_SHOW_TILES=!1;a.I3S_TREE_SHOW_TILES=!1;a.I3S_SHOW_MODIFICATIONS=!1;a.ENABLE_PROFILE_DEPTH_RANGE=!1;a.DISABLE_FAST_UPDATES=!1;a.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1;a.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1;a.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1;return a}a.__extends(c,e);a.__decorate([g.property()],c.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0);a.__decorate([g.property()],c.prototype,"SCENEVIEW_LOCKING_LOG",
void 0);a.__decorate([g.property()],c.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0);a.__decorate([g.property()],c.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0);a.__decorate([g.property()],c.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0);a.__decorate([g.property()],c.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0);a.__decorate([g.property()],c.prototype,"DECONFLICTOR_SHOW_GRID",void 0);a.__decorate([g.property()],c.prototype,"LABELS_SHOW_BORDER",void 0);a.__decorate([g.property()],c.prototype,
"OVERLAY_DRAW_DEBUG_TEXTURE",void 0);a.__decorate([g.property()],c.prototype,"OVERLAY_SHOW_CENTER",void 0);a.__decorate([g.property()],c.prototype,"TERRAIN_DEBUG_POPUP",void 0);a.__decorate([g.property()],c.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0);a.__decorate([g.property()],c.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0);a.__decorate([g.property()],c.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0);a.__decorate([g.property()],c.prototype,"DRAW_MESH_GEOMETRY_NORMALS",
void 0);a.__decorate([g.property()],c.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0);a.__decorate([g.property()],c.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0);a.__decorate([g.property()],c.prototype,"I3S_TREE_SHOW_TILES",void 0);a.__decorate([g.property()],c.prototype,"I3S_SHOW_MODIFICATIONS",void 0);a.__decorate([g.property()],c.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0);a.__decorate([g.property()],c.prototype,"DISABLE_FAST_UPDATES",void 0);a.__decorate([g.property()],c.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",
void 0);a.__decorate([g.property()],c.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0);a.__decorate([g.property()],c.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0);return c=a.__decorate([g.subclass("esri.views.3d.support.DebugFlags")],c)}(q))})},"esri/views/2d/layers/features/tileRenderers/support/WGLFeatureView":function(){define("require exports tslib ../../../../../../core/promiseUtils ../../../../engine ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),
function(p,e,a,q,g,u,c){Object.defineProperty(e,"__esModule",{value:!0});p=function(e){function k(a,c,g){a=e.call(this,a)||this;a._pointToCallbacks=new Map;a._layer=g;a._layerView=c;return a}a.__extends(k,e);k.prototype.renderChildren=function(a){this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);e.prototype.renderChildren.call(this,a)};k.prototype.hitTest=function(a,c){a=[a,c];c=q.createResolver();this._pointToCallbacks.set(a,c);this.requestRender();return c.promise};k.prototype.doRender=
function(a){var b=this._layer,c=b.maxScale,m=a.state.scale;m<=(b.minScale||Infinity)&&m>=c&&e.prototype.doRender.call(this,a)};Object.defineProperty(k.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"hasLabels",{get:function(){var a=this._layer.featureReduction,a=a&&"cluster"===a.type&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return!!(this._layer.labelingInfo&&this._layer.labelingInfo.length||a)},enumerable:!0,
configurable:!0});Object.defineProperty(k.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0});k.prototype.prepareRenderPasses=function(b){var k=this,h=b.registerRenderPass({name:"label",brushes:[g.brushes.Label],target:function(){return k._layer.labelsVisible?k.children:null},drawPhase:c.WGLDrawPhase.LABEL|c.WGLDrawPhase.LABEL_ALPHA}),m=b.registerRenderPass({name:"geometry",brushes:[g.brushes.Fill,g.brushes.Line,g.brushes.Marker,g.brushes.Text],
target:function(){return k.children},effects:[{apply:b.effects.highlight,enable:function(){return!!k._layerView.hasHighlight()}},{apply:b.effects.hittest,enable:function(){return!!k._pointToCallbacks.size},args:function(){return k._pointToCallbacks}}]});return a.__spreadArrays(e.prototype.prepareRenderPasses.call(this,b),[m,h])};return k}(u.FeatureContainer);e.WGLFeatureView=p})},"esri/views/2d/engine/FeatureContainer":function(){define("require exports tslib ../../../core/promiseUtils ../../../core/promiseUtils ../../../geometry/support/aaBoundingRect ../engine".split(" "),
function(p,e,a,q,g,u,c){Object.defineProperty(e,"__esModule",{value:!0});p=function(e){function k(a){a=e.call(this,a)||this;a._rendererInfo=new c.WGLRendererInfo;a._attachedResolver=q.createResolver();a.attributeView=new c.AttributeStoreView;return a}a.__extends(k,e);k.prototype.destroy=function(){this.removeAllChildren();this.children.forEach(function(a){return a.destroy()});this.attributeView.destroy()};k.prototype.whenAttached=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,
function(a){switch(a.label){case 0:return[4,this._attachedResolver.promise];case 1:return a.sent(),[2]}})})};k.prototype.setRendererInfo=function(a,c,e){this._rendererInfo.setInfo(a,c,e);this.requestRender()};k.prototype.getMaterialItems=function(b,c){return a.__awaiter(this,void 0,void 0,function(){var e,m,k,h;return a.__generator(this,function(a){switch(a.label){case 0:return b&&0!==b.length?[4,this.whenAttached()]:[2,null];case 1:return a.sent(),e=this.stage.painter.textureManager,m=b.map(function(a){return e.rasterizeItem(a.symbol,
a.glyphIds,c)}),[4,g.all(m)];case 2:return k=a.sent(),h=k.map(function(a,c){return{id:b[c].id,mosaicItem:a}}),[2,h]}})})};k.prototype.onTileData=function(b,e){if(!(e.addOrUpdate&&"tileDisplayData"in e.addOrUpdate)){var g=e.addOrUpdate&&c.TileData.decode(e.addOrUpdate);e=a.__assign(a.__assign({},e),{addOrUpdate:g})}b.setData(e,this.hasLabels,this.labelsVisible);this.contains(b)||this.addChild(b);this.requestRender()};k.prototype.onTileError=function(a){a.clear();this.contains(a)||this.addChild(a)};
k.prototype.renderChildren=function(a){this._rendererInfo.update(a.state);this.attributeView.bindTextures(this.stage.context);e.prototype.renderChildren.call(this,a)};k.prototype.createTile=function(a){var b=this._tileInfoView.getTileBounds(u.create(),a);return new c.WGLTile(a,b)};k.prototype.destroyTile=function(a){this.removeChild(a);a.destroy()};k.prototype.createRenderParams=function(b){return a.__assign(a.__assign({},e.prototype.createRenderParams.call(this,b)),{rendererInfo:this._rendererInfo,
attributeView:this.attributeView})};k.prototype.onAttach=function(){e.prototype.onAttach.call(this);var a=this.stage.context.capabilities;a.textureFloat;a.vao;this._attachedResolver()};k.prototype.onDetach=function(){e.prototype.onDetach.call(this);this._attachedResolver=q.createResolver()};return k}(c.TileContainer);e.FeatureContainer=p})},"*noref":1}});
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../../geometry/support/aaBoundingRect ../../../engine ../support/rendererUtils ./BaseTileRenderer ./support/visualVariablesUtils ./support/WGLFeatureView".split(" "),function(p,e,a,q,g,u,c,h,k,b){Object.defineProperty(e,"__esModule",{value:!0});p=function(e){function h(){return null!==e&&e.apply(this,arguments)||this}a.__extends(h,e);h.prototype.install=function(a){var c=new b.WGLFeatureView(this.tileInfoView,this.layerView,
this.layer);this.featuresView=c;a.addChild(c)};h.prototype.uninstall=function(a){a.removeChild(this.featuresView);this.featuresView.destroy()};h.prototype.hitTest=function(a,b){return this.featuresView.hitTest(a,b)};h.prototype.supportsRenderer=function(a){return null!=a&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(a.type)};h.prototype.onConfigUpdate=function(a){var b=null;"visualVariables"in a&&(b=(c.simplifyVVRenderer(a).visualVariables||[]).map(function(a){var b=
a.clone();"normalizationField"in a&&(b.normalizationField=null);a.valueExpression&&"$view.scale"!==a.valueExpression&&(b.valueExpression=null,b.field="nop");return b}),b=k.convertVisualVariables(b));this.featuresView.setRendererInfo(a,b,this.layerView.effects)};h.prototype.onTileData=function(a){var b=this.tiles.get(a.tileKey);if(b)this.featuresView.onTileData(b,a.data);this.layerView.view.labelManager.requestUpdate()};h.prototype.onTileError=function(a){if(a=this.tiles.get(a.tileKey))this.featuresView.onTileError(a)};
h.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()};h.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()};h.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()};h.prototype.getMaterialItems=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){return[2,this.featuresView.getMaterialItems(b)]})})};h.prototype.invalidateLabels=
function(){this.featuresView.hasLabels&&(this.tiles.forEach(function(a){return a.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())};h.prototype.createTile=function(a){var b=this.tileInfoView.getTileBounds(g.create(),a);a=new u.WGLTile(a,b);this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,a);return a};h.prototype.disposeTile=function(a){this.featuresView.removeChild(a);this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,
a.key.id);a.destroy();this.layerView.view.labelManager.requestUpdate()};return h=a.__decorate([q.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],h)}(h.default);e.default=p});