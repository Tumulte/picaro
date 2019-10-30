const axios = require('axios');
var template = require('./list.pug').default;

var listComponent = {
	data: function() {
		return {
			warningMessage: [],
			appName: appName,
			filterCollection: false,
			edit: false,
			listItemData: {},
		};
	},
	template: template,
	props: {
		rfModel: '',
	},
	methods: {
		checkFilters: function(item) {
			if (!this.filterCollection) {
				return true;
			}
			for (var filter in this.filterCollection) {
				if (this.filterCollection[filter] === item[filter]) {
					return true;
				}
			}
			return false;
		},
		editItem: function(index) {
			if (this.edit !== index) {
				this.edit = index;
				this.listItemData = this.list[index];
			} else {
				this.edit = false;
				this.listItemData = {};
			}
		},
	},
	mounted: function() {
		axios
			.get('/api/' + this.appName.toLowerCase() + '/' + this.$props.rfModel)
			.then(response => {
				this.$store.commit('list', response.data);
			})
			.catch(error => {
				this.warningMessage.push(error);
			});
	},
	watch: {
		$route: function(to) {
			this.filterCollection = {};
			if (to.params.id) {
				this.filterCollection.id = to.params.id;
			} else if (to.params.type) {
				this.filterCollection[to.params.type] = this.tags[to.params.tag];
			}
		},
	},
	computed: {
		list: function() {
			return this.$store.getters.list;
		},
		tags: function() {
			return this.$store.getters.tags;
		},
	},
};

module.exports = listComponent;
