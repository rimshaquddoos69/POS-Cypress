class SalesPage {

  firstCard = '.card_cardbody__pp7x-'
  minifiedCart = '.MinifiedCart_actionToOpen__J9qIG'
  miscItemBtn = '#sales-cart-misc-items'

  titleInput = 'input[placeholder="Title"]'
  quantityInput = 'input[placeholder="quantity"]'
  salePriceInput = 'input[placeholder="Sale Price"]'
  addMiscBtn = '.modal-footer button'

  paymentType = 'input[name="paymentType"]'
  openingBalanceText = 'Add opening balance for the selected location'

  reportsMenu = '#tooltip-anchor-Reports'
  dailyCashReport = '#daily-cash-report'
  saleValue = '.container-fluid div.d-flex.align-items-center'

  openSalesPage() {
    cy.visit('/sales') 
  }

 selectFirstCard() {
 cy.get(this.firstCard,{ timeout: 15000 }).not('.active').first().click({ force: true })

}


  openCart() {
    cy.get(this.minifiedCart).click()
  }

  addMiscItem(title, qty, price) {
    cy.get(this.miscItemBtn).eq(0).click()
    cy.get(this.titleInput).type(title)
    cy.get(this.salePriceInput).type(price)
    cy.get(this.addMiscBtn)
      .contains('Add Misc. Item')
      .click()
  }

  selectPayment(index) {
    cy.get(this.paymentType).eq(index).check({ force: true })
  }

  sellItems() {
    cy.contains('button', 'Sell Item(s)').click()
  }

  handleOpeningBalance() {
    cy.contains(this.openingBalanceText, { timeout: 3000 }).then($modal => {
      if ($modal.is(':visible')) {
        cy.get('input[placeholder="i.e 500"]').type('0')
        cy.contains('button', 'Save').click()
      }
    })
  }

 
}

export default SalesPage
