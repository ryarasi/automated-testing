/// <reference types="Cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has link to home page', () => {
      cy.get('[routerlink="/"]').should('contain.text', 'Hoome');
  })

  it('has link to about page', () => {
      cy.get('[routerlink="/about"]').should('contain.text', 'About');
      cy.wait(5000);
  })
})
