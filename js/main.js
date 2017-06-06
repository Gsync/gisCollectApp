/*global require*/
require([
  'controllers/appcontroller',
  'dojo/domReady!'
], function (appCtrl) {

  console.debug('DEBUG - Starting application');
  appCtrl.init({
    elem: 'map-div',
    mapOptions: {
      basemap: 'gray',
      center: [-118.241,34.0542],
      zoom: 12
    }
  });

});