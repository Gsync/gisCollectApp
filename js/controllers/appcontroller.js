/*global define */
define([
  'dojo/_base/array',
  'controllers/mapcontroller',
  'esri/dijit/editing/TemplatePicker',
  'esri/IdentityManager',
  'widgets/edit/editTools'
], function (array, MapController, TemplatePicker, EditTools) {

  function mapLoaded(map) {
    var requestLayer, layers = [], templatePicker;
    requestLayer = map.getLayer('Requests');
    layers.push(requestLayer);
    templatePicker = new TemplatePicker({
      featureLayers: layers,
      rows: 'auto',
      columns: 1
    }, 'template-div');
    templatePicker.startup();
    // var editTools = new EditTools({
    //   map: map
    // }, 'map-tools');
  }

  function init(config) {

    var mapCtrl = new MapController(config);

    mapCtrl.load().then(mapLoaded);
  }

  return {
    init: init
  };

});
