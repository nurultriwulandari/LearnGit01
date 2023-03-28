describe('Get Body', () => {
    it('Verify the body', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
});
