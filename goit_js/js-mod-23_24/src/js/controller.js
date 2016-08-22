define(
	'controller',
	[
		'model',
		'view',
		'jquery',
		'template'
	],
	function() {

		function Controller(model, view) {
			var self = this;

			var ENTER_KEY = 13;
			var ESCAPE_KEY = 27;

			view.elements.input.on('keydown', addItem);

			view.elements.addBtn.on('click', addItemClick);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item-edit', editItem);


			function addItemClick () {
				var newItem = view.elements.input.val();

				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');

			}

			function addItem(event) {
				if (event.which == ENTER_KEY) {
					addItemClick ()
				}

			}
			function removeItem() {
				var attrVal = $(this).attr('data-value');

				model.removeItem(attrVal);
				view.renderList(model.data);
			}
			function editItem() {
				var attrVal = $(this).attr('data-value');
				console.log('attrVal:', attrVal);
				var inputEdit = view.edit(this, attrVal);
		//		console.log('inputEdit:', inputEdit);

				inputEdit.on('keydown', function(event) {
					if (event.which == ENTER_KEY) {
						var userText = $(this).val();
						$(this).val('');

						if ( !$.trim(userText).length )  return;

						model.editItem(attrVal, userText);
						view.renderList(model.data);
					}

					if (event.which == ESCAPE_KEY) { view.renderList(model.data); }
				});
			}
		}
		return Controller;
	}
);