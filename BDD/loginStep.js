/// <reference types="cypress" />


import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I enter search page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})
When('I submit open', () => {
    cy.get('#searchTerm').type('online {enter}')
})
Then('I should see search result', () => {
    cy.get('h2').contains('Search Results:')
})
