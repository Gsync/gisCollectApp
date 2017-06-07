/*global define */
/*jshint esversion: 6*/
define([
  'dojo/_base/declare', //Builds classes in Dojo
  'dojo/_base/lang',    //Provides suite of utility functions
  'dojo/on',            //Listens to events
  'dojo/Deferred',      //Generates javascript promises
  'esri/map'
], function (declare, lang, on, Deferred, Map) {

  return declare(null, {
    map: null,
    options: {},

    constructor: function(options) { //Calls first function
      this.options = lang.mixin(this.options, options);
    },

    // public methods
    load: function() {
      var deferred  = new Deferred(),
        layersAdded = lang.hitch(this, function() {
      deferred.resolve(this.map);
        });

        this.map = new Map(this.options.elem, this.options.mapOptions);

        on.once(this.map, 'layers-add-result', layersAdded);

        this.map.addLayers(this.options.layers);


        return deferred.promise;
    }
  });

});
