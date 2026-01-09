class RefundPage {

 
  salesHistoryUrl = '/sales/sales-history'
  tableResponsive = '.table-responsive'

  refundButton = 'button:contains("Refund")'
  fullyRefundedMsg = 'div.pb-5.pt-2.fs-4.fw-bold.text-center'

  itemsCheckbox = 'input.form-check-input[name="items"]'

  paymentMethodDropdown1 = '.Refund_paymentType__gFocs'
  paymentMethodValue = '.react-select-container__control'
 bankDropdown = '.Refund_paymentType__gFocs' 
  reactSelectOption = 'div.react-select-container__option'

  refundBtn = '.px-5.py-2.mt-2.btn.btn-primary'

 

  openSalesHistory() {
    cy.visit(this.salesHistoryUrl)
  }

  scrollTableToRight() {
    cy.get(this.tableResponsive).then($el => {
      $el[0].scrollLeft = $el[0].scrollWidth
    })
  }

  clickFirstRefund() {
    cy.get(this.refundButton).eq(0).click()
  }

  waitForRefundResult() {
  cy.get('body', { timeout: 15000 }).should($body => {
    expect(
      $body.text().includes('The Sales Order has been fully refunded.') ||
      $body.find('input.form-check-input[name="items"]').length > 0
    ).to.be.true
  })
}

isFullyRefunded() {
  return cy.get('body').then($body =>
    $body.text().includes('The Sales Order has been fully refunded.')
  )
}


  selectAllItems() {
    cy.get(this.itemsCheckbox).each($cb => {
      cy.wrap($cb).check({ force: true })
    })
  }

  selectTransferMethod() {
   cy.get(this.paymentMethodDropdown1).find(this.paymentMethodValue).click()


    cy.contains(this.reactSelectOption, 'Transfer').click()
  }

  selectSecondDropdownOption() {
cy.get(this.bankDropdown).eq(1).should('be.visible').click()
    cy.get(this.reactSelectOption).first().click()

  }

  clickRefundBtn() {
    cy.get(this.refundBtn).scrollIntoView().click()
  }

 completeRefundFlow() {
  this.scrollTableToRight()
  this.clickFirstRefund()

  
  this.waitForRefundResult()

  
  cy.get('body').then($body => {
    if ($body.text().includes('The Sales Order has been fully refunded.')) {
      cy.log('Sales order is fully refunded')
      return
    }

    this.selectAllItems()
    this.selectTransferMethod()
    this.selectSecondDropdownOption()
    this.clickRefundBtn()
  })
}

}

export default RefundPage
