/*global define*/
/*jshint esversion: 6*/
define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  // Dijit stuff
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  // dom stuff
  'dojo/dom-class',
  // template
  'text!widgets/edit/editTools.tpl.html'
], function(declare, lang, on, _WidgetBase, _TemplatedMixin, domClass, template) {

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

      // widget node
      //this.domNode = srcRefNode;

    },

    postCreate: function() {
      this.own(
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
      this.editing = !this.editing;
      this._toggleEditButton();
    },

    // private functions
    // _init: function() {
    // },

    _toggleEditButton: function() {
      if(this.editing) {
        this.editNode.innerHTML = 'Adding Request';
      } else {
        this.editNode.innerHTML = 'Add Request';
      }
      domClass.toggle(this.editNode, 'btn-primary btn-success');
    }

  });

});
