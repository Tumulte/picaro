describe('Testing color generation', function() {
	function moveSlider(el, x) {
		cy.get(el)

			.trigger('mousedown', { which: 1 })
			.trigger('mousemove', { pageX: x })

			.trigger('mouseup', { force: true });
	}
	it('Does not do much!', function() {
		cy.visit('/');
		cy.get('#css-panel__toggle-label').click();
		moveSlider('.css-panel__container > :nth-child(1) > .css-panel__color-range', 30);
		cy.get('.css-panel__container > :nth-child(1) > .css-panel__color-range')
			.invoke('val', 10)
			.trigger('change');
		cy.get('#css-panel__color > :nth-child(3)').should('have.css', 'background-color', 'rgb(86, 159, 151)');
	});
});
