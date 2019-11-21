const axios = require('axios');

var configComponent = {
	data: function() {
		return {
			warningMessage: '',
			settings: {
				id: '',
				name: '',
				language: '',
				title: '',
				devMode: false,
				messageTimeOut: 10000,
			},
		};
	},
	methods: {
		sendAdminForm: function(event) {
			this.$nextTick(() => {
				var form = event.target;
				if (form.form) {
					form = form.form;
				}
				var formData = new FormData(form);

				axios
					.put(form.action, formData, {
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					})
					.then(() => {
						this.warningMessage = { type: 'success', text: 'Saved successfully' };
					})
					.catch(errors => {
						this.warningMessage = {
							type: 'error',
							text: 'Request failed.  Returned status of ' + errors,
						};
					});
			});
		},
		saveConfig: function(event, noValidation) {
			if (noValidation) {
				this.sendAdminForm(event);
			} else {
				this.warningMessage = {
					text: 'Are you sure you want save a new config ?',
					type: 'warning',
					callback: () => {
						this.sendAdminForm(event);
					},
				};
			}
		},
	},
	created: function() {
		axios
			.get('/appapi/settings/')
			.then(response => {
				this.settings = response.data;
				this.$store.commit('navStructure', JSON.parse(response.data.navStructureString));
			})
			.catch(error => {
				this.warningMessage = {
					type: 'error',
					text: 'Request failed.  Returned status of ' + error,
				};
			});
	},

	computed: {
		setName: function() {
			return this.$store.getters.styleSet.id;
		},
		navStructureString: function() {
			return JSON.stringify(this.$store.getters.navStructure);
		},
	},
};
module.exports = configComponent;
