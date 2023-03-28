it('Add a new user', () => {
    var user = {
        "name": "nurul",
        "job": "Test Engineer"
    }
    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.body).to.have.property('name', 'nurul'),
        expect(response.body).to.have.property('job', 'Test Engineer')
    })
});
