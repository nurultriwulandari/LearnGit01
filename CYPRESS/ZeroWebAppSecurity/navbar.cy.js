/// <reference types="cypress" />

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h3 > a').click()
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
        cy.get('.btn').click()

        cy.get('h2').should('contain.text', 'Cash Accounts')

        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
  
        //open feedback
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#name').type('nurul triwulandari')
        cy.get('#email').type('nurul@gmail.com')
        cy.get('#subject').type('penilaian')
        cy.get('#comment').type('bla bla bla')
        cy.get('.btn-signin').click()

        //back to main page
        cy.get('.brand').click()
    });
});
