// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/lang","../../geometry/support/jsonUtils","./CIMPlacements"],function(f,c,q,e,r){function g(a){if(a)for(var b=a.length-1;0<b;--b)a[b][0]-=a[b-1][0],a[b][1]-=a[b-1][1]}function h(a){if(a)for(var b=0;b<a.length;b++)g(a[b])}function k(a){if(a)for(var b=a.length,d=1;d<b;++d)a[d][0]+=a[d-1][0],a[d][1]+=a[d-1][1]}function l(a){if(a)for(var b=0;b<a.length;b++)k(a[b])}function m(a){a&&(e.isPolygon(a)?l(a.rings):e.isPolyline(a)?l(a.paths):e.isMultipoint(a)&&k(a.points))}
function n(a){a&&a.reverse()}function p(a){return{rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]}}Object.defineProperty(c,"__esModule",{value:!0});c.cloneAndDecodeGeometry=function(a){a=q.clone(a);m(a);return a};c.deltaDecodeGeometry=m;c.deltaEncodeGeometry=function(a){a&&(e.isPolygon(a)?h(a.rings):e.isPolyline(a)?h(a.paths):e.isMultipoint(a)&&g(a.points))};c.reverseMultipath=function(a){if(a)for(var b=0;b<a.length;b++)n(a[b])};c.reversePath=n;c.getCoord2D=
function(a,b,d){return[a[0]+(b[0]-a[0])*d,a[1]+(b[1]-a[1])*d]};c.isClosedPath=function(a){return a&&0!==a.length?a[0][0]===a[a.length-1][0]&&a[0][1]===a[a.length-1][1]:!1};c.getId=function(a){return a[4]};c.setId=function(a,b){a[4]=b};f=function(){function a(a,d,c,f){this.acceptPolygon=d;this.acceptPolyline=c;this.geomUnitsPerPoint=f;this.pathIndex=this.pathCount=-1;this.iteratePath=!1;a&&(e.isPolygon(a)?d&&(this.multiPath=a.rings,this.isClosed=!0):e.isPolyline(a)?c&&(this.multiPath=a.paths,this.isClosed=
!1):e.isExtent(a)&&d&&(this.multiPath=p(a).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length));this.internalPlacement=new r.Placement}a.prototype.next=function(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;var a=this.processPath(this.multiPath[this.pathIndex]);if(a)return a}this.pathIndex=this.pathCount=-1;return this.multiPath=null};return a}();c.PathTransformationCursor=f;f=function(){function a(a,
d,c,e){this.inputGeometries=a;this.acceptPolygon=d;this.acceptPolyline=c;this.geomUnitsPerPoint=e;this.pathIndex=this.pathCount=-1;this.iteratePath=!1}a.prototype.next=function(){for(;;){if(!this.multiPath){for(var a=this.inputGeometries.next();a;)if(e.isPolygon(a)?this.acceptPolygon&&(this.multiPath=a.rings,this.isClosed=!0):e.isPolyline(a)?this.acceptPolyline&&(this.multiPath=a.paths,this.isClosed=!1):e.isExtent(a)&&this.acceptPolygon&&(this.multiPath=p(a).rings,this.isClosed=!0),this.multiPath){this.pathCount=
this.multiPath.length;this.pathIndex=-1;break}else a=this.inputGeometries.next();if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;)if(this.iteratePath||this.pathIndex++,a=this.processPath(this.multiPath[this.pathIndex]))return a;this.pathIndex=this.pathCount=-1;this.multiPath=null}};return a}();c.PathGeometryCursor=f});