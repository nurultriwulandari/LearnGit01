it('validate user', () => {
    var User = {
        "name": "limber"
    }
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/').then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq('limber')
    })
});
