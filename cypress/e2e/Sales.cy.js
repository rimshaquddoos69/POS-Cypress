// describe('Sales', () => {
//      it('Sales', () => {

//   cy.visit('https://staging-seller.techbazaar.pk/login',{ timeout: 120000 })


//   cy.get('#validationCustomEmail')
//     .type(Cypress.env('email'))

//   cy.get('.w-100.btn.btn-primary').click()

//   cy.get('#validationCustomPassword')
//     .type(Cypress.env('password'))

//   cy.get('.w-100.btn.btn-primary').click()
//   cy.wait(5000),

//   cy.visit('https://staging-seller.techbazaar.pk/sales')
//     cy.get('.card_cardbody__pp7x-').should('be.visible')
//    // cy.get('.card_cardbody__pp7x-').first().click()


//     cy.get('.MinifiedCart_actionToOpen__J9qIG').should('be.visible').click()


//     cy.get('#sales-cart-misc-items').eq(0).click()
//     cy.get('input[placeholder="Title"]').type('Misc')
//      cy.get('input[placeholder="Sale Price"]').type('1000')

//     cy.get('.modal-footer')
//   .contains('button', 'Add Misc. Item')
//   .should('be.visible')
//   .click()


 
//     cy.get('input[name="paymentType"]').eq(3).check({ force: true })

//     cy.contains('button', 'Sell Item(s)').click()

    
//     cy.contains('Add opening balance for the selected location', { timeout: 3000 })
//       .then(($modal) => {
//         if ($modal.is(':visible')) {
//           cy.log('Opening balance modal appeared')

//           cy.get('input[placeholder="i.e 500"]').type('0')
//           cy.contains('button', 'Save').click()
//         } else {
//        cy.contains('button', 'Sell Item(s)').click()
//         }
//       })

   
//   })
// })
import LoginPage from '../Pages/login'
import SalesPage from '../Pages/sales'

describe('Sales Module', () => {

  const loginPage = new LoginPage()
  const salesPage = new SalesPage()

  beforeEach(() => {
    loginPage.login()
  })

  it('Complete sales flow', () => {

    salesPage.openSalesPage()
    salesPage.selectFirstCard()
    salesPage.openCart()
    salesPage.addMiscItem('Misc', '1', '1000')
    salesPage.selectPayment(3)
    salesPage.sellItems()
    salesPage.handleOpeningBalance()
    salesPage.openDailyCashReport()

    salesPage.getSaleValue().then(value => {
      cy.log(`Sale Value: ${value}`)
    })
  })
})
