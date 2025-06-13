///<reference types="cypress" />

describe('Dashboard Tests', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should show dashboard metrics', () => {
  cy.contains('Total Revenue').should('be.visible');
  cy.contains('Net Profit').should('be.visible');
  cy.contains('Avg. Order Value').should('be.visible');
  cy.contains('Return Rate').should('be.visible');
});
});