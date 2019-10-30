var template = require('./tagsList.pug').default;

var tagsListComponent = {
	props: ['customTagName'],
	data: function() {
		return {
			warningMessage: [],
			tagIndexCollection: [],
			tagName: '',
		};
	},
	template: template,
	methods: {
		appendTagList: function(index) {
			if (!this.tagIndexCollection.includes(index)) {
				this.tagIndexCollection.push(index);
			}
		},

		makeTagList: function(url, index) {
			if (this.tagIndexCollection.length === 0) {
				return url + index;
			}
			if (this.tagIndexCollection.includes(index)) {
				return url + this.tagIndexCollection.join(',');
			} else {
				return url + index + ',' + this.tagIndexCollection.join(',');
			}
		},
	},
	computed: {
		tagCollection: function() {
			var tags = [];
			this.tagName = this.customTagName ? this.customTagName : 'tags';
			for (var item in this.$store.getters.list) {
				item = this.$store.getters.list[item][this.tagName];
				for (var tag in item) {
					if (!tags.includes(item)) {
						tags.push(item[tag]);
					}
				}
			}
			this.$store.commit('tagCollection', tags);
			return tags;
		},
	},
};
module.exports = tagsListComponent;
