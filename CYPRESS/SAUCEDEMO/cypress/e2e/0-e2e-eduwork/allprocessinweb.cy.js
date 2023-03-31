/// <reference types="cypress" />

describe('Working with input', () => {
	it('visits to website', () => {
		cy.visit('http://www.saucedemo.com')
		cy.get('[id="user-name"]').clear().type("standard_user")
		cy.get('[id="password"]').clear().type("secret_sauce")
		cy.get('[name="login-button"]').click()
		cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
		cy.get('.shopping_cart_link').click()
		cy.get('[data-test="checkout"]').click()
		cy.get('[data-test="firstName"]').clear().type("Nurul")
		cy.get('[data-test="lastName"]').clear().type("Triwulandari")
		cy.get('[data-test="postalCode"]').clear().type("15810")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
	})
});
