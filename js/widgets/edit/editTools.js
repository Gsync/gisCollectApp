/*global define*/
/*jshint esversion: 6*/
define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/query',
  // Dijit stuff
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  // dom stuff
  'dojo/dom-attr',
  'dojo/dom-class',
  'esri/graphic',
  // template
  'text!widgets/edit/editTools.tpl.html'
], function(declare, lang, on, query, _WidgetBase, _TemplatedMixin, domAttr, domClass, Graphic, template) {

  return declare([_WidgetBase, _TemplatedMixin], {

    //declaredClass: 'widgets.edit.EditTools',

    templateString: template,
    options: {},
    editing: false,
    map: null,

    // lifecycle 1
    constructor: function(options) {
      //this.inherited(arguments);

      // mix in settings and defaults
      this.options = options || {};
      this.map = this.options.map;
      this.requestLayer = this.map.getLayer('Requests');
      // widget node
      //this.domNode = srcRefNode;

    },

    postCreate: function() {
      this.handler = on.pausable(
        this.map, 'click', lang.hitch(this, '_addPoint')
        );
        this.handler.pause();
      this.own(
        this.handler,
        on(this.editNode, 'click', lang.hitch(this, '_addRequest'))
      );
    },

    // // start widget
    // startup: function() {
    //   this._init();
    // },

    // // cleanup
    // destroy: function() {
    //   // default destroy
    //   this.inherited(arguments);
    // },

    // public methods

    // widget methods
    _addRequest: function() {
      //this.editing = !this.editing;
      this._toggleEditButton();
    },

    _addPoint: function(e) {
       var mapPt = e.mapPoint,
          census = e.graphic ,
          attributes = {},
          graphic,
          description;
           description = prompt('Description of request');
           attributes.IssueType = 'New Request';
           attributes.RequestDate = new Date().getTime();
           attributes.CensusTract = census.attributes.NAME;
           attributes.Description = description;
           graphic = new Graphic(mapPt, null, attributes);
            this.requestLayer.applyEdits([graphic]).then(lang.hitch(this, function() {
             this._toggleEditButton();
             alert('Request submitted');
           }));
    },

    // private functions
    // _init: function() {
    // },

    _toggleEditButton: function() {
      this.editing = !this.editing;
      if(this.editing) {
        this.editNode.innerHTML = 'Adding Request';
        this.handler.resume();
      } else {
        this.editNode.innerHTML = 'Add Request';
        this.handler.pause();
      }
      domClass.toggle(this.editNode, 'btn-primary btn-success');
    }

  });

});
