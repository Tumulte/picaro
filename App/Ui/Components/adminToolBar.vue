var template = require('./adminToolBar.pug').default;

var adminToolBarComponent = {
	props: ['views'],
	/**
	 * @type {function}
	 */
	data: function () {
		return {
			panels: {
				css: false,
				admin: false,
				nav: false,
				styleSet: false
			}

		};
	},
	template: template,
	methods: {
		togglePanel(panel) {
			this.closeAllBut(panel)
			this.panels[panel] = !this.panels[panel]
		},
		closeAllBut(clickedPanel) {
			for (var panel in this.panels) {
				if (panel !== clickedPanel) {
					this.panels[panel] = false
				}
			}
		}
	},
};

module.exports = adminToolBarComponent;