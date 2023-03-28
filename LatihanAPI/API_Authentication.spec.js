it('successfully logs in via API', function () {
  cy.visit("https://the-internet.herokuapp.com/basic_auth", {
    headers: {
      authorization: 'Basic YWRtaW46YWRtaW4='
    },
    failOnStatusCode: false
  }),
  it('successfully logs in programmatically', () => {
    cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`).as('getUserModels')
    cy.loginViaAPI()
    cy.wait('@getUserModels')
    cy.contains('h2', 'Models').should('be.visible')
  })
})
