describe('Delete User', () => {
    it('Successfuly delete user', () => {
        cy.request({
            method : 'DELETE', 
            url: 'https://gorest.co.in/public/v2/users',
            failOnStatusCode: false
            })
            .then((response) => {
                expect(response.status).to.be.gt(204)
            })
    });
    });