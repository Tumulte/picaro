var formGenerator = require('../../formGenerator');
const axios = require('axios');

var linkComponent = {
	props: ['rfModel'],
	data: function() {
		return {
			form: '',
			template: '',
			tagStringCollection: '',
			tagCollection: [],
			warningMessage: [],
		};
	},
	template:
		'<div><v-runtime-template :template="template"/><warning-component :warningMessage="warningMessage"/>></div>',
	computed: {
		list: function() {
			return this.$store.getters.list;
		},
	},
	methods: {
		addTag: function(event) {
			if (!event.target.value) {
				return;
			}
			this.tagCollection.push(event.target.value);
			this.tagStringCollection = this.tagCollection.join();
		},
		removeTag: function(index) {
			this.tagCollection.splice(index, 1);

			this.tagStringCollection = this.tagCollection.join();
		},
		sendForm: function(event) {
			this.$nextTick(() => {
				var form = event.target;

				if (form.form) {
					form = form.form;
				}
				var formData = new FormData(form);

				axios
					.post(form.action, formData, {
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
	},
	mounted: function() {
		this.template = formGenerator({
			/* eslint-disable no-undef */
			app: appName.toLowerCase(),
			table: this.rfModel,
		});
	},
};
module.exports = linkComponent;
