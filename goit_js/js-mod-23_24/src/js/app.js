requirejs.config({
	paths: {
		'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery',
		'template':'template'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}

});

require(
	[
		'model',
		'view',
		'controller',
		'jquery',
		'template'
	],
	function(Model, View, Controller, $, _) {

		$(function(){
			var initToDoList = ['learn Javascript', 'learn MVC', 'learn Angular'];

			var modelInstance = new Model(initToDoList);
			var viewInstance = new View(modelInstance);
			var controller = new Controller(modelInstance, viewInstance);
		});
	}
);