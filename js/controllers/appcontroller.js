/*global define */
define([
  'controllers/mapcontroller'
], function (MapController) {

  function mapLoaded(map) {
    console.debug('map has been loaded', map);
  }

  function init(config) {

    var mapCtrl = new MapController(config);

    mapCtrl.load().then(mapLoaded);
  }

  return {
    init: init
  };

});
