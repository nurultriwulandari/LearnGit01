describe('Update User', () => {
it('Successfuly update user', () => {
    var user = {
        "id": 572894,
        "name": "Nurul Triwulandari",
        "email": "Nurul@Gmail.com",
        "gender": "female",
        "status": "active"
    }
    cy.request({
        method : 'PUT', 
        url: 'https://gorest.co.in/public/v2/users',
        failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.be.gt(201)
        })
});
});