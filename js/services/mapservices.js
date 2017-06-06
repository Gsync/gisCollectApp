/*global define*/
/*jshint esversion: 6*/
define([
  'esri/layers/FeatureLayer'
], function(FeatureLayer) {

  function loadServices() {
    var layers = [], censusLayer;
    // census tract
      censusLayer = new FeatureLayer(
        'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/' +
        'arcgis/rest/services/' +
        'CensusLaborDemo/FeatureServer/1'
        );
    // feature renderer
      //renderer = new SimpleRenderer(symbolUtil.renderSymbol());

    //censusLayer.setRenderer(renderer);

    layers.push(censusLayer);

    return layers;
  }

  return {
    loadServices: loadServices
  };

});