var template = require('./cssPanelRatio.pug').default;

var panelComponent = {
	template: template,

	/**
	 * @type {function}
	 */
	data: function () {
		return {
			textType: {
				h1: {
					text: 'header 1',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				h2: {
					text: 'header 2',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				h3: {
					text: 'header 3',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				h4: {
					text: 'header 4',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				h5: {
					text: 'header 5',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				h6: {
					text: 'header 6',
					marginTop: 0,
					marginBottom: 0,
					fontSize: 0,
					lineHeight: 0
				},
				p: {
					text: 'base text'

				},
				html: {
					lineHeight: 0,
					fontSize: 0
				}
			},
			selectedTag: ""
		};
	},
	methods: {
		makeHtml(text, tag) {
			return '<' + tag + '>' + text + '</' + tag + '>';
		},
		selectTag(tag) {
			if (this.selectedTag === tag) {
				this.selectedTag = '';
			}
			this.selectedTag = tag;
		},
		updateTextParams(property, selector, unit) {
			if (!this.selectorCollection[selector]) {
				this.$store.dispatch("addSelector", selector);
			}
			this.$store.dispatch("addProperty", {
				selector: selector,
				property: property,
				value: this.textType[selector][property] + (unit ? unit : 'rem')
			})
		}
	},
	computed: {
		selectorCollection() {
			return this.$store.getters.selectorCollection
		}

	}

};

module.exports = panelComponent;