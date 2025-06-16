///<reference types="cypress" />

describe('Rack and Shelves', () => {

    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.login();
    });

    it('Rack and shelves should be visible', () => {
        cy.contains('Racks & Shelves').should('be.visible');
    });

    it('List of racks should be visible', () => {
        cy.get('#racks > [href="#"] > p').click();
        cy.xpath("//p[normalize-space()='List Racks']").click();
        cy.contains('List of Racks').should('be.visible');
    })

    it('List of shelves should be visible', () => {
        cy.get('#racks > [href="#"] > p').click();
        cy.xpath("//p[normalize-space()='List Racks']").click();
        cy.contains('List of Racks').should('be.visible');
        cy.get(".btn.btn-block.p-5.text-white").click();
        // cy.url().should('include', '/suvastutech-1/shelves/shelve/2')
        cy.get('.m-0').should('be.visible')
    })

    it('Add New Rack', () =>{
    cy.get('#racks > [href="#"] > p').click();
    cy.xpath("//p[normalize-space()='Manage Racks']").click();
    cy.contains('Manage Racks').should('be.visible');
    cy.get("button[class='btn btn-primary addNewRack']").click();
    cy.get('#rack-2 > .card-header > .btn-block > .title')
    })

    it.only('Add New Virtual Rack', () =>{
    cy.get('#racks > [href="#"] > p').click();
    cy.xpath("//p[normalize-space()='Manage Racks']").click();
    cy.contains('Manage Racks').should('be.visible');
    cy.get(".btn.btn-info.addNewRack").click();
    cy.get('#rack-2 > .card-header > .btn-block > .title').should('be.visible');    
    })    
});

