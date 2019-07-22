var timeOut = require('../../../rougeSettings.json').warningTimeout;
var parseMessage = require('../../utils').parseMessage;

var messagesComponent = {
	props: ['warningMessage'],
	template:
		'<ul class="component-message">' +
		'<li v-for="message in messageCollection" :class="message.type">' +
		'{{ message.text }}' +
		'</li>' +
		'<li v-for="(message, index) in messageCollectionConfirm" :class="message.type">' +
		'{{ message.text }}' +
		'<div><button v-on:click="confirmCallback(message.callback, index)">Continue</button><button v-on:click="cancelCallback(index)">Cancel</button></div>' +
		'</li>' +
		'</ul>',

	data: function() {
		return {
			messageCollection: [],
			messageCollectionConfirm: [],
		};
	},
	methods: {
		/**
		 *
		 * @param {function} callback The callback after the message is valid
		 * @param {string} index
		 */
		confirmCallback: function(callback, index) {
			this.messageCollectionConfirm.splice(index, 1);

			callback();
		},
		cancelCallback: function(index) {
			this.messageCollectionConfirm.splice(index, 1);
			return;
		},
	},

	watch: {
		messageCollection: function() {
			var self = this;
			setTimeout(function() {
				self.messageCollection.shift();
			}, timeOut);
		},

		warningMessage: function() {
			var warningMessage = parseMessage(this.warningMessage.text, this.warningMessage.textVariable);

			if (this.warningMessage.callback) {
				this.messageCollectionConfirm.push({
					type: '__' + this.warningMessage.type,
					text: warningMessage,
					callback: this.warningMessage.callback,
				});
			} else {
				this.messageCollection.push({ type: '__' + this.warningMessage.type, text: warningMessage });
			}
		},
	},
};
module.exports = {
	messagesComponent: messagesComponent,
};
