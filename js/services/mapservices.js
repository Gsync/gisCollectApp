// /*global define*/
// /*jshint esversion: 6*/
// define([
//   'esri/layers/FeatureLayer',
//   'esri/renderers/SimpleRenderer',
//   'utils/symbolUtil'
// ], function(FeatureLayer, SimpleRenderer, symbolUtil) {

//   function loadServices(config) {
//     var layers = [],
//     // census tract
//       censusLayer = new F1atureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1'),
//     // feature renderer
//       renderer = new SimpleRenderer(symbolUtil.renderSymbol());

//     censusLayer.setRenderer(renderer);

//     layers.push(censusLayer);

//     return layers;
//   }

//   return {
//     loadServices: loadServices
//   };

// });