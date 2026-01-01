describe('Inventory', () => {

  // beforeEach(() => {
  //   // cy.session(
  //   //   'staging-login',
  //   //   () => {
  //   //     cy.login()
  //   //   },
  //   //   {
  //   //     cacheAcrossSpecs: true   
  //   //   }
  //   // )
    
  // })

  it('Add inventory successfully', () => {
    cy.visit('https://staging-seller.techbazaar.pk/login',{ timeout: 120000 })

  cy.get('#validationCustomEmail')
    .type(Cypress.env('email'))

  cy.get('.w-100.btn.btn-primary').click()

  cy.get('#validationCustomPassword')
    .type(Cypress.env('password'))

  cy.get('.w-100.btn.btn-primary').click()
  cy.wait(5000),

    cy.visit('https://staging-seller.techbazaar.pk/inventory')

    cy.get('#inventory-add-button').click()

    cy.get('#inventory-form-category').click()
    cy.contains('Tablet').click()

    cy.get('[placeholder="e.g. dell"]').type('iPhone 15 Pro')

    cy.get('#inventory-form-condition').click()
    cy.contains('New').click()

    cy.get('[placeholder="e.g. 12 Items"]').type('10')
    cy.get('[placeholder="e.g. 500"]').eq(0).type('10000')
    cy.get('[placeholder="e.g. 500"]').eq(1).type('10000')

cy.get('input[type="file"]').selectFile('cypress/fixtures/samsung_s20.png', { force: true });




    cy.contains('Save').click()
  })
})
