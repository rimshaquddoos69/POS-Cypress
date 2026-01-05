// describe('Customers', () => {
//   it('Add customer and download CSV', () => {
//       cy.visit('https://staging-seller.techbazaar.pk/login',{ timeout: 120000 })


//   cy.get('#validationCustomEmail')
//     .type(Cypress.env('email'))

//   cy.get('.w-100.btn.btn-primary').click()

//   cy.get('#validationCustomPassword')
//     .type(Cypress.env('password'))

//   cy.get('.w-100.btn.btn-primary').click()
//   cy.wait(5000),


//     cy.visit('https://staging-seller.techbazaar.pk/customer')

//     // Click Add Customer
//     cy.contains('button', 'Add Customer').first().click()

//     // Fill customer form
//     cy.get('input[placeholder="Full Name"]').type('duwer')
//     cy.get('#customer-add-customer-type select').select('Individual')
//     cy.get('input[placeholder="example@mail.com"]').type('duwer@gmail.com')
//     cy.get('input[placeholder="+92-3XX-XXXXXXX"]').type('126054433')

//     // Save
//     cy.contains('button', 'Save').click()

//     // Assert success message
//     cy.contains('h1, h2, h3', 'Customer Added Successfully').should('be.visible')

//     // Scroll & click download CSV
//     cy.contains('button', 'Download as CSV')
//       .scrollIntoView()
//       .click()

//   })
// })
import LoginPage from '../Pages/login'
import CustomerPage from '../Pages/customer'

describe('Customer Module', () => {

  const loginPage = new LoginPage()
  const customerPage = new CustomerPage()

  beforeEach(() => {
    loginPage.login()
  })

  it('Add new customer', () => {
    const email = `qa_${Date.now()}@test.com`

    customerPage.openCustomersPage()
    customerPage.clickAddCustomer()
    customerPage.fillCustomerForm(
      'Rimsha',
      'Quddoos',
      email,
      '03001234567'
    )
    customerPage.saveCustomer()
    customerPage.verifyCustomerAdded()
  })
})
