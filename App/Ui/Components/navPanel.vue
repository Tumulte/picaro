//TODO simplify ALL
var generateInput = function(createElement, vue, index, collection) {
	return createElement('input', {
		attrs: {
			type: 'checkbox',
			checked: collection[index].hidden,
			id: collection[index].hidden,
		},
		on: {
			change: () => vue.toggleItem(index),
		},
		class: '_list-item-check',
	});
};
//TODO this shouldn't have 5 params
var generateListItem = function(createElement, vue, index, childrenArray, collection) {
	return createElement(
		'li',
		{
			on: {
				click: e => {
					e.stopPropagation();
					vue.moveItem(collection[index], index);
				},
			},
			class: ['_list-item', { '-hidden': collection[index].hidden }],
		},
		childrenArray
	);
};
var navPanelComponent = {
	/**
	 * @type {function}
	 */
	props: ['views'],

	data: function() {
		return {
			componentKey: 1,
			movingFile: false,
			showInput: true,
		};
	},

	render: function(createElement) {
		var stuctureStringInput = createElement('input', {
			domProps: {
				type: 'text',
				value: JSON.stringify(this.navStructure),
			},
		});
		var listContainer = this.createList(createElement, this.navStructure);
		return createElement('div', { key: this.componentKey }, [stuctureStringInput, listContainer]);
	},

	methods: {
		toggleKey() {
			this.componentKey = this.componentKey === 1 ? 0 : 1;
		},
		toggleItem(item) {
			this.navStructure[item].hidden = !this.navStructure[item].hidden;
			this.toggleKey();
		},
		cancelSelection: function() {
			this.movingFile = false;
		},
		moveItem(file, index) {
			this.$children.forEach(e => {
				if (e.movingFile) {
					this.movingFile = e.movingFile;
					return;
				}
			});
			if (!this.movingFile) {
				var newChild = {};
				newChild.name = index;
				newChild.file = file;
				this.movingFile = newChild;
			} else {
				this.iterateStructure(index);
			}

			this.toggleKey();
		},
		createList: function(createElement, collection) {
			var listItemCollection = [];

			for (var file in collection) {
				var input = generateInput(createElement, this, file, collection);
				var label = createElement('label', [input, 'display']);
				var cancel = '';
				if (file === this.movingFile.name) {
					cancel = createElement(
						'span',
						{
							on: {
								click: e => {
									e.stopPropagation();
									this.cancelSelection();
								},
							},
						},
						'(cancel)'
					);
				}
				var children = '';
				if (Object.keys(collection[file].children).length > 0) {
					children = this.createList(createElement, collection[file].children);
				}
				listItemCollection.push(
					generateListItem(createElement, this, file, [file, cancel, label, children], collection)
				);
			}
			return createElement('ul', listItemCollection);
		},
		iterateStructure: function(index) {
			if (
				!this.navStructure[index].children.hasOwnProperty(this.movingFile.name) &&
				this.navStructure[index] !== this.movingFile.file
			) {
				this.navStructure[index].children[this.movingFile.name] = this.movingFile.file;
				delete this.navStructure[this.movingFile.name];
				this.movingFile = false;
			}
		},
	},

	computed: {
		navStructure: function() {
			var structure = {};

			var parsedFiles = JSON.parse(this.views);
			parsedFiles.forEach(function(e) {
				if (e.indexOf('.pug') !== -1) {
					structure[e.replace('.pug', '')] = { hidden: false, children: {} };
				}
			});

			return structure;
		},
	},
};

module.exports = navPanelComponent;
