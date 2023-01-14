/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

        //Get, should fill username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        //Get, should fill password
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

        ///checkbox aktive
        cy.get('input[type="checkbox"]').check().should('be.checked')
    });
});
