requirejs.config({
	paths: {
		'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery',
		'template':'../src/js/template',
		'model':'../src/js/model',
		'view':'../src/js/view',
		'controller':'../src/js/controller',
		'template':'../src/js/template'
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
			var initToDoList = ['learn javascript','learn html','learn css3','make coffe'];

			var modelInstance = new Model(initToDoList);
			var viewInstance = new View(modelInstance);
			var controller = new Controller(modelInstance, viewInstance);
		});
	}
);