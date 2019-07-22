/// <reference types="Cypress" />

context('Todos Page', () => {
  beforeEach(() => {
    cy.visit('/todos')
  })

  // it('can add new todo', () => {
  //   const newTodo = 'New Todo';
  //   cy.get('input').type(newTodo);
  //   cy.get('.add-todo > button').click();
  //   cy.get('ul > :last-child()').should('contain.text',newTodo);
  //   cy.get(':last-child() > .delete-button').click();
  // })

  // it('can delete a todo', () => {
  //   const newTodo = (new Date()).toString();
  //   cy.get('input').type(newTodo);
  //   cy.get('.add-todo > button').click();
  //   cy.get('ul > :last-child()').should('contain.text',newTodo);
  //   cy.get(':last-child() > .delete-button').click();
  //   cy.get('ul > :last-child()').should('not.contain.text',newTodo);
  // })

  // it('can check a todo and mark it as complete', () => {
  //   const newTodo = 'New Todo';
  //   cy.get('input').type(newTodo);
  //   cy.get('.add-todo > button').click();
  //   cy.get('ul > :last-child()').should('contain.text',newTodo);
  //   cy.get(':last-child() > input').then(($input) => {
  //     expect($input).not.to.be.checked;
  //   })
  //   cy.get(':last-child() > input').click();    
  //   cy.get(':last-child() > input').then(($input) => {
  //     expect($input).to.be.checked;
  //   })
  //   cy.get(':last-child() > .delete-button').click();      
  // })

  it('can edit a todo and save it', () => {
    const newTodo = 'New Todo';
    cy.get('input').type(newTodo);
    cy.get('.add-todo > button').click();
    cy.get('ul > :last-child()').should('contain.text',newTodo);
    cy.get(':last-child() > span').click();
    cy.get(':last-child() > .ng-untouched').clear().type('Updated Todo');
    cy.get('#save-button').click();
    cy.get('ul > :last-child()').should('contain.text','Updated Todo');
    cy.get(':last-child() > .delete-button').click();    
  })
})
