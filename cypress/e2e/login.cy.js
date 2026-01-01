describe('TechBazaar POS Login', () => {
  it('Login using staging creds', () => {
    cy.visit('baseUrl')

    cy.get('#validationCustomEmail').type(Cypress.env('stagingEmail'))
    cy.get('.w-100.btn.btn-primary').click()
    cy.get('#validationCustomPassword').type(Cypress.env('stagingPassword'))
    cy.get('.w-100.btn.btn-primary').click()
  })
})
