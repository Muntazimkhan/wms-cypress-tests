Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors here, e.g., 404s or certain warnings
    if (err.message.includes('specific error message')) {
        return false; // Prevent test from failing
    }
    return true; // Allow all other exceptions to fail the test
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('login', () => {
  cy.visit('https://wms.bluomega.io/');
  cy.get('#email').should('be.visible').type('muntazim.suvastutech@gmail.com');
  cy.get('#password').should('be.visible').type('Info@2024');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});