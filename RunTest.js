/// <reference types="cypress" />


import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I enter search page', () => {
   LoginPage.visitLoginPage()
})
When('I submit open', () => {
   LoginPage.fillSearchTerm ()
})
Then('I should see search result', () => {
   LoginPage.fillSearchResult ()
})
