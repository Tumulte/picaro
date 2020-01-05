describe('Testing styleset modifications', function () {
	it('switches styleset when clicking styleset', () => {
		//Todo
		cy.visit('/');
		cy.get('.__current-style-set').as('currentStyle');
	});
	it('changes all colors when the dominant is changed', function () {
		cy.get('#rf-css-panel-toggle').click();
		cy.get('.__current-style-set').click();

		cy.get('#_color ._slider-label:first').should('not.be.visible');
		cy.get('#_color ._container ._fold-color').each($el => {
			cy.wrap($el).click();
		});

		cy.get(':nth-child(3) > ._container > :nth-child(3) > ._color-range')
			.invoke('val', 10)
			.trigger('input');
		cy.get('#_color > :nth-child(3)').should('have.css', 'background-color', 'rgb(212, 160, 150)');
		cy.get('#_color > :nth-child(4)').should('have.css', 'background-color', 'rgb(110, 196, 180)');
		cy.get('#_color > :nth-child(5)').should('have.css', 'background-color', 'rgb(150, 210, 212)');
	});
	it('generates proper color subcombinations', function () {
		cy.get('#_color > :nth-child(3) > ._container .sub-combination:nth-of-type(9)').should(
			'have.css',
			'background-color',
			'rgb(240, 210, 204)'
		);

		cy.get('#_color > :nth-child(4) .sub-combination:nth-of-type(1)').should(
			'have.css',
			'background-color',
			'rgb(39, 62, 58)'
		);
		cy.get('#_color > :nth-child(5) .sub-combination:nth-of-type(3)').should(
			'have.css',
			'background-color',
			'rgb(69, 127, 129)'
		);
	});
	it('changes colors on the selector panel', function () {
		cy.get('#_selector ._selector-box:first div div').should('have.css', 'background-color', 'rgb(161, 93, 79)');
		cy.get('#_selector li:nth-of-type(2) ._selector-box div div').should(
			'have.css',
			'background-color',
			'rgb(192, 236, 228)'
		);
		cy.get('#_selector li:nth-of-type(2) :nth-child(2) > div[contenteditable="true"] > div').should(
			'have.css',
			'background-color',
			'rgb(58, 98, 100)'
		);
	});
	it('changes the DOM when the dominant is changed', function () {
		cy.get('.rf-content-container').should('have.css', 'background-color', 'rgb(192, 236, 228)');
	});
	it('updates the input of the form with the new values', function () {
		cy.get('[name=dominant]').should('have.value', '#D4A096');
		cy.get('[name=colorSetParamString]').should(
			'have.value',
			'[{"hueVariation":-201,"light":60},{"hueVariation":-188}]'
		);
	});
});