// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Graphic ../../../../symbols ../../../../core/HandleOwner ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingRect ../../support/debugFlags ../tileUtils".split(" "),function(m,n,k,r,p,t,u,q,v,w,x){Object.defineProperty(n,"__esModule",{value:!0});m=function(l){function a(){return null!==l&&l.apply(this,arguments)||this}k.__extends(a,l);a.prototype.initialize=function(){var c=this;this.handles.add(this.surface.view.on("click",
this._clickEvent.bind(this)));w.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!0;this.surface.view.popup.autoOpenEnabled=!1;u.whenFalse(this.surface.view.popup,"visible",function(){c._removeTileBoundaryGraphic()})};a.prototype.destroy=function(){this.surface.view.popup.autoOpenEnabled=!0};a.prototype._clickEvent=function(c){var b=this;this.surface.view.hitTest(c).then(function(a){a=a.intersector.results.min;if("TerrainRenderer"===a.intersector){var f=b.surface.getTile(a.name);b.surface.view.popup.actions.removeAll();
b.surface.view.popup.open({title:"Tile "+a.name,location:c.mapPoint,content:b._createTileDataTable(f)});b._removeTileBoundaryGraphic();b.tileBoundaryGraphic=b._createTileBoundaryGraphic(f);b.surface.view.graphics.add(b.tileBoundaryGraphic)}})};a.prototype._createTileDataTable=function(a){var b=document.createElement("table");b.innerHTML="\x3ctr\x3e\n                             \x3cth style\x3d'text-align:center;font-weight:bold'\x3etype\x26nbsp;\x26nbsp;\x26nbsp;\x3c/th\x3e\n                             \x3cth style\x3d'text-align:center;font-weight:bold'\x3elayer\x26nbsp;\x26nbsp;\x26nbsp;\x3c/th\x3e\n                             \x3cth style\x3d'text-align:center;font-weight:bold'\x3edata from tile\x26nbsp;\x26nbsp;\x26nbsp;\x3c/th\x3e\n                           \x3c/tr\x3e";
for(var c=0;c<a.layerInfo.length;c++)for(var f=a.layerInfo[c],g=0;g<f.length;g++){var e=f[g],h=document.createElement("tr"),d=void 0,d=document.createElement("td");d.textContent=0===g?y[c]:"";h.appendChild(d);d=document.createElement("td");d.textContent=g.toString();h.appendChild(d);e=e.data?a:e.upsampleInfo?e.upsampleInfo.tile:null;d=document.createElement("td");d.textContent=e?x.tile2str(e):"no data";h.appendChild(d);b.appendChild(h)}return b};a.prototype._removeTileBoundaryGraphic=function(){this.tileBoundaryGraphic&&
(this.surface.view.graphics.remove(this.tileBoundaryGraphic),this.tileBoundaryGraphic=null)};a.prototype._createTileBoundaryGraphic=function(a){a=v.toExtent(a.extent,this.surface.spatialReference);var b=new p.PolygonSymbol3D({symbolLayers:[new p.FillSymbol3DLayer({material:{color:"rgba(0, 0, 0, 0)"},outline:{size:"3px",color:"red"}})]});return new r({geometry:a,symbol:b})};k.__decorate([q.property({constructOnly:!0})],a.prototype,"surface",void 0);return a=k.__decorate([q.subclass("esri.views.3d.terrain.support.TerrainDebugPopupOpener")],
a)}(t.HandleOwner);n.TerrainDebugPopupOpener=m;var y=["elev","map"]});