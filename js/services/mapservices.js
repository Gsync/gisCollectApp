/*global define*/
/*jshint esversion: 6*/
define([
  'esri/layers/FeatureLayer',
  'esri/renderers/SimpleRenderer',
  'utils/symbolUtil'
], function(FeatureLayer, SimpleRenderer, symbolUtil) {

    var CENSUS_URL  = 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1',
        REQUEST_URL = 'http://services7.arcgis.com/gi8sEgQwlxfPU2DZ/arcgis/rest/services/requests/FeatureServer/0';


  function loadServices(config) {
    var layers = [],
    // census tract
      censusLayer = new FeatureLayer(CENSUS_URL, {
        id: 'Census'
      }),
      requestLayer = new FeatureLayer(REQUEST_URL, {
        id: 'Requests',
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ['*']
      }),
      renderer = new SimpleRenderer(symbolUtil.renderSymbol());

      censusLayer.setRenderer(renderer);

    layers.push(censusLayer);
    layers.push(requestLayer);

    return layers;
  }

  return {
    loadServices: loadServices
  };

});