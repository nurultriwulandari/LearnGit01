describe('Create New User', () => {
it('Successfully create new user', () => {
    var user = {
       "id": 572894,
        "name": "Nurul Triwulandari",
        "email": "Nurul@Gmail.com",
        "gender": "female",
        "status": "active"
    }
    cy.request({
    method : 'POST', 
    url: 'https://gorest.co.in/public/v2/users',
    failOnStatusCode: false
    })
    .then((response) => {
        expect(response.status).to.be.gt(201)
    })
});
});