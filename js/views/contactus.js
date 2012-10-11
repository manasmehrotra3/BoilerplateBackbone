// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'text!../../tpl/contactus.html' // requests contactus.html
], function($, _, Backbone, contactUsTemplate){

  var contactUsView = Backbone.View.extend({
    el: $("#container"),
    render: function(){
      this.el.html(contactUsTemplate);
    }
  });
  return new contactUsView;
});
