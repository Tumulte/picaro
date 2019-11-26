var sortobject = require('deep-sort-object');
var Vue = require('vue');
var sortNumberLowToHigh = function(a, b) {
	a = a.split('__')[0];
	b = b.split('__')[0];
	return a - b;
};
var recursiveUpdateParentCollection = function(destinationNode, movingNode, index) {
	movingNode.parents = JSON.parse(JSON.stringify(destinationNode.parents));
	if (index !== false) {
		movingNode.parents.push(index);
	}
	if (Object.keys(movingNode.children).length > 0) {
		for (var child in movingNode.children) {
			recursiveUpdateParentCollection(movingNode, movingNode.children[child], movingNode.name);
		}
	}
};
var generateStructureFromFileList = function(views) {
	var structure = {};

	var parsedFiles = JSON.parse(views);
	var indexOffset = 0;
	parsedFiles.forEach(function(e, index) {
		if (e.indexOf('.pug') !== -1) {
			var displayName = e.replace('.pug', '');
			var name = index - indexOffset + '__' + displayName;

			structure[name] = {
				hidden: false,
				children: {},
				parents: [],
				name: name,
				displayName: displayName,
				url: '/' + displayName,
				custom: false,
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
			movingNode: false,
			showInput: true,
			warningMessage: [],
		};
	},

	render: function(createElement) {
		var saveButton = createElement(
			'Button',
			{
				on: {
					click: () => {
						this.saveNavEntry();
					},
				},
			},
			'Save'
		);

		var addButton = createElement(
			'Button',
			{
				on: {
					click: () => {
						this.addNavEntry();
					},
				},
			},
			'Add'
		);

		var listContainer = this.generateMainRender(createElement, this.navStructure);
		return createElement('div', [saveButton, listContainer, addButton, saveButton]);
	},

	methods: {
		//RENDER METHODS
		generateMainRender: function(createElement, collection) {
			var listItemCollection = [];

			for (var node in collection) {
				var hiddenCheck = this.generateHiddenCheck(createElement, node, collection);
				var hiddenLabel = createElement(
					'label',
					{
						class: '_hidden-label',
						on: {
							click: event => {
								event.stopPropagation();
							},
						},
					},
					[hiddenCheck, 'display']
				);
				var nameInput = this.generateNameInput(createElement, node, collection);
				var nameLabel = createElement(
					'label',
					{
						class: '_name-label',
					},
					['Name', nameInput]
				);
				var urlInput = this.generateUrlInput(createElement, node, collection);
				var urlLabel = createElement(
					'label',
					{
						class: '_parameter-label',
					},
					['Url', urlInput]
				);
				var reorderTrigger = this.generateReorderTrigger(createElement, collection, node);
				var cancel = '';
				if (node === this.movingNode.name) {
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
				var remove = '';
				if (collection[node].custom) {
					remove = createElement(
						'span',
						{
							on: {
								click: e => {
									e.stopPropagation();
									this.removeCustom(collection[node]);
								},
							},
						},
						'(remove)'
					);
				}
				var children = '';
				if (Object.keys(collection[node].children).length > 0) {
					children = this.generateMainRender(createElement, collection[node].children);
				}

				//Todo replace parents and display name
				if (collection[node].parents) {
					var parents = ' - ' + collection[node].parents.join(',');
				} else {
					parents = '';
				}
				var displayNodeKey = node;

				var nodeKey = createElement(
					'div',
					{
						class: '_nav-item-key',
					},
					[displayNodeKey, cancel]
				);
				//var displayFileName = file.split('__')[1];
				listItemCollection.push(
					this.generateListItem(
						createElement,
						node,
						[reorderTrigger, nodeKey, parents, nameLabel, urlLabel, hiddenLabel, remove, children],
						collection
					)
				);
			}
			var warningMessages = createElement('warning-component', {
				props: {
					warningMessage: this.warningMessage,
				},
			});

			listItemCollection.push(warningMessages);
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
		generateUrlInput: function(createElement, index, collection) {
			return createElement('input', {
				attrs: {
					type: 'text',
				},
				domProps: {
					value: collection[index].url,
				},
				on: {
					click: event => {
						event.stopPropagation();
					},
					change: event => {
						this.$emit('change', this.updateNodeData(collection, index, 'url', event.target.value));
					},
				},
				class: '_list-item-url',
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
					value: collection[index].displayName,
				},
				on: {
					click: event => {
						event.stopPropagation();
					},
					change: event => {
						event.stopPropagation();
						this.$emit('change', this.updateNodeData(collection, index, 'displayName', event.target.value));
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
				class: ['_list-item-reorder-trigger', { '-show': !!this.movingNode }],
			});
		},
		updateNodeData: function(collection, item, parameter, data) {
			var node = this.getSubNode(collection[item]);
			Vue.set(node, parameter, data);
		},

		toggleNodeData: function(collection, item) {
			var node = this.getSubNode(collection[item]);
			Vue.set(node, 'hidden', !node.hidden);
		},
		selectNode(node, index) {
			if (!this.movingNode) {
				var newChild = {};
				newChild.name = index;
				newChild.data = node;
				this.movingNode = newChild;
			} else {
				this.changeNodeLevel(node, index);
				this.cancelSelection();
			}
		},
		cancelSelection: function() {
			this.movingNode = false;
		},
		getSubBranch: function(node) {
			if (node.parents.length === 0) {
				return this.navStructure;
			}
			var detachedParents = JSON.parse(JSON.stringify(node.parents));
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
		getSubNode: function(node) {
			var nodeBranch = this.getSubBranch(node);
			return nodeBranch[node.name];
		},
		targetIsNotAlreadyParent: function(node) {
			var selectedDestinationFile = this.getSubNode(node);
			return !selectedDestinationFile.children.hasOwnProperty(this.movingNode.name);
		},
		canMoveAtDestination: function(node, index) {
			var targetIsNotAlreadyParent = this.targetIsNotAlreadyParent(node, index);
			var targetIsNotItself = this.getSubNode(node) !== this.movingNode.data;
			if (targetIsNotAlreadyParent && targetIsNotItself) {
				return true;
			} else {
				return false;
			}
		},
		changeNodeLevel: function(destinationNode, index) {
			if (!this.canMoveAtDestination(destinationNode, index)) {
				return;
			}
			destinationNode = this.getSubNode(destinationNode);
			destinationNode.children[this.movingNode.name] = this.movingNode.data;
			var movingNodeBranch = this.getSubBranch(this.movingNode.data);
			delete movingNodeBranch[this.movingNode.name];

			if (destinationNode.parents.length < this.movingNode.data.parents.length) {
				index = false;
			}
			recursiveUpdateParentCollection(destinationNode, this.movingNode.data, index);
		},
		moveNode: function(destinationNode, index) {
			if (!this.movingNode) {
				return;
			}
			var newPosition = index.split('__')[0];
			var destinationBranch = this.getSubBranch(destinationNode);
			var originBranch = this.getSubBranch(this.movingNode.data);

			var name = this.movingNode.name.split('__')[1];
			var newKey = newPosition + '__' + name;
			Vue.set(destinationBranch, newKey, this.movingNode.data);
			destinationBranch[newKey].name = newKey;
			delete originBranch[this.movingNode.name];

			if (destinationBranch[index].parents.length < this.movingNode.data.parents.length) {
				var movementUpward = this.movingNode.data.parents.length - destinationBranch[index].parents.length;
				destinationBranch[newKey].parents.splice(-movementUpward, movementUpward);
				recursiveUpdateParentCollection(
					destinationBranch[newPosition + '__' + name],
					this.movingNode.data,
					false
				);
			}
			this.changeSubsequentNumbering(destinationBranch, newPosition);
			this.cancelSelection();
		},
		changeSubsequentNumbering: function(destinationBranch, newPosition) {
			var pastMovedItem = false;
			for (var nodeKey in destinationBranch) {
				var nodePosition = nodeKey.split('__')[0];
				var nodeName = nodeKey.split('__')[1];
				if (nodePosition === newPosition && !pastMovedItem) {
					pastMovedItem = true;
				} else if (nodePosition === newPosition && pastMovedItem) {
					pastMovedItem = false;
				}

				if (nodePosition >= newPosition && pastMovedItem) {
					var offsetPosition = parseInt(nodePosition) + 1;
					var newName = offsetPosition + '__' + nodeName;
					destinationBranch[newName] = destinationBranch[nodeKey];
					destinationBranch[newName].name = newName;

					delete destinationBranch[nodeKey];
				}
			}
			destinationBranch = sortobject(destinationBranch, sortNumberLowToHigh);
		},
		addNavEntry: function() {
			var keyArray = Object.keys(this.navStructure);
			var index = parseInt(keyArray[keyArray.length - 1].split('__')[0]) + 1;

			var name = index + '__custom';
			Vue.set(this.navStructure, name, {
				hidden: false,
				children: {},
				parents: [],
				name: name,
				displayName: '',
				url: '',
				custom: true,
			});
		},
		removeCustom: function(node) {
			this.warningMessage = {
				text: 'Are you sure you want to remove this navigation entry ?',
				type: 'warning',
				callback: () => {
					var nodeBranch = this.getSubBranch(node);
					Vue.delete(nodeBranch, node.name);
				},
			};
		},
		saveNavEntry: function() {
			this.warningMessage = {
				text: 'Are you sure you want to save that navigation ?',
				type: 'warning',
				callback: () => {
					document.getElementById('_admin-form-ext-submit').click();
				},
			};
		},
	},

	computed: {
		navStructure: function() {
			if (Object.keys(this.$store.getters.navStructure).length !== 0) {
				return this.$store.getters.navStructure;
			} else {
				return generateStructureFromFileList(this.$props.views);
			}
		},
	},
};

module.exports = navPanelComponent;
