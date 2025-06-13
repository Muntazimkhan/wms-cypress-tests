///<reference types="cypress" />

describe('Testing Login Functionality', () => {
    beforeEach(() => {
        cy.visit("https://wms.bluomega.io/")
    });

    it('The user should login successfully with valid credentials', () => {
        cy.get('#email').should('be.visible').type('muntazim.suvastutech@gmail.com')
        cy.get('#password').should('be.visible').type('Info@2024')
        cy.get('button[type="submit"]').click()

        // Assertion: Check that URL has changed to dashboard
        cy.url().should('include', '/suvastutech-1/dashboard')
        cy.contains('Dashboard').should('be.visible')
    });

    it('The user should not login with invalid credentials', () => {
        cy.get('#email').should('be.visible').type('invaliduser@gmail.com')
        cy.get('#password').should('be.visible').type('wrongpassword123')
        cy.get('button[type="submit"]').click()

        // Assertion: Check that URL hasn't changed to dashboard
        cy.url().should('eq', 'https://wms.bluomega.io/')

        // Assertion: Check for error message
        cy.contains('These credentials do not match our records.').should('be.visible')
    });

});


