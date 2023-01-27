/// <reference types="cypress" />


describe('searchbox test', function () {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    });

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}'),
        cy.get('h2').contains('Search Results:')
    });
});
