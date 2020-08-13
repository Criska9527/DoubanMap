//import * as setDefaultOptions from，这种写法是把所有的输出包裹到setDefaultOptions对象里。
import * as esrimoudls from "esri-loader";
import mapConfig from '../../config/mapconfig.js'
console.log(mapConfig)
//设置数据源
esrimoudls.setDefaultOptions({
   url: mapConfig.ArcGISAPI.APIURL,
   dojoConfig: mapConfig.ArcGISAPI.dojoConfig
});
//设置样式源
esrimoudls.loadCss(mapConfig.ArcGISAPI.cssurl);
const gisMoudls = {
   async loadArcgisMoudls() {
      const [esriConfig,
         esriRequest,
         Map,
         Basemap,
         WebMap,
         WebScene,
         MapView,
         SceneView,
         FeatureLayer,
         TileLayer,
         BaseTileLayer,
         WebTileLayer,
         GraphicsLayer,
         MapImageLayer,
         ElevationLayer,
         SceneLayer,
         SimpleRenderer,
         LabelClass,
         TileInfo,
         PopupTemplate,
         SpatialReference,
         webMercatorUtils,
         GeometryService,
         ProjectParameters,
         AreasAndLengthsParameters,
         LengthsParameters,
         Query,
         SketchViewModel,
         Draw,
         Graphic,
         geometryEngine,
         Point,
         Polyline,
         Polygon,
         Circle,
         Extent,
         TextSymbol,
         PictureMarkerSymbol,
         LineSymbol3D,
         PointSymbol3D,
         MeshSymbol3D,
         Navigation,
         Font,
         Swipe,
         Print,
         Editor,
         EditorViewModel,
         ScaleBar,
         DirectLineMeasurement3D,
         AreaMeasurement3D,
         LayerList,
         Zoom,
         BasemapGallery,
         Legend,
         Geoprocessor,
         QueryTask,
         IdentifyTask,
         IdentifyParameters,
         StatisticDefinition,
         FeatureSet,
         SimpleMarkerSymbol,
         SimpleLineSymbol,
         SimpleFillSymbol,
         ClassBreaksRenderer,
         CoordinateConversion,
         Daylight,
         GaodeLayer,
         BaiduMapLayer,
         Locate,
         Color,
         Expand] = await esrimoudls.loadModules(["esri/config",
            "esri/request",
            "esri/Map",
            "esri/Basemap",
            "esri/WebMap",
            "esri/WebScene",
            "esri/views/MapView",
            "esri/views/SceneView",
            "esri/layers/FeatureLayer",
            "esri/layers/TileLayer",
            "esri/layers/BaseTileLayer",
            "esri/layers/WebTileLayer",
            "esri/layers/GraphicsLayer",
            "esri/layers/MapImageLayer",
            "esri/layers/ElevationLayer",
            "esri/layers/SceneLayer",
            "esri/renderers/SimpleRenderer",
            "esri/layers/support/LabelClass",
            "esri/layers/support/TileInfo",
            "esri/PopupTemplate",
            "esri/geometry/SpatialReference",
            "esri/geometry/support/webMercatorUtils",
            "esri/tasks/GeometryService",
            "esri/tasks/support/ProjectParameters",
            "esri/tasks/support/AreasAndLengthsParameters",
            "esri/tasks/support/LengthsParameters",
            "esri/tasks/support/Query",
            "esri/widgets/Sketch/SketchViewModel",
            "esri/views/draw/Draw",
            "esri/Graphic",
            "esri/geometry/geometryEngine",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",
            "esri/geometry/Circle",
            "esri/geometry/Extent",
            "esri/symbols/TextSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/symbols/LineSymbol3D",
            "esri/symbols/PointSymbol3D",
            "esri/symbols/MeshSymbol3D",
            "esri/views/navigation/Navigation",
            "esri/symbols/Font",
            "esri/widgets/Swipe",
            "esri/widgets/Print",
            "esri/widgets/Editor",
            "esri/widgets/Editor/EditorViewModel",
            "esri/widgets/ScaleBar",
            "esri/widgets/DirectLineMeasurement3D",
            "esri/widgets/AreaMeasurement3D",
            "esri/widgets/LayerList",
            "esri/widgets/Zoom",
            "esri/widgets/BasemapGallery",
            "esri/widgets/Legend",
            "esri/tasks/Geoprocessor",
            "esri/tasks/QueryTask",
            "esri/tasks/IdentifyTask",
            "esri/tasks/support/IdentifyParameters",
            "esri/tasks/support/StatisticDefinition",
            "esri/tasks/support/FeatureSet",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleFillSymbol",
            "esri/renderers/ClassBreaksRenderer",
            "esri/widgets/CoordinateConversion",
            "esri/widgets/Daylight",
            "widgets/GaodeLayer",
            "widgets/BaiduMapLayer",
            "esri/widgets/Locate",
            "esri/Color",
            "esri/widgets/Expand"])
      //定义模块
      let Mygismoudls = {
         esriConfig,
         esriRequest,
         Map,
         Basemap,
         WebMap,
         WebScene,
         MapView,
         SceneView,
         FeatureLayer,
         TileLayer,
         BaseTileLayer,
         WebTileLayer,
         GraphicsLayer,
         MapImageLayer,
         ElevationLayer,
         SceneLayer,
         SimpleRenderer,
         LabelClass,
         TileInfo,
         PopupTemplate,
         SpatialReference,
         webMercatorUtils,
         GeometryService,
         ProjectParameters,
         AreasAndLengthsParameters,
         LengthsParameters,
         Query,
         SketchViewModel,
         Draw,
         Graphic,
         geometryEngine,
         Point,
         Polyline,
         Polygon,
         Circle,
         Extent,
         TextSymbol,
         PictureMarkerSymbol,
         LineSymbol3D,
         PointSymbol3D,
         MeshSymbol3D,
         Navigation,
         Font,
         Swipe,
         Print,
         Editor,
         EditorViewModel,
         ScaleBar,
         Zoom,
         DirectLineMeasurement3D,
         AreaMeasurement3D,
         LayerList,
         BasemapGallery,
         Legend,
         Geoprocessor,
         QueryTask,
         IdentifyTask,
         IdentifyParameters,
         StatisticDefinition,
         FeatureSet,
         SimpleMarkerSymbol,
         SimpleLineSymbol,
         SimpleFillSymbol,
         ClassBreaksRenderer,
         CoordinateConversion,
         Daylight,
         GaodeLayer,
         BaiduMapLayer,
         Locate,
         Color,
         Expand
      }
      return Promise.resolve(Mygismoudls)
   }
}
export default gisMoudls
