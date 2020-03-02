// https://docs.cypress.io/api/introduction/api.html

describe('In Automated test cases', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Weather Dashboard');
  });
});
