import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
  cy.visit('https://staging-seller.techbazaar.pk/login')

  cy.get('#validationCustomEmail')
    .type(Cypress.env('email'))

  cy.get('.w-100.btn.btn-primary').click()

  cy.get('#validationCustomPassword')
    .type(Cypress.env('password'))

  cy.get('.w-100.btn.btn-primary').click()
  



})
