var sortobject = require('deep-sort-object');
var sortNumberLowToHigh = function(a, b) {
	a = a.split('__')[0];
	b = b.split('__')[0];

	return a < b;
};
var recursiveUpdateParentCollection = function(node, parents, name, previousFileName) {
	console.debug(node, parents, name, previousFileName);
	parents = JSON.parse(JSON.stringify(parents));
	if (node.node) {
		node = JSON.parse(JSON.stringify(node.node));
	}
	node.parents = parents;

	if (typeof node.name !== 'undefined') {
		var movingNodeName = node.name;
		movingNodeName = previousFileName;
	}
	if (name) {
		node.parents.push(name);
	}

	if (node && Object.keys(node.children).length > 0) {
		for (var item in node.children) {
			previousFileName = item;
			recursiveUpdateParentCollection(node.children[item], parents, movingNodeName, previousFileName);
		}
	}

	return node;
};
var generateStructureFromFileList = function(views) {
	var structure = {};

	var parsedFiles = JSON.parse(views);
	var indexOffset = 0;
	parsedFiles.forEach(function(e, index) {
		if (e.indexOf('.pug') !== -1) {
			structure[index - indexOffset + '__' + e.replace('.pug', '')] = {
				hidden: false,
				children: {},
				parents: [],
				name: e.replace('.pug', ''),
				parameters: '',
			};
		} else indexOffset += 1;
	});

	return structure;
};

