var sortobject = require('deep-sort-object');

//TODO simplify ALL
var generateHiddenCheck = function(createElement, vue, index, collection) {
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
var generateParametersInput = function(createElement, vue, index, collection) {
	return createElement('input', {
		attrs: {
			type: 'text',
		},
		domProps: {
			value: collection[index].parameters,
		},
		on: {
			click: event => {
				event.stopPropagation();
			},
			change: event => {
				vue.$emit('change', vue.updateItemData(index, 'parameters', event.target.value));
			},
		},
		class: '_list-item-parameters',
	});
};
var generateNameInput = function(createElement, vue, index, collection) {
	return createElement('input', {
		attrs: {
			type: 'text',
		},
		domProps: {
			value: collection[index].name,
		},
		on: {
			click: event => {
				event.stopPropagation();
			},
			change: event => {
				event.stopPropagation();
				vue.$emit('change', vue.updateItemData(index, 'name', event.target.value));
			},
		},
		class: '_list-item-name',
	});
};
var generateReorderTrigger = function(createElement, vue, collection, index) {
	return createElement('div', {
		on: {
			click: event => {
				event.stopPropagation();

				vue.reorderTrigger(collection[index], index);
			},
		},
		class: '_list-item-reorder-trigger',
	});
};
var generateStructure = function(views) {
	var structure = {};

	var parsedFiles = JSON.parse(views);
	var indexOffset = 0;
	parsedFiles.forEach(function(e, index) {
		if (e.indexOf('.pug') !== -1) {
			structure[index - indexOffset + '__' + e.replace('.pug', '')] = {
				hidden: false,
				children: {},
				name: e.replace('.pug', ''),
				parameters: '',
			};
		} else indexOffset += 1;
	});

	return structure;
};
//TODO figure out why this works
var updateChildren = function(node, parents, name, previousFileName) {
	parents = JSON.parse(JSON.stringify(parents));
	if (node.file) {
		node = JSON.parse(JSON.stringify(node.file));
	}
	node.parents = parents;

	if (typeof node.name !== 'undefined') {
		var movingFileName = node.name;
	} else {
		movingFileName = previousFileName;
	}
	if (name) {
		node.parents.push(name);
	}

	if (node && Object.keys(node.children).length > 0) {
		for (var item in node.children) {
			previousFileName = item;
			updateChildren(node.children[item], parents, movingFileName, previousFileName);
		}
	}

	return node;
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
			navStructure: generateStructure(this.views),
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
		updateItemData: function(item, parameter, data) {
			this.navStructure[item][parameter] = data;
			this.toggleKey();
		},
		toggleKey: function() {
			this.componentKey = this.componentKey === 1 ? 0 : 1;
		},
		toggleItem: function(item) {
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
				var targetIsNotAlreadyParent = this.targetIsNotAlreadyParent(file, index);
				var targetIsNotItself = this.navStructure[index] !== this.movingFile.file;

				if (targetIsNotAlreadyParent && targetIsNotItself) {
					this.iterateStructure(file, index);
				}
			}

			this.toggleKey();
		},
		getSubNode: function(file, index) {
			var detachedParents = JSON.parse(JSON.stringify(file.parents));
			var selectedDestinationFile = this.navStructure;
			var firstItem = detachedParents.splice(0, 1);

			firstItem = firstItem.join();

			selectedDestinationFile = selectedDestinationFile[firstItem].children;
			if (detachedParents.length > 0) {
				detachedParents.forEach(function(e) {
					selectedDestinationFile = selectedDestinationFile[e].children;
				});
			}

			return selectedDestinationFile[index];
		},
		targetIsNotAlreadyParent: function(file, index) {
			if (file.parents && file.parents.length !== 0) {
				var selectedDestinationFile = this.getSubNode(file, index);

				return !selectedDestinationFile.children.hasOwnProperty(this.movingFile.name);
			} else {
				return !this.navStructure[index].children.hasOwnProperty(this.movingFile.name);
			}
		},
		createList: function(createElement, collection) {
			var listItemCollection = [];

			for (var file in collection) {
				var hiddenCheck = generateHiddenCheck(createElement, this, file, collection);
				var hiddenLabel = createElement('label', [hiddenCheck, 'display']);
				var nameInput = generateNameInput(createElement, this, file, collection);
				var nameLabel = createElement('label', ['Name', nameInput]);
				var parametersInput = generateParametersInput(createElement, this, file, collection);
				var parametersLabel = createElement('label', ['Parameters', parametersInput]);
				var reorderTrigger = generateReorderTrigger(createElement, this, collection, file);
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
				if (collection[file].parents) {
					parents = ' - ' + collection[file].parents.join(',');
				} else {
					parents = '';
				}

				//var displayFileName = file.split('__')[1];
				displayFileName = file;
				listItemCollection.push(
					generateListItem(
						createElement,
						this,
						file,
						[
							reorderTrigger,
							displayFileName,
							parents,
							cancel,
							nameLabel,
							parametersLabel,
							hiddenLabel,
							children,
						],
						collection
					)
				);
			}
			return createElement('ul', listItemCollection);
		},
		reorderTrigger: function(file, index) {
			if (this.movingFile) {
				var oldPosition = this.movingFile.name.split('__')[0];
				var newPosition = index.split('__')[0];
				var name = this.movingFile.name.split('__')[1];

				this.navStructure[newPosition + '__' + name] = this.navStructure[this.movingFile.name];
				delete this.navStructure[this.movingFile.name];
				this.movingFile = false;

				var pastMovedItem = false;
				for (var item in this.navStructure) {
					var itemPosition = item.split('__')[0];
					var itemName = item.split('__')[1];

					if (itemPosition === newPosition && !pastMovedItem) {
						pastMovedItem = true;
					} else if (itemPosition === newPosition && pastMovedItem) {
						pastMovedItem = false;
					}

					if (itemPosition >= newPosition && pastMovedItem) {
						var offsetPosition = parseInt(itemPosition) + 1;
						this.navStructure[offsetPosition + '__' + itemName] = this.navStructure[item];
						delete this.navStructure[item];
					} else {
						this.navStructure = sortobject(this.navStructure);
						this.toggleKey();
					}
				}
			}
		},
		iterateStructure: function(file, index) {
			if (file.parents && file.parents.length !== 0) {
				var selectedDestinationFile = this.getSubNode(file, index);
				var parents = JSON.parse(JSON.stringify(file.parents));
				parents.push(index);

				selectedDestinationFile.children[this.movingFile.name] = updateChildren(this.movingFile, parents);
			} else {
				var children = this.navStructure[index].children;
				children[this.movingFile.name] = updateChildren(this.movingFile, [index]);
			}
			if (this.movingFile.file.parents && this.movingFile.file.parents.length > 0) {
				var selectedMovingFile = this.navStructure;
				var lastItem = this.movingFile.file.parents.splice(-1, 1);
				this.movingFile.file.parents.forEach(function(e) {
					selectedMovingFile = selectedMovingFile[e];
				});
				delete selectedMovingFile[lastItem].children[this.movingFile.name];
			} else {
				delete this.navStructure[this.movingFile.name];
			}
			this.movingFile = false;
		},
	},
};

module.exports = navPanelComponent;
