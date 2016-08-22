define(
	'view',
	[
		'model',
		'jquery',
		'template'
	],
	function() {

		function View (model) {
			var self = this;

			function init () {
				var wrapper = tmpl($('#data-template').html());

				$('body').append(wrapper);
				self.elements = {
					input: $('.data__input--value'),
					addBtn: $('.data__input--add'),
					listContainer: $('.data__list'),
					editInput: $('<textarea type="text" class="data__new-value">')
				};
				self.renderList(model.data);
			};

			self.renderList = function (data) {
				var list = tmpl($('#list-template').html(), {data: data});
				self.elements.listContainer.html(list);

				$('.data__counter').html(model.countItems());
			};

			self.edit = function(_this, value) {
				var currentLi = $(_this).parent();
				currentLi.html('');
				currentLi.css("pointer-events", 'auto');
				currentLi.append(self.elements.editInput);
				var inputEdit = currentLi.find('.data__new-value').val(value).focus();
				return inputEdit;
			};
			init();

		}

		return View;
	}
);