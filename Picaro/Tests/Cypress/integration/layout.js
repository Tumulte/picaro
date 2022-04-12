describe("Testing layouts", function() {
  it("sets commom layout" +
    "", () => {
    cy.visit("/");
    cy.get('[data-test="common-layout-btn"]').click()
    cy.get('[data-test="add-common-row"]').click()
  })
})