//THE COMPONENT
var navPanelComponent = {
	/**
	 * @type {function}
	 */
	props: ['views'],

	data: function() {
		return {
			componentKey: 1,
			movingNode: false,
			showInput: true,
			navStructure: {},
		};
	},

	render: function(createElement) {
		var stuctureStringInput = createElement('input', {
			domProps: {
				type: 'text',
				value: this.navStructureString,
			},
		});
		var listContainer = this.generateMainRender(createElement, this.navStructure);
		return createElement('div', { key: this.componentKey }, [stuctureStringInput, listContainer]);
	},

	methods: {
		//RENDER METHODS
		generateMainRender: function(createElement, collection) {
			var listItemCollection = [];

			for (var file in collection) {
				var hiddenCheck = this.generateHiddenCheck(createElement, file, collection);
				var hiddenLabel = createElement(
					'label',
					{
						on: {
							click: event => {
								event.stopPropagation();
							},
						},
					},
					[hiddenCheck, 'display']
				);
				var nameInput = this.generateNameInput(createElement, file, collection);
				var nameLabel = createElement('label', ['Name', nameInput]);
				var parametersInput = this.generateParametersInput(createElement, file, collection);
				var parametersLabel = createElement('label', ['Parameters', parametersInput]);
				var reorderTrigger = this.generateReorderTrigger(createElement, collection, file);
				var cancel = '';
				if (file === this.movingNode.name) {
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
					children = this.generateMainRender(createElement, collection[file].children);
				}

				//Todo replace parents and display name
				if (collection[file].parents) {
					var parents = ' - ' + collection[file].parents.join(',');
				} else {
					parents = '';
				}

				//var displayFileName = file.split('__')[1];
				var displayFileName = file;
				listItemCollection.push(
					this.generateListItem(
						createElement,
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
		generateHiddenCheck: function(createElement, index, collection) {
			return createElement('input', {
				attrs: {
					type: 'checkbox',
					checked: collection[index].hidden,
					id: collection[index].hidden,
				},
				on: {
					change: () => this.toggleNodeData(collection, index),
				},
				class: '_list-item-check',
			});
		},
		generateParametersInput: function(createElement, index, collection) {
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
						this.$emit('change', this.updateNodeData(collection, index, 'parameters', event.target.value));
					},
				},
				class: '_list-item-parameters',
			});
		},
		generateListItem: function(createElement, index, childrenArray, collection) {
			return createElement(
				'li',
				{
					on: {
						click: e => {
							e.stopPropagation();
							this.selectNode(collection[index], index);
						},
					},
					class: ['_list-item', { '-hidden': collection[index].hidden }],
				},
				childrenArray
			);
		},
		generateNameInput: function(createElement, index, collection) {
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
						this.$emit('change', this.updateNodeData(collection, index, 'name', event.target.value));
					},
				},
				class: '_list-item-name',
			});
		},
		generateReorderTrigger: function(createElement, collection, index) {
			return createElement('div', {
				on: {
					click: event => {
						event.stopPropagation();
						this.moveNode(collection[index], index);
					},
				},
				class: '_list-item-reorder-trigger',
			});
		},

		toggleKey: function() {
			this.componentKey = this.componentKey === 0 ? 1 : 0;
		},
		updateNodeData: function(collection, item, parameter, data) {
			var node = this.getSubNode(collection[item], item);
			node[parameter] = data;
			this.toggleKey();
		},

		toggleNodeData: function(collection, item) {
			var node = this.getSubNode(collection[item], item);
			node.hidden = !node.hidden;
			this.toggleKey();
		},
		selectNode(node, index) {
			if (!this.movingNode) {
				var newChild = {};
				newChild.name = index;
				newChild.node = node;
				this.movingNode = newChild;
			} else {
				this.changeNodeLevel(node, index);
				this.cancelSelection();
			}
		},
		cancelSelection: function() {
			this.movingNode = false;
		},
		getSubBranch: function(file) {
			if (file.parents.length === 0) {
				return this.navStructure;
			}
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
			return selectedDestinationFile;
		},
		getSubNode: function(file, index) {
			return this.getSubBranch(file)[index];
		},
		targetIsNotAlreadyParent: function(node, index) {
			if (node.parents && node.parents.length !== 0) {
				var selectedDestinationFile = this.getSubNode(node, index);
				return !selectedDestinationFile.children.hasOwnProperty(this.movingNode.name);
			} else {
				return !this.navStructure[index].children.hasOwnProperty(this.movingNode.name);
			}
		},
		canMoveAtDestination: function(node, index) {
			var targetIsNotAlreadyParent = this.targetIsNotAlreadyParent(node, index);
			var targetIsNotItself = this.getSubNode(node, index) !== this.movingNode.data;

			if (targetIsNotAlreadyParent && targetIsNotItself) {
				return true;
			} else {
				return false;
			}
		},
		changeNodeLevel: function(destinationNode, index, destinationIsRootLevel) {
			if (!this.canMoveAtDestination(destinationNode, index)) {
				return;
			}
			var selectedDestinationNode = this.getSubNode(destinationNode, index);

			if (destinationIsRootLevel) {
				var parents = [];
			} else {
				parents = destinationNode.parents;
				parents.push(index);
			}
			selectedDestinationNode.children[this.movingNode.name] = recursiveUpdateParentCollection(
				this.movingNode,
				parents
			);

			var selectedmovingNode = this.getSubBranch(this.movingNode.data, this.movingNode.name);
			delete selectedmovingNode[this.movingNode.name];
		},
		moveNode: function(destinationNode, index) {
			if (!this.movingNode) {
				return;
			}
			var newPosition = index.split('__')[0];
			var destinationBranch = this.getSubBranch(destinationNode);
			var originBranch = this.getSubBranch(this.movingNode.data);

			if (destinationBranch !== originBranch) {
				var isRootLevel = false;
				if (destinationBranch === this.navStructure) {
					isRootLevel = true;
				}
				this.changeNodeLevel(destinationNode, index, isRootLevel);
			}

			this.changeSubsequentNumbering(destinationBranch, originBranch, newPosition);

			this.cancelSelection();
		},
		changeSubsequentNumbering: function(destinationBranch, originBranch, newPosition) {
			var name = this.movingNode.name.split('__')[1];

			destinationBranch[newPosition + '__' + name] = this.movingNode.data;
			delete originBranch[this.movingNode.name];

			var pastMovedItem = false;
			for (var node in destinationBranch) {
				var nodePosition = node.split('__')[0];
				var nodeName = node.split('__')[1];

				if (nodePosition === newPosition && !pastMovedItem) {
					pastMovedItem = true;
				} else if (nodePosition === newPosition && pastMovedItem) {
					pastMovedItem = false;
				}

				if (nodePosition >= newPosition && pastMovedItem) {
					var offsetPosition = parseInt(nodePosition) + 1;
					destinationBranch[offsetPosition + '__' + nodeName] = destinationBranch[node];
					delete destinationBranch[node];
				} else {
					this.navStructure = sortobject(this.navStructure, sortNumberLowToHigh);
				}
			}
		},
	},
	computed: {
		navStructureString: function() {
			return JSON.stringify(this.navStructure);
		},
	},
	created: function() {
		this.navStructure = generateStructureFromFileList(this.views);
	},
};

module.exports = navPanelComponent;
