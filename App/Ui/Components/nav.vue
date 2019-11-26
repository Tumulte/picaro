const axios = require('axios');

var navComponent = {
	data: function() {
		return {
			navStructure: {},
		};
	},
	render: function(createElement) {
		var mainRender = listData => {
			var listItem = [];

			for (var item in listData) {
				if (listData[item].hidden === true) {
					continue;
				}
				if (Object.keys(listData[item].children).length > 0) {
					var children = mainRender(listData[item].children);
				} else {
					children = '';
				}
				createElement(
					'a',
					{
						attrs: {
							href: listData[item].url,
						},
					},
					[listData[item].displayName]
				);
				listItem.push(createElement('li', [children]));
			}
			console.debug(listItem);
			return createElement('ul', [listItem]);
		};

		return createElement('div', [mainRender(this.navStructure)]);
	},
	method: {
		generateRecursiveList: function(listData, createElement) {
			var listItem = [];

			for (var item in listData) {
				listItem.push(createElement('li', this.navStructure[item].displayName));
			}
			var list = createElement('ul', listItem);
		},
	},
	created: function() {
		axios
			.get('/appapi/settings/')
			.then(response => {
				this.navStructure = JSON.parse(response.data.navStructureString);
			})
			.catch(error => {
				this.warningMessage = {
					type: 'error',
					text: 'Request failed.  Returned status of ' + error,
				};
			});
	},
};

module.exports = navComponent;
