// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../tpl/contactus.html' // requests home.html
], function($, _, Backbone, mainHomeTemplate){

  var mainHomeView = Backbone.View.extend({
    el: $("#container"),
    render: function(){
      this.el.html(mainHomeTemplate);
    }
  });
  return new mainHomeView;
});
