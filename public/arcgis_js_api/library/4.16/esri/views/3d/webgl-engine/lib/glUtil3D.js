// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ./DefaultVertexAttributeLocations ./DefaultVertexBufferLayouts ../../../webgl/BufferObject ../../../webgl/Texture ../../../webgl/VertexArrayObject".split(" "),function(n,f,k,h,l,g,m){Object.defineProperty(f,"__esModule",{value:!0});f.createQuadVAO=function(d,a,b){void 0===a&&(a=h.Pos2);void 0===b&&(b=k.Default3D);var c=null;switch(a){case h.Pos2Tex:c=new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);break;default:c=new Float32Array([-1,-1,1,-1,-1,1,1,1])}return new m(d,
b,{geometry:a},{geometry:l.createVertex(d,35044,c)})};f.createEmptyTexture=function(d,a){void 0===a&&(a=4);return new g(d,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:a})};f.createColorTexture=function(d,a,b){void 0===b&&(b=4);for(var c=new Uint8Array(b*b*4),e=0;e<c.length;e+=4)c[e+0]=255*a[0],c[e+1]=255*a[1],c[e+2]=255*a[2],c[e+3]=255*a[3];return new g(d,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:b,height:b},c)};f.createEmptyDepthTexture=function(d){return new g(d,
{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}});