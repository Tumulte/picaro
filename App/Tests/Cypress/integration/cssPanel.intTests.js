//@ts-nocheck
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

var appAdapter = new FileSync('./App/Data/appData.json');
var appDb = low(appAdapter);

var currentApplicationSettings = appDb
	.get('config')
	.find({ name: 'Demo' })
	.value();

describe('Testing styleset modifications', function() {
	it('switches styleset when clicking styleset', function() {});
	it('changes all colors when the dominant is changed', function() {
		cy.visit('/');
		cy.get('#rf-css-panel-toggle').click();
		cy.get(':nth-child(3) > ._container > :nth-child(3) > ._color-range')
			.invoke('val', 10)
			.trigger('input');
		cy.get('#_color > :nth-child(3)').should('have.css', 'background-color', 'rgb(159, 98, 86)');
		cy.get('#_color > :nth-child(4)').should('have.css', 'background-color', 'rgb(122, 180, 184)');
		cy.get('#_color > :nth-child(5)').should('have.css', 'background-color', 'rgb(106, 119, 64)');
	});
	it('generates proper color subcombinations', function() {
		cy.get('#_color > :nth-child(3) > ._container .sub-combination:nth-of-type(9)').should(
			'have.css',
			'background-color',
			'rgb(209, 154, 143)'
		);

		cy.get('#_color > :nth-child(4) .sub-combination:nth-of-type(1)').should(
			'have.css',
			'background-color',
			'rgb(57, 69, 70)'
		);
		cy.get('#_color > :nth-child(5) .sub-combination:nth-of-type(3)').should(
			'have.css',
			'background-color',
			'rgb(42, 45, 31)'
		);
	});
	it('changes colors on the selector panel', function() {
		cy.get('#_selector ._selector-box:first div div').should('have.css', 'background-color', 'rgb(106, 74, 68)');
		cy.get('#_selector li:nth-of-type(2) ._selector-box div div').should(
			'have.css',
			'background-color',
			'rgb(186, 224, 227)'
		);
		cy.get('#_selector li:nth-of-type(2) :nth-child(2) > div[contenteditable="true"] > div').should(
			'have.css',
			'background-color',
			'rgb(22, 23, 18)'
		);
	});
	it('changes the DOM when the dominant is changed', function() {
		cy.get('#rf-content-container').should('have.css', 'background-color', 'rgb(186, 224, 227)');
	});
	it('updates the input of the form with the new values', function() {
		cy.get('[name=dominant]').should('have.value', '#9F6256');
		cy.get('[name=colorSetParamString]').should(
			'have.value',
			'[{"hueVariation":174,"light":60},{"hueVariation":64,"light":36}]'
		);
	});
});
