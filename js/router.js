define([ 'jquery', 'underscore', 'backbone', 'views/home', // requests home.js
'views/contactus' // requests contactus.js
], function($, _, Backbone, homeView, contactUsView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			'home' : 'showHome',
			'contactus' : 'showContactUs',

			// Default
			'*actions' : 'showHome'
		},

		showHome : function() {
			homeView.render();
		},
		showContactUs : function() {
			contactUsView.render();
		},
		defaultAction:function(){
			console.log("Default action executed!!!");
		}

	});

	//Initializing Router 
	var initialize = function(){
	    var app_router = new AppRouter;
	    Backbone.history.start();
	  };
	  return {
	    initialize: initialize
	  };
	  
	  
	return AppRouter;
});