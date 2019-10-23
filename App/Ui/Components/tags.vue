var template = require('./tags.pug').default;

var tagsComponent = {
	props: ['tagName'],
	data: function() {
		return {
			warningMessage: [],
			tagIndexCollection: [],
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
		list: function() {
			var tags = [];
			for (var item in this.$store.getters.list) {
				if (!tags.includes(this.$store.getters.list[item][this.tagName])) {
					tags.push(this.$store.getters.list[item][this.tagName]);
				}
			}
			this.$store.commit('tags', tags);
			return tags;
		},
	},
};
module.exports = tagsComponent;
