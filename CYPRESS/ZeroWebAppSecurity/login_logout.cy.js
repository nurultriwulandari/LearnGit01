/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('.btn').click()
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('.btn').click()

        cy.get('h2').should('contain.text', 'Cash Accounts')

        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });
});
