// https://docs.cypress.io/api/introduction/api.html

describe('In Automated test cases', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h4', 'Welcome to Weather Dashboard');
    cy.contains('.card-group').should('not.exist');
    cy.wait(1000);
    cy.get('#cityName')
      .type('Amsterdam');
    cy.wait(1000);
    cy.get('.btn').click();
    cy.wait(1000);
  });
});
