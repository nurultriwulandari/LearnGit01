/// <reference types="cypress" />

describe('Working with input', () => {
	it('visits to website', () => {
		cy.visit('https://demo.midtrans.com/')
        cy.get('.buy').click()
        cy.get('.cart-checkout-settings').click()
        cy.get('#main_setting_div_custom').click()
        cy.get('[data-reactid=".0.0.1.2.1.0.5.1.1.3"] > label').click()
        cy.get('#saveSetting').click()
        cy.get('.pull-right > .btn').click()
        cy.get(':nth-child(2) > [data-testid="list-item"]').click()
    });
})