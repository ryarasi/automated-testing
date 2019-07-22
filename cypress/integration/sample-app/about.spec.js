/// <reference types="Cypress" />

context('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('has an image', () => {
      cy.get('img');
  })

  it('has at least 2 links', () => {
    cy.get('body').find('a').should('have.length.be.at.least', 2);
  });

  it('has at least 2 of these elements: h1, h2, h3, h4 and h5', () => {
    let count = 0;
    cy.get('body').then(($body) => {
      if ($body.find('h1').length) {
        count += 1;
      }
    })
    cy.get('body').then(($body) => {
      if ($body.find('h2').length) {
        count += 1;
      }
    })
    cy.get('body').then(($body) => {
      if ($body.find('h3').length) {
        count += 1;
      }
    })
    cy.get('body').then(($body) => {
      if ($body.find('h4').length) {
        count += 1;
      }
    })
    cy.get('body').then(($body) => {
      if ($body.find('h5').length) {
        count += 1;
      }
      cy.expect(count).to.be.at.least(2);
    })                 
  })

  it('should contain at least 5 li elements', () => {
    cy.get('body').find('li').should('have.length.to.be.at.least', 5);
  })

  it('should contain a table with at least 3 tr elements', () => {
    cy.get('body').find('table').then(($table) => {
      cy.expect($table.find('tr').length).to.be.at.least(3);
    });
  })

})